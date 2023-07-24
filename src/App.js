import './App.css';

import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Main from './components/Main/Main';
import SelectedBeast from './components/SelectedBeast/SelectedBeast';

import { useState } from 'react';
import data from "./data.json";

function App() {
  const [modal, setModal] = useState(false);
  const [modalContent, setModalContent] = useState({})

  function handleModal(beast){
    setModal(!modal);
    setModalContent(beast);
  }

  function closeModal(){
    setModal(!modal);
    setModalContent({});
  }

  return (
    <div className="App">
      <Header/>
      <Main data={data} handleModal={handleModal} />
      {modal && <SelectedBeast modalContent={modalContent} closeModal={closeModal} />}
      <Footer/>
    </div>
  );
}

export default App;
