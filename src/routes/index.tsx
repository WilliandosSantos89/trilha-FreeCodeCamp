import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Trilhas de Estudo do freeCodeCamp em Português" },
      {
        name: "description",
        content:
          "Trilhas de estudo curadas do freeCodeCamp em português: caminhos guiados por cursos, vídeos e projetos para aprender programação do zero ao avançado.",
      },
      { property: "og:title", content: "Trilhas de Estudo do freeCodeCamp em Português" },
      {
        property: "og:description",
        content:
          "Trilhas de estudo curadas do freeCodeCamp em português: caminhos guiados por cursos, vídeos e projetos para aprender programação do zero ao avançado.",
      },
      { property: "og:url", content: "https://trilha-freecodecamp.lovable.app/" },
    ],
    links: [{ rel: "canonical", href: "https://trilha-freecodecamp.lovable.app/" }],
  }),
});

function Index() {
  return (
    <main className="fcc-shell min-h-screen">
      <div className="grid-overlay" aria-hidden />
      <div className="radial-glow" aria-hidden />

      <section className="relative z-[2] mx-auto w-[min(1240px,calc(100%-40px))] pt-28 pb-16">
        <p
          className="mb-6 text-[0.72rem] uppercase tracking-[0.18em]"
          style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--fcc-accent)" }}
        >
          // freeCodeCamp · Português · V.01
        </p>
        <h1
          className="display text-5xl sm:text-6xl md:text-7xl font-bold"
          style={{ color: "var(--fcc-text)" }}
        >
          Trilhas de estudo do <span style={{ color: "var(--fcc-accent)" }}>freeCodeCamp</span>
        </h1>
        <p
          className="mt-8 max-w-3xl text-lg leading-relaxed"
          style={{ color: "var(--fcc-muted)" }}
        >
          Este projeto reúne trilhas de estudo curadas para quem quer aprender programação com o
          freeCodeCamp em português. Cada trilha organiza cursos, vídeos e projetos em uma sequência
          lógica, do zero ao avançado, para você saber exatamente o próximo passo a dar.
        </p>
        <p
          className="mt-4 max-w-3xl text-lg leading-relaxed"
          style={{ color: "var(--fcc-muted)" }}
        >
          A ideia é resolver um problema comum de quem começa sozinho: o excesso de conteúdo
          espalhado. Em vez de escolher aleatoriamente por onde começar, você segue uma trilha
          temática: desenvolvimento web, fundamentos de programação, dados, e mais, com marcos
          claros de progresso e links diretos para o material oficial do freeCodeCamp.
        </p>
        <div className="mt-12">
          <a
            href="/freecodecamp-trilhas.html"
            className="inline-flex items-center gap-3 px-6 py-3 text-sm font-semibold uppercase tracking-[0.14em] transition-colors"
            style={{
              fontFamily: "'JetBrains Mono',monospace",
              background: "var(--fcc-accent)",
              color: "var(--fcc-btn-primary-fg)",
              border: "1px solid var(--fcc-accent)",
            }}
          >
            <span>Começar a aprender</span>
            <span aria-hidden>→</span>
          </a>
        </div>
      </section>

      <CreditsFooter />
    </main>
  );
}

function CreditsFooter() {
  return (
    <footer
      className="relative z-[2] mx-auto mt-8 flex w-[min(1240px,calc(100%-40px))] flex-col gap-4 border-t py-9 md:flex-row md:items-center md:justify-between"
      style={{
        borderColor: "var(--fcc-line)",
        fontFamily: "'JetBrains Mono',monospace",
        fontSize: ".7rem",
        letterSpacing: ".14em",
        textTransform: "uppercase",
        color: "var(--fcc-dim)",
      }}
    >
      <div className="flex items-center gap-3">
        <span
          className="inline-flex h-[22px] w-[22px] items-center justify-center border text-[.6rem]"
          style={{ borderColor: "var(--fcc-line-strong)", color: "var(--fcc-accent)", background: "var(--fcc-surface)" }}
        >
          {"</>"}
        </span>
        FCC/PATH · Central de estudos
      </div>
      <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
        <span>
          Vídeos:{" "}
          <a
            href="https://www.youtube.com/@freecodecamp"
            target="_blank"
            rel="noopener noreferrer"
            className="fcc-link"
          >
            freeCodeCamp.org ↗
          </a>
        </span>
        <span>
          Curadoria:{" "}
          <a
            href="https://github.com/WilliandosSantos89"
            target="_blank"
            rel="noopener noreferrer"
            className="fcc-link"
          >
            GitHub ↗
          </a>
          {" · "}
          <a
            href="https://www.linkedin.com/in/willian-dos-santos/"
            target="_blank"
            rel="noopener noreferrer"
            className="fcc-link"
          >
            LinkedIn ↗
          </a>
        </span>
      </div>
    </footer>
  );
}
