import { Header } from "./components/header";
import { Footer } from "./components/footer";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <Header />
      <main
        id="layout-main"
        className="w-full max-w-xl mx-auto bg-transparent"
      >
        {children}
      </main>
      <Footer />
    </>
  );
}
