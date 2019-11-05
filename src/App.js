import React from 'react';
import { DndProvider } from "react-dnd";
import HTML5Backend from "react-dnd-html5-backend";
import './styles/main.styles.scss';
import Header from './components/header/header.component'
import Board from './components/board/board.component';

function App() {


  return (
    <DndProvider backend={HTML5Backend}>
        <Header/>
        <Board/>
    </DndProvider>
  );
}

export default App;
