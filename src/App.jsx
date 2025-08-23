import React from 'react'
import { Route, Routes } from "react-router";
import { CardPage } from './CardPage';
import { CardsPage } from './CardsPage';
import { ChooseCardPage } from './ChooseCardPage';
import { Menubar } from 'primereact/menubar';
import { useMenuItems } from './useMenuItems';

function App() {
  const menuItems = useMenuItems();
  
  return (
    <>
      <Menubar start={<h2 style={{padding: 0, margin: '0 1rem 0'}}>Photo Cards</h2>} model={menuItems} />
    
      <Routes>
        <Route path="chooseCard" element={<ChooseCardPage/>} />
        <Route path="card/:cardId" element={<CardPage/>} />
        <Route path="cards" element={<CardsPage/>} />
        <Route path="cards/:cardId" element={<CardsPage/>} />
        <Route path="*" element={<CardsPage/>} />
      </Routes>

    </>
  )
}

export default App
