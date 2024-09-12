export { default } from "next-auth/middleware";

export const config = {
  matcher: ["/account", "/products/add", "/profile", "/profile/checkout"],
};
