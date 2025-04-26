import { ThemeProvider } from "@emotion/react"
import { CssBaseline } from "@mui/material"
import { purpletheme } from "./purpleTheme"

export const AppTheme = ({children}) => {
    return (
        <>
        {/* Todo esto sera un contexto que esta importando el estilo el children son los hijos "otros componentes que de otros archivos se mostraran" */}
            <ThemeProvider theme={purpletheme}>
                {/* CssBaseline kickstart an elegant, consistent, and simple baseline to build upon. */}
                <CssBaseline />
                {children}
            </ThemeProvider>
        </>
    )
}
