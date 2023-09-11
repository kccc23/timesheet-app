import Link from 'next/link';

export default function Home() {
    return (
        <main className="text-white min-h-screen flex flex-col justify-center items-center">
            <h1 className="text-4xl mb-10">Welcome to Timesheet</h1>
            <div className="flex space-x-8">
                <Link href="/entries" passHref>
                    <div className="bg-blue-500 cursor-pointer text-xl py-2 px-6 hover:bg-blue-600 transition duration-300 rounded">
                        View Entries
                    </div>
                </Link>
                <Link href="/entries/new" passHref>
                    <div className="bg-blue-500 cursor-pointer text-xl py-2 px-6 hover:bg-blue-600 transition duration-300 rounded">
                        Add Entry
                    </div>
                </Link>
            </div>
        </main>
    );
}
