import React, { useRef } from 'react'
import {
    Drawer,
    DrawerBody,
    DrawerFooter,
    DrawerHeader,
    DrawerOverlay,
    DrawerContent,
    DrawerCloseButton
} from '@chakra-ui/react'
import { Button, useDisclosure } from '@chakra-ui/react'
import VariableInput from './VariableInput'
import { useOutsideClick } from '@chakra-ui/react'

const VariablesDrawer = ({ selectedVariable, handleTextInput, setselectedVariable }) => {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const ref = useRef(null)
    useOutsideClick({
        ref: ref,
        handler: () => setselectedVariable(null),
      })
    const handleClose = () => {
        setselectedVariable(null);
        onClose();

    }


    return (
        <div>
            <Drawer ref={ref} placement={"right"} onClose={onClose} isOpen={selectedVariable != null } closeOnOverlayClick  closeOnEsc>
                <DrawerOverlay closeOnOverlayClick />
                <DrawerContent>
                    <DrawerHeader borderBottomWidth='1px'>Type in your variable here</DrawerHeader>
                    <DrawerBody>
                        <VariableInput variable={selectedVariable} handleTextInput={handleTextInput} />
                        <div className='my-2 '>        
                        <Button  variant='solid' colorScheme={"whatsapp"} mr={3} onClick={handleClose}>
                            Save
                        </Button>
                        </div>


                    </DrawerBody>
                </DrawerContent>
            </Drawer>

        </div>
    )
}

export default VariablesDrawer