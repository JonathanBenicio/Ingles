/* English Study Tracker - Application Script */

// Taxonomy Definition
const TAXONOMY = [
  {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    emoji: "📐",
    type: "grammar",
    subgroups: [
      "Present Tenses (Tempos Presentes)",
      "Past Tenses (Tempos Passados)",
      "Future Tenses (Tempos Futuros)",
      "Present Perfect (Presente Perfeito)",
      "Past Perfect (Passado Perfeito)",
      "Used to & Would (Hábito no Passado)",
      "Gerund & Infinitive (Gerúndio e Infinitivo)",
      "Passive Voice (Voz Passiva)",
      "Reported Speech (Discurso Indireto)",
      "Auxiliary Verbs & Reviews (Verbos Auxiliares e Revisões)"
    ]
  },
  {
    group: "Grammar: Sentence Structure (Gramática: Estrutura de Sentenças)",
    emoji: "📐",
    type: "grammar",
    subgroups: [
      "Conditionals & Wish (Condicionais)",
      "Relative Clauses (Orações Relativas)",
      "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
    ]
  },
  {
    group: "Grammar: Parts of Speech (Gramática: Classes de Palavras)",
    emoji: "📐",
    type: "grammar",
    subgroups: [
      "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)",
      "Pronouns & Possessives (Pronomes e Possessivos)",
      "Adjectives & Adverbs (Adjetivos e Advérbios)",
      "Prepositions (Preposições)"
    ]
  },
  {
    group: "Grammar: Vocabulary & Idioms (Gramática: Vocabulário e Idiomas)",
    emoji: "📐",
    type: "grammar",
    subgroups: [
      "Phrasal Verbs (Verbos Frasais)",
      "Common Verbs & Confusions (Verbos Comuns e Confusões)"
    ]
  },
  {
    group: "Grammar: Miscellaneous (Gramática: Diversos)",
    emoji: "📐",
    type: "grammar",
    subgroups: [
      "Other Grammar Points (Outros Tópicos Gramaticais)"
    ]
  },
  {
    group: "Topics: Daily Life & Health (Tópicos: Vida Diária e Saúde)",
    emoji: "🗣️",
    type: "situational",
    subgroups: [
      "Daily Life & Routines (Vida Diária e Rotinas)",
      "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)",
      "Body, Health & Medicine (Corpo, Saúde e Medicina)",
      "Food, Drink & Eating Out (Comida, Bebida e Restaurante)",
      "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
    ]
  },
  {
    group: "Topics: Work & Technology (Tópicos: Trabalho e Tecnologia)",
    emoji: "🗣️",
    type: "situational",
    subgroups: [
      "Work, Jobs & Education (Trabalho, Profissões e Educação)",
      "Technology & Science (Tecnologia e Ciência)",
      "Shopping, Money & Business (Compras, Dinheiro e Negócios)",
      "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
    ]
  },
  {
    group: "Topics: Travel & Nature (Tópicos: Viagem e Natureza)",
    emoji: "🗣️",
    type: "situational",
    subgroups: [
      "Travel, Transport & Tourism (Viagem, Transporte e Turismo)",
      "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
    ]
  },
  {
    group: "Topics: General & Skills (Tópicos: Geral e Habilidades)",
    emoji: "🗣️",
    type: "situational",
    subgroups: [
      "Culture, Society & General Interest (Cultura, Sociedade e Interesse Geral)",
      "Writing Guides & Essays (Guias de Redação e Ensaios)",
      "English Exams & Tests (Testes e Exames de Inglês)",
      "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
    ]
  }
];

// State Management
const state = {
    completed: {}, // Maps: link -> dateCompletedString ("DD/MM/YYYY HH:MM")
    theme: 'dark',
    filters: {
        search: '',
        level: 'all',
        types: {
            grammar: true,
            situational: true
        },
        categories: {}, // Maps: categoryName -> checkedBoolean
        status: 'all',
        subgroups: [],  // Array of active subgroup names
        sortBy: 'pedagogical'
    }
};

