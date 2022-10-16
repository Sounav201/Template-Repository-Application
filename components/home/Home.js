import React from 'react'
import { Input, InputLeftElement, InputGroup , Button} from '@chakra-ui/react'
import { AiOutlineSearch } from 'react-icons/ai';
import ApplicationHub from '../common/ApplicationHub/ApplicationHub';
const Home = () => {
    return (
        <div className='bg-transparent w-11/12 mx-auto'>
            <div className='my-3 p-1'>
                <h2 className=' text-left text-3xl text-white font-semibold mb-4 '>Submitted Applications</h2>

                <div className='flex gap-6 w-4/5 items-center'>
                    <div className='w-3/5 '>
                        <InputGroup>
                            <InputLeftElement
                                pointerEvents='none'
                                children={<AiOutlineSearch color='gray.300' size={22} />}
                            />
                            <Input borderRadius={"8px"} type='text' size={"md"} backgroundColor={"#FFFFFF"} _placeholder={{color:"black"}}  placeholder='Search submitted applications' />
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

export default Home