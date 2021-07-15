import 'bootstrap/dist/css/bootstrap.css';
import { Fragment, useState } from 'react';
import { Container, Row, Col, Button, Image} from 'react-bootstrap';
import Header from './components/Header';
import Footer from './components/Footer'
import imagenSuperior from "./images/imagenSuperior.jpg";
import './App.css';


function App() {

  // Hago un state de frases, arranco con un objeto vacío
// porque las frases vienen como objeto JSON desde la API
// https://binaryjazz.us/genrenator-api/

const [genero, setGenero] = useState('');

// Consultar la API y traerla 

  const consultarAPI = async () => {
    try{
      const api = await fetch('https://binaryjazz.us/wp-json/genrenator/v1/genre/');
      const genero = await api.json();      
      setGenero(genero);
      } catch (error) {
        console.log(error);
      }
};
return (
  <Fragment  >
    <Header className="fixed-top"></Header>
  <Container >
    <Row  className="d-flex justify-content-center" >
      <Col  
      style={
    {
      paddingTop:"50px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }
  } >
        <Image  className="rounded"  src={imagenSuperior} fluid />
      </Col>
    </Row>
  <div
  style={
    {
      paddingTop:"50px",
      display:"flex",
      flexDirection:"column",
      alignItems:"center"
    }
  }>
  <Row>
    <Col>
    <Button 
      onClick={consultarAPI}
      >
      Traer Genero
    </Button>
    </Col>
    </Row>
    <Row>
      <Col >
      <br></br>
      <br></br>
      <div className="p-3 mb-2 bg-primary text-white" ><h2 > ♫  {genero} ♫ </h2></div> 
      </Col>
    </Row>
  </div>
  <Footer></Footer>
  </Container>
  </Fragment>
);
}

export default App;


