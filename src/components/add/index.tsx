import React from "react";
import { AddProjectStyle } from "./style";

interface AddButtonProps {
    icon?: React.ReactNode;
    title?: string;
    action?: () => void; 
}
export function AddProject({title, icon, action}: AddButtonProps) {
    return (
        <AddProjectStyle onClick={action}>
            {icon}
            <p>{title}</p>
        </AddProjectStyle>
    );
}