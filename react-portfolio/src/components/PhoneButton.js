import phoneRunner from "../constants/copyPhoneFunction";

export const NameHere = (props) => {
return(
    <Tip content='Click here to copy!'>
    <Button align='center'
    icon={<Phone color="accent-1" size='large' />}
    hoverIndicator
    onClick= { phoneRunner }
    />
</Tip>
)};