// Skill Metadata for Colors & Labels
const SKILL_METADATA = {
    'grammar-points': { label: 'Gramática', color: 'var(--color-grammar)', bgGlow: 'rgba(26, 142, 193, 0.1)' },
    'listening': { label: 'Audição', color: 'var(--color-listening)', bgGlow: 'rgba(254, 204, 0, 0.1)' },
    'reading': { label: 'Leitura', color: 'var(--color-reading)', bgGlow: 'rgba(237, 28, 36, 0.1)' },
    'vocabulary': { label: 'Vocabulário', color: 'var(--color-vocabulary)', bgGlow: 'rgba(255, 102, 153, 0.1)' },
    'writing': { label: 'Escrita', color: 'var(--color-writing)', bgGlow: 'rgba(168, 77, 152, 0.1)' },
    'use-of-english': { label: 'Uso da Língua', color: 'var(--color-use-of-english)', bgGlow: 'rgba(236, 104, 37, 0.1)' }
};

// Initialize the Application
document.addEventListener('DOMContentLoaded', () => {
    loadState();
    setupDOM();
    registerEventListeners();
    renderAll();
});

// Load state from LocalStorage
function loadState() {
    // Load completion progress
    const savedCompleted = localStorage.getItem('english_completed_exercises');
    if (savedCompleted) {
        try {
            state.completed = JSON.parse(savedCompleted);
        } catch (e) {
            state.completed = {};
        }
    }
    
    // Load theme
    const savedTheme = localStorage.getItem('english_tracker_theme');
    state.theme = savedTheme || 'dark';
    document.body.className = `${state.theme}-theme`;
    
    // Initialize skill categories checklist state
    const categories = getUniqueCategories();
    categories.forEach(cat => {
        state.filters.categories[cat] = true;
    });
}

// Save state to LocalStorage
function saveState() {
    localStorage.setItem('english_completed_exercises', JSON.stringify(state.completed));
}

// Gather unique categories from dataset (excluding grammar-points)
function getUniqueCategories() {
    const cats = new Set();
    EXERCISES_DATA.forEach(ex => {
        if (ex.category && ex.category !== 'grammar-points') {
            cats.add(ex.category);
        }
    });
    return Array.from(cats).sort();
}

// Extract Portuguese label from parenthesis (e.g. "Adjectives (Adjetivos)" -> "Adjetivos")
function formatGroupLabel(groupStr) {
    const match = groupStr.match(/\(([^)]+)\)/);
    return match ? match[1] : groupStr;
}

// Convert "DD/MM/YYYY HH:MM" to "YYYY-MM-DD" for calendar picker input
function toInputDate(displayDate) {
    if (!displayDate) return '';
    const parts = displayDate.split(' ');
    const datePart = parts[0];
    const dParts = datePart.split('/');
    if (dParts.length === 3) {
        const [d, m, y] = dParts;
        return `${y}-${m.padStart(2, '0')}-${d.padStart(2, '0')}`;
    }
    return '';
}

