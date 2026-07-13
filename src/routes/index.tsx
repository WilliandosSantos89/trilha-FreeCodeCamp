import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "freeCodeCamp Trilhas — Roteiros de Estudo Curados" },
      {
        name: "description",
        content:
          "Trilhas de estudo curadas do freeCodeCamp em português: caminhos guiados por cursos, vídeos e projetos para aprender programação do zero ao avançado.",
      },
      { property: "og:title", content: "freeCodeCamp Trilhas — Roteiros de Estudo Curados" },
      {
        property: "og:description",
        content:
          "Caminhos de aprendizado organizados por tema para você estudar programação com o freeCodeCamp em português, sem se perder no meio do caminho.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="min-h-screen bg-background text-foreground transition-colors">
      <section className="mx-auto max-w-3xl px-6 py-20 pt-28">
        <p className="mb-3 text-sm font-semibold uppercase tracking-widest text-orange-500">
          freeCodeCamp · Português
        </p>
        <h1 className="text-4xl font-bold leading-tight sm:text-5xl">
          Trilhas de Estudo do freeCodeCamp
        </h1>
        <p className="mt-6 text-lg leading-relaxed text-muted-foreground">
          Este projeto reúne trilhas de estudo curadas para quem quer aprender
          programação com o freeCodeCamp em português. Cada trilha organiza
          cursos, vídeos e projetos em uma sequência lógica, do zero ao
          avançado, para você saber exatamente o próximo passo a dar.
        </p>
        <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
          A ideia é resolver um problema comum de quem começa sozinho: o excesso
          de conteúdo espalhado. Em vez de escolher aleatoriamente por onde
          começar, você segue uma trilha temática: desenvolvimento web,
          fundamentos de programação, dados, e mais, com marcos claros de
          progresso e links diretos para o material oficial do freeCodeCamp.
        </p>
        <div className="mt-10">
          <a
            href="/freecodecamp-trilhas.html"
            className="inline-flex items-center rounded-md bg-orange-600 px-5 py-3 text-sm font-semibold text-white transition-colors hover:bg-orange-700"
          >
            Abrir as trilhas
          </a>
        </div>
      </section>
    </main>
  );
}
