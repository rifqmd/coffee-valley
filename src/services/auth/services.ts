import { addData, retrieveDataByField } from "@/lib/firebase/service";
import bcrypt from "bcrypt";

export async function signUp(
  userData: {
    email: string;
    fullname: string;
    user_id: string;
    password: string;
    role?: string;
    create_at?: Date;
    update_at?: Date;
  },
  callback: Function
) {
  const data = await retrieveDataByField("users", "email", userData.email);

  if (data.length > 0) {
    callback(false);
  } else {
    if (!userData.role) {
      userData.role = "member";
    }

    // minimal password 8 digit
    userData.password = await bcrypt.hash(userData.password, 8);

    // create at account
    userData.create_at = new Date();

    // update at account
    userData.update_at = new Date();
    addData("users", userData, (result: boolean) => {
      callback(result);
    });
  }
}

export async function signIn(user_id: string) {
  const data = await retrieveDataByField("users", "user_id", user_id);

  if (data) {
    return data[0];
  } else {
    return null;
  }
}