// Convert "YYYY-MM-DD" to "DD/MM/YYYY HH:MM" preserving time or adding current time
function fromInputDate(inputVal, originalDateTime = '') {
    if (!inputVal) return '';
    const parts = inputVal.split('-');
    if (parts.length === 3) {
        const [y, m, d] = parts;
        let timeStr = '';
        if (originalDateTime) {
            const origParts = originalDateTime.split(' ');
            if (origParts.length === 2) {
                timeStr = ' ' + origParts[1];
            }
        }
        if (!timeStr) {
            const now = new Date();
            timeStr = ' ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        }
        return `${d.padStart(2, '0')}/${m.padStart(2, '0')}/${y}${timeStr}`;
    }
    return inputVal;
}

// Parses "DD/MM/YYYY HH:MM" into a Sortable Date Object
function parseCompletionDate(dateStr) {
    if (!dateStr) return new Date(0);
    const parts = dateStr.split(' ');
    const dParts = parts[0].split('/');
    const tParts = (parts[1] || '00:00').split(':');
    if (dParts.length === 3) {
        const [d, m, y] = dParts.map(Number);
        const [h, min] = tParts.map(Number);
        return new Date(y, m - 1, d, h, min);
    }
    return new Date(0);
}

// Setup initial DOM elements (categories checkboxes & accordions for subgroups)
function setupDOM() {
    // Populate Categories Checkbox Group
    const categoriesContainer = document.getElementById('filter-categories');
    categoriesContainer.innerHTML = '';
    
    const categories = getUniqueCategories();
    categories.forEach(cat => {
        const metadata = SKILL_METADATA[cat] || { label: cat };
        const labelEl = document.createElement('label');
        labelEl.className = 'custom-checkbox';
        labelEl.innerHTML = `
            <input type="checkbox" class="category-checkbox" data-category="${cat}" checked>
            <span class="checkmark"></span>
            <span style="color: ${metadata.color || 'inherit'}; font-weight: 500;">${metadata.label}</span>
        `;
        categoriesContainer.appendChild(labelEl);
    });
    
    // Populate Group/Subgroup Accordions
    const accordionContainer = document.getElementById('filter-subgroups-accordion');
    accordionContainer.innerHTML = '';
    
    TAXONOMY.forEach((taxItem, index) => {
        const itemEl = document.createElement('div');
        itemEl.className = 'accordion-item';
        itemEl.setAttribute('data-group-type', taxItem.type);
        
        let subgroupInputsHTML = '';
        taxItem.subgroups.forEach(sub => {
            subgroupInputsHTML += `
                <label class="custom-checkbox">
                    <input type="checkbox" class="subgroup-checkbox" data-subgroup="${sub}">
                    <span class="checkmark"></span>
                    <span>${formatGroupLabel(sub)}</span>
                </label>
            `;
        });
        
        itemEl.innerHTML = `
            <button class="accordion-header" type="button">
                <span>${taxItem.emoji} ${formatGroupLabel(taxItem.group)}</span>
                <i class="fa-solid fa-chevron-down arrow-icon"></i>
            </button>
            <div class="accordion-content">
                <div class="accordion-content-inner">
                    ${subgroupInputsHTML}
                </div>
            </div>
        `;
        
        // Toggle Accordion Click event
        itemEl.querySelector('.accordion-header').addEventListener('click', () => {
            itemEl.classList.toggle('open');
        });
        
        accordionContainer.appendChild(itemEl);
    });
    
    // Set desktop toggle sidebar button arrow icon correctly
    const toggleBtn = document.getElementById('btn-toggle-sidebar');
    const container = document.querySelector('.app-container');
    if (toggleBtn) {
        toggleBtn.querySelector('i').className = container.classList.contains('sidebar-collapsed') 
            ? 'fa-solid fa-angles-right' 
            : 'fa-solid fa-angles-left';
    }
}

// Update active visibility of accordions based on Subject Type filters
function updateAccordionVisibility() {
    const isGrammarActive = state.filters.types.grammar;
    const isSituationalActive = state.filters.types.situational;
    
    document.querySelectorAll('.accordion-item').forEach(item => {
        const type = item.getAttribute('data-group-type');
        if (type === 'grammar') {
            item.style.display = isGrammarActive ? 'block' : 'none';
        } else if (type === 'situational') {
            item.style.display = isSituationalActive ? 'block' : 'none';
        }
    });
}

// Register DOM Event Listeners
function registerEventListeners() {
    const container = document.querySelector('.app-container');
    const toggleBtn = document.getElementById('btn-toggle-sidebar');
    const sidebar = document.getElementById('app-sidebar');
    
    // Theme Toggle
    document.getElementById('btn-theme-toggle').addEventListener('click', toggleTheme);
    
    // Retractable Sidebar Toggle (Desktop & Mobile)
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        if (window.innerWidth > 768) {
            container.classList.toggle('sidebar-collapsed');
            const icon = toggleBtn.querySelector('i');
            icon.className = container.classList.contains('sidebar-collapsed') 
                ? 'fa-solid fa-angles-right' 
                : 'fa-solid fa-angles-left';
        } else {
            container.classList.toggle('sidebar-open');
        }
    });
    
    // Close mobile sidebar clicking outside
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && container.classList.contains('sidebar-open') && !sidebar.contains(e.target) && e.target !== toggleBtn) {
            container.classList.remove('sidebar-open');
        }
    });
    
    // History Drawer toggle open
    document.getElementById('btn-toggle-history').addEventListener('click', () => {
        document.getElementById('history-drawer').classList.add('open');
        renderHistory();
    });
    
    // History Drawer close
    document.getElementById('btn-close-history').addEventListener('click', () => {
        document.getElementById('history-drawer').classList.remove('open');
    });
    
    // Search Bar Input
    document.getElementById('search-input').addEventListener('input', (e) => {
        state.filters.search = e.target.value.toLowerCase();
        renderAll();
    });
    
    // Level Pills Select
    document.getElementById('filter-levels').addEventListener('click', (e) => {
        if (e.target.classList.contains('level-pill')) {
            document.querySelectorAll('.level-pill').forEach(btn => btn.classList.remove('active'));
            e.target.classList.add('active');
            state.filters.level = e.target.getAttribute('data-level');
            renderAll();
        }
    });
    
    // Type Checkboxes (Grammar / Situational)
    document.getElementById('type-grammar').addEventListener('change', (e) => {
        state.filters.types.grammar = e.target.checked;
        updateAccordionVisibility();
        renderAll();
    });
    document.getElementById('type-situational').addEventListener('change', (e) => {
        state.filters.types.situational = e.target.checked;
        updateAccordionVisibility();
        renderAll();
    });
    
    // Categories Checkboxes
    document.getElementById('filter-categories').addEventListener('change', (e) => {
        if (e.target.classList.contains('category-checkbox')) {
            const cat = e.target.getAttribute('data-category');
            state.filters.categories[cat] = e.target.checked;
            renderAll();
        }
    });
    
    // Status Radios (All, Completed, Pending)
    document.querySelectorAll('input[name="status-filter"]').forEach(radio => {
        radio.addEventListener('change', (e) => {
            state.filters.status = e.target.value;
            renderAll();
        });
    });
    
    // Subgroups Checkboxes
    document.getElementById('filter-subgroups-accordion').addEventListener('change', (e) => {
        if (e.target.classList.contains('subgroup-checkbox')) {
            const sub = e.target.getAttribute('data-subgroup');
            if (e.target.checked) {
                if (!state.filters.subgroups.includes(sub)) {
                    state.filters.subgroups.push(sub);
                }
            } else {
                state.filters.subgroups = state.filters.subgroups.filter(s => s !== sub);
            }
            renderAll();
        }
    });
    
    // Sorting Selector
    document.getElementById('select-sort').addEventListener('change', (e) => {
        state.filters.sortBy = e.target.value;
        renderAll();
    });
    
    // Action Buttons
    document.getElementById('btn-export').addEventListener('click', exportProgress);
    
    const fileInput = document.getElementById('input-import-file');
    document.getElementById('btn-import-trigger').addEventListener('click', () => {
        fileInput.click();
    });
    fileInput.addEventListener('change', importProgress);
    
    document.getElementById('btn-reset').addEventListener('click', resetProgress);
}

