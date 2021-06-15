import { Link } from 'react-router-dom'
import Container from './styles'
import { IoIosBeer } from 'react-icons/io'


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
                    Aqui vão ficar os cards
                </div>

            </div>
            
        </Container>
    )
}

export default Catalog;