import "server-only";

import { Question } from "@/app/questions/page";
import { Character } from "@/app/page";


export async function loadQuestions() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://polls.apiblueprint.org/questions?page=1", { next: { revalidate: 20 } });
  const data = await res.json();


  return data?.map(({ question, url }: Question) => 
  ({
      question, url
  }))

}

export async function loadCharacters() {
  // Call an external API endpoint to get posts
  const res = await fetch("https://rickandmortyapi.com/api/character?page=1");
  const data = await res.json();

  const newArray: Character[] = [];
  data?.results.map((item: Character) => {
    const { id, name, image, species } = item;

    newArray.push({ id, name, image, species });
  });
  return newArray;
}
