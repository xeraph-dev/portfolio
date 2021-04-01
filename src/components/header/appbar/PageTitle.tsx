import { Typography } from '@material-ui/core'
import { version } from 'const'

export default function PageTitle(): JSX.Element {
  return <Typography>v{version}</Typography>
}
