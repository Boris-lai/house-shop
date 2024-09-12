import { getServerSession } from "next-auth";
import { authConfig } from "@/app/_lib/auth";

export const getSessionUser = async () => {
  const session = await getServerSession(authConfig);

  if (!session) {
    return null;
  } else {
    return session.user;
  }
};
