import "bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import "./App.css";
import data from "./data.js";
import { Routes, Route, useNavigate } from "react-router-dom";
import About from "./pages/About.js";
import Detail from "./pages/Detail.js";

function App() {
  let [shoes] = useState(data);
  let navigate = useNavigate();
  return (
    <>
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand href="/react_shop/">로고</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/react_shop/detail">상세페이지</Nav.Link>
            {/* <Nav.Link href="/react_shop/about">회사소개</Nav.Link> */}
            <Nav.Link
              onClick={() => {
                navigate("/react_shop/about");
              }}
            >
              회사소개
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/react_shop/about/ceo");
              }}
            >
              조직도
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <div className="headimg">
        <img src={`${process.env.PUBLIC_URL}/img/test1.jpg`} />
      </div>
      <Routes>
        <Route
          path="/"
          element={
            <div className="productList">
              {shoes.map((a, i) => {
                return (
                  <div
                    key={i}
                    onClick={() => {
                      navigate("detail/" + i);
                    }}
                  >
                    <Card shoes={shoes[i]} i={i} />
                  </div>
                );
              })}
            </div>
          }
        />
        <Route path="*" element={<>404페이지</>} />
        <Route path="/react_shop/about" element={<About />}>
          <Route path="/react_shop/about/ceo" element={<>회장님 인사말</>} />
        </Route>
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />
      </Routes>
    </>
  );
}

function Card(props) {
  return (
    <div className="list">
      <img src={`${process.env.PUBLIC_URL}/img/product0${props.i + 1}.jpg`} />
      <p>{props.shoes.title}</p>
      <p>{props.shoes.content}</p>
      <p>{props.shoes.price}</p>
    </div>
  );
}

export default App;
