import Box from '@mui/joy/Box';
import Card from '@mui/joy/Card';
import Typography from '@mui/joy/Typography';
import Link from '@mui/joy/Link';
import { SparkLineChart } from '@mui/x-charts';

const data = {
    facturas: { value: 1200, chartData: [5, 10, 15, 5, 25, 30, 35, 40], color: '#FF5722' },
    productos: { value: 340, chartData: [3, 2, 9, 12, 15, 5, 21, 24], color: '#4CAF50' },
    clientes: { value: 150, chartData: [2, 4, 3, 8, 4, 12, 14, 16], color: '#03A9F4' }
};

const FacturadorContent = () => {
    return (
        <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
            <InfoCard
                title="Facturas electrónicas de venta"
                value={data.facturas.value}
                chartData={data.facturas.chartData}
                color={data.facturas.color}
                action={'Generar nuevo documento'}
                href="/facturas"
            />
            <InfoCard
                title="Productos registrados"
                value={data.productos.value}
                chartData={data.productos.chartData}
                color={data.productos.color}
                action="Registrar nuevo producto"
                href="/productos"
            />
            <InfoCard
                title="Clientes"
                value={data.clientes.value}
                chartData={data.clientes.chartData}
                color={data.clientes.color}
                action="Registrar nuevo cliente"
                href="/clientes"
            />
        </Box>
    );
}

const InfoCard = ({ title, value, href, action, chartData, color }: any) => {
    return (
        <Card variant="outlined" sx={{ minWidth: '250px', flex: 1, boxShadow: 'sm' }}>
            <Typography level="h4" component="div">
                {title}
            </Typography>
            <Box sx={{ flexGrow: 1 }}>
                <SparkLineChart data={chartData} height={80} sx={{color:color}} />
            </Box>
            <Typography level="h2" component="div" sx={{ mt: 2, textAlign:"center"}}>
                {value}
            </Typography>
            <Link href={href} sx={{ mt: 2, fontWeight:"lg", display:"flex", justifyContent:"center", textAlign:"center"}}>
                {action}
            </Link>
        </Card>
    );
}

export default FacturadorContent;