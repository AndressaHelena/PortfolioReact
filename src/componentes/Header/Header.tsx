import './style.css'

export default function Header() {
    return (
        <header>
            <div className="header flex light-bg">
                <div>                
                    <button className="transparente">Avanade Brasil</button>
                    <h1 className="white">Assoc, Full-Stack Dev</h1>
                    <h3 className="gray">Software Engineering TC</h3>
                    <a className="green" href="mailto:andressa.h.moreira@avanade.com">Vamos conversar!</a>
                </div>
                <div>
                    <img src="/src/assets/image/dev.png" alt="" />
                </div>
                
            </div>
        </header>
    )
}