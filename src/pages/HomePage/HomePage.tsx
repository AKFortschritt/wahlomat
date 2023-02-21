import React from "react";
import "./css/HomePage.css";

interface IHomePageProps {

}

const HomePage:React.FC<IHomePageProps> = (Props:IHomePageProps):JSX.Element => {

    return <div id = "page">
                <div id="Header">
                    <h1 id="Header1">Der Wahl-O-Mat</h1>
                    <h2 id="Header2">Ein Projekt des AK Fortschritt</h2>
                </div>
                <div id="Content">
                    <div id="Main">
                        <p id="Explanation">Der Wahl-O-Mat ist eine Tool erstellt von Schülern mit Verantwortung für Schüler mit Verantwortung. Er soll dazu dienen für einen passende, an der Schule angebotene Wahlkurse und AKs aber auch Wettbewerbe zu finden und kann auch zur Wahl von P und W Seminar sowie weiteren Abiturfächern benutzt werden. Mit dem Wahl-O-Maten könnt ihr von der Erfahrung vorheriger Schüler und der Einschätzung vieler Profitieren um das Richtige für euch zu finden</p>
                        <div id="Start-Container">
                            <button id="Start">Start</button>
                        </div>
                    </div>
                    <div id="Thanks-Container">
                        <p id="Thanks">Der Wahl-O-Mat wurde erstellt vom <a href="blank">AK-Fortschritt</a>, viel Spaß ! </p>
                        <p>Wir kümmern uns um die kleinen Dinge im Leben!</p>
                        <img id="Fortschritt" alt="Fortschritt.png"></img>
                    </div>
                </div>
            </div>
}

export default HomePage;