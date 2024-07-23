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

const FacturasEmitidasOrderList = () => {
    const tableData = [
        {
            id: 1,
            fechaEmision: "2024-07-20",
            nitReceptor: "900123456",
            razonSocialReceptor: "Comercial ABC S.A.S.",
            monto: "$ 10.000.000 COP",
            estadoDIAN: "Aprobado",
            validacionDIAN: true
        },
        {
            id: 2,
            fechaEmision: "2024-07-18",
            nitReceptor: "900654321",
            razonSocialReceptor: "Servicios XYZ Ltda.",
            monto: "$ 5.000.000 COP",
            estadoDIAN: "Pendiente",
            validacionDIAN: false
        },
        {
            id: 3,
            fechaEmision: "2024-07-15",
            nitReceptor: "901234567",
            razonSocialReceptor: "Distribuciones LMN S.A.",
            monto: "$ 8.000.000 COP",
            estadoDIAN: "Aprobado",
            validacionDIAN: true
        },
        {
            id: 4,
            fechaEmision: "2024-07-10",
            nitReceptor: "901876543",
            razonSocialReceptor: "Alimentos PQR S.A.S.",
            monto: "$ 12.000.000 COP",
            estadoDIAN: "Pendiente",
            validacionDIAN: false
        }
    ];
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
                                    {listItem.razonSocialReceptor} - {listItem.nitReceptor}
                                </Typography>
                                <Typography level="body-xs" gutterBottom>
                                    {listItem.monto} | IVA 19 % | INC 8 %
                                </Typography>
                                <Typography level="body-xs" gutterBottom>
                                    Emisión {listItem.fechaEmision}
                                </Typography>
                                <Typography level="body-xs" sx={{ display: 'flex', alignItems: 'center' }}>
                                    Validado DIAN
                                    {(listItem.validacionDIAN) ? (
                                        <CheckCircleIcon color='success' sx={{ fontSize: '12px' }} />
                                    ) : (
                                        <ErrorOutlineIcon color='error' sx={{ fontSize: '12px' }} />
                                    )}

                                    | Estado interno
                                    <Chip
                                        color={listItem.estadoDIAN === "Activo" ? "success" : "danger"}
                                        size="sm"
                                        variant="soft"
                                    >
                                        {listItem.estadoDIAN}
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

export default FacturasEmitidasOrderList;