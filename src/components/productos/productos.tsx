import { Box, Button, Chip, Sheet, Table, Typography } from "@mui/joy";
import { useState } from "react";
import RegistrarNuevoProducto from "./registrarNuevoProducto";
import { OpenInNew } from "@mui/icons-material";
import CheckCircleIcon from '@mui/icons-material/CheckCircle';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import OrderListProductos from "./productosList";

export const ProductosContent = () => {
    const [openCrearproducto, setOpenCrearproducto] = useState(false);
    const handleClickOopenCrearproducto = () => {
        setOpenCrearproducto(true);
    };
    const tableData = [
        {
            id: 1,
            codigo: "P001",
            nombre: "Producto A",
            unidadMedida: "NIU",
            precioUnitario: '$ 2.000 COP',
            iva: 19,
            inc: 8,
            estadoInterno: "Activo",
            estadoDIAN: "Aprobado",
            validadoDIAN: true,
            fechaCreacion: "2024-07-20"
        },
        {
            id: 2,
            codigo: "P002",
            nombre: "Producto B",
            unidadMedida: "NIU",
            precioUnitario: '$ 2.000 COP',
            iva: 19,
            inc: 8,
            estadoInterno: "Inactivo",
            estadoDIAN: "Pendiente",
            validadoDIAN: false,
            fechaCreacion: "2024-07-18"
        },
        {
            id: 3,
            codigo: "P003",
            nombre: "Producto C",
            unidadMedida: "NIU",
            precioUnitario: '$ 3.500 COP',
            iva: 19,
            inc: 10,
            estadoInterno: "Activo",
            estadoDIAN: "Aprobado",
            validadoDIAN: true,
            fechaCreacion: "2024-07-22"
        },
        {
            id: 4,
            codigo: "P004",
            nombre: "Producto D",
            unidadMedida: "NIU",
            precioUnitario: '$ 5.000 COP',
            iva: 19,
            inc: 12,
            estadoInterno: "Inactivo",
            estadoDIAN: "Pendiente",
            validadoDIAN: false,
            fechaCreacion: "2024-07-15"
        }
    ];

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Button onClick={handleClickOopenCrearproducto}>
                    Nuevo producto
                </Button>
            </Box>
            <RegistrarNuevoProducto openCrearProducto={openCrearproducto} setOpenCrearProducto={setOpenCrearproducto} />
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
                            <th>Código</th>
                            <th>Nombre</th>
                            <th>U/M</th>
                            <th>Precio unitario</th>
                            <th>IVA</th>
                            <th>INC</th>
                            <th>Estado interno</th>
                            <th>Estado DIAN</th>
                            <th>Validado DIAN</th>
                            <th>Fecha creación</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {tableData.map((row) => (
                            <tr key={row.id}>
                                <td>{row.codigo}</td>
                                <td>{row.nombre}</td>
                                <td>{row.unidadMedida}</td>
                                <td>{row.precioUnitario}</td>
                                <td>{row.iva}%</td>
                                <td>{row.inc}%</td>
                                <td>
                                    <Chip
                                        color={row.estadoInterno === "Activo" ? "success" : "danger"}
                                        size="md"
                                        variant="soft"
                                    >
                                        {row.estadoInterno}
                                    </Chip>
                                </td>
                                <td>{row.estadoDIAN}</td>
                                <td>

                                    {(row.validadoDIAN) ? (
                                        <Typography color="success">
                                            <CheckCircleIcon />
                                        </Typography>

                                    ) : (
                                        <Typography color="danger">
                                            <ErrorOutlineIcon />
                                        </Typography>
                                    )}
                                    {row.validadoDIAN}
                                </td>
                                <td>{row.fechaCreacion}</td>
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
            <OrderListProductos />
        </>
    );
};


export default ProductosContent;