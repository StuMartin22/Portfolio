import { Anchor, Footer, Text } from 'grommet'
import { GitButton } from '../Buttons/GitHubButton'
import { LinkedInButton } from '../Buttons/LinkedInButton'
import { PhoneButton } from '../Buttons/PhoneButton'
import { MailButton } from '../Buttons/MailButton'
import { ResumeButton } from '../Buttons/ResumeButton'


const Footerbar = () => {
  return (
    <div>
      <Footer pad="small" background={{ color: "brand" }} responsive={true} wrap={true} align='center' alignContent='center' position='absolute' margin={{bottom:'0'}} width={{min:'190px'}}>
        <Text>Contact me:</Text>
        <GitButton iconsize='medium' />
        <LinkedInButton iconsize='medium' />
        <PhoneButton iconsize='medium' />
        <MailButton iconsize='medium' />
        <ResumeButton iconsize='medium' /> 
        <Anchor label="Home" href="/" hoverIndicator />
      </Footer>
    </div>
  )
};

export default Footerbar;