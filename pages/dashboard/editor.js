import { Button, useDisclosure } from '@chakra-ui/react'
import React, { useEffect, useState ,useRef} from 'react'
import EditorComponent from '../../components/common/Editor/EditorComponent'
import VariablesBar from '../../components/common/Editor/VariablesBar'
import LeftSidebar from '../../components/common/LeftSidebar'
import {
  Drawer,
  DrawerBody,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
} from '@chakra-ui/react'
import VariablesDrawer from '../../components/common/Editor/VariablesDrawer'
import Router, { useRouter } from 'next/router'
import Swal from 'sweetalert2'


const Editor = () => {


    const [variables, setVariables] = useState([
      { id: 1, name: "Date", data: "",click:false },
    { id: 2, name: "Name", data: "",click:false },
    { id: 3, name: "SanctionID", data: "",click:false },
    {id:4, name:"Product Name", data:"",click:false},
    {id:5, name:"Customer Name", data:"",click:false},
    {id:6, name:"Mobile Number", data:"", click:false}, 
    {id:7, name:"Customer Address", data:"", click:false},
    {id:8, name:"Product Brand", data:"", click:false},
    {id:9, name:"Category Make", data:"", click:false},
    {id:10, name:"Product Model", data:"", click:false},    
    {id:11, name:"Scheme Code", data:"", click:false},
    {id:12, name:"Emi", data:"", click:false},
    {id:13, name:"Product Cost", data:"", click:false},
    {id:14, name:"Processing Fees", data:"", click:false},
    {id:15, name:"Margin Money", data:"", click:false},
    {id:16, name:"Advance EMI", data:"", click:false},
    {id:17, name:"Finance Amount", data:"", click:false},
    {id:18, name:"Dealer Subvention", data:"", click:false},
    {id:19, name:"tvsDeduction", data:"", click:false},
    {id:20, name:"otherCharges", data:"", click:false},
    {id:21, name:"totalAmount", data:"", click:false},
    {id:22, name:"extendedWarranty", data:"", click:false},
    {id:23, name:"netLoan", data:"", click:false},
    {id:24, name:"insurance", data:"", click:false},
    {id:25, name:"disbursement", data:"", click:false},
    {id:26, name:"assetInsurance", data:"", click:false},
    {id:27, name:"instaFee", data:"", click:false},
    {id:28, name:"deductionSum", data:"", click:false},
    {id:29, name:"Sender name", data:"", click:false},]);
    const router = useRouter();

    const { isOpen, onOpen, onClose } = useDisclosure()
    const [selectedVariable, setselectedVariable] = useState(null);
    const [applicationBody, setapplicationBody] = useState(null);
    const applicationRef = useRef(null)
    useEffect(() => {

      if(typeof(window)!= undefined)
      {
        if(localStorage.getItem("applicationVariables"))
      {
        console.log('Getter runs!');
        setVariables(JSON.parse(localStorage.getItem("applicationVariables")));
                  
      }
        
      }
  
      
    }, [])
    
  
    
  
    useEffect(() => {
      console.log('Application Body : ', applicationBody, typeof(applicationBody))
      if(typeof(window)!= undefined && applicationBody!=null)
      {
        console.log('Setter runs!');

        localStorage.setItem('applicationVariables',JSON.stringify(variables));
        localStorage.setItem("applicationBody", JSON.stringify(applicationBody));

       router.push('preview');
      }

    }, [applicationBody])

  


    const handleTextInput = (ID, inputText) => {
        setVariables((prevState) => {
          let index = variables.findIndex((item) => item.id === ID);
          if (index !== -1) {
           // console.log("Found : ", variables[index]);
            prevState[index].data = inputText;
          }
          return [...prevState];
        });
        return;
      };
    
      const handleSelection = (ID) => {
        const index = variables.findIndex((item) => ID ===item.id);
        if(index!=-1)
        setselectedVariable(variables[index]);
      
       }

      function checkEmpty()  {
        console.log('In empty check');
        console.log(variables)
        // variables.map((item) => {
        //   console.log(item.data,item.data.length)
        //   if(item.data.length>0) {
        //     console.log('Not empty');
        //     return false;
        //   }
        // })
        for(var i = 0;i<variables.length;i++) {
          if(variables[i].data.length>0) {
            console.log('Not empty');
            return false;
          }
        }
        console.log('Outside!')
        return true;
      }
      const handleRef = () => {
        //Check if user has filled out any of the fields
        console.log('Ref : ', applicationRef.current);

        if(checkEmpty())
        { console.log('Fields empty')
          Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Please enter some data!',
            footer: '<a href="">Why do I have this issue?</a>'
          })
          return;
        }
        else{
          console.log('Fill application body')
        setapplicationBody(applicationRef.current.outerHTML);
        }
      }


  return (
    <div className='bg-[#2E0C6D] h-screen overflow-auto flex items-center justify-between'>
        <LeftSidebar activeTab={"create"} />
    <div className="mx-auto mb-4  h-screen lg:w-[75%] xl:w-[80%] 2xl:w-[85%]">
    <div className='w-4/5  p-1 mx-auto flex flex-col items-center '>
     <div className='my-4 text-center p-1  py-4'>
      <h2 className='text-white text-3xl font-semibold my-2'>Instructions </h2>
      <p className='text-white text-lg'>Please enter the details of the variables in the right pane to fill in the application.</p>
      </div> 
    <div className='mt-2'>
    <EditorComponent variables={variables} handleSelection={handleSelection} applicationRef={applicationRef} handleRef={handleRef} />
    </div>
    </div>

    </div>
    {/* <VariablesBar variables={variables} handleTextInput={handleTextInput} />
 */}
    <VariablesDrawer selectedVariable={selectedVariable} handleTextInput={handleTextInput} setselectedVariable={setselectedVariable} />
    
    </div>
  )
}

export default Editor