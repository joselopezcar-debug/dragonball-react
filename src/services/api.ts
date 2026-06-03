import type { Character } from "../types/Character";

export async function getCharacters(): Promise<Character[]> {
  const response = await fetch(
    "https://dragonball-api.com/api/characters"
  );

  const data = await response.json();

  console.log(data);

  return data.items;
}