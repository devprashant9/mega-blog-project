import variablesConfig from "../config/variablesConfig";
import { Client, Account, ID } from "appwrite";

export class AuthService {
  client = new Client();
  account;
  constructor() {
    this.client
      .setEndpoint(variablesConfig.appWriteURL)
      .setProject(variablesConfig.appWriteProjectId);
    this.account = new Account(this.client);
  }

  async createAccount({ email, password, name }) {
    try {
      const userAccount = await this.account.create(
        ID.unique(),
        email,
        password,
        name
      );

      if(userAccount) {
        // call another method
        return this.logIn({email, password})
      }
      else {
        return userAccount;
      }
    } catch (err) {
      throw err;
    }
  }

  async logIn({email, password}) {
    try {
        return await this.account.createEmailPasswordSession(email, password)
    } catch(err) {
        throw err;
    }
  }

  async getCurrentUser(){
    try {
        return this.account.get();
    } catch (err) {
        console.log("Appwrite Service :: getCurrentUser :: error", err)
    }
    return null;
  }

  async logoutUser() {
    try {
        await this.account.deleteSessions()
    } catch (error) {
        console.log("Appwrite Service :: getCurrentUser :: error", err)
    }
  }
}

const aurthService = new AuthService();
export default aurthService;
