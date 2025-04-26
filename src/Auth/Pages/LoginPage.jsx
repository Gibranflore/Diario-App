import { Link as RouterLink} from 'react-router'
import { Button, Grid, Link, TextField, Typography,  } from '@mui/material'
import { Google} from '@mui/icons-material' 
import { AuthLayout } from '../Layout/AuthLayout'


export const LoginPage = () => {
  return (
    // Todo este "Grid" es como un div y esto solo maneja el color de fondo y el tamaño
    <AuthLayout title='Login'>
        
        <form >
          <Grid >
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField label='correo' type='email' placeholder='correo@gmail.com' fullWidth/>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField label='contraseña' type='password' placeholder='contraseña' fullWidth/>
            </Grid>

              <Grid container spacing={2} sx={{ mt: 1, mb: 2 }}>

                  <Grid item xs={12} sm={6}>
                      <Button variant='contained' fullWidth>
                      Login
                      </Button>
                  </Grid>

                  <Grid item xs={12} sm={6}>
                      <Button variant='contained' fullWidth>
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
