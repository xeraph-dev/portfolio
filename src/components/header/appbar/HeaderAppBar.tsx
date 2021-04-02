import { AppBar, Box, Button, Container, Toolbar } from '@material-ui/core'
import Image from 'next/image'
import CVButton from './CVButton'
import GitHubButton from './GitHubButton'
import PageTitle from './PageTitle'
import ToggleTheme from './ToggleTheme'

export default function HeaderAppBar(): JSX.Element {
  return (
    <AppBar color="default" position="fixed">
      <Container>
        <Toolbar variant="dense">
          <Button disabled>
            <Image src="/marca.png" height={35} width={158} />
          </Button>
          <CVButton />
          <Box flexGrow={1} />
          <ToggleTheme />
          <GitHubButton />
          <Button disabled>
            <PageTitle />
          </Button>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
