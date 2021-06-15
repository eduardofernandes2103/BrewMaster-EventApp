import './App.css';
import Button from './components/Buttons'
import Select from './components/Select'

function App() {
  return (
    <div>
      <Button setSize={"large"} >teste</Button>
      <Select 
              name="howParty"
              value1="Prom"
              value2="Wedding"
              value3="Confraternization"
              children1="Prom"
              children2="Wedding"
              children3="Confraternization"
      />
    </div>
  );
}

export default App;
