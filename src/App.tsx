import React from 'react';
import Header from './Header';
import Home from "./Home";
import About from "./About";
import Firefly from "./Firefly";
import Projects from "./Projects";
import VerticalCircles from "./components/VerticalCircles";
import Skills from "./Skills";
import Contact from "./Contact";
import Experiences from "./Experiences";
import'./i18n.js';
import LanguageSelector from "./components/LanguageSelector";

const App: React.FC = () => {
    return (
        <div className="flex flex-col min-h-screen">
            <Header/>
            <main className="flex-row p-8">
                <Home/>
                <VerticalCircles/>
                <About/>
                <VerticalCircles/>
                <Projects/>
                <VerticalCircles/>
                <Skills/>
                <VerticalCircles/>
                <Experiences/>
                <VerticalCircles/>
                <Contact/>
            </main>
            <LanguageSelector />
            <Firefly/>
        </div>
    );
};

export default App;
