import Header from "../templates/Header";
import Character from "../pages/Character"
import Error404 from "../pages/Error404"
import Home from "../pages/Home"

const routes = {
    '/': Home,
    '/:id': Character,
    '/no-hay-error-aqui-xd': "Sin errores xd"
}

//Manejador de nustras rutas
const router = async () => {
    const header = null || document.getElementById('header')
    const content = null || document.getElementById('content')

    header.innerHTML = await Header()
}

export default router