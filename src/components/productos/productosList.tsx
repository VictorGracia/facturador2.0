/* eslint-disable jsx-a11y/anchor-is-valid */
import Box from '@mui/joy/Box';
import Avatar from '@mui/joy/Avatar';
import Chip from '@mui/joy/Chip';
import Link from '@mui/joy/Link';
import Divider from '@mui/joy/Divider';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import ListDivider from '@mui/joy/ListDivider';
import Menu from '@mui/joy/Menu';
import MenuButton from '@mui/joy/MenuButton';
import MenuItem from '@mui/joy/MenuItem';
import Dropdown from '@mui/joy/Dropdown';
import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import CategoryIcon from '@mui/icons-material/Category';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

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
        unidadMedida: "Litros",
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
        unidadMedida: "Kilogramos",
        precioUnitario: '$ 5.000 COP',
        iva: 19,
        inc: 12,
        estadoInterno: "Inactivo",
        estadoDIAN: "Pendiente",
        validadoDIAN: false,
        fechaCreacion: "2024-07-15"
    }
];

function RowMenu() {
    return (
        <Dropdown>
            <MenuButton
                slots={{ root: IconButton }}
                slotProps={{ root: { variant: 'plain', color: 'neutral', size: 'sm' } }}
            >
                <MoreHorizRoundedIcon />
            </MenuButton>
            <Menu size="sm" sx={{ minWidth: 140 }}>
                <MenuItem>Editar</MenuItem>
                <Divider />
                <MenuItem color="danger">Delete</MenuItem>
            </Menu>
        </Dropdown>
    );
}

const OrderListProductos = () => {
    return (
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            {tableData.map((listItem) => (
                <List
                    key={listItem.id}
                    size="sm"
                    sx={{
                        '--ListItem-paddingX': 0,
                    }}
                >
                    <ListItem
                        sx={{
                            display: 'flex',
                            justifyContent: 'space-between',
                            alignItems: 'start',
                        }}
                    >
                        <ListItemContent sx={{ display: 'flex', gap: 2, alignItems: 'start' }}>
                            <ListItemDecorator>
                                <Avatar size="md">
                                    <CategoryIcon />
                                </Avatar>
                            </ListItemDecorator>
                            <div>
                                <Typography fontWeight={600} gutterBottom>
                                    {listItem.nombre} - {listItem.codigo}
                                </Typography>
                                <Typography level="body-xs" gutterBottom>
                                    {listItem.precioUnitario} | IVA {listItem.iva} % | INC {listItem.inc} | Creado {listItem.fechaCreacion}
                                </Typography>
                                <Typography level="body-xs" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Validado DIAN
                                    {(listItem.validadoDIAN) ? (
                                        <CheckCircleIcon color='success' sx={{ fontSize: '12px' }} />
                                    ) : (
                                        <ErrorOutlineIcon color='error' sx={{ fontSize: '12px' }} />
                                    )}

                                    | Estado interno
                                    <Chip
                                        color={listItem.estadoInterno === "Activo" ? "success" : "danger"}
                                        size="sm"
                                        variant="soft"
                                    >
                                        {listItem.estadoInterno}
                                    </Chip>
                                </Typography>

                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <Link level="body-sm" component="button">
                                        Download
                                    </Link>
                                    <RowMenu />
                                </Box>
                            </div>
                        </ListItemContent>
                        {/* <Chip
                            variant="soft"
                            size="sm"
                            color={listItem.estado === "Activo" ? "success" : "danger"}>
                            {listItem.estado}
                        </Chip> */}
                    </ListItem>
                    <ListDivider />
                </List>
            ))}
            <Box
                className="Pagination-mobile"
                sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', py: 2 }}
            >
                <IconButton
                    aria-label="previous page"
                    variant="outlined"
                    color="neutral"
                    size="sm"
                >
                    <KeyboardArrowLeftIcon />
                </IconButton>
                <Typography level="body-sm" mx="auto">
                    Page 1 of 10
                </Typography>
                <IconButton
                    aria-label="next page"
                    variant="outlined"
                    color="neutral"
                    size="sm"
                >
                    <KeyboardArrowRightIcon />
                </IconButton>
            </Box>
        </Box>
    );
}

export default OrderListProductos;