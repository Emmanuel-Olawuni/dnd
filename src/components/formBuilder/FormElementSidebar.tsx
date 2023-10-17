import React from 'react'
import SidebarBtnElement from './SidebarBtnElement'
import { FormElements } from './FormElements'

const FormElementSidebar = () => {
  return (
    <aside className=" flex flex-grow w-[400px] max-w-[400px] flex-col bg-textBlack border-l border-white-800 p-4 gap-2 overflow-y-auto h-full">
      Elements
      <SidebarBtnElement formElements={FormElements.Textfield} />
    </aside>
  )
}

export default FormElementSidebar