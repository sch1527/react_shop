import { Outlet } from "react-router-dom"
function About() {
    return (
      <>
        <h1>회사소개</h1>
        <Outlet></Outlet>
      </>
    );
  }
export default About