import { defineTool } from "@lovable.dev/mcp-js";
import { z } from "zod";
import { trilhas } from "../data";

export default defineTool({
  name: "get_trilha",
  title: "Detalhar trilha",
  description:
    "Retorna os detalhes de uma trilha específica pelo slug (por exemplo, 'desenvolvimento-web' ou 'fundamentos-programacao').",
  inputSchema: {
    slug: z
      .string()
      .min(1)
      .describe("Slug da trilha, conforme retornado por list_trilhas."),
  },
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: ({ slug }) => {
    const trilha = trilhas.find((t) => t.slug === slug);
    if (!trilha) {
      return {
        content: [
          {
            type: "text",
            text: `Nenhuma trilha encontrada com slug "${slug}". Use list_trilhas para ver os slugs disponíveis.`,
          },
        ],
        isError: true,
      };
    }
    return {
      content: [{ type: "text", text: JSON.stringify(trilha, null, 2) }],
      structuredContent: { trilha },
    };
  },
});
