import PropTypes from 'prop-types';
import { useState } from 'react';
import Button from '../Button/Button';

import { tableType, tableGen } from '../../Functions/handleChangeCheckboxes';

export default function CheckBoxes ({ CheckBoxesName, list, handleChange, handleCheckSubmit }) {
    //state
    const [open, setOpen] = useState(false)

    // comportement

    const handleShowClick = (e) => {
        e.preventDefault()
        setOpen(!open)
        if(!open) {
            tableType.length = 0;
            tableGen.length = 0;
        }
    }

    // render
    return (
        <form method='post' onSubmit={handleCheckSubmit}>
            <fieldset>
                {!open && <legend>{CheckBoxesName}<Button actionClick={handleShowClick} className="btn-open-close" value="⇓"/></legend>}
                {open && 
                <><legend>{CheckBoxesName}<Button actionClick={handleShowClick} className="btn-open-close" value="⇑" /></legend>
                <div className='checkboxes'>
                        {list?.map((element) => {
                            return (
                                <div className='checkbox' key={element + "checkbox"}>
                                    <input type="checkbox" id={element} name="checkbox" value={element} onChange={handleChange}/>
                                    <label htmlFor={element}> {element}</label>
                                </div>
                            );
                        })}
                        <Button type="submit" className="search-valid" value="OK" />
                    </div></>}
            </fieldset>
        </form>
    )
}

CheckBoxes.propTypes = {
    CheckBoxesName: PropTypes.string.isRequired,
}

CheckBoxes.defaultProps = {
    CheckBoxesName: "Default Checkbox Name : "
}