interface Character {
  id?: string,
  name?: string,
  species?: string,
  image?: string,
}



const RootPage = async() => {
  const characters = await loadCharacters();


  return <p>{JSON.stringify(characters, null,'\t')}</p>;
}

async function loadCharacters() {
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



export default RootPage;
