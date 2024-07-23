import { Box, Button, Checkbox, CircularProgress, Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { FormControl, Grid, InputLabel, ListItemText, MenuItem, OutlinedInput, Select, TextField } from "@mui/material";
import { FC, useState } from "react";
import inputVariants from "../shared/inputVariants";
import NotificacionCreacionProducto from "./productoCreadoNotificacion";
import React from "react";

interface PropsRegistreNuevoProducto {
    openCrearProducto: boolean,
    setOpenCrearProducto: React.Dispatch<React.SetStateAction<boolean>>
}
const RegistrarNuevoProducto: FC<PropsRegistreNuevoProducto> = ({ openCrearProducto, setOpenCrearProducto }) => {

    const [nuevoProducto, setNuevoProducto] = useState({
        codigoProducto: "",
        nombreProducto: "",
        precioUnitario: "",
        excluido: false,
        exento: false,
        muestraGratis: false,
        iva: 'na',
        inc: 'na',
        otrosImpuestos: ''
    });

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setNuevoProducto({
            ...nuevoProducto,
            [name]: value,
        });
    };

    const [loading, setLoading] = useState(false);
    const [openNotification, setOpenNotification] = useState(false);
    const handleAgregarProducto = () => {
        setLoading(true);
        setTimeout(() => {
            setOpenCrearProducto(false);
            setOpenNotification(true);
            setLoading(false);
        }, 3000);
    }
    const names = [
        'Oliver Hansen',
        'Van Henry',
        'April Tucker',
        'Ralph Hubbard',
        'Omar Alexander',
        'Carlos Abbott',
        'Miriam Wagner',
        'Bradley Wilkerson',
        'Virginia Andrews',
        'Kelly Snyder',
    ];
    const ITEM_HEIGHT = 48;
    const ITEM_PADDING_TOP = 8;
    const MenuProps = {
        PaperProps: {
            style: {
                maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
                width: 250,
            },
        },
    };
    const [personName, setPersonName] = React.useState<string[]>([]);
    return (
        <>
            {(loading) ? (
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={openCrearProducto}
                    onClose={() => setOpenCrearProducto(false)}
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
                    open={openCrearProducto}
                    onClose={() => setOpenCrearProducto(false)}
                    sx={{ display: 'flex', justifyContent: 'center', alignItems: { xs: "center", sm: "center" } }}
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
                            Registrar nuevo producto
                        </Typography>
                        <Box>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Código de producto"
                                        name="codigoProducto"
                                        value={nuevoProducto.codigoProducto}
                                        onChange={handleChange}
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Nombre producto"
                                        name="nombreProducto"
                                        value={nuevoProducto.nombreProducto}
                                        onChange={handleChange}
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={6}>
                                    <TextField
                                        label="Precio unitario"
                                        name="precioUnitario"
                                        value={nuevoProducto.precioUnitario}
                                        onChange={handleChange}
                                        type="number"
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <Grid container>
                                        <Grid item xs={4} sx={{ display: "flex" }}>
                                            <Checkbox
                                                name="excluido"
                                                label="Excluido"
                                                variant="outlined"
                                                checked={nuevoProducto.excluido}
                                                onChange={(event) => {
                                                    setNuevoProducto({
                                                        ...nuevoProducto,
                                                        excluido: event.target.checked
                                                    });
                                                }} />
                                        </Grid>
                                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "center" }}>
                                            <Checkbox
                                                name="exento"
                                                label="Exento"
                                                variant="outlined"
                                                checked={nuevoProducto.exento}
                                                onChange={(event) => {
                                                    setNuevoProducto({
                                                        ...nuevoProducto,
                                                        exento: event.target.checked
                                                    });
                                                }} />
                                        </Grid>
                                        <Grid item xs={4} sx={{ display: "flex", justifyContent: "right" }}>
                                            <Checkbox
                                                name="muestraGratis"
                                                label="Muestra gratis"
                                                variant="outlined"
                                                checked={nuevoProducto.muestraGratis}
                                                onChange={(event) => {
                                                    setNuevoProducto({
                                                        ...nuevoProducto,
                                                        muestraGratis: event.target.checked
                                                    });
                                                }} />
                                        </Grid>
                                    </Grid>
                                </Grid>
                                {(!nuevoProducto.excluido) && (
                                    <>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                                <InputLabel id="identification-type-label" size="small">IVA</InputLabel>
                                                <Select
                                                    label="INC"
                                                    size="small"
                                                    name="pais"
                                                    sx={inputVariants}
                                                >
                                                    <MenuItem value="1">No aplica</MenuItem>
                                                    <MenuItem value="1">8 %</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                                <InputLabel id="identification-type-label" size="small">INC</InputLabel>
                                                <Select
                                                    label="INC"
                                                    size="small"
                                                    name="pais"
                                                    sx={inputVariants}
                                                >
                                                    <MenuItem value="1">No aplica</MenuItem>
                                                    <MenuItem value="1">8 %</MenuItem>
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                        <Grid item xs={12} md={6}>
                                            <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                                <InputLabel id="demo-multiple-checkbox-label" size="small">Otros impuestos</InputLabel>
                                                <Select
                                                    label="Otros impuestos"
                                                    size="small"
                                                    name="pais"
                                                    sx={inputVariants}
                                                    multiple
                                                    value={personName}
                                                    onChange={handleChange}
                                                    input={<OutlinedInput label="Otros impuestos" />}
                                                    renderValue={(selected) => selected.join(', ')}
                                                    MenuProps={MenuProps}
                                                >
                                                    {names.map((name) => (
                                                        <MenuItem key={name} value={name}>
                                                            <Checkbox checked={personName.indexOf(name) > -1} />
                                                            <ListItemText primary={name} />
                                                        </MenuItem>
                                                    ))}
                                                </Select>
                                            </FormControl>
                                        </Grid>
                                    </>
                                )}
                            </Grid>
                            <Box mt={2} sx={{ display: "flex", justifyContent: "right" }}>
                                <Button variant="outlined" color="danger" sx={{ mr: 1 }} onClick={() => (setOpenCrearProducto(false))}>
                                    Cancelar
                                </Button>
                                <Button onClick={() => (handleAgregarProducto())}>
                                    Agregar
                                </Button>
                            </Box>
                        </Box>
                    </Sheet>
                </Modal >
            )}
            <NotificacionCreacionProducto openNotificacion={openNotification} setOpenNotificacion={setOpenNotification} />
        </>
    );
}

export default RegistrarNuevoProducto;