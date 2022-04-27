import { FC, useEffect, useState } from 'react'
import { MdMoreVert } from 'react-icons/md'
import { Outlet } from 'react-router-dom'

import { List } from '@/components/List'
import { Menu } from '@/components/Menu'
import { LanguageMenu } from '@/components/menus/LanguageMenu'
import { ThemeMenu } from '@/components/menus/ThemeMenu'
import { Navbar } from '@/components/Navbar'
import { Spacer } from '@/components/Spacer'
import { breakpoints, useMediaQuery } from '@/hooks/useMediaQuery'

import styles from './AppLayout.module.css'

const NavbarRightMenus = () => {
  const [open, setOpen] = useState(false)

  const isMobile = useMediaQuery(breakpoints.only('xs'))

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  useEffect(() => {
    if (!isMobile) setOpen(false)
  }, [isMobile])

  return isMobile ? (
    <Menu
      open={open}
      onClose={handleClose}
      onOpen={handleOpen}
      title={<MdMoreVert fontSize="24px" />}
      buttonProps={{
        className: styles.AppLayout_NavbarRightMenus_button,
      }}
    >
      <LanguageMenu />
      <ThemeMenu />
    </Menu>
  ) : (
    <>
      <LanguageMenu />
      <ThemeMenu />
    </>
  )
}

export const AppLayout: FC = () => (
  <List className={styles.AppLayout} flexDirection="column" gap="32px">
    <Navbar
      variant="sticky"
      containerProps={{
        className: styles.AppLayout_Navbar,
      }}
      listProps={{
        gap: '8px',
      }}
    >
      <h3>Portfolio</h3>
      <Spacer />
      <NavbarRightMenus />
    </Navbar>
    <div className={styles.AppLayout_content}>
      <Outlet />
    </div>
  </List>
)
