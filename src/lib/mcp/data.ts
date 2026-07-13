// Dados curados das trilhas — mantidos em código porque este app expõe
// apenas conteúdo público e estático (a página /freecodecamp-trilhas.html).
export const SITE_URL = "https://colour-charm-creator.lovable.app";
export const TRILHAS_URL = `${SITE_URL}/freecodecamp-trilhas.html`;

export interface Trilha {
  slug: string;
  title: string;
  description: string;
  topics: string[];
  url: string;
}

export const trilhas: Trilha[] = [
  {
    slug: "fundamentos-programacao",
    title: "Fundamentos de Programação",
    description:
      "Ponto de partida para quem nunca programou: lógica, algoritmos básicos e primeiros passos com uma linguagem de programação.",
    topics: ["lógica de programação", "algoritmos", "estruturas de dados básicas"],
    url: TRILHAS_URL,
  },
  {
    slug: "desenvolvimento-web",
    title: "Desenvolvimento Web",
    description:
      "Caminho guiado por HTML, CSS, JavaScript, frameworks modernos e projetos práticos para construir sites e aplicações web.",
    topics: ["HTML", "CSS", "JavaScript", "React", "APIs"],
    url: TRILHAS_URL,
  },
  {
    slug: "dados",
    title: "Dados e Análise",
    description:
      "Trilha voltada a análise de dados com Python, bibliotecas científicas e projetos reais do freeCodeCamp.",
    topics: ["Python", "pandas", "numpy", "visualização de dados"],
    url: TRILHAS_URL,
  },
];
