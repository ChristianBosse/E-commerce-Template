import { useGetProductsQuery } from "../../slices/productsApiSlice";
import { Row, Col } from "react-bootstrap";
import Products from "../../components/Products";
import Loader from "../../components/Loader";
import Message from "../../components/Message";

const Home = () => {
    const { data: products, isLoading, error } = useGetProductsQuery();

    return (
        <>
            {isLoading ? (
                <Loader />
            ) : error ? (
                <Message variant="danger">
                    {error?.data?.message || error.error}
                </Message>
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
