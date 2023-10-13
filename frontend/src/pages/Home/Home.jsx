import React, { useEffect, useState } from "react";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products";

const Home = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        const fetchProducts = async () => {
            fetch("http://localhost:5000/api/products")
                .then((res) => res.json())
                .then((data) => {
                    console.log(data);
                    setProducts(data);
                });
        };

        fetchProducts();
    }, []);

    return (
        <>
            <h1>Latest Products</h1>
            <Row>
                {products.map((product) => (
                    <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
                        <Products product={product} />
                    </Col>
                ))}
            </Row>
        </>
    );
};

export default Home;
