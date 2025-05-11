document.addEventListener('DOMContentLoaded', () => {
    const title = document.getElementById('title');
    const description = document.getElementById('description');
    const container = document.getElementById('container');
  
    document.getElementById('changeTextBtn').addEventListener('click', () => {
      description.textContent = 'The text has been changed!';
    });
  
    document.getElementById('changeStyleBtn').addEventListener('click', () => {
      title.style.color = 'darkgreen';
      title.style.fontSize = '2.5rem';
      document.body.style.backgroundColor = '#f0f8ff';
    });
  
    document.getElementById('addElementBtn').addEventListener('click', () => {
      const newDiv = document.createElement('div');
      newDiv.textContent = 'New element added!';
      newDiv.classList.add('added-element');
      container.appendChild(newDiv);
    });
  
    document.getElementById('removeElementBtn').addEventListener('click', () => {
      const lastChild = container.lastElementChild;
      if (lastChild) {
        container.removeChild(lastChild);
      }
    });
  });
  