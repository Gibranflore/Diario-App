import { Box } from '@mui/material'
import { NavBar } from '../components/index';

const borderWidth = 240;

export const JournalLayout = ({Children}) => {
  return (
    
    //aqui decimos que el display de la caja sera fija
    <Box sx={{display: 'flex'}}>

        {/* el navbar tendra un ancho de 240 */}
        <NavBar borderWidth={borderWidth}/>

        {/* SideBar */}

        <Box component='main' sx={{flexGrow: 1, p: 3}} >

        {Children}

        {/* ToolBar */}

        </Box>
    </Box>
  )
}
