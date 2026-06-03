import type { Character } from "../types/Character";

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(
    "https://dragonball-api.com/api/characters"
  );

  return response.json();
}