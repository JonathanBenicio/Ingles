const fs = require('fs');

// 1. Read and parse existing exercises-data.js
const content = fs.readFileSync('exercises-data.js', 'utf8');
const dataStr = content.substring(content.indexOf('['), content.lastIndexOf(']') + 1);
const exercises = JSON.parse(dataStr);

console.log(`Loaded ${exercises.length} exercises.`);

// 2. Define Mapping for existing group names
const groupMapping = {
  // Grammar Groups
  "Adjectives & Adverbs (Adjetivos e Advérbios)": {
    group: "Grammar: Parts of Speech (Gramática: Classes de Palavras)",
    subgroup: "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  "Conditionals & Wish (Condicionais)": {
    group: "Grammar: Sentence Structure (Gramática: Estrutura de Sentenças)",
    subgroup: "Conditionals & Wish (Condicionais)"
  },
  "Modal Verbs (Verbos Modais)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Modal Verbs (Verbos Modais)"
  },
  "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)": {
    group: "Grammar: Parts of Speech (Gramática: Classes de Palavras)",
    subgroup: "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  "Present Tenses (Tempos Presentes)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Present Tenses (Tempos Presentes)"
  },
  "Pronouns & Possessives (Pronomes e Possessivos)": {
    group: "Grammar: Parts of Speech (Gramática: Classes de Palavras)",
    subgroup: "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  "Future Tenses (Tempos Futuros)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Future Tenses (Tempos Futuros)"
  },
  "Gerund & Infinitive (Gerúndio e Infinitivo)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  "Phrasal Verbs (Verbos Frasais)": {
    group: "Grammar: Vocabulary & Idioms (Gramática: Vocabulário e Idiomas)",
    subgroup: "Phrasal Verbs (Verbos Frasais)"
  },
  "Prepositions (Preposições)": {
    group: "Grammar: Parts of Speech (Gramática: Classes de Palavras)",
    subgroup: "Prepositions (Preposições)"
  },
  "Past Tenses (Tempos Passados)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Past Tenses (Tempos Passados)"
  },
  "Present Perfect (Presente Perfeito)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Present Perfect (Presente Perfeito)"
  },
  "Common Verbs & Confusions (Verbos Comuns e Confusões)": {
    group: "Grammar: Vocabulary & Idioms (Gramática: Vocabulário e Idiomas)",
    subgroup: "Common Verbs & Confusions (Verbos Comuns e Confusões)"
  },
  "Passive Voice (Voz Passiva)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Passive Voice (Voz Passiva)"
  },
  "Auxiliary Verbs & Reviews (Verbos Auxiliares e Revisões)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Auxiliary Verbs & Reviews (Verbos Auxiliares e Revisões)"
  },
  "Relative Clauses (Orações Relativas)": {
    group: "Grammar: Sentence Structure (Gramática: Estrutura de Sentenças)",
    subgroup: "Relative Clauses (Orações Relativas)"
  },
  "Used to & Would (Hábito no Passado)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Used to & Would (Hábito no Passado)"
  },
  "Past Perfect (Passado Perfeito)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Past Perfect (Passado Perfeito)"
  },
  "Reported Speech (Discurso Indireto)": {
    group: "Grammar: Verbs & Tenses (Gramática: Verbos e Tempos)",
    subgroup: "Reported Speech (Discurso Indireto)"
  },
  "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)": {
    group: "Grammar: Sentence Structure (Gramática: Estrutura de Sentenças)",
    subgroup: "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  "Other Grammar Points (Outros Tópicos Gramaticais)": {
    group: "Grammar: Miscellaneous (Gramática: Diversos)",
    subgroup: "Other Grammar Points (Outros Tópicos Gramaticais)"
  },

  // Situational Groups
  "Travel, Transport & Tourism (Viagem, Transporte e Turismo)": {
    group: "Topics: Travel & Nature (Tópicos: Viagem e Natureza)",
    subgroup: "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  "Family, Relationships & People (Família, Relacionamentos e Pessoas)": {
    group: "Topics: Daily Life & Health (Tópicos: Vida Diária e Saúde)",
    subgroup: "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  "Leisure, Sports & Media (Lazer, Esportes e Mídia)": {
    group: "Topics: Work & Technology (Tópicos: Trabalho e Tecnologia)",
    subgroup: "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  "Work, Jobs & Education (Trabalho, Profissões e Educação)": {
    group: "Topics: Work & Technology (Tópicos: Trabalho e Tecnologia)",
    subgroup: "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  "Daily Life & Routines (Vida Diária e Rotinas)": {
    group: "Topics: Daily Life & Health (Tópicos: Vida Diária e Saúde)",
    subgroup: "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)": {
    group: "Topics: Daily Life & Health (Tópicos: Vida Diária e Saúde)",
    subgroup: "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  "Shopping, Money & Business (Compras, Dinheiro e Negócios)": {
    group: "Topics: Work & Technology (Tópicos: Trabalho e Tecnologia)",
    subgroup: "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  "Technology & Science (Tecnologia e Ciência)": {
    group: "Topics: Work & Technology (Tópicos: Trabalho e Tecnologia)",
    subgroup: "Technology & Science (Tecnologia e Ciência)"
  },
  "Body, Health & Medicine (Corpo, Saúde e Medicina)": {
    group: "Topics: Daily Life & Health (Tópicos: Vida Diária e Saúde)",
    subgroup: "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  "Food, Drink & Eating Out (Comida, Bebida e Restaurante)": {
    group: "Topics: Daily Life & Health (Tópicos: Vida Diária e Saúde)",
    subgroup: "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)": {
    group: "Topics: Travel & Nature (Tópicos: Viagem e Natureza)",
    subgroup: "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  }
};

// 3. Map Exercises
const mappedExercises = exercises.map((ex, index) => {
  const oldGroup = ex.group;
  
  if (oldGroup === "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)") {
    const titleLower = ex.title.toLowerCase();
    
    // Check if it's an exam/test
    if (titleLower.includes("test") || titleLower.includes("exam")) {
      return {
        ...ex,
        group: "Topics: General & Skills (Tópicos: Geral e Habilidades)",
        subgroup: "English Exams & Tests (Testes e Exames de Inglês)"
      };
    }
    
    // Check if it's a writing guide
    if (ex.category === "writing" || 
        titleLower.includes("write") || 
        titleLower.includes("writing") || 
        titleLower.includes("essay") || 
        titleLower.includes("postcard") || 
        titleLower.includes("letter") || 
        titleLower.includes("report") || 
        titleLower.includes("proposal") || 
        titleLower.includes("review")) {
      return {
        ...ex,
        group: "Topics: General & Skills (Tópicos: Geral e Habilidades)",
        subgroup: "Writing Guides & Essays (Guias de Redação e Ensaios)"
      };
    }
    
    // Default for general topics
    return {
      ...ex,
      group: "Topics: General & Skills (Tópicos: Geral e Habilidades)",
      subgroup: "Culture, Society & General Interest (Cultura, Sociedade e Interesse Geral)"
    };
  }

  const mapped = groupMapping[oldGroup];
  if (!mapped) {
    console.warn(`Warning: Group not found in mapping: "${oldGroup}" for exercise: "${ex.title}"`);
    return {
      ...ex,
      group: "Topics: General & Skills (Tópicos: Geral e Habilidades)",
      subgroup: "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
    };
  }

  return {
    ...ex,
    group: mapped.group,
    subgroup: mapped.subgroup
  };
});

// 4. Save new exercises-data.js
const newContent = `// Complete dataset of test-english.com exercises
const EXERCISES_DATA = ${JSON.stringify(mappedExercises, null, 2)};
`;

fs.writeFileSync('exercises-data.js', newContent, 'utf8');
console.log('Saved exercises-data.js with new group/subgroup taxonomy.');

// 5. Generate new README.md
// We want to group by group -> subgroup -> level -> exercise list

// To keep the order deterministic, let's define the groups and subgroups order
const order = [
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

const levelLabels = {
  "a1": "📶 A1 (Beginner)",
  "a2": "📶 A2 (Elementary)",
  "b1": "📶 B1 (Intermediate)",
  "b1-b2": "📶 B1-B2 (Pre-Upper-Intermediate)",
  "b2": "📶 B2 (Upper-Intermediate)",
  "c1": "📶 C1 (Advanced)"
};

const levelOrder = ["a1", "a2", "b1", "b1-b2", "b2", "c1"];

// Build the README markdown
let markdown = `# 🇬🇧 English Study Index - test-english.com

Este repositório contém todos os exercícios práticos do site [test-english.com](https://test-english.com/) organizados por assunto (tópicos gramaticais e situacionais) e ordenados por nível (de A1 a C1/C2). Use esta lista interativa ou o aplicativo Web local para guiar seus estudos!

> [!TIP]
> Clique nos links para abrir o exercício diretamente no navegador. As aulas e exercícios estão ordenados de forma pedagógica (do mais básico ao avançado).

## 📌 Índice Geral

`;

// Append Table of Contents
order.forEach(gOrder => {
  markdown += `### ${gOrder.emoji} ${gOrder.group}\n`;
  gOrder.subgroups.forEach(sub => {
    // Generate anchor link slug
    const slug = sub.toLowerCase()
      .replace(/[^\w\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
    markdown += `- [${sub}](#${slug})\n`;
  });
  markdown += `\n`;
});

markdown += `---\n\n`;

// Append Content Sections
order.forEach(gOrder => {
  markdown += `## ${gOrder.emoji} ${gOrder.group}\n\n`;
  
  gOrder.subgroups.forEach(sub => {
    // Filter exercises for this group and subgroup
    const subExercises = mappedExercises.filter(ex => ex.group === gOrder.group && ex.subgroup === sub);
    
    markdown += `### ${sub}\n\n`;
    
    if (subExercises.length === 0) {
      markdown += `*Nenhum exercício cadastrado para este subgrupo.*\n\n`;
      return;
    }
    
    // Group by level
    levelOrder.forEach(lvl => {
      const lvlExercises = subExercises.filter(ex => ex.level === lvl);
      if (lvlExercises.length > 0) {
        markdown += `#### ${levelLabels[lvl]}\n\n`;
        lvlExercises.forEach(ex => {
          // Identify category label (e.g. grammar-points -> grammar)
          let catLabel = ex.category;
          if (catLabel === 'grammar-points') catLabel = 'grammar';
          markdown += `- [${ex.title}](${ex.link}) (${catLabel})\n`;
        });
        markdown += `\n`;
      }
    });
  });
});

fs.writeFileSync('README.md', markdown, 'utf8');
console.log('Successfully re-generated README.md with subgroup layout.');
