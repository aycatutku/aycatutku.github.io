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
            <Firefly/>
        </div>
    );
};

export default App;
