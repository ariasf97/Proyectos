import {
  Box,
  Button,
  FormControl,
  Input,
  InputGroup,
  InputRightElement,
  Stack,
} from "@chakra-ui/react";
import { useState } from "react";
import { useLogin } from "../hooks/useLogin";

export const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");
  const { login } = useLogin();

  const handleChangeUser = ({ target }) => {
    setUser(target.value);
  };

  const handleChangePassword = ({ target }) => {
    setPassword(target.value);
  };
  const handleLogin = async () => {
    const rep = await login(user, password);
    console.log({ rep });
  };
  const handlePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Box
      backgroundImage="url('/src/assets/img/bg.webp')" // Set the path to your background image
      backgroundSize="cover" // Adjust based on your preference
      backgroundPosition="center"
      backgroundRepeat="no-repeat"
      minHeight="100vh" // Set the minimum height to 100% of the viewport height
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <Box
        boxShadow="dark-lg"
        bg="white"
        maxW="355px"
        p="20px"
        borderRadius="12"
        w="100%"
        align="center"
      >
        <FormControl>
          <Stack spacing={3}>
            <Input
              variant="outline"
              fontSize="1.2em"
              type="text"
              placeholder="Usuario o Email"
              value={user}
              onChange={handleChangeUser}
            />

            <InputGroup size="md">
              <Input
                pr="4.5rem"
                type={showPassword ? "text" : "password"}
                placeholder="Ingrese la contraseña"
                value={password}
                onChange={handleChangePassword}
              />
              <InputRightElement width="4.5rem">
                <Button
                  h="1.75rem"
                  size="sm"
                  onClick={handlePasswordVisibility}
                >
                  {showPassword ? "Ocultar" : "Mostrar"}
                </Button>
              </InputRightElement>
            </InputGroup>
          </Stack>
        </FormControl>

        <Button colorScheme="teal" mt={4} onClick={handleLogin}>
          Iniciar sesión
        </Button>
      </Box>
    </Box>
  );
};
