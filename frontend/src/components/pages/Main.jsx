import React,{useContext,useEffect} from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Happy } from "react-happytext";
import AuthContext from "../context/Auth/AuthContext";
import Reveal from "react-reveal/Reveal";
import Lottie from "react-lottie";
import animationData from "../../assets/homepage.json";
import TextyAnim from "rc-texty";
import Attendance from "./Attendance"
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
 
const Main = () => {
  const { userInfo } = useContext(AuthContext);
  useEffect(() => {
  //eslint-disable-next-line
  }, [window.innerWidth])
  return userInfo && userInfo.length > 0 ? <Attendance/> :  <div>
      <center>
        <h1 className="Main__h1">
          Welcome to <Happy value="Track" />
        </h1>

        <h3 className="Main__h3">A community for Teachers & Students</h3>
      </center>

      <Lottie
        options={defaultOptions}
        style={{
          width: window.innerWidth > 720 ? "50%" : "100%",
          height: "auto",
          objectFit: "cover",
        }}
      />
    </div>
  
};

export default Main;
