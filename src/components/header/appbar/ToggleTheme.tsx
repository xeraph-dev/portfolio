import { IconButton } from '@material-ui/core'
import { ThemeContext } from 'plugins/Theme'
import { useContext, useMemo } from 'react'
import TooltipButton from './TooltipButton'
import dynamic from 'next/dynamic'

export default function ToggleTheme(): JSX.Element {
  const { theme, setTheme } = useContext(ThemeContext)

  const Icon = useMemo(() => dynamic(() => import('./IconTheme')), [theme])

  return (
    <TooltipButton title={'Cambiar tema'}>
      <IconButton
        onClick={() => {
          setTheme(theme === 'dark' ? 'light' : 'dark')
        }}
        aria-label="toggle the theme">
        <Icon theme={theme} />
      </IconButton>
    </TooltipButton>
  )
}
