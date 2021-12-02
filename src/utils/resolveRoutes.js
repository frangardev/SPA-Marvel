const resolveRoutes = (route) => {
    if(route.length <= 9){
        let validRoute = route === '/' ? route : '/:id'
        console.log("url: ", validRoute);
        return validRoute
    }
    return `/${route}`
}

export default resolveRoutes