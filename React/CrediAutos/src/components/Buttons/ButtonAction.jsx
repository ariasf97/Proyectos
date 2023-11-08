
import { useDisclosure } from '@chakra-ui/react'
import '../../assets/styles/ButtonAction.css'
import { ModalForm } from '../Modals/ModalForm'

export function ButtonAction() {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <button className='ca-conversionMessage-button-action' onClick={onOpen}>Solicitar mi crédito</button>
      <ModalForm 
        isOpen={isOpen}
        onClose={onClose}
      />
    </>
  )
}

