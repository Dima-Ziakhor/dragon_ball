const login = document.getElementById('login');
const pass = document.getElementById('password');
const submit = document.getElementById('submit');

submit.addEventListener('click', (event) => {
  event.preventDefault();

  if (login.value.toLowerCase() === 'beer' && pass.value.toLowerCase() === 'beer') {
    const link = document.createElement('a');

    link.href = '/index.html';
    link.target = '_blank';

    link.style.position = 'absolute';
    link.style.bottom = '30px';
    link.style.left = '30px';
    link.style.height = '30px';
    link.style.width = '30px';
    link.style.zIndex = '2';
    link.style.backgroundColor = '#fff';
    link.classList.add('inserted');

    const myDiv = document.querySelector('.wrapper');
    myDiv.append(link);
  }
});
