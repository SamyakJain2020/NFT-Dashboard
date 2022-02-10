import { useState, useEffect } from 'react'
import NFT from '../components/NFT'
import Input from '../components/Input'
import ChainInput from '../components/ChainInput'

export default function Home() {
  const [contractAddress, setContractAddress] = useState('')
  const [chain, setChain] = useState('')

  useEffect(() => {
    console.log(chain)
  }, [chain])


  useEffect(() => {
    console.log(contractAddress)
  }, [contractAddress])
  // 0xfd64b63d4a54e6b1a0aa88e6623046c54f960d00
  return (
    <>
      <nav className="flex justify-around px-10 py-8 ">
        <Input
          contractAddress={contractAddress}
          setContractAddress={setContractAddress}
        />
        <ChainInput setChain={setChain} />
      </nav>
      <NFT
        chain={chain}
        contractAddress={contractAddress}
      />
    </>
  )
}
