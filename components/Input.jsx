const Input = ({contractAddress, setContractAddress }) => {
  return (
    <div className="menu w-2/4">
      <div className="flex cursor-pointer items-center rounded-lg bg-white px-4 py-4 shadow-xl">
        <input
          type="text"
          placeholder="Enter Contract Address eg: 0xfd64b63d4a54e6b1a0aa88e6623046c54f960d00"
          className="h-full w-full flex-1 text-base placeholder-gray-400 outline-none"
          value={contractAddress}
          onChange={(e)=> setContractAddress(e.target.value)}
        />
      </div>
    </div>
  )
}

export default Input
