const Card = ({content}) => {
  return (
    <div className="max-w-sm rounded-lg bg-white shadow-md dark:border-gray-700 dark:bg-gray-800">
            <a href="#">
              <img
                className="rounded-t-lg p-8"
                src={`${content['image']}`}
                alt="NFT IMAGE"
              />
            </a>
            <div className="px-5 pb-5">
              <a href="#">
                <h3 className="text-xl font-semibold tracking-tight text-gray-900 dark:text-white">
                {`${content['name']}`}
                </h3>
              </a>
              <div className="flex items-center justify-between">
                <span className="text-3xl font-bold text-gray-900 dark:text-white">
                {`${content['amount']}`}
                </span>
              </div>
            </div>
          </div>

  )
};

export default Card;
