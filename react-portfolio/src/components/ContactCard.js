import { Card, CardHeader, CardBody, CardFooter, Text } from "grommet";
import { MailButton } from "./MailButton";

export const ContactCard = (props) => {
    return(
<Card justify='center' align='center' background='light-3' border={{'color':'dark-5', 'size':'medium'}}>
<CardHeader justify='center' pad="small">
    <Text size='large' className='HeaderText'>{props.HeaderText}</Text>
</CardHeader>
    <CardBody alignContent='center' pad="medium" className='BodyText'>{props.BodyText}</CardBody>
        <CardFooter background='light-3'>
                <MailButton />
        </CardFooter>
</Card>
)};
