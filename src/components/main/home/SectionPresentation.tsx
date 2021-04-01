import { Grid, Typography } from '@material-ui/core'
import { motion, useAnimation } from 'framer-motion'
import Image from 'next/image'
import { useEffect } from 'react'
import { useInView } from 'react-intersection-observer'
import Typed from 'react-typed'

export default function SectionPresentation(): JSX.Element {
  const [ref, inView] = useInView()
  const controls = useAnimation()

  const variantsImage = {
    hidden: {
      opacity: 0,
      x: -10,
      rotate: -15,
    },
    visible: {
      opacity: 1,
      x: 0,
      rotate: 0,
    },
    hover: {
      scale: 1.05,
    },
  }

  const variantsTextContainer = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        delayChildren: 0.3,
        staggerChildren: 0.08,
      },
    },
  }

  const variantsText = {
    hidden: { x: 10, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
    },
  }

  useEffect(() => {
    if (inView) void controls.start('visible')
  }, [inView])

  return (
    <Grid ref={ref} container justify={'center'} alignItems={'center'}>
      <Grid container justify={'center'} item xs={12} sm={6}>
        <motion.div
          animate={controls}
          initial="hidden"
          exit="hidden"
          whileHover="hover"
          variants={variantsImage}>
          <Image src={'/images/avatar.png'} alt={'avatar'} height={200} width={200} />
        </motion.div>
      </Grid>
      <Grid
        component={motion.div}
        container
        spacing={2}
        item
        xs={12}
        sm={6}
        animate={controls}
        initial="hidden"
        exit="hidden"
        variants={variantsTextContainer}>
        <Grid component={motion.div} variants={variantsText} item xs={12}>
          <Typography variant={'h5'} align={'center'}>
            Soy Adrian López Cintas
          </Typography>
        </Grid>
        <Grid component={motion.div} variants={variantsText} item xs={12}>
          <Typography variant={'h5'} align={'center'}>
            Cubano autodidacta
          </Typography>
        </Grid>
        <Grid component={motion.div} variants={variantsText} item xs={12}>
          <Typography variant={'h5'} align={'center'}>
            Desarrollador{' '}
            <Typed
              strings={['Front-end', 'Back-end Serverless']}
              typeSpeed={50}
              backSpeed={50}
              backDelay={2000}
              loop
            />
          </Typography>
        </Grid>
      </Grid>
    </Grid>
  )
}
