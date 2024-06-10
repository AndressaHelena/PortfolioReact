import './style.css'

export default function Header() {
    return (
        <header>
            <div className="header flex light-bg">
                <div>                
                    <button className="transparente">Avanade Brasil</button>
                    <h1 className="white">Jr Analyst</h1>
                    <h3 className="gray">Power Platform</h3>
                    
                </div>
                <div>
                    <img src="/image/devgirl.png" alt="" />
                    <a className="email white" href="mailto:andressa.h.moreira@avanade.com">Vamos conversar!</a>
                </div>
                
            </div>
        </header>
    )
}