import './Item.css'

function Item(props){
    const nameItem = props.name;
 return (
    <div>
    <p className="nirma">{nameItem}</p>
    {props.children}
    </div>
 )
}

export default Item;