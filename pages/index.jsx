import { useState, useEffect } from 'react'
import NFT from '../components/NFT'
import Input from '../components/Input'
import ChainInput from '../components/ChainInput'

export default function Home() {
  const [contractAddress, setContractAddress] = useState('')
  const [chain, setChain] = useState('')

  return (
    <>
    <nav className='flex justify-center items-center '>
      <img className=' w-28 ' src="https://cryptologos.cc/logos/ethereum-eth-logo.png" alt="" />
      <h1>NFT DASHBOARD</h1>
    </nav>
    <p className=' text-xl'>Sorry, The api doesn't work for the first time you choose a network. Try chaning to another one and come back. A good address on Polygon is: 0xfd64b63d4a54e6b1a0aa88e6623046c54f960d00  </p>
      <div className="flex justify-around px-10 py-8 ">
        <Input
          contractAddress={contractAddress}
          setContractAddress={setContractAddress}
        />
        <ChainInput setChain={setChain} />
      </div>
      <NFT
        chain={chain}
        contractAddress={contractAddress}
      />
    </>
  )
}
