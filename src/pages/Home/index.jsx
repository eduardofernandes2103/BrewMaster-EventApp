import Select from '../../components/Select'
import ProductCard from '../../components/Card'
import { Link } from 'react-router-dom'

const Home = () => {
    return (
        <div>
            <Link to='/catalog'> Go to Catalog</Link>
            <Link to='/confraternization'> Go to Confraternization</Link>
            <Link to='/prom'> Go to Prom</Link>
            <Link to='/wedding'> Go to Wedding</Link>
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
    )
}

export default Home;