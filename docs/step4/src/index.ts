import { McpServer } from "@modelcontextprotocol/sdk/server/mcp.js";
import { StdioServerTransport } from "@modelcontextprotocol/sdk/server/stdio.js";
import { ListToolsRequestSchema } from "@modelcontextprotocol/sdk/types.js";
import { z } from "zod";


const server = new McpServer({
    name: "Pokémon Flavor Text",
    version: "1.0.0"
});

server.tool(
  "find_by_id",
  { id: z.number().min(1).max(151) },
  async ({ id }) => {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon-species/${id}`);
    if (!response.ok) {
      throw new Error("Failed to fetch data from PokéAPI");
    }
    const pokemon = await response.json();

    const flavorText = pokemon.flavor_text_entries.find(
      (entry: any) => entry.language.name === "ja"
    )?.flavor_text;

    const name = pokemon.names.find(
      (entry: any) => entry.language.name === "ja"
    )?.name;

    const result = `ポケモンの名前: ${name}\n\n${flavorText}`;
    return {
      content: [
        { type: "text", text: result }
      ]
    }
  }
);

const transport = new StdioServerTransport();
await server.connect(transport);
