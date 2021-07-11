import React from 'react';

function Food({name, picture}) {
    return (
        <div>
            <h2>I like {name}</h2>
            <img src={picture} alt={name}/>
        </div>
    );
}

export default Food;