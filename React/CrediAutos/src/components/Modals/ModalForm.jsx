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
            <Modal isOpen={isOpen} onClose={onClose} >
                <ModalOverlay  />
                <ModalContent bg='var(--primary)' pt={10} pb={10} pl={2} pr={2} maxW='lg' >
                    <ModalCloseButton
                        color='var(--secundary)' // Cambia el color a rojo
                        size="md"
                        mr={4}  // Establece el tamaño a grande
                        fontSize={20}
                    />
                    <ModalBody>
                        <Form />
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
