import { OpenInNew } from "@mui/icons-material";
import { Box, Button, Chip, Sheet, Table } from "@mui/joy";
import { useState } from "react";
import OrderList from "../productos/productosList";
import RegistreNuevoClienteModal from "./registrarNuevoClienteModal";

type TableRow = {
    id: string;
    tipoIdentificacion: string;
    numeroIdentificacion: string;
    razonSocial: string | null;
    email: string;
    telefono: string;
    estado: string;
    fechaCreacion: string;
};

const ClientesContent = () => {
    const [openNuevoCliente, setOpenNuevoCliente] = useState(false);
    const tableRowsData = [
        {
            id: "1",
            tipoIdentificacion: "CC",
            numeroIdentificacion: "1234567890",
            razonSocial: "Juan Pérez",
            email: "juan.perez@example.com",
            telefono: "123-456-7890",
            estado: "Activo",
            fechaCreacion: "2024-06-19"
        },
        {
            id: "2",
            tipoIdentificacion: "NIT",
            numeroIdentificacion: "9876543210",
            razonSocial: "Empresa XYZ",
            email: "contacto@empresa.xyz",
            telefono: "098-765-4321",
            estado: "Inactivo",
            fechaCreacion: "2024-01-01"
        },
        {
            id: "3",
            tipoIdentificacion: "CE",
            numeroIdentificacion: "4561237890",
            razonSocial: "Ana Gómez",
            email: "ana.gomez@example.com",
            telefono: "321-654-9870",
            estado: "Activo",
            fechaCreacion: "2023-12-15"
        },
        {
            id: "4",
            tipoIdentificacion: "P",
            numeroIdentificacion: "A1234567",
            razonSocial: "Carlos Rodríguez",
            email: "carlos.rodriguez@example.com",
            telefono: "234-567-8901",
            estado: "Inactivo",
            fechaCreacion: "2023-11-20"
        },
        {
            id: "5",
            tipoIdentificacion: "NIT",
            numeroIdentificacion: "1122334455",
            razonSocial: "Compañía ABC",
            email: "info@companiaabc.com",
            telefono: "567-890-1234",
            estado: "Activo",
            fechaCreacion: "2024-05-10"
        }
    ];
    const [tableData, setTableData] = useState<TableRow[]>(tableRowsData);
    
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Button onClick={() => (setOpenNuevoCliente(true))}>
                    Nuevo cliente
                </Button>
                <RegistreNuevoClienteModal openNuevoCliente={openNuevoCliente} setOpenNuevoCliente={setOpenNuevoCliente}/>
            </Box>
            <>
                <Sheet
                    className="OrderTableContainer"
                    variant="outlined"
                    sx={{
                        width: "100%",
                        borderRadius: "sm",
                        flexShrink: 1,
                        overflow: "auto",
                        minHeight: 0,
                        display:{xs: 'none', sm:'block'}
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
                                <th>Tipo de documento</th>
                                <th>Número de documento</th>
                                <th>Razón social</th>
                                <th>Email</th>
                                <th>Teléfono</th>
                                <th>Estado</th>
                                <th>Fecha creación</th>
                                <th>Acciones</th>
                            </tr>
                        </thead>
                        <tbody>
                            {tableData.map((row) => (
                                <tr key={row.id}>
                                    <td>{row.tipoIdentificacion}</td>
                                    <td>{row.numeroIdentificacion}</td>
                                    <td>{row.razonSocial}</td>
                                    <td style={{ overflow: "hidden", textOverflow: "ellipsis" }}>{row.email}</td>
                                    <td>{row.telefono}</td>
                                    <td>

                                        <Chip color={row.estado === "Activo" ? "success" : "danger"} size="md" variant="soft">
                                            {row.estado}
                                        </Chip>
                                    </td>
                                    <td>{row.fechaCreacion}</td>
                                    <td>
                                        <Button
                                            // onClick={() =>
                                            //     redirectToDetalleVinculacion(row.id, row.rfc)
                                            // }
                                            color="primary"
                                            size="sm"
                                            variant="plain"
                                            startDecorator={<OpenInNew />}
                                        >
                                        </Button>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </Table>
                </Sheet>
                <OrderList />
            </>
        </>
    );
}


export default ClientesContent;
