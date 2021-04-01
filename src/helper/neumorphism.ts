import { PaletteType } from '@material-ui/core'

export function boxShadow(inset: boolean, type: PaletteType): string {
  return `
    ${inset ? 'inset' : ''} 5px 5px 10px ${type === 'dark' ? '#242424' : '#bcbcbc'}, 
    ${inset ? 'inset' : ''} -5px -5px 10px ${type === 'dark' ? '#3c3c3c' : '#ffffff'} 
  `
}
