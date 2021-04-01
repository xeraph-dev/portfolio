import { Tooltip, Zoom, Typography } from '@material-ui/core'

interface IToolTipButtonProps {
  children: JSX.Element
  title: string
}

export default function TooltipButton({ children, title }: IToolTipButtonProps): JSX.Element {
  return (
    <Tooltip
      placement="bottom"
      title={<Typography>{title}</Typography>}
      arrow
      TransitionComponent={Zoom}>
      {children}
    </Tooltip>
  )
}
