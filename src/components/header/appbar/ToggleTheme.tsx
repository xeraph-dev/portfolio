import { IconButton } from '@material-ui/core'
import { NightsStay, WbSunny } from '@material-ui/icons'
import { ThemeContext } from 'plugins/Theme'
import { useContext } from 'react'
import TooltipButton from './TooltipButton'

export default function ToggleTheme(): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext)

  return (
    <TooltipButton title={'Cambiar tema'}>
      <IconButton
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}
        aria-label="toggle the theme">
        {theme === 'dark' ? <WbSunny /> : <NightsStay />}
      </IconButton>
    </TooltipButton>
  )
}
