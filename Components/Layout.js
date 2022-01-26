import Link from "next/link";


const Layout = ({children}) => {
    return (
        <div className="container mx-auto my-8 ">
            <nav className="font-bold flex justify-evenly">
            <Link href={"/"}>Home</Link>
                <Link href={"/about"}>About</Link>
                
            </nav>
            {children}
        </div>
    );
};

export default Layout;