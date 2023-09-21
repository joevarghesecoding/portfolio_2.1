import './App.css';
import Header from './components/Header.js';
import Image from './components/Image.js';
import Tile from './components/Tile.js';
import FacePic from './components/shared/face-pic.png'
import Mirror from './components/Mirror/Mirror.js';

const aboutMeTitle = "About Me";
const aboutMePara = "Hi, I'm Joe, a Software Engineer.\n Ever since I was little, I was in love with computers. But only after growing up did I learn the amazing things they are capable of.\n I am learning day by day what their limits are and in effect broadening my own.\n I want to express my ideas and creativity through code, if you believe that I can be a part of your project, shoot me an email."

const projectsTitle = "Projects";
const contactTitle = "Contact";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header></Header>
      </header>
      <div>
        <Image></Image>
      </div>
      <div className="content">
        <div className="column">
          <Mirror></Mirror>
        </div>
        <div className="column">
          <div className="tile"><Tile className="about-me" h1={aboutMeTitle} text={aboutMePara} src={FacePic}></Tile></div>
          <div className="tile"><Tile className="projects" h1={projectsTitle} ></Tile></div>
          <div className="tile"><Tile className="contact" h1={contactTitle}></Tile></div>
        </div>
      </div>
      <footer>
        
      </footer>
    </div>
  );
}

export default App;
