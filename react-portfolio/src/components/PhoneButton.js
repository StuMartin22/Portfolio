import phoneRunner from "../constants/copyPhoneFunction";
import { Button, } from "grommet";
import { Phone } from "grommet-icons";
import { ToolTipAccent } from './ToolTipAccent'

export const PhoneButton = (props) => {
return(
    <>
    <ToolTipAccent tipMessage='Click here to copy my phone number!'>
    <Button align='center'
        icon={<Phone color="accent-1" size={props.IconSize}/>}
        hoverIndicator
        onClick= { phoneRunner }
    />
    </ToolTipAccent>
    </>
)};