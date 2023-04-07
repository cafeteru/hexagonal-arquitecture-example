import { AuthDetails, ForControlAuthenticating, Permission } from "../../ports/drivens";

const authDetailsMock: AuthDetails = {
    token: "token",
    refreshToken: "refreshToken"
};

const permissionsMock: Permission = {
    admin: true,
    user: true
};

export class ControlAuthenticatorStub implements ForControlAuthenticating {
    getAuthDetails(email: string, password: string): Promise<AuthDetails> {
        return Promise.resolve(authDetailsMock);
    }

    getPermissions(email: string, password: string): Promise<Permission> {
        return Promise.resolve(permissionsMock);
    }
}