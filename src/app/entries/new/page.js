"use client";
import { useState } from "react";
import InputTag from "@/components/InputTag";
import Link from "next/link";
import { motion } from "framer-motion";

const defaultFormData = {
    date: '',
    client: '',
    project: '',
    project_code: '',
    hours: '',
    billable: 'No',
    first_name: '',
    last_name: '',
    billable_rate: ''
};

export default function CreateEntry() {
    const fadeInScale = {
        hidden: {
            opacity: 0,
            scale: 0.95,
        },
        visible: {
            opacity: 1,
            scale: 1,
            transition: {
                duration: 0.3,
                ease: "easeInOut",
            },
        },
    };

    const [formData, setFormData] = useState(defaultFormData);

    const clearForm = () => {
        setFormData(defaultFormData);
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        const res = await fetch("/api/entries", {
            method: "POST",
            body: JSON.stringify(formData),
        });
        if (res.status === 201) {
            alert("Entry created successfully");
            clearForm();
            window.location.href = "/entries";
        } else {
            alert("Something went wrong");
        }
    };

    return (
        <motion.div
            className="inset-0 flex items-center justify-center z-50"
            initial="hidden"
            animate="visible"
            variants={fadeInScale}
        >
        <div className="bg-white sm:rounded-xl p-8 max-w-xl w-full relative z-10 shadow-lg">
            <div className="mb-8">
                <Link href="/entries" className="inline-block bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600 transition duration-300">
                    Back to Entries
                </Link>
            </div>
            <h2 className="text-2xl font-semibold mb-5 text-gray-800">Create Entry</h2>
            <form onSubmit={handleSubmit} className="space-y-5">
                <InputTag type="date" name="date" label="Date" value={formData.date} handleChange={handleChange} />
                <InputTag type="text" name="client" label="Client" value={formData.client} handleChange={handleChange} />
                <InputTag type="text" name="project" label="Project" value={formData.project} handleChange={handleChange} />
                <InputTag type="text" name="project_code" label="Project Code" value={formData.project_code} handleChange={handleChange} />
                <div className="mb-4">
                    <label htmlFor="hours" className="block text-sm font-medium text-gray-600">Hours</label>
                    <input type="number" id="hours" name="hours" min="0" step="0.01" value={formData.hours} onChange={handleChange} required className="mt-1 w-full p-2 border rounded-md" />
                </div>
                <div className="mb-4">
                    <label htmlFor="billable" className="block text-sm font-medium text-gray-600">Billable</label>
                    <div className="mt-1">
                        <input
                            type="checkbox"
                            id="billable"
                            name="billable"
                            onChange={(e) => {
                                e.target.value = e.target.checked ? "Yes" : "No";
                                handleChange(e);
                            }}
                            className="mr-2 align-middle"
                        />
                    </div>
                </div>
                <InputTag type="text" name="first_name" label="First Name" value={formData.first_name} handleChange={handleChange} />
                <InputTag type="text" name="last_name" label="Last Name" value={formData.last_name} handleChange={handleChange} />
                <div className="mb-4">
                    <label htmlFor="billable_rate" className="block text-sm font-medium text-gray-600">Billable Rate</label>
                    <input type="number" id="billable_rate" name="billable_rate" min="0" step="1" value={formData.billable_rate} onChange={handleChange} required className="mt-1 w-full p-2 border rounded-md" />
                </div>
                <div>
                    <button type="submit" className="w-full bg-blue-500 hover:bg-blue-600 text-white p-2 rounded-md transition ease-in-out duration-150">Create Entry</button>
                </div>
            </form>
        </div>
        </motion.div>
    )
}
