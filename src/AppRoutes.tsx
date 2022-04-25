import { FC } from 'react'
import { Route, Routes } from 'react-router-dom'

import { LangLayout } from '@/layouts/LangLayout'

import { AppLayout } from './layouts/AppLayout'
import { HomePage } from './pages/HomePage'
import { NotFoundPage } from './pages/NotFoundPage'

const AppRoutes: FC = () => (
  <Routes>
    <Route path="" element={<LangLayout />}>
      <Route path="" element={<AppLayout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Route>
  </Routes>
)

export default AppRoutes
