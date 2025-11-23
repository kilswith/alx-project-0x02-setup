import Link from "next/link";

const Header =() => {
    return(
        <header className="p-4 bg-gray-200 text-gray-800">
            <h1 className="text-xl font-bold">ALX PROJECT 2</h1>

            <nav className="flex gap-4 ml-6">
                <link href="About"></link>
            </nav>
        </header>
    )
}
export default Header;