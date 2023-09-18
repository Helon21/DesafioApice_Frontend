import React, {useState,useEffect} from "react";
import style from "./Rodape.module.css"
import {format} from "date-fns";
import axios from "axios";

const Rodape = () => {
    const [dateTime, setDateTime] = useState(new Date());
    const [userLocation, setUserLocation] = useState(null);

    useEffect(() => {

        axios.get("http://ip-api.com/json").then((response) => {
            setUserLocation(response.data.city);
        }).catch(error => {
            console.error('Erro ao obter a localização: ', error);
        });
    
        const interval = setInterval(() => {
            setDateTime(new Date());
        }, 1000);
        return() => clearInterval(interval);
       
    }, []);

    const formattedDateTime = format(dateTime, "dd/MM/yyyy HH:mm:ss");

    return(
        <div className={style.rodapeContainer}>
            <p className="paragrafo">{userLocation ? `${userLocation}: `: ''}{formattedDateTime}</p>
        </div>
    );
}

export default Rodape;