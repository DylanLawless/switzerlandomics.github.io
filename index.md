---
title: SwitzerlandOmics
layout: home
description: Empowering precision medicine
intro_image: "images/freepik_vectorjuice/scientists-lab-working-with-huge-dna-chain-glass-bulb-gene-therapy-gene-transfer-functioning-gene-concept-white-background-bright-vibrant-violet-isolated-illustration_335657-485.jpg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: false
---

<!-- # Switzerland Omics -->

<!-- ## Precise, actionable insights, quantified with the highest accuracy to drive informed decisions in precision medicine. -->

## Fill the final gap in omics analysis. Quantify both known and uncertain evidence into a single, evidence-based conclusion, empowering decision makers to act with full clarity and certainty.


<!-- Display the countdown timer in an element -->
<p id="demo"></p>

<script>
// Set the date we're counting down to
var countDownDate = new Date("Aug 01, 2025 07:00:00").getTime();

// Update the count down every 1 second
var x = setInterval(function() {

  // Get today's date and time
  var now = new Date().getTime();

  // Find the distance between now and the count down date
  var distance = countDownDate - now;

  // Time calculations for days, hours, minutes and seconds
  var days = Math.floor(distance / (1000 * 60 * 60 * 24));
  var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
  var seconds = Math.floor((distance % (1000 * 60)) / 1000);

  // Display the result in the element with id="demo"
  document.getElementById("demo").innerHTML = days + "d " + hours + "h "
  + minutes + "m " + seconds + "s ";

  // If the count down is finished, write some text 
  if (distance < 0) {
    clearInterval(x);
    document.getElementById("demo").innerHTML = "Quant II";
  }
}, 1000);
</script>

