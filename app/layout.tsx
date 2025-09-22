function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`font-Poppins antialiased`}>{children}</body>
    </html>
  );
}
export default RootLayout;
