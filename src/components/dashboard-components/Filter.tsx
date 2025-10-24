import React, { useState, ChangeEvent } from 'react';

// 1. Define the type for a single filter option
type FilterOption = {
    value: string;
    label: string;
};

// 2. Define the type for the component's props
type FilterProps = {
    /** * Callback function executed when the filter value changes. 
     * It receives the new selected value (a string).
     */
    onFilterChange: (newValue: string) => void;
};

// 3. Define the available filter options
const filterOptions: FilterOption[] = [
    { value: 'all', label: 'All Statuses' },
    { value: 'active', label: 'Active' },
    { value: 'inactive', label: 'Inactive' },
    { value: 'pending', label: 'Pending' },
    { value: 'submitted', label: 'Submitted' },
];

/**
 * A reusable component for filtering data based on status.
 */
export default function Filter({ onFilterChange }: FilterProps) {
    // State is typed implicitly as 'string' by the initial value 'all'
    const [selectedValue, setSelectedValue] = useState('all');

    // 4. Use the ChangeEvent<HTMLSelectElement> type for the event handler
    const handleChange = (event: ChangeEvent<HTMLSelectElement>) => {
        const newValue: string = event.target.value;
        setSelectedValue(newValue);
        
        // Call the callback function from the parent
        onFilterChange(newValue);
    };

    return (
        <div className="relative inline-block text-left min-w-[200px]">
            <select
                value={selectedValue}
                onChange={handleChange}
                className="
                    appearance-none 
                    block 
                    w-full 
                    bg-white 
                    border-2 
                    border-gray-300 
                    text-gray-700 
                    py-2 
                    px-4 
                    pr-8 
                    rounded-lg 
                    leading-tight 
                    focus:outline-none 
                    focus:ring-2 
                    focus:ring-indigo-500 
                    focus:border-indigo-500 
                    shadow-md 
                    transition 
                    duration-150
                    cursor-pointer
                    font-medium
                    text-base
                "
            >
                {filterOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                        {option.label}
                    </option>
                ))}
            </select>
            
            {/* Custom downward arrow (decorative) */}
            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                    <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/>
                </svg>
            </div>
        </div>
    );
}