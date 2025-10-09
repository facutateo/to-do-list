import  {useState,ChangeEvent, useEffect} from "react";
import './item.css'

interface ItemProps {
    text: string;
    id: number;
    ondelete: (id: number) => void;
    isdark: boolean;
}

function Item(props: ItemProps) {
    
    const { text } = props;
    const [isChecked, setIsChecked] = useState<boolean>(false);
    const [color, setColor] = useState<string>(props.isdark?"white":"black");
    const [iscolorvisible, setIsColorVisible] = useState<boolean>(false);
    const handleCheckboxChange = (e: ChangeEvent<HTMLInputElement>) => {
        setIsChecked(e.target.checked);
    }
    const handleColorChange = (e: ChangeEvent<HTMLInputElement>) => {
        setColor(e.target.value);
    }
    const handleLabelClick = () => {
        setIsColorVisible(prev => !prev);
    }
    const handledeleteclick = () => {
        props.ondelete(props.id);
    }
    useEffect(() => {
        if (props.isdark && color === "black") {
            setColor("white");
        } else if (!props.isdark && color === "white") {
            setColor("black");
        }}, [props.isdark]);
    
return <>
    <ul className="list-group" >
        <li className="list-group-item"style={{backgroundColor: props.isdark? "rgba(65, 63, 63, 1)": "white", color: props.isdark? "white": "black", borderColor: props.isdark? "rgba(128, 128, 128, 0.253)": "rgba(0, 0, 0, 0.253)"}}>
            <div className="d-flex justify-content-between" id="itemdiv">
            <input className="form-check-input me-1" type="checkbox" value="" id="firstCheckbox" checked={isChecked} onChange={handleCheckboxChange}/>
            <label className="form-check-label" htmlFor="firstCheckbox" style={{textDecoration: isChecked == true? 'line-through': 'none',
            color: isChecked == true? 'gray': color
            }}> {text}</label>
            <a className="nav-link dropdown-toggle" data-bs-toggle="dropdown" href="#" role="button" aria-expanded="false"onClick={handleLabelClick}></a>
            </div>
            <div className="color">
                {iscolorvisible && (
                    <input type="color" value={color} onChange={handleColorChange} className="inputcolor"/>
                )}
                {iscolorvisible && (
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-trash" viewBox="0 0 16 16" onClick={handledeleteclick}>
                    <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z"/>
                    <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z"/>
                    </svg>
    )}
            </div>
        </li>
    </ul>
</>;
}

export default Item;