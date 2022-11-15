import NavBar from "../NavBar/NavBar";
import './Header.scss';

export default function Header ({ 
    listTypes, 
    listGen, 
    handleChangeGen, 
    handleChangeType, 
    handleCheckSubmitTypes, 
    handleCheckSubmitGen, 
    handleChangeSearch,
    handleSubmitSearch, 
    searchData, 
    valueSearch,
    }) {
    return (
        <header className="Header">
            <h1 className="title">PokéCards</h1>
            <NavBar 
            handleChangeSearch={handleChangeSearch}
            handleSubmitSearch={handleSubmitSearch}
            searchData={searchData}
            valueSearch={valueSearch}

            listTypes={listTypes}
            listGen={listGen}
            handleChangeGen={handleChangeGen}
            handleChangeType={handleChangeType}
            handleCheckSubmitTypes={handleCheckSubmitTypes}
            handleCheckSubmitGen={handleCheckSubmitGen}
            />
        </header>
        
    )
}