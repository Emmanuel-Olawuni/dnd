import Header from '@/components/ui/Header'
import React from 'react'

export default function layout({children}:{children: React.ReactNode}) {
  return (

    <>
    <Header />
    <div>{children}</div>
    </>
  )
}
