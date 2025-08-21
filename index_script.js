var transform_num = 90;

function rotate_image() {
    // Get the viewport dimensions
    const viewportWidth = window.innerWidth;
    const viewportHeight = window.innerHeight;
    // Get the image dimensions
    const imageWidth = image.offsetWidth;
    const imageHeight = image.offsetHeight;
    // Calculate random position within the viewport
    const randomLeft = Math.floor(Math.random() * (viewportWidth - imageWidth));
    const randomTop = Math.floor(Math.random() * (viewportHeight - imageHeight));
    // Update the image's position
    image.style.transform = "rotate(" + transform_num + "deg)";
    transform_num += 90;
    transform_num %= 360;
}

function pull_recent_projects() {
  return "truck";
}
