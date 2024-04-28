import React, { useContext, useEffect } from "react";
import { GlobalContext } from "../../../Contexts/GlobalContext";
import { Container } from "./styles"

import { SettingsTop } from "../Components/SettingsTop/SettingsTop";
import { SettingsMid } from "../Components/SettingsTop/SettingsMid";

export const Settings = () => {

    const { SistemDispatch } = useContext<any>(GlobalContext);

    useEffect(() => {
        SistemDispatch({ type: "showStatusbar" });
        SistemDispatch({ type: "showBottomNav" });
        SistemDispatch({
            type: "setBottomNavStyles",
            values: {
                background: "#121B22",
                color: "#f2f2f2",
            },
        });
        SistemDispatch({
            type: "setStatusBarStyle",
            values: {
                background: "#121B22",
                color: "#f2f2f2",
            },
        });
    }, []);

    return (
        <Container>
            <SettingsTop />

            <span className="divisor"></span>

            <SettingsMid />
        </Container>
    )
}