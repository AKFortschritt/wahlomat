import React from "react";
import "./css/QuestionPage.css";

interface IQuestionSiteProps {
    
}

const QuestionPage:React.FC<IQuestionSiteProps> = (Props:IQuestionSiteProps):JSX.Element => {

    return <div id="page">
            <h1>Der Wahl-O-Mat</h1>
            <h2>Frage 1 von 40</h2>
            <div id="questions">
                <p id="question_paragraph">Schwörst du Bruder aufs kleine schwarze Büchlein, dass du kämpfen wirst um Einigkeit und Recht und Fortschritt herbeizuführen?</p>
                <div id="question_answers">
                    <button id="yes">Ja</button>
                    <button id="no">Nein</button>
                </div>
            </div>
        </div>
}

export default QuestionPage;