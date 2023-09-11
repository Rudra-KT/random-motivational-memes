const memeImage = document.getElementById('memeImage');
const memeHeading = document.getElementById('memeHeading');
const memeText = document.getElementById('memeText');

const memes = [
    {
      image: './assets/images/daenerys.jpeg',
      heading: 'THAT SPECIAL moment',
      text: 'When you find the perfect avocado 🥑 at the supermarket',
    },
    {
      image: './assets/images/anime.jpg',
      heading: '🚀CHASE YOUR DREAMS LIKE YOUR FAVORITE ANIME HERO 🚀',
      text: 'The journey may be tough, but it\'s your determination that makes the difference ',
    },
    {
        image: './assets/images/nike.jpg',
        heading: 'JUST DO IT 👟',
        text: 'Don\'t wait for the perfect moment take the moment and make it perfect',
      } ,
      {
        image: './assets/images/gintama.jpg',
        heading: 'Life is basically like a soap bubble 🫧 ',
        text: 'It rides on the wind, flying here and there ... And before you realize it, pop! It\'s gone',
      },
      {
        image: './assets/images/banana.jpg',
        heading: 'My mother always used to say ',
        text: 'The older you get, the better you get, unless you\'re a banana',
      },
      {
        image: './assets/images/cat.jpg',
        heading: 'Cats are smarter than dogs ',
        text: 'You can\'t get eight cats to pull a sled through snow',
      }
  ];
  

  function displayRandomMeme() {
    const randomIndex = Math.floor(Math.random() * memes.length);
    const randomMeme = memes[randomIndex];
  
    memeImage.src = randomMeme.image;
    memeHeading.textContent = randomMeme.heading;
    memeText.textContent = randomMeme.text;
  }
  
  window.addEventListener('load', displayRandomMeme);

  const randomMemeButton = document.getElementById('randomMemeButton');
  randomMemeButton.addEventListener('click', displayRandomMeme);



