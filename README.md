# FCC/PATH — Trilhas de Estudo do freeCodeCamp em Português

Curadoria de trilhas guiadas de estudo baseadas nos cursos, vídeos e projetos do **freeCodeCamp em português**. Em vez de escolher aleatoriamente por onde começar, quem está aprendendo sozinho segue uma trilha temática — Fundamentos Web, JavaScript e Front-end, Back-end e APIs, Python e Dados, IA e Machine Learning, Ciência da Computação, entre outras — com marcos claros de progresso e links diretos para o material oficial.

## O que o projeto entrega

- Página inicial com o conceito e o ponto de entrada nas trilhas.
- Biblioteca `freecodecamp-trilhas.html` com todos os cursos organizados por trilha, nível e objetivo, filtráveis e com tema claro/escuro.
- Servidor **MCP público** (`/mcp`) que expõe as trilhas como ferramentas somente-leitura, para agentes de IA consumirem o catálogo.
- SEO pronto: `sitemap.xml`, `llms.txt`, meta tags Open Graph/Twitter e HTML semântico.

## Stack

- **TanStack Start v1** + **React 19** + **Vite 7**
- **Tailwind CSS v4** com design tokens semânticos (CSS variables + `data-theme`)
- **TypeScript** estrito
- Deploy edge (Cloudflare Workers)

## Rodar localmente

```bash
bun install
bun run dev
```

Abra `http://localhost:8080`.

## Créditos

- **Conteúdo e vídeos:** [freeCodeCamp.org](https://www.youtube.com/@freecodecamp)
- **Curadoria e desenvolvimento:** Willian dos Santos — [GitHub](https://github.com/WilliandosSantos89) · [LinkedIn](https://www.linkedin.com/in/willian-dos-santos/)

Projeto de portfólio construído com [Lovable](https://lovable.dev).
