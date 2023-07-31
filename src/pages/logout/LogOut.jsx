import {
  AlertDialog,
  AlertDialogBody,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  useDisclosure,
  useToast,
} from "@chakra-ui/react";
import { useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BiLogOut } from "react-icons/bi";
import { startLoading, stopLoading } from "../../redux/actions/action.loading";
import { logout } from "../../redux/actions/action.user";
import { httpCRUDEndpoint } from "../../utils/api.helper";

/**
 *  Componente de des-logeo
 * @component
 * @returns {component} componente de des-logeo
 */

const LogOut = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const dispatch = useDispatch();
  const cancelRef = useRef();
  const toast = useToast();

  const { loading } = useSelector((state) => state.loading);

  /**
   * @handleButton
   * @async
   * @function
   * @param {string} res-state solicita los datos, vacia el objeto
   * @returns {object} devuelve el objeto vacio
   */

  const handleLogout = async () => {
    dispatch(startLoading());

    const RESPONSE = await httpCRUDEndpoint("get", "/endpoint/logout");

    if (RESPONSE.success) {
      dispatch(logout());
      sessionStorage.removeItem("token");
      sessionStorage.removeItem("user");
    } else {
      toast({
        title: "Error",
        description: "Hubo un error al cerrar sesión",
        status: "error",
        duration: 3000,
        isClosable: true,
      });
    }
    dispatch(stopLoading());
  };

  return (
    <>
      <Button
        fontSize="28"
        color="white"
        bg="brand.primary"
        _hover={{ opacity: 0.8, color: "white" }}
        onClick={onOpen}
      >
        <BiLogOut />
      </Button>
      <AlertDialog
        isOpen={isOpen}
        leastDestructiveRef={cancelRef}
        onClose={onClose}
      >
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Cerrar sesión
            </AlertDialogHeader>

            <AlertDialogBody>¿Seguro que desea cerrar sesión?</AlertDialogBody>

            <AlertDialogFooter>
              <Button variant="link" ref={cancelRef} onClick={onClose}>
                Cancelar
              </Button>
              <Button
                disabled={loading}
                bg="brand.primary"
                color="white"
                onClick={handleLogout}
                ml={3}
              >
                Cerrar sesión
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </AlertDialog>
    </>
  );
};

export default LogOut;
