// Påskägg 1
document.getElementById('hidden-area').addEventListener('click', function() {
    document.body.style.backgroundColor = getRandomColor(); 
  });
  
  
  function getRandomColor() {
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    console.log(color);
    return color;
  }

// Påskägg 2

let secretCode = '11235813';
let typedCode = '';

document.addEventListener('keydown', function(event) {
    if (event.key >= '0' && event.key <= '9') {
        typedCode += event.key;

        if (typedCode.length > secretCode.length) {
            typedCode = typedCode.slice(1);
        }

        if (typedCode === secretCode) {
            showModal();
            typedCode = '';
        }
    }
});

function showModal() {
    document.getElementById('modal').style.display = 'block';
}

function closeModal() {
    document.getElementById('modal').style.display = 'none';
}