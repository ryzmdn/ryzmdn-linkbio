export function Footer() {
  return (
    <footer
      id="layout-footer"
      className="w-full text-center h-auto max-w-xl space-y-6 mx-auto mt-10 px-4 py-6 sm:px-6 lg:px-8"
    >
      <ul className="flex max-sm:flex-col justify-center items-center gap-x-2 max-sm:gap-y-2 max-sm:text-xs text-sm/6 text-muted-foreground">
        <li>Clean Architecture</li>
        <li className="text-[0.5rem] max-sm:hidden">&bull;</li>
        <li>Performance Focused</li>
        <li className="text-[0.5rem] max-sm:hidden">&bull;</li>
        <li>Always Learning</li>
      </ul>

      <p className="text-sm/6 text-muted-foreground">
        &copy; {new Date().getFullYear()} Ryzmdn. All rights reserved.
      </p>
    </footer>
  );
}
