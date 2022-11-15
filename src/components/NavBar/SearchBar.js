import PropTypes from 'prop-types';
import Button from '../Button/Button';

// import { handleChangeSearch } from '../../Functions/handleChangeCheckboxes';

export default function SearchBar({ 
    SearchBarName, 
    placeholder, 
    handleSubmitSearch, 
    handleChangeSearch, 
    valueSearch, 
}) {
    //state

    // comportement

    // render
    return(
            <form method='post' className='search-bar'>
                <label>{SearchBarName}</label>
                <input type="text" 
                placeholder={placeholder} 
                className='input-search'
                onChange={handleChangeSearch} 
                value={valueSearch}
                />
                <Button type="submit" actionClick={handleSubmitSearch} className="search-valid" value="OK"/>
            </form> 
    )
}

SearchBar.propTypes = {
    SearchBarName: PropTypes.string,
    placeholder: PropTypes.string
}

SearchBar.defaultProps = {
    SearchBarName: "Default SearchBar Name : ",
    placeholder: "default placeholder"
}