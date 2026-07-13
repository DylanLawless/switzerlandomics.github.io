(() => {
  "use strict";

  const config = window.LOI_CONFIG;

  if (!config) {
    throw new Error("Missing form configuration.");
  }

  const elements = {
    invitationStatus: document.getElementById("invitation-status"),
    formError: document.getElementById("form-error"),
    form: document.getElementById("interest-form"),
    fullName: document.getElementById("full-name"),
    professionalTitle: document.getElementById("professional-title"),
    organisation: document.getElementById("organisation"),
    email: document.getElementById("email"),
    toolName: document.getElementById("tool-name"),
    comment: document.getElementById("comment"),
    consentSubmission: document.getElementById("consent-submission"),
    consentPrivateSharing: document.getElementById("consent-private"),
    consentPublicDisplay: document.getElementById("consent-public"),
    signatureCanvas: document.getElementById("signature-canvas"),
    clearSignature: document.getElementById("clear-signature"),
    submitButton: document.getElementById("submit-button"),
    turnstileContainer: document.getElementById("turnstile-container"),
    successSection: document.getElementById("success-section"),
    successMessage: document.getElementById("success-message"),
    referenceLine: document.getElementById("reference-line"),
    submissionReference: document.getElementById("submission-reference"),
    downloadJson: document.getElementById("download-json"),
    payloadDetails: document.getElementById("payload-details"),
    payloadPreview: document.getElementById("payload-preview")
  };

  let invitation = null;
  let invitationToken = null;
  let signatureHasInk = false;
  let signatureStrokes = [];
  let isSubmitting = false;
  let latestDemoPayload = null;
  let turnstileWidgetId = null;

  initialise().catch((error) => {
    showError(error instanceof Error ? error.message : "Unable to initialise the form.");
    elements.form.hidden = true;
  });

  async function initialise() {
    initialiseSignatureCanvas();
    bindEvents();
    await initialiseTurnstile();
    await loadInvitation();
  }

  function bindEvents() {
    elements.form.addEventListener("submit", handleSubmit);
    elements.clearSignature.addEventListener("click", clearSignatureCanvas);
    elements.downloadJson.addEventListener("click", downloadDemoPayload);
  }

  async function loadInvitation() {
    invitationToken = new URLSearchParams(window.location.search).get("token");

    if (config.mode === "demo") {
      invitation = { ...config.demoInvitation };
      populateInvitation(invitation);
      elements.invitationStatus.textContent = "Demo mode is active. No data will leave this browser.";
      return;
    }

    if (!invitationToken) {
      throw new Error("This invitation link is incomplete.");
    }

    const response = await fetch(
      `${normaliseApiBaseUrl(config.apiBaseUrl)}/api/interest/invitation?token=${encodeURIComponent(invitationToken)}`,
      { method: "GET", headers: { Accept: "application/json" } }
    );

    const data = await readJsonResponse(response);
    if (!response.ok || !data.valid) {
      throw new Error(data.error || "This invitation is invalid or has expired.");
    }

    if (data.statementVersion !== config.statementVersion) {
      throw new Error("This invitation uses a different statement version.");
    }

    invitation = data;
    populateInvitation(invitation);
    elements.invitationStatus.textContent = `Invitation valid until ${formatDate(invitation.expiresAt)}.`;
  }

  function populateInvitation(data) {
    elements.fullName.value = data.recipientName || "";
    elements.organisation.value = data.organisation || "";
    elements.email.value = data.email || "";
    elements.toolName.value = data.toolName || "";

    if (config.mode !== "demo") {
      elements.email.readOnly = true;
    }
  }

function initialiseSignatureCanvas() {
    const canvas = elements.signatureCanvas;
    const context = canvas.getContext("2d", { alpha: true });

    if (!context) {
      throw new Error("This browser cannot use the signature canvas.");
    }

    canvas.style.touchAction = "none";

    let drawing = false;
    let previousPoint = null;
    let previousMidpoint = null;
    let previousWidth = 2.2;
    let hasMoved = false;
    let currentStroke = null;

    function configureCanvas() {
      const rectangle = canvas.getBoundingClientRect();
      const pixelRatio = Math.min(window.devicePixelRatio || 1, 3);

      canvas.width = Math.max(1, Math.round(rectangle.width * pixelRatio));
      canvas.height = Math.max(1, Math.round(rectangle.height * pixelRatio));

      context.setTransform(pixelRatio, 0, 0, pixelRatio, 0, 0);
      context.lineCap = "round";
      context.lineJoin = "round";
      context.strokeStyle = "#111111";
      context.imageSmoothingEnabled = true;
      context.imageSmoothingQuality = "high";
    }

    function addVectorPoint(point) {
      if (!currentStroke) {
        return;
      }

      const rectangle = canvas.getBoundingClientRect();
      if (!rectangle.width || !rectangle.height) {
        return;
      }

      const normalisedPoint = [
        clamp(point.x / rectangle.width, 0, 1),
        clamp(point.y / rectangle.height, 0, 1)
      ];

      const previous = currentStroke[currentStroke.length - 1];
      if (
        previous &&
        Math.hypot(
          normalisedPoint[0] - previous[0],
          normalisedPoint[1] - previous[1]
        ) < 0.0007
      ) {
        return;
      }

      if (getSignaturePointCount() >= 5000) {
        return;
      }

      currentStroke.push(normalisedPoint);
    }

    requestAnimationFrame(configureCanvas);

    canvas.addEventListener("pointerdown", (event) => {
      const point = getCanvasPoint(event, canvas);

      drawing = true;
      hasMoved = false;
      previousPoint = point;
      previousMidpoint = point;
      previousWidth = getStrokeWidth(event, null, point);
      currentStroke = [];
      signatureStrokes.push(currentStroke);
      addVectorPoint(point);

      canvas.setPointerCapture(event.pointerId);
      event.preventDefault();
    });

    canvas.addEventListener("pointermove", (event) => {
      if (!drawing || !previousPoint || !previousMidpoint) {
        return;
      }

      const pointerEvents =
        typeof event.getCoalescedEvents === "function"
          ? event.getCoalescedEvents()
          : [event];

      for (const pointerEvent of pointerEvents) {
        const rawPoint = getCanvasPoint(pointerEvent, canvas);

        const point = {
          x: previousPoint.x + (rawPoint.x - previousPoint.x) * 0.58,
          y: previousPoint.y + (rawPoint.y - previousPoint.y) * 0.58
        };

        const midpoint = {
          x: (previousPoint.x + point.x) / 2,
          y: (previousPoint.y + point.y) / 2
        };

        const targetWidth = getStrokeWidth(
          pointerEvent,
          previousPoint,
          point
        );

        const currentWidth =
          previousWidth * 0.78 +
          targetWidth * 0.22;

        context.beginPath();
        context.moveTo(
          previousMidpoint.x,
          previousMidpoint.y
        );
        context.quadraticCurveTo(
          previousPoint.x,
          previousPoint.y,
          midpoint.x,
          midpoint.y
        );
        context.lineWidth = (previousWidth + currentWidth) / 2;
        context.stroke();

        previousPoint = point;
        previousMidpoint = midpoint;
        previousWidth = currentWidth;
        signatureHasInk = true;
        hasMoved = true;
        addVectorPoint(point);
      }

      event.preventDefault();
    });

    const stopDrawing = (event) => {
      if (!drawing) {
        return;
      }

      if (previousPoint && previousMidpoint && hasMoved) {
        context.beginPath();
        context.moveTo(
          previousMidpoint.x,
          previousMidpoint.y
        );
        context.lineTo(
          previousPoint.x,
          previousPoint.y
        );
        context.lineWidth = previousWidth;
        context.stroke();
        addVectorPoint(previousPoint);
      }

      if (previousPoint && !hasMoved) {
        context.beginPath();
        context.arc(
          previousPoint.x,
          previousPoint.y,
          previousWidth / 2,
          0,
          Math.PI * 2
        );
        context.fillStyle = "#111111";
        context.fill();
        signatureHasInk = true;
        addVectorPoint(previousPoint);
      }

      drawing = false;
      previousPoint = null;
      previousMidpoint = null;
      currentStroke = null;
      hasMoved = false;

      if (canvas.hasPointerCapture(event.pointerId)) {
        canvas.releasePointerCapture(event.pointerId);
      }

      event.preventDefault();
    };

    canvas.addEventListener("pointerup", stopDrawing);
    canvas.addEventListener("pointercancel", stopDrawing);

    canvas.addEventListener("pointerleave", (event) => {
      if (drawing && event.buttons === 0) {
        stopDrawing(event);
      }
    });

    window.addEventListener("resize", () => {
      if (!signatureHasInk) {
        configureCanvas();
      }
    });
  }

  function getCanvasPoint(event, canvas) {
    const rectangle = canvas.getBoundingClientRect();

    return {
      x: event.clientX - rectangle.left,
      y: event.clientY - rectangle.top
    };
  }

  function getStrokeWidth(event, previousPoint, point) {
    if (
      event.pointerType === "pen" &&
      Number.isFinite(event.pressure) &&
      event.pressure > 0
    ) {
      return 1.25 + event.pressure * 2.5;
    }

    if (!previousPoint) {
      return 2.2;
    }

    const distance = Math.hypot(
      point.x - previousPoint.x,
      point.y - previousPoint.y
    );

    return Math.max(
      1.45,
      Math.min(2.9, 2.9 - distance * 0.055)
    );
  }

  function getSignaturePointCount() {
    return signatureStrokes.reduce(
      (total, stroke) => total + stroke.length,
      0
    );
  }

  function serialiseSignatureStrokes() {
    return signatureStrokes
      .filter((stroke) => stroke.length > 0)
      .map((stroke) =>
        stroke.map(([x, y]) => [
          Number(x.toFixed(5)),
          Number(y.toFixed(5))
        ])
      );
  }

  function clamp(value, minimum, maximum) {
    return Math.min(Math.max(value, minimum), maximum);
  }

  function clearSignatureCanvas() {
    const canvas = elements.signatureCanvas;
    const context = canvas.getContext("2d");

    context.save();
    context.setTransform(1, 0, 0, 1, 0, 0);
    context.clearRect(0, 0, canvas.width, canvas.height);
    context.restore();

    signatureHasInk = false;
    signatureStrokes = [];
  }

  async function handleSubmit(event) {
    event.preventDefault();
    clearError();

    if (isSubmitting) {
      return;
    }

    const validationError = validateForm();
    if (validationError) {
      showError(validationError);
      return;
    }

    const payload = buildPayload();
    isSubmitting = true;
    elements.submitButton.disabled = true;
    elements.submitButton.textContent = "Submitting...";

    try {
      if (config.mode === "demo") {
        completeDemoSubmission(payload);
        return;
      }

      const response = await fetch(`${normaliseApiBaseUrl(config.apiBaseUrl)}/api/interest/submit`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify(payload)
      });

      const data = await readJsonResponse(response);
      if (!response.ok || !data.success) {
        throw new Error(data.error || "The statement could not be submitted.");
      }

      elements.form.hidden = true;
      elements.successSection.hidden = false;
      if (data.emailStatus === "sent") {
        elements.successMessage.textContent = "Your statement has been recorded and the signed PDF has been sent by email.";
      } else if (data.emailStatus === "failed") {
        elements.successMessage.textContent = "Your statement has been recorded, but email delivery failed. Switzerland Omics can resend the confirmation from the stored record.";
      } else {
        elements.successMessage.textContent = "Your statement has been recorded. Email delivery is not configured for this environment.";
      }
      elements.submissionReference.textContent = data.reference;
      elements.referenceLine.hidden = false;
      elements.successSection.scrollIntoView({ behavior: "smooth", block: "start" });
    } catch (error) {
      showError(error instanceof Error ? error.message : "The statement could not be submitted.");
      isSubmitting = false;
      elements.submitButton.disabled = false;
      elements.submitButton.textContent = "Submit statement";
      resetTurnstile();
    }
  }

  function validateForm() {
    if (!elements.form.checkValidity()) {
      elements.form.reportValidity();
      return "Please complete all required fields.";
    }

    if (!signatureHasInk) {
      return "Please draw your signature.";
    }

    if (!elements.consentSubmission.checked) {
      return "The required confirmation must be selected.";
    }

    if (config.turnstileSiteKey && !getTurnstileToken()) {
      return "Please complete the anti-spam check.";
    }

    return null;
  }

  function buildPayload() {
    const fullName = elements.fullName.value.trim();

    return {
      token: config.mode === "demo" ? "demo-token" : invitationToken,
      fullName,
      professionalTitle: elements.professionalTitle.value.trim(),
      organisation: elements.organisation.value.trim(),
      email: elements.email.value.trim().toLowerCase(),
      toolName: elements.toolName.value.trim(),
      comment: elements.comment.value.trim(),
      typedSignature: fullName,
      signatureDataUrl: elements.signatureCanvas.toDataURL("image/png"),
      signatureStrokes: serialiseSignatureStrokes(),
      consentSubmission: elements.consentSubmission.checked,
      consentPrivateSharing: elements.consentPrivateSharing.checked,
      consentPublicDisplay: elements.consentPublicDisplay.checked,
      statementVersion: config.statementVersion,
      turnstileToken: getTurnstileToken(),
      submittedAtClient: new Date().toISOString()
    };
  }

  function completeDemoSubmission(payload) {
    latestDemoPayload = payload;
    const previewPayload = {
      ...payload,
      signatureDataUrl: `[PNG data URL omitted from preview, ${payload.signatureDataUrl.length} characters]`
    };

    elements.form.hidden = true;
    elements.successSection.hidden = false;
    elements.successMessage.textContent = "The demo record was created in this browser. It has not been transmitted or stored remotely.";
    elements.downloadJson.hidden = false;
    elements.payloadDetails.hidden = false;
    elements.payloadPreview.textContent = JSON.stringify(previewPayload, null, 2);
    elements.successSection.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  function downloadDemoPayload() {
    if (!latestDemoPayload) {
      return;
    }

    const blob = new Blob([JSON.stringify(latestDemoPayload, null, 2)], {
      type: "application/json"
    });
    const url = URL.createObjectURL(blob);
    const anchor = document.createElement("a");
    anchor.href = url;
    anchor.download = `switzerland-omics-letter-demo-${Date.now()}.json`;
    document.body.appendChild(anchor);
    anchor.click();
    anchor.remove();
    URL.revokeObjectURL(url);
  }

  async function initialiseTurnstile() {
    if (!config.turnstileSiteKey) {
      return;
    }

    elements.turnstileContainer.hidden = false;
    await loadScript("https://challenges.cloudflare.com/turnstile/v0/api.js?render=explicit");
    turnstileWidgetId = window.turnstile.render(elements.turnstileContainer, {
      sitekey: config.turnstileSiteKey
    });
  }

  function getTurnstileToken() {
    if (!config.turnstileSiteKey || turnstileWidgetId === null || !window.turnstile) {
      return "";
    }
    return window.turnstile.getResponse(turnstileWidgetId);
  }

  function resetTurnstile() {
    if (turnstileWidgetId !== null && window.turnstile) {
      window.turnstile.reset(turnstileWidgetId);
    }
  }

  function loadScript(source) {
    return new Promise((resolve, reject) => {
      const script = document.createElement("script");
      script.src = source;
      script.async = true;
      script.defer = true;
      script.addEventListener("load", resolve, { once: true });
      script.addEventListener("error", () => reject(new Error("Unable to load the anti-spam check.")), { once: true });
      document.head.appendChild(script);
    });
  }

  function normaliseApiBaseUrl(value) {
    return String(value || "").replace(/\/$/, "");
  }

  function formatDate(value) {
    const date = new Date(value);
    if (Number.isNaN(date.getTime())) {
      return value;
    }
    return new Intl.DateTimeFormat("en-GB", {
      dateStyle: "long",
      timeStyle: "short"
    }).format(date);
  }

  async function readJsonResponse(response) {
    const text = await response.text();
    try {
      return text ? JSON.parse(text) : {};
    } catch {
      return { error: "The server returned an unreadable response." };
    }
  }

  function showError(message) {
    elements.formError.textContent = message;
    elements.formError.hidden = false;
    elements.formError.scrollIntoView({ behavior: "smooth", block: "center" });
  }

  function clearError() {
    elements.formError.textContent = "";
    elements.formError.hidden = true;
  }
})();

