import { useState } from "react";
import Cards from "./Cards";
import { list } from "../data";
import { FaSearch } from "react-icons/fa";

interface DetailsProps {
  handleClick: (item: any) => void;
}

function Details({ handleClick }: DetailsProps) {
  const [category, setCategory] = useState(list);
  const [activeTab, setActiveTab] = useState("All");
  const [query, setQuery] = useState("");

  // Filter buttons handler
  const handleBtns = (word: string) => {
    if (word === "All") {
      setCategory(list);
    } else {
      const filtered = list.filter((item) => item.kind === word);
      setCategory(filtered);
    }
    setActiveTab(word);
  };

  return (
    <section className="container pt-4 mx-auto w-full bg-bgColor">
      <section className="px-6 flex flex-row justify-between">
        <div className="relative w-80 h-11 mt-4">
          <input
            type="text"
            onChange={(event) => setQuery(event.target.value)}
            className="w-full h-full py-4 px-10 text-base text-black rounded-lg border-2 border-black"
            placeholder="Search clothing..."
          />
          <i>
            <FaSearch className="absolute left-4 top-4 text-lg w-4 h-4 text-center text-black focus:outline-none" />
          </i>
        </div>

        <div className="flex flex-wrap mt-4 lg:mb-4 mb-8">
          {["All", "Jeans", "Shirts", "Shoes"].map((word) => (
            <button
              key={word}
              onClick={() => handleBtns(word)}
              className={`mr-2 text-brandColor border-brandColor border-2 py-1 px-6 md:w-24 h-10 rounded-lg text-lg ${
                activeTab === word
                  ? "bg-brandColor outline-none text-white"
                  : ""
              }`}
            >
              {word}
            </button>
          ))}
        </div>
      </section>

      <section className="flex flex-row flex-wrap">
        {category
          .filter((item) => {
            if (query === "") return true;
            return item.name.toLowerCase().includes(query.toLowerCase());
          })
          .map((item) => (
            <Cards key={item.id} item={item} handleClick={handleClick} />
          ))}
      </section>
    </section>
  );
}

export default Details;
