import React from 'react'

const tokenIcon = "https://res.cloudinary.com/djhjipy7n/image/upload/v1629301903/logo_ugbfrm.png"

const Card =()=> {
    return (
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
    )
}

export default Card;