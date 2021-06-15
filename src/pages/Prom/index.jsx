import { Link } from 'react-router-dom'
import Container from './styles'
import { IoIosBeer } from 'react-icons/io'
import ProductCard from '../../components/Card'
import { useCart } from '../../providers/cart';
import { useState } from 'react'


const Prom = () => {
    
    const { prom, addToConfraternization, addToProm, addToWedding } = useCart()

    const [descriptionTag, setDescriptionTag] = useState("description")
    
    const handleDescription = () => {
        descriptionTag === "description" 
        ? setDescriptionTag("descriptionOn") 
        : setDescriptionTag("description")
    }

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
                    <Link to='/catalog'> Go to Catalog</Link>
                </div>

            </div>

            <div className="homeText">
                <h2>Prom</h2>
                
                <div className="cardsPlace">
                {
                        prom.map((product) => (
                            <ProductCard 
                                id= {product.id}
                                image={product.image_url}
                                name={product.name}
                                first_brewed= {product.first_brewed}
                                volume={product.volume}
                                description={product.description}
                                descriptionTag={descriptionTag}
                                setDescriptionTag={setDescriptionTag}
                                click1={() => handleDescription()}
                                click2={() => addToConfraternization(product)}
                                click3={() => addToProm(product)}
                                click4={() => addToWedding(product)}
                            />
                        ))
                    }
                </div>

            </div>
            
        </Container>
    )
}

export default Prom;