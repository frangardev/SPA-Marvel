import getHash from '../utils/getHash';
import getData from '../utils/getData';

import Error404 from './Error404';

const Character = async () => {
  const id = getHash();
  const chara = await getData();
  //Chara guarda todos los personajes
  const characterViewArry = chara.filter(item => item.id == id)
  //characterViewArry filtra y regresa solo el que el id concida con el del personaje, pero debuelce un array
  const characterView = characterViewArry[0]
  //CharacterView es el objeto final del personaje
  console.log(characterView);

  //Por si el hash no funciona o es incorrecto
  if(characterView == undefined){
    return Error404
  }

  const series =characterView.series.items.map(item => {
    return `<li>${item.name}</li>`
  }).join('')

  const comics =characterView.comics.items.map(item => {
    return `<li>${item.name}</li>`
  }).join('')

  const view = `
      <div class="Characters-inner">
        <article class="Characters-card">
          <img src="${characterView.thumbnail.path}.${characterView.thumbnail.extension}" alt="${characterView.name}">
          <h2>${characterView.name}</h2>
          <p class="Characters-description">${characterView.description}</p>
        </article>
        <article class="Characters__card">
          <h3>Series: </h3>
          <ul>${series}</ul>
          <h3>Comics:</h3>
          <ul>${comics}</ul>
          <a href="${characterView.urls[1].url}" target="_blank" >wiki</a>
      </div>
    `;
    return view;
  };
  
  export default Character;