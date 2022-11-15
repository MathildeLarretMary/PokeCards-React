import "./Errors.scss";
import Button from "../Button/Button";

export default function NotFound({handleCloseError}) {

    return (
        <div className='backgroundError'>
            <div className="div notFound">
                <div className="notFound-img"></div>
                <p>Oups!<br/>Il semble que ce Pokémon ne figure pas dans la base de données... <br/>
                Merci de rééssayer avec un nom valide, ou alors...<br/>
                Félicitations !<br/>Vous venez de créer un nouveau Pokémon !</p> 
                <Button
                className="btn"
                value="Compris !"
                actionClick={handleCloseError}
                />
            </div>
            
        </div>
    )
}