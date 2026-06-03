// Complete dataset of test-english.com exercises
const EXERCISES_DATA = [
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "possessive-adjectives",
    "link": "https://test-english.com/grammar-points/a1/possessive-adjectives/",
    "title": "Possessive adjectives and subject pronouns (I/my, you/your, etc.)",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "adjectives",
    "link": "https://test-english.com/grammar-points/a1/adjectives/",
    "title": "Adjectives: Old, interesting, expensive, etc.",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "adverbs-frequency",
    "link": "https://test-english.com/grammar-points/a1/adverbs-frequency/",
    "title": "Adverbs of frequency with present simple",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "comparative-adjectives",
    "link": "https://test-english.com/grammar-points/a1/comparative-adjectives/",
    "title": "Comparative adjectives: Older than, more important than, etc.",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "superlative-adjectives",
    "link": "https://test-english.com/grammar-points/a1/superlative-adjectives/",
    "title": "Superlative adjectives: The oldest, the most important, etc.",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "adverbs-manner",
    "link": "https://test-english.com/grammar-points/a1/adverbs-manner/",
    "title": "Adverbs of manner (slowly) or adjectives (slow)?",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "comparative-superlative-adjectives-adverbs",
    "link": "https://test-english.com/grammar-points/a2/comparative-superlative-adjectives-adverbs/",
    "title": "Comparative and superlative adjectives and adverbs",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "most-most-of-the-most",
    "link": "https://test-english.com/grammar-points/a2/most-most-of-the-most/",
    "title": "Most, most of, the most",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "subject-pronouns-object-pronouns-possessive-pronouns-possessive-adjectives",
    "link": "https://test-english.com/grammar-points/a2/subject-pronouns-object-pronouns-possessive-pronouns-possessive-adjectives/",
    "title": "Subject and object pronouns, possessive pronouns and adjectives",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "no-longer-any-longer-anymore",
    "link": "https://test-english.com/grammar-points/a2/no-longer-any-longer-anymore/",
    "title": "No longer, any longer, anymore",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "comparative-superlative-adjectives-adverbs",
    "link": "https://test-english.com/grammar-points/b1/comparative-superlative-adjectives-adverbs/",
    "title": "Comparative and superlative adjectives and adverbs",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "ed-ing-adjectives-adjectives-verbs",
    "link": "https://test-english.com/grammar-points/b1/ed-ing-adjectives-adjectives-verbs/",
    "title": "-Ed/-ing adjectives: Adjectives from verbs",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "so-such-such-a-so-much-so-many",
    "link": "https://test-english.com/grammar-points/b1/so-such-such-a-so-much-so-many/",
    "title": "So, such, such a, so much, so many",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "compound-adjectives-with-numbers-a-two-day-trip",
    "link": "https://test-english.com/grammar-points/b1/compound-adjectives-with-numbers-a-two-day-trip/",
    "title": "Compound adjectives with numbers: 'a two-day trip'",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "the-the-comparatives",
    "link": "https://test-english.com/grammar-points/b1-b2/the-the-comparatives/",
    "title": "The ... the ... comparatives",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "adjectives-without-noun",
    "link": "https://test-english.com/grammar-points/b1-b2/adjectives-without-noun/",
    "title": "Adjectives without noun",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "adjective-order",
    "link": "https://test-english.com/grammar-points/b1-b2/adjective-order/",
    "title": "Adjective order",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "so-such-a-so-much-so-many",
    "link": "https://test-english.com/grammar-points/b1-b2/so-such-a-so-much-so-many/",
    "title": "So, such (a), so much, so many",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "position-of-adverbs",
    "link": "https://test-english.com/grammar-points/b1-b2/position-of-adverbs/",
    "title": "Position of adverbs and adverb phrases",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "participle-adjectives",
    "link": "https://test-english.com/grammar-points/b1-b2/participle-adjectives/",
    "title": "Participles as adjectives: -ed/-ing adjectives",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "inversion-negative-adverbials",
    "link": "https://test-english.com/grammar-points/b2/inversion-negative-adverbials/",
    "title": "Inversion with negative adverbials: Adding emphasis",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "compound-adjectives-in-english",
    "link": "https://test-english.com/grammar-points/b2/compound-adjectives-in-english/",
    "title": "Compound adjectives in English",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "comparative-structures-modifying-comparatives",
    "link": "https://test-english.com/grammar-points/b2/comparative-structures-modifying-comparatives/",
    "title": "Comparative structures: Modifying comparatives",
    "group": "Adjectives & Adverbs (Adjetivos e Advérbios)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "review-verb-tenses-a2",
    "link": "https://test-english.com/grammar-points/a2/review-verb-tenses-a2/",
    "title": "Review of all pre-intermediate verb tenses (CEFR A2)",
    "group": "Auxiliary Verbs & Reviews (Verbos Auxiliares e Revisões)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "auxiliary-verbs-do-be-and-have",
    "link": "https://test-english.com/grammar-points/a2/auxiliary-verbs-do-be-and-have/",
    "title": "Auxiliary verbs: do, be and have",
    "group": "Auxiliary Verbs & Reviews (Verbos Auxiliares e Revisões)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "review-verb-tenses-b1",
    "link": "https://test-english.com/grammar-points/b1/review-verb-tenses-b1/",
    "title": "Review of all intermediate verb tenses (CEFR B1)",
    "group": "Auxiliary Verbs & Reviews (Verbos Auxiliares e Revisões)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "auxiliary-verbs-different-uses",
    "link": "https://test-english.com/grammar-points/b1-b2/auxiliary-verbs-different-uses/",
    "title": "Auxiliary verbs: Different uses",
    "group": "Auxiliary Verbs & Reviews (Verbos Auxiliares e Revisões)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "review-verb-tenses-b1-b2",
    "link": "https://test-english.com/grammar-points/b1-b2/review-verb-tenses-b1-b2/",
    "title": "Review of all upper-intermediate verb tenses (CEFR B2.1)",
    "group": "Auxiliary Verbs & Reviews (Verbos Auxiliares e Revisões)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "use-verb-go-english",
    "link": "https://test-english.com/grammar-points/a2/use-verb-go-english/",
    "title": "How to use the verb 'go' in English",
    "group": "Common Verbs & Confusions (Verbos Comuns e Confusões)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "the-different-uses-of-the-verb-get",
    "link": "https://test-english.com/grammar-points/a2/the-different-uses-of-the-verb-get/",
    "title": "The different uses of the verb 'get'",
    "group": "Common Verbs & Confusions (Verbos Comuns e Confusões)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "do-vs-make-difference",
    "link": "https://test-english.com/grammar-points/a2/do-vs-make-difference/",
    "title": "Do vs Make: What's the difference?",
    "group": "Common Verbs & Confusions (Verbos Comuns e Confusões)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "first-conditional-future-time-clauses",
    "link": "https://test-english.com/grammar-points/a2/first-conditional-future-time-clauses/",
    "title": "First conditional and future time clauses",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "second-conditional",
    "link": "https://test-english.com/grammar-points/a2/second-conditional/",
    "title": "Second conditional",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "first-conditional-future-time-clauses",
    "link": "https://test-english.com/grammar-points/b1/first-conditional-future-time-clauses/",
    "title": "First conditional, future time clauses",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "second-conditional-unreal-situations",
    "link": "https://test-english.com/grammar-points/b1/second-conditional-unreal-situations/",
    "title": "Second conditional: Unreal situations",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "first-and-second-conditionals",
    "link": "https://test-english.com/grammar-points/b1/first-and-second-conditionals/",
    "title": "First and second conditionals",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "third-conditional-past-unreal-situations",
    "link": "https://test-english.com/grammar-points/b1/third-conditional-past-unreal-situations/",
    "title": "Third conditional: Past unreal situations",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "zero-first-conditional-future-time-clauses",
    "link": "https://test-english.com/grammar-points/b1-b2/zero-first-conditional-future-time-clauses/",
    "title": "Zero and first conditional and future time clauses",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "second-third-conditionals",
    "link": "https://test-english.com/grammar-points/b1-b2/second-third-conditionals/",
    "title": "Second and third conditionals: Unreal conditionals",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "wishes-regrets",
    "link": "https://test-english.com/grammar-points/b1-b2/wishes-regrets/",
    "title": "Wishes and regrets: I wish/if only",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "unless-even-if-provided-as-long-conditionals",
    "link": "https://test-english.com/grammar-points/b2/unless-even-if-provided-as-long-conditionals/",
    "title": "Unless, even if, provided, as long as, etc.: Other expressions in conditionals",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "all-conditionals-mixed-conditionals-alternatives-if-inversion",
    "link": "https://test-english.com/grammar-points/b2/all-conditionals-mixed-conditionals-alternatives-if-inversion/",
    "title": "All conditionals: Mixed conditionals, alternatives to 'if', inversion",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "mixed-conditionals",
    "link": "https://test-english.com/grammar-points/b2/mixed-conditionals/",
    "title": "Mixed conditionals: If I were you, I wouldn't have done it",
    "group": "Conditionals & Wish (Condicionais)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "will-and-shall",
    "link": "https://test-english.com/grammar-points/a1/will-and-shall/",
    "title": "'Will' and 'shall': Future",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "be-going-to-plans-predictions",
    "link": "https://test-english.com/grammar-points/a1/be-going-to-plans-predictions/",
    "title": "Be going to: Plans and predictions",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "will-vs-be-going-to",
    "link": "https://test-english.com/grammar-points/a2/will-vs-be-going-to/",
    "title": "'Will' vs 'be going to': Future forms",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "present-continuous-future-arrangements",
    "link": "https://test-english.com/grammar-points/a2/present-continuous-future-arrangements/",
    "title": "Present continuous for future arrangements",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "future-forms",
    "link": "https://test-english.com/grammar-points/b1/future-forms/",
    "title": "Future forms: Will, be going to, present continuous",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "future-continuous-and-future-perfect",
    "link": "https://test-english.com/grammar-points/b1-b2/future-continuous-and-future-perfect/",
    "title": "Future continuous and future perfect",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "future-forms-expressing-future-time",
    "link": "https://test-english.com/grammar-points/b2/future-forms-expressing-future-time/",
    "title": "Future forms: Expressing future time",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "ways-express-future",
    "link": "https://test-english.com/grammar-points/b2/ways-express-future/",
    "title": "Other ways to express future: Be about to, be due to, etc.",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "future-in-the-past",
    "link": "https://test-english.com/grammar-points/b2/future-in-the-past/",
    "title": "Future in the past",
    "group": "Future Tenses (Tempos Futuros)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "verbs-infinitive-verbs-ing",
    "link": "https://test-english.com/grammar-points/a1/verbs-infinitive-verbs-ing/",
    "title": "Verbs + to + infinitive and verbs + -ing",
    "group": "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "purpose-to-for",
    "link": "https://test-english.com/grammar-points/a2/purpose-to-for/",
    "title": "Expressing purpose with 'to' and 'for'",
    "group": "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "infinitives-and-gerunds",
    "link": "https://test-english.com/grammar-points/a2/infinitives-and-gerunds/",
    "title": "Infinitives and gerunds: Verb patterns",
    "group": "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "gerund-or-infinitive-do-to-do-doing",
    "link": "https://test-english.com/grammar-points/b1/gerund-or-infinitive-do-to-do-doing/",
    "title": "Gerund or infinitive: Do, to do, doing",
    "group": "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "gerund-or-infinitive",
    "link": "https://test-english.com/grammar-points/b1-b2/gerund-or-infinitive/",
    "title": "Gerund or infinitive: Verb patterns",
    "group": "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "verb-object-infinitive-gerund",
    "link": "https://test-english.com/grammar-points/b2/verb-object-infinitive-gerund/",
    "title": "Verb + object + infinitive/gerund: Verb patterns",
    "group": "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "gerunds-infinitives-complex-forms",
    "link": "https://test-english.com/grammar-points/b2/gerunds-infinitives-complex-forms/",
    "title": "Gerunds and infinitives: Complex forms",
    "group": "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "reduced-infinitives-omitting-the-infinitive-phrase-after-to",
    "link": "https://test-english.com/grammar-points/b2/reduced-infinitives-omitting-the-infinitive-phrase-after-to/",
    "title": "Reduced infinitives: Omitting the infinitive phrase after 'to'",
    "group": "Gerund & Infinitive (Gerúndio e Infinitivo)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "can-cant",
    "link": "https://test-english.com/grammar-points/a1/can-cant/",
    "title": "Can, can't: Ability, possibility, permission",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "have-to-dont-have-to-must-mustnt",
    "link": "https://test-english.com/grammar-points/a2/have-to-dont-have-to-must-mustnt/",
    "title": "Have to, don't have to, must, mustn't",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "should-shouldnt",
    "link": "https://test-english.com/grammar-points/a2/should-shouldnt/",
    "title": "Should, shouldn't",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "can-could-be-able-to",
    "link": "https://test-english.com/grammar-points/b1/can-could-be-able-to/",
    "title": "Can, could, be able to: Ability and possibility",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "have-to-must-should",
    "link": "https://test-english.com/grammar-points/b1/have-to-must-should/",
    "title": "Have to, must, should: Obligation, prohibition, necessity, advice",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "modal-verbs-of-deduction",
    "link": "https://test-english.com/grammar-points/b1/modal-verbs-of-deduction/",
    "title": "Modal verbs of deduction: Must, may, might, could, can't",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "had-better-its-time",
    "link": "https://test-english.com/grammar-points/b1/had-better-its-time/",
    "title": "Had better... It's time...",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "past-modal-verbs",
    "link": "https://test-english.com/grammar-points/b1-b2/past-modal-verbs/",
    "title": "Past modal verbs of deduction",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "neednt-dont-need-to-didnt-need-to-neednt-have",
    "link": "https://test-english.com/grammar-points/b1-b2/neednt-dont-need-to-didnt-need-to-neednt-have/",
    "title": "Needn't, don't need to, didn't need to, needn't have",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "modal-verbs-permission-obligation-prohibition-necessity",
    "link": "https://test-english.com/grammar-points/b2/modal-verbs-permission-obligation-prohibition-necessity/",
    "title": "Modal verbs: Permission, obligation, prohibition, necessity",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "c1",
    "slug": "advanced-modal-verbs-will-would-and-should",
    "link": "https://test-english.com/grammar-points/c1/advanced-modal-verbs-will-would-and-should/",
    "title": "Advanced modal verbs: will, would and should",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "c1",
    "slug": "advanced-modal-verbs-can-be-able-to-may-might",
    "link": "https://test-english.com/grammar-points/c1/advanced-modal-verbs-can-be-able-to-may-might/",
    "title": "Advanced modal verbs: can / be able to, may / might",
    "group": "Modal Verbs (Verbos Modais)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "a-an-plurals",
    "link": "https://test-english.com/grammar-points/a1/a-an-plurals/",
    "title": "A/an, plurals: Singular and plural forms",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "a-some-any-countable-uncountable",
    "link": "https://test-english.com/grammar-points/a1/a-some-any-countable-uncountable/",
    "title": "A, some, any: Countable and uncountable nouns",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "much-many-lot-little-few",
    "link": "https://test-english.com/grammar-points/a1/much-many-lot-little-few/",
    "title": "Much, many, a lot of, a little, a few",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "a-an-the-no-article",
    "link": "https://test-english.com/grammar-points/a1/a-an-the-no-article/",
    "title": "A/an, the, no article: The use of articles in English",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "much-many-little-few-some-any",
    "link": "https://test-english.com/grammar-points/a2/much-many-little-few-some-any/",
    "title": "Much, many, little, few, some, any: Quantifiers",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "an-the-no-article",
    "link": "https://test-english.com/grammar-points/b1/an-the-no-article/",
    "title": "A(n), the, no article",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "much-many-lot-little-no",
    "link": "https://test-english.com/grammar-points/b1/much-many-lot-little-no/",
    "title": "Much, many, a lot, little, few, some, any, no: Quantifiers",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "all-both",
    "link": "https://test-english.com/grammar-points/b1/all-both/",
    "title": "All, both: Quantifiers",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "both-either-neither",
    "link": "https://test-english.com/grammar-points/b1/both-either-neither/",
    "title": "Both, either, neither: Quantifiers",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "any-no-none",
    "link": "https://test-english.com/grammar-points/b1/any-no-none/",
    "title": "Any, no, none: Quantifiers",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "quantifiers",
    "link": "https://test-english.com/grammar-points/b1-b2/quantifiers/",
    "title": "Quantifiers: All, most, both, either, neither, any, no, none",
    "group": "Nouns, Articles & Quantifiers (Substantivos, Artigos e Quantificadores)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "would-like",
    "link": "https://test-english.com/grammar-points/a1/would-like/",
    "title": "Would you like...? I'd like...",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "next-to-under-between-in-front-behind-etc",
    "link": "https://test-english.com/grammar-points/a1/next-to-under-between-in-front-behind-etc/",
    "title": "Next to, under, between, in front of, behind, over, etc.",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "too-too-much-too-many-enough",
    "link": "https://test-english.com/grammar-points/a2/too-too-much-too-many-enough/",
    "title": "Too, too much, too many, enough",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "might-might-not",
    "link": "https://test-english.com/grammar-points/a2/might-might-not/",
    "title": "Might, might not: Possibility",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "on-time-vs-in-time-at-the-end-vs-in-the-end",
    "link": "https://test-english.com/grammar-points/a2/on-time-vs-in-time-at-the-end-vs-in-the-end/",
    "title": "On time vs In time, At the end vs In the end",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "may-and-might-whats-the-difference",
    "link": "https://test-english.com/grammar-points/a2/may-and-might-whats-the-difference/",
    "title": "May and might: What's the difference?",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "during-for-while",
    "link": "https://test-english.com/grammar-points/b1/during-for-while/",
    "title": "During, for, while",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "for-since-from-difference",
    "link": "https://test-english.com/grammar-points/b1/for-since-from-difference/",
    "title": "For, since, from: What's the difference?",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "would-rather-would-sooner",
    "link": "https://test-english.com/grammar-points/b1/would-rather-would-sooner/",
    "title": "Would rather & Would sooner",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "narrative-tenses",
    "link": "https://test-english.com/grammar-points/b1-b2/narrative-tenses/",
    "title": "Narrative tenses: All past tenses",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "likely-unlikely-bound-definitely-probably",
    "link": "https://test-english.com/grammar-points/b1-b2/likely-unlikely-bound-definitely-probably/",
    "title": "Likely, unlikely, bound, definitely, probably: Probability",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "would-rather-would-prefer",
    "link": "https://test-english.com/grammar-points/b1-b2/would-rather-would-prefer/",
    "title": "Would rather, would prefer: Expressing preference",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "verbs-of-the-senses",
    "link": "https://test-english.com/grammar-points/b1-b2/verbs-of-the-senses/",
    "title": "Verbs of the senses: look, sound, feel, etc.",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "have-something-done",
    "link": "https://test-english.com/grammar-points/b1-b2/have-something-done/",
    "title": "Have something done",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "reporting-verbs",
    "link": "https://test-english.com/grammar-points/b1-b2/reporting-verbs/",
    "title": "Reporting verbs: Admit doing, refuse to do, etc.",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "whatever-whenever-wherever-whoever-however",
    "link": "https://test-english.com/grammar-points/b1-b2/whatever-whenever-wherever-whoever-however/",
    "title": "Whatever, whenever, wherever, whoever, however",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "already-still-yet-whats-the-difference",
    "link": "https://test-english.com/grammar-points/b1-b2/already-still-yet-whats-the-difference/",
    "title": "Already, still, yet: What's the difference?",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "pretty-rather-quite-fairly-intensifiers",
    "link": "https://test-english.com/grammar-points/b1-b2/pretty-rather-quite-fairly-intensifiers/",
    "title": "Pretty, rather, quite, fairly: Adverbs of degree",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "when-i-do-vs-when-i-have-done",
    "link": "https://test-english.com/grammar-points/b1-b2/when-i-do-vs-when-i-have-done/",
    "title": "When I do vs When I have done: Future time clauses",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "do-or-make-which-is-it",
    "link": "https://test-english.com/grammar-points/b1-b2/do-or-make-which-is-it/",
    "title": "Do or Make: Which is it?",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "double-negatives-in-english",
    "link": "https://test-english.com/grammar-points/b1-b2/double-negatives-in-english/",
    "title": "Double negatives in English",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "have-auxiliary-main-verb",
    "link": "https://test-english.com/grammar-points/b2/have-auxiliary-main-verb/",
    "title": "Have: Auxiliary or main verb",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "there-and-it",
    "link": "https://test-english.com/grammar-points/b2/there-and-it/",
    "title": "'There' and 'it': Preparatory subjects",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "get",
    "link": "https://test-english.com/grammar-points/b2/get/",
    "title": "Get: Different meanings",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "discourse-markers",
    "link": "https://test-english.com/grammar-points/b2/discourse-markers/",
    "title": "Discourse markers: Linking words",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "speculation-deduction",
    "link": "https://test-english.com/grammar-points/b2/speculation-deduction/",
    "title": "Speculation and deduction: Modal verbs and expressions",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "distancing",
    "link": "https://test-english.com/grammar-points/b2/distancing/",
    "title": "Distancing: Expressions and passive of reporting verbs",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "verbs-of-the-senses",
    "link": "https://test-english.com/grammar-points/b2/verbs-of-the-senses/",
    "title": "Verbs of the senses",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "ellipsis-and-substitution",
    "link": "https://test-english.com/grammar-points/b2/ellipsis-and-substitution/",
    "title": "Ellipsis and substitution: Omitting or replacing words",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "c1",
    "slug": "the-subjunctive-in-english-present-and-past",
    "link": "https://test-english.com/grammar-points/c1/the-subjunctive-in-english-present-and-past/",
    "title": "The subjunctive in English: Present and past",
    "group": "Other Grammar Points (Outros Tópicos Gramaticais)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "present-past-simple-passive",
    "link": "https://test-english.com/grammar-points/a2/present-past-simple-passive/",
    "title": "Present and past simple passive: 'be' + past participle",
    "group": "Passive Voice (Voz Passiva)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "passive-verb-forms",
    "link": "https://test-english.com/grammar-points/b1/passive-verb-forms/",
    "title": "Passive verb forms",
    "group": "Passive Voice (Voz Passiva)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "active-passive-voice",
    "link": "https://test-english.com/grammar-points/b1/active-passive-voice/",
    "title": "Active and passive voice",
    "group": "Passive Voice (Voz Passiva)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "passive-voice-all-tenses",
    "link": "https://test-english.com/grammar-points/b1-b2/passive-voice-all-tenses/",
    "title": "The passive voice: All tenses",
    "group": "Passive Voice (Voz Passiva)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "passive-reporting-verbs",
    "link": "https://test-english.com/grammar-points/b1-b2/passive-reporting-verbs/",
    "title": "The passive with reporting verbs: It is said that ...",
    "group": "Passive Voice (Voz Passiva)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "passive-verbs-with-two-objects",
    "link": "https://test-english.com/grammar-points/b2/passive-verbs-with-two-objects/",
    "title": "Passive verbs with two objects",
    "group": "Passive Voice (Voz Passiva)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "past-perfect",
    "link": "https://test-english.com/grammar-points/a2/past-perfect/",
    "title": "Past perfect",
    "group": "Past Perfect (Passado Perfeito)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "past-simple-past-continuous-past-perfect",
    "link": "https://test-english.com/grammar-points/b1/past-simple-past-continuous-past-perfect/",
    "title": "Past simple, past continuous, past perfect",
    "group": "Past Perfect (Passado Perfeito)"
  },
  {
    "category": "grammar-points",
    "level": "c1",
    "slug": "advanced-past-simple-past-continuous-past-perfect",
    "link": "https://test-english.com/grammar-points/c1/advanced-past-simple-past-continuous-past-perfect/",
    "title": "Advanced past simple, past continuous & past perfect",
    "group": "Past Perfect (Passado Perfeito)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "was-were",
    "link": "https://test-english.com/grammar-points/a1/was-were/",
    "title": "Was/were: Past simple of 'be'",
    "group": "Past Tenses (Tempos Passados)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "past-simple-regular-irregular",
    "link": "https://test-english.com/grammar-points/a1/past-simple-regular-irregular/",
    "title": "Past simple: Regular/irregular verbs",
    "group": "Past Tenses (Tempos Passados)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "past-simple-negatives-questions",
    "link": "https://test-english.com/grammar-points/a1/past-simple-negatives-questions/",
    "title": "Past simple: Negatives and questions",
    "group": "Past Tenses (Tempos Passados)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "past-simple-form-use",
    "link": "https://test-english.com/grammar-points/a2/past-simple-form-use/",
    "title": "Past simple: Form and use",
    "group": "Past Tenses (Tempos Passados)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "past-continuous-past-simple",
    "link": "https://test-english.com/grammar-points/a2/past-continuous-past-simple/",
    "title": "Past continuous and past simple",
    "group": "Past Tenses (Tempos Passados)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "unreal-uses-past-tenses",
    "link": "https://test-english.com/grammar-points/b2/unreal-uses-past-tenses/",
    "title": "Wish, rather, if only, it's time: Unreal uses of past tenses",
    "group": "Past Tenses (Tempos Passados)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "phrasal-verbs-transitive-and-intransitive-separable-and-inseparable",
    "link": "https://test-english.com/grammar-points/a2/phrasal-verbs-transitive-and-intransitive-separable-and-inseparable/",
    "title": "Phrasal verbs: Transitive / intransitive, separable / inseparable",
    "group": "Phrasal Verbs (Verbos Frasais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "b1-phrasal-verbs-1-exercises-explanation",
    "link": "https://test-english.com/grammar-points/b1/b1-phrasal-verbs-1-exercises-explanation/",
    "title": "B1 Phrasal verbs 1: Exercises and explanation",
    "group": "Phrasal Verbs (Verbos Frasais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "b1-phrasal-verbs-2-exercises-and-explanation",
    "link": "https://test-english.com/grammar-points/b1/b1-phrasal-verbs-2-exercises-and-explanation/",
    "title": "B1 Phrasal verbs 2: Exercises and explanation",
    "group": "Phrasal Verbs (Verbos Frasais)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "b1-phrasal-verbs-3-exercises-and-explanation",
    "link": "https://test-english.com/grammar-points/b1/b1-phrasal-verbs-3-exercises-and-explanation/",
    "title": "B1 Phrasal verbs 3: Exercises and explanation",
    "group": "Phrasal Verbs (Verbos Frasais)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "at-in-on-prepositions-time",
    "link": "https://test-english.com/grammar-points/a1/at-in-on-prepositions-time/",
    "title": "At, in, on: Prepositions of time",
    "group": "Prepositions (Preposições)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "at-in-on-prepositions-of-place",
    "link": "https://test-english.com/grammar-points/a1/at-in-on-prepositions-of-place/",
    "title": "At, in, on: Prepositions of place",
    "group": "Prepositions (Preposições)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "subject-questions-questions-preposition",
    "link": "https://test-english.com/grammar-points/a2/subject-questions-questions-preposition/",
    "title": "Subject questions, questions with preposition",
    "group": "Prepositions (Preposições)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "prepositions-of-movement",
    "link": "https://test-english.com/grammar-points/a2/prepositions-of-movement/",
    "title": "Prepositions of movement: Along, across, over, etc.",
    "group": "Prepositions (Preposições)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "verb-preposition",
    "link": "https://test-english.com/grammar-points/b1/verb-preposition/",
    "title": "Verb + preposition: Dependent prepositions",
    "group": "Prepositions (Preposições)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "adjective-preposition",
    "link": "https://test-english.com/grammar-points/b1/adjective-preposition/",
    "title": "Adjective + preposition: Dependent prepositions",
    "group": "Prepositions (Preposições)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "50-common-noun-preposition-collocations",
    "link": "https://test-english.com/grammar-points/b2/50-common-noun-preposition-collocations/",
    "title": "50 common Noun + Preposition collocations",
    "group": "Prepositions (Preposições)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "present-perfect",
    "link": "https://test-english.com/grammar-points/a2/present-perfect/",
    "title": "Present perfect: Form and use",
    "group": "Present Perfect (Presente Perfeito)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "present-perfect-or-past-simple",
    "link": "https://test-english.com/grammar-points/a2/present-perfect-or-past-simple/",
    "title": "Present perfect or past simple?",
    "group": "Present Perfect (Presente Perfeito)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "past-simple-present-perfect",
    "link": "https://test-english.com/grammar-points/b1/past-simple-present-perfect/",
    "title": "Past simple or present perfect?",
    "group": "Present Perfect (Presente Perfeito)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "present-perfect-simple-present-perfect-continuous",
    "link": "https://test-english.com/grammar-points/b1/present-perfect-simple-present-perfect-continuous/",
    "title": "Present perfect simple and present perfect continuous",
    "group": "Present Perfect (Presente Perfeito)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "present-perfect-simple-continuous",
    "link": "https://test-english.com/grammar-points/b1-b2/present-perfect-simple-continuous/",
    "title": "Present perfect simple or continuous",
    "group": "Present Perfect (Presente Perfeito)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "present-simple-forms-of-to-be",
    "link": "https://test-english.com/grammar-points/a1/present-simple-forms-of-to-be/",
    "title": "Present simple forms of 'to be': am/is/are",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "present-simple",
    "link": "https://test-english.com/grammar-points/a1/present-simple/",
    "title": "Present simple: I do, I don't, Do I?",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "present-continuous",
    "link": "https://test-english.com/grammar-points/a1/present-continuous/",
    "title": "Present continuous: I'm doing, I'm not doing, Are you doing?",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "present-simple-present-continuous",
    "link": "https://test-english.com/grammar-points/a1/present-simple-present-continuous/",
    "title": "Present simple or present continuous?",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "imperative-sit-dont-talk",
    "link": "https://test-english.com/grammar-points/a1/imperative-sit-dont-talk/",
    "title": "The imperative: Sit down! Don’t talk!",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "have-got",
    "link": "https://test-english.com/grammar-points/a1/have-got/",
    "title": "Have got",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "present-simple-continuous",
    "link": "https://test-english.com/grammar-points/a2/present-simple-continuous/",
    "title": "Present simple vs present continuous",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "stative-vs-dynamic-verbs-or-non-action-vs-action-verbs",
    "link": "https://test-english.com/grammar-points/a2/stative-vs-dynamic-verbs-or-non-action-vs-action-verbs/",
    "title": "Stative vs dynamic verbs (or non-action vs action verbs)",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "present-simple-present-continuous",
    "link": "https://test-english.com/grammar-points/b1/present-simple-present-continuous/",
    "title": "Present simple or present continuous",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "usually-used-to-be-used-to-get-used-to",
    "link": "https://test-english.com/grammar-points/b1/usually-used-to-be-used-to-get-used-to/",
    "title": "Usually, used to, be used to, get used to",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "c1",
    "slug": "advanced-present-simple-and-present-continuous",
    "link": "https://test-english.com/grammar-points/c1/advanced-present-simple-and-present-continuous/",
    "title": "Advanced present simple and present continuous",
    "group": "Present Tenses (Tempos Presentes)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "this-that-these-those",
    "link": "https://test-english.com/grammar-points/a1/this-that-these-those/",
    "title": "This, that, these, those",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "object-pronouns",
    "link": "https://test-english.com/grammar-points/a1/object-pronouns/",
    "title": "Object pronouns vs subject pronouns: Me or I, she or her?",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "there-is-there-are",
    "link": "https://test-english.com/grammar-points/a1/there-is-there-are/",
    "title": "There is, there are / there was, there were",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "there-it",
    "link": "https://test-english.com/grammar-points/a1/there-it/",
    "title": "There or It",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "the-difference-between-this-and-it",
    "link": "https://test-english.com/grammar-points/a1/the-difference-between-this-and-it/",
    "title": "The difference between 'this' and 'it'",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "something-anything-nothing-etc",
    "link": "https://test-english.com/grammar-points/a2/something-anything-nothing-etc/",
    "title": "Something, anything, nothing, etc.",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "another-other-others-the-other-the-others",
    "link": "https://test-english.com/grammar-points/b1/another-other-others-the-other-the-others/",
    "title": "Another, other, others, the other, the others",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "reflexive-pronouns-myself-yourself",
    "link": "https://test-english.com/grammar-points/b1/reflexive-pronouns-myself-yourself/",
    "title": "Reflexive pronouns: Myself, yourself, etc.",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "generic-pronouns",
    "link": "https://test-english.com/grammar-points/b2/generic-pronouns/",
    "title": "Generic or common-gender pronouns",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "reflexive-reciprocal-pronouns",
    "link": "https://test-english.com/grammar-points/b2/reflexive-reciprocal-pronouns/",
    "title": "Reflexive and reciprocal pronouns",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "compound-nouns-possessive-forms",
    "link": "https://test-english.com/grammar-points/b2/compound-nouns-possessive-forms/",
    "title": "Compound nouns and possessive forms",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "possessive-s-with-time-expressions-two-hours-walk",
    "link": "https://test-english.com/grammar-points/b2/possessive-s-with-time-expressions-two-hours-walk/",
    "title": "Possessive ’s with time expressions: Two hours’ walk",
    "group": "Pronouns & Possessives (Pronomes e Possessivos)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "whose-possessive-s",
    "link": "https://test-english.com/grammar-points/a1/whose-possessive-s/",
    "title": "Whose, possessive 's: Whose is this? It's Mike's",
    "group": "Relative Clauses (Orações Relativas)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "defining-relative-clauses-who-which-that-where",
    "link": "https://test-english.com/grammar-points/a2/defining-relative-clauses-who-which-that-where/",
    "title": "Defining relative clauses: Who, which, that, where",
    "group": "Relative Clauses (Orações Relativas)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "defining-and-non-defining-relative-clauses",
    "link": "https://test-english.com/grammar-points/b1/defining-and-non-defining-relative-clauses/",
    "title": "Defining and non-defining relative clauses",
    "group": "Relative Clauses (Orações Relativas)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "relative-clauses",
    "link": "https://test-english.com/grammar-points/b2/relative-clauses/",
    "title": "Relative clauses: Defining and non-defining",
    "group": "Relative Clauses (Orações Relativas)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "reported-speech-indirect-speech",
    "link": "https://test-english.com/grammar-points/a2/reported-speech-indirect-speech/",
    "title": "Reported speech / Indirect speech",
    "group": "Reported Speech (Discurso Indireto)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "reported-speech-indirect-speech",
    "link": "https://test-english.com/grammar-points/b1/reported-speech-indirect-speech/",
    "title": "Indirect speech / Reported speech",
    "group": "Reported Speech (Discurso Indireto)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "questions",
    "link": "https://test-english.com/grammar-points/a1/questions/",
    "title": "Questions: Word order and question words",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "conjunctions_and-but-or-so-because",
    "link": "https://test-english.com/grammar-points/a1/conjunctions_and-but-or-so-because/",
    "title": "Conjunctions: And, but, or, so, because",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "a1",
    "slug": "basic-word-order-in-english",
    "link": "https://test-english.com/grammar-points/a1/basic-word-order-in-english/",
    "title": "Basic word order in English",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "asking-questions-in-english",
    "link": "https://test-english.com/grammar-points/a2/asking-questions-in-english/",
    "title": "Asking questions in English: Question forms",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "however-although-time-connectors",
    "link": "https://test-english.com/grammar-points/a2/however-although-time-connectors/",
    "title": "However, although, because, so, and time connectors",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "so-neither",
    "link": "https://test-english.com/grammar-points/a2/so-neither/",
    "title": "So, neither: So am I, neither do I, etc.",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "verbs-with-two-objects",
    "link": "https://test-english.com/grammar-points/a2/verbs-with-two-objects/",
    "title": "Verbs with two objects",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "question-tags",
    "link": "https://test-english.com/grammar-points/b1/question-tags/",
    "title": "Question tags: Aren't you? don't you?",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "b1",
    "slug": "clauses-contrast-purpose-reason",
    "link": "https://test-english.com/grammar-points/b1/clauses-contrast-purpose-reason/",
    "title": "Clauses of contrast, purpose and reason",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "questions-different-types",
    "link": "https://test-english.com/grammar-points/b1-b2/questions-different-types/",
    "title": "Questions: Different types",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "indirect-questions",
    "link": "https://test-english.com/grammar-points/b1-b2/indirect-questions/",
    "title": "Indirect questions",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "clauses-contrast-purpose",
    "link": "https://test-english.com/grammar-points/b1-b2/clauses-contrast-purpose/",
    "title": "Clauses of contrast and purpose",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "clauses-contrast-purpose-reason-result",
    "link": "https://test-english.com/grammar-points/b2/clauses-contrast-purpose-reason-result/",
    "title": "Clauses of contrast, purpose, reason and result",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "cleft-sentences",
    "link": "https://test-english.com/grammar-points/b2/cleft-sentences/",
    "title": "Cleft sentences: Adding emphasis",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "participle-clauses",
    "link": "https://test-english.com/grammar-points/b2/participle-clauses/",
    "title": "Participle clauses",
    "group": "Sentence Structure & Conjunctions (Estrutura de Sentenças e Conjunções)"
  },
  {
    "category": "grammar-points",
    "level": "a2",
    "slug": "used-to",
    "link": "https://test-english.com/grammar-points/a2/used-to/",
    "title": "Used to, didn't use to: Past habits and states",
    "group": "Used to & Would (Hábito no Passado)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "used-to",
    "link": "https://test-english.com/grammar-points/b1-b2/used-to/",
    "title": "Used to, be used to, get used to",
    "group": "Used to & Would (Hábito no Passado)"
  },
  {
    "category": "grammar-points",
    "level": "b1-b2",
    "slug": "would-and-used-to",
    "link": "https://test-english.com/grammar-points/b1-b2/would-and-used-to/",
    "title": "Would and used to: Past habits and repeated actions",
    "group": "Used to & Would (Hábito no Passado)"
  },
  {
    "category": "grammar-points",
    "level": "b2",
    "slug": "narrative-tenses-used-to-would",
    "link": "https://test-english.com/grammar-points/b2/narrative-tenses-used-to-would/",
    "title": "Narrative tenses, used to, would",
    "group": "Used to & Would (Hábito no Passado)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "parts-of-the-body-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/parts-of-the-body-a1-english-vocabulary/",
    "title": "Parts of the body",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "how-do-you-keep-fit-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/how-do-you-keep-fit-b1-english-listening-test/",
    "title": "How do you keep fit?",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "the-body-parts-and-actions-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/the-body-parts-and-actions-b1-english-vocabulary/",
    "title": "The body: parts and actions",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "health-problems-b1-b2-english-listening-test",
    "link": "https://test-english.com/listening/b1-b2/health-problems-b1-b2-english-listening-test/",
    "title": "Health problems",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "your-mental-health-starts-in-your-gut-b1-english-reading",
    "link": "https://test-english.com/reading/b1-b2/your-mental-health-starts-in-your-gut-b1-english-reading/",
    "title": "Your mental health starts in your gut",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "health-problems-and-injuries-b1-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/health-problems-and-injuries-b1-b2-english-vocabulary/",
    "title": "Health problems and injuries",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "can-music-be-medicine-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/can-music-be-medicine-b2-english-listening-test/",
    "title": "Can music be medicine?",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "researchers-investigate-bush-medicine",
    "link": "https://test-english.com/listening/b2/researchers-investigate-bush-medicine/",
    "title": "Researchers investigate bush medicine",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "personality-and-health-reading-test",
    "link": "https://test-english.com/reading/b2/personality-and-health-reading-test/",
    "title": "Personality and health",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "stay-fit-happy-healthy",
    "link": "https://test-english.com/reading/b2/stay-fit-happy-healthy/",
    "title": "How to stay fit, happy and healthy",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "health-and-sickness-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/health-and-sickness-b2-english-vocabulary/",
    "title": "Health and sickness",
    "group": "Body, Health & Medicine (Corpo, Saúde e Medicina)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "tell-me-about-your-life-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/tell-me-about-your-life-a1-english-listening-test/",
    "title": "Tell me about your life",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "what-did-you-do-last-weekend-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/what-did-you-do-last-weekend-a1-english-listening-test/",
    "title": "What did you do last weekend? (Past simple)",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "free-time-listening-test",
    "link": "https://test-english.com/listening/a1/free-time-listening-test/",
    "title": "Free time",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "weekend-plans-listening-test",
    "link": "https://test-english.com/listening/a1/weekend-plans-listening-test/",
    "title": "Weekend plans",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "living-on-an-island-listening-test",
    "link": "https://test-english.com/listening/a1/living-on-an-island-listening-test/",
    "title": "Living on an island",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "daily-routines-listening-test",
    "link": "https://test-english.com/listening/a1/daily-routines-listening-test/",
    "title": "Daily routines",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "my-life-abroad-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/my-life-abroad-a1-english-reading-test/",
    "title": "My life abroad",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "a-day-in-the-life-of-an-airline-pilot-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/a-day-in-the-life-of-an-airline-pilot-a1-english-reading-test/",
    "title": "A day in the life of an airline pilot",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "daily-routines-sportswoman",
    "link": "https://test-english.com/reading/a1/daily-routines-sportswoman/",
    "title": "The daily routines of a sportswoman",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "what-do-you-do-with-free-time",
    "link": "https://test-english.com/reading/a1/what-do-you-do-with-free-time/",
    "title": "What do you do with your free time?",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "pancake-day-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/pancake-day-a1-english-reading-test/",
    "title": "Pancake Day (British traditions)",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "daily-routines-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/daily-routines-a1-english-vocabulary/",
    "title": "Daily routines",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "days-months-seasons-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/days-months-seasons-a1-english-vocabulary/",
    "title": "Days, months and seasons",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "time-words-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/time-words-a1-english-vocabulary/",
    "title": "Time words",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "writing-about-my-daily-routine",
    "link": "https://test-english.com/writing/a1/writing-about-my-daily-routine/",
    "title": "Writing about my daily routine",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "new-years-resolutions-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/new-years-resolutions-a2-english-listening-test/",
    "title": "New Year's resolutions (Be going to)",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "what-were-you-doing-at-the-time-of-the-murder-past-tenses-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/what-were-you-doing-at-the-time-of-the-murder-past-tenses-a2-english-listening-test/",
    "title": "What were you doing at the time of the murder? (Past tenses)",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "life-changes-listening-test",
    "link": "https://test-english.com/listening/a2/life-changes-listening-test/",
    "title": "Life changes",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "how-my-life-has-changed-a2-english-reading-test",
    "link": "https://test-english.com/reading/a2/how-my-life-has-changed-a2-english-reading-test/",
    "title": "How my life has changed",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "how-will-life-be-different-after-covid-19-a2-english-reading-test",
    "link": "https://test-english.com/reading/a2/how-will-life-be-different-after-covid-19-a2-english-reading-test/",
    "title": "How will life be different after Covid-19?",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "chinese-new-year",
    "link": "https://test-english.com/reading/a2/chinese-new-year/",
    "title": "Chinese New Year",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "living-with-your-ex-after-a-break-up-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/living-with-your-ex-after-a-break-up-b1-english-listening-test/",
    "title": "Living with your ex after a break-up",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "why-saint-patricks-day-went-global-b1-listening-test",
    "link": "https://test-english.com/listening/b1/why-saint-patricks-day-went-global-b1-listening-test/",
    "title": "Why Saint Patrick’s day went global",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "more-daily-routines-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/more-daily-routines-b1-english-vocabulary/",
    "title": "More daily routines",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "free-time-activities-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/free-time-activities-b1-english-vocabulary/",
    "title": "Free time activities",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "age-and-life-stages-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/age-and-life-stages-b1-english-vocabulary/",
    "title": "Age and life stages",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "culture-shock-living-abroad-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1-b2/culture-shock-living-abroad-b1-english-listening-test/",
    "title": "Culture shock: Living abroad",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "the-alcohol-free-month-challenge-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/the-alcohol-free-month-challenge-b1-english-reading-test/",
    "title": "The alcohol-free month challenge",
    "group": "Daily Life & Routines (Vida Diária e Rotinas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "comparing-things-and-people-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/comparing-things-and-people-a1-english-listening-test/",
    "title": "Comparing things and people",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "describing-people-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/describing-people-a1-english-listening-test/",
    "title": "Describing people",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "looking-for-a-man-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/looking-for-a-man-a1-english-listening-test/",
    "title": "Looking for a man",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "my-family-listening-test",
    "link": "https://test-english.com/listening/a1/my-family-listening-test/",
    "title": "My family",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "what-are-they-wearing-clothes-listening-test",
    "link": "https://test-english.com/listening/a1/what-are-they-wearing-clothes-listening-test/",
    "title": "What are they wearing? Clothes",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "about-my-family",
    "link": "https://test-english.com/reading/a1/about-my-family/",
    "title": "About my family (Describing people)",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "family-and-relatives-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/family-and-relatives-a1-english-vocabulary/",
    "title": "Family and relatives",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "opposite-adjectives-for-describing-people-and-things-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/opposite-adjectives-for-describing-people-and-things-a1-english-vocabulary/",
    "title": "Opposite adjectives for describing people and things",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "clothes-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/clothes-a1-english-vocabulary/",
    "title": "Clothes",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "writing-about-my-family",
    "link": "https://test-english.com/writing/a1/writing-about-my-family/",
    "title": "Writing about my family",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "describing-a-photograph-a1-english-writing",
    "link": "https://test-english.com/writing/a1/describing-a-photograph-a1-english-writing/",
    "title": "Describing a photograph",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "my-friends-listening-test",
    "link": "https://test-english.com/listening/a2/my-friends-listening-test/",
    "title": "My friends",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "elisas-family-listening-test",
    "link": "https://test-english.com/listening/a2/elisas-family-listening-test/",
    "title": "Elisa's family",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "man-with-most-world-records-reading-test",
    "link": "https://test-english.com/reading/a2/man-with-most-world-records-reading-test/",
    "title": "The man with the most world records",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "describing-peoples-appearance-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/describing-peoples-appearance-a2-english-vocabulary/",
    "title": "Describing people's appearance",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "describing-peoples-personality-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/describing-peoples-personality-a2-english-vocabulary/",
    "title": "Describing people's personality",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "clothes-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/clothes-a2-english-vocabulary/",
    "title": "Clothes",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "a-biography-of-someone-you-know-a2-english-writing",
    "link": "https://test-english.com/writing/a2/a-biography-of-someone-you-know-a2-english-writing/",
    "title": "A biography of someone you know",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "stories-of-relationships-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/stories-of-relationships-b1-english-listening-test/",
    "title": "Stories of relationships",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "children-new-billionaires-b1-listening-test",
    "link": "https://test-english.com/listening/b1/children-new-billionaires-b1-listening-test/",
    "title": "Children: New billionaires",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "biography-albert-einstein-listening-test",
    "link": "https://test-english.com/listening/b1/biography-albert-einstein-listening-test/",
    "title": "Biography of Albert Einstein",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "family-expecting-17th-child-listening-test",
    "link": "https://test-english.com/listening/b1/family-expecting-17th-child-listening-test/",
    "title": "Family expecting their 17th child",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "different-family-types-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/different-family-types-b1-english-reading-test/",
    "title": "Different family types",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "adopting-a-child-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/adopting-a-child-b1-english-reading-test/",
    "title": "Adopting a child",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "child-marriage-nepal",
    "link": "https://test-english.com/reading/b1/child-marriage-nepal/",
    "title": "Child marriage in Nepal",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "relationships-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/relationships-b1-english-vocabulary/",
    "title": "Relationships",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "fears-and-phobias-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1-b2/fears-and-phobias-b1-english-listening-test/",
    "title": "Fears and Phobias",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "clothes-b1-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/clothes-b1-b2-english-vocabulary/",
    "title": "Clothes",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "personality-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/personality-b1-english-vocabulary/",
    "title": "Personality",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "fears-and-phobias-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/fears-and-phobias-b1-english-vocabulary/",
    "title": "Fears and phobias",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "describing-a-photo-b1-english-writing",
    "link": "https://test-english.com/writing/b1-b2/describing-a-photo-b1-english-writing/",
    "title": "Describing a photo",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "relationship-dilemmas-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/relationship-dilemmas-b2-english-listening-test/",
    "title": "Relationship dilemmas",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "the-personality-of-centenarians",
    "link": "https://test-english.com/listening/b2/the-personality-of-centenarians/",
    "title": "The personality of centenarians",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "survive-kids-birthday-parties",
    "link": "https://test-english.com/listening/b2/survive-kids-birthday-parties/",
    "title": "How to Survive Kids' Birthday parties",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "am-i-in-a-toxic-relationship-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/am-i-in-a-toxic-relationship-b2-english-reading-test/",
    "title": "Am I in a toxic relationship?",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "why-are-so-many-men-secret-dieters",
    "link": "https://test-english.com/reading/b2/why-are-so-many-men-secret-dieters/",
    "title": "Why are so many men secret dieters?",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "relationships-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/relationships-b2-english-vocabulary/",
    "title": "Relationships",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "feelings-and-emotions-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/feelings-and-emotions-b2-english-vocabulary/",
    "title": "Feelings and emotions",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "vocabulary",
    "level": "c1",
    "slug": "feelings-and-reactions-c1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/c1/feelings-and-reactions-c1-english-vocabulary/",
    "title": "Feelings and reactions",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "writing",
    "level": "c1",
    "slug": "describing-visual-data-c1-english-writing",
    "link": "https://test-english.com/writing/c1/describing-visual-data-c1-english-writing/",
    "title": "Describing visual data",
    "group": "Family, Relationships & People (Família, Relacionamentos e Pessoas)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "ordering-at-the-restaurant-a1-listening-test",
    "link": "https://test-english.com/listening/a1/ordering-at-the-restaurant-a1-listening-test/",
    "title": "Ordering at the restaurant",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "food-and-meals-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/food-and-meals-a1-english-vocabulary/",
    "title": "Food and meals",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "at-the-restaurant-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/at-the-restaurant-a1-english-vocabulary/",
    "title": "At the restaurant",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "eating-and-drinking-utensils-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/eating-and-drinking-utensils-a1-english-vocabulary/",
    "title": "Eating and drinking utensils",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "english-pubs-a2-listening",
    "link": "https://test-english.com/listening/a2/english-pubs-a2-listening/",
    "title": "English pubs",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "burgers-made-of-insects-listening-test",
    "link": "https://test-english.com/listening/b1/burgers-made-of-insects-listening-test/",
    "title": "Burgers made of insects",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "five-restaurant-reviews-reading-test",
    "link": "https://test-english.com/reading/b1/five-restaurant-reviews-reading-test/",
    "title": "Five restaurant reviews",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "food-and-cooking-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/food-and-cooking-b1-english-vocabulary/",
    "title": "Food and cooking",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "is-buying-local-food-always-better-reading-test",
    "link": "https://test-english.com/reading/b1-b2/is-buying-local-food-always-better-reading-test/",
    "title": "Food miles: Is buying local food always better?",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "the-truth-about-expired-food-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/the-truth-about-expired-food-b2-english-listening-test/",
    "title": "The truth about",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "the-chef-who-cant-eat-what-she-cooks-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/the-chef-who-cant-eat-what-she-cooks-b2-english-listening-test/",
    "title": "The chef who can’t eat what she cooks",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "food-and-food-products-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/food-and-food-products-b2-english-vocabulary/",
    "title": "Food and food products",
    "group": "Food, Drink & Eating Out (Comida, Bebida e Restaurante)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "invitations-would-you-like-to-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/invitations-would-you-like-to-a1-english-listening-test/",
    "title": "Invitations: Would you like to ...?",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "sports-and-exercise-listening-test",
    "link": "https://test-english.com/listening/a1/sports-and-exercise-listening-test/",
    "title": "Sports and exercise",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "cinema-theatre-listening-test",
    "link": "https://test-english.com/listening/a1/cinema-theatre-listening-test/",
    "title": "Cinema and Theatre in London",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "my-hobby-a1-english-writing",
    "link": "https://test-english.com/writing/a1/my-hobby-a1-english-writing/",
    "title": "My hobby",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "party-experiences-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/party-experiences-a2-english-listening-test/",
    "title": "Party experiences",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "what-are-your-hobbies-a2-listening-test",
    "link": "https://test-english.com/listening/a2/what-are-your-hobbies-a2-listening-test/",
    "title": "What are your hobbies?",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "talking-about-films-listening-test",
    "link": "https://test-english.com/listening/a2/talking-about-films-listening-test/",
    "title": "Talking about films",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "sports-uk-listening-test",
    "link": "https://test-english.com/listening/a2/sports-uk-listening-test/",
    "title": "Sports in the UK",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "hobbies-people-collect-reading-test",
    "link": "https://test-english.com/reading/a2/hobbies-people-collect-reading-test/",
    "title": "Hobbies: Why do people collect?",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "its-in-the-news",
    "link": "https://test-english.com/reading/a2/its-in-the-news/",
    "title": "It's in the news",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "hobbies-and-free-time-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/hobbies-and-free-time-a2-english-vocabulary/",
    "title": "Hobbies and free time",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "famous-sports-cheating-scandals-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/famous-sports-cheating-scandals-b1-english-listening-test/",
    "title": "Famous sports cheating scandals",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "500-year-old-paintings-raphael-found-b1-listening-test",
    "link": "https://test-english.com/listening/b1/500-year-old-paintings-raphael-found-b1-listening-test/",
    "title": "500-year-old paintings from Raphael found",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "halloween-history-listening-test",
    "link": "https://test-english.com/listening/b1/halloween-history-listening-test/",
    "title": "Halloween history",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "the-woman-behind-the-voice-of-siri-listening-test",
    "link": "https://test-english.com/listening/b1/the-woman-behind-the-voice-of-siri-listening-test/",
    "title": "The woman behind the voice of Siri",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "cheating-in-sports-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/cheating-in-sports-b1-english-reading-test/",
    "title": "Cheating in sports",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "sport-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/sport-b1-english-vocabulary/",
    "title": "Sport",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "news-and-media-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/news-and-media-b1-english-vocabulary/",
    "title": "News and media",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "types-of-movies-and-tv-shows-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/types-of-movies-and-tv-shows-b1-english-vocabulary/",
    "title": "Types of movies and TV shows",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "describing-books-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/describing-books-b1-english-vocabulary/",
    "title": "Describing books",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "social-media-actions-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/social-media-actions-b1-english-vocabulary/",
    "title": "Social media actions",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "a-book-review-b1-english-writing",
    "link": "https://test-english.com/writing/b1-b2/a-book-review-b1-english-writing/",
    "title": "A book review",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "socializing-and-parties-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/socializing-and-parties-b2-english-listening-test/",
    "title": "Socializing and parties",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "discussing-news-and-media-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/discussing-news-and-media-b2-english-listening-test/",
    "title": "Discussing news and media",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "the-museum-of-your-exs-belongings-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/the-museum-of-your-exs-belongings-b2-english-listening-test/",
    "title": "The museum of your ex's belongings",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "teenage-social-media-millionaires-reading-test",
    "link": "https://test-english.com/reading/b2/teenage-social-media-millionaires-reading-test/",
    "title": "Teenage Social Media Millionaires",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "is-banning-singl-use-plastic-the-right-option_reading-test",
    "link": "https://test-english.com/reading/b2/is-banning-singl-use-plastic-the-right-option_reading-test/",
    "title": "Is banning single-use plastic the right option?",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "the-news-and-media-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/the-news-and-media-b2-english-vocabulary/",
    "title": "News and media",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "the-human-voice-and-other-sounds-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/the-human-voice-and-other-sounds-b2-english-vocabulary/",
    "title": "The human voice and other sounds",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "socializing-and-social-events-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/socializing-and-social-events-b2-english-vocabulary/",
    "title": "Socializing and social events",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "talking-about-movies-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/talking-about-movies-b2-english-vocabulary/",
    "title": "Talking about movies",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "a-film-review-b2-english-writing",
    "link": "https://test-english.com/writing/b2/a-film-review-b2-english-writing/",
    "title": "A film review",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "listening",
    "level": "c1",
    "slug": "social-medias-impact-on-teenage-brains-c1-english-listening-test",
    "link": "https://test-english.com/listening/c1/social-medias-impact-on-teenage-brains-c1-english-listening-test/",
    "title": "Social media's impact on teenage brains",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "reading",
    "level": "c1",
    "slug": "how-ai-voice-cloning-is-changing-scams-c1-english-reading-test",
    "link": "https://test-english.com/reading/c1/how-ai-voice-cloning-is-changing-scams-c1-english-reading-test/",
    "title": "How AI voice cloning is changing scams",
    "group": "Leisure, Sports & Media (Lazer, Esportes e Mídia)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "the-weather-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/the-weather-a2-english-vocabulary/",
    "title": "The weather",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "the-countryside-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/the-countryside-a2-english-vocabulary/",
    "title": "The countryside",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "humans-mars-listening-test",
    "link": "https://test-english.com/listening/b1/humans-mars-listening-test/",
    "title": "When will humans get to Mars?",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "animals-and-their-bodies-and-sounds-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/animals-and-their-bodies-and-sounds-b1-english-vocabulary/",
    "title": "Animals and their bodies and sounds",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "pollution-and-how-to-stop-it-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/pollution-and-how-to-stop-it-b1-english-vocabulary/",
    "title": "Pollution and how to stop it",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "extreme-weather-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/extreme-weather-b1-english-reading-test/",
    "title": "Extreme weather",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "the-weather-and-natural-disasters-b1-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/the-weather-and-natural-disasters-b1-b2-english-vocabulary/",
    "title": "The weather and natural disasters",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "animal-world-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/animal-world-b1-english-vocabulary/",
    "title": "The animal world",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "climate-migrants-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/climate-migrants-b2-english-reading-test/",
    "title": "Climate migrants",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "pollution-and-the-environment-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/pollution-and-the-environment-b2-english-vocabulary/",
    "title": "Pollution and the environment",
    "group": "Nature, Weather & Environment (Natureza, Clima e Meio Ambiente)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "giving-personal-information-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/giving-personal-information-a1-english-listening-test/",
    "title": "Giving personal information",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "how-often-do-you-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/how-often-do-you-a1-english-listening-test/",
    "title": "How often do you...?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "what-are-you-doing-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/what-are-you-doing-a1-english-listening-test/",
    "title": "What are you doing?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "what-are-you-going-to-do-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/what-are-you-going-to-do-a1-english-listening-test/",
    "title": "What are you going to do?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "countries-nationalities-and-languages-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/countries-nationalities-and-languages-a1-english-listening-test/",
    "title": "Countries, nationalities, and languages",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "what-did-you-do-last-summer-listening-test",
    "link": "https://test-english.com/listening/a1/what-did-you-do-last-summer-listening-test/",
    "title": "What did you do last summer",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "guess-who-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/guess-who-a1-english-reading-test/",
    "title": "Guess who?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "the-british-ways-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/the-british-ways-a1-english-reading-test/",
    "title": "The British ways",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "top-things-that-i-do-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/top-things-that-i-do-a1-english-reading-test/",
    "title": "Top things that I do",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "around-the-world-traditions-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/around-the-world-traditions-a1-english-reading-test/",
    "title": "Traditions around the world",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "thanksgiving-reading-test",
    "link": "https://test-english.com/reading/a1/thanksgiving-reading-test/",
    "title": "Thanksgiving",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "future-retirement-plans-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/future-retirement-plans-a1-english-reading-test/",
    "title": "Future retirement plans",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "three-american-festivals-reading-test",
    "link": "https://test-english.com/reading/a1/three-american-festivals-reading-test/",
    "title": "Three American festivals",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "going-to-the-mall-reading-test",
    "link": "https://test-english.com/reading/a1/going-to-the-mall-reading-test/",
    "title": "Going to the mall",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-test-1",
    "link": "https://test-english.com/use-of-english/a1/a1-test-1/",
    "title": "A1 English test 1 – text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-2-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-2-multiple-choice-questions/",
    "title": "A1 English test 2 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-3-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-3-text-multiple-choice-gaps/",
    "title": "A1 English test 3 – Text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-4-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-4-multiple-choice-questions/",
    "title": "A1 English test 4 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-5-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-5-text-multiple-choice-gaps/",
    "title": "A1 English test 5 – Text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-6-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-6-multiple-choice-questions/",
    "title": "A1 English test 6 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-7-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-7-text-with-multiple-choice-gaps/",
    "title": "A1 English test 7 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-8-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-8-multiple-choice-questions/",
    "title": "A1 English test 8 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-9-text-with-multiple-choice_gaps",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-9-text-with-multiple-choice_gaps/",
    "title": "A1 English test 9 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-10-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-10-multiple-choice-questions/",
    "title": "A1 English test 10 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a1",
    "slug": "a1-english-test-11-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a1/a1-english-test-11-text-with-multiple-choice-gaps/",
    "title": "A1 English test 11 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "common-things-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/common-things-a1-english-vocabulary/",
    "title": "Common things",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "common-verbs-and-verb-phrases-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/common-verbs-and-verb-phrases-a1-english-vocabulary/",
    "title": "Common verbs and verb phrases",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "countries-and-nationalities-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/countries-and-nationalities-a1-english-vocabulary/",
    "title": "Countries and nationalities",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "movement-verbs-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/movement-verbs-a1-english-vocabulary/",
    "title": "Movement verbs",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "basic-phrasal-verbs-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/basic-phrasal-verbs-a1-english-vocabulary/",
    "title": "Basic phrasal verbs",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "essay-about-my-neighbourhood-a1-english-writing",
    "link": "https://test-english.com/writing/a1/essay-about-my-neighbourhood-a1-english-writing/",
    "title": "Essay about 'My Neighbourhood'",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "how-to-write-a-personal-profile-a1-english-writing",
    "link": "https://test-english.com/writing/a1/how-to-write-a-personal-profile-a1-english-writing/",
    "title": "How to write a personal profile",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "have-you-ever-experiences-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/have-you-ever-experiences-a2-english-listening-test/",
    "title": "Have you ever... (Experiences)",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "future-plans-listening-test",
    "link": "https://test-english.com/listening/a2/future-plans-listening-test/",
    "title": "Future plans",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "if-i-were-a-millionaire-second-conditional-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/if-i-were-a-millionaire-second-conditional-a2-english-listening-test/",
    "title": "If I were a millionaire (Second conditional)",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "what-rainbows-mean-around-the-world-a2-english-reading-test",
    "link": "https://test-english.com/reading/a2/what-rainbows-mean-around-the-world-a2-english-reading-test/",
    "title": "What rainbows mean around the world",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "three-popular-inventions-from-the-1920s-reading-test",
    "link": "https://test-english.com/reading/a2/three-popular-inventions-from-the-1920s-reading-test/",
    "title": "Three popular inventions from the 1920s",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "a-really-popular-summer-festival-in-the-uk-a2-english-reading-test",
    "link": "https://test-english.com/reading/a2/a-really-popular-summer-festival-in-the-uk-a2-english-reading-test/",
    "title": "A really popular summer festival in the UK",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "three-experiences-i-have-had-a2-english-reading-test",
    "link": "https://test-english.com/reading/a2/three-experiences-i-have-had-a2-english-reading-test/",
    "title": "Three experiences I've had",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "why-arent-babies-born-on-certain-days_reading-test",
    "link": "https://test-english.com/reading/a2/why-arent-babies-born-on-certain-days_reading-test/",
    "title": "Why aren't babies born on certain days?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "diva-of-magic-reading-test",
    "link": "https://test-english.com/reading/a2/diva-of-magic-reading-test/",
    "title": "Diva of magic",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "frogs-in-love-romeo-and-juliet-reading-test",
    "link": "https://test-english.com/reading/a2/frogs-in-love-romeo-and-juliet-reading-test/",
    "title": "Frogs in love: Romeo and Juliet",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "black-friday",
    "link": "https://test-english.com/reading/a2/black-friday/",
    "title": "Black Friday",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "archaeologists-identify-mummy-lost-egyptian-queen",
    "link": "https://test-english.com/reading/a2/archaeologists-identify-mummy-lost-egyptian-queen/",
    "title": "Mummy of a lost Egyptian queen identified",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "benefits-of-nuts",
    "link": "https://test-english.com/reading/a2/benefits-of-nuts/",
    "title": "The benefits of nuts",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-1-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-1-text-multiple-choice-gaps/",
    "title": "A2 English test 1 - text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-2-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-2-multiple-choice-questions/",
    "title": "A2 English test 2 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-3-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-3-text-with-multiple-choice-gaps/",
    "title": "A2 English test 3 – Text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-4-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-4-multiple-choice-questions/",
    "title": "A2 English test 4 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-5-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-5-text-with-multiple-choice-gaps/",
    "title": "A2 English test 5 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-6-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-6-multiple-choice-questions/",
    "title": "A2 English test 6 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-7-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-7-text-with-multiple-choice-gaps/",
    "title": "A2 English test 7 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-8-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-8-multiple-choice-questions/",
    "title": "A2 English test 8 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-9-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-9-text-with-multiple-choice-gaps/",
    "title": "A2 English test 9 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-10-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-10-multiple-choice-questions/",
    "title": "A2 English test 10 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "a2",
    "slug": "a2-english-test-11-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/a2/a2-english-test-11-text-with-multiple-choice-gaps/",
    "title": "A2 English test 11 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "words-with-prepositions-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/words-with-prepositions-a2-english-vocabulary/",
    "title": "Words with prepositions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "common-phrasal-verbs-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/common-phrasal-verbs-a2-english-vocabulary/",
    "title": "Common phrasal verbs",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "say-tell-speak-talk-etc-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/say-tell-speak-talk-etc-a2-english-vocabulary/",
    "title": "Say, tell, speak, talk, etc.",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "containers-and-quantities-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/containers-and-quantities-a2-english-vocabulary/",
    "title": "Containers and quantities",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "everyday-problems-and-solutions-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/everyday-problems-and-solutions-a2-english-vocabulary/",
    "title": "Everyday problems and solutions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "writing-a-postcard-a2-english-writing",
    "link": "https://test-english.com/writing/a2/writing-a-postcard-a2-english-writing/",
    "title": "Writing a postcard",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "how-to-write-an-opinion-essay-a2-english-writing",
    "link": "https://test-english.com/writing/a2/how-to-write-an-opinion-essay-a2-english-writing/",
    "title": "How to write an opinion essay",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "weird-driving-rules-modal-verbs-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/weird-driving-rules-modal-verbs-b1-english-listening-test/",
    "title": "Weird driving rules (Modal verbs)",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "how-to-fuel-the-future-listening-test",
    "link": "https://test-english.com/listening/b1/how-to-fuel-the-future-listening-test/",
    "title": "How to fuel the future",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "why-do-languages-die-listening-test",
    "link": "https://test-english.com/listening/b1/why-do-languages-die-listening-test/",
    "title": "Why do languages die?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "safest-place-world-listening-test",
    "link": "https://test-english.com/listening/b1/safest-place-world-listening-test/",
    "title": "Is this the safest place in the world?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "why-your-coworkers-hate-you-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/why-your-coworkers-hate-you-b1-english-reading-test/",
    "title": "Why your coworkers hate you",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "underwater-search-for-lost-love-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/underwater-search-for-lost-love-b1-english-reading-test/",
    "title": "Underwater search for lost love",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "actors-who-died-on-set-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/actors-who-died-on-set-b1-english-reading-test/",
    "title": "Actors who died on set",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "the-arm-of-liberty-reading-test",
    "link": "https://test-english.com/reading/b1/the-arm-of-liberty-reading-test/",
    "title": "The arm of Liberty",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "the-unhealthiest-places-in-the-world-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/the-unhealthiest-places-in-the-world-b1-english-reading-test/",
    "title": "The unhealthiest places in the world",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "memorabilia-whats-the-thrill-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/memorabilia-whats-the-thrill-b1-english-reading-test/",
    "title": "Memorabilia: What’s the thrill?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "active-villagers",
    "link": "https://test-english.com/reading/b1/active-villagers/",
    "title": "Active Villagers",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "ebay-tips-selling-successfully",
    "link": "https://test-english.com/reading/b1/ebay-tips-selling-successfully/",
    "title": "eBay tips for selling successfully",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "ig-nobel-prizes",
    "link": "https://test-english.com/reading/b1/ig-nobel-prizes/",
    "title": "The Ig Nobel Prizes",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "curriculum-vitaes-tips-can-help",
    "link": "https://test-english.com/reading/b1/curriculum-vitaes-tips-can-help/",
    "title": "Curriculum Vitaes: Tips that can Help",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-test-1",
    "link": "https://test-english.com/use-of-english/b1/b1-test-1/",
    "title": "B1 English test 1 - text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-2-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-2-multiple-choice-questions/",
    "title": "B1 English test 2 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-3-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-3-text-multiple-choice-gaps/",
    "title": "B1 English test 3 - text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-4-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-4-multiple-choice-questions/",
    "title": "B1 English test 4 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-5-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-5-text-with-multiple-choice-gaps/",
    "title": "B1 English test 5 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-6_multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-6_multiple-choice-questions/",
    "title": "B1 English test 6 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-7-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-7-text-with-multiple-choice-gaps/",
    "title": "B1 English test 7 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-8-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-8-multiple-choice-questions/",
    "title": "B1 English test 8 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-9-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-9-text-with-multiple-choice-gaps/",
    "title": "B1 English test 9 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-10-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-10-multiple-choice-questions/",
    "title": "B1 English test 10 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1",
    "slug": "b1-english-test-11-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1/b1-english-test-11-text-with-multiple-choice-gaps/",
    "title": "B1 English test 11 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "writing-an-opinion-essay",
    "link": "https://test-english.com/writing/b1/writing-an-opinion-essay/",
    "title": "Writing an opinion essay – Tips, structure, examples, exercises",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "how-to-write-a-past-story-from-a-given-sentence",
    "link": "https://test-english.com/writing/b1/how-to-write-a-past-story-from-a-given-sentence/",
    "title": "How to write a past story from a given sentence",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "how-to-write-an-article",
    "link": "https://test-english.com/writing/b1/how-to-write-an-article/",
    "title": "How to write an article – B1 Preliminary (PET) Exam",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "a-product-review-b1-english-writing",
    "link": "https://test-english.com/writing/b1/a-product-review-b1-english-writing/",
    "title": "A product review",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "ravi-the-uncatchable-smuggler-b1-listening-test",
    "link": "https://test-english.com/listening/b1-b2/ravi-the-uncatchable-smuggler-b1-listening-test/",
    "title": "Ravi, the uncatchable smuggler",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "will-humans-become-supermachines-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1-b2/will-humans-become-supermachines-b1-english-listening-test/",
    "title": "Will humans become supermachines?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "i-should-have-b2-english-listening-test",
    "link": "https://test-english.com/listening/b1-b2/i-should-have-b2-english-listening-test/",
    "title": "I should have...",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "the-return-of-polio-in-the-us_b1-b2-listening-test",
    "link": "https://test-english.com/listening/b1-b2/the-return-of-polio-in-the-us_b1-b2-listening-test/",
    "title": "The return of Polio in the US",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "cyberchondria",
    "link": "https://test-english.com/listening/b1-b2/cyberchondria/",
    "title": "Do you suffer from cyberchondria?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "islamic-fashion-gains-popularity",
    "link": "https://test-english.com/listening/b1-b2/islamic-fashion-gains-popularity/",
    "title": "Islamic fashion gains popularity",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "the-hyperloop",
    "link": "https://test-english.com/listening/b1-b2/the-hyperloop/",
    "title": "The Hyperloop: the future of transportation?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "the-ecocapsule",
    "link": "https://test-english.com/listening/b1-b2/the-ecocapsule/",
    "title": "The Ecocapsule",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "surviving-in-the-jungle",
    "link": "https://test-english.com/listening/b1-b2/surviving-in-the-jungle/",
    "title": "Surviving in the jungle",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "my-husband-is-annoying-b1-b2-listening-test",
    "link": "https://test-english.com/listening/b1-b2/my-husband-is-annoying-b1-b2-listening-test/",
    "title": "My Husband is Annoying",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "sleep-disorders-overview",
    "link": "https://test-english.com/listening/b1-b2/sleep-disorders-overview/",
    "title": "Sleep Disorders Overview",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "actors-talk-acting",
    "link": "https://test-english.com/listening/b1-b2/actors-talk-acting/",
    "title": "Actors talk about acting",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "batman-brings-justice",
    "link": "https://test-english.com/listening/b1-b2/batman-brings-justice/",
    "title": "Batman brings justice",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "detroit",
    "link": "https://test-english.com/listening/b1-b2/detroit/",
    "title": "Detroit",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "head-transplant",
    "link": "https://test-english.com/listening/b1-b2/head-transplant/",
    "title": "Head transplant",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "why-we-sleep-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/why-we-sleep-b1-english-reading-test/",
    "title": "Why we sleep",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "why-we-cant-stop-lying-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/why-we-cant-stop-lying-b1-english-reading-test/",
    "title": "Why we can't stop lying",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "incredible-hoaxes-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/incredible-hoaxes-b1-english-reading-test/",
    "title": "Incredible hoaxes",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "crazy-conspiracy-theories-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/crazy-conspiracy-theories-b1-english-reading-test/",
    "title": "Crazy conspiracy theories",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "supernova-hunters-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/supernova-hunters-b1-english-reading-test/",
    "title": "Supernova hunters",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "binge-watching-b1-b2-reading-test",
    "link": "https://test-english.com/reading/b1-b2/binge-watching-b1-b2-reading-test/",
    "title": "Binge-watching",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "seeding-clouds-to-make-rain-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/seeding-clouds-to-make-rain-b1-english-reading-test/",
    "title": "Seeding clouds to make rain",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "ai-boomers-vs-ai-doomers-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/ai-boomers-vs-ai-doomers-b1-english-reading-test/",
    "title": "AI boomers vs AI doomers",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "deadly-tiktok-challenges-reading-test",
    "link": "https://test-english.com/reading/b1-b2/deadly-tiktok-challenges-reading-test/",
    "title": "Deadly TikTok challenges",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "world-walker-reading-test",
    "link": "https://test-english.com/reading/b1-b2/world-walker-reading-test/",
    "title": "World walker",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "where-are-the-harry-potter-stars-now-reading-test",
    "link": "https://test-english.com/reading/b1-b2/where-are-the-harry-potter-stars-now-reading-test/",
    "title": "Where are the Harry Potter Stars now?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "strange-burial-reading-test",
    "link": "https://test-english.com/reading/b1-b2/strange-burial-reading-test/",
    "title": "Strange burial",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "fear-of-missing-out-fomo-reading-test",
    "link": "https://test-english.com/reading/b1-b2/fear-of-missing-out-fomo-reading-test/",
    "title": "Fear of Missing Out (FOMO)",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "scamming-the-scammers-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/scamming-the-scammers-b1-english-reading-test/",
    "title": "Scamming the Scammers",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "eco-terrorism-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/eco-terrorism-b1-english-reading-test/",
    "title": "Eco-terrorism",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "a-paranormal-experience",
    "link": "https://test-english.com/reading/b1-b2/a-paranormal-experience/",
    "title": "A paranormal experience?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "should-motherhood-define-me",
    "link": "https://test-english.com/reading/b1-b2/should-motherhood-define-me/",
    "title": "Should motherhood define me?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "does-cannabis-cure-cancer",
    "link": "https://test-english.com/reading/b1-b2/does-cannabis-cure-cancer/",
    "title": "Does cannabis cure cancer?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-english-test-1-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-english-test-1-text-multiple-choice-gaps/",
    "title": "B1+ English test 1 – text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-test-2-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-test-2-multiple-choice-questions/",
    "title": "B1+ English test 2 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-english-test-3-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-english-test-3-text-with-multiple-choice-gaps/",
    "title": "B1+ English test 3 – text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-english-test-4-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-english-test-4-multiple-choice-questions/",
    "title": "B1+ English test 4 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-english-test-5-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-english-test-5-text-multiple-choice-gaps/",
    "title": "B1+ English test 5 – text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-english-test-6-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-english-test-6-multiple-choice-questions/",
    "title": "B1+ English test 6 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-english-test-7-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-english-test-7-text-with-multiple-choice-gaps/",
    "title": "B1+ English test 7 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-b2-english-test-8-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-b2-english-test-8-multiple-choice-questions/",
    "title": "B1+ English test 8 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-b2-english-test-9-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-b2-english-test-9-text-with-multiple-choice-gaps/",
    "title": "B1+ English test 9 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-english-test-10-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-english-test-10-multiple-choice-questions/",
    "title": "B1+ English test 10 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b1-b2",
    "slug": "b1-b2-english-test-11-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b1-b2/b1-b2-english-test-11-text-with-multiple-choice-gaps/",
    "title": "B1+ English test 11 – Text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "word-pairs-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/word-pairs-b1-english-vocabulary/",
    "title": "Word pairs",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "everyday-problems-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/everyday-problems-b1-english-vocabulary/",
    "title": "Everyday problems",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "for-against-essay-balanced-essay",
    "link": "https://test-english.com/writing/b1-b2/for-against-essay-balanced-essay/",
    "title": "A for and against essay – a balanced essay",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "narrative-writing-step-by-step",
    "link": "https://test-english.com/writing/b1-b2/narrative-writing-step-by-step/",
    "title": "Narrative writing step by step",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "writing-a-how-to-article-for-a-blog-or-magazine",
    "link": "https://test-english.com/writing/b1-b2/writing-a-how-to-article-for-a-blog-or-magazine/",
    "title": "Writing a 'how-to' article for a blog or magazine",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "giving-your-opinion-b1-english-writing",
    "link": "https://test-english.com/writing/b1-b2/giving-your-opinion-b1-english-writing/",
    "title": "Giving your opinion",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "regrets-i-wish-id-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/regrets-i-wish-id-b2-english-listening-test/",
    "title": "Regrets: I Wish I’d...",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "behind-the-scenes-with-an-actor-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/behind-the-scenes-with-an-actor-b2-english-listening-test/",
    "title": "Behind the scenes with an actor",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "retirement-challenges-in-the-u-s-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/retirement-challenges-in-the-u-s-b2-english-listening-test/",
    "title": "Retirement Challenges in the U.S.",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "frida-kahlo",
    "link": "https://test-english.com/listening/b2/frida-kahlo/",
    "title": "Frida Kahlo",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "why-english-is-so-weird",
    "link": "https://test-english.com/listening/b2/why-english-is-so-weird/",
    "title": "Why English spelling is so weird",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "benefits-bilingual-brain",
    "link": "https://test-english.com/listening/b2/benefits-bilingual-brain/",
    "title": "The benefits of a bilingual brain",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "threat-of-war",
    "link": "https://test-english.com/listening/b2/threat-of-war/",
    "title": "Threat of war",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "thailand-sees-brisk-trade-illegal-species",
    "link": "https://test-english.com/listening/b2/thailand-sees-brisk-trade-illegal-species/",
    "title": "Thailand sees brisk trade in illegal species",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "is-overtourism-pricing-locals-out-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/is-overtourism-pricing-locals-out-b2-english-reading-test/",
    "title": "Is overtourism pricing locals out?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "using-ai-to-talk-to-the-deceased-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/using-ai-to-talk-to-the-deceased-b2-english-reading-test/",
    "title": "Using AI to talk to the deceased",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "regulating-deepfakes-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/regulating-deepfakes-b2-english-reading-test/",
    "title": "Regulating deepfakes",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "weak-ties-unveiling-the-power-of-acquaintances-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/weak-ties-unveiling-the-power-of-acquaintances-b2-english-reading-test/",
    "title": "Weak ties: The power of acquaintances",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "the-most-sought-after-company-benefits-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/the-most-sought-after-company-benefits-b2-english-reading-test/",
    "title": "The most sought-after company benefits",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "finding-calm-in-cities-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/finding-calm-in-cities-b2-english-reading-test/",
    "title": "Finding calm in cities",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "second-hand-fashion-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/second-hand-fashion-b2-english-reading-test/",
    "title": "Second-hand fashion",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "fatphobia-the-stigma-of-being-fat-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/fatphobia-the-stigma-of-being-fat-b2-english-reading-test/",
    "title": "Fatphobia: The stigma of being fat",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "crypto-addicts-b2-reading-test",
    "link": "https://test-english.com/reading/b2/crypto-addicts-b2-reading-test/",
    "title": "Crypto addicts",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "have-we-taken-security-too-far",
    "link": "https://test-english.com/reading/b2/have-we-taken-security-too-far/",
    "title": "Have we taken security too far?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "principles-new-high-protein-diet",
    "link": "https://test-english.com/reading/b2/principles-new-high-protein-diet/",
    "title": "The principles of the New High Protein Diet",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-1-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-1-text-multiple-choice-gaps/",
    "title": "B2 English test 1 – text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-2-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-2-multiple-choice-questions/",
    "title": "B2 English test 2 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-3-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-3-text-multiple-choice-gaps/",
    "title": "B2 English test 3 – text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-4-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-4-multiple-choice-questions/",
    "title": "B2 English test 4 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-5-text-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-5-text-multiple-choice-gaps/",
    "title": "B2 English test 5 – text with multiple choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-6-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-6-multiple-choice-questions/",
    "title": "B2 English test 6 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-7-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-7-text-with-multiple-choice-gaps/",
    "title": "B2 English test 7 – text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-8-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-8-multiple-choice-questions/",
    "title": "B2 English test 8 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-9-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-9-text-with-multiple-choice-gaps/",
    "title": "B2 English test 9 – text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-10-multiple-choice-questions",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-10-multiple-choice-questions/",
    "title": "B2 English test 10 – multiple choice questions",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "use-of-english",
    "level": "b2",
    "slug": "b2-english-test-11-text-with-multiple-choice-gaps",
    "link": "https://test-english.com/use-of-english/b2/b2-english-test-11-text-with-multiple-choice-gaps/",
    "title": "B2 English test 11 – text with multiple-choice gaps",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "war-and-peace-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/war-and-peace-b2-english-vocabulary/",
    "title": "War and peace",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "challenges-and-achievements-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/challenges-and-achievements-b2-english-vocabulary/",
    "title": "Challenges and achievements",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "phrasal-verbs-i-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/phrasal-verbs-i-b2-english-vocabulary/",
    "title": "Phrasal verbs I",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "phrasal-verbs-ii-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/phrasal-verbs-ii-b2-english-vocabulary/",
    "title": "Phrasal verbs II",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "a-formal-letter-of-complaint-tips-examples-exercises",
    "link": "https://test-english.com/writing/b2/a-formal-letter-of-complaint-tips-examples-exercises/",
    "title": "Writing formal letter of complaint – Tips, examples and exercises",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "writing-a-discussion-essay-discuss-two-views-and-give-your-opinion",
    "link": "https://test-english.com/writing/b2/writing-a-discussion-essay-discuss-two-views-and-give-your-opinion/",
    "title": "Writing a discussion essay: Discuss two views and give your opinion",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "opinion-essay-agree-or-disagree-with-a-statement",
    "link": "https://test-english.com/writing/b2/opinion-essay-agree-or-disagree-with-a-statement/",
    "title": "Opinion essay – agree or disagree with a statement",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "a-formal-letter-of-apology-b2-english-writing",
    "link": "https://test-english.com/writing/b2/a-formal-letter-of-apology-b2-english-writing/",
    "title": "A formal letter of apology",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "a-report-b2-english-writing",
    "link": "https://test-english.com/writing/b2/a-report-b2-english-writing/",
    "title": "A report",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "c1",
    "slug": "when-i-completely-embarrassed-myself-c1-english-listening-test",
    "link": "https://test-english.com/listening/c1/when-i-completely-embarrassed-myself-c1-english-listening-test/",
    "title": "When I completely embarrassed myself",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "c1",
    "slug": "why-is-walking-humans-superpower-c1-english-listening-test",
    "link": "https://test-english.com/listening/c1/why-is-walking-humans-superpower-c1-english-listening-test/",
    "title": "Why is walking humans' superpower?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "c1",
    "slug": "when-you-cant-trust-who-you-hear-c1-english-listening-test",
    "link": "https://test-english.com/listening/c1/when-you-cant-trust-who-you-hear-c1-english-listening-test/",
    "title": "When you can't trust who you hear",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "c1",
    "slug": "what-makes-us-laugh-c1-english-reading-test",
    "link": "https://test-english.com/reading/c1/what-makes-us-laugh-c1-english-reading-test/",
    "title": "What makes us laugh?",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "reading",
    "level": "c1",
    "slug": "a-walk-gone-wrong-c1-english-reading-test",
    "link": "https://test-english.com/reading/c1/a-walk-gone-wrong-c1-english-reading-test/",
    "title": "A walk gone wrong",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "c1",
    "slug": "ways-of-walking-c1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/c1/ways-of-walking-c1-english-vocabulary/",
    "title": "Ways of walking",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "c1",
    "slug": "vague-language-imprecision-c1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/c1/vague-language-imprecision-c1-english-vocabulary/",
    "title": "Vague language: imprecision",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "vocabulary",
    "level": "c1",
    "slug": "idiomatic-infinitive-phrases-c1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/c1/idiomatic-infinitive-phrases-c1-english-vocabulary/",
    "title": "Idiomatic infinitive phrases",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "c1",
    "slug": "a-problem-solution-essay-c1-english-writing",
    "link": "https://test-english.com/writing/c1/a-problem-solution-essay-c1-english-writing/",
    "title": "A problem solution essay",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "c1",
    "slug": "an-advanced-essay-c1-english-writing",
    "link": "https://test-english.com/writing/c1/an-advanced-essay-c1-english-writing/",
    "title": "An Advanced essay",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "writing",
    "level": "c1",
    "slug": "how-to-write-a-proposal-c1-english-writing",
    "link": "https://test-english.com/writing/c1/how-to-write-a-proposal-c1-english-writing/",
    "title": "How to write a proposal",
    "group": "Other Situational & General Topics (Outros Assuntos e Tópicos Gerais)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "shopping-habits-listening-test",
    "link": "https://test-english.com/listening/a1/shopping-habits-listening-test/",
    "title": "Shopping habits",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "online-shopping",
    "link": "https://test-english.com/reading/a1/online-shopping/",
    "title": "Online shopping",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "where-are-you-going-to-shop-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/where-are-you-going-to-shop-a1-english-reading-test/",
    "title": "Where are you going to shop?",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "shops-and-shopping-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/shops-and-shopping-a1-english-vocabulary/",
    "title": "Shops and shopping",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "shopping-for-clothes-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/shopping-for-clothes-a2-english-listening-test/",
    "title": "Shopping for clothes",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "the-girl-who-saved-100-lives-a2-english-reading-test",
    "link": "https://test-english.com/reading/a2/the-girl-who-saved-100-lives-a2-english-reading-test/",
    "title": "The girl who saved 100 lives",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "ancient-robots-reading-test",
    "link": "https://test-english.com/reading/a2/ancient-robots-reading-test/",
    "title": "Ancient robots",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "growing-up-poor",
    "link": "https://test-english.com/reading/a2/growing-up-poor/",
    "title": "Growing up poor",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "shops-and-shopping-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/shops-and-shopping-a2-english-vocabulary/",
    "title": "Shops and shopping",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "talking-about-money-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/talking-about-money-b1-english-listening-test/",
    "title": "Talking About Money",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "borough-market-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/borough-market-b1-english-listening-test/",
    "title": "Borough Market",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "travel-around-europe-in-5-stops-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/travel-around-europe-in-5-stops-b1-english-reading-test/",
    "title": "Travel around Europe in 5 stops",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "how-led-lights-can-save-sea-turtles-lives-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/how-led-lights-can-save-sea-turtles-lives-b1-english-reading-test/",
    "title": "How LED lights can save sea turtles' lives",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "money-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/money-b1-english-vocabulary/",
    "title": "Money",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "crime-scene-investigation-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1-b2/crime-scene-investigation-b1-english-listening-test/",
    "title": "Crime scene investigation",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "fighting-crime-analysing-handwriting",
    "link": "https://test-english.com/listening/b1-b2/fighting-crime-analysing-handwriting/",
    "title": "Fighting crime by analysing handwriting",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "the-business-of-running-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/the-business-of-running-b1-english-reading-test/",
    "title": "The business of running",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "profiting-from-true-crime-stories-b1-english-reading",
    "link": "https://test-english.com/reading/b1-b2/profiting-from-true-crime-stories-b1-english-reading/",
    "title": "Profiting from true crime stories",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "crime-and-punishment-b1-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/crime-and-punishment-b1-b2-english-vocabulary/",
    "title": "Crime and punishment",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "types-of-crime-and-offenders-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/types-of-crime-and-offenders-b1-english-vocabulary/",
    "title": "Types of crime and offenders",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "business-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/business-b1-english-vocabulary/",
    "title": "Business",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "do-we-need-cash-anymore-b2-reading-test",
    "link": "https://test-english.com/reading/b2/do-we-need-cash-anymore-b2-reading-test/",
    "title": "Do we really need cash anymore?",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "money-and-finance-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/money-and-finance-b2-english-vocabulary/",
    "title": "Money and finance",
    "group": "Shopping, Money & Business (Compras, Dinheiro e Negócios)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "what-is-wearable-technology-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/what-is-wearable-technology-a1-english-reading-test/",
    "title": "What is wearable technology?",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "how-to-write-an-invitation-email-a1-english-writing",
    "link": "https://test-english.com/writing/a1/how-to-write-an-invitation-email-a1-english-writing/",
    "title": "How to write an invitation",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "writing-an-email-giving-instructions-a1-english-writing",
    "link": "https://test-english.com/writing/a1/writing-an-email-giving-instructions-a1-english-writing/",
    "title": "Writing an email giving instructions",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "technology-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/technology-a2-english-vocabulary/",
    "title": "Technology",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "writing-and-responding-to-an-informal-email-invitation",
    "link": "https://test-english.com/writing/a2/writing-and-responding-to-an-informal-email-invitation/",
    "title": "Writing and responding to an informal email invitation",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "a-thank-you-email-a2-english-writing",
    "link": "https://test-english.com/writing/a2/a-thank-you-email-a2-english-writing/",
    "title": "A thank-you email",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "phone-talk-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/phone-talk-b1-english-vocabulary/",
    "title": "Phone Talk",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "how-to-write-an-email-to-a-friend-giving-news",
    "link": "https://test-english.com/writing/b1/how-to-write-an-email-to-a-friend-giving-news/",
    "title": "How to write an email to a friend giving news",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "how-to-write-an-email-cover-letter",
    "link": "https://test-english.com/writing/b1/how-to-write-an-email-cover-letter/",
    "title": "How to write an email cover letter",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "technology-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/technology-b1-english-vocabulary/",
    "title": "Technology",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "an-informal-email-advice",
    "link": "https://test-english.com/writing/b1-b2/an-informal-email-advice/",
    "title": "An informal email – asking for and giving advice",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "how-to-write-an-apology-email-saying-sorry-to-your-friend",
    "link": "https://test-english.com/writing/b1-b2/how-to-write-an-apology-email-saying-sorry-to-your-friend/",
    "title": "How to write an apology email - Saying sorry to your friend",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "b1-b2",
    "slug": "informal-email-responding-to-news-b1-english-writing",
    "link": "https://test-english.com/writing/b1-b2/informal-email-responding-to-news-b1-english-writing/",
    "title": "Informal email responding to news",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "life-without-cell-phone",
    "link": "https://test-english.com/listening/b2/life-without-cell-phone/",
    "title": "Life without a cell phone",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "internet-addiction-south-korea",
    "link": "https://test-english.com/listening/b2/internet-addiction-south-korea/",
    "title": "Detox camps for internet addicts",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "technology-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/technology-b2-english-vocabulary/",
    "title": "Technology: Managing your devices",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "formal-email-letter-asking-information",
    "link": "https://test-english.com/writing/b2/formal-email-letter-asking-information/",
    "title": "Formal email or letter asking for information",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "writing-an-email-cover-letter-b2-english-writing",
    "link": "https://test-english.com/writing/b2/writing-an-email-cover-letter-b2-english-writing/",
    "title": "Writing an email cover letter",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "reading",
    "level": "c1",
    "slug": "kidfluencers-growing-up-online-c1-english-reading",
    "link": "https://test-english.com/reading/c1/kidfluencers-growing-up-online-c1-english-reading/",
    "title": "Kidfluencers: Growing up online",
    "group": "Technology & Science (Tecnologia e Ciência)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "describing-rooms-there-is-are-prepositions-of-place-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/describing-rooms-there-is-are-prepositions-of-place-a1-english-listening-test/",
    "title": "Describing rooms (there is/are, prep. of place)",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "the-house-my-favourite-room-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/the-house-my-favourite-room-a1-english-listening-test/",
    "title": "The house: My favourite room",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "my-flat-listening-test",
    "link": "https://test-english.com/listening/a1/my-flat-listening-test/",
    "title": "My flat",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "neighborhood-reading-test",
    "link": "https://test-english.com/reading/a1/neighborhood-reading-test/",
    "title": "My neighborhood",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "email-to-a-friend-im-confined-at-home-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/email-to-a-friend-im-confined-at-home-a1-english-reading-test/",
    "title": "Email to a friend: I'm confined at home",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "looking-for-the-perfect-home-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/looking-for-the-perfect-home-a1-english-reading-test/",
    "title": "Looking for the perfect home",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "the-house-rooms-parts-and-things-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/the-house-rooms-parts-and-things-a1-english-vocabulary/",
    "title": "The house: rooms, parts, and things",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "vocabulary",
    "level": "a1",
    "slug": "in-the-town-a1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a1/in-the-town-a1-english-vocabulary/",
    "title": "Places in a town",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "writing",
    "level": "a1",
    "slug": "a-description-of-my-house-a1-english-writing",
    "link": "https://test-english.com/writing/a1/a-description-of-my-house-a1-english-writing/",
    "title": "A description of my house",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "what-are-your-roommates-like-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/what-are-your-roommates-like-a2-english-listening-test/",
    "title": "What are your roommates like?",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "do-your-kids-help-with-household-chores-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/do-your-kids-help-with-household-chores-a2-english-listening-test/",
    "title": "Do your kids help with household chores?",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "the-city-where-i-live-listening-test",
    "link": "https://test-english.com/listening/a2/the-city-where-i-live-listening-test/",
    "title": "The city where I live",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "working-from-home-listening-test",
    "link": "https://test-english.com/listening/a2/working-from-home-listening-test/",
    "title": "Working from home",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "how-my-town-has-changed-listening-test",
    "link": "https://test-english.com/listening/a2/how-my-town-has-changed-listening-test/",
    "title": "How my town has changed",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "living-in-a-small-town-vs-a-big-city-a2-english-reading-test",
    "link": "https://test-english.com/reading/a2/living-in-a-small-town-vs-a-big-city-a2-english-reading-test/",
    "title": "Living in a small town vs a big city",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "should-kids-help-with-household-chores-a2-english-reading-test",
    "link": "https://test-english.com/reading/a2/should-kids-help-with-household-chores-a2-english-reading-test/",
    "title": "Should kids help with household chores?",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "housework-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/housework-a2-english-vocabulary/",
    "title": "Housework",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "towns-and-cities-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/towns-and-cities-a2-english-vocabulary/",
    "title": "Towns and cities",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "york-england-a-medieval-town-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/york-england-a-medieval-town-b1-english-listening-test/",
    "title": "York, England: a medieval town",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "the-most-dangerous-church-listening-test",
    "link": "https://test-english.com/listening/b1/the-most-dangerous-church-listening-test/",
    "title": "The most dangerous church in the world",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "secret-underground-city-listening-test",
    "link": "https://test-english.com/listening/b1/secret-underground-city-listening-test/",
    "title": "Secret underground city",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "a-town-that-lives-in-one-building-b1-english-reading",
    "link": "https://test-english.com/reading/b1/a-town-that-lives-in-one-building-b1-english-reading/",
    "title": "A town that lives in one building",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "chocolate-town-chocolate-workers-reading-test",
    "link": "https://test-english.com/reading/b1/chocolate-town-chocolate-workers-reading-test/",
    "title": "Chocolate town for chocolate workers",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "welcome-home-future",
    "link": "https://test-english.com/reading/b1/welcome-home-future/",
    "title": "Welcome to the home of the future",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "houses-and-buildings-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/houses-and-buildings-b1-english-vocabulary/",
    "title": "Houses",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "describing-your-home-b1-english-writing",
    "link": "https://test-english.com/writing/b1/describing-your-home-b1-english-writing/",
    "title": "Describing your home",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "haunted-house-pennsylvania",
    "link": "https://test-english.com/listening/b1-b2/haunted-house-pennsylvania/",
    "title": "Haunted house in Pennsylvania",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "houses-and-home-words-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/houses-and-home-words-b1-english-vocabulary/",
    "title": "Houses and home words",
    "group": "Town, Housing & City Life (Cidade, Moradia e Vida Urbana)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "city-transport-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/city-transport-a1-english-listening-test/",
    "title": "City transport",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "my-last-holiday-listening-test",
    "link": "https://test-english.com/listening/a1/my-last-holiday-listening-test/",
    "title": "My last holiday",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "tips-for-visiting-london-with-young-children-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/tips-for-visiting-london-with-young-children-a1-english-reading-test/",
    "title": "Tips for visiting London with young children",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "my-next-summer-holiday-plan-a1-english-reading-test",
    "link": "https://test-english.com/reading/a1/my-next-summer-holiday-plan-a1-english-reading-test/",
    "title": "My next summer holiday plan",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "a-trip-around-the-usa-reading-test",
    "link": "https://test-english.com/reading/a1/a-trip-around-the-usa-reading-test/",
    "title": "A trip around the USA",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "tips-travelling-alone",
    "link": "https://test-english.com/reading/a1/tips-travelling-alone/",
    "title": "Tips for travelling alone",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "checking-into-a-hotel-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/checking-into-a-hotel-a2-english-listening-test/",
    "title": "Checking into a hotel",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "giving-directions-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/giving-directions-a2-english-listening-test/",
    "title": "Giving directions",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "renting-a-car-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/renting-a-car-a2-english-listening-test/",
    "title": "Renting a car",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "two-americans-living-in-london-listening-test",
    "link": "https://test-english.com/listening/a2/two-americans-living-in-london-listening-test/",
    "title": "Two Americans living in London",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "is-london-cheaper-than-new-york-comparatives-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/is-london-cheaper-than-new-york-comparatives-a2-english-listening-test/",
    "title": "Is London cheaper than New York? (Comparatives)",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "london-sightseeing-listening-test",
    "link": "https://test-english.com/listening/a2/london-sightseeing-listening-test/",
    "title": "London sightseeing",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "london-transport-listening-test",
    "link": "https://test-english.com/listening/a2/london-transport-listening-test/",
    "title": "London transport",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "how-to-play-carrom_reading-test",
    "link": "https://test-english.com/reading/a2/how-to-play-carrom_reading-test/",
    "title": "How to play carrom",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "travelling-rock-garden-chandigarh-reading-test",
    "link": "https://test-english.com/reading/a2/travelling-rock-garden-chandigarh-reading-test/",
    "title": "Travel: The Rock Garden of Chandigarh",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "accommodation",
    "link": "https://test-english.com/reading/a2/accommodation/",
    "title": "Accommodation",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "a2",
    "slug": "how-to-buy-tickets-glastonbury-festival",
    "link": "https://test-english.com/reading/a2/how-to-buy-tickets-glastonbury-festival/",
    "title": "How to buy tickets for Glastonbury Festival",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "in-a-hotel-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/in-a-hotel-a2-english-vocabulary/",
    "title": "In a hotel",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "giving-directions-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/giving-directions-a2-english-vocabulary/",
    "title": "Giving directions",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "a2",
    "slug": "holidays-a2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/a2/holidays-a2-english-vocabulary/",
    "title": "Holidays",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "my-last-holiday-writing",
    "link": "https://test-english.com/writing/a2/my-last-holiday-writing/",
    "title": "My last holiday",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "how-to-write-an-email-to-book-a-hotel-room",
    "link": "https://test-english.com/writing/a2/how-to-write-an-email-to-book-a-hotel-room/",
    "title": "How to write an email to book a hotel room",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "working-while-travelling-the-world-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/working-while-travelling-the-world-b1-english-listening-test/",
    "title": "Working while travelling the world",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "where-did-you-stay-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/where-did-you-stay-b1-english-listening-test/",
    "title": "Where did you stay?",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "how-do-you-travel-to-work-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/how-do-you-travel-to-work-b1-english-listening-test/",
    "title": "How do you travel to work?",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "stonehenge-b1-listening-test",
    "link": "https://test-english.com/listening/b1/stonehenge-b1-listening-test/",
    "title": "Stonehenge",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "plastic-roads-listening-test",
    "link": "https://test-english.com/listening/b1/plastic-roads-listening-test/",
    "title": "Roads made of plastic waste",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "speedflatmating-accommodation-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/speedflatmating-accommodation-b1-english-reading-test/",
    "title": "SpeedFlatmating (Accommodation)",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "hotel-leaflet",
    "link": "https://test-english.com/reading/b1/hotel-leaflet/",
    "title": "Hotel leaflet",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "hotels-and-accommodation-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/hotels-and-accommodation-b1-english-vocabulary/",
    "title": "Hotels and accommodation",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "transport-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/transport-b1-english-vocabulary/",
    "title": "Transport",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "how-to-write-a-hotel-review-after-a-stay",
    "link": "https://test-english.com/writing/b1/how-to-write-a-hotel-review-after-a-stay/",
    "title": "How to write a hotel review after a stay",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "writing",
    "level": "b1",
    "slug": "email-making-plans-for-visit-b1-writing",
    "link": "https://test-english.com/writing/b1/email-making-plans-for-visit-b1-writing/",
    "title": "Email making plans for visit",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "journey-through-our-solar-system-b2-english-listening-test",
    "link": "https://test-english.com/listening/b1-b2/journey-through-our-solar-system-b2-english-listening-test/",
    "title": "Journey through our Solar System",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "air-travel-experiences-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1-b2/air-travel-experiences-b1-english-listening-test/",
    "title": "Air travel experiences",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "living-on-the-road",
    "link": "https://test-english.com/listening/b1-b2/living-on-the-road/",
    "title": "Living on the road",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "teen-survived-plane-crash",
    "link": "https://test-english.com/listening/b1-b2/teen-survived-plane-crash/",
    "title": "Teen who survived plane crash",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "solar-road",
    "link": "https://test-english.com/listening/b1-b2/solar-road/",
    "title": "Solar road",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "can-you-stay-friends-after-divorce",
    "link": "https://test-english.com/reading/b1-b2/can-you-stay-friends-after-divorce/",
    "title": "Can you stay friends after divorce?",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "b1-b2",
    "slug": "what-type-of-accommodation-best-suits-you-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1-b2/what-type-of-accommodation-best-suits-you-b1-english-reading-test/",
    "title": "What type of accommodation best suits you?",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "air-travel-b1-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/air-travel-b1-b2-english-vocabulary/",
    "title": "Air travel",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "b1-b2",
    "slug": "travel-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1-b2/travel-b1-english-vocabulary/",
    "title": "Travel",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "dark-tourism-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/dark-tourism-b2-english-listening-test/",
    "title": "Dark Tourism",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "student-accommodation-b2-english-listening-test",
    "link": "https://test-english.com/listening/b2/student-accommodation-b2-english-listening-test/",
    "title": "Student accommodation",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "future-airport-security",
    "link": "https://test-english.com/listening/b2/future-airport-security/",
    "title": "The future of airport security",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "coolcationing-a-new-travel-trend-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/coolcationing-a-new-travel-trend-b2-english-reading-test/",
    "title": "Coolcationing: A new travel trend",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "the-most-unusual-tourist-attractions-b2-english-reading-test",
    "link": "https://test-english.com/reading/b2/the-most-unusual-tourist-attractions-b2-english-reading-test/",
    "title": "The most unusual tourist attractions",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "egypt-travel-guide",
    "link": "https://test-english.com/reading/b2/egypt-travel-guide/",
    "title": "Egypt travel guide",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "tourism-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/tourism-b2-english-vocabulary/",
    "title": "Tourism",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "car-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/car-b2-english-vocabulary/",
    "title": "Cars, roads and traffic",
    "group": "Travel, Transport & Tourism (Viagem, Transporte e Turismo)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "who-is-in-your-new-class-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/who-is-in-your-new-class-a1-english-listening-test/",
    "title": "Who is in your new class?",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "whats-your-job-a1-english-listening-test",
    "link": "https://test-english.com/listening/a1/whats-your-job-a1-english-listening-test/",
    "title": "What's your job?",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "kathys-job-listening-test",
    "link": "https://test-english.com/listening/a1/kathys-job-listening-test/",
    "title": "Kathy's job",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "a1",
    "slug": "schools-in-britain-listening-test",
    "link": "https://test-english.com/listening/a1/schools-in-britain-listening-test/",
    "title": "Schools in Britain",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "my-first-day-at-school-reading-test",
    "link": "https://test-english.com/reading/a1/my-first-day-at-school-reading-test/",
    "title": "Memories of my first day at school",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "reading",
    "level": "a1",
    "slug": "famous-peoples-first-jobs-reading-comprehension-test",
    "link": "https://test-english.com/reading/a1/famous-peoples-first-jobs-reading-comprehension-test/",
    "title": "Famous people’s first jobs",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "summer-job-interview-a2-english-listening-test",
    "link": "https://test-english.com/listening/a2/summer-job-interview-a2-english-listening-test/",
    "title": "Summer job interview",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "my-studies-listening-test",
    "link": "https://test-english.com/listening/a2/my-studies-listening-test/",
    "title": "My studies",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "learning-a-new-job-listening-test",
    "link": "https://test-english.com/listening/a2/learning-a-new-job-listening-test/",
    "title": "Learning a new job",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "a2",
    "slug": "interview-english-teacher-listening-test",
    "link": "https://test-english.com/listening/a2/interview-english-teacher-listening-test/",
    "title": "Interview with an English teacher",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "writing-an-essay-about-someones-job",
    "link": "https://test-english.com/writing/a2/writing-an-essay-about-someones-job/",
    "title": "Writing an essay about someone's job",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "writing",
    "level": "a2",
    "slug": "how-to-write-an-application-letter-for-a-summer-job",
    "link": "https://test-english.com/writing/a2/how-to-write-an-application-letter-for-a-summer-job/",
    "title": "How to write an application letter for a summer job",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "stories-of-school-and-education-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/stories-of-school-and-education-b1-english-listening-test/",
    "title": "Stories of school and education",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "personal-work-stories-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/personal-work-stories-b1-english-listening-test/",
    "title": "Personal Work Stories",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b1",
    "slug": "are-exams-necessary-b1-english-listening-test",
    "link": "https://test-english.com/listening/b1/are-exams-necessary-b1-english-listening-test/",
    "title": "Are exams necessary?",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "unusual-and-wonderful-jobs-b1-english-reading-test",
    "link": "https://test-english.com/reading/b1/unusual-and-wonderful-jobs-b1-english-reading-test/",
    "title": "Unusual and wonderful jobs",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "how-sleep-transformed-professional-football-reading-test",
    "link": "https://test-english.com/reading/b1/how-sleep-transformed-professional-football-reading-test/",
    "title": "How sleep transformed professional football",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "reading",
    "level": "b1",
    "slug": "learning-english-forum-your-answer-reading-test",
    "link": "https://test-english.com/reading/b1/learning-english-forum-your-answer-reading-test/",
    "title": "Learning English Forum. Your answer!",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "education-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/education-b1-english-vocabulary/",
    "title": "Education",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "vocabulary",
    "level": "b1",
    "slug": "work-b1-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b1/work-b1-english-vocabulary/",
    "title": "Work",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "school-reunion-b1-listening-test",
    "link": "https://test-english.com/listening/b1-b2/school-reunion-b1-listening-test/",
    "title": "School reunion",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "interview-jonathan-franzen",
    "link": "https://test-english.com/listening/b1-b2/interview-jonathan-franzen/",
    "title": "Interview with Jonathan Franzen",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "top-5-regrets-dying-interview",
    "link": "https://test-english.com/listening/b1-b2/top-5-regrets-dying-interview/",
    "title": "The Top 5 Regrets of the dying",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b1-b2",
    "slug": "interview-victim-domestic-abuse",
    "link": "https://test-english.com/listening/b1-b2/interview-victim-domestic-abuse/",
    "title": "Interview with a victim of domestic abuse",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "what-is-it-like-to-work-in-the-film-industry-b2-listening-test",
    "link": "https://test-english.com/listening/b2/what-is-it-like-to-work-in-the-film-industry-b2-listening-test/",
    "title": "What is it like to work in the film industry?",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "how-good-is-your-job-b2-listening-test",
    "link": "https://test-english.com/listening/b2/how-good-is-your-job-b2-listening-test/",
    "title": "How good is your job?",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "inside-googles-office",
    "link": "https://test-english.com/listening/b2/inside-googles-office/",
    "title": "Inside Google's office",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "interview-john-irving",
    "link": "https://test-english.com/listening/b2/interview-john-irving/",
    "title": "Interview with John Irving",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "interview-literary-translator",
    "link": "https://test-english.com/listening/b2/interview-literary-translator/",
    "title": "Interview with a literary translator",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "chronic-fatigue-sydrom-interview",
    "link": "https://test-english.com/listening/b2/chronic-fatigue-sydrom-interview/",
    "title": "Chronic Fatigue Syndrome",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "listening",
    "level": "b2",
    "slug": "interview-lily-singh",
    "link": "https://test-english.com/listening/b2/interview-lily-singh/",
    "title": "Interview with Lily Singh",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "uk-students-protest-covid-19-measures-reading-test",
    "link": "https://test-english.com/reading/b2/uk-students-protest-covid-19-measures-reading-test/",
    "title": "UK students protest Covid-19 measures",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "learning-from-penguin-poop-reading-test",
    "link": "https://test-english.com/reading/b2/learning-from-penguin-poop-reading-test/",
    "title": "Learning from penguin poop",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "reading",
    "level": "b2",
    "slug": "10-things-never-starting-new-job",
    "link": "https://test-english.com/reading/b2/10-things-never-starting-new-job/",
    "title": "10 things you should never do when starting a new job",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "work-and-jobs-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/work-and-jobs-b2-english-vocabulary/",
    "title": "Work and jobs",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "vocabulary",
    "level": "b2",
    "slug": "education-b2-english-vocabulary",
    "link": "https://test-english.com/vocabulary/b2/education-b2-english-vocabulary/",
    "title": "Education",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  },
  {
    "category": "writing",
    "level": "b2",
    "slug": "writing-an-article-for-the-first-exam-b2-english-writing",
    "link": "https://test-english.com/writing/b2/writing-an-article-for-the-first-exam-b2-english-writing/",
    "title": "Writing an article for the First exam",
    "group": "Work, Jobs & Education (Trabalho, Profissões e Educação)"
  }
];
