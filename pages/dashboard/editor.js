import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import Editor from '../../components/common/Editor/Editor'
import VariablesBar from '../../components/common/Editor/VariablesBar'
import LeftSidebar from '../../components/common/LeftSidebar'
import Create from '../../components/create/Create'

const editor = () => {

    const [variables, setVariables] = useState([{ id: 1, name: "Date", data: "" },
    { id: 2, name: "Customer Name", data: "" },
    { id: 3, name: "Address", data: "" } , {id:4, name:"Sender Name", data:""} , {id:5, name:"Bank Name", data:""} ]);
  
    const handleTextInput = (variable, inputText) => {
        setVariables((prevState) => {
          let index = variables.findIndex((item) => item.id === variable.id);
          if (index !== -1) {
           // console.log("Found : ", variables[index]);
            prevState[index].data = inputText;
          }
          return [...prevState];
        });
        return;
      };
    


  return (
    <div className='bg-[#2E0C6D] h-screen flex items-center justify-between'>
        <LeftSidebar activeTab={"create"} />
    <div className="mx-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    {/* <div className="px-6 pt-6 2xl:container bg-[#2E0C6D] h-full">
        <Create />
    </div> */}
    <div className='w-4/5 p-1 mx-auto'>
    <div className='w-11/12 mx-auto my-2 flex items-center justify-end'><Button colorScheme={"red"}>Preview</Button></div>
    <Editor variables={variables} />
    </div>

    </div>
    <VariablesBar variables={variables} handleTextInput={handleTextInput} />


    
    </div>
  )
}

export default editor