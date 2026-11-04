import { LoginModal } from "./auth/loginModal";
import { SignupModal } from "./auth/signupModal";
import { CreateProjectDialog } from "../projects/createProjectDialog";
import { ModalType } from "../../store/modalStore";

export const modalRegistry: Record<ModalType, React.ComponentType> = {
  login: LoginModal,
  signup: SignupModal,
  "create-project": CreateProjectDialog,
};
