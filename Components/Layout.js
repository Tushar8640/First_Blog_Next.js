import Link from "next/link";

const Layout = ({ children }) => {
  return (
    <div className="w-[900px] mx-auto my-8 ">
      <nav className="font-bold flex justify-between">
      <div>
       <span className="text-2xl text-fuchsia-800"> BlogSite.</span>
      </div>
      <div className="">
        <ul className=" flex justify-between">
          <li className="mr-5">
          <Link className="mr-4" href={"/"}>Home</Link>
          </li>
          <li>
          <Link href={"/about"}>About</Link>
          </li>
        </ul>
    
       
      </div>
      </nav>
      {children}
    </div>
  );
};

export default Layout;
