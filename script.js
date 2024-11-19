document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("download-button");
  
    // Detectar dispositivo Android
    const isAndroid = /Android/i.test(navigator.userAgent);
  
    if (isAndroid) {
      downloadButton.style.display = "block";
      downloadButton.textContent = "Descargar para Android";
      downloadButton.onclick = () => {
        window.location.href = "./apk/app-release.apk";
      };
    }
  });
  