import './App.css';
import Navbar, { HeaderLink } from './components/Navbar';
import { HashRouter } from 'react-router-dom';
import Home from './components/Home';
import Routing, { AppRoute } from './components/Routing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Panzerdogs from './components/Panzerdogs';
import GoodJob from './components/GoodJob';
import Stormbound from './components/Stormbound';
import Voggel from './components/Voggel';

function MainContent() {
  return <>
    <Home />
    <About />
    <Skills />
    <Projects />
    <Contact />
  </>;
}

const routes: Array<HeaderLink & AppRoute> = [
  { path: "/", label: "Home", element: <MainContent /> },
  { path: "#about", label: "About", element: <MainContent /> },
  { path: "#skills", label: "Skills", element: <MainContent /> },
  { path: "#projects", label: "Projects", element: <MainContent /> },
  { path: "#contact", label: "Contact", element: <MainContent /> },
  { path: "/projects/panzerdogs", label: "Panzerdogs", element: <Panzerdogs /> },
  { path: "/projects/goodjob", label: "Good Job!", element: <GoodJob /> },
  { path: "/projects/stormbound", label: "Stormbound", element: <Stormbound /> },
  { path: "/projects/voggel", label: "Voggel", element: <Voggel /> }
]

function App() {
  return (
    <div className="App">
      <HashRouter>
        <Navbar links={routes} />
        <Routing routes={routes} />

      </HashRouter >
    </div >
  );
}

export default App;
