import React from 'react'
import LeftSidebar from '../../components/common/LeftSidebar'
import Create from '../../components/create/Create'

const create = () => {
  return (
    <div className='bg-[#2E0C6D] h-screen'>
        <LeftSidebar activeTab={"create"} />
    <div className="ml-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">
        <Create />
    </div>


    </div>
    
    </div>
  )
}

export default create