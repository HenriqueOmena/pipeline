import React from 'react';
import './list.style.scss';
import { MdAdd } from "react-icons/md";
import Card from '../card/card.component';

const List = ({data}) => {

    let opacityDone = data.done && {opacity: 0.6}

    return (
        <div className="list-component" style={opacityDone}>
            <div className="header">
                <h2>{data.title}</h2>

                {data.creatable && ( //REVIEW: como ta sendo realizado este if aqui  que eh igual o ternario ?
                    <button type="button">
                        <MdAdd size={24} color="#fff"/>
                    </button>
                )}

            </div>
            <ul>
                { data.cards.map( (card, index) => <Card key={card.id} index={index} data={card} />)}
            </ul>
        </div>
    )
};

export default List;

