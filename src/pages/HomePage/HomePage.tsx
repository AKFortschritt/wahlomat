import React from "react";
import "./css/HomePage.css";
import { useNavigate } from "react-router-dom";

interface IHomePageProps {

}

const HomePage:React.FC<IHomePageProps> = (Props:IHomePageProps):JSX.Element => {

    const navigate = useNavigate();

    return <div id="HPage">
                <div id="HContent">
                    <h1>Der Wahl-O-Mat</h1>
                    <h2>Ein Projekt des AK Fortschritt</h2>
                    <div id="HMain">
                        <p>Der Wahl-O-Mat ist eine Tool erstellt von Schülern mit Verantwortung für Schüler mit Verantwortung. Er soll dazu dienen für einen passende, an der Schule angebotene Wahlkurse und AKs aber auch Wettbewerbe zu finden und kann auch zur Wahl von P und W Seminar sowie weiteren Abiturfächern benutzt werden. Mit dem Wahl-O-Maten könnt ihr von der Erfahrung vorheriger Schüler und der Einschätzung vieler Profitieren um das Richtige für euch zu finden</p>
                        <div id="HStartContainer">
                            <button id="HStartBtn" className="animate" onClick = {() =>  navigate("/questions")}>Start</button>
                        </div>
                    </div>
                    <div id="HTanksContainer">
                        <p>Der Wahl-O-Mat wurde erstellt vom <a href="blank">AK-Fortschritt</a>, viel Spaß!</p>
                        <p>Wir kümmern uns um die kleinen Dinge im Leben!</p>
                        <div id="HFortschritt"></div>
                    </div>
                </div>
           </div>
}

export default HomePage;