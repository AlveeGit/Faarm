import { signIn } from "next-auth/react";

export const loginUser = async ({ email, password }) => {
  try {
    const response = await signIn("credentials", {
      redirect: false,
      email,
      password,
    });

    if (response.error) {
      // Handle authentication error
      throw new Error(response.error);
    }

    // Authentication successful
    return response;
  } catch (error) {
    // Handle other errors that might occur during the authentication process
    throw new Error("An error occurred during login");
  }
};
