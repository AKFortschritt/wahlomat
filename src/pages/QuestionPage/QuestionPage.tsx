import React from "react";
import "./css/QuestionPage.css";

interface IQuestionSiteProps {
    
}

const QuestionPage:React.FC<IQuestionSiteProps> = (Props:IQuestionSiteProps):JSX.Element => {

    return <div id="QPage">
                <div id="QContent">
                    <h1>Der Wahl-O-Mat</h1>
                    <h2>Frage 1 von 40</h2>
                    <div id="QMain">
                        <p id="QParagraph">Schwörst du Bruder aufs kleine schwarze Büchlein, dass du kämpfen wirst um Einigkeit und Recht und Fortschritt herbeizuführen?</p>
                        <div id="QAnswers">
                            <button id="QYes">Ja</button>
                            <button id="QNo">Nein</button>
                        </div>
                    </div>
                </div>
           </div>
}

export default QuestionPage;