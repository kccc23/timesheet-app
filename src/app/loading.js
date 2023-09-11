import Image from "next/image";

export default function loading() {
    return (
        <div className="flex justify-center items-center min-h-screen bg-transparent">
            <Image width={384} height={384} src="spinner.svg" alt="loading..." />
        </div>
    );
}
