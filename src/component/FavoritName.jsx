import React ,{useState,useEffect} from 'react';
import Name from './Name';
import './FavoritName.css'

const FavoritName = ({datas}) => {
    const [change,setChange]=useState(0)
    const [showFavorit, setShowFavorit] = useState(false);
    const addPerson=()=>{
        setChange(change+1)
        setShowFavorit(true)
        console.log("show fav!");
    }
    const filterDatas = datas.filter(person => person.favorite===true);
    // console.log(filterDatas);
    const showNames = filterDatas.map(person => <Name data={person} add={addPerson}/>)
    
    useEffect(() => {
        console.log("hi");
     }, [change])

    return (
        <div  className={showFavorit? "show favoriteContainer": "no-show favoriteContainer"} >
            <p className="titr ">your Favorits</p>
            {showNames}
            
        </div>
    )
}

export default FavoritName
