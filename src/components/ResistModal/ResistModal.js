// import './ResistModal.scss';
import Button from '../Button/Button';
import { useState } from 'react';

export default function ResistModal({data}) {
    //state
    const [isOpen, setIsOpen] = useState(false)

    // comportement
    const handleOpenClick = () => {
        setIsOpen(!isOpen)
    }
    // render
    return (
        <div className='ResistModal'>
        {!isOpen && <Button value="Résist." actionClick={handleOpenClick} className ='btn-resist'/>}
        {isOpen && 
            <div className='ResistModal-card'>
            {data?.map(((element) => {
                return (
                    <div key={element.name + "resist"}><span>{element.name} :</span><span className={element.damage_relation}>x{element.damage_multiplier}</span></div>
                )
            }))}
            <Button value="X" actionClick={handleOpenClick} className ='btn-close-modal'/>
            </div>}
        </div>
    )
}