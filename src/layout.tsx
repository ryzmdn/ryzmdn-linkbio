export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <main
        id="layout-main"
        className="w-full max-w-2xl mx-auto bg-transparent"
      >
        {children}
      </main>
    </>
  );
}
