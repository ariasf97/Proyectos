import { consumoService } from "../service/loginService";

export const useLogin = () => {
  const login = async (user, password) => {
    const resp = await consumoService({ user, password });
  };

  return {
    login,
  };
};
