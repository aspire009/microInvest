import ApexCharts from 'apexcharts';
import Chart from "react-apexcharts";
import React, { useEffect } from 'react'
import { dateTimeData, dataTimeXaxis, simpleData, simpleDataXaxis, facebookUrl, options, amazonUrl, microsoftUrl } from './GraphData'
import { Facebook } from '@material-ui/icons';
import Loader from "react-loader-spinner";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import '../PortfolioHistoryContainer.css'
import ShowChartIcon from '@material-ui/icons/ShowChart';

const StockGraph2 = () => {
    const [stockValues, setStockValues] = React.useState([]);
    const [dateValues, setDateValues] = React.useState([]);
    const [facebookDataStore, setFacebookDataStore] = React.useState([]);
    const [amazonDataStore, setAmazonDataStore] = React.useState([]);
    const [microSoftDataStore, setMicrosoftDataStore] = React.useState([]);
    const [loading, setLoading] = React.useState(true);

    const populateData = async (url, dataStoreName) => {
        let dataStore = [];
        await fetch(url)
            .then((response => response.json()))
            .then((data) => {
                console.log("data", data)

                for (var key in data['Time Series (Daily)']) {
                    dataStore.push({ x: new Date(key).getTime(), y: data['Time Series (Daily)'][key]['1. open'] })
                    dateValues.push(key);
                    stockValues.push(data['Time Series (Daily)'][key]['1. open']);
                }
                console.log('stock values: ', stockValues);
                console.log('dateValues: ', dateValues);
            });

        if (dataStoreName === 'FB') {
            setFacebookDataStore(dataStore);
        // } else if (dataStoreName === 'AMZN') {
        //     setAmazonDataStore(dataStore);
        } else {
            setMicrosoftDataStore(dataStore);
        }


    }

    useEffect(() => {
        if (facebookDataStore.length === 0) {
            populateData(facebookUrl, 'FB');
        }
        // if (amazonDataStore.length === 0) {
        //     populateData(amazonUrl, 'AMZN');
        // }
        if (microSoftDataStore.length === 0) {
            populateData(microsoftUrl, "MSFT");
        }
        setLoading(false);
    }, [])

    const options = {
        chart: {
            height: 650,
            width: '200%',
            type: 'datetime',
            background: '#f4f4f4',
            foreColor: '#333'
        },
        stroke: {
            curve: 'straight',
        },
        series: [
            {
                name: 'Facebook',
                data: facebookDataStore
            },
            // {
            //     name: 'Amazon',
            //     data: amazonDataStore
            // },
            {
                name: 'Microsoft',
                data: microSoftDataStore
            }
        ],
        xaxis: dataTimeXaxis
        
    }

    console.log('graphDataValue: ', facebookDataStore);
    console.log('component is going to be rendered now....')

    populateData();
    return(
        <div className="graph">
            <div className="portfolio-performance-header"><ShowChartIcon className="graph-icon" color="primary"/><p>Portfolio Performance</p></div>
            <Chart
        options={options}
        series={options.series}
        type="line"
        width="500"
        stroke={options.chart.stroke}
    /></div>);
}

export default StockGraph2;