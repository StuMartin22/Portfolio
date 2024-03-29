import { Card, CardHeader, CardBody, CardFooter, Text } from "grommet";
import { MailButton } from "../Buttons/MailButton";
import { PhoneButton } from "../Buttons/PhoneButton";
import { GitButton } from "../Buttons/GitHubButton";
import { LinkedInButton } from "../Buttons/LinkedInButton";
import { ResumeButton } from "../Buttons/ResumeButton";

export const ContactCard = (props) => {
    return(
<Card justify='center' align='center' background='light-3' border={{'color':'brand', 'size':'medium'}} elevation='large'>
<CardHeader justify='center' pad="small">
    <Text size='large' className='HeaderText' weight='bold'>{props.HeaderText}</Text>
</CardHeader>
    <CardBody alignContent='center' pad="medium" className='BodyText'>{props.BodyText}</CardBody>
        <CardFooter background='light-3'>
            <div>
                {(props.HeaderText === 'Email' && <MailButton IconSize='large' />)
                ||(props.HeaderText === 'Phone' && <PhoneButton IconSize='large'/>)
                ||(props.HeaderText === 'GitHub' && <GitButton IconSize='large'/>)
                ||(props.HeaderText === 'LinkedIn' && <LinkedInButton IconSize='large'/>)
                ||(props.HeaderText === 'Resume' && <ResumeButton IconSize='large'/>)}
            </div>
        </CardFooter>
</Card>
)};