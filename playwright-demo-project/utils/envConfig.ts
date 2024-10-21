import * as dotenv from "dotenv";

dotenv.config();

export const envConfig = {
  baseUrl: process.env.BASE_URL!,
  // baseUrl: process.env.BASE_URL_STAGE!,
  userEmail: process.env.USER_EMAIL!,
  userPassword: process.env.USER_PASSWORD!,
};
