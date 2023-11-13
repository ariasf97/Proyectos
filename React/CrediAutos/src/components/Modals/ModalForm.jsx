import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalBody,
    ModalCloseButton,
} from '@chakra-ui/react'

import PropTypes from 'prop-types';
import { Form } from '../Forms/Form';

export const ModalForm = ({ isOpen, onClose }) => {
    return (
        <>
            <Modal isOpen={isOpen} onClose={onClose}  isCentered={true}>
                <ModalOverlay  />
                <ModalContent bg='var(--bgModal)' pt={10} pb={10} pl={2} pr={2} maxW='lg'  borderRadius='12px' >
                    <ModalCloseButton
                        color='var(--secundary)' 
                        size="md"
                        mr={4} 
                        fontSize={20}
                    />
                    <ModalBody>
                        <Form isActive={false}/>
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

ModalForm.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    onClose: PropTypes.func.isRequired
};
