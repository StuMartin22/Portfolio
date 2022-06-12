import { Box, Grid, Main } from 'grommet'

const Mybio  = () => {
  return(
    <Main>
    <Grid
  rows={['small', 'small', 'small']}
  columns={['small', 'medium', 'medium']}
  gap="small"
  areas={[
    { name: 'project 1 title', start: [0, 1], end: [1, 0] },
    { name: 'project 1 picture', start: [1,1], end:[1,0] },
    { name: 'project 1 buttons', start: [1,2], end:[2,0] },
    { name: 'project 2 title', start: [1, 1], end: [1, 1] },
    { name: 'project 2 picture', start: [2, 1], end: [1, 1] },
    { name: 'project 2 buttons', start: [2, 1], end: [2, 1] },
    { name: 'project 3 title', start: [2, 2], end: [1, 2] },
    { name: 'project 3 pictures', start: [3, 2], end: [1, 2] },
    { name: 'project 3 buttons', start: [3, 2], end: [2, 2] },
  ]}
>
  <Box gridArea="project 1 title" background="brand" />
  <Box gridArea="project 1 picture" background="accent-1" />
  <Box gridArea="project 1 buttons" background="accent-2" />
  <Box gridArea="project 2 title" background="accent-2" />
  <Box gridArea="project 2 picture" background="brand" />
  <Box gridArea="project 2 buttons" background="accent-1" />
  <Box gridArea="project 3 title" background="accent-1" />
  <Box gridArea="project 3 picture" background="accent-2" />
  <Box gridArea="project 3 buttons" background="brand" />
</Grid>
  </Main>
  )
};


export default Mybio;