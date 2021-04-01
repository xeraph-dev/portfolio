import { Box, Container, Toolbar } from '@material-ui/core'
import { HeaderAppBar } from 'components/header/appbar'

interface ILayoutDefaultProps {
  children: JSX.Element | JSX.Element[]
}

export default function LayoutDefault({ children }: ILayoutDefaultProps): JSX.Element {
  return (
    <Box overflow="hidden">
      <HeaderAppBar />
      <Toolbar variant="dense" />
      <Container>
        <Box pt={10} pb={10}>
          {children}
        </Box>
      </Container>
    </Box>
  )
}
