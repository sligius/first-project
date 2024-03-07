import React, { useState } from "react";
import { Container, Row, Col, Button, Form } from "react-bootstrap";

function InputOutputField() {
  const [inputText, setInputText] = useState("");
  const [outputText, setOutputText] = useState("");

  const textChange = (e) => {
    setInputText(e.target.value);
    setOutputText(e.target.value);
  };

  const fieldsClear = () => {
    setInputText("");
    setOutputText("");
  };

  return (
    <Container>
      <Row className="my-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Введите текст"
            value={inputText}
            onChange={textChange}
          />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Form.Control
            type="text"
            placeholder="Вывод текста"
            value={outputText}
            readOnly
            disabled
          />
        </Col>
      </Row>
      <Row className="my-3">
        <Col>
          <Button variant="dark" onClick={fieldsClear}>
            Очистить
          </Button>
        </Col>
      </Row>
      <Row></Row>
    </Container>
  );
}

export default InputOutputField;
