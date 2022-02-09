const Input = ({  contractAddress, setContractAddress }) => {
  return (
    <div className="menu w-2/4">
      <div className="flex cursor-pointer items-center rounded-lg bg-white px-4 py-4 shadow-xl">
        <input
          type="text"
          placeholder="Enter Contract Address"
          className="h-full w-full flex-1 text-base placeholder-gray-400 outline-none"
          onChange={(e)=> setContractAddress(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Input
