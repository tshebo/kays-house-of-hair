import React, { useState } from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import CollectionPreview from "../components/CollectiosPreview.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getCollections } from "../helpers/Collections.js";
import "../assets/ProductCard.css";
import { RiArrowGoBackFill, RiArrowLeftDoubleFill, RiSendBackward } from "@remixicon/react";

function Products() {
  const collections = getCollections();
  const [selectedCollection, setSelectedCollection] = useState(null);

  const handleCollectionClick = (collection) => {
    setSelectedCollection(collection);
  };

  const handleBackClick = () => {
    setSelectedCollection(null);
  };

  return (
    <Container style={{ backgroundColor: '#f0f0f0', borderRadius: '10px', padding: '20px' }}>
      <h1 className="d-flex justify-content-center my-4">Collections</h1>
      {!selectedCollection ? (
        <Row>
          {collections.map((collection) => (
            <Col key={collection.name} lg={4} md={6} sm={12}>
              <CollectionPreview
                image={collection.image}
                name={collection.name}
                onClick={() => handleCollectionClick(collection)}
              />
            </Col>
          ))}
        </Row>
      ) : (
        <div className="my-4">
          <Button onClick={handleBackClick} variant="danger" className="mb-3">
            <RiArrowLeftDoubleFill   /> Back
          </Button>
          <h2 className="text-center mb-4">{selectedCollection.name}</h2>
          <Row>
            {selectedCollection.catalogue.map((item) => (
              <Col key={item.name} lg={4} md={6} sm={12} className="mb-3">
                <ProductCard
                  image={item.image}
                  name={item.name}
                  price={item.price}
                  length={item.length}
                />
              </Col>
            ))}
          </Row>
        </div>
      )}
    </Container>
  );
}

export default Products;
