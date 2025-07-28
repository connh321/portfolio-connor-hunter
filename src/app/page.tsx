import Header from "@/src/components/header/header";
import Home from "@/src/components/home/home";
import ClientProviders from "@/src/providers/client-providers";

export default function Page() {
  return (
    <ClientProviders>
      <Header />
      <Home />
    </ClientProviders>
  );
}
