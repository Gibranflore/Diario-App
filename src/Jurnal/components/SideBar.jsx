import { ListOutlined } from "@mui/icons-material"
import { Box, Divider, Drawer, Grid, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Toolbar, Typography } from "@mui/material"
import { useSelector } from "react-redux"

export const SideBar = ({borderWidth}) => {

    const { displayName } = useSelector( state => state.auth)

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
                            {displayName}
                        </Typography>
                    </Toolbar>
                <Divider/>

                    <List>
                        {
                            ['Enero', 'Febrero', 'Marzo', 'Abril'].map( text => (
                                <ListItem key={ text} disablePadding>
                                    <ListItemButton>
                                        <ListItemIcon>
                                            <ListOutlined/>
                                        </ListItemIcon>
                                            <Grid container>
                                                <ListItemText primary={text}/>
                                                <ListItemText secondary={ 'iverra. Nulla fringilla, orci ac euismod semper, ' }/>
                                            </Grid>
                                    </ListItemButton>
                                </ListItem>
                            ))
                        }
                    </List>

            </Drawer>
        </Box>
    )
}
