import React, {useState, useEffect} from "react";
import './barraInformacao.module.css'

const BarraInformacao = () => {
    const [dateTime, setDateTime] = useState(new Date());

    useEffect(() => {
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return() => clearInterval(interval);
    }, []);

    return(
        <div className="barra-informacao"> 
            <p>{dateTime.toLocaleString()}</p>
        </div>
    );
}

export default BarraInformacao;
