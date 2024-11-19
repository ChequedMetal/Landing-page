document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("download-button");
  
    // Detectar dispositivo Android
    const isAndroid = /Android/i.test(navigator.userAgent);
  
    if (isAndroid) {
      downloadButton.style.display = "block";
      downloadButton.textContent = "Descargar para Android";
      downloadButton.onclick = () => {
        window.location.href = "https://drive.google.com/uc?id=1rwf0pbsSIoVogU5jLrXrD1YnvAOhaK_O&export=download";
      };
    }
  });
  