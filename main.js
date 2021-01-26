// console.log('Hello World');

const button = document.querySelector('#main-btn');
const button2 = document.querySelector('#other-btn');
const container = document.querySelector('#container');

// button.addEventListener('click', (e) => {
//   console.log(`YOU CLICKED ${e.target.id}!`);
//   console.log(e);
// })

const whatIsTheId = (e) => {
  console.log(`YOU CLICKED ${e.target.id}!`);

  if (e.target.id === 'main-btn') {
    container.innerHTML = 'You cicked the MAIN BUTTON';
  } else {
    container.innerHTML = 'You clicked the OTHER BUTTON';
  }
}

button.addEventListener('click', whatIsTheId);
button2.addEventListener('click', whatIsTheId);
