import React from "react";
import { Row,Col } from "react-bootstrap";

const DatesCount = ({person}) => {
  return (
    <Row className="justify-content-center my-3">
      <Col sm="8" className="">
        لديك {person.length} مواعيد اليوم
      </Col>
    </Row>
  );
};

export default DatesCount;
