import { Card, CardContent, Grid, makeStyles, Typography } from '@material-ui/core'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import Link from 'components/Link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { boxShadow } from 'helper'

const works = [
  {
    name: 'MINJUS',
    url: 'https://www.minjus.gob.cu',
    image: '/sites/minjus.jpg',
  },
  {
    name: 'EPROMAP',
    url: 'https://www.epromap.cu',
    image: '/sites/epromap.jpg',
  },
]

const useStyles = () =>
  makeStyles((theme) => ({
    title: {
      marginBottom: theme.spacing(4),
    },
    link: {
      textDecoration: 'none',
      textDecorationColor: 'transparent !important',
    },
    card: {
      transition: theme.transitions.create(['box-shadow', 'background-color'], {
        easing: theme.transitions.easing.sharp,
        duration: theme.transitions.duration.leavingScreen,
      }),
      '&:hover': {
        transition: theme.transitions.create(['box-shadow', 'background-color'], {
          easing: theme.transitions.easing.sharp,
          duration: theme.transitions.duration.enteringScreen,
        }),
        backgroundColor: theme.palette.background.default,
        boxShadow: boxShadow(false, theme.palette.type),
      },
    },
    content: {
      padding: 0,
      '&:last-child': {
        paddingBottom: 0,
      },
    },
    text: {
      padding: theme.spacing(2),
    },
  }))()

export default function SectionWorks(): JSX.Element {
  const classes = useStyles()
  const [ref, inView] = useInView()
  const controls = useAnimation()

  const title = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08,
      },
    },
  }
  const item = {
    hidden: { y: -20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  }

  useEffect(() => {
    if (inView) void controls.start('visible')
  }, [inView])

  return (
    <Grid ref={ref} container justify={'center'} alignItems={'center'}>
      <Grid item xs={12}>
        <Typography
          component={motion.h3}
          className={classes.title}
          variant={'h3'}
          variants={title}
          align={'center'}
          initial={'hidden'}
          animate={controls}>
          {'Trabajos realizados'.split('').map((letter, index) => (
            <motion.span key={letter + index.toString()} variants={item}>
              {letter}
            </motion.span>
          ))}
        </Typography>
      </Grid>
      <Grid
        component={motion.div}
        item
        container
        spacing={3}
        xs={12}
        variants={title}
        alignItems={'center'}
        initial={'hidden'}
        justify="center"
        animate={controls}>
        {works.map((work, index) => (
          <Grid
            key={work.name + index.toString()}
            variants={item}
            component={motion.div}
            item
            xs={12}
            sm={6}
            md={4}>
            <Link className={classes.link} href={work.url} target="_blank">
              <Card className={classes.card}>
                <CardContent className={classes.content}>
                  <Image src={work.image} alt={work.name} height={282} width={500} />
                  <Typography className={classes.text} align={'center'} variant={'h5'}>
                    {work.name}
                  </Typography>
                </CardContent>
              </Card>
            </Link>
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
