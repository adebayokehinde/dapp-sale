import React, { useEffect, useState } from 'react'
import { connect } from "react-redux";
import PoolsCardComponent from './card'
import PineTokenJson from '../../web3/abi/PineToken.json'

const contractAddress = "0x7791e4279e70c7af44b4e35f54870a864900ebc1"


const PineTokenPool = (props) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [ethAccount, setEthAccount] = useState("")

    const getPineTokenData = async () => {
        if (window.web3) {
            const web3 = window.web3;
            const accounts = await web3.eth.getAccounts();
            // setEthAccount(accounts[0]);
            const networkId = await web3.eth.net.getId();
            // const networkData = PineTokenJson.networks[networkId];
            // const contractAddress = networkData.address;

            const PineTokenAbi = PineTokenJson.abi;
            const PineTokenConract = new web3.eth.Contract(PineTokenAbi, contractAddress);

            const totalSupply = await PineTokenConract.methods.totalSupply().call();
            const walletBalance = await PineTokenConract.methods.balanceOf(props.walletAddress).call()
            console.log("walletBalance",walletBalance)
           
        }
    }

    useEffect(() => {
        if (props.walletAddress.length > 1) {
            const loadData = async () => {
                await getPineTokenData()
                // setEthAccount(props.walletAddress)
            }
            loadData()
        }
    }, [props.walletAddress])

    return (
        <div className="container mt-3">
            <PoolsCardComponent />
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        walletAddress: state.walletConnect.walletAddress,
    };
};

export default connect(mapStateToProps, null)(PineTokenPool);