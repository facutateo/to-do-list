import { useState,useEffect } from "react";
import Input from "./components/input";
import './index.css'


function App() {
    const [isdark, setIsDark] = useState<boolean>(false);
    useEffect(() => {if (isdark) {
            document.body.classList.add('dark-mode');
        } else {
            document.body.classList.remove('dark-mode');
        }
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
