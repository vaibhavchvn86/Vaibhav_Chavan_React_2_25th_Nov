import { useState, useEffect } from "react";
import axios from 'axios';


const TableDisplay = () => {

    const [data,setData] = useState([]);

    const getData = async() => {
        
        try{
            const res = await axios.get(`https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false`)
            console.log(res.data);
            setData(res.data)
        }catch(error){
            console.log(error)
        }

    }

 


    useEffect(() => {
        getData();
    },[]);



    return(
        <>
            <div className="bg-dark">
                <div style={{textAlign:'center',marginTop:'40px',marginBottom:'40px'}}>
                    <h1 style={{color:'white'}}>CRYPTO MARKET DASHBOARD</h1>
                </div>
                <table className="table table-striped table-dark table-bordered">
                    <thead>
                        <tr>
                            <th>NAME</th>
                            <th>SYMBOL</th>
                            <th>IMAGE</th>
                            <th>CURRENT PRICE</th>
                            <th>PERCENTAGE</th>
                            <th>TOTAL SUPPLY</th>
                            <th>TOTAL VOLUME</th>
                            <th>MARKET CAP</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item) => {
                                return(
                                    <tr>
                                        <td><img src={item.image} alt={item.name} style={{height:'30px',width:'30px'}}></img>&nbsp;&nbsp;&nbsp;{item.name}</td>
                                        <td className="text-info">{item.symbol}</td>
                                        <td><img src={item.image} alt={item.name} style={{height:'40px',width:'40px'}}></img></td>
                                        <td className="text-warning">$ {item.current_price}</td>
                                        <td className="text-success">{item.ath_change_percentage.toFixed(2)} %</td>
                                        <td>{item.total_supply}</td>
                                        <td>{item.total_volume}</td>
                                        <td className="text-danger">{item.market_cap}</td>
                                    </tr>
                                    

                                )
                            })
                        }
                    </tbody>
                </table>
            </div>
        </>
    )
}

export default TableDisplay;