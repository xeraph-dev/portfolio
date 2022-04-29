import { FC } from 'react'
import {
  SiChakraui,
  SiCss3,
  SiDebian,
  SiDocker,
  SiDrupal,
  SiExpress,
  SiGit,
  SiGithub,
  SiGnubash,
  SiHtml5,
  SiJavascript,
  SiLinux,
  SiMaterialui,
  SiNextdotjs,
  SiNodedotjs,
  SiPhp,
  SiPostgresql,
  SiReact,
  SiReactrouter,
  SiRedux,
  SiSass,
  SiTypescript,
  SiVite,
  SiVuedotjs,
} from 'react-icons/si'

import { Accordion } from '@/components/Accordion'
import { Card } from '@/components/Card'
import { List } from '@/components/List'

import { SkillIcon } from '../SkillIcon'
import { ExperienceContent } from './ExperienceContent'
import { ExperienceTitle } from './ExperienceTitle'
import styles from './ProfesionalExperience.module.css'

export const ProfesionalExperience: FC = () => (
  <Card className={styles.ProfesionalExperience}>
    <List flexDirection="column" gap="24px">
      <h2>Professional experience</h2>
      <Accordion
        initialExpanded={[0]}
        items={[
          {
            title: (
              <ExperienceTitle
                company="Divertimento"
                start="2022-03"
                end={(() => {
                  let month = `${new Date().getMonth() + 1}`
                  const year = new Date().getFullYear()
                  if (+month < 10) month = `0${month}`
                  return `${year}-${month}`
                })()}
              />
            ),
            content: (
              <ExperienceContent
                companyUrl="https://github.com/divertimento"
                start={2022}
                end={2022}
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
                    </List>
                  </Card>,
                  <Card key="vue">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Vue.js" icon={SiVuedotjs} />
                    </List>
                  </Card>,
                  <Card key="api">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Node.js" icon={SiNodedotjs} />
                      <SkillIcon size={32} name="Express.js" icon={SiExpress} />
                      <SkillIcon size={32} name="Vite" icon={SiVite} />
                    </List>
                  </Card>,
                  <Card key="git">
                    <List gap="16px" flexWrap="wrap">
                      <SkillIcon size={32} name="Git" icon={SiGit} />
                      <SkillIcon size={32} name="GitHub" icon={SiGithub} />
                    </List>
                  </Card>,
                ]}
              />
            ),
          },
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
