import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { loginSuccess } from "../../redux/actions/action.user";
// import { postLogin } from "../helpers/api.helper";
import { httpCRUDEndpoint } from "../../utils/api.helper";
import { ViewIcon, ViewOffIcon } from "@chakra-ui/icons";
import {
  Button,
  FormControl,
  FormLabel,
  Input,
  useToast,
  HStack,
  VStack,
  InputGroup,
  InputRightElement,
  Image,
  Heading,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Text,
  Box,
  useMediaQuery,
} from "@chakra-ui/react";
import pkg from "../../package.alias.json";
import { startLoading, stopLoading } from "../../redux/actions/action.loading";

const TITLE = "Título";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [show, setShow] = useState(false);
  const mobile = useMediaQuery("(min-width: 768px)");
  const dispatch = useDispatch();
  const toast = useToast();

  const { loading } = useSelector((state) => state.loading);

  const handleLogin = async (e) => {
    dispatch(startLoading());

    e.preventDefault();

    let iniciandoSesion = toast({
      title: "Iniciando Sesión",
      status: "info",
    });

    const RESPONSE = await httpCRUDEndpoint("post", "/endpoint/login", {
      username,
      password,
    });

    if (RESPONSE.success) {
      toast.close(iniciandoSesion);
      dispatch(loginSuccess(RESPONSE.data.user));
      sessionStorage.setItem("user", JSON.stringify(RESPONSE.data.user));
      sessionStorage.setItem("token", RESPONSE.data.token);
      return dispatch(stopLoading());
    } else if (RESPONSE.data.error) {
      toast.close(iniciandoSesion);
      toast({
        description: RESPONSE.data.error.message,
        status: "error",
        title: "Error al iniciar sesión",
      });
      return dispatch(stopLoading());
    } else {
      toast.close(iniciandoSesion);
      toast({
        description: "Error interno",
        status: "error",
        title: "Error al iniciar sesión",
      });
      return dispatch(stopLoading());
    }
  };

  return (
    <HStack w="100vw" h="100vh">
      {mobile[0] && (
        <VStack w="50%" h="100%">
          <FormControl p={5}>
            <FormLabel
              fontWeight="bold"
              textAlign="center"
              ml={20}
              fontSize="28px"
              color="brand.primary"
            >
              {TITLE}
            </FormLabel>
          </FormControl>
        </VStack>
      )}
      <VStack
        h="100%"
        w={["100%", "50%"]}
        bgColor="brand.primary"
        display="flex"
        justifyContent={["space-between", "space-around"]}
      >
        {!mobile[0] && (
          <Box bg="white" borderRadius={5} w="xs">
            <FormControl p={2}>
              <FormLabel
                fontWeight="bold"
                textAlign="center"
                ml={20}
                fontSize="16px"
                color="brand.secondary"
              >
                {TITLE}
              </FormLabel>
            </FormControl>
          </Box>
        )}
        <Card
          maxW={["xs", "md"]}
          h={["sm", "md"]}
          borderRadius={6}
          bg="white"
          my="auto"
        >
          <CardHeader>
            <Heading textAlign="center" size="lg">
              Bienvenido
            </Heading>
          </CardHeader>
          <form id="formlogin">
            <CardBody placeSelf="center" pt={10}>
              <FormControl px={[7, 10]}>
                <FormLabel>Usuario</FormLabel>
                <Input
                  placeholder="Ingrese su usuario"
                  value={username}
                  name="username"
                  onChange={(e) => {
                    setUsername(e.target.value);
                  }}
                  type="text"
                  disabled={loading}
                />
              </FormControl>
              <br />
              <FormControl px={[7, 10]}>
                <FormLabel>Contraseña</FormLabel>
                <InputGroup>
                  <Input
                    placeholder="Ingrese su contraseña"
                    name="password"
                    value={password}
                    disabled={loading}
                    type={show ? "text" : "password"}
                    onChange={(e) => {
                      setPassword(e.target.value);
                    }}
                  />
                  <InputRightElement width="4.5rem">
                    <Button
                      h="1.75rem"
                      size="sm"
                      onClick={() => setShow(!show)}
                      variant="unstyled"
                    >
                      {show ? <ViewIcon /> : <ViewOffIcon />}
                    </Button>
                  </InputRightElement>
                </InputGroup>
              </FormControl>
            </CardBody>

            <CardFooter w="100%" display="flex" justifyContent="center">
              <Button
                isDisabled={loading}
                form="formlogin"
                color="white"
                bg="brand.primary"
                onClick={handleLogin}
                _hover={{ opacity: 0.8, color: "white" }}
                type="submit"
              >
                Ingresar
              </Button>
            </CardFooter>
          </form>
        </Card>
        <Text color="white" fontWeight="medium" placeSelf="end" pr={5}>
          Version: {pkg.version}
        </Text>
      </VStack>
    </HStack>
  );
};

export default Login;
