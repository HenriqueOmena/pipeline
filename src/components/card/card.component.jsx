import React, { useRef, useContext } from 'react';
import './card.style.scss';
import { useDrop, useDrag } from 'react-dnd';
import BoardContext from '../board/context';

import {  } from "module";

const Card = ({data, index, listIndex}) => {
    const ref = useRef()
    const { move } = useContext(BoardContext)
    const [{ isDragging }, dragRef] = useDrag({
        item: {
            type: 'CARD',
            index,
            listIndex,
            content: data.content,
            id: data.id
        },
        collect: monitor => ({
            isDragging: monitor.isDragging(),
        }),
    });

    const [, dropRef] = useDrop({
        accept: 'CARD',
        hover(item, monitor) {
            const draggedListIndex = item.listIndex;
            // const targetListIndex = listIndex;

            const draggedIndex = item.index;
            const targetIndex = index;

            if (draggedIndex === targetIndex) {
                return
            }

            const targetSize = ref.current.getBoundingClientRect();
            const targetCenter = (targetSize.bottom - targetSize.top) / 2;

            const draggedOffset = monitor.getClientOffset();
            const draggedTop = draggedOffset.y - targetSize.top;

            if (draggedIndex - targetIndex && draggedTop < targetCenter) {
                return
            }

            if (draggedIndex > targetIndex && draggedTop > targetCenter) {
                return
            }

            move(draggedListIndex, draggedIndex, targetIndex);
            console.log('object')
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
                    : <img src="https://api.adorable.io/avatars/115/abott@adorable.io.png" alt=""/>
                }
            </div>
        </div>
    )
};

export default Card;

