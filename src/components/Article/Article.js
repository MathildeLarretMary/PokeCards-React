/* eslint-disable no-unused-vars */
import './Article.scss';
import Section from '../Section/Section';
import { totalStats } from '../../Functions/totalStats';
import { calcWidth } from '../../Functions/calcStatsWidth';
// import { useEffect, useState } from 'react';
// import { newSearch, newResult } from '../../request/Request';

export default function Article({data}) {


    //render
    return(
        <article className='Cards'>
            <div className='cards-section'>
            
                {data?.map((element)=> {
                    return <Section
                        className={'Card'}
                        key={element.id}
                        url={`pokemon${element.id}`}
                        title={element.name}
                        image={element.sprite}
                        valueClassName={'types'}
                        spanValue={element.apiGeneration}

                        // POKEMON STATS 
                        HP={element.stats.HP}
                        Att={element.stats.attack}
                        Def={element.stats.defense}
                        AttSpé={element.stats.special_attack}
                        DefSpé={element.stats.special_defense}
                        Vit={element.stats.speed}

                        //POKEMON STYLES calcul percent by value to set width
                        stylePv={{width: calcWidth(element.stats.HP) + '%'}}
                        styleAtt={{width: calcWidth(element.stats.attack) + '%'}}
                        styleDef={{width: calcWidth(element.stats.defense) + '%'}}
                        styleAttSpé={{width: calcWidth(element.stats.special_attack) + '%'}}
                        styleDefSpé={{width: calcWidth(element.stats.special_defense) + '%'}}
                        styleVit={{width: calcWidth(element.stats.speed) + '%'}}

                        Total={totalStats(element.stats.HP, element.stats.attack, element.stats.defense, element.stats.special_attack, element.stats.special_defense, element.stats.speed)}
                        // eslint-disable-next-line array-callback-return
                        value={element.apiTypes.map((type) => {
                            return <span className={`type ${type.name}`} key={type.name}>{type.name}</span>;
                        })} 
                        resistData={element.apiResistances}
                        />   
                        }) 
                }
            </div>
            
        </article>
    )
}
