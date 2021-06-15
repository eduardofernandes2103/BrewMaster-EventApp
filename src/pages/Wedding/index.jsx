import { Link } from 'react-router-dom'
import Container from './styles'
import { IoIosBeer } from 'react-icons/io'


const Wedding = () => {
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
                <h2>Wedding</h2>
                
                <div className="cardsPlace">
                    Aqui vão ficar os cards
                </div>

            </div>
            
        </Container>
    )
}

export default Wedding;