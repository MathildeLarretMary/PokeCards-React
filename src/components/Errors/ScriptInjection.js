import "./Errors.scss";
import Button from "../Button/Button";

export default function ScriptInjection({handleCloseError}) {

    return (
        <div className='backgroundError'>
            <div className="div injection"> 
            <div className="scriptInjection-img"></div>
                <p>Il semblerait que vous ayez tenter de rentrer certains caractères spéciaux...<br/>
                Essayez avec le Nom d'un Pokémon     
                </p> 
                <Button
                className="btn"
                value="Compris !"
                actionClick={handleCloseError}
                />
            </div>
            
        </div>
    )
}