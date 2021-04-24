import React,{useContext} from 'react'
import Lottie from "react-lottie";
import animationData from "../../assets/hi.json";
import {Row,Col,Card} from "react-bootstrap"
import AuthContext from "../../components/context/Auth/AuthContext"
import DisplayCard from "./Card"
import {Link} from "react-router-dom"
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Attendance = () => {
    const {userInfo}=useContext(AuthContext)
    return (
      <>
        <center className="mt-4">
          <h1>Hello {userInfo[0].name}</h1>
        </center>
        <Row className="mt-2 Main__Row">
          <Col lg={6}>
            <Lottie
              options={defaultOptions}
              style={{
                width: window.innerWidth > 720 ? "75%" : "100%",
                height: "auto",
                objectFit: "cover",
              }}
            />
          </Col>
          <Col lg={6}>
            {userInfo[0].role === "Teacher" && (
              <Row className="mt-5">
                {" "}
                <Col>
                  <DisplayCard
                    title="Mark today's Attendance"
                    bg="linear-gradient(45deg, rgb(50, 31, 219), rgb(31, 20, 152))"
                    textcolor="white"
                  />
                </Col>{" "}
                <Col>
                  <DisplayCard
                    title="Today's Presentees' List"
                    bg="linear-gradient(45deg, rgb(249, 177, 21), rgb(246, 150, 11))"
                    textcolor="white"
                  />
                </Col>
                <Col>
                  <DisplayCard
                    title="Today's Absentees' List"
                    bg="linear-gradient(45deg, rgb(229, 83, 83), rgb(217, 55, 55))"
                    textcolor="white"
                  />
                </Col>
                <Col>
                  <DisplayCard
                    title="Check Status"
                    bg="linear-gradient(45deg, rgb(50, 31, 219), rgb(31, 20, 152))"
                    textcolor="white"
                  />
                </Col>{" "}
                <Col>
                  <DisplayCard
                    title="Students' List"
                    bg="linear-gradient(45deg, rgb(51, 153, 255), rgb(41, 130, 204))"
                    textcolor="white"
                  />
                </Col>
              </Row>
            )}
            {userInfo[0].role === "Student" && (
              <Row className="mt-5">
                {" "}
              
                  {" "}
                  <Col>
                    <DisplayCard
                      title="Click to see your Profile Card"
                      bg="linear-gradient(45deg, rgb(50, 31, 219), rgb(31, 20, 152))"
                      textcolor="white"
                      link="/profile"
                    />
                  </Col>
             
                <Col>
                  <DisplayCard
                    title="Check Your's Average Attendance"
                    bg="linear-gradient(45deg, rgb(229, 83, 83), rgb(217, 55, 55))"
                    textcolor="white"
                  />
                </Col>
              </Row>
            )}
            <Col></Col>
          </Col>
        </Row>
      </>
    );
}

export default Attendance
