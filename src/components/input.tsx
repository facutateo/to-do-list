import Item from "./item";
import React ,{ useState } from "react";
import './input.css'

interface Itemdata {
    text: string;
    id: number;
    state: boolean;
    color: string;
}
let num = 0;
interface isdarkprops {
    isdork: boolean;
}
function Input(props:isdarkprops) {
    const { isdork } = props;
    const [items, setItems] = useState<Itemdata[]>(() => {
    const stored = localStorage.getItem('items');
    return stored ? JSON.parse(stored) : [];
});
    const [text, setText] = useState<string>("");

    const updateItem = (id: number, updatedFields: Partial<Itemdata>) => {
    const updatedItems = items.map((item) =>
        item.id === id ? { ...item, ...updatedFields } : item
    );
    
    // Actualizamos el estado del padre
    setItems(updatedItems);
    
    // GUARDAMOS la lista completa y actualizada en el almacenamiento
    localStorage.setItem('items', JSON.stringify(updatedItems));
};

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setText(e.target.value);

    }

const agregar = () => {
    if(text.trim() === "") return;
    if(items.some((item) => item.text === text)){
        alert("ya existe ese item"); 
        return;
    }

    num ++;
    const newid = num;
const newItem: Itemdata = {
    text: text,
    id: newid,
    state: false,
    color: "none"
}
setItems((prevItems) => [...prevItems, newItem]);
localStorage.setItem('items', JSON.stringify([...items, newItem]));
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
        <Item text={item.text} id={item.id} key={item.id} ondelete = {deleteItem} isdark = {isdork} state = {item.state} color={item.color} onUpdate={updateItem}/>
        ))}
    </div>
    </div>
    </>
}

export default Input;