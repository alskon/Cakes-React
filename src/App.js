import React from 'react';
import './App.css';
import Layout from './Hoc/Layout/Layout'
import Header from './Components/Header/Header';
import Main from './Components/Main/Main';
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <Layout> 
      <Header/>
      <Main/>
      <Footer/>
  </Layout>
  );
}

export default App;
