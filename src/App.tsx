import { Box, Typography } from "@mui/material";
import "./App.css";
import Timer from "./components/Timer";
import Toolbar from "./components/Toolbar";
import { COLORS } from "./constants/colors";
import { HistoryProvider } from "./contexts/HistoryContext";

function App() {
    return (
        <HistoryProvider>
            <Box className="App">
                {/* Header Container */}
                <Box
                    style={{
                        width: "100%",
                        height: "50px",
                        display: "flex",
                        alignItems: "center",
                        paddingLeft: "20px",
                    }}
                >
                    <span
                        style={{
                            fontSize: "20px",
                            fontWeight: 500,
                            color: COLORS.BLACK,
                        }}
                    >
                        Focus Timer
                    </span>
                </Box>
                {/* History  */}
                <Box>
                    <Toolbar />
                </Box>
                {/* Timer Container */}
                <Box
                    sx={{
                        width: "100%",
                        display: "flex",
                        flex: 1,
                        justifyContent: "center",
                        alignItems: "center",
                    }}
                >
                    <Timer />
                </Box>
            </Box>
        </HistoryProvider>
    );
}

export default App;
