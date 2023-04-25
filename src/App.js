import LogIn from "./components/LogiIn/LogIn.js";
import { Routes, Route, } from "react-router-dom"
import CreateAccount from "./components/CreateAccount/CreateAccount.js";
import { UserAuthContextProvider } from "./context/UserAuthContext"

function App() {
  return (
    <div>
      <UserAuthContextProvider>
      <Routes>
        <Route path="/" element={<LogIn />}></Route>
        <Route path="/signup" element={<CreateAccount />}></Route>
      </Routes>
      </UserAuthContextProvider>
    </div>
  );
}

export default App;
