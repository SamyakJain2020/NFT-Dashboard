const Card = ({ content }) => {
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
          <h3 className="text-3xl font-semibold tracking-tight text-gray-900 dark:text-white">
            {`${content['name']}`}
          </h3>
        </a>
        <div className="flex flex-col items-center  justify-items-end">
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            amount: {`${content['amount']}`}
          </span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            contract_type: {`${content['contract_type']}`}
          </span>
          <span className="text-2xl font-bold text-gray-900 dark:text-white">
            symbol: {`${content['symbol']}`}
          </span>
        </div>
      </div>
    </div>
  )
}

export default Card
