import Input from './components/Input'
import Button from './components/Button'

import { Container, Content, Row } from "./styles";
import { useState } from 'react';

const App = () => {

  const [currentNumber, setCurrentNumber] = useState('0')
  const [firstNumber, setFirstNumber] = useState('0')
  const [operation, setOperation] = useState('')
  const [dispay, setDisplay] = useState('0')

  const handleOnClear = () => {
    setCurrentNumber('0')
    setFirstNumber('0')
    setOperation('')
    setDisplay('0')
  }

  const handleAddNumber = (number) => {
    setCurrentNumber(prev => `${prev === '0' ? '' : prev}${number}`)
    setDisplay(prev => `${prev === '0' ? '' : prev}${number}`)
    
  }

  const handleSumNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('+')
      setDisplay(prev => `${prev} + `)
    } else {
      const sum = Number(firstNumber) + Number(currentNumber)
      setCurrentNumber(String(sum))
      setDisplay(String(sum))
      setOperation('')
    }
  }

  const handleDeductNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('-')
      setDisplay(prev => `${prev} - `)
    } else {
      const rem = Number(firstNumber) - Number(currentNumber)
      setCurrentNumber(String(rem))
      setDisplay(String(rem))
      setOperation('')
    }
  }

  const handleMultiplyNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('*')
      setDisplay(prev => `${prev} x `)
    } else {
      const mult = Number(firstNumber) * Number(currentNumber)
      setCurrentNumber(String(mult))
      setDisplay(String(mult))
      setOperation('')
    }
  }

  const handleDivisionNumber = () => {

    if (firstNumber === '0') {
      setFirstNumber(currentNumber)
      setCurrentNumber('0')
      setOperation('/')
      setDisplay(prev => `${prev} / `)
    } else {
      const toDiv = Number(firstNumber) / Number(currentNumber)
      setCurrentNumber(String(toDiv))
      setDisplay(String(toDiv))
      setOperation('')
    }
  }

  const handleEquals = () => {

    if (firstNumber !== '0' && operation !== '' && currentNumber !== '0') {
      switch (operation) {
        case '+':
          handleSumNumber()
          break
        case '-':
          handleDeductNumber()
          break
        case '/':
          handleDivisionNumber()
          break
        case '*':
          handleMultiplyNumber()
          break
        default:
          break
      }
    }
  }

  return (
    <Container>
      <Content>
        {/* <Input value={currentNumber} /> */}
        <Input value={dispay} />
        <Row>
          <Button label="C" onClick={handleOnClear} width={'50%'} />
          <Button label="/" onClick={handleDivisionNumber} width={'25%'} />
          <Button label="*" onClick={handleMultiplyNumber} width={'25%'} />
        </Row>
        <Row>
          <Button label="7" onClick={() => handleAddNumber('7')} width={'25%'} />
          <Button label="8" onClick={() => handleAddNumber('8')} width={'25%'} />
          <Button label="9" onClick={() => handleAddNumber('9')} width={'25%'} />
          <Button label="-" onClick={handleDeductNumber} width={'25%'} />
        </Row>
        <Row>
          <Button label="4" onClick={() => handleAddNumber('4')} width={'25%'} />
          <Button label="5" onClick={() => handleAddNumber('5')} width={'25%'} />
          <Button label="6" onClick={() => handleAddNumber('6')} width={'25%'} />
          <Button label="+" onClick={handleSumNumber} width={'25%'} />
        </Row>
        <Row>
          <Button label="1" onClick={() => handleAddNumber('1')} width={'25%'} />
          <Button label="2" onClick={() => handleAddNumber('2')} width={'25%'} />
          <Button label="3" onClick={() => handleAddNumber('3')} width={'25%'} />
          <Button label="=" onClick={handleEquals} cor='#4169e1' width={'25%'} />
        </Row>
        <Button label="0" onClick={() => handleAddNumber('0')} width='75%' />
        <Button label="." onClick={() => handleAddNumber('.')} width='25%' />
      </Content>
    </Container>
  );
}

export default App;
