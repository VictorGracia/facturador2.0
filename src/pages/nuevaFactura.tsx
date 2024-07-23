import { Box, Card, CssBaseline, CssVarsProvider, Typography } from "@mui/joy";
import NuevaFacturaContent from "../components/emitirFactura.tsx/nuevaFacturaContent";
import Header from "../components/layout/Header";
import Sidebar from "../components/layout/Sidebar";
import CustomBreadcrumbs from "../components/layout/breadcrumsContainer";

const NuevaFacturaPage = () => {
    return (
        <CssVarsProvider disableTransitionOnChange>
            <CssBaseline />
            <Box sx={{ display: 'flex', minHeight: '100dvh' }}>
                <Header />
                <Sidebar />
                <Box
                    component="main"
                    className="MainContent"
                    sx={{
                        px: { xs: 2, md: 6 },
                        pt: {
                            xs: 'calc(12px + var(--Header-height))',
                            sm: 'calc(12px + var(--Header-height))',
                            md: 3,
                        },
                        pb: { xs: 2, sm: 2, md: 3 },
                        flex: 1,
                        display: 'flex',
                        flexDirection: 'column',
                        minWidth: 0,
                        height: '100dvh',
                        gap: 1,
                    }}
                >
                    <CustomBreadcrumbs window='Inicio' href='/inicio' />
                    <Box
                        sx={{
                            display: 'flex',
                            mb: 1,
                            gap: 1,
                            flexDirection: { xs: 'column', sm: 'row' },
                            alignItems: { xs: 'start', sm: 'center' },
                            flexWrap: 'wrap',
                            justifyContent: 'space-between',
                        }}
                    >
                        <Typography level="h2" component="h1">
                            Inicio
                        </Typography>
                    </Box>
                    <NuevaFacturaContent />
                </Box>
            </Box>
        </CssVarsProvider>
    );
}

export default NuevaFacturaPage;