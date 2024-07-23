import { OpenInNew } from "@mui/icons-material";
import { Box, Button, Card, Chip, CircularProgress, Modal, ModalClose, Sheet, Table, Typography } from "@mui/joy";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import { FC, useState } from "react";
import OrderList from "../productos/productosList";
import inputVariants from "../shared/inputVariants";
import NotificacionCreacionCliente from "./clienteCreadoNotification";

interface PropsRegistreNuevoCliente {
    openNuevoCliente: boolean,
    setOpenNuevoCliente: React.Dispatch<React.SetStateAction<boolean>>
}
const RegistreNuevoClienteModal: FC<PropsRegistreNuevoCliente> = ({ openNuevoCliente, setOpenNuevoCliente }) => {
    const [openNotification, setOpenNotification] = useState(false);
    const [loading, setLoading] = useState(false);

    const handleAgregarCliente = () => {
        setLoading(true);
        setTimeout(() => {
            setOpenNuevoCliente(false);
            setOpenNotification(true);
            setLoading(false);
        }, 3000);
    }

    return (
        <>

            {(loading) ? (
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={openNuevoCliente}
                    onClose={() => setOpenNuevoCliente(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: "center", sm: "center" } }}
                >
                    <Sheet
                        variant="outlined"
                        sx={{
                            width: 200,
                            height: 200,
                            borderRadius: 'md',
                            boxShadow: 'lg',
                            overflow: "scroll"
                        }}
                    >
                        <Box sx={{ width: 200, height: 200, display: "flex", justifyContent: 'center', alignItems: 'center' }}>
                            <CircularProgress />
                        </Box>
                    </Sheet>
                </Modal>
            ) : (
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={openNuevoCliente}
                    onClose={() => setOpenNuevoCliente(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: "top", sm: "center" } }}
                >
                    <Sheet
                        variant="outlined"
                        sx={{
                            width: { xs: '90%', sm: '70%', md: '60%', lg: '50%', xl: '50%' },
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                            overflow: "scroll"
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
                                        label="Correo alterno"
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

                                <Grid item xs={12}>
                                    <Card>
                                        <Table aria-label="basic table" borderAxis="yBetween">
                                            <thead>
                                                <tr>
                                                    <th>Rete. IVA</th>
                                                    <th>Rete. ICA</th>
                                                    <th>Rete. Fuente</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                <tr>
                                                    <td>
                                                        <TextField
                                                            name="telefono"
                                                            size="small"
                                                            fullWidth
                                                            sx={inputVariants}
                                                            
                                                        />
                                                    </td>
                                                    <td>
                                                        <TextField
                                                            name="telefono"
                                                            size="small"
                                                            fullWidth
                                                            sx={inputVariants}
                                                        />
                                                    </td>
                                                    <td>
                                                        <TextField
                                                            name="telefono"
                                                            size="small"
                                                            fullWidth
                                                            sx={inputVariants}
                                                        />
                                                    </td>
                                                </tr>

                                            </tbody>
                                        </Table>
                                    </Card>
                                </Grid>

                            </Grid>
                            <Box mt={2} sx={{ display: "flex", justifyContent: "right" }}>
                                <Button variant="outlined" color="danger" sx={{ mr: 1 }} onClick={() => (setOpenNuevoCliente(false))}>
                                    Cancelar
                                </Button>
                                <Button onClick={() => (handleAgregarCliente())}>
                                    Agregar
                                </Button>
                            </Box>
                        </Box>
                    </Sheet>
                </Modal >
            )}
            <NotificacionCreacionCliente openNotificacion={openNotification} setOpenNotificacion={setOpenNotification} />
        </>
    );
}

export default RegistreNuevoClienteModal;