"use client";
import ThemeRegistry from "@/src/theme/theme";
import ScrollToTop from "@/src/components/scroll-to-top/scroll-to-top";

export default function ClientProviders({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    // <Provider store={store}>
    //   <ScrollToTop />
    //   <ThemeRegistry>{children}</ThemeRegistry>
    // </Provider>

    <div>
      <ScrollToTop />
      <ThemeRegistry>{children}</ThemeRegistry>
    </div>
  );
}
