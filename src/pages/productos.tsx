import Layout from "../components/layout/layout";
import ProductosContent from "../components/productos/productos";

const ProductosPage = () => {
    return (
        <>
            <Layout page={"productos"}>
                <ProductosContent />
            </Layout>
        </>
    );
} 

export default ProductosPage;