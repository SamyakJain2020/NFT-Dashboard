import Head from 'next/head'
import { useState, useEffect } from 'react'
import NFT from '../components/NFT'
import Input from '../components/Input'
import ChainInput from '../components/ChainInput'

export default function Home() {
  const [contractAddress, setContractAddress] = useState('')
  const [chain, setChain] = useState('')
  const [content, setContent] = useState([])

  useEffect(() => {
    console.log(chain)
  }, [chain])

  useEffect(() => {
    console.log(contractAddress)
  }, [contractAddress])

  return (
    <>
      <nav className="flex justify-around px-10 py-8 ">
        <Input contractAddress={contractAddress} setContractAddress={setContractAddress} />
        <ChainInput setChain={setChain} />
      </nav>
      <NFT
        chain={chain}
        contractAddress={contractAddress}
        content={content}
        setContent={setContent}
      />

    </>
  )
}
