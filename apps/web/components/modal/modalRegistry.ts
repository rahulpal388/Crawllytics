import { LoginModal } from "./auth/loginModal";
import { SignupModal } from "./auth/signupModal";
import { CreateProjectDialog } from "../projects/createProjectDialog";
import { ModalType } from "../../store/modalStore";

const EmptyModal = () => null;

export const modalRegistry: Record<ModalType, React.ComponentType> = {
  login: LoginModal,
  signup: SignupModal,
  "create-project": CreateProjectDialog,
  page: EmptyModal,
  "view-issues": EmptyModal,
  "view-pages": EmptyModal,
};
