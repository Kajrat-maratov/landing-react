import HelpCard2 from './components/HelpCard2';
import {MainPage} from './components/Main'

function App() {
  const helpCard = [
    {bg: "#FFE2DE", title: "Weight Lifting"},
    {bg: "#C4E769", title: "Running"},
    {bg: "#62D0DF", title: "Pumping Iron"},
    {bg: "#0052C1", title: "Pumping Iron"}
]
  const helpCard2 = [
    {bg: '#22356F', title: 'Physical Health' },
    {bg: '#0052C1', title: 'Mental Health' },
    {bgi: 'url(joanna-kosinska-340748.jpg)', title: 'Nutrition'},
    {bg: '#62D0DF', title: 'Gymnastics' },
    {bg: '#DEE1FF', title: 'Crossfit' },
    {bg: '#8F00FF', title: 'Aerobics' }
  ]

 
 
 
 
 
 
 

  return (
    <div className="App">
      <MainPage helpCard={helpCard} helpCard2={helpCard2}  key={HelpCard2 + Math.random()}/>
    </div>
  );
}

export default App;
