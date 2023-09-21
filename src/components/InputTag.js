export default function InputTag({ type, name, label, value, handleChange }) {

    return (
        <div className="mb-2">
            <label htmlFor={name} className="block text-md font-medium text-gray-600">{label}</label>
            <input type={type} id={name} name={name} onChange={handleChange} value={value} required className="mt-1 w-full p-2 border rounded-md" />
        </div>
    )
}