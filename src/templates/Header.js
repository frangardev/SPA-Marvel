const Header = () =>{
    const view = `
        <img class="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Marvel_Logo.svg/2560px-Marvel_Logo.svg.png" alt="logo de marvel">
        <h1 class="header__title">
            <a href="/">
                SPA Marvel
            </a>
        </h1>
        <nav class="header__nav">
            <li class="header__li">
                <a class="header__nav--a" href="#/about/">
                    About
                </a>
            </li>
        </nav>
    `
    return view
}

export default Header