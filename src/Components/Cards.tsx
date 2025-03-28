interface Item {
  name: string;
  price: number;
  img: string;
}

const Cards = ({
  item,
  handleClick,
}: {
  item: Item;
  handleClick: (item: Item) => void;
}) => {
  const { name, price, img } = item;

  return (
    <>
      <section className="flex flex-row px-6 py-4 lg:w-1/4 w-full">
        <div className="p-1 md:w-1/3 w-1/2 lg:w-full mb-4">
          {/* Hover effect added to the card */}
          <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-auto transform transition duration-300 hover:scale-105 hover:shadow-xl hover:border-green-600">
            <img
              className="lg:h-72 md:h-36 h-48 w-full object-cover object-center"
              src={img}
              alt="item"
            />
            <div className="px-3 py-2">
              <h1 className="text-xl font-bold mb-3">{name}</h1>
              <div className="flex flex-wrap justify-between mb-2 mt-4">
                <p className="leading-relaxed mt-4 text-lg">Price: ${price}</p>
                <button
                  onClick={() => handleClick(item)}
                  className="bg-green-600 text-white py-2 px-3 text-lg rounded-xl hover:border-2 hover:bg-white hover:text-green-600 hover:border-green-600"
                >
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Cards;
