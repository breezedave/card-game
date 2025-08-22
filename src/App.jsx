import React from 'react'
import { Route, Routes } from "react-router";
import { CardPage } from './CardPage';
import { HomePage } from './HomePage';
import { CardsPage } from './CardsPage';
import { ChooseCardPage } from './ChooseCardPage';
import { Menubar } from 'primereact/menubar';
import { useMenuItems } from './useMenuItems';

function App() {
  const menuItems = useMenuItems();
  
  return (
    <>
      <Menubar model={menuItems} />
    
      <Routes>
        <Route path="home" element={<HomePage/>} />
        <Route path="chooseCard" element={<ChooseCardPage/>} />
        <Route path="card/:cardId" element={<CardPage/>} />
        <Route path="cards" element={<CardsPage/>} />
        <Route path="cards/:cardId" element={<CardsPage/>} />
      </Routes>

    </>
  )
}

export default App
