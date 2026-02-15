export function Footer() {
  return (
    <footer
      id="layout-footer"
      className="w-full text-center h-auto max-w-xl mx-auto mt-10 px-4 py-6 sm:px-6 lg:px-8"
    >
      <p className="text-sm/6 text-muted-foreground">
        &copy; {new Date().getFullYear()} Ryzmdn. All rights reserved.
      </p>
    </footer>
  );
}
