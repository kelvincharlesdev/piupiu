import "./App.css";
import { AuthContextProvider } from "./contexts/auth";
import { PiupiuRoutes } from "./routes/PiupiuRoutes";



function App() {
  return (
    <AuthContextProvider>

      <PiupiuRoutes/>

    </AuthContextProvider>
  )
}

export default App;
