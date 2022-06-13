import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar, { HeaderLink } from './components/Navbar';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Routing, { AppRoute } from './components/Routing';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';

const routes: Array<HeaderLink & AppRoute> = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/#about", label: "About", element: <Home /> },
  { path: "/#skills", label: "Skills", element: <Home /> },
  { path: "/#projects", label: "Projects", element: <Home /> },
  { path: "/#contact", label: "Contact", element: <Home /> }
]

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar links={routes} />
        <Routing routes={routes} />
        <Routes>

        </Routes>
        <Home />
        <About />
        <Skills />
        <Projects />
        <Contact />

      </BrowserRouter >
    </div >
  );
}

export default App;
