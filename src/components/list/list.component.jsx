import React from 'react';
import './list.style.scss';
import { MdAdd } from "react-icons/md";
import Card from '../card/card.component';

const List = ({data, index: listIndex}) => {

    let opacityDone = data.done && {opacity: 0.6}

    return (
        <div className="list-component" style={opacityDone}>
            <div className="header">
                <h2>{data.title}</h2>

                {data.creatable && (
                    <button type="button">
                        <MdAdd size={24} color="#fff"/>
                    </button>
                )}

            </div>
            <ul>
                {console.log(data.cards)}
                { data.cards.map( (card, index) => (

                    <Card
                        key={card.id}
                        listIndex={listIndex}
                        index={index}
                        data={card}
                    />
                )) }
            </ul>
        </div>
    )
};

export default List;

