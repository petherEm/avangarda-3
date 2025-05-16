export const metadata = {
  title: "Avangarda Hotel - Studio",
  description: "Avangarda Hotel - Studio",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
