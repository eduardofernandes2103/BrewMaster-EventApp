import { Link } from 'react-router-dom'
import Container from './styles'
import { IoIosBeer } from 'react-icons/io'
import ProductCard from '../../components/Card'
import { useCart } from '../../providers/cart';
import { useState } from 'react'
import {ToastContainer}  from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';



const Confraternization = () => {
    
    const { confraternization,
            addToConfraternization, 
            addToProm, 
            addToWedding, 
            removeToConfraternization 
        } = useCart()

    const [descriptionTag, setDescriptionTag] = useState("description")
    
    const handleDescription = () => {
        descriptionTag === "description" 
        ? setDescriptionTag("descriptionOn") 
        : setDescriptionTag("description")
    }
    
    return (
        
        <Container>

            <ToastContainer />

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
                <h2>Confraternization</h2>
                
                <div className="cardsPlace">
                {
                        confraternization.map((product) => (
                            <ProductCard 
                                id= {product.id}
                                image={product.image_url}
                                name={product.name}
                                first_brewed= {product.first_brewed}
                                volume={product.volume}
                                description={product.description}
                                descriptionTag={descriptionTag}
                                setDescriptionTag={setDescriptionTag}
                                click={() => removeToConfraternization(product)}
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

export default Confraternization;