// Toggle Light / Dark Theme
function toggleTheme() {
    if (state.theme === 'dark') {
        state.theme = 'light';
    } else {
        state.theme = 'dark';
    }
    document.body.className = `${state.theme}-theme`;
    localStorage.setItem('english_tracker_theme', state.theme);
}

// Toggle Completion state of an exercise card
function toggleCompletion(link) {
    if (state.completed[link]) {
        const confirmUncheck = confirm("Tem certeza que deseja desmarcar este exercício? O registro com data e hora de conclusão será removido.");
        if (!confirmUncheck) return;
        delete state.completed[link];
    } else {
        const now = new Date();
        const dateStr = now.toLocaleDateString('pt-BR') + ' ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        state.completed[link] = dateStr;
    }
    saveState();
    renderStats();
    
    // Update target card without full grid reload to prevent scroll jumps
    const cards = document.querySelectorAll(`.exercise-card`);
    cards.forEach(card => {
        const titleLink = card.querySelector('.exercise-title');
        if (titleLink && titleLink.getAttribute('href') === link) {
            if (state.completed[link]) {
                card.classList.add('completed');
                card.querySelector('.completion-date').innerHTML = `
                    <span>Concluído em:</span>
                    <span class="completion-date-wrapper">
                        <i class="fa-regular fa-calendar-days"></i>
                        <span class="date-text">${state.completed[link]}</span>
                        <input type="date" class="date-picker-input" data-link="${link}" value="${toInputDate(state.completed[link])}">
                    </span>
                `;
                // Add event listener to the new input picker
                card.querySelector('.date-picker-input').addEventListener('change', (e) => {
                    updateCompletionDate(link, e.target.value);
                });
            } else {
                card.classList.remove('completed');
                card.querySelector('.completion-date').innerHTML = '';
            }
        }
    });

    // Update history drawer if open
    if (document.getElementById('history-drawer').classList.contains('open')) {
        renderHistory();
    }
}

