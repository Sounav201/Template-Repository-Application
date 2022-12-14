import { Button } from '@chakra-ui/react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'

export default function Home() {
  return (
    <div >
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>


        <div class="max-w-xl mx-auto my-4 border-b-2 pb-4">
          <div class="flex pb-3 ">
            <div class="flex-1">
            </div>

            <div class="flex-1">
              <div class="w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center">
                <span class="text-white text-center w-full"><i class="fa fa-check w-full fill-current white"></i></span>
              </div>
            </div>


            <div class="w-1/6 align-center items-center align-middle content-center flex">
              <div class="w-full bg-grey-light rounded items-center align-middle align-center flex-1">
                <div class="bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width:"100%"}}></div>
              </div>
            </div>


            <div class="flex-1">
              <div class="w-10 h-10 bg-green-600 status-circle mx-auto rounded-full text-lg text-white flex items-center">
                <span class="text-white text-center w-full"><i class="fa fa-check w-full fill-current white"></i>2</span>
              </div>
            </div>

            <div class="w-1/6 align-center items-center align-middle content-center flex">
              <div class="w-full bg-gray-300 rounded items-center align-middle align-center flex-1">
                <div class="bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width:"20%"}}></div>
              </div>
            </div>

            <div class="flex-1">
              <div class="w-10 h-10 bg-white border-2 status-circle border-grey-light mx-auto rounded-full text-lg text-white flex items-center">
                <span class="text-gray-700 text-center w-full">3</span>
              </div>
            </div>


            <div class="w-1/6 align-center items-center align-middle content-center flex">
              <div class="w-full bg-gray-400 rounded items-center align-middle align-center flex-1">
                <div class="bg-green-400 text-xs leading-none py-1 text-center text-grey-darkest rounded " style={{width:"0%"}}></div>
              </div>
            </div>


            <div class="flex-1">
              <div class="w-10 h-10 bg-white status-circle border-2 border-gray mx-auto rounded-full text-lg text-white flex items-center">
                <span class="text-black text-center w-full">4</span>
              </div>
            </div>


            <div class="flex-1">
            </div>
          </div>

          <div class="flex text-xs content-center text-center">
            <div class="w-1/4">
              Legal
            </div>

            <div class="w-1/4">
              Marketing
            </div>

            <div class="w-1/4">
              Compliance
            </div>

            <div class="w-1/4">
              Business Head
            </div>
          </div>
        </div>
        <div className='w-fit mx-auto my-4'>
        <Link href={"/login"}>
          <Button colorScheme="messenger" variant='solid'>Go to Login Page</Button>
        </Link>
        </div>
        
    </div>
  )
}
