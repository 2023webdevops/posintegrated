
import Image from "next/image";

export default function Footer() {
    const currentYear = new Date().getFullYear();
    return(
        <footer className="bg-black">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
                <p className="text-center text-white/60 font-sans text-sm">Copyright &copy; {currentYear} Integrated Point of Sale Systems. All Rights Reserved.</p>
            </div>
        </footer>
    )
}