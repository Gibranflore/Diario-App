import { useMemo } from 'react';

import { ListOutlined } from '@mui/icons-material'
import { Grid, ListItem, ListItemButton, ListItemIcon, ListItemText } from '@mui/material'
import { useDispatch } from 'react-redux';
import { setActivateNote } from '../../App/journal/journalSlice';


export const SideBarItem = ({ title = '', body, id, date, imageURL = []}) => {

    const dispatch = useDispatch();

    const newTitle = useMemo( () => {
        return title.length > 17            //* Esto es cuando el titulo es mayor a 17 caracteres
            ? title.substring(0,17) + '...' //* Si es mayor a 17 caracteres se le pone '...' al final
            : title;
    },[ title ]);

    const onClickNote = () => {
        dispatch( setActivateNote({id , title, body, imageURL, date}) );  //* Esto es para que al dar click en la nota se active
    }                                                                     //* Nos regresa todo lo que tenemos en el firestoreDB


    return (
        <ListItem disablePadding>
            <ListItemButton onClick={onClickNote}>
                <ListItemIcon>
                    <ListOutlined/>
                </ListItemIcon>
                    <Grid container>
                        <ListItemText primary={ newTitle }/>   {/* //Esto es una parametro que llamamos desde nuestro firestoreDB */}
                        <ListItemText secondary={ body }/>
                    </Grid>
            </ListItemButton>
        </ListItem>
    
    )
}
