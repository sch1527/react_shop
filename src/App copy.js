import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data.js";

function App() {
  let [shoes] = useState(data);
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="#home">Navbar</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#features">Features</Nav.Link>
            <Nav.Link href="#pricing">Pricing</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="headimg">
        <img src="/img/test1.jpg" width="100%" />
      </div>
      <div className="productList">
        {shoes.map((a, i) => {
          return <Card shoes={shoes[i]} i={i} key={i} />;
        })}
      </div>
    </>
  );
}

function Card(props) {
  return (
    <div className="list">
      <img src={`${process.env.PUBLIC_URL}/img/product0${props.i+1}.jpg`} />
      <p>{props.shoes.title}</p>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
