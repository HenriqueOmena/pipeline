import React, { useRef } from 'react';
import './card.style.scss';
import { useDrop, useDrag } from 'react-dnd';

const Card = ({data}) => {
    const ref = useRef()

    const [{ isDragging }, dragRef] = useDrag({
        item: { type: 'CARD', id: data.id},
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            console.log(item.id);
            console.log(data.id);
        }
    })


    const styleOnDragging = isDragging ? {
        border: '2px dashed rgba(0, 0, 0, 0.2)',
        paddingTop: '31px',
        borderRadius: 0,
        backgroundColor: 'transparent',
        boxShadow: 'none',
        cursor: 'grabbing',
    } : {}

    const opacityZero = isDragging ? { opacity: 0 } : { opacity: 1 }

    dragRef(dropRef(ref));
    return (
        <div className="card-component" ref={ref} style={styleOnDragging} >
            <div className="wrap-content" style={opacityZero} >
                <div className="header">
                    {
                        data.labels.map(
                            label => <div className="label-header" key={label} style={{backgroundColor: label}} />
                        )
                    }

                </div>
                <p> { data.content }</p>
                { data.user
                    ? <img src={data.user} alt="" />
                    : <img src="https://api.adorable.io/avatars/115/abott@adorable.io.png" alt=""             />
                }
            </div>
        </div>
    )
};

export default Card;

