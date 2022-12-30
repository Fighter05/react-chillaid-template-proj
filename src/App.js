import React from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Content2 from './components/Content2'
import Content3 from './components/Content3'
import Content4 from './components/Content4'
import Content5 from './components/Content5'
import Content6 from './components/Content6'
import Content7 from './components/Content7'
import Footer from './components/Footer'
import Contact from './components/Contact'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


function App() {
  return (
    <Router>
      <Navbar />
      <Content />
      <Content2 />
      <Content3 />
      <Content4 />
      <Content5 />
      <Content6 />
      <Content7 />
      <Contact />
      <Footer />
    </Router>
  );
}

export default App;
