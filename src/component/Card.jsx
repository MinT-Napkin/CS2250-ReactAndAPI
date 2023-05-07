/* Components are independent and reusable bits of code. 
They serve the same purpose as JavaScript functions, 
but work in isolation and return HTML */
const Card = ({
    character,
    favorites,
    role
}) => {

    return (
        <div className="card" key={character.mal_id}>
            <div>
            Name: {character.name}
            <br/>
            Role: {role}
            <br/> 
            Favorites: {favorites}
            <br/> 
            <img className="characterImg" src={character.images.webp.image_url} alt={character.name} />
            </div>
        </div>
    );
};

export default Card;