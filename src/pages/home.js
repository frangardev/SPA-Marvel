import getData from "../utils/getData";
import Character from "./Character";

const Home = async () => {
  const Characters = await getData()

    const view =  Characters.map(item => {
      return `
        <article class="Character-item">
          <a href="#/${item.id}/">
            <img class="Character__img" src="${item.thumbnail.path}.${item.thumbnail.extension}" alt="${item.name}">
            <h2 class="Character__name">${item.name}</h2>
          </a>
        </article>
      `
    }).join('')
    return view
}
const rta = Home()

console.log(rta);
export default Home
