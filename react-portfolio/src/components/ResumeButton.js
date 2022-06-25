import { Tip, Button } from "grommet";
import { Download } from "grommet-icons";

export const ResumeButton = () => {
    return (
        <Tip content='Clicking here will let you download a copy of my resume!'>
        <Button align='center'
            icon={<Download color="accent-1" size='large' />}
            hoverIndicator
            href=""
            // onClick={href=}
        />
        </Tip>
    )
};