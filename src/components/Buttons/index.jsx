import MyButton from './styles'

const Button = ({children, setColor, setFontColor, setSize, click, type}) => {

    return(
      <MyButton 
          setColor={setColor}
          setFontColor={setFontColor}
          onClick={click}
          setSize={setSize}
          type={type}
        >{children}
      </MyButton>
    )
}


export default Button
