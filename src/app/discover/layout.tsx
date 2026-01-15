import Link
 from "next/link";


export default function DiscoverLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  let pageUnselected = "hover:border-b-5 hover:border-[#bebaa0] m-5";
  let pageSelected = "border-b-5 border-[#bebaa0] m-5";
  return (
    <>
      <nav className="p-10 bg-[#f8f5f0] pr-20">
        <Link className="hover:border-b-5 hover:border-[#bebaa0] m-5" href="/discover">Summary</Link>
        <Link className="hover:border-b-5 hover:border-[#bebaa0] m-5" href="/discover/breakdown">Role Breakdown</Link>
      </nav>
      <hr />
      <main className="p-10 bg-[#f8f5f0]">{children}</main>
    </>
  );
}