// Update specific Completion Date from Inline Date Pickers
function updateCompletionDate(link, inputDateValue) {
    const originalDateTime = state.completed[link] || '';
    const newDateTime = fromInputDate(inputDateValue, originalDateTime);
    if (newDateTime) {
        state.completed[link] = newDateTime;
        saveState();
        renderAll();
        if (document.getElementById('history-drawer').classList.contains('open')) {
            renderHistory();
        }
    }
}

// Render Stats & Progress Indicators
function renderStats() {
    const totalCount = EXERCISES_DATA.length;
    const completedCount = Object.keys(state.completed).length;
    const percentage = totalCount > 0 ? Math.round((completedCount / totalCount) * 100) : 0;
    
    // Overall text update
    document.getElementById('overall-count-text').textContent = `${completedCount} / ${totalCount} concluídos`;
    document.getElementById('progress-percentage-text').textContent = `${percentage}%`;
    
    // Update SVG Circular Ring Progress
    const circle = document.getElementById('progress-circle-ring');
    const radius = parseFloat(circle.getAttribute('r')) || 50;
    const circumference = radius * 2 * Math.PI;
    
    circle.style.strokeDasharray = `${circumference} ${circumference}`;
    const offset = circumference - (percentage / 100) * circumference;
    circle.style.strokeDashoffset = offset;
    
    // Renders individual Skill Progress Bars
    const categoriesProgressContainer = document.getElementById('skills-progress-bars');
    categoriesProgressContainer.innerHTML = '';
    
    // Group exercises by skill category to count progress
    const skillCounts = {};
    const skillCompleted = {};
    
    // Seed skill metrics
    Object.keys(SKILL_METADATA).forEach(cat => {
        skillCounts[cat] = 0;
        skillCompleted[cat] = 0;
    });
    
    EXERCISES_DATA.forEach(ex => {
        if (skillCounts[ex.category] !== undefined) {
            skillCounts[ex.category]++;
            if (state.completed[ex.link]) {
                skillCompleted[ex.category]++;
            }
        }
    });
    
    // Render each skill row
    Object.keys(SKILL_METADATA).forEach(cat => {
        const count = skillCounts[cat];
        const completed = skillCompleted[cat];
        const pct = count > 0 ? Math.round((completed / count) * 100) : 0;
        const metadata = SKILL_METADATA[cat];
        
        const row = document.createElement('div');
        row.className = 'skill-row';
        row.innerHTML = `
            <div class="skill-info">
                <span class="skill-name">
                    <span class="skill-dot" style="background-color: ${metadata.color};"></span>
                    ${metadata.label}
                </span>
                <span>${completed}/${count} (${pct}%)</span>
            </div>
            <div class="skill-bar-container">
                <div class="skill-bar" style="width: ${pct}%; background-color: ${metadata.color};"></div>
            </div>
        `;
        categoriesProgressContainer.appendChild(row);
    });
}

