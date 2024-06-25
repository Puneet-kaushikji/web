import './ItemDate.css';

function ItemDate (props){
    const day = props.day;
    const month = props.month;
    const year = props.year;
    return (
        <div className="IDate">
            <span className="IDates">{day} </span> 
            <span className="IDates">{month} </span>
            <span className="IDates">{year} </span>
        </div>
    )
};

export default ItemDate;