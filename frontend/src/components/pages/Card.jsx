import React from 'react'
import {Card} from 'react-bootstrap'
import {Link} from "react-router-dom"
const DisplayCard = (props) => {
    return (
      <Link to={props.link} style={{ textDecoration: "none" }}>
        <Card
          style={{
            width: "18rem",
            background: props.bg,
            marginBottom: "10px",
            marginTop: "10px",
          }}
        >
          <Card.Body>
            <Card.Title style={{ color: props.textcolor }}>
              {props.title}
            </Card.Title>
          </Card.Body>
        </Card>
      </Link>
    );
}

export default DisplayCard;
