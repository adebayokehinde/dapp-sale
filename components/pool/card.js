import React, { useEffect, useState } from 'react'
import web3 from 'web3'
import { connect } from "react-redux";

import PineTokenJson from '../../web3/abi/PineToken.json'

const tokenIcon = "https://res.cloudinary.com/djhjipy7n/image/upload/v1629301903/logo_ugbfrm.png"

const PoolsCardComponent = (props) => {

    const [isLoaded, setIsLoaded] = useState(false)
    const [ethAccount, setEthAccount] = useState("")

    const [formInputs, setFormInputs] = useState({
        Price: "",
        PoolType: "",
        Amount: "",
      });

    const getPoolData = async () => {
        if (window.web3) {
            const web3 = window.web3;
            const accounts = await web3.eth.getAccounts();
            setEthAccount(accounts[0]);
            const networkId = await web3.eth.net.getId();
            const networkData = PineTokenJson.networks[networkId];
            const contractAddress = networkData.address;

            if (networkData) {
                const PineTokenAbi = PineTokenJson.abi;
                const PineTokenConract = new web3.eth.Contract(PineTokenAbi, contractAddress);
 
                const totalSupply = await PineTokenConract.methods.totalSupply().call();
                const walletBalance = await PineTokenConract.methods.balanceOf(accounts[0]);
                setIsLoaded(true)

            }
        }
    }

    const handleFormChange = async (e, field) => {
        e.preventDefault();
        switch (field) {
            case "Title":
                setFormInputs({ ...formInputs, Title: e.target.value });
                break;
            case "Description":
                setFormInputs({ ...formInputs, Description: e.target.value });
                break;
            case "Price":
                setFormInputs({ ...formInputs, Price: e.target.value });
                break;
            case "ItemName":
                setFormInputs({ ...formInputs, ItemName: e.target.value });
                break;
            default:
                break;
        }
    };


    useEffect(() => {

    }, [])

    return (
        <>
            {
                isLoaded ? (
                    <>
                        <div className="grid">
                            <div className="pool-card  flex-c ">
                                <div className="pool-title flex-c">
                                    <p>CAKE</p>
                                </div>
                                <div className="pool-apy flex-r pt-3 pb-3">
                                    <p className="text-left">APY: 50%</p>
                                    <p className="text-right ml-auto">TVL: $19,000</p>
                                </div>
                                <div className="pool-card-body ">
                                    <div className="flex-r">
                                        <div className="pool-icon mr-5 ">
                                            <img className="pool-icon-file" src="https://boltdollar.finance/static/media/CAKE.c64bb359.svg" />
                                        </div>
                                        <div className="ml-auto flex-c">
                                            <span>10 Cakes</span>
                                            <span>$10</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="pool-button mt-4">Approve</button>
                                        <div className="form-input-box">
                                            {/* <p className="mint-form-title">Auction Price</p> */}
                                            <input
                                                onChange={(e) => {
                                                    handleFormChange(e, "Amount");
                                                }}
                                                className="mint-form-input"
                                                name="Amount"
                                                type="text"
                                                value={formInputs.Amount}
                                                placeholder="Amount?"
                                            />
                                        </div>
                                    </div>
                                </div>
                                <div className="pool-card-body ">
                                    <div className="flex-r">
                                        <div className="pool-icon mr-5 ">
                                            <img className="pool-icon-file"
                                                src={tokenIcon}
                                            />
                                        </div>
                                        <div className="ml-auto flex-c">
                                            <span>10 Cakes</span>
                                            <span>$10</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="pool-button mt-4">Claim</button>
                                    </div>
                                </div>
                            </div>

                            <div className="pool-card  flex-c ">
                                <div className="pool-title flex-c">
                                    <p>CAKE-BUSD</p>
                                </div>
                                <div className="pool-apy flex-r pt-3 pb-3">
                                    <p className="text-left">APY: 54%</p>
                                    <p className="text-right ml-auto">TVL: $47,000</p>
                                </div>
                                <div className="pool-card-body ">
                                    <div className="flex-r">
                                        <div className="pool-icon mr-5 ">
                                            <img className="pool-icon-file"
                                                src="https://boltdollar.finance/static/media/cake-bnb.18cb167c.svg" />
                                        </div>
                                        <div className="ml-auto flex-c">
                                            <span>10 Cakes</span>
                                            <span>$10</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="pool-button mt-4">Approve</button>
                                    </div>
                                </div>
                                <div className="pool-card-body ">
                                    <div className="flex-r">
                                        <div className="pool-icon mr-5 ">
                                            <img className="pool-icon-file"
                                                src={tokenIcon}
                                            />
                                        </div>
                                        <div className="ml-auto flex-c">
                                            <span>10 Cakes</span>
                                            <span>$10</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="pool-button mt-4">Claim</button>
                                    </div>
                                </div>
                            </div>

                            <div className="pool-card  flex-c  ">
                                <div className="pool-title flex-c">
                                    <p>BNB-BUSD</p>
                                </div>

                                <div className="pool-apy flex-r pt-3 pb-3">
                                    <p className="text-left">APY: 50%</p>
                                    <p className="text-right ml-auto">TVL: $192,000</p>
                                </div>
                                <div className="pool-card-body ">
                                    <div className="flex-r">
                                        <div className="pool-icon mr-5 ">
                                            <img className="pool-icon-file"
                                                src="https://boltdollar.finance/static/media/busd-bnb.df1bd131.svg" />
                                        </div>
                                        <div className="ml-auto flex-c">
                                            <span>10 Cakes</span>
                                            <span>$10</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="pool-button mt-4">Approve</button>
                                    </div>
                                </div>
                                <div className="pool-card-body ">
                                    <div className="flex-r">
                                        <div className="pool-icon mr-5 ">
                                            <img className="pool-icon-file"
                                                src={tokenIcon}
                                            />
                                        </div>
                                        <div className="ml-auto flex-c">
                                            <span>10 Cakes</span>
                                            <span>$10</span>
                                        </div>
                                    </div>
                                    <div>
                                        <button className="pool-button mt-4">Claim</button>
                                    </div>
                                </div>
                            </div>

                        </div>
                    </>
                ) : null
            }
        </>
    )
}


const mapStateToProps = (state) => {
    return {
        walletAddress: state.walletConnect.walletAddress,
    };
};

export default connect(mapStateToProps, null)(PoolsCardComponent);