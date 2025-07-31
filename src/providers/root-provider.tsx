"use client";

import { Provider } from "react-redux";
import { store } from "@/src/redux/store";
import ThemeRegistry from "@/src/theme/theme";
import ScrollToTop from "../components/client/scroll-to-top/scroll-to-top";

export default function RootProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <Provider store={store}>
      <ScrollToTop />
      <ThemeRegistry>{children}</ThemeRegistry>
    </Provider>
  );
}
