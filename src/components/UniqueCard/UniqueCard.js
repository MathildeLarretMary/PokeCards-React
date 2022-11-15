import './UniqueCard.scss';
import Button from '../../components/Button/Button';

export default function UniqueCard({pokemon, handleCloseUnique, handleGoToCard}) {

    //################################--- STATES ---#######################################
    
    
    //################################--- COMPORTEMENT ---#######################################
    
    
    //################################--- RENDER ---#######################################
     return (
        <div className='UniqueCard-background'>
            <div className='UniqueCard'>
                <Button
                value="X"
                className="close-UniqueCard"
                actionClick={handleCloseUnique}
                />
                <h1>{pokemon.name}</h1>
                <img src={pokemon.image} alt={pokemon.name}/>
                <ul>
                   {pokemon.apiTypes.map((type) => {
                        return <li key={type.name} className='typeClass'><img src={type.image} alt={type.name}/></li>
                    })} 
                </ul>
                <Button
                value="Carte"
                className="goToCard"
                actionClick={handleGoToCard}
                />
            </div>
        </div>
     )
}