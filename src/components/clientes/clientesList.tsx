import MoreHorizRoundedIcon from '@mui/icons-material/MoreHorizRounded';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import { Avatar, Box, Chip, Divider, Dropdown, IconButton, Link, List, ListDivider, ListItem, ListItemContent, ListItemDecorator, Menu, MenuButton, MenuItem, Typography } from '@mui/joy';

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

export default function OrderList() {
    return (
        <Box sx={{ display: { xs: 'block', sm: 'none' } }}>
            {tableRowsData.map((listItem) => (
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
                                <Avatar size="sm">L</Avatar>
                            </ListItemDecorator>
                            <div>
                                <Typography fontWeight={600} gutterBottom>
                                    {listItem.razonSocial}
                                </Typography>
                                <Typography level="body-xs" gutterBottom>
                                    {listItem.numeroIdentificacion}
                                </Typography>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'space-between',
                                        gap: 0.5,
                                        mb: 1,
                                    }}
                                >
                                    <Typography level="body-xs">{listItem.email}</Typography>
                                    <Typography level="body-xs">&bull;</Typography>
                                    <Typography level="body-xs">{listItem.id}</Typography>
                                </Box>
                                <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, mb: 1 }}>
                                    <Link level="body-sm" component="button">
                                        Download
                                    </Link>
                                    <RowMenu />
                                </Box>
                            </div>
                        </ListItemContent>
                        <Chip
                            variant="soft"
                            size="sm"
                            // startDecorator={
                            //     {
                            //         Paid: <CheckRoundedIcon />,
                            //         Refunded: <AutorenewRoundedIcon />,
                            //         Cancelled: <BlockIcon />,
                            //     }[listItem.status]
                            // }
                            // color={
                            //     {
                            //         Paid: 'success',
                            //         Refunded: 'neutral',
                            //         Cancelled: 'danger',
                            //     }[listItem.status] as ColorPaletteProp
                            // }
                            color={listItem.estado === "Activo" ? "success" : "danger"}>
                            {listItem.estado}
                        </Chip>
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
