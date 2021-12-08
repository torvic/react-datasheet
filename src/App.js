import './App.css'
import { Container } from 'react-bootstrap'
import Wrapper from './layout/Wrapper'

function App() {
  return (
    <Wrapper>
      <Container>
        <div className='content pt-4'>This is a content</div>
      </Container>
    </Wrapper>
  )
}

export default App
