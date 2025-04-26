import { Box, Toolbar } from '@mui/material'
import { NavBar, SideBar } from '../components';

const borderWidth = 240;

export const JournalLayout = ({children}) => {
  return (
    
    //aqui decimos que el display de la caja sera fija
    <Box sx={{display: 'flex'}}>

        {/* el navbar tendra un ancho de 240 */}
        <NavBar borderWidth={borderWidth}/>

        {/* SideBar */}
        <SideBar borderWidth={borderWidth}/>

        <Box component='main' sx={{flexGrow: 1, p: 8}} >

        {/* ToolBar */}
        <Toolbar/>
        
        {children}

        </Box>
    </Box>
  )
}
