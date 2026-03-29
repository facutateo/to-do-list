import { useState,useEffect } from "react";
import Input from "./components/input";
import './index.css'


function App() {
    const [isdark, setIsDark] = useState<boolean>(localStorage.getItem('isdark') ? JSON.parse(localStorage.getItem('isdark') as string) : false);
    useEffect(() => {if (isdark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
        localStorage.setItem('isdark', JSON.stringify(isdark));
    }, [isdark]);
    const toggleDarkMode = () => {
        setIsDark(!isdark);
    };

return<> 
    <button type="button" id="theme" className={isdark?"btn btn-outline-light" : "btn btn-outline-dark"} onClick={toggleDarkMode}>{isdark? "modo claro": "modo oscuro"}</button>
    <Input isdork = {isdark}  />
    </>
}

export default App;
