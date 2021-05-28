import PropTypes from 'prop-types'
import React from 'react'
import Name from './Name'
import './NamesList.css'


const NamesList = ({datas, search}) => {
    const filterDatas = datas.filter(person => person.name.toLocaleLowerCase().startsWith(search))
    const showNames = filterDatas.map(person => <Name data={person}/>)
    
    
    return (
        <div className='namesListContainer' >
            {showNames}
        </div>
    )
}

NamesList.propTypes = {
    datas: PropTypes.array,
    search: PropTypes.string
}

export default NamesList
