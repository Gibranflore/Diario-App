import { Link as RouterLink} from 'react-router'
import { useDispatch } from 'react-redux'
import { Button, Grid, Link, TextField, Typography,  } from '@mui/material'
import { Google} from '@mui/icons-material' 
import { AuthLayout } from '../Layout/AuthLayout'
import { useForm } from '../../Hooks'
import { checkingAuthtentication, startGoogleSignIn, } from '../../App/Auth/thunk'


export const LoginPage = () => {

  const dispatch = useDispatch()

  const {   password, onInputChange, email,} = useForm({
    email: 'correoDemo@gmail.com',
    password: '123456', 
  })

  const onSubmit = (event) => {
    event.preventDefault();
     //* si en console.log no agregamos las llaves no lo muestra como objeto si no como un string
    console.log( {email, password} )
    dispatch(checkingAuthtentication())
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
                label='correo' type='email' placeholder='correo@gmail.com' 
                fullWidth name='email' onChange={onInputChange} value={email}/>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField label='contraseña' type='password' placeholder='contraseña' 
                fullWidth name='password' onChange={onInputChange} value={password}/>
            </Grid>

              <Grid container spacing={2} sx={{ mt: 1, mb: 2}}>

                  <Grid item xs={12} sm={6}>
                      <Button type='submit' variant='contained' fullWidth>
                      Login
                      </Button>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                      <Button onClick={onGoogleSignIn} variant='contained' fullWidth>
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