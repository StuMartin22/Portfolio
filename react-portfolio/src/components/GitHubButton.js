import { Button } from "grommet";
import { Github } from "grommet-icons";
import { ToolTipAccent } from "./ToolTipAccent";

export const GitButton = (props) => {
return(
    <>
    <ToolTipAccent tipMessage="Click here to view my GitHub!">
    <Button align='center' href='https://www.github.com/StuMartin22' target='_blank' rel='noopener noreferrer'
    icon={<Github color="accent-1" size={props.iconsize} />}
    hoverIndicator
    />
    </ToolTipAccent>
    </>
)};