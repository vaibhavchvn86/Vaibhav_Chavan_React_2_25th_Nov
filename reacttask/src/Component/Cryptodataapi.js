import React, { useEffect, useState } from 'react'
import axios from 'axios'
function Cryptodataapi() {
    const [data, setData] = useState([]);
    const fetchData = async () => {
        try {
            const resp = await axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false')
            console.log(resp);
            setData(resp.data);
        } catch (error) {
            console.log(error);
        }
    }
    useEffect(() => {
        fetchData();
    }, [])
    return (
        <div>
            <h1 className='text-warning mb-3'>Crypto Markets Coin API</h1>
            <table className='bg-success text-light m-auto'>
                <thead>
                    <tr>
                        <th className='border p-1 '>Id</th>
                        <th className='border p-1 '>Symbol</th>
                        <th className='border p-1 '>Name</th>
                        <th className='border p-1 '>Image</th>
                        <th className='border p-1 '>Current Price</th>
                        <th className='border p-1 '>Market Cap</th>
                        <th className='border p-1 '>Total Volume</th>
                        <th className='border p-1 '>High_24h</th>
                        <th className='border p-1 '>Low_24h</th>
                        <th className='border p-1 '>Ath Date</th>
                        <th className='border p-1 '>Atl Date</th> 
                        <th className='border p-1 '>Last Updated</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map((item) => {
                            return (<tr key={item.id}>
                                <td className='border p-1 '>{item.id}</td>
                                <td className='border p-1 '>{item.symbol}</td>
                                <td className='border p-1 '>{item.name}</td> 
                                <td className='border p-1 '><img src={item.image} alt={item.name}className='w-25'></img> </td>
                                <td className='border p-1 '>{item.current_price}</td>
                                <td className='border p-1 '>{item.market_cap}</td>
                                <td className='border p-1 '>{item.total_volume}</td>
                                <td className='border p-1 '>{item.high_24h}</td>
                                <td className='border p-1 '>{item.low_24h}</td>
                                <td className='border p-1 '>{item.ath_date}</td>
                                <td className='border p-1 '>{item.atl_date}</td>
                                <td className='border p-1 '>{item.last_updated}</td>
                            </tr>)
                        })
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Cryptodataapi