import { Container, Row, Col, CardGroup, Card } from 'react-bootstrap'
import './App.css';
import data from './data/resume.json'

function App() {
  return (
    <Container className='container'>
      <CardGroup>
        {data.map((resume) => (
          <>
            <Card className='contact card'>
              <h2>{resume.contact.name}</h2>
              <h5>{resume.content.tagline}</h5>
              <p>
                {JSON.stringify(resume.contact)}
              </p>
            </Card>
            <Card className='hobbies card'>
              <h2>Hobbies</h2>
              <ul>
              {
                resume.content.hobbies.map((hobby) =>
                  <li>
                    {hobby}
                  </li>
                )
              }
              </ul>
            </Card>
          </>
        ))}
      </CardGroup>
    </Container>
  );
}
export default App;