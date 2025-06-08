import { AppRouter } from "./Routers/AppRouter"
import { AppTheme } from "./theme/AppTheme"


export const JurnalApp = () => {
  return (
    <AppTheme>
      <AppRouter/>
    </AppTheme>
  )
}