import { FC } from 'react'

import { Center } from '@/components/Center'
import { Container } from '@/components/Container'
import { List } from '@/components/List'

export const HomePage: FC = () => (
  <Container>
    <Center>
      <List flexDirection="column">
        <h1 style={{ height: '10000px' }}>Portfolio</h1>
      </List>
    </Center>
  </Container>
)
