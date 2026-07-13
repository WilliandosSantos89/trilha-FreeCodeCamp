import { defineMcp } from "@lovable.dev/mcp-js";
import listTrilhasTool from "./tools/list-trilhas";
import getTrilhaTool from "./tools/get-trilha";

export default defineMcp({
  name: "freecodecamp-trilhas-mcp",
  title: "freeCodeCamp Trilhas MCP",
  version: "0.1.0",
  instructions:
    "Ferramentas para consultar as trilhas de estudo curadas do freeCodeCamp em português. Use list_trilhas para ver todas as trilhas e get_trilha para detalhar uma trilha pelo slug.",
  tools: [listTrilhasTool, getTrilhaTool],
});
