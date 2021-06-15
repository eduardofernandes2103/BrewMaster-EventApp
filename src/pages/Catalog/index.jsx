import { Link } from 'react-router-dom'
import Container from './styles'
import { IoIosBeer } from 'react-icons/io'
import ProductCard from "../../components/Card"
import { useState, useEffect } from 'react'
// import api from '../../services/api'
import { useCart } from '../../providers/cart';

const Catalog = () => {
    // const [menu, setMenu] = useState([]);
    const [descriptionTag, setDescriptionTag] = useState("description")
    
    const handleDescription = () => {
        descriptionTag === "description" 
        ? setDescriptionTag("descriptionOn") 
        : setDescriptionTag("description")
    }

    const { 
            menu, 
            setMenu, 
            loadCatalog, 
            addToConfraternization, 
            addToProm,
            addToWedding 
        } = useCart()

    useEffect (() => {
        loadCatalog()
        console.log(menu)
    }, []);    

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
                <h2>If you Want to Add some beer to your event, choose the event and click.</h2>
                
                <div className="cardsPlace">
                    
                    {
                        menu.map((product) => (
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

export default Catalog;