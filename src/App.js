import LogIn from "./components/LogIn/LogIn.js";
import { Routes, Route, } from "react-router-dom"
import CreateAccount from "./components/CreateAccount/CreateAccount.js";
import { UserAuthContextProvider } from "./components/context/UserAuthContext.js"
import ProtectedRoute from "./components/protectedroute"
import Dashboard from "./components/dashboard"

const App = () => {
  return (
    <div>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/signup" element={<CreateAccount />}></Route>
        <Route path="/dashboard" element={<ProtectedRoute><Dashboard /></ProtectedRoute>}></Route>

      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
