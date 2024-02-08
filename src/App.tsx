import { BrowserRouter as Router } from "react-router-dom";
import { Routers } from "./routes/routes";
import { AuthProvider } from "./context/context";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routers/>
      </Router>
    </AuthProvider>
  );
};

export default App;
