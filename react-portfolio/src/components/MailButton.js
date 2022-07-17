import { Button } from "grommet";
import { Mail } from "grommet-icons";
import emailRunner from "../constants/copyEmailFunction";
import { ToolTipAccent } from "./ToolTipAccent";

export const MailButton = (props) => {
    return (
        <>
        <ToolTipAccent tipMessage='Click here to copy my email!' >
        <Button align='center'
            icon={<Mail color='accent-1' size={props.IconSize} />}
            hoverIndicator
            onClick={emailRunner}
        />
        </ToolTipAccent>
        </>
    )
};