'use client'
import { DesignerContext } from '@/contexts/DesignerContext'
import React, { useContext } from 'react'


const UseDesigner = () => {
    const context = useContext(DesignerContext)
    if(!context){
        throw new Error('useDesigner must be used within a designer Context')
    }
  return context;
}

export default UseDesigner