import { Button } from '@material-ui/core'
import Link from 'components/Link'
import TooltipButton from './TooltipButton'

export default function CVButton(): JSX.Element {
  return (
    <TooltipButton title={'Descargar CV'}>
      <Button
        component={Link}
        href="/CV-Adrian-Rene-Lopez-Cintas.pdf"
        download
        style={{ color: 'inherit', textDecoration: 'none' }}
        target="_blank"
        aria-label="cv">
        CV
      </Button>
    </TooltipButton>
  )
}
