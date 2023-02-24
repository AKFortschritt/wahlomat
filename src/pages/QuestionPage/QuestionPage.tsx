import React from "react";
import "./css/QuestionPage.css";

interface IQuestionSiteProps {
    
}

const QuestionPage:React.FC<IQuestionSiteProps> = (Props:IQuestionSiteProps):JSX.Element => {

    return <div>
            <h1>Der Wahl-O-Mat</h1>
            <h2>Frage 1 von 40</h2>
            <div id="Questions"></div>
        </div>
}

export default QuestionPage;