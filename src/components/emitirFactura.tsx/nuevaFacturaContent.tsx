import { Search } from "@mui/icons-material";
import { Box, Card, Checkbox, Input, Table, Typography, IconButton, Button } from "@mui/joy";
import { FormControl, Grid, InputLabel, MenuItem, Select, TextField } from "@mui/material";
import inputVariants from "../shared/inputVariants";
import { useState } from "react";
import DeleteIcon from '@mui/icons-material/Delete';

const NuevaFacturaContent = () => {
    const [datosReceptor, setDatosReceptor] = useState({
        razonSocial: "",
        tipoIdentificacion: "",
        numeroIdentificacion: "",
        emailDian: "",
        emailAlternativo: "",
        consumidorFinal: false
    });

    const [productos, setProductos] = useState([
        {
            codigo: "001",
            nombre: "Producto 1",
            precioUnitario: '$100.000 COP',
            iva: '19%',
            inc: '8%',
            otrosImpuestos: 'N/A',
            cantidad: 1,
            descuento: '0%'
        }
    ]);

    const handleChange = (event: any) => {
        const { name, value } = event.target;
        setDatosReceptor({
            ...datosReceptor,
            [name]: value,
        });
    };

    const handleRemoveProduct = (index: number) => {
        setProductos(productos.filter((_, i) => i !== index));
    };

    return (
        <Box>
            <Card>
                <Typography level="h4">
                    Datos receptor
                </Typography>
                <Box>
                    <Grid container spacing={2} sx={{ alignItems: "center" }} mb={3}>
                        <Grid item xs={12} md={3}>
                            <Input
                                type="text"
                                startDecorator={<Search fontSize="small" />}
                                placeholder="Buscar cliente"
                            />
                        </Grid>
                        <Grid item xs={12} md={9} display={"flex"}>
                            <Checkbox
                                name="Consumidor final"
                                label="Consumidor final"
                                variant="outlined"
                                checked={datosReceptor.consumidorFinal}
                                onChange={(event) => {
                                    setDatosReceptor({
                                        ...datosReceptor,
                                        consumidorFinal: event.target.checked
                                    });
                                }} />
                        </Grid>
                    </Grid>
                </Box>
                <Box>
                    <Grid container spacing={2}>
                        {(!datosReceptor.consumidorFinal) ? (
                            <>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        label="Razón social"
                                        name="razonSocial"
                                        value={datosReceptor.razonSocial}
                                        onChange={handleChange}
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Tipo identificación</InputLabel>
                                        <Select
                                            label="Tipo identificación"
                                            size="small"
                                            name="tipoIdentificacion"
                                            sx={inputVariants}
                                            value={datosReceptor.tipoIdentificacion}
                                            onChange={handleChange}
                                        >
                                            <MenuItem value="1">NIT</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        label="Número identificación"
                                        name="numeroIdentificacion"
                                        value={datosReceptor.numeroIdentificacion}
                                        onChange={handleChange}
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        label="Email DIAN"
                                        name="emailDian"
                                        value={datosReceptor.emailDian}
                                        onChange={handleChange}
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        label="Email alternativo"
                                        name="emailAlternativo"
                                        value={datosReceptor.emailAlternativo}
                                        onChange={handleChange}
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                            </>
                        ) : (
                            <>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        label="Razón social"
                                        name="razonSocial"
                                        value={"CONSUMIDOR FINAL"}
                                        disabled
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <FormControl fullWidth sx={{ textAlign: 'left' }}>
                                        <InputLabel id="identification-type-label" size="small">Tipo identificación</InputLabel>
                                        <Select
                                            label="Tipo identificación"
                                            size="small"
                                            name="tipoIdentificacion"
                                            sx={inputVariants}
                                            value={"13"}
                                            disabled
                                        >
                                            <MenuItem value="1">NIT</MenuItem>
                                            <MenuItem value="13">Cédula de ciudadanía</MenuItem>
                                        </Select>
                                    </FormControl>
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        label="Número identificación"
                                        name="numeroIdentificacion"
                                        value={"222222222222"}
                                        disabled
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={3}>
                                    <TextField
                                        label="Email"
                                        name="emailAlternativo"
                                        value={datosReceptor.emailAlternativo}
                                        onChange={handleChange}
                                        size="small"
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                            </>
                        )}
                    </Grid>
                </Box>
            </Card>
            <Card sx={{ mt: 3, display: { xs: 'none', sm: 'block' } }}>
                <Typography level="h4">
                    Datos de venta
                </Typography>
                <Grid container spacing={2} sx={{ alignItems: "center" }} mb={3} pt={3}>
                    <Grid item xs={12} md={3}>
                        <Input
                            type="text"
                            startDecorator={<Search fontSize="small" />}
                            placeholder="Buscar producto"
                        />
                    </Grid>
                </Grid>
                <Box>
                    <Grid container>
                        <Table aria-label="basic table" borderAxis="yBetween">
                            <thead>
                                <tr>
                                    <th>Código</th>
                                    <th>Nombre</th>
                                    <th>Precio unitario</th>
                                    <th>IVA</th>
                                    <th>INC</th>
                                    <th>Otros impuestos</th>
                                    <th>Cantidad</th>
                                    <th>Descuento</th>
                                    <th>Opciones</th>
                                    <th>Total</th>
                                </tr>
                            </thead>
                            <tbody>
                                {productos.map((producto, index) => (
                                    <tr key={index}>
                                        <td>{producto.codigo}</td>
                                        <td>{producto.nombre}</td>
                                        <td>{producto.precioUnitario}</td>
                                        <td>{producto.iva}</td>
                                        <td>{producto.inc}</td>
                                        <td>{producto.otrosImpuestos}</td>
                                        <td>
                                            <TextField
                                                size="small"
                                                value={3}
                                                fullWidth
                                                sx={inputVariants}

                                            />
                                        </td>
                                        <td>
                                            <TextField
                                                name="telefono"
                                                value={producto.descuento}
                                                size="small"
                                                fullWidth
                                                sx={inputVariants}

                                            />
                                        </td>
                                        <td>
                                            <IconButton
                                                onClick={() => handleRemoveProduct(index)}
                                                color="danger"
                                            >
                                                <DeleteIcon />
                                            </IconButton>
                                        </td>
                                        <td>$300.000 COP</td>
                                    </tr>
                                ))}
                            </tbody>
                        </Table>
                    </Grid>
                </Box>
            </Card>
            <Card sx={{ mt: 3, display: { xs: 'block', sm: 'none' } }}>
                <Typography level="h4">
                    Datos de venta
                </Typography>
                <Grid container spacing={2} sx={{ alignItems: "center" }} mb={3}>
                    <Grid item xs={12} md={3}>
                        <Input
                            type="text"
                            startDecorator={<Search fontSize="small" />}
                            placeholder="Buscar producto"
                        />
                    </Grid>
                </Grid>
                <Box>
                    {productos.map((producto, index) => (
                        <Card key={index} sx={{ mb: 2, p: 2 }}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        Código:
                                    </Typography>
                                    <Typography>{producto.codigo}</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        Nombre:
                                    </Typography>
                                    <Typography>{producto.nombre}</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        Precio unitario:
                                    </Typography>
                                    <Typography>{producto.precioUnitario}</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        IVA:
                                    </Typography>
                                    <Typography>{producto.iva}</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        INC:
                                    </Typography>
                                    <Typography>{producto.inc}</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        Otros impuestos:
                                    </Typography>
                                    <Typography>{producto.otrosImpuestos}</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        Cantidad:
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={producto.cantidad}
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        Descuento:
                                    </Typography>
                                    <TextField
                                        size="small"
                                        value={producto.descuento}
                                        fullWidth
                                        sx={inputVariants}
                                    />
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <Typography level="body-md" sx={{ fontWeight: 'bold' }}>
                                        Total:
                                    </Typography>
                                    <Typography>$300.000 COP</Typography>
                                </Grid>
                                <Grid item xs={12} md={4}>
                                    <IconButton
                                        onClick={() => handleRemoveProduct(index)}
                                        color="danger"
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Card>
                    ))}
                </Box>
            </Card>

            <Box mt={3} display={"flex"} sx={{ justifyContent: "right" }}>
                <Button>
                    Generar documento
                </Button>
            </Box>
        </Box>
    );
}

export default NuevaFacturaContent;
