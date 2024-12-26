import Link from "next/link";
import Image from "next/image";
import logo from "@/public/images/amura-final-logo-1.png";

interface LogoProps {
    height: number;
    width: number;
}

export default function Logo({ height, width }: LogoProps) {
    return (
        <Link href="/" className="inline-flex shrink-0" aria-label="Cruip">
            <Image src={logo} alt="Cruip Logo" width={width} height={height} />
        </Link>
    );
}
