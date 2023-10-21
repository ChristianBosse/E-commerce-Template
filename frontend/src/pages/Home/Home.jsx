import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products";

const Home = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
        <>
            {isLoading ? (
                <h2>Loading...</h2>
            ) : error ? (
                <div>{error?.data?.message || error.error}</div>
            ) : (
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
            )}
        </>
    );
};

export default Home;
