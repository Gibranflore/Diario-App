
import { Navigate, Route, Routes } from "react-router"

import { AuthRouter } from "../Auth/Routers/AuthRouter"
import { JournalRouter } from "../Jurnal/Router/JournalRouter"

import { CheckingAuth } from "../Ui"
import { useChecking } from "../Hooks"



export const AppRouter = () => {

    const status = useChecking();

    if ( status === 'checking' ) {
        return <CheckingAuth />
    }

    return (
        <Routes>

        {
            (status === 'authenticated')
            ? <Route path="/*" element={ <JournalRouter /> } />
            : <Route path="/auth/*" element={ <AuthRouter /> } />
        }

        <Route path='/*' element={ <Navigate to='/auth/login' />  } />

        {/* Login y Registro */}
        {/* <Route path="/auth/*" element={ <AuthRoutes /> } /> */}

        {/* JournalApp */}
        {/* <Route path="/*" element={ <JournalRoutes /> } /> */}

    </Routes>
    )
}
