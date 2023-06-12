import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap'
import './App.css';
import data from './data/resume.json'
function App() {
  return (
    <Container className='container'>
      <>
        {
          data.entries()
        }
      </>
    </Container>
  );
}
export default App;