import { Box, Button, IconButton, Modal, ModalClose, Sheet, Typography } from "@mui/joy";
import { FormControl, Grid, InputAdornment, InputLabel, Select, TextField } from "@mui/material";
import { useState } from "react";

export const ProductosContent = () => {
    const [openCrearproducto, setOpenCrearproducto] = useState(false);
    const handleClickOopenCrearproducto = () => {
        setOpenCrearproducto(true);
    };
    const inputVariants = {
        "--TextField-brandBorderColor": "#d4e6ff",
        "& .MuiOutlinedInput-notchedOutline": {
            borderRadius: 1,
        },
        "& .MuiOutlinedInput-input": {
            borderRadius: 1,
        }
    };
    return (
        <>
            <Box sx={{ display: "flex" }}>
                <Button onClick={handleClickOopenCrearproducto}>
                    Nuevo producto
                </Button>
                <Modal
                    aria-labelledby="modal-title"
                    aria-describedby="modal-desc"
                    open={openCrearproducto}
                    onClose={() => setOpenCrearproducto(false)}
                    sx={{ zIndex: 10001, display: 'flex', justifyContent: 'center', alignItems: 'center' }}
                >
                    <Sheet
                        variant="outlined"
                        sx={{
                            borderRadius: 'md',
                            p: 3,
                            boxShadow: 'lg',
                        }}
                    >
                        <ModalClose variant="plain" sx={{ m: 1 }} />
                        <Typography
                            component="h2"
                            id="modal-title"
                            level="h4"
                            textColor="inherit"
                            fontWeight="lg"
                            mb={1}
                        >
                            Registrar nueva producto
                        </Typography>
                        <Grid item xs={12} md={6} lg={4} p={1}>
                            <TextField
                                label="Precio de compra"
                                size="small"
                                fullWidth
                                name="rfc"
                                sx={inputVariants}
                            />
                        </Grid>
                    </Sheet>
                </Modal>
            </Box>
        </>
    );
};


export default ProductosContent;