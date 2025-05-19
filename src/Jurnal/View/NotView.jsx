import { useDispatch, useSelector } from 'react-redux'
import { useEffect, useMemo, useRef } from 'react'

import { SaveAltOutlined, UploadOutlined } from '@mui/icons-material'
import { Button, Grid, IconButton, TextField, Typography } from '@mui/material'
import Swal from 'sweetalert2'
import 'sweetalert2/dist/sweetalert2.css'

import { ImageGallery } from '../components'
import { useForm } from '../../Hooks'
import { SavingImageFileLoad, setActivateNote, startSvingNote } from '../../App/journal'

export const NotView = () => {

    const dispatch = useDispatch()

    const {active:note, messageSave, isSaving} = useSelector(state => state.Journal)  //& llamamos a nuestro slice y activate 
    
    const {onInputChange, formState, body, title, date} = useForm( note )             //& llamamos esto del useForm y le añadimos el title, body etc

    const newDate = useMemo(() => {
        const newDate = new Date( date );
        return newDate.toUTCString();
    }, [date])

    useEffect(() => {
    dispatch(setActivateNote(formState));  //& si cambiamos la nota formState tiene los datos de la nota actulizada y lo cambia

    }, [formState]);

    useEffect(() => {                     //& este useEffect crea la alertea cuando se guarda algun cambio en las notas 
        if ( messageSave.length > 0 ) 
            Swal.fire( 'Nota actualizada', messageSave, 'success' )
        

    }, [messageSave])
    
    
    const onSaveNote = () => {
        dispatch(startSvingNote());
    }

    const onClickRef = useRef()

    const onFileInputChange = ({ target }) => {
        if ( target.files === 0 ) return;       //& Para llamar subir archivos con con el nombre "FILES"

        dispatch( SavingImageFileLoad( target.files ) )
        
    }


    return (
        <Grid container direction='column' justifyContent='space-between' alignItems='center' sx={{width: '100%', mb: 1 }}>
            <Grid item>
                <Typography fontSize={ 39 } fontWeight='light' >{ newDate }</Typography>
            </Grid>

            <Grid item>
                <input
                    type='file'
                    multiple
                    onChange={ onFileInputChange}
                    style={{display: 'none'}}
                    ref={onClickRef}    //& Esto es una referencia que se puede usar en otro lado simulacion de un click
                />

                <IconButton
                    color='primary'
                    disabled={isSaving}
                    onClick={() => onClickRef.current.click()}  //& Esto va a simular cuado demos click aqui llame al input de arriba
                >
                    <UploadOutlined/>
                </IconButton>


                    <Button
                        disabled={isSaving}
                        onClick={ onSaveNote }
                        color="primary" 
                        sx={{ padding: 2 }}
                    >
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
            <ImageGallery images={ note.imageURL } /> 
            {/* //& Esto le da el parametro de imagen al ocmponenete, "note.imgeUrls" tiene las notas mas actualizadas */}

        </Grid>
    )
}
