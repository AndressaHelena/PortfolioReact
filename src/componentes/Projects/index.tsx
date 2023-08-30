import './style.css'

export default function Projects() {

    return (
        <section id="projetos" className="dark-bg about-text">
            <h3 className='green'>Alguns Projetos</h3>
            <div>
            <ul>
            <li className="flex">
                    <img className="img" src="/image/integral.jpg"/>
                    <div className="dados">
                        <h3 className="title">Agendamento</h3>
                        <h4 className="gray">Challenge full-Stack com Power Apps e SharePoint.</h4>
                        <a target="_blank" href="https://apps.powerapps.com/play/e/default-cf36141c-ddd7-45a7-b073-111f66d0b30c/a/0220ba4a-1b64-4e6f-b70c-af26e58964d7?tenantId=cf36141c-ddd7-45a7-b073-111f66d0b30c&hint=bf024e83-c3cf-4311-b2a8-6416c60b076c&sourcetime=2023-08-30%2014%3A17%3A08Z&source=portal"><button className="repo">Demo</button></a> 
                    </div>
                </li>
                <li className="flex">
                    <img className="img" src="/image/destino.jpg"/>
                    <div className="dados">
                        <h3 className="title">Revelar seu destino</h3>
                        <h4 className="gray">Maratona Rocktseat com HTML, CSS e JavaScript.</h4>
                            <a className="btns" target="_blank" href="https://github.com/AndressaHelena/Maratona-Explorer-Rocketseat"><button className="repo">Repositório</button></a>
                            <a className="btns" target="_blank" href="https://andressahelena.github.io/Maratona-Explorer-Rocketseat/"><button className="repo">Demo</button></a>  
                        </div>
                </li>
                <li className="flex">
                    <img className="img" src="/image/Nutri.png"/>
                    <div className="dados">
                        <h3 className="title">Nutricionista</h3>
                        <h4 className="gray">Challenge Alura com HTML, CSS e JavaScript.</h4>
                        <a className="btns" target="_blank" href="https://github.com/AndressaHelena/nutricionista"><button className="repo">Repositório</button></a>
                        <a className="btns" target="_blank" href="https://andressahelena.github.io/nutricionista/"><button className="repo">Demo</button></a>  
                    </div>
                </li>
                <li className="flex">
                    <img className="img" src="/image/frases.jpg"/>
                    <div className="dados">
                        <h3 className="title">Frases Biblicas</h3>
                        <h4 className="gray">Challenge Rocktseat com HTML, CSS e JavaScript.</h4>
                            <a className="btns" target="_blank" href="https://github.com/AndressaHelena/frases-biblia"><button className="repo">Repositório</button></a>
                            <a className="btns" target="_blank" href="https://andressahelena.github.io/frases-biblia/"><button className="repo">Demo</button></a>  
                        </div>
                </li>
                <li className="flex">
                    <img className="img" src="/image/deco.jpg"/>
                    <div className="dados">
                        <h3 className="title">Decodificador de texto</h3>
                        <h4 className="gray">Challenge Alura com HTML, CSS e JavaScript.</h4>
                        <a className="btns" target="_blank" href="https://github.com/AndressaHelena/Decodificador-de-Texto-Alura"><button className="repo">Repositório</button></a>
                            <a className="btns" target="_blank" href="https://andressahelena.github.io/Decodificador-de-Texto-Alura/"><button className="repo">Demo</button></a>
                    </div>
                </li>
                <li className="flex">
                    <img className="img" src="/image/financeiro.png"/>
                    <div className="dados">
                        <h3 className="title">Sistema Financeiro</h3>
                        <h4 className="gray">Challenge B7web com React, Typescrip e styled Components. </h4>
                        <p className="gray">Em andamento</p>
                        <a className="btns" target="_blank" href="https://github.com/AndressaHelena/sistema-financeiro"><button className="repo">Repositório</button></a>
                        <a className="btns" target="_blank" href="https://sistema-financeiro-k34gp2zt4-andressahelena.vercel.app/"><button className="repo">Demo</button></a>
                    </div>
                </li>
                <li className="flex">
                    <img className="img" src="/image/agenda.png"/>
                    <div className="dados">
                        <h3 className="title">Agendamento Médico</h3>
                        <h4 className="gray">Challenge Avanade em grupo com Angular, C# e SQL server.</h4>
                        <a target="_blank" href="https://github.com/AndressaHelena/Agendamento"><button className="repo">Repositório</button></a> 
                    </div>
                </li>
            </ul>
            </div>
        </section>
        
    )
}