import { useMemo, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink} from 'react-router'
import { Alert, Button, Grid, Link, TextField, Typography,  } from '@mui/material'
import { useForm } from '../../Hooks'
import { AuthLayout } from '../Layout/AuthLayout'
import { startCreatingUserWithEmailPassword } from '../../App/Auth/thunk'


const formData = {
  email:       '',
  password:    '', 
  displayName: '',
}

const formValidations = {
  email:       [ (value) => value.includes('@'), 'El correo debe de tener una @'],
  password:    [ (value) => value.length >= 6, 'El password debe de tener más de 6 letras.'],
  displayName: [ (value) => value.length >= 1, 'El nombre es obligatorio.'],
}

export const RegisterPage = () => {

  const dispatch = useDispatch()
  const [formSubmitted, setformSubmitted] = useState(false)

  const { status, errorMessage} = useSelector( state => state.auth)
  const isCheckingAuthentication = useMemo(() => status === 'checking', [status])

  const { 
    formState, displayName, email, password, onInputChange,
    isFormValid, displayNameValid, emailValid, passwordValid, 
  } = useForm( formData, formValidations );

    const onSubmit = (event) => {
        event.preventDefault();
        setformSubmitted(true);

        if (!isFormValid) return;
        
        dispatch(startCreatingUserWithEmailPassword(formState))
        
    }

  return (
    <AuthLayout title='Crear Cuenta'>
        <form onSubmit={ onSubmit } className='animate__animated animate__bounce animate__fadeIn'>

          <Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
              <TextField 
                label="Nombre completo" 
                type="text" 
                placeholder='Nombre completo' 
                fullWidth
                name="displayName"
                value={ displayName }
                onChange={ onInputChange }
                error={ !!displayNameValid && formSubmitted }
                helperText={ displayNameValid }
              />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                  label='correo'
                  type='email'
                  placeholder='correo'
                  fullWidth 
                  name='email'
                  value={ email }
                  onChange={ onInputChange}
                  error={!!emailValid  && formSubmitted}
                  helperText={emailValid} />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                  label='contraseña'
                  type='password'
                  placeholder='contraseña'
                  fullWidth 
                  name='password'
                  value={ password }
                  onChange={ onInputChange}
                  error={!!passwordValid  && formSubmitted}
                  helperText={passwordValid}/>
            </Grid>

                {/* La doble negacion la transforma en un valor booleano */}
              <Grid 
                item 
                sx={{mb: 2}}
                display={ !!errorMessage ? '' : 'none'}> 

                  <Alert severity='error'>{errorMessage}</Alert>
              </Grid>

              <Grid item sx={{mb: 2, mt: 3}}>
                  <Button disabled={ isCheckingAuthentication} variant='contained' fullWidth type='Submit' >
                      Crear Cuaenta
                  </Button>
              </Grid>

              <Grid container direction='row' justifyContent='end'>
                  <Typography sx={{mr: 1}}>¿Ya tienes cuanta?</Typography>
                    <Link component={RouterLink}  color='error' to={'/auth/login'}>
                      Ingresar
                    </Link>
              </Grid>

          </Grid>

        </form>
    </AuthLayout>
  )
}

  // Todo esto de AuthLayout tiene todo el estilo de la caja y colores, lo importatos aqui para que aplique esos cambios aqui