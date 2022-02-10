const ChainInput = ({  setChain }) => {
  return (
    <div>
      <select
        className="flex cursor-pointer items-center rounded-lg bg-white px-4 py-4 shadow-xl "
        onChange={(e) => setChain(e.target.value)}
      >
        <option value='' selected disabled>Choose a Chain</option>
        <option value="eth">Etherium Mainnet</option>
        <option value="polygon">Polyogn</option>
        <option value="rinkeby">Rinkeby</option>
        <option value="ropsten">Robsten</option>
        <option value="mumbai">Polyogn Testnet</option>
      </select>
    </div>
  )
}

export default ChainInput
