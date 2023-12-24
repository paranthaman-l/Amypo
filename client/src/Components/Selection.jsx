/* eslint-disable react/prop-types */
import React, { useEffect, useState } from "react";
import { BiChevronDown } from "react-icons/bi";
import { AiOutlineSearch } from "react-icons/ai";

const Selector = ({ datas, setData, data, title }) => {
  const [inputValue, setInputValue] = useState("");
  const [selected, setSelected] = useState(data);
  const [open, setOpen] = useState(false);

  return (
    <div className="w-72 font-medium text relative">
      <label className="block uppercase tracking-wide text-grey-darker text-xs font-bold mb-2" htmlFor="grid-last-name">
        {title} :
      </label>
      <div
        onClick={() => setOpen(!open)}
        className={`bg-white w-full  p-2 flex items-center justify-between rounded border border-[#f0f0f0] ${!selected && "text-darkgray2"
          }`}
      >
        {(selected)
          ? selected?.length > 25
            ? selected?.substring(0, 25) + "..."
            : selected
          : "Select " + title}
        <BiChevronDown size={20} className={`${open && "rotate-180"}`} />
      </div>
      <ul
        className={`bg-white shadow-md mt-2 absolute top-14 z-10 overflow-y-auto ${open ? "max-h-60" : "max-h-0"
          } `}
      >
        <div className="flex items-center px-2 sticky top-0 bg-white">
          <AiOutlineSearch size={18} className="text-darkgray2" />
          <input
            type="text"
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value.toLowerCase())}
            placeholder={`Enter ${title} name`}
            className="placeholder:text-darkgray2 p-2 outline-none"
          />
        </div>
        {datas?.map((d, i) => (
          <li
            key={i}
            className={`p-2 text-sm hover:bg-green-300 hover:text-white rounded
            ${d?.value?.toLowerCase() === selected?.toLowerCase() &&
              "bg-green-300 text-black"
              }
            ${d?.value?.toLowerCase().startsWith(inputValue)
                ? "block"
                : "hidden"
              }`}
            onClick={() => {
              if (d?.value?.toLowerCase() !== selected?.toLowerCase()) {
                setSelected(d?.label);
                setData(d?.value);
                setOpen(false);
                setInputValue("");
              }
            }}
          >
            {d?.label}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Selector;