import { Link } from 'react-router-dom'
import perfil from '../Img/Pedro.JPG';
import jogo from '../Img/jogo.png';
import rick from '../Img/Rick.jpg';
import pokedex from '../Img/Pokedex.jpg';
import git from '../Img/github-line.svg';
import lk from '../Img/linkedin-fill.svg';

export default function About() {
  return(
    <main className="app__about">
      <section section className="app__about__container">
       <img className="app__about__img" src={perfil} alt="Perfil" />
      
        <h3>
           Pedro Henrique Sena Dos Santos
        </h3>

         <p>Tenho 26 anos, sou de Belo Horizonte, não faz muito tempo que me interessei em estudar e trabalhar com programação mas foi uma decisão bem solida e a cada dia fico mais encantado com área.</p>          

      </section>
      <h3>Projetos(React-Modulo 3)</h3>
      <section className="app__about__proj">

        <div className="app__about__proj__cards">
            <div className="app__about__proj__cards__card">
              <div className="app__about__proj__cards__card__foto">
              <img src={jogo}></img>
              </div>
              <a href="https://github.com/pedrosantoss-web/Jogo-da-velha.git" className="app__about__proj__cards__card__btn">Jogo da Velha</a>
            </div>
            

            <div className="app__about__proj__cards__card">
            <div className="app__about__proj__cards__card__foto">
              <img src={pokedex}></img>
              </div>
              <a href="https://github.com/pedrosantoss-web/Pokedex.git" className="app__about__proj__cards__card__btn">Pokedex</a>
            </div>
                 
            <div className="app__about__proj__cards__card">
            <div className="app__about__proj__cards__card__foto">
              <img src={rick}></img>
              </div>
              <a href="https://github.com/pedrosantoss-web/rick-and-morty.git" className="app__about__proj__cards__card__btn">Rick and Morty</a>
              
               
            </div>
          </div>
      </section>

        

        <Link className="app__about__link" to="/">Voltar</Link>

      
    <footer>
      <nav>
        <a href=""><img src={git}/></a>
        <a href=""><img src={lk}/></a>
      </nav>
    </footer>
    </main>
      
    
  )
}