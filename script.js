// Påskägg 1: Byta bakgrund när användaren klickar på en "udda" del av webbplatsen
document.getElementById('hidden-area').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor(); // Slumpmässig bakgrundsfärg
  });
  
  // Funktion för att skapa en slumpmässig färg
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }