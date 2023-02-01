import { Box, Button, Modal, Typography } from "@mui/material";
import { useContext, useState } from "react";
import { COLORS } from "../constants/colors";
import { HistoryContext } from "../contexts/HistoryContext";
import { formatSecondsToClock } from "../utils/time.utils";

type Props = {};

const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: "90%",
    maxWidth: 400,
    bgcolor: COLORS.WHITE,
    boxShadow: 24,
    p: "15px",
};

export default function HistoryModal({}: Props) {
    const { history } = useContext(HistoryContext);
    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button
                style={{
                    backgroundColor: "white",
                    color: "black",
                }}
                disableRipple
                variant="contained"
                onClick={handleOpen}
            >
                History
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography
                        id="modal-modal-title"
                        variant="h6"
                        component="h3"
                    >
                        History
                    </Typography>
                    <Box>
                        {history.map((item) => (
                            <Box
                                sx={{
                                    display: "flex",
                                    justifyContent: "space-between",
                                    alignItems: "center",
                                    padding: "10px 0",
                                }}
                            >
                                <Typography
                                    variant="body1"
                                    sx={{ color: COLORS.BLACK }}
                                >
                                    {item.date.toLocaleString()}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: COLORS.BLACK }}
                                >
                                    {item.type}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{ color: COLORS.BLACK }}
                                >
                                    {formatSecondsToClock(item.duration)}
                                </Typography>
                            </Box>
                        ))}
                    </Box>
                </Box>
            </Modal>
        </div>
    );
}
