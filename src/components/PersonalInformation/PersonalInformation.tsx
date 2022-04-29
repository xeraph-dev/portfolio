import { FC } from 'react'

import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import { List } from '@/components/List'

import styles from './PersonalInformation.module.css'

export const PersonalInformation: FC = () => (
  <Card className={styles.PersonalInformation}>
    <section>
      <Center>
        <List flexDirection="column" gap="16px">
          <h1>I am Adrian López</h1>
          <h2>Front-end developer</h2>
          <h2>Self-taught and enthusiastic programmer</h2>
          <h3>ArchLinux user</h3>
        </List>
      </Center>
    </section>
  </Card>
)
