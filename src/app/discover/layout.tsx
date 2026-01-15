import Navbar from "@/components/navbar";

export default function DiscoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <Navbar />
      <main className="m-10">{children}</main>
    </>
  );
}
