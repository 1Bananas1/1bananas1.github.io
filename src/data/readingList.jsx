export const papersData = [
  {
    id: 'prefix-generation',
    title: 'Prefix-Tuning: Optimizing Continuous Prompts for Generation',
    authors: 'Xiang Lisa Li, Percy Liang',
    dateRead: 'Spring 2026',
    url: 'https://arxiv.org/abs/2101.00190',
    tags: ['CS', 'Computation and Language'],
    notes: '',
  },
  {
    id: 'attention-is-all-you-need',
    title: 'Attention Is All You Need',
    authors: 'Vaswani et al.',
    dateRead: 'Fall 2025',
    url: 'https://arxiv.org/abs/1706.03762',
    tags: ['NLP', 'Transformers', 'Deep Learning'],
    notes:
      'The paper that introduced the Transformer architecture, replacing recurrence with self-attention. Essential reading for understanding modern LLMs.',
  },
  {
    id: 'llm-agents-survey',
    title: 'A Survey on Large Language Model based Autonomous Agents',
    authors: 'Wang et al.',
    dateRead: 'February 2026',
    url: 'https://arxiv.org/abs/2308.11432',
    tags: ['AI Agents', 'LLMs', 'Survey'],
    notes:
      'Comprehensive overview of how LLMs are being used as the backbone for autonomous agents — planning, memory, tool use, and multi-agent systems.',
  },
  {
    id: 'towards-monosemanticity',
    title:
      'Towards Monosemanticity: Decomposing Language Models With Dictionary Learning',
    authors: 'Bricken, Templeton et al., Anthropic',
    dateRead: 'Spring 2026',
    url: 'https://www.anthropic.com/research/towards-monosemanticity-decomposing-language-models-with-dictionary-learning',
    tags: [
      'Mechanistic Interpretability',
      'Dictionary Learning',
      'Language Models',
    ],
    notes: '',
  },
  {
    id: 'ai-assistance-coding-skills',
    title: 'How AI Assistance Impacts the Formation of Coding Skills',
    authors: 'Judy Hanwen Shen, Alex Tamkin',
    dateRead: 'Spring 2026',
    url: 'https://www.anthropic.com/research/AI-assistance-coding-skills',
    tags: ['AI', 'Coding', 'Education'],
    notes: '',
  },
  {
    id: 'agents-md-impact',
    title:
      'On the Impact of AGENTS.md Files on the Efficiency of AI Coding Agents',
    authors: 'Lulla, Mohsenimofidi, Galster, Zhang, Baltes, Treude',
    dateRead: 'Spring 2026',
    url: 'https://arxiv.org/abs/2601.20404',
    tags: ['AI Agents', 'Software Engineering', 'Coding'],
    notes: '',
  },
  {
    id: 'meta-context-engineering',
    title: 'Meta Context Engineering via Agentic Skill Evolution',
    authors: 'Haoran Ye, Xuning He, Vincent Arak, Haonan Dong, Guojie Song',
    dateRead: 'March 2026',
    url: 'https://arxiv.org/abs/2601.21557',
    tags: ['AI Agents', 'Context Engineering', 'Meta-Learning'],
    notes:
      'Bi-level framework for context optimization where a meta-level agent refines engineering skills through deliberative search. Demonstrates 5.6-53.8% improvement over state-of-the-art agentic CE methods.',
  },
  {
    id: 'llmlingua',
    title:
      'LLMLingua: Compressing Prompts for Accelerated Inference of Large Language Models',
    authors: 'Huiqiang Jiang, Qianhui Wu, Chin-Yew Lin, Yuqing Yang, Lili Qiu',
    dateRead: 'March 2026',
    url: 'https://arxiv.org/abs/2310.05736',
    tags: ['LLMs', 'Prompt Compression', 'Inference Optimization'],
    notes:
      'Coarse-to-fine prompt compression method achieving up to 20x compression with minimal performance loss. Uses budget controller to maintain semantic integrity under high compression ratios.',
  },
  {
    id: 'gist-tokens',
    title: 'Learning to Compress Prompts with Gist Tokens',
    authors: 'Jesse Mu, Xiang Lisa Li, Noah Goodman',
    dateRead: 'March 2026',
    url: 'https://arxiv.org/abs/2304.08467',
    tags: ['LLMs', 'Prompt Compression', 'NeurIPS 2023'],
    notes: '',
  },
]

const SEMESTER_MONTH = { Spring: 2, Summer: 6, Fall: 9 }
const MONTH_INDEX = {
  January: 1,
  February: 2,
  March: 3,
  April: 4,
  May: 5,
  June: 6,
  July: 7,
  August: 8,
  September: 9,
  October: 10,
  November: 11,
  December: 12,
}

// Returns a sortable number (year * 100 + month) from strings like "Spring 2026" or "February 2026"
export const parseDateRead = (dateStr) => {
  const [term, yearStr] = dateStr.split(' ')
  const year = parseInt(yearStr) || 0
  const month = SEMESTER_MONTH[term] ?? MONTH_INDEX[term] ?? 0
  return year * 100 + month
}

export const getPapersByTag = (tag) => {
  return papersData.filter((p) => p.tags.includes(tag))
}

export const getAllTags = () => {
  const allTags = papersData.flatMap((p) => p.tags)
  return [...new Set(allTags)]
}
