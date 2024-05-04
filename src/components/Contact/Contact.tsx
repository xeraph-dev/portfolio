import { FC } from 'react'

import Link from '@/components/Link'
import { List } from '@/components/List'

import styles from './Contact.module.css'

export const Contact: FC = () => (
  <List
    flexDirection="column"
    alignItems="center"
    gap="16px"
    className={styles.Contact}
  >
    <h2>Contact me</h2>
    <List gap="16px" justifyContent="center" flexWrap="wrap">
      <Link to="https://github.com/xeraph-dev">GitHub</Link>
      <Link to="https://www.linkedin.com/in/adrian-l%C3%B3pez/">Linkedin</Link>
    </List>
  </List>
)
