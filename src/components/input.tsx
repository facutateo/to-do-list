import Item from "./item";
import React ,{ useState } from "react";
import './input.css'

interface Itemdata {
    text: string;
    id: number;
}
let num = 0;
interface isdarkprops {
    isdork: boolean;
}
function Input(props:isdarkprops) {
    const { isdork } = props;
    const [items, setItems] = useState<Itemdata[]>([]);
    const [text, setText] = useState<string>("");

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);

    }

const agregar = () => {
    if(text.trim() === "") return;
    num ++;
    const newid = num;
const newItem: Itemdata = {
    text: text,
    id: newid,
}
setItems((prevItems) => [...prevItems, newItem]);
setText('');
}
const deleteItem = (idtodelete: number) => {
    const updatedItems = items.filter((item) => item.id !== idtodelete);
    setItems(updatedItems);
}


return<> <div className="main">
    <div className="header">
    <h1 id="titulo">To do list</h1>
    
    </div>
    <div className="ingreso">
    <button onClick={agregar} type="button" className={isdork? "btn btn-outline-light" : "btn btn-outline-dark"} id="agregar"> + </button>
    <input type="text" placeholder="nuevo item" value={text} onChange={handleInputChange} className="form-control m3" />
    </div>
    <div className="contenedor" style={{border: items.length > 0 ? '1px solid rgba(128, 128, 128, 0.253)' : 'none'}}>
        {items.map((item) => (
        <Item text={item.text} id={item.id} key={item.id} ondelete = {deleteItem} isdark = {isdork}/>
        ))}
    </div>
    </div>
    </>
}

export default Input;