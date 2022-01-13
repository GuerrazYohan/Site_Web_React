import React from 'react';

import { Footer, Projets, Features, Competence, Header } from './containers';
import { CV, Brand, Navbar } from './components';


const App = () => {
    return (
        <div className="App">
            <div className="gradient__bg">
                <Navbar />
                <Header />
            </div>
            <Brand />
            <Competence />
            <Features />
            <CV />
            <Projets />
            <Footer />
        </div>
    );
};

export default App;