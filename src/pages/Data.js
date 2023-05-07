import { useEffect, useState } from "react";
import Card from "../component/Card";
import "../App.css"

const Data = ( {id} ) => {
  const [items, setItems] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [userSearch, setUserSearch] = useState('');
  const [role, setRole] = useState('');
  
  useEffect(() => {
    fetch(`https://api.jikan.moe/v4/anime/${id}/characters`)
    .then((res) => res.json())
    .then((json) => {
        setItems(json.data);
        setIsLoading(false);
    })
    .catch((error) => {
      console.log(error);
    })
  }, [id]);

  const handleSearch = (e) => {
    setUserSearch(e.target.value.toLowerCase());
  }

  const handleRole = (e) => {
    setRole(e.target.value);
  };
  
  const filtered = items.filter(items => items.role.includes(role) && items.character.name.toLowerCase().includes(userSearch));
  
  return (
    <div className="App">
      <div className="filterContainer">
        <div>
          Search: <input type="text" placeholder="Search..." value={userSearch} onChange={handleSearch}/>
        </div>
        
        <div className="buttons">
          Role: <button value='' onClick={handleRole}>None</button>
          <button value='Main' onClick={handleRole}> Main</button>
          <button value='Supporting' onClick={handleRole}>Supporting</button>
        </div>
      </div>
      {isLoading ? (
        <h1> Please chill, data is still loading </h1>
      ) : (

        <div className="container">
          {filtered.map(( {character, favorites, role} ) => (
            <Card character={character} favorites={favorites} role={role}/>
          ))}
        </div>
      )}
    </div>
  );
};

export default Data;