import react, {useState , useEffect} from 'react';
import { Container, Row, Col } from 'reactstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Mycard from './Mycard.js';

import Axios from 'axios';
function App() {
  const [details , setDetails]=useState({});
    const fetchDetails = async () => {
      const { data } = await Axios.get('https://randomuser.me/api/');
      const details= data.results[0];
      setDetails(details);


    };
    useEffect(() => {
      fetchDetails();
    } , []);
  return (
    <Container fluid className="p-4 bg-primary App">
      <Row>
        <Col md={4} className="offset-md-4 mt-4">
          <Mycard details={details}></Mycard>
        </Col>
      </Row>
    </Container>
  );
}

export default App;
