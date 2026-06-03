/* English Study Tracker - Application Script */

// State Management
const state = {
    completed: {}, // Maps: link -> dateCompletedString
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
        group: 'all',
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

// Gather unique grammar groups/themes
function getUniqueGrammarGroups() {
    const groups = new Set();
    EXERCISES_DATA.forEach(ex => {
        if (ex.category === 'grammar-points' && ex.group) {
            groups.add(ex.group);
        }
    });
    return Array.from(groups).sort();
}

// Gather unique situational groups/themes
function getUniqueSituationalGroups() {
    const groups = new Set();
    EXERCISES_DATA.forEach(ex => {
        if (ex.category !== 'grammar-points' && ex.group) {
            groups.add(ex.group);
        }
    });
    return Array.from(groups).sort();
}

// Update the disabled status of optgroups in the select drop-down based on active filters
function updateGroupSelectStatus() {
    const select = document.getElementById('select-group');
    const optgroupGrammar = document.getElementById('optgroup-grammar');
    const optgroupSituational = document.getElementById('optgroup-situational');
    
    const isGrammarActive = state.filters.types.grammar;
    const isSituationalActive = state.filters.types.situational;
    
    if (optgroupGrammar) optgroupGrammar.disabled = !isGrammarActive;
    if (optgroupSituational) optgroupSituational.disabled = !isSituationalActive;
    
    // Reset select to "all" if the currently selected value belongs to a disabled group
    const selectedValue = select.value;
    if (selectedValue !== 'all') {
        const grammarThemes = getUniqueGrammarGroups();
        const isSelectedGrammar = grammarThemes.includes(selectedValue);
        
        if (isSelectedGrammar && !isGrammarActive) {
            select.value = 'all';
            state.filters.group = 'all';
        } else if (!isSelectedGrammar && !isSituationalActive) {
            select.value = 'all';
            state.filters.group = 'all';
        }
    }
}

// Setup initial DOM elements (categories checkboxes & group dropdowns with optgroups)
function setupDOM() {
    // Populate Categories Checkbox Group
    const container = document.getElementById('filter-categories');
    container.innerHTML = '';
    
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
        container.appendChild(labelEl);
    });
    
    // Populate Group Dropdown Select with <optgroup>
    const select = document.getElementById('select-group');
    select.innerHTML = '<option value="all">Todos os Temas</option>';
    
    // Create Grammatical optgroup
    const grammarGroup = document.createElement('optgroup');
    grammarGroup.id = 'optgroup-grammar';
    grammarGroup.label = '📐 Tópicos Gramaticais';
    const grammarThemes = getUniqueGrammarGroups();
    grammarThemes.forEach(g => {
        const option = document.createElement('option');
        option.value = g;
        option.textContent = g;
        grammarGroup.appendChild(option);
    });
    select.appendChild(grammarGroup);
    
    // Create Situational optgroup
    const situationalGroup = document.createElement('optgroup');
    situationalGroup.id = 'optgroup-situational';
    situationalGroup.label = '🗣️ Tópicos Situacionais';
    const situationalThemes = getUniqueSituationalGroups();
    situationalThemes.forEach(g => {
        const option = document.createElement('option');
        option.value = g;
        option.textContent = g;
        situationalGroup.appendChild(option);
    });
    select.appendChild(situationalGroup);
}

// Register DOM Event Listeners
function registerEventListeners() {
    // Theme Toggle
    document.getElementById('btn-theme-toggle').addEventListener('click', toggleTheme);
    
    // Mobile Sidebar Toggle
    const sidebar = document.getElementById('app-sidebar');
    const toggleBtn = document.getElementById('btn-toggle-sidebar');
    
    toggleBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        sidebar.classList.toggle('open');
    });
    
    document.addEventListener('click', (e) => {
        if (window.innerWidth <= 768 && sidebar.classList.contains('open') && !sidebar.contains(e.target) && e.target !== toggleBtn) {
            sidebar.classList.remove('open');
        }
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
        renderAll();
    });
    document.getElementById('type-situational').addEventListener('change', (e) => {
        state.filters.types.situational = e.target.checked;
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
    
    // Group Selector
    document.getElementById('select-group').addEventListener('change', (e) => {
        state.filters.group = e.target.value;
        renderAll();
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
        delete state.completed[link];
    } else {
        const now = new Date();
        const dateStr = now.toLocaleDateString('pt-BR') + ' ' + now.toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
        state.completed[link] = dateStr;
    }
    saveState();
    renderStats();
    
    // Update target card without re-rendering everything (prevents scroll jumps)
    const cards = document.querySelectorAll(`.exercise-card`);
    cards.forEach(card => {
        const titleLink = card.querySelector('.exercise-title');
        if (titleLink && titleLink.getAttribute('href') === link) {
            if (state.completed[link]) {
                card.classList.add('completed');
                card.querySelector('.completion-date').innerHTML = `<span>Concluído em:</span><span>${state.completed[link]}</span>`;
            } else {
                card.classList.remove('completed');
                card.querySelector('.completion-date').innerHTML = '';
            }
        }
    });
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
    updateGroupSelectStatus();
    const container = document.getElementById('exercises-container');
    container.innerHTML = '';
    
    // 1. Filtering
    let filtered = EXERCISES_DATA.filter(ex => {
        // Search filter
        if (state.filters.search) {
            const matchesTitle = ex.title.toLowerCase().includes(state.filters.search);
            const matchesSlug = ex.slug.toLowerCase().includes(state.filters.search);
            const matchesGroup = ex.group && ex.group.toLowerCase().includes(state.filters.search);
            if (!matchesTitle && !matchesSlug && !matchesGroup) return false;
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
        
        // Group filter
        if (state.filters.group !== 'all' && ex.group !== state.filters.group) {
            return false;
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
                <span class="group-tag" title="${ex.group || ''}">
                    <i class="fa-solid fa-folder-open"></i> ${ex.group || 'Geral'}
                </span>
                <div class="completion-date">
                    ${isCompleted ? `<span>Concluído em:</span><span>${dateStr}</span>` : ''}
                </div>
            </div>
        `;
        
        // Checkbox click bindings
        card.querySelector('.card-check-btn').addEventListener('click', (e) => {
            e.preventDefault();
            toggleCompletion(ex.link);
        });
        
        container.appendChild(card);
    });
}

// Render both Stats and Cards
function renderAll() {
    renderStats();
    renderCards();
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
            
            // Validate entries (keys should map to strings)
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
