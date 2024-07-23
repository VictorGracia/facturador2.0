import * as React from 'react';
import Button from '@mui/joy/Button';
import Snackbar from '@mui/joy/Snackbar';
import PlaylistAddCheckCircleRoundedIcon from '@mui/icons-material/PlaylistAddCheckCircleRounded';
import { useMediaQuery, useTheme } from '@mui/material';

interface PropsCreationProductoSuccesNotificacion {
    openNotificacion: boolean,
    setOpenNotificacion: React.Dispatch<React.SetStateAction<boolean>>
}
const NotificacionCreacionProducto: React.FC<PropsCreationProductoSuccesNotificacion> = ({ openNotificacion, setOpenNotificacion }) => {
    React.useEffect(() => {
        setTimeout(() => {
            setOpenNotificacion(false)
        }, 5000);
    });
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('sm'));
    return (
        <React.Fragment>
            <Snackbar
                variant="soft"
                color="success"
                open={openNotificacion}
                onClose={() => setOpenNotificacion(false)}
                anchorOrigin={{ vertical: 'bottom', horizontal: isMobile ? 'center' : 'right' }}
                startDecorator={<PlaylistAddCheckCircleRoundedIcon />}
                endDecorator={
                    <Button
                        onClick={() => setOpenNotificacion(false)}
                        size="sm"
                        variant="soft"
                        color="success"
                    >
                        Cerrar
                    </Button>
                }
            >
                Se ha creado el producto exitosamente.
            </Snackbar>
        </React.Fragment>
    );
}

export default NotificacionCreacionProducto;