import { createTheme } from "@mui/material";
import { red } from "@mui/material/colors";

export const purpletheme = createTheme({
    palette:{
        primary: {
            main: '#2E4058',
        },
        secondary:{
            main: '#543884',
        },
        error:{
            main: red[400]
        }
    }
})