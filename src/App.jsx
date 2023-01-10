import "./App.css";
import { useAuth0 } from "@auth0/auth0-react";
import { LoginPage } from "./components/Pages/loginPage/loginPage";
import { CheckRoles } from "./components/checkRoles/checkRoles";
function App() {
  const { isAuthenticated, isLoading } = useAuth0();

  if (!isLoading) {
    if (isAuthenticated) {
      return (
        <>
          <CheckRoles />
        </>
      );
    } else {
      return (
        <div className="loginPage">
          <LoginPage />;
        </div>
      );
    }
  } else {
    <h1>loading</h1>;
  }
}

export default App;
