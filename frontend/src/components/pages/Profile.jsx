import React,{useContext} from 'react'
import {Card,Table,Row,Col} from 'react-bootstrap'
import AuthContext from "../../components/context/Auth/AuthContext"
import Lottie from "react-lottie";
import animationData from "../../assets/profile.json";
const defaultOptions = {
  loop: true,
  autoplay: true,
  animationData: animationData,
  rendererSettings: {
    preserveAspectRatio: "xMidYMid slice",
  },
};
const Profile = () => {
    const {userInfo}=useContext(AuthContext)

    return (
      <Row className="Profile__Card">
        <Col md={6}>
          {" "}
          <Lottie
            options={defaultOptions}
            style={{
              width: window.innerWidth > 720 ? "80%" : "80%",
              height: "auto",
              objectFit: "cover",
            }}
          />
        </Col>
        <Col md={6}>
          {" "}
          <Card className="mt-5">
            <Table striped bordered hover responsive className="Profile__Table">
              <thead>
                <tr>
                  <th>Name</th>
                  <td>{userInfo[0].name}</td>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <th>Email</th>
                  <td>{userInfo[0].email}</td>
                </tr>{" "}
                <tr>
                  <th>Role</th>
                  <td>{userInfo[0].role}</td>
                </tr>{" "}
                <tr>
                  <th>ID</th>
                  <td>{userInfo[0].id}</td>
                </tr>{" "}
              </tbody>
            </Table>
          </Card>
        </Col>
      </Row>
    );
}

export default Profile
