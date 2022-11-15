/* eslint-disable jsx-a11y/alt-text */
import './Section.scss';
import PropTypes from 'prop-types';
import ResistModal from '../ResistModal/ResistModal';

export default function Section({ 
    title, 
    value, 
    className, 
    image , 
    url, 
    valueClassName, 
    spanValue, 
    HP, 
    Att, 
    Def, 
    AttSpé, 
    DefSpé, 
    Vit, 
    Total, 
    styleAtt, 
    styleAttSpé, 
    styleDef, 
    styleDefSpé,
    stylePv, 
    styleVit,
    resistData
    }) 
    {
    //state

    //render
    return(
        <section id={url} className={className}>
            <img src={image}/>
            <h3>{title}</h3>
            <div className={valueClassName}>{value}
            </div>
            <div className='description'>
                <div className='stat-key'>PV : </div><div className='stat-value'><div style={stylePv} className='value'>{HP}</div></div>
                <div className='stat-key'>Att : </div><div className='stat-value'><div style={styleAtt} className='value'>{Att}</div></div>
                <div className='stat-key'>Def : </div><div className='stat-value'><div style={styleDef} className='value'>{Def}</div></div>
                <div className='stat-key'>Att.Spé : </div><div className='stat-value'><div style={styleAttSpé} className='value'>{AttSpé}</div></div>
                <div className='stat-key'>Def.Spé : </div><div className='stat-value'><div style={styleDefSpé} className='value'>{DefSpé}</div></div>
                <div className='stat-key'>Vit : </div><div className='stat-value'><div style={styleVit} className='value'>{Vit}</div></div>
                <div className='total-stats'>Total : <span className='total-value'>{Total}</span></div>
            </div>            
            <span className='gen'>Gen : {spanValue}</span>
            <ResistModal data={resistData}/>
            
        </section>
    )
}

Section.propTypes = {
    id : PropTypes.oneOfType([
        PropTypes.number.isRequired,
        PropTypes.string.isRequired
    ]),
    title : PropTypes.string.isRequired,
    image : PropTypes.string,
    value: PropTypes.oneOfType([
        PropTypes.string,
        PropTypes.object,
        PropTypes.array,
    ]),
    valueClassName: PropTypes.string
}

Section.defaultProps = {
    id: 1,
    title: "Card title",
    value: "Card Value"
}