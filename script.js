document.addEventListener("DOMContentLoaded", () => {
    const downloadButton = document.getElementById("download-button");
  
    // Detectar dispositivo Android
    const isAndroid = /Android/i.test(navigator.userAgent);
  
    if (isAndroid) {
      downloadButton.style.display = "block";
      downloadButton.textContent = "Descargar para Android";
      downloadButton.onclick = () => {
        window.location.href = "https://www.mediafire.com/file/knmhm1uh19fcu65/app-release.apk/file"; // Cambia el enlace por el de tu APK
      };
    }
  });
  