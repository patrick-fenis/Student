import {useEffect, useState} from 'react'
import {useParams} from 'react-router-dom'

const Price = (props) => {
  const apiKey = '27657E5C-1BCC-4D54-A39B-AB4391E19399'
  const {symbol} = useParams()
  const url = `http://rest.coinapi.io/v1/exchangerate/${symbol}/USD?apikey=${apiKey}`



  const [coin, setCoin] = useState(null)

  const getCoin = async () => {
    const response = await fetch(url)
    const data = await response.json()
    setCoin(data)
  }

  useEffect(() => {
    getCoin()
  }, [])

  const Loaded = () => {
    return (
      <div>
        <h1> 
          {coin.asset_id_base}/{coin.asset_id_quote}
        </h1>
        <h2>{coin.rate}</h2>
      </div>
    )
  }

  const Loading = () => <h1>Loading...</h1>

  return coin ? <Loaded /> : <Loading />
}

export default Price