import { createTheme, ThemeProvider } from "@mui/material/styles";
import LandingPage from "./pages/LandingPage";

// import blue from "@mui/material/colors/blue";

// const theme = createTheme({
//   palette: {
//     primary: blue,
//   },
// });

const theme = createTheme();

function App() {
  return (
    <ThemeProvider theme={theme}>
      <div className="App">
        <LandingPage />
      </div>
    </ThemeProvider>
  );
}

export default App;
