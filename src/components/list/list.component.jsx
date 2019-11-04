import React from 'react';
import './list.style.scss';
import { MdAdd } from "react-icons/md";
import Card from '../card/card.component';

const List = () => {

    return (
        <div className="list-component">
            <div className="header">
                <h2>Tarefas</h2>
                <button type="button">
                    <MdAdd size={24} color="#fff"/>
                </button>
            </div>
            <ul>
                <Card/>
                <Card/>
                <Card/>
                <Card/>
            </ul>
        </div>
    )
};

export default List;

