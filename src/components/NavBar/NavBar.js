import { useState } from 'react';
import CheckBoxes from './CheckBoxes';
import SearchBar from './SearchBar';
import './NavBar.scss';
import Button from '../Button/Button';

import { tableType, tableGen } from '../../Functions/handleChangeCheckboxes';

export default function NavBar({
    listTypes, 
    listGen, 
    handleChangeType, 
    handleChangeGen, 
    handleCheckSubmitTypes, 
    handleCheckSubmitGen, 
    handleChangeSearch, 
    handleSubmitSearch, 
    searchData, 
    valueSearch,
    onBlur, 
    onClick
 }) {
    //state
    const [open, setOpen] = useState(false)

    // comportement
    const handleOpenClick = () => {
        setOpen(!open)
        if(!open) {
            tableType.length = 0;
            tableGen.length = 0;
        }
    }


    // render
    return (
        <nav className='NavBar'>

            {!open && <>
                <SearchBar
                SearchBarName= ""
                placeholder="Pokémon"
                handleChangeSearch={handleChangeSearch}
                handleSubmitSearch={handleSubmitSearch}
                searchData={searchData}
                valueSearch={valueSearch}
                onBlur={onBlur}
                onClick={onClick}

                />
                <Button value="Autre" actionClick={handleOpenClick} className='btn-open'/>
                </>}
            {open && <>
                <SearchBar
                SearchBarName= ""
                placeholder="Pokémon"
                handleChangeSearch={handleChangeSearch}
                handleSubmitSearch={handleSubmitSearch}
                searchData={searchData}
                valueSearch={valueSearch}
                onBlur={onBlur}
                onClick={onClick}
                />
                <div className='search-open'>
                <CheckBoxes 
                    handleCheckSubmit={handleCheckSubmitTypes}
                    CheckBoxesName="Par Type : "
                    list={listTypes}
                    handleChange={handleChangeType}
                />
                <CheckBoxes 
                    handleCheckSubmit={handleCheckSubmitGen}
                    CheckBoxesName="Par Génération : "
                    list={listGen}
                    handleChange={handleChangeGen}
                />
                <Button value="X" actionClick={handleOpenClick} className ='btn-open-close close'/>
            </div>
            </>}

        </nav>
        
    )
}