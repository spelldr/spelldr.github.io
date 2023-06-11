import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap'
import './App.css';
import data from './data/resume.json'

function App() {
  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              {data.map((resume) => (
                <div className='a' key = {resume.id}>
                  <h2>{resume.data.contact.name}</h2>
                  {console.log(data)}
                </div>
              ))}
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}
export default App;