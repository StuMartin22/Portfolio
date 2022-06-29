import { Button, Tip } from "grommet";
import { Mail } from "grommet-icons";
import emailRunner from "../constants/copyEmailFunction";

export const MailButton = () => {
    return (
        <Tip content='Click here to copy!'>
        <Button align='center'
            icon={<Mail color="accent-1" size='large' />}
            hoverIndicator
            onClick={emailRunner}
        />
        </Tip>
    )
};