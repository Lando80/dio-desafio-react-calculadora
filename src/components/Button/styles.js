import styled from "styled-components";

export const ButtonContainer = styled.button`
  padding: 20px;
  border: 1px solid #cdcdcd;
  background-color: ${props => props.bg || '#00aaf0'};
  color: #ffffff;
  font-size: 24px;
  font-weight: 700;
  width: ${props => props.width};
  /* flex: 1; resolvi dimensionar utilizando percentual atraves de parâmetros */
  

  &:hover{
    opacity: 0.6;
  }

`