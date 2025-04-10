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
    setCategory(
      word === "All" ? list : list.filter((item) => item.kind === word)
    );
    setActiveTab(word);
  };

  return (
    <section className="container mx-auto w-full bg-bgColor px-4 py-6">
      {/* Search and Filters Section */}
      <section className="flex flex-col md:flex-row md:justify-between items-center gap-4 mb-6">
        {/* Search Bar */}
        <div className="relative w-full max-w-md h-11">
          <input
            type="text"
            onChange={(event) => setQuery(event.target.value)}
            className="w-full h-full py-2 pl-10 pr-4 text-base text-black rounded-lg border-2 border-black focus:outline-none focus:ring-2 focus:ring-brandColor"
            placeholder="Search clothing..."
          />
          <FaSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-lg text-black" />
        </div>

        {/* Category Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-2">
          {["All", "Jeans", "Shirts", "Shoes"].map((word) => (
            <button
              key={word}
              onClick={() => handleBtns(word)}
              className={`px-4 py-2 md:w-24 rounded-lg text-lg border-2 transition-all ${
                activeTab === word
                  ? "bg-brandColor text-white border-brandColor"
                  : "text-brandColor border-brandColor hover:bg-brandColor hover:text-white"
              }`}
            >
              {word}
            </button>
          ))}
        </div>
      </section>

      {/* Products Grid */}
      <section className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {category
          .filter((item) =>
            query === ""
              ? true
              : item.name.toLowerCase().includes(query.toLowerCase())
          )
          .map((item) => (
            <div key={item.id} className="w-full">
              <Cards item={item} handleClick={handleClick} />
            </div>
          ))}
      </section>
    </section>
  );
}

export default Details;
