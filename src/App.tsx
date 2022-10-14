import routes from "./routes";
import { useRoutes } from "react-router-dom";

function App() {
  const route = useRoutes(routes);

  return <div className="App">{route}</div>;
}

export default App;
