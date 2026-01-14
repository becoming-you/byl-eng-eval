import Link
 from "next/link";
export default function DiscoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <nav className="m-10">
        <Link className="hover:border-b-5 hover:border-[#bebaa0] m-5" href="/discover">Summary</Link>
        <Link className="hover:border-b-5 hover:border-[#bebaa0] m-5" href="/discover/breakdown">Role Breakdown</Link>
      </nav>
      <main className="m-10">{children}</main>
    </>
  );
}
