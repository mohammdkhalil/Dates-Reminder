import React from "react";
import { Row,Col } from "react-bootstrap";

const DatesAction = ({onDelete,onViewData}) => {
  return (
    <Row className="justify-content-center my-2">
      <Col sm="8" className="d-flex justify-content-between">
        <button onClick={onViewData} className="btn-style p-2">عرض البيانات</button>
        <button onClick={onDelete} className="btn-style p-2">مسح الكل</button>
      </Col>
    </Row>
  );
};

export default DatesAction;
