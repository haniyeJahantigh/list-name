import React from 'react';
// import PropTypes from 'prop-types'
import './Name.css';
import PEOPLE from "../data";


const Name = ({data,add}) => {
    
    const className = data.sex === 'girl'? 'person girl' : 'person boy'
    const handleFavorit=(e)=>{
        console.log(e.target.id);
        PEOPLE[e.target.id].favorite=true;
        add();
        
    }

    

    return (
        <div className={className} onClick={handleFavorit} id={data.id} >
            {data.name}
        </div>
    )
}


export default Name
