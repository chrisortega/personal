import { useState } from "react";
import { useSearchParams } from 'react-router-dom';


import "../globalStyles/sonic4.css";


const Sonic4 = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const [confirmar, setConfirmar] = useState({
        "nombre": "",
        "asistencia": "",
        "codigo": ""
    });
    const ConfirmAssist = () => {
        setConfirmar({
            "nombre": searchParams.get("nombre"),
            "asistencia": searchParams.get("asistencia"),
            "codigo": searchParams.get("codigo")
        });
        if (confirmar.nombre === null || confirmar.codigo === null || confirmar.asistencia === null) {
            alert("no estas invitado")

        }

    }

    return (
        <div className="invitation">

            <div className="center-card">


                <div className="body-invitation">
                    <div className="title">
                        Liam Ivar cumple
                    </div>

                    <div className="title2">
                        4 años
                    </div>
                    <div className="title3">
                        Ven a celebrar una aventura llena de velocidad y diversión con

                        Sonic y sus amigos
                    </div>
                    <div className="miniGrid">
                        <div className="date">
                            8 de agosto del 216
                        </div>
                        <div className="address">
                            Circuito la calma 2016
                        </div>
                        <div className="nuckles-image">
                            <img src="src/assets/knuckles.png" className="knuckles" alt="knuckles" />
                        </div>
                    </div>
                    <div className="map-section">
                        <iframe
                            src="https://www.google.com/maps?q=Circuito+la+calma+2016&output=embed"
                            title="Google Maps"
                            className="map-iframe"
                            allowFullScreen=""
                            loading="lazy">
                        </iframe>
                    </div>
                </div>
                <div className="footer-invitation">
                    <button onClick={ConfirmAssist}>CONFIRMAR ASISTENCIA</button>
                </div>

            </div>


        </div>
    )
}
export default Sonic4;