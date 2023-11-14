import React from 'react';

const WorkItems = ({item}) => {
    return (
        <div className='work_card' key={item.id}>
            <img src={item.img} alt="" />
        </div>
    )
}

export default WorkItems;