import { DateTime } from 'luxon'
import { FC, ReactNode, useMemo } from 'react'
import { IconBaseProps, IconType } from 'react-icons'
import { DiHaskell, DiRust } from 'react-icons/di'
import {
  SiArchlinux,
  SiBootstrap,
  SiChakraui,
  SiCss3,
  SiDebian,
  SiDocker,
  SiDrupal,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiGraphql,
  SiHtml5,
  SiJavascript,
  SiJson,
  SiLinux,
  SiMarkdown,
  SiMaterialui,
  SiNextdotjs,
  SiNixos,
  SiNodedotjs,
  SiNuxtdotjs,
  SiPhp,
  SiPostcss,
  SiPostgresql,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTypescript,
  SiUbuntu,
  SiVercel,
  SiVite,
  SiVuedotjs,
  SiVuetify,
} from 'react-icons/si'

import { Accordion } from '@/components/Accordion'
import { Card } from '@/components/Card'
import { Center } from '@/components/Center'
import { Container } from '@/components/Container'
import Link from '@/components/Link'
import { List } from '@/components/List'

import styles from './HomePage.module.css'

type SkillIconProps = IconBaseProps & {
  name: string
  icon: IconType
}

const SkillIcon: FC<SkillIconProps> = ({ icon: Icon, name, ...props }) => (
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

type ExperienceTitleProps = {
  company: string
  start: string
  end: string
}

const ExperienceTitle: FC<ExperienceTitleProps> = ({ company, start, end }) => {
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

type ExperienceContentProps = {
  companyUrl: string
  tecnologies: ReactNode[]
  start: number
  end: number
}

const ExperienceContent: FC<ExperienceContentProps> = ({
  children,
  companyUrl,
  tecnologies,
  start,
  end,
}) => (
  <List flexDirection="column" gap="16px">
    <h4>
      {start} - {end}
    </h4>
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

const PersonalInformation: FC = () => (
  <Card className={styles.HomePage_section_info}>
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

const Knowledge: FC = () => (
  <List gap="32px" flexWrap="wrap">
    <Card className={styles.HomePage_section_skills}>
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
                <SkillIcon name="Material-UI" icon={SiMaterialui} />
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
    <Card className={styles.HomePage_section_skills}>
      <List flexDirection="column" gap="24px">
        <h2>Learning</h2>
        <section>
          <List gap="16px" flexWrap="wrap">
            <SkillIcon name="Rust" icon={DiRust} />
            <SkillIcon name="Haskell" icon={DiHaskell} />
          </List>
        </section>
      </List>
    </Card>
  </List>
)

const ProfesionalExperience: FC = () => (
  <Card>
    <List flexDirection="column" gap="24px">
      <h2>Profesional experience</h2>
      <Accordion
        initialExpanded={[0]}
        items={[
          {
            title: (
              <ExperienceTitle
                company="IJP Software"
                start={'2021-07'}
                end={'2022-03'}
              />
            ),
            content: (
              <ExperienceContent
                companyUrl="https://github.com/IJPSoftware"
                tecnologies={[
                  <Card key="languages">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Html5" icon={SiHtml5} />
                      <SkillIcon size={32} name="Css3" icon={SiCss3} />
                      <SkillIcon
                        size={32}
                        name="JavaScript"
                        icon={SiJavascript}
                      />
                      <SkillIcon
                        size={32}
                        name="TypeScript"
                        icon={SiTypescript}
                      />
                    </List>
                  </Card>,
                  <Card key="react">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="React.js" icon={SiReact} />
                      <SkillIcon
                        size={32}
                        name="React Router"
                        icon={SiReactrouter}
                      />
                      <SkillIcon
                        size={32}
                        name="Material-UI"
                        icon={SiMaterialui}
                      />
                      <SkillIcon size={32} name="Charka-UI" icon={SiChakraui} />
                      <SkillIcon size={32} name="Next.js" icon={SiNextdotjs} />
                      <SkillIcon size={32} name="Redux" icon={SiRedux} />
                    </List>
                  </Card>,
                  <Card key="css">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Sass" icon={SiSass} />
                    </List>
                  </Card>,
                  <Card key="vue">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Vue.js" icon={SiVuedotjs} />
                    </List>
                  </Card>,
                  <Card key="node">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Node.js" icon={SiNodedotjs} />
                      <SkillIcon size={32} name="Express.js" icon={SiExpress} />
                    </List>
                  </Card>,
                  <Card key="git">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Git" icon={SiGit} />
                      <SkillIcon size={32} name="GitHub" icon={SiGithub} />
                    </List>
                  </Card>,
                  <Card key="cli">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Bash" icon={SiGnubash} />
                      <SkillIcon size={32} name="Docker" icon={SiDocker} />
                    </List>
                  </Card>,
                ]}
                start={2021}
                end={2022}
              />
            ),
          },
          {
            title: (
              <ExperienceTitle company="Xetid" start="2019-10" end="2021-08" />
            ),
            content: (
              <ExperienceContent
                companyUrl="https://www.xetid.cu"
                start={2019}
                end={2021}
                tecnologies={[
                  <Card key="languages">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Html5" icon={SiHtml5} />
                      <SkillIcon size={32} name="Css3" icon={SiCss3} />
                      <SkillIcon
                        size={32}
                        name="JavaScript"
                        icon={SiJavascript}
                      />
                      <SkillIcon size={32} name="Php" icon={SiPhp} />
                    </List>
                  </Card>,
                  <Card key="tools">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Drupal" icon={SiDrupal} />
                      <SkillIcon
                        size={32}
                        name="PostgreSQL"
                        icon={SiPostgresql}
                      />
                      <SkillIcon size={32} name="Linux" icon={SiLinux} />
                      <SkillIcon size={32} name="Debian" icon={SiDebian} />
                    </List>
                  </Card>,
                ]}
              />
            ),
          },
        ]}
      />
    </List>
  </Card>
)

const Contact: FC = () => (
  <List flexDirection="column" alignItems="center" gap="16px">
    <h2>Contact me</h2>
    <List gap="16px" justifyContent="center" flexWrap="wrap">
      <Link to="https://github.com/adrianrl99">GitHub</Link>
      <Link to="https://t.me/fourblues">Telegram</Link>
      <Link to="https://www.linkedin.com/in/adrian-l%C3%B3pez/">Linkedin</Link>
    </List>
  </List>
)

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
