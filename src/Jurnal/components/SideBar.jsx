
import { Box, Divider, Drawer, List, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"
import { SideBarItem } from "./"


export const SideBar = ({borderWidth}) => {

    const { displayName } = useSelector( state => state.auth)
    const { notes } = useSelector( state => state.Journal)

    return (
        <Box 
            component='nav' 
            sx={{ width: {sm : borderWidth}, flexShrink: {sm: 0 } 
            }} 
        >
            {/* Todo esta etiqueta es el tamaño de la caja del nombre que tenga el tamaño de borderwidth */}
            <Drawer
                variant='permanent'
                open
                sx={{
                    display: {xs: 'block'},
                    '& .MuiDrawer-paper': {boxSizing: 'border-box', width: borderWidth}
                }}
            >

                    <Toolbar>
                        <Typography variant="h6" noWrap component='div'>
                            {displayName}   {/* Esto llama al nombre del usuario */}
                        </Typography>
                    </Toolbar>
                <Divider/>

                    <List>
                        {
                            notes.map( notes => (
                                <SideBarItem key={notes.id} { ...notes } /> /*  Simplificando el codigo llamdo este componente */
                            ))
                        }
                    </List>

            </Drawer>
        </Box>
    )
}
