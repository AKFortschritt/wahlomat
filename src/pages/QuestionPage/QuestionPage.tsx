import React from "react";
import "./css/QuestionPage.css";

interface IQuestionSiteProps {
    
}

const QuestionPage:React.FC<IQuestionSiteProps> = (Props:IQuestionSiteProps):JSX.Element => {

    return <div id="page">
            <h1>Der Wahl-O-Mat</h1>
            <h2>Frage 1 von 40</h2>
            <div id="Questions">
                <h3>Schwörst du Bruder aufs kleine schwarze Büchlein, dass du kämpfen wirst um Einigkeit und Recht und Fortschritt herbeizuführen?</h3>
                <div id="Answers">
                    <button id="Yes">Ja</button>
                    <button id="No">Nein</button>
                </div>
            </div>
        </div>
}

export default QuestionPage;