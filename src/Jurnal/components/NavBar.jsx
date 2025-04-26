import { AppBar, Grid, IconButton, Toolbar, Typography } from "@mui/material"
import {LoginOutlined, MenuOutlined} from '@mui/icons-material'


export const NavBar = ({borderWidth = 240}) => {
    return (
        <AppBar 
        position='fixed' 
        // sm son pantallas pequeñas y ml son extra pequeñas, aqui cubre todo el ancho el bar si la pantalla es pequeñas
        // y tambien del 100% que es el tamaño resta el 240 por eso de ve cortado
        sx={{ 
            width: {sm: `calc(100% - ${borderWidth}px) `}, 
            ml: {sm: ` ${borderWidth}px `}
        }}>

            <Toolbar>
            {/* El color del icono es heredado y sx tiene un margen right de 2 y el display aparece el icono si es muy pequeña la pantalla */}
                <IconButton
                color='inherit'
                edge='start'
                sx={{ mr: 2, display: {sm: 'none'} }}
                >
                    <MenuOutlined/>
                </IconButton>

                <Grid container direction='row' justifyContent='space-between' alignItems='center' sx={{ width: '100%' }}>
                    <Typography variant="h6" noWrap component='div' > JournalApp </Typography>
                        <IconButton color="error">
                            <LoginOutlined/>
                        </IconButton>
                </Grid>

            </Toolbar>
        </AppBar>
    )
}
