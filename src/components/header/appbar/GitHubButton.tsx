import { IconButton } from '@material-ui/core'
import { GitHub } from '@material-ui/icons'
import Link from 'components/Link'
import TooltipButton from './TooltipButton'

export default function GitHubButton(): JSX.Element {
  return (
    <TooltipButton title={'Ver en GitHub'}>
      <IconButton
        component={Link}
        href="https://github.com/adrianrl99/porfolio"
        style={{ color: 'inherit' }}
        target="_blank"
        aria-label="github">
        <GitHub />
      </IconButton>
    </TooltipButton>
  )
}
