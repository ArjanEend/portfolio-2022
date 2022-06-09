import React from 'react';
import logo from './logo.svg';
import './App.css';
import Navbar, { HeaderLink } from './components/Navbar';
import { BrowserRouter, Routes } from 'react-router-dom';
import Home from './components/Home';
import Routing, { AppRoute } from './components/Routing';
import About from './components/About';
import Skills from './components/Skills';

const routes: Array<HeaderLink & AppRoute> = [
  { path: "/", label: "Home", element: <Home /> },
  { path: "/", label: "About", element: <About /> },
  { path: "/", label: "Home", element: <Home /> },
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

      </BrowserRouter >
    </div >
  );
}

export default App;
