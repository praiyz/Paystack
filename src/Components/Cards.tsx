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
    <section className="p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4">
      <div className="h-full border-2 border-gray-200 border-opacity-60 rounded-lg overflow-hidden transition-transform duration-300 hover:scale-105 hover:shadow-xl hover:border-green-600">
        <img className="h-64 w-full object-cover" src={img} alt={name} />
        <div className="p-4 flex flex-col">
          <h1 className="text-lg font-bold mb-2">{name}</h1>
          <p className="text-gray-700 mb-4 text-base sm:text-lg">
            Price: ${price}
          </p>
          <button
            onClick={() => handleClick(item)}
            className="w-full bg-green-600 text-white py-2 px-4 text-base sm:text-lg rounded-lg transition-all duration-300 hover:bg-white hover:text-green-600 hover:border-2 hover:border-green-600"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </section>
  );
};

export default Cards;
