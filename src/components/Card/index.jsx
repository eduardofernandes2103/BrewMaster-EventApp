import {Card} from './styles';
import Button from '../Buttons';

const ProductCard = ({ id, 
                        name, 
                        image, 
                        first_brewed, 
                        description, 
                        volume, 
                        descriptionTag,
                        setDescriptionTag, 
                        click,
                        click1,
                        click2,
                        click3,
                        click4 }) => {

    return (
        <Card>

            <div className={descriptionTag}>{description}</div>

            <div className="ownCard">
                <img src={image} alt="" width="50" height="150" />
                <p>{name}</p>
                <hr />
                <p>Brewed since: {first_brewed}</p>
                <p>{volume.value} {volume.unit}</p>
                <Button setColor={'gray'}
                        setSize={'medium'}
                        setFontColor={"white"}
                        click={click1}
                        >Description</Button>
                <Button setColor={'red'}
                        setSize={'medium'}
                        setFontColor={"white"}
                        click={click}
                        >Apagar</Button>
                <div>
                    
                    <Button
                        setColor={'black'}
                        setSize={'medium'}
                        setFontColor={"white"}
                        click={click2}
                    >Confra</Button>

                    <Button
                        setColor={'black'}
                        setSize={'medium'}
                        setFontColor={"white"}
                        click={click3}
                    >Prom</Button>

                    <Button
                        setColor={'black'}
                        setSize={'medium'}
                        setFontColor={"white"}
                        click={click4}
                    >Wedding</Button>
                </div>
            </div>
        </Card>
    )
}

export default ProductCard;
