import Sidebar from '@/componant/sideMenu/sidebar'
import React from 'react'

export default function Layout({children}) {
  return (
    <>
    <Sidebar/>
    <div>{children}</div>
    </>
  )
}
