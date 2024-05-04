import { FC } from 'react'
import {
  SiArchlinux,
  SiBootstrap,
  SiC,
  SiCss3,
  SiDocker,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGraphql,
  SiHaskell,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiLinux,
  SiMarkdown,
  SiMui,
  SiNextdotjs,
  SiNixos,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPostcss,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiRust,
  SiSass,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiVuetify,
} from 'react-icons/si'

import { Card } from '@/components/Card'
import { List } from '@/components/List'
import { SkillIcon } from '~/components/SkillIcon'

import styles from './Knowledge.module.css'

export const Knowledge: FC = () => (
  <List gap="32px" flexWrap="wrap">
    <Card className={styles.Knowledge}>
      <List flexDirection="column" gap="24px">
        <h2>Knowledge</h2>
        <section>
          <List gap="16px" flexWrap="wrap">
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="Html5" icon={SiHtml5} />
                <SkillIcon name="Css3" icon={SiCss3} />
                <SkillIcon name="JavaScript" icon={SiJavascript} />
                <SkillIcon name="TypeScript" icon={SiTypescript} />
              </List>
            </Card>
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="Sass" icon={SiSass} />
                <SkillIcon name="Postcss" icon={SiPostcss} />
                <SkillIcon name="Bootstrap" icon={SiBootstrap} />
              </List>
            </Card>
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="React.js" icon={SiReact} />
                <SkillIcon name="React Router" icon={SiReactrouter} />
                <SkillIcon name="Material-UI" icon={SiMui} />
                <SkillIcon name="Next.js" icon={SiNextdotjs} />
                <SkillIcon name="Redux" icon={SiRedux} />
              </List>
            </Card>
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="Vue.js" icon={SiVuedotjs} />
                <SkillIcon name="Vuetify" icon={SiVuetify} />
                <SkillIcon name="Nuxt.js" icon={SiNuxtdotjs} />
              </List>
            </Card>
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="Node.js" icon={SiNodedotjs} />
                <SkillIcon name="Express.js" icon={SiExpress} />
                <SkillIcon name="Vite" icon={SiVite} />
              </List>
            </Card>
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="Json" icon={SiJson} />
                <SkillIcon name="GraphQL" icon={SiGraphql} />
                <SkillIcon name="Markdown" icon={SiMarkdown} />
              </List>
            </Card>
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="Git" icon={SiGit} />
                <SkillIcon name="GitHub" icon={SiGithub} />
              </List>
            </Card>
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="Bash" icon={SiGnubash} />
                <SkillIcon name="Docker" icon={SiDocker} />
                <SkillIcon name="Linux" icon={SiLinux} />
                <SkillIcon name="Ubuntu" icon={SiUbuntu} />
                <SkillIcon name="NixOS" icon={SiNixos} />
                <SkillIcon name="ArchLinux" icon={SiArchlinux} />
              </List>
            </Card>
            <Card>
              <List gap="16px" flexWrap="wrap">
                <SkillIcon name="Vercel" icon={SiVercel} />
              </List>
            </Card>
          </List>
        </section>
      </List>
    </Card>
    <Card className={styles.Knowledge}>
      <List flexDirection="column" gap="24px">
        <h2>Learning</h2>
        <section>
          <List gap="16px" flexWrap="wrap">
            <SkillIcon name="C" icon={SiC} />
            <SkillIcon name="Rust" icon={SiRust} />
            <SkillIcon name="Haskell" icon={SiHaskell} />
          </List>
        </section>
      </List>
    </Card>
  </List>
)
