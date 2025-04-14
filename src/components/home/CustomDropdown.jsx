import { useState } from "react";

const CustomDropdown = ({
  options,
  placeholder = "Select Option",
  onChange,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selected, setSelected] = useState(null);

  const handleSelect = (option) => {
    setSelected(option);
    setIsOpen(false);
    onChange && onChange(option); // if callback exists
  };

  return (
    <div className="relative w-[55%]  text-white font-semibold">
      {/* Main button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="w-full px-4 py-3 bg-white/10 cursor-pointer rounded-md border border-white/50 flex justify-between items-center hover:border-[#E35E4E] transition-all"
      >
        {selected || placeholder}
        <p
          className={`w-5 h-5 ml-2 transition-transform ${
            isOpen ? "rotate-180" : ""
          }`}
        >
          ▼
        </p>
      </button>

      {/* Dropdown list */}
      {isOpen && (
        <div className="absolute top-full left-0 w-full mt-2 bg-black border border-white/50 rounded-md shadow-lg z-10">
          {options.map((option, idx) => (
            <div
              key={idx}
              onClick={() => handleSelect(option)}
              className="px-4 py-3 hover:bg-[#E35E4E]/30 text-[#E35E4E] cursor-pointer transition-colors"
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;
