import React from "react";
import {
  Container,
  Image,
  Row,
  Col,
  Table,
  Navbar,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

function SearchForm() {
  return (
    <Navbar className="bg-body-secondary justify-content-end px-4">
      <Form>
        <Row>
          <Col xs="auto">
            <FormControl type="text" placeholder="Поиск" className="mr-sm-2" />
          </Col>
          <Col xs="auto" className="p-0">
            <Button variant="secondary" style={{ marginRight: "0px" }}>
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Col>
        </Row>
      </Form>
    </Navbar>
  );
}

function DinosaurInfo() {
  const dinosaurData = {
    Род: "Лесотозавр",
    Семейство: "Фаброзавриды",
    Подотряд: "–",
    Отряд: "Орнитоподы",
    Надотряд: "Динозавры",
    "Длина до, см": 100,
    "Высота до, см": 40,
    "Вес до, кг": 3.45,
    "Жил, м.л.н.": "199.3-190.8 (р. юра)",
    "Место обитания": "Лесото и ЮАР",
  };

  return (
    <div>
      <Container>
        <h1
          className="mb-3 mt-3 bg-info p-2 rounded"
          style={{ "--bs-bg-opacity": 0.2 }}
        >
          {dinosaurData["Род"]}
        </h1>
        <Row>
          <Col md={6}>
            <Table striped bordered hover>
              <tbody>
                {Object.entries(dinosaurData).map(([key, value]) => (
                  <tr key={key}>
                    <th>{key}</th>
                    <td>{value}</td>
                  </tr>
                ))}
              </tbody>
            </Table>
          </Col>
          <Col md={6}>
            <Image
              src="https://pofoto.club/uploads/posts/2022-07/1658972043_3-pofoto-club-p-lesotozavr-dinozavr-5.jpg"
              alt="Лесотозавр"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export { DinosaurInfo, SearchForm };
