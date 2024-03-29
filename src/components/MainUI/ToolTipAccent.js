import { Box, Text, Tip } from "grommet"

export const ToolTipAccent = (props) => {
    return (
<Tip
    plain
    content={
        <Box
            align="center"
            background="accent-1"
            margin="xsmall"
            pad="xsmall"
            round="medium"
            flex={true}
            wrap={true}
        >
            <Text color="brand" className="tipMessage">{props.tipMessage}</Text>
        </Box>
    } 
>{props.children}
</Tip>
    )
};