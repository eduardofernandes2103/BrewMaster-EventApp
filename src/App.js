import './App.css';
import Button from './components/Buttons'
import Select from './components/Select'
import ProductCard from './components/Card'

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

      <ProductCard 
                    name="Burbank IPA" 
                    first_brewed="04/2008"
                    description="lembrar de criar o botão de esconder"
                    volume={{value: 0.6, unit: "litres"}}
      />
    </div>
  );
}

export default App;
