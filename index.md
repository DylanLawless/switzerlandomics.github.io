---
title: SwitzerlandOmics
layout: home
description: Empowering precision medicine
intro_image: "images/2025_E_L_Laurent_etherial_precision/1EBA3CDE-7455-49FD-8686-017F290965E3_wide.jpeg"
intro_image_absolute: true
intro_image_hide_on_mobile: true
show_call_box: false
---

<!-- intro_image: "images/freepik_vectorjuice/scientists-lab-working-with-huge-dna-chain-glass-bulb-gene-therapy-gene-transfer-functioning-gene-concept-white-background-bright-vibrant-violet-isolated-illustration_335657-485.jpg" -->
<!-- # Switzerland Omics -->

<!-- ## Omics data is full of complex signals. We quantify the unimaginable into clear, actionable insights. Our models deliver calibrated answers you can trust - not guesses you have to interpret. -->

# Quantified genomics
## We turn variant uncertainty into structured, analysis-ready and AI-ready outputs. Every result is grounded in rigorous statistics and built for real-world use.


<!-- Display the countdown timer in an element -->
<!-- <p id="demo"></p> -->

<!-- <script> -->
<!-- // Set the date we're counting down to -->
<!-- var countDownDate = new Date("Aug 01, 2025 07:00:00").getTime(); -->

<!-- // Update the count down every 1 second -->
<!-- var x = setInterval(function() { -->

<!--   // Get today's date and time -->
<!--   var now = new Date().getTime(); -->

<!--   // Find the distance between now and the count down date -->
<!--   var distance = countDownDate - now; -->

<!--   // Time calculations for days, hours, minutes and seconds -->
<!--   var days = Math.floor(distance / (1000 * 60 * 60 * 24)); -->
<!--   var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)); -->
<!--   var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)); -->
<!--   var seconds = Math.floor((distance % (1000 * 60)) / 1000); -->

<!--   // Display the result in the element with id="demo" -->
<!--   document.getElementById("demo").innerHTML = days + "d " + hours + "h " -->
<!--   + minutes + "m " + seconds + "s "; -->

<!--   // If the count down is finished, write some text --> 
<!--   if (distance < 0) { -->
<!--     clearInterval(x); -->
<!--     document.getElementById("demo").innerHTML = "Quant II"; -->
<!--   } -->
<!-- }, 1000); -->
<!-- </script> -->

<p id="demo" style="min-width: 140px;"></p>

<script>
  var countDownDate = new Date("Aug 01, 2025 07:00:00").getTime();

  function updateCountdown() {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    var output = days + "d " + hours + "h " + minutes + "m " + seconds + "s";

    document.getElementById("demo").innerHTML = distance < 0 ? "Quant II" : output;
  }

  updateCountdown(); // initial render
  var x = setInterval(updateCountdown, 1000);
</script>


<div class="submission-message">
<style>
.button-link {
  display: inline-block;
  padding: 12px 20px;
  background-color: #6A64F1;
  color: #fff;
  text-decoration: none;
  border-radius: 5px;
  font-size: 16px;
}
.button-link:hover {
  background-color: #5a54d1;
}
</style>

<p><a href="/assets/submission_mailing_list" class="button-link">Notify me »</a></p>
