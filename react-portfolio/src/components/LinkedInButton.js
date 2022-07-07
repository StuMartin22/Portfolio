import { Button } from "grommet";
import { Linkedin } from "grommet-icons";
import { ToolTipAccent } from "./ToolTipAccent";

export const LinkedInButton = (props) => {
return(
    <>
    < ToolTipAccent tipMessage='Click here to connect on LinkedIn!' >
    <Button align='center' href='https://www.linkedin.com/in/stumartin22' target='_blank' rel='noopener noreferrer'
    icon={<Linkedin color="accent-1" size={props.iconsize} />}
    hoverIndicator
    />
    </ToolTipAccent>
    </>
)};