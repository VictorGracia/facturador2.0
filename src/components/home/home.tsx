import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';

const data = {
    facturas: 1200,
    productos: 340,
    clientes: 150
};

const HomeContent = () => {
    return (
        <>
        <Typography level='h1'>
            ¡Bienvenido a nuestro Facturador!
        </Typography>
        </>
    );
}

const InfoCard = ({ title, value, href, action }: any) => {
    return (
        <Card variant="outlined" sx={{ minWidth: '250px', flex: 1, boxShadow:'lg'}}>
            <Typography level="h4" component="div">
                {title}
            </Typography>
            <Typography level="h3" component="div" sx={{ mt: 2 }}>
                {value}
            </Typography>
            <Link href={href} sx={{ mt: 2 }}> 
                {action}
            </Link>
        </Card>
    );
}

export default HomeContent;
