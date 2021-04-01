import { Grid } from '@material-ui/core'
import SectionPresentation from 'components/main/home/SectionPresentation'
import SectionSkills from 'components/main/home/SectionSkills'
import SectionWorks from 'components/main/home/SetcionWorks'
import { LayoutDefault } from 'layouts'
import { NextSeo } from 'next-seo'

export default function HomePage(): JSX.Element {
  return (
    <LayoutDefault>
      <NextSeo />
      <Grid container spacing={10}>
        <Grid item container>
          <SectionPresentation />
        </Grid>
        <Grid item container>
          <SectionSkills />
        </Grid>
        <Grid item container>
          <SectionWorks />
        </Grid>
      </Grid>
    </LayoutDefault>
  )
}
