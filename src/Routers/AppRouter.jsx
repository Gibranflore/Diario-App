import { Route, Routes } from "react-router"
import { AuthRouter } from "../Auth/Routers/AuthRouter"
import { JournalRouter } from "../Jurnal/Router/JournalRouter"


export const AppRouter = () => {
    return (
        <Routes>
            {/* Login y registro */}
            {/* Aqui cualquiera que entre al path con auth, ira a authRouter */}
            <Route path="/auth/*" element={ <AuthRouter/> } />


            {/* JournalApp */}
            {/* Culaquier ruta que entre aqui entrara al JournalApp */}
            <Route path="/*" element={ <JournalRouter/> } />

        </Routes>
    )
}
