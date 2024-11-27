import Link from "next/link";

const Navbar = () => {
    return(
        <nav>
            <menu>
                <li>
                    <Link href='/'>
                        Home
                    </Link>
                </li>
                <li>
                    <Link href='/about'>
                        About
                    </Link>
                </li>
                <li>
                    <Link href='/staff'>
                        Staff
                    </Link>
                </li>
                <li>
                    <Link href='/students'>
                        Students
                    </Link>
                </li>
            </menu>
        </nav>
    );
}

export default Navbar;