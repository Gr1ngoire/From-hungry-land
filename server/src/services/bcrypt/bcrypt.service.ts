import bcrypt from 'bcryptjs'

class BcryptService {
    public comparePasswords(
        passwordToCheck: string,
        sourcePassword: string,
    ): Promise<boolean> {
        return bcrypt.compare(passwordToCheck, sourcePassword);
    }

    public hashPassword(toHash: string, salt: number): Promise<string> {
        return bcrypt.hash(toHash, salt);
    }
}


export {BcryptService}