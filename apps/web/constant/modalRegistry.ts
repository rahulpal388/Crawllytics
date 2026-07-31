import { LoginModal } from "../components/modal/auth/loginModal";
import { SignupModal } from "../components/modal/auth/signupModal";
import { PagesModal } from "../components/modal/pages/pageModal";
import { ViewIssuesModal } from "../components/modal/pages/viewIssuesModal";
import { ViewPagesModal } from "../components/modal/pages/viewPagesModal";
import { ModalType } from "../store/modalStore";




export const modalRegistry: Record<ModalType, React.ComponentType> = {
    login: LoginModal,
    signup: SignupModal,
    "view-issues": ViewIssuesModal,
    "view-pages": ViewPagesModal,
    page: PagesModal

}