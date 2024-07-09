import { OpenInNew } from "@mui/icons-material";
import { Box, Button, Chip, Modal, ModalClose, Sheet, Table, Typography } from "@mui/joy";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { useState } from "react";
import OrderList from "../productos/productosList";

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

    const inputVariants = {
        "--TextField-brandBorderColor": "#d4e6ff",
        "& .MuiOutlinedInput-notchedOutline": {
            borderColor: "var(--TextField-brandBorderColor)",
            borderRadius: 1,
        },
        "& .MuiOutlinedInput-input": {
            backgroundColor: "#f3f9ff",
            borderRadius: 1,
        }
    };

    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Button onClick={() => (setOpenNuevoCliente(true))}>
                    Nuevo cliente
                </Button>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={openNuevoCliente}
                    onClose={() => setOpenNuevoCliente(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: {xs: "top", sm:"center"}}}
                >
                
                    <Sheet
                        variant="outlined"
                        sx={{
                            width: { xs: '90%', sm: '70%', md: '60%', lg: '50%', xl: '50%' },
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                            overflow:"scroll"
                        }}
                        
                    >
                        <ModalClose variant="plain" sx={{ m: 1 }} />
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            fontWeight="lg"
                            mb={2}
                        >
                            Registrar nuevo cliente
                        </Typography>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Tipo de documento</InputLabel>
                                        <Select
                                            label="Tipo de documento"
                                            size="small"
                                            name="tipoDocumento"
                                            sx={inputVariants}
                                        >
                                            <MenuItem value="1">NIT</MenuItem>
                                            <MenuItem value="2">Cédula de ciudadanía</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Número de documento"
                                        name="numeroDocumento"
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Razón social"
                                        name="razonSocial"
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Tipo de contribuyente</InputLabel>
                                        <Select
                                            label="Tipo de contribuyente"
                                            size="small"
                                            name="tipoContribuyente"
                                            sx={inputVariants}
                                        >
                                            <MenuItem value="1">Persona natural</MenuItem>
                                            <MenuItem value="2">Persona jurídica</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Nombre comercial"
                                        name="nombreComercial"
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Tipo de responsabilidad</InputLabel>
                                        <Select
                                            label="Tipo de responsabilidad"
                                            size="small"
                                            name="tipoResponsabilidad"
                                            sx={inputVariants}
                                        >
                                            <MenuItem value="1">R-99 PN No responsable</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Responsabilidad tributaria</InputLabel>
                                        <Select
                                            label="Responsabilidad tributaria"
                                            size="small"
                                            name="responsabilidadTributaria"
                                            sx={inputVariants}
                                        >
                                            <MenuItem value="1">ZZ No aplica</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">País</InputLabel>
                                        <Select
                                            label="País"
                                            size="small"
                                            name="pais"
                                            sx={inputVariants}
                                        >
                                            <MenuItem value="1">Colombia</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Departamento</InputLabel>
                                        <Select
                                            label="Departamento"
                                            size="small"
                                            name="pais"
                                            sx={inputVariants}
                                        >
                                            <MenuItem value="1">Departamento</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Municipio</InputLabel>
                                        <Select
                                            label="Departamento"
                                            size="small"
                                            name="pais"
                                            sx={inputVariants}
                                        >
                                            <MenuItem value="1">Cundinamarca</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Ciudad</InputLabel>
                                        <Select
                                            label="Departamento"
                                            size="small"
                                            name="pais"
                                            sx={inputVariants}
                                        >
                                            <MenuItem value="1">Zipaquirá</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Dirección"
                                        name="direccion"
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Correo"
                                        name="correo"
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Teléfono"
                                        name="telefono"
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                            </Grid>
                            <Box mt={2} sx={{ display: "flex", justifyContent: "right" }}>
                                <Button variant="outlined" color="danger" sx={{ mr: 1 }}>
                                    Cancelar
                                </Button>
                                <Button>
                                    Agregar
                                </Button>
                            </Box>
                        </Box>
                    </Sheet>
                </Modal>
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
                <OrderList/>
            </>
        </>
    );
}


export default ClientesContent;
