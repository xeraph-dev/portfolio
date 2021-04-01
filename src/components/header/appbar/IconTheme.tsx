import { NightsStay, WbSunny } from '@material-ui/icons'

interface IIconThemeProps {
  theme: string
}

export default function IconTheme({ theme }: IIconThemeProps): JSX.Element {
  return theme === 'dark' ? <WbSunny /> : <NightsStay />
}
