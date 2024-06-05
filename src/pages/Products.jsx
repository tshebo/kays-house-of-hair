import React, { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import CollectionPreview from "../components/CollectiosPreview.jsx";
import ProductCard from "../components/ProductCard.jsx";
import { getCollections } from "../helpers/Collections.js";
import "../assets/ProductCard.css";

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
    <Container >
      <h1 className="d-flex justify-content-center my-4">Products</h1>
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
        <div>
          <button onClick={handleBackClick} >Back to Collections</button>
          <h2>{selectedCollection.name}</h2>
          <Row>
            {selectedCollection.catalogue.map((item) => (
              <Col key={item.name} lg={4} md={6} sm={12}>
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
