import React from 'react';
import { loadLists } from "../../services/api";
import './board.style.scss';
import List from '../list/list.component';

const lists = loadLists();

const Board = () => (
    <div className="board-component">
        {
            lists.map(list => <List key={list.title} data={list} />)
        }
    </div>
);

export default Board;

