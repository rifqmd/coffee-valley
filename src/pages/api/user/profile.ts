import type { NextApiRequest, NextApiResponse } from "next";
import { retrieveDataById } from "@/lib/firebase/service";
import jwt from "jsonwebtoken";
import bcrypt, { compare } from "bcrypt";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  // Get the token from the request headers
  const token = req.headers.authorization?.split(" ")[1];

  // If no token is provided, return a 401 status with an error message
  if (!token) {
    return res
      .status(401)
      .json({ status: false, message: "No token provided" });
  }

  // Handle GET requests
  if (req.method === "GET") {
    // Verify the token and retrieve the user profile
    jwt.verify(
      token,
      process.env.NEXTAUTH_SECRET || "",
      async (err: any, decoded: any) => {
        if (err) {
          return res
            .status(403)
            .json({ status: false, message: "Access denied" });
        }
        try {
          const profile: any = await retrieveDataById("users", decoded.id);
          if (profile) {
            // Add the user ID to the profile object
            profile.id = decoded.id;
            // Return the profile object with a 200 status and success message
            return res.status(200).json({
              status: true,
              message: "success",
              data: profile,
            });
          } else {
            // Return a 404 status with an error message if the user is not found
            return res.status(404).json({
              status: false,
              message: "user not found",
            });
          }
        } catch (error) {
          return res
            .status(500)
            .json({ status: false, message: "Internal server error" });
        }
      }
    );
  }
}
