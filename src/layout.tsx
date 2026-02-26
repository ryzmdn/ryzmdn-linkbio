import { Header } from "./components/header";
import { Footer } from "./components/footer";
import { ProgressiveBlur } from "./components/ui/progressive-blur";
import { ShootingStars } from "./components/shooting-stars";
import { StarsBackground } from "./components/stars-background";

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
      <ProgressiveBlur height="40px" />
      <ShootingStars className="-z-10" />
      <StarsBackground className="-z-10" />
    </>
  );
}
