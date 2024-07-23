import { Box, Typography, Button, Sheet, Table, Chip } from "@mui/joy";
import { OpenInNew } from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import RegistrarNuevoProducto from "../productos/registrarNuevoProducto";
import { useState } from "react";
import RegistreNuevoClienteModal from "../clientes/registrarNuevoClienteModal";
import FacturasEmitidasOrderList from "./facturasEmitidasOrderList";
import { useNavigate } from "react-router-dom";

const FacturasEmitidasContent = () => {
    const navigate = useNavigate();
    const tableData = [
        {
            id: 1,
            fechaEmision: "2024-07-20",
            nitReceptor: "900123456",
            razonSocialReceptor: "Comercial ABC S.A.S.",
            monto: "$ 10.000.000 COP",
            estadoDIAN: "Aprobado",
            validacionDIAN: true
        },
        {
            id: 2,
            fechaEmision: "2024-07-18",
            nitReceptor: "900654321",
            razonSocialReceptor: "Servicios XYZ Ltda.",
            monto: "$ 5.000.000 COP",
            estadoDIAN: "Pendiente",
            validacionDIAN: false
        },
        {
            id: 3,
            fechaEmision: "2024-07-15",
            nitReceptor: "901234567",
            razonSocialReceptor: "Distribuciones LMN S.A.",
            monto: "$ 8.000.000 COP",
            estadoDIAN: "Aprobado",
            validacionDIAN: true
        },
        {
            id: 4,
            fechaEmision: "2024-07-10",
            nitReceptor: "901876543",
            razonSocialReceptor: "Alimentos PQR S.A.S.",
            monto: "$ 12.000.000 COP",
            estadoDIAN: "Pendiente",
            validacionDIAN: false
        }
    ];
    const [openCrearproducto, setOpenCrearproducto] = useState(false);
    const handleClickOopenCrearproducto = () => {
        setOpenCrearproducto(true);
    };
    const [openNuevoCliente, setOpenNuevoCliente] = useState(false);
    return (
        <>
            <Box sx={{ display: "flex", gap: 1 }}>
                <Button onClick={() => (navigate("/nueva_factura"))}>
                    Nueva factura
                </Button>
                <Button variant="outlined" onClick={handleClickOopenCrearproducto}>
                    Nuevo producto
                </Button>
                <RegistrarNuevoProducto openCrearProducto={openCrearproducto} setOpenCrearProducto={setOpenCrearproducto} />
                <Button variant="outlined" onClick={() => (setOpenNuevoCliente(true))}>
                    Nueva cliente
                </Button>
                <RegistreNuevoClienteModal openNuevoCliente={openNuevoCliente} setOpenNuevoCliente={setOpenNuevoCliente} />
            </Box>
            <Sheet
                className="OrderTableContainer"
                variant="outlined"
                sx={{
                    width: "100%",
                    borderRadius: "sm",
                    flexShrink: 1,
                    overflow: "auto",
                    minHeight: 0,
                    display: { xs: 'none', sm: 'block' }
                }}
            >
                <Table
                    aria-labelledby="tableTitle"
                    stickyHeader
                    hoverRow
                    sx={{
                        "--TableCell-headBackground":
                            "var(--joy-palette-background-level1)",
                        "--Table-headerUnderlineThickness": "1px",
                        "--TableRow-hoverBackground":
                            "var(--joy-palette-background-level1)",
                        "--TableCell-paddingY": "10px",
                        "--TableCell-paddingX": "20px",
                    }}
                >
                    <thead>
                        <tr>
                            <th>Fecha emisión</th>
                            <th>Nit receptor</th>
                            <th>Razón social receptor</th>
                            <th>Monto</th>
                            <th>Estado DIAN</th>
                            <th>Validación DIAN</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.fechaEmision}</td>
                                <td>{row.nitReceptor}</td>
                                <td>{row.razonSocialReceptor}</td>
                                <td>{row.monto}</td>
                                <td>
                                    <Chip
                                        color={row.estadoDIAN === "Aprobado" ? "success" : "danger"}
                                        size="md"
                                        variant="soft"
                                    >
                                        {row.estadoDIAN}
                                    </Chip>
                                </td>
                                <td>

                                    {(row.validacionDIAN) ? (
                                        <Typography color="success">
                                            <CheckCircleIcon />
                                        </Typography>

                                    ) : (
                                        <Typography color="danger">
                                            <ErrorOutlineIcon />
                                        </Typography>
                                    )}
                                    {row.validacionDIAN}
                                </td>
                                <td>
                                    <Button
                                        color="primary"
                                        size="sm"
                                        variant="plain"
                                        startDecorator={<OpenInNew />}
                                    >
                                        Ver
                                    </Button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </Table>
            </Sheet>
            <FacturasEmitidasOrderList />
        </>
    );
}

export default FacturasEmitidasContent;