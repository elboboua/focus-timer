import React from "react";
import HistoryModal from "./HistoryModal";

type Props = {};

export default function Toolbar({}: Props) {
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <HistoryModal />
        </div>
    );
}
