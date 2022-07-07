import { Button } from "grommet";
import { Download } from "grommet-icons";
import { ToolTipAccent } from "./ToolTipAccent";

export const ResumeButton = (props) => {
    return (
        <>
        < ToolTipAccent tipMessage='Clicking here will let you download a copy of my resume!'>
            <Button align='center'
                icon={<Download color='accent-1' size={props.iconsize} />}
                hoverIndicator
                href=""
                // onClick={href=}
            />
        </ToolTipAccent>
        </>
    )
};