// Render the Exercise cards grid
function renderCards() {
    const container = document.getElementById('exercises-container');
    container.innerHTML = '';
    
    // 1. Filtering
    let filtered = EXERCISES_DATA.filter(ex => {
        // Search filter
        if (state.filters.search) {
            const matchesTitle = ex.title.toLowerCase().includes(state.filters.search);
            const matchesSlug = ex.slug.toLowerCase().includes(state.filters.search);
            const matchesGroup = ex.group && ex.group.toLowerCase().includes(state.filters.search);
            const matchesSub = ex.subgroup && ex.subgroup.toLowerCase().includes(state.filters.search);
            if (!matchesTitle && !matchesSlug && !matchesGroup && !matchesSub) return false;
        }
        
        // Level filter
        if (state.filters.level !== 'all' && ex.level !== state.filters.level) {
            return false;
        }
        
        // Type filter (Grammar / Situational)
        const isGrammar = ex.category === 'grammar-points';
        if (isGrammar && !state.filters.types.grammar) return false;
        if (!isGrammar && !state.filters.types.situational) return false;
        
        // Skill Category filter (for situational)
        if (!isGrammar) {
            if (state.filters.categories[ex.category] === false) return false;
        }
        
        // Status filter (All, Completed, Pending)
        const isCompleted = !!state.completed[ex.link];
        if (state.filters.status === 'completed' && !isCompleted) return false;
        if (state.filters.status === 'pending' && isCompleted) return false;
        
        // Subgroup filter (multi-select filter logic: if active array has elements, item must match one of them)
        if (state.filters.subgroups.length > 0) {
            if (!state.filters.subgroups.includes(ex.subgroup)) return false;
        }
        
        return true;
    });
    
    // Update results label count
    document.getElementById('results-count-text').textContent = `${filtered.length} exercício(s) encontrado(s)`;
    
    // 2. Sorting
    if (state.filters.sortBy === 'alphabetical') {
        filtered.sort((a, b) => a.title.localeCompare(b.title));
    } else if (state.filters.sortBy === 'level') {
        const order = { 'a1': 0, 'a2': 1, 'b1': 2, 'b1-b2': 3, 'b2': 4, 'c1': 5 };
        filtered.sort((a, b) => order[a.level] - order[b.level]);
    } // 'pedagogical' keeps the original array sorting order
    
    // 3. Appending cards to DOM
    filtered.forEach(ex => {
        const metadata = SKILL_METADATA[ex.category] || { label: ex.category, color: 'var(--text-muted)' };
        const isCompleted = !!state.completed[ex.link];
        const dateStr = state.completed[ex.link] || '';
        
        const card = document.createElement('div');
        card.className = `exercise-card ${isCompleted ? 'completed' : ''}`;
        card.style.setProperty('--cat-color', metadata.color);
        card.style.setProperty('--cat-bg-color', metadata.bgGlow);
        
        card.innerHTML = `
            <div class="card-top">
                <div class="badge-row">
                    <span class="cat-badge" style="background-color: var(--cat-bg-color); color: var(--cat-color);">${metadata.label}</span>
                    <span class="level-badge">${ex.level.toUpperCase()}</span>
                </div>
                <button class="card-check-btn" title="Marcar como concluído" aria-label="Marcar como concluído">
                    <i class="fa-solid fa-check"></i>
                </button>
            </div>
            <div class="card-middle">
                <a href="${ex.link}" target="_blank" rel="noopener noreferrer" class="exercise-title" title="Abrir exercício em nova guia">
                    ${ex.title}
                </a>
            </div>
            <div class="card-bottom">
                <span class="group-tag" title="${formatGroupLabel(ex.subgroup || ex.group || 'Geral')}">
                    <i class="fa-solid fa-folder-open"></i> ${formatGroupLabel(ex.subgroup || ex.group || 'Geral')}
                </span>
                <div class="completion-date">
                    ${isCompleted ? `
                        <span>Concluído em:</span>
                        <span class="completion-date-wrapper">
                            <i class="fa-regular fa-calendar-days"></i>
                            <span class="date-text">${dateStr}</span>
                            <input type="date" class="date-picker-input" data-link="${ex.link}" value="${toInputDate(dateStr)}">
                        </span>
                    ` : ''}
                </div>
            </div>
        `;
        
        // Completion click bindings
        card.querySelector('.card-check-btn').addEventListener('click', (e) => {
            e.preventDefault();
            toggleCompletion(ex.link);
        });
        
        // Date picker bindings
        if (isCompleted) {
            card.querySelector('.date-picker-input').addEventListener('change', (e) => {
                updateCompletionDate(ex.link, e.target.value);
            });
        }
        
        container.appendChild(card);
    });
}

