import './App.css';
import Accordian from './components/Accordian';
import { accordianData } from './components/AccordianData';

function App() {

  let accordianElements = accordianData.map((item, index) => {
    return <Accordian key={index} title={item.title} content={item.content} />
  })

  return (
    <div className="App">
      {accordianElements}
    </div>
  );
}

export default App;
