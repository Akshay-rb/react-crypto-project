import React from 'react'
import millify from 'millify'
import { Typography, Row, Col, Statistic } from 'antd'
import { Link } from 'react-router-dom'

import { useGetCryptosQuery } from '../services/cryptoAPI'

const {Title} = Typography;
const Homepage = () => {
    const {data, isFetching} = useGetCryptosQuery()
    const gloabalStats = data?.data?.stats
    console.log(data);

    if(isFetching) return 'Loading...'

    return (
        <>
            <Title level={2} className='heading'>Global Crypto Stats</Title>
            <Row>
                <Col span={12}><Statistic title='Total Cryptocurrencies' value={gloabalStats.total} /></Col>
                <Col span={12}><Statistic title='Total Exchanges' value={millify(gloabalStats.totalExchanges)} /></Col>
                <Col span={12}><Statistic title='Total Market cap' value={millify(gloabalStats.totalMarketCap)} /></Col>
                <Col span={12}><Statistic title='Total 24h volume' value={millify(gloabalStats.total24hVolume)} /></Col>
                <Col span={12}><Statistic title='Total Markets' value={millify(gloabalStats.totalMarkets)} /></Col>
            </Row>
            <div className="home-heading-container">
                <Title level={2} className='home-title'>Top 10 Cryptocurrencies in the world</Title>
                <Title level={3} className='show-more'><Link to='/cryptocurrencies'>Show more</Link></Title>
            </div>
        </>
    )
}

export default Homepage