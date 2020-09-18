import React from 'react';

import './styles.css';
import NavBar from './NavBar';
import Header from './Header';
import Portfolio from './Portfolio';
import About from './About';
import Contact from './Contact';
import Footer from './Footer';
import CopyRight from './CopyRight';

const App = () =>
{
    return(
        <div>
            <NavBar></NavBar>
            <Header></Header>
            <Portfolio></Portfolio>
            <About></About>
            <Contact></Contact>
            <Footer></Footer>
            <CopyRight></CopyRight>
        </div>
    );
}

export default App;