import { useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link as RouterLink} from 'react-router'
import { Google} from '@mui/icons-material' 
import { Alert, Button, Grid, Link, TextField, Typography,  } from '@mui/material'
import { useForm } from '../../Hooks'
import { AuthLayout } from '../Layout/AuthLayout'
import { startGoogleSignIn, startLoginWithEmailPassword } from '../../App/Auth/thunk'


export const LoginPage = () => {

  const { status, errorMessage } = useSelector(state => state.auth)

  const dispatch = useDispatch()
  const { password, onInputChange, email} = useForm({
    email: '',
    password: ''
  });

  const isAuthtenticating = useMemo( () => status === 'checking', [status])


  const onSubmit = (event) => {
    event.preventDefault();
    //* console.log( {email, password} ) si en console.log no agregamos las llaves no lo muestra como objeto si no como un string
    dispatch(startLoginWithEmailPassword( {email, password} ) ) //*Espera que lleguen el email y password del thunk
  }


  const onGoogleSignIn = () => {
    console.log('OnGoogleSignIn')
    dispatch(startGoogleSignIn())
  }

  return (
    // Todo este "Grid" es como un div y esto solo maneja el color de fondo y el tamaño
    <AuthLayout title='Login'>
        <form onSubmit={onSubmit} >
          <Grid >
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField 
                    label='correo'
                    type='email'
                    placeholder='correo@gmail.com' 
                    fullWidth
                    name='email'
                    onChange={onInputChange}
                    value={email}
                  />
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField
                    label='contraseña'
                    type='password'
                    placeholder='contraseña' 
                    fullWidth
                    name='password'
                    onChange={onInputChange}
                    value={password}/>
            </Grid>

              <Grid container  display={ !!errorMessage ? '' : 'none'}> {/* La doble negacion la transforma en un valor booleano */}          
                <Grid 
                  item 
                  sx={{mb: 2}}
                > 
                    <Alert severity='error'>{errorMessage}</Alert>
                </Grid>
              </Grid>

                <Grid item spacing={2} sx={{ mt: 1, mb: 2}}>
                  <Grid item xs={12} sm={6} sx={{ mt: 2}}>
                      <Button type='submit' variant='contained' fullWidth disabled={isAuthtenticating}>
                      Login
                      </Button>
                  </Grid>

                  <Grid item xs={12} sm={6} sx={{ mt: 1}} >
                      <Button onClick={onGoogleSignIn} variant='contained' fullWidth disabled={isAuthtenticating}>
                        <Google/>
                          <Typography sx={{ml: 1}}>Google</Typography>
                      </Button>
                  </Grid>

              </Grid>

              <Grid container direction='row' justifyContent='end'>
                  <Link component={RouterLink}  color='error' to={'/auth/register'}>
                    Crear un cuneta
                  </Link>
              </Grid>
          </Grid>

        </form>
    </AuthLayout>
  )
}