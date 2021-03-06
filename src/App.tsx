import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar, { HeaderLink } from './components/Navbar';
import { BrowserRouter, HashRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Routing, { AppRoute } from './components/Routing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Panzerdogs from './components/Panzerdogs';
import GoodJob from './components/GoodJob';
import Stormbound from './components/Stormbound';

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
  { path: "/projects/stormbound", label: "Stormbound", element: <Stormbound /> }
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
