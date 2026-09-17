const menuToggle = document.querySelector('.menu-toggle');
const siteNav = document.querySelector('.site-nav');

if (menuToggle && siteNav) {
  menuToggle.addEventListener('click', () => {
    const isOpen = siteNav.classList.toggle('is-open');
    menuToggle.setAttribute('aria-expanded', String(isOpen));
  });

  siteNav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', () => {
      siteNav.classList.remove('is-open');
      menuToggle.setAttribute('aria-expanded', 'false');
    });
  });
}

document.querySelectorAll('[data-faq]').forEach((question) => {
  question.addEventListener('click', () => {
    const answer = question.nextElementSibling;
    const wasOpen = question.getAttribute('aria-expanded') === 'true';

    document.querySelectorAll('[data-faq]').forEach((otherQuestion) => {
      otherQuestion.setAttribute('aria-expanded', 'false');
      otherQuestion.nextElementSibling.classList.remove('is-open');
    });

    if (!wasOpen) {
      question.setAttribute('aria-expanded', 'true');
      answer.classList.add('is-open');
    }
  });
});

const teamTabs = document.querySelectorAll('[data-team-tab]');

teamTabs.forEach((tab) => {
  tab.addEventListener('click', () => {
    const selectedTeam = tab.dataset.teamTab;

    teamTabs.forEach((otherTab) => {
      const isSelected = otherTab === tab;
      otherTab.classList.toggle('is-active', isSelected);
      otherTab.setAttribute('aria-selected', String(isSelected));
    });

    document.querySelectorAll('.team-grid').forEach((panel) => {
      panel.hidden = panel.id !== `${selectedTeam}-team`;
    });
  });
});

const year = document.querySelector('#year');
if (year) year.textContent = new Date().getFullYear();
