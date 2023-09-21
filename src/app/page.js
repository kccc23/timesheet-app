"use client";
import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Home() {

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: { opacity: 1, transition: { delay: 0.5, duration: 1 } }
    };

    const buttonVariants = {
        hover: { scale: 1.1, transition: { duration: 0.3 } }
    };

    return (
        <motion.main
            className="text-white min-h-screen flex flex-col justify-center items-center"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <h1 className="text-4xl mb-10">Welcome to Timesheet</h1>
            <div className="flex space-x-8">
                <Link href="/entries" passHref>
                    <motion.div
                        className="bg-custom-green cursor-pointer text-xl py-2 px-6 hover:bg-custom-green-dark transition duration-300 rounded"
                        whileHover="hover"
                        variants={buttonVariants}
                    >
                        View Entries
                    </motion.div>
                </Link>
                <Link href="/entries/new" passHref>
                    <motion.div
                        className="bg-custom-green cursor-pointer text-xl py-2 px-6 hover:bg-custom-green-dark transition duration-300 rounded"
                        whileHover="hover"
                        variants={buttonVariants}
                    >
                        Add Entry
                    </motion.div>
                </Link>
            </div>
        </motion.main>
    );
}
