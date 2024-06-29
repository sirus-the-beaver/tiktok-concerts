/**
 * `AboutLayout` is a layout component that wraps the content of the about page.
 * It is used to provide a consistent layout for the about page.
 * 
 * @param children - The content to be rendered within the layout.
 *
 * @returns The layout component.
 */
export default function AboutLayout({
    children,
  }: Readonly<{
    children: React.ReactNode;
  }>) {
    return (
      <section>
        {children}
      </section>
    );
  }