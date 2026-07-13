# Reskin industrial do FCC Trilhas

Vou reescrever `freecodecamp-trilhas.html` como um único HTML auto-contido, adotando 100% a linguagem visual do `index.html` (industrial dark SaaS), mantendo todo o conteúdo original (9 trilhas, 18 cursos, busca + filtros, seção método).

## Sistema visual (portado do index.html)

**Paleta**
- Fundo base `#050505`; superfícies `#0a0a0a` / `#111111`
- Bordas/linhas `#27272a` (zinc-800), `#18181b` (zinc-900)
- Texto `#fafafa` (zinc-50), muted `#a1a1aa` (zinc-400), dim `#52525b` (zinc-600)
- Acento único **orange-600 `#ea580c`** (+ glow `rgba(234,88,12,0.15)`)
- Overlays: grid `linear-gradient` 40px, scanlines CRT, radial glow laranja

**Tipografia**
- `Geist` para display/headings (via Google Fonts)
- `Inter` para body
- `JetBrains Mono` para eyebrows, contadores, tags, números de trilha
- Headings com `tracking-tight`, hierarquia dura, sem itálico lilás

**Animações (copiadas 1:1)**
- `sys-reveal` + variantes `sys-rise` / `sys-slide-l` / `sys-slide-r` / `sys-scale` com `sys-active` disparado por `IntersectionObserver`
- `sys-delay-100..500` para stagger
- `sys-flicker` (aparição CRT) em eyebrows/tags
- `sys-bar-fill` para barras de progresso de nível nos cards de curso
- `animate-spin-slow` num marcador decorativo no hero
- Hover industrial nos cards: `translateY(-2px)`, borda laranja, brilho radial
- `prefers-reduced-motion` respeitado

## Estrutura da página (mesma hierarquia, repaginada)

```text
┌─ TOPBAR ──────────────────────────────────────────┐
│ [</> FCC/PATH]   TRILHAS · BIBLIOTECA · MÉTODO   [YT ↗] │
├─ HERO ────────────────────────────────────────────┤
│ eyebrow mono flicker · CURADORIA · FCC            │
│ H1 Geist enorme, tracking-tight                   │
│ subcopy zinc-400 · botão laranja + ghost         │
│ stats 3 col mono + barras sys-bar-fill            │
│ (grid overlay + radial glow laranja no canto)     │
├─ TRILHAS (9 cards) ───────────────────────────────┤
│ grid 3 col, borda zinc-800, hover borda orange   │
│ ícone + "TRILHA 0X" mono laranja + título + desc │
├─ BIBLIOTECA (18 cursos) ──────────────────────────┤
│ filterbar industrial: busca + chips              │
│ chip ativo: bg zinc-900 + borda orange-600       │
│ course cards com tag mono, barra de nível         │
├─ MÉTODO (3 passos) ───────────────────────────────┤
│ números mono grandes, linha vertical divisória   │
└─ FOOTER mono ─────────────────────────────────────┘
```

## Preservado do original

- Mesmos textos PT-BR, mesmos 9 arrays de trilha e 18 cursos, mesmos links do YouTube
- Mesma lógica JS de busca/filtro/render (adaptada apenas para as novas classes)
- Mesmas âncoras (`#trilhas`, `#biblioteca`, `#metodo`) e navegação
- Continua sendo **um único arquivo `.html`** sem dependências além de Google Fonts

## Descartado do original

- Paleta roxo/rosa (`--purple`, `--pink`, `--lilac`) e blobs `.glow` desfocados
- Fontes `Outfit` / `DM Mono` (substituídas por Geist/Inter/JetBrains Mono)
- Emojis coloridos como ícones de trilha → substituídos por glifos monocromáticos + numeração mono

## Detalhes técnicos

- CSS inline num único `<style>`, tokens em `:root` (sem Tailwind — mantém o formato "single file")
- `IntersectionObserver` num `<script>` no fim do body dispara `sys-active` uma vez por elemento
- SEO: `<title>` novo com keyword, `<meta description>` <160 chars, `og:*`, `twitter:card`
- H1 único, HTML semântico (`header`, `main`, `section`, `article`, `footer`), `alt`/`aria-label` onde aplica

## Entrega

Sobrescrevo `freecodecamp-trilhas.html` (mantendo o nome) e disponibilizo em `/mnt/documents/freecodecamp-trilhas.html` para download.
