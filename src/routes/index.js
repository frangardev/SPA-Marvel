import Header from "../templates/Header";
import Character from "../pages/Character"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"

import getHash from "../utils/getHash"
import resolveRoutes from "../utils/resolveRoutes"


const routes = {
    '/': Home,
    '/:id': Character,
    '/no-hay-error-aqui-xd': "Sin errores xd"
}

//Manejador de nustras rutas
const router = async () => {
    const header = null || document.getElementById('header');
    const content = null || document.getElementById('content');
  
    header.innerHTML = await Header();
    let hash = getHash();
    let route = await resolveRoutes(hash);
    let render = routes[route] ? routes[route] : Error404;
    content.innerHTML = await render();
}

export default router