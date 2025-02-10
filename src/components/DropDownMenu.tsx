import { useState, useEffect, useRef, ReactNode } from "react";

interface DropdownMenuProps {
  icon: any;
  activeIcon: any;
  children: ReactNode;
}

const DropdownMenu = ({ icon, activeIcon, children }: DropdownMenuProps) => {
  const [open, setOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const closeDropdown = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener("mousedown", closeDropdown);
    return () => document.removeEventListener("mousedown", closeDropdown);
  }, []);

  const toggleDropdown = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.stopPropagation();
    setOpen((prev) => !prev);
  };

  const closeDropdown = (event: React.MouseEvent<HTMLUListElement>) => {
    event.stopPropagation();
    if (event.target === event.currentTarget) {
      return;
    }
    setOpen(false);
  };

  return (
    <div className="relative" ref={dropdownRef}>
      <button onClick={toggleDropdown}>
        {open ? activeIcon("size-8") : icon("size-8")}
      </button>
      {open && (
        <ul 
          className="absolute py-8 pl-16 pr-8 space-y-8 bg-neutral-50 dark:bg-neutral-800 
          shadow-lg shadow-neutral-300 dark:shadow-neutral-900 right-1 w-fit 
          border border-neutral-400
          flex flex-col text-right" 
          onClick={closeDropdown}
        >
          {children}
        </ul>
      )}
    </div>
  );
};

export default DropdownMenu;
