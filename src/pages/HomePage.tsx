import { FC } from 'react'

import { Container } from '@/components/Container'
import { List } from '@/components/List'
import { Contact } from '~/components/Contact'
import { Knowledge } from '~/components/Knowledge'
import { PersonalInformation } from '~/components/PersonalInformation'
import { ProfesionalExperience } from '~/components/ProfesionalExperience'

export const HomePage: FC = () => (
  <Container>
    <List flexDirection="column" gap="32px">
      <PersonalInformation />
      <Knowledge />
      <ProfesionalExperience />
      <Contact />
    </List>
  </Container>
)
