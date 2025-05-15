import { useDispatch, useSelector } from 'react-redux'
import { SaveAltOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'
import { useForm } from '../../Hooks'
import { useMemo } from 'react'

export const NotView = () => {

    const {active:note} = useSelector(state => state.Journal)             //& llamamos a nuestro slice y activate 
    
    const {onInputChange, formState, body, title, date} = useForm( note ) //& llamamos esto del useForm y le añadimos el title, body etc

    const newDate = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date])


    return (
        <Grid container direction='column' justifyContent='space-between' alignItems='center' sx={{width: '100%', mb: 1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' >{ newDate }</Typography>
            </Grid>

            <Grid item>
                <Button color="primary" sx={{ padding: 2 }}>
                    <SaveAltOutlined sx={{ fontSize: 30, mr: 1 }} />
                    Guardar
                </Button>
            </Grid>

            <Grid container>
                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    placeholder="Ingrese un título"
                    label="Título"
                    sx={{ border: 'none', mb: 1 }}
                    name='title'
                    value={title}
                    onChange={onInputChange}
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={ 5 }
                    name='body'
                    value={body}
                    onChange={onInputChange}

                />
            </Grid>

            {/* Image gallery */}
            <ImageGallery />

        </Grid>
    )
}
