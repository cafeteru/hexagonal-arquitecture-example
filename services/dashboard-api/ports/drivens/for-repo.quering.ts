import { User as Repouser } from "../../../repository/app/schemes";
import { User } from "../drivers";

export interface ForRepoQuerying {
    getUser(email: string): Promise<Repouser>;
    createUser(user: User, password: string): Promise<Repouser>;
}