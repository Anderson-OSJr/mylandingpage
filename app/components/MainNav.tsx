import Link from "next/link";

const MainNav = () => {
  const navLinks = [
    { label: "Link 1", href: "/link1", adminOnly: false },
    { label: "Link 2", href: "/link2", adminOnly: false },
    { label: "Link 3", href: "/link3", adminOnly: false },
    { label: "Link 4", href: "/link4", adminOnly: false },
    { label: "Link 5", href: "/link5", adminOnly: false },
  ];

  return (
    <>
      <div className="flex justify-center">
        <div className="min-w-full flex p-3 justify-around bg-[#001C46] text-white text-xl">
          <div className="p-2">
            <Link href="#">Anderson Silva Jr</Link>
          </div>
          <div className="flex m-2 h-10">
            {navLinks
              .filter((link) => !link.adminOnly)
              .map((link) => (
                <div key={link.label} className="mx-4">
                  <Link
                    href={link.href}
                    className="text-slate-200 m-4 align-middle hover:font-medium hover:align-top hover:border-b-2"
                  >
                    {link.label}
                  </Link>
                </div>
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default MainNav;
