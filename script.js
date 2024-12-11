let currentOrientation = screen.orientation.type;

function handleOrientation() {
  let newOrientation = screen.orientation.type;

  if (
    currentOrientation.startsWith('portrait') &&
    newOrientation.startsWith('landscape')
  ) {
    location.reload();
  } else if (
    currentOrientation.startsWith('landscape') &&
    newOrientation.startsWith('portrait')
  ) {
    location.reload();
  }
}

screen.orientation.addEventListener('change', handleOrientation);
