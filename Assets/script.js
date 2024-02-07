// press the button to take a photo.

document.getElementById('openCameraBtn').addEventListener('click', () => {
    const light = document.getElementById('circle');
    light.classList.remove('flash-animation');
    setTimeout(() => {
      light.classList.add('flash-animation');
    }, 500);
  
    const eject = document.getElementById('polaroid-camera');
    eject.classList.remove('eject-photo');
    setTimeout(() => {
      eject.classList.add('eject-photo');
    }, 500);
  });
  
  $(document).ready(function () {
    $('.container').mouseenter(function () {
      $('.card').stop().animate({
        top: '-90px'
      }, 'slow');
    }).mouseleave(function () {
      $('.card').stop().animate({
        top: 0
      }, 'slow');
    });
  });
  
  document.getElementById('openCameraBtn').addEventListener('click', () => {
    const input = document.createElement('input');
    input.type = 'file';
    input.accept = 'image/*';
  
    // Trigger a click event on the input element to open the camera
    input.click();
  
    // Listen for the change event to handle the selected file
    input.addEventListener('change', (event) => {
      const selectedFile = event.target.files[0];
  
      // You can now handle the selected file, for example, display it
      if (selectedFile) {
        const reader = new FileReader();
  
        reader.onload = (e) => {
          const image = new Image();
          image.src = e.target.result;
  
          // Display the image on the page or perform any other actions
          document.body.appendChild(image);
        };
  
        reader.readAsDataURL(selectedFile);
      }
    });
  });
  
