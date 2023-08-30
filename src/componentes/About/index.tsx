import './style.css'
import { FaReact, FaNodeJs } from "react-icons/fa";
import { BiLogoHtml5, BiLogoCss3, BiLogoJavascript, BiLogoTypescript } from "react-icons/bi"
import { SiStyledcomponents } from "react-icons/si"


export default function About() {
    return (
        <section id="about" className="dark-bg">
            <div className="flex">
                <div className="flex-full">
                    <AboutCard
                        title="Power Apps"
                        description="Criação de aplicativos canvas com layout moderno, componentes e base de dados SharePoint."
                        projects={7} />

                    <AboutCard
                        title="Front-End"
                        description="Tecnologias utilizadas javascript, typescript, react, html, css e styled components."
                        projects={14} />
                    <AboutCard
                        title="Back-End"
                        description="Tecnologias utilizadas java, c# e node."
                        projects={3} />
                </div>
                
                <div className="flex-full about-text">
                    <h5 className="gray">Sobre mim</h5>
                    <h1 className="white">Olá, Eu sou a Andressa,</h1>
                    <h3 className="white">Realizei meu sonho de ser uma desenvolvedora na avanade por um bootcamp da DIO.</h3>
                    <p className="gray">Voltei estudar aos 36 anos, cursando o último semestre de Análise e desenvolvimento de Sistemas. Fiz transição de carreira e na avanade tenho a oportunidade de aprimorar meu conhecimento todos os dias. <br/><br/>
                    Sou naturalmente muito persistente, curiosa, determinada  e constantemente desafio minhas habilidades.</p>
                </div>
            </div>

   
            
            <div className="flex partners  justify-space gray ">
                <BiLogoHtml5 size={100} />
                <BiLogoCss3 size={100}/>
                <BiLogoJavascript size={100}/> 
                <BiLogoTypescript size={100}/>
                <FaNodeJs size={80}/>
                <FaReact size={80}/> 
                <SiStyledcomponents size={100}/>
            </div>
        </section>
    )
}

type Props = {
    title: string,
    description: string,
    projects: number
}

function AboutCard ({title,  description, projects} : Props) {
    return(
        <div className="light-bg about-card">
            <div className="flex justify-space">
                <h3 className="pink">{title}</h3>
            </div>
            <p className="white">{description}</p>
            <span className="gray"> <a  href="#projetos">{projects.toString()} projetos</a></span>
           
        </div>
    )
}