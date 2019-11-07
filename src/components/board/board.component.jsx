import React, { useState } from 'react';
import { loadLists } from "../../services/api";

import BoardContext from './context';

import './board.style.scss';
import List from '../list/list.component';

const data = loadLists();

const Board = () => {
    const [lists, setLists] = useState(data);

    function move(fromList, from, to) {
        setLists(...lists, )

    }

    return (
        <BoardContext.Provider value={{lists, move}}>
            <div className="board-component">
                {
                    lists.map((list, index) => <List key={list.title} index={index} data={list} />)
                }
            </div>
        </BoardContext.Provider>
    )
};

export default Board;

