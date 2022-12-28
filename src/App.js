import React from 'react';
import Navbar from './components/Navbar'
import Content from './components/Content'
import Content3 from './components/Content3'
import Footer from './components/Footer'
import Contact from './components/Contact'


function App() {
  return (
    <div className="App">
      <Navbar />
      <Content />
      <Content3 />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
