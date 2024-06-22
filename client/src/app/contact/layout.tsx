export default function EventsLayout({
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