
function myFunction(x) {
    x.classList.toggle("change");
}


$('.responsive').slick({
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    prevArrow: ".prev",
    nextArrow: ".next",
    autoplay:true,
  });

  
  const rangeSlider = document.getElementById('rangeSlider');
  const rangeValue = document.getElementById('rangeValue');
  
  // Function to update the slider's background fill
  function updateSliderBackground() {
    const value = rangeSlider.value;
    const percentage = (value / rangeSlider.max) * 100;
  
    // Update the slider value display
    rangeValue.textContent = value;
  
    // Update the background to show blue progress
    rangeSlider.style.background = `linear-gradient(to right, #403CFF ${percentage}%, white ${percentage}%)`;
  }
  
  // Initialize the background on page load
  updateSliderBackground();
  
  // Update the background and value dynamically
  rangeSlider.addEventListener('input', updateSliderBackground);
  






  
  function countUpAnimation(elementId, target, duration) {
    const element = document.getElementById(elementId);
    const start = 0;
    const increment = target / (duration / 16); // Approx. 60 frames per second

    let current = start;
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target; // Ensure it doesn't overshoot
        clearInterval(timer); // Stop the timer
      }
      element.textContent = Math.floor(current); // Update the display
    }, 16); // ~16ms per frame
  }


  
  const video = document.getElementById('video');
    const cover = document.getElementById('cover');

    // Hide the cover photo when the video starts playing
    video.addEventListener('play', () => {
      cover.style.display = 'none';
    });

    // Show the cover photo again if the video is reset to the start
    video.addEventListener('pause', () => {
      if (video.currentTime === 0) {
        cover.style.display = 'flex';
      }
    });