import { Grid, Typography } from '@material-ui/core'
import { motion, useAnimation } from 'framer-motion'
import { useEffect } from 'react'
import Image from 'next/image'
import { useInView } from 'react-intersection-observer'

const skills = [
  'html',
  'css',
  'bootstrap',
  'sass',
  'javascript',
  'typescript',
  'php',
  'nodejs',
  'reactjs',
  'redux',
  'material-ui',
  'nextjs',
  'graphql',
  'apollo',
  'proto',
  'grpc',
  'dart',
  'flutter',
  'drupal',
  'postgresql',
  'mongodb',
  'git',
  'github',
]

export default function SectionSkills(): JSX.Element {
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
    hover: {
      y: 10,
    },
  }

  useEffect(() => {
    if (inView) void controls.start('visible')
    else void controls.stop()
  }, [inView])

  return (
    <Grid ref={ref} container justify={'center'} alignItems={'center'}>
      <Grid item xs={12}>
        <Typography
          component={motion.h3}
          variant={'h3'}
          variants={title}
          align={'center'}
          initial={'hidden'}
          animate={controls}>
          {'Conocimientos'.split('').map((letter, index) => (
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
        variants={title}
        alignItems={'center'}
        initial={'hidden'}
        justify="center"
        animate={controls}>
        {skills.map((skill) => (
          <Grid
            key={skill}
            whileHover="hover"
            variants={item}
            component={motion.div}
            item
            xs={3}
            sm={2}
            md={1}>
            <Image alt={skill} src={`/skills/${skill}.svg`} height={126} width={126} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  )
}
