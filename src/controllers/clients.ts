import { ClientsModel } from "../db/models";

class ClientController {
  async createNewUser(user: {name: string, email: string, direction: string, phone: number}): Promise<boolean> {
    try {
      const newClient = new ClientsModel(user)

      await newClient.save()

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async getAllClients(): Promise<any[]> {
    try {
      const clients = await ClientsModel.find({})

      return clients;
    } catch (err) {
      console.log(err);
      return [];
    }
  }

  async getClientById(id: string): Promise<any> {
    try {
      const client = await ClientsModel.findById(id)
      return client;
    } catch (err) {
      console.log(err);
      return null;
    }
  }

  async updateClient(id: string, user: {name: string, email: string, direction: string, phone: number}): Promise<boolean> {
    try {
      await ClientsModel.findByIdAndUpdate(id, user)

      return true;
    } catch (err) {
      console.log(err);
      return false;
    }
  }

  async deleteClient(id: string): Promise<boolean> {
    try {
      await ClientsModel.findByIdAndDelete(id)
      return true;
    } catch (error) {
      console.log(error)
      return false;
    }
  }
}

export default new ClientController();