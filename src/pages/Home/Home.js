// SCSS
import './Home.scss';
// HOOKS
import { useEffect, useState } from "react";
// COMPONENTS
import Article from "../../components/Article/Article";
import Header from "../../components/Header/Header";
import Button from '../../components/Button/Button';
import UniqueCard from '../../components/UniqueCard/UniqueCard';
import NotFound from '../../components/Errors/NotFound';
import ScriptInjection from '../../components/Errors/ScriptInjection';
import Charging from '../../components/Charging/Charging';
// FUNCTIONS
import { types, Gen } from "../../datas/searchLists";
import { ScrollToTop } from '../../Functions/ScrollTo';
import { isInArray, checkToSubmit } from "../../Functions/isInArray";
import { handleChangeType, handleChangeGen, tableType, tableGen } from "../../Functions/handleChangeCheckboxes";
import { fecthByGen, fecthByType, fetchByName, fetchPokemons, fetchPokemonsNames, fetchById } from "../../request/fetchBy";



export default function Home() {

    //################################--- STATES ---#######################################

    //State of Pokémons-------------------------------------------------------------------
    const [data, setData] = useState([])
    //State of Unique Pokémon
    const [unique, setUnique] = useState([])
    const [openUnique, setOpenUnique] = useState(false);

    //State of Errors --------------------------------------------------------------------
    const [injection, setInjection] = useState(false);
    const [notFound, setNotFound] = useState(false)

    //State of Loading page (coming soon)
    const [isLoading, setIsLoading] = useState(true)

    //States of searchBar----------------------------------------------------------------
    // to get all names of pokémons to compare
    const [allNames, setAllNames] = useState([])
    // to take the list of searched pokémons
    const [names, setNames] = useState([])
    // input search state
    const [search, setSearch] = useState('')
    //to take an id when we click on li
    const [id, setId] = useState([])
    // to show names of searching
    const [showSuggests, setShowSuggests] = useState(false);

    //################################--- COMPORTEMENT ---#######################################
    
    useEffect(() => {
        setTimeout(() => {
            return setIsLoading(false);
         }, 2000);

        fetchPokemons(setData);
        fetchPokemonsNames(setNames);
        fetchPokemonsNames(setAllNames);
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [unique])


    // HANDLE CHANGE--------------------------------------------------------
    const handleChangeSearch = (e) => {
        setSearch(e.target.value)
        setShowSuggests(true)
        setNames(isInArray(e.target.value, allNames, setShowSuggests, setNames));
    }

    // HANDLE SUBMITS--------------------------------------------------------
    const handleCheckSubmitGen = (e) => {
        e.preventDefault();
        fecthByGen(tableGen, setData);
        ScrollToTop();
        setIsLoading(true);
        setTimeout(() => {
            ScrollToTop();
            return setIsLoading(false);
         }, 2000);
    }

    const handleCheckSubmitTypes = (e) => {
        e.preventDefault();        
        fecthByType(tableType, setData);
        ScrollToTop();
        setIsLoading(true);
        setTimeout(() => {
            ScrollToTop();
            return setIsLoading(false);
         }, 2000);
    }

    const handleSubmitSearch = (e) => {
        e.preventDefault()
        fetchPokemons(setData);

        if(id.length === 0) {
            const isChecked = checkToSubmit(search, allNames, setSearch, setShowSuggests, setNotFound, setInjection);
            if(isChecked) {
                fetchByName(search, setUnique)
                setOpenUnique(true); 
                console.log(isChecked);
            }
           
        } else if(typeof id === 'number') {
          fetchById(id, setUnique, setId)
          setOpenUnique(true);
          setSearch('');
        } else {
            console.log('no search');
        }
        ScrollToTop();
    }

    // Click to go to the Card of a specific pokemon
    const handleClickScroll = (id) => {
        let element = document.getElementById(`pokemon${id}`);
        if (element) {
            element.scrollIntoView({behavior:"smooth", block: "center", inline:"nearest"});
            console.log(element);
        }
      };


    //################################--- RENDER ---#######################################
    
    return(
        <div>
            {isLoading && <Charging/>}
            {injection && <ScriptInjection handleCloseError={() => setInjection(!injection)}/>}
            {notFound && <NotFound handleCloseError={() => setNotFound(!notFound)}/>}
            {openUnique && unique.length !== 0 ? <UniqueCard pokemon={unique} 
            handleCloseUnique={() => {
                setOpenUnique(false);
                setUnique([]);
                }}
            handleGoToCard={() => {
                handleClickScroll(unique.id);
                setOpenUnique(false);
                setUnique([]);
            }}
                /> : null}
            {data.length < allNames.length && 
            <Button
            className="reset"
            value=''
            actionClick={() => {
                fetchPokemons(setData);
                ScrollToTop();
                setIsLoading(true);
                setTimeout(() => {
                    return setIsLoading(false);
                }, 2000);
            }}
            />}
            <Header
            handleChangeSearch={handleChangeSearch} 
            handleSubmitSearch={handleSubmitSearch}
            searchData={names}
            valueSearch={search}

            listTypes={types}
            listGen={Gen}

            handleChangeType={handleChangeType}
            handleChangeGen={handleChangeGen}
            handleCheckSubmitGen={handleCheckSubmitGen}
            handleCheckSubmitTypes={handleCheckSubmitTypes}
            />
            {showSuggests ? <>
            <Button className="show-suggests-false" value="X" 
                actionClick={()=> {
                    setShowSuggests(false);
                }
                }/>
            <ul className='dropdown'>{
            names?.map(element => {
                return (
                    <li key={element.id} className='dropdown-row' 
                    value={element.id} 
                    onClick={() => {
                        setSearch(element.name);
                        setShowSuggests(false);
                        setId(element.id);
                    }}>
                           {element.name}
                    </li>
                )
            })
        }
        </ul></> : null}
            <Article data={data}/>   
        </div>
    )
}