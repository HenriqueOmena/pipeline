import React, { useState } from 'react';
import { loadLists } from "../../services/api";
import immer from 'immer';

import BoardContext from './context';

import './board.style.scss';
import List from '../list/list.component';

const data = loadLists();

const Board = () => {
    const [lists, setLists] = useState(data);

    function move(fromList,toList, from, to, ) {
        setLists(immer(lists, draft => {
            const dragged = draft[fromList].cards[from];

            draft[fromList].cards.splice(from, 1);
            draft[toList].cards.splice(to, 0, dragged)

            console.log('fromList',fromList, 'from', from, 'to', to, 'tolist', toList)
        }))

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

