const Options = ({ setSort, setFilter }) => {
  return (
    <div className="flex justify-around px-10 py-8 ">
      <div>
        <label>SORT NFT LIST BY:</label>
        <label htmlFor="Ascending">Ascending</label>
        <input
          className="radio"
          id="Ascending"
          type="radio"
          name="sort"
          onChange={(e) => setSort(e.target.value.trim())}
          value="Ascending"
        />{' '}
        <label htmlFor="Descending">Descending</label>
        <input
          className="radio"
          id="Descending"
          name="sort"
          type="radio"
          onChange={(e) => setSort(e.target.value.trim())}
          value="Descending"
        />
      </div>
      <div>
        <label>FILTER NFT LIST BY:</label>

        <label htmlFor="ERC721">ERC721</label>
        <input
          className="radio"
          id="ERC721"
          type="radio"
          name="filter"
          onChange={(e) => setFilter(e.target.value)}
          value="ERC721"
        />
        <label htmlFor="ERC1155">ERC1155</label>
        <input
          id="ERC1155"
          name="filter"
          className="radio"
          type="radio"
          onChange={(e) => setFilter(e.target.value)}
          value="ERC1155"
        />
        <label htmlFor="BOTH">BOTH</label>
        <input
          name="filter"
          id="BOTH"
          className="radio"
          type="radio"
          onChange={(e) => setFilter('')}
          value="BOTH"
        />
      </div>
    </div>
  )
}

export default Options
