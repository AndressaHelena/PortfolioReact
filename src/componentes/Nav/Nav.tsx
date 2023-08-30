import './style.css'

export default function Nav() {

    return (
        <nav className="flex dark-bg justify-space">
            <div className="logo pink">
                <p>Andressa Helena</p>
            </div>

            <ul className="flex white">
                <li >
                    <a href="/">{" Home "}</a>
                </li>
               
                <li>
                    <a href="/#about">Sobre mim</a>
                </li>

                <li>
                    <a href="/#projetos">Projetos</a>
                </li>

                <li>
                    <a href="/#footer">Contato</a>
                </li>
            </ul>
        </nav>
    )
}