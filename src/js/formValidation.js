const login = document.getElementById('login');
const pass = document.getElementById('password');
const submit = document.getElementById('submit');

async function checkLocation() {
  try {
    const response = await fetch('https://ipinfo.io/json?token=8317693aade656');
    const data = await response.json();
    return await data.ip;
  } catch {
    throw new Error('Fetch failed');
  }
}

submit.addEventListener('click', async (event) => {
  event.preventDefault();

  const ip = await checkLocation();

  if (login.value.toLowerCase() === ip
    && pass.value.toLowerCase() === ip) {
    const link = document.createElement('a');
    link.href = 'https://vk.com/memesquad47';
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
