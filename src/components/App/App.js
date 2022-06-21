import "./App.css";
//import components here
import TopicButton from "../TopicButton/index";

const topic = ["Javascript", "CSS", "React", "UI / UX"];

function App() {
  return <div className="App">
    <h1>Hey Chuks</h1>
    <TopicButton topic={topic[0]} />
  </div>;
}

export default App;
