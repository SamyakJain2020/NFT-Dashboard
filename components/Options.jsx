const Options = ({setSort,setFilter}) => {
  return (
    <div className="flex justify-around px-10 py-8 ">
    <div>
      <label>SORT NFT LIST BY:</label>
      <select
        className="flex cursor-pointer items-center rounded-lg bg-white px-4 py-4 shadow-xl "
        onChange={(e) => setSort(e.target.value)}
      >
        <option selected="true" disabled="disabled">
          ORDER
        </option>
        <option value="Ascending">Asending</option>
        <option value="Descending">Desending</option>
      </select>
    </div>
    <div>
      <label>FILTER NFT LIST BY:</label>
      <select
        className="flex cursor-pointer items-center rounded-lg bg-white px-4 py-4 shadow-xl "
        onChange={(e) => setFilter(e.target.value)}
      >
        <option selected="true" disabled="disabled">
          FILTER
        </option>
        <option value="ERC721">ERC 721</option>
        <option value="ERC1155">ERC 1155</option>
      </select>
    </div>
  </div>
  )
};

export default Options;
