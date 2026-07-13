import { createFileRoute } from "@tanstack/react-router";

const SOCIALS = [
  {
    name: "YouTube",
    href: "https://www.youtube.com/@freecodecamp",
    label: "freeCodeCamp.org no YouTube",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.5 6.19a3.02 3.02 0 0 0-2.12-2.14C19.5 3.5 12 3.5 12 3.5s-7.5 0-9.38.55A3.02 3.02 0 0 0 .5 6.19 31.5 31.5 0 0 0 0 12a31.5 31.5 0 0 0 .5 5.81 3.02 3.02 0 0 0 2.12 2.14c1.88.55 9.38.55 9.38.55s7.5 0 9.38-.55a3.02 3.02 0 0 0 2.12-2.14A31.5 31.5 0 0 0 24 12a31.5 31.5 0 0 0-.5-5.81zM9.55 15.5V8.5l6.27 3.5-6.27 3.5z" />
      </svg>
    ),
  },
  {
    name: "GitHub",
    href: "https://github.com/WilliandosSantos89",
    label: "WilliandosSantos89 no GitHub",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 .5C5.65.5.5 5.65.5 12c0 5.08 3.29 9.38 7.86 10.9.58.11.79-.25.79-.56v-2.04c-3.2.7-3.88-1.54-3.88-1.54-.53-1.34-1.28-1.7-1.28-1.7-1.05-.71.08-.7.08-.7 1.16.08 1.77 1.19 1.77 1.19 1.03 1.76 2.7 1.25 3.36.96.1-.75.4-1.25.73-1.54-2.56-.29-5.25-1.28-5.25-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.05 0 0 .97-.31 3.18 1.18a11.1 11.1 0 0 1 5.8 0c2.2-1.49 3.17-1.18 3.17-1.18.64 1.59.24 2.76.12 3.05.74.81 1.19 1.84 1.19 3.1 0 4.43-2.7 5.41-5.27 5.69.42.36.79 1.08.79 2.18v3.24c0 .31.21.68.8.56A11.5 11.5 0 0 0 23.5 12C23.5 5.65 18.35.5 12 .5z" />
      </svg>
    ),
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/williandossantos89",
    label: "Willian dos Santos no LinkedIn",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.35V9h3.42v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.55V9h3.57v11.45zM22.23 0H1.77C.79 0 0 .77 0 1.72v20.55C0 23.23.79 24 1.77 24h20.46c.98 0 1.77-.77 1.77-1.72V1.72C24 .77 23.21 0 22.23 0z" />
      </svg>
    ),
  },
  {
    name: "Discord",
    href: "https://discord.com/users/williandossantos89",
    label: "Discord: williandossantos89",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M20.32 4.36A17.9 17.9 0 0 0 15.36 2c-.24.43-.46.88-.65 1.34a16.7 16.7 0 0 0-5.02 0c-.18-.46-.4-.91-.65-1.34A17.9 17.9 0 0 0 3.68 4.36C1.24 8.42.5 12.32.99 16.15a17.9 17.9 0 0 0 5.45 2.76c.44-.59.82-1.22 1.14-1.88-.62-.23-1.21-.52-1.77-.86.15-.11.29-.22.44-.33a12.8 12.8 0 0 0 10.42 0c.14.11.29.22.44.33-.56.34-1.15.63-1.77.86.32.66.7 1.29 1.14 1.88a17.9 17.9 0 0 0 5.45-2.76c.57-4.47-.94-8.34-3.11-11.79zM8.51 13.66c-1.03 0-1.87-.94-1.87-2.1 0-1.16.82-2.1 1.87-2.1 1.04 0 1.88.95 1.87 2.1 0 1.16-.82 2.1-1.87 2.1zm6.98 0c-1.03 0-1.87-.94-1.87-2.1 0-1.16.82-2.1 1.87-2.1 1.04 0 1.88.95 1.87 2.1 0 1.16-.83 2.1-1.87 2.1z" />
      </svg>
    ),
  },
];

function SocialLinks() {
  return (
    <div className="flex flex-wrap items-center gap-3">
      {SOCIALS.map((s) => (
        <a
          key={s.name}
          href={s.href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={s.label}
          className="inline-flex h-10 w-10 items-center justify-center rounded-lg transition-colors"
          style={{
            background: "var(--fcc-surface)",
            color: "var(--fcc-accent)",
            border: "1px solid var(--fcc-line-strong)",
          }}
          onMouseEnter={(e) => {
            e.currentTarget.style.background = "var(--fcc-accent)";
            e.currentTarget.style.color = "var(--fcc-btn-primary-fg)";
          }}
          onMouseLeave={(e) => {
            e.currentTarget.style.background = "var(--fcc-surface)";
            e.currentTarget.style.color = "var(--fcc-accent)";
          }}
        >
          <span className="h-5 w-5">{s.icon}</span>
        </a>
      ))}
      <span
        className="ml-2 hidden text-[.65rem] uppercase tracking-[0.14em] sm:inline"
        style={{ fontFamily: "'JetBrains Mono',monospace", color: "var(--fcc-dim)" }}
      >
        Discord: williandossantos89
      </span>
    </div>
  );
}

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
            href="https://www.linkedin.com/in/williandossantos89"
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
