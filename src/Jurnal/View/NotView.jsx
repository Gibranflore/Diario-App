import { SaveAltOutlined } from '@mui/icons-material'
import { Button, Grid, TextField, Typography } from '@mui/material'
import { ImageGallery } from '../components'

export const NotView = () => {
    return (
        <Grid container direction='column' justifyContent='space-between' alignItems='center' sx={{width: '100%', mb: 1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' >Hola desde la vista</Typography>
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
                />

                <TextField 
                    type="text"
                    variant="filled"
                    fullWidth
                    multiline
                    placeholder="¿Qué sucedió en el día de hoy?"
                    minRows={ 5 }
                />
            </Grid>

            {/* Image gallery */}
            <ImageGallery />

        </Grid>
    )
}
