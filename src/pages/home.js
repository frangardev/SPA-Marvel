import getData from "../utils/getData";
import Character from "./Character";

const Home = async () => {
  const Characters = await getData()
    const headerHome = `
      <section class="Home__header">
        <a href="#/fhasio/">
          <img src="https://images.pexels.com/photos/7768663/pexels-photo-7768663.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" alt="Header images">
        </a>
      </section>
      <h2 class="Characters__title">Characters</h2>
    `
    const view =  Characters.map(item => {
      return `
        <section class="Character__main" >
          <article class="Character-item">
            <a href="#/${item.id}/">
              <figure class="Character__img-container">
                <img class="Character__img" src="${item.thumbnail.path}.${item.thumbnail.extension}" alt="${item.name}">
              </figure>
              <h2 class="Character__name">${item.name}</h2>
            </a>
          </article>
        </section>
      `
    }).join('')
    return headerHome + view
}
const rta = Home()

console.log(rta);
export default Home
