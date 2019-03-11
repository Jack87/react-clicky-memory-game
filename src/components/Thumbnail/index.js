import React from "react";

const Thumbnail = props => (
    <div className="text-center col-3" id="game">
        <img 
            className={props.class}
            // key={props.key}
            id={props.id}
            onClick={() => props.handleItemClick(props.id)}
            src={props.image} 
            alt={props.name}              
        />
    </div>
);

export default Thumbnail;