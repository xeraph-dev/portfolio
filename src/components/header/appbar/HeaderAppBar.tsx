import { AppBar, Box, Container, Toolbar } from '@material-ui/core'
import GitHubButton from './GitHubButton'
import PageTitle from './PageTitle'
import ToggleTheme from './ToggleTheme'

export default function HeaderAppBar(): JSX.Element {
  return (
    <AppBar color="default" position="fixed">
      <Container>
        <Toolbar variant="dense">
          <PageTitle />
          <Box flexGrow={1} />
          <ToggleTheme />
          <GitHubButton />
        </Toolbar>
      </Container>
    </AppBar>
  )
}
