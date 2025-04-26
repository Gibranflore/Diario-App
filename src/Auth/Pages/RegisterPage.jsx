import { Link as RouterLink} from 'react-router'
import { Button, Grid, Link, TextField, Typography,  } from '@mui/material'
import { AuthLayout } from '../Layout/AuthLayout'


export const RegisterPage = () => {
  return (
    // Todo esto de AuthLayout tiene todo el estilo de la caja y colores, lo importatos aqui para que aplique esos cambios aqui
    <AuthLayout title='Crear Cuenta'>
        
        <form >
          <Grid >
            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField label='Nombre' type='text' placeholder='Nombre completo ' fullWidth/>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField label='correo' type='email' placeholder='correo@gmail.com' fullWidth/>
            </Grid>

            <Grid item xs={ 12 } sx={{ mt: 2 }}>
                <TextField label='contraseña' type='password' placeholder='contraseña' fullWidth/>
            </Grid>

              <Grid container spacing={2} sx={{mb: 2}}>

                <Button variant='contained' fullWidth sx={{mt: 2,}}  >
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
