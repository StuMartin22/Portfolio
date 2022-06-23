import { Button, Tip } from "grommet";
import { Linkedin } from "grommet-icons";

export const NameHere = (props) => {
return(
    <Tip content='Click here to view my LinkedIn!'>
    <Button align='center' href='https://www.linkedin.com/in/stumartin22' target='_blank' rel='noopener noreferrer'
    icon={<Linkedin color="accent-1" size='large' />}
    hoverIndicator
    />
</Tip>
)};