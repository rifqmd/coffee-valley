import { retrieveData } from "@/lib/firebase/service";
import type { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "GET") {
    try {
      // get all users
      const allUsers = await retrieveData("users");

      // filter users
      const data = allUsers.map((users: any) => {
        delete users.password;

        return users;
      });

      res
        .status(200)
        .json({ status: true, statusCode: 200, message: "success", data });
    } catch (error: any) {
      res.status(500).json({
        status: false,
        statusCode: 500,
        message: error.message || "Internal Server Error",
      });
    }
  }
}
