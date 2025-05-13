const stories = {
  story1: [
    {
      text: "You enter a glowing forest filled with whispering trees and magical creatures.",
      bg: "img/forest1.jpg"
    },
    {
      text: "A unicorn appears and leads you to a waterfall that grants wishes.",
      bg: "img/forest2.jpg"
    },
    {
      text: "You make your wish and are gently carried home by glowing fireflies.",
      bg: "img/forest3.jpg"
    }
  ],
  story2: [
    {
      text: "You discover a lost kingdom ruled by a queen under a sleeping curse.",
      bg: "img/kingdom1.jpg"
    },
    {
      text: "To break the curse, you must solve ancient riddles hidden in scrolls.",
      bg: "img/kingdom2.jpg"
    },
    {
      text: "The curse breaks, the queen awakens, and you’re knighted for your bravery.",
      bg: "img/kingdom3.jpg"
    }
  ],
  story3: [
    {
      text: "You board a spaceship and launch into the unknown galaxies.",
      bg: "img/space1.jpg"
    },
    {
      text: "On a distant planet, you befriend aliens who speak in colors.",
      bg: "img/space2.jpg"
    },
    {
      text: "Together, you plant a peace crystal that shines across the universe.",
      bg: "img/space3.jpg"
    }
  ]
};

const storyButtons = document.querySelectorAll('.story-btn');
const homeScreen = document.getElementById('home');
const storyContainer = document.getElementById('story-container');

storyButtons.forEach(btn => {
  btn.addEventListener('click', () => {
    const story = stories[btn.dataset.story];
    homeScreen.style.display = 'none';
    storyContainer.style.display = 'flex';
    playStory(story);
  });
});

function playStory(story) {
  let index = 0;
  storyContainer.innerHTML = '';

  const scene = document.createElement('div');
  scene.className = 'scene-text';
  scene.innerText = story[index].text;
  storyContainer.style.backgroundImage = `url(${story[index].bg})`;

  const nextBtn = document.createElement('button');
  nextBtn.className = 'next-btn';
  nextBtn.innerText = 'Next ➡️';

  nextBtn.addEventListener('click', () => {
    index++;
    if (index < story.length) {
      scene.innerText = story[index].text;
      storyContainer.style.backgroundImage = `url(${story[index].bg})`;
    } else {
      location.reload(); // reloads the whole site
    }
  });

  storyContainer.appendChild(scene);
  storyContainer.appendChild(nextBtn);
}
