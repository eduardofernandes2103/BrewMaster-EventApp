import { Link } from 'react-router-dom'
import Container from './styles'
import { IoIosBeer } from 'react-icons/io'
import ProductCard from "../../components/Card"


const Catalog = () => {
    return (

        

        <Container>

            <div className="topBar">
                
                <div className="title">
                    <h1>BrewerMaster </h1>
                    <div className="icon">
                        <IoIosBeer/>
                    </div>
                </div>

                <div className="links">
                    <Link to='/confraternization'> Go to Confraternization</Link>
                    <Link to='/prom'> Go to Prom</Link>
                    <Link to='/wedding'> Go to Wedding</Link>
                </div>

            </div>

            <div className="homeText">
                <h2>If you Wanna Add some beer to your event, choose the event and click on Add Button.</h2>
                
                <div className="cardsPlace">
                    
                    <ProductCard 
                        name="Burbank IPA"
                        first_brewed= "09/2007"
                        volume={
                            {
                                "value": 0.6,
                                "unit": "litres"
                            }
                        }
                    />

                    <ProductCard 
                        name="Burbank APA"
                        first_brewed= "09/2007"
                        volume={
                            {
                                "value": 0.6,
                                "unit": "litres"
                            }
                        }
                    />
                    
                    <ProductCard 
                        name="Burbank NEIPA"
                        first_brewed= "09/2007"
                        volume={
                            {
                                "value": 0.6,
                                "unit": "litres"
                            }
                        }
                    />
                    
                    <ProductCard 
                        name="Burbank Stout"
                        first_brewed= "09/2007"
                        volume={
                            {
                                "value": 0.6,
                                "unit": "litres"
                            }
                        }
                    />
                    
                </div>

            </div>
            
        </Container>
    )
}

export default Catalog;