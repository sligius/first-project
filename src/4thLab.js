import React, { useState } from "react";
import { Card, Container, FormControl } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faLeaf,
  faFishFins,
  faDrumstickBite,
  faBug,
} from "@fortawesome/free-solid-svg-icons";

function DinosaurCards() {
  const dinosaurData = [
    {
      name: "Танистрофей",
      scientificName: "(Tanystropheus)",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/a/af/Tanystropheus_BW.jpg/640px-Tanystropheus_BW.jpg",
      period: "Триасовый период",
      diet: faFishFins,
    },
    {
      name: "Диметродон",
      scientificName: "(Dimetrodon)",
      image: "https://dino-all.ru/wp-content/uploads/2021/11/dimetrodon2.jpg",
      period: "Пермский период",
      diet: faDrumstickBite,
    },
    {
      name: "Брахиозавр",
      scientificName: "(Brachiosaurus)",
      image:
        "https://dino-all.ru/wp-content/uploads/2021/11/brachiosaurus-scaled.jpg",
      period: "Юрский период",
      diet: faLeaf,
    },
    {
      name: "Велоцираптор",
      scientificName: "(Velociraptor)",
      image: "https://dino-all.ru/wp-content/uploads/2021/11/velo1.jpg",
      period: "Меловой период",
      diet: faDrumstickBite,
    },
    {
      name: "Платозавр",
      scientificName: "(Plateosaurus)",
      image:
        "https://dino-all.ru/wp-content/uploads/2021/11/plateosaurus-engelhardti-a-prehistoric-sergey-krasovskiy_354a-870x353.jpg",
      period: "Триасовый период",
      diet: faLeaf,
    },
    {
      name: "Гилоном",
      scientificName: "(Hylonomus lyelli)",
      image:
        "https://dino-all.ru/wp-content/uploads/2021/11/hylonomus_lyelli_-_muse_flipped-768x664.jpg",
      period: "Каменноугольный период",
      diet: faBug,
    },
    {
      name: "Мозазавр",
      scientificName: "(Mosasaurus)",
      image:
        "https://dino-all.ru/wp-content/uploads/2011/11/illustration-of-a-mosasaurus-sergey-krasovskiy_b9f7-617x400.jpg",
      period: "Меловой период",
      diet: faFishFins,
    },
    {
      name: "Дилофозавр",
      scientificName: "(Dilophosaurus)",
      image: "https://dino-all.ru/wp-content/uploads/2021/11/z-1024x576.jpg",
      period: "Юрский период",
      diet: faDrumstickBite,
    },
  ];

  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = (event) => {
    setSearchTerm(event.target.value);
  };

  return (
    <Container
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-around",
        margin: "0 auto",
        maxWidth: "95%",
      }}
    >
      <FormControl
        type="text"
        placeholder="Поиск"
        className="mt-3 mb-3"
        onChange={handleSearch}
      />
      {dinosaurData
        .filter((dinosaur) =>
          dinosaur.name.toLowerCase().includes(searchTerm.toLowerCase())
        )
        .map((dinosaur, index) => (
          <Card
            key={index}
            className="m-3"
            style={{
              width: "18rem",
              height: "23rem",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <div>
              <Card.Img
                variant="top"
                className="rounded my-2"
                src={dinosaur.image}
              />
            </div>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <div style={{ display: "flex", alignItems: "center" }}>
                <Card.Title>{dinosaur.name}</Card.Title>
                <FontAwesomeIcon icon={dinosaur.diet} className="mx-1" />
              </div>
              <Card.Text>{dinosaur.period}</Card.Text>
            </div>
          </Card>
        ))}
    </Container>
  );
}

export default DinosaurCards;
