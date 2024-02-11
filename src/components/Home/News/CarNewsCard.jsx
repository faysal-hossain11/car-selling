const CarNewsCard = ({ id, img, desc }) => {
  return (
    <div
      className="border-2 shadow-md rounded-xl cursor-pointer group"
      key={id}
    >
      <div>
        <img
          className="rounded-t-xl"
          src={img}
          alt="img"
        />
      </div>
      <h3 className=" font-semibold text-lg py-4 px-3 text-center group-hover:bg-gray-200">
        {desc}
      </h3>
    </div>
  );
};

export default CarNewsCard;
