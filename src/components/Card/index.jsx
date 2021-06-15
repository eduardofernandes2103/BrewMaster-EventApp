import {Card} from './styles';
import Button from '../Buttons';

const ProductCard = ({ name, first_brewed, description, volume, click }) => {
    return (
        <Card>
            <div>
                <img src="https://images.punkapi.com/v2/2.png" alt="" width="50" height="150" />
                <p>{name}</p>
                <hr />
                <p>Brewed since: {first_brewed}</p>
                {/* <p>{description}</p> */}
                <p>{volume.value} {volume.unit}</p>
                <Button setColor={'gray'}
                        setSize={'medium'}
                        setFontColor={"white"}
                        click={click}
                        >Description</Button>
                <Button setColor={'red'}
                        setSize={'medium'}
                        setFontColor={"white"}
                        click={click}
                        >Apagar</Button>
            </div>
        </Card>
    )
}

export default ProductCard;
