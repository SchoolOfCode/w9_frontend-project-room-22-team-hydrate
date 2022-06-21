import "./App.css";

//imports for React Router as per docs
import {BrowserRouter, Routes, Route, Link} from "react-router-dom";

//import pages here
import Home from "./pages/Home";
import HtmlTopic from "./pages/HtmlTopic";
import CssTopic from "./pages/CssTopic";
import ReactTopic from "./pages/ReactTopic";
import UiUxTopic from "./pages/UiUxTopic";
import ErrorPage from "./pages/ErrorPage";

//POTENTIALLY MOVE TO ONE OF THE PAGES
//const topic = ["Javascript", "CSS", "React", "UI / UX"];

function App() {
  return (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/html" element={<HtmlTopic />} />
      <Route path="/css" element={<CssTopic />} />
      <Route path="/react" element={<ReactTopic />} />
      <Route path="/uiux" element={<UiUxTopic />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </BrowserRouter>
  )
}

export default App;

//code from prior to changing from components to pages
{/* <div className="App">
      <h1>Hey Chuks</h1>
      <Link to="/invoices">Invoices</Link>
      <TopicButton topic={topic[0]} />
      <TopicButton topic={topic[1]} />
      <TopicButton topic={topic[2]} />
      <TopicButton topic={topic[3]} />
    </div>; */}