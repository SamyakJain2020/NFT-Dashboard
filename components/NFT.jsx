import { useState, useEffect } from 'react'
import { useNFTBalances } from 'react-moralis'
import Card from '../components/Card'
import Options from '../components/Options'

async function f(nft) {
  try {
    const res = await fetch(`${nft.token_uri}`)
    const data = await res.json()

    return {
      name: data.name,
      image: nft.image ? nft.image : data.image,
      contract_type: nft.contract_type,
      amount: nft.amount,
      symbol: nft.symbol,
    }
  } catch (e) {
    return { name: null, image: null }
  }
}

const NFT = ({ chain, contractAddress }) => {
  const [content, setConten] = useState([])
  const [nftdata, setnftdata] = useState([])
  const [sort, setSort] = useState('')
  const [filter, setFilter] = useState('')
  const { getNFTBalances, data, error, isLoading, isFetching } =
    useNFTBalances()
  useEffect(() => {
    if (chain != '' && contractAddress != '') {
      console.log(`chain= ${chain} add: ${contractAddress.trim()}`)
      // clearing radio buttons checked
      let radiobtn = document.querySelectorAll('.radio')
      radiobtn.forEach((element) => {
        element.checked = false
      })
      // calling moralis api for geting nft data
      getNFTBalances({
        params: { chain: chain, address: contractAddress, limit: 100 },
      })

      let list = []
      data?.result.map((nft, id) => {
        const a = f(nft)
        a.then(({ name, image, contract_type, amount, symbol }) => {
          if (name) {
            list.push({
              name: name,
              image: image,
              contract_type: contract_type,
              amount: amount,
              symbol: symbol,
            })
          }
        })
      })
      setConten(list)
    } else {
      setConten([])
      setnftdata([])
    }
  }, [chain, contractAddress])

  useEffect(() => {
    console.log('nft data: ', nftdata)
  }, [nftdata])

  useEffect(() => {
    console.log('sort=', sort)
    if (sort == 'Ascending') {
      if (filter == '') {
        let list = [...content]
        list.sort((a, b) => {
          let textA = a.name.toUpperCase().trim()
          let textB = b.name.toUpperCase().trim()
          return textA < textB ? -1 : textA > textB ? 1 : 0
        })
        setConten(list)
      } else {
        let list = [...nftdata]
        list.sort((a, b) => {
          let textA = a.name.toUpperCase().trim()
          let textB = b.name.toUpperCase().trim()
          return textA < textB ? -1 : textA > textB ? 1 : 0
        })
        setnftdata(list)
      }
    } else if (sort == 'Descending') {
      if (filter == '') {
        let list = [...content]
        list.sort((a, b) => {
          let textA = a.name.toUpperCase()
          let textB = b.name.toUpperCase()
          return !(textA < textB) ? -1 : !(textA > textB) ? 1 : 0
        })
        setConten(list)
      } else {
        let list = [...nftdata]
        list.sort((a, b) => {
          let textA = a.name.toUpperCase()
          let textB = b.name.toUpperCase()
          return !(textA < textB) ? -1 : !(textA > textB) ? 1 : 0
        })
        setnftdata(list)
      }
    }
  }, [sort])

  useEffect(() => {
    if (filter == 'ERC721') {
      let list = [...content]
      setnftdata((prev) => {
        return list.filter((a) => a.contract_type == 'ERC721')
      })
    } else if (filter == 'ERC1155') {
      let list = [...content]
      setnftdata((prev) => {
        return list.filter((a) => a.contract_type == 'ERC1155')
      })
    } else {
      setnftdata([])
    }
  }, [filter])

  useEffect(() => {
    console.log('content =', content)
  }, [content])

  return (
    <>
      <Options setSort={setSort} setFilter={setFilter} />
      {isFetching && (
        <h1 className=" m-4 p-4  text-center text-3xl font-bold  text-rose-500">
          Loading
        </h1>
      )}
      <div className="flex flex-wrap justify-center gap-10">
        {filter == 'ERC721' || filter == 'ERC1155'
          ? nftdata.map((nft, id) => <Card content={nft} />)
          : content.map((nft, id) => <Card content={nft} />)}
      </div>
    </>
  )
}
export default NFT
