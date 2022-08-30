import { config } from "dotenv";
import { connect } from "mongoose";

if (process.env.NODE_ENV !== "production") {
  config();
}

export class MogoDbConnection {
  async ConnectDb() {
    await connect(process.env.DATABSE_URL);
  }
}
