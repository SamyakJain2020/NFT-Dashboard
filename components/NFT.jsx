import { useState, useEffect } from 'react'
import { useNFTBalances } from 'react-moralis'
import Card from '../components/Card'
import Options from '../components/Options'
const NFTBalances = ({ chain, contractAddress, content, setContent }) => {
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances()
  const [nftdata, setnftdata] = useState([])
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState('')
  useEffect(() => {
    getNFTBalances({
      params: { chain: chain, address: contractAddress, limit: 100 },
    })
    setContent([])
    setnftdata([])
    data?.result.map((nft, id) => {
      const a = f(nft)
      a.then(({ name, image, contract_type, amount, symbol }) => {
        if (image) {
          setContent((prev) => [
            ...prev,
            {
              name: name,
              image: image,
              contract_type: contract_type,
              amount: amount,
              symbol: symbol,
            },
          ])
          setnftdata(content)
        }
      })
    })
  }, [chain, contractAddress])

  useEffect(() => {
    if (sort == 'Descending') {
      setnftdata((prev) => {
        return prev.sort((a, b) => {
          let textA = a.name.toUpperCase().trim()
          let textB = b.name.toUpperCase().trim()
          return textA < textB ? -1 : textA > textB ? 1 : 0
        })
      })
    } else if (sort == 'Ascending') {
      setnftdata((prev) => {
        return prev.sort((a, b) => {
          let textA = a.name.toUpperCase()
          let textB = b.name.toUpperCase()
          return !(textA < textB) ? -1 : !(textA > textB) ? 1 : 0
        })
      })
    }
  }, [sort])

  useEffect(() => {
    if (filter == 'ERC721') {
      setnftdata((prev) => {
        return content.filter((a) => a.contract_type == 'ERC721')
      })
    } else if (filter == 'ERC1155') {
      setnftdata((prev) => {
        return content.filter((a) => a.contract_type == 'ERC1155')
      })
    }
  }, [filter])

  async function f(nft) {
    try {
      const res = await fetch(`${nft.token_uri}`)
      const data = await res.json()
      return {
        name: data.name,
        image: data.image,
        contract_type: nft.contract_type,
        amount: nft.amount,
        symbol: nft.symbol,
      }
    } catch (e) {
      return { name: null, image: null }
    }
  }
  return (
    // {isLoading ? (<h1>Loading</h1>) : (<h1>Done</h1>)}
    <>
      <Options setSort={setSort} setFilter={setFilter} />

      <div className="flex flex-wrap justify-center gap-10">
        {error && <>{JSON.stringify(error)}</>}
        {nftdata.length > 0 &&
          nftdata.map((nft, id) => <Card content={nftdata[id]} />)}
      </div>
    </>
  )
}
export default NFTBalances
