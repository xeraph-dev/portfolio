import { Grid, IconButton, makeStyles, Typography } from '@material-ui/core'
import { motion, useAnimation } from 'framer-motion'
import Link from 'components/Link'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import { boxShadow } from 'helper'
import * as Icons from '@material-ui/icons'

const socialsNetworks = [
  {
    href: 'https://github.com/adrianrl99',
    icon: 'GitHub',
  },
  {
    href: 'https://www.linkedin.com/in/adrian-ren%C3%A9-l%C3%B3pez-cintas-17b7a61a2/',
    icon: 'LinkedIn',
  },
  {
    href: 'https://www.facebook.com/profile.php?id=100027969153798',
    icon: 'Facebook',
  },
  {
    href: 'https://t.me/fourblues',
    icon: 'Telegram',
  },
  {
    href: 'https://wa.me/5354023389',
    icon: 'WhatsApp',
  },
]

const useStyles = () =>
  makeStyles((theme) => ({
    title: {
      marginBottom: theme.spacing(4),
    },
    button: {
      boxShadow: boxShadow(true, theme.palette.type),
    },
  }))()

export default function Contact(): JSX.Element {
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
          {'Puedes contactarme en'.split('').map((letter, index) => (
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
        justify="center"
        variants={title}
        alignItems={'center'}
        initial={'hidden'}
        animate={controls}>
        {socialsNetworks.map(({ href, icon }, index) => {
          // eslint-disable-next-line @typescript-eslint/no-unsafe-assignment
          const Icon = Icons[icon]
          if (typeof Icon !== 'undefined')
            return (
              <Grid key={icon + index.toString()} variants={item} component={motion.div} item>
                <IconButton
                  className={classes.button}
                  component={Link}
                  href={href}
                  style={{ color: 'inherit' }}
                  target="_blank"
                  aria-label={icon}>
                  <Icon fontSize="large" />
                </IconButton>
              </Grid>
            )
        })}
      </Grid>
    </Grid>
  )
}
