const modal = document.querySelector('#modal');
const content = document.querySelector('#content');
const backdrop = document.querySelector('#backdrop');
const progress = document.querySelector('#progress');

const technologies = [
  {
    title: 'HTML',
    description: 'HTML Text',
    type: 'html',
    done: true
  },
  {
    title: 'CSS',
    description: 'CSS Text',
    type: 'css',
    done: true
  },
  {
    title: 'JavaScript',
    description: 'JavaScript Text',
    type: 'javascript',
    done: false
  },
  {
    title: 'Git',
    description: 'Git text',
    type: 'git',
    done: false
  },
  {
    title: 'React',
    description: 'React Text',
    type: 'react',
    done: false
  }
];

content.addEventListener('click', () => {
  modal.classList.add('open');
});

backdrop.addEventListener('click', () => {
  modal.classList.remove('open'); 
})

function init() {
  renderCards();
  renderProgress();
}

function renderCards() {
  if (technologies.length === 0) {
    content.innerHTML = '<p class="empty">Технологий нет</p>'
  } else {
    content.innerHTML = technologies.map(toCard).join('');
  }
}

function renderProgress() {
  const percent = computeProgressPercent();
  let backgroundColor;

  if (percent <= 30) {
    backgroundColor = '#e75a5a';
  } else if (percent > 30 && percent < 70) {
    backgroundColor = '#f99415';
  } else {
    backgroundColor = '#73ba3c';
  }

  progress.style.backgroundColor = backgroundColor;
  progress.style.width = percent + '%';
  progress.textContent = percent ? percent + '%' : '';
}

function computeProgressPercent() {
  if (technologies.length === 0) {
    return 0;
  }

  let doneCount = 0;
  for (let i = 0; i < technologies.length; i++) {
    if (technologies[i].done) {
      doneCount++
    }
  }

  return Math.round((100 * doneCount) / technologies.length);
}

function toCard(tech) {
  const doneClass = tech.done ? 'done' : '';

  return `
      <div class="card ${doneClass}">
        <h3>${tech.title}</h3>
      </div>
    `;
}

init();