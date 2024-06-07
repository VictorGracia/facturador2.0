
import { HomeRounded as HomeRoundedIcon, ChevronRightRounded as ChevronRightRoundedIcon } from '@mui/icons-material';
import { Box, Breadcrumbs, Link, Typography } from '@mui/joy';
type Props = {
    window: string;
    href: string;
};
const CustomBreadcrumbs: React.FC<Props> = ({ window, href }) => {
    return (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
            <Breadcrumbs
                size="sm"
                aria-label="breadcrumbs"
                separator={<ChevronRightRoundedIcon />}
                sx={{ pl: 0 }}
            >
                <Link
                    underline="none"
                    color="neutral"
                    href={href}
                    aria-label="Home"
                >
                    <HomeRoundedIcon />
                </Link>
                <Link
                    underline="hover"
                    color="neutral"
                    href={href}
                    fontSize={12}
                    fontWeight={500}
                >
                    Inicio
                </Link>
                <Typography color="primary" fontWeight={500} fontSize={12}>
                    {window}
                </Typography>
            </Breadcrumbs>
        </Box>
    );
}

export default CustomBreadcrumbs;