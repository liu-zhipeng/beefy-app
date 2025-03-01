import { govPoolABI } from '../abi';

export const polygonStakePools = [
  {
    id: 'bifi-polygon',
    name: 'BIFI',
    logo: 'single-assets/BIFI.png',
    token: 'BIFI',
    tokenDecimals: 18,
    tokenAddress: '0xFbdd194376de19a88118e84E279b977f165d01b8',
    tokenOracle: 'tokens',
    tokenOracleId: 'BIFI',
    earnedToken: 'MATIC',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x0d500B1d8E8eF31E21C99d1Db9A6444d3ADf1270',
    earnContractAddress: '0xDeB0a777ba6f59C78c654B8c92F80238c8002DD2',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'WMATIC',
    partnership: false,
    status: 'active',
    fixedStatus: true,
    partners: [
      {
        logo: 'stake/beefy/beefyfinance.png',
        logoNight: 'stake/beefy/beefyfinance_night.png',
        background: 'stake/beefy/background.png',
        text: "You probably already knew that Beefy is the most trusted multi-chain yield optimizer. But did you know that Beefy has its own token? $BIFI has a maximum supply of 80000 tokens and there is no way to mint more. Everyone who holds our own $BIFI token can not only do cool stuff like create and vote on proposals, they also get a share of all harvests done, every hour, every day on all our Polygon vaults. That's a lot of Matic that goes straight to our $BIFI holders. All you have to do is stake your $BIFI in this vault, it’s that simple, come back and harvest your Matic whenever you need it!",
        website: 'https://app.beefy.finance',
        social: {
          telegram: 'http://t.me/beefyfinance',
          twitter: 'https://twitter.com/beefyfinance',
        },
      },
    ],
  },
  {
    id: 'moo_jetswap-pwings',
    name: 'JetSwap',
    logo: 'polygon/USDC-USDT.png',
    token: 'mooJetSwapUSDC-USDT',
    tokenDecimals: 18,
    tokenAddress: '0x93c9f29CF2496e73f3d8b07055e2359267207147',
    tokenOracle: 'lps',
    tokenOracleId: 'jetswap-poly-usdc-usdt',
    earnedToken: 'mooJetSwapPWINGS',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xa55e8326a9AC7B0bFcA5E6Fc9Cf1141E2dc11f67',
    earnContractAddress: '0x9231457582c0E6F3c631e93AEA2d063F59606710',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'pWINGS',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1626566247,
    partners: [
      {
        logo: 'stake/jetswap/logo.png',
        background: 'stake/jetswap/background.png',
        text: 'Jetswap is a decentralized Automated Market Maker (AMM) on Polygon with low fees and instant trade execution. Trade from the comfort of your own wallet! Trade directly from your favorite wallet application! There are no accounts to set up or trading limits. You have full control over your assets and Jetswap has 0 control over your assets. You can earn BIG WINGS rewards when you deposit your Jetswap WINGS-LP to the WINGS farm. The WINGS LP tokens generate trading fees for the depositor! Even if there is not a supported WINGS farm you can still earn a percentage of every trading fee.',
        website: 'https://polygon.jetswap.finance/',
        social: {
          telegram: 'https://t.me/jetfuelfinance',
          twitter: 'https://twitter.com/Jetfuelfinance',
        },
      },
    ],
  },
  {
    id: 'moo_mai_usdc_matic-qidao',
    name: 'QiDao',
    logo: 'polygon/MIMATIC-USDC.png',
    token: 'mooMaiUSDC-miMATIC',
    tokenDecimals: 18,
    tokenAddress: '0xebe0c8d842AA5A57D7BEf8e524dEabA676F91cD1',
    tokenOracle: 'lps',
    tokenOracleId: 'mai-usdc-mimatic',
    earnedToken: 'QI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x580a84c73811e1839f75d86d75d88cca0c241ff4',
    earnContractAddress: '0xd1Cae9751268Eb4f93bfdE9A4788F312D2c0D045',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'QI',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1626534866,
    partners: [
      {
        logo: 'stake/qidao/logo.png',
        background: 'stake/qidao/background.png',
        text: `QiDao is Polygon's first native stablecoin protocol and a way for you to hold on to your crypto while still being able to spend its value. It allows you to borrow stablecoins at 0% interest, without selling your crypto. MAI is a stablecoin collateralized by your MATIC holdings.`,
        website: 'https://www.mai.finance/',
        social: {
          telegram: 'https://t.me/QiDaoProtocol',
          twitter: 'https://twitter.com/QiDaoProtocol',
        },
      },
    ],
  },
  {
    id: 'moo_poly_usdc-bone',
    name: 'PolyPup',
    logo: 'single-assets/USDC.svg',
    token: 'mooPolypupUSDC-BONE',
    tokenDecimals: 18,
    tokenAddress: '0x8Ce906F6f383c31b09B1D2A5f2c9f480b87ceb58',
    tokenOracle: 'lps',
    tokenOracleId: 'polypup-usdc-bone',
    earnedToken: 'mooPolypupBONE',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x8Fa291074B9E28055fFdBCd4C1C1Dad67B9a130A',
    earnContractAddress: '0xa8b86b9AF7e844DA90A2e72840Ad01CCBD11EdC3',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BONE',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1626560038,
    partners: [
      {
        logo: 'stake/polypup/logo.png',
        background: 'stake/polypup/background.png',
        text: `PolyPup Finance is a new DeFi project on Polygon featuring a deflationary token model. The main features are a low emission rate, low supply, and a layered farming approach to the platform. This model will help end-users earn maximum yields over a long time. Buyback and burns will help stabilize a price floor for long term holders.`,
        website: 'https://bone.polypup.finance/',
        social: {
          telegram: 'https://t.me/PolyPupFarm',
          twitter: 'https://twitter.com/PolyPup1',
        },
      },
    ],
  },
  {
    id: 'moo_atricrypto-bone',
    name: 'Boneswap',
    logo: 'uncategorized/ATRICRYPTO.png',
    token: 'mooCurveATriCrypto',
    tokenDecimals: 18,
    tokenAddress: '0x3dab1aCB811dc4C8b2FdC77812552f4d4Efd0A8c',
    tokenOracle: 'lps',
    tokenOracleId: 'curve-poly-atricrypto',
    earnedToken: 'BONE',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x80244c2441779361f35803b8c711c6c8fc6054a3',
    earnContractAddress: '0xed5010eDF8812003B7d4c9a69E7AfCBceaB62F4f',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BONEswap',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1626212502,
    partners: [
      {
        logo: 'stake/boneswap/logo.png',
        background: 'stake/boneswap/background.png',
        text: `Bone Swap is a full ecosystem that have yield farming and automated market-making (AMM) for the Polygon network. We introduce Decentralized Exchange (DEX), Yield Farm, Info Service, which is the strong and secure foundation with our own BONE token as the center of our service.`,
        website: 'https://farm.boneswap.finance',
        social: {
          telegram: 'https://t.me/boneswapfi',
          twitter: 'https://twitter.com/boneswapfi',
        },
      },
    ],
  },
  {
    id: 'moo_curve-poly-ren',
    name: 'PolyPup',
    logo: 'single-assets/renBTC.png',
    token: 'mooCurveRen',
    tokenDecimals: 18,
    tokenAddress: '0x8c9d3Bc4425773BD2F00C4a2aC105c5Ad73c8141',
    tokenOracle: 'lps',
    tokenOracleId: 'curve-poly-ren',
    earnedToken: 'mooPolypupBONE',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0x8Fa291074B9E28055fFdBCd4C1C1Dad67B9a130A',
    earnContractAddress: '0x54c9B796a96877dee81E1A22e9DfA2488ab2675D',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BONE',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1625858058,
    partners: [
      {
        logo: 'stake/polypup/logo.png',
        background: 'stake/polypup/background.png',
        text: `PolyPup Finance is a new DeFi project on Polygon featuring a deflationary token model. The main features are a low emission rate, low supply, and a layered farming approach to the platform. This model will help end-users earn maximum yields over a long time. Buyback and burns will help stabilize a price floor for long term holders.`,
        website: 'https://bone.polypup.finance/',
        social: {
          telegram: 'https://t.me/PolyPupFarm',
          twitter: 'https://twitter.com/PolyPup1',
        },
      },
    ],
  },
  {
    id: 'moo_matic_yeld-yeld',
    name: 'PolyYeld',
    logo: 'single-assets/YELD.png',
    token: 'mooPolyyeldWMATIC-YELD',
    tokenDecimals: 18,
    tokenAddress: '0xbea5D2Aed651F579fa3e7ADAA2eC51276B2ea420',
    tokenOracle: 'lps',
    tokenOracleId: 'polyyeld-quick-wmatic-yeld',
    earnedToken: 'YELD',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xd0f3121A190d85dE0AB6131f2bCEcdbfcfB38891',
    earnContractAddress: '0x86EB0e64Ca632543BE37e73836d84eD612bb7C34',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'YELD',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1625530839,
    partners: [
      {
        logo: 'stake/polyyeld/logo.png',
        background: 'stake/polyyeld/background.png',
        text: `PolyYeld Finance is a next-generation yield farming protocol on the Polygon network with lots of unique and creative features that enable you to earn a passive income. We are trying to create a protocol like Yearn, but with a reduced token supply with high value for Polygon Network users, LP providers, and stakers. There will only be 62,100 YELD tokens which will be minted throughout the course of 2-3 months.`,
        website: 'https://polyyeld.finance/',
        social: {
          telegram: 'https://t.me/polyyeld',
          discord: 'https://discord.gg/8nK8aQqnCc',
          twitter: 'https://twitter.com/PolyYeldFinance',
        },
      },
    ],
  },
  {
    id: 'moo_aave-eth',
    name: 'Iron / Garuda / Fanatics',
    logo: 'single-assets/ETH.svg',
    token: 'mooAaveETH',
    tokenDecimals: 18,
    tokenAddress: '0x77276a7c9Ff3a6cbD334524d6F1f6219D039ac0E',
    tokenOracle: 'tokens',
    tokenOracleId: 'ETH',
    earnedToken: 'mooPolygonBIFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xfEcf784F48125ccb7d8855cdda7C5ED6b5024Cb3',
    earnContractAddress: '0x9B508ad657ed5A139D1a7c97fD84d7B7240849Cf',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BIFI',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1622830150,
    partners: [
      {
        logo: 'stake/garuda/logo.png',
        background: 'stake/polygon/background.png',
        text: `GarudaSwap is the 1st Next Generation Automatic Liquidity Acquisition yield farm and AMM decentralized exchange running on Binance Smart Chain with lots of unique and creative features that let you earn and win for a long time.`,
        website: 'https://garudaswap.finance/',
        social: {
          telegram: 'https://t.me/garudaswap',
          twitter: 'https://twitter.com/GarudaSwap',
        },
      },
      {
        logo: 'stake/ironfinance/logo.png',
        background: 'stake/polygon/background.png',
        text: `Inspired by FRAX, a unique fractionally-algorithmic stablecoin on the Ethereum network, and utilizing a similar approach, we have created IRON, the first partially-collateralized stablecoin on Binance Smart Chain. The IRON protocol makes use of 2 tokens to achieve its goal:  STEEL and IRON. 
      STEEL - The share token of the Iron finance protocol. Serves as part of the collateral behind IRON. Backed by seigniorage revenue as well as the value of any excess collateral. 
      IRON -  A stablecoin pegged to $1. Partially backed by a continuously adjusting ratio of collateral equal to $1 in value.
      Check out the docs for more information: https://docs.iron.finance/`,
        website: 'https://app.iron.finance/',
        social: {
          telegram: 'https://t.me/ironfinance',
          twitter: 'https://twitter.com/IronFinance',
        },
      },
      {
        logo: 'stake/fanatics/logo.png',
        background: 'stake/polygon/background.png',
        text: `fanatics.finance is a whole new Decentralized Exchange on Binance smart chain as known as 3° Generation yield farming mechanism that allows perpetual price increase with a sustainable and profitable farming yield with a Timelock contract at launch! And numerous new Features. Fanatics Finance is under Fanatics Finance is under license from KSOC Sports OÜ Registration: 16197453 Harju County, Tallinn, Kesklinna district, Pärnu mnt 158, ESTONIA.`,
        website: 'https://fanaticsfinance.com/',
        social: {
          telegram: 'https://t.me/fanaticsfinance_EN',
          twitter: 'https://twitter.com/fanaticsfinance',
        },
      },
    ],
  },
  {
    id: 'moo_aave-btc',
    name: 'Iron / Garuda / Fanatics',
    logo: 'single-assets/BTCB.svg',
    token: 'mooAaveWBTC',
    tokenDecimals: 8,
    tokenAddress: '0xD3395577febc6AdaB25490a69955ebC47040766C',
    tokenOracle: 'tokens',
    tokenOracleId: 'WBTC',
    earnedToken: 'mooPolygonBIFI',
    earnedTokenDecimals: 18,
    earnedTokenAddress: '0xfEcf784F48125ccb7d8855cdda7C5ED6b5024Cb3',
    earnContractAddress: '0x20948Cad130c3D7B24d27CC66163b4aaed4684F0',
    earnContractAbi: govPoolABI,
    earnedOracle: 'tokens',
    earnedOracleId: 'BIFI',
    partnership: true,
    status: 'closed',
    isMooStaked: true,
    periodFinish: 1622830106,
    partners: [
      {
        logo: 'stake/garuda/logo.png',
        background: 'stake/polygon/background.png',
        text: `GarudaSwap is the 1st Next Generation Automatic Liquidity Acquisition yield farm and AMM decentralized exchange running on Binance Smart Chain with lots of unique and creative features that let you earn and win for a long time.`,
        website: 'https://garudaswap.finance/',
        social: {
          telegram: 'https://t.me/garudaswap',
          twitter: 'https://twitter.com/GarudaSwap',
        },
      },
      {
        logo: 'stake/ironfinance/logo.png',
        background: 'stake/polygon/background.png',
        text: `Inspired by FRAX, a unique fractionally-algorithmic stablecoin on the Ethereum network, and utilizing a similar approach, we have created IRON, the first partially-collateralized stablecoin on Binance Smart Chain. The IRON protocol makes use of 2 tokens to achieve its goal:  STEEL and IRON. 
      STEEL - The share token of the Iron finance protocol. Serves as part of the collateral behind IRON. Backed by seigniorage revenue as well as the value of any excess collateral. 
      IRON -  A stablecoin pegged to $1. Partially backed by a continuously adjusting ratio of collateral equal to $1 in value.
      Check out the docs for more information: https://docs.iron.finance/`,
        website: 'https://app.iron.finance/',
        social: {
          telegram: 'https://t.me/ironfinance',
          twitter: 'https://twitter.com/IronFinance',
        },
      },
      {
        logo: 'stake/fanatics/logo.png',
        background: 'stake/polygon/background.png',
        text: `fanaticsfinance is a whole new Decentralized Exchange on Binance smart chain as known as 3° Generation yield farming mechanism that allows perpetual price increase with a sustainable and profitable farming yield with a Timelock contract at launch! And numerous new Features. Fanatics Finance is under Fanatics Finance is under license from KSOC Sports OÜ Registration: 16197453 Harju County, Tallinn, Kesklinna district, Pärnu mnt 158, ESTONIA.`,
        website: 'https://fanaticsfinance.com/',
        social: {
          telegram: 'https://t.me/fanaticsfinance_EN',
          twitter: 'https://twitter.com/fanaticsfinance',
        },
      },
    ],
  },
];
