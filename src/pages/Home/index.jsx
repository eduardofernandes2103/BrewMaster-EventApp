import { Link } from 'react-router-dom'
import Container from './styles'
import { IoIosBeer } from 'react-icons/io'


const Home = () => {
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
                <h2>Your beer party organizing App</h2>
                <Link to='/catalog'> <img src="https://images.punkapi.com/v2/2.png" alt="" width="50" height="150" /></Link>
                <p>Click on bottle to go to Catalog</p>
            </div>
            
        </Container>
    )
}

export default Home;