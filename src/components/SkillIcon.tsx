import { FC } from 'react'
import { IconBaseProps, IconType } from 'react-icons/lib'

import { List } from '@/components/List'

export type SkillIconProps = IconBaseProps & {
  name: string
  icon: IconType
}

export const SkillIcon: FC<SkillIconProps> = ({
  icon: Icon,
  name,
  ...props
}) => (
  <List
    flexDirection="column"
    justifyContent="center"
    alignItems="center"
    gap="4px"
  >
    {<Icon size={48} {...props} />}
    <span>{name}</span>
  </List>
)
