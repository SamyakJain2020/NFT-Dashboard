import { useState, useEffect } from 'react'
import { useNFTBalances } from 'react-moralis'
import Card from '../components/Card'
const NFTBalances = ({ chain, contractAddress }) => {
  const { getNFTBalances, data, error, isLoading, isFetching } = useNFTBalances()
  const [content, setContent] = useState([])

  useEffect(() => {
    getNFTBalances({
      params: { chain: chain, address: contractAddress, limit: 250 },
    })
    setContent([])
    data?.result.map((nft, id) => {
      const a = f(nft)
      a.then(({ name, image, contract_type, amount, symbol }) => {
        if (image)
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
      })
    })
  }, [chain, contractAddress])

  async function f(nft) {
    console.log(nft);
    try {
      const res = await fetch(`${nft.token_uri}`)
      const data = await res.json()
      // console.log(data);
      return {
        name: data.name,
        image: data.image,
        contract_type: nft.contract_type,
        amount: nft.amount,
        symbol: nft.symbol,
      }
    } catch (e) {
      // console.log(e)
      return { name: null, image: null }
    }
  }
  // console.log(content)
  return (
    // {isLoading ? (<h1>Loading</h1>) : (<h1>Done</h1>)}
    <div className="flex flex-wrap justify-center gap-10">
      {error && <>{JSON.stringify(error)}</>}
      {content.length > 0 &&
        content.map((nft, id) => <Card content={content[id]} />)}
    </div>
  )
}
export default NFTBalances
