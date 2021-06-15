import {Container} from './styles'

const Select = ({ 
                    value1, 
                    value2, 
                    value3,
                    name, 
                    children1, 
                    children2, 
                    children3,
                    register
                }) => {
    return (
        <Container>
            <select>
            {/* <select {...register(name)}> */}
                <option value={value1} >{children1}</option>
                <option value={value2} >{children2}</option>
                <option value={value3} >{children3}</option>
            </select>
        </Container>
    )
}

export default Select;
