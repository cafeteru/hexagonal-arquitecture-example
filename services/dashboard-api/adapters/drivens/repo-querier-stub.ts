import { User as RepoUser } from "../../../repository/app/schemes";
import { ForRepoQuerying } from "../../ports/drivens";

const userMock: RepoUser = {
    id: "1",
    name: "John Doe",
    email: "email"
};


// TODO 34:00
export default class RepoQuerierStub implements ForRepoQuerying {
    getUser(email: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
    createUser(user: RepoUser, password: string): Promise<RepoUser> {
        return Promise.resolve(userMock);
    }
}