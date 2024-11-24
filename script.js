document.addEventListener("DOMContentLoaded", () => {
  const downloadButton = document.getElementById("download-button");

  // Detectar dispositivo Android
  const isAndroid = /Android/i.test(navigator.userAgent);

  if (isAndroid) {
    downloadButton.style.display = "inline-block";
    downloadButton.href = "https://drive.google.com/uc?id=1rCisPAlZ-fGJyE_771gHtEPMuTIH-PGQ&export=download"; 
  } else {
    downloadButton.style.display = "none";
  }
});
