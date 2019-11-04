import React from 'react';
import './board.style.scss';
import List from '../list/list.component';

const Board = () => (
    <div className="board-component">
        <List/>
        <List/>
        <List/>
        <List/>
    </div>
);

export default Board;

