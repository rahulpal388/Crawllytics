import argon2 from "argon2";

export const passwordService = {
    hash,
    compare
};

async function hash(password: string) {
    const passwordHash = await argon2.hash(password, {
        type: argon2.argon2id,
        memoryCost: 65536,
        timeCost: 3,
        parallelism: 4,
    })
    return passwordHash;
}


async function compare(password: string, hashedPassword: string) {
    return await argon2.verify(hashedPassword, password);

}