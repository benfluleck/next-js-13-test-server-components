import { loadCharacters } from "../lib/hello";
import CardList from "../ui/CardList/CardList";

export interface Character {
  id?: string;
  name?: string;
  species?: string;
  image: string;
}

const RootPage = async () => {
  const characters = await loadCharacters();

  return (<CardList data={characters} />);
};


export default RootPage;
