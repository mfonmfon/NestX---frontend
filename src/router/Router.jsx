import React from 'react'
import NestxLogo from '../component/NestxLogo'
import Program from '../pages/Program'
import Library from '../pages/Library'
import BecomeAMentor from '../pages/BecomeAMentor'
import Community from '../pages/Community'
import Blog from '../pages/Blog'
import SignIn from '../auth/SignIn'
import Layout from '../component/Layout'

const WEBSITEROUTES =[
  {
    path: '/',
    element: <Layout/>,
  },
  {
    path: '/program',
    element: <Program/>
  },
  {
    path: '/library',
    element: <Library/>
  },
  {
    path: '/becomeamentor',
    element: <BecomeAMentor/>
  },
  {
    path:'/community',
    element: <Community/>
  },
  {
    path:'/blog',
    element: <Blog/>
  },
  {
    path: '/signin',
    element:<SignIn/>
  }
]
export default WEBSITEROUTES