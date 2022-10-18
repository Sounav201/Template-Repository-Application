import { Button } from '@chakra-ui/react'
import React, { useState } from 'react'
import EditorComponent from '../../components/common/Editor/EditorComponent'
import VariablesBar from '../../components/common/Editor/VariablesBar'
import LeftSidebar from '../../components/common/LeftSidebar'

const Editor = () => {

    const [variables, setVariables] = useState([{ id: 1, name: "Date", data: "" },{ id: 2, name: "Customer Name", data: "" },
    { id: 3, name: "Address", data: "" } ,{id:4, name:"Loan Number", data:""},{id:5, name:"Loan Date", data:""},{id:6, name:"Loan Amount", data:""}, 
    {id:7, name:"Loan Interest", data:""},{id:8, name:"Mode of Payment", data:""},{id:9, name:"Collateral", data:""},{id:10, name:"Validity", data:""},    
    {id:11, name:"Sender Name", data:""}  ]);
  
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
    <div className='bg-[#2E0C6D] h-screen overflow-auto flex items-center justify-between'>
        <LeftSidebar activeTab={"create"} />
    <div className="mx-auto mb-6 lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className='w-4/5 mt-20 p-1 mx-auto flex flex-col items-center '>
     <div className='mb-8 mt-32 text-center p-1  py-4'>
      <h2 className='text-white text-3xl font-semibold my-2'>Instructions </h2>
      <p className='text-white text-lg'>Please enter the details of the variables in the right pane to fill in the application.</p>
      </div> 
    <div className='w-11/12 mx-auto my-2 flex items-center justify-end'><Button colorScheme={"red"}>Preview</Button></div>
    <EditorComponent variables={variables} />
    </div>

    </div>
    <VariablesBar variables={variables} handleTextInput={handleTextInput} />


    
    </div>
  )
}

export default Editor