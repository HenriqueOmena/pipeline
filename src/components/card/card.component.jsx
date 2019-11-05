import React from 'react';
import './card.style.scss';
import { userDrag } from 'react-dnd';

const Card = ({data}) => {

    return (
        <div className="card-component">
            <div className="header">
                {
                    data.labels.map(
                        label => <div className="label-header" style={{backgroundColor: label}} />
                    )
                }

            </div>
            <p> { data.content }</p>
            { data.user
                ? <img src={data.user} alt="" />
                : <img src="https://api.adorable.io/avatars/115/abott@adorable.io.png" alt=""             />
            }

        </div>
    )
};

export default Card;

