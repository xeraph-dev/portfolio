import { FC, ReactNode } from 'react'

import Link from '@/components/Link'
import { List } from '@/components/List'

export type ExperienceContentProps = {
  companyUrl: string
  tecnologies: ReactNode[]
  start: number
  end: number
}

export const ExperienceContent: FC<ExperienceContentProps> = ({
  children,
  companyUrl,
  tecnologies,
  start,
  end,
}) => (
  <List flexDirection="column" gap="16px">
    <h4>{start === end ? start : `${start} - ${end}`}</h4>
    <Link to={companyUrl}>{companyUrl}</Link>
    <div>{children}</div>
    <List flexDirection="column" gap="16px">
      <h4>Technologies used</h4>
      <List gap="16px" flexWrap="wrap">
        {tecnologies}
      </List>
    </List>
  </List>
)
