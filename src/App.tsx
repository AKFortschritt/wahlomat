import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import HomePage from './pages/HomePage/HomePage';
import QuestionPage from "./pages/QuestionPage/QuestionPage";
import ResultPage from './pages/ResultPage/ResultPage';

interface IProps {

}

const App:React.FC<IProps> = (Props:IProps):JSX.Element => {
  return <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage></HomePage>}/>
        
        <Route path="/questions" element={<QuestionPage></QuestionPage>}/>
        <Route path="/result" element={<ResultPage></ResultPage>}/>

        <Route path="*" element={<Navigate to="/"/>}></Route>
      </Routes>
  </BrowserRouter>
}

export default App;