// Render the completed timeline in the History Drawer
function renderHistory() {
    const listContainer = document.getElementById('history-timeline-list');
    const totalCountContainer = document.getElementById('history-total-count');
    listContainer.innerHTML = '';
    
    // Filter out completed exercises details
    const completedList = EXERCISES_DATA.filter(ex => !!state.completed[ex.link]);
    
    totalCountContainer.textContent = `${completedList.length} exercício(s) concluído(s)`;
    
    if (completedList.length === 0) {
        listContainer.innerHTML = `
            <div class="history-empty">
                <i class="fa-solid fa-circle-exclamation"></i>
                <p>Nenhum exercício concluído ainda.</p>
            </div>
        `;
        return;
    }
    
    // Sort chronologically descending (newest completion first)
    completedList.sort((a, b) => {
        const dateA = parseCompletionDate(state.completed[a.link]);
        const dateB = parseCompletionDate(state.completed[b.link]);
        return dateB - dateA;
    });
    
    completedList.forEach(ex => {
        const metadata = SKILL_METADATA[ex.category] || { label: ex.category, color: 'var(--text-muted)' };
        const dateStr = state.completed[ex.link];
        
        const itemEl = document.createElement('li');
        itemEl.className = 'history-item';
        itemEl.innerHTML = `
            <div class="history-item-content">
                <a href="${ex.link}" target="_blank" rel="noopener noreferrer" class="history-item-title">${ex.title}</a>
                <div class="history-item-meta">
                    <span class="cat-badge" style="color: ${metadata.color};">${metadata.label} (${ex.level.toUpperCase()})</span>
                    <span class="completion-date-wrapper">
                        <i class="fa-regular fa-calendar-days"></i>
                        <span class="date-text">${dateStr}</span>
                        <input type="date" class="date-picker-input" data-link="${ex.link}" value="${toInputDate(dateStr)}">
                    </span>
                </div>
            </div>
        `;
        
        // Date picker change listener
        itemEl.querySelector('.date-picker-input').addEventListener('change', (e) => {
            updateCompletionDate(ex.link, e.target.value);
        });
        
        listContainer.appendChild(itemEl);
    });
}

// Render both Stats, Cards and Accordions visibility
function renderAll() {
    renderStats();
    renderCards();
    updateAccordionVisibility();
}

// Export progress database as a JSON download
function exportProgress() {
    const dataStr = "data:text/json;charset=utf-8," + encodeURIComponent(JSON.stringify(state.completed, null, 2));
    const downloadAnchor = document.createElement('a');
    
    const now = new Date();
    const dateStamp = now.toISOString().split('T')[0];
    
    downloadAnchor.setAttribute("href", dataStr);
    downloadAnchor.setAttribute("download", `english-study-progress-${dateStamp}.json`);
    document.body.appendChild(downloadAnchor);
    downloadAnchor.click();
    downloadAnchor.remove();
}

// Import progress database from JSON upload
function importProgress(e) {
    const fileReader = new FileReader();
    const file = e.target.files[0];
    if (!file) return;
    
    fileReader.onload = function(event) {
        try {
            const parsed = JSON.parse(event.target.result);
            
            // Basic validation
            if (typeof parsed !== 'object' || parsed === null || Array.isArray(parsed)) {
                alert("Erro: O arquivo de backup enviado é inválido!");
                return;
            }
            
            // Validate entries
            let isValid = true;
            for (const key in parsed) {
                if (typeof parsed[key] !== 'string') {
                    isValid = false;
                    break;
                }
            }
            
            if (!isValid) {
                alert("Erro: O arquivo de backup enviado contém formato de dados incorreto!");
                return;
            }
            
            // Restore progress logs
            state.completed = parsed;
            saveState();
            renderAll();
            alert("Sucesso: Progresso restaurado com sucesso a partir do backup!");
        } catch (err) {
            alert("Erro: Não foi possível ler o arquivo JSON de backup.");
        }
    };
    fileReader.readAsText(file);
    
    // Clear input
    e.target.value = '';
}

// Reset all completion records with confirmation dialog
function resetProgress() {
    const confirmReset = confirm("Aviso: Isso irá deletar permanentemente todo o seu histórico de exercícios concluídos. Tem certeza que deseja zerar?");
    if (confirmReset) {
        state.completed = {};
        saveState();
        renderAll();
        alert("Histórico de progresso zerado com sucesso!");
    }
}
