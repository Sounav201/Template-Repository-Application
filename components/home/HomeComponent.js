import React, { useContext,useEffect } from 'react'
import { Input, InputLeftElement, InputGroup , Button} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai';
import ApplicationHub from '../common/ApplicationHub/ApplicationHub';
import AppContext from '../../AppContext';
import axios from 'axios';

const HomeComponent = () => {
    const {user,setapplications,applications} = useContext(AppContext);
    async function getApplications(approverID)
    {
        const response = await axios.post('/api/fetchApplicationforApprover',{approverID:approverID})
        // console.log('Response from server for approver applications : ', response.data.applications);
        if(response.status === 200)
        {
            setapplications(response.data.applications);
        }
    }


    useEffect(() => {
        if(user.length > 0  && user.includes("Approver") )
        {
        //Make API Call to get all the applications for the concerned Approver
        var approverID = 0;
        if(user == "Legal Approver")
        {
            approverID = 1;
        }
        else if(user == "Marketing Approver")
        {
            approverID = 2;
        }
        else if(user == "Compliance Approver")
        {
            approverID = 3;

        }
        else if(user == "Business Head Approver")
        {
            approverID = 4;
        }

        //Make call
        if(approverID>0)
        {
            //Make API Call to get all the applications for the concerned Approver
            getApplications(approverID);
        }


        }


    }, [user])
    
    useEffect(() => {
        if(user.length > 0  && user.includes("Approver") )
        {
        //Make API Call to get all the applications for the concerned Approver
        var approverID = 0;
        if(user == "Legal Approver")
        {
            approverID = 1;
        }
        else if(user == "Marketing Approver")
        {
            approverID = 2;
        }
        else if(user == "Compliance Approver")
        {
            approverID = 3;

        }
        else if(user == "Business Head Approver")
        {
            approverID = 4;
        }

        //Make call
        if(approverID>0)
        {
            //Make API Call to get all the applications for the concerned Approver
            getApplications(approverID);
        }


        }

    }, [])
    
    

    return (
        <div className='bg-transparent w-11/12 mx-auto'>
            <div className='my-3 p-1'>
                <h2 className=' text-left text-3xl text-white font-semibold mb-4 '>{user.includes("Approver") ? "Received Applications" : "Submitted Applications"}</h2>

                <div className='flex gap-6 w-4/5 items-center'>
                    <div className='w-3/5 '>
                        <InputGroup>
                            <InputLeftElement
                            pointerEvents='none'>
                            <AiOutlineSearch color='gray.300' size={22} />
                            </InputLeftElement>
                            <Input borderRadius={"8px"} type='text' size={"md"} backgroundColor={"#FFFFFF"} _placeholder={{color:"black"}}  placeholder={user.includes("Approver") ? "Search received applications" : "Search submitted applications"} />
                        </InputGroup>



                    </div>
                    <div>
                    <Button colorScheme='green' variant='solid'>Filters </Button>            
                    </div>
                </div>


            </div>
            <div>
                <div className='mt-16 mb-2  '>
                    <ApplicationHub />
                </div>
            </div>



        </div>
    )
}

export default HomeComponent