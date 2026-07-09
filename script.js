const timelineData = [
  {
    title: 'Responsable Communication Digitale & Gestion Opérationnelle',
    company: 'SNAP Sérigraphie',
    period: 'Août 2025 – présent',
    details: [
      'Création de supports de formation interne et documents professionnels',
      'Amélioration de la présence digitale et accompagnement des équipes',
      'Supervision opérationnelle, relation client et suivi des commandes',
    ],
  },
  {
    title: 'Technicien ICT4D – Formateur de terrain',
    company: 'Programme National de Lutte contre le Paludisme (PNLP)',
    period: 'Fév 2026 – Mai 2026',
    details: [
      'Formation des équipes cadres et relais communautaires à la plateforme Digit',
      'Accompagnement à la saisie des données, synchronisation et contrôle qualité',
      'Support technique sur tablettes, connectivité et remontées terrain',
    ],
  },
  {
    title: 'Formateur Technologies',
    company: 'Cybercafé MCS, N\'Djamena',
    period: '2019 – 2021',
    details: [
      'Animation de sessions Microsoft Office (Word, Excel, PowerPoint)',
      'Accompagnement des apprenants et soutien technique',
      'Création d\'exercices pédagogiques et évaluation des progrès',
    ],
  },
  {
    title: 'Analyste de Données – Freelance',
    company: 'Indépendant',
    period: '2022 – 2025',
    details: [
      'Conception de tableaux de bord Power BI et rapports interactifs',
      'Analyse statistique avancée avec SPSS et automatisation des rapports',
      'Présentations de résultats claires pour les décisions métiers',
    ],
  },
];

const projectsData = [
  {
    title: 'Digitalisation de campagne ICT4D',
    description: 'Accompagnement de la digitalisation terrain, formation sur tablettes et supervision de la collecte de données en temps réel.',
    tags: ['Digit', 'Formation', 'Supervision'],
    preview: 'Campagne ICT4D',
  },
  {
    title: 'Tableaux de bord Power BI',
    description: 'Mise en œuvre de reporting professionnel pour analyses de données et visualisation dynamique.',
    tags: ['Power BI', 'SPSS', 'Reporting'],
    preview: 'Reporting & KPI',
  },
  {
    title: 'Sites vitrines professionnels',
    description: 'Développement et hébergement de sites web pour des entreprises locales et portails de services.',
    tags: ['Angular', 'Node.js', 'Web'],
    preview: 'Sites web pro',
  },
  {
    title: 'Application Ticket Bus CM',
    description: 'Conception d\'une application mobile Ionic/Angular avec backend Node.js et paiement sécurisé.',
    tags: ['Ionic', 'Angular', 'MongoDB'],
    preview: 'App mobile',
  },
];

const createTimeline = () => {
  const container = document.getElementById('timeline');
  timelineData.forEach((item) => {
    const card = document.createElement('article');
    card.className = 'timeline-item';
    card.innerHTML = `
      <h3>${item.title}</h3>
      <span>${item.company} · ${item.period}</span>
      <ul>${item.details.map((detail) => `<li>${detail}</li>`).join('')}</ul>
    `;
    container.appendChild(card);
  });
};

const createProjects = () => {
  const container = document.getElementById('projectsGrid');
  projectsData.forEach((project) => {
    const card = document.createElement('article');
    card.className = 'project-card';
    card.innerHTML = `
      <div class="project-preview">${project.preview}</div>
      <h3>${project.title}</h3>
      <p>${project.description}</p>
      <div class="tag-row">${project.tags.map((tag) => `<span class='tag'>${tag}</span>`).join('')}</div>
    `;
    container.appendChild(card);
  });
};

const revealOnScroll = () => {
  const reveals = document.querySelectorAll('.reveal');
  reveals.forEach((el) => {
    const rect = el.getBoundingClientRect();
    if (rect.top < window.innerHeight - 80) {
      el.classList.add('visible');
    }
  });
};

const toggleTheme = () => {
  const button = document.getElementById('themeToggle');
  button.addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
    const isLight = document.body.classList.contains('light-theme');
    button.textContent = isLight ? '🌙' : '☀️';
  });
};

const init = () => {
  createTimeline();
  createProjects();
  revealOnScroll();
  toggleTheme();
  window.addEventListener('scroll', revealOnScroll);
};

init();
