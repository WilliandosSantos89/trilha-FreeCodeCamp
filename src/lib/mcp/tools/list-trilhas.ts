import { defineTool } from "@lovable.dev/mcp-js";
import { trilhas } from "../data";

export default defineTool({
  name: "list_trilhas",
  title: "Listar trilhas",
  description:
    "Lista as trilhas de estudo curadas do freeCodeCamp em português, com título, descrição, tópicos e URL da página onde estão publicadas.",
  inputSchema: {},
  annotations: { readOnlyHint: true, idempotentHint: true, openWorldHint: false },
  handler: () => ({
    content: [{ type: "text", text: JSON.stringify(trilhas, null, 2) }],
    structuredContent: { trilhas },
  }),
});
