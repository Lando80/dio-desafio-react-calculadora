import { ButtonContainer } from "./styles";

const Button = ({label, onClick, cor, width})  =>{
  return (
    <ButtonContainer onClick={onClick} bg={cor} width={width}>
      {label}
    </ButtonContainer>
  );
}

export default Button;
