import { NextUIProvider } from "@nextui-org/react";

const NextProviders = ({ children }) => {
  return <NextUIProvider>{children}</NextUIProvider>;
};

export default NextProviders;
