import { Tip, Button } from "grommet";
import { Github } from "grommet-icons";

export const GitButton = (props) => {
return(
    <Tip content='Click here to view my GitHub!'>
    <Button align='center' href='https://www.github.com/StuMartin22' target='_blank' rel='noopener noreferrer'
    icon={<Github color="accent-1" size='large' />}
    hoverIndicator
    />
</Tip>
)};