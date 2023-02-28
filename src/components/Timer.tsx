import { Box } from "@mui/system";
import { useContext, useEffect, useState } from "react";
import { COLORS } from "../constants/colors";

// Icons
import PlayArrowIcon from "@mui/icons-material/PlayArrow";
import { Pause } from "@mui/icons-material";
import { HistoryContext } from "../contexts/HistoryContext";
import { formatSecondsToClock } from "../utils/time.utils";

const iconStyle: React.CSSProperties = {
    fontSize: "80px",
    color: COLORS.BLACK,
};

type Props = {};

export default function Timer({}: Props) {
    const [timerMode, setTimerMode] = useState<"work" | "break">("work");
    const [timerState, setTimerState] = useState<"running" | "paused">(
        "paused"
    );
    const [timeRemaining, setTimeRemaining] = useState<number>(5);
    const [timeSet, setTimeSet] = useState<number>(5);
    const { addHistory } = useContext(HistoryContext);

    const toggleTimerState = () => {
        if (timerState === "running") {
            setTimerState("paused");
        } else {
            setTimerState("running");
        }
    };

    useEffect(() => {
        // If timer is running, start the countdown
        let interval: number | null = null;
        if (timerState === "running") {
            interval = setInterval(() => {
                setTimeRemaining((prevTime) => {
                    if (prevTime === 0) {
                        setTimerState("paused");
                        // toggle timer mode
                        setTimerMode((prevMode) =>
                            prevMode === "work" ? "break" : "work"
                        );
                        if (timerMode === "work") {
                            setTimeRemaining(5);
                            setTimeSet(5);
                            addHistory({
                                id: Math.random().toString(),
                                type: "work",
                                duration: timeSet,
                                date: new Date(),
                            });
                        } else {
                            setTimeRemaining(10);
                            setTimeSet(10);
                            addHistory({
                                id: Math.random().toString(),
                                type: "work",
                                duration: timeSet,
                                date: new Date(),
                            });
                        }

                        return 0;
                    }
                    return prevTime - 1;
                });
            }, 1000);
        }
        return () => {
            interval != null && clearInterval(interval);
        };
    }, [timerState]);

    return (
        <Box
            style={{
                height: "350px",
                width: "350px",
                border: `3px solid ${
                    timerMode === "work" ? COLORS.WORK : COLORS.BREAK
                }`,
                borderRadius: "50%",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                flexDirection: "column",
            }}
        >
            <Box>
                <span>
                    {timerState === "running"
                        ? timerMode === "break"
                            ? "Rest!"
                            : "Work!"
                        : "Ready!"}
                </span>
            </Box>

            <Box
                style={{
                    fontSize: "60px",
                    color: COLORS.BLACK,
                    height: "75px",
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                }}
            >
                {formatSecondsToClock(timeRemaining)}
            </Box>

            <Box onClick={toggleTimerState}>
                {timerState === "paused" ? (
                    <PlayArrowIcon style={iconStyle} />
                ) : (
                    <Pause style={iconStyle} />
                )}
            </Box>
        </Box>
    );
}
