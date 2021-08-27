import { ThemeProvider } from "@material-ui/core/styles";
import Home from "./pages/home/Home";
import { theme } from "./theme/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div style={{ padding: 24 }}>
        <Home />
      </div>
    </ThemeProvider>
  );
}

export default App;
