import { Button } from "grommet";
import { Download } from "grommet-icons";
import { ToolTipAccent } from "./ToolTipAccent";

export const ResumeButton = (props) => {
    return (
        <>
        < ToolTipAccent tipMessage='Clicking here will let you download a copy of my resume!'>
            <Button align='center'
                icon={<Download color='accent-1' size={props.IconSize} />}
                hoverIndicator
                href="https://docs.google.com/document/d/1Zakz9HDfh7Ahir-8x-2MoVvrPoPeWdEwbMzSjJm7-9U/export?format=pdf"
            />
        </ToolTipAccent>
        </>
    )
};