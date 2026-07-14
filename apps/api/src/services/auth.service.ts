import { AppError } from "@/middlewares/errors/appError.js";
import { SignupType } from "@/validation/signup.validation.js";
import { userRepository } from "@repo/db/repository/userRepository";
import { passwordService } from "./password.service.js";


export const authService = {
    registerUser,
    loginUser,
    logoutUser
}





async function registerUser(user: SignupType) {
    // check the user already exists in the database
    const existingUser = await userRepository.findByEmail(user.email);

    if (!existingUser) {
        throw new AppError("User already exists", 400);
    }

    const hashedPassword = await passwordService.hash(user.password);

    const newUser = await userRepository.addUser({
        username: user.username,
        displayName: user.displayName,
        email: user.email,
        provider: "password",
        providerUserId: user.email,
        seedUrls: [],
        credential: null,
        session: null,
        status: "active",
        emailVerified: false,
        avatar: null
    })



    // return the user object
}
async function loginUser() { }
async function logoutUser() { }

