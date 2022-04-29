import { DateTime } from 'luxon'
import { FC, useMemo } from 'react'

export type ExperienceTitleProps = {
  company: string
  start: string
  end: string
}

export const ExperienceTitle: FC<ExperienceTitleProps> = ({
  company,
  start,
  end,
}) => {
  const diff = useMemo(() => {
    let result = ''
    const diff = DateTime.fromISO(start)
      .until(DateTime.fromISO(end))
      .toDuration(['years', 'months'])
      .toObject()
    if (diff.years) result += `${diff.years} years`
    if (diff.months)
      result += `${diff.years ? ' y' : ''} ${diff.months + 1} months`

    return result
  }, [start, end])

  return (
    <h3>
      {company} | {diff}
    </h3>
  )
}
