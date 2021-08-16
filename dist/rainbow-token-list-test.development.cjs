'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

var lodash = require('lodash');
var rainbowOverrides = require('rainbow-overrides');
var zod = require('zod');
var fetch = require('node-fetch');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var fetch__default = /*#__PURE__*/_interopDefaultLegacy(fetch);

var name = "Rainbow Token List";
var timestamp = "2021-08-16T01:02:59.121Z";
var logoURI = "https://avatars0.githubusercontent.com/u/48327834?s=200&v=4";
var version = {
	major: 1,
	minor: 2,
	patch: 1
};
var keywords = [
	"rainbow"
];
var tokens = [
	{
		address: "0x68A118Ef45063051Eac49c7e647CE5Ace48a68a5",
		chainId: 1,
		decimals: 18,
		name: "Based Money",
		symbol: "$BASED",
		extensions: {
			color: "#00ADD5",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x4E84E9e5fb0A972628Cf4568c403167EF1D40431",
		chainId: 1,
		decimals: 18,
		name: "$Fluzcoin",
		symbol: "$FFC"
	},
	{
		address: "0x7DD7F56D697Cc0f2b52bD55C057f378F1fE6Ab4b",
		chainId: 1,
		decimals: 18,
		name: "$TEAK",
		symbol: "$TEAK"
	},
	{
		address: "0x297D33e17e61C2Ddd812389C2105193f8348188a",
		chainId: 1,
		decimals: 18,
		name: "Strudel Finance",
		symbol: "$TRDL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB6eD7644C69416d67B522e20bC294A9a9B405B31",
		chainId: 1,
		decimals: 8,
		name: "0xBitcoin",
		symbol: "0xBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x035dF12E0F3ac6671126525f1015E47D79dFEDDF",
		chainId: 1,
		decimals: 18,
		name: "0xMonero",
		symbol: "0XMR"
	},
	{
		address: "0xC86817249634ac209bc73fCa1712bBd75E37407d",
		chainId: 1,
		decimals: 18,
		name: "1 UP",
		symbol: "1-UP"
	},
	{
		address: "0x7FF4169a6B5122b664c51c95727d87750eC07c84",
		chainId: 1,
		decimals: 18,
		name: "Tenset",
		symbol: "10SET"
	},
	{
		address: "0x3402E15b3EA0f1aEC2679c4Be4c6d051ceF93953",
		chainId: 1,
		decimals: 18,
		name: "QAO",
		symbol: "127760"
	},
	{
		address: "0x35872fea6A4843fACBCDbCe99e3B69596A3680b8",
		chainId: 1,
		decimals: 4,
		name: "1337",
		symbol: "1337",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5A9bF6bADCd24Fe0d58E1087290c2FE2c728736a",
		chainId: 1,
		decimals: 18,
		name: "Block 18",
		symbol: "18C"
	},
	{
		address: "0x111111111117dC0aa78b770fA6A738034120C302",
		chainId: 1,
		decimals: 18,
		name: "1inch",
		symbol: "1INCH",
		extensions: {
			color: "#21324D",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xa4eF4b0B23C1fc81d3f9ecF93510e64f58A4A016",
		chainId: 1,
		decimals: 18,
		name: "1MillionNFTs",
		symbol: "1MIL"
	},
	{
		address: "0xf0Bc1ae4eF7ffb126A8347D06Ac6f8AdD770e1CE",
		chainId: 1,
		decimals: 7,
		name: "1Million Token",
		symbol: "1MT"
	},
	{
		address: "0x0F72714B35a366285Df85886A2eE174601292A17",
		chainId: 1,
		decimals: 18,
		name: "1SG",
		symbol: "1SG"
	},
	{
		address: "0xAf30D2a7E90d7DC361c8C4585e9BB7D2F6f15bc7",
		chainId: 1,
		decimals: 18,
		name: "FirstBlood",
		symbol: "1ST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x07597255910a51509CA469568B048F2597E72504",
		chainId: 1,
		decimals: 18,
		name: "Uptrennd",
		symbol: "1UP"
	},
	{
		address: "0xfDBc1aDc26F0F8f8606a5d63b7D3a3CD21c22B23",
		chainId: 1,
		decimals: 8,
		name: "1World",
		symbol: "1WO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0073e5E52E2B4fE218D75d994eE2B3c82f9C87EA",
		chainId: 1,
		decimals: 8,
		name: "22x Fund",
		symbol: "22x"
	},
	{
		address: "0x168E39f96A653Ce0A456560687241b0B2936E5Ff",
		chainId: 1,
		decimals: 18,
		name: "2Based Finance",
		symbol: "2BASED"
	},
	{
		address: "0x2C9C19cE3b15ae77C6d80aEc3C1194Cfd6F7F3fA",
		chainId: 1,
		decimals: 18,
		name: "2crazyNFT",
		symbol: "2CRZ"
	},
	{
		address: "0x9fC0583220eB44fAeE9e2dc1E63F39204DDD9090",
		chainId: 1,
		decimals: 18,
		name: "DualChain",
		symbol: "2DC"
	},
	{
		address: "0xC96c1609A1a45CcC667B2b7FA6508e29617f7b69",
		chainId: 1,
		decimals: 18,
		name: "2gether",
		symbol: "2GT"
	},
	{
		address: "0xE48972fCd82a274411c01834e2f031D4377Fa2c0",
		chainId: 1,
		decimals: 18,
		name: "2key network",
		symbol: "2KEY"
	},
	{
		address: "0xaEc98A708810414878c3BCDF46Aad31dEd4a4557",
		chainId: 1,
		decimals: 18,
		name: "300 Token Sparta",
		symbol: "300"
	},
	{
		address: "0x167E2A574669b0EeB552aaF3Da47c728cb348a41",
		chainId: 1,
		decimals: 7,
		name: "Spartan",
		symbol: "300"
	},
	{
		address: "0x6c3F90f043a72FA612cbac8115EE7e52BDe6E490",
		chainId: 1,
		decimals: 18,
		name: "3Curve",
		symbol: "3Crv",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4f56221252d117f35E2f6Ab937A3F77CAd38934D",
		chainId: 1,
		decimals: 18,
		name: "CryptoCricketClub",
		symbol: "3CS"
	},
	{
		address: "0x430241368c1D293fdA21DBa8Bb7aF32007c59109",
		chainId: 1,
		decimals: 8,
		name: "TrillionToken",
		symbol: "3LT"
	},
	{
		address: "0xFF44b5719f0B77A9951636fc5e69d3a1fc9E7d73",
		chainId: 1,
		decimals: 18,
		name: "4ART Coin",
		symbol: "4ART"
	},
	{
		address: "0x62d75A2a10f755104bd1024d997141ce793Cf585",
		chainId: 1,
		decimals: 18,
		name: "520",
		symbol: "520"
	},
	{
		address: "0x5D9776472483eE2c2B204775547BFf6db5A30Fed",
		chainId: 1,
		decimals: 8,
		name: "Ferrari 599 GTO 1",
		symbol: "599GTO1"
	},
	{
		address: "0x02FdD6866333D8Cd8B1ca022d382080698060BC2",
		chainId: 1,
		decimals: 18,
		name: "6ix9ine Chain",
		symbol: "69C"
	},
	{
		address: "0xEd36482c7F8E5850e91aC0Cf6BF2130A1aA2DF92",
		chainId: 1,
		decimals: 18,
		name: "Holdtowin",
		symbol: "7ADD"
	},
	{
		address: "0x186a33d4dBcd700086A26188DcB74E69bE463665",
		chainId: 1,
		decimals: 8,
		name: "7ELEVEN",
		symbol: "7E"
	},
	{
		address: "0x5b535EDfA75d7CB706044Da0171204E1c48D00e8",
		chainId: 1,
		decimals: 18,
		name: "808TA Token",
		symbol: "808TA"
	},
	{
		address: "0xFeea0bDd3D07eb6FE305938878C0caDBFa169042",
		chainId: 1,
		decimals: 18,
		name: "8Pay",
		symbol: "8PAY"
	},
	{
		address: "0xFFc63b9146967A1ba33066fB057EE3722221aCf0",
		chainId: 1,
		decimals: 18,
		name: "Alpha Token",
		symbol: "A"
	},
	{
		address: "0xBDe8f7820b5544a49D34F9dDeaCAbEDC7C0B5adc",
		chainId: 1,
		decimals: 0,
		name: "Apollo18",
		symbol: "A18"
	},
	{
		address: "0xBa7DCBa2Ade319Bc772DB4df75A76BA00dFb31b0",
		chainId: 1,
		decimals: 18,
		name: "Apollo18",
		symbol: "A18"
	},
	{
		address: "0xFd2a8fA60Abd58Efe3EeE34dd494cD491dC14900",
		chainId: 1,
		decimals: 18,
		name: "a3Curve",
		symbol: "a3Crv",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe8272210954eA85DE6D2Ae739806Ab593B5d9c51",
		chainId: 1,
		decimals: 18,
		name: "Alpha5",
		symbol: "A5T"
	},
	{
		address: "0x6AbA1623ea906D1164Cbb007E764eBde2514A2Ba",
		chainId: 1,
		decimals: 10,
		name: "AAAchain",
		symbol: "AAA"
	},
	{
		address: "0xD938137E6d96c72E4a6085412aDa2daD78ff89c4",
		chainId: 1,
		decimals: 8,
		name: "Abulaba",
		symbol: "AAA"
	},
	{
		address: "0x8C6bf16C273636523C29Db7DB04396143770F6A0",
		chainId: 1,
		decimals: 18,
		name: "Moon Rabbit",
		symbol: "AAA"
	},
	{
		address: "0xFFC97d72E13E01096502Cb8Eb52dEe56f74DAD7B",
		chainId: 1,
		decimals: 18,
		name: "Aave AAVE",
		symbol: "aAAVE",
		extensions: {
			color: "#7285B2",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xba3D9687Cf50fE253cd2e1cFeEdE1d6787344Ed5",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 AAVE",
		symbol: "aAAVE",
		extensions: {
			color: "#7285B2",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x686C650dbcFEaa75D09B883621Ad810F5952bD5d",
		chainId: 1,
		decimals: 18,
		name: "AAX Token",
		symbol: "AAB"
	},
	{
		address: "0xe75ad3aAB14E4B0dF8c5da4286608DaBb21Bd864",
		chainId: 1,
		decimals: 5,
		name: "Acute Angle Cloud",
		symbol: "AAC"
	},
	{
		address: "0xd109b2A304587569c84308c55465cd9fF0317bFB",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM BptBALWETH",
		symbol: "AAMMBPTBALWETH"
	},
	{
		address: "0x358bD0d980E031E23ebA9AA793926857703783BD",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM BptWBTCWET",
		symbol: "AAMMBPTWBTCWETH"
	},
	{
		address: "0x79bE75FFC64DD58e66787E4Eae470c8a1FD08ba4",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM DAI",
		symbol: "AAMMDAI"
	},
	{
		address: "0xe59d2FF6995a926A574390824a657eEd36801E55",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniAAVEWET",
		symbol: "AAMMUNIAAVEWETH"
	},
	{
		address: "0xA1B0edF4460CC4d8bFAA18Ed871bFF15E5b57Eb4",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniBATWETH",
		symbol: "AAMMUNIBATWETH"
	},
	{
		address: "0x0ea20e7fFB006d4Cfe84df2F72d8c7bD89247DB0",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniCRVWETH",
		symbol: "AAMMUNICRVWETH"
	},
	{
		address: "0xE340B25fE32B1011616bb8EC495A4d503e322177",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniDAIUSDC",
		symbol: "AAMMUNIDAIUSDC"
	},
	{
		address: "0x9303EabC860a743aABcc3A1629014CaBcc3F8D36",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniDAIWETH",
		symbol: "AAMMUNIDAIWETH"
	},
	{
		address: "0xb8db81B84d30E2387de0FF330420A4AAA6688134",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniLINKWET",
		symbol: "AAMMUNILINKWETH"
	},
	{
		address: "0x370adc71f67f581158Dc56f539dF5F399128Ddf9",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniMKRWETH",
		symbol: "AAMMUNIMKRWETH"
	},
	{
		address: "0xA9e201A4e269d6cd5E9F0FcbcB78520cf815878B",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniRENWETH",
		symbol: "AAMMUNIRENWETH"
	},
	{
		address: "0x38E491A71291CD43E8DE63b7253E482622184894",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniSNXWETH",
		symbol: "AAMMUNISNXWETH"
	},
	{
		address: "0x3D26dcd840fCC8e4B2193AcE8A092e4a65832F9f",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniUNIWETH",
		symbol: "AAMMUNIUNIWETH"
	},
	{
		address: "0x391E86e2C002C70dEe155eAceB88F7A3c38f5976",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniUSDCWET",
		symbol: "AAMMUNIUSDCWETH"
	},
	{
		address: "0x2365a4890eD8965E564B7E2D27C38Ba67Fec4C6F",
		chainId: 1,
		decimals: 16,
		name: "Aave AMM UniWBTCUSD",
		symbol: "AAMMUNIWBTCUSDC"
	},
	{
		address: "0xc58F53A8adff2fB4eb16ED56635772075E2EE123",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniWBTCWET",
		symbol: "AAMMUNIWBTCWETH"
	},
	{
		address: "0x5394794Be8b6eD5572FCd6b27103F46b5F390E8f",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM UniYFIWETH",
		symbol: "AAMMUNIYFIWETH"
	},
	{
		address: "0xd24946147829DEaA935bE2aD85A3291dbf109c80",
		chainId: 1,
		decimals: 6,
		name: "Aave AMM USDC",
		symbol: "AAMMUSDC"
	},
	{
		address: "0x17a79792Fe6fE5C95dFE95Fe3fCEE3CAf4fE4Cb7",
		chainId: 1,
		decimals: 6,
		name: "Aave AMM USDT",
		symbol: "AAMMUSDT"
	},
	{
		address: "0x13B2f6928D7204328b0E8E4BCd0379aA06EA21FA",
		chainId: 1,
		decimals: 8,
		name: "Aave AMM WBTC",
		symbol: "AAMMWBTC"
	},
	{
		address: "0xf9Fb4AD91812b704Ba883B11d2B576E890a6730A",
		chainId: 1,
		decimals: 18,
		name: "Aave AMM WETH",
		symbol: "AAMMWETH"
	},
	{
		address: "0xd059c8a4c7f53C4352d933b059349Ba492294ac9",
		chainId: 1,
		decimals: 18,
		name: "Apple Protocol Toke",
		symbol: "AAPL"
	},
	{
		address: "0x41eFc0253ee7Ea44400abB5F907FDbfdEbc82bec",
		chainId: 1,
		decimals: 18,
		name: "AAPL",
		symbol: "AAPL"
	},
	{
		address: "0xbfD815347d024F449886c171f78Fa5B8E6790811",
		chainId: 1,
		decimals: 18,
		name: "AMPnet",
		symbol: "AAPX"
	},
	{
		address: "0x7Fc66500c84A76Ad7e9c93437bFc5Ac33E2DDaE9",
		chainId: 1,
		decimals: 18,
		name: "[TEST] Aave",
		symbol: "AAVE",
		extensions: {
			color: "#7285B2",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x272F97b7a56a387aE942350bBC7Df5700f8a4576",
		chainId: 1,
		decimals: 18,
		name: "Aave BAL",
		symbol: "aBAL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x892F0E4118A3BC4eA9305fF7c5Bfa561CA7C9ADF",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing BAT",
		symbol: "aBAT"
	},
	{
		address: "0x05Ec93c0365baAeAbF7AefFb0972ea7ECdD39CF1",
		chainId: 1,
		decimals: 18,
		name: "Aave BAT",
		symbol: "aBAT",
		extensions: {
			color: "#FF5000",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xE1BA0FB44CCb0D11b80F92f4f8Ed94CA3fF51D00",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 BAT",
		symbol: "aBAT",
		extensions: {
			color: "#FF5000",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xcc7d26D8eA6281BB363C8448515F2C61F7BC19F0",
		chainId: 1,
		decimals: 18,
		name: "ABBC Cash",
		symbol: "ABCH"
	},
	{
		address: "0xB348cB0638b2399aE598b5575D5c12e0F15d3690",
		chainId: 1,
		decimals: 18,
		name: "allbandex",
		symbol: "ABDX"
	},
	{
		address: "0xB4EaF48bD7f72356e1019C157e91b81A1C541073",
		chainId: 1,
		decimals: 9,
		name: "ApeBullInu",
		symbol: "ABI"
	},
	{
		address: "0xf8b358b3397a8ea5464f8cc753645d42e14b79EA",
		chainId: 1,
		decimals: 18,
		name: "Airbloc",
		symbol: "ABL"
	},
	{
		address: "0xE692c8D72bd4aC7764090d54842a305546dd1dE5",
		chainId: 1,
		decimals: 8,
		name: "ANY Blocknet",
		symbol: "ABLOCK"
	},
	{
		address: "0xcb03bec536843D338ac138205a6689d4cDc11046",
		chainId: 1,
		decimals: 18,
		name: "ABPT Crypto",
		symbol: "ABPT"
	},
	{
		address: "0x41A08648C3766F9F9d85598fF102a08f4ef84F84",
		chainId: 1,
		decimals: 18,
		name: "Aave Balancer Pool",
		symbol: "ABPT"
	},
	{
		address: "0xa0B207103F764A920b4AF9e691F5bd956DE14DED",
		chainId: 1,
		decimals: 8,
		name: "Abitshadow Token",
		symbol: "ABST"
	},
	{
		address: "0xB98d4C97425d9908E66E53A6fDf673ACcA0BE986",
		chainId: 1,
		decimals: 18,
		name: "Arcblock",
		symbol: "ABT"
	},
	{
		address: "0xA361718326c15715591c299427c62086F69923D9",
		chainId: 1,
		decimals: 18,
		name: "Aave BUSD",
		symbol: "aBUSD",
		extensions: {
			color: "#F3BA2F",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x6Ee0f7BB50a54AB5253dA0667B0Dc2ee526C30a8",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 BUSD",
		symbol: "aBUSD",
		extensions: {
			color: "#F3BA2F",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x9a794Dc1939F1d78fa48613b89B8f9d0A20dA00E",
		chainId: 1,
		decimals: 18,
		name: "Arbidex",
		symbol: "ABX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0E8d6b471e332F140e7d9dbB99E5E3822F728DA6",
		chainId: 1,
		decimals: 18,
		name: "Abyss",
		symbol: "ABYSS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9A0aBA393aac4dFbFf4333B06c407458002C6183",
		chainId: 1,
		decimals: 18,
		name: "ACoconut",
		symbol: "AC"
	},
	{
		address: "0x63d958D765F5bd88efDbD8Afd32445393b24907f",
		chainId: 1,
		decimals: 8,
		name: "Acash Coin",
		symbol: "ACA"
	},
	{
		address: "0x13F1b7FDFbE1fc66676D56483e21B1ecb40b58E2",
		chainId: 1,
		decimals: 18,
		name: "Accelerator Network",
		symbol: "ACC"
	},
	{
		address: "0xe45Fc4290fd3159588f532058592Ea327d2e97D4",
		chainId: 1,
		decimals: 18,
		name: "Alliance Cargo Dire",
		symbol: "ACD"
	},
	{
		address: "0x06147110022B768BA8F99A8f385df11a151A9cc8",
		chainId: 1,
		decimals: 0,
		name: "ACE (TokenStars)",
		symbol: "ACE"
	},
	{
		address: "0xe17e41ACD4caa3CeC048837bfd1918b3c4141767",
		chainId: 1,
		decimals: 6,
		name: "Ace Entertainment",
		symbol: "ACE"
	},
	{
		address: "0xeC5483804e637D45cDe22Fa0869656B64b5AB1ab",
		chainId: 1,
		decimals: 18,
		name: "Acent",
		symbol: "ACE"
	},
	{
		address: "0xEd04915c23f00A313a544955524EB7DBD823143d",
		chainId: 1,
		decimals: 8,
		name: "Alchemy Pay",
		symbol: "ACH"
	},
	{
		address: "0xcAd2d4C4469fF09aB24d02A63BCeDfCD44bE0645",
		chainId: 1,
		decimals: 18,
		name: "Crypto Accept",
		symbol: "ACPT"
	},
	{
		address: "0x76306F029f8F99EFFE509534037Ba7030999E3CF",
		chainId: 1,
		decimals: 18,
		name: "Acreage Coin",
		symbol: "ACR"
	},
	{
		address: "0x8dAE6Cb04688C62d939ed9B68d32Bc62e49970b1",
		chainId: 1,
		decimals: 18,
		name: "Aave CRV",
		symbol: "ACRV"
	},
	{
		address: "0x7b2dF125567815ac9b57DA04B620F50bc93B320C",
		chainId: 1,
		decimals: 8,
		name: "Archetypal Network",
		symbol: "ACTP"
	},
	{
		address: "0xD536bBd5414A8C2beEd82a63737B9327D2FA35a6",
		chainId: 1,
		decimals: 18,
		name: "Aitheon",
		symbol: "ACU"
	},
	{
		address: "0x7bE00ed6796B21656732E8f739Fc1b8F1C53DA0D",
		chainId: 1,
		decimals: 18,
		name: "ACDX Exchange Token",
		symbol: "ACXT"
	},
	{
		address: "0xF6dBE88bA55f1793Ff0773c9B1275300f830914F",
		chainId: 1,
		decimals: 8,
		name: "Asian Dragon",
		symbol: "AD"
	},
	{
		address: "0xb3299d4BaB93Bf04d5b11bc49CD6DFAD1f77d23f",
		chainId: 1,
		decimals: 18,
		name: "3X Short Cardano To",
		symbol: "ADABEAR"
	},
	{
		address: "0x43dE1145Cd22f0a9Cc99e51c205e6e81161Df6B9",
		chainId: 1,
		decimals: 18,
		name: "3X Long Cardano Tok",
		symbol: "ADABULL"
	},
	{
		address: "0x363edC62b8236a0079c00320340485Ee0E7B17ae",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing DAI",
		symbol: "aDAI"
	},
	{
		address: "0x5DC2a562D04DA2D5c5536840f2E210932a1a91B5",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing DAI",
		symbol: "aDAI"
	},
	{
		address: "0xfC1E690f61EFd961294b3e1Ce3313fBD8aa4f85d",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 DAI",
		symbol: "aDAI",
		extensions: {
			color: "#F0B340",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x028171bCA77440897B824Ca71D1c56caC55b68A3",
		chainId: 1,
		decimals: 18,
		name: "Aave DAI",
		symbol: "aDAI",
		extensions: {
			color: "#F0B340",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x2baac9330Cf9aC479D819195794d79AD0c7616e3",
		chainId: 1,
		decimals: 18,
		name: "adbank",
		symbol: "ADB"
	},
	{
		address: "0x1e41a55030E0d0794AbfB6dCEd22e6C7d18d8247",
		chainId: 1,
		decimals: 18,
		name: "Android chain",
		symbol: "ADC"
	},
	{
		address: "0x827Fe1736CEe36F7737Be6cF502434aF294Cf137",
		chainId: 1,
		decimals: 18,
		name: "Africa Digital Coin",
		symbol: "ADC$"
	},
	{
		address: "0xB6c3DC857845a713d3531cea5ac546F6767992F4",
		chainId: 1,
		decimals: 6,
		name: "Advertise Coin",
		symbol: "ADCO"
	},
	{
		address: "0x635d081fD8F6670135D8a3640E2cF78220787d56",
		chainId: 1,
		decimals: 18,
		name: "Add xyz  NEW",
		symbol: "ADD"
	},
	{
		address: "0x94d863173EE77439E4292284fF13fAD54b3BA182",
		chainId: 1,
		decimals: 18,
		name: "Akropolis Delphi",
		symbol: "ADEL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7220e92D418E2EB59D0C25d195FA004bfD3aFC42",
		chainId: 1,
		decimals: 18,
		name: "Ad Flex Token",
		symbol: "ADF"
	},
	{
		address: "0xE69a353b3152Dd7b706ff7dD40fe1d18b7802d31",
		chainId: 1,
		decimals: 18,
		name: "AdHive Token",
		symbol: "ADH"
	},
	{
		address: "0x8810C63470d38639954c6B41AaC545848C46484a",
		chainId: 1,
		decimals: 18,
		name: "Aditus",
		symbol: "ADI"
	},
	{
		address: "0x660e71483785f66133548B10f6926dC332b06e61",
		chainId: 1,
		decimals: 18,
		name: "Adelphoi",
		symbol: "ADL"
	},
	{
		address: "0xc314b0E758D5FF74f63e307A86EbfE183C95767b",
		chainId: 1,
		decimals: 18,
		name: "Adappter Token",
		symbol: "ADP"
	},
	{
		address: "0xcfcEcFe2bD2FED07A9145222E8a7ad9Cf1Ccd22A",
		chainId: 1,
		decimals: 11,
		name: "Adshares",
		symbol: "ADS"
	},
	{
		address: "0x422866a8F0b032c5cf1DfBDEf31A20F4509562b0",
		chainId: 1,
		decimals: 0,
		name: "AdShares",
		symbol: "ADST"
	},
	{
		address: "0xD0D6D6C5Fe4a677D343cC433536BB717bAe167dD",
		chainId: 1,
		decimals: 9,
		name: "adToken",
		symbol: "ADT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xADE00C28244d5CE17D72E40330B1c318cD12B7c3",
		chainId: 1,
		decimals: 18,
		name: "AdEx",
		symbol: "ADX",
		extensions: {
			color: "#1b75bc",
			isVerified: true
		}
	},
	{
		address: "0xd9A4cB9dc9296e111c66dFACAb8Be034EE2E1c2C",
		chainId: 1,
		decimals: 18,
		name: "AdEx Loyalty",
		symbol: "ADX-LOYALTY"
	},
	{
		address: "0x4470BB87d77b963A013DB939BE332f927f2b992e",
		chainId: 1,
		decimals: 4,
		name: "AdEx Legacy Token",
		symbol: "ADXL"
	},
	{
		address: "0x5CA9a71B1d01849C0a95490Cc00559717fCF0D1d",
		chainId: 1,
		decimals: 18,
		name: "Aeternity",
		symbol: "AE",
		extensions: {
			color: "#de3f6b",
			isVerified: true
		}
	},
	{
		address: "0xd337382da15d12Bb6e56498e91DF64f86c8f1EA8",
		chainId: 1,
		decimals: 18,
		name: "Aelysir",
		symbol: "AEL"
	},
	{
		address: "0xaC6Df26a590F08dcC95D5a4705ae8abbc88509Ef",
		chainId: 1,
		decimals: 18,
		name: "Aave ENJ",
		symbol: "aENJ",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x712DB54daA836B53Ef1EcBb9c6ba3b9Efb073F40",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 ENJ",
		symbol: "aENJ",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xD38dE88687172BDE440755b5237987e4A87c23A7",
		chainId: 1,
		decimals: 8,
		name: "AEN Smart Token",
		symbol: "AENS"
	},
	{
		address: "0xac4D22e40bf0B8eF4750a99ED4E935B99A42685E",
		chainId: 1,
		decimals: 18,
		name: "Aeryus",
		symbol: "AER"
	},
	{
		address: "0x91Af0fBB28ABA7E31403Cb457106Ce79397FD4E6",
		chainId: 1,
		decimals: 18,
		name: "Aergo",
		symbol: "AERGO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8c9E4CF756b9d01D791b95bc2D0913EF2Bf03784",
		chainId: 1,
		decimals: 18,
		name: "AEROTOKEN",
		symbol: "AET"
	},
	{
		address: "0x2512658092E558910aeF76B4dB7Ebba701626A15",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing ETH",
		symbol: "aETH"
	},
	{
		address: "0x3a3A65aAb0dd2A17E3F1947bA16138cd37d08c04",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 ETH",
		symbol: "aETH",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xE95A203B1a91a908F9B9CE46459d101078c2c3cb",
		chainId: 1,
		decimals: 18,
		name: "ankrETH",
		symbol: "AETH"
	},
	{
		address: "0xc994a2dEb02543Db1f48688438b9903c4b305ce3",
		chainId: 1,
		decimals: 2,
		name: "Augmint Euro",
		symbol: "AEUR"
	},
	{
		address: "0xfB48E0DEa837f9438309a7e9F0cFe7EE3353A84e",
		chainId: 1,
		decimals: 2,
		name: "Africahead Ipparts",
		symbol: "AFA"
	},
	{
		address: "0xF576ff0d7e4C1e8F27DbD50321E95E36a965985F",
		chainId: 1,
		decimals: 18,
		name: "Apiary Fund Coin",
		symbol: "AFC"
	},
	{
		address: "0x14dfFD4F515d4c43493C6c512c78fbC59a8aF254",
		chainId: 1,
		decimals: 18,
		name: "Anti Fraud Chain",
		symbol: "AFC"
	},
	{
		address: "0xD8a8843b0a5aba6B030E92B3F4d669FaD8A5BE50",
		chainId: 1,
		decimals: 4,
		name: "AfroDex Labs Token",
		symbol: "AFDLT"
	},
	{
		address: "0xEe9E5eFF401ee921b138490d00CA8D1F13f67A72",
		chainId: 1,
		decimals: 8,
		name: "Asian Fintech",
		symbol: "AFIN"
	},
	{
		address: "0xE46F290Cd59195a83e757891430d8D517d16b334",
		chainId: 1,
		decimals: 18,
		name: "AltaFin",
		symbol: "AFN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x08130635368AA28b217a4dfb68E1bF8dC525621C",
		chainId: 1,
		decimals: 4,
		name: "AfroDex",
		symbol: "AFROX"
	},
	{
		address: "0x2D80f5F5328FdcB6ECeb7Cacf5DD8AEDaEC94e20",
		chainId: 1,
		decimals: 4,
		name: "AGA Token",
		symbol: "AGA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb453f1f2EE776dAF2586501361c457dB70e1ca0F",
		chainId: 1,
		decimals: 8,
		name: "AGA Rewards",
		symbol: "AGAR"
	},
	{
		address: "0x8028a34ec63678bCB64325F805449beba98C28a8",
		chainId: 1,
		decimals: 18,
		name: "Aggregator Network",
		symbol: "AGGT"
	},
	{
		address: "0x8eB24319393716668D768dCEC29356ae9CfFe285",
		chainId: 1,
		decimals: 8,
		name: "SingularityNET",
		symbol: "AGI",
		extensions: {
			color: "#6916ff",
			isVerified: true
		}
	},
	{
		address: "0x5B7533812759B45C2B44C19e320ba2cD2681b542",
		chainId: 1,
		decimals: 8,
		name: "SingularityNET",
		symbol: "AGIX"
	},
	{
		address: "0x72c9Fb7ED19D3ce51cea5C56B3e023cd918baaDf",
		chainId: 1,
		decimals: 18,
		name: "AGROLOT",
		symbol: "AGLT"
	},
	{
		address: "0x2fcEE080CeB4ff95fCdc8a03052Cd85e51ecC69c",
		chainId: 1,
		decimals: 18,
		name: "AlgOil",
		symbol: "AGOL"
	},
	{
		address: "0xa704fCe7b309Ec09DF16e2F5Ab8cAf6Fe8A4BAA9",
		chainId: 1,
		decimals: 18,
		name: "AgriChain",
		symbol: "AGRI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x738865301A9b7Dd80Dc3666dD48cF034ec42bdDa",
		chainId: 1,
		decimals: 8,
		name: "Agoras Token",
		symbol: "AGRS"
	},
	{
		address: "0x7db5454F3500f28171d1f9c7a38527C9cF94e6b2",
		chainId: 1,
		decimals: 4,
		name: "Silver Standard",
		symbol: "AGS"
	},
	{
		address: "0xdB2F2bCCe3efa95EDA95a233aF45F3e0d4f00e2A",
		chainId: 1,
		decimals: 8,
		name: "Aegis",
		symbol: "AGS"
	},
	{
		address: "0x667Fd83E24Ca1D935d36717D305D54fA0CAC991C",
		chainId: 1,
		decimals: 18,
		name: "Collector Coin",
		symbol: "AGS"
	},
	{
		address: "0x8D2FAb1ff34f1c545673a816f1438B02D0a2E32D",
		chainId: 1,
		decimals: 8,
		name: "AISF",
		symbol: "AGT"
	},
	{
		address: "0xD37EE7e4f452C6638c96536e68090De8cBcdb583",
		chainId: 1,
		decimals: 2,
		name: "Aave GUSD",
		symbol: "AGUSD"
	},
	{
		address: "0x8b79656FC38a04044E495e22fAD747126ca305C4",
		chainId: 1,
		decimals: 18,
		name: "AgaveCoin",
		symbol: "AGVC"
	},
	{
		address: "0xB125CcEb9C6e349217d09B069a8d88DBEAcF06E5",
		chainId: 1,
		decimals: 9,
		name: "Animal House",
		symbol: "AHOUSE"
	},
	{
		address: "0x5121E348e897dAEf1Eef23959Ab290e5557CF274",
		chainId: 1,
		decimals: 18,
		name: "POLY AI",
		symbol: "AI"
	},
	{
		address: "0xc91B523A59ACC63A64f61fc7bBfB4bfc82DD25f2",
		chainId: 1,
		decimals: 18,
		name: "Multiverse",
		symbol: "AI"
	},
	{
		address: "0xE7FB3559358A99df54466d0350e4aD6DC7093da3",
		chainId: 1,
		decimals: 8,
		name: "Aicon",
		symbol: "AICO"
	},
	{
		address: "0x37E8789bB9996CaC9156cD5F5Fd32599E6b91289",
		chainId: 1,
		decimals: 18,
		name: "AidCoin",
		symbol: "AID",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdA1E53E088023Fe4D1DC5a418581748f52CBd1b8",
		chainId: 1,
		decimals: 9,
		name: "Aidi Inu",
		symbol: "AIDI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x584B44853680ee34a0F337B712a8f66d816dF151",
		chainId: 1,
		decimals: 18,
		name: "AI Doctor",
		symbol: "AIDOC"
	},
	{
		address: "0xa957045A12D270e2eE0dcA9A3340c340e05d4670",
		chainId: 1,
		decimals: 18,
		name: "AIDUS Token",
		symbol: "AIDUS"
	},
	{
		address: "0x53352e7d6620cc931c0C9318166ae2a92c1A4666",
		chainId: 1,
		decimals: 18,
		name: "AI Mining",
		symbol: "AIM"
	},
	{
		address: "0x3A810ff7211b40c4fA76205a14efe161615d0385",
		chainId: 1,
		decimals: 18,
		name: "AI Network",
		symbol: "AIN"
	},
	{
		address: "0x4CEdA7906a5Ed2179785Cd3A40A69ee8bc99C466",
		chainId: 1,
		decimals: 8,
		name: "Aion Network",
		symbol: "AION"
	},
	{
		address: "0x626E8036dEB333b408Be468F951bdB42433cBF18",
		chainId: 1,
		decimals: 18,
		name: "AIOZ Network",
		symbol: "AIOZ"
	},
	{
		address: "0x27Dce1eC4d3f72C3E457Cc50354f1F975dDEf488",
		chainId: 1,
		decimals: 8,
		name: "AirToken",
		symbol: "AIR"
	},
	{
		address: "0x8cb1d155a5a1d5d667611b7710920fD9D1CD727F",
		chainId: 1,
		decimals: 8,
		name: "Aircoins",
		symbol: "AIRX"
	},
	{
		address: "0x79650799e7899A802cB96C0Bc33a6a8d4CE4936C",
		chainId: 1,
		decimals: 18,
		name: "AICHAIN",
		symbol: "AIT"
	},
	{
		address: "0x1063ce524265d5a3A624f4914acd573dD89ce988",
		chainId: 1,
		decimals: 18,
		name: "Aigang",
		symbol: "AIX"
	},
	{
		address: "0x1Ca43a170BaD619322e6f54d46b57e504dB663aA",
		chainId: 1,
		decimals: 18,
		name: "ARTWOOK COIN",
		symbol: "AKC"
	},
	{
		address: "0x3301Ee63Fb29F863f2333Bd4466acb46CD8323E6",
		chainId: 1,
		decimals: 18,
		name: "Akita Inu",
		symbol: "AKITA"
	},
	{
		address: "0x5f02cf3c7ada49DFC4A3645Fc85C8aE86808Dd9b",
		chainId: 1,
		decimals: 18,
		name: "COST COIN",
		symbol: "AKM"
	},
	{
		address: "0xCEF90296332d6fdeA31417D7Dd679d78A549638B",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing KNC",
		symbol: "aKNC"
	},
	{
		address: "0x39C6b3e42d6A679d7D776778Fe880BC9487C2EDA",
		chainId: 1,
		decimals: 18,
		name: "Aave KNC",
		symbol: "aKNC",
		extensions: {
			color: "#31CB9E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x9D91BE44C06d373a8a226E1f3b146956083803eB",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 KNC",
		symbol: "aKNC",
		extensions: {
			color: "#31CB9E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x8Ab7404063Ec4DBcfd4598215992DC3F8EC853d7",
		chainId: 1,
		decimals: 18,
		name: "Akropolis",
		symbol: "AKRO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x564F45b6bb68ADEd8b660a0d8a0A948DD6d6e4E8",
		chainId: 1,
		decimals: 8,
		name: "Aladiex",
		symbol: "ALA"
	},
	{
		address: "0x00a8b738E453fFd858a7edf03bcCfe20412f0Eb0",
		chainId: 1,
		decimals: 18,
		name: "AllianceBlock",
		symbol: "ALBT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x95D82bA91256DB995C80BEd690D0A779191aF62b",
		chainId: 1,
		decimals: 18,
		name: "AlrightCoin",
		symbol: "ALC"
	},
	{
		address: "0x0000A1c00009A619684135B824Ba02f7FbF3A572",
		chainId: 1,
		decimals: 18,
		name: "AlchemyDAO",
		symbol: "ALCH"
	},
	{
		address: "0x181a63746d3Adcf356CBc73aCE22832FFBB1EE5A",
		chainId: 1,
		decimals: 8,
		name: "ALCO",
		symbol: "ALCO"
	},
	{
		address: "0xdBdb4d16EdA451D0503b854CF79D55697F90c8DF",
		chainId: 1,
		decimals: 18,
		name: "Alchemix",
		symbol: "ALCX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb339FcA531367067e98d7c4f9303Ffeadff7B881",
		chainId: 1,
		decimals: 18,
		name: "Aludra Network",
		symbol: "ALD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF12436D77166f0801FB7BBdAFAF1482A7577Fdaa",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing LEND",
		symbol: "aLEND"
	},
	{
		address: "0x7D2D3688Df45Ce7C552E19c27e007673da9204B8",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 LEND",
		symbol: "aLEND",
		extensions: {
			color: "#109FCA",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x27702a26126e0B3702af63Ee09aC4d1A084EF628",
		chainId: 1,
		decimals: 18,
		name: "Aleph im",
		symbol: "ALEPH"
	},
	{
		address: "0xC0134b5B924c2FCA106eFB33C45446c466FBe03e",
		chainId: 1,
		decimals: 18,
		name: "aleph.im",
		symbol: "ALEPH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0100546F2cD4C9D97f798fFC9755E47865FF7Ee6",
		chainId: 1,
		decimals: 18,
		name: "Alchemix ETH",
		symbol: "ALETH"
	},
	{
		address: "0x8BA6DcC667d3FF64C1A2123cE72FF5F0199E5315",
		chainId: 1,
		decimals: 4,
		name: "AlexMasmej",
		symbol: "ALEX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x16B0a1a87ae8aF5C792faBC429C4FE248834842B",
		chainId: 1,
		decimals: 18,
		name: "Algory",
		symbol: "ALG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x057FB10e3fec001a40e6B75D3a30B99e23e54107",
		chainId: 1,
		decimals: 18,
		name: "3X Short Algorand T",
		symbol: "ALGOBEAR"
	},
	{
		address: "0x584936357D68f5143F12e2e64F0089dB93814dAd",
		chainId: 1,
		decimals: 18,
		name: "3X Long Algorand To",
		symbol: "ALGOBULL"
	},
	{
		address: "0xfdc3D57eB7839ca68A2fAD7A93799c8e8aFA61B7",
		chainId: 1,
		decimals: 18,
		name: "1X Short Algorand T",
		symbol: "ALGOHEDGE"
	},
	{
		address: "0x4c6719bF85903d18C295dA44216f862b01b36f43",
		chainId: 1,
		decimals: 18,
		name: "AlloHash",
		symbol: "ALH"
	},
	{
		address: "0x4289c043A12392F1027307fB58272D8EBd853912",
		chainId: 1,
		decimals: 18,
		name: "AiLink Token",
		symbol: "ALI"
	},
	{
		address: "0xAC51066d7bEC65Dc4589368da368b212745d63E8",
		chainId: 1,
		decimals: 6,
		name: "My Neighbor Alice",
		symbol: "ALICE"
	},
	{
		address: "0xC3029A066B20dC8712CBD2093EB1E7F58BC49D83",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing LINK",
		symbol: "aLINK"
	},
	{
		address: "0xa06bC25B5805d5F8d82847D191Cb4Af5A3e873E0",
		chainId: 1,
		decimals: 18,
		name: "Aave LINK",
		symbol: "aLINK",
		extensions: {
			color: "#1A56F0",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xA64BD6C70Cb9051F6A9ba1F163Fdc07E0DfB5F84",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 LINK",
		symbol: "aLINK",
		extensions: {
			color: "#1A56F0",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xEA610B1153477720748DC13ED378003941d84fAB",
		chainId: 1,
		decimals: 18,
		name: "ALIS",
		symbol: "ALIS"
	},
	{
		address: "0x9c659CB48c4406Cd2857aEcEfF1609b2dB280d0E",
		chainId: 1,
		decimals: 18,
		name: "Alita Network",
		symbol: "ALITA"
	},
	{
		address: "0xF4e447C390167E5A17a95AB2475b71d4eA785200",
		chainId: 1,
		decimals: 18,
		name: "ALL BEST ICO",
		symbol: "ALLBI"
	},
	{
		address: "0x8185Bc4757572Da2a610f887561c32298f1A5748",
		chainId: 1,
		decimals: 18,
		name: "Aluna",
		symbol: "ALN"
	},
	{
		address: "0x455F7Ef6D8BCfc35f9337e85aEe1B0600a59FabE",
		chainId: 1,
		decimals: 18,
		name: "Aloha",
		symbol: "ALOHA"
	},
	{
		address: "0x37D6E7F287200C740012747d2A79295cAeD2DB35",
		chainId: 1,
		decimals: 8,
		name: "ALP Coin",
		symbol: "ALP"
	},
	{
		address: "0x7cA4408137eb639570F8E647d9bD7B7E8717514A",
		chainId: 1,
		decimals: 18,
		name: "Alpaca City",
		symbol: "ALPA"
	},
	{
		address: "0x413f6A89DdB823974F24F2E3cD3B4f467D3BBB38",
		chainId: 1,
		decimals: 18,
		name: "ALPACA Vault  NFTX",
		symbol: "ALPACA"
	},
	{
		address: "0xa1faa113cbE53436Df28FF0aEe54275c13B40975",
		chainId: 1,
		decimals: 18,
		name: "Alpha Finance Lab",
		symbol: "ALPHA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaa99199d1e9644b588796F3215089878440D58e0",
		chainId: 1,
		decimals: 18,
		name: "Alphr",
		symbol: "ALPHR"
	},
	{
		address: "0x419B8ED155180A8c9C64145e76DaD49c0A4Efb97",
		chainId: 1,
		decimals: 18,
		name: "AltEstate Token",
		symbol: "ALT"
	},
	{
		address: "0x90B417Ab462440Cf59767BCf72D0d91CA42F21ED",
		chainId: 1,
		decimals: 18,
		name: "3X Short Altcoin In",
		symbol: "ALTBEAR"
	},
	{
		address: "0xd829664CDbF3195b2cE76047A65de29e7ED0a9A8",
		chainId: 1,
		decimals: 18,
		name: "3X Long Altcoin Ind",
		symbol: "ALTBULL"
	},
	{
		address: "0x638AC149eA8EF9a1286C41B977017AA7359E6Cfa",
		chainId: 1,
		decimals: 18,
		name: "ALTS Token",
		symbol: "ALTS"
	},
	{
		address: "0xBC6DA0FE9aD5f3b0d58160288917AA56653660E9",
		chainId: 1,
		decimals: 18,
		name: "Alchemix USD",
		symbol: "ALUSD"
	},
	{
		address: "0x49b127Bc33ce7E1586EC28CEC6a65b112596C822",
		chainId: 1,
		decimals: 18,
		name: "ALAX",
		symbol: "ALX"
	},
	{
		address: "0x4317Ea4820F8D9ea6A103553A89Cb261B6Ea7F2a",
		chainId: 1,
		decimals: 4,
		name: "Alxocity",
		symbol: "ALXO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf2CDF38e24738bA379ffa38D47bc88a941dF5627",
		chainId: 1,
		decimals: 2,
		name: "Ally",
		symbol: "ALY"
	},
	{
		address: "0x2509eE05b8df07EC75046E24BBf1CfCdB8b2A183",
		chainId: 1,
		decimals: 18,
		name: "Amaten",
		symbol: "AMA"
	},
	{
		address: "0xA62D9d68674AaAc7Cb31E8c0515Dd3A47D897363",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing MANA",
		symbol: "aMANA"
	},
	{
		address: "0xa685a61171bb30d4072B338c80Cb7b2c865c873E",
		chainId: 1,
		decimals: 18,
		name: "Aave MANA",
		symbol: "aMANA",
		extensions: {
			color: "#FF2D55",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x6FCE4A401B6B80ACe52baAefE4421Bd188e76F6f",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 MANA",
		symbol: "aMANA",
		extensions: {
			color: "#FF2D55",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x4DC3643DbC642b72C158E7F3d2ff232df61cb6CE",
		chainId: 1,
		decimals: 18,
		name: "Ambrosus",
		symbol: "AMB",
		extensions: {
			color: "#3c5be0",
			isVerified: true
		}
	},
	{
		address: "0x7603de2eA4cbceB0250118De03Fcb70Fe1e8e935",
		chainId: 1,
		decimals: 18,
		name: "AMC Fight Night",
		symbol: "AMC"
	},
	{
		address: "0x9e5A64943f9F48463f07cC0578bBF9E2e67F0F61",
		chainId: 1,
		decimals: 18,
		name: "Anonymous Coin",
		symbol: "AMC"
	},
	{
		address: "0x12513335ffD5DAfc2334e98625d27c1CA84bff86",
		chainId: 1,
		decimals: 18,
		name: "Amepay",
		symbol: "AME"
	},
	{
		address: "0xf1aC7A375429719DE0dde33528e2639B9a206ebA",
		chainId: 1,
		decimals: 18,
		name: "Arena Match Gold",
		symbol: "AMGO"
	},
	{
		address: "0x949bEd886c739f1A3273629b3320db0C5024c719",
		chainId: 1,
		decimals: 9,
		name: "AMIS",
		symbol: "AMIS"
	},
	{
		address: "0x564393b8D6dEAeA8f3D739a3f6D9B441D8Ee6198",
		chainId: 1,
		decimals: 18,
		name: "AMIX",
		symbol: "AMIX"
	},
	{
		address: "0xc713e5E149D5D0715DcD1c156a020976e7E56B88",
		chainId: 1,
		decimals: 18,
		name: "Aave MKR",
		symbol: "aMKR",
		extensions: {
			color: "#1AAB9B",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x7deB5e830be29F91E298ba5FF1356BB7f8146998",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 MKR",
		symbol: "aMKR",
		extensions: {
			color: "#1AAB9B",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xCA0e7269600d353F70b14Ad118A49575455C0f2f",
		chainId: 1,
		decimals: 18,
		name: "AMLT Network",
		symbol: "AMLT"
	},
	{
		address: "0x8B1F49491477e0fB46a29fef53F1EA320D13c349",
		chainId: 1,
		decimals: 6,
		name: "MicroMoney",
		symbol: "AMM"
	},
	{
		address: "0x737F98AC8cA59f2C68aD658E3C3d8C8963E40a4c",
		chainId: 1,
		decimals: 18,
		name: "Amon",
		symbol: "AMN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x38c87AA89B2B8cD9B95b736e1Fa7b612EA972169",
		chainId: 1,
		decimals: 18,
		name: "AMO Coin",
		symbol: "AMO"
	},
	{
		address: "0x00059AE69c1622A7542EdC15E8d17b060fE307b6",
		chainId: 1,
		decimals: 18,
		name: "AmonD",
		symbol: "AMON"
	},
	{
		address: "0xfF20817765cB7f73d4bde2e66e067E58D11095C2",
		chainId: 1,
		decimals: 18,
		name: "Amp",
		symbol: "AMP",
		extensions: {
			color: "#D9327C",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xD46bA6D942050d489DBd938a2C909A5d5039A161",
		chainId: 1,
		decimals: 9,
		name: "Ampleforth",
		symbol: "AMPL",
		extensions: {
			color: "#25292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x8003C49f6ebACDdC493EA47CAB45e892d1B638a1",
		chainId: 1,
		decimals: 9,
		name: "AmpleGold",
		symbol: "AMPLG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd3Fb5cAbd07c85395667f83D20b080642BdE66C7",
		chainId: 1,
		decimals: 16,
		name: "Ammbr",
		symbol: "AMR"
	},
	{
		address: "0x84936cF7630AA3e27Dd9AfF968b140d5AEE49F5a",
		chainId: 1,
		decimals: 8,
		name: "AmberTime Coin",
		symbol: "AMTC"
	},
	{
		address: "0x2c9acEb63181cd08a093d052ec041e191f229692",
		chainId: 1,
		decimals: 18,
		name: "Angryb",
		symbol: "ANB"
	},
	{
		address: "0xbBe319b73744dB9d54F5D29df7D8256B7e43995C",
		chainId: 1,
		decimals: 18,
		name: "Aragon China",
		symbol: "ANC"
	},
	{
		address: "0x0F3ADC247E91c3c50bC08721355A41037E89Bc20",
		chainId: 1,
		decimals: 18,
		name: "Anchor Protocol",
		symbol: "ANC"
	},
	{
		address: "0x5456BC77Dd275c45c3C15f0cF936b763cF57c3B5",
		chainId: 1,
		decimals: 8,
		name: "Anchor",
		symbol: "ANCT"
	},
	{
		address: "0xa8C16FbeCF1AE1BC1DCc87e6892F18F777E92C69",
		chainId: 1,
		decimals: 9,
		name: "Androttweiler Token",
		symbol: "ANDROTTWEILER"
	},
	{
		address: "0x130914E1B240a7F4c5D460B7d3a2Fd3846b576fa",
		chainId: 1,
		decimals: 18,
		name: "Aureus Nummus Gold",
		symbol: "ANG"
	},
	{
		address: "0xc36e2C02e64585c15794B8e25E826d50b15fd878",
		chainId: 1,
		decimals: 8,
		name: "Animeyen",
		symbol: "ANIME"
	},
	{
		address: "0xcD62b1C403fa761BAadFC74C525ce2B51780b184",
		chainId: 1,
		decimals: 18,
		name: "Aragon Court",
		symbol: "ANJ"
	},
	{
		address: "0x3C45B24359fB0E107a4eAA56Bd0F2cE66C99A0E5",
		chainId: 1,
		decimals: 18,
		name: "Apple Network",
		symbol: "ANK"
	},
	{
		address: "0x8290333ceF9e6D528dD5618Fb97a76f268f3EDD4",
		chainId: 1,
		decimals: 18,
		name: "Ankr",
		symbol: "ANKR",
		extensions: {
			color: "#2e6bf6",
			isVerified: true
		}
	},
	{
		address: "0xCae72A7A0Fd9046cf6b165CA54c9e3a3872109E0",
		chainId: 1,
		decimals: 18,
		name: "AnRKey X",
		symbol: "ANRX"
	},
	{
		address: "0x960b236A07cf122663c4303350609A66A7B288C0",
		chainId: 1,
		decimals: 18,
		name: "Aragon Network Token",
		symbol: "ANT",
		extensions: {
			color: "#2cd3e1",
			isVerified: true
		}
	},
	{
		address: "0xa117000000f279D81A1D3cc75430fAA017FA5A2e",
		chainId: 1,
		decimals: 18,
		name: "Aragon",
		symbol: "ANT",
		extensions: {
			color: "#06BCE5",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xa9fBB83a2689F4fF86339a4b96874d718673b627",
		chainId: 1,
		decimals: 18,
		name: "FireAnts",
		symbol: "ANTS"
	},
	{
		address: "0x3D382228C54736d831FAC2748F4734D9177c7332",
		chainId: 1,
		decimals: 18,
		name: "Aniverse",
		symbol: "ANV"
	},
	{
		address: "0x7DbDD9DaFdC4c1c03D67925a4f85daA398aF32B0",
		chainId: 1,
		decimals: 18,
		name: "Anchor Neural World",
		symbol: "ANW"
	},
	{
		address: "0xf99d58e463A2E07e5692127302C20A191861b4D6",
		chainId: 1,
		decimals: 18,
		name: "Anyswap",
		symbol: "ANY"
	},
	{
		address: "0x9ab165D795019b6d8B3e971DdA91071421305e5a",
		chainId: 1,
		decimals: 18,
		name: "Aurora",
		symbol: "AOA"
	},
	{
		address: "0x8578530205CEcbe5DB83F7F29EcfEEC860C297C2",
		chainId: 1,
		decimals: 18,
		name: "smARTOFGIVING",
		symbol: "AOG"
	},
	{
		address: "0x15bdA08c3afbf5955D6e9B235Fd55a1FD0DbC829",
		chainId: 1,
		decimals: 6,
		name: "Alpha Coin",
		symbol: "APC"
	},
	{
		address: "0x26EA1f595f6567b7050fBbA24F6A66e19Db4D560",
		chainId: 1,
		decimals: 18,
		name: "APE Punk",
		symbol: "APE"
	},
	{
		address: "0x209C1808FeBf6c1aB7C65764bb61AD67d3923fcc",
		chainId: 1,
		decimals: 18,
		name: "APEcoin",
		symbol: "APE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x14Dd7EBE6CB084Cb73EF377e115554D47dc9D61E",
		chainId: 1,
		decimals: 18,
		name: "ApeHaven",
		symbol: "APES"
	},
	{
		address: "0xEC6a5D88bF56Fd3F96957AE65916C69F29DB35c5",
		chainId: 1,
		decimals: 18,
		name: "apeUSD AAVE Synthet",
		symbol: "APEUSD-AAVE-DEC21"
	},
	{
		address: "0x0f775aD69e3c93D599D3315A130Bd82A0cDda397",
		chainId: 1,
		decimals: 18,
		name: "apeUSD LINK Synthet",
		symbol: "APEUSD-LINK-DEC21"
	},
	{
		address: "0x5C6Af72cBd740b90528C8Fe226125413b6bd7E5A",
		chainId: 1,
		decimals: 18,
		name: "apeUSD SNX Syntheti",
		symbol: "APEUSD-SNX-DEC21"
	},
	{
		address: "0xfA5e27893aee4805283D86e4283Da64F8c72dd56",
		chainId: 1,
		decimals: 18,
		name: "apeUSD UMA Syntheti",
		symbol: "APEUSD-UMA-DEC21"
	},
	{
		address: "0xFbB6B34DD77274a06EA2E5462a5e0B9E23ce478e",
		chainId: 1,
		decimals: 18,
		name: "apeUSD UNI Syntheti",
		symbol: "APEUSD-UNI-DEC21"
	},
	{
		address: "0x16448014A29484b82E3A5A6cF254E5C563A28929",
		chainId: 1,
		decimals: 18,
		name: "The APIS",
		symbol: "API"
	},
	{
		address: "0x0b38210ea11411557c13457D4dA7dC6ea731B88a",
		chainId: 1,
		decimals: 18,
		name: "API3",
		symbol: "API3",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4C0fBE1BB46612915E7967d2C3213cd4d87257AD",
		chainId: 1,
		decimals: 18,
		name: "APIS",
		symbol: "APIS"
	},
	{
		address: "0xf51EBf9a26DbC02B13F8B3a9110dac47a4d62D78",
		chainId: 1,
		decimals: 18,
		name: "APIX",
		symbol: "APIX"
	},
	{
		address: "0x69275aC5477F3A9DC051180BC559140Bc647F8E9",
		chainId: 1,
		decimals: 18,
		name: "Apple Finance",
		symbol: "APLP"
	},
	{
		address: "0xC8C424B91D8ce0137bAB4B832B7F7D154156BA6c",
		chainId: 1,
		decimals: 18,
		name: "apM Coin",
		symbol: "APM"
	},
	{
		address: "0xd4342a57eCf2Fe7ffA37c33cb8f63b1500e575E6",
		chainId: 1,
		decimals: 18,
		name: "Apron",
		symbol: "APN"
	},
	{
		address: "0x1a7a8BD9106F2B8D977E08582DC7d24c723ab0DB",
		chainId: 1,
		decimals: 18,
		name: "AppCoins",
		symbol: "APPC",
		extensions: {
			color: "#fd875e",
			isVerified: true
		}
	},
	{
		address: "0x23aE3C5B39B12f0693e05435EeaA1e51d8c61530",
		chainId: 1,
		decimals: 18,
		name: "AIGang",
		symbol: "APT"
	},
	{
		address: "0x4104b135DBC9609Fc1A9490E61369036497660c8",
		chainId: 1,
		decimals: 18,
		name: "APWine",
		symbol: "APW",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x95a4492F028aa1fd432Ea71146b433E7B4446611",
		chainId: 1,
		decimals: 18,
		name: "APY Finance",
		symbol: "APY"
	},
	{
		address: "0xf7413489c474ca4399eeE604716c72879Eea3615",
		chainId: 1,
		decimals: 18,
		name: "APYSwap",
		symbol: "APYS"
	},
	{
		address: "0x2a9bDCFF37aB68B95A53435ADFd8892e86084F93",
		chainId: 1,
		decimals: 18,
		name: "Alpha Quark Token",
		symbol: "AQT"
	},
	{
		address: "0x7e32c8727Cc19DD59a7a4d01b95Ae1cBFC8f4c77",
		chainId: 1,
		decimals: 9,
		name: "Aqua",
		symbol: "AQUA"
	},
	{
		address: "0xa92E7c82B11d10716aB534051B271D2f6aEf7Df5",
		chainId: 1,
		decimals: 18,
		name: "Ara Token",
		symbol: "ARA"
	},
	{
		address: "0xc9BC48c72154ef3e5425641a3c747242112a46AF",
		chainId: 1,
		decimals: 18,
		name: "Aave RAI",
		symbol: "ARAI"
	},
	{
		address: "0x387c291Bc3274389054E82CE81Dd318a0113caf5",
		chainId: 1,
		decimals: 18,
		name: "AirRaid Lottery Tok",
		symbol: "ARAID"
	},
	{
		address: "0x30680AC0a8A993088223925265fD7a76bEb87E7F",
		chainId: 1,
		decimals: 18,
		name: "ARAW",
		symbol: "ARAW",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaFBeC4D65BC7b116d85107FD05d912491029Bf46",
		chainId: 1,
		decimals: 18,
		name: "ARBITRAGE",
		symbol: "ARB"
	},
	{
		address: "0xAc709FcB44a43c35F0DA4e3163b117A17F3770f5",
		chainId: 1,
		decimals: 18,
		name: "Arcade Token",
		symbol: "ARC"
	},
	{
		address: "0xfEE2Fa52DE307316d9D47fFE3781D4CBA2C4f6fD",
		chainId: 1,
		decimals: 18,
		name: "Arthur Chain",
		symbol: "ARC"
	},
	{
		address: "0x62A6738d887F47e297676FaB05b902709B106C64",
		chainId: 1,
		decimals: 18,
		name: "ArCoin",
		symbol: "ARCA"
	},
	{
		address: "0x1F3f9D3068568F8040775be2e8C03C103C61f3aF",
		chainId: 1,
		decimals: 18,
		name: "Archer DAO Governan",
		symbol: "ARCH"
	},
	{
		address: "0x0f71B8De197A1C84d31de0F1fA7926c365F052B3",
		chainId: 1,
		decimals: 18,
		name: "Arcona",
		symbol: "ARCONA"
	},
	{
		address: "0x1245ef80F4d9e02ED9425375e8F649B9221b31D8",
		chainId: 1,
		decimals: 8,
		name: "ArbitrageCT",
		symbol: "ARCT"
	},
	{
		address: "0x1321f1f1aa541A56C31682c57b80ECfCCd9bB288",
		chainId: 1,
		decimals: 18,
		name: "ARC Governance",
		symbol: "ARCX"
	},
	{
		address: "0xED30Dd7E50EdF3581AD970eFC5D9379Ce2614AdB",
		chainId: 1,
		decimals: 18,
		name: "ARC Governance  Old",
		symbol: "ARCX"
	},
	{
		address: "0x75Aa7B0d02532f3833b66c7f0Ad35376d373ddF8",
		chainId: 1,
		decimals: 18,
		name: "Accord",
		symbol: "ARD"
	},
	{
		address: "0xB8E2e2101eD11e9138803cd3e06e16dd19910647",
		chainId: 1,
		decimals: 2,
		name: "ArdCoin",
		symbol: "ARDX"
	},
	{
		address: "0x92afBa413BF9E5DA3919A522E371884bEAC76309",
		chainId: 1,
		decimals: 8,
		name: "Aurei",
		symbol: "ARE"
	},
	{
		address: "0xCC12AbE4ff81c9378D670De1b57F8e0Dd228D77a",
		chainId: 1,
		decimals: 18,
		name: "Aave REN",
		symbol: "aREN",
		extensions: {
			color: "#00224D",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x69948cC03f478B95283F7dbf1CE764d0fc7EC54C",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 REN",
		symbol: "aREN",
		extensions: {
			color: "#00224D",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x9a58a6A57A7DE16fA301517C2615Ff1dEf442641",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing REP",
		symbol: "aREP"
	},
	{
		address: "0x71010A9D003445aC60C4e6A7017c1E89A477B438",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 REP",
		symbol: "aREP",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x358AA737e033F34df7c54306960a38d09AaBd523",
		chainId: 1,
		decimals: 18,
		name: "Ares Protocol",
		symbol: "ARES"
	},
	{
		address: "0x28Cca76f6e8eC81e4550ecd761f899110b060E97",
		chainId: 1,
		decimals: 18,
		name: "ArGo Token",
		symbol: "ARGO"
	},
	{
		address: "0xeDF6568618A00C6F0908Bf7758A16F76B6E04aF9",
		chainId: 1,
		decimals: 18,
		name: "Arianee",
		symbol: "ARIA20",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA9248F8e40d4b9c3Ca8ebd8E07E9BCB942C616d8",
		chainId: 1,
		decimals: 4,
		name: "ARKE",
		symbol: "ARKE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa9Ff725189fe00da9C5F27a580DC67FEA61E3Fb2",
		chainId: 1,
		decimals: 18,
		name: "Armours",
		symbol: "ARM"
	},
	{
		address: "0x1337DEF16F9B486fAEd0293eb623Dc8395dFE46a",
		chainId: 1,
		decimals: 18,
		name: "Armor",
		symbol: "ARMOR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBA5F11b16B155792Cf3B2E6880E8706859A8AEB6",
		chainId: 1,
		decimals: 8,
		name: "Aeron",
		symbol: "ARN",
		extensions: {
			color: "#0092b5",
			isVerified: true
		}
	},
	{
		address: "0x0C37Bcf456bC661C14D596683325623076D7e283",
		chainId: 1,
		decimals: 18,
		name: "Aeron",
		symbol: "ARNX"
	},
	{
		address: "0x1337DEF18C680aF1f9f45cBcab6309562975b1dD",
		chainId: 1,
		decimals: 18,
		name: "Armor NXM",
		symbol: "ARNXM"
	},
	{
		address: "0xBA50933C268F567BDC86E1aC131BE072C6B0b71a",
		chainId: 1,
		decimals: 18,
		name: "ARPA Chain",
		symbol: "ARPA"
	},
	{
		address: "0xfec0cF7fE078a500abf15F1284958F22049c2C7e",
		chainId: 1,
		decimals: 18,
		name: "Maecenas",
		symbol: "ART",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x34612903Db071e888a4dADcaA416d3EE263a87b9",
		chainId: 1,
		decimals: 18,
		name: "Items",
		symbol: "ARTE"
	},
	{
		address: "0x897Abf83f0C44b86cb67ec56c006c00d56659517",
		chainId: 1,
		decimals: 18,
		name: "Arteon",
		symbol: "ARTEON",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4fd0B42D14Ad7fFd18D2d1D7ea6B4B45F3d56463",
		chainId: 1,
		decimals: 18,
		name: "Goya Giant Token",
		symbol: "ARTG"
	},
	{
		address: "0x0E3cC2c4FB9252d17d07C67135E48536071735D9",
		chainId: 1,
		decimals: 18,
		name: "ARTH",
		symbol: "ARTH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF013e0ea26Cb386B3021783a3201BF2652778f93",
		chainId: 1,
		decimals: 18,
		name: "ARTISTA",
		symbol: "ARTS"
	},
	{
		address: "0x741b0428Efdf4372A8DF6FB54B018dB5e5aB7710",
		chainId: 1,
		decimals: 18,
		name: "ARTX",
		symbol: "ARTX"
	},
	{
		address: "0x351cAa9045D65107b9d311D922D15887cfd634E4",
		chainId: 1,
		decimals: 18,
		name: "Arowana Token",
		symbol: "ARW"
	},
	{
		address: "0x7705FaA34B16EB6d77Dfc7812be2367ba6B0248e",
		chainId: 1,
		decimals: 8,
		name: "ARX",
		symbol: "ARX"
	},
	{
		address: "0x7d8DafF6d70CEAd12c6f077048552Cf89130A2B1",
		chainId: 1,
		decimals: 18,
		name: "ARCS",
		symbol: "ARX"
	},
	{
		address: "0xb0D926c1BC3d78064F3e1075D5bD9A24F35Ae6C5",
		chainId: 1,
		decimals: 18,
		name: "Assistive Reality ARX",
		symbol: "ARXT"
	},
	{
		address: "0xa5F8fC0921880Cb7342368BD128eb8050442B1a1",
		chainId: 1,
		decimals: 18,
		name: "Block Array",
		symbol: "ARY"
	},
	{
		address: "0x6913cCabBC337F0ea7b4109dd8200D61c704D332",
		chainId: 1,
		decimals: 8,
		name: "Asac Coin",
		symbol: "ASAC"
	},
	{
		address: "0xcC665390b03c5D324D8fAF81C15eCee29A73bCB4",
		chainId: 1,
		decimals: 18,
		name: "Chainswap",
		symbol: "ASAP"
	},
	{
		address: "0xcca0c9c383076649604eE31b20248BC04FdF61cA",
		chainId: 1,
		decimals: 18,
		name: "AscendEx Token",
		symbol: "ASD"
	},
	{
		address: "0x75B02Aa1084a12b8729F5acBE1078BD450AbE552",
		chainId: 1,
		decimals: 8,
		name: "ASEC Frontier",
		symbol: "ASEC"
	},
	{
		address: "0x64D91f12Ece7362F91A6f8E7940Cd55F05060b92",
		chainId: 1,
		decimals: 18,
		name: "ASH",
		symbol: "ASH"
	},
	{
		address: "0xeEEE2a622330E6d2036691e983DEe87330588603",
		chainId: 1,
		decimals: 18,
		name: "Askobar Network",
		symbol: "ASKO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2565ae0385659badCada1031DB704442E1b69982",
		chainId: 1,
		decimals: 18,
		name: "Assemble Protocol",
		symbol: "ASM"
	},
	{
		address: "0x35f6B052C598d933D69A4EEC4D04c73A191fE6c2",
		chainId: 1,
		decimals: 18,
		name: "Aave SNX",
		symbol: "aSNX",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x328C4c80BC7aCa0834Db37e6600A6c49E12Da4DE",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 SNX",
		symbol: "aSNX",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x7C52e19E4d350189bcdfB7F7A0868117e9F195E5",
		chainId: 1,
		decimals: 18,
		name: "Assgard",
		symbol: "ASSG"
	},
	{
		address: "0xFA2562da1Bba7B954f26C74725dF51fb62646313",
		chainId: 1,
		decimals: 18,
		name: "ASSY Index",
		symbol: "ASSY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x27054b13b1B798B345b591a4d22e6562d47eA75a",
		chainId: 1,
		decimals: 4,
		name: "AirSwap",
		symbol: "AST",
		extensions: {
			color: "#0061ff",
			isVerified: true
		}
	},
	{
		address: "0xf2ddae89449b7D26309a5D54614B1FC99C608AF5",
		chainId: 1,
		decimals: 18,
		name: "ASTA",
		symbol: "ASTA"
	},
	{
		address: "0x0f8C793DbC30A185138d5Da00f106290B26E36C5",
		chainId: 1,
		decimals: 9,
		name: "Ape Stax",
		symbol: "ASTAX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7B22938ca841aA392C93dBB7f4c42178E3d65E88",
		chainId: 1,
		decimals: 4,
		name: "AstroTokens",
		symbol: "ASTRO"
	},
	{
		address: "0xcbd55D4fFc43467142761A764763652b48b969ff",
		chainId: 1,
		decimals: 18,
		name: "AstroTools",
		symbol: "ASTRO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF9E3a323957B172FDB2dD89c30BBDA980CFAC395",
		chainId: 1,
		decimals: 9,
		name: "AstroLion",
		symbol: "ASTROLION"
	},
	{
		address: "0x6C5024Cd4F8A59110119C56f8933403A539555EB",
		chainId: 1,
		decimals: 18,
		name: "Aave sUSD",
		symbol: "aSUSD",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x625aE63000f46200499120B906716420bd059240",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 sUSD",
		symbol: "aSUSD",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xad0887734461aF8C6033068bDE4047Dbe84074cc",
		chainId: 1,
		decimals: 8,
		name: "Arbiswap",
		symbol: "ASWAP"
	},
	{
		address: "0x017B584AcFD16D767541aE9e80cdc702F4527B0b",
		chainId: 1,
		decimals: 18,
		name: "ASYAGRO",
		symbol: "ASY"
	},
	{
		address: "0xE54B3458C47E44C37a267E7C633AFEF88287C294",
		chainId: 1,
		decimals: 5,
		name: "Artfinity Token",
		symbol: "AT"
	},
	{
		address: "0xbf8fB919A8bbF28e590852AeF2D284494eBC0657",
		chainId: 1,
		decimals: 18,
		name: "ABCC Token",
		symbol: "AT"
	},
	{
		address: "0xA2120b9e674d3fC3875f415A7DF52e382F141225",
		chainId: 1,
		decimals: 18,
		name: "Automata",
		symbol: "ATA"
	},
	{
		address: "0x0eb3032bcAc2BE1fa95E296442F225edb80fc3CD",
		chainId: 1,
		decimals: 18,
		name: "Aster",
		symbol: "ATC"
	},
	{
		address: "0x72b2b8E42a10d785aBF85f3044223db8C9167bd6",
		chainId: 1,
		decimals: 10,
		name: "Atlantic Coin",
		symbol: "ATC"
	},
	{
		address: "0x8052327F1BAF94A9DC8B26b9100f211eE3774f54",
		chainId: 1,
		decimals: 18,
		name: "A2DAO",
		symbol: "ATD"
	},
	{
		address: "0x8c680d0dE5A9a3f6a99649d0a000225054934742",
		chainId: 1,
		decimals: 18,
		name: "Atlantic Finance",
		symbol: "ATFI"
	},
	{
		address: "0x98d0cDe5c3d79531613e18f0912127BF172bd7AA",
		chainId: 1,
		decimals: 18,
		name: "Biotech Token",
		symbol: "ATG"
	},
	{
		address: "0x17052d51E954592C1046320c2371AbaB6C73Ef10",
		chainId: 1,
		decimals: 18,
		name: "Athenian Warrior Token",
		symbol: "ATH"
	},
	{
		address: "0x1543d0F83489e82A1344DF6827B23d541F235A50",
		chainId: 1,
		decimals: 18,
		name: "AIgatha Token",
		symbol: "ATH (AIgatha Token)"
	},
	{
		address: "0x821144518dfE9e7b44fCF4d0824e15e8390d4637",
		chainId: 1,
		decimals: 18,
		name: "Atlantis Token",
		symbol: "ATIS"
	},
	{
		address: "0x78B7FADA55A64dD895D8c8c35779DD8b67fA8a05",
		chainId: 1,
		decimals: 18,
		name: "Atlant",
		symbol: "ATL"
	},
	{
		address: "0x9B11EFcAAA1890f6eE52C6bB7CF8153aC5d74139",
		chainId: 1,
		decimals: 8,
		name: "ATMChain",
		symbol: "ATM"
	},
	{
		address: "0x9B91Ef0d78488C5eF4C509eb7A73F7d8Ca650cE4",
		chainId: 1,
		decimals: 18,
		name: "Africa To Mars",
		symbol: "ATM"
	},
	{
		address: "0x97AEB5066E1A590e868b511457BEb6FE99d329F5",
		chainId: 1,
		decimals: 18,
		name: "Atonomi",
		symbol: "ATMI"
	},
	{
		address: "0x461733c17b0755CA5649B6DB08B3E213FCf22546",
		chainId: 1,
		decimals: 18,
		name: "ATN",
		symbol: "ATN"
	},
	{
		address: "0xB551d08D2189eF67b4788BE2c35C0743693625Ca",
		chainId: 1,
		decimals: 18,
		name: "EAutocoin",
		symbol: "ATO"
	},
	{
		address: "0x3B834A620751A811f65D8f599b3b72617A4418d0",
		chainId: 1,
		decimals: 18,
		name: "3X Short Cosmos Tok",
		symbol: "ATOMBEAR"
	},
	{
		address: "0x75F0038B8fbfCCAFe2aB9a51431658871bA5182C",
		chainId: 1,
		decimals: 18,
		name: "3X Long Cosmos Toke",
		symbol: "ATOMBULL"
	},
	{
		address: "0xdacD69347dE42baBfAEcD09dC88958378780FB62",
		chainId: 1,
		decimals: 0,
		name: "Atari",
		symbol: "ATRI"
	},
	{
		address: "0x2dAEE1AA61D60A252DC80564499A69802853583A",
		chainId: 1,
		decimals: 4,
		name: "Authorship",
		symbol: "ATS"
	},
	{
		address: "0xb9A6644bEf37286fC08e703Ecd15e9DEDf78d3eb",
		chainId: 1,
		decimals: 8,
		name: "Attlas Token",
		symbol: "ATS"
	},
	{
		address: "0xE5f55a3b74874531a99359b833b92866A6609f6B",
		chainId: 1,
		decimals: 4,
		name: "All The Smoke",
		symbol: "ATS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x887834D3b8D450B6bAB109c252Df3DA286d73CE4",
		chainId: 1,
		decimals: 18,
		name: "Atmatrix Token",
		symbol: "ATT"
	},
	{
		address: "0x89Fb927240750c1B15d4743cd58440fc5f14A11C",
		chainId: 1,
		decimals: 18,
		name: "Attila",
		symbol: "ATT"
	},
	{
		address: "0x6339784d9478dA43106A429196772A029C2f177d",
		chainId: 1,
		decimals: 18,
		name: "Attention Token",
		symbol: "ATTN"
	},
	{
		address: "0x44e2deC86B9F0e0266E9AA66e10323A2bd69CF9A",
		chainId: 1,
		decimals: 18,
		name: "Attrace",
		symbol: "ATTR"
	},
	{
		address: "0x485B627f43E378417125b49Ed95CAc28b78339C4",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing TUSD",
		symbol: "aTUSD"
	},
	{
		address: "0x101cc05f4A51C0319f570d5E146a8C625198e636",
		chainId: 1,
		decimals: 18,
		name: "Aave TUSD",
		symbol: "aTUSD",
		extensions: {
			color: "#002868",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x4DA9b813057D04BAef4e5800E36083717b4a0341",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 TUSD",
		symbol: "aTUSD",
		extensions: {
			color: "#002868",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x1A0F2aB46EC630F9FD638029027b552aFA64b94c",
		chainId: 1,
		decimals: 18,
		name: "Aston",
		symbol: "ATX"
	},
	{
		address: "0xc12d099be31567add4e4e4d0D45691C3F58f5663",
		chainId: 1,
		decimals: 18,
		name: "Auctus",
		symbol: "AUC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA9B1Eb5908CfC3cdf91F9B8B3a74108598009096",
		chainId: 1,
		decimals: 18,
		name: "Bounce",
		symbol: "AUCTION",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x18aAA7115705e8be94bfFEBDE57Af9BFc265B998",
		chainId: 1,
		decimals: 18,
		name: "Audius",
		symbol: "AUDIO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB9D7CB55f463405CDfBe4E90a6D2Df01C2B92BF1",
		chainId: 1,
		decimals: 18,
		name: "Aave UNI",
		symbol: "aUNI",
		extensions: {
			color: "#FD017A",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xB124541127A0A657f056D9Dd06188c4F1b0e5aab",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 UNI",
		symbol: "aUNI",
		extensions: {
			color: "#FD017A",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x048930eec73c91B44b0844aEACdEBADC2F2b6efb",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing UniDAI",
		symbol: "aUniDAI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBbBb7F2aC04484F7F04A2C2C16f20479791BbB44",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing UniDAIETH",
		symbol: "aUniDAIETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6179078872605396Ee62960917128F9477a5DdbB",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing UniETH",
		symbol: "aUniETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc88ebbf7C523f38Ef3eB8A151273C0F0dA421e63",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing UniLENDETH",
		symbol: "aUniLENDETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9548DB8b1cA9b6c757485e7861918b640390169c",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing UniLINKETH",
		symbol: "aUniLINKETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8c69f7A4C9B38F1b48005D216c398Efb2F1Ce3e4",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing UniMKRETH",
		symbol: "aUniMKRETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x84BBcaB430717ff832c3904fa6515f97fc63C76F",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing UniSETHETH",
		symbol: "aUniSETHETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe02b2Ad63eFF3Ac1D5827cBd7AB9DD3DaC4f4AD0",
		chainId: 1,
		decimals: 6,
		name: "Aave Interest bearing UniUSDC",
		symbol: "aUniUSDC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1D0e53A0e524E3CC92C1f0f33Ae268FfF8D7E7a5",
		chainId: 1,
		decimals: 18,
		name: "Aave Interest bearing UniUSDCETH",
		symbol: "aUniUSDCETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb977ee318010A5252774171494a1bCB98E7fab65",
		chainId: 1,
		decimals: 6,
		name: "Aave Interest bearing UniUSDT",
		symbol: "aUniUSDT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6E98E5401ADCB0D76F4DEBfc3d794B3031F48790",
		chainId: 1,
		decimals: 18,
		name: "Aurix",
		symbol: "AUR"
	},
	{
		address: "0xCdCFc0f66c522Fd086A1b725ea3c0Eeb9F9e8814",
		chainId: 1,
		decimals: 18,
		name: "Aurora DAO",
		symbol: "AURA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6417e8673DEDd7a0471A87804Bf85a559Fd8bCC2",
		chainId: 1,
		decimals: 9,
		name: "Aura Protocol",
		symbol: "AURA"
	},
	{
		address: "0x5FB9E9C359CC7191b0293d2FAF1cC41cE3688D75",
		chainId: 1,
		decimals: 4,
		name: "Gold Standard",
		symbol: "AUS"
	},
	{
		address: "0x59F1B6d0F5105cf025A3DE58858A9363F4feF084",
		chainId: 1,
		decimals: 18,
		name: "Auscoin",
		symbol: "AUSC"
	},
	{
		address: "0x1c7BBADc81E18F7177A95eb1593e5f5f35861B10",
		chainId: 1,
		decimals: 18,
		name: "Auric Network",
		symbol: "AUSCM"
	},
	{
		address: "0xD4f10f8F88d12f96f69D9378972F06Ab10D80DD6",
		chainId: 1,
		decimals: 6,
		name: "Aave Interest bearing USDC",
		symbol: "aUSDC"
	},
	{
		address: "0xBcca60bB61934080951369a648Fb03DF4F96263C",
		chainId: 1,
		decimals: 6,
		name: "Aave USDC",
		symbol: "aUSDC",
		extensions: {
			color: "#2775CA",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x9bA00D6856a4eDF4665BcA2C2309936572473B7E",
		chainId: 1,
		decimals: 6,
		name: "Aave v1 USDC",
		symbol: "aUSDC",
		extensions: {
			color: "#2775CA",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xC2102b921b49ea863476fa5Cc9E5851dCE8cc699",
		chainId: 1,
		decimals: 6,
		name: "Aave Interest bearing USDT",
		symbol: "aUSDT"
	},
	{
		address: "0x3Ed3B47Dd13EC9a98b44e6204A523E766B225811",
		chainId: 1,
		decimals: 6,
		name: "Aave USDT",
		symbol: "aUSDT",
		extensions: {
			color: "#22A079",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x71fc860F7D3A592A4a98740e39dB31d25db65ae8",
		chainId: 1,
		decimals: 6,
		name: "Aave v1 USDT",
		symbol: "aUSDT",
		extensions: {
			color: "#22A079",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x622dFfCc4e83C64ba959530A5a5580687a57581b",
		chainId: 1,
		decimals: 18,
		name: "Cube",
		symbol: "AUTO"
	},
	{
		address: "0x5A7092cf86A6790113C4D3FA83f48fd6EFa71B0D",
		chainId: 1,
		decimals: 9,
		name: "AUTZ Token",
		symbol: "AUTZ"
	},
	{
		address: "0xeD247980396B10169BB1d36f6e278eD16700a60f",
		chainId: 1,
		decimals: 4,
		name: "AVA",
		symbol: "AVA"
	},
	{
		address: "0xBCf9dBf8B14eD096B2BA08b7269356197fDd1b5D",
		chainId: 1,
		decimals: 18,
		name: "Avaluse",
		symbol: "AVAL"
	},
	{
		address: "0xdcDc1c1cC33AA817CbDBe8F5E2390BF7cc43dc4B",
		chainId: 1,
		decimals: 18,
		name: "AVASTR Vault  NFTX",
		symbol: "AVASTR"
	},
	{
		address: "0x94d916873B22C9C1b53695f1c002F78537B9b3b2",
		chainId: 1,
		decimals: 18,
		name: "AlgoVest",
		symbol: "AVS"
	},
	{
		address: "0x0d88eD6E74bbFD96B831231638b66C05571e824F",
		chainId: 1,
		decimals: 18,
		name: "Aventus",
		symbol: "AVT"
	},
	{
		address: "0xFC4B8ED459e00e5400be803A9BB3954234FD50e3",
		chainId: 1,
		decimals: 8,
		name: "Aave v1 WBTC",
		symbol: "aWBTC",
		extensions: {
			color: "#FF9900",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x9ff58f4fFB29fA2266Ab25e75e2A8b3503311656",
		chainId: 1,
		decimals: 8,
		name: "Aave WBTC",
		symbol: "aWBTC",
		extensions: {
			color: "#FF9900",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xaD22f63404f7305e4713CcBd4F296f34770513f4",
		chainId: 1,
		decimals: 8,
		name: "Atomic Wallet Coin",
		symbol: "AWC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x030bA81f1c18d280636F32af80b9AAd02Cf0854e",
		chainId: 1,
		decimals: 18,
		name: "Aave WETH",
		symbol: "aWETH",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x0342ac5dfaD866985Dde477caa85027A3C01a334",
		chainId: 1,
		decimals: 18,
		name: "Alpha Wolf",
		symbol: "AWF"
	},
	{
		address: "0x696Acc2De564b48682D71D0847B3632f87c9A402",
		chainId: 1,
		decimals: 18,
		name: "AurusGOLD",
		symbol: "AWG"
	},
	{
		address: "0x68C85B9f78F30A0df5aC5723e4e700037f185415",
		chainId: 1,
		decimals: 18,
		name: "AiWork",
		symbol: "AWO"
	},
	{
		address: "0xb89903ddE3899f0280B99913168Ee833a7896B93",
		chainId: 1,
		decimals: 18,
		name: "AurusSILVER",
		symbol: "AWS"
	},
	{
		address: "0xA51Fc71422a30FA7FFa605B360c3B283501b5bf6",
		chainId: 1,
		decimals: 18,
		name: "AurusDeFi",
		symbol: "AWX"
	},
	{
		address: "0xCd4b4b0F3284a33AC49C67961EC6e111708318Cf",
		chainId: 1,
		decimals: 5,
		name: "AX1 Mining Token",
		symbol: "AX1"
	},
	{
		address: "0xF8Ed6c51762208FF26F8f3E4EFd4e06AF2da649C",
		chainId: 1,
		decimals: 18,
		name: "Alldex Alliance",
		symbol: "AXA"
	},
	{
		address: "0x37c430c2b5f9Ff85e534873C715871818Ab1623E",
		chainId: 1,
		decimals: 18,
		name: "AXIA Coin",
		symbol: "AXC"
	},
	{
		address: "0x73EE6D7e6b203125aDd89320E9F343d65ec7c39a",
		chainId: 1,
		decimals: 18,
		name: "Axioms",
		symbol: "AXI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x793786e2dd4Cc492ed366a94B88a3Ff9ba5E7546",
		chainId: 1,
		decimals: 18,
		name: "Axia",
		symbol: "AXIAV3"
	},
	{
		address: "0xecC0F1F860a82aB3b442382D93853C02d6384389",
		chainId: 1,
		decimals: 18,
		name: "Axis DeFi",
		symbol: "AXIS"
	},
	{
		address: "0xF0c5831EC3Da15f3696B4DAd8B21c7Ce2f007f28",
		chainId: 1,
		decimals: 8,
		name: "AXIS Token",
		symbol: "AXIS"
	},
	{
		address: "0x4fAC0ccD9e2ed9fD462D42B66Fb81bA9A1f6F25E",
		chainId: 1,
		decimals: 18,
		name: "AXiaL",
		symbol: "AXL"
	},
	{
		address: "0x71F85B2E46976bD21302B64329868fd15eb0D127",
		chainId: 1,
		decimals: 18,
		name: "Axion",
		symbol: "AXN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7D85e23014F84E6E21d5663aCD8751bEF3562352",
		chainId: 1,
		decimals: 18,
		name: "Axion Old",
		symbol: "AXNv1"
	},
	{
		address: "0x9af2c6B1A28D3d6BC084bd267F70e90d49741D5B",
		chainId: 1,
		decimals: 8,
		name: "AXP",
		symbol: "AXP"
	},
	{
		address: "0xC39E626A04C5971D770e319760D7926502975e47",
		chainId: 1,
		decimals: 18,
		name: "aXpire",
		symbol: "AXPR"
	},
	{
		address: "0xdD0020B1D5Ba47A54E2EB16800D73Beb6546f91A",
		chainId: 1,
		decimals: 18,
		name: "aXpire",
		symbol: "AXPR"
	},
	{
		address: "0xBB0E17EF65F82Ab018d8EDd776e8DD940327B28b",
		chainId: 1,
		decimals: 18,
		name: "Axie Infinity",
		symbol: "AXS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF5D669627376EBd411E34b98F19C868c8ABA5ADA",
		chainId: 1,
		decimals: 18,
		name: "Axie Infinity Shard [Old]",
		symbol: "AXS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF256CC7847E919FAc9B808cC216cAc87CCF2f47a",
		chainId: 1,
		decimals: 18,
		name: "Aave XSUSHI",
		symbol: "AXSUSHI"
	},
	{
		address: "0x5165d24277cD063F5ac44Efd447B27025e888f37",
		chainId: 1,
		decimals: 18,
		name: "Aave YFI",
		symbol: "aYFI",
		extensions: {
			color: "#0072F6",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x12e51E77DAAA58aA0E9247db7510Ea4B46F9bEAd",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 YFI",
		symbol: "aYFI",
		extensions: {
			color: "#0072F6",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xAAAaaaaBA2ea3daAB0A6c05F1b962c78c9836d99",
		chainId: 1,
		decimals: 18,
		name: "Azbit",
		symbol: "AZ"
	},
	{
		address: "0xDf7FF54aAcAcbFf42dfe29DD6144A69b629f8C9e",
		chainId: 1,
		decimals: 18,
		name: "Aave ZRX",
		symbol: "aZRX",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0x6Fb0855c404E09c47C3fBCA25f08d4E41f9F062f",
		chainId: 1,
		decimals: 18,
		name: "Aave v1 ZRX",
		symbol: "aZRX",
		extensions: {
			color: "#25292E",
			isVerified: true,
			shadowColor: "#7285B2"
		}
	},
	{
		address: "0xef7f1AAe6f60dE9f353dc170a35B8f7c7814e32B",
		chainId: 1,
		decimals: 18,
		name: "AZ Fundchain",
		symbol: "AZT"
	},
	{
		address: "0x910524678C0B1B23FFB9285a81f99C29C11CBaEd",
		chainId: 1,
		decimals: 18,
		name: "Azuki",
		symbol: "AZUKI"
	},
	{
		address: "0xd26a9C3437f7D121098c8C05C7413F5Cc70BB070",
		chainId: 1,
		decimals: 18,
		name: "Azuma Coin",
		symbol: "AZUM"
	},
	{
		address: "0x4B742b5bdb1D252907AE7F399a891d4a178DBC24",
		chainId: 1,
		decimals: 18,
		name: "B ONE PAYMENT",
		symbol: "B1P"
	},
	{
		address: "0xc4De189Abf94c57f396bD4c52ab13b954FebEfD8",
		chainId: 1,
		decimals: 18,
		name: "B.20",
		symbol: "B20",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6Faa826aF0568d1866Fca570dA79B318ef114dAb",
		chainId: 1,
		decimals: 18,
		name: "B21",
		symbol: "B21"
	},
	{
		address: "0x481dE76d5ab31e28A33B0EA1c1063aDCb5B1769A",
		chainId: 1,
		decimals: 18,
		name: "B26",
		symbol: "B26"
	},
	{
		address: "0x5d51FCceD3114A8bb5E90cDD0f9d682bCbCC5393",
		chainId: 1,
		decimals: 18,
		name: "B2BX",
		symbol: "B2BX"
	},
	{
		address: "0x350758E4A1256561Fd0EE142dc7e0545F561fADc",
		chainId: 1,
		decimals: 18,
		name: "B2U Coin",
		symbol: "B2U"
	},
	{
		address: "0xA870879E2872F9f2dc3A33933a9Af3345b00fd14",
		chainId: 1,
		decimals: 18,
		name: "B360",
		symbol: "B360"
	},
	{
		address: "0x3e65E1eeFdE5Ea7ccfC9a9a1634AbE90f32262f8",
		chainId: 1,
		decimals: 18,
		name: "BaaSid",
		symbol: "BAAS"
	},
	{
		address: "0xC36824905dfF2eAAEE7EcC09fCC63abc0af5Abc5",
		chainId: 1,
		decimals: 18,
		name: "Basis Bond",
		symbol: "BAB"
	},
	{
		address: "0xDB13fB60D3fDdaBc41743D9d603CE3F42C17D057",
		chainId: 1,
		decimals: 18,
		name: "Baby Token",
		symbol: "BABY"
	},
	{
		address: "0xd21730353086B0D6C34656CA74F4E4295DC9B8E0",
		chainId: 1,
		decimals: 18,
		name: "Baby Cuban",
		symbol: "BABYCUBAN"
	},
	{
		address: "0xAC8E13ecC30Da7Ff04b842f21A62a1fb0f10eBd5",
		chainId: 1,
		decimals: 9,
		name: "BabyDoge ETH",
		symbol: "BABYDOGE"
	},
	{
		address: "0xdfb4a81727aa961b6ee830720843104fAE0FDFf9",
		chainId: 1,
		decimals: 9,
		name: "BabyElon",
		symbol: "BABYELON"
	},
	{
		address: "0xdF35988d795d90711e785B488Bb2127692e6f956",
		chainId: 1,
		decimals: 9,
		name: "BabyFloki",
		symbol: "BABYFLOKI"
	},
	{
		address: "0xf79F9020560963422eCC9C0c04D3a21190BBf045",
		chainId: 1,
		decimals: 9,
		name: "Baby Saitama",
		symbol: "BABYSAITAMA"
	},
	{
		address: "0x062e3Be6a7C56A395b1881A0cD69A4923Ade4fa2",
		chainId: 1,
		decimals: 18,
		name: "Bowl A Coin",
		symbol: "BAC"
	},
	{
		address: "0x3449FC1Cd036255BA1EB19d65fF4BA2b8903A69a",
		chainId: 1,
		decimals: 18,
		name: "Basis Cash",
		symbol: "BAC"
	},
	{
		address: "0x7Dc59729B0adf4ae34721a1e06ef82a19E690b04",
		chainId: 1,
		decimals: 8,
		name: "BTC Alpha Token",
		symbol: "BAC"
	},
	{
		address: "0x175Ab41E2CEDF3919B2e4426C19851223CF51046",
		chainId: 1,
		decimals: 18,
		name: "BaconSwap",
		symbol: "BACON"
	},
	{
		address: "0x3472A5A71965499acd81997a54BBA8D852C6E53d",
		chainId: 1,
		decimals: 18,
		name: "Badger DAO",
		symbol: "BADGER",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6BFfa07a1B0ceBC474cE6833eAf2bE6326252449",
		chainId: 1,
		decimals: 4,
		name: "BAEPAY",
		symbol: "BAEPAY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x28A06c02287e657ec3F8e151A13C36A1D43814b0",
		chainId: 1,
		decimals: 18,
		name: "BondApp tit Governa",
		symbol: "BAG"
	},
	{
		address: "0xf33121A2209609cAdc7349AcC9c40E41CE21c730",
		chainId: 1,
		decimals: 18,
		name: "Blockchain Adventur",
		symbol: "BAG"
	},
	{
		address: "0x3b5F11dBaC1476af17957C6e5991F21c826743dd",
		chainId: 1,
		decimals: 8,
		name: "BaconCoin",
		symbol: "BAK"
	},
	{
		address: "0xe632e1EA781df32c60AB11052958744CBfBc439A",
		chainId: 1,
		decimals: 18,
		name: "BAKC Vault  NFTX",
		symbol: "BAKC"
	},
	{
		address: "0x8379f52d09b9998eCbA731288EE4fE532fD91C0B",
		chainId: 1,
		decimals: 18,
		name: "Backed Protocol",
		symbol: "BAKT"
	},
	{
		address: "0xba100000625a3754423978a60c9317c58a424e3D",
		chainId: 1,
		decimals: 18,
		name: "Balancer",
		symbol: "BAL",
		extensions: {
			color: "#1e1e1e",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x013A06558f07d9E6F9A00c95a33f3a0E0255176b",
		chainId: 1,
		decimals: 18,
		name: "BALI COIN",
		symbol: "BALI"
	},
	{
		address: "0x6523203BD28d399068AcC14Db6B7f31D9bF43f1a",
		chainId: 1,
		decimals: 18,
		name: "Balloon Coin",
		symbol: "BALO"
	},
	{
		address: "0x7a5ce6abD131EA6B148a022CB76fc180ae3315A6",
		chainId: 1,
		decimals: 18,
		name: "bAlpha",
		symbol: "BALPHA"
	},
	{
		address: "0xf56842Af3B56Fd72d17cB103f92d027bBa912e89",
		chainId: 1,
		decimals: 18,
		name: "BambooDeFi",
		symbol: "BAMBOO"
	},
	{
		address: "0xE2311ae37502105b442bBef831E9b53c5d2e9B3b",
		chainId: 1,
		decimals: 18,
		name: "Banana",
		symbol: "BANANA"
	},
	{
		address: "0x21F54372c07B930B79c5c2d9bb0EAACa86c3b298",
		chainId: 1,
		decimals: 18,
		name: "Banana Finance",
		symbol: "BANANA"
	},
	{
		address: "0x998b3B82bC9dBA173990Be7afb772788B5aCB8Bd",
		chainId: 1,
		decimals: 18,
		name: "Banca",
		symbol: "BANCA"
	},
	{
		address: "0xBA11D00c5f74255f56a5E366F4F77f5A186d7f55",
		chainId: 1,
		decimals: 18,
		name: "Band Protocol",
		symbol: "BAND",
		extensions: {
			color: "#516aff",
			isVerified: true
		}
	},
	{
		address: "0x2d94AA3e47d9D5024503Ca8491fcE9A2fB4DA198",
		chainId: 1,
		decimals: 18,
		name: "Bankless DAO",
		symbol: "BANK"
	},
	{
		address: "0x24A6A37576377F63f194Caa5F518a60f45b42921",
		chainId: 1,
		decimals: 18,
		name: "Float Protocol",
		symbol: "BANK"
	},
	{
		address: "0xBE0C826f17680d8Da620855bE89DD6544C034cA1",
		chainId: 1,
		decimals: 18,
		name: "BankEth",
		symbol: "BANKETH"
	},
	{
		address: "0xF87F0D9153fea549c728Ad61cb801595a68b73de",
		chainId: 1,
		decimals: 18,
		name: "BANX",
		symbol: "BANX"
	},
	{
		address: "0x374CB8C27130E2c9E04F44303f3c8351B9De61C1",
		chainId: 1,
		decimals: 18,
		name: "Bao Finance",
		symbol: "BAO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc73f2474001aD1D6aEd615aF53631148CF98dE6b",
		chainId: 1,
		decimals: 18,
		name: "Billionaire Ambition",
		symbol: "BAR"
	},
	{
		address: "0x54C9EA2E9C9E8eD865Db4A4ce6711C2a0d5063Ba",
		chainId: 1,
		decimals: 18,
		name: "BarterTrade",
		symbol: "BART",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2A05d22DB079BC40C2f77a1d1fF703a56E631cc1",
		chainId: 1,
		decimals: 8,
		name: "BitAsean",
		symbol: "BAS"
	},
	{
		address: "0x106538CC16F938776c7c180186975BCA23875287",
		chainId: 1,
		decimals: 18,
		name: "Basis Share",
		symbol: "BAS"
	},
	{
		address: "0x07150e919B4De5fD6a63DE1F9384828396f25fDC",
		chainId: 1,
		decimals: 9,
		name: "Base Protocol",
		symbol: "BASE"
	},
	{
		address: "0x29428639d889fa989405ee9baF3Ba088E6994eDC",
		chainId: 1,
		decimals: 18,
		name: "BASED",
		symbol: "BASED",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF25c91C87e0B1fd9B4064Af0F427157AaB0193A7",
		chainId: 1,
		decimals: 18,
		name: "BASIC",
		symbol: "BASIC"
	},
	{
		address: "0xe33f363351186e185470f35F6DeB94ABa44347D8",
		chainId: 1,
		decimals: 18,
		name: "Basid Coin",
		symbol: "BASID"
	},
	{
		address: "0x44564d0bd94343f72E3C8a0D22308B7Fa71DB0Bb",
		chainId: 1,
		decimals: 18,
		name: "BasketDAO",
		symbol: "BASK"
	},
	{
		address: "0x47eB79217f42f92dbd741ADd1B1a6783A2c873cf",
		chainId: 1,
		decimals: 18,
		name: "Bast",
		symbol: "BAST"
	},
	{
		address: "0x0D8775F648430679A709E98d2b0Cb6250d2887EF",
		chainId: 1,
		decimals: 18,
		name: "Basic Attention Token",
		symbol: "BAT",
		extensions: {
			color: "#FF5000",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x9a0242b7a33DAcbe40eDb927834F96eB39f8fBCB",
		chainId: 1,
		decimals: 18,
		name: "BABB",
		symbol: "BAX"
	},
	{
		address: "0xACf3D402e5E2C3eDD5b8129e966017D293F12a4C",
		chainId: 1,
		decimals: 18,
		name: "BoxAxis",
		symbol: "BAXS"
	},
	{
		address: "0xEA47B64e1BFCCb773A0420247C0aa0a3C1D2E5C5",
		chainId: 1,
		decimals: 18,
		name: "BAYC Vault  NFTX",
		symbol: "BAYC"
	},
	{
		address: "0xB020eD54651831878E5C967e0953A900786178f9",
		chainId: 1,
		decimals: 18,
		name: "Baz Token",
		symbol: "BAZT"
	},
	{
		address: "0x19D97D8fA813EE2f51aD4B4e04EA08bAf4DFfC28",
		chainId: 1,
		decimals: 18,
		name: "Badger Sett Badger",
		symbol: "BBADGER"
	},
	{
		address: "0xF4b5470523cCD314C6B9dA041076e7D79E0Df267",
		chainId: 1,
		decimals: 18,
		name: "BlockBank",
		symbol: "BBANK"
	},
	{
		address: "0x58723C7Afcd33A2Db6Ae06C37521725D65F0cC15",
		chainId: 1,
		decimals: 18,
		name: "BullBearBitcoin Set",
		symbol: "BBB"
	},
	{
		address: "0xe7D3e4413E29ae35B0893140F4500965c74365e5",
		chainId: 1,
		decimals: 18,
		name: "TraDove B2BCoin",
		symbol: "BBC"
	},
	{
		address: "0x85c4EdC43724e954e5849cAAab61A26a9CB65F1B",
		chainId: 1,
		decimals: 8,
		name: "Binance Wrapped BCH",
		symbol: "BBCH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF43B2f981eFC5a611a97951Ce4fd7d3Bd87f4902",
		chainId: 1,
		decimals: 18,
		name: "BullBearEthereum Se",
		symbol: "BBE"
	},
	{
		address: "0x4FBb0B4cD8f960aC3428194F1c94c805D5b35836",
		chainId: 1,
		decimals: 8,
		name: "BigBang Game",
		symbol: "BBGC"
	},
	{
		address: "0x37D40510a2F5Bc98AA7a0f7BF4b3453Bcfb90Ac1",
		chainId: 1,
		decimals: 18,
		name: "Beluga Banking Infrastructure Token",
		symbol: "BBI"
	},
	{
		address: "0x336c21557185079F42F6fFC098aB572c87AE9435",
		chainId: 1,
		decimals: 18,
		name: "BigBoys Industry",
		symbol: "BBI"
	},
	{
		address: "0x4a6058666cf1057eaC3CD3A5a614620547559fc9",
		chainId: 1,
		decimals: 18,
		name: "Brickblock",
		symbol: "BBK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xac00797df10e825589D8b53E715393BE4E617459",
		chainId: 1,
		decimals: 18,
		name: "Bubble Network",
		symbol: "BBL"
	},
	{
		address: "0x35a69642857083BA2F30bfaB735dacC7F0bac969",
		chainId: 1,
		decimals: 18,
		name: "Banyan Network",
		symbol: "BBN"
	},
	{
		address: "0xBc0d84FA6260E065F330d51621d682d2630F4Aa2",
		chainId: 1,
		decimals: 18,
		name: "BeatBind",
		symbol: "BBND"
	},
	{
		address: "0x84F7c44B6Fed1080f647E354D552595be2Cc602F",
		chainId: 1,
		decimals: 18,
		name: "Bigbom",
		symbol: "BBO"
	},
	{
		address: "0xbb0A009ba1EB20c5062C790432f080F6597662AF",
		chainId: 1,
		decimals: 18,
		name: "Bitbot Protocol",
		symbol: "BBP"
	},
	{
		address: "0x7671904eed7f10808B664fc30BB8693FD7237abF",
		chainId: 1,
		decimals: 18,
		name: "Bitberry Token",
		symbol: "BBR"
	},
	{
		address: "0x70460c3Bb9AbcC0aA51f922c00d37816d6EDe4D7",
		chainId: 1,
		decimals: 18,
		name: "BooBanker Research",
		symbol: "BBRA"
	},
	{
		address: "0x1500205f50bf3FD976466d0662905c9ff254fc9c",
		chainId: 1,
		decimals: 4,
		name: "BitBoost",
		symbol: "BBT"
	},
	{
		address: "0x9BE89D2a4cd102D8Fecc6BF9dA793be995C22541",
		chainId: 1,
		decimals: 8,
		name: "Binance Wrapped BTC",
		symbol: "BBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x57F55D89c30172a913bAe10A2E702E5302f1E356",
		chainId: 1,
		decimals: 9,
		name: "Big Beautiful Women",
		symbol: "BBW"
	},
	{
		address: "0x2ecB13A8c458c379c4d9a7259e202De03c8F3D19",
		chainId: 1,
		decimals: 18,
		name: "Block chain com",
		symbol: "BC"
	},
	{
		address: "0xC222e5B89309FAB5FAf55a3b3bd9082be834916C",
		chainId: 1,
		decimals: 6,
		name: "Bitcoiva",
		symbol: "BCA"
	},
	{
		address: "0x1f41E42D0a9e3c0Dd3BA15B527342783B43200A9",
		chainId: 1,
		decimals: 0,
		name: "Blockchain Capital",
		symbol: "BCAP"
	},
	{
		address: "0xFf3519eeeEA3e76F1F699CCcE5E23ee0bdDa41aC",
		chainId: 1,
		decimals: 0,
		name: "BCAP",
		symbol: "BCAP"
	},
	{
		address: "0xb5BB48567BfD0bFE9e4B08EF8b7f91556CC2a112",
		chainId: 1,
		decimals: 18,
		name: "BankCoin BCash",
		symbol: "BCASH"
	},
	{
		address: "0xfDEAA4ab9fea519aFD74df2257A21e5BcA0DFd3f",
		chainId: 1,
		decimals: 18,
		name: "BCAT",
		symbol: "BCAT"
	},
	{
		address: "0x7367A68039d4704f30BfBF6d948020C3B07DFC59",
		chainId: 1,
		decimals: 18,
		name: "Beercoin",
		symbol: "BCBC"
	},
	{
		address: "0xaE17f4F5CA32F77ea8e3786db7C0b2FE877aC176",
		chainId: 1,
		decimals: 18,
		name: "Basis Coin Cash",
		symbol: "BCC"
	},
	{
		address: "0x1e797Ce986C3CFF4472F7D38d5C4aba55DfEFE40",
		chainId: 1,
		decimals: 15,
		name: "BlockCDN",
		symbol: "BCDN"
	},
	{
		address: "0xAcfa209Fb73bF3Dd5bBfb1101B9Bc999C49062a5",
		chainId: 1,
		decimals: 18,
		name: "Blockchain Certified Data Token",
		symbol: "BCDT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa9fC65Da36064cE545e87690e06f5de10C52C690",
		chainId: 1,
		decimals: 18,
		name: "3X Short Bitcoin Ca",
		symbol: "BCHBEAR"
	},
	{
		address: "0x4C133E081dFB5858e39ccA74E69bf603d409e57A",
		chainId: 1,
		decimals: 18,
		name: "3X Long Bitcoin Cas",
		symbol: "BCHBULL"
	},
	{
		address: "0x2ab05B915C30093679165bcdba9C26D8Cd8BeE99",
		chainId: 1,
		decimals: 18,
		name: "BitCherry",
		symbol: "BCHC"
	},
	{
		address: "0x02E88a689fdfB920e7Aa6174Fb7AB72add3C5694",
		chainId: 1,
		decimals: 18,
		name: "1X Short Bitcoin Ca",
		symbol: "BCHHEDGE"
	},
	{
		address: "0x5eF227F7cE4e96c9Ce90E32D4850545a6C5D099B",
		chainId: 1,
		decimals: 8,
		name: "BLUECHIPS Token",
		symbol: "BCHIP"
	},
	{
		address: "0xbc1234552EBea32B5121190356bBa6D3Bb225bb5",
		chainId: 1,
		decimals: 18,
		name: "BCL",
		symbol: "BCL"
	},
	{
		address: "0xD5e2A54Fef5f9E4A6b21EC646Bbed7A160a00F18",
		chainId: 1,
		decimals: 18,
		name: "BeforeCoinMarketCap",
		symbol: "BCMC1"
	},
	{
		address: "0x9669890e48f330ACD88b78D63E1A6b3482652CD9",
		chainId: 1,
		decimals: 18,
		name: "Bincentive",
		symbol: "BCNT"
	},
	{
		address: "0x72e203a17adD19A3099137c9d7015fD3e2b7DBa9",
		chainId: 1,
		decimals: 18,
		name: "BlockchainPoland",
		symbol: "BCP"
	},
	{
		address: "0xE4f726Adc8e89C6a6017F01eadA77865dB22dA14",
		chainId: 1,
		decimals: 18,
		name: "PieDAO Balanced Crypto Pie",
		symbol: "BCP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd26fb114401Ec86887CD09F62eccd95fCf20B571",
		chainId: 1,
		decimals: 8,
		name: "Bitcoin Platinums",
		symbol: "BCP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4612021C75809160Be60DB21fBc9D6adD0B32deF",
		chainId: 1,
		decimals: 18,
		name: "Block Commerce Prot",
		symbol: "BCP"
	},
	{
		address: "0xe047705117Eb07e712C3d684f5B18E74577e83aC",
		chainId: 1,
		decimals: 8,
		name: "BitcashPay",
		symbol: "BCP"
	},
	{
		address: "0x1c4481750daa5Ff521A2a7490d9981eD46465Dbd",
		chainId: 1,
		decimals: 18,
		name: "Blockmason Credit Protocol",
		symbol: "BCPT",
		extensions: {
			color: "#404040",
			isVerified: true
		}
	},
	{
		address: "0x3B3Ac5386837Dc563660FB6a0937DFAa5924333B",
		chainId: 1,
		decimals: 18,
		name: "bCurve",
		symbol: "bCrv",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x03066dA434e5264ef0B32f787923f974A5726fDc",
		chainId: 1,
		decimals: 18,
		name: "Basis Coin Share",
		symbol: "BCS"
	},
	{
		address: "0x31274db8b609Df99E5988ee527071643b5160Fc3",
		chainId: 1,
		decimals: 18,
		name: "Business Credit Sub",
		symbol: "BCS"
	},
	{
		address: "0x9eC251401eAfB7e98f37A1D911c0AEA02CB63A80",
		chainId: 1,
		decimals: 18,
		name: "Bitcratic",
		symbol: "BCT"
	},
	{
		address: "0x579353231F3540B218239774422962C64a3693e7",
		chainId: 1,
		decimals: 18,
		name: "Bitcratic Revenue",
		symbol: "BCTR"
	},
	{
		address: "0x93C9175E26F57d2888c7Df8B470C9eeA5C0b0A93",
		chainId: 1,
		decimals: 18,
		name: "B cube ai",
		symbol: "BCUBE"
	},
	{
		address: "0x14Da7b27b2E0FedEfe0a664118b0c9bc68e2E9AF",
		chainId: 1,
		decimals: 18,
		name: "Blockchain Cuties U",
		symbol: "BCUG"
	},
	{
		address: "0x1014613E2B3CBc4d575054D4982E580d9b99d7B1",
		chainId: 1,
		decimals: 8,
		name: "BitCapitalVendor",
		symbol: "BCV"
	},
	{
		address: "0x8D717AB5eaC1016b64C2A7fD04720Fd2D27D1B86",
		chainId: 1,
		decimals: 18,
		name: "BitcoinVend",
		symbol: "BCVT"
	},
	{
		address: "0x3a3547D62e9f9E76F99d51D5AB4F07AAE0Db2dBb",
		chainId: 1,
		decimals: 18,
		name: "BITICA COIN",
		symbol: "BDCC"
	},
	{
		address: "0x1961B3331969eD52770751fC718ef530838b6dEE",
		chainId: 1,
		decimals: 18,
		name: "BitDegree",
		symbol: "BDG"
	},
	{
		address: "0x0309c98B1bffA350bcb3F9fB9780970CA32a5060",
		chainId: 1,
		decimals: 18,
		name: "BasketDAO DeFi Inde",
		symbol: "BDI"
	},
	{
		address: "0x7e7E112A68d8D2E221E11047a72fFC1065c38e1a",
		chainId: 1,
		decimals: 18,
		name: "Badger Sett Digg",
		symbol: "BDIGG"
	},
	{
		address: "0xBFc1502EBC37475B940CED8F036B91018a73C8F6",
		chainId: 1,
		decimals: 18,
		name: "Bidesk",
		symbol: "BDK"
	},
	{
		address: "0x92416e32042c9e67B0771A1b00Bcdf92EcB64950",
		chainId: 1,
		decimals: 18,
		name: "Bulldog Token",
		symbol: "BDOG"
	},
	{
		address: "0x37092DBF8C26DA9Cc805683B4Cc0B942E92DE2fd",
		chainId: 1,
		decimals: 9,
		name: "Blue Eyes White Dog",
		symbol: "BDOGE"
	},
	{
		address: "0x7884F51dC1410387371ce61747CB6264E1dAeE0B",
		chainId: 1,
		decimals: 10,
		name: "Binance Wrapped DOT",
		symbol: "BDOT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x593114f03A0A575aece9ED675e52Ed68D2172B8c",
		chainId: 1,
		decimals: 18,
		name: "BidiPass",
		symbol: "BDP"
	},
	{
		address: "0xf3dcbc6D72a4E1892f7917b7C43b74131Df8480e",
		chainId: 1,
		decimals: 18,
		name: "Big Data Protocol",
		symbol: "BDP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7BCe667EF12023dc5f8577D015a2F09d99a5ef58",
		chainId: 1,
		decimals: 18,
		name: "Block Duelers",
		symbol: "BDT"
	},
	{
		address: "0x4Efe8665e564bF454cCF5C90Ee16817F7485d5Cf",
		chainId: 1,
		decimals: 18,
		name: "BlackDragon Token",
		symbol: "BDT"
	},
	{
		address: "0xcD9b72f6E971026ea8609D2918C7BD02e1653945",
		chainId: 1,
		decimals: 18,
		name: "BEAM Vault  NFTX",
		symbol: "BEAM"
	},
	{
		address: "0x016ee7373248a80BDe1fD6bAA001311d233b3CFa",
		chainId: 1,
		decimals: 18,
		name: "3X Short Bitcoin To",
		symbol: "BEAR"
	},
	{
		address: "0xAf162491C0B21900C01F4Cc0F7110238AAcdebE7",
		chainId: 1,
		decimals: 4,
		name: "arcane bear",
		symbol: "BEAR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x48dEE19C81B89A9aB473361bAE7a19210f2DEaA4",
		chainId: 1,
		decimals: 18,
		name: "3X Short Shitcoin I",
		symbol: "BEARSHIT"
	},
	{
		address: "0x2Fb12bccF6f5Dd338b76Be784A93ade072425690",
		chainId: 1,
		decimals: 18,
		name: "BEAT",
		symbol: "BEAT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x59C033Ec65e6B9C501C1ee34fb42f2575da4B517",
		chainId: 1,
		decimals: 18,
		name: "Betherchip",
		symbol: "BEC"
	},
	{
		address: "0x2aF1dF3AB0ab157e1E2Ad8F88A7D04fbea0c7dc6",
		chainId: 1,
		decimals: 18,
		name: "Bankless BED Index",
		symbol: "BED"
	},
	{
		address: "0x4D8fc1453a0F359e99c9675954e656D80d996FbF",
		chainId: 1,
		decimals: 18,
		name: "BEE Token",
		symbol: "BEE"
	},
	{
		address: "0x1763aD73694d4D64FB71732B068E32ac72A345b1",
		chainId: 1,
		decimals: 18,
		name: "BEE Coin",
		symbol: "BEE"
	},
	{
		address: "0x2E92864240819E2286d440B0c477077Dd660b340",
		chainId: 1,
		decimals: 9,
		name: "Beer Inu",
		symbol: "BEER"
	},
	{
		address: "0x74C1E4b8caE59269ec1D85D3D4F324396048F4ac",
		chainId: 1,
		decimals: 0,
		name: "BeerCoin",
		symbol: "BeerCoin"
	},
	{
		address: "0xB91C2a2b953D72f3EF890490669a0A41B0ADD5f7",
		chainId: 1,
		decimals: 8,
		name: "Belifex",
		symbol: "BEFX"
	},
	{
		address: "0xA91ac63D040dEB1b7A5E4d4134aD23eb0ba07e14",
		chainId: 1,
		decimals: 18,
		name: "Bella Protocol",
		symbol: "BEL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2e98A6804E4b6c832ED0ca876a943abD3400b224",
		chainId: 1,
		decimals: 18,
		name: "Bela",
		symbol: "BELA",
		extensions: {
			color: "#13a0f6",
			isVerified: true
		}
	},
	{
		address: "0xd8ef149B4E1e8F050d52925F9C68D3a296E77227",
		chainId: 1,
		decimals: 18,
		name: "Blucon",
		symbol: "BEP"
	},
	{
		address: "0xCF3C8Be2e2C42331Da80EF210e9B1b307C03d36A",
		chainId: 1,
		decimals: 18,
		name: "BEPRO Network",
		symbol: "BEPRO"
	},
	{
		address: "0x6aEB95F06CDA84cA345c2dE0F3B7f96923a44f4c",
		chainId: 1,
		decimals: 14,
		name: "Rentberry",
		symbol: "BERRY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe944f2B46FCfc9D0E887bBeaad95268D9416d0fD",
		chainId: 1,
		decimals: 18,
		name: "BERRY Vault  NFTX",
		symbol: "BERRY"
	},
	{
		address: "0x1B073382E63411E3BcfFE90aC1B9A43feFa1Ec6F",
		chainId: 1,
		decimals: 8,
		name: "Bitpanda Ecosystem Token",
		symbol: "BEST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8aA33A7899FCC8eA5fBe6A608A109c3893A1B8b2",
		chainId: 1,
		decimals: 18,
		name: "DAO.Casino",
		symbol: "BET"
	},
	{
		address: "0x14C926F2290044B647e1Bf2072e67B495eff1905",
		chainId: 1,
		decimals: 18,
		name: "Bethereum",
		symbol: "BETHER"
	},
	{
		address: "0x763186eB8d4856D536eD4478302971214FEbc6A9",
		chainId: 1,
		decimals: 18,
		name: "BetterBetting",
		symbol: "BETR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA7925aA2A6e4575ab0C74D169f3BC3e03D4C319A",
		chainId: 1,
		decimals: 4,
		name: "Better Money",
		symbol: "BETTER",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3839d8ba312751Aa0248fEd6a8bACB84308E20Ed",
		chainId: 1,
		decimals: 18,
		name: "Bezop",
		symbol: "BEZ"
	},
	{
		address: "0x8A1E3930FDe1f151471c368fDBb39F3F63A65B55",
		chainId: 1,
		decimals: 18,
		name: "Bezop",
		symbol: "BEZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xDC349913d53b446485E98b76800b6254f43Df695",
		chainId: 1,
		decimals: 9,
		name: "Bezoge Earth",
		symbol: "BEZOGE"
	},
	{
		address: "0x5b71BEE9D961b1B848f8485EEC8d8787f80217F5",
		chainId: 1,
		decimals: 18,
		name: "Bitforex Token",
		symbol: "BF"
	},
	{
		address: "0x4d31200e6D7854C2F664aF7Fc38a21600960F74D",
		chainId: 1,
		decimals: 18,
		name: "Bit Financial",
		symbol: "BFC"
	},
	{
		address: "0x0c7D5ae016f806603CB1782bEa29AC69471CAb9c",
		chainId: 1,
		decimals: 18,
		name: "Bifrost",
		symbol: "BFC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x708aA4e8AaeAaD6074dD09cc4e5C52A70452eB39",
		chainId: 1,
		decimals: 8,
		name: "Bitcoffeen",
		symbol: "BFF"
	},
	{
		address: "0x2b2b0559081c41e962777B5049632fdb30f7E652",
		chainId: 1,
		decimals: 8,
		name: "BitDefi",
		symbol: "BFI"
	},
	{
		address: "0xC980be019F2ac10A1C96F964b971A5F44551D318",
		chainId: 1,
		decimals: 18,
		name: "BitFarmings",
		symbol: "BFI"
	},
	{
		address: "0x8E16bf47065Fe843A82f4399bAF5aBac4E0822B7",
		chainId: 1,
		decimals: 18,
		name: "Binance Wrapped FIL",
		symbol: "BFIL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf680429328caaaCabee69b7A9FdB21a71419c063",
		chainId: 1,
		decimals: 18,
		name: "Butterfly Protocol",
		symbol: "BFLY"
	},
	{
		address: "0x244c5276Ea5bB927575417156038d7381b44Ab2c",
		chainId: 1,
		decimals: 18,
		name: "Bridge Finance",
		symbol: "BFR"
	},
	{
		address: "0x01fF50f8b7f74E4f00580d9596cd3D0d6d6E326f",
		chainId: 1,
		decimals: 18,
		name: "BnkToTheFuture",
		symbol: "BFT"
	},
	{
		address: "0xc3B5284B2c0cfa1871a6ac63B6d6ee43c08BDC79",
		chainId: 1,
		decimals: 18,
		name: "BGAN Vault  NFTX",
		symbol: "BGAN"
	},
	{
		address: "0x19de6b897Ed14A376Dda0Fe53a5420D2aC828a28",
		chainId: 1,
		decimals: 18,
		name: "Bitget Token",
		symbol: "BGB"
	},
	{
		address: "0xD34c9281585866A9fb2af0931adb1fA35ed44039",
		chainId: 1,
		decimals: 8,
		name: "Be Gaming Coin",
		symbol: "BGC"
	},
	{
		address: "0xD043F70FF0634167Db1149b15E5668f5Be52D72C",
		chainId: 1,
		decimals: 18,
		name: "BigCash",
		symbol: "BGC"
	},
	{
		address: "0xEA54C81fe0f72DE8e86B6dC78a9271AA3925E3B5",
		chainId: 1,
		decimals: 18,
		name: "Bgogo Token",
		symbol: "BGG"
	},
	{
		address: "0x5cBb89B03534D82692b183882c2A2a9Ff7FDeB44",
		chainId: 1,
		decimals: 18,
		name: "BGT",
		symbol: "BGT"
	},
	{
		address: "0x7a545Ed3863221A974F327199Ac22F7f12535F11",
		chainId: 1,
		decimals: 18,
		name: "Baguette Token",
		symbol: "BGTT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4A6Be56a211a4c4E0dd4474D524138933c17f3e3",
		chainId: 1,
		decimals: 9,
		name: "Baby Shiba",
		symbol: "BHIBA"
	},
	{
		address: "0x996229D0c6a485c7F4B52E092EAa907cB2def5C6",
		chainId: 1,
		decimals: 18,
		name: "BuckHath Coin",
		symbol: "BHIG"
	},
	{
		address: "0xEE74110fB5A1007b06282e0DE5d73A61bf41d9Cd",
		chainId: 1,
		decimals: 18,
		name: "BHPCash",
		symbol: "BHPC"
	},
	{
		address: "0xfe5D908c9Ad85f651185dAa6a4770726E2b27d09",
		chainId: 1,
		decimals: 18,
		name: "BETHER",
		symbol: "BHR"
	},
	{
		address: "0x35101c731b1548B5e48bb23F99eDBc2f5c341935",
		chainId: 1,
		decimals: 18,
		name: "BlackHoleSwap Compo",
		symbol: "BHSC"
	},
	{
		address: "0x25e1474170c4c0aA64fa98123bdc8dB49D7802fa",
		chainId: 1,
		decimals: 18,
		name: "Bidao",
		symbol: "BID"
	},
	{
		address: "0x00000000000045166C45aF0FC6E4Cf31D9E14B9A",
		chainId: 1,
		decimals: 18,
		name: "TopBidder",
		symbol: "BID"
	},
	{
		address: "0x1dA01e84F3d4e6716F274c987Ae4bEE5DC3C8288",
		chainId: 1,
		decimals: 18,
		name: "DeFi Bids",
		symbol: "BID"
	},
	{
		address: "0x2791BfD60D232150Bff86b39B7146c0eaAA2BA81",
		chainId: 1,
		decimals: 18,
		name: "BiFi",
		symbol: "BIFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa6E7dc135Bdf4b3FEe7183EAB2E87C0BB9684783",
		chainId: 1,
		decimals: 8,
		name: "BIGOCOIN",
		symbol: "BIGO"
	},
	{
		address: "0x70debcDAB2Ef20bE3d1dBFf6a845E9cCb6E46930",
		chainId: 1,
		decimals: 8,
		name: "BIKI",
		symbol: "BIKI"
	},
	{
		address: "0x9e7Ce36dbD1A9A6c6e80D08E38077745855eDd3A",
		chainId: 1,
		decimals: 18,
		name: "Bimcoin",
		symbol: "BIM"
	},
	{
		address: "0x75230d7d86B59213773d47103b96a0E7133c8621",
		chainId: 1,
		decimals: 8,
		name: "Buildin",
		symbol: "BIN"
	},
	{
		address: "0xf18432Ef894Ef4b2a5726F933718F5A8cf9fF831",
		chainId: 1,
		decimals: 8,
		name: "BioCrypt",
		symbol: "BIO"
	},
	{
		address: "0x9b1b1e109fF130b298CF1d47389C47569F5C2932",
		chainId: 1,
		decimals: 18,
		name: "Biido",
		symbol: "BION"
	},
	{
		address: "0x29641e1096D4240B09a933839feAc57b200652A4",
		chainId: 1,
		decimals: 18,
		name: "BIOPset",
		symbol: "BIOP"
	},
	{
		address: "0xAACa86B876ca011844b5798ECA7a67591A9743C8",
		chainId: 1,
		decimals: 18,
		name: "0x nodes",
		symbol: "BIOS"
	},
	{
		address: "0xc07A150ECAdF2cc352f5586396e344A6b17625EB",
		chainId: 1,
		decimals: 9,
		name: "Bio Passport",
		symbol: "BIOT"
	},
	{
		address: "0x5Cb888182fBfFdb62C08fb4B5a343914F00FdfeE",
		chainId: 1,
		decimals: 18,
		name: "Moneybrain BiPS",
		symbol: "BIPS"
	},
	{
		address: "0x70401dFD142A16dC7031c56E862Fc88Cb9537Ce0",
		chainId: 1,
		decimals: 18,
		name: "Bird.Money",
		symbol: "BIRD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x026e62dDEd1a6aD07D93D39f96b9eabd59665e0d",
		chainId: 1,
		decimals: 18,
		name: "Birdchain",
		symbol: "BIRD"
	},
	{
		address: "0x99043bB680Ab9262c7b2aC524E00b215Efb7db9b",
		chainId: 1,
		decimals: 9,
		name: "Black Kishu Inu",
		symbol: "BISHU"
	},
	{
		address: "0x6e8908cfa881C9f6f2C64d3436E7b80b1bf0093F",
		chainId: 1,
		decimals: 18,
		name: "Bistroo",
		symbol: "BIST"
	},
	{
		address: "0x089B85FA15f72c1088CBbef23a49DB80B91DD521",
		chainId: 1,
		decimals: 8,
		name: "BlockEstate Investment Token",
		symbol: "BIT"
	},
	{
		address: "0x47da42696A866CDC61A4C809A515500a242909C1",
		chainId: 1,
		decimals: 18,
		name: "BitRewards",
		symbol: "BIT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1A4b46696b2bB4794Eb3D4c26f1c55F9170fa4C5",
		chainId: 1,
		decimals: 18,
		name: "BitDAO",
		symbol: "BIT"
	},
	{
		address: "0x08b4c866aE9D1bE56a06e0C302054B4FFe067b43",
		chainId: 1,
		decimals: 8,
		name: "BitCar Token",
		symbol: "BITCAR"
	},
	{
		address: "0x4eED0fa8dE12D5a86517f214C2f11586Ba2ED88D",
		chainId: 1,
		decimals: 18,
		name: "DragonBite",
		symbol: "BITE"
	},
	{
		address: "0x8811e4Dd5EC5Eb8764b97CC814B1339089717adA",
		chainId: 1,
		decimals: 8,
		name: "Bithachi",
		symbol: "BITH"
	},
	{
		address: "0x41ad4093349C8A60DE591A3C37dcd184558EaAe3",
		chainId: 1,
		decimals: 18,
		name: "Bitcoin and Company",
		symbol: "BITN"
	},
	{
		address: "0x93b1E78a3e652cd2e71C4a767595B77282344932",
		chainId: 1,
		decimals: 18,
		name: "BITO Coin",
		symbol: "BITO"
	},
	{
		address: "0xF3d29Fb98D2DC5E78c87198DEEF99377345fD6F1",
		chainId: 1,
		decimals: 8,
		name: "BITPARK",
		symbol: "BITPARK"
	},
	{
		address: "0xC38f1fb49acDf2f1213CAf3319F6Eb3ea2cB7527",
		chainId: 1,
		decimals: 18,
		name: "Bitcoinus",
		symbol: "BITS"
	},
	{
		address: "0x9F9913853f749b3fE6D6D4e16a1Cc3C1656B6D51",
		chainId: 1,
		decimals: 18,
		name: "BITToken",
		symbol: "BITT"
	},
	{
		address: "0x55a290f08Bb4CAe8DcF1Ea5635A3FCfd4Da60456",
		chainId: 1,
		decimals: 18,
		name: "BITTO",
		symbol: "BITTO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xff2b3353c3015E9f1FBF95B9Bda23F58Aa7cE007",
		chainId: 1,
		decimals: 18,
		name: "BitScreener",
		symbol: "BITX"
	},
	{
		address: "0xA0eD4C4AcbF07C03365d6bbE28150a819AFf700F",
		chainId: 1,
		decimals: 18,
		name: "BITIFEX",
		symbol: "BITX"
	},
	{
		address: "0xb3104b4B9Da82025E8b9F8Fb28b3553ce2f67069",
		chainId: 1,
		decimals: 18,
		name: "Bibox Token",
		symbol: "BIX"
	},
	{
		address: "0x009c43B42AEFAC590C719E971020575974122803",
		chainId: 1,
		decimals: 18,
		name: "Bibox Token",
		symbol: "BIX"
	},
	{
		address: "0x3E9e371f8d2E9fCA315fB0A747533cEd8A3FCbCb",
		chainId: 1,
		decimals: 4,
		name: "BIXCPRO",
		symbol: "BIXCPRO"
	},
	{
		address: "0x7A8Ca2f815A260660158a38C34ca321A3605eCFE",
		chainId: 1,
		decimals: 8,
		name: "BIZZCOIN",
		symbol: "BIZZ"
	},
	{
		address: "0x5c39bC68e58a242A624E4FC96be77A383C52002D",
		chainId: 1,
		decimals: 18,
		name: "BitKeep Token",
		symbol: "BKB"
	},
	{
		address: "0xB2Bfeb70B903F1BAaC7f2ba2c62934C7e5B974C4",
		chainId: 1,
		decimals: 8,
		name: "BetKing Bankroll Token",
		symbol: "BKB"
	},
	{
		address: "0x6A27348483D59150aE76eF4C0f3622A78B0cA698",
		chainId: 1,
		decimals: 18,
		name: "BeeKan   Beenews",
		symbol: "BKBT"
	},
	{
		address: "0xc88Be04c809856B75E3DfE19eB4dCf0a3B15317a",
		chainId: 1,
		decimals: 8,
		name: "Bankcoin Cash",
		symbol: "BKC"
	},
	{
		address: "0x34bdf48A8F753de4822a6CFB1FEE275F9b4D662e",
		chainId: 1,
		decimals: 18,
		name: "FACTS",
		symbol: "BKC"
	},
	{
		address: "0x1cA02DD95f3F1e33DA7F5AfE15EA866dAb07aF04",
		chainId: 1,
		decimals: 9,
		name: "King Arthur",
		symbol: "BKING",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0D6F6a130C3046713cBA425f41a65C17205dF6B5",
		chainId: 1,
		decimals: 9,
		name: "Baby Akita",
		symbol: "BKITA"
	},
	{
		address: "0x1df7AA5551E801e280007dc0Fc0454E2D06C1A89",
		chainId: 1,
		decimals: 18,
		name: "BKEX Chain",
		symbol: "BKK"
	},
	{
		address: "0x8AF22fBDeFe01b4dC7960EC04Ec73e8502F4a6B0",
		chainId: 1,
		decimals: 8,
		name: "Biokkoin",
		symbol: "BKKG"
	},
	{
		address: "0xBeE6EDF5fa7e862ed2eA9b9f42cb0849184aAE85",
		chainId: 1,
		decimals: 0,
		name: "BlockState Security Token",
		symbol: "BKN"
	},
	{
		address: "0x3cf9E0c385a5ABEC9FD2a71790AA344C4e8E3570",
		chainId: 1,
		decimals: 18,
		name: "BlockRx",
		symbol: "BKRx"
	},
	{
		address: "0x9d62526f5Ce701950c30F2cACa70Edf70f9fbf0F",
		chainId: 1,
		decimals: 18,
		name: "Blocktanium",
		symbol: "BKT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x45245bc59219eeaAF6cD3f382e078A461FF9De7B",
		chainId: 1,
		decimals: 18,
		name: "BANKEX",
		symbol: "BKX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd714d91A169127e11D8FAb3665d72E8b7ef9Dbe2",
		chainId: 1,
		decimals: 18,
		name: "BlackHole Protocol",
		symbol: "BLACK"
	},
	{
		address: "0x41A3Dba3D677E573636BA691a70ff2D606c29666",
		chainId: 1,
		decimals: 18,
		name: "Blank",
		symbol: "BLANK"
	},
	{
		address: "0xAec7e1f531Bb09115103C53ba76829910Ec48966",
		chainId: 1,
		decimals: 18,
		name: "Blank",
		symbol: "BLANK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x326caf6980d4e9161Cfb3c55f195B3D825c266D4",
		chainId: 1,
		decimals: 18,
		name: "BullionsChain",
		symbol: "BLC"
	},
	{
		address: "0x6d2C508fc4a588A41713Ff59212F85489291d244",
		chainId: 1,
		decimals: 18,
		name: "Bloomzed Loyalty Cl",
		symbol: "BLCT"
	},
	{
		address: "0xE796d6ca1ceb1b022EcE5296226BF784110031Cd",
		chainId: 1,
		decimals: 18,
		name: "Blind Boxes",
		symbol: "BLES"
	},
	{
		address: "0x417fFdBc285dd2C4dC00937798ab901634137caA",
		chainId: 1,
		decimals: 18,
		name: "BlackFisk",
		symbol: "BLFI"
	},
	{
		address: "0x42BEdD647E387daBeC65A7dc3A3bAbCc68BB664d",
		chainId: 1,
		decimals: 18,
		name: "BlockMason Link",
		symbol: "BLINK"
	},
	{
		address: "0x50d2dE5397D7c657C3d424634a2dDf4e0D73d789",
		chainId: 1,
		decimals: 18,
		name: "Bliss",
		symbol: "BLISS"
	},
	{
		address: "0xCA29db4221c111888a7e80b12eAc8a266Da3Ee0d",
		chainId: 1,
		decimals: 18,
		name: "Bolenum",
		symbol: "BLN"
	},
	{
		address: "0x1C3BB10dE15C31D5DBE48fbB7B87735d1B7d8c32",
		chainId: 1,
		decimals: 18,
		name: "BLONDCOIN",
		symbol: "BLO"
	},
	{
		address: "0x68481f2c02BE3786987ac2bC3327171C5D05F9Bd",
		chainId: 1,
		decimals: 18,
		name: "Based Loans Ownersh",
		symbol: "BLO"
	},
	{
		address: "0xe6404a4472E5222b440F8faFb795553046000841",
		chainId: 1,
		decimals: 18,
		name: "BTC Long Only Alpha",
		symbol: "BLOAP"
	},
	{
		address: "0x6F919D67967a97EA36195A2346d9244E60FE0dDB",
		chainId: 1,
		decimals: 18,
		name: "Blockcloud",
		symbol: "BLOC"
	},
	{
		address: "0x892F5A0B08BB7B1eeCCCC63EF3916fF201c93664",
		chainId: 1,
		decimals: 18,
		name: "Bloody Token",
		symbol: "BLOODY"
	},
	{
		address: "0x107c4504cd79C5d2696Ea0030a8dD4e92601B82e",
		chainId: 1,
		decimals: 18,
		name: "Bloom",
		symbol: "BLT",
		extensions: {
			color: "#6067F1",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x539EfE69bCDd21a83eFD9122571a64CC25e0282b",
		chainId: 1,
		decimals: 8,
		name: "Blue Protocol",
		symbol: "BLUE"
	},
	{
		address: "0xD1ef9a7310D0806855C672288EF5a1BAB62ceF33",
		chainId: 1,
		decimals: 18,
		name: "BELIEVER",
		symbol: "BLVR"
	},
	{
		address: "0xcE59d29b09aAE565fEEEf8E52f47c3CD5368C663",
		chainId: 1,
		decimals: 18,
		name: "Bullion Crypto",
		symbol: "BLX (Bullion)"
	},
	{
		address: "0xE5a7c12972f3bbFe70ed29521C8949b8Af6a0970",
		chainId: 1,
		decimals: 18,
		name: "Iconomi",
		symbol: "BLX (Iconomi)"
	},
	{
		address: "0xf8aD7dFe656188A23e89da09506Adf7ad9290D5d",
		chainId: 1,
		decimals: 18,
		name: "Blocery",
		symbol: "BLY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5732046A883704404F284Ce41FfADd5b007FD668",
		chainId: 1,
		decimals: 18,
		name: "Bluzelle",
		symbol: "BLZ"
	},
	{
		address: "0x70eFDc485a10210B056eF8e0A32993Bc6529995E",
		chainId: 1,
		decimals: 18,
		name: "Blaze Network",
		symbol: "BLZN"
	},
	{
		address: "0xE2fe5E7E206e7B46CAd6A5146320e5b4b9A18E97",
		chainId: 1,
		decimals: 2,
		name: "Bitcomo",
		symbol: "BM"
	},
	{
		address: "0xDf6Ef343350780BF8C3410BF062e0C015B1DD671",
		chainId: 1,
		decimals: 8,
		name: "Blackmoon",
		symbol: "BMC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd945d2031b4C63C0E363304FB771F709b502DC0a",
		chainId: 1,
		decimals: 18,
		name: "BountyMarketCap",
		symbol: "BMC"
	},
	{
		address: "0xF03045a4C8077e38f3B8e2Ed33b8aEE69edF869F",
		chainId: 1,
		decimals: 18,
		name: "BlockMesh",
		symbol: "BMH"
	},
	{
		address: "0x725C263e32c72dDC3A19bEa12C5a0479a81eE688",
		chainId: 1,
		decimals: 18,
		name: "Bridge Mutual",
		symbol: "BMI"
	},
	{
		address: "0x5913D0F34615923552ee913DBe809F9F348e706E",
		chainId: 1,
		decimals: 18,
		name: "BMJ Master Nodes",
		symbol: "BMJ"
	},
	{
		address: "0x01b23286FF60a543ec29366aE8D6B6274cA20541",
		chainId: 1,
		decimals: 18,
		name: "Brother Music Platf",
		symbol: "BMP"
	},
	{
		address: "0xf028ADEe51533b1B47BEaa890fEb54a457f51E89",
		chainId: 1,
		decimals: 18,
		name: "BMCHAIN token",
		symbol: "BMT"
	},
	{
		address: "0xf205D2D65205711B6f6AAe3FCb7EbdBC8573f192",
		chainId: 1,
		decimals: 18,
		name: "Bmining Token",
		symbol: "BMT"
	},
	{
		address: "0x986EE2B944c42D017F52Af21c4c69B84DBeA35d8",
		chainId: 1,
		decimals: 18,
		name: "BitMart Token",
		symbol: "BMX"
	},
	{
		address: "0x42edc1c5ff57Ff5240C90E2D8DfA269D77D68013",
		chainId: 1,
		decimals: 18,
		name: "Bitnorm",
		symbol: "BN"
	},
	{
		address: "0x20910e5b5f087f6439DFcB0ddA4e27d1014Ac2b8",
		chainId: 1,
		decimals: 18,
		name: "BananaTok",
		symbol: "BNA"
	},
	{
		address: "0x07eF9E82721AC16809D24DAfBE1792Ce01654DB4",
		chainId: 1,
		decimals: 18,
		name: "Chimpion",
		symbol: "BNANA"
	},
	{
		address: "0xB8c77482e45F1F44dE1745F52C74426C631bDD52",
		chainId: 1,
		decimals: 18,
		name: "Binance Coin",
		symbol: "BNB",
		extensions: {
			color: "#f3ba2f",
			isVerified: true
		}
	},
	{
		address: "0x6FeBdFC0A9d9502C45343fCE0dF08828dEF44795",
		chainId: 1,
		decimals: 18,
		name: "3X Short BNB Token",
		symbol: "BNBBEAR"
	},
	{
		address: "0x9D1a62c2AD99019768b9126fdA004a9952853F6E",
		chainId: 1,
		decimals: 18,
		name: "3X Long BNB Token",
		symbol: "BNBBULL"
	},
	{
		address: "0x2840aD41cf25Ad58303Ba24C416E79dCe4161b4F",
		chainId: 1,
		decimals: 18,
		name: "1X Short BNB Token",
		symbol: "BNBHEDGE"
	},
	{
		address: "0xEf51c9377FeB29856E61625cAf9390bD0B67eA18",
		chainId: 1,
		decimals: 8,
		name: "Bionic",
		symbol: "BNC"
	},
	{
		address: "0xdD6Bf56CA2ada24c683FAC50E37783e55B57AF9F",
		chainId: 1,
		decimals: 12,
		name: "BNC",
		symbol: "BNC"
	},
	{
		address: "0xbe5b336eF62D1626940363Cf34bE079e0AB89F20",
		chainId: 1,
		decimals: 18,
		name: "Bnoincoin",
		symbol: "BNC"
	},
	{
		address: "0x84CD68c3e470eCEE4b8b6212eFcB8C6BcB38DA1D",
		chainId: 1,
		decimals: 18,
		name: "Doki Doki Chainbind",
		symbol: "BND"
	},
	{
		address: "0x1DE5e000C41C8d35b9f1f4985C23988f05831057",
		chainId: 1,
		decimals: 18,
		name: "BonFi",
		symbol: "BNF"
	},
	{
		address: "0x68e0A48d3BfF6633a31d1D100b70F93C3859218B",
		chainId: 1,
		decimals: 18,
		name: "Blaze DeFi",
		symbol: "BNFI"
	},
	{
		address: "0xdA2C424Fc98c741c2d4ef2f42897CEfed897CA75",
		chainId: 1,
		decimals: 9,
		name: "Benefits Coin",
		symbol: "BNFT"
	},
	{
		address: "0x4981553e8CcF6Df916B36a2d6B6f8fC567628a51",
		chainId: 1,
		decimals: 18,
		name: "Betnomi",
		symbol: "BNI"
	},
	{
		address: "0xC80c5E40220172B36aDee2c951f26F2a577810C5",
		chainId: 1,
		decimals: 8,
		name: "Bankera",
		symbol: "BNK"
	},
	{
		address: "0xDA80B20038BDF968C7307BB5907A469482CF6251",
		chainId: 1,
		decimals: 8,
		name: "BrokerNekoNetwork",
		symbol: "BNN"
	},
	{
		address: "0x8752bf7AD53D25A4165b9370F2becc22dD8aE838",
		chainId: 1,
		decimals: 2,
		name: "BlockNoteX",
		symbol: "BNOX"
	},
	{
		address: "0xD27D76A1bA55ce5C0291CCd04feBBe793D22ebF4",
		chainId: 1,
		decimals: 18,
		name: "BenePit",
		symbol: "BNP"
	},
	{
		address: "0x695106Ad73f506f9D0A9650a78019A93149AE07C",
		chainId: 1,
		decimals: 8,
		name: "BNS Token",
		symbol: "BNS"
	},
	{
		address: "0x668DbF100635f593A3847c0bDaF21f0a09380188",
		chainId: 1,
		decimals: 18,
		name: "BNSD Finance",
		symbol: "BNSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1F573D6Fb3F13d689FF844B4cE37794d79a7FF1C",
		chainId: 1,
		decimals: 18,
		name: "Bancor",
		symbol: "BNT",
		extensions: {
			color: "#00224D",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x86d1d12523B65203851c571FcC029bF90903fB6d",
		chainId: 1,
		decimals: 18,
		name: "Bintex Futures",
		symbol: "BNTX"
	},
	{
		address: "0xd2d6158683aeE4Cc838067727209a0aAF4359de3",
		chainId: 1,
		decimals: 18,
		name: "Bounty0x",
		symbol: "BNTY",
		extensions: {
			color: "#fd7a3d",
			isVerified: true
		}
	},
	{
		address: "0xbBDce056cbe561EE004094c75099172E7e3b34DF",
		chainId: 1,
		decimals: 18,
		name: "BeNative",
		symbol: "BNV"
	},
	{
		address: "0x40C836982788dca47D11024b1fa3e01FD4661766",
		chainId: 1,
		decimals: 18,
		name: "BTCNEXT Coin",
		symbol: "BNX"
	},
	{
		address: "0x014A543f767B3B06E31A811b0A75483Ee8dFd72D",
		chainId: 1,
		decimals: 18,
		name: "BonezYard",
		symbol: "BNZ"
	},
	{
		address: "0x746DdA2ea243400D5a63e0700F190aB79f06489e",
		chainId: 1,
		decimals: 7,
		name: "BOSAGORA",
		symbol: "BOA"
	},
	{
		address: "0xfb6bEcd99282d7CA14D0890F3e4F073D9Dd522e9",
		chainId: 1,
		decimals: 8,
		name: "Blockchain of Africa",
		symbol: "BOA"
	},
	{
		address: "0xF9c36C7aD7FA0f0862589c919830268d1A2581A1",
		chainId: 1,
		decimals: 18,
		name: "BOA",
		symbol: "BOA"
	},
	{
		address: "0xDF347911910b6c9A4286bA8E2EE5ea4a39eB2134",
		chainId: 1,
		decimals: 18,
		name: "Bob s Repair",
		symbol: "BOB"
	},
	{
		address: "0xF53c24f7729C88C110265929c7124E6259eFccAB",
		chainId: 1,
		decimals: 9,
		name: "Bobo Cash",
		symbol: "BOBO"
	},
	{
		address: "0x27C743954bCe1Bfaef8bcbD685527531001D88D7",
		chainId: 1,
		decimals: 18,
		name: "Blockium",
		symbol: "BOK"
	},
	{
		address: "0xEfE98765Da3824eF4a5358bA798cec87c13D8C62",
		chainId: 1,
		decimals: 18,
		name: "Freight Trust Protocol",
		symbol: "BOL"
	},
	{
		address: "0x2d4de3C744D43CF77CB12399921FAF0D78b7415b",
		chainId: 1,
		decimals: 18,
		name: "Boldman Capital",
		symbol: "BOLD"
	},
	{
		address: "0x9F235D23354857EfE6c541dB92a9eF1877689BCB",
		chainId: 1,
		decimals: 18,
		name: "BOLT Token",
		symbol: "BOLT"
	},
	{
		address: "0xD5930C307d7395Ff807F2921F12C5EB82131a789",
		chainId: 1,
		decimals: 18,
		name: "Bolt",
		symbol: "BOLT"
	},
	{
		address: "0xbB340A2eaF55C5e67a5A05FE5cEed9B9702d76f4",
		chainId: 1,
		decimals: 8,
		name: "BolttCoin",
		symbol: "BOLTT"
	},
	{
		address: "0x1C95b093d6C236d3EF7c796fE33f9CC6b8606714",
		chainId: 1,
		decimals: 0,
		name: "BOMB",
		symbol: "BOMB"
	},
	{
		address: "0xCc34366E3842cA1BD36c1f324d15257960fCC801",
		chainId: 1,
		decimals: 18,
		name: "Bonpay",
		symbol: "BON"
	},
	{
		address: "0x5Dc02Ea99285E17656b8350722694c35154DB1E8",
		chainId: 1,
		decimals: 8,
		name: "Bonded Finance",
		symbol: "BOND"
	},
	{
		address: "0x0391D2021f89DC339F60Fff84546EA23E337750f",
		chainId: 1,
		decimals: 18,
		name: "BarnBridge",
		symbol: "BOND",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD2dDa223b2617cB616c1580db421e4cFAe6a8a85",
		chainId: 1,
		decimals: 18,
		name: "Bondly",
		symbol: "BONDLY"
	},
	{
		address: "0x9813037ee2218799597d83D4a5B6F3b6778218d9",
		chainId: 1,
		decimals: 18,
		name: "Bone ShibaSwap",
		symbol: "BONE"
	},
	{
		address: "0x5C84bc60a796534bfeC3439Af0E6dB616A966335",
		chainId: 1,
		decimals: 18,
		name: "Bone",
		symbol: "BONE"
	},
	{
		address: "0x3A75731f9e16244dE01DD431636Db7c07D42A166",
		chainId: 1,
		decimals: 4,
		name: "Bones",
		symbol: "BONES",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6D6506E6F438edE269877a0A720026559110B7d5",
		chainId: 1,
		decimals: 18,
		name: "BONK Token",
		symbol: "BONK"
	},
	{
		address: "0xf0fE1A87aBf12099b77352BdCc10F5A87067b290",
		chainId: 1,
		decimals: 18,
		name: "BONSAI Vault  NFTX",
		symbol: "BONSAI"
	},
	{
		address: "0xa9C44135B3a87E0688c41CF8C27939A22dD437c9",
		chainId: 1,
		decimals: 18,
		name: "BooBank",
		symbol: "BOOB"
	},
	{
		address: "0x6C929cdE908481F3d1D775008791F42B1B89DBB0",
		chainId: 1,
		decimals: 18,
		name: "Boolean",
		symbol: "BOOL"
	},
	{
		address: "0xDB7Eab9bA6be88B869F738f6DEeBa96d49Fe13fd",
		chainId: 1,
		decimals: 18,
		name: "Boom Token",
		symbol: "BOOM"
	},
	{
		address: "0x82b89e0F9C0695639EB88659D0c306dBC242AF96",
		chainId: 1,
		decimals: 9,
		name: "BoomBaby io",
		symbol: "BOOMB"
	},
	{
		address: "0x4E0fCa55a6C3A94720ded91153A27F60E26B9AA8",
		chainId: 1,
		decimals: 18,
		name: "Boost",
		symbol: "BOOST"
	},
	{
		address: "0x3e780920601D61cEdb860fe9c4a90c9EA6A35E78",
		chainId: 1,
		decimals: 18,
		name: "Boosted Finance",
		symbol: "BOOST"
	},
	{
		address: "0xc8ce75F643eCAD864FC625902A6a07371f38320D",
		chainId: 1,
		decimals: 18,
		name: "Bootleg NFT",
		symbol: "BOOT"
	},
	{
		address: "0x6B01c3170ae1EFEBEe1a3159172CB3F7A5ECf9E5",
		chainId: 1,
		decimals: 18,
		name: "BOOTY",
		symbol: "BOOTY"
	},
	{
		address: "0xd9B48548DE7710519221207D70E40aa24D7d1985",
		chainId: 1,
		decimals: 9,
		name: "CandyBooty",
		symbol: "BOOTY",
		extensions: {
			color: "#00b4f4",
			isVerified: true
		}
	},
	{
		address: "0x7F1E2C7d6A69bf34824D72C53B4550E895C0D8C2",
		chainId: 1,
		decimals: 8,
		name: "BlockOptiopns Token",
		symbol: "BOP"
	},
	{
		address: "0x3c9d6c1C73b31c837832c72E04D3152f051fc1A9",
		chainId: 1,
		decimals: 18,
		name: "BoringDAO",
		symbol: "BOR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x26fb86579e371c7AEdc461b2DdEF0A8628c93d3B",
		chainId: 1,
		decimals: 18,
		name: "BORA",
		symbol: "BORA"
	},
	{
		address: "0xBC19712FEB3a26080eBf6f2F7849b417FdD792CA",
		chainId: 1,
		decimals: 18,
		name: "BoringDAO",
		symbol: "BORING"
	},
	{
		address: "0xC477D038d5420C6A9e0b031712f61c5120090de9",
		chainId: 1,
		decimals: 18,
		name: "Boson Protocol",
		symbol: "BOSON"
	},
	{
		address: "0xf9FBE825BFB2bF3E387af0Dc18caC8d87F29DEa8",
		chainId: 1,
		decimals: 18,
		name: "Bot Ocean",
		symbol: "BOTS"
	},
	{
		address: "0xC2C63F23ec5E97efbD7565dF9Ec764FDc7d4e91d",
		chainId: 1,
		decimals: 18,
		name: "Boule Coin",
		symbol: "BOU"
	},
	{
		address: "0x139d9397274bb9E2C29A9aa8Aa0b5874d30D62E3",
		chainId: 1,
		decimals: 18,
		name: "BoutsPro",
		symbol: "BOUTS"
	},
	{
		address: "0x63f584FA56E60e4D0fE8802b27C7e6E3b33E007f",
		chainId: 1,
		decimals: 18,
		name: "ContentBox",
		symbol: "BOX"
	},
	{
		address: "0xe1A178B681BD05964d3e3Ed33AE731577d9d96dD",
		chainId: 1,
		decimals: 18,
		name: "BOX Token",
		symbol: "BOX"
	},
	{
		address: "0x780116D91E5592E58a3b3c76A351571b39abCEc6",
		chainId: 1,
		decimals: 15,
		name: "Blockparty",
		symbol: "BOXX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdf22Da9a8C1D80095175Ae601d182A734923F01A",
		chainId: 1,
		decimals: 8,
		name: "BitpakcoinToken",
		symbol: "BPAKC"
	},
	{
		address: "0xE865A04Fb0d565107eaF9049Ef22c27DD0c4bBEf",
		chainId: 1,
		decimals: 18,
		name: "BestPick Coin",
		symbol: "BPC"
	},
	{
		address: "0xF21D65979bD89b28f05EF19F3c65dd2A1D02946D",
		chainId: 1,
		decimals: 4,
		name: "BPC",
		symbol: "BPC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBe46985EE59830E18C02Dfa143000Dba7AC967dd",
		chainId: 1,
		decimals: 9,
		name: "BabyPenguin",
		symbol: "BPENG"
	},
	{
		address: "0x426FC8BE95573230f6e6bc4af91873F0c67b21b4",
		chainId: 1,
		decimals: 18,
		name: "BlackPearl Token",
		symbol: "BPLC"
	},
	{
		address: "0x0452aeD878805514e28Fb5BD0B56Bef92176E32A",
		chainId: 1,
		decimals: 8,
		name: "BPOP",
		symbol: "BPOP"
	},
	{
		address: "0x52d904eFf2605463c2F0b338d34aBc9B7c3e3b08",
		chainId: 1,
		decimals: 18,
		name: "Bitpower",
		symbol: "BPP"
	},
	{
		address: "0x197E6bCa6BC2f488ec760a6Ce46B1399cd2954b0",
		chainId: 1,
		decimals: 8,
		name: "BitCloud Pro",
		symbol: "BPRO"
	},
	{
		address: "0xbbBBBBB5AA847A2003fbC6b5C16DF0Bd1E725f61",
		chainId: 1,
		decimals: 18,
		name: "B Protocol",
		symbol: "BPRO"
	},
	{
		address: "0x327682779bAB2BF4d1337e8974ab9dE8275A7Ca8",
		chainId: 1,
		decimals: 18,
		name: "Blockport Token",
		symbol: "BPT"
	},
	{
		address: "0x283669123bd83dA2536bB534e20512101c18E5D8",
		chainId: 1,
		decimals: 9,
		name: "Bitpayer Token",
		symbol: "BPT"
	},
	{
		address: "0x0eC9F76202a7061eB9b3a7D6B59D36215A7e37da",
		chainId: 1,
		decimals: 18,
		name: "BlackPool Token",
		symbol: "BPT"
	},
	{
		address: "0x6c22B815904165F3599F0A4a092D458966bD8024",
		chainId: 1,
		decimals: 18,
		name: "Bit Public Talent N",
		symbol: "BPTN"
	},
	{
		address: "0x095648BC80a7d1Dd16B85E9B84F07463a20f3536",
		chainId: 1,
		decimals: 18,
		name: "BabyPunks",
		symbol: "BPUNKS"
	},
	{
		address: "0x2AA4a3E8bB72BE68a31c9c3C98CA7BeC723C6222",
		chainId: 1,
		decimals: 18,
		name: "Bispex",
		symbol: "BPX"
	},
	{
		address: "0xEA3cB156745a8d281A5fC174186C976F2dD04c2E",
		chainId: 1,
		decimals: 18,
		name: "Nobrainer Finance",
		symbol: "BRAIN"
	},
	{
		address: "0x56ED2f7DAc19243df100Bac10364C56df20cb1e9",
		chainId: 1,
		decimals: 18,
		name: "Brapper Token",
		symbol: "BRAP"
	},
	{
		address: "0x9E77D5a1251b6F7D456722A6eaC6D2d5980bd891",
		chainId: 1,
		decimals: 8,
		name: "BROTHER",
		symbol: "BRAT"
	},
	{
		address: "0x61D24Aabb3e5E800D8f3d3D43dcBD66AE6caB51E",
		chainId: 1,
		decimals: 18,
		name: "Rabbit Coin",
		symbol: "BRB"
	},
	{
		address: "0x8E3BCC334657560253B83f08331d85267316e08a",
		chainId: 1,
		decimals: 18,
		name: "Rubic",
		symbol: "BRBC"
	},
	{
		address: "0x21aB6c9fAC80C59D401b37cB43F81ea9DDe7Fe34",
		chainId: 1,
		decimals: 8,
		name: "Baer Chain",
		symbol: "BRC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x73484A262730d1d422610729e828346F9B2ff480",
		chainId: 1,
		decimals: 18,
		name: "BRCP Token",
		symbol: "BRCP"
	},
	{
		address: "0x558EC3152e2eb2174905cd19AeA4e34A23DE9aD6",
		chainId: 1,
		decimals: 18,
		name: "Bread",
		symbol: "BRD",
		extensions: {
			color: "#fe5d86",
			isVerified: true
		}
	},
	{
		address: "0x77a2Bf0bDa9775Fb3524a6720dD3b16bd455e2C2",
		chainId: 1,
		decimals: 9,
		name: "SafeBreastInu",
		symbol: "BREAST"
	},
	{
		address: "0x4639cd8cd52EC1CF2E496a606ce28D8AfB1C792F",
		chainId: 1,
		decimals: 18,
		name: "CBDAO",
		symbol: "BREE"
	},
	{
		address: "0x01aa952C2aa0259198E403c10799557e9a6B1EC1",
		chainId: 1,
		decimals: 2,
		name: "Brezcoin",
		symbol: "BREZ"
	},
	{
		address: "0x679fA6dC913aCAB6dEF33Ec469FC6E421bC794F5",
		chainId: 1,
		decimals: 18,
		name: "Bribe Protocol",
		symbol: "BRIBE"
	},
	{
		address: "0xBEaB712832112bd7664226db7CD025B153D3af55",
		chainId: 1,
		decimals: 18,
		name: "Bright Union",
		symbol: "BRIGHT"
	},
	{
		address: "0x1de6cB5b085ac84bd247b8176c781E913166Aa6b",
		chainId: 1,
		decimals: 18,
		name: "BrillianceX",
		symbol: "BRILX"
	},
	{
		address: "0x80046305aaab08F6033b56a360c184391165dc2d",
		chainId: 1,
		decimals: 18,
		name: "Berlin Coin",
		symbol: "BRLN"
	},
	{
		address: "0x501e8726d06Cdef66f3e0cb67f54924CcA1cC894",
		chainId: 1,
		decimals: 18,
		name: "BRMV Token",
		symbol: "BRMV"
	},
	{
		address: "0xB22c2786a549B008517B67625f5296E8fAf9589e",
		chainId: 1,
		decimals: 18,
		name: "Rental Processor Token",
		symbol: "BRP"
	},
	{
		address: "0xe5b998F63e7022664D3C36c56d1798ccA7751573",
		chainId: 1,
		decimals: 18,
		name: "Bor Protocol",
		symbol: "BRP"
	},
	{
		address: "0x8abf3a95862619A55fA00CB3e4eeDBe113ff468C",
		chainId: 1,
		decimals: 18,
		name: "Money Printer Go Br",
		symbol: "BRRR"
	},
	{
		address: "0xF0ACF8949e705E0ebb6CB42c2164B0B986454223",
		chainId: 1,
		decimals: 8,
		name: "Barter",
		symbol: "BRTR"
	},
	{
		address: "0x3A4A0D5b8dfAcd651EE28ed4fFEBf91500345489",
		chainId: 1,
		decimals: 18,
		name: "BerryX",
		symbol: "BRX"
	},
	{
		address: "0x420412E765BFa6d85aaaC94b4f7b708C89be2e2B",
		chainId: 1,
		decimals: 4,
		name: "Brazilian Digital T",
		symbol: "BRZ"
	},
	{
		address: "0x77C07555aF5ffdC946Fb47ce15EA68620E4e7170",
		chainId: 1,
		decimals: 18,
		name: "Breezecoin",
		symbol: "BRZE"
	},
	{
		address: "0xa44F5ae99b5400360a37dDFa69aEEB5F91Dc8679",
		chainId: 1,
		decimals: 18,
		name: "BabySatoshi",
		symbol: "BSATOSHI"
	},
	{
		address: "0xDe8607CCad60814C8d9cD6f5CE8E9031e4675c8F",
		chainId: 1,
		decimals: 8,
		name: "Bit Storage Box Tok",
		symbol: "BSBT"
	},
	{
		address: "0xe541504417670FB76b612B41B4392d967a1956c7",
		chainId: 1,
		decimals: 18,
		name: "Bitsonic",
		symbol: "BSC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xcfAD57a67689809CdA997f655802a119838c9ceC",
		chainId: 1,
		decimals: 8,
		name: "Benscoin",
		symbol: "BSC"
	},
	{
		address: "0x4E9A46EA6A22f3894aBEE2302Ad42fd3b69E21E2",
		chainId: 1,
		decimals: 8,
		name: "Binance Smart Chain",
		symbol: "BSCGIRL"
	},
	{
		address: "0x003e0af2916e598Fa5eA5Cb2Da4EDfdA9aEd9Fde",
		chainId: 1,
		decimals: 18,
		name: "Basis Dollar",
		symbol: "BSD",
		extensions: {
			color: "#000000",
			isVerified: true
		}
	},
	{
		address: "0x9f48b2f14517770F2d238c787356F3b961a6616F",
		chainId: 1,
		decimals: 18,
		name: "Basis Dollar Bond",
		symbol: "BSDB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF26ef5E0545384b7Dcc0f297F2674189586830DF",
		chainId: 1,
		decimals: 18,
		name: "BSDC",
		symbol: "BSDC"
	},
	{
		address: "0xE7C9C188138f7D70945D420d75F8Ca7d8ab9c700",
		chainId: 1,
		decimals: 18,
		name: "Basis Dollar Share",
		symbol: "BSDS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA30189d8255322A2F8B2a77906B000aeB005570c",
		chainId: 1,
		decimals: 18,
		name: "Buy Sell",
		symbol: "BSE"
	},
	{
		address: "0xB34Ab2f65c6e4F764fFe740ab83F982021Faed6d",
		chainId: 1,
		decimals: 18,
		name: "Basis Gold",
		symbol: "BSG"
	},
	{
		address: "0xA9d232cC381715aE791417B624D7C4509D2c28DB",
		chainId: 1,
		decimals: 18,
		name: "Basis Gold Share",
		symbol: "BSGS"
	},
	{
		address: "0xC03841B5135600312707d39Eb2aF0D2aD5d51A91",
		chainId: 1,
		decimals: 18,
		name: "BasketCoin",
		symbol: "BSKT"
	},
	{
		address: "0x26a79Bd709A7eF5E5F747B8d8f83326EA044d8cC",
		chainId: 1,
		decimals: 8,
		name: "BankSocial",
		symbol: "BSOCIAL"
	},
	{
		address: "0x26946adA5eCb57f3A1F91605050Ce45c482C9Eb1",
		chainId: 1,
		decimals: 8,
		name: "BitcoinSoV",
		symbol: "BSOV"
	},
	{
		address: "0xa1454f9c704AF96636F3A7532b9a04c411f85680",
		chainId: 1,
		decimals: 18,
		name: "BallSwap",
		symbol: "BSP"
	},
	{
		address: "0x509A38b7a1cC0dcd83Aa9d06214663D9eC7c7F4a",
		chainId: 1,
		decimals: 18,
		name: "BlocksquareToken",
		symbol: "BST"
	},
	{
		address: "0xD4f6f9Ae14399fD5Eb8DFc7725F0094a1A7F5d80",
		chainId: 1,
		decimals: 18,
		name: "Bitsten Token",
		symbol: "BST"
	},
	{
		address: "0x0B4680e848f842b86E4Df38D9FA0d9f9419F37EC",
		chainId: 1,
		decimals: 18,
		name: "Beshare Token",
		symbol: "BST"
	},
	{
		address: "0xDf0041891BdA1f911C4243f328F7Cf61b37F965b",
		chainId: 1,
		decimals: 18,
		name: "BOOSTO",
		symbol: "BST"
	},
	{
		address: "0x336492A0601CC85e08C14D390BF07d960328aaf4",
		chainId: 1,
		decimals: 18,
		name: "Blueshare Token",
		symbol: "BST1"
	},
	{
		address: "0xCe49c3c92b33a1653F34811a9d7e34502bF12B89",
		chainId: 1,
		decimals: 18,
		name: "3X Short Bitcoin SV",
		symbol: "BSVBEAR"
	},
	{
		address: "0x6e13A9e4AE3d0678E511Fb6d2ad531fcF0e247bf",
		chainId: 1,
		decimals: 18,
		name: "3X Long Bitcoin SV",
		symbol: "BSVBULL"
	},
	{
		address: "0x7A647637E75d34A7798Ba06BD1aDF5c084bb5dd5",
		chainId: 1,
		decimals: 18,
		name: "Bestay",
		symbol: "BSY"
	},
	{
		address: "0x3004Cf8B4e28d60f4E305DF25a57Cd5faF37b8d5",
		chainId: 1,
		decimals: 18,
		name: "BSYS",
		symbol: "BSYS"
	},
	{
		address: "0x6628606c321FaF52b7230A57b26c01B19aA68e82",
		chainId: 1,
		decimals: 18,
		name: "BitHash Token",
		symbol: "BT"
	},
	{
		address: "0x76c5449F4950f6338A393F53CdA8b53B0cd3Ca3a",
		chainId: 1,
		decimals: 18,
		name: "BT Finance",
		symbol: "BT"
	},
	{
		address: "0x997507cc49FBf0CD6ce5e1EE543218556fAFdEBc",
		chainId: 1,
		decimals: 18,
		name: "Bitenium Token",
		symbol: "BT"
	},
	{
		address: "0x270371C58D9D775ED73971Dd414656107384f235",
		chainId: 1,
		decimals: 18,
		name: "BTA Protocol",
		symbol: "BTAP"
	},
	{
		address: "0x06e0feB0D74106c7adA8497754074D222Ec6BCDf",
		chainId: 1,
		decimals: 18,
		name: "Bitball",
		symbol: "BTB"
	},
	{
		address: "0x32E6C34Cd57087aBBD59B5A4AECC4cB495924356",
		chainId: 1,
		decimals: 18,
		name: "BitBase Token",
		symbol: "BTBS"
	},
	{
		address: "0x0327112423F3A68efdF1fcF402F6c5CB9f7C33fd",
		chainId: 1,
		decimals: 18,
		name: "PieDAO BTC++",
		symbol: "BTC++",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0B498ff89709d3838a063f1dFA463091F9801c2b",
		chainId: 1,
		decimals: 18,
		name: "BTC 2x Flexible Lev",
		symbol: "BTC2X-FLI"
	},
	{
		address: "0x02725836ebF3eCDb1cDf1c7b02FcbBfaa2736AF8",
		chainId: 1,
		decimals: 8,
		name: "BitAir",
		symbol: "BTCA"
	},
	{
		address: "0xf2cee90309418353a57717ECa26C4f8754F0d84e",
		chainId: 1,
		decimals: 18,
		name: "BitcoinBrand",
		symbol: "BTCB"
	},
	{
		address: "0x0886949c1b8C412860c4264Ceb8083d1365e86CF",
		chainId: 1,
		decimals: 8,
		name: "EthereumBitcoin",
		symbol: "BTCE"
	},
	{
		address: "0xc06aEc5191bE16b94FfC97B6Fc01393527367365",
		chainId: 1,
		decimals: 18,
		name: "BTC ETH Equal Weigh",
		symbol: "BTCETH5050"
	},
	{
		address: "0xA35Fc5019C4dc509394Bd4d74591a0bF8852c195",
		chainId: 1,
		decimals: 18,
		name: "BTC ETH 75  25  Wei",
		symbol: "BTCETH7525"
	},
	{
		address: "0x2409D6059e2A8130c099e49F3cb418fd6C3d9AFf",
		chainId: 1,
		decimals: 18,
		name: "BTC Fund Active Tra",
		symbol: "BTCFUND"
	},
	{
		address: "0x305F8157C1f841fBD378f636aBF390c5b4C0e330",
		chainId: 1,
		decimals: 8,
		name: "Bitcoin Galaxy Warp",
		symbol: "BTCGW"
	},
	{
		address: "0x5547136b913b68881596275ACe01e9A589c5b16B",
		chainId: 1,
		decimals: 18,
		name: "BITCOINHEDGE",
		symbol: "BTCHG"
	},
	{
		address: "0x5acD19b9c91e596b1f062f18e3D02da7eD8D1e50",
		chainId: 1,
		decimals: 8,
		name: "BTC Lite",
		symbol: "BTCL"
	},
	{
		address: "0x87f5E8c3425218837f3CB67dB941aF0C01323E56",
		chainId: 1,
		decimals: 18,
		name: "BitCoin One",
		symbol: "BTCONE"
	},
	{
		address: "0x723CbfC05e2cfcc71d3d89e770D32801A5eEf5Ab",
		chainId: 1,
		decimals: 8,
		name: "Bitcoin Pro",
		symbol: "BTCP"
	},
	{
		address: "0x0371f7b219fff864b437bcfb564810F323FfFccA",
		chainId: 1,
		decimals: 4,
		name: "Bitcurate",
		symbol: "BTCR"
	},
	{
		address: "0x6Aac8CB9861E42bf8259F5AbDC6aE3Ae89909E11",
		chainId: 1,
		decimals: 8,
		name: "Bitcoin Red",
		symbol: "BTCRED"
	},
	{
		address: "0x924E26fEe8E10c20726006CC2Bd307A538B0eBE5",
		chainId: 1,
		decimals: 18,
		name: "BTC RSI Crossover Y",
		symbol: "BTCRSIAPY"
	},
	{
		address: "0x820A8481451e893Bc66DCe50C84d45617CaC3705",
		chainId: 1,
		decimals: 18,
		name: "Bitcoin True",
		symbol: "BTCT"
	},
	{
		address: "0x5f2eC9cF1EC1c0e2c880B6584921E812a4225395",
		chainId: 1,
		decimals: 8,
		name: "Bitcoin Unicorn",
		symbol: "BTCUI"
	},
	{
		address: "0x51B0bcBEFf204B39Ce792D1E16767Fe6F7631970",
		chainId: 1,
		decimals: 18,
		name: "Bitcoin Volatility",
		symbol: "BTCV"
	},
	{
		address: "0x9388F54FA978Aa9e24395a8b69033304ECcea4df",
		chainId: 1,
		decimals: 4,
		name: "BITSCOIN",
		symbol: "BTCX"
	},
	{
		address: "0x73dD069c299A5d691E9836243BcaeC9c8C1D8734",
		chainId: 1,
		decimals: 8,
		name: "BTE",
		symbol: "BTE"
	},
	{
		address: "0xfD62247943F94C3910A4922af2C62C2D3fAC2a8f",
		chainId: 1,
		decimals: 18,
		name: "BTEcoin",
		symbol: "BTE"
	},
	{
		address: "0xFAd572db566E5234AC9Fc3d570c4EdC0050eAA92",
		chainId: 1,
		decimals: 18,
		name: "Bytether",
		symbol: "BTH"
	},
	{
		address: "0xa02e3bB9cEbc03952601B3724B4940e0845BeBcf",
		chainId: 1,
		decimals: 18,
		name: "Bethereum",
		symbol: "BTHR"
	},
	{
		address: "0xdb8646F5b487B5Dd979FAC618350e85018F557d4",
		chainId: 1,
		decimals: 18,
		name: "Bitcoin Token",
		symbol: "BTK"
	},
	{
		address: "0x6682195E2a0048CE38B727A3711802d58244606E",
		chainId: 1,
		decimals: 18,
		name: "BeautyK",
		symbol: "BTKC"
	},
	{
		address: "0x2accaB9cb7a48c3E82286F0b2f8798D201F4eC3f",
		chainId: 1,
		decimals: 18,
		name: "BTL (Battle)",
		symbol: "BTL (Battle)"
	},
	{
		address: "0x92685E93956537c25Bb75D5d47fca4266dd628B8",
		chainId: 1,
		decimals: 4,
		name: "Bitlle Token",
		symbol: "BTL (Bitlle)"
	},
	{
		address: "0xcB97e65F07DA24D46BcDD078EBebd7C6E6E3d750",
		chainId: 1,
		decimals: 8,
		name: "Bytom",
		symbol: "BTM"
	},
	{
		address: "0xD6b107D3E45B959B6d13FAF1bb2a2CF8fC7025e6",
		chainId: 1,
		decimals: 18,
		name: "Bitnex Global",
		symbol: "BTNG"
	},
	{
		address: "0x8Fb6c8A44A4e23fD1f5a936818b39083B4cdc865",
		chainId: 1,
		decimals: 18,
		name: "BitOnyx Token",
		symbol: "BTNYX"
	},
	{
		address: "0x36905Fc93280f52362A1CBAB151F25DC46742Fb5",
		chainId: 1,
		decimals: 18,
		name: "Bottos",
		symbol: "BTO"
	},
	{
		address: "0x20900587e569E3D0B2609BCa6Fb3469765ed0920",
		chainId: 1,
		decimals: 18,
		name: "Bitpoint",
		symbol: "BTP"
	},
	{
		address: "0x16B0E62aC13a2fAeD36D18bce2356d25Ab3CfAD3",
		chainId: 1,
		decimals: 18,
		name: "Bitcoin Boutique",
		symbol: "BTQ"
	},
	{
		address: "0x499A6B77bc25C26bCf8265E2102B1B3dd1617024",
		chainId: 1,
		decimals: 18,
		name: "Bitether",
		symbol: "BTR"
	},
	{
		address: "0xcbf15FB8246F679F9Df0135881CB29a3746f734b",
		chainId: 1,
		decimals: 18,
		name: "Bither Platform Token",
		symbol: "BTR"
	},
	{
		address: "0xcce63fD31e9053c110c74CEbc37C8e358A6AA5bD",
		chainId: 1,
		decimals: 4,
		name: "Bitriver",
		symbol: "BTR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd433138d12beB9929FF6fd583DC83663eea6Aaa5",
		chainId: 1,
		decimals: 18,
		name: "Bitrue Coin",
		symbol: "BTR"
	},
	{
		address: "0x388Fd8A5145D6EF85aAE14D494F93Df9D1c7c00C",
		chainId: 1,
		decimals: 8,
		name: "BitcoinRegular",
		symbol: "BTRL"
	},
	{
		address: "0x03C780cD554598592B97b7256dDAad759945b125",
		chainId: 1,
		decimals: 18,
		name: "Biotron",
		symbol: "BTRN"
	},
	{
		address: "0x73C9275c3a2Dd84b5741fD59AEbF102C91Eb033F",
		chainId: 1,
		decimals: 18,
		name: "Bitball Treasure",
		symbol: "BTRS"
	},
	{
		address: "0x666d875C600AA06AC1cf15641361dEC3b00432Ef",
		chainId: 1,
		decimals: 8,
		name: "BTSE Token",
		symbol: "BTSE"
	},
	{
		address: "0x05079687D35b93538cbd59fe5596380cae9054A9",
		chainId: 1,
		decimals: 18,
		name: "BitSong",
		symbol: "BTSG"
	},
	{
		address: "0x080aa07E2C7185150d7e4DA98838A8d2feac3dfC",
		chainId: 1,
		decimals: 0,
		name: "Bitether",
		symbol: "BTT"
	},
	{
		address: "0xFA456Cf55250A839088b27EE32A424d7DAcB54Ff",
		chainId: 1,
		decimals: 18,
		name: "Blocktrade.com",
		symbol: "BTT"
	},
	{
		address: "0xb683D83a532e2Cb7DFa5275eED3698436371cc9f",
		chainId: 1,
		decimals: 18,
		name: "BTU Protocol",
		symbol: "BTU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3c76EF53be46ed2E9bE224e8f0b92e8ACBc24ea0",
		chainId: 1,
		decimals: 3,
		name: "Bitsou",
		symbol: "BTU"
	},
	{
		address: "0x2B04DaDD412f7281d3CCabfb8425FD9c9E841588",
		chainId: 1,
		decimals: 8,
		name: "BittUp",
		symbol: "BTU"
	},
	{
		address: "0x9eecec130fb665d03a37289ee34C818Ee7F79926",
		chainId: 1,
		decimals: 18,
		name: "BETTY",
		symbol: "BTY"
	},
	{
		address: "0xE5f867dE1EA81346df5181b8b48DD6B0BB3357B0",
		chainId: 1,
		decimals: 18,
		name: "BTZ by Bunz",
		symbol: "BTZ"
	},
	{
		address: "0xCa3c18a65b802eC267f8f4802545e7F53D24C75e",
		chainId: 1,
		decimals: 18,
		name: "BeeUnity Chain",
		symbol: "BUC"
	},
	{
		address: "0x57652Fc91f522f9EFF0b38CDF1D51f5FB5764215",
		chainId: 1,
		decimals: 18,
		name: "Buddy",
		symbol: "BUD"
	},
	{
		address: "0x0A7e4D70e10b63FeF9F8dD19FbA3818d15154d2F",
		chainId: 1,
		decimals: 18,
		name: "Buff Doge",
		symbol: "BUFFDOGE"
	},
	{
		address: "0x1aABf9B575e4329b8C8F272428AD5E43ab4AeFC8",
		chainId: 1,
		decimals: 9,
		name: "Bugg Inu",
		symbol: "BUGG"
	},
	{
		address: "0xBc3EC4E491b835Dce394A53E9A9A10Ac19564839",
		chainId: 1,
		decimals: 18,
		name: "Starbugs Shards",
		symbol: "BUGS"
	},
	{
		address: "0x7b123f53421b1bF8533339BFBdc7C98aA94163db",
		chainId: 1,
		decimals: 18,
		name: "dfohub",
		symbol: "BUIDL"
	},
	{
		address: "0x6e36556B3ee5Aa28Def2a8EC3DAe30eC2B208739",
		chainId: 1,
		decimals: 18,
		name: "BUILD Finance",
		symbol: "BUILD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa143ac515dCA260A46C742C7251eF3B268639593",
		chainId: 1,
		decimals: 18,
		name: "Bulk Network",
		symbol: "BULK"
	},
	{
		address: "0x68eb95Dc9934E19B86687A10DF8e364423240E94",
		chainId: 1,
		decimals: 18,
		name: "3X Long Bitcoin Tok",
		symbol: "BULL"
	},
	{
		address: "0xb439B8731ee047799019eF0b745a51d256B116Af",
		chainId: 1,
		decimals: 18,
		name: "BullionFX",
		symbol: "BULL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd06b25F67A17f12b41F615b34D87ECd716fF55a0",
		chainId: 1,
		decimals: 18,
		name: "3X Long Shitcoin In",
		symbol: "BULLSHIT"
	},
	{
		address: "0x8D3E855f3f55109D473735aB76F753218400fe96",
		chainId: 1,
		decimals: 18,
		name: "Bundles",
		symbol: "BUND"
	},
	{
		address: "0x33e70C9EFABDf151f5c674A4ADDC104874980c3f",
		chainId: 1,
		decimals: 18,
		name: "BUNNY Vault  NFTX",
		symbol: "BUNNY"
	},
	{
		address: "0x755eb14D2fefF2939EB3026f5CaD9D03775b9fF4",
		chainId: 1,
		decimals: 18,
		name: "BunnyToken",
		symbol: "BUNNY"
	},
	{
		address: "0x3Ea50B7Ef6a7eaf7E966E2cb72b519C16557497c",
		chainId: 1,
		decimals: 9,
		name: "Rocket Bunny",
		symbol: "BUNNY"
	},
	{
		address: "0xB04DFdb8271ed2d5e13858562C44A77D3CEb9e57",
		chainId: 1,
		decimals: 18,
		name: "BuildUp",
		symbol: "BUP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8515cD0f00aD81996d24b9A9C35121a3b759D6Cd",
		chainId: 1,
		decimals: 18,
		name: "BlockBurn",
		symbol: "BURN"
	},
	{
		address: "0x106238737b85b4220C7A7DdFD5c4cAF8597281fe",
		chainId: 1,
		decimals: 18,
		name: "BurnX",
		symbol: "BURNX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1e950AF2F6f8505c09F0Ca42c4b38F10979cb22E",
		chainId: 1,
		decimals: 9,
		name: "BurnX 2 0",
		symbol: "BURNX20"
	},
	{
		address: "0x33f391F4c4fE802b70B77AE37670037A92114A7c",
		chainId: 1,
		decimals: 18,
		name: "CoinBurp",
		symbol: "BURP"
	},
	{
		address: "0x4Fabb145d64652a948d72533023f6E7A623C7C53",
		chainId: 1,
		decimals: 18,
		name: "Binance USD",
		symbol: "BUSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5CB3ce6D081fB00d5f6677d196f2d70010EA3f4a",
		chainId: 1,
		decimals: 18,
		name: "Busy DAO",
		symbol: "BUSY"
	},
	{
		address: "0x31Fdd1c6607F47C14a2821f599211c67AC20FA96",
		chainId: 1,
		decimals: 18,
		name: "Burency",
		symbol: "BUY"
	},
	{
		address: "0x396eC402B42066864C406d1ac3bc86B575003ed8",
		chainId: 1,
		decimals: 2,
		name: "Buying com",
		symbol: "BUY"
	},
	{
		address: "0xaE8488e75493B89A0E1488BF91542208C416f486",
		chainId: 1,
		decimals: 18,
		name: "Buzcoin",
		symbol: "BUZ"
	},
	{
		address: "0x10d88D7495cA381df1391229Bdb82D015b9Ad17D",
		chainId: 1,
		decimals: 18,
		name: "Bavala",
		symbol: "BVA"
	},
	{
		address: "0xe7d324B2677440608fb871981B220ECa062c3FbF",
		chainId: 1,
		decimals: 18,
		name: "Bullswap Protocol",
		symbol: "BVL"
	},
	{
		address: "0x81824663353A9d29b01B2DE9dd9a2Bb271d298cD",
		chainId: 1,
		decimals: 18,
		name: "Bitcoin Volatility",
		symbol: "BVOL"
	},
	{
		address: "0xF7E04D8a32229B4cA63aA51eEA9979C7287FEa48",
		chainId: 1,
		decimals: 5,
		name: "Beowulf",
		symbol: "BWF"
	},
	{
		address: "0x51a4F65463597CA4609C9a90eA3D5ab219Fbc85D",
		chainId: 1,
		decimals: 18,
		name: "Bitwings",
		symbol: "BWN"
	},
	{
		address: "0xFF0a024B66739357c4ED231fB3DBC0c8C22749F5",
		chainId: 1,
		decimals: 8,
		name: "Binance Wrapped WRX",
		symbol: "BWRX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xcA3Ea3061d638E02113aA960340c98343b5aCd62",
		chainId: 1,
		decimals: 18,
		name: "Bittwatt",
		symbol: "BWT"
	},
	{
		address: "0xbD168CbF9d3a375B38dC51A202B5E8a4E52069Ed",
		chainId: 1,
		decimals: 18,
		name: "Blue Whale Token",
		symbol: "BWX"
	},
	{
		address: "0xce5114d7fa8361F0c088EE26FA3A5446C4a1f50b",
		chainId: 1,
		decimals: 18,
		name: "Blue Whale",
		symbol: "BWX"
	},
	{
		address: "0x98d8d146e644171Cd47fF8588987B7bdeEF72A87",
		chainId: 1,
		decimals: 18,
		name: "Blockchain Exchange",
		symbol: "BXA"
	},
	{
		address: "0xdeCF7Be29F8832E9C2Ddf0388c9778B8Ba76af43",
		chainId: 1,
		decimals: 18,
		name: "BonusCloud",
		symbol: "BXC"
	},
	{
		address: "0x5c4ac68aAc56eBe098D621Cd8CE9F43270Aaa355",
		chainId: 1,
		decimals: 6,
		name: "bXIOT",
		symbol: "BXIOT"
	},
	{
		address: "0xEb6985ACD6d0cbff60B88032b0B29Ac1d9D66A1B",
		chainId: 1,
		decimals: 18,
		name: "Bitbook Gambling",
		symbol: "BXK"
	},
	{
		address: "0x24D77c210a014b1E123a0878F6C903Df74A2317B",
		chainId: 1,
		decimals: 8,
		name: "Bitfxt Coin",
		symbol: "BXT"
	},
	{
		address: "0x54F9b4B4485543A815c51c412a9E20436A06491d",
		chainId: 1,
		decimals: 18,
		name: "Baanx",
		symbol: "BXX"
	},
	{
		address: "0x827D53c8170aF52625f414bde00326Fc8A085E86",
		chainId: 1,
		decimals: 18,
		name: "Beaxy",
		symbol: "BXY"
	},
	{
		address: "0x008377EB0C62cE8e0BA3D7Bb4A5638591f21588E",
		chainId: 1,
		decimals: 18,
		name: "YFLink Bond",
		symbol: "bYFL"
	},
	{
		address: "0x4Bb3205bf648B7F59EF90Dee0F1B62F6116Bc7ca",
		chainId: 1,
		decimals: 18,
		name: "Beyond Finance",
		symbol: "BYN"
	},
	{
		address: "0xb089db4CeBBF0618b295D9DEFC7FEB00f56DA033",
		chainId: 1,
		decimals: 18,
		name: "BYZBIT",
		symbol: "BYT"
	},
	{
		address: "0xAC8Ea871e2d5F4Be618905F36f73c760f8cFDC8E",
		chainId: 1,
		decimals: 18,
		name: "BTC Network Demand",
		symbol: "BYTE"
	},
	{
		address: "0xFF32b6dc663e9AA3Ef61117749C6cCC168100b99",
		chainId: 1,
		decimals: 18,
		name: "Bitcoin Network Dem",
		symbol: "BYTE3"
	},
	{
		address: "0x87F14E9460ceCb789F1B125b2E3e353Ff8ed6fcd",
		chainId: 1,
		decimals: 3,
		name: "Bytus",
		symbol: "BYTS"
	},
	{
		address: "0x2aaD9Dbc82611485a52325923e1187734e951B78",
		chainId: 1,
		decimals: 8,
		name: "BYTZ",
		symbol: "BYTZ"
	},
	{
		address: "0x4375E7aD8A01B8eC3Ed041399f62D9Cd120e0063",
		chainId: 1,
		decimals: 18,
		name: "BitZ Token",
		symbol: "BZ"
	},
	{
		address: "0x6524B87960c2d573AE514fd4181777E7842435d4",
		chainId: 1,
		decimals: 18,
		name: "Benzene",
		symbol: "BZN"
	},
	{
		address: "0xE1Aee98495365fc179699C1bB3E761FA716beE62",
		chainId: 1,
		decimals: 18,
		name: "Bezant",
		symbol: "BZNT"
	},
	{
		address: "0x56d811088235F11C8920698a204A5010a788f4b3",
		chainId: 1,
		decimals: 18,
		name: "bZx Protocol Token",
		symbol: "BZRX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x19062190B1925b5b6689D7073fDfC8c2976EF8Cb",
		chainId: 1,
		decimals: 16,
		name: "Swarm",
		symbol: "BZZ"
	},
	{
		address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
		chainId: 1,
		decimals: 0,
		name: "CryptoPunks",
		symbol: "C",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x000C100050E98C91f9114fa5Dd75CE6869Bf4F53",
		chainId: 1,
		decimals: 18,
		name: "CRYPTO10 Hedged",
		symbol: "C10"
	},
	{
		address: "0x26E75307Fc0C021472fEb8F727839531F112f317",
		chainId: 1,
		decimals: 18,
		name: "CRYPTO20",
		symbol: "C20"
	},
	{
		address: "0x13Ca8eb6405cFbE2eaE5D00207651002083fbc9d",
		chainId: 1,
		decimals: 2,
		name: "CryptoWater",
		symbol: "C2O"
	},
	{
		address: "0xf1a91C7d44768070F711c68f33A7CA25c8D30268",
		chainId: 1,
		decimals: 18,
		name: "Charli3",
		symbol: "C3"
	},
	{
		address: "0xd42debE4eDc92Bd5a3FBb4243e1ecCf6d63A4A5d",
		chainId: 1,
		decimals: 18,
		name: "Carboneum",
		symbol: "C8",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xAE12C5930881c53715B369ceC7606B70d8EB229f",
		chainId: 1,
		decimals: 18,
		name: "Coin98",
		symbol: "C98"
	},
	{
		address: "0xe65cdB6479BaC1e22340E4E755fAE7E509EcD06c",
		chainId: 1,
		decimals: 8,
		name: "cAAVE",
		symbol: "CAAVE"
	},
	{
		address: "0x2029017f38128bFeFaA6C7B9cDd1b680cE8E5c03",
		chainId: 1,
		decimals: 18,
		name: "Candy Protocol",
		symbol: "CAD"
	},
	{
		address: "0xcaDC0acd4B445166f12d2C07EAc6E2544FbE2Eef",
		chainId: 1,
		decimals: 18,
		name: "CAD Coin",
		symbol: "CADC"
	},
	{
		address: "0x7d4b8Cce0591C9044a22ee543533b72E976E36C3",
		chainId: 1,
		decimals: 18,
		name: "Change",
		symbol: "CAG"
	},
	{
		address: "0x3C6A7aB47B5F058Be0e7C7fE1A4b7925B8aCA40e",
		chainId: 1,
		decimals: 18,
		name: "Cajutel",
		symbol: "CAJ"
	},
	{
		address: "0xB8fA12f8409DA31A4fc43D15c4c78C33d8213B9B",
		chainId: 1,
		decimals: 18,
		name: "CaliCoin",
		symbol: "CALI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBbe761EA1447A20b75aA485b7BCad4837415d7D7",
		chainId: 1,
		decimals: 18,
		name: "Global Crypto Allia",
		symbol: "CALL"
	},
	{
		address: "0xdc8092AaF83e00Ebf9B01A2e90b7B7eF867ba503",
		chainId: 1,
		decimals: 4,
		name: "Calvin",
		symbol: "CALVIN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA809CeDeE9B61956c768EAa10272dd5E0FD1A985",
		chainId: 1,
		decimals: 4,
		name: "CAMI",
		symbol: "CAMI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE9E73E1aE76D17A16cC53E3e87a9a7dA78834d37",
		chainId: 1,
		decimals: 18,
		name: "Camp",
		symbol: "CAMP"
	},
	{
		address: "0x1d462414fe14cf489c7A21CaC78509f4bF8CD7c0",
		chainId: 1,
		decimals: 6,
		name: "CanYaCoin",
		symbol: "CAN"
	},
	{
		address: "0x917FD2f7378FF479419dCB56C5cbB445fBbF902A",
		chainId: 1,
		decimals: 10,
		name: "Coinwaycoin",
		symbol: "CAN"
	},
	{
		address: "0x50eb346Fc29a80d97563a50146c3FcF9423B5538",
		chainId: 1,
		decimals: 18,
		name: "Skull Candy Shards",
		symbol: "CANDY"
	},
	{
		address: "0x540D3087B21F31F9A810385c94627a067cfD0b08",
		chainId: 1,
		decimals: 18,
		name: "Crypto Candy",
		symbol: "CANDY"
	},
	{
		address: "0xEDA6eFE5556e134Ef52f2F858aa1e81c84CDA84b",
		chainId: 1,
		decimals: 18,
		name: "Capital finance",
		symbol: "CAP"
	},
	{
		address: "0x43044f861ec040DB59A7e324c40507adDb673142",
		chainId: 1,
		decimals: 18,
		name: "Cap",
		symbol: "CAP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x04F2E7221fdb1B52A68169B25793E51478fF0329",
		chainId: 1,
		decimals: 2,
		name: "Cappasity",
		symbol: "CAPP"
	},
	{
		address: "0x11613b1f840bb5A40F8866d857e24DA126B79D73",
		chainId: 1,
		decimals: 2,
		name: "Cappasity",
		symbol: "CAPP"
	},
	{
		address: "0x2E9C861713A8CbD4aCA72a832F347b9520EDBB90",
		chainId: 1,
		decimals: 18,
		name: "Crypto Application",
		symbol: "CAPP"
	},
	{
		address: "0x03Be5C903c727Ee2C8C4e9bc0AcC860Cca4715e2",
		chainId: 1,
		decimals: 18,
		name: "Ternoa",
		symbol: "CAPS"
	},
	{
		address: "0x423e4322CDDa29156b49a17dfbd2aCC4b280600D",
		chainId: 1,
		decimals: 9,
		name: "Car Sharing Community",
		symbol: "CAR"
	},
	{
		address: "0x4D9e23a3842fE7Eb7682B9725cF6c507C424A41B",
		chainId: 1,
		decimals: 18,
		name: "CarBlock",
		symbol: "CAR (CarBlock)"
	},
	{
		address: "0xA517a46Baad6B054A76bD19c46844f717fe69fea",
		chainId: 1,
		decimals: 8,
		name: "CarbCoin",
		symbol: "CARB"
	},
	{
		address: "0x2108E62D335Bbdc89eC3E9d8582F18DCFB0cDFf4",
		chainId: 1,
		decimals: 8,
		name: "CARCO",
		symbol: "CARCO"
	},
	{
		address: "0x1ed2B1eaEd8e968bc36EB90a914660A71827A5E9",
		chainId: 1,
		decimals: 0,
		name: "Cardstack Token",
		symbol: "CARD"
	},
	{
		address: "0x954b890704693af242613edEf1B603825afcD708",
		chainId: 1,
		decimals: 18,
		name: "Cardstack",
		symbol: "CARD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB07ec2c28834B889b1CE527Ca0F19364cD38935c",
		chainId: 1,
		decimals: 18,
		name: "Cardstack Token",
		symbol: "CARD"
	},
	{
		address: "0xD6F7dB7dB116170ecb1c3b35F12c1E693bA70586",
		chainId: 1,
		decimals: 18,
		name: "CARD Vault  NFTX",
		symbol: "CARD"
	},
	{
		address: "0x3d6F0DEa3AC3C607B3998e6Ce14b6350721752d9",
		chainId: 1,
		decimals: 18,
		name: "Cardstarter",
		symbol: "CARDS"
	},
	{
		address: "0xbF18F246B9301F231e9561B35A3879769BB46375",
		chainId: 1,
		decimals: 18,
		name: "Token CARE",
		symbol: "CARE"
	},
	{
		address: "0x884DDBb5DC6c2cEf77d3E74c6CcCa315797d655B",
		chainId: 1,
		decimals: 18,
		name: "Carnomaly",
		symbol: "CARR"
	},
	{
		address: "0x5C8C8D560048F34E5f7f8ad71f2f81a89DBd273e",
		chainId: 1,
		decimals: 18,
		name: "CryptoArt Ai",
		symbol: "CART"
	},
	{
		address: "0x779492d3644dDF4495Aa2d80C468E1B7be6AF1d2",
		chainId: 1,
		decimals: 2,
		name: "CAS Coin",
		symbol: "CAS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe8780B48bdb05F928697A5e8155f672ED91462F7",
		chainId: 1,
		decimals: 18,
		name: "Cashaa",
		symbol: "CAS"
	},
	{
		address: "0x1234567461d3f8Db7496581774Bd869C83D51c93",
		chainId: 1,
		decimals: 18,
		name: "BitClave",
		symbol: "CAT"
	},
	{
		address: "0x56ba2Ee7890461f463F7be02aAC3099f6d5811A8",
		chainId: 1,
		decimals: 18,
		name: "BlockCAT",
		symbol: "CAT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x56015BBE3C01fE05bc30A8a9a9Fd9A88917e7dB3",
		chainId: 1,
		decimals: 18,
		name: "Cat Token",
		symbol: "CAT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa42F266684ac2aD6ecb00df95b1c76EFbb6f136c",
		chainId: 1,
		decimals: 18,
		name: "Cash Tech",
		symbol: "CATE"
	},
	{
		address: "0x8293bBd92C42608B20af588620a76128A33e4De9",
		chainId: 1,
		decimals: 6,
		name: "CATCOIN",
		symbol: "CATS"
	},
	{
		address: "0x68e14bb5A45B9681327E16E528084B9d962C1a39",
		chainId: 1,
		decimals: 18,
		name: "CATs (BitClave)_Old",
		symbol: "CATs (BitClave)_Old"
	},
	{
		address: "0x6E605c269E0C92e70BEeB85486f1fC550f9380BD",
		chainId: 1,
		decimals: 18,
		name: "Catex Token",
		symbol: "CATT"
	},
	{
		address: "0xC7743bf0B300Ec041E704Cc34d4f43050942099E",
		chainId: 1,
		decimals: 18,
		name: "CAT trade Protocol",
		symbol: "CATX"
	},
	{
		address: "0x456D8f0D25A4e787eE60c401F8B963a465148f70",
		chainId: 1,
		decimals: 9,
		name: "Cavapoo",
		symbol: "CAVA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x24eA9c1cfD77A8DB3fB707F967309cF013CC1078",
		chainId: 1,
		decimals: 18,
		name: "Excavo Finance",
		symbol: "CAVO"
	},
	{
		address: "0xA5E412ba6FcA1e07b15dEFcaA4236Ff7B5A7f086",
		chainId: 1,
		decimals: 18,
		name: "Crypto Bank",
		symbol: "CBANK"
	},
	{
		address: "0x6C8c6b02E7b2BE14d4fA6022Dfd6d75921D90E4E",
		chainId: 1,
		decimals: 8,
		name: "Compound BAT",
		symbol: "cBAT",
		extensions: {
			color: "#9669ED",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x26DB5439F651CAF491A87d48799dA81F191bDB6b",
		chainId: 1,
		decimals: 8,
		name: "CBC network",
		symbol: "CBC"
	},
	{
		address: "0x790bFaCaE71576107C068f494c8A6302aea640cb",
		chainId: 1,
		decimals: 18,
		name: "CryptoBossCoin",
		symbol: "CBC"
	},
	{
		address: "0x35dd2ebf20746C6e658fac75cd80D4722fae62f6",
		chainId: 1,
		decimals: 18,
		name: "CryptoBet",
		symbol: "CBET"
	},
	{
		address: "0x05C3617cBf1304b9260AA61ec960F115D67beCEA",
		chainId: 1,
		decimals: 18,
		name: "Cubrix",
		symbol: "CBIX"
	},
	{
		address: "0x122f96D596384885B54BCcdddF2125018c421d83",
		chainId: 1,
		decimals: 18,
		name: "Cubiex",
		symbol: "CBIX"
	},
	{
		address: "0xCf8f9555D55CE45a3A33a81D6eF99a2a2E71Dee2",
		chainId: 1,
		decimals: 18,
		name: "CBI Index 7",
		symbol: "CBIX7"
	},
	{
		address: "0xD85a6Ae55a7f33B0ee113C234d2EE308EdeAF7fD",
		chainId: 1,
		decimals: 18,
		name: "Cobak Token",
		symbol: "CBK"
	},
	{
		address: "0x87761e886399EF8e1624cb0DB3230B075a322c88",
		chainId: 1,
		decimals: 18,
		name: "Crossing the Yellow",
		symbol: "CBK"
	},
	{
		address: "0x95eFD1Fe6099F65a7ED524DEF487483221094947",
		chainId: 1,
		decimals: 18,
		name: "CryptoBonusMiles",
		symbol: "CBM"
	},
	{
		address: "0x6F4ee03Ca6c942c9397D2ba5f8F83eA58f918f47",
		chainId: 1,
		decimals: 18,
		name: "CashBackPro",
		symbol: "CBP"
	},
	{
		address: "0x4Ba012f6e411a1bE55b98E9E62C3A4ceb16eC88B",
		chainId: 1,
		decimals: 18,
		name: "Cybercoin",
		symbol: "CBR"
	},
	{
		address: "0xA6FA6531acDf1f9F96EDdD66a0F9481E35c2e42A",
		chainId: 1,
		decimals: 6,
		name: "CryptoBRL",
		symbol: "CBRL"
	},
	{
		address: "0xD4a80224350528b7c0aE8C325A0B5778D92FD86E",
		chainId: 1,
		decimals: 18,
		name: "Crypto Bits",
		symbol: "CBS3"
	},
	{
		address: "0x7d4B1d793239707445305D8d2456D2c735F6B25B",
		chainId: 1,
		decimals: 18,
		name: "BlockSwap Network",
		symbol: "CBSN"
	},
	{
		address: "0x076C97e1c869072eE22f8c91978C99B4bcB02591",
		chainId: 1,
		decimals: 18,
		name: "CommerceBlock",
		symbol: "CBT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3Ca6B185285684E14f925179992387fB4Ef90aC7",
		chainId: 1,
		decimals: 18,
		name: "Cryptocurrency Busi",
		symbol: "CBT"
	},
	{
		address: "0xfA93660C3f6a848556Bb8E265f994160A1F2B289",
		chainId: 1,
		decimals: 18,
		name: "Community Business",
		symbol: "CBT"
	},
	{
		address: "0xaf5f584d79701d5BDc9CA045E66ae130b67A68ad",
		chainId: 1,
		decimals: 18,
		name: "CryBet",
		symbol: "CBT"
	},
	{
		address: "0xcEf46305D096fa876Dd23048bf80F9345282e3fc",
		chainId: 1,
		decimals: 0,
		name: "Banque Universal",
		symbol: "CBU"
	},
	{
		address: "0x0d2BB9D68dD4451A09ec94C05E20Bd395022bd8e",
		chainId: 1,
		decimals: 2,
		name: "CRYPTOBUCKS",
		symbol: "CBUCKS"
	},
	{
		address: "0x15c9DD08Fb16331B9749a8d7d16BCd71c985f190",
		chainId: 1,
		decimals: 18,
		name: "CC",
		symbol: "CC"
	},
	{
		address: "0xb7fbFf4Ce5200215c690cc95855e5d6C5236Ee9f",
		chainId: 1,
		decimals: 18,
		name: "CCSwap",
		symbol: "CC"
	},
	{
		address: "0x9e547061A345015869D26C7B6Ee4aB5b63424441",
		chainId: 1,
		decimals: 18,
		name: "Cryptocart",
		symbol: "CC"
	},
	{
		address: "0x17aC188e09A7890a1844E5E65471fE8b0CcFadF3",
		chainId: 1,
		decimals: 18,
		name: "Cryptocurrency Top",
		symbol: "CC10"
	},
	{
		address: "0xc166038705FFBAb3794185b3a9D925632A1DF37D",
		chainId: 1,
		decimals: 18,
		name: "Coal Coin",
		symbol: "CC3"
	},
	{
		address: "0xBE11eEb186e624b8f26A5045575a1340E4054552",
		chainId: 1,
		decimals: 18,
		name: "CCC (ICONOMI)",
		symbol: "CCC"
	},
	{
		address: "0x28577A6d31559bd265Ce3ADB62d0458550F7b8a7",
		chainId: 1,
		decimals: 18,
		name: "CryptoCrashCourse",
		symbol: "CCC (CryptoCrashCourse)"
	},
	{
		address: "0x378903a03FB2C3AC76BB52773e3CE11340377A32",
		chainId: 1,
		decimals: 18,
		name: "Clipper Coin",
		symbol: "CCCX"
	},
	{
		address: "0xd348e07A2806505B856123045d27aeeD90924b50",
		chainId: 1,
		decimals: 8,
		name: "Christ Coin",
		symbol: "CCLC"
	},
	{
		address: "0xBc6669E7914a2b327Ae428184086d8Ac88d74EfC",
		chainId: 1,
		decimals: 18,
		name: "Car Coin",
		symbol: "CCM"
	},
	{
		address: "0x17B26400621695c2D8C2D8869f6259E82D7544c4",
		chainId: 1,
		decimals: 18,
		name: "Custom contract net",
		symbol: "CCN"
	},
	{
		address: "0x679BADc551626e01B23CeecEFBc9B877EA18fc46",
		chainId: 1,
		decimals: 18,
		name: "Ccore",
		symbol: "CCO"
	},
	{
		address: "0x70e36f6BF80a52b3B46b3aF8e106CC0ed743E8e4",
		chainId: 1,
		decimals: 8,
		name: "cCOMP",
		symbol: "CCOMP"
	},
	{
		address: "0x315cE59FAFd3A8d562b7Ec1C8542382d2710b06c",
		chainId: 1,
		decimals: 18,
		name: "CacaoShares",
		symbol: "CCS"
	},
	{
		address: "0x336F646F87D9f6bC6Ed42Dd46E8b3fD9DbD15C22",
		chainId: 1,
		decimals: 18,
		name: "Crystal Clear",
		symbol: "CCT"
	},
	{
		address: "0x0F00c8dd21dA51bc6A6ac07F491A7dBE69746f16",
		chainId: 1,
		decimals: 18,
		name: "Clap Clap Token",
		symbol: "CCT"
	},
	{
		address: "0x5d3a536E4D6DbD6114cc1Ead35777bAB948E3643",
		chainId: 1,
		decimals: 8,
		name: "Compound DAI",
		symbol: "cDAI",
		extensions: {
			color: "#9669ED",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x8a95ca448A52C0ADf0054bB3402dC5e09CD6B232",
		chainId: 1,
		decimals: 18,
		name: "Confideal",
		symbol: "CDL"
	},
	{
		address: "0xcb17cD357c7acD594717D899ecb9df540F633F27",
		chainId: 1,
		decimals: 18,
		name: "CoinDeal Token",
		symbol: "CDL"
	},
	{
		address: "0x5A9F5992085E8a25A45716Cb6F8fF5b57a05d332",
		chainId: 1,
		decimals: 8,
		name: "Communication Devel",
		symbol: "CDR"
	},
	{
		address: "0xDe25486CCb4588Ce5D9fB188fb6Af72E768a466a",
		chainId: 1,
		decimals: 18,
		name: "Contraction Dynamic",
		symbol: "CDSD"
	},
	{
		address: "0x177d39AC676ED1C67A2b268AD7F1E58826E5B0af",
		chainId: 1,
		decimals: 18,
		name: "Blox",
		symbol: "CDT",
		extensions: {
			color: "#272731",
			isVerified: true
		}
	},
	{
		address: "0x2cb101d7dA0ebaA57D3F2fEf46D7FFB7BB64592B",
		chainId: 1,
		decimals: 0,
		name: "Carbon Dollar X",
		symbol: "CDX"
	},
	{
		address: "0x6fFF3806Bbac52A20e0d79BC538d527f6a22c96b",
		chainId: 1,
		decimals: 18,
		name: "Commodity Ad Network",
		symbol: "CDX"
	},
	{
		address: "0x8F12Dfc7981DE79A8A34070a732471f2D335EecE",
		chainId: 1,
		decimals: 18,
		name: "Crypto Excellence",
		symbol: "CE"
	},
	{
		address: "0xf256f3ac4176126F55af7c6E25fA5F3Cdf518b38",
		chainId: 1,
		decimals: 18,
		name: "CEDARS",
		symbol: "CEDS"
	},
	{
		address: "0xb056c38f6b7Dc4064367403E26424CD2c60655e1",
		chainId: 1,
		decimals: 18,
		name: "CEEK Smart VR Token",
		symbol: "CEEK"
	},
	{
		address: "0xaaAEBE6Fe48E54f431b0C390CfaF0b017d09D42d",
		chainId: 1,
		decimals: 4,
		name: "Celsius",
		symbol: "CEL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x19B58d95929586Ad750893CAad43E77aa6e8Ce9E",
		chainId: 1,
		decimals: 8,
		name: "CelCoin",
		symbol: "CELC"
	},
	{
		address: "0xA3e53fe692eEda3502cf5CcfD8a535E1f93d23Dd",
		chainId: 1,
		decimals: 18,
		name: "Celeb",
		symbol: "CELEB"
	},
	{
		address: "0x26c8AFBBFE1EBaca03C2bB082E69D0476Bffe099",
		chainId: 1,
		decimals: 18,
		name: "Cellframe",
		symbol: "CELL"
	},
	{
		address: "0x4F9254C83EB525f9FCf346490bbb3ed28a81C667",
		chainId: 1,
		decimals: 18,
		name: "Celer Network",
		symbol: "CELR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x99a3a5333b4Eb80192149F9eDd42d1D57AC591ee",
		chainId: 1,
		decimals: 18,
		name: "CELT",
		symbol: "CELT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0bC61DdED5F6710c637cf8288Eb6058766ce1921",
		chainId: 1,
		decimals: 18,
		name: "Coinsuper Ecosystem",
		symbol: "CEN"
	},
	{
		address: "0x1122B6a0E00DCe0563082b6e2953f3A943855c1F",
		chainId: 1,
		decimals: 18,
		name: "Centrality",
		symbol: "CENNZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x504cDe95dBC5d90d09B802F43B371971adbEcf79",
		chainId: 1,
		decimals: 18,
		name: "Centralex",
		symbol: "CENX"
	},
	{
		address: "0xF660cA1e228e7BE1fA8B4f5583145E31147FB577",
		chainId: 1,
		decimals: 18,
		name: "DICE Money Dicet",
		symbol: "CET"
	},
	{
		address: "0x081F67aFA0cCF8c7B17540767BBe95DF2bA8D97F",
		chainId: 1,
		decimals: 18,
		name: "CoinEx Token",
		symbol: "CET"
	},
	{
		address: "0x4Ddc2D193948926D02f9B1fE9e1daa0718270ED5",
		chainId: 1,
		decimals: 8,
		name: "Compound Ether",
		symbol: "cETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFEbc25f4c5fc3E90a7eFaE0b4d436A77c9e131B3",
		chainId: 1,
		decimals: 18,
		name: "Cezo",
		symbol: "CEZ"
	},
	{
		address: "0x5Dff89a2caa4D76bc286F74D67Bd718eb834da61",
		chainId: 1,
		decimals: 18,
		name: "CryptFillCoin",
		symbol: "CFC"
	},
	{
		address: "0x12FEF5e57bF45873Cd9B62E9DBd7BFb99e32D73e",
		chainId: 1,
		decimals: 18,
		name: "Cofound.it",
		symbol: "CFI"
	},
	{
		address: "0x63b4f3e3fa4e438698CE330e365E831F7cCD1eF4",
		chainId: 1,
		decimals: 18,
		name: "CyberFi",
		symbol: "CFI"
	},
	{
		address: "0xCD6Adc6b8Bd396E2D53cCD7D7257B4De55bE4fbe",
		chainId: 1,
		decimals: 18,
		name: "CFL365 Finance",
		symbol: "CFL365"
	},
	{
		address: "0x8994C21d588106ba289e014331A1D74491894cEe",
		chainId: 1,
		decimals: 8,
		name: "Chain Flowers",
		symbol: "CFLO"
	},
	{
		address: "0xB8981aCbBF7DA95A8fF6Df79Aab935cE63434fC8",
		chainId: 1,
		decimals: 6,
		name: "Cfoforum Token",
		symbol: "CFO"
	},
	{
		address: "0x9B683d81B8334325bCC1802D47DE65571993Fe89",
		chainId: 1,
		decimals: 8,
		name: "CoinBene Future Tok",
		symbol: "CFT"
	},
	{
		address: "0x6956983F8B3Ce173B4AB84361AA0ad52f38D936f",
		chainId: 1,
		decimals: 8,
		name: "Crafty Token",
		symbol: "CFTY"
	},
	{
		address: "0x0557E0d15aeC0b9026dD17aA874fDf7d182A2cEB",
		chainId: 1,
		decimals: 6,
		name: "CFX Quantum",
		symbol: "CFXQ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x368BF9F1A1CA767935E39F20439D9041707E2634",
		chainId: 1,
		decimals: 18,
		name: "Chainflix",
		symbol: "CFXT"
	},
	{
		address: "0x2858eD0225e9aA0638CCd9B552bEE2712426FA24",
		chainId: 1,
		decimals: 18,
		name: "Crypto Global Bank",
		symbol: "CGB"
	},
	{
		address: "0xcbb20D755ABAD34cb4a9b5fF6Dd081C76769f62e",
		chainId: 1,
		decimals: 6,
		name: "Cash Global Coin",
		symbol: "CGC"
	},
	{
		address: "0x1fE24F25b1Cf609B9c4e7E12D802e3640dFA5e43",
		chainId: 1,
		decimals: 18,
		name: "Chain Guardians",
		symbol: "CGG"
	},
	{
		address: "0xAdA0A1202462085999652Dc5310a7A9e2BF3eD42",
		chainId: 1,
		decimals: 18,
		name: "CoinShares Gold and",
		symbol: "CGI"
	},
	{
		address: "0xF5238462E7235c7B62811567E63Dd17d12C2EAA0",
		chainId: 1,
		decimals: 8,
		name: "CACHE Gold",
		symbol: "CGT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF56b164efd3CFc02BA739b719B6526A6FA1cA32a",
		chainId: 1,
		decimals: 18,
		name: "Curio Governance",
		symbol: "CGT"
	},
	{
		address: "0x19F4a2f8E21915376F1429C26a3A9B9b1db5FF5A",
		chainId: 1,
		decimals: 18,
		name: "Chad Link Set",
		symbol: "CHADLINK"
	},
	{
		address: "0x69692D3345010a207b759a7D1af6fc7F38b35c5E",
		chainId: 1,
		decimals: 18,
		name: "CHADS VC",
		symbol: "CHADS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x06AF07097C9Eeb7fD685c692751D5C66dB49c215",
		chainId: 1,
		decimals: 18,
		name: "Chai",
		symbol: "CHAI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC4C2614E694cF534D407Ee49F8E44D125E4681c4",
		chainId: 1,
		decimals: 18,
		name: "Chain Games",
		symbol: "CHAIN"
	},
	{
		address: "0x1cC0744C5106bB47A61C4E41F517CB6F1c49b547",
		chainId: 1,
		decimals: 18,
		name: "Chalice Finance",
		symbol: "CHAL"
	},
	{
		address: "0xB53dE031602Cd825febe9F2EEDF962cd8CC3805d",
		chainId: 1,
		decimals: 18,
		name: "ZKCHAOS",
		symbol: "CHAOS"
	},
	{
		address: "0x1d37986F252d0e349522EA6C3B98Cb935495E63E",
		chainId: 1,
		decimals: 18,
		name: "ChartEx",
		symbol: "CHART",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x442Bc47357919446eAbC18C7211E57a13d983469",
		chainId: 1,
		decimals: 18,
		name: "BeeChat",
		symbol: "CHAT"
	},
	{
		address: "0x24810d836F6D60a7EE499622b7103Ec769E81E3b",
		chainId: 1,
		decimals: 18,
		name: "ChunghopToken",
		symbol: "CHC"
	},
	{
		address: "0x4eCB692B0fEDeCD7B486b4c99044392784877E8C",
		chainId: 1,
		decimals: 4,
		name: "Cherry",
		symbol: "CHERRY"
	},
	{
		address: "0x5f75112bBB4E1aF516fBE3e21528C63DA2B6a1A5",
		chainId: 1,
		decimals: 18,
		name: "Chess Coin",
		symbol: "CHESS"
	},
	{
		address: "0x58002A6B6E659A16dE9F02F529B10536E307b0d9",
		chainId: 1,
		decimals: 18,
		name: "Crypto Holding Fran",
		symbol: "CHFT"
	},
	{
		address: "0xC4A86561cb0b7EA1214904f26E6D50FD357C7986",
		chainId: 1,
		decimals: 18,
		name: "Charg Coin",
		symbol: "CHG"
	},
	{
		address: "0x0000000000004946c0e9F43F4Dee607b0eF1fA1c",
		chainId: 1,
		decimals: 0,
		name: "Chi Gastoken by 1inch",
		symbol: "CHI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6DC02164d75651758aC74435806093E421b64605",
		chainId: 1,
		decimals: 8,
		name: "XAYA",
		symbol: "CHI"
	},
	{
		address: "0x26fF6D16549A00BA8b36ce3159b5277E6e798d18",
		chainId: 1,
		decimals: 18,
		name: "Chihua Token",
		symbol: "CHIHUA"
	},
	{
		address: "0x910985Ffa7101Bf5801DD2e91555c465EFD9AAB3",
		chainId: 1,
		decimals: 9,
		name: "Chubby Inu",
		symbol: "CHINU"
	},
	{
		address: "0x538a151Dd910C1D1227719bd400D6C4f99ea06d0",
		chainId: 1,
		decimals: 18,
		name: "Cryptochrome",
		symbol: "CHM"
	},
	{
		address: "0x84679bc467DC6c2c40ab04538813AfF3796351f1",
		chainId: 1,
		decimals: 18,
		name: "Chonk",
		symbol: "CHONK"
	},
	{
		address: "0x646707246D7d5C2a86d7206f41CA8199ea9CED69",
		chainId: 1,
		decimals: 18,
		name: "Porkchop",
		symbol: "CHOP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x925f2C11b99c1A4c46606898ee91eD3D450cFedA",
		chainId: 1,
		decimals: 9,
		name: "Chow Chow Finance",
		symbol: "CHOW"
	},
	{
		address: "0xf3db7560E820834658B590C96234c333Cd3D5E5e",
		chainId: 1,
		decimals: 18,
		name: "CoinPoker",
		symbol: "CHP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD7d6ab522fA41caae78F6edeb46A14954aE0c772",
		chainId: 1,
		decimals: 18,
		name: "Chipz",
		symbol: "CHPZ"
	},
	{
		address: "0x8A2279d4A90B6fe1C4B30fa660cC9f926797bAA2",
		chainId: 1,
		decimals: 6,
		name: "Chromia",
		symbol: "CHR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb41380174d0B06181513A5677b60200b93b5Efb4",
		chainId: 1,
		decimals: 18,
		name: "Chainsquare",
		symbol: "CHS"
	},
	{
		address: "0xba9d4199faB4f26eFE3551D490E3821486f135Ba",
		chainId: 1,
		decimals: 8,
		name: "SwissBorg",
		symbol: "CHSB"
	},
	{
		address: "0x3277dd536471a3cBEB0c9486aCad494C95A31E73",
		chainId: 1,
		decimals: 18,
		name: "CoinHe Token",
		symbol: "CHT"
	},
	{
		address: "0x19fAb8f7dfFfF38268644eAEBd3d538F68036000",
		chainId: 1,
		decimals: 18,
		name: "Chronic Token",
		symbol: "CHT"
	},
	{
		address: "0x1460a58096d80a50a2F1f956DDA497611Fa4f165",
		chainId: 1,
		decimals: 18,
		name: "WeOwn",
		symbol: "CHX"
	},
	{
		address: "0x35A23BC27c345b36DeE700a256F69C6334030971",
		chainId: 1,
		decimals: 9,
		name: "Concern Poverty Cha",
		symbol: "CHY"
	},
	{
		address: "0x3506424F91fD33084466F402d5D97f05F8e3b4AF",
		chainId: 1,
		decimals: 18,
		name: "Chiliz",
		symbol: "CHZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4599836c212CD988EAccc54C820Ee9261cdaAC71",
		chainId: 1,
		decimals: 18,
		name: "Cryptid",
		symbol: "CID"
	},
	{
		address: "0x00380143129167395e8B4F0a35EDc1bC60E7cE65",
		chainId: 1,
		decimals: 8,
		name: "Clorigin",
		symbol: "CIG"
	},
	{
		address: "0x83eB94cB563146a42Fe0a8b3D051F2387A7FB81f",
		chainId: 1,
		decimals: 8,
		name: "Cipher Core Token",
		symbol: "CIPHC"
	},
	{
		address: "0x37fE0f067FA808fFBDd12891C0858532CFE7361d",
		chainId: 1,
		decimals: 18,
		name: "Civilization",
		symbol: "CIV"
	},
	{
		address: "0x6393E822874728f8Afa7e1C9944E417D37CA5878",
		chainId: 1,
		decimals: 18,
		name: "Cryptoindex com 100",
		symbol: "CIX100"
	},
	{
		address: "0xf75fBfa2f681860B9A6D19FC3FF3D34CB322E2D6",
		chainId: 1,
		decimals: 18,
		name: "CRYPTORIYA",
		symbol: "CIYA"
	},
	{
		address: "0x3abdfF32F76b42E7635bdb7e425f0231A5F3aB17",
		chainId: 1,
		decimals: 18,
		name: "ConnectJob",
		symbol: "CJT"
	},
	{
		address: "0x06012c8cf97BEaD5deAe237070F9587f8E7A266d",
		chainId: 1,
		decimals: 0,
		name: "Crypto Kitties",
		symbol: "CK"
	},
	{
		address: "0xe81D72D14B1516e68ac3190a46C93302Cc8eD60f",
		chainId: 1,
		decimals: 18,
		name: "Coinlancer",
		symbol: "CL"
	},
	{
		address: "0xF7269a10E85d4aa8282529516cf86847748Da2Bf",
		chainId: 1,
		decimals: 18,
		name: "Candela Coin",
		symbol: "CLA"
	},
	{
		address: "0xb1c1Cb8C7c1992dba24e628bF7d38E71daD46aeB",
		chainId: 1,
		decimals: 18,
		name: "Cloudbric",
		symbol: "CLB"
	},
	{
		address: "0x951301A2BBCe3d357785Ba1e13Ec8f42322252b8",
		chainId: 1,
		decimals: 8,
		name: "Cifculation",
		symbol: "CLC"
	},
	{
		address: "0x0Def8d8addE14c9eF7c2a986dF3eA4Bd65826767",
		chainId: 1,
		decimals: 18,
		name: "DefiCliq",
		symbol: "CLIQ"
	},
	{
		address: "0x3dC9a42fa7Afe57BE03c58fD7F4411b1E466C508",
		chainId: 1,
		decimals: 18,
		name: "CryptoLiveLeak",
		symbol: "CLL"
	},
	{
		address: "0x4162178B78D6985480A308B2190EE5517460406D",
		chainId: 1,
		decimals: 18,
		name: "Colu Local Network",
		symbol: "CLN"
	},
	{
		address: "0xa10ae543dB5D967a73E9Abcc69c81a18A7Fc0A78",
		chainId: 1,
		decimals: 18,
		name: "BLOCKCLOUT",
		symbol: "CLOUT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7FCE2856899a6806eeEf70807985fc7554C66340",
		chainId: 1,
		decimals: 9,
		name: "CryptoLending",
		symbol: "CLP"
	},
	{
		address: "0x2396FBC0e2E3AE4B7206EbDb5706e2a5920349CB",
		chainId: 1,
		decimals: 18,
		name: "Color Platform",
		symbol: "CLR"
	},
	{
		address: "0x675BBC7514013E2073DB7a919F6e4cbeF576de37",
		chainId: 1,
		decimals: 18,
		name: "Coldstack",
		symbol: "CLS"
	},
	{
		address: "0x2001f2A0Cf801EcFda622f6C28fb6E10d803D969",
		chainId: 1,
		decimals: 8,
		name: "CoinLoan",
		symbol: "CLT"
	},
	{
		address: "0xe5Db2c3E2CEFf742E5306bCfc12622f5e2d14e98",
		chainId: 1,
		decimals: 9,
		name: "ClienteleCoin",
		symbol: "CLT"
	},
	{
		address: "0xa69f7a10dF90C4D6710588Bc18ad9bF08081f545",
		chainId: 1,
		decimals: 18,
		name: "Cexlt",
		symbol: "CLT"
	},
	{
		address: "0x22222C03318440305aC3e8a7820563d6A9FD777F",
		chainId: 1,
		decimals: 6,
		name: "Clover",
		symbol: "CLV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x80C62FE4487E1351b47Ba49809EBD60ED085bf52",
		chainId: 1,
		decimals: 18,
		name: "Clover Finance",
		symbol: "CLV"
	},
	{
		address: "0xC52e23194476B1dD39408cB0B9D935dA8e6Db3d6",
		chainId: 1,
		decimals: 18,
		name: "Clever DeFi",
		symbol: "CLVA"
	},
	{
		address: "0x9f8F7EA504588a58B8b24b832B5d25a4Aeb4706F",
		chainId: 1,
		decimals: 18,
		name: "Celeum",
		symbol: "CLX"
	},
	{
		address: "0x3EDD235C3E840C1F29286B2e39370a255C7B6fdb",
		chainId: 1,
		decimals: 8,
		name: "CMBToken",
		symbol: "CMBT"
	},
	{
		address: "0x7e667525521cF61352e2E01b50FaaaE7Df39749a",
		chainId: 1,
		decimals: 18,
		name: "CryptoMart",
		symbol: "CMC"
	},
	{
		address: "0x47bc01597798DCD7506DCCA36ac4302fc93a8cFb",
		chainId: 1,
		decimals: 8,
		name: "Crowd Machine",
		symbol: "CMCT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb2c19bA4D5246D4c587a62F0dfE9f78083568455",
		chainId: 1,
		decimals: 18,
		name: "CMDX",
		symbol: "CMDX"
	},
	{
		address: "0x1190074795DAD0E61b61270De48e108427f8f817",
		chainId: 1,
		decimals: 9,
		name: "CoinMerge",
		symbol: "CMERGE"
	},
	{
		address: "0x5fd1fFA1d817e2BC1E594081A9f883A8707e959c",
		chainId: 1,
		decimals: 8,
		name: "CMGCoin",
		symbol: "CMG"
	},
	{
		address: "0x68CFb82Eacb9f198d508B514d898a403c449533E",
		chainId: 1,
		decimals: 18,
		name: "Credmark",
		symbol: "CMK"
	},
	{
		address: "0x95b4eF2869eBD94BEb4eEE400a99824BF5DC325b",
		chainId: 1,
		decimals: 8,
		name: "cMKR",
		symbol: "CMKR"
	},
	{
		address: "0x9f20Ed5f919DC1C1695042542C13aDCFc100dcab",
		chainId: 1,
		decimals: 18,
		name: "Component",
		symbol: "CMP"
	},
	{
		address: "0xF83301c5Cd1CCBB86f466A6B3c53316ED2f8465a",
		chainId: 1,
		decimals: 6,
		name: "COMSA",
		symbol: "CMS"
	},
	{
		address: "0xf85fEea2FdD81d51177F6b8F35F0e6734Ce45F5F",
		chainId: 1,
		decimals: 18,
		name: "CyberMiles",
		symbol: "CMT"
	},
	{
		address: "0xEBf2F9E8De960f64ec0fDCDa6Cb282423133347B",
		chainId: 1,
		decimals: 8,
		name: "Canabio",
		symbol: "CNB"
	},
	{
		address: "0xC538143202f3b11382D8606aae90a96b042a19DB",
		chainId: 1,
		decimals: 18,
		name: "Coinsbit Token",
		symbol: "CNB"
	},
	{
		address: "0x54A9ed327F2614316914c3F3a782a77d0AA47AEe",
		chainId: 1,
		decimals: 18,
		name: "Connect",
		symbol: "CNCT"
	},
	{
		address: "0xd4c435F5B09F855C3317c8524Cb1F586E42795fa",
		chainId: 1,
		decimals: 18,
		name: "Cindicator",
		symbol: "CND",
		extensions: {
			color: "#383939",
			isVerified: true
		}
	},
	{
		address: "0xEABB8996eA1662cAd2f7fB715127852cd3262Ae9",
		chainId: 1,
		decimals: 18,
		name: "Connect Financial",
		symbol: "CNFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8e2B4badaC15a4ec8c56020f4Ce60faa7558c052",
		chainId: 1,
		decimals: 18,
		name: "Communifty",
		symbol: "CNFT"
	},
	{
		address: "0x883a158c9b28f8d626ACFCFbE1028f49E70c9D75",
		chainId: 1,
		decimals: 18,
		name: "CNG Casino",
		symbol: "CNG"
	},
	{
		address: "0x6443E507F53b526042d0054867A60a4C0409Cb4B",
		chainId: 1,
		decimals: 18,
		name: "Chainlink NFT Vault",
		symbol: "CNHPD"
	},
	{
		address: "0x00A55375002f3cDa400383F479e7Cd57Bad029A9",
		chainId: 1,
		decimals: 18,
		name: "Conjure",
		symbol: "CNJ"
	},
	{
		address: "0x8713d26637CF49e1b6B4a7Ce57106AaBc9325343",
		chainId: 1,
		decimals: 18,
		name: "Content Neutrality",
		symbol: "CNN"
	},
	{
		address: "0x6c3BE406174349cfa4501654313d97e6a31072e1",
		chainId: 1,
		decimals: 18,
		name: "CNNS",
		symbol: "CNNS"
	},
	{
		address: "0xc21dBEE65D62770953035f0434C532d578a666c9",
		chainId: 1,
		decimals: 18,
		name: "CryptoEnergy",
		symbol: "CNRG"
	},
	{
		address: "0x429876c4a6f89FB470E92456B8313879DF98B63c",
		chainId: 1,
		decimals: 18,
		name: "Cryption Network",
		symbol: "CNT"
	},
	{
		address: "0x0E5f00DA8AAef196a719d045DB89b5DA8F371b32",
		chainId: 1,
		decimals: 18,
		name: "Connectome",
		symbol: "CNTM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x03042482d64577A7bdb282260e2eA4c8a89C064B",
		chainId: 1,
		decimals: 18,
		name: "Centaur",
		symbol: "CNTR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x722F2f3EaC7e9597C73a593f7CF3de33Fbfc3308",
		chainId: 1,
		decimals: 18,
		name: "CoinUs",
		symbol: "CNUS"
	},
	{
		address: "0xE0b7e882C194881C690924cb46154B8241F9145E",
		chainId: 1,
		decimals: 18,
		name: "Cofinex",
		symbol: "CNX"
	},
	{
		address: "0xc541b907478d5CD334C0cbfcB9603b6dac6e9ee3",
		chainId: 1,
		decimals: 18,
		name: "CNYQ Stablecoin by",
		symbol: "CNYQ"
	},
	{
		address: "0xC1965d7D18f37062b18ab3d5D1fE7f69873b30Dd",
		chainId: 1,
		decimals: 18,
		name: "Coinzo Token",
		symbol: "CNZ"
	},
	{
		address: "0xB4b1D2C217EC0776584CE08D3DD98F90EDedA44b",
		chainId: 1,
		decimals: 18,
		name: "Climatecoin",
		symbol: "CO2"
	},
	{
		address: "0x75739d5944534115d7C54ee8C73F186D793BAE02",
		chainId: 1,
		decimals: 18,
		name: "Collective",
		symbol: "CO2"
	},
	{
		address: "0x574B36BceD443338875d171CC377E691f7d4F887",
		chainId: 1,
		decimals: 18,
		name: "CO2Bit",
		symbol: "CO2Bit"
	},
	{
		address: "0xb2F7EB1f2c37645bE61d73953035360e768D81E6",
		chainId: 1,
		decimals: 18,
		name: "Cobinhood",
		symbol: "COB",
		extensions: {
			color: "#13bf99",
			isVerified: true
		}
	},
	{
		address: "0x933DFC5622792b41245aB8313416cAF0ba885aE7",
		chainId: 1,
		decimals: 18,
		name: "CoinBroker",
		symbol: "COBR"
	},
	{
		address: "0x22B6C31c2bEB8f2d0d5373146Eed41Ab9eDe3caf",
		chainId: 1,
		decimals: 8,
		name: "cocktailbar finance",
		symbol: "COC"
	},
	{
		address: "0xc4c7Ea4FAB34BD9fb9a5e1B1a98Df76E26E6407c",
		chainId: 1,
		decimals: 18,
		name: "COCOS BCX",
		symbol: "COCOS"
	},
	{
		address: "0x46b4a7d906F1A943b7744Df23625E63726d79035",
		chainId: 1,
		decimals: 18,
		name: "CODEO TOKEN",
		symbol: "CODEO"
	},
	{
		address: "0x3136eF851592aCf49CA4C825131E364170FA32b3",
		chainId: 1,
		decimals: 18,
		name: "CoinFi",
		symbol: "COFI"
	},
	{
		address: "0x1a23a6BfBAdB59fa563008c0fB7cf96dfCF34Ea1",
		chainId: 1,
		decimals: 18,
		name: "CoFiX",
		symbol: "COFI"
	},
	{
		address: "0xC382e04099A435439725BB40647e2B32dC136806",
		chainId: 1,
		decimals: 18,
		name: "Cogecoin",
		symbol: "COGE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0C91B015AbA6f7B4738dcD36E7410138b29ADC29",
		chainId: 1,
		decimals: 8,
		name: "CoinOil",
		symbol: "COIL"
	},
	{
		address: "0x3936Ad01cf109a36489d93cabdA11cF062fd3d48",
		chainId: 1,
		decimals: 9,
		name: "Coil",
		symbol: "COIL"
	},
	{
		address: "0x5e8F855966D638135a968861E80DdA722291B06d",
		chainId: 1,
		decimals: 18,
		name: "Coinvest V2 Token",
		symbol: "COIN"
	},
	{
		address: "0xeb547ed1D8A3Ff1461aBAa7F0022FED4836E00A4",
		chainId: 1,
		decimals: 18,
		name: "Coinvest V3 Token",
		symbol: "COIN"
	},
	{
		address: "0x87b008E57F640D94Ee44Fd893F0323AF933F9195",
		chainId: 1,
		decimals: 18,
		name: "Coin Artist",
		symbol: "COIN"
	},
	{
		address: "0xE61fDAF474Fac07063f2234Fb9e60C1163Cfa850",
		chainId: 1,
		decimals: 18,
		name: "Coin",
		symbol: "COIN"
	},
	{
		address: "0xA3a3F076413A362bB0D69EeA1dC5b0E79C831edC",
		chainId: 1,
		decimals: 18,
		name: "Cocaine Cowboy Shar",
		symbol: "COKE"
	},
	{
		address: "0xC76FB75950536d98FA62ea968E1D6B45ffea2A55",
		chainId: 1,
		decimals: 18,
		name: "Unit Protocol",
		symbol: "COL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x957891C11616D3E0B0A76a76fb42724C382E0eF3",
		chainId: 1,
		decimals: 18,
		name: "Collateral Pay",
		symbol: "COLL"
	},
	{
		address: "0xb3B4431F812A74BdfC148d6bDdfAdEcdC63FC083",
		chainId: 1,
		decimals: 18,
		name: "COLLECTIVE Vault  N",
		symbol: "COLLECTIVE"
	},
	{
		address: "0xC92276872CD1907d2e00B58A81a9bbd275B0a4ba",
		chainId: 1,
		decimals: 18,
		name: "Collateral Pay Gove",
		symbol: "COLLG"
	},
	{
		address: "0x3867EF780a3AFCF1201EF4F2acc6A46e3bd1eb88",
		chainId: 1,
		decimals: 0,
		name: "Color",
		symbol: "COLR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1B4052d98fb1888C2Bf3B8d3b930e0aFf8A910dF",
		chainId: 1,
		decimals: 18,
		name: "Community Token",
		symbol: "COM"
	},
	{
		address: "0xCae838187C1f813Fc3BfAE6387Bf34aeACB5bEF6",
		chainId: 1,
		decimals: 18,
		name: "Commons Earth",
		symbol: "COM"
	},
	{
		address: "0x7C81542ED859A2061538FEE22B6544a235B9557D",
		chainId: 1,
		decimals: 18,
		name: "Combo",
		symbol: "COMB"
	},
	{
		address: "0x7d36cCe46DD2B0D28dde12A859C2ACe4a21E3678",
		chainId: 1,
		decimals: 18,
		name: "Combine finance",
		symbol: "COMB"
	},
	{
		address: "0xfFffFffF2ba8F66D4e51811C5190992176930278",
		chainId: 1,
		decimals: 18,
		name: "Furucombo",
		symbol: "COMBO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA5e99ad202bDd71D3518306Cf4dD163261981af1",
		chainId: 1,
		decimals: 18,
		name: "Community Chain",
		symbol: "COMC"
	},
	{
		address: "0x752Efadc0a7E05ad1BCCcDA22c141D01a75EF1e4",
		chainId: 1,
		decimals: 18,
		name: "CompliFi",
		symbol: "COMFI"
	},
	{
		address: "0x5ab21Ec0bfa0B29545230395e3Adaca7d552C948",
		chainId: 1,
		decimals: 0,
		name: "PUNKS Comic",
		symbol: "COMIC"
	},
	{
		address: "0xc00e94Cb662C3520282E6f5717214004A7f26888",
		chainId: 1,
		decimals: 18,
		name: "Compound",
		symbol: "COMP",
		extensions: {
			color: "#00D395",
			isRainbowCurated: true,
			isVerified: true,
			shadowColor: "#25292E"
		}
	},
	{
		address: "0x4Dd672e77c795844fe3A464eF8eF0FAAe617C8fB",
		chainId: 1,
		decimals: 18,
		name: "CONUN",
		symbol: "CON"
	},
	{
		address: "0x695DB6508D66bF111d8D96aDaFfc5356B7f4581f",
		chainId: 1,
		decimals: 8,
		name: "Coinbene Token",
		symbol: "CONI"
	},
	{
		address: "0xc834Fa996fA3BeC7aAD3693af486ae53D8aA8B50",
		chainId: 1,
		decimals: 18,
		name: "Convergence",
		symbol: "CONV"
	},
	{
		address: "0xFF75CEd57419bcaEBe5F05254983b013B0646eF5",
		chainId: 1,
		decimals: 18,
		name: "Cook",
		symbol: "COOK"
	},
	{
		address: "0x114f1388fAB456c4bA31B1850b244Eedcd024136",
		chainId: 1,
		decimals: 18,
		name: "COOL Vault  NFTX",
		symbol: "COOL"
	},
	{
		address: "0x2f3e054D233c93C59140c0905227c7C607c70cbb",
		chainId: 1,
		decimals: 18,
		name: "CoomCoin",
		symbol: "COOM"
	},
	{
		address: "0x689CF5f8DD09BBB4417514C88909bb64ebA2547D",
		chainId: 1,
		decimals: 18,
		name: "Coop Network",
		symbol: "COOP"
	},
	{
		address: "0x14dFa5CfAaFe89d81d7bf3df4E11eaedA0416618",
		chainId: 1,
		decimals: 18,
		name: "Cops Finance",
		symbol: "COPS"
	},
	{
		address: "0x9C2dc0c3CC2BADdE84B0025Cf4df1c5aF288D835",
		chainId: 1,
		decimals: 18,
		name: "Coreto",
		symbol: "COR"
	},
	{
		address: "0x0077D27Cb82Ff12322987b225BFCE0bB6E8931B4",
		chainId: 1,
		decimals: 18,
		name: "Corra Finance",
		symbol: "CORA"
	},
	{
		address: "0x62359Ed7505Efc61FF1D56fEF82158CcaffA23D7",
		chainId: 1,
		decimals: 18,
		name: "cVault.finance",
		symbol: "CORE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE50006781F435AE43096288334AFd9Ae5Ba50065",
		chainId: 1,
		decimals: 10,
		name: "Corgi Inu",
		symbol: "CORGI"
	},
	{
		address: "0x725B190Bc077FFde17Cf549AA8ba25e298550B18",
		chainId: 1,
		decimals: 2,
		name: "Corrently Invest Token",
		symbol: "CORI"
	},
	{
		address: "0xa456b515303B2Ce344E9d2601f91270f8c2Fea5E",
		chainId: 1,
		decimals: 18,
		name: "Cornichon",
		symbol: "CORN"
	},
	{
		address: "0x3080ec2A6960432F179c66D388099A48E82e2047",
		chainId: 1,
		decimals: 18,
		name: "Popcorn Token",
		symbol: "CORN"
	},
	{
		address: "0x26a604DFFE3ddaB3BEE816097F81d3C4a2A4CF97",
		chainId: 1,
		decimals: 8,
		name: "CorionX",
		symbol: "CORX"
	},
	{
		address: "0x7d3cb11f8c13730C24D01826d8F2005F0e1b348F",
		chainId: 1,
		decimals: 18,
		name: "COS",
		symbol: "COS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x668C50B1c7f46EFFBE3f242687071d7908AAB00A",
		chainId: 1,
		decimals: 9,
		name: "CoShi Inu",
		symbol: "COSHI"
	},
	{
		address: "0xC4Bcd64CB216D49fD3C643A32762F34626b45a1a",
		chainId: 1,
		decimals: 18,
		name: "Cosmo Coin",
		symbol: "COSM"
	},
	{
		address: "0xD1E10C37A27d95D95720291b1Dc6f12F74C71443",
		chainId: 1,
		decimals: 18,
		name: "Cosmo Coin",
		symbol: "COSM"
	},
	{
		address: "0x65292EeadF1426Cd2dF1C4793a3d7519f253913b",
		chainId: 1,
		decimals: 18,
		name: "Coss Token",
		symbol: "COSS"
	},
	{
		address: "0x9e96604445Ec19fFed9a5e8dd7B50a29C899A10C",
		chainId: 1,
		decimals: 18,
		name: "COSS",
		symbol: "COSS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xed64142f7D0a4d94cE0e7Fe45D12f712fe360BD0",
		chainId: 1,
		decimals: 18,
		name: "Cosplay Token",
		symbol: "COT"
	},
	{
		address: "0x5c872500c00565505F3624AB435c222E558E9ff8",
		chainId: 1,
		decimals: 18,
		name: "CoTrader",
		symbol: "COT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xDDB3422497E61e13543BeA06989C0789117555c5",
		chainId: 1,
		decimals: 18,
		name: "COTI",
		symbol: "COTI"
	},
	{
		address: "0xf091Cf09c51811819DB705710e9634B8bf18F164",
		chainId: 1,
		decimals: 18,
		name: "Couchain",
		symbol: "COU"
	},
	{
		address: "0xE2FB6529EF566a080e6d23dE0bd351311087D567",
		chainId: 1,
		decimals: 18,
		name: "Covesting",
		symbol: "COV"
	},
	{
		address: "0xADA86b1b313D1D5267E3FC0bB303f0A2b66D0Ea7",
		chainId: 1,
		decimals: 18,
		name: "Covesting",
		symbol: "COV"
	},
	{
		address: "0xB37a769B37224449d92AAc57dE379E1267Cd3B00",
		chainId: 1,
		decimals: 18,
		name: "COVA",
		symbol: "COVA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3D658390460295FB963f54dC0899cfb1c30776Df",
		chainId: 1,
		decimals: 8,
		name: "Circuits of Value",
		symbol: "COVAL"
	},
	{
		address: "0x4688a8b1F292FDaB17E9a90c8Bc379dC1DBd8713",
		chainId: 1,
		decimals: 18,
		name: "Cover Protocol",
		symbol: "COVER",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC3d6dda603FC15Fd4Bf9303150fe11c7cd6059dc",
		chainId: 1,
		decimals: 18,
		name: "Coweye",
		symbol: "COW"
	},
	{
		address: "0xf0be50ED0620E0Ba60CA7FC968eD14762e0A5Dd3",
		chainId: 1,
		decimals: 9,
		name: "Cowboy Finance",
		symbol: "COW"
	},
	{
		address: "0x34965f73Cfa05Bf8d8aF37cB4af64Fa950605Ea8",
		chainId: 1,
		decimals: 18,
		name: "CoinWind",
		symbol: "COW"
	},
	{
		address: "0xa2c1e04acA801dA92FA95aF161040d37f103d69D",
		chainId: 1,
		decimals: 18,
		name: "CoinAnalyst",
		symbol: "COY"
	},
	{
		address: "0x06A6FC23e6eC8A2b2aeEefd70D772Dc3D6B45010",
		chainId: 1,
		decimals: 18,
		name: "CryptoProfile",
		symbol: "CP"
	},
	{
		address: "0x7Ef1081Ecc8b5B5B130656a41d4cE4f89dBBCC8c",
		chainId: 1,
		decimals: 18,
		name: "Compounder",
		symbol: "CP3R"
	},
	{
		address: "0x31910AFF5545784755970aE1fBE7fE65d5F0eEa2",
		chainId: 1,
		decimals: 8,
		name: "CreatorPAL",
		symbol: "CPAL"
	},
	{
		address: "0x0Ebb614204E47c09B6C3FeB9AAeCad8EE060E23E",
		chainId: 1,
		decimals: 0,
		name: "Cryptopay",
		symbol: "CPAY"
	},
	{
		address: "0xfAE4Ee59CDd86e3Be9e8b90b53AA866327D7c090",
		chainId: 1,
		decimals: 18,
		name: "CPChain",
		symbol: "CPC"
	},
	{
		address: "0xb787d4eAc8899730bb8C57fc3c998c49c5244ec0",
		chainId: 1,
		decimals: 8,
		name: "CoinPulseToken",
		symbol: "CPEX"
	},
	{
		address: "0x2b67D1a87A8D8B280A23e97bC55095215eE0ec53",
		chainId: 1,
		decimals: 18,
		name: "Crypto Price Index",
		symbol: "CPI"
	},
	{
		address: "0x7064aAb39A0Fcf7221c3396719D0917a65E35515",
		chainId: 1,
		decimals: 18,
		name: "Cpollo",
		symbol: "CPLO"
	},
	{
		address: "0x20AE0cA9D42e6Ffeb1188F341A7D63450452dEF6",
		chainId: 1,
		decimals: 18,
		name: "CIPHER",
		symbol: "CPR"
	},
	{
		address: "0x0FB843D37AA2A99db8D81aF9fe2F0A6485c7c002",
		chainId: 1,
		decimals: 18,
		name: "CPROP",
		symbol: "CPROP"
	},
	{
		address: "0xb5a52519426EC6D88784cC80E621062498306734",
		chainId: 1,
		decimals: 18,
		name: "Cash Per Scan",
		symbol: "CPS"
	},
	{
		address: "0x88d50B466BE55222019D71F9E8fAe17f5f45FCA1",
		chainId: 1,
		decimals: 8,
		name: "Cryptaur",
		symbol: "CPT"
	},
	{
		address: "0x9B62513c8a27290CF6A7A9e29386e600245EA819",
		chainId: 1,
		decimals: 18,
		name: "Contents Protocol",
		symbol: "CPT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE0bDFe2CE51F44556309665D59818CCb541ff067",
		chainId: 1,
		decimals: 18,
		name: "Crypto Puzzles",
		symbol: "CPTE"
	},
	{
		address: "0x6D52DfeFb16BB9Cdc78bfCA09061e44574886626",
		chainId: 1,
		decimals: 18,
		name: "CPUcoin",
		symbol: "CPU"
	},
	{
		address: "0x79ddbbCc9D7FbDc77b02A960DabD2577144FDD6E",
		chainId: 1,
		decimals: 18,
		name: "Crypxie",
		symbol: "CPX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf44745fBd41F6A1ba151df190db0564c5fCc4410",
		chainId: 1,
		decimals: 18,
		name: "COPYTRACK",
		symbol: "CPY"
	},
	{
		address: "0xD417144312DbF50465b1C641d016962017Ef6240",
		chainId: 1,
		decimals: 18,
		name: "Covalent",
		symbol: "CQT"
	},
	{
		address: "0x46576e20EC5F25586A6Fa2E0d6B6058354B72E72",
		chainId: 1,
		decimals: 8,
		name: "Cryptomind",
		symbol: "CR"
	},
	{
		address: "0x0D9a10a0466B7E9AD693e24993f5105bfDb240e3",
		chainId: 1,
		decimals: 18,
		name: "Cryptoland1",
		symbol: "CR1"
	},
	{
		address: "0x7F585B9130c64e9e9F470b618A7badD03D79cA7E",
		chainId: 1,
		decimals: 18,
		name: "CR7Coin",
		symbol: "CR7"
	},
	{
		address: "0x608f006B6813f97097372d0d31Fb0F11d1CA3E4e",
		chainId: 1,
		decimals: 18,
		name: "CryptoAds Marketpla",
		symbol: "CRAD"
	},
	{
		address: "0xAef38fBFBF932D1AeF3B808Bc8fBd8Cd8E1f8BC5",
		chainId: 1,
		decimals: 8,
		name: "Creditbit",
		symbol: "CRB"
	},
	{
		address: "0x6767615A97a8204298bbAC44C57eF1A615eeD244",
		chainId: 1,
		decimals: 18,
		name: "Cribnb",
		symbol: "CRB"
	},
	{
		address: "0xcE4Fe9b4b8Ff61949DCfeB7e03bc9FAca59D2Eb3",
		chainId: 1,
		decimals: 8,
		name: "Cream Balancer",
		symbol: "crBAL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCdeee767beD58c5325f68500115d4B722b3724EE",
		chainId: 1,
		decimals: 18,
		name: "Carbon",
		symbol: "CRBN"
	},
	{
		address: "0x2cF618c19041D9Db330d8222B860A624021F30fb",
		chainId: 1,
		decimals: 18,
		name: "Cruisebit",
		symbol: "CRBT"
	},
	{
		address: "0x1FF8CDB51219a8838b52E9cAc09b71e591BC998e",
		chainId: 1,
		decimals: 8,
		name: "Cream Binance USD",
		symbol: "crBUSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF41e5Fbc2F6Aac200Dd8619E121CE1f05D150077",
		chainId: 1,
		decimals: 18,
		name: "CRYCASH",
		symbol: "CRC"
	},
	{
		address: "0xFB19C03a02a519a44542343803F3D42578CBc243",
		chainId: 1,
		decimals: 8,
		name: "CR Coin",
		symbol: "CRC"
	},
	{
		address: "0x19D1666f543D42ef17F66E376944A22aEa1a8E46",
		chainId: 1,
		decimals: 8,
		name: "Cream Compound",
		symbol: "crCOMP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x892B14321a4FCba80669aE30Bd0cd99a7ECF6aC0",
		chainId: 1,
		decimals: 8,
		name: "Cream Cream",
		symbol: "crCREAM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc7Fd8Dcee4697ceef5a2fd4608a7BD6A94C77480",
		chainId: 1,
		decimals: 8,
		name: "Cream CRV",
		symbol: "crCRV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xcAaa93712BDAc37f736C323C93D4D5fDEFCc31CC",
		chainId: 1,
		decimals: 18,
		name: "CRD Network",
		symbol: "CRD"
	},
	{
		address: "0x4760e7A401558AA59639161454bb2A41a3c5A90b",
		chainId: 1,
		decimals: 18,
		name: "Crowd One",
		symbol: "CRD"
	},
	{
		address: "0xDaab5E695bb0E8Ce8384ee56BA38fA8290618e52",
		chainId: 1,
		decimals: 18,
		name: "CRDT",
		symbol: "CRDT"
	},
	{
		address: "0x115eC79F1de567eC68B7AE7eDA501b406626478e",
		chainId: 1,
		decimals: 18,
		name: "Carry",
		symbol: "CRE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2ba592F78dB6436527729929AAf6c908497cB200",
		chainId: 1,
		decimals: 18,
		name: "Cream",
		symbol: "CREAM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x672a1AD4f667FB18A333Af13667aa0Af1F5b5bDD",
		chainId: 1,
		decimals: 18,
		name: "Verify",
		symbol: "CRED"
	},
	{
		address: "0xED7Fa212E100DFb3b13B834233E4B680332a3420",
		chainId: 1,
		decimals: 18,
		name: "Street Cred",
		symbol: "CRED"
	},
	{
		address: "0xC4cB5793BD58BaD06bF51FB37717b86B02CBe8A4",
		chainId: 1,
		decimals: 18,
		name: "PROXI DeFi",
		symbol: "CREDIT"
	},
	{
		address: "0x4E0603e2A27A30480E5e3a4Fe548e29EF12F64bE",
		chainId: 1,
		decimals: 18,
		name: "Credo / Bitbounce",
		symbol: "CREDO"
	},
	{
		address: "0x675E7d927Af7e6D0082e0153dc3485B687a6F0ad",
		chainId: 1,
		decimals: 18,
		name: "Creed Finance",
		symbol: "CREED"
	},
	{
		address: "0x158079Ee67Fce2f58472A96584A73C7Ab9AC95c1",
		chainId: 1,
		decimals: 8,
		name: "Compound Augur",
		symbol: "cREP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD06527D5e56A3495252A528C4987003b712860eE",
		chainId: 1,
		decimals: 8,
		name: "Cream Ether",
		symbol: "crETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xcBc1065255cBc3aB41a6868c22d1f1C573AB89fd",
		chainId: 1,
		decimals: 18,
		name: "Cream ETH 2",
		symbol: "CRETH2",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8848812BD31AEEe33313C10A840FfC3169078C5b",
		chainId: 1,
		decimals: 18,
		name: "CrossFi",
		symbol: "CRFI"
	},
	{
		address: "0x10FDBD1e48eE2fD9336a482D746138AE19e649Db",
		chainId: 1,
		decimals: 8,
		name: "Cream FTX Token",
		symbol: "crFTT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf49CDD50aD408d387d611F88A647179C3de3492b",
		chainId: 1,
		decimals: 18,
		name: "CargoCoin",
		symbol: "CRGO"
	},
	{
		address: "0x9238bfB781A55eACC3Cf05F7DF94038c198CD9B9",
		chainId: 1,
		decimals: 8,
		name: "Cremit",
		symbol: "CRMT"
	},
	{
		address: "0x3623387773010d9214B10C551d6e7fc375D31F58",
		chainId: 1,
		decimals: 8,
		name: "Cream Meta",
		symbol: "crMTA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA0b73E1Ff0B80914AB6fe0444E65848C4C34450b",
		chainId: 1,
		decimals: 8,
		name: "Crypto.com Coin",
		symbol: "CRO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1505c95a707348C2bCc75698BE258891387f008B",
		chainId: 1,
		decimals: 9,
		name: "Uncle Scrooge Finan",
		symbol: "CROOGE"
	},
	{
		address: "0x08389495D7456E1951ddF7c3a1314A4bfb646d8B",
		chainId: 1,
		decimals: 18,
		name: "Crypterium",
		symbol: "CRPT"
	},
	{
		address: "0x80A7E048F37A50500351C204Cb407766fA3baE7f",
		chainId: 1,
		decimals: 18,
		name: "CrypteriumToken",
		symbol: "CRPT"
	},
	{
		address: "0x17107f40d70f4470d20CB3f138a052cAE8EbD4bE",
		chainId: 1,
		decimals: 8,
		name: "Cream renBTC",
		symbol: "crRENBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEc7D3E835dA3F6118079fA9a236b267D044FD7cA",
		chainId: 1,
		decimals: 18,
		name: "Crypto Rewards Stud",
		symbol: "CRS"
	},
	{
		address: "0xef58b2d5A1b8D3cDE67b8aB054dC5C831E9Bc025",
		chainId: 1,
		decimals: 8,
		name: "Cream Serum",
		symbol: "crSRM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF0da1186a4977226b9135d0613ee72e229EC3F4d",
		chainId: 1,
		decimals: 18,
		name: "CreamtoeCoin",
		symbol: "CRT"
	},
	{
		address: "0x36a28c7c9B3DEA22F07F4dF67833cBe764fEEeb4",
		chainId: 1,
		decimals: 18,
		name: "Cryptonits",
		symbol: "CRT"
	},
	{
		address: "0x94cA37d108E89775dC8ae65F51AE28c2d9599f9A",
		chainId: 1,
		decimals: 9,
		name: "Cryptotipsfr",
		symbol: "CRTS"
	},
	{
		address: "0x32a7C02e79c4ea1008dD6564b35F131428673c41",
		chainId: 1,
		decimals: 18,
		name: "Crust Network",
		symbol: "CRU"
	},
	{
		address: "0x44fbeBd2F576670a6C33f6Fc0B00aA8c5753b322",
		chainId: 1,
		decimals: 8,
		name: "Cream USD Coin",
		symbol: "crUSDC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x797AAB1ce7c01eB727ab980762bA88e7133d2157",
		chainId: 1,
		decimals: 8,
		name: "Cream USDT",
		symbol: "crUSDT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD533a949740bb3306d119CC777fa900bA034cd52",
		chainId: 1,
		decimals: 18,
		name: "Curve DAO Token",
		symbol: "CRV",
		extensions: {
			color: "#40649f",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x72a56f7BbEe939a8C441C891e1754BB795eE0B21",
		chainId: 1,
		decimals: 8,
		name: "Crown Finance",
		symbol: "CRWN"
	},
	{
		address: "0xDBdDf072d7aae7B9288e31A4eebe6C54e3a143b1",
		chainId: 1,
		decimals: 18,
		name: "Crowny Token",
		symbol: "CRWNY"
	},
	{
		address: "0x01da76DEa59703578040012357b81ffE62015C2d",
		chainId: 1,
		decimals: 8,
		name: "Cream yETH",
		symbol: "crYETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCbaE0A83f4f9926997c8339545fb8eE32eDc6b76",
		chainId: 1,
		decimals: 8,
		name: "Cream YFI",
		symbol: "crYFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1062FDf250B44697216D07e41Df93824519F47aa",
		chainId: 1,
		decimals: 8,
		name: "Cryptolandy",
		symbol: "CRYPL"
	},
	{
		address: "0xE4c94d45f7Aef7018a5D66f44aF780ec6023378e",
		chainId: 1,
		decimals: 6,
		name: "CryptoCarbon",
		symbol: "CryptoCarbon"
	},
	{
		address: "0x46b9Ad944d1059450Da1163511069C718F699D31",
		chainId: 1,
		decimals: 6,
		name: "Credits",
		symbol: "CS"
	},
	{
		address: "0xF5DCe57282A584D2746FaF1593d3121Fcac444dC",
		chainId: 1,
		decimals: 8,
		name: "Compound SAI",
		symbol: "cSAI",
		extensions: {
			color: "#9669ED",
			isVerified: true
		}
	},
	{
		address: "0xD8698a985B89650d0A70f99AD2909bD0c0b4b51c",
		chainId: 1,
		decimals: 18,
		name: "Consentium",
		symbol: "CSM"
	},
	{
		address: "0x2620638EDA99F9e7E902Ea24a285456EE9438861",
		chainId: 1,
		decimals: 18,
		name: "Crust Shadow",
		symbol: "CSM"
	},
	{
		address: "0x29D75277aC7F0335b2165D0895E8725cbF658d73",
		chainId: 1,
		decimals: 8,
		name: "BitDice",
		symbol: "CSNO"
	},
	{
		address: "0x5Ecb025E51415dbA9Fd272C551076357Cf4069F5",
		chainId: 1,
		decimals: 18,
		name: "Crespo",
		symbol: "CSO"
	},
	{
		address: "0xA6446D655a0c34bC4F05042EE88170D056CBAf45",
		chainId: 1,
		decimals: 18,
		name: "Caspian",
		symbol: "CSP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBB49A51Ee5a66ca3a8CbE529379bA44Ba67E6771",
		chainId: 1,
		decimals: 18,
		name: "Cryptosolartech",
		symbol: "CST"
	},
	{
		address: "0x2466Ba59E474C46639CEB4Eb9b7248638443560D",
		chainId: 1,
		decimals: 18,
		name: "Capitalsharetoken",
		symbol: "CSTO"
	},
	{
		address: "0x4B0181102A0112A2ef11AbEE5563bb4a3176c9d7",
		chainId: 1,
		decimals: 8,
		name: "cSUSHI",
		symbol: "CSUSHI"
	},
	{
		address: "0x3aadc3BCe49724ce299fD9F3850211211c399C8c",
		chainId: 1,
		decimals: 18,
		name: "Coinstox",
		symbol: "CSX"
	},
	{
		address: "0x196c81385Bc536467433014042788Eb707703934",
		chainId: 1,
		decimals: 18,
		name: "CryptoTask",
		symbol: "CTASK"
	},
	{
		address: "0xa3EE21C306A700E682AbCdfe9BaA6A08F3820419",
		chainId: 1,
		decimals: 18,
		name: "Creditcoin",
		symbol: "CTC"
	},
	{
		address: "0x00B7db6B4431e345eee5cc23D21E8dbC1d5cADA3",
		chainId: 1,
		decimals: 18,
		name: "CyberTronchain",
		symbol: "CTC"
	},
	{
		address: "0xFD6C31bb6F05Fc8dB64F4b740Ab758605c271FD8",
		chainId: 1,
		decimals: 18,
		name: "Contracoin",
		symbol: "CTCN"
	},
	{
		address: "0x4545750F39aF6Be4F237B6869D4EccA928Fd5A85",
		chainId: 1,
		decimals: 18,
		name: "CryptoTask",
		symbol: "CTF"
	},
	{
		address: "0xC87c5dD86A3d567fF28701886fB0745aaa898da4",
		chainId: 1,
		decimals: 18,
		name: "CT Global Token",
		symbol: "CTG"
	},
	{
		address: "0xc760721eB65AA6B0a634df6A008887C48813fF63",
		chainId: 1,
		decimals: 8,
		name: "Cryptorg Token",
		symbol: "CTG"
	},
	{
		address: "0x9E7D29bd499B6c7da2a5B2EaFCF4A39d3BD845D1",
		chainId: 1,
		decimals: 18,
		name: "Convenient To Go",
		symbol: "CTGC"
	},
	{
		address: "0x8c18D6a985Ef69744b9d57248a45c0861874f244",
		chainId: 1,
		decimals: 18,
		name: "ClinTex CTi",
		symbol: "CTI"
	},
	{
		address: "0xBf4cFD7d1eDeeEA5f6600827411B41A21eB08abd",
		chainId: 1,
		decimals: 2,
		name: "CTL",
		symbol: "CTL"
	},
	{
		address: "0xaa55AC677AbfFA4aF9b798b6c138d830820D49E6",
		chainId: 1,
		decimals: 18,
		name: "Cultiplan",
		symbol: "CTPL"
	},
	{
		address: "0x96A65609a7B84E8842732DEB08f56C3E21aC6f8a",
		chainId: 1,
		decimals: 18,
		name: "Centra",
		symbol: "CTR"
	},
	{
		address: "0x8606a8F28e1e2FD50B9074d65C01548B1F040B32",
		chainId: 1,
		decimals: 8,
		name: "Cryptrust",
		symbol: "CTRT"
	},
	{
		address: "0x57e83505827788c9F92bCfd398A51A7b0C83DD8e",
		chainId: 1,
		decimals: 18,
		name: "ChainLink Trading S",
		symbol: "CTS"
	},
	{
		address: "0x491604c0FDF08347Dd1fa4Ee062a822A5DD06B5D",
		chainId: 1,
		decimals: 18,
		name: "Cartesi",
		symbol: "CTSI"
	},
	{
		address: "0x1A4743Cf1af4C289351390A2B3fe7c13D2F7C235",
		chainId: 1,
		decimals: 18,
		name: "Castweet",
		symbol: "CTT"
	},
	{
		address: "0xE3Fa177AcecfB86721Cf6f9f4206bd3Bd672D7d5",
		chainId: 1,
		decimals: 18,
		name: "ChainTrade Token",
		symbol: "CTT"
	},
	{
		address: "0x662aBcAd0b7f345AB7FfB1b1fbb9Df7894f18e66",
		chainId: 1,
		decimals: 18,
		name: "CarTaxi",
		symbol: "CTX"
	},
	{
		address: "0x321C2fE4446C7c963dc41Dd58879AF648838f98D",
		chainId: 1,
		decimals: 18,
		name: "Cryptex Finance",
		symbol: "CTX"
	},
	{
		address: "0xEa11755Ae41D889CeEc39A63E6FF75a02Bc1C00d",
		chainId: 1,
		decimals: 18,
		name: "Cortex",
		symbol: "CTXC"
	},
	{
		address: "0xa8892bfc33FA44053a9E402B1839966f4FEc74A4",
		chainId: 1,
		decimals: 18,
		name: "Crypto User Base",
		symbol: "CUB"
	},
	{
		address: "0xDf801468a808a32656D2eD2D2d80B72A129739f4",
		chainId: 1,
		decimals: 8,
		name: "Somnium Space CUBEs",
		symbol: "CUBE"
	},
	{
		address: "0xeCD20F0EBC3dA5E514b4454E3dc396E7dA18cA6A",
		chainId: 1,
		decimals: 18,
		name: "Cudl Finance",
		symbol: "CUDL"
	},
	{
		address: "0x817bbDbC3e8A1204f3691d14bB44992841e3dB35",
		chainId: 1,
		decimals: 18,
		name: "Cudos",
		symbol: "CUDOS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB00b1e52BDf518FF9d0B16084F4fBE16bA58a0e7",
		chainId: 1,
		decimals: 9,
		name: "Cryptographic Ultra",
		symbol: "CUM"
	},
	{
		address: "0xd6327ce1fb9D6020E8C2c0E124A1eC23DCAb7536",
		chainId: 1,
		decimals: 18,
		name: "Cum Inu",
		symbol: "CUMINU"
	},
	{
		address: "0x35A18000230DA775CAc24873d00Ff85BccdeD550",
		chainId: 1,
		decimals: 8,
		name: "Compound Uniswap",
		symbol: "cUNI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x13339fD07934CD674269726EdF3B5ccEE9DD93de",
		chainId: 1,
		decimals: 18,
		name: "Curio",
		symbol: "CUR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x490DBf7884B8e13c2161448b83Dd2d8909dB48eD",
		chainId: 1,
		decimals: 8,
		name: "Curate",
		symbol: "CUR8"
	},
	{
		address: "0x1dABF6Ab0eB8E4208E7E9302CeC7A014068952e4",
		chainId: 1,
		decimals: 8,
		name: "Curate",
		symbol: "CURE"
	},
	{
		address: "0x089A502032166e07Ae83eb434c16790cA2FA4661",
		chainId: 1,
		decimals: 18,
		name: "CURE farm",
		symbol: "CURE"
	},
	{
		address: "0xc2D3AE29c8309c14994D02Ecd228cf86f3Efde77",
		chainId: 1,
		decimals: 18,
		name: "CurrySwap",
		symbol: "CURRY"
	},
	{
		address: "0x39AA39c021dfbaE8faC545936693aC917d5E7563",
		chainId: 1,
		decimals: 8,
		name: "Compound USDC",
		symbol: "cUSDC",
		extensions: {
			color: "#9669ED",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xf650C3d88D12dB855b8bf7D11Be6C55A4e07dCC9",
		chainId: 1,
		decimals: 8,
		name: "Compound USDT",
		symbol: "cUSDT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf6ABff616043C2dA572573dCC583B656297b30e7",
		chainId: 1,
		decimals: 18,
		name: "Custody Token",
		symbol: "CUST"
	},
	{
		address: "0xe2DA716381d7E0032CECaA5046b34223fC3f218D",
		chainId: 1,
		decimals: 5,
		name: "Carbon Utility Toke",
		symbol: "CUT"
	},
	{
		address: "0x047686fB287e7263A23873dEa66b4501015a2226",
		chainId: 1,
		decimals: 18,
		name: "Blockchain Cuties U",
		symbol: "CUTE"
	},
	{
		address: "0xdA6cb58A0D0C01610a29c5A65c303e13e885887C",
		chainId: 1,
		decimals: 18,
		name: "carVertical",
		symbol: "cV"
	},
	{
		address: "0x50bC2Ecc0bfDf5666640048038C1ABA7B7525683",
		chainId: 1,
		decimals: 18,
		name: "carVertical",
		symbol: "CV"
	},
	{
		address: "0x78A52E12c7b63d05c12F9608307587CF654EC3d0",
		chainId: 1,
		decimals: 18,
		name: "Crypto Village Acce",
		symbol: "CVA"
	},
	{
		address: "0x72a66e54B66892aE3BBe54DF7bb7Dd5Ae927a6f9",
		chainId: 1,
		decimals: 18,
		name: "Crypto Village Acce",
		symbol: "CVAG"
	},
	{
		address: "0x41e5560054824eA6B0732E656E3Ad64E20e94E45",
		chainId: 1,
		decimals: 8,
		name: "Civic",
		symbol: "CVC",
		extensions: {
			color: "#3AB03E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x01FA555c97D7958Fa6f771f3BbD5CCD508f81e22",
		chainId: 1,
		decimals: 18,
		name: "Civil Token",
		symbol: "CVL"
	},
	{
		address: "0x6400B5522f8D448C0803e6245436DD1c81dF09ce",
		chainId: 1,
		decimals: 8,
		name: "Content Value Netwo",
		symbol: "CVNT"
	},
	{
		address: "0x38e4adB44ef08F22F5B5b76A8f0c2d0dCbE7DcA1",
		chainId: 1,
		decimals: 18,
		name: "PowerPool Concentrated Voting Power",
		symbol: "CVP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x19fd4C760A7d4a38aeE9F226035cbC9Fdf434FFe",
		chainId: 1,
		decimals: 18,
		name: "CVP Token",
		symbol: "CVP"
	},
	{
		address: "0x2578A20A07E8761d91D0961D3Ea92e14510885aa",
		chainId: 1,
		decimals: 18,
		name: "COVIR",
		symbol: "CVR"
	},
	{
		address: "0x3C03b4EC9477809072FF9CC9292C9B25d4A8e6c6",
		chainId: 1,
		decimals: 18,
		name: "PolkaCover",
		symbol: "CVR"
	},
	{
		address: "0xdB56448fE2635f7912287cd619E7eD3d93180f25",
		chainId: 1,
		decimals: 18,
		name: "CoinVisa",
		symbol: "CVS"
	},
	{
		address: "0xBe428c3867F05deA2A89Fc76a102b544eaC7f772",
		chainId: 1,
		decimals: 18,
		name: "CyberVeinToken",
		symbol: "CVT"
	},
	{
		address: "0x88930072F583936F506CE1f1d5Fe69290C2D6A2a",
		chainId: 1,
		decimals: 18,
		name: "Civitas Protocol",
		symbol: "CVT"
	},
	{
		address: "0x4e3FBD56CD56c3e72c1403e103b45Db9da5B9D2B",
		chainId: 1,
		decimals: 18,
		name: "Convex Finance",
		symbol: "CVX"
	},
	{
		address: "0x62B9c7356A2Dc64a1969e19C23e4f579F9810Aa7",
		chainId: 1,
		decimals: 18,
		name: "Convex CRV",
		symbol: "CVXCRV"
	},
	{
		address: "0xE74dC43867E0cbEB208F1a012fc60DcBbF0E3044",
		chainId: 1,
		decimals: 18,
		name: "DeFIRE",
		symbol: "CWAP"
	},
	{
		address: "0xC11b1268C1A384e55C48c2391d8d480264A3A7F4",
		chainId: 1,
		decimals: 8,
		name: "Compound WBTC",
		symbol: "cWBTC",
		extensions: {
			color: "#9669ED",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xccF4429DB6322D5C611ee964527D42E5d685DD6a",
		chainId: 1,
		decimals: 8,
		name: "cWBTC",
		symbol: "CWBTC"
	},
	{
		address: "0x002ACD33D758FcbDc72242A86Ed27eFA0006d42f",
		chainId: 1,
		decimals: 18,
		name: "Token CWIOS",
		symbol: "CWIOS"
	},
	{
		address: "0xaC0104Cca91D167873B8601d2e71EB3D4D8c33e0",
		chainId: 1,
		decimals: 18,
		name: "Crowns",
		symbol: "CWS"
	},
	{
		address: "0x3F4E02741B155F5CE8D6190D294d4f916125B896",
		chainId: 1,
		decimals: 18,
		name: "CircleEx",
		symbol: "CX"
	},
	{
		address: "0x2134057C0b461F898D375Cead652Acae62b59541",
		chainId: 1,
		decimals: 18,
		name: "CoxxxCoin",
		symbol: "CXC"
	},
	{
		address: "0xb48E0F69e6A3064f5498D495F77AD83e0874ab28",
		chainId: 1,
		decimals: 18,
		name: "CXN Network",
		symbol: "CXN"
	},
	{
		address: "0xb6EE9668771a79be7967ee29a63D4184F8097143",
		chainId: 1,
		decimals: 18,
		name: "CargoX",
		symbol: "CXO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x481578423221A35b9358cFe5400D202d2bDc66f1",
		chainId: 1,
		decimals: 18,
		name: "Cyber Doge",
		symbol: "CYBERD"
	},
	{
		address: "0x8861cfF2366C1128fd699B68304aD99a0764Ef9a",
		chainId: 1,
		decimals: 18,
		name: "Cyclone Protocol",
		symbol: "CYC"
	},
	{
		address: "0xfE831929098B5FF5d736105bD68BA9460EF07207",
		chainId: 1,
		decimals: 18,
		name: "Cycle",
		symbol: "CYCLE"
	},
	{
		address: "0x3b58c52C03ca5Eb619EBa171091c86C34d603e5f",
		chainId: 1,
		decimals: 9,
		name: "Cyclub",
		symbol: "CYCLUB"
	},
	{
		address: "0xdB33d49b5a41A97D296B7242a96ebd8AC77B3Bb8",
		chainId: 1,
		decimals: 18,
		name: "CY Finance",
		symbol: "CYF"
	},
	{
		address: "0x80a2AE356fc9ef4305676f7a3E2Ed04e12C33946",
		chainId: 1,
		decimals: 8,
		name: "cYFI",
		symbol: "CYFI"
	},
	{
		address: "0x3f06B5D78406cD97bdf10f5C420B241D32759c80",
		chainId: 1,
		decimals: 18,
		name: "CyberFM",
		symbol: "CYFM"
	},
	{
		address: "0x4a621d9f1b19296d1C0f87637b3A8D4978e9bf82",
		chainId: 1,
		decimals: 18,
		name: "CyberFM",
		symbol: "CYFM"
	},
	{
		address: "0x26CB3641aaA43911f1D4cB2ce544eb652AAc7c47",
		chainId: 1,
		decimals: 18,
		name: "Crystal Token",
		symbol: "CYL"
	},
	{
		address: "0x78c292D1445E6b9558bf42e8BC369271DeD062eA",
		chainId: 1,
		decimals: 8,
		name: "CyberMusic",
		symbol: "CYMT"
	},
	{
		address: "0xBD05CeE8741100010D8E93048a80Ed77645ac7bf",
		chainId: 1,
		decimals: 18,
		name: "Cyclops Treasure",
		symbol: "CYTR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x41c84c0e2EE0b740Cf0d31F63f3B6F627DC6b393",
		chainId: 1,
		decimals: 8,
		name: "Yearn Wrapped Ether",
		symbol: "cyWETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0223fc70574214F65813fE336D870Ac47E147fAe",
		chainId: 1,
		decimals: 18,
		name: "CanonChain",
		symbol: "CZR"
	},
	{
		address: "0xB3319f5D18Bc0D84dD1b4825Dcde5d5f7266d407",
		chainId: 1,
		decimals: 8,
		name: "Compound 0x",
		symbol: "cZRX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x20bf12A7bdb6d7B84069fb3b939892A301C981d1",
		chainId: 1,
		decimals: 18,
		name: "ClassZZ",
		symbol: "CZZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9f4F1C679FC8479Cd71482A8D8C88Dc60c1403f9",
		chainId: 1,
		decimals: 8,
		name: "Double Ace",
		symbol: "DAA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdab0C31BF34C897Fb0Fe90D12EC9401caf5c36Ec",
		chainId: 1,
		decimals: 0,
		name: "DAB",
		symbol: "DAB"
	},
	{
		address: "0x8281eE37F164C0E26E6B6f87E7695Baac256dF07",
		chainId: 1,
		decimals: 18,
		name: "Degen Arts",
		symbol: "DAC"
	},
	{
		address: "0xF8C595D070d104377f58715ce2E6C93E49a87f3c",
		chainId: 1,
		decimals: 6,
		name: "DACC",
		symbol: "DACC"
	},
	{
		address: "0xA31108E5BAB5494560Db34c95492658AF239357C",
		chainId: 1,
		decimals: 18,
		name: "Dacsee",
		symbol: "DACS"
	},
	{
		address: "0xEfaB7248D36585e2340E5d25F8a8D243E6e3193F",
		chainId: 1,
		decimals: 18,
		name: "Dacxi",
		symbol: "DACXI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5B322514FF727253292637D9054301600c2C81e8",
		chainId: 1,
		decimals: 9,
		name: "DAD",
		symbol: "DAD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFb2f26F266Fb2805a387230f2aa0a331b4d96Fba",
		chainId: 1,
		decimals: 18,
		name: "DADI",
		symbol: "DADI"
	},
	{
		address: "0x5E031a5bC1c6b6E86A49e0B0F2e757800F1D0FFf",
		chainId: 1,
		decimals: 18,
		name: "DaFIN",
		symbol: "DAF"
	},
	{
		address: "0xFc979087305A826c2B2a0056cFAbA50aad3E6439",
		chainId: 1,
		decimals: 18,
		name: "Dafi Protocol",
		symbol: "DAFI"
	},
	{
		address: "0xb9E6BDcBa653b5f768dD2E2fAF6288df9054e554",
		chainId: 1,
		decimals: 18,
		name: "Dirham",
		symbol: "DAH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6B175474E89094C44Da98b954EedeAC495271d0F",
		chainId: 1,
		decimals: 18,
		name: "[TEST-123] Dai",
		symbol: "DAI",
		extensions: {
			color: "#042069",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xd7d706ED3598a354A4aDFce5D8C5383dF99a4461",
		chainId: 1,
		decimals: 18,
		name: "Dain Token",
		symbol: "DAIN"
	},
	{
		address: "0x73D9E335669462Cbdd6aa3AdaFe9efeE86a37Fe9",
		chainId: 1,
		decimals: 18,
		name: "Daiquilibrium",
		symbol: "DAIQ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x07D9e49Ea402194bf48A8276dAfB16E4eD633317",
		chainId: 1,
		decimals: 8,
		name: "Dalecoin",
		symbol: "DALC"
	},
	{
		address: "0xF80D589b3Dbe130c270a69F1a69D050f268786Df",
		chainId: 1,
		decimals: 18,
		name: "Datamine",
		symbol: "DAM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9B70740e708a083C6fF38Df52297020f5DfAa5EE",
		chainId: 1,
		decimals: 10,
		name: "Daneel",
		symbol: "DAN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9Dfc4B433D359024Eb3E810d77d60fbE8B0d9B82",
		chainId: 1,
		decimals: 18,
		name: "Dandy Dego",
		symbol: "DANDY"
	},
	{
		address: "0x0cB8D0B37C7487b11d57F1f33dEfA2B1d3cFccfE",
		chainId: 1,
		decimals: 18,
		name: "DANKToken",
		symbol: "DANK"
	},
	{
		address: "0x9Ea1Ae46C15a4164B74463Bc26f8aA3b0EeA2e6E",
		chainId: 1,
		decimals: 18,
		name: "MU DANK",
		symbol: "DANK"
	},
	{
		address: "0x4057950247E4Ec8Dc7fe399ec19Ea43E80b931c8",
		chainId: 1,
		decimals: 18,
		name: "DanKoin",
		symbol: "DANK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbE3c393Fb670f0A29C3F3E660FFB113200e36676",
		chainId: 1,
		decimals: 18,
		name: "Digital Antares Dol",
		symbol: "DANT"
	},
	{
		address: "0x0f51bb10119727a7e5eA3538074fb341F56B09Ad",
		chainId: 1,
		decimals: 18,
		name: "DAO Maker",
		symbol: "DAO"
	},
	{
		address: "0xBB9bc244D798123fDe783fCc1C72d3Bb8C189413",
		chainId: 1,
		decimals: 16,
		name: "TheDAO",
		symbol: "DAO"
	},
	{
		address: "0xCE3f6f6672616c39D8B6858F8DAC9902eCa42C84",
		chainId: 1,
		decimals: 18,
		name: "DAO1",
		symbol: "DAO1"
	},
	{
		address: "0x96184d9C811Ea0624fC30C80233B1d749B9E485B",
		chainId: 1,
		decimals: 18,
		name: "Dapp com",
		symbol: "DAPPT"
	},
	{
		address: "0x00d8318E44780EdEEFcF3020A5448F636788883C",
		chainId: 1,
		decimals: 18,
		name: "dAppstore",
		symbol: "DAPPX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3108ccFd96816F9E663baA0E8c5951D229E8C6da",
		chainId: 1,
		decimals: 18,
		name: "Dark Build v1",
		symbol: "DARK"
	},
	{
		address: "0x5a4623F305A8d7904ED68638AF3B4328678edDBF",
		chainId: 1,
		decimals: 18,
		name: "dART Insurance",
		symbol: "DART"
	},
	{
		address: "0x81c9151de0C8bafCd325a57E3dB5a5dF1CEBf79c",
		chainId: 1,
		decimals: 18,
		name: "Datum",
		symbol: "DAT"
	},
	{
		address: "0x0Cf0Ee63788A0849fE5297F3407f701E122cC023",
		chainId: 1,
		decimals: 18,
		name: "Streamr",
		symbol: "DATA",
		extensions: {
			color: "#e9570f",
			isVerified: true
		}
	},
	{
		address: "0x1B5f21ee98eed48d292e8e2d3Ed82b40a9728A22",
		chainId: 1,
		decimals: 18,
		name: "DataBrokerDAO Token",
		symbol: "DATABroker"
	},
	{
		address: "0x813b428aF3920226E059B68A62e4c04933D4eA7a",
		chainId: 1,
		decimals: 8,
		name: "Decentralized Asset",
		symbol: "DATP"
	},
	{
		address: "0xaBbBB6447B68ffD6141DA77C18c7B5876eD6c5ab",
		chainId: 1,
		decimals: 18,
		name: "DATx",
		symbol: "DATX"
	},
	{
		address: "0xd82Df0ABD3f51425Eb15ef7580fDA55727875f14",
		chainId: 1,
		decimals: 18,
		name: "DAV",
		symbol: "DAV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9F8eef61b1Ad834B44C089DBF33eb854746a6bf9",
		chainId: 1,
		decimals: 9,
		name: "SpaceDawgs",
		symbol: "DAWGS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x580c8520dEDA0a441522AEAe0f9F7A5f29629aFa",
		chainId: 1,
		decimals: 18,
		name: "Dawn Protocol",
		symbol: "DAWN"
	},
	{
		address: "0x0B4BdC478791897274652DC15eF5C135cae61E60",
		chainId: 1,
		decimals: 18,
		name: "DAEX",
		symbol: "DAX"
	},
	{
		address: "0x61725f3db4004AFE014745B21DAb1E1677CC328b",
		chainId: 1,
		decimals: 18,
		name: "Digital Asset Exchange Token",
		symbol: "DAXT"
	},
	{
		address: "0xE814aeE960a85208C3dB542C53E7D4a6C8D5f60F",
		chainId: 1,
		decimals: 18,
		name: "Chronologic",
		symbol: "DAY"
	},
	{
		address: "0x9b68bFaE21DF5A510931A262CECf63f41338F264",
		chainId: 1,
		decimals: 18,
		name: "DecentBet",
		symbol: "DBET"
	},
	{
		address: "0xC28D4341Ad8224E1a424558074eF0B4515f424d5",
		chainId: 1,
		decimals: 0,
		name: "Datbit",
		symbol: "DBT"
	},
	{
		address: "0x0C7E25e15E9F6818Fa2770107B3Ba565470bC8c5",
		chainId: 1,
		decimals: 18,
		name: "Decentralized Bitco",
		symbol: "DBTC"
	},
	{
		address: "0xC6d19A604FbdB5C2eeB363255FD63c9EEA29288E",
		chainId: 1,
		decimals: 18,
		name: "DarkBundles",
		symbol: "DBUND"
	},
	{
		address: "0x3CBc780D2934d55A06069e837fABd3e6Fc23DAB0",
		chainId: 1,
		decimals: 18,
		name: "DBX",
		symbol: "DBX"
	},
	{
		address: "0x386Faa4703a34a7Fdb19Bec2e14Fd427C9638416",
		chainId: 1,
		decimals: 18,
		name: "DoBetAcceptBet",
		symbol: "DCA"
	},
	{
		address: "0x18aa7c90d3ae4C5BB219d0a2813F441704084625",
		chainId: 1,
		decimals: 18,
		name: "Decentralize Curren",
		symbol: "DCA"
	},
	{
		address: "0x2D8e1dd483008c6843b9CF644Bad7fB25bF52b84",
		chainId: 1,
		decimals: 18,
		name: "Digital Coin",
		symbol: "DCB"
	},
	{
		address: "0xFFa93Aacf49297D51E211817452839052FDFB961",
		chainId: 1,
		decimals: 18,
		name: "Distributed Credit Chain",
		symbol: "DCC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4a73E60ADBb8575500Ffc6AaEa6128954011C8Af",
		chainId: 1,
		decimals: 18,
		name: "Doch Coin",
		symbol: "DCH"
	},
	{
		address: "0x399A0e6FbEb3d74c85357439f4c8AeD9678a5cbF",
		chainId: 1,
		decimals: 3,
		name: "DCL",
		symbol: "DCL"
	},
	{
		address: "0x08d32b0da63e2C3bcF8019c9c5d849d7a9d791e6",
		chainId: 1,
		decimals: 0,
		name: "Dentacoin",
		symbol: "DCN",
		extensions: {
			color: "#136485",
			isVerified: true
		}
	},
	{
		address: "0x0Ce6d5a093d4166237C7A9ff8E0553B0293214a1",
		chainId: 1,
		decimals: 18,
		name: "Decenturion",
		symbol: "DCNT"
	},
	{
		address: "0xb944B46Bbd4ccca90c962EF225e2804E46691cCF",
		chainId: 1,
		decimals: 18,
		name: "Decore",
		symbol: "DCORE"
	},
	{
		address: "0xb566E883555aEBf5B1DB211070b530Ab00a4B18a",
		chainId: 1,
		decimals: 18,
		name: "DCTDAO",
		symbol: "DCTD"
	},
	{
		address: "0x00000000001876eB1444c986fD502e618c587430",
		chainId: 1,
		decimals: 8,
		name: "Dharma Dai",
		symbol: "dDai"
	},
	{
		address: "0x9F5F3CFD7a32700C93F971637407ff17b91c7342",
		chainId: 1,
		decimals: 18,
		name: "Scry info",
		symbol: "DDD"
	},
	{
		address: "0xcC4eF9EEAF656aC1a2Ab886743E98e97E090ed38",
		chainId: 1,
		decimals: 18,
		name: "DDF",
		symbol: "DDF"
	},
	{
		address: "0xFbEEa1C75E4c4465CB2FCCc9c6d6afe984558E20",
		chainId: 1,
		decimals: 18,
		name: "DuckDaoDime",
		symbol: "DDIM"
	},
	{
		address: "0x7FBEC0bb6A7152e77C30D005B5D49cbC08A602C3",
		chainId: 1,
		decimals: 18,
		name: "disBalancer",
		symbol: "DDOS"
	},
	{
		address: "0x3ef36D53A168c44ed2Ec7a98129CA0308BC1AE45",
		chainId: 1,
		decimals: 8,
		name: "DigiDinar StableTok",
		symbol: "DDRST"
	},
	{
		address: "0x94501b6A153C8973fd1f321fCC8188d40dC5d72d",
		chainId: 1,
		decimals: 8,
		name: "DigiDinar Token",
		symbol: "DDRT"
	},
	{
		address: "0xF9fbAefdE7112F78fA9BfE813341f0f49f888cB3",
		chainId: 1,
		decimals: 18,
		name: "DDS Store",
		symbol: "DDS"
	},
	{
		address: "0x56CdBbeec9828962cECB3f1b69517d430295D952",
		chainId: 1,
		decimals: 18,
		name: "Davecoin",
		symbol: "DDTG"
	},
	{
		address: "0x3A880652F47bFaa771908C07Dd8673A787dAEd3A",
		chainId: 1,
		decimals: 18,
		name: "DerivaDAO",
		symbol: "DDX"
	},
	{
		address: "0x80aB141F324C3d6F2b18b030f1C4E95d4d658778",
		chainId: 1,
		decimals: 18,
		name: "DEA",
		symbol: "DEA"
	},
	{
		address: "0x0C7060BF06a78AAAAB3fac76941318A52a3F4613",
		chainId: 1,
		decimals: 18,
		name: "Party Of The Living",
		symbol: "DEAD"
	},
	{
		address: "0x151202C9c18e495656f372281F493EB7698961D5",
		chainId: 1,
		decimals: 18,
		name: "Debitum Network",
		symbol: "DEB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9248c485b0B80f76DA451f167A8db30F33C70907",
		chainId: 1,
		decimals: 18,
		name: "Debase",
		symbol: "DEBASE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xff9Bce8409df637CD3936bA77f8746bf99a4f80B",
		chainId: 1,
		decimals: 8,
		name: "Token Decentralized Ecosystem Coorperation",
		symbol: "DEC"
	},
	{
		address: "0x58379bF685ea2e251AE63d3eE26269c7c3848A17",
		chainId: 1,
		decimals: 8,
		name: "Distributed Energy",
		symbol: "DEC"
	},
	{
		address: "0x30f271C9E86D2B7d00a6376Cd96A1cFBD5F0b9b3",
		chainId: 1,
		decimals: 18,
		name: "Decentr",
		symbol: "DEC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9393fdc77090F31c7db989390D43F454B1A6E7F3",
		chainId: 1,
		decimals: 3,
		name: "Dark Energy Crystal",
		symbol: "DEC"
	},
	{
		address: "0x6CbEDEc4F1ac9D874987D2769596544E0d9161ab",
		chainId: 1,
		decimals: 18,
		name: "DeepCloud AI",
		symbol: "DEEP"
	},
	{
		address: "0x075c60EE2cD308ff47873b38Bd9A0Fa5853382c4",
		chainId: 1,
		decimals: 18,
		name: "DeezNuts",
		symbol: "DEEZ"
	},
	{
		address: "0x8D1ce361eb68e9E05573443C407D4A3Bed23B033",
		chainId: 1,
		decimals: 18,
		name: "PieDAO DEFI",
		symbol: "DEFI++"
	},
	{
		address: "0x78F225869c08d478c34e5f645d07A87d3fe8eb78",
		chainId: 1,
		decimals: 18,
		name: "PieDAO DEFI Large Cap",
		symbol: "DEFI+L",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaD6A626aE2B43DCb1B39430Ce496d2FA0365BA9C",
		chainId: 1,
		decimals: 18,
		name: "PieDAO DEFI Small Cap",
		symbol: "DEFI+S",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfa6de2697D59E88Ed7Fc4dFE5A33daC43565ea41",
		chainId: 1,
		decimals: 18,
		name: "DEFI Top 5 Index",
		symbol: "DEFI5"
	},
	{
		address: "0x84cffa78B2fBbeeC8c37391d2B12A04d2030845e",
		chainId: 1,
		decimals: 18,
		name: "Digital Fitness",
		symbol: "DEFIT"
	},
	{
		address: "0x3Aa5f749d4a6BCf67daC1091Ceb69d1F5D86fA53",
		chainId: 1,
		decimals: 9,
		name: "Deflect",
		symbol: "DEFLCT"
	},
	{
		address: "0xe481f2311C774564D517d015e678c2736A25Ddd3",
		chainId: 1,
		decimals: 18,
		name: "DefHold",
		symbol: "DEFO"
	},
	{
		address: "0xdef1fac7Bf08f173D286BbBDcBeeADe695129840",
		chainId: 1,
		decimals: 18,
		name: "DeFi Factory Token",
		symbol: "DEFT"
	},
	{
		address: "0x5F474906637bdCDA05f29C74653F6962bb0f8eDa",
		chainId: 1,
		decimals: 18,
		name: "DeFinity",
		symbol: "DEFX"
	},
	{
		address: "0x126c121f99e1E211dF2e5f8De2d96Fa36647c855",
		chainId: 1,
		decimals: 18,
		name: "DEGEN Index",
		symbol: "DEGEN"
	},
	{
		address: "0xDd039990Bd551Ce7437d3bF54d155220B7988B71",
		chainId: 1,
		decimals: 18,
		name: "Degens",
		symbol: "DEGENS"
	},
	{
		address: "0x88EF27e69108B2633F8E1C184CC37940A075cC02",
		chainId: 1,
		decimals: 18,
		name: "Dego Finance",
		symbol: "DEGO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x469E66e06fEc34839E5eB1273ba85A119B8D702F",
		chainId: 1,
		decimals: 18,
		name: "Degov",
		symbol: "DEGOV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xDE1E0AE6101b46520cF66fDC0B1059c5cC3d106c",
		chainId: 1,
		decimals: 8,
		name: "DeltaChain",
		symbol: "DELTA"
	},
	{
		address: "0x9EA3b5b4EC044b70375236A281986106457b20EF",
		chainId: 1,
		decimals: 18,
		name: "Delta Financial",
		symbol: "DELTA"
	},
	{
		address: "0xfcfC434ee5BfF924222e084a8876Eee74Ea7cfbA",
		chainId: 1,
		decimals: 18,
		name: "Rebasing Liquidity",
		symbol: "DELTARLP"
	},
	{
		address: "0x3597bfD533a99c9aa083587B074434E61Eb0A258",
		chainId: 1,
		decimals: 8,
		name: "Dent",
		symbol: "DENT"
	},
	{
		address: "0x63726dAe7C57d25e90ec829ce9a5C745Ffd984d3",
		chainId: 1,
		decimals: 10,
		name: "Decentralized Oracl",
		symbol: "DEOR"
	},
	{
		address: "0x1A3496C18d558bd9C6C8f609E1B129f67AB08163",
		chainId: 1,
		decimals: 18,
		name: "DEAPCOIN",
		symbol: "DEP"
	},
	{
		address: "0xa0bEd124a09ac2Bd941b10349d8d224fe3c955eb",
		chainId: 1,
		decimals: 18,
		name: "DePay",
		symbol: "DEPAY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7cF271966F36343Bf0150F25E5364f7961c58201",
		chainId: 1,
		decimals: 0,
		name: "CRYPTODEPOZIT",
		symbol: "DEPO"
	},
	{
		address: "0x89cbeAC5E8A13F0Ebb4C74fAdFC69bE81A501106",
		chainId: 1,
		decimals: 18,
		name: "DEPO (Depository Network)",
		symbol: "DEPO (Depository Network)"
	},
	{
		address: "0x9fa69536d1cda4A04cFB50688294de75B505a9aE",
		chainId: 1,
		decimals: 18,
		name: "DeRace",
		symbol: "DERC"
	},
	{
		address: "0xA487bF43cF3b10dffc97A9A744cbB7036965d3b9",
		chainId: 1,
		decimals: 18,
		name: "Deri Protocol",
		symbol: "DERI"
	},
	{
		address: "0x5A80b50A0420A2507e33508A93E0Aa037fc90636",
		chainId: 1,
		decimals: 18,
		name: "Dessfi",
		symbol: "DESS"
	},
	{
		address: "0xaB93dF617F51E1E415b5b4f8111f122d6b48e55C",
		chainId: 1,
		decimals: 18,
		name: "Delta Exchange Toke",
		symbol: "DETO"
	},
	{
		address: "0xd379700999F4805Ce80aa32DB46A94dF64561108",
		chainId: 1,
		decimals: 18,
		name: "Dextrust",
		symbol: "DETS"
	},
	{
		address: "0x3b62F3820e0B035cc4aD602dECe6d796BC325325",
		chainId: 1,
		decimals: 18,
		name: "DEUS Finance",
		symbol: "DEUS"
	},
	{
		address: "0x5cAf454Ba92e6F2c929DF14667Ee360eD9fD5b26",
		chainId: 1,
		decimals: 18,
		name: "Dev Protocol",
		symbol: "DEV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7ED621D37E30214D5E197454f08B1C5c9558517a",
		chainId: 1,
		decimals: 18,
		name: "DEVA Token",
		symbol: "DEVA"
	},
	{
		address: "0xdd94De9cFE063577051A5eb7465D08317d8808B6",
		chainId: 1,
		decimals: 0,
		name: "Devcon2 Token",
		symbol: "Devcon2 Token"
	},
	{
		address: "0xfdb615d6A15F929dDabc6b83A4f1Cf9d361b064E",
		chainId: 1,
		decimals: 18,
		name: "Divert Finance",
		symbol: "DEVE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x20E94867794dBA030Ee287F1406E100d03C84Cd3",
		chainId: 1,
		decimals: 18,
		name: "DEW",
		symbol: "DEW"
	},
	{
		address: "0x497bAEF294c11a5f0f5Bea3f2AdB3073DB448B56",
		chainId: 1,
		decimals: 18,
		name: "DEX",
		symbol: "DEX"
	},
	{
		address: "0x3516415161C478DF10ADBb8bb884Cc83FbD5F11a",
		chainId: 1,
		decimals: 18,
		name: "AlphaDex",
		symbol: "DEX"
	},
	{
		address: "0xde4EE8057785A7e8e800Db58F9784845A5C2Cbd6",
		chainId: 1,
		decimals: 18,
		name: "DeXe",
		symbol: "DEXE"
	},
	{
		address: "0xB81D70802a816B5DacBA06D708B5acF19DcD436D",
		chainId: 1,
		decimals: 18,
		name: "Dextoken",
		symbol: "DEXG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0020d80229877b495D2bf3269a4c13f6f1e1B9D3",
		chainId: 1,
		decimals: 18,
		name: "Dexmex",
		symbol: "DEXM"
	},
	{
		address: "0xfB7B4564402E5500dB5bB6d63Ae671302777C75a",
		chainId: 1,
		decimals: 18,
		name: "DexTools",
		symbol: "DEXT"
	},
	{
		address: "0x26CE25148832C04f3d7F26F32478a9fe55197166",
		chainId: 1,
		decimals: 18,
		name: "DEXTools",
		symbol: "DEXT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5F64Ab1544D28732F0A24F4713c2C8ec0dA089f0",
		chainId: 1,
		decimals: 18,
		name: "DEXTF Protocol",
		symbol: "DEXTF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x431ad2ff6a9C365805eBaD47Ee021148d6f7DBe0",
		chainId: 1,
		decimals: 18,
		name: "dForce",
		symbol: "DF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x62959c699A52eC647622c91e79CE73344e4099f5",
		chainId: 1,
		decimals: 18,
		name: "DeFine",
		symbol: "DFA"
	},
	{
		address: "0x1B2a76Da77D03b7FC21189d9838f55Bd849014aF",
		chainId: 1,
		decimals: 8,
		name: "DeFiScale",
		symbol: "DFC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x20c36f062a31865bED8a5B1e512D9a1A20AA333A",
		chainId: 1,
		decimals: 18,
		name: "DefiDollar DAO",
		symbol: "DFD"
	},
	{
		address: "0xd35Ce4FD815522Ff52243EB587020d557617f4dB",
		chainId: 1,
		decimals: 18,
		name: "DFE Finance",
		symbol: "DFE"
	},
	{
		address: "0xE3a64A3c4216B83255b53Ec7eA078B13f21a7daD",
		chainId: 1,
		decimals: 18,
		name: "DeFi Gold",
		symbol: "DFGL"
	},
	{
		address: "0xA9536B9c75A9E0faE3B56a96AC8EdF76AbC91978",
		chainId: 1,
		decimals: 18,
		name: "Amun DeFi Index",
		symbol: "DFI"
	},
	{
		address: "0xeE3b9B531F4C564c70e14B7b3BB7D516f33513ff",
		chainId: 1,
		decimals: 18,
		name: "DeFi Omega",
		symbol: "DFIO"
	},
	{
		address: "0xA17De0ab0a97Bc5e56fa8b39eBFc81CC3F1f349E",
		chainId: 1,
		decimals: 18,
		name: "DefiKing",
		symbol: "DFK"
	},
	{
		address: "0x70A6D0D1561Ba98711e935a76B1C167C612978a2",
		chainId: 1,
		decimals: 9,
		name: "Dragonfly Protocol",
		symbol: "DFLY"
	},
	{
		address: "0x0ccD5DD52Dee42B171a623478e5261C1eaaE092A",
		chainId: 1,
		decimals: 18,
		name: "DeFi on MCW",
		symbol: "DFM"
	},
	{
		address: "0xc8BA3cf103E5A1658209C366153197AC7FA9C9B1",
		chainId: 1,
		decimals: 0,
		name: "Difo Network",
		symbol: "DFN"
	},
	{
		address: "0xd2adC1C84443Ad06f0017aDCa346Bd9b6fc52CaB",
		chainId: 1,
		decimals: 18,
		name: "dFund",
		symbol: "DFND"
	},
	{
		address: "0xDF276A2442cCbbDF0707427668434D6D130B75Eb",
		chainId: 1,
		decimals: 18,
		name: "DeFini",
		symbol: "DFNI"
	},
	{
		address: "0x1Ee01654665303A5Dd2744e30b576941880e3A73",
		chainId: 1,
		decimals: 18,
		name: "DFNORM Vault  NFTX",
		symbol: "DFNORM"
	},
	{
		address: "0xcec38306558a31cdbb2a9d6285947C5b44A24f3e",
		chainId: 1,
		decimals: 18,
		name: "Fantasy Sports",
		symbol: "DFS"
	},
	{
		address: "0x54ee01beB60E745329E6a8711Ad2D6cb213e38d7",
		chainId: 1,
		decimals: 18,
		name: "DefiSocial",
		symbol: "DFSOCIAL"
	},
	{
		address: "0xB6eE603933E024d8d53dDE3faa0bf98fE2a3d6f1",
		chainId: 1,
		decimals: 18,
		name: "DeFiat",
		symbol: "DFT"
	},
	{
		address: "0xf1f5De69C9C8D9BE8a7B01773Cc1166D4Ec6Ede2",
		chainId: 1,
		decimals: 18,
		name: "Definitex",
		symbol: "DFX"
	},
	{
		address: "0x888888435FDe8e7d4c54cAb67f206e4199454c60",
		chainId: 1,
		decimals: 18,
		name: "DFX Finance",
		symbol: "DFX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7CCC863EcE2E15bC45ac0565D410da7A3340aD98",
		chainId: 1,
		decimals: 18,
		name: "Dotify",
		symbol: "DFY"
	},
	{
		address: "0x9695e0114e12C0d3A3636fAb5A18e6b737529023",
		chainId: 1,
		decimals: 18,
		name: "Dfyn Network",
		symbol: "DFYN"
	},
	{
		address: "0x53C8395465A84955c95159814461466053DedEDE",
		chainId: 1,
		decimals: 18,
		name: "DeGate",
		symbol: "DG"
	},
	{
		address: "0xEE06A81a695750E71a662B51066F2c74CF4478a0",
		chainId: 1,
		decimals: 18,
		name: "Decentral Games",
		symbol: "DG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x63B8b7d4A3EFD0735c4BFFBD95B332a55e4eB851",
		chainId: 1,
		decimals: 18,
		name: "DigiCol Token",
		symbol: "DGCL"
	},
	{
		address: "0xE0B7927c4aF23765Cb51314A0E0521A9645F0E2A",
		chainId: 1,
		decimals: 9,
		name: "DigixDAO",
		symbol: "DGD",
		extensions: {
			color: "#E0A83A",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x842c2B97772B4528589ed243f6bDa3381eF0261F",
		chainId: 1,
		decimals: 18,
		name: "DGL Coin",
		symbol: "DGL"
	},
	{
		address: "0x0d4b4DA5fb1a7d55E85f8e22f728701cEB6E44C9",
		chainId: 1,
		decimals: 18,
		name: "DigiMax",
		symbol: "DGMT"
	},
	{
		address: "0x7ACe84ac394E41F1c01711eD134D9BBcFa770Ce7",
		chainId: 1,
		decimals: 6,
		name: "Diagon",
		symbol: "DGN"
	},
	{
		address: "0x927159670C50042109d7C0f4aEd0Cee89452433E",
		chainId: 1,
		decimals: 18,
		name: "DGPayment",
		symbol: "DGP"
	},
	{
		address: "0xf6cFe53d6FEbaEEA051f400ff5fc14F0cBBDacA1",
		chainId: 1,
		decimals: 18,
		name: "DigiPulse",
		symbol: "DGPT"
	},
	{
		address: "0x6aEDbF8dFF31437220dF351950Ba2a3362168d1b",
		chainId: 1,
		decimals: 8,
		name: "Dragonglass",
		symbol: "DGS"
	},
	{
		address: "0x1C83501478f1320977047008496DACBD60Bb15ef",
		chainId: 1,
		decimals: 18,
		name: "DigitexFutures",
		symbol: "DGTX"
	},
	{
		address: "0xc666081073E8DfF8D3d1c2292A29aE1A2153eC09",
		chainId: 1,
		decimals: 18,
		name: "Digitex Token",
		symbol: "DGTX"
	},
	{
		address: "0x26E43759551333e57F073bb0772F50329A957b30",
		chainId: 1,
		decimals: 18,
		name: "DegenVC",
		symbol: "DGVC"
	},
	{
		address: "0x87B87A7583D8d8F15b58Bdd290318386Ac8eE174",
		chainId: 1,
		decimals: 18,
		name: "Digiwill",
		symbol: "DGW"
	},
	{
		address: "0x4f3AfEC4E5a3F2A6a1A411DEF7D7dFe50eE057bF",
		chainId: 1,
		decimals: 9,
		name: "Digix Gold",
		symbol: "DGX",
		extensions: {
			color: "#E0A83A",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x55b9a11c2e8351b4Ffc7b11561148bfaC9977855",
		chainId: 1,
		decimals: 9,
		name: "Digix Gold Token 1.0",
		symbol: "DGX1"
	},
	{
		address: "0x152687Bc4A7FCC89049cF119F9ac3e5aCF2eE7ef",
		chainId: 1,
		decimals: 18,
		name: "DeltaHub Community",
		symbol: "DHC"
	},
	{
		address: "0x20B4B41DDaECD180798bd4322BA971FA1A54e512",
		chainId: 1,
		decimals: 0,
		name: "DHD Coin",
		symbol: "DHD"
	},
	{
		address: "0x30365Ed4Ca8173013ad948b9842f34ac71d01f7C",
		chainId: 1,
		decimals: 18,
		name: "Dirham Crypto",
		symbol: "DHS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xca1207647Ff814039530D7d35df0e1Dd2e91Fa84",
		chainId: 1,
		decimals: 18,
		name: "dHEDGE DAO",
		symbol: "DHT"
	},
	{
		address: "0x62Dc4817588d53a056cBbD18231d91ffCcd34b2A",
		chainId: 1,
		decimals: 18,
		name: "DeHive",
		symbol: "DHV"
	},
	{
		address: "0x84cA8bc7997272c7CfB4D0Cd3D55cd942B3c9419",
		chainId: 1,
		decimals: 18,
		name: "DIAToken",
		symbol: "DIA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x53109fe9e044F2c324D00AD85bfB0b13CE379480",
		chainId: 1,
		decimals: 9,
		name: "Projekt Diamond",
		symbol: "DIAMND"
	},
	{
		address: "0x2e071D2966Aa7D8dECB1005885bA1977D6038A65",
		chainId: 1,
		decimals: 16,
		name: "Etheroll",
		symbol: "DICE"
	},
	{
		address: "0x15F5f5F29a819BF7B4B80BF55352E1e42707c94e",
		chainId: 1,
		decimals: 18,
		name: "Die",
		symbol: "DIE"
	},
	{
		address: "0x763F8B4fB067190e739Ed6ACB12F40f2F3890840",
		chainId: 1,
		decimals: 0,
		name: "Digex",
		symbol: "DIGEX"
	},
	{
		address: "0x798D1bE841a82a273720CE31c822C61a67a601C3",
		chainId: 1,
		decimals: 9,
		name: "DIGG",
		symbol: "DIGG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3CbF23c081fAA5419810ce0F6BC1ECb73006d848",
		chainId: 1,
		decimals: 18,
		name: "Digible",
		symbol: "DIGI"
	},
	{
		address: "0x7333Cbf5B0b843B4129e234f791b0058347F671a",
		chainId: 1,
		decimals: 9,
		name: "Digies Coin",
		symbol: "DIGS"
	},
	{
		address: "0x37F74e99794853777a10ea1dc08a64C86958F06a",
		chainId: 1,
		decimals: 18,
		name: "D Community",
		symbol: "DILI"
	},
	{
		address: "0xbb1EE07d6c7BAeB702949904080eb61f5D5e7732",
		chainId: 1,
		decimals: 18,
		name: "Dogey-Inu",
		symbol: "DINU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc719d010B63E5bbF2C0551872CD5316ED26AcD83",
		chainId: 1,
		decimals: 18,
		name: "Decentralized Insurance Protocol",
		symbol: "DIP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x786448439d9401e0a8427aCf7Ca66A5114eb2368",
		chainId: 1,
		decimals: 8,
		name: "Dipper",
		symbol: "DIP"
	},
	{
		address: "0xd1517663883e2Acc154178Fb194E80e8bBc29730",
		chainId: 1,
		decimals: 18,
		name: "Deipool",
		symbol: "DIP"
	},
	{
		address: "0xBdea5bB640DBFC4593809DEeC5CdB8F99b704Cd2",
		chainId: 1,
		decimals: 2,
		name: "Direwolf",
		symbol: "DIREWOLF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4faB740779C73aA3945a5CF6025bF1b0e7F6349C",
		chainId: 1,
		decimals: 18,
		name: "Dirty Finance",
		symbol: "DIRTY"
	},
	{
		address: "0x220B71671b649c03714dA9c621285943f3cbcDC6",
		chainId: 1,
		decimals: 18,
		name: "TosDis",
		symbol: "DIS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4B4701f3f827E1331fb22FF8e2BEaC24b17Eb055",
		chainId: 1,
		decimals: 18,
		name: "DistX",
		symbol: "DISTX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf14922001A2FB8541a433905437ae954419C2439",
		chainId: 1,
		decimals: 8,
		name: "Direct Insurance To",
		symbol: "DIT"
	},
	{
		address: "0xFf1bEdA5cA92a83d05323E338d0534410858B6A2",
		chainId: 1,
		decimals: 18,
		name: "DIVO Token",
		symbol: "DIVO"
	},
	{
		address: "0x13f11C9905A08ca76e3e853bE63D4f0944326C72",
		chainId: 1,
		decimals: 18,
		name: "DIVX",
		symbol: "DIVX"
	},
	{
		address: "0x43e6228b5bF22Eab754486082cA91FdD8585521A",
		chainId: 1,
		decimals: 18,
		name: "Dixt Finance",
		symbol: "DIXT"
	},
	{
		address: "0x5dc60C4D5e75D22588FA17fFEB90A63E535efCE0",
		chainId: 1,
		decimals: 18,
		name: "dKargo",
		symbol: "DKA"
	},
	{
		address: "0xBA187B09fFA8DDdc80d2571eD3cbC4Be0Af69E0c",
		chainId: 1,
		decimals: 18,
		name: "Draggin Karma Points",
		symbol: "DKP"
	},
	{
		address: "0x38d1B0D157529Bd5D936719A8a5F8379aFB24fAA",
		chainId: 1,
		decimals: 18,
		name: "DataKYC",
		symbol: "DKYC"
	},
	{
		address: "0xcE1d3dA32e3a45d27dC841781f09E40C41CAC677",
		chainId: 1,
		decimals: 18,
		name: "Data Link Base",
		symbol: "DLB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6F3a5DCc36eEee5bd8B9B5Db3B6431187A8F1E17",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long BAT 2x",
		symbol: "dLBAT2x"
	},
	{
		address: "0xE7bEd2E5FcA01F13E8230BF9b67963Ad231B81A6",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long BAT 3x",
		symbol: "dLBAT3x"
	},
	{
		address: "0x8880F71Fe078Aa1C5bBf8A5FF6Fb93E475a9FcE3",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long BAT 4x",
		symbol: "dLBAT4x"
	},
	{
		address: "0x4eF522f0DE44946E3EEa716fa071C12e89d30774",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long ETH 2x",
		symbol: "dLETH2x"
	},
	{
		address: "0x8129d9B2C3748791C430feA241207A4F9a0Ac516",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long ETH-DAI 2x v2",
		symbol: "dLETH2x"
	},
	{
		address: "0x00A8097A78893Fb4623854d78f154b1034245191",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long ETH-DAI 3x v2",
		symbol: "dLETH3x"
	},
	{
		address: "0x19a5C979e96823A79F05d3E7658DdBc2d50Bd326",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long ETH 3x",
		symbol: "dLETH3x"
	},
	{
		address: "0x5BC9845FA1Fd30B4eDcc468C0FE219C9030000d4",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long ETH-DAI 4x v2",
		symbol: "dLETH4x"
	},
	{
		address: "0x8EFE972dE7Ee0441D1E01FB0C84Ea900fD1770D0",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long ETH 4x",
		symbol: "dLETH4x"
	},
	{
		address: "0x5C24F19f91F4eA8A3F95cB21EbBeA053446D8632",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC 3x",
		symbol: "dLKNC2x"
	},
	{
		address: "0x9B70e6AaC469c75f4044C78d416eE3bc1a92ac22",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long KNC 3x",
		symbol: "dLKNC3x"
	},
	{
		address: "0x7FD75AC96cA1f0aFfA154fbC1ae08752D4880E83",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long KNC 4x",
		symbol: "dLKNC4x"
	},
	{
		address: "0x1abb24C9c806eAA71750Fa05C4009bd32e65ebad",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long LINK-DAI 2x v2",
		symbol: "dLLINK2x"
	},
	{
		address: "0x92bA756169aA6Ff82a3d6ae8e4456A5883182Fa3",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long LINK-DAI 3x v2",
		symbol: "dLLINK3x"
	},
	{
		address: "0x3789A8cAc9D2Eb3Cb87c09CA3422b928c768b362",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long LINK-DAI 4x v2",
		symbol: "dLLINK4x"
	},
	{
		address: "0xfD6C76546d93e6120Eb6Eaa266966F51330280C3",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long REP 2x",
		symbol: "dLREP2x"
	},
	{
		address: "0xAF16308808361b203d4eD521cdde6dd2e9B168F0",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long REP 3x",
		symbol: "dLREP3x"
	},
	{
		address: "0x240fe85447A878f51A74A5dC0b644b4A72587839",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long REP 4x",
		symbol: "dLREP4x"
	},
	{
		address: "0x07e3c70653548B04f0A75970C1F81B4CBbFB606f",
		chainId: 1,
		decimals: 18,
		name: "Agrello",
		symbol: "DLT"
	},
	{
		address: "0x0000000DE40dfa9B17854cBC7869D80f9F98D823",
		chainId: 1,
		decimals: 18,
		name: "delta theta",
		symbol: "DLTA"
	},
	{
		address: "0x0435316B3aB4B999856085c98c3B1ab21d85CD4D",
		chainId: 1,
		decimals: 18,
		name: "DeltaExCoin",
		symbol: "DLTX"
	},
	{
		address: "0x9fe6854447bB39dc8b78960882831269f9e78408",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long WBTC 2x",
		symbol: "dLWBTC2x"
	},
	{
		address: "0x6d08B86002221Dc2fE4e27170fF90e1B92de3254",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long WBTC 3x",
		symbol: "dLWBTC3x"
	},
	{
		address: "0x4F4D523C69a47c5C3ef06c53ec64801f11a884Dd",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long WBTC 4x",
		symbol: "dLWBTC4x"
	},
	{
		address: "0x1B7395d7D8B289a78920A87ce12160BaCd304C51",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long ZRX 2x",
		symbol: "dLZRX2x"
	},
	{
		address: "0x2A93cBeC0D134205c352d92d81BB7c4Ec5Ef4d4e",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Long ZRX 3x",
		symbol: "dLZRX3x"
	},
	{
		address: "0xf85753Fb0Dc0A6c9B4F230eb861708677ac3C00f",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT",
		symbol: "dLZRX4x"
	},
	{
		address: "0xEd91879919B71bB6905f23af0A68d231EcF87b14",
		chainId: 1,
		decimals: 18,
		name: "DMM Governance",
		symbol: "DMG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbCdfE338D55c061C084D81fD793Ded00A27F226D",
		chainId: 1,
		decimals: 18,
		name: "Decentralized Machine Learning",
		symbol: "DML",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9556f8ee795D991fF371F547162D5efB2769425F",
		chainId: 1,
		decimals: 18,
		name: "DMme",
		symbol: "DMME",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5f6c5C2fB289dB2228d159C69621215e354218d7",
		chainId: 1,
		decimals: 18,
		name: "Demodyfi",
		symbol: "DMOD"
	},
	{
		address: "0xF29992D7b589A0A6bD2de7Be29a97A6EB73EaF85",
		chainId: 1,
		decimals: 18,
		name: "DMScript",
		symbol: "DMST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2ccbFF3A042c68716Ed2a2Cb0c544A9f1d1935E1",
		chainId: 1,
		decimals: 8,
		name: "DMarket",
		symbol: "DMT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x79126d32a86e6663F3aAac4527732d0701c1AE6c",
		chainId: 1,
		decimals: 18,
		name: "Dark Matter",
		symbol: "DMT"
	},
	{
		address: "0x3be6e7bF2cD8E1a0A95597E72ca6D3709bBeFF76",
		chainId: 1,
		decimals: 18,
		name: "Demeter Chain",
		symbol: "DMTC"
	},
	{
		address: "0xf058501585023d040eA9493134ED72C083553eED",
		chainId: 1,
		decimals: 18,
		name: "Dymmax",
		symbol: "DMX"
	},
	{
		address: "0x1660F10B4D610cF482194356eCe8eFD65B15bA83",
		chainId: 1,
		decimals: 18,
		name: "Amun DeFi Momentum",
		symbol: "DMX"
	},
	{
		address: "0xef6344de1fcfC5F48c30234C16c1389e8CdC572C",
		chainId: 1,
		decimals: 18,
		name: "EncrypGen",
		symbol: "DNA"
	},
	{
		address: "0x0fbe9Cc858D7AD6e246Fe9D01Aed22abD2A66f0B",
		chainId: 1,
		decimals: 18,
		name: "Danat Coin",
		symbol: "DNC"
	},
	{
		address: "0x0AbdAce70D3790235af448C88547603b945604ea",
		chainId: 1,
		decimals: 18,
		name: "district0x",
		symbol: "DNT",
		extensions: {
			color: "#2c398f",
			isVerified: true
		}
	},
	{
		address: "0xE43E2041dc3786e166961eD9484a5539033d10fB",
		chainId: 1,
		decimals: 18,
		name: "DenCity",
		symbol: "DNX"
	},
	{
		address: "0x20a8CEC5fffea65Be7122BCaB2FFe32ED4Ebf03a",
		chainId: 1,
		decimals: 18,
		name: "DinoX",
		symbol: "DNXC"
	},
	{
		address: "0xe7aB45162f5979F09B0bDa1CC7DfC97C270EA3d5",
		chainId: 1,
		decimals: 18,
		name: "Dobermann",
		symbol: "DOBE"
	},
	{
		address: "0xE5Dada80Aa6477e85d09747f2842f7993D0Df71C",
		chainId: 1,
		decimals: 18,
		name: "Dock",
		symbol: "DOCK",
		extensions: {
			color: "#786dbc",
			isVerified: true
		}
	},
	{
		address: "0x43Dfc4159D86F3A37A5A4B3D4580b888ad7d4DDd",
		chainId: 1,
		decimals: 18,
		name: "DODO",
		symbol: "DODO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x80bb277f4355A43CDbB86a82F9876C946476d9Eb",
		chainId: 1,
		decimals: 18,
		name: "DogDeFiCoin",
		symbol: "DOGDEFI"
	},
	{
		address: "0x7AA6b33fB7F395DDBca7b7A33264A3c799Fa626f",
		chainId: 1,
		decimals: 18,
		name: "3X Long Dogecoin To",
		symbol: "DOGEBULL"
	},
	{
		address: "0x73C61dD9E121dE834A4f3ed607263EE33b308c06",
		chainId: 1,
		decimals: 9,
		name: "Dogefather Ecosyste",
		symbol: "DOGEFATHER"
	},
	{
		address: "0x9B9087756eCa997C5D595C840263001c9a26646D",
		chainId: 1,
		decimals: 18,
		name: "DogeFi",
		symbol: "DOGEFI"
	},
	{
		address: "0x17eb50FDD2995696eE82912a80a9766fCBb0ECcA",
		chainId: 1,
		decimals: 18,
		name: "Dogen Finance",
		symbol: "DOGEN"
	},
	{
		address: "0xb4FBed161bEbcb37afB1Cb4a6F7cA18b977cCB25",
		chainId: 1,
		decimals: 18,
		name: "Dogeswap",
		symbol: "DOGES"
	},
	{
		address: "0x559Efe1d7A54fb1C7f25a036952F8498CdF02EDB",
		chainId: 1,
		decimals: 18,
		name: "DOGG Token",
		symbol: "DOGG"
	},
	{
		address: "0x4B86e0295E7d32433FfA6411B82B4F4e56a581E1",
		chainId: 1,
		decimals: 18,
		name: "Dogira",
		symbol: "DOGIRA"
	},
	{
		address: "0xE7a7ef72466167fF78e08ad76b12CA0C13C496E1",
		chainId: 1,
		decimals: 18,
		name: "DogStonks Pro",
		symbol: "DOGPRO"
	},
	{
		address: "0x9c405acf8688AfB61B3197421cDeeC1A266c6839",
		chainId: 1,
		decimals: 18,
		name: "DogeYield",
		symbol: "DOGY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x82A77710495A35549D2aDD797412b4a4497D33eF",
		chainId: 1,
		decimals: 18,
		name: "Dogz",
		symbol: "DOGZ"
	},
	{
		address: "0x180dAe91D6d56235453a892d2e56a3E40Ba81DF8",
		chainId: 1,
		decimals: 18,
		name: "DOJO",
		symbol: "DOJO"
	},
	{
		address: "0x9cEB84f92A0561fa3Cc4132aB9c0b76A59787544",
		chainId: 1,
		decimals: 18,
		name: "Doki Doki",
		symbol: "DOKI"
	},
	{
		address: "0x865377367054516e17014CcdED1e7d814EDC9ce4",
		chainId: 1,
		decimals: 18,
		name: "Dola USD Stablecoin",
		symbol: "DOLA"
	},
	{
		address: "0x217ddEad61a42369A266F1Fb754EB5d3EBadc88a",
		chainId: 1,
		decimals: 18,
		name: "Don-key",
		symbol: "DON",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE4F6D46C244Bb7Cf3e218CDFB5C35cf9a4d9c920",
		chainId: 1,
		decimals: 18,
		name: "Donkey",
		symbol: "DONK"
	},
	{
		address: "0xC0F9bD5Fa5698B6505F643900FFA515Ea5dF54A9",
		chainId: 1,
		decimals: 18,
		name: "Donut",
		symbol: "DONUT",
		extensions: {
			color: "#F7518B",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x7D48FBe0A877bB1f511fcf9B57F12420C75841e9",
		chainId: 1,
		decimals: 18,
		name: "DOOR",
		symbol: "DOOR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6bB61215298F296C55b19Ad842D3Df69021DA2ef",
		chainId: 1,
		decimals: 18,
		name: "Drops Ownership Pow",
		symbol: "DOP"
	},
	{
		address: "0x906b3f8b7845840188Eab53c3f5AD348A787752f",
		chainId: 1,
		decimals: 15,
		name: "Dorado",
		symbol: "DOR"
	},
	{
		address: "0xbc4171f45EF0EF66E76F979dF021a34B46DCc81d",
		chainId: 1,
		decimals: 18,
		name: "Dora Factory",
		symbol: "DORA"
	},
	{
		address: "0x0A913beaD80F321E7Ac35285Ee10d9d922659cB7",
		chainId: 1,
		decimals: 18,
		name: "DOS Network",
		symbol: "DOS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFAb5a05C933f1A2463E334E011992E897D56eF0a",
		chainId: 1,
		decimals: 18,
		name: "DeFi of Thrones",
		symbol: "DOTX"
	},
	{
		address: "0xad32A8e6220741182940c5aBF610bDE99E737b2D",
		chainId: 1,
		decimals: 18,
		name: "PieDAO DOUGH v2",
		symbol: "DOUGH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xac3211a5025414Af2866FF09c23FC18bc97e79b1",
		chainId: 1,
		decimals: 18,
		name: "Dovu",
		symbol: "DOV"
	},
	{
		address: "0x76974C7B79dC8a6a109Fd71fd7cEb9E40eff5382",
		chainId: 1,
		decimals: 18,
		name: "Dowcoin",
		symbol: "DOW"
	},
	{
		address: "0xEEF6E90034eEa89E31Eb4B8eaCd323F28A92eaE4",
		chainId: 1,
		decimals: 18,
		name: "DOW",
		symbol: "DOW"
	},
	{
		address: "0x661Ab0Ed68000491d98C796146bcF28c20d7c559",
		chainId: 1,
		decimals: 18,
		name: "Shadows",
		symbol: "DOWS"
	},
	{
		address: "0xfb62AE373acA027177D1c18Ee0862817f9080d08",
		chainId: 1,
		decimals: 18,
		name: "My DeFi Pet",
		symbol: "DPET",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x875353Da48C4f9627c4D0b8B8c37B162fC43ce67",
		chainId: 1,
		decimals: 18,
		name: "Digipharm",
		symbol: "DPH"
	},
	{
		address: "0x1494CA1F11D487c2bBe4543E90080AeBa4BA3C2b",
		chainId: 1,
		decimals: 18,
		name: "DefiPulse Index",
		symbol: "DPI",
		extensions: {
			color: "#8150E6",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x01b3Ec4aAe1B8729529BEB4965F27d008788B0EB",
		chainId: 1,
		decimals: 18,
		name: "Digital Assets Power Play",
		symbol: "DPP"
	},
	{
		address: "0xf3AE5d769e153Ef72b4e3591aC004E89F48107a1",
		chainId: 1,
		decimals: 18,
		name: "Deeper Network",
		symbol: "DPR"
	},
	{
		address: "0x10c71515602429C19d53011EA7040B87a4894838",
		chainId: 1,
		decimals: 18,
		name: "Diamond Platform To",
		symbol: "DPT"
	},
	{
		address: "0xEec2bE5c91ae7f8a338e1e5f3b5DE49d07AfdC81",
		chainId: 1,
		decimals: 18,
		name: "Dopex",
		symbol: "DPX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6C2adC2073994fb2CCC5032cC2906Fa221e9B391",
		chainId: 1,
		decimals: 18,
		name: "Delphy",
		symbol: "DPY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x80c74b9166b2FAA5DC6a950f741f59A80026CDA0",
		chainId: 1,
		decimals: 9,
		name: "Doge Strap",
		symbol: "DRAP"
	},
	{
		address: "0x86642d169dB9F57A02C65052049CbbbfB3E3b08c",
		chainId: 1,
		decimals: 4,
		name: "dRAY",
		symbol: "DRAY"
	},
	{
		address: "0xC2e3ED7F61D338755BF7b6fB4bAA0ffFadA4AC28",
		chainId: 1,
		decimals: 18,
		name: "Dmaarc",
		symbol: "DRC"
	},
	{
		address: "0xa150Db9b1Fa65b44799d4dD949D922c0a33Ee606",
		chainId: 1,
		decimals: 0,
		name: "Digital Reserve Cur",
		symbol: "DRC"
	},
	{
		address: "0xb78B3320493a4EFaa1028130C5Ba26f0B6085Ef8",
		chainId: 1,
		decimals: 18,
		name: "Dracula Token",
		symbol: "DRC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd7f5CABdF696D7d1bf384D7688926A4bdB092c67",
		chainId: 1,
		decimals: 18,
		name: "DRC Mobility",
		symbol: "DRC"
	},
	{
		address: "0x9d561d63375672ABd02119b9Bc4FB90EB9E307Ca",
		chainId: 1,
		decimals: 18,
		name: "Ally Direct",
		symbol: "DRCT"
	},
	{
		address: "0x1977bE49C33dFacF6590C16ca9a9CfA0463f663c",
		chainId: 1,
		decimals: 18,
		name: "DoRen",
		symbol: "DRE"
	},
	{
		address: "0x82f4dED9Cec9B5750FBFf5C2185AEe35AfC16587",
		chainId: 1,
		decimals: 6,
		name: "DreamTeam",
		symbol: "DREAM"
	},
	{
		address: "0xa93D5Cfaa41193b13321c035b4bDD2B534172762",
		chainId: 1,
		decimals: 18,
		name: "Dream Swap",
		symbol: "DREAM"
	},
	{
		address: "0x3Ab6Ed69Ef663bd986Ee59205CCaD8A20F98b4c2",
		chainId: 1,
		decimals: 18,
		name: "Drep  new",
		symbol: "DREP"
	},
	{
		address: "0x22dE9912cd3D74953B1cd1F250B825133cC2C1b3",
		chainId: 1,
		decimals: 18,
		name: "DREP",
		symbol: "DREP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x814F67fA286f7572B041D041b1D99b432c9155Ee",
		chainId: 1,
		decimals: 8,
		name: "Dragon Coin",
		symbol: "DRG"
	},
	{
		address: "0x9d3e0892D11f19f5181d4a4C5d04187a9e0d7032",
		chainId: 1,
		decimals: 18,
		name: "Dragonbit",
		symbol: "DRGB"
	},
	{
		address: "0x419c4dB4B9e25d6Db2AD9691ccb832C8D9fDA05E",
		chainId: 1,
		decimals: 18,
		name: "Dragonchain",
		symbol: "DRGN",
		extensions: {
			color: "#c91111",
			isVerified: true
		}
	},
	{
		address: "0x223FB5c14C00Cfb70cF56BB63c2EeF2d74fE1A78",
		chainId: 1,
		decimals: 18,
		name: "3X Short Dragon Ind",
		symbol: "DRGNBEAR"
	},
	{
		address: "0x3335f16AF9008bFd32f1eE6C2Be5d4f84FA0b9da",
		chainId: 1,
		decimals: 18,
		name: "3X Long Dragon Inde",
		symbol: "DRGNBULL"
	},
	{
		address: "0x239119c43e3caC84c8a2D45bcBA0E46F528E5F77",
		chainId: 1,
		decimals: 9,
		name: "Dripper",
		symbol: "DRIP"
	},
	{
		address: "0x2369686fC9FB6E1fDc46541891568c2f341906eF",
		chainId: 1,
		decimals: 18,
		name: "Drakoin",
		symbol: "DRK"
	},
	{
		address: "0x89551b940e2A8ED8eCcF509935bAc9213fE30584",
		chainId: 1,
		decimals: 18,
		name: "DoDreamChain",
		symbol: "DRM"
	},
	{
		address: "0x3c75226555FC496168d48B88DF83B95F16771F37",
		chainId: 1,
		decimals: 0,
		name: "Droplex",
		symbol: "DROP"
	},
	{
		address: "0x4672bAD527107471cB5067a887f4656D585a8A31",
		chainId: 1,
		decimals: 18,
		name: "Dropil",
		symbol: "DROP",
		extensions: {
			color: "#242d3d",
			isVerified: true
		}
	},
	{
		address: "0x2799D90C6d44Cb9Aa5fBC377177F16C33E056b82",
		chainId: 1,
		decimals: 0,
		name: "Dripcoin",
		symbol: "DRP"
	},
	{
		address: "0x621d78f2EF2fd937BFca696CabaF9A779F59B3Ed",
		chainId: 1,
		decimals: 2,
		name: "DCorp",
		symbol: "DRP"
	},
	{
		address: "0xe30e02f049957e2A5907589e06Ba646fB2c321bA",
		chainId: 1,
		decimals: 8,
		name: "DCORP Utility",
		symbol: "DRPU"
	},
	{
		address: "0x9AF4f26941677C706cfEcf6D3379FF01bB85D5Ab",
		chainId: 1,
		decimals: 8,
		name: "DomRaider",
		symbol: "DRT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x62D4c04644314F35868Ba4c65cc27a77681dE7a9",
		chainId: 1,
		decimals: 18,
		name: "Driveholic Token",
		symbol: "DRVH"
	},
	{
		address: "0xB67bEB26eBeb0DCEec354aE0942256d03c01771b",
		chainId: 1,
		decimals: 18,
		name: "DeStorage",
		symbol: "DS"
	},
	{
		address: "0x2A40251ba733F10835447a8fcf0e0f1CE658F18A",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT",
		symbol: "dsBAT"
	},
	{
		address: "0x143b591DE9CFf2BaFFB717aC0d109Bc5C01e203e",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT 2x",
		symbol: "dsBAT2x"
	},
	{
		address: "0x83A0dC31700Af1772B7Ea84Fde7675ca6021b5dA",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT 3x",
		symbol: "dsBAT3x"
	},
	{
		address: "0xc37a0d81D9610514db1047dE52e9A9093530D2E4",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT 4x",
		symbol: "dsBAT4x"
	},
	{
		address: "0x1e09BD8Cadb441632e441Db3e1D79909EE0A2256",
		chainId: 1,
		decimals: 1,
		name: "Digital Safe Coin",
		symbol: "DSC"
	},
	{
		address: "0x03e3f0c25965f13DbbC58246738C183E27b26a56",
		chainId: 1,
		decimals: 18,
		name: "Disciplina Token",
		symbol: "DSCP"
	},
	{
		address: "0xdECE0F6864c1511369ae2c30B90Db9f5fe92832c",
		chainId: 1,
		decimals: 18,
		name: "Disciplina",
		symbol: "DSCP"
	},
	{
		address: "0x3eE6E46f52c475c52040b934745501F2A0cEa252",
		chainId: 1,
		decimals: 18,
		name: "DSCVR Finance",
		symbol: "DSCVR"
	},
	{
		address: "0x1e3a2446C729D34373B87FD2C9CBb39A93198658",
		chainId: 1,
		decimals: 18,
		name: "DeFi Nation Signals",
		symbol: "DSD"
	},
	{
		address: "0xBD2F0Cd039E0BFcf88901C98c0bFAc5ab27566e3",
		chainId: 1,
		decimals: 18,
		name: "Dynamic Set Dollar",
		symbol: "DSD"
	},
	{
		address: "0x136Bced3aF8530B81e4C7ff45c9228376726D173",
		chainId: 1,
		decimals: 18,
		name: "Dolphin Token",
		symbol: "DSE"
	},
	{
		address: "0x29838a8f16eA5D23dF476f1b1dAb62fce7883a6b",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH",
		symbol: "dsETH"
	},
	{
		address: "0x3A2505e1ba2D035C18E5492334763d2932Dcf504",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH-DAI v2",
		symbol: "dsETH"
	},
	{
		address: "0x840D872c6aCeD0Dc5cCD72A7C7bf71496Bbc6C40",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH 2x",
		symbol: "dsETH2x"
	},
	{
		address: "0xBf280eEa78369E250007AFD4dD1Ac8E3C3416e63",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH-DAI 2x v2",
		symbol: "dsETH2x"
	},
	{
		address: "0x2C6b9bbB0B17CF86b687f418f1d34FA92D15f6FC",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH 3x",
		symbol: "dsETH3x"
	},
	{
		address: "0xeD99C18F90f61B45Abab533c5Eb021BD5a5F19C6",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH-DAI 3x v2",
		symbol: "dsETH3x"
	},
	{
		address: "0x2Ba3302C974B0B8d38ADf2E7Aa362c9bFF47d1Cc",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH-DAI 4x v2",
		symbol: "dsETH4x"
	},
	{
		address: "0xE650c2Aa677935Fb10c5e09fFa9Ad97D1fBc4e9f",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH 4x",
		symbol: "dsETH4x"
	},
	{
		address: "0x537A9095b78517597b5f2058EDcd6E1978095909",
		chainId: 1,
		decimals: 4,
		name: "Design",
		symbol: "DSGN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x692a2b8bE7E166D6EE93B22A4B8B351e5d444339",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC 2x",
		symbol: "dsKNC"
	},
	{
		address: "0x30BB2D30B3A3A3F4943f81d460b45D2dac5735DF",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC 2x",
		symbol: "dsKNC2x"
	},
	{
		address: "0x5E9188280e1e35aE8F899b09C97558d0F195cC14",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC 3x",
		symbol: "dsKNC3x"
	},
	{
		address: "0x4665A6F4F78bc13ACECB328f5f22f0e4e66D2285",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC 4x",
		symbol: "dsKNC4x"
	},
	{
		address: "0x3aFfCCa64c2A6f4e3B6Bd9c64CD2C969EFd1ECBe",
		chainId: 1,
		decimals: 18,
		name: "DSLA Protocol",
		symbol: "DSLA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xAabFD407F367b632022b4bDe289D9c85F1A024d2",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short LINK-DAI v2",
		symbol: "dsLINK"
	},
	{
		address: "0xa901e48DB5a856Da5F27E74a936259808D4C83Af",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short LINK-DAI 2x v2",
		symbol: "dsLINK2x"
	},
	{
		address: "0xFdB47008B909d53D4E411306d5bA5af77491e871",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short LINK-DAI 3x v2",
		symbol: "dsLINK3x"
	},
	{
		address: "0x937EFce07594d14f878650d5B637f022952FAe86",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short LINK-DAI 4x v2",
		symbol: "dsLINK4x"
	},
	{
		address: "0xe33297B993c89a55806932138804B0dBB8d7cA1c",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short REP",
		symbol: "dsREP"
	},
	{
		address: "0x44262A6a07256F0711F815451F2CD1a028A0A755",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short REP 2x",
		symbol: "dsREP2x"
	},
	{
		address: "0xEc3de33967898c47Ec8fBb162B939C7014bD0601",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short REP 3x",
		symbol: "dsREP3x"
	},
	{
		address: "0x66564D3BCec69c7fbeFea185Bd6b9faA57fAEbB9",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short REP 4x",
		symbol: "dsREP4x"
	},
	{
		address: "0x213C53C96A01a89E6Dcc5683cF16473203E17513",
		chainId: 1,
		decimals: 18,
		name: "Defi Shopping Stake",
		symbol: "DSS"
	},
	{
		address: "0x68d53441c0e253f76c500e551bdeA3D102206C9a",
		chainId: 1,
		decimals: 18,
		name: "Dimensions Strike Token",
		symbol: "DST"
	},
	{
		address: "0xfa9C3dC54baA9eefBe9453B1f3B3B93aD2AF0A77",
		chainId: 1,
		decimals: 18,
		name: "Dynamic Supply",
		symbol: "DST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x55696EfC7c9779d868Ac34aC6b4a4C5FeD61aC12",
		chainId: 1,
		decimals: 18,
		name: "Dynamic Supply Tracker",
		symbol: "DSTR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x605D26FBd5be761089281d5cec2Ce86eeA667109",
		chainId: 1,
		decimals: 18,
		name: "Digital Standard Un",
		symbol: "DSU"
	},
	{
		address: "0x3f344C88d823F180Fb8b44A3C7Cfc4edc92dFa35",
		chainId: 1,
		decimals: 6,
		name: "Definex",
		symbol: "DSWAP"
	},
	{
		address: "0x9fC208947d92B1588F7BdE245620439568A8587a",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short WBTC",
		symbol: "dsWBTC"
	},
	{
		address: "0x671C7886C61A18Fc6E94893A791eaa069D70eBA7",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short WBTC 2x",
		symbol: "dsWBTC2x"
	},
	{
		address: "0x849548F5D966017b6b49F6a3A740BBDb78176eDB",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short WBTC 3x",
		symbol: "dsWBTC3x"
	},
	{
		address: "0x2fC9F52240F68eF0f178e1B896435D8f64A8DFaa",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short WBTC 4x",
		symbol: "dsWBTC4x"
	},
	{
		address: "0x10a34bbE9B3C5AD536cA23D5EefA81CA448e92fF",
		chainId: 1,
		decimals: 18,
		name: "DSYS",
		symbol: "DSYS"
	},
	{
		address: "0xDf0d727742A8A9eAcfC3305C687a0d21826daE7e",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ZRX",
		symbol: "dsZRX"
	},
	{
		address: "0xe18E1789B96Fef7369095de1303c3acdcF03775A",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ZRX 2x",
		symbol: "dsZRX2x"
	},
	{
		address: "0x48786d243897C581e88b598D4F786Fb7169E08aC",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ZRX 3x",
		symbol: "dsZRX3x"
	},
	{
		address: "0xb70AE77FF9EcF13baea9807618ec7236ACf44bd1",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ZRX 4x",
		symbol: "dsZRX4x"
	},
	{
		address: "0x69b148395Ce0015C13e36BFfBAd63f49EF874E03",
		chainId: 1,
		decimals: 18,
		name: "DATA",
		symbol: "DTA"
	},
	{
		address: "0x5adc961D6AC3f7062D2eA45FEFB8D8167d44b190",
		chainId: 1,
		decimals: 18,
		name: "Dether",
		symbol: "DTH",
		extensions: {
			color: "#3c80f1",
			isVerified: true
		}
	},
	{
		address: "0x54Ad74EdeAB48e09ccC43eE324f2603071dAD72b",
		chainId: 1,
		decimals: 18,
		name: "DTOP Token",
		symbol: "DTOP"
	},
	{
		address: "0x0f4c00139602AB502Bc7c1c0e71D6CB72A9FB0e7",
		chainId: 1,
		decimals: 18,
		name: "dHEDGE Top Index",
		symbol: "DTOP"
	},
	{
		address: "0xd234BF2410a0009dF9c3C63b610c09738f18ccD7",
		chainId: 1,
		decimals: 8,
		name: "Dynamic Trading Rights",
		symbol: "DTR"
	},
	{
		address: "0xc20464e0C373486d2B3335576e83a218b1618A5E",
		chainId: 1,
		decimals: 18,
		name: "Datarius Credit",
		symbol: "DTRC"
	},
	{
		address: "0xf9F7c29CFdf19FCf1f2AA6B84aA367Bcf1bD1676",
		chainId: 1,
		decimals: 18,
		name: "Delphi Tech Token",
		symbol: "DTT"
	},
	{
		address: "0xd2be3722B17b616c51ed9B8944A227D1ce579C24",
		chainId: 1,
		decimals: 2,
		name: "Dtube Coin",
		symbol: "DTUBE"
	},
	{
		address: "0x765f0C16D1Ddc279295c1a7C24B0883F62d33F75",
		chainId: 1,
		decimals: 18,
		name: "DaTa eXchange Token",
		symbol: "DTX"
	},
	{
		address: "0x82fdedfB7635441aA5A92791D001fA7388da8025",
		chainId: 1,
		decimals: 18,
		name: "Digital Ticks",
		symbol: "DTX"
	},
	{
		address: "0x9c6Fa42209169bCeA032e401188a6fc3e9C9f59c",
		chainId: 1,
		decimals: 18,
		name: "Decentralized Universal Basic Income",
		symbol: "DUBI"
	},
	{
		address: "0xD4CffeeF10F60eCA581b5E1146B5Aca4194a4C3b",
		chainId: 1,
		decimals: 18,
		name: "Decentralized Universal Basic Income",
		symbol: "DUBI"
	},
	{
		address: "0xEd7fEA78C393cF7B17B152A8c2D0CD97aC31790B",
		chainId: 1,
		decimals: 18,
		name: "DUBI",
		symbol: "DUBI"
	},
	{
		address: "0x00763473e9d7c82f38Ed843F021e2558D7422AD8",
		chainId: 1,
		decimals: 4,
		name: "Ducat",
		symbol: "DUCAT"
	},
	{
		address: "0xa117ea1c0c85CEf648df2b6f40e50bb5475C228d",
		chainId: 1,
		decimals: 18,
		name: "Ducato Protocol Tok",
		symbol: "DUCATO"
	},
	{
		address: "0xC0bA369c8Db6eB3924965e5c4FD0b4C1B91e305F",
		chainId: 1,
		decimals: 18,
		name: "DLP Duck Token",
		symbol: "DUCK"
	},
	{
		address: "0x92E187a03B6CD19CB6AF293ba17F2745Fd2357D5",
		chainId: 1,
		decimals: 18,
		name: "Unit Protocol",
		symbol: "DUCK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd69AE79b01C4aF7F19b9a824e5643363b202B3a1",
		chainId: 1,
		decimals: 18,
		name: "Duet Protocol",
		symbol: "DUET"
	},
	{
		address: "0x73f2651EA38d48B3B808ffdDbd398Fd600aB5BA7",
		chainId: 1,
		decimals: 4,
		name: "Dukascoin",
		symbol: "DUK+"
	},
	{
		address: "0x56e0B2C7694E6e10391E870774daA45cf6583486",
		chainId: 1,
		decimals: 18,
		name: "DUO Network",
		symbol: "DUO"
	},
	{
		address: "0x5BC25f649fc4e26069dDF4cF4010F9f706c23831",
		chainId: 1,
		decimals: 18,
		name: "DefiDollar",
		symbol: "DUSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x00000000008943c65cAf789FFFCF953bE156f6f8",
		chainId: 1,
		decimals: 8,
		name: "Dharma USDC",
		symbol: "dUSDC"
	},
	{
		address: "0x940a2dB1B7008B6C776d4faaCa729d6d4A4AA551",
		chainId: 1,
		decimals: 18,
		name: "DUSK Network",
		symbol: "DUSK"
	},
	{
		address: "0xbCa3C97837A39099eC3082DF97e28CE91BE14472",
		chainId: 1,
		decimals: 8,
		name: "DUST Token",
		symbol: "DUST"
	},
	{
		address: "0x5E6FFe7B174A50c81fF3f3c54c04fD3c11E20830",
		chainId: 1,
		decimals: 18,
		name: "DragonVein",
		symbol: "DVC"
	},
	{
		address: "0x77dcE26c03a9B833fc2D7C31C22Da4f42e9d9582",
		chainId: 1,
		decimals: 18,
		name: "DAOventures",
		symbol: "DVD"
	},
	{
		address: "0xDDdddd4301A082e62E84e43F474f044423921918",
		chainId: 1,
		decimals: 18,
		name: "DVF",
		symbol: "DVF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x10633216E7E8281e33c86F02Bf8e565a635D9770",
		chainId: 1,
		decimals: 18,
		name: "Dvision Network",
		symbol: "DVI"
	},
	{
		address: "0x8E30ea2329D95802Fd804f4291220b0e2F579812",
		chainId: 1,
		decimals: 18,
		name: "Decentralized Vulne",
		symbol: "DVP"
	},
	{
		address: "0xdcbcfFEEe34eB128336FD45eD62fe8f420c8857d",
		chainId: 1,
		decimals: 8,
		name: "Davies",
		symbol: "DVS"
	},
	{
		address: "0x975769557510167d25BEed6E32806537173E292C",
		chainId: 1,
		decimals: 18,
		name: "Derivex",
		symbol: "DVX"
	},
	{
		address: "0xc626C9e2247c8A0C863ad6DaA97ed939E12786DE",
		chainId: 1,
		decimals: 8,
		name: "Digital Wallet",
		symbol: "DWC"
	},
	{
		address: "0xF4B54874cD8a6C863e3A904c18fDa964661Ec363",
		chainId: 1,
		decimals: 18,
		name: "DWS",
		symbol: "DWS"
	},
	{
		address: "0x7DEE45dff03ec7137979586cA20a2F4917BAC9Fa",
		chainId: 1,
		decimals: 18,
		name: "DeFi Wizard",
		symbol: "DWZ"
	},
	{
		address: "0x973e52691176d36453868D9d86572788d27041A9",
		chainId: 1,
		decimals: 18,
		name: "DxChain Token",
		symbol: "DX"
	},
	{
		address: "0xb0E99627bC29adEf1178f16117BF495351E81997",
		chainId: 1,
		decimals: 18,
		name: "Dex Trade Coin",
		symbol: "DXC"
	},
	{
		address: "0xa1d65E8fB6e87b60FECCBc582F7f97804B725521",
		chainId: 1,
		decimals: 18,
		name: "DXdao",
		symbol: "DXD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x15Eabb7500E44B7Fdb6e4051cA8DecA430cF9FB8",
		chainId: 1,
		decimals: 18,
		name: "Dexfin",
		symbol: "DXF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x42891d10B550d0c5C4ac2e17bcD7E2A19C7230f0",
		chainId: 1,
		decimals: 18,
		name: "Daxhund",
		symbol: "DXH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8b6DD24Bcb2D0aeA92c3AbD4eB11103A5DB6D714",
		chainId: 1,
		decimals: 18,
		name: "dXIOT",
		symbol: "DXIOT"
	},
	{
		address: "0xffF3ada5A2555a2B59BfF4F44DFad90146CcE8CB",
		chainId: 1,
		decimals: 18,
		name: "DEXTER Token",
		symbol: "DXR"
	},
	{
		address: "0x8dB54ca569D3019A2ba126D03C37c44b5eF81EF6",
		chainId: 1,
		decimals: 8,
		name: "Datawallet",
		symbol: "DXT"
	},
	{
		address: "0x39Fa206c1648944f92E8F7B626e1CBdf78d7E9dB",
		chainId: 1,
		decimals: 18,
		name: "DXY Finance",
		symbol: "DXY"
	},
	{
		address: "0x3B7f247f21BF3A07088C2D3423F64233d4B069F7",
		chainId: 1,
		decimals: 2,
		name: "Dynamite Token",
		symbol: "DYNMT"
	},
	{
		address: "0x961C8c0B1aaD0c0b10a51FeF6a867E3091BCef17",
		chainId: 1,
		decimals: 18,
		name: "DeFi Yield Protocol",
		symbol: "DYP"
	},
	{
		address: "0x740623d2c797b7D8D1EcB98e9b4Afcf99Ec31E14",
		chainId: 1,
		decimals: 18,
		name: "DoYourTip",
		symbol: "DYT"
	},
	{
		address: "0x042f972AC93404f0fcBe4E3A0729F0B395232106",
		chainId: 1,
		decimals: 8,
		name: "XCoinPay",
		symbol: "DYX"
	},
	{
		address: "0x9Cb2f26A23b8d89973F08c957C4d7cdf75CD341c",
		chainId: 1,
		decimals: 6,
		name: "Digital Rand",
		symbol: "DZAR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb67734521eAbBE9C773729dB73E16CC2dfb20A58",
		chainId: 1,
		decimals: 2,
		name: "eRupee",
		symbol: "E₹"
	},
	{
		address: "0xA0b84460a1e78339692C7463009c35f0B9A6AE4C",
		chainId: 1,
		decimals: 18,
		name: "E2P Group",
		symbol: "E2P"
	},
	{
		address: "0xCe5c603C78d047Ef43032E96b5B785324f753a4F",
		chainId: 1,
		decimals: 2,
		name: "E4ROW",
		symbol: "E4ROW"
	},
	{
		address: "0x994f0DffdbaE0BbF09b652D6f11A493fd33F42B9",
		chainId: 1,
		decimals: 18,
		name: "EagleCoin",
		symbol: "EAGLE"
	},
	{
		address: "0xB4742e2013f96850a5CeF850A3bB74cF63B9a5D5",
		chainId: 1,
		decimals: 18,
		name: "EANTO",
		symbol: "EAN"
	},
	{
		address: "0x1cAa202Df9240D7b464D9486A6F1542768EF0D30",
		chainId: 1,
		decimals: 9,
		name: "Ethereum Apex",
		symbol: "EAPEX"
	},
	{
		address: "0x31e92324ef7185c65dD4D154Cfa4F6326b489C55",
		chainId: 1,
		decimals: 8,
		name: "Earn Network",
		symbol: "EARN"
	},
	{
		address: "0x900b4449236a7bb26b286601dD14d2bDe7a6aC6c",
		chainId: 1,
		decimals: 8,
		name: "Earth Token",
		symbol: "EARTH"
	},
	{
		address: "0xc36C65693eA9e207Ad35d4EE2Fb6c5F6f43BDEC8",
		chainId: 1,
		decimals: 18,
		name: "Eauric",
		symbol: "EAURIC"
	},
	{
		address: "0xa689DCEA8f7ad59fb213be4bc624ba5500458dC6",
		chainId: 1,
		decimals: 18,
		name: "EURBASE",
		symbol: "EBASE"
	},
	{
		address: "0x31f3D9D1BeCE0c033fF78fA6DA60a6048F3E13c5",
		chainId: 1,
		decimals: 18,
		name: "EBCoin",
		symbol: "EBC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaFC39788c51f0c1Ff7B55317f3e70299e521Fff6",
		chainId: 1,
		decimals: 8,
		name: "eBCH",
		symbol: "eBCH"
	},
	{
		address: "0x253444bd9ECf11E5516d6D00974e91c9F0857CCB",
		chainId: 1,
		decimals: 18,
		name: "ETH BTC Long Only A",
		symbol: "EBLOAP"
	},
	{
		address: "0x33840024177A7DacA3468912363BeD8b425015c5",
		chainId: 1,
		decimals: 18,
		name: "Ethbox Token",
		symbol: "EBOX"
	},
	{
		address: "0x6f063c0fcda0eA6dCC01D5A7cB3066ed4F90d1A8",
		chainId: 1,
		decimals: 0,
		name: "EBSP Token",
		symbol: "EBSP"
	},
	{
		address: "0xeB7C20027172E5d143fB030d50f91Cece2D1485D",
		chainId: 1,
		decimals: 8,
		name: "eBitcoin",
		symbol: "EBTC"
	},
	{
		address: "0x12fD19DAC0Fab61bEd5e0F09091B470C452D4d61",
		chainId: 1,
		decimals: 18,
		name: "Echoin",
		symbol: "EC"
	},
	{
		address: "0x5D21eF5f25a985380B65c8e943A0082fEDa0Db84",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Cash",
		symbol: "ECASH"
	},
	{
		address: "0x906710835d1ae85275eb770F06873340cA54274b",
		chainId: 1,
		decimals: 9,
		name: "Ethereum Cash Token",
		symbol: "ECASH"
	},
	{
		address: "0x9b62Ec1453cEa5Dde760AAf662048cA6eEB66E7f",
		chainId: 1,
		decimals: 2,
		name: "CellETF",
		symbol: "ECELL"
	},
	{
		address: "0xA1f82E14bc09A1b42710dF1A8a999B62f294e592",
		chainId: 1,
		decimals: 18,
		name: "Wrapped CFX",
		symbol: "eCFX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x171706B7D113c68f2cc68a6CE63b1dbDcdF7B233",
		chainId: 1,
		decimals: 18,
		name: "Echo Token",
		symbol: "ECHO"
	},
	{
		address: "0x08e411220e47e3Fc43BFb832186ABA95108F2861",
		chainId: 1,
		decimals: 18,
		name: "Eclipseum",
		symbol: "ECL"
	},
	{
		address: "0xa578aCc0cB7875781b7880903F4594D13cFa8B98",
		chainId: 1,
		decimals: 2,
		name: "ECN",
		symbol: "ECN"
	},
	{
		address: "0x191557728e4d8CAa4Ac94f86af842148c0FA8F7E",
		chainId: 1,
		decimals: 8,
		name: "Ormeus Ecosystem",
		symbol: "ECO"
	},
	{
		address: "0xC242Eb8e4E27EAE6a2A728A41201152F19595C83",
		chainId: 1,
		decimals: 18,
		name: "EcoFi",
		symbol: "ECO"
	},
	{
		address: "0x17F93475d2A978f527c3f7c44aBf44AdfBa60D5C",
		chainId: 1,
		decimals: 2,
		name: "EtherCO2",
		symbol: "ECO2"
	},
	{
		address: "0x171D750d42d661B62C277a6B486ADb82348c3Eca",
		chainId: 1,
		decimals: 18,
		name: "Omnitude",
		symbol: "ECOM"
	},
	{
		address: "0xb052F8A33D8bb068414EaDE06AF6955199f9f010",
		chainId: 1,
		decimals: 18,
		name: "Ecoreal Estate",
		symbol: "ECOREAL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8869b1F9bC8B246a4D7220F834E56ddfdd8255E7",
		chainId: 1,
		decimals: 18,
		name: "ECrypto Coin",
		symbol: "ECP"
	},
	{
		address: "0xAEA1C18A992984831002D0cf90E291FB52d72649",
		chainId: 1,
		decimals: 18,
		name: "ECRYPTO COIN",
		symbol: "ECP"
	},
	{
		address: "0x8B8a8A91d7b8EC2E6ab37Ed8FFbAcEE062C6F3C7",
		chainId: 1,
		decimals: 6,
		name: "ECP  Technology",
		symbol: "ECP"
	},
	{
		address: "0xB55732a15B3DC5d6e8D4ADf40634f37470da71Fa",
		chainId: 1,
		decimals: 8,
		name: "ECPN Token",
		symbol: "ECPN"
	},
	{
		address: "0x59d71082d8a5B18ebc6b653Ae422ac4383CD2597",
		chainId: 1,
		decimals: 9,
		name: "Ethereum Chain Toke",
		symbol: "ECT"
	},
	{
		address: "0xe9fa21E671BcfB04E6868784b89C19d5aa2424Ea",
		chainId: 1,
		decimals: 18,
		name: "EurocoinToken",
		symbol: "ECTE"
	},
	{
		address: "0x8fc9b6354E839AB1c8B31F4afa53607092B8C2e5",
		chainId: 1,
		decimals: 18,
		name: "ECOSC",
		symbol: "ECU"
	},
	{
		address: "0xd3CDc4e75750DC1e59F8342200742B6B29490e70",
		chainId: 1,
		decimals: 3,
		name: "Decurian",
		symbol: "ECU"
	},
	{
		address: "0xFA1DE2Ee97e4c10C94C91Cb2b5062b89Fb140b82",
		chainId: 1,
		decimals: 6,
		name: "Education Credits",
		symbol: "EDC"
	},
	{
		address: "0x9d5963ba32e877871dfF3e2E697283dc64066271",
		chainId: 1,
		decimals: 18,
		name: "Edcoin",
		symbol: "EDC"
	},
	{
		address: "0xFbbE9b1142C699512545f47937Ee6fae0e4B0aA9",
		chainId: 1,
		decimals: 18,
		name: "EDDASwap",
		symbol: "EDDA"
	},
	{
		address: "0x1559FA1b8F28238FD5D76D9f434ad86FD20D1559",
		chainId: 1,
		decimals: 18,
		name: "EDEN",
		symbol: "EDEN"
	},
	{
		address: "0x08711D3B02C8758F2FB3ab4e80228418a7F8e39c",
		chainId: 1,
		decimals: 0,
		name: "Edgeless",
		symbol: "EDG",
		extensions: {
			color: "#2b1544",
			isVerified: true
		}
	},
	{
		address: "0x3B046FDE911D3b6f9cAA4759DBcfB034a87648BA",
		chainId: 1,
		decimals: 8,
		name: "Elon Diamond Hands",
		symbol: "EDH"
	},
	{
		address: "0x79C5a1Ae586322A07BfB60be36E1b31CE8C84A1e",
		chainId: 1,
		decimals: 18,
		name: "Freight Trust Netwo",
		symbol: "EDI"
	},
	{
		address: "0x89020f0D5C5AF4f3407Eb5Fe185416c457B0e93e",
		chainId: 1,
		decimals: 18,
		name: "Edenchain",
		symbol: "EDN"
	},
	{
		address: "0xCeD4E93198734dDaFf8492d525Bd258D49eb388E",
		chainId: 1,
		decimals: 18,
		name: "Eidoo",
		symbol: "EDO",
		extensions: {
			color: "#242424",
			isVerified: true
		}
	},
	{
		address: "0xc528c28FEC0A90C083328BC45f587eE215760A0F",
		chainId: 1,
		decimals: 18,
		name: "Endor Protocol Toke",
		symbol: "EDR"
	},
	{
		address: "0x2A22e5cCA00a3D63308fa39f29202eB1b39eEf52",
		chainId: 1,
		decimals: 18,
		name: "EDU Token",
		symbol: "EDU"
	},
	{
		address: "0xf263292e14d9D8ECd55B58dAD1F1dF825a874b7c",
		chainId: 1,
		decimals: 18,
		name: "Educoin",
		symbol: "EDU"
	},
	{
		address: "0xBF8d8F1242b95dfBAe532aF6B0F4463905415CC1",
		chainId: 1,
		decimals: 18,
		name: "Edex",
		symbol: "EDX"
	},
	{
		address: "0x3cC5EB07E0e1227613F1DF58f38b549823d11cB9",
		chainId: 1,
		decimals: 18,
		name: "Ethereum eRush",
		symbol: "EER"
	},
	{
		address: "0x656C00e1BcD96f256F224AD9112FF426Ef053733",
		chainId: 1,
		decimals: 18,
		name: "Efinity",
		symbol: "EFI"
	},
	{
		address: "0x6653C0d21507573Cc39EAD1E609D74d5E0cA16e2",
		chainId: 1,
		decimals: 18,
		name: "ReFork",
		symbol: "EFK"
	},
	{
		address: "0xb53A96bcBdD9CF78dfF20BAB6C2be7bAec8f00f8",
		chainId: 1,
		decimals: 8,
		name: "ETH GAS",
		symbol: "eGAS"
	},
	{
		address: "0xc0EC8CaEC55F37D47fBfA595727418868A21fd48",
		chainId: 1,
		decimals: 8,
		name: "EcoG9coin",
		symbol: "EGC"
	},
	{
		address: "0xAf8A215e81FAea7C180CE22b72483525121813BD",
		chainId: 1,
		decimals: 18,
		name: "Engine",
		symbol: "EGCC"
	},
	{
		address: "0x999Aa6488f076e6765448f090Aba83FbB470fC99",
		chainId: 1,
		decimals: 18,
		name: "Egg Token",
		symbol: "EGG"
	},
	{
		address: "0x65cCD72c0813CE6f2703593B633202a0F3Ca6a0c",
		chainId: 1,
		decimals: 18,
		name: "Nestree",
		symbol: "EGG"
	},
	{
		address: "0x8e1b448EC7aDFc7Fa35FC2e885678bD323176E34",
		chainId: 1,
		decimals: 18,
		name: "Egretia",
		symbol: "EGT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2aA5cE395b00CC486159aDbDD97c55b535CF2cf9",
		chainId: 1,
		decimals: 18,
		name: "ElasticDAO",
		symbol: "EGT"
	},
	{
		address: "0xa19bbEf64eFF0D060a653e4DF10a57B6d8006d3E",
		chainId: 1,
		decimals: 18,
		name: "Enegra",
		symbol: "EGX"
	},
	{
		address: "0x2942E3B38E33123965bfbc21E802bE943a76bbC6",
		chainId: 1,
		decimals: 18,
		name: "EHash",
		symbol: "EHASH"
	},
	{
		address: "0xf9F0FC7167c311Dd2F1e21E9204F87EBA9012fB2",
		chainId: 1,
		decimals: 8,
		name: "EasyHomes",
		symbol: "EHT"
	},
	{
		address: "0xa6a840E50bCaa50dA017b91A0D86B8b2d41156EE",
		chainId: 1,
		decimals: 18,
		name: "EchoLink",
		symbol: "EKO"
	},
	{
		address: "0xBAb165dF9455AA0F2AeD1f2565520B91DDadB4c8",
		chainId: 1,
		decimals: 8,
		name: "EDUCare",
		symbol: "EKT"
	},
	{
		address: "0x2781246fe707bB15CeE3e5ea354e2154a2877B16",
		chainId: 1,
		decimals: 18,
		name: "ELYSIA",
		symbol: "EL"
	},
	{
		address: "0xe6fd75ff38Adca4B97FBCD938c86b98772431867",
		chainId: 1,
		decimals: 18,
		name: "ELA on Ethereum",
		symbol: "ELA",
		extensions: {
			color: "#3fbadf",
			isVerified: true
		}
	},
	{
		address: "0xFb444c1f2B718dDfC385cB8Fd9f2D1D776b24668",
		chainId: 1,
		decimals: 18,
		name: "Elamachain",
		symbol: "ELAMA"
	},
	{
		address: "0x33E07f5055173cF8FeBedE8B21B12D1e2b523205",
		chainId: 1,
		decimals: 18,
		name: "Etherland",
		symbol: "ELAND",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf0C6521b1F8ad9C33a99Aaf056F6C6247A3862BA",
		chainId: 1,
		decimals: 18,
		name: "ETH limiteD",
		symbol: "ELD"
	},
	{
		address: "0x796E47B85A0d759F300f1de96A3583004235D4D8",
		chainId: 1,
		decimals: 18,
		name: "Electrum Dark",
		symbol: "ELD"
	},
	{
		address: "0x48bE867B240D2fFafF69e0746130F2c027d8d3d2",
		chainId: 1,
		decimals: 9,
		name: "Elevate",
		symbol: "ELE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD49ff13661451313cA1553fd6954BD1d9b6E02b9",
		chainId: 1,
		decimals: 18,
		name: "Electrify.Asia",
		symbol: "ELEC",
		extensions: {
			color: "#ff9900",
			isVerified: true
		}
	},
	{
		address: "0x6F0f28CeeE6aE686Ee0f939375674C01b156365a",
		chainId: 1,
		decimals: 18,
		name: "Elena Protocol",
		symbol: "ELENA"
	},
	{
		address: "0x6c37Bf4f042712C978A73e3fd56D1F5738dD7C43",
		chainId: 1,
		decimals: 18,
		name: "Elementeum",
		symbol: "ELET"
	},
	{
		address: "0xbf2179859fc6D5BEE9Bf9158632Dc51678a4100e",
		chainId: 1,
		decimals: 18,
		name: "aelf",
		symbol: "ELF"
	},
	{
		address: "0xA2085073878152aC3090eA13D1e41bD69e60Dc99",
		chainId: 1,
		decimals: 18,
		name: "Escoin Token",
		symbol: "ELG"
	},
	{
		address: "0xc8C6A31A4A806d3710A7B38b7B296D2fABCCDBA8",
		chainId: 1,
		decimals: 18,
		name: "Elixir Token",
		symbol: "ELIX"
	},
	{
		address: "0x761D38e5ddf6ccf6Cf7c55759d5210750B5D60F3",
		chainId: 1,
		decimals: 18,
		name: "Dogelon Mars",
		symbol: "ELON"
	},
	{
		address: "0x348B7f3106B5Da47405332534d06069fF9CE4d1B",
		chainId: 1,
		decimals: 9,
		name: "Elongate Deluxe",
		symbol: "ELONGD"
	},
	{
		address: "0x97b65710D03E12775189F0D113202cc1443b0aa2",
		chainId: 1,
		decimals: 9,
		name: "AstroElon",
		symbol: "ELONONE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x380291A9A8593B39f123cF39cc1cc47463330b1F",
		chainId: 1,
		decimals: 18,
		name: "Elite Swap",
		symbol: "ELT"
	},
	{
		address: "0x44197A4c44D6A059297cAf6be4F7e172BD56Caaf",
		chainId: 1,
		decimals: 8,
		name: "Eltcoin",
		symbol: "ELTCOIN"
	},
	{
		address: "0x9048c33c7BaE0bbe9ad702b17B4453a83900D154",
		chainId: 1,
		decimals: 18,
		name: "Energy Ledger",
		symbol: "ELX"
	},
	{
		address: "0xa95592DCFfA3C080B4B40E459c5f5692F67DB7F8",
		chainId: 1,
		decimals: 18,
		name: "Elysian",
		symbol: "ELY"
	},
	{
		address: "0x881a7E25D44591C467a37Da96adf3c3705E7251b",
		chainId: 1,
		decimals: 18,
		name: "Elynet Token",
		symbol: "ELYX"
	},
	{
		address: "0x35b08722AA26bE119c1608029CcbC976ac5C1082",
		chainId: 1,
		decimals: 8,
		name: "Eminer",
		symbol: "EM"
	},
	{
		address: "0x15874d65e649880c2614e7a480cb7c9A55787FF6",
		chainId: 1,
		decimals: 18,
		name: "EthereumMax",
		symbol: "EMAX"
	},
	{
		address: "0x28B94F58B11aC945341329dBf2e5EF7F8Bd44225",
		chainId: 1,
		decimals: 8,
		name: "Emblem",
		symbol: "EMB"
	},
	{
		address: "0xdb0aCC14396D108b3C5574483aCB817855C9dc8d",
		chainId: 1,
		decimals: 8,
		name: "Overline Emblem",
		symbol: "EMB"
	},
	{
		address: "0x0a425122852ED351946A828b348bfdCdA51EffD8",
		chainId: 1,
		decimals: 18,
		name: "EduMetrix Coin",
		symbol: "EMC"
	},
	{
		address: "0xcbD380C2D84deafED09f79863705353505764f26",
		chainId: 1,
		decimals: 18,
		name: "Emojis Farm",
		symbol: "EMOJI"
	},
	{
		address: "0xb67b88a25708a35AE7c2d736D398D268CE4f7F83",
		chainId: 1,
		decimals: 8,
		name: "Etheremon",
		symbol: "EMON"
	},
	{
		address: "0xd6A5aB46ead26f49b03bBB1F9EB1Ad5c1767974a",
		chainId: 1,
		decimals: 18,
		name: "Ethermon",
		symbol: "EMON"
	},
	{
		address: "0x95dAaaB98046846bF4B2853e23cba236fa394A31",
		chainId: 1,
		decimals: 8,
		name: "EthermonToken",
		symbol: "EMONT"
	},
	{
		address: "0x9B639486f4A40c1A7a6728114F2413973f5Fa4c6",
		chainId: 1,
		decimals: 18,
		name: "Electronic Move Pay",
		symbol: "EMP"
	},
	{
		address: "0xbdbC2a5B32F3a5141ACd18C39883066E4daB9774",
		chainId: 1,
		decimals: 8,
		name: "Emirex Token",
		symbol: "EMRX"
	},
	{
		address: "0x17E6616c45d267bC20A9892b58A01621c592B72d",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Message Se",
		symbol: "EMS"
	},
	{
		address: "0x9501BFc48897DCEEadf73113EF635d2fF7ee4B97",
		chainId: 1,
		decimals: 18,
		name: "easyMine",
		symbol: "EMT"
	},
	{
		address: "0xBd2949F67DcdC549c6Ebe98696449Fa79D988A9F",
		chainId: 1,
		decimals: 18,
		name: "Meter Governance ma",
		symbol: "EMTRG"
	},
	{
		address: "0xB802b24E0637c2B87D2E8b7784C055BBE921011a",
		chainId: 1,
		decimals: 2,
		name: "EMovieVenture",
		symbol: "EMV"
	},
	{
		address: "0xa6FB1DF483b24EEAB569e19447E0e107003B9E15",
		chainId: 1,
		decimals: 18,
		name: "Earnbase",
		symbol: "ENB"
	},
	{
		address: "0x039F5050dE4908f9b5ddF40A4F3Aa3f329086387",
		chainId: 1,
		decimals: 18,
		name: "Ethernet.Cash",
		symbol: "ENC"
	},
	{
		address: "0xe0E4839E0c7b2773c58764F9Ec3B9622d01A0428",
		chainId: 1,
		decimals: 18,
		name: "EnCore",
		symbol: "ENCORE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFDE98A3Bf5C7F6336aE4ce1b43148aEab7b7c89A",
		chainId: 1,
		decimals: 18,
		name: "ENERGY Vault  NFTX",
		symbol: "ENERGY"
	},
	{
		address: "0xf0Ee6b27b759C9893Ce4f094b49ad28fd15A23e4",
		chainId: 1,
		decimals: 8,
		name: "Enigma",
		symbol: "ENG"
	},
	{
		address: "0x5DBAC24e98E2a4f43ADC0DC82Af403fca063Ce2c",
		chainId: 1,
		decimals: 18,
		name: "Engagement Token",
		symbol: "ENGT"
	},
	{
		address: "0xF629cBd94d3791C9250152BD8dfBDF380E2a3B9c",
		chainId: 1,
		decimals: 18,
		name: "Enjin",
		symbol: "ENJ",
		extensions: {
			color: "#7866D5",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x92B914f1DDcBb1D117a718E83C9ED7eB32fc44d1",
		chainId: 1,
		decimals: 18,
		name: "Enkronos",
		symbol: "ENK"
	},
	{
		address: "0x63D0eEa1D7C0d1e89d7e665708d7e8997C0a9eD6",
		chainId: 1,
		decimals: 18,
		name: "Ethanol",
		symbol: "ENOL"
	},
	{
		address: "0x16EA01aCB4b0Bca2000ee5473348B6937ee6f72F",
		chainId: 1,
		decimals: 10,
		name: "Enecuum",
		symbol: "ENQ"
	},
	{
		address: "0xEc1a718D1A6F8F8d94eCEc6fe91465697bb2b88C",
		chainId: 1,
		decimals: 8,
		name: "Entone",
		symbol: "ENTONE"
	},
	{
		address: "0xd9d01D4Cb824219A8F482a0FAd479cB971Fd0628",
		chainId: 1,
		decimals: 8,
		name: "EnterCoin",
		symbol: "ENTRC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5BC7e5f0Ab8b2E10D2D0a3F21739FCe62459aeF3",
		chainId: 1,
		decimals: 18,
		name: "Hut34 Entropy",
		symbol: "ENTRP"
	},
	{
		address: "0xd0d7A9f2021958e51d60D6966b7BbeD9D1CB22B5",
		chainId: 1,
		decimals: 10,
		name: "ENEX",
		symbol: "ENX"
	},
	{
		address: "0xA8006e3Ac1bD94e54E3136B8e5dD75db0163e6f4",
		chainId: 1,
		decimals: 18,
		name: "EveryonesCrypto",
		symbol: "EOC"
	},
	{
		address: "0x86Fa049857E0209aa7D9e616F7eb3b3B78ECfdb0",
		chainId: 1,
		decimals: 18,
		name: "EOS",
		symbol: "EOS"
	},
	{
		address: "0x3d3dd61b0F9A558759a21dA42166042B114E12D5",
		chainId: 1,
		decimals: 18,
		name: "3X Short EOS Token",
		symbol: "EOSBEAR"
	},
	{
		address: "0xeaD7F3ae4e0Bb0D8785852Cc37CC9d0B5e75c06a",
		chainId: 1,
		decimals: 18,
		name: "3X Long EOS Token",
		symbol: "EOSBULL"
	},
	{
		address: "0x7e9e431a0B8c4D532C745B1043c7FA29a48D4fBa",
		chainId: 1,
		decimals: 18,
		name: "eosDAC",
		symbol: "EOSDAC"
	},
	{
		address: "0xb38f206615325306DddEB0794A6482486B6B78b8",
		chainId: 1,
		decimals: 18,
		name: "1X Short EOS Token",
		symbol: "EOSHEDGE"
	},
	{
		address: "0x87210f1D3422BA75B6C40C63C78d79324daBcd55",
		chainId: 1,
		decimals: 18,
		name: "EOS TRUST",
		symbol: "EOST"
	},
	{
		address: "0x72630B1e3B42874bf335020Ba0249e3E9e47Bafc",
		chainId: 1,
		decimals: 18,
		name: "Paypolitan Token",
		symbol: "EPAN"
	},
	{
		address: "0x7fc2a3a998E8a80dA7F2962C5A8803b641711e6c",
		chainId: 1,
		decimals: 9,
		name: "Paralism-EPARA",
		symbol: "EPARA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2b5cA2F9510cf1e3595Ff219f24D75D4244585EA",
		chainId: 1,
		decimals: 18,
		name: "EthereumPay",
		symbol: "EPAY"
	},
	{
		address: "0x875089A734213cA39f0d93c2BbB8209827ec5e9f",
		chainId: 1,
		decimals: 8,
		name: "Euphoria",
		symbol: "EPH"
	},
	{
		address: "0xbCD9e216200369803ed059B7744f6Fb4cF3887C7",
		chainId: 1,
		decimals: 18,
		name: "Epic",
		symbol: "EPIC"
	},
	{
		address: "0xDaF88906aC1DE12bA2b1D2f7bfC94E9638Ac40c4",
		chainId: 1,
		decimals: 18,
		name: "EpiK Protocol",
		symbol: "EPK"
	},
	{
		address: "0x57b3140F522a3eF2F98C046F78e0D03075908591",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Platinum",
		symbol: "EPLAT"
	},
	{
		address: "0x02e3083a51E8632E571fBd6A62aC396C10c653Ba",
		chainId: 1,
		decimals: 8,
		name: "Epluscoin",
		symbol: "EPLUS"
	},
	{
		address: "0xAB6E163cBEB3959b68b90beC722F5a9EEf82bA72",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Pro",
		symbol: "EPRO"
	},
	{
		address: "0x50eC35d1E18D439F02Fa895746FC3e1BEF311780",
		chainId: 1,
		decimals: 18,
		name: "Epanus",
		symbol: "EPS"
	},
	{
		address: "0x051cF5178f60e9DEf5d5a39b2a988a9f914107cB",
		chainId: 1,
		decimals: 18,
		name: "Epstein",
		symbol: "EPSTEIN"
	},
	{
		address: "0x35BAA72038F127f9f8C8f9B491049f64f377914d",
		chainId: 1,
		decimals: 4,
		name: "ethPoker.io EPX",
		symbol: "EPX"
	},
	{
		address: "0x50Ee674689d75C0f88E8f83cfE8c4B69E8fd590D",
		chainId: 1,
		decimals: 8,
		name: "Emphy",
		symbol: "EPY"
	},
	{
		address: "0x47dD62D4D075DeAd71d0e00299fc56a2d747beBb",
		chainId: 1,
		decimals: 18,
		name: "Equal",
		symbol: "EQL"
	},
	{
		address: "0xa462d0E6Bb788c7807B1B1C96992CE1f7069E195",
		chainId: 1,
		decimals: 18,
		name: "Equus Mining Token",
		symbol: "EQMT"
	},
	{
		address: "0x46e9fE43470fafd690100C86037f9E566E24D480",
		chainId: 1,
		decimals: 18,
		name: "EQO",
		symbol: "EQO"
	},
	{
		address: "0xC28e931814725BbEB9e670676FaBBCb694Fe7DF2",
		chainId: 1,
		decimals: 18,
		name: "Quadrant Protocol",
		symbol: "EQUAD"
	},
	{
		address: "0xBd3de9a069648c84d27d74d701C9fa3253098B15",
		chainId: 1,
		decimals: 18,
		name: "EQIFi",
		symbol: "EQX"
	},
	{
		address: "0x1Da87b114f35E1DC91F72bF57fc07A768Ad40Bb0",
		chainId: 1,
		decimals: 18,
		name: "Equalizer",
		symbol: "EQZ"
	},
	{
		address: "0xc3761EB917CD790B30dAD99f6Cc5b4Ff93C4F9eA",
		chainId: 1,
		decimals: 18,
		name: "ERC20",
		symbol: "ERC20"
	},
	{
		address: "0xF8F237D074F637D777bcD2A4712bde793f94272B",
		chainId: 1,
		decimals: 10,
		name: "ERC223",
		symbol: "ERC223"
	},
	{
		address: "0x12DC767728105aA415Dd720DFBD0ea1d85841172",
		chainId: 1,
		decimals: 2,
		name: "ELDORADO TOKEN",
		symbol: "ERD"
	},
	{
		address: "0xBBc2AE13b23d715c30720F079fcd9B4a74093505",
		chainId: 1,
		decimals: 18,
		name: "Ethernity Chain",
		symbol: "ERN"
	},
	{
		address: "0x74CEDa77281b339142A36817Fa5F9E29412bAb85",
		chainId: 1,
		decimals: 8,
		name: "Eroscoin",
		symbol: "ERO"
	},
	{
		address: "0xC1Fa06e8596c3FA98cCd2113C38B6b60b6eFa00d",
		chainId: 1,
		decimals: 18,
		name: "Erotica",
		symbol: "EROTICA"
	},
	{
		address: "0x07baC35846e5eD502aA91AdF6A9e7aA210F2DcbE",
		chainId: 1,
		decimals: 18,
		name: "Sifchain",
		symbol: "EROWAN"
	},
	{
		address: "0xd3dEFf001ef67E39212F4973B617C2E684fa436C",
		chainId: 1,
		decimals: 18,
		name: "484 Fund",
		symbol: "ERROR"
	},
	{
		address: "0x5218E472cFCFE0b64A064F055B43b4cdC9EfD3A6",
		chainId: 1,
		decimals: 18,
		name: "unFederalReserve",
		symbol: "ERSDL"
	},
	{
		address: "0x92A5B04D0ED5D94D7a193d1d334D3D16996f4E13",
		chainId: 1,
		decimals: 18,
		name: "Eristica",
		symbol: "ERT"
	},
	{
		address: "0xE29c5B523590165795BBD7d52369c2895B18841f",
		chainId: 1,
		decimals: 19,
		name: "Esports com",
		symbol: "ERT"
	},
	{
		address: "0x72108a8CC3254813C6BE2F1b77be53E185abFdD9",
		chainId: 1,
		decimals: 18,
		name: "Era Swap Token",
		symbol: "ES"
	},
	{
		address: "0x369760eBf89d577a734d927a9599C1921397A152",
		chainId: 1,
		decimals: 8,
		name: "E-Shipp Block",
		symbol: "ESB"
	},
	{
		address: "0x49614661737EfBFC6a102efaeefDc8E197f7CC0e",
		chainId: 1,
		decimals: 8,
		name: "Escroco Emerald",
		symbol: "ESCE"
	},
	{
		address: "0xA8eBb13B9895E52Ab7d815CE7F63591402581624",
		chainId: 1,
		decimals: 8,
		name: "ESCX Token",
		symbol: "ESCX"
	},
	{
		address: "0x36F3FD68E7325a35EB768F1AedaAe9EA0689d723",
		chainId: 1,
		decimals: 18,
		name: "Empty Set Dollar",
		symbol: "ESD"
	},
	{
		address: "0xD6a55C63865AffD67E2FB9f284F87b7a9E5FF3bD",
		chainId: 1,
		decimals: 18,
		name: "Switch",
		symbol: "ESH"
	},
	{
		address: "0xbdab72602e9AD40FC6a6852CAf43258113B8F7a5",
		chainId: 1,
		decimals: 18,
		name: "Sovryn",
		symbol: "eSOV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x35a79FCEb867EE3392ED0C8DEdd8Dc2f6124c9Cd",
		chainId: 1,
		decimals: 18,
		name: "SPIDER ECOLOGY",
		symbol: "ESPI"
	},
	{
		address: "0x29C56E7CB9C840d2b2371b17e28BaB44AD3c3ead",
		chainId: 1,
		decimals: 18,
		name: "EsportsPro",
		symbol: "ESPRO"
	},
	{
		address: "0xfc05987bd2be489ACCF0f509E44B0145d68240f7",
		chainId: 1,
		decimals: 18,
		name: "Essentia",
		symbol: "ESS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x24aE124c4CC33D6791F8E8B63520ed7107ac8b3e",
		chainId: 1,
		decimals: 18,
		name: "Empty Set Share",
		symbol: "ESS"
	},
	{
		address: "0xF3924dF14812B3D3dB29124AA9DA4353Ed5e04A3",
		chainId: 1,
		decimals: 18,
		name: "Easticoin",
		symbol: "ESTI"
	},
	{
		address: "0x1EBe1E64Dd249C6fDb600d05A927a7D26A4A895f",
		chainId: 1,
		decimals: 9,
		name: "Ethereum Supreme",
		symbol: "ESUPREME"
	},
	{
		address: "0x5a75A093747b72a0e14056352751eDF03518031d",
		chainId: 1,
		decimals: 18,
		name: "EmiSwap",
		symbol: "ESW"
	},
	{
		address: "0xA0471cdd5c0dc2614535fD7505b17A651a8F0DAB",
		chainId: 1,
		decimals: 18,
		name: "EasySwap",
		symbol: "ESWA"
	},
	{
		address: "0xe8A1Df958bE379045E2B46a31A98B93A2eCDfDeD",
		chainId: 1,
		decimals: 18,
		name: "EtherSportz",
		symbol: "ESZ"
	},
	{
		address: "0x856c4388C56c2a613c60507a4701af627157Fed6",
		chainId: 1,
		decimals: 18,
		name: "ETH Trending Alpha",
		symbol: "ETAS"
	},
	{
		address: "0x1B9743f556D65e757c4c650B4555bAF354cB8bd3",
		chainId: 1,
		decimals: 12,
		name: "Ethbits",
		symbol: "ETBS"
	},
	{
		address: "0xA340f0937a8c00DB11C83Cc16CEC12310160F0b6",
		chainId: 1,
		decimals: 18,
		name: "3X Short Ethereum C",
		symbol: "ETCBEAR"
	},
	{
		address: "0x974c98Bc2e82FA18de92B7e697A1D9BD25682e80",
		chainId: 1,
		decimals: 18,
		name: "3X Long Ethereum Cl",
		symbol: "ETCBULL"
	},
	{
		address: "0xDd74a7A3769fA72561B3A69e65968F49748c690c",
		chainId: 1,
		decimals: 18,
		name: "ETCH",
		symbol: "ETCH"
	},
	{
		address: "0xc2b58812c24020EA924c3d7C241C441605F12E75",
		chainId: 1,
		decimals: 8,
		name: "Entherfound",
		symbol: "ETF"
	},
	{
		address: "0x28c8d01FF633eA9Cd8fc6a451D7457889E698de6",
		chainId: 1,
		decimals: 0,
		name: "Ethereum Gold",
		symbol: "ETG"
	},
	{
		address: "0x74603e780545d02C4257E7D2BE19c74dE7BE1952",
		chainId: 1,
		decimals: 18,
		name: "ETG Finance",
		symbol: "ETGF"
	},
	{
		address: "0xa96F31F1C187c28980176C3A27ba7069f48abDE4",
		chainId: 1,
		decimals: 8,
		name: "Ethereum Gold Proje",
		symbol: "ETGP"
	},
	{
		address: "0x2c5a9980B41861D91D30d0E0271d1c093452DcA5",
		chainId: 1,
		decimals: 18,
		name: "ETH 12 Day EMA Cros",
		symbol: "ETH12EMACO"
	},
	{
		address: "0xB647a1D7633c6C4d434e22eE9756b36F2b219525",
		chainId: 1,
		decimals: 18,
		name: "ETH 20 MA Crossover",
		symbol: "ETH20MACOAPY"
	},
	{
		address: "0x9ea463Ec4cE9E9E5bc9cFd0187C4Ac3a70DD951D",
		chainId: 1,
		decimals: 18,
		name: "ETH 20 Day MA Cross",
		symbol: "ETH20SMACO"
	},
	{
		address: "0x614857C755739354d68AE0abD53849cf45d6A41D",
		chainId: 1,
		decimals: 18,
		name: "ETH 26 Day EMA Cros",
		symbol: "ETH26EMACO"
	},
	{
		address: "0xAa6E8127831c9DE45ae56bB1b0d4D4Da6e5665BD",
		chainId: 1,
		decimals: 18,
		name: "2x Leveraged ETH",
		symbol: "ETH2XFLI",
		extensions: {
			color: "#29292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xa360F2aF3F957906468c0FD7526391AeD08aE3DB",
		chainId: 1,
		decimals: 18,
		name: "ETH 50 Day MA Cross",
		symbol: "ETH50SMACO"
	},
	{
		address: "0x59E9261255644c411AfDd00bD89162d09D862e38",
		chainId: 1,
		decimals: 18,
		name: "ETHA Lend",
		symbol: "ETHA"
	},
	{
		address: "0x3a26746Ddb79B1B8e4450e3F4FFE3285A307387E",
		chainId: 1,
		decimals: 8,
		name: "EtherBTC",
		symbol: "ETHB"
	},
	{
		address: "0x2f5e2c9002C058c063d21A06B6cabb50950130c8",
		chainId: 1,
		decimals: 18,
		name: "3X Short Ethereum T",
		symbol: "ETHBEAR"
	},
	{
		address: "0x96b52B5BF8D902252D0714A1BD2651A785Fd2660",
		chainId: 1,
		decimals: 18,
		name: "EtherBone",
		symbol: "ETHBN"
	},
	{
		address: "0xb1CD6e4153B2a390Cf00A6556b0fC1458C4A5533",
		chainId: 1,
		decimals: 18,
		name: "ETHBNT Relay",
		symbol: "ETHBNT"
	},
	{
		address: "0xA6c040045d962e4B8eFa00954c7d23CCd0a2b8AD",
		chainId: 1,
		decimals: 18,
		name: "ETH BTC 75  25  Wei",
		symbol: "ETHBTC7525"
	},
	{
		address: "0xB9FfE0b8Ee2d1Af94202FFED366520300748A4d8",
		chainId: 1,
		decimals: 18,
		name: "ETH BTC EMA Ratio T",
		symbol: "ETHBTCEMACO"
	},
	{
		address: "0xbf70A33A13fBe8D0106Df321Da0Cf654d2E9Ab50",
		chainId: 1,
		decimals: 18,
		name: "ETH BTC RSI Ratio T",
		symbol: "ETHBTCRSI"
	},
	{
		address: "0x871baeD4088b863fd6407159f3672D70CD34837d",
		chainId: 1,
		decimals: 18,
		name: "3X Long Ethereum To",
		symbol: "ETHBULL"
	},
	{
		address: "0xdbFb423E9bBF16294388e07696A5120E4CeBA0C5",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Dark",
		symbol: "ETHD"
	},
	{
		address: "0x316b13B951Efe25AAd1Cb565385B23869A7D4c48",
		chainId: 1,
		decimals: 18,
		name: "ETH 26 EMA Crossove",
		symbol: "ETHEMAAPY"
	},
	{
		address: "0x54e8371C1EC43e58fB53D4ef4eD463C17Ba8a6bE",
		chainId: 1,
		decimals: 18,
		name: "ETH 26 EMA Crossove",
		symbol: "ETHEMAAPY"
	},
	{
		address: "0x10e1E953DDBa597011f8bFA806aB0cC3415a622b",
		chainId: 1,
		decimals: 18,
		name: "1X Short Ethereum T",
		symbol: "ETHHEDGE"
	},
	{
		address: "0xFd09911130e6930Bf87F2B0554c44F400bD80D3e",
		chainId: 1,
		decimals: 18,
		name: "EthicHub",
		symbol: "ETHIX"
	},
	{
		address: "0xFD957F21bd95E723645C07C48a2d8ACB8Ffb3794",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Meta",
		symbol: "ETHM"
	},
	{
		address: "0xeF0fDA1d4bd73DDC2f93A4e46E2E5aDBC2D668f4",
		chainId: 1,
		decimals: 18,
		name: "ETH 20 Day MA Cross",
		symbol: "ETHMACOAPY"
	},
	{
		address: "0xbF4a2DdaA16148a9D0fA2093FfAC450ADb7cd4aa",
		chainId: 1,
		decimals: 2,
		name: "Ethereum Money",
		symbol: "ETHMNY"
	},
	{
		address: "0x98A25bA4c3793B9029652cBc1a8875cBe223dF13",
		chainId: 1,
		decimals: 18,
		name: "ETH Momentum Trigge",
		symbol: "ETHMO"
	},
	{
		address: "0xB1CA7E6714263a64659A3a89E1C313af30fD660A",
		chainId: 1,
		decimals: 18,
		name: "ETH Moonshot X Yiel",
		symbol: "ETHMOONX"
	},
	{
		address: "0x99676c9fA4c77848aEb2383fCFbD7e980dC25027",
		chainId: 1,
		decimals: 18,
		name: "Etho Protocol",
		symbol: "ETHO"
	},
	{
		address: "0xEED736b2b809550D89A941C2005dE93588c628e2",
		chainId: 1,
		decimals: 18,
		name: "ETHPlus",
		symbol: "ETHP"
	},
	{
		address: "0x09E4BDFb273245063eF5E800D891eFF7d04f9B83",
		chainId: 1,
		decimals: 18,
		name: "ETH Price Action Ca",
		symbol: "ETHPA"
	},
	{
		address: "0x8dB1D28Ee0d822367aF8d220C0dc7cB6fe9DC442",
		chainId: 1,
		decimals: 18,
		name: "ETHPad",
		symbol: "ETHPAD"
	},
	{
		address: "0xE52e75e8a97546f40991b489E92c68eBb386dc97",
		chainId: 1,
		decimals: 18,
		name: "ETHPAY",
		symbol: "ETHPAY"
	},
	{
		address: "0xe0c6CE3e73029F201e5C0Bedb97F67572A93711C",
		chainId: 1,
		decimals: 6,
		name: "ETHplode",
		symbol: "ETHPLO"
	},
	{
		address: "0x601938988f0FDd937373Ea185c33751462B1d194",
		chainId: 1,
		decimals: 18,
		name: "Etherpay",
		symbol: "ETHPY"
	},
	{
		address: "0x93E01899c10532d76C0E864537a1D26433dBbDdB",
		chainId: 1,
		decimals: 18,
		name: "ETH RSI 60 40 Cross",
		symbol: "ETHRSI6040"
	},
	{
		address: "0x136faE4333EA36A24bb751E2d505D6ca4Fd9f00b",
		chainId: 1,
		decimals: 18,
		name: "ETH RSI 60 40 Yield",
		symbol: "ETHRSIAPY"
	},
	{
		address: "0x9f49ed43C90A540d1cF12f6170aCE8d0B88a14E6",
		chainId: 1,
		decimals: 18,
		name: "ETH RSI 60 40 Yield",
		symbol: "ETHRSIAPY"
	},
	{
		address: "0xCfD069247Bd5F01a17F1cA76424c9E424256908D",
		chainId: 1,
		decimals: 18,
		name: "EthereumSC",
		symbol: "ETHSC"
	},
	{
		address: "0xB8243B4eeca27A4191e879760b88fE2270561796",
		chainId: 1,
		decimals: 18,
		name: "ETHUSD ADL 4H Set",
		symbol: "ETHUSDADL4"
	},
	{
		address: "0x058349297672B6cC7cCb6E59A679c5ADd74a6898",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Vault",
		symbol: "ETHV"
	},
	{
		address: "0xC53342fd7575f572b0fF4569e31941A5B821aC76",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Volatility",
		symbol: "ETHV"
	},
	{
		address: "0xEeEeeeeEe2aF8D0e1940679860398308e0eF24d6",
		chainId: 1,
		decimals: 18,
		name: "Ethverse Token",
		symbol: "ETHV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd1AFBCCC9A2c2187ea544363B986EA0AB6EF08B5",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Yield",
		symbol: "ETHY"
	},
	{
		address: "0xD0d3EbCAd6A20ce69BC3Bc0e1ec964075425e533",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Stake",
		symbol: "ETHYS"
	},
	{
		address: "0x3c4a3ffd813a107febd57B2f01BC344264D90FdE",
		chainId: 1,
		decimals: 2,
		name: "EnergiToken",
		symbol: "ETK"
	},
	{
		address: "0x6020Da0F7c1857dBE4431Ec92A15cC318D933eAa",
		chainId: 1,
		decimals: 18,
		name: "En Tan Mo",
		symbol: "ETM"
	},
	{
		address: "0x32163C2d2d313c73279E87398E7F84BB9F537E9D",
		chainId: 1,
		decimals: 18,
		name: "etor",
		symbol: "ETOR"
	},
	{
		address: "0x6927C69fb4daf2043fbB1Cb7b86c5661416bea29",
		chainId: 1,
		decimals: 18,
		name: "Etheruem Risen",
		symbol: "ETR"
	},
	{
		address: "0x71E5fB8793b5a2fb0C4918930180f8B36500cBB8",
		chainId: 1,
		decimals: 8,
		name: "Electric Token",
		symbol: "ETR"
	},
	{
		address: "0x952B65D976E8669c4cE92a17CcE5B2586912Adb5",
		chainId: 1,
		decimals: 18,
		name: "Etrade",
		symbol: "ETT"
	},
	{
		address: "0x1212b68d8555Cf0B08f3371b926b3E1148B520F1",
		chainId: 1,
		decimals: 18,
		name: "Efficient Transacti",
		symbol: "ETT"
	},
	{
		address: "0xc37E8a31BA2d110c12f09f0239954A68b00bC599",
		chainId: 1,
		decimals: 8,
		name: "EUB Chain",
		symbol: "EUBC"
	},
	{
		address: "0xd99298985902C9A69bf4C8a0895fA10721204ECC",
		chainId: 1,
		decimals: 18,
		name: "EUCX Token",
		symbol: "EUCX"
	},
	{
		address: "0x6aB4A7d75B0A42B6Bc83E852daB9E121F9C610Aa",
		chainId: 1,
		decimals: 18,
		name: "Elitium",
		symbol: "EUM"
	},
	{
		address: "0xe532a2A37b0707b4306B21B412D2E8C22f9824Ec",
		chainId: 1,
		decimals: 18,
		name: "EUP Chain",
		symbol: "EUP"
	},
	{
		address: "0x3231Cb76718CDeF2155FC47b5286d82e6eDA273f",
		chainId: 1,
		decimals: 18,
		name: "Monerium EUR",
		symbol: "EURe"
	},
	{
		address: "0xdB25f211AB05b1c97D595516F45794528a807ad8",
		chainId: 1,
		decimals: 2,
		name: "EURS",
		symbol: "EURS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xAbdf147870235FcFC34153828c769A70B3FAe01F",
		chainId: 1,
		decimals: 6,
		name: "EUR Tether (erc20)",
		symbol: "EURT"
	},
	{
		address: "0xC581b735A1688071A1746c968e0798D642EDE491",
		chainId: 1,
		decimals: 6,
		name: "Euro Tether",
		symbol: "EURT"
	},
	{
		address: "0x6c139349ee94eBAaff55eD52d382673C263B22d6",
		chainId: 1,
		decimals: 18,
		name: "Upper Euro",
		symbol: "EURU"
	},
	{
		address: "0x05Ac103f68e05da35E78f6165b9082432FE64B58",
		chainId: 1,
		decimals: 18,
		name: "eToro Euro",
		symbol: "EURX"
	},
	{
		address: "0x0beAD9a1bcc1b84D06E3f2df67E3549Fd55aB054",
		chainId: 1,
		decimals: 18,
		name: "EURxb",
		symbol: "EURXB"
	},
	{
		address: "0x523630976eB6147621B5c31c781eBe2Ec2a806E0",
		chainId: 1,
		decimals: 18,
		name: "Ether-Backed USD Nomins (erc20)",
		symbol: "eUSD"
	},
	{
		address: "0xd6cAF5Bd23CF057f5FcCCE295Dcc50C01C198707",
		chainId: 1,
		decimals: 18,
		name: "Evanesco Network",
		symbol: "EVA"
	},
	{
		address: "0x70126bd012e39038792366C9115BB64407D5cBe1",
		chainId: 1,
		decimals: 9,
		name: "EVA Coin",
		symbol: "EVA"
	},
	{
		address: "0x50f09629d0afDF40398a3F317cc676cA9132055c",
		chainId: 1,
		decimals: 8,
		name: "Evai",
		symbol: "EVAI"
	},
	{
		address: "0x89E3aC6Dd69C15e9223BE7649025d6F68Dab1d6a",
		chainId: 1,
		decimals: 18,
		name: "Evan",
		symbol: "EVAN"
	},
	{
		address: "0x69d1ff85004a445A892dFbD88DF00D48fb0aF638",
		chainId: 1,
		decimals: 9,
		name: "EveryApe",
		symbol: "EVAPE"
	},
	{
		address: "0x1D15a70f1c8C2A9938ba8036f5a46021146D8C15",
		chainId: 1,
		decimals: 18,
		name: "EthereumVault",
		symbol: "EVAULT"
	},
	{
		address: "0xb62d18DeA74045E822352CE4B3EE77319DC5ff2F",
		chainId: 1,
		decimals: 18,
		name: "EventChain",
		symbol: "EVC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBA14b245d449965BdBeB630ebe135B569474F5b1",
		chainId: 1,
		decimals: 6,
		name: "EvaCash",
		symbol: "EVC"
	},
	{
		address: "0xAa843f65872a25D6E9552eA0B360Fb1d5E333124",
		chainId: 1,
		decimals: 18,
		name: "Eco Value Coin",
		symbol: "EVC"
	},
	{
		address: "0xAa5C28be0F1173612eA3fCC9e461cCB7b9390213",
		chainId: 1,
		decimals: 18,
		name: "EVCOIN",
		symbol: "EVCO"
	},
	{
		address: "0x923108a439C4e8C2315c4f6521E5cE95B44e9B4c",
		chainId: 1,
		decimals: 18,
		name: "Devery",
		symbol: "EVE"
	},
	{
		address: "0x5aaEFe84E0fB3DD1f0fCfF6fA7468124986B91bd",
		chainId: 1,
		decimals: 18,
		name: "Evedo",
		symbol: "EVED"
	},
	{
		address: "0x6b40D317BC1de4b0938519AC707AE36464f49171",
		chainId: 1,
		decimals: 18,
		name: "EVERY ORIGINAL",
		symbol: "EVEO"
	},
	{
		address: "0x3f9078B8fBCb1C4e03B41fa9e5a0532A28848dB7",
		chainId: 1,
		decimals: 9,
		name: "EverApe",
		symbol: "EVERAPE"
	},
	{
		address: "0xA26C4caaaEa8b88ef49Bf8c380488f66C2d807Ae",
		chainId: 1,
		decimals: 18,
		name: "Eviff",
		symbol: "EVF"
	},
	{
		address: "0x920DB6C38cF5a2A12554e812D4b3ac2DaA8ebA4D",
		chainId: 1,
		decimals: 18,
		name: "Evimeria",
		symbol: "EVI"
	},
	{
		address: "0x68909e586eeAC8F47315e84B4c9788DD54Ef65Bb",
		chainId: 1,
		decimals: 18,
		name: "EvenCoin",
		symbol: "EVN"
	},
	{
		address: "0xd780Ae2Bf04cD96E577D3D014762f831d97129d0",
		chainId: 1,
		decimals: 18,
		name: "Envion",
		symbol: "EVN"
	},
	{
		address: "0x9aF15D7B8776fa296019979E70a5BE53c714A7ec",
		chainId: 1,
		decimals: 18,
		name: "Evolution Finance",
		symbol: "EVN"
	},
	{
		address: "0x9A24B8E8A6D4563c575A707b1275381119298E60",
		chainId: 1,
		decimals: 18,
		name: "EVNY Token",
		symbol: "EVNY"
	},
	{
		address: "0x442d985EFeBC633b8Bfd14fF99E860A5609a6484",
		chainId: 1,
		decimals: 18,
		name: "Ethavo",
		symbol: "EVO"
	},
	{
		address: "0xefBd6D7deF37ffae990503EcdB1291B2f7E38788",
		chainId: 1,
		decimals: 18,
		name: "EVO",
		symbol: "EVO"
	},
	{
		address: "0x3137619705b5fc22a3048989F983905e456b59Ab",
		chainId: 1,
		decimals: 8,
		name: "Everus",
		symbol: "EVR"
	},
	{
		address: "0x5aaa2182459377b6cA18b10712F9F602140764af",
		chainId: 1,
		decimals: 8,
		name: "Elevation Token",
		symbol: "EVT"
	},
	{
		address: "0xf3Db5Fa2C66B7aF3Eb0C0b782510816cbe4813b8",
		chainId: 1,
		decimals: 4,
		name: "Everex",
		symbol: "EVX",
		extensions: {
			color: "#044aac",
			isVerified: true
		}
	},
	{
		address: "0xEEd3aE7b0F8b5B9BB8C035A9941382B1822671CD",
		chainId: 1,
		decimals: 12,
		name: "EveryCoin",
		symbol: "EVY"
	},
	{
		address: "0x7A939Bb714fd2A48EbeB1E495AA9aaa74BA9fA68",
		chainId: 1,
		decimals: 18,
		name: "Electric Vehicle Zo",
		symbol: "EVZ"
	},
	{
		address: "0x56EE175FE37CD461486cE3c3166e0CaFCcd9843f",
		chainId: 1,
		decimals: 9,
		name: "Wrapped Wit",
		symbol: "EWIT"
	},
	{
		address: "0x444997b7e7fC830E20089afea3078cd518fCF2A2",
		chainId: 1,
		decimals: 18,
		name: "EWO Token",
		symbol: "EWO"
	},
	{
		address: "0x178c820f862B14f316509ec36b13123DA19A6054",
		chainId: 1,
		decimals: 18,
		name: "Energy Web Token Bridged",
		symbol: "EWTB"
	},
	{
		address: "0x00c4B398500645eb5dA00a1a379a88B11683ba01",
		chainId: 1,
		decimals: 18,
		name: "Eximchain Token",
		symbol: "EXC"
	},
	{
		address: "0x9e4C143Bfe35f855624B3F84465AB7401A17A120",
		chainId: 1,
		decimals: 18,
		name: "EXCOIN CASH",
		symbol: "EXC"
	},
	{
		address: "0x6baA91cd8AA07431760EF2eedFedCEF662A6B8B3",
		chainId: 1,
		decimals: 18,
		name: "3X Short Exchange T",
		symbol: "EXCHBEAR"
	},
	{
		address: "0x592ef68C18F05A22C5890263DEa5D952dd140d2A",
		chainId: 1,
		decimals: 18,
		name: "3X Long Exchange To",
		symbol: "EXCHBULL"
	},
	{
		address: "0xf8CC67e304f8e1A351ED83b4DBBe6B4076d51376",
		chainId: 1,
		decimals: 18,
		name: "1X Short Exchange T",
		symbol: "EXCHHEDGE"
	},
	{
		address: "0x0D9A653f681168f410d14D19B7743C041EafC58a",
		chainId: 1,
		decimals: 8,
		name: "EinsteinCash",
		symbol: "EXE"
	},
	{
		address: "0x412D397DDCa07D753E3E0C61e367fb1b474B3E7D",
		chainId: 1,
		decimals: 18,
		name: "8X8 Protocol",
		symbol: "EXE"
	},
	{
		address: "0x2a1174d1Cd4348Cb1EAeC3f00310908ca289E5be",
		chainId: 1,
		decimals: 6,
		name: "Exgold",
		symbol: "EXG"
	},
	{
		address: "0x83869DE76B9Ad8125e22b857f519F001588c0f62",
		chainId: 1,
		decimals: 8,
		name: "EXMO Coin",
		symbol: "EXM"
	},
	{
		address: "0xc98e0639c6d2EC037A615341c369666B110e80E5",
		chainId: 1,
		decimals: 8,
		name: "eXMRcoin",
		symbol: "EXMR"
	},
	{
		address: "0x331fA6C97c64e47475164b9fC8143b533c5eF529",
		chainId: 1,
		decimals: 18,
		name: "EXMR FDN",
		symbol: "EXMR"
	},
	{
		address: "0x0766e79A6fD74469733e8330b3b461C0320fF059",
		chainId: 1,
		decimals: 18,
		name: "ExchangeN",
		symbol: "EXN"
	},
	{
		address: "0xD6c67B93a7b248dF608a653d82a100556144c5DA",
		chainId: 1,
		decimals: 16,
		name: "ExNetwork Token",
		symbol: "EXNT"
	},
	{
		address: "0x5330A5805b9Db68EbCF5247BbC9097163c1c2442",
		chainId: 1,
		decimals: 18,
		name: "Exchange Payment Co",
		symbol: "EXP"
	},
	{
		address: "0xFFee4DB0f30a43955398776A9524fDFF0680dD7f",
		chainId: 1,
		decimals: 8,
		name: "EXSERION Token",
		symbol: "EXR"
	},
	{
		address: "0x6468e79A80C0eaB0F9A2B574c8d5bC374Af59414",
		chainId: 1,
		decimals: 18,
		name: "e Radix",
		symbol: "EXRD"
	},
	{
		address: "0xe469c4473af82217B30CF17b10BcDb6C8c796e75",
		chainId: 1,
		decimals: 0,
		name: "EXRNchain",
		symbol: "EXRN"
	},
	{
		address: "0xb20043F149817bff5322F1b928e89aBFC65A9925",
		chainId: 1,
		decimals: 8,
		name: "EXRT Network",
		symbol: "EXRT"
	},
	{
		address: "0xe06Af951086EC3c488b50E31BE29c07F8a260cA3",
		chainId: 1,
		decimals: 16,
		name: "EXU Protocol",
		symbol: "EXU"
	},
	{
		address: "0x5c743a35E903F6c584514ec617ACEe0611Cf44f3",
		chainId: 1,
		decimals: 18,
		name: "Experty",
		symbol: "EXY"
	},
	{
		address: "0x155ff1A85F440EE0A382eA949f24CE4E0b751c65",
		chainId: 1,
		decimals: 18,
		name: "Behodler",
		symbol: "EYE"
	},
	{
		address: "0x2DCA19E944453e46d9130950Ca135461b3Bc0c30",
		chainId: 1,
		decimals: 18,
		name: "EYES Protocol",
		symbol: "EYES"
	},
	{
		address: "0x00AbA6fE5557De1a1d565658cBDdddf7C710a1eb",
		chainId: 1,
		decimals: 18,
		name: "EasyFi V2",
		symbol: "EZ"
	},
	{
		address: "0x5e6016Ae7d7C49d347dcF834860B9f3Ee282812b",
		chainId: 1,
		decimals: 8,
		name: "EZToken",
		symbol: "EZT"
	},
	{
		address: "0x9E8bfE46f9Af27c5Ea5C9C72b86D71bb86953A0c",
		chainId: 1,
		decimals: 18,
		name: "EZDex",
		symbol: "EZX"
	},
	{
		address: "0xA6D5C720a9af5A405dFB6b9F44Fc44FaB5D4A58D",
		chainId: 1,
		decimals: 8,
		name: "Ezystayz",
		symbol: "EZY"
	},
	{
		address: "0xb0a0a070640B450eB136DC377208469ee4F49fbc",
		chainId: 1,
		decimals: 18,
		name: "Future1Coin",
		symbol: "F1C"
	},
	{
		address: "0x38A94e92A19E970c144DEd0B2DD47278CA11CC1F",
		chainId: 1,
		decimals: 9,
		name: "Falcon Nine",
		symbol: "F9",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0a1D2fF7156a48131553CF381F220bbedB4eFa37",
		chainId: 1,
		decimals: 18,
		name: "FABA",
		symbol: "FABA"
	},
	{
		address: "0x1CCAA0F2a7210d76E1fDec740d5F323E2E1b1672",
		chainId: 1,
		decimals: 18,
		name: "Faceter",
		symbol: "FACE"
	},
	{
		address: "0xcd46d92C46be1DbbD5CcC497e95611ABE9D507Bc",
		chainId: 1,
		decimals: 18,
		name: "FACE Vault  NFTX",
		symbol: "FACE"
	},
	{
		address: "0x23aEfF664c1B2bbA98422a0399586e96cc8a1C92",
		chainId: 1,
		decimals: 18,
		name: "Fee Active Collater",
		symbol: "FACT"
	},
	{
		address: "0xCda2f16C6Aa895D533506B426AFF827b709c87F5",
		chainId: 1,
		decimals: 18,
		name: "Fairum",
		symbol: "FAI"
	},
	{
		address: "0x9B20DaBcec77f6289113E61893F7BEeFAEB1990a",
		chainId: 1,
		decimals: 18,
		name: "FairGame",
		symbol: "FAIR"
	},
	{
		address: "0xE531642e9bb5d027E9C20E03284287B97919a9a5",
		chainId: 1,
		decimals: 8,
		name: "FaithCoin",
		symbol: "FAITH"
	},
	{
		address: "0x190e569bE071F40c704e15825F285481CB74B6cC",
		chainId: 1,
		decimals: 12,
		name: "FAM",
		symbol: "FAM"
	},
	{
		address: "0x9D24364b97270961b2948734aFe8d58832Efd43a",
		chainId: 1,
		decimals: 18,
		name: "Yefam Finance",
		symbol: "FAM"
	},
	{
		address: "0x06f65b8CfCb13a9FE37d836fE9708dA38Ecb29B2",
		chainId: 1,
		decimals: 18,
		name: "Saint Fame",
		symbol: "FAME",
		extensions: {
			color: "#1CD100",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x833E4c02c47B7e38f5b9A80b26eb07D23d1961f4",
		chainId: 1,
		decimals: 4,
		name: "The Bitcoin Family",
		symbol: "FAMILY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4838903d6319E483AB82Ae3f09A1Ec36489A4193",
		chainId: 1,
		decimals: 18,
		name: "Famous Coin",
		symbol: "FAMOUS"
	},
	{
		address: "0x90162f41886c0946D09999736f1C15c8a105A421",
		chainId: 1,
		decimals: 18,
		name: "Fan Token",
		symbol: "FAN"
	},
	{
		address: "0xd33D0EB1c0c0295c3A2409a9101dd511823Bf217",
		chainId: 1,
		decimals: 18,
		name: "Unique Fans",
		symbol: "FANS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7dCB3B2356C822d3577D4d060D0D5D78C860488C",
		chainId: 1,
		decimals: 18,
		name: "FANX Token",
		symbol: "FANX"
	},
	{
		address: "0x7f6715c3FC4740A02F70De85B9FD50ac6001fEd9",
		chainId: 1,
		decimals: 18,
		name: "FANX Token",
		symbol: "FANX"
	},
	{
		address: "0x7cf6dC769482AbEe2FF75795d000F381A8062DEC",
		chainId: 1,
		decimals: 18,
		name: "Far Token",
		symbol: "FAR"
	},
	{
		address: "0xAaE3Cf9968D26925BDb73cE3864e0084a20f4687",
		chainId: 1,
		decimals: 18,
		name: "Farmland Protocol",
		symbol: "FAR"
	},
	{
		address: "0xE8B2a3F60697F3c56fcA44a9616B91Fc9B99f98F",
		chainId: 1,
		decimals: 18,
		name: "FarSwap",
		symbol: "FAR"
	},
	{
		address: "0x41f723448433367BE140D528D35EFECd3e023DB6",
		chainId: 1,
		decimals: 18,
		name: "Farm Partner",
		symbol: "FARM"
	},
	{
		address: "0xa0246c9032bC3A600820415aE600c6388619A14D",
		chainId: 1,
		decimals: 18,
		name: "Harvest Finance",
		symbol: "FARM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC888A0Ab4831A29e6cA432BaBf52E353D23Db3c2",
		chainId: 1,
		decimals: 18,
		name: "FastSwap",
		symbol: "FAST"
	},
	{
		address: "0x2eC95B8edA549B79a1248335A39d299d00Ed314C",
		chainId: 1,
		decimals: 18,
		name: "Fatcoin",
		symbol: "FAT"
	},
	{
		address: "0x7a9716685F852ee268Feb86Dffa562D214cC13dB",
		chainId: 1,
		decimals: 6,
		name: "FANBI TOKEN",
		symbol: "FBT"
	},
	{
		address: "0x74dB83Feba1574fec860413Eb509d1DdFb1b730B",
		chainId: 1,
		decimals: 18,
		name: "Future Cash Digital",
		symbol: "FCD"
	},
	{
		address: "0xF4d861575ecC9493420A3f5a14F85B13f0b50EB3",
		chainId: 1,
		decimals: 18,
		name: "Fractal",
		symbol: "FCL"
	},
	{
		address: "0xE1bAD922F84b198A08292FB600319300ae32471b",
		chainId: 1,
		decimals: 18,
		name: "Firmachain",
		symbol: "FCT"
	},
	{
		address: "0x0B66015bC42601d5986b540373B4e02D7383C7c1",
		chainId: 1,
		decimals: 9,
		name: "Fission Cash",
		symbol: "FCX"
	},
	{
		address: "0x14Cfc7aEAA468E8C789785C39E0b753915AEB426",
		chainId: 1,
		decimals: 18,
		name: "FrogDAO Dime",
		symbol: "FDD"
	},
	{
		address: "0x361887C1D1B73557018c47c8001711168128cf69",
		chainId: 1,
		decimals: 18,
		name: "Firdaos",
		symbol: "FDO"
	},
	{
		address: "0x23352036E911A22Cfc692B5E2E196692658ADED9",
		chainId: 1,
		decimals: 18,
		name: "Friendz",
		symbol: "FDZ"
	},
	{
		address: "0x88A9A52F944315D5B4e917b9689e65445C401E83",
		chainId: 1,
		decimals: 18,
		name: "Fear",
		symbol: "FEAR"
	},
	{
		address: "0xf2Df8458130F00c94bCDE2Dd3F288cF608187F87",
		chainId: 1,
		decimals: 0,
		name: "Feast Finance",
		symbol: "FEAST"
	},
	{
		address: "0x389999216860AB8E0175387A0c90E5c52522C945",
		chainId: 1,
		decimals: 9,
		name: "FEG Token",
		symbol: "FEG"
	},
	{
		address: "0x956F47F50A910163D8BF957Cf5846D573E7f87CA",
		chainId: 1,
		decimals: 18,
		name: "Fei USD",
		symbol: "FEI",
		extensions: {
			color: "#22996E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x4E594479Fa417a1e9C5790a413575802D393010F",
		chainId: 1,
		decimals: 8,
		name: "Ferret Coin",
		symbol: "FER"
	},
	{
		address: "0x539F3615C1dBAfa0D008d87504667458acBd16Fa",
		chainId: 1,
		decimals: 18,
		name: "Fera",
		symbol: "FERA"
	},
	{
		address: "0xE09394F8BA642430eD448CA20f342EC7aa1Ba2E1",
		chainId: 1,
		decimals: 18,
		name: "Fesschain",
		symbol: "FESS"
	},
	{
		address: "0xaea46A60368A7bD060eec7DF8CBa43b7EF41Ad85",
		chainId: 1,
		decimals: 18,
		name: "Fetch.ai",
		symbol: "FET",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xeFCec6d87e3ce625c90865a49f2b7482963D73fE",
		chainId: 1,
		decimals: 6,
		name: "Fetish Coin",
		symbol: "FETISH"
	},
	{
		address: "0x1C1C14A6B5074905Ce5d367B0A7E098b58EbFD47",
		chainId: 1,
		decimals: 8,
		name: "FIDEX Exchange",
		symbol: "FEX"
	},
	{
		address: "0xe8E06a5613dC86D459bC8Fb989e173bB8b256072",
		chainId: 1,
		decimals: 18,
		name: "Feyorra",
		symbol: "FEY"
	},
	{
		address: "0x7E9D8f07A64e363e97A648904a89fb4cd5fB94CD",
		chainId: 1,
		decimals: 18,
		name: "Forefront",
		symbol: "FF"
	},
	{
		address: "0x59aF0356cdeBd1fa23Ae5dADfF9170BbFC31278c",
		chainId: 1,
		decimals: 18,
		name: "Two Prime FF1 Token",
		symbol: "FF1"
	},
	{
		address: "0x22f098F08c4eda4bE4ad6B4ba59866F3E98CEF92",
		chainId: 1,
		decimals: 18,
		name: "Force For Fast",
		symbol: "FFF"
	},
	{
		address: "0xaBAfA52D3d5A2c18A4C1Ae24480D22B831fC0413",
		chainId: 1,
		decimals: 18,
		name: "Future Of Finance F",
		symbol: "FFF"
	},
	{
		address: "0xca76BAa777d749De63Ca044853D22D56bC70bb47",
		chainId: 1,
		decimals: 18,
		name: "Fiscus FYI",
		symbol: "FFYI"
	},
	{
		address: "0xd9A8cfe21C232D485065cb62a96866799d4645f7",
		chainId: 1,
		decimals: 18,
		name: "FingerPrint",
		symbol: "FGP"
	},
	{
		address: "0x0DD83B5013b2ad7094b1A7783d96ae0168f82621",
		chainId: 1,
		decimals: 18,
		name: "Florafic",
		symbol: "FIC"
	},
	{
		address: "0x7e442206dA059905050bA02BE63CBB85c559EB04",
		chainId: 1,
		decimals: 18,
		name: "French ICO Coin",
		symbol: "FICO"
	},
	{
		address: "0x52fb36C83ad33C1824912FC81071cA5eEB8AB390",
		chainId: 1,
		decimals: 18,
		name: "Fidelium",
		symbol: "FID"
	},
	{
		address: "0x2A73CB91ED8983398F83082c093ac306cac209FF",
		chainId: 1,
		decimals: 18,
		name: "Fanboys Interactive",
		symbol: "FIG"
	},
	{
		address: "0xdfC3e857c8cCEA7657E0ed98AB92e048e38deE0f",
		chainId: 1,
		decimals: 18,
		name: "FidelityHouse Token",
		symbol: "FIH"
	},
	{
		address: "0x054f76beED60AB6dBEb23502178C52d6C5dEbE40",
		chainId: 1,
		decimals: 18,
		name: "DeFiner",
		symbol: "FIN"
	},
	{
		address: "0x48A3D9510f7c2aa61A285cCb4eAa5Ba072692468",
		chainId: 1,
		decimals: 9,
		name: "Football Inu",
		symbol: "FINU"
	},
	{
		address: "0xF921ae2DAC5fa128DC0F6168Bf153ea0943d2D43",
		chainId: 1,
		decimals: 8,
		name: "Fire Protocol",
		symbol: "FIRE"
	},
	{
		address: "0x9903A4Cd589DA8e434f264deAFc406836418578E",
		chainId: 1,
		decimals: 4,
		name: "Harrison First",
		symbol: "FIRST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE276056f924E15BEac26F7b10B6D2805F9c64Bb5",
		chainId: 1,
		decimals: 9,
		name: "Firulais",
		symbol: "FIRU"
	},
	{
		address: "0x30BCd71b8d21FE830e493b30e90befbA29de9114",
		chainId: 1,
		decimals: 18,
		name: "Penguin Party Fish",
		symbol: "FISH"
	},
	{
		address: "0x3c72fca8523686fd9e5740b0826FA4bB376E0241",
		chainId: 1,
		decimals: 18,
		name: "300FIT",
		symbol: "FIT"
	},
	{
		address: "0x903D78ca7D892e4518586d0b64F418bd4CA9a82d",
		chainId: 1,
		decimals: 18,
		name: "FK Coin",
		symbol: "FK"
	},
	{
		address: "0x009e864923b49263c7F10D19B7f8Ab7a9A5AAd33",
		chainId: 1,
		decimals: 18,
		name: "Knoxstertoken",
		symbol: "FKX"
	},
	{
		address: "0x16484d73Ac08d2355F466d448D2b79D2039F6EBB",
		chainId: 1,
		decimals: 18,
		name: "FortKnoxster",
		symbol: "FKX"
	},
	{
		address: "0xfFED56a180f23fD32Bc6A1d8d3c09c283aB594A8",
		chainId: 1,
		decimals: 18,
		name: "Freeliquid",
		symbol: "FL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCfb72ED3647cC8E7FA52E4F121eCdAbEfC305e7f",
		chainId: 1,
		decimals: 18,
		name: "Flapp",
		symbol: "FLAP"
	},
	{
		address: "0x20398aD62bb2D930646d45a6D4292baa0b860C1f",
		chainId: 1,
		decimals: 18,
		name: "Flashstake",
		symbol: "FLASH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x32C4ADB9cF57f972bc375129de91C897b4F364F1",
		chainId: 1,
		decimals: 18,
		name: "Flowchain",
		symbol: "FLC"
	},
	{
		address: "0x40897C872214303b6F479a37E549eE1516B264A2",
		chainId: 1,
		decimals: 18,
		name: "FLETA",
		symbol: "FLETA"
	},
	{
		address: "0xFcF8eda095e37A41e002E266DaAD7efC1579bc0A",
		chainId: 1,
		decimals: 18,
		name: "FLEX Coin",
		symbol: "FLEX"
	},
	{
		address: "0xdBf5c7D8ac5007667617a15DB2c1B1D616c9D302",
		chainId: 1,
		decimals: 18,
		name: "FlexETH BTC Set",
		symbol: "FLEXETHBTC"
	},
	{
		address: "0xa774FFB4AF6B0A91331C084E1aebAE6Ad535e6F3",
		chainId: 1,
		decimals: 18,
		name: "flexUSD",
		symbol: "FLEXUSD"
	},
	{
		address: "0xf04a8ac553FceDB5BA99A64799155826C136b0Be",
		chainId: 1,
		decimals: 18,
		name: "Flixxo",
		symbol: "FLIXX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9235bDA06B8807161b8FBB1e102CB654555b212F",
		chainId: 1,
		decimals: 3,
		name: "Feellike",
		symbol: "FLL"
	},
	{
		address: "0x04cC783b450b8D11F3C7d00DD03fDF7FB51fE9F2",
		chainId: 1,
		decimals: 18,
		name: "Filmscoin",
		symbol: "FLMC"
	},
	{
		address: "0x5976F7dac1525eF3277836043bA474a35E6B4272",
		chainId: 1,
		decimals: 0,
		name: "Filmscoin",
		symbol: "FLMC"
	},
	{
		address: "0xb05097849BCA421A3f51B249BA6CCa4aF4b97cb9",
		chainId: 1,
		decimals: 18,
		name: "Float Protocol  Flo",
		symbol: "FLOAT"
	},
	{
		address: "0x43f11c02439e2736800433b4594994Bd43Cd066D",
		chainId: 1,
		decimals: 9,
		name: "Floki Inu",
		symbol: "FLOKI"
	},
	{
		address: "0x2de72aDa48BDF7Bac276256D3F016fE058490C34",
		chainId: 1,
		decimals: 9,
		name: "Floki Inu",
		symbol: "FLOKI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x049399a6B048D52971F7D122aE21A1532722285F",
		chainId: 1,
		decimals: 18,
		name: "Fire Lotto",
		symbol: "FLOT"
	},
	{
		address: "0x3a1Bda28AdB5B0a812a7CF10A1950c920F79BcD3",
		chainId: 1,
		decimals: 18,
		name: "FLIP",
		symbol: "FLP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9aeFBE0b3C3ba9Eab262CB9856E8157AB7648e09",
		chainId: 1,
		decimals: 18,
		name: "Flair Coin",
		symbol: "FLR"
	},
	{
		address: "0xB351dA6ffEbd5DddD1dA037929FCf334d6B4A8D5",
		chainId: 1,
		decimals: 18,
		name: "Flit Token",
		symbol: "FLT"
	},
	{
		address: "0x469eDA64aEd3A3Ad6f868c44564291aA415cB1d9",
		chainId: 1,
		decimals: 18,
		name: "FLUX",
		symbol: "FLUX",
		extensions: {
			color: "#2b61d1",
			isVerified: true
		}
	},
	{
		address: "0x7645DdfEecedA57e41f92679c4aCd83c56A81D14",
		chainId: 1,
		decimals: 18,
		name: "Flux Protocol",
		symbol: "FLUX"
	},
	{
		address: "0x954b5De09A55e59755aCBda29e1Eb74A45D30175",
		chainId: 1,
		decimals: 18,
		name: "Fluz Fluz Global",
		symbol: "FLUZ"
	},
	{
		address: "0x6243d8CEA23066d098a15582d81a598b4e8391F4",
		chainId: 1,
		decimals: 18,
		name: "Reflexer Ungovernan",
		symbol: "FLX"
	},
	{
		address: "0x70b147E01E9285E7cE68B9BA437Fe3a9190E756a",
		chainId: 1,
		decimals: 18,
		name: "BitFlux",
		symbol: "FLX"
	},
	{
		address: "0x54735d716995071585A4f6ba341a6Ded79756F09",
		chainId: 1,
		decimals: 18,
		name: "FLUX Token",
		symbol: "FLX"
	},
	{
		address: "0x85f6eB2BD5a062f5F8560BE93FB7147e16c81472",
		chainId: 1,
		decimals: 4,
		name: "Franklin",
		symbol: "FLY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0f8794f66C7170c4f9163a8498371A747114f6C4",
		chainId: 1,
		decimals: 18,
		name: "Flama",
		symbol: "FMA"
	},
	{
		address: "0x947938339BF61c84669E303Bc39c794D65A525D0",
		chainId: 1,
		decimals: 18,
		name: "FME",
		symbol: "FME"
	},
	{
		address: "0xb4d0FDFC8497AEF97d3c2892AE682eE06064A2BC",
		chainId: 1,
		decimals: 18,
		name: "Formosa Financial",
		symbol: "FMF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2991341D28Eaea277785D20e1d878D478c7bA4C7",
		chainId: 1,
		decimals: 18,
		name: "FM Gallery",
		symbol: "FMG"
	},
	{
		address: "0xdE522a2778E4554707E6a8Df36a4871ce9967BB5",
		chainId: 1,
		decimals: 18,
		name: "FormulA",
		symbol: "FML"
	},
	{
		address: "0x99c6e435eC259A7E8d65E1955C9423DB624bA54C",
		chainId: 1,
		decimals: 18,
		name: "Finminity",
		symbol: "FMT"
	},
	{
		address: "0xAa9D866666C2A3748d6B23Ff69E63E52f08d9AB4",
		chainId: 1,
		decimals: 18,
		name: "Fundamenta",
		symbol: "FMTA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE6D2c3cB986db66818c14C7032DB05D1d2A6ee74",
		chainId: 1,
		decimals: 8,
		name: "FinexboxToken",
		symbol: "FNB"
	},
	{
		address: "0x4DF47B4969B2911C966506E3592c41389493953b",
		chainId: 1,
		decimals: 18,
		name: "FundRequest",
		symbol: "FND"
	},
	{
		address: "0xbe6c01A67Bd0160FE3e731555aD014895B225Dfa",
		chainId: 1,
		decimals: 18,
		name: "Fundum",
		symbol: "FND"
	},
	{
		address: "0x00873432f09143556CC156D3cf971E4C8f68DacE",
		chainId: 1,
		decimals: 0,
		name: "FND Ottho Heldrings",
		symbol: "FND1066XT31D"
	},
	{
		address: "0xB5FE099475d3030DDe498c3BB6F3854F762A48Ad",
		chainId: 1,
		decimals: 18,
		name: "Fnk com",
		symbol: "FNK"
	},
	{
		address: "0x0707681F344dEB24184037fC0228856F2137B02E",
		chainId: 1,
		decimals: 18,
		name: "FNKOS",
		symbol: "FNKOS"
	},
	{
		address: "0x3B78dc5736a49BD297Dd2E4d62daA83D35A22749",
		chainId: 1,
		decimals: 18,
		name: "Finswap",
		symbol: "FNSP"
	},
	{
		address: "0xDc5864eDe28BD4405aa04d93E05A0531797D9D59",
		chainId: 1,
		decimals: 6,
		name: "Falcon Project",
		symbol: "FNT"
	},
	{
		address: "0xbD4B60a138b3fce3584EA01f50c0908c18f9677A",
		chainId: 1,
		decimals: 8,
		name: "Fintab",
		symbol: "FNTB"
	},
	{
		address: "0xeF9Cd7882c067686691B6fF49e650b43AFBBCC6B",
		chainId: 1,
		decimals: 18,
		name: "FinNexus",
		symbol: "FNX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4946Fcea7C692606e8908002e55A582af44AC121",
		chainId: 1,
		decimals: 18,
		name: "FOAM",
		symbol: "FOAM",
		extensions: {
			color: "#D79C93",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x76851A93977bEA9264C32255b6457882035C7501",
		chainId: 1,
		decimals: 9,
		name: "Fat Doge",
		symbol: "FOGE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA8580F3363684d76055bdC6660CaeFe8709744e1",
		chainId: 1,
		decimals: 18,
		name: "Folder Protocol",
		symbol: "FOL"
	},
	{
		address: "0xd084944d3c05CD115C09d072B9F44bA3E0E45921",
		chainId: 1,
		decimals: 18,
		name: "Manifold Finance",
		symbol: "FOLD"
	},
	{
		address: "0x05385abD2a95a8cd9B696F738aed73f1AFbc12E0",
		chainId: 1,
		decimals: 18,
		name: "Fompound",
		symbol: "FOMP"
	},
	{
		address: "0x4C25Bdf026Ea05F32713F00f73Ca55857Fbf6342",
		chainId: 1,
		decimals: 18,
		name: "Font",
		symbol: "FONT"
	},
	{
		address: "0x2a093BcF0C98Ef744Bb6F69D74f2F85605324290",
		chainId: 1,
		decimals: 8,
		name: "FoodCoin",
		symbol: "FOOD"
	},
	{
		address: "0x1FCdcE58959f536621d76f5b7FfB955baa5A672F",
		chainId: 1,
		decimals: 18,
		name: "ForTube",
		symbol: "FOR"
	},
	{
		address: "0x2C31b10ca416b82Cec4c5E93c615ca851213d48D",
		chainId: 1,
		decimals: 18,
		name: "Force DAO",
		symbol: "FORCE"
	},
	{
		address: "0xC1fB6C015fC535aBD331D3029De76a62e412Fb23",
		chainId: 1,
		decimals: 4,
		name: "Forcer",
		symbol: "FORCER",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x81AFa8ACa19d5693883B0B1e10ae1Ccaf2F42781",
		chainId: 1,
		decimals: 9,
		name: "ForeverUp",
		symbol: "FOREVERUP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa4E9584DAa093Cb1205E17bA737c3fd015748087",
		chainId: 1,
		decimals: 18,
		name: "FOREXCOIN",
		symbol: "FOREX"
	},
	{
		address: "0x5bB1632fA0023e1AA76a1AE92B4635C8DBa49Fa2",
		chainId: 1,
		decimals: 18,
		name: "GastroAdvisorToken",
		symbol: "FORK"
	},
	{
		address: "0x21381e026Ad6d8266244f2A583b35F9E4413FA2a",
		chainId: 1,
		decimals: 18,
		name: "Formation FI",
		symbol: "FORM"
	},
	{
		address: "0xb1EC548F296270BC96B8A1b3b3C8F3f04b494215",
		chainId: 1,
		decimals: 18,
		name: "Foresight",
		symbol: "FORS"
	},
	{
		address: "0x77FbA179C79De5B7653F68b5039Af940AdA60ce0",
		chainId: 1,
		decimals: 18,
		name: "Ampleforth Governan",
		symbol: "FORTH"
	},
	{
		address: "0x4270bb238f6DD8B1c3ca01f96CA65b2647c06D3C",
		chainId: 1,
		decimals: 18,
		name: "Fortuna",
		symbol: "FOTA"
	},
	{
		address: "0xF6eA0E60cee427B90aA36f327eE61d1d4CABC49F",
		chainId: 1,
		decimals: 18,
		name: "UniqueOne Photo",
		symbol: "FOTO"
	},
	{
		address: "0x4730fB1463A6F1F44AEB45F6c5c422427f37F4D0",
		chainId: 1,
		decimals: 18,
		name: "4thpillar technolog",
		symbol: "FOUR"
	},
	{
		address: "0xc770EEfAd204B5180dF6a14Ee197D99d808ee52d",
		chainId: 1,
		decimals: 18,
		name: "ShapeShift FOX Toke",
		symbol: "FOX"
	},
	{
		address: "0xFbe878CED08132bd8396988671b450793C44bC12",
		chainId: 1,
		decimals: 18,
		name: "Fox Trading Token",
		symbol: "FOXT"
	},
	{
		address: "0x31D457E7bcFf5Bc9A5Ef86E6a5eA1DB5b5C3BFB0",
		chainId: 1,
		decimals: 18,
		name: "Star Foxx",
		symbol: "FOXX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xAf91E8aFbe87642dC628786188a54B78580A4d76",
		chainId: 1,
		decimals: 18,
		name: "Fund Of Yours",
		symbol: "FOY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9d5e6b92Ba3f75589943372DF82DbD3A8A802e80",
		chainId: 1,
		decimals: 18,
		name: "FINPLE",
		symbol: "FPT"
	},
	{
		address: "0xC626e0619aC79AFEa9281c8eB9b1a9f9D3Fab532",
		chainId: 1,
		decimals: 18,
		name: "Freedom Reserve",
		symbol: "FR"
	},
	{
		address: "0x8c39afDf7B17F12c553208555E51ab86E69C35aA",
		chainId: 1,
		decimals: 8,
		name: "Fr8 Network",
		symbol: "FR8"
	},
	{
		address: "0x853d955aCEf822Db058eb8505911ED77F175b99e",
		chainId: 1,
		decimals: 18,
		name: "Frax",
		symbol: "FRAX"
	},
	{
		address: "0x0ABeFb7611Cb3A01EA3FaD85f33C3C934F8e2cF4",
		chainId: 1,
		decimals: 18,
		name: "FARAD Cryptoken",
		symbol: "FRD"
	},
	{
		address: "0x17e67d1CB4e349B9CA4Bc3e17C7DF2a397A7BB64",
		chainId: 1,
		decimals: 18,
		name: "Freyrchain",
		symbol: "FREC"
	},
	{
		address: "0xd8B8E1Eca89dA014E67fDbc2014eaA8E171079bF",
		chainId: 1,
		decimals: 18,
		name: "FreldoCoinX",
		symbol: "FRECNX"
	},
	{
		address: "0xd8e2b153E94daeC5fE657A49FF59bb68fA67f126",
		chainId: 1,
		decimals: 18,
		name: "FRED Energy  ERC 20",
		symbol: "FREDX"
	},
	{
		address: "0xC2Bd7a597391f31D2E36c2cb769fcE0E5bd6d482",
		chainId: 1,
		decimals: 18,
		name: "Anti Lockdown",
		symbol: "FREE"
	},
	{
		address: "0x2F141Ce366a2462f02cEA3D12CF93E4DCa49e4Fd",
		chainId: 1,
		decimals: 18,
		name: "FREE coin",
		symbol: "FREE"
	},
	{
		address: "0x29CeDDCF0Da3c1D8068a7DFbD0FB06c2E438FF70",
		chainId: 1,
		decimals: 18,
		name: "Freela",
		symbol: "FREL"
	},
	{
		address: "0xE5CAeF4Af8780E59Df925470b050Fb23C43CA68C",
		chainId: 1,
		decimals: 6,
		name: "Ferrum Network",
		symbol: "FRM"
	},
	{
		address: "0xf6832EA221ebFDc2363729721A146E6745354b14",
		chainId: 1,
		decimals: 18,
		name: "FRMx Token",
		symbol: "FRMX"
	},
	{
		address: "0x29502fE4d233EF0b45C3647101Fa1252cE0634BD",
		chainId: 1,
		decimals: 9,
		name: "Froge Finance",
		symbol: "FROGE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf8C3527CC04340b208C854E985240c02F7B7793f",
		chainId: 1,
		decimals: 18,
		name: "Frontier",
		symbol: "FRONT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x229B239b7d00AA2A41C8B74B1dB50a821f58D31a",
		chainId: 1,
		decimals: 8,
		name: "Fruits",
		symbol: "FRTS"
	},
	{
		address: "0x48DF4E0296f908CEAb0428A5182D19B31fC037d6",
		chainId: 1,
		decimals: 8,
		name: "Fitrova",
		symbol: "FRV"
	},
	{
		address: "0x36a73557f5BDE5195EC39eCA82d28b8A36D21141",
		chainId: 1,
		decimals: 18,
		name: "Forex Coin",
		symbol: "FRX"
	},
	{
		address: "0x6c972b70c533E2E045F333Ee28b9fFb8D717bE69",
		chainId: 1,
		decimals: 18,
		name: "FoundryDAO Logistic",
		symbol: "FRY"
	},
	{
		address: "0x1ed7AE1F0E2Fa4276DD7ddC786334a3dF81D50c0",
		chainId: 1,
		decimals: 18,
		name: "FSBT API",
		symbol: "FSBT"
	},
	{
		address: "0x0789dbAE94fb18e5789B8e4489BCB7A1ADB58622",
		chainId: 1,
		decimals: 8,
		name: "FISCO Coin",
		symbol: "FSCC"
	},
	{
		address: "0xD27af03cb73a29eE2f37194c70c4Ee13B68fE8cb",
		chainId: 1,
		decimals: 18,
		name: "Freq Set Dollar",
		symbol: "FSD"
	},
	{
		address: "0xD0352a019e9AB9d757776F532377aAEbd36Fd541",
		chainId: 1,
		decimals: 18,
		name: "Fusion",
		symbol: "FSN"
	},
	{
		address: "0x0128E4FcCf5EF86b030b28f0a8A029A3c5397a94",
		chainId: 1,
		decimals: 18,
		name: "FlashSwap",
		symbol: "FSP"
	},
	{
		address: "0x0E192d382a36De7011F795Acc4391Cd302003606",
		chainId: 1,
		decimals: 18,
		name: "Futureswap",
		symbol: "FST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCbe83d6323a9eC795D5Cb73b333b23377a823ECC",
		chainId: 1,
		decimals: 18,
		name: "Futureswap: ETHUSD",
		symbol: "fstETHDAI"
	},
	{
		address: "0xfffffffFf15AbF397dA76f1dcc1A1604F45126DB",
		chainId: 1,
		decimals: 18,
		name: "FalconSwap",
		symbol: "FSW",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x78a73B6CBc5D183CE56e786f6e905CaDEC63547B",
		chainId: 1,
		decimals: 18,
		name: "Fabric Token",
		symbol: "FT"
	},
	{
		address: "0x26aC29dC25806199373cb4884AA9E077a0587c5b",
		chainId: 1,
		decimals: 18,
		name: "free trade chain",
		symbol: "ftc"
	},
	{
		address: "0xe6f74dcfa0E20883008d8C16b6d9a329189D0C30",
		chainId: 1,
		decimals: 2,
		name: "FTC",
		symbol: "FTC"
	},
	{
		address: "0x943ED852DadB5C3938ECdC6883718df8142DE4C8",
		chainId: 1,
		decimals: 18,
		name: "FansTime",
		symbol: "FTI"
	},
	{
		address: "0x4E15361FD6b4BB609Fa63C81A2be19d873717870",
		chainId: 1,
		decimals: 18,
		name: "Fantom",
		symbol: "FTM"
	},
	{
		address: "0x2023DCf7c438c8C8C0B0F28dBaE15520B4f3Ee20",
		chainId: 1,
		decimals: 18,
		name: "Futourist Token",
		symbol: "FTR"
	},
	{
		address: "0x2AEC18c5500f21359CE1BEA5Dc1777344dF4C0Dc",
		chainId: 1,
		decimals: 18,
		name: "FarmaTrust Token",
		symbol: "FTT"
	},
	{
		address: "0x50D1c9771902476076eCFc8B2A83Ad6b9355a4c9",
		chainId: 1,
		decimals: 18,
		name: "FTX Token",
		symbol: "FTT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd559f20296FF4895da39b5bd9ADd54b442596a61",
		chainId: 1,
		decimals: 18,
		name: "FintruX Network",
		symbol: "FTX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x41875C2332B0877cDFAA699B641402b7D4642c32",
		chainId: 1,
		decimals: 8,
		name: "FUTURAX",
		symbol: "FTXT"
	},
	{
		address: "0x65Be44C747988fBF606207698c944Df4442efE19",
		chainId: 1,
		decimals: 4,
		name: "FUCK Token",
		symbol: "FUCK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xAb16E0d25c06CB376259cc18C1de4ACA57605589",
		chainId: 1,
		decimals: 4,
		name: "FinallyUsableCryptoKarma",
		symbol: "FUCK"
	},
	{
		address: "0x2688213fEDd489762a281a67Ae4F2295D8E17ECc",
		chainId: 1,
		decimals: 18,
		name: "FUD finance",
		symbol: "FUD"
	},
	{
		address: "0xEA38eAa3C86c8F9B751533Ba2E562deb9acDED40",
		chainId: 1,
		decimals: 18,
		name: "Etherparty",
		symbol: "FUEL"
	},
	{
		address: "0x419D0d8BdD9aF5e606Ae2232ed285Aff190E711b",
		chainId: 1,
		decimals: 8,
		name: "FunFair",
		symbol: "FUN",
		extensions: {
			color: "#E40057",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xd20bcBD56d9D551CAc10a6bC2a83635BFb72F3F4",
		chainId: 1,
		decimals: 6,
		name: "FUNDChains",
		symbol: "FUND"
	},
	{
		address: "0x30D862bbbef3B75f700D6ba7D323B95708eaafAA",
		chainId: 1,
		decimals: 18,
		name: "Funder One",
		symbol: "FUNDX"
	},
	{
		address: "0x970B9bB2C0444F5E81e9d0eFb84C8ccdcdcAf84d",
		chainId: 1,
		decimals: 18,
		name: "Fuse network",
		symbol: "FUSE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x187D1018E8ef879BE4194d6eD7590987463eAD85",
		chainId: 1,
		decimals: 18,
		name: "FUZE Token",
		symbol: "FUZE"
	},
	{
		address: "0x4bCDdFCFA8CB923952BcF16644b36e5dA5CA3184",
		chainId: 1,
		decimals: 12,
		name: "Fuzzy Inu",
		symbol: "FUZZY"
	},
	{
		address: "0x45080a6531d671DDFf20DB42f93792a489685e32",
		chainId: 1,
		decimals: 18,
		name: "Finance Vote",
		symbol: "FVT"
	},
	{
		address: "0x35bD01FC9d6D5D81CA9E055Db88Dc49aa2c699A8",
		chainId: 1,
		decimals: 18,
		name: "Friends With Benefits Pro",
		symbol: "FWB",
		extensions: {
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xf151980E7A781481709e8195744bF2399FB3Cba4",
		chainId: 1,
		decimals: 18,
		name: "Freeway Token",
		symbol: "FWT"
	},
	{
		address: "0x8c15Ef5b4B21951d50E53E4fbdA8298FFAD25057",
		chainId: 1,
		decimals: 18,
		name: "Function X",
		symbol: "FX"
	},
	{
		address: "0xED0e2041BFb5a426e5ED426A73765624E08BbB75",
		chainId: 1,
		decimals: 18,
		name: "FANZY",
		symbol: "FX1"
	},
	{
		address: "0x4a57E687b9126435a9B19E4A802113e266AdeBde",
		chainId: 1,
		decimals: 18,
		name: "Flexacoin",
		symbol: "FXC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc92D6E3E64302C59d734f3292E2A13A13D7E1817",
		chainId: 1,
		decimals: 8,
		name: "FUTURAX",
		symbol: "FXC"
	},
	{
		address: "0x8a40c222996f9F3431f63Bf80244C36822060f12",
		chainId: 1,
		decimals: 18,
		name: "Finxflo",
		symbol: "FXF"
	},
	{
		address: "0x14dDda446688b73161AA1382F4E4343353aF6FC8",
		chainId: 1,
		decimals: 8,
		name: "FXPay",
		symbol: "FXP"
	},
	{
		address: "0x3432B6A60D23Ca0dFCa7761B7ab56459D9C964D0",
		chainId: 1,
		decimals: 18,
		name: "Frax Share",
		symbol: "FXS"
	},
	{
		address: "0x1829aA045E21E0D59580024A951DB48096e01782",
		chainId: 1,
		decimals: 18,
		name: "FuzeX",
		symbol: "FXT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF83Bf320A4A3f4bf365c3114b6F19FC3F6b1228C",
		chainId: 1,
		decimals: 6,
		name: "FXT Token",
		symbol: "FXT"
	},
	{
		address: "0xA024E8057EEC474a9b2356833707Dd0579E26eF3",
		chainId: 1,
		decimals: 18,
		name: "$FIXY NETWORK",
		symbol: "FXY"
	},
	{
		address: "0x88FCFBc22C6d3dBaa25aF478C578978339BDe77a",
		chainId: 1,
		decimals: 18,
		name: "Fund Yourself Now",
		symbol: "FYN"
	},
	{
		address: "0x8F0921f30555624143d427b340b1156914882C10",
		chainId: 1,
		decimals: 18,
		name: "FlypMe",
		symbol: "FYP"
	},
	{
		address: "0x6F39297BC0C386355C77DA3A0275C867B21b2454",
		chainId: 1,
		decimals: 8,
		name: "GrandPa Fan",
		symbol: "FYY"
	},
	{
		address: "0x6BFf2fE249601ed0Db3a87424a2E923118BB0312",
		chainId: 1,
		decimals: 18,
		name: "FYOOZ",
		symbol: "FYZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x19A2cF2A1B2f76e52E2b0c572bD80A95B4Fa8643",
		chainId: 1,
		decimals: 18,
		name: "Fyooz NFT",
		symbol: "FYZNFT"
	},
	{
		address: "0xE5aeE163513119F4F750376C718766B40fA37A5F",
		chainId: 1,
		decimals: 18,
		name: "Frozencoin Network",
		symbol: "FZ"
	},
	{
		address: "0x8720C8429b78df262360b0F39917a03f9B894746",
		chainId: 1,
		decimals: 8,
		name: "Frenzy",
		symbol: "FZY"
	},
	{
		address: "0xd9b312D77Bc7BEd9B9CecB56636300bED4Fe5Ce9",
		chainId: 1,
		decimals: 18,
		name: "Gains",
		symbol: "GAINS"
	},
	{
		address: "0x15D4c048F83bd7e37d49eA4C83a07267Ec4203dA",
		chainId: 1,
		decimals: 8,
		name: "Gala",
		symbol: "GALA"
	},
	{
		address: "0xF67451Dc8421F0e0afEB52faa8101034ed081Ed9",
		chainId: 1,
		decimals: 8,
		name: "Gambit",
		symbol: "GAM"
	},
	{
		address: "0x63f88A2298a5c4AEE3c216Aa6D926B184a4b2437",
		chainId: 1,
		decimals: 18,
		name: "GameCredits",
		symbol: "GAME"
	},
	{
		address: "0xD567B5F02b9073aD3a982a099a23Bf019FF11d1c",
		chainId: 1,
		decimals: 5,
		name: "Gamestarter",
		symbol: "GAME"
	},
	{
		address: "0x6754e21b9EAa053c62d7854dD6561ae451B0cBCf",
		chainId: 1,
		decimals: 18,
		name: "GANA",
		symbol: "GANA"
	},
	{
		address: "0xc0EA6306F6360FE7dCAB65D16Bf1a3AF92C79Aa2",
		chainId: 1,
		decimals: 18,
		name: "GANA",
		symbol: "GANA"
	},
	{
		address: "0x9570eC7ab05D61877ff7Eb180F837c7c079c4844",
		chainId: 1,
		decimals: 18,
		name: "Gaps Chain",
		symbol: "GAP"
	},
	{
		address: "0xc58467b855401EF3FF8FdA9216F236e29f0d6277",
		chainId: 1,
		decimals: 18,
		name: "Gasgains",
		symbol: "GASG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x687174f8C49ceb7729D925C3A961507ea4Ac7b28",
		chainId: 1,
		decimals: 18,
		name: "Global Awards Token",
		symbol: "GAT"
	},
	{
		address: "0x24efE6b87bF1Bfe9ea2cCB5A9D0a959C7172b364",
		chainId: 1,
		decimals: 0,
		name: "Global AEX Token",
		symbol: "GAT"
	},
	{
		address: "0x9d7630aDF7ab0b0CB00Af747Db76864df0EC82E4",
		chainId: 1,
		decimals: 18,
		name: "GATENet",
		symbol: "GATE"
	},
	{
		address: "0xF5c0E24ACA5217BcBAe662871caE1A86873F02db",
		chainId: 1,
		decimals: 18,
		name: "Alligator   Fractal",
		symbol: "GATOR"
	},
	{
		address: "0x708876f486e448Ee89eB332bFbC8E593553058b9",
		chainId: 1,
		decimals: 18,
		name: "GAVEL",
		symbol: "GAVEL"
	},
	{
		address: "0xD1E06952708771f71E6dd18F06EE418F6e8FC564",
		chainId: 1,
		decimals: 18,
		name: "GazeTV",
		symbol: "GAZE"
	},
	{
		address: "0xCB67bE5c54eab9462967eE3C03C35bfFfeB801cD",
		chainId: 1,
		decimals: 18,
		name: "Galactic Blue Index",
		symbol: "GBI"
	},
	{
		address: "0x3e522D144814BD6149C1F3e0c6cD19d0941372AC",
		chainId: 1,
		decimals: 18,
		name: "Goldblock",
		symbol: "GBK"
	},
	{
		address: "0xCc2a74b28E786Fac86bE3CA354B1941c25aB3EaB",
		chainId: 1,
		decimals: 18,
		name: "GABO",
		symbol: "GBO"
	},
	{
		address: "0x7ba92741Bf2A568abC6f1D3413c58c6e0244F8fD",
		chainId: 1,
		decimals: 18,
		name: "Monerium GBP",
		symbol: "GBPe"
	},
	{
		address: "0x27ed129C298c5Df130364083F491e2920E5A2f29",
		chainId: 1,
		decimals: 18,
		name: "Upper Pound",
		symbol: "GBPU"
	},
	{
		address: "0x7585F835ae2d522722d2684323a0ba83401f32f5",
		chainId: 1,
		decimals: 18,
		name: "GBT",
		symbol: "GBT"
	},
	{
		address: "0xD8Bd3958725F216Eb236E9DC65B169DE48101C6A",
		chainId: 1,
		decimals: 8,
		name: "Globatalent",
		symbol: "GBT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x12fCd6463E66974cF7bBC24FFC4d40d6bE458283",
		chainId: 1,
		decimals: 18,
		name: "Globitex",
		symbol: "GBX"
	},
	{
		address: "0x8Eb38715604b938812DEC25A0A1bc05B4becB9ca",
		chainId: 1,
		decimals: 18,
		name: "Gric Coin",
		symbol: "GC"
	},
	{
		address: "0x720c2c93F5f9A6b82226e84095558B10F399b0FA",
		chainId: 1,
		decimals: 18,
		name: "Gric Coin",
		symbol: "GC"
	},
	{
		address: "0x486A72811ae65C4C814Ba929d6da35497d21296f",
		chainId: 1,
		decimals: 18,
		name: "Galaxy Wallet",
		symbol: "GC"
	},
	{
		address: "0xc53f6C2Ac35D30cc47Ddf3C320874b21dFA38791",
		chainId: 1,
		decimals: 4,
		name: "Gcash",
		symbol: "GCASH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x15c303B84045f67156AcF6963954e4247B526717",
		chainId: 1,
		decimals: 18,
		name: "Gas Cash Back",
		symbol: "GCBN"
	},
	{
		address: "0x1778fFfBD431be2AC3D69e64d1d819C786B2BEe0",
		chainId: 1,
		decimals: 8,
		name: "Global Crypto Gate",
		symbol: "GCG"
	},
	{
		address: "0xdb0F69306FF8F949f258E83f6b87ee5D052d0b23",
		chainId: 1,
		decimals: 18,
		name: "Globcoin Crypto Platform",
		symbol: "GCP"
	},
	{
		address: "0x37F6F8eb409DEB9fEAf032c109A72319F665C79D",
		chainId: 1,
		decimals: 18,
		name: "Gold Coin Reserve",
		symbol: "GCR"
	},
	{
		address: "0x6307B25A665Efc992EC1C1bC403c38F3dDd7c661",
		chainId: 1,
		decimals: 4,
		name: "Global Coin Researc",
		symbol: "GCR"
	},
	{
		address: "0xa4ec83c8907888d006A37debF755ee39766f38ae",
		chainId: 1,
		decimals: 18,
		name: "Global Currency Unit",
		symbol: "GCU"
	},
	{
		address: "0x44A67C8570a61A28bAfd0035042f2F0A73a64428",
		chainId: 1,
		decimals: 6,
		name: "GermanCoin",
		symbol: "GCX"
	},
	{
		address: "0x515d7E9D75E2b76DB60F8a051Cd890eBa23286Bc",
		chainId: 1,
		decimals: 18,
		name: "Governor DAO",
		symbol: "GDAO"
	},
	{
		address: "0x301C755bA0fcA00B1923768Fffb3Df7f4E63aF31",
		chainId: 1,
		decimals: 18,
		name: "Global Digital Cont",
		symbol: "GDC"
	},
	{
		address: "0xb5e88B229B18e748e3aa16A1C2bFefdFc8a5560d",
		chainId: 1,
		decimals: 18,
		name: "Global DeFi",
		symbol: "GDEFI"
	},
	{
		address: "0x6AA493050427c7AF81D38F19Fd6b4f5DD3a75E3B",
		chainId: 1,
		decimals: 18,
		name: "GoldenDog",
		symbol: "GDOG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x874D4C9B980f1a13dD44CBcDB912e24Ef0671eD0",
		chainId: 1,
		decimals: 18,
		name: "Guider",
		symbol: "GDR"
	},
	{
		address: "0xc67B12049c2D0CF6e476BC64c7F82fc6C63cFFc5",
		chainId: 1,
		decimals: 8,
		name: "Globe Derivative Ex",
		symbol: "GDT"
	},
	{
		address: "0x1b980e05943dE3dB3a459C72325338d327B6F5a9",
		chainId: 1,
		decimals: 18,
		name: "Bitgear",
		symbol: "GEAR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4F4f0Db4de903B88f2B1a2847971E231D54F8fd3",
		chainId: 1,
		decimals: 8,
		name: "Geens Platform Token",
		symbol: "GEE"
	},
	{
		address: "0x6B9f031D718dDed0d681c20cB754F97b3BB81b78",
		chainId: 1,
		decimals: 18,
		name: "Geeq",
		symbol: "GEEQ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd0464A1985edB76Ba82602534a2d89d8cCf3B7Ec",
		chainId: 1,
		decimals: 2,
		name: "GlobalEdu",
		symbol: "GEFT"
	},
	{
		address: "0x24083Bb30072643C3bB90B44B7285860a755e687",
		chainId: 1,
		decimals: 18,
		name: "GELD",
		symbol: "GELD"
	},
	{
		address: "0xc7BbA5b765581eFb2Cdd2679DB5Bea9eE79b201f",
		chainId: 1,
		decimals: 18,
		name: "Gems",
		symbol: "GEM"
	},
	{
		address: "0x30B1eFB052205E6CA3c4888C3C50C5b339cc0602",
		chainId: 1,
		decimals: 18,
		name: "Cargo Gems",
		symbol: "GEM"
	},
	{
		address: "0x90f62B96a62801488b151fF3c65eaC5Fae21a962",
		chainId: 1,
		decimals: 18,
		name: "GemSwap",
		symbol: "GEM"
	},
	{
		address: "0xe74ac81B14021d0Cfb835F269F48F25918C5cAE6",
		chainId: 1,
		decimals: 18,
		name: "Carbon GEMS",
		symbol: "GEMS"
	},
	{
		address: "0x543Ff227F64Aa17eA132Bf9886cAb5DB55DCAddf",
		chainId: 1,
		decimals: 18,
		name: "DAOstack",
		symbol: "GEN",
		extensions: {
			color: "#25292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x6DD4e4Aad29A40eDd6A409b9c1625186C9855b4D",
		chainId: 1,
		decimals: 8,
		name: "Parkgene",
		symbol: "GENE"
	},
	{
		address: "0x884181554dfA9e578d36379919C05C25dC4a15bB",
		chainId: 1,
		decimals: 18,
		name: "Gene Source Code To",
		symbol: "GENE"
	},
	{
		address: "0xf6ec87DFE1Ed3a7256Cc0c38e3c8139103e9aF3b",
		chainId: 1,
		decimals: 18,
		name: "Gene",
		symbol: "GENE"
	},
	{
		address: "0x1673A63aA0047294d75954226f3F2F98De77b16f",
		chainId: 1,
		decimals: 18,
		name: "GENES Chain",
		symbol: "GENES"
	},
	{
		address: "0x0f767338244418310342D49b02183715691D988F",
		chainId: 1,
		decimals: 18,
		name: "Genesis Token",
		symbol: "GENT"
	},
	{
		address: "0x147faF8De9d8D8DAAE129B187F0D02D819126750",
		chainId: 1,
		decimals: 18,
		name: "GeoDB",
		symbol: "GEO"
	},
	{
		address: "0xDe5eA375FFBDc8b25a80fe13D631E8Ba0AB4BB02",
		chainId: 1,
		decimals: 18,
		name: "Gera Coin",
		symbol: "GERA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3431F91b3a388115F00C5Ba9FdB899851D005Fb5",
		chainId: 1,
		decimals: 18,
		name: "GeroWallet",
		symbol: "GERO"
	},
	{
		address: "0x8a854288a5976036A725879164Ca3e91d30c6A1B",
		chainId: 1,
		decimals: 18,
		name: "GET Protocol",
		symbol: "GET",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9ad03c34aAb604A9e0Fde41dbF8E383E11c416c4",
		chainId: 1,
		decimals: 18,
		name: "Guarded Ether",
		symbol: "GETH"
	},
	{
		address: "0x03282f2D7834a97369Cad58f888aDa19EeC46ab6",
		chainId: 1,
		decimals: 8,
		name: "Globex",
		symbol: "GEX"
	},
	{
		address: "0x831091dA075665168E01898c6DAC004A867f1e1B",
		chainId: 1,
		decimals: 18,
		name: "Gains Farm",
		symbol: "GFARM2"
	},
	{
		address: "0x3930E4dDb4d24ef2F4CB54C1f009a3694b708428",
		chainId: 1,
		decimals: 8,
		name: "Game Fanz",
		symbol: "GFN"
	},
	{
		address: "0x919D3a363776B1ceec9352610c82dfaf80Edc32d",
		chainId: 1,
		decimals: 18,
		name: "GoldFund",
		symbol: "GFUN"
	},
	{
		address: "0xE4fA3C576c31696322e8d7165C5965d5a1F6A1A5",
		chainId: 1,
		decimals: 18,
		name: "GamyFi Token",
		symbol: "GFX"
	},
	{
		address: "0x7F969C4D388Ca0AE39A4FdDB1A6f89878CA2fBf8",
		chainId: 1,
		decimals: 18,
		name: "Global Game Coin",
		symbol: "GGC"
	},
	{
		address: "0xFA99A87b14B02e2240C79240C5a20F945ca5EF76",
		chainId: 1,
		decimals: 18,
		name: "GG Token",
		symbol: "GGTK"
	},
	{
		address: "0x3b544e6fcf6C8dCE9D8B45A4FdF21C9B02f9fDa9",
		chainId: 1,
		decimals: 18,
		name: "Giftedhands",
		symbol: "GHD"
	},
	{
		address: "0x3bb86d867A9F3adDF994cdaDb210Fa82F0D4157A",
		chainId: 1,
		decimals: 18,
		name: "Ghoul Token",
		symbol: "GHOUL"
	},
	{
		address: "0x3F382DbD960E3a9bbCeaE22651E88158d2791550",
		chainId: 1,
		decimals: 18,
		name: "Aavegotchi",
		symbol: "GHST"
	},
	{
		address: "0xbe30F684d62C9F7883a75A29c162c332c0d98f23",
		chainId: 1,
		decimals: 18,
		name: "Global Human Trust",
		symbol: "GHT"
	},
	{
		address: "0x728f30fa2f100742C7949D1961804FA8E0B1387d",
		chainId: 1,
		decimals: 18,
		name: "GamerCoin",
		symbol: "GHX"
	},
	{
		address: "0xFcD862985628b254061F7A918035B80340D045d3",
		chainId: 1,
		decimals: 18,
		name: "GIFcoin Token",
		symbol: "GIF"
	},
	{
		address: "0x838d8e11B160deC88Fe62BF0f743FB7000941e13",
		chainId: 1,
		decimals: 18,
		name: "Krios",
		symbol: "GIG"
	},
	{
		address: "0xaE4f56F072c34C0a65B3ae3E4DB797D831439D93",
		chainId: 1,
		decimals: 8,
		name: "Gimli",
		symbol: "GIM"
	},
	{
		address: "0x9Aa7d119bdf77F65A7284581A211D8c44ffb04b4",
		chainId: 1,
		decimals: 18,
		name: "Girl Coin",
		symbol: "GIRL"
	},
	{
		address: "0xf6537FE0df7F0Cc0985Cf00792CC98249E73EFa0",
		chainId: 1,
		decimals: 8,
		name: "GIV",
		symbol: "GIV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xba8E5a4c64c1Be42230910F7B39A6388F3d4297c",
		chainId: 1,
		decimals: 18,
		name: "Give Global",
		symbol: "GIVE"
	},
	{
		address: "0xbD434a09191D401da3283a5545bB3515d033B8c4",
		chainId: 1,
		decimals: 18,
		name: "GoldFinX",
		symbol: "GIX"
	},
	{
		address: "0xA5B399a76bbAbEf93D70255525C1d2BCC3701d0b",
		chainId: 1,
		decimals: 18,
		name: "GLOSMATIN",
		symbol: "GL"
	},
	{
		address: "0x70FaDBE1F2CCCbaF98ac88FDCf94A0509A48E46d",
		chainId: 1,
		decimals: 8,
		name: "Green Light",
		symbol: "GL"
	},
	{
		address: "0x71D01dB8d6a2fBEa7f8d434599C237980C234e4C",
		chainId: 1,
		decimals: 8,
		name: "Gladius",
		symbol: "GLA"
	},
	{
		address: "0x038a68FF68c393373eC894015816e33Ad41BD564",
		chainId: 1,
		decimals: 18,
		name: "Glitch Protocol",
		symbol: "GLCH"
	},
	{
		address: "0x172f20402aFc807C8A5566bcEEd00831aDb938CA",
		chainId: 1,
		decimals: 18,
		name: "Golder Coin",
		symbol: "GLDR"
	},
	{
		address: "0x594207C791afd06a8D087d84D99d1DA53CCbD45F",
		chainId: 1,
		decimals: 3,
		name: "Buzzshow",
		symbol: "GLDY"
	},
	{
		address: "0x0A0DB74Ef8b4480cc29b7D68647727fEeB1ea4eC",
		chainId: 1,
		decimals: 18,
		name: "GLEX",
		symbol: "GLEX"
	},
	{
		address: "0x47fd85128312ee72aA0E0382a531a8f848B8B2CB",
		chainId: 1,
		decimals: 18,
		name: "Gallery Finance",
		symbol: "GLF"
	},
	{
		address: "0x7DD9c5Cba05E151C895FDe1CF355C9A1D5DA6429",
		chainId: 1,
		decimals: 18,
		name: "Golem",
		symbol: "GLM"
	},
	{
		address: "0xC0e6737A29DE7a00e2f6011924eB257106CB082f",
		chainId: 1,
		decimals: 18,
		name: "Glosfer Token",
		symbol: "GLO"
	},
	{
		address: "0x45F2aB0ca2116b2e1a70BF5e13293947b25d0272",
		chainId: 1,
		decimals: 18,
		name: "Global Reserve Syst",
		symbol: "GLOB"
	},
	{
		address: "0x0222bE1F1B8413b2d7d76EBfC9e0285C1300692f",
		chainId: 1,
		decimals: 18,
		name: "Glox Finance",
		symbol: "GLOX"
	},
	{
		address: "0x9F9c8ec3534c3cE16F928381372BfbFBFb9F4D24",
		chainId: 1,
		decimals: 18,
		name: "GraphLinq Protocol",
		symbol: "GLQ"
	},
	{
		address: "0x299948bc2CA54a5e814B19849327A6d9a0e7de1b",
		chainId: 1,
		decimals: 18,
		name: "Glyph Token",
		symbol: "GLY"
	},
	{
		address: "0xD70240Dd62F4ea9a6A2416e0073D72139489d2AA",
		chainId: 1,
		decimals: 18,
		name: "GLYPH Vault",
		symbol: "GLYPH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB13dE094Cc5CEe6C4cC0A3737bf0290166D9Ca5D",
		chainId: 1,
		decimals: 18,
		name: "GoWithMi",
		symbol: "GMAT"
	},
	{
		address: "0xA0008F510fE9eE696E7E320C9e5cbf61E27791Ee",
		chainId: 1,
		decimals: 18,
		name: "GAMB",
		symbol: "GMB"
	},
	{
		address: "0x1d464Ac5e046e5fE280c9588eDF8eB681b07008F",
		chainId: 1,
		decimals: 18,
		name: "GMB",
		symbol: "GMB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa6272359bc37f61AF398071B65C8934ACA744d53",
		chainId: 1,
		decimals: 18,
		name: "GokuMarket Credit",
		symbol: "GMC"
	},
	{
		address: "0x06141F60eE56c8ECc869f46568E2cb1e66BAaf41",
		chainId: 1,
		decimals: 18,
		name: "24 Genesis Mooncats",
		symbol: "GMC24"
	},
	{
		address: "0x5Dc74029509752F4ed9A609C2bb52216275E4c1D",
		chainId: 1,
		decimals: 8,
		name: "Game City",
		symbol: "GMCI"
	},
	{
		address: "0x9eb6bE354d88fD88795a04DE899a57A77C545590",
		chainId: 1,
		decimals: 18,
		name: "GameStop Finance",
		symbol: "GME"
	},
	{
		address: "0xD9016A907Dc0ECfA3ca425ab20B6b785B42F2373",
		chainId: 1,
		decimals: 18,
		name: "GAMEE",
		symbol: "GMEE"
	},
	{
		address: "0x7aF89c8A06719271A96e62E290Ea9Ed192E73FC1",
		chainId: 1,
		decimals: 18,
		name: "Gold Mining Members",
		symbol: "GMM"
	},
	{
		address: "0xCF81E6FDB8d7a743c3d4C3542a5356ff197eA1C0",
		chainId: 1,
		decimals: 8,
		name: "Global Gaming",
		symbol: "GMNG"
	},
	{
		address: "0x7Ddc52c4De30e94Be3A6A0A2b259b2850f421989",
		chainId: 1,
		decimals: 18,
		name: "GoMining Token",
		symbol: "GMT"
	},
	{
		address: "0xb3Bd49E28f8F832b8d1E246106991e546c323502",
		chainId: 1,
		decimals: 18,
		name: "GMT",
		symbol: "GMT"
	},
	{
		address: "0x7Aa46A51F717404D944051AF3075bBcb49B2288B",
		chainId: 1,
		decimals: 18,
		name: "Genebank Token",
		symbol: "GNBT"
	},
	{
		address: "0x639ae8F3EEd18690bF451229d14953a5A5627b72",
		chainId: 1,
		decimals: 18,
		name: "Nimbus Governance T",
		symbol: "GNBU"
	},
	{
		address: "0x6810e776880C02933D47DB1b9fc05908e5386b96",
		chainId: 1,
		decimals: 18,
		name: "Gnosis",
		symbol: "GNO",
		extensions: {
			color: "#00A6C4",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x7C5fF719a6c76fe643e9eCd0F11F146a2de05F14",
		chainId: 1,
		decimals: 18,
		name: "Ganesha Token",
		symbol: "GNSH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa74476443119A942dE498590Fe1f2454d7D4aC0d",
		chainId: 1,
		decimals: 18,
		name: "Golem",
		symbol: "GNT",
		extensions: {
			color: "#002D64",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x7b3296198F8A548Edf89BDB16864Da8F37b7D9cB",
		chainId: 1,
		decimals: 18,
		name: "GoldeNugget",
		symbol: "GNTO"
	},
	{
		address: "0x6EC8a24CaBdc339A06a172F8223ea557055aDAa5",
		chainId: 1,
		decimals: 9,
		name: "Genaro Network",
		symbol: "GNX"
	},
	{
		address: "0x247551F2EB3362E222c742E9c788B8957D9BC87e",
		chainId: 1,
		decimals: 18,
		name: "GNY",
		symbol: "GNY"
	},
	{
		address: "0xb1f871Ae9462F1b2C6826E88A7827e76f86751d4",
		chainId: 1,
		decimals: 18,
		name: "GNY",
		symbol: "GNY"
	},
	{
		address: "0x37611b28aCa5673744161Dc337128cfdD2657F69",
		chainId: 1,
		decimals: 9,
		name: "Goat Coin",
		symbol: "GOAT"
	},
	{
		address: "0xE400013Df86249838B720eaB5a7F816aD82433c0",
		chainId: 1,
		decimals: 4,
		name: "Game Of Bitcoins",
		symbol: "GOB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7f509465C38B66BDeCEC2CfDc842e11809CC8357",
		chainId: 1,
		decimals: 18,
		name: "GODL",
		symbol: "GODL"
	},
	{
		address: "0x488E0369f9BC5C40C002eA7c1fe4fd01A198801c",
		chainId: 1,
		decimals: 18,
		name: "Golff",
		symbol: "GOF"
	},
	{
		address: "0x9a96E767bFCcE8E80370BE00821ED5BA283D4A17",
		chainId: 1,
		decimals: 18,
		name: "GOGO Finance",
		symbol: "GOGO"
	},
	{
		address: "0x2f34dD3d46855277Eee79a1d724c2249f770054b",
		chainId: 1,
		decimals: 18,
		name: "GoForIt Walk Win",
		symbol: "GOI"
	},
	{
		address: "0x083D41d6DD21EE938f0c055CA4fb12268DF0EfaC",
		chainId: 1,
		decimals: 4,
		name: "GogolCoin",
		symbol: "GOL"
	},
	{
		address: "0x150b0b96933B75Ce27af8b92441F8fB683bF9739",
		chainId: 1,
		decimals: 18,
		name: "Dragonereum GOLD",
		symbol: "GOLD"
	},
	{
		address: "0x34D6A0F5C2f5D0082141fE73d93B9dd00ca7CE11",
		chainId: 1,
		decimals: 18,
		name: "Golden Token",
		symbol: "GOLD"
	},
	{
		address: "0x670f9D9a26D3D42030794ff035d35a67AA092ead",
		chainId: 1,
		decimals: 8,
		name: "XBullion",
		symbol: "GOLD"
	},
	{
		address: "0xE081b71Ed098FBe1108EA48e235b74F122272E68",
		chainId: 1,
		decimals: 8,
		name: "GOLD",
		symbol: "GOLD"
	},
	{
		address: "0x40d1F63B5D2048e67E9bEdB1B4c2F1A9fb4b6817",
		chainId: 1,
		decimals: 18,
		name: "Golden Goose",
		symbol: "GOLD",
		extensions: {
			color: "#f1b32b",
			isVerified: true
		}
	},
	{
		address: "0xDFC628A33C18e856Cd1c59583cB5aCe8dB706F14",
		chainId: 1,
		decimals: 9,
		name: "Projekt Gold",
		symbol: "GOLD"
	},
	{
		address: "0xf1b8762a7fa8C244e36F7234EDF40cFaE24394e3",
		chainId: 1,
		decimals: 18,
		name: "GoldFarm",
		symbol: "GOLD"
	},
	{
		address: "0xcfE4F03C3AFbB9857b29fC706180Bf0044900D59",
		chainId: 1,
		decimals: 8,
		name: "Golden Ratio Coin",
		symbol: "GOLDR"
	},
	{
		address: "0xeAb43193CF0623073Ca89DB9B712796356FA7414",
		chainId: 1,
		decimals: 18,
		name: "GOLDX",
		symbol: "GOLDX"
	},
	{
		address: "0x996652b6C5c4b1154b25515Db21b7bBADD40ddFa",
		chainId: 1,
		decimals: 18,
		name: "Golfrochain",
		symbol: "GOLF"
	},
	{
		address: "0xb8c6ad2586bB71d518C2aaf510Efe91f82022F58",
		chainId: 1,
		decimals: 18,
		name: "Gomics",
		symbol: "GOM"
	},
	{
		address: "0x48783486ddD7fa85ECa6B0C4AE8920Bc25DfbcD7",
		chainId: 1,
		decimals: 0,
		name: "GoMoney2",
		symbol: "GOM2"
	},
	{
		address: "0xb0302D59237e6104c3f0D145996302F044797Ca5",
		chainId: 1,
		decimals: 9,
		name: "GoonRich",
		symbol: "GOON"
	},
	{
		address: "0x423b5F62b328D0D6D44870F4Eee316befA0b2dF5",
		chainId: 1,
		decimals: 18,
		name: "GoNetwork",
		symbol: "GOT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x613Fa2A6e6DAA70c659060E86bA1443D2679c9D7",
		chainId: 1,
		decimals: 18,
		name: "ParkinGo",
		symbol: "GOT"
	},
	{
		address: "0xeEAA40B28A2d1b0B08f6f97bB1DD4B75316c6107",
		chainId: 1,
		decimals: 18,
		name: "Govi",
		symbol: "GOVI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5CF501E64786444E025C5b24025f98399538ea5d",
		chainId: 1,
		decimals: 18,
		name: "Galaxy Pool Coin",
		symbol: "GPO"
	},
	{
		address: "0xcE593a29905951E8Fc579bC092ecA72577dA575c",
		chainId: 1,
		decimals: 6,
		name: "GROM",
		symbol: "GR"
	},
	{
		address: "0x6589fe1271A0F29346796C6bAf0cdF619e25e58e",
		chainId: 1,
		decimals: 18,
		name: "Grain",
		symbol: "GRAIN"
	},
	{
		address: "0xC8D2AB2a6FdEbC25432E54941cb85b55b9f152dB",
		chainId: 1,
		decimals: 18,
		name: "Grap Finance",
		symbol: "GRAP"
	},
	{
		address: "0x165440036Ce972C5F8EBef667086707e48B2623e",
		chainId: 1,
		decimals: 18,
		name: "UniGraph",
		symbol: "GRAPH"
	},
	{
		address: "0x15822A64c8Cb27D7828C45E0aAFC3e6C5DeCd172",
		chainId: 1,
		decimals: 18,
		name: "Fear   Greed Sentim",
		symbol: "GREED"
	},
	{
		address: "0x9b2D81A1AE36E8e66A0875053429816f0B6b829E",
		chainId: 1,
		decimals: 9,
		name: "Grey Token",
		symbol: "GREY"
	},
	{
		address: "0x4FbB350052Bca5417566f188eB2EBCE5b19BC964",
		chainId: 1,
		decimals: 18,
		name: "RigoBlock",
		symbol: "GRG"
	},
	{
		address: "0x12B19D3e2ccc14Da04FAe33e63652ce469b3F2FD",
		chainId: 1,
		decimals: 12,
		name: "Grid+",
		symbol: "GRID",
		extensions: {
			color: "#53B7E8",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xf3DeA48690F3e8f7F676cfb2798254D3225B9386",
		chainId: 1,
		decimals: 9,
		name: "Grind Token",
		symbol: "GRIND"
	},
	{
		address: "0xb444208cB0516C150178fCf9a52604BC04A1aCEa",
		chainId: 1,
		decimals: 18,
		name: "GreenMed",
		symbol: "GRMD"
	},
	{
		address: "0x09e64c2B61a5f1690Ee6fbeD9baf5D6990F8dFd0",
		chainId: 1,
		decimals: 18,
		name: "GROWTH DeFi",
		symbol: "GRO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC17195bde49D70CefCF8A9F2ee1759FFC27BF0B1",
		chainId: 1,
		decimals: 18,
		name: "Groocoin",
		symbol: "GROO"
	},
	{
		address: "0x0a9A9ce600D08BF9b76F49FA4e7b38A67EBEB1E6",
		chainId: 1,
		decimals: 8,
		name: "Growchain",
		symbol: "GROW"
	},
	{
		address: "0x64B986211c0CC675143F895C437b79c3cadf364A",
		chainId: 1,
		decimals: 8,
		name: "Grapefruit Coin",
		symbol: "GRPFT"
	},
	{
		address: "0x15E4132DcD932E8990E794d1300011A472819cBD",
		chainId: 1,
		decimals: 18,
		name: "GRPL Finance",
		symbol: "GRPL"
	},
	{
		address: "0xc944E90C64B2c07662A292be6244BDf05Cda44a7",
		chainId: 1,
		decimals: 18,
		name: "The Graph",
		symbol: "GRT",
		extensions: {
			color: "#4068C3",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xb83Cd8d39462B761bb0092437d38b37812dd80A2",
		chainId: 1,
		decimals: 18,
		name: "Golden Ratio Token",
		symbol: "GRT"
	},
	{
		address: "0xe0B9a2C3E9f40CF74B2C7F591B2b0CCa055c3112",
		chainId: 1,
		decimals: 18,
		name: "Genesis Shards",
		symbol: "GS"
	},
	{
		address: "0x228ba514309FFDF03A81a205a6D040E429d6E80C",
		chainId: 1,
		decimals: 18,
		name: "Global Social Chain",
		symbol: "GSC"
	},
	{
		address: "0xe530441f4f73bDB6DC2fA5aF7c3fC5fD551Ec838",
		chainId: 1,
		decimals: 4,
		name: "GSENetwork",
		symbol: "GSE"
	},
	{
		address: "0x02F3A1819851D127bcD6F468253d7A498567eEe0",
		chainId: 1,
		decimals: 18,
		name: "Gasify",
		symbol: "GSFY"
	},
	{
		address: "0xb892249939AdBf6D7851864CA9A5c7D2d537af97",
		chainId: 1,
		decimals: 18,
		name: "Gambler Shiba",
		symbol: "GSHIBA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7713bCda5106424FF6B0Ae1e7Fa05C3f4ae3ecB0",
		chainId: 1,
		decimals: 8,
		name: "Grafsound",
		symbol: "GSMT"
	},
	{
		address: "0x67a9099f0008C35C61c00042cd9Fb03684451097",
		chainId: 1,
		decimals: 18,
		name: "Game Stars",
		symbol: "GST"
	},
	{
		address: "0x3AFA1902b1f8a802aBC18e5aD982D1bCd34AfE22",
		chainId: 1,
		decimals: 18,
		name: "GrEarn",
		symbol: "GST"
	},
	{
		address: "0x0000000000b3F879cb30FE243b4Dfee438691c04",
		chainId: 1,
		decimals: 2,
		name: "GasToken",
		symbol: "GST2",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaac41EC512808d64625576EDdd580e7Ea40ef8B2",
		chainId: 1,
		decimals: 18,
		name: "Gameswap",
		symbol: "GSWAP"
	},
	{
		address: "0xE66747a101bFF2dBA3697199DCcE5b743b454759",
		chainId: 1,
		decimals: 18,
		name: "GateToken",
		symbol: "GT"
	},
	{
		address: "0xB70835D7822eBB9426B56543E391846C107bd32C",
		chainId: 1,
		decimals: 18,
		name: "Game",
		symbol: "GTC"
	},
	{
		address: "0xDe30da39c46104798bB5aA3fe8B9e0e1F348163F",
		chainId: 1,
		decimals: 18,
		name: "Gitcoin",
		symbol: "GTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe138FDa441fC31B36171122397a8A11d6cd2c479",
		chainId: 1,
		decimals: 0,
		name: "Global Trust Coin",
		symbol: "GTC"
	},
	{
		address: "0x87BEFC1d367190F2B9cbe9B689e0e5cA658E3b71",
		chainId: 1,
		decimals: 8,
		name: "GLOBALTRUSTFUND TOK",
		symbol: "GTF"
	},
	{
		address: "0xc3771d47E2Ab5A519E2917E61e23078d0C05Ed7f",
		chainId: 1,
		decimals: 18,
		name: "Gather",
		symbol: "GTH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x025abAD9e518516fdaAFBDcdB9701b37fb7eF0FA",
		chainId: 1,
		decimals: 0,
		name: "GTKT",
		symbol: "GTKT"
	},
	{
		address: "0xC5bBaE50781Be1669306b9e001EFF57a2957b09d",
		chainId: 1,
		decimals: 5,
		name: "Gifto",
		symbol: "GTO",
		extensions: {
			color: "#7f27ff",
			isVerified: true
		}
	},
	{
		address: "0x01e0E2e61f554eCAaeC0cC933E739Ad90f24a86d",
		chainId: 1,
		decimals: 18,
		name: "Graviton",
		symbol: "GTON"
	},
	{
		address: "0x951A1070AC39851dCc07b302230A68F81929a5F1",
		chainId: 1,
		decimals: 8,
		name: "GT STAR Token",
		symbol: "GTS"
	},
	{
		address: "0x916885426255235DA7a0BD90447986c00675f9EC",
		chainId: 1,
		decimals: 18,
		name: "GoalTime N",
		symbol: "GTX"
	},
	{
		address: "0xBDCFbf5C4D91Abc0bC9709C7286d00063c0e6F22",
		chainId: 1,
		decimals: 2,
		name: "PeerGuess",
		symbol: "GUESS"
	},
	{
		address: "0x9847345de8b614c956146bbea549336d9C8d26b6",
		chainId: 1,
		decimals: 8,
		name: "GULD ERC20",
		symbol: "GULD"
	},
	{
		address: "0x4f5fa8f2d12e5eB780f6082Dd656C565C48E0f24",
		chainId: 1,
		decimals: 18,
		name: "Gourmet Galaxy",
		symbol: "GUM"
	},
	{
		address: "0x3684b581dB1F94b721EE0022624329FEb16Ab653",
		chainId: 1,
		decimals: 18,
		name: "GUNTHY",
		symbol: "GUNTHY"
	},
	{
		address: "0xf7B098298f7C69Fc14610bf71d5e02c60792894C",
		chainId: 1,
		decimals: 3,
		name: "Guppy",
		symbol: "GUP"
	},
	{
		address: "0x056Fd409E1d7A124BD7017459dFEa2F387b6d5Cd",
		chainId: 1,
		decimals: 2,
		name: "Gemini Dollar",
		symbol: "GUSD",
		extensions: {
			color: "#00dcfa",
			isVerified: true
		}
	},
	{
		address: "0x3242aEBCdCF8dE491004b1C98E6595e9827f6C17",
		chainId: 1,
		decimals: 18,
		name: "Global Utility Smar",
		symbol: "GUSDT"
	},
	{
		address: "0xdaE6f68DA3bab6866742A7f4050366F6AC48760d",
		chainId: 1,
		decimals: 18,
		name: "GUSS ONE",
		symbol: "GUSS"
	},
	{
		address: "0xA57392548087453deC6106e670bBFB849276b358",
		chainId: 1,
		decimals: 8,
		name: "GemVault Coin",
		symbol: "GVC"
	},
	{
		address: "0x81705082eF9f0D660f07BE80093D46d826d48b25",
		chainId: 1,
		decimals: 18,
		name: "Globalvillage Ecosy",
		symbol: "GVE"
	},
	{
		address: "0x103c3A209da59d3E7C4A89307e66521e081CFDF0",
		chainId: 1,
		decimals: 18,
		name: "Genesis Vision",
		symbol: "GVT",
		extensions: {
			color: "#16b9ad",
			isVerified: true
		}
	},
	{
		address: "0x31bE30217989766215672E88eD449913e05bf0F5",
		chainId: 1,
		decimals: 18,
		name: "Groovy Finance",
		symbol: "GVY"
	},
	{
		address: "0x58ca3065C0F24C7c96Aee8d6056b5B5deCf9c2f8",
		chainId: 1,
		decimals: 10,
		name: "GXC",
		symbol: "GXC"
	},
	{
		address: "0x953e22945b416730bAD05009aF05B420e598E412",
		chainId: 1,
		decimals: 18,
		name: "GameXCoin",
		symbol: "GXC"
	},
	{
		address: "0xBCfDAeB22ab6e10DfB99546E6240155EDC1084f7",
		chainId: 1,
		decimals: 18,
		name: "Genexi",
		symbol: "GXI"
	},
	{
		address: "0x28d3E409bb9bC58F1ca6E009f8fC78A1db85e6b7",
		chainId: 1,
		decimals: 18,
		name: "Gem Exchange And Tr",
		symbol: "GXT"
	},
	{
		address: "0x22F0AF8D78851b72EE799e05F54A77001586B18A",
		chainId: 1,
		decimals: 10,
		name: "Genevieve VC",
		symbol: "GXVC"
	},
	{
		address: "0xC08512927D12348F6620a698105e1BAac6EcD911",
		chainId: 1,
		decimals: 6,
		name: "GYEN",
		symbol: "GYEN"
	},
	{
		address: "0xbEa98c05eEAe2f3bC8c3565Db7551Eb738c8CCAb",
		chainId: 1,
		decimals: 18,
		name: "Geyser",
		symbol: "GYSR"
	},
	{
		address: "0x9DAe8b7F6D37ea8e5d32C6c3E856a6d8a1d3B363",
		chainId: 1,
		decimals: 18,
		name: "GigziBlack",
		symbol: "GZB"
	},
	{
		address: "0x8C65e992297d5f092A756dEf24F4781a280198Ff",
		chainId: 1,
		decimals: 18,
		name: "GazeCoin",
		symbol: "GZE"
	},
	{
		address: "0x4AC00f287f36A6Aad655281fE1cA6798C9cb727b",
		chainId: 1,
		decimals: 18,
		name: "GazeCoin",
		symbol: "GZE"
	},
	{
		address: "0x0A680E503fd9ae14B62444C75ffB4BEf1F105666",
		chainId: 1,
		decimals: 8,
		name: "Arma Coin",
		symbol: "GZM"
	},
	{
		address: "0xE638dc39b6aDBEE8526b5C22380b4b45dAf46d8e",
		chainId: 1,
		decimals: 6,
		name: "Gizer",
		symbol: "GZR"
	},
	{
		address: "0x85eBa557C06c348395fD49e35d860F58a4F7c95a",
		chainId: 1,
		decimals: 18,
		name: "H3X",
		symbol: "H3X",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5bfc1FF7f9e087C64fEfb34F2e7cF24e5570919F",
		chainId: 1,
		decimals: 18,
		name: "Habitus",
		symbol: "HABS"
	},
	{
		address: "0x43567eb78638A55bbE51E9f9FB5B2D7AD1F125aa",
		chainId: 1,
		decimals: 4,
		name: "Hackspace Capital",
		symbol: "HAC"
	},
	{
		address: "0xcCAC36423DEF6C19ee6b5679144E2976E309Ca45",
		chainId: 1,
		decimals: 18,
		name: "Hachiko Inu",
		symbol: "HACHIKO"
	},
	{
		address: "0x05Fb86775Fd5c16290f1E838F5caaa7342bD9a63",
		chainId: 1,
		decimals: 8,
		name: "Hacken Token",
		symbol: "HAI"
	},
	{
		address: "0x93a7174dafd31d13400cD9fa01f4e5B5BAa00D39",
		chainId: 1,
		decimals: 18,
		name: "Shaka",
		symbol: "HAK"
	},
	{
		address: "0xD85AD783cc94bd04196a13DC042A3054a9B52210",
		chainId: 1,
		decimals: 18,
		name: "TribeOne",
		symbol: "HAKA"
	},
	{
		address: "0x0E29e5AbbB5FD88e28b2d355774e73BD47dE3bcd",
		chainId: 1,
		decimals: 18,
		name: "Hakka Finance",
		symbol: "HAKKA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9e7cb236e43c4bd042fE463df6a175d4479ee186",
		chainId: 1,
		decimals: 18,
		name: "Halving",
		symbol: "HALV"
	},
	{
		address: "0x48C1B2f3eFA85fbafb2ab951bF4Ba860a08cdBB7",
		chainId: 1,
		decimals: 0,
		name: "ShowHand",
		symbol: "HAND"
	},
	{
		address: "0x72E5390EDb7727E3d4e3436451DADafF675dBCC0",
		chainId: 1,
		decimals: 12,
		name: "Hanu Yokia",
		symbol: "HANU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD9c2D319Cd7e6177336b0a9c93c21cb48d84Fb54",
		chainId: 1,
		decimals: 18,
		name: "HAPI",
		symbol: "HAPI"
	},
	{
		address: "0x5A567e28dbFa2bBD3ef13C0a01be114745349657",
		chainId: 1,
		decimals: 2,
		name: "Happiness",
		symbol: "HAPPY"
	},
	{
		address: "0x2B89D32CfB9b28DFCc7FAcC22453c812F9097655",
		chainId: 1,
		decimals: 18,
		name: "Harem",
		symbol: "HAREM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x52928C95C4C7e934E0EfcfAB08853A0E4558861d",
		chainId: 1,
		decimals: 18,
		name: "Hara Token",
		symbol: "HART"
	},
	{
		address: "0xEB1112Ac78D537853150E2a07E8b765E29d3F019",
		chainId: 1,
		decimals: 18,
		name: "Hash Token",
		symbol: "HASH"
	},
	{
		address: "0x9002D4485b7594e3E850F0a206713B305113f69e",
		chainId: 1,
		decimals: 18,
		name: "Hawala Today",
		symbol: "HAT"
	},
	{
		address: "0x6F3009663470475F0749A6b76195375f95495fcB",
		chainId: 1,
		decimals: 18,
		name: "Hatch DAO",
		symbol: "HATCH"
	},
	{
		address: "0x054bD236b42385c938357112F419dC5943687886",
		chainId: 1,
		decimals: 18,
		name: "Heavens Gate",
		symbol: "HATE"
	},
	{
		address: "0xf2051511B9b121394FA75B8F7d4E7424337af687",
		chainId: 1,
		decimals: 18,
		name: "DAOhaus",
		symbol: "HAUS"
	},
	{
		address: "0x3142daD33B1c6e1371D8627365f2ee2095eb6b37",
		chainId: 1,
		decimals: 18,
		name: "Hauteclere Shards",
		symbol: "HAUT"
	},
	{
		address: "0x7C2E5b7ec572199D3841f6a38F7D4868BD0798f1",
		chainId: 1,
		decimals: 8,
		name: "Havy",
		symbol: "HAVY"
	},
	{
		address: "0xE2492F8D2A2618d8709Ca99b1d8d75713Bd84089",
		chainId: 1,
		decimals: 18,
		name: "HeartBout",
		symbol: "HB"
	},
	{
		address: "0x877C7dEb5eB1fc5faAd30C71E3a6E39DC8b1519F",
		chainId: 1,
		decimals: 18,
		name: "HeartBout",
		symbol: "HB"
	},
	{
		address: "0xFb9553aFa2B5c19c5F8e5b8eE175Fc01abD1555F",
		chainId: 1,
		decimals: 18,
		name: "Hybrid Bank Cash",
		symbol: "HBC"
	},
	{
		address: "0xaAC679720204aAA68B6C5000AA87D789a3cA0Aa5",
		chainId: 1,
		decimals: 18,
		name: "Huobi Bitcoin Cash",
		symbol: "HBCH"
	},
	{
		address: "0x39d30828a163713D91c4EADBBA2C497a9139ec5C",
		chainId: 1,
		decimals: 18,
		name: "Happy Birthday Coin",
		symbol: "HBDC"
	},
	{
		address: "0xDd6C68bb32462e01705011a4e2Ad1a60740f217F",
		chainId: 1,
		decimals: 15,
		name: "Hubii Network",
		symbol: "HBT"
	},
	{
		address: "0x0aCe32f6E87Ac1457A5385f8eb0208F37263B415",
		chainId: 1,
		decimals: 10,
		name: "Habitat",
		symbol: "HBT"
	},
	{
		address: "0x0316EB71485b0Ab14103307bf65a021042c6d380",
		chainId: 1,
		decimals: 18,
		name: "Huobi BTC",
		symbol: "HBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x88D39566DAe88dC838652d9898F0AA6a8fF2819A",
		chainId: 1,
		decimals: 18,
		name: "HypeBurn",
		symbol: "HBURN"
	},
	{
		address: "0x6fE355c62C6faf6946cE888fFABa9fD12355ae27",
		chainId: 1,
		decimals: 18,
		name: "HashBX",
		symbol: "HBX"
	},
	{
		address: "0xE34e1944E776f39B9252790a0527eBDa647aE668",
		chainId: 1,
		decimals: 18,
		name: "HBZ coin",
		symbol: "HBZ"
	},
	{
		address: "0x60A995CEbCD44CA566Ae22A9666ed28c67B598A1",
		chainId: 1,
		decimals: 18,
		name: "Hardcore Finance",
		symbol: "HCORE"
	},
	{
		address: "0xd31A9D28d66A1f7e62b5565416ea14607690f788",
		chainId: 1,
		decimals: 18,
		name: "HealthChainUS",
		symbol: "HCUT"
	},
	{
		address: "0x6ce654aC973D326F89f0685E7459542641410eD9",
		chainId: 1,
		decimals: 18,
		name: "HubDao",
		symbol: "HD"
	},
	{
		address: "0x74faaB6986560fD1140508e4266D8a7b87274Ffd",
		chainId: 1,
		decimals: 18,
		name: "HyperDAO",
		symbol: "HDAO"
	},
	{
		address: "0xfFe8196bc259E8dEDc544d935786Aa4709eC3E64",
		chainId: 1,
		decimals: 18,
		name: "Hedge Crypto",
		symbol: "HDG"
	},
	{
		address: "0x58A3520D738B268c2353ECeE518A1AD8e28E4AE5",
		chainId: 1,
		decimals: 2,
		name: "HEIDI",
		symbol: "HDI"
	},
	{
		address: "0x95C4be8534d69C248C0623c4C9a7A2a001c17337",
		chainId: 1,
		decimals: 18,
		name: "HOLDER.TECH",
		symbol: "HDL"
	},
	{
		address: "0x86a63063b3a60652FB070F23Cbb4A9833FDBBFF8",
		chainId: 1,
		decimals: 18,
		name: "Hodler Mining",
		symbol: "HDLRE"
	},
	{
		address: "0x9ffc3bCDe7B68C46a6dC34f0718009925c1867cB",
		chainId: 1,
		decimals: 18,
		name: "Huobi Polkadot",
		symbol: "HDOT"
	},
	{
		address: "0xE9fF07809CCff05daE74990e25831d0Bc5cbe575",
		chainId: 1,
		decimals: 18,
		name: "HEdpAY",
		symbol: "Hdp"
	},
	{
		address: "0xc4d5545392f5Fc57EBa3AF8981815669bb7E2A48",
		chainId: 1,
		decimals: 4,
		name: "HEdpAY",
		symbol: "HDP"
	},
	{
		address: "0x84543F868eC1b1FAC510d49d13C069f64cD2d5f9",
		chainId: 1,
		decimals: 18,
		name: "HEdpAY",
		symbol: "Hdp.ф"
	},
	{
		address: "0x42B4dF7e402A71EAE743c6C5410CE3BBb63aEf22",
		chainId: 1,
		decimals: 18,
		name: "HDPUNK Vault  NFTX",
		symbol: "HDPUNK"
	},
	{
		address: "0xcAFE27178308351a12ffFffDeb161d9d730DA082",
		chainId: 1,
		decimals: 18,
		name: "HotDollars Token",
		symbol: "HDS"
	},
	{
		address: "0xD0Cb75298d5C1E3B277e3CD95c56B3CAa81a99D3",
		chainId: 1,
		decimals: 8,
		name: "HDT",
		symbol: "HDT"
	},
	{
		address: "0xcA176a8AC234446b2561293dB7543e0cdadC6627",
		chainId: 1,
		decimals: 4,
		name: "Hardware Chain",
		symbol: "HDW"
	},
	{
		address: "0xf6Fd82dEdBBe0ffadb5e1ecc2a283AB52B9ED2B0",
		chainId: 1,
		decimals: 18,
		name: "Etheal",
		symbol: "HEAL"
	},
	{
		address: "0xF1290473E210b2108A85237fbCd7b6eb42Cc654F",
		chainId: 1,
		decimals: 18,
		name: "HedgeTrade",
		symbol: "HEDG"
	},
	{
		address: "0x1FA3bc860bF823d792f04F662f3AA3a500a68814",
		chainId: 1,
		decimals: 18,
		name: "1X Short Bitcoin To",
		symbol: "HEDGE"
	},
	{
		address: "0x1d9cd2180Fd4E9771fCA28681034D02390B14e4c",
		chainId: 1,
		decimals: 18,
		name: "1X Short Shitcoin I",
		symbol: "HEDGESHIT"
	},
	{
		address: "0x584bC13c7D411c00c01A62e8019472dE68768430",
		chainId: 1,
		decimals: 18,
		name: "Hegic",
		symbol: "HEGIC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbBc2045D335Cb224228f1850b29173d9d7D7b989",
		chainId: 1,
		decimals: 18,
		name: "GoHelpFund",
		symbol: "HELP"
	},
	{
		address: "0x19747816A030fECDa3394C6062CDF6b9B4dB0E0b",
		chainId: 1,
		decimals: 8,
		name: "Hemelios",
		symbol: "HEM"
	},
	{
		address: "0x491C9A23DB85623EEd455a8EfDd6AbA9b911C5dF",
		chainId: 1,
		decimals: 18,
		name: "Hero Node Token",
		symbol: "HER"
	},
	{
		address: "0x04A020325024F130988782bd5276e53595e8d16E",
		chainId: 1,
		decimals: 8,
		name: "Herbalist Token",
		symbol: "HERB"
	},
	{
		address: "0x2e91E3e54C5788e9FdD6A181497FDcEa1De1bcc1",
		chainId: 1,
		decimals: 18,
		name: "Hercules",
		symbol: "HERC"
	},
	{
		address: "0x862caA11AbE48c945D5361E80EaF19348C479240",
		chainId: 1,
		decimals: 4,
		name: "HERO",
		symbol: "HERO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF41fD65F30b4b4ceF3dbEA800468100B2eB19Aae",
		chainId: 1,
		decimals: 18,
		name: "Hex Token",
		symbol: "Hex",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2b591e99afE9f32eAA6214f7B7629768c40Eeb39",
		chainId: 1,
		decimals: 8,
		name: "HEX",
		symbol: "HEX",
		extensions: {
			color: "#FF47A9",
			isRainbowCurated: true,
			isVerified: true,
			shadowColor: "#FF9355"
		}
	},
	{
		address: "0x96006F60B452526481a26eab55265ECdf82E7361",
		chainId: 1,
		decimals: 18,
		name: "HollaEx",
		symbol: "HEX"
	},
	{
		address: "0xe9C9e7E1DaBea830C958C39D6b25964a6F52143A",
		chainId: 1,
		decimals: 18,
		name: "HeyToken",
		symbol: "HEY"
	},
	{
		address: "0xEEF9f339514298C6A857EfCfC1A762aF84438dEE",
		chainId: 1,
		decimals: 18,
		name: "Hermez Network",
		symbol: "HEZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9AFb950948c2370975fb91a441F36FDC02737cD4",
		chainId: 1,
		decimals: 18,
		name: "Huobi FIL",
		symbol: "HFIL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1BC9F31c327Ce04b6fA9D56FD84c14Cc0B0A4f47",
		chainId: 1,
		decimals: 18,
		name: "Hygenercoin",
		symbol: "HG"
	},
	{
		address: "0x5b5A353Fc217EBEf77bC7686ea05A003eBdb7d1a",
		chainId: 1,
		decimals: 18,
		name: "HiGameCoin",
		symbol: "HGC"
	},
	{
		address: "0x7968bc6a03017eA2de509AAA816F163Db0f35148",
		chainId: 1,
		decimals: 6,
		name: "Hedget",
		symbol: "HGET",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x40c6f861A08F97dfBC3C0931485bFf4921975a56",
		chainId: 1,
		decimals: 18,
		name: "HGH Token",
		symbol: "HGH"
	},
	{
		address: "0x0c93B616933b0CD03B201b29Cd8a22681DD9E0d9",
		chainId: 1,
		decimals: 8,
		name: "HollyGold",
		symbol: "HGOLD"
	},
	{
		address: "0xba2184520A1cC49a6159c57e61E1844E085615B6",
		chainId: 1,
		decimals: 8,
		name: "HelloGold",
		symbol: "HGT"
	},
	{
		address: "0xC4f6E93AEDdc11dc22268488465bAbcAF09399aC",
		chainId: 1,
		decimals: 18,
		name: "hi Dollar",
		symbol: "HI"
	},
	{
		address: "0x9bb1Db1445b83213a56d90d331894b3f26218e4e",
		chainId: 1,
		decimals: 18,
		name: "HiBTC Token",
		symbol: "HIBT"
	},
	{
		address: "0xB14eBF566511B9e6002bB286016AB2497B9b9c9D",
		chainId: 1,
		decimals: 18,
		name: "Hypersign Identity",
		symbol: "HID"
	},
	{
		address: "0xa9240fBCAC1F0b9A6aDfB04a53c8E3B0cC1D1444",
		chainId: 1,
		decimals: 18,
		name: "ethereumhigh",
		symbol: "HIG"
	},
	{
		address: "0x7FCcaDee21660425FDEc86029b6362845ffC052C",
		chainId: 1,
		decimals: 8,
		name: "TimeBanking",
		symbol: "HIN"
	},
	{
		address: "0xbD0a4bf098261673d5E6e600Fd87ddcd756e6764",
		chainId: 1,
		decimals: 9,
		name: "Hina Inu",
		symbol: "HINA"
	},
	{
		address: "0x6CE21e5f5383c95691d243879A86A6025E0870c0",
		chainId: 1,
		decimals: 18,
		name: "Hintchain",
		symbol: "HINT"
	},
	{
		address: "0x81313f7c5c9C824236c9E4cba3AC4B049986E756",
		chainId: 1,
		decimals: 18,
		name: "HippoFinance",
		symbol: "HIPPO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x74b1Af114274335598da72f5C6ed7b954a016EeD",
		chainId: 1,
		decimals: 18,
		name: "HitBTC Token",
		symbol: "HIT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7995ab36bB307Afa6A683C24a25d90Dc1Ea83566",
		chainId: 1,
		decimals: 6,
		name: "HitChain",
		symbol: "HIT"
	},
	{
		address: "0xc761D1ccb38a94703675d2cDb15F7F1B3dcFF7B7",
		chainId: 1,
		decimals: 18,
		name: "Hiz Finance",
		symbol: "HIZ"
	},
	{
		address: "0x14F37B574242D366558dB61f3335289a5035c506",
		chainId: 1,
		decimals: 3,
		name: "HKG",
		symbol: "HKG"
	},
	{
		address: "0x9e6B2B11542f2BC52f3029077acE37E8fD838D7F",
		chainId: 1,
		decimals: 8,
		name: "Hacken",
		symbol: "HKN"
	},
	{
		address: "0x88aC94D5d175130347Fc95E109d77AC09dbF5ab7",
		chainId: 1,
		decimals: 18,
		name: "Hicky",
		symbol: "HKY"
	},
	{
		address: "0xba7b2C094C1A4757f9534a37d296a3BeD7f544DC",
		chainId: 1,
		decimals: 18,
		name: "HLand Token",
		symbol: "HLAND"
	},
	{
		address: "0x58c69ed6cd6887c0225D1FcCEcC055127843c69b",
		chainId: 1,
		decimals: 9,
		name: "HalalChain",
		symbol: "HLC"
	},
	{
		address: "0xD520ddbdf81323F4B9a0Ea0AdBb692eBEf6cE280",
		chainId: 1,
		decimals: 18,
		name: "Holdefi",
		symbol: "HLD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x308564DC5217c39386F5eaE96545159e1D396661",
		chainId: 1,
		decimals: 18,
		name: "HLP Token",
		symbol: "HLP"
	},
	{
		address: "0x2c000c0093dE75a8fA2FccD3d97b314e20b431C3",
		chainId: 1,
		decimals: 18,
		name: "Huobi Litecoin",
		symbol: "HLTC"
	},
	{
		address: "0x66eb65D7Ab8e9567ba0fa6E37c305956c5341574",
		chainId: 1,
		decimals: 5,
		name: "Helex",
		symbol: "HLX"
	},
	{
		address: "0x8F8e787989BC652eeA01A6C88a19f0f379BDF4FD",
		chainId: 1,
		decimals: 5,
		name: "Helex",
		symbol: "HLX"
	},
	{
		address: "0xAa0bb10CEc1fa372eb3Abc17C933FC6ba863DD9E",
		chainId: 1,
		decimals: 18,
		name: "Hms Token",
		symbol: "HMC"
	},
	{
		address: "0x77E31D674A46D356b2E65892bDe7758bB26238Ca",
		chainId: 1,
		decimals: 9,
		name: "HumanCoin",
		symbol: "HMNC"
	},
	{
		address: "0xcbCC0F036ED4788F63FC0fEE32873d6A7487b908",
		chainId: 1,
		decimals: 8,
		name: "Humaniq",
		symbol: "HMQ"
	},
	{
		address: "0xB1A30851E3f7d841b231B086479608e17198363A",
		chainId: 1,
		decimals: 18,
		name: "Homeros",
		symbol: "HMR"
	},
	{
		address: "0xd1ba9BAC957322D6e8c07a160a3A8dA11A0d2867",
		chainId: 1,
		decimals: 18,
		name: "HUMAN Protocol",
		symbol: "HMT"
	},
	{
		address: "0x9c197c4b58527fAAAb67CB35E3145166B23D242e",
		chainId: 1,
		decimals: 18,
		name: "HashNet BitEco",
		symbol: "HNB"
	},
	{
		address: "0xD6Cb175719365a2ea630f266C53dDfBe4e468e25",
		chainId: 1,
		decimals: 18,
		name: "Hunimal Token",
		symbol: "HNI"
	},
	{
		address: "0xA771b49064Da011DF051052848477f18DbA1d2Ac",
		chainId: 1,
		decimals: 6,
		name: "Handshake",
		symbol: "HNS"
	},
	{
		address: "0x9C9Fe3bD60b22A9735908B9589011E78F2025C11",
		chainId: 1,
		decimals: 18,
		name: "Honest",
		symbol: "HNST"
	},
	{
		address: "0xc3589F56B6869824804A5EA29F2c9886Af1B0FcE",
		chainId: 1,
		decimals: 18,
		name: "Honey",
		symbol: "HNY"
	},
	{
		address: "0x239Dc02A28a0774738463E06245544a72745d5c5",
		chainId: 1,
		decimals: 9,
		name: "Hanzo Inu",
		symbol: "HNZO"
	},
	{
		address: "0xb45d7Bc4cEBcAB98aD09BABDF8C818B2292B672c",
		chainId: 1,
		decimals: 18,
		name: "HODLCoin",
		symbol: "HODL"
	},
	{
		address: "0xE2a083397521968Eb05585932750634bED4b7D56",
		chainId: 1,
		decimals: 9,
		name: "HODL",
		symbol: "HODL"
	},
	{
		address: "0xfAd45E47083e4607302aa43c65fB3106F1cd7607",
		chainId: 1,
		decimals: 9,
		name: "Hoge Finance",
		symbol: "HOGE"
	},
	{
		address: "0xC40AF1E4fEcFA05Ce6BAb79DcD8B373d2E436c4E",
		chainId: 1,
		decimals: 18,
		name: "Hokkaidu Inu",
		symbol: "HOKK"
	},
	{
		address: "0x03fB52D4eE633ab0D06C833E32EFdd8D388f3E6a",
		chainId: 1,
		decimals: 18,
		name: "Super Black Hole",
		symbol: "HOLE"
	},
	{
		address: "0x39eAE99E685906fF1C11A962a743440d0a1A6e09",
		chainId: 1,
		decimals: 18,
		name: "Holyheld  OLD",
		symbol: "HOLY"
	},
	{
		address: "0xCa208BfD69ae6D2667f1FCbE681BAe12767c0078",
		chainId: 1,
		decimals: 0,
		name: "HOMIHELP",
		symbol: "HOMI"
	},
	{
		address: "0xeF7A985E4FF9B5DcCD6eDdF58577486887288711",
		chainId: 1,
		decimals: 15,
		name: "HOM Token",
		symbol: "HOMT"
	},
	{
		address: "0xD241D7b5cb0eF9fC79D9e4eb9e21F5e209f52f7D",
		chainId: 1,
		decimals: 8,
		name: "Hoo Token",
		symbol: "HOO"
	},
	{
		address: "0xF5581dFeFD8Fb0e4aeC526bE659CFaB1f8c781dA",
		chainId: 1,
		decimals: 18,
		name: "HOPR",
		symbol: "HOPR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x43A96962254855F16b925556f9e97BE436A43448",
		chainId: 1,
		decimals: 18,
		name: "Hord",
		symbol: "HORD"
	},
	{
		address: "0x5B0751713b2527d7f002c0c4e2a37e1219610A6B",
		chainId: 1,
		decimals: 18,
		name: "Ethorse",
		symbol: "HORSE"
	},
	{
		address: "0x6c6EE5e31d828De241282B9606C8e98Ea48526E2",
		chainId: 1,
		decimals: 18,
		name: "Holo",
		symbol: "HOT",
		extensions: {
			color: "#8834FF",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x9AF839687F6C94542ac5ece2e317dAAE355493A1",
		chainId: 1,
		decimals: 18,
		name: "Hydro Protocol",
		symbol: "HOT"
	},
	{
		address: "0x4297394c20800E8a38A619A243E9BbE7681Ff24E",
		chainId: 1,
		decimals: 18,
		name: "Hot Cross",
		symbol: "HOTCROSS"
	},
	{
		address: "0x19810559dF63f19cfE88923313250550eDADB743",
		chainId: 1,
		decimals: 0,
		name: "Toast.finance",
		symbol: "HOUSE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5a4B14aea23A605aBc463f04a6B8Aaf52Dd3e7C6",
		chainId: 1,
		decimals: 18,
		name: "HeartBout Pay",
		symbol: "HP"
	},
	{
		address: "0xab55bDEF7057B76482914e79f037999f4eBb6bF1",
		chainId: 1,
		decimals: 8,
		name: "Healing Plus",
		symbol: "HP"
	},
	{
		address: "0xF83d7fF2e4B43ebAd2fa534e621E31076f4d254C",
		chainId: 1,
		decimals: 18,
		name: "Hyper Credit Networ",
		symbol: "HPAY"
	},
	{
		address: "0x38c6A68304cdEfb9BEc48BbFaABA5C5B47818bb2",
		chainId: 1,
		decimals: 18,
		name: "High Performance Bl",
		symbol: "HPB"
	},
	{
		address: "0xff744f2315C9d61d825B581C973576055C3da07E",
		chainId: 1,
		decimals: 18,
		name: "HPLUS",
		symbol: "HPLUS"
	},
	{
		address: "0x8CD024Cc8F73f5CD132005d1584403877B318C9d",
		chainId: 1,
		decimals: 18,
		name: "Hash Pot",
		symbol: "HPOT"
	},
	{
		address: "0x3E1d5A855aD9D948373aE68e4fe1f094612b1322",
		chainId: 1,
		decimals: 18,
		name: "HyperQuant",
		symbol: "HQT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1B957Dc4aEfeed3b4A2351a6A6d5cbfbbA0CeCFa",
		chainId: 1,
		decimals: 18,
		name: "HOQU",
		symbol: "HQX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC617D51E3a1f621dA8aE67b2f652d6aC02Eb8D95",
		chainId: 1,
		decimals: 18,
		name: "Hoard Token",
		symbol: "HRD"
	},
	{
		address: "0x9077F9e1eFE0eA72867ac89046b2a6264CbcaeF5",
		chainId: 1,
		decimals: 18,
		name: "WhaleStreet  hrimp",
		symbol: "HRIMP"
	},
	{
		address: "0x2bBA3CF6DE6058cc1B4457Ce00deb359E2703d7F",
		chainId: 1,
		decimals: 18,
		name: "HashCoin",
		symbol: "HSC"
	},
	{
		address: "0x365542DF3c8c9d096C5F0dE24A0d8cf33C19C8fd",
		chainId: 1,
		decimals: 8,
		name: "Hyper Speed Network",
		symbol: "HSN"
	},
	{
		address: "0x554C20B7c486beeE439277b4540A434566dC4C02",
		chainId: 1,
		decimals: 18,
		name: "Decision Token",
		symbol: "HST"
	},
	{
		address: "0x6f259637dcD74C767781E37Bc6133cd6A68aa161",
		chainId: 1,
		decimals: 18,
		name: "Huobi Token",
		symbol: "HT"
	},
	{
		address: "0x6be61833FC4381990e82D7D4a9F4c9B3F67eA941",
		chainId: 1,
		decimals: 18,
		name: "Hotbit Token",
		symbol: "HTB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x86EB791495bE777db763142a2C547D1112554Fb8",
		chainId: 1,
		decimals: 18,
		name: "3X Short Huobi Toke",
		symbol: "HTBEAR"
	},
	{
		address: "0x0D5E2681D2AaDC91F7DA4146740180A2190f0c79",
		chainId: 1,
		decimals: 18,
		name: "3X Long Huobi Token",
		symbol: "HTBULL"
	},
	{
		address: "0xBfF89386D062C6040ed1955e180c87dD00bb71aF",
		chainId: 1,
		decimals: 18,
		name: "Hedge Tech Governan",
		symbol: "HTG"
	},
	{
		address: "0x4B4b1d389d4f4E082B30F75c6319c0CE5ACBd619",
		chainId: 1,
		decimals: 18,
		name: "Heart Number",
		symbol: "HTN"
	},
	{
		address: "0xDea67845A51E24461D5fED8084E69B426AF3D5Db",
		chainId: 1,
		decimals: 18,
		name: "HodlTree",
		symbol: "HTRE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x46ae264Bf6d9Dc6Dd84c31064551f961c67a755c",
		chainId: 1,
		decimals: 18,
		name: "HOT",
		symbol: "HTX"
	},
	{
		address: "0xba358B6f5b4c0215650444B8C30D870B55050D2D",
		chainId: 1,
		decimals: 18,
		name: "Hub Token",
		symbol: "HUB"
	},
	{
		address: "0x8e9A29e7Ed21DB7c5B2E1cd75e676dA0236dfB45",
		chainId: 1,
		decimals: 18,
		name: "Minter Hub",
		symbol: "HUB"
	},
	{
		address: "0x001Fc4a7f2f586596308091c7B296D4535A25a90",
		chainId: 1,
		decimals: 18,
		name: "Hubscop",
		symbol: "HUBS"
	},
	{
		address: "0xDcfE18bc46f5A0Cd0d3Af0c2155d2bCB5AdE2fc5",
		chainId: 1,
		decimals: 4,
		name: "Hue",
		symbol: "HUE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x174aFE7A032b5A33a3270a9f6C30746E25708532",
		chainId: 1,
		decimals: 18,
		name: "Humanscape",
		symbol: "HUM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9AAb071B4129B083B01cB5A0Cb513Ce7ecA26fa5",
		chainId: 1,
		decimals: 18,
		name: "HUNT",
		symbol: "HUNT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCDB7eCFd3403Eef3882c65B761ef9B5054890a47",
		chainId: 1,
		decimals: 18,
		name: "Hurify",
		symbol: "HUR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdF574c24545E5FfEcb9a659c229253D4111d87e1",
		chainId: 1,
		decimals: 8,
		name: "HUSD",
		symbol: "HUSD",
		extensions: {
			color: "#005ffa",
			isVerified: true
		}
	},
	{
		address: "0xd5281BB2d1eE94866B03A0fcCDd4e900c8Cb5091",
		chainId: 1,
		decimals: 9,
		name: "Husky",
		symbol: "HUSKY"
	},
	{
		address: "0x56BE94D29e1125D2D61D06629c1b251d72c1b3B3",
		chainId: 1,
		decimals: 18,
		name: "Hustle Token",
		symbol: "HUSL"
	},
	{
		address: "0x141ABB03F001dEDED9A0223d4ff26d929117B72e",
		chainId: 1,
		decimals: 18,
		name: "HighVibe",
		symbol: "HV"
	},
	{
		address: "0xD487892BB4C57edBe7aB401d9fe801c8FE6473f5",
		chainId: 1,
		decimals: 18,
		name: "Uhive",
		symbol: "HVE2"
	},
	{
		address: "0xC0Eb85285d83217CD7c891702bcbC0FC401E2D9D",
		chainId: 1,
		decimals: 8,
		name: "Hiveterminal token",
		symbol: "HVN"
	},
	{
		address: "0x0E1fe60bc4aC0e3102343752ae7E49d01d444c0b",
		chainId: 1,
		decimals: 18,
		name: "Havens Nook",
		symbol: "HXN"
	},
	{
		address: "0x4bD70556ae3F8a6eC6C4080A0C327B24325438f3",
		chainId: 1,
		decimals: 18,
		name: "Hxro",
		symbol: "HXRO"
	},
	{
		address: "0xf3A2ace8e48751c965eA0A1D064303AcA53842b9",
		chainId: 1,
		decimals: 8,
		name: "HXY Money",
		symbol: "HXY"
	},
	{
		address: "0x9b53E429B0baDd98ef7F01F03702986c516a5715",
		chainId: 1,
		decimals: 18,
		name: "hybrix",
		symbol: "HY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x20Bcae16A8bA95d8E8363E265de4eCFc36eC5cd9",
		chainId: 1,
		decimals: 18,
		name: "HEY BITCOIN",
		symbol: "HYBN"
	},
	{
		address: "0xEBBdf302c940c6bfd49C6b165f457fdb324649bc",
		chainId: 1,
		decimals: 18,
		name: "Hydro",
		symbol: "HYDRO"
	},
	{
		address: "0x946112efaB61C3636CBD52DE2E1392D7A75A6f01",
		chainId: 1,
		decimals: 18,
		name: "Hydro",
		symbol: "HYDRO"
	},
	{
		address: "0xE99A894a69d7c2e3C92E61B64C505A6a57d2bC07",
		chainId: 1,
		decimals: 18,
		name: "Hyperion",
		symbol: "HYN"
	},
	{
		address: "0x4ff7c227e1e7bD59351de8635381C379750A8040",
		chainId: 1,
		decimals: 18,
		name: "Hype",
		symbol: "HYPE"
	},
	{
		address: "0x610c67be018A5C5bdC70ACd8DC19688A11421073",
		chainId: 1,
		decimals: 18,
		name: "Hype Finance",
		symbol: "HYPE"
	},
	{
		address: "0xc9Dfcd0A1dD2D7BB6Fd2EF91A16a6a1c4E9846Dd",
		chainId: 1,
		decimals: 18,
		name: "Hype Bet",
		symbol: "HYPEBET"
	},
	{
		address: "0xeb5a8eEFDAE23a815072BF28de8114a825C27876",
		chainId: 1,
		decimals: 18,
		name: "HYPER Vault  NFTX",
		symbol: "HYPER"
	},
	{
		address: "0xd794DD1CAda4cf79C9EebaAb8327a1B0507ef7d4",
		chainId: 1,
		decimals: 18,
		name: "Hyve",
		symbol: "HYVE"
	},
	{
		address: "0x78A5B382B9A83Fe042A4F7eB2399d563FDa931C3",
		chainId: 1,
		decimals: 2,
		name: "Black Diamond Ratin",
		symbol: "HZT"
	},
	{
		address: "0x7cf74238D48Ce383db00a1EFff8da99303552cb0",
		chainId: 1,
		decimals: 8,
		name: "i9 Coin",
		symbol: "I9C"
	},
	{
		address: "0x60a16b9EfD33bb45c18833AeD45cA66045b3b714",
		chainId: 1,
		decimals: 8,
		name: "i9X Coin",
		symbol: "I9X"
	},
	{
		address: "0x176C674Ee533C6139B0dc8b458D72A93dCB3e705",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Aave",
		symbol: "iAAVE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC1E2097d788d33701BA3Cc2773BF67155ec93FC4",
		chainId: 1,
		decimals: 18,
		name: "IADOWR Coin",
		symbol: "IAD"
	},
	{
		address: "0x8A8079c7149B8A1611e5C5d978DCA3bE16545F83",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Cardano",
		symbol: "iADA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x40EB746DEE876aC1E78697b7Ca85142D178A1Fc8",
		chainId: 1,
		decimals: 18,
		name: "Iagon",
		symbol: "IAG"
	},
	{
		address: "0x1EE1c46251b811075Fd480fb64197F4E49c37EE0",
		chainId: 1,
		decimals: 18,
		name: "IAI Token",
		symbol: "IAI"
	},
	{
		address: "0xA8b65249DE7f85494BC1fe75F525f568aa7dfa39",
		chainId: 1,
		decimals: 18,
		name: "bZx BAT iToken",
		symbol: "iBAT"
	},
	{
		address: "0xc4E15973E6fF2A35cC804c2CF9D2a1b817a8b40F",
		chainId: 1,
		decimals: 18,
		name: "Interest Bearing Bi",
		symbol: "IBBTC"
	},
	{
		address: "0xf6E9b246319ea30e8C2fA2d1540AAEBF6f9E1B89",
		chainId: 1,
		decimals: 18,
		name: "Synthetic Inverse Bitcoin Cash",
		symbol: "iBCH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x67B66C99D3Eb37Fa76Aa3Ed1ff33E8e39F0b9c7A",
		chainId: 1,
		decimals: 18,
		name: "Interest Bearing ET",
		symbol: "IBETH"
	},
	{
		address: "0x96E61422b6A9bA0e068B6c5ADd4fFaBC6a4aae27",
		chainId: 1,
		decimals: 18,
		name: "Iron Bank EURO",
		symbol: "IBEUR"
	},
	{
		address: "0x09400Ec683F70174E1217d6dcdBf42448E8De5d6",
		chainId: 1,
		decimals: 18,
		name: "Synth iBNB",
		symbol: "iBNB"
	},
	{
		address: "0xAFD870F32CE54EfdBF677466B612bf8ad164454B",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Binance Coin",
		symbol: "iBNB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7D14b842630cbc2530cB288109E5719e0C4d67d7",
		chainId: 1,
		decimals: 18,
		name: "Innovation Blockcha",
		symbol: "IBP"
	},
	{
		address: "0x83266A95429b903cC5e954bF61c7eddf8a52b971",
		chainId: 1,
		decimals: 18,
		name: "Synth iBTC",
		symbol: "iBTC"
	},
	{
		address: "0xD6014EA05BDe904448B743833dDF07c3C7837481",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Bitcoin",
		symbol: "iBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2590F1fD14Ef8Bb0A46C7A889c4CBc146510f9C3",
		chainId: 1,
		decimals: 18,
		name: "Inverse Bitcoin Vol",
		symbol: "IBTCV"
	},
	{
		address: "0x627e2Ee3dbDA546e168eaAFF25A2C5212E4A95a0",
		chainId: 1,
		decimals: 18,
		name: "Inverse Bitcoin Vol",
		symbol: "IBVOL"
	},
	{
		address: "0x6A68DE599E8E0b1856E322CE5Bd11c5C3C79712B",
		chainId: 1,
		decimals: 18,
		name: "iBetYou",
		symbol: "IBY"
	},
	{
		address: "0x18240BD9C07fA6156Ce3F3f61921cC82b2619157",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum BZRX iToken",
		symbol: "iBZRX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd2F29748F8698606dca9f48b8967241b595ab9E5",
		chainId: 1,
		decimals: 18,
		name: "Icarus Network",
		symbol: "ICA"
	},
	{
		address: "0x3c20d67b6B1aE0985F913aBb7397babc2fBb1A1F",
		chainId: 1,
		decimals: 18,
		name: "ICEDIUM",
		symbol: "ICD"
	},
	{
		address: "0x5a84969bb663fb64F6d015DcF9F622Aedc796750",
		chainId: 1,
		decimals: 18,
		name: "ICE",
		symbol: "ICE"
	},
	{
		address: "0xf16e81dce15B08F326220742020379B855B87DF9",
		chainId: 1,
		decimals: 18,
		name: "Popsicle Finance",
		symbol: "ICE"
	},
	{
		address: "0xDa5eD43B9B6E36b4f27cc6D8c1974532cdBd55F9",
		chainId: 1,
		decimals: 18,
		name: "Synth iCEX",
		symbol: "iCEX"
	},
	{
		address: "0x336213e1DDFC69f4701Fc3F86F4ef4A160c1159d",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Centralised Exchange Index",
		symbol: "iCEX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf8483E2d6560585C02D46bF7B3186Bf154a96166",
		chainId: 1,
		decimals: 8,
		name: "IdeaChain",
		symbol: "ICH"
	},
	{
		address: "0x330839EF82D34801bd96e75a4Ee778ac56Fa1ED8",
		chainId: 1,
		decimals: 18,
		name: "ICOStart",
		symbol: "ICH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x903bEF1736CDdf2A537176cf3C64579C3867A881",
		chainId: 1,
		decimals: 9,
		name: "ICHI",
		symbol: "ICHI"
	},
	{
		address: "0xFfCf5f9feb7e14833331B6687755d1622399316C",
		chainId: 1,
		decimals: 0,
		name: "ICICB Coin",
		symbol: "ICICB"
	},
	{
		address: "0x888666CA69E0f178DED6D75b5726Cee99A87D698",
		chainId: 1,
		decimals: 18,
		name: "ICONOMI",
		symbol: "ICN"
	},
	{
		address: "0xB3e2Cb7CccfE139f8FF84013823Bf22dA6B6390A",
		chainId: 1,
		decimals: 18,
		name: "Iconic Token",
		symbol: "ICNQ"
	},
	{
		address: "0xa33e729bf4fdeb868B534e1f20523463D9C46bEe",
		chainId: 1,
		decimals: 10,
		name: "ICO",
		symbol: "ICO"
	},
	{
		address: "0x6345728B1ccE16E6f8C509950b5c84FFF88530d9",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Compound",
		symbol: "iCOMP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x014B50466590340D41307Cc54DCee990c8D58aa8",
		chainId: 1,
		decimals: 6,
		name: "ICOS",
		symbol: "ICOS"
	},
	{
		address: "0xb5A5F22694352C15B00323844aD545ABb2B11028",
		chainId: 1,
		decimals: 18,
		name: "ICON",
		symbol: "ICX"
	},
	{
		address: "0xEBd9D99A3982d547C5Bb4DB7E3b1F9F14b67Eb83",
		chainId: 1,
		decimals: 18,
		name: "Everest",
		symbol: "ID"
	},
	{
		address: "0x6bC4375083D3aD563dE91caD8438F629841448a5",
		chainId: 1,
		decimals: 18,
		name: "Cryptogeneid Token",
		symbol: "ID7"
	},
	{
		address: "0x6b093998D36f2C7F0cc359441FBB24CC629D5FF0",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum DAI iToken",
		symbol: "iDAI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCB98f42221b2C251A4E74A1609722eE09f0cc08E",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Dash",
		symbol: "iDASH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x814CAfd4782d2e728170FDA68257983F03321c58",
		chainId: 1,
		decimals: 0,
		name: "IDEA Token",
		symbol: "IDEA"
	},
	{
		address: "0x5d3a4F62124498092Ce665f865E0b38fF6F5FbEa",
		chainId: 1,
		decimals: 18,
		name: "Ideaology",
		symbol: "IDEA"
	},
	{
		address: "0xC5Bfbc63dc8D36E81434e93e0ee097999879d7F4",
		chainId: 1,
		decimals: 18,
		name: "Synth iDEFI",
		symbol: "iDEFI"
	},
	{
		address: "0x14d10003807AC60d07BB0ba82cAeaC8d2087c157",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse DeFi Index",
		symbol: "iDEFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB705268213D593B8FD88d3FDEFF93AFF5CbDcfAE",
		chainId: 1,
		decimals: 18,
		name: "IDEX",
		symbol: "IDEX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5136C98A80811C3f46bDda8B5c4555CFd9f812F0",
		chainId: 1,
		decimals: 6,
		name: "indaHash",
		symbol: "IDH"
	},
	{
		address: "0x61fd1c62551850D0c04C76FcE614cBCeD0094498",
		chainId: 1,
		decimals: 8,
		name: "IDK",
		symbol: "IDK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6febD6Be8fa45bE6a5EeB61A17c82D33b9addD41",
		chainId: 1,
		decimals: 18,
		name: "IDL Token",
		symbol: "IDL"
	},
	{
		address: "0x875773784Af8135eA0ef43b5a374AaD105c5D39e",
		chainId: 1,
		decimals: 18,
		name: "IDLE",
		symbol: "IDLE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa14eA0E11121e6E951E87c66AFe460A00BCD6A16",
		chainId: 1,
		decimals: 18,
		name: "IdleDAI  Risk Adjus",
		symbol: "IDLEDAISAFE"
	},
	{
		address: "0x3fE7940616e5Bc47b0775a0dccf6237893353bB4",
		chainId: 1,
		decimals: 18,
		name: "IdleDAI  Best Yield",
		symbol: "IDLEDAIYIELD"
	},
	{
		address: "0xF52CDcD458bf455aeD77751743180eC4A595Fd3F",
		chainId: 1,
		decimals: 18,
		name: "IdleSUSD  Yield",
		symbol: "IDLESUSDYIELD"
	},
	{
		address: "0xc278041fDD8249FE4c1Aad1193876857EEa3D68c",
		chainId: 1,
		decimals: 18,
		name: "IdleTUSD  Best Yiel",
		symbol: "IDLETUSDYIELD"
	},
	{
		address: "0x3391bc034f2935eF0E1e41619445F998b2680D35",
		chainId: 1,
		decimals: 18,
		name: "IdleUSDC  Risk Adju",
		symbol: "IDLEUSDCSAFE"
	},
	{
		address: "0x5274891bEC421B39D23760c04A6755eCB444797C",
		chainId: 1,
		decimals: 18,
		name: "IdleUSDC  Yield",
		symbol: "IDLEUSDCYIELD"
	},
	{
		address: "0x28fAc5334C9f7262b3A3Fe707e250E01053e07b5",
		chainId: 1,
		decimals: 18,
		name: "IdleUSDT  Risk Adju",
		symbol: "IDLEUSDTSAFE"
	},
	{
		address: "0xF34842d05A1c888Ca02769A633DF37177415C2f8",
		chainId: 1,
		decimals: 18,
		name: "IdleUSDT  Yield",
		symbol: "IDLEUSDTYIELD"
	},
	{
		address: "0x8C81121B15197fA0eEaEE1DC75533419DcfD3151",
		chainId: 1,
		decimals: 18,
		name: "IdleWBTC  Best Yiel",
		symbol: "IDLEWBTCYIELD"
	},
	{
		address: "0x46a97629C9C1F58De6EC18C7F536e7E6d6A6ecDe",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Polkadot",
		symbol: "iDOT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x998FFE1E43fAcffb941dc337dD0468d52bA5b48A",
		chainId: 1,
		decimals: 2,
		name: "Rupiah Token",
		symbol: "IDRT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x92Ec47DF1AA167806dFa4916D9Cfb99da6953b8F",
		chainId: 1,
		decimals: 18,
		name: "Idavoll Network",
		symbol: "IDV"
	},
	{
		address: "0xCc13Fc627EFfd6E35D2D2706Ea3C4D7396c610ea",
		chainId: 1,
		decimals: 8,
		name: "IDEX Membership",
		symbol: "IDXM"
	},
	{
		address: "0xF4EebDD0704021eF2a6Bbe993fdf93030Cd784b4",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse EOS",
		symbol: "iEOS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd50c1746D835d2770dDA3703B69187bFfeB14126",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Ethereum Classic",
		symbol: "iETC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x77f973FCaF871459aa58cd81881Ce453759281bC",
		chainId: 1,
		decimals: 18,
		name: "bZx ETH iToken",
		symbol: "iETH"
	},
	{
		address: "0xf53B56B6Fb98aaF514bcd28f6Fa6fd20C24E5c22",
		chainId: 1,
		decimals: 18,
		name: "Synth iETH",
		symbol: "iETH"
	},
	{
		address: "0xA9859874e1743A32409f75bB11549892138BBA1E",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Ether",
		symbol: "iETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB983E01458529665007fF7E0CDdeCDB74B967Eb6",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum ETH iToken",
		symbol: "iETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x859a9C0b44cb7066D956a958B0b82e54C9e44b4B",
		chainId: 1,
		decimals: 8,
		name: "iEthereum",
		symbol: "IETH"
	},
	{
		address: "0xC71D8BaAa436aa7E42DA1f40bEc48F11AB3c9E4A",
		chainId: 1,
		decimals: 8,
		name: "iEthereum",
		symbol: "IETH"
	},
	{
		address: "0x3A707d56D538e85B783E8CE12B346e7fB6511F90",
		chainId: 1,
		decimals: 18,
		name: "Inverse Ethereum Vo",
		symbol: "IETHV"
	},
	{
		address: "0x1571eD0bed4D987fe2b498DdBaE7DFA19519F651",
		chainId: 1,
		decimals: 18,
		name: "iFARM",
		symbol: "IFARM"
	},
	{
		address: "0xA891CF72AEDa692570928eFe1A832342e9783CDC",
		chainId: 1,
		decimals: 18,
		name: "Interfinex Bills",
		symbol: "IFEX"
	},
	{
		address: "0x7654915A1b82D6D2D0AFc37c52Af556eA8983c7E",
		chainId: 1,
		decimals: 18,
		name: "InvestFeed",
		symbol: "IFT"
	},
	{
		address: "0x2731d151CBDf84A8A4C6d9D0BaE74012Db51E428",
		chainId: 1,
		decimals: 18,
		name: "IFToken",
		symbol: "IFT"
	},
	{
		address: "0x04B5E13000C6e9A3255Dc057091F3e3Eeee7b0f0",
		chainId: 1,
		decimals: 18,
		name: "Unifund",
		symbol: "IFUND"
	},
	{
		address: "0xc962ad021a69D457564e985738C719aE3f79B707",
		chainId: 1,
		decimals: 18,
		name: "IFX24",
		symbol: "IFX24"
	},
	{
		address: "0x8a88f04e0c905054D2F33b26BB3A46D7091A039A",
		chainId: 1,
		decimals: 18,
		name: "IGToken",
		symbol: "IG"
	},
	{
		address: "0x8FfE40A3D0f80C0CE6b203D5cDC1A6a86d9AcaeA",
		chainId: 1,
		decimals: 6,
		name: "IG Gold",
		symbol: "IGG"
	},
	{
		address: "0x449c640B6C7fce4f8aD2e3Dcd900D13be40174Af",
		chainId: 1,
		decimals: 18,
		name: "IGICOIN",
		symbol: "IGI"
	},
	{
		address: "0xdE9d41a01bb11A9F41E709242824E54c3917084e",
		chainId: 1,
		decimals: 9,
		name: "Ignite",
		symbol: "IGN"
	},
	{
		address: "0xaF1250fa68D7DECD34fD75dE8742Bc03B29BD58e",
		chainId: 1,
		decimals: 18,
		name: "Invictus Hyperion F",
		symbol: "IHF"
	},
	{
		address: "0xEda8B016efA8b1161208Cf041cD86972eeE0F31E",
		chainId: 1,
		decimals: 18,
		name: "IHT Real Estate Pro",
		symbol: "IHT"
	},
	{
		address: "0x16662F73dF3e79e54c6c5938b4313f92C524C120",
		chainId: 1,
		decimals: 18,
		name: "IIC",
		symbol: "IIC"
	},
	{
		address: "0xb6F43025B29196Af2dddd69b0a58AFBa079cD600",
		chainId: 1,
		decimals: 18,
		name: "Intelligent Investm",
		symbol: "IIC"
	},
	{
		address: "0xc7fF1e126cC81e816915FF48c940ED9d4E6d05d6",
		chainId: 1,
		decimals: 18,
		name: "IjasCoin",
		symbol: "IJC"
	},
	{
		address: "0x88AE96845e157558ef59e9Ff90E766E22E480390",
		chainId: 1,
		decimals: 0,
		name: "IKB",
		symbol: "IKB"
	},
	{
		address: "0x1cC9567EA2eB740824a45F8026cCF8e46973234D",
		chainId: 1,
		decimals: 18,
		name: "bZx KNC iToken",
		symbol: "iKNC"
	},
	{
		address: "0x687642347a9282Be8FD809d8309910A3f984Ac5a",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum KNC iToken",
		symbol: "iKNC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6a625DDb2e2A2de0257C5129364dd80Bb4AfA3B9",
		chainId: 1,
		decimals: 18,
		name: "IKOMP",
		symbol: "IKOMP"
	},
	{
		address: "0x1D496da96caf6b518b133736beca85D5C4F9cBc5",
		chainId: 1,
		decimals: 18,
		name: "bZx LINK iToken",
		symbol: "iLINK"
	},
	{
		address: "0x3DdF5dAd59F8F8e8f957709B044eE84e87B42e25",
		chainId: 1,
		decimals: 18,
		name: "Synth iLINK",
		symbol: "iLINK"
	},
	{
		address: "0x2d7aC061fc3db53c39fe1607fB8cec1B2C162B01",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Chainlink",
		symbol: "iLINK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x463538705E7d22aA7f03Ebf8ab09B067e1001B54",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum LINK iToken",
		symbol: "iLINK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF784682C82526e245F50975190EF0fff4E4fC077",
		chainId: 1,
		decimals: 8,
		name: "INLOCK",
		symbol: "ILK"
	},
	{
		address: "0xec98BB42C8F03485bf659378da694512a16f3482",
		chainId: 1,
		decimals: 18,
		name: "Synth LTC",
		symbol: "iLTC"
	},
	{
		address: "0x79da1431150C9b82D2E5dfc1C68B33216846851e",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Litecoin",
		symbol: "iLTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x767FE9EDC9E0dF98E07454847909b5E959D7ca0E",
		chainId: 1,
		decimals: 18,
		name: "Illuvium",
		symbol: "ILV"
	},
	{
		address: "0x3212b29E33587A00FB1C83346f5dBFA69A458923",
		chainId: 1,
		decimals: 8,
		name: "The Tokenized Bitcoin",
		symbol: "imBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x17d8CBB6Bce8cEE970a4027d1198F6700A7a6c24",
		chainId: 1,
		decimals: 18,
		name: "imBTC",
		symbol: "IMBTC"
	},
	{
		address: "0xe3831c5A982B279A198456D577cfb90424cb6340",
		chainId: 1,
		decimals: 6,
		name: "Immune Coin",
		symbol: "IMC"
	},
	{
		address: "0xE42Ba5558b00d2E6109CC60412d5D4c9473FE998",
		chainId: 1,
		decimals: 18,
		name: "IMM COIN",
		symbol: "IMC"
	},
	{
		address: "0xD95e7F80766580634B2E0E49d9F66af317994FC7",
		chainId: 1,
		decimals: 18,
		name: "Synth MKR",
		symbol: "iMKR"
	},
	{
		address: "0x9189c499727f88F8eCC7dC4EEA22c828E6AaC015",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum MKR iToken",
		symbol: "iMKR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x48FF53777F747cFB694101222a944dE070c15D36",
		chainId: 1,
		decimals: 7,
		name: "Ether Kingdoms",
		symbol: "IMP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFAc3f6391C86004289A186Ae0198180fCB4D49Ab",
		chainId: 1,
		decimals: 18,
		name: "Alpha Impact",
		symbol: "IMPACT"
	},
	{
		address: "0x3c4030839708a20fd2fb379cf11810dde4888d93",
		chainId: 1,
		decimals: 18,
		name: "IMSWallet",
		symbol: "IMS"
	},
	{
		address: "0x13119E34E140097a507B07a5564bDe1bC375D9e6",
		chainId: 1,
		decimals: 18,
		name: "MoneyToken",
		symbol: "IMT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x22E5F62D0FA19974749faa194e3d3eF6d89c08d7",
		chainId: 1,
		decimals: 0,
		name: "IMT",
		symbol: "IMT"
	},
	{
		address: "0x30647a72Dc82d7Fbb1123EA74716aB8A317Eac19",
		chainId: 1,
		decimals: 18,
		name: "imUSD",
		symbol: "IMUSD"
	},
	{
		address: "0x7b35Ce522CB72e4077BaeB96Cb923A5529764a00",
		chainId: 1,
		decimals: 18,
		name: "Impermax",
		symbol: "IMX"
	},
	{
		address: "0xcA75C43f8c9AfD356c585ce7AA4490B48A95C466",
		chainId: 1,
		decimals: 9,
		name: "Inari",
		symbol: "INARI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x17Aa18A4B64A55aBEd7FA543F2Ba4E91f2dcE482",
		chainId: 1,
		decimals: 18,
		name: "Insight Chain",
		symbol: "INB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf8e386EDa857484f5a12e4B5DAa9984E06E73705",
		chainId: 1,
		decimals: 18,
		name: "Indorse",
		symbol: "IND"
	},
	{
		address: "0x0954906da0Bf32d5479e25f46056d22f08464cab",
		chainId: 1,
		decimals: 18,
		name: "Index",
		symbol: "INDEX",
		extensions: {
			color: "#75533A",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xa2D77f8353cB2AFD709Aba4a967257511ECFf716",
		chainId: 1,
		decimals: 8,
		name: "Internet Exchange T",
		symbol: "INEX"
	},
	{
		address: "0x00E150D741Eda1d49d341189CAE4c08a73a49C95",
		chainId: 1,
		decimals: 18,
		name: "InfinitusTokens",
		symbol: "INF"
	},
	{
		address: "0x159751323A9E0415DD3d6D42a1212fe9F4a0848C",
		chainId: 1,
		decimals: 18,
		name: "Insured Finance",
		symbol: "INFI"
	},
	{
		address: "0x193408cA0576B73156Ed42A2EA7D6fD3f6507162",
		chainId: 1,
		decimals: 1,
		name: "Infinity Esaham",
		symbol: "INFS"
	},
	{
		address: "0x83d60E7aED59c6829fb251229061a55F35432c4d",
		chainId: 1,
		decimals: 6,
		name: "Infinito",
		symbol: "INFT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x24dDFf6D8B8a42d835af3b440De91f3386554Aa4",
		chainId: 1,
		decimals: 18,
		name: "Iungo",
		symbol: "ING"
	},
	{
		address: "0xe28b3B32B6c345A34Ff64674606124Dd5Aceca30",
		chainId: 1,
		decimals: 18,
		name: "Injective Protocol",
		symbol: "INJ"
	},
	{
		address: "0xB67718b98d52318240c52E71A898335da4A28c42",
		chainId: 1,
		decimals: 6,
		name: "Innovative Bioresea",
		symbol: "INNBC"
	},
	{
		address: "0x0Cc9FCCFF81252F4bd8C5c6b359B14ae2Ed851cf",
		chainId: 1,
		decimals: 6,
		name: "InnovativeBioresear",
		symbol: "INNBCL"
	},
	{
		address: "0xc9859fccC876e6b4B3C749C5D29EA04F48aCb74F",
		chainId: 1,
		decimals: 0,
		name: "Ino Coin",
		symbol: "INO"
	},
	{
		address: "0x48e5413b73add2434e47504E2a22d14940dBFe78",
		chainId: 1,
		decimals: 3,
		name: "Integrated Money",
		symbol: "INRM"
	},
	{
		address: "0x5B2e4a700dfBc560061e957edec8F6EeEb74a320",
		chainId: 1,
		decimals: 10,
		name: "Insolar",
		symbol: "INS",
		extensions: {
			color: "#b2a3f6",
			isVerified: true
		}
	},
	{
		address: "0x6f40d4A6237C257fff2dB00FA0510DeEECd303eb",
		chainId: 1,
		decimals: 18,
		name: "Instadapp",
		symbol: "INST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc72fe8e3Dd5BeF0F9f31f259399F301272eF2a2D",
		chainId: 1,
		decimals: 18,
		name: "Insights Network",
		symbol: "INSTAR"
	},
	{
		address: "0x544c42fBB96B39B21DF61cf322b5EDC285EE7429",
		chainId: 1,
		decimals: 18,
		name: "InsurAce",
		symbol: "INSUR"
	},
	{
		address: "0x0b76544F6C413a555F309Bf76260d1E02377c02A",
		chainId: 1,
		decimals: 6,
		name: "Internet Node Token",
		symbol: "INT"
	},
	{
		address: "0x89C0b027bD7cc2D17854B06F8322e29451192CE3",
		chainId: 1,
		decimals: 18,
		name: "Intelligent ETH Set",
		symbol: "INTETH"
	},
	{
		address: "0xBA8Ea15b647F54D9ff849670FcaAcF35Df21A457",
		chainId: 1,
		decimals: 18,
		name: "Intelligent Ratio S",
		symbol: "INTRATIO"
	},
	{
		address: "0x7533D63A2558965472398Ef473908e1320520AE2",
		chainId: 1,
		decimals: 9,
		name: "INTEXCOIN",
		symbol: "INTX"
	},
	{
		address: "0x00F29171D7bCDC464a0758cF3217fE83173772b9",
		chainId: 1,
		decimals: 9,
		name: "INU Token",
		symbol: "INU"
	},
	{
		address: "0xF32aa187d5Bc16A2C02A6aFb7Df1459d0D107574",
		chainId: 1,
		decimals: 18,
		name: "Hachiko Inu Token",
		symbol: "INU"
	},
	{
		address: "0xEcE83617Db208Ad255Ad4f45Daf81E25137535bb",
		chainId: 1,
		decimals: 8,
		name: "Invacio",
		symbol: "INV"
	},
	{
		address: "0x41D5D79431A913C4aE7d69a668ecdfE5fF9DFB68",
		chainId: 1,
		decimals: 18,
		name: "Inverse Finance",
		symbol: "INV"
	},
	{
		address: "0xDAC4AE188AcE3C8985765eDc6C9B4739D4845DdC",
		chainId: 1,
		decimals: 18,
		name: "InterValue",
		symbol: "INVE"
	},
	{
		address: "0x356A5160F2B34BC8d88FB084745465eBBbed0174",
		chainId: 1,
		decimals: 13,
		name: "INVI Token",
		symbol: "INVI"
	},
	{
		address: "0x018d7D179350f1Bb9853D04982820E37ccE13a92",
		chainId: 1,
		decimals: 8,
		name: "InMax",
		symbol: "INX"
	},
	{
		address: "0xBBC7f7A6AADAc103769C66CBC69AB720f7F9Eae3",
		chainId: 1,
		decimals: 18,
		name: "INX Token",
		symbol: "INX"
	},
	{
		address: "0x84fE25f3921f3426395c883707950d0c00367576",
		chainId: 1,
		decimals: 18,
		name: "Insight Protocol",
		symbol: "INX"
	},
	{
		address: "0xa8006C4ca56F24d6836727D106349320dB7fEF82",
		chainId: 1,
		decimals: 8,
		name: "Internxt",
		symbol: "INXT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1c4b7d0e1885bd7667Af3378E0c538F74E712006",
		chainId: 1,
		decimals: 18,
		name: "Playgroundz",
		symbol: "IOG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8B3870Df408fF4D7C3A26DF852D41034eDa11d81",
		chainId: 1,
		decimals: 6,
		name: "IOI Token",
		symbol: "IOI"
	},
	{
		address: "0xA5a5DF41883Cdc00c4cCC6E8097130535399d9a3",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Perpetual Oil Futures",
		symbol: "iOIL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbC647aAd10114B89564c0a7aabE542bd0cf2C5aF",
		chainId: 1,
		decimals: 18,
		name: "IONChain",
		symbol: "IONC"
	},
	{
		address: "0x02D3A27Ac3f55d5D91Fb0f52759842696a864217",
		chainId: 1,
		decimals: 18,
		name: "Charged Particles",
		symbol: "IONX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFA1a856Cfa3409CFa145Fa4e20Eb270dF3EB21ab",
		chainId: 1,
		decimals: 18,
		name: "IOST",
		symbol: "IOST",
		extensions: {
			color: "#1c1c1c",
			isVerified: true
		}
	},
	{
		address: "0xC34B21f6F8e51cC965c2393B3ccFa3b82BEb2403",
		chainId: 1,
		decimals: 6,
		name: "IoTコイン",
		symbol: "IoT"
	},
	{
		address: "0x6fB3e0A217407EFFf7Ca062D46c26E5d60a14d69",
		chainId: 1,
		decimals: 18,
		name: "IoTeX",
		symbol: "IOTX",
		extensions: {
			color: "#00d4d5",
			isVerified: true
		}
	},
	{
		address: "0x0E69D0A2bbB30aBcB7e5CfEA0E4FDe19C00A8d47",
		chainId: 1,
		decimals: 8,
		name: "Carlive Chain",
		symbol: "IOV"
	},
	{
		address: "0x36ed7baaD9a571B5dad55d096C0Ed902188D6d3c",
		chainId: 1,
		decimals: 18,
		name: "Infinity Pad",
		symbol: "IPAD"
	},
	{
		address: "0x622CD54dEb2bB7A051515192417109bcF3fe098f",
		chainId: 1,
		decimals: 8,
		name: "IPChain",
		symbol: "IPC"
	},
	{
		address: "0x64CdF819d3E75Ac8eC217B3496d7cE167Be42e80",
		chainId: 1,
		decimals: 18,
		name: "InsurePal",
		symbol: "IPL"
	},
	{
		address: "0x8fEEf860E9fA9326ff9d7E0058F637bE8579Cc29",
		chainId: 1,
		decimals: 18,
		name: "Timers",
		symbol: "IPM"
	},
	{
		address: "0x001F0aA5dA15585e5b2305DbaB2bac425ea71007",
		chainId: 1,
		decimals: 18,
		name: "IP Exchange",
		symbol: "IPSX"
	},
	{
		address: "0x579CEa1889991f68aCc35Ff5c3dd0621fF29b0C9",
		chainId: 1,
		decimals: 18,
		name: "Everipedia",
		symbol: "IQ"
	},
	{
		address: "0x0DB8D8b76BC361bAcbB72E2C491E06085A97Ab31",
		chainId: 1,
		decimals: 18,
		name: "IQeon",
		symbol: "IQN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x68a9d92Fe19399FEEBEd6A9a0980a7ea7638074C",
		chainId: 1,
		decimals: 18,
		name: "Iqoniq",
		symbol: "IQQ"
	},
	{
		address: "0xade7B5f4a421d81DDaD8Ce86f77A0EfE8921E9CC",
		chainId: 1,
		decimals: 8,
		name: "Diligence",
		symbol: "IRA"
	},
	{
		address: "0x0fEd38108bdb8e62ef7b5680E8E0726E2F29e0De",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Ren",
		symbol: "iREN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBd56E9477Fc6997609Cf45F84795eFbDAC642Ff1",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum REP iToken",
		symbol: "iREP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x14094949152EDDBFcd073717200DA82fEd8dC960",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum DAI",
		symbol: "iSAI",
		extensions: {
			color: "#0F6AD7",
			isVerified: true
		}
	},
	{
		address: "0x8e12BD795d2608f90440C84Dddd2D985240696d5",
		chainId: 1,
		decimals: 7,
		name: "Isalcoin",
		symbol: "ISAL"
	},
	{
		address: "0xf2354F740f31704820f6FcfBA70B9dA065459b62",
		chainId: 1,
		decimals: 18,
		name: "Istardust",
		symbol: "ISDT"
	},
	{
		address: "0x42726d074BBa68Ccc15200442B72Afa2D495A783",
		chainId: 1,
		decimals: 4,
		name: "Isiklar Coin",
		symbol: "ISIKC"
	},
	{
		address: "0xC642549743A93674cf38D6431f75d6443F88E3E2",
		chainId: 1,
		decimals: 18,
		name: "Monerium ISK",
		symbol: "ISKe"
	},
	{
		address: "0x1969442391737025812C2215E77E676d7fA84847",
		chainId: 1,
		decimals: 18,
		name: "Islamic Bank",
		symbol: "ISL"
	},
	{
		address: "0x697eF32B4a3F5a4C39dE1cB7563f24CA7BfC5947",
		chainId: 1,
		decimals: 18,
		name: "Insula",
		symbol: "ISLA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x20a68F9e34076b2dc15ce726d7eEbB83b694702d",
		chainId: 1,
		decimals: 18,
		name: "DefiVille Island",
		symbol: "ISLA"
	},
	{
		address: "0x1681bcB589b3cFCF0c0616B0cE9b19b240643dc1",
		chainId: 1,
		decimals: 9,
		name: "Island",
		symbol: "ISLE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC8807f0f5BA3fa45FfBdc66928d71c5289249014",
		chainId: 1,
		decimals: 18,
		name: "Ispolink",
		symbol: "ISP"
	},
	{
		address: "0xB16d3Ed603D62b125c6bd45519EDa40829549489",
		chainId: 1,
		decimals: 18,
		name: "Insureum",
		symbol: "ISR"
	},
	{
		address: "0x0cF713b11C9b986EC40D65bD4F7fbd50F6ff2d64",
		chainId: 1,
		decimals: 18,
		name: "IST34 Token",
		symbol: "IST34"
	},
	{
		address: "0x49f4592E641820e928F9919Ef4aBd92a719B4b49",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum sUSD iToken",
		symbol: "iSUSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7fE4Fbad1fee10D6Cf8e08198608209A9275944C",
		chainId: 1,
		decimals: 9,
		name: "Infinity Token",
		symbol: "IT"
	},
	{
		address: "0x5E6b6d9aBAd9093fdc861Ea1600eBa1b355Cd940",
		chainId: 1,
		decimals: 18,
		name: "IoT Chain",
		symbol: "ITC"
	},
	{
		address: "0x65b678936c489A2639036755Aa2107Ec09569198",
		chainId: 1,
		decimals: 18,
		name: "ITEN",
		symbol: "ITEN"
	},
	{
		address: "0xF88b137cfa667065955ABD17525e89EDCF4D6426",
		chainId: 1,
		decimals: 18,
		name: "iTrust Governance T",
		symbol: "ITG"
	},
	{
		address: "0x122A86b5DFF2D085AfB49600b4cd7375D0d94A5f",
		chainId: 1,
		decimals: 8,
		name: "Italian Lira",
		symbol: "ITL"
	},
	{
		address: "0x293B0Cd0991DB07c8529fEBb01bc7D052315C5Ab",
		chainId: 1,
		decimals: 18,
		name: "InTime",
		symbol: "ITO"
	},
	{
		address: "0x6Ef5febbD2A56FAb23f18a69d3fB9F4E2A70440B",
		chainId: 1,
		decimals: 18,
		name: "Intercoin",
		symbol: "ITR"
	},
	{
		address: "0x406555dbF02e9E4df9AdeAeC9DA76ABeED8C1BC3",
		chainId: 1,
		decimals: 18,
		name: "Synth TRX",
		symbol: "iTRX"
	},
	{
		address: "0xC5807183a9661A533CB08CbC297594a0B864dc12",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse TRON",
		symbol: "iTRX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC32cC5b70BEe4bd54Aa62B9Aefb91346d18821C4",
		chainId: 1,
		decimals: 18,
		name: "Iteration Syndicate",
		symbol: "ITS"
	},
	{
		address: "0x0aeF06DcCCC531e581f0440059E6FfCC206039EE",
		chainId: 1,
		decimals: 8,
		name: "ITT Token",
		symbol: "ITT"
	},
	{
		address: "0x36A00FF9072570eF4B9292117850B8FE08d96cce",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Uniswap",
		symbol: "iUNI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF013406A0B1d544238083DF0B93ad0d2cBE0f65f",
		chainId: 1,
		decimals: 6,
		name: "Fulcrum USDC",
		symbol: "iUSDC",
		extensions: {
			color: "#0F6AD7"
		}
	},
	{
		address: "0x32E4c68B3A4a813b710595AebA7f6B7604Ab9c15",
		chainId: 1,
		decimals: 6,
		name: "Fulcrum USDC iToken",
		symbol: "iUSDC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD36a0e7b741542208aE0fBb35453C893D0136625",
		chainId: 1,
		decimals: 0,
		name: "ITO Utility Token",
		symbol: "IUT"
	},
	{
		address: "0xA91464AbD4625A23aB719e3F0FCE84DaDd54E546",
		chainId: 1,
		decimals: 18,
		name: "Inoovi",
		symbol: "IVI"
	},
	{
		address: "0xA4eA687A2A7F29cF2dc66B39c68e4411C0D00C49",
		chainId: 1,
		decimals: 18,
		name: "Ivy",
		symbol: "IVY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x829067D40A8D1233927891D9b3381d6aeCeE1E80",
		chainId: 1,
		decimals: 18,
		name: "Ivy Mining",
		symbol: "IVY"
	},
	{
		address: "0xBA9262578EFef8b3aFf7F60Cd629d6CC8859C8b5",
		chainId: 1,
		decimals: 8,
		name: "bZx WBTC iToken",
		symbol: "iWBTC"
	},
	{
		address: "0x2ffa85f655752fB2aCB210287c60b9ef335f5b6E",
		chainId: 1,
		decimals: 8,
		name: "Fulcrum WBTC iToken",
		symbol: "iWBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x53f0C9F1b6e283A59bCD672e80e2222b97E534Cb",
		chainId: 1,
		decimals: 18,
		name: "X Block",
		symbol: "IX"
	},
	{
		address: "0x4AdF728E2Df4945082cDD6053869f51278fae196",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Monero",
		symbol: "iXMR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd7adF1b5E31D1C40E08F16a2095338ce3aA8f2Fc",
		chainId: 1,
		decimals: 18,
		name: "Synth XRP",
		symbol: "iXRP"
	},
	{
		address: "0x27269b3e45A4D3E79A3D6BFeE0C8fB13d0D711A6",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Ripple",
		symbol: "iXRP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfcA47962D45ADFdfd1Ab2D972315dB4ce7CCf094",
		chainId: 1,
		decimals: 8,
		name: "iXledger",
		symbol: "IXT"
	},
	{
		address: "0xAD7258d0054c03112a4f5489A4B24eC34a2fc787",
		chainId: 1,
		decimals: 18,
		name: "Synth iXTZ",
		symbol: "iXTZ"
	},
	{
		address: "0x8deef89058090ac5655A99EEB451a4f9183D1678",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse Tezos",
		symbol: "iXTZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x592244301CeA952d6daB2fdC1fE6bd9E53917306",
		chainId: 1,
		decimals: 18,
		name: "Synth Inverse yearn.finance",
		symbol: "iYFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7F3Fe9D492A9a60aEBb06d82cBa23c6F32CAd10b",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum YFI iToken",
		symbol: "iYFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6944d3e38973C4831dA24E954fbD790c7E688bDd",
		chainId: 1,
		decimals: 18,
		name: "IZE",
		symbol: "IZE"
	},
	{
		address: "0xDf59C8BA19B4d1437d80836b45F1319D9A429EED",
		chainId: 1,
		decimals: 4,
		name: "IZIChain",
		symbol: "IZI"
	},
	{
		address: "0xA7Eb2bc82df18013ecC2A6C533fc29446442EDEe",
		chainId: 1,
		decimals: 18,
		name: "Fulcrum ZRX iToken",
		symbol: "iZRX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0D262e5dC4A06a0F1c90cE79C7a60C09DfC884E4",
		chainId: 1,
		decimals: 8,
		name: "JET8 Token",
		symbol: "J8T"
	},
	{
		address: "0x4E12EB8e506Ccd1427F6b8F7faa3e88fB698EB28",
		chainId: 1,
		decimals: 18,
		name: "Jack Token",
		symbol: "JACK"
	},
	{
		address: "0x56687cf29Ac9751Ce2a4E764680B6aD7E668942e",
		chainId: 1,
		decimals: 4,
		name: "FlynnJamm",
		symbol: "JAMM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa249DE6948022783765Fee4850d7b85E43118FCc",
		chainId: 1,
		decimals: 18,
		name: "Jarvis",
		symbol: "JAR"
	},
	{
		address: "0x7420B4b9a0110cdC71fB720908340C03F9Bc03EC",
		chainId: 1,
		decimals: 18,
		name: "JasmyCoin",
		symbol: "JASMY"
	},
	{
		address: "0x9A3619499825fbAe63329Aa8bCb3f10CD5958E1c",
		chainId: 1,
		decimals: 10,
		name: "Jubilee Dollar",
		symbol: "JBD"
	},
	{
		address: "0x884e3902C4d5cFA86de4aCE7A96AA91EbC25C0Ff",
		chainId: 1,
		decimals: 18,
		name: "JBOX",
		symbol: "JBX"
	},
	{
		address: "0xE2D82Dc7dA0E6f882E96846451F4faBcc8f90528",
		chainId: 1,
		decimals: 18,
		name: "Jesus Coin",
		symbol: "JC"
	},
	{
		address: "0xeA7aA1eDd21735A5ab05EE3E90869016191e274E",
		chainId: 1,
		decimals: 18,
		name: "Junca cash",
		symbol: "JCC"
	},
	{
		address: "0x53dfEa0A8CC2A2A2e425E1C174Bc162999723ea0",
		chainId: 1,
		decimals: 18,
		name: "Jarvis Synthetic Sw",
		symbol: "JCHF"
	},
	{
		address: "0x2fe39f22EAC6d3c1C86DD9D143640EbB94609FCE",
		chainId: 1,
		decimals: 18,
		name: "JD Coin",
		symbol: "JDC"
	},
	{
		address: "0xA10A210C27C86f8C63825096E34f671fD61041b1",
		chainId: 1,
		decimals: 9,
		name: "Jeff in Space",
		symbol: "JEFF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x939A7A577D93ad29B64C1595B1284ce660A479B9",
		chainId: 1,
		decimals: 18,
		name: "Jejudoge",
		symbol: "JEJUDOGE"
	},
	{
		address: "0x21cf09BC065082478Dcc9ccB5fd215A978Dc8d86",
		chainId: 1,
		decimals: 18,
		name: "Jem",
		symbol: "JEM"
	},
	{
		address: "0x773450335eD4ec3DB45aF74f34F2c85348645D39",
		chainId: 1,
		decimals: 18,
		name: "JetCoins",
		symbol: "JET"
	},
	{
		address: "0x8727c112C712c4a03371AC87a74dD6aB104Af768",
		chainId: 1,
		decimals: 18,
		name: "Jetcoin",
		symbol: "JET"
	},
	{
		address: "0x0f17BC9a994b87b5225cFb6a2Cd4D667ADb4F20B",
		chainId: 1,
		decimals: 18,
		name: "Jarvis Synthetic Eu",
		symbol: "JEUR"
	},
	{
		address: "0x940BdCb99A0Ee5Fb008A606778AE87Ed9789F257",
		chainId: 1,
		decimals: 18,
		name: "JFIN Coin",
		symbol: "JFIN"
	},
	{
		address: "0x7409856CAE628f5d578B285B45669b36E7005283",
		chainId: 1,
		decimals: 18,
		name: "Jarvis Synthetic Br",
		symbol: "JGBP"
	},
	{
		address: "0x73374Ea518De7adDD4c2B624C0e8B113955ee041",
		chainId: 1,
		decimals: 18,
		name: "Juggernaut",
		symbol: "JGN"
	},
	{
		address: "0x94939D55000B31B7808904a80aA7Bab05eF59Ed6",
		chainId: 1,
		decimals: 18,
		name: "Jiaozi",
		symbol: "JIAOZI"
	},
	{
		address: "0xF07376F0E3bfF57116eD62e5e8e2Bb1341E4B4C2",
		chainId: 1,
		decimals: 18,
		name: "JoorsChain",
		symbol: "JIC"
	},
	{
		address: "0x3f4Cd830543Db25254EC0f05eAc058D4D6E86166",
		chainId: 1,
		decimals: 18,
		name: "Jindoge",
		symbol: "JINDOGE"
	},
	{
		address: "0xDa022Ca91DF99413e8CB0CAAB4d1CbA4e9018bea",
		chainId: 1,
		decimals: 18,
		name: "JMTIME",
		symbol: "JMT"
	},
	{
		address: "0x21D5A14e625d767Ce6b7A167491C2d18e0785fDa",
		chainId: 1,
		decimals: 18,
		name: "Jinbi Token",
		symbol: "JNB"
	},
	{
		address: "0xa5Fd1A791C4dfcaacC963D4F73c6Ae5824149eA7",
		chainId: 1,
		decimals: 18,
		name: "Jibrel Network",
		symbol: "JNT",
		extensions: {
			color: "#0050db",
			isVerified: true
		}
	},
	{
		address: "0x1368452Bfb5Cd127971C8DE22C58fBE89D35A6BF",
		chainId: 1,
		decimals: 18,
		name: "JNTR e",
		symbol: "JNTR/E"
	},
	{
		address: "0x17280DA053596E097604839C61A2eF5efb7d493f",
		chainId: 1,
		decimals: 8,
		name: "JOBCHAIN",
		symbol: "JOB"
	},
	{
		address: "0xdfbc9050F5B01DF53512DCC39B4f2B2BBaCD517A",
		chainId: 1,
		decimals: 8,
		name: "Jobchain",
		symbol: "JOB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x347C099f110Ca6761779329D2879957b606b6aCE",
		chainId: 1,
		decimals: 18,
		name: "Joint Ventures",
		symbol: "JOINT"
	},
	{
		address: "0x174897edD3ce414084A009d22db31C7b7826400d",
		chainId: 1,
		decimals: 4,
		name: "JOON",
		symbol: "JOON",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x05F9Abf4B0C5661E83B92c056A8791d5CCd7Ca52",
		chainId: 1,
		decimals: 18,
		name: "JOOS Protocol",
		symbol: "JOOS"
	},
	{
		address: "0xdb455c71C1bC2de4e80cA451184041Ef32054001",
		chainId: 1,
		decimals: 18,
		name: "Jury.Online Token",
		symbol: "JOT"
	},
	{
		address: "0xDDe12a12A6f67156e0DA672be05c374e1B0a3e57",
		chainId: 1,
		decimals: 6,
		name: "JOYSO",
		symbol: "JOY"
	},
	{
		address: "0x2370f9d504c7a6E775bf6E14B3F12846b594cD53",
		chainId: 1,
		decimals: 18,
		name: "JPYC",
		symbol: "JPYC"
	},
	{
		address: "0x558A069a3A1a1e72398607b9E3577fCe1C67EA63",
		chainId: 1,
		decimals: 18,
		name: "JPYQ Stablecoin by",
		symbol: "JPYQ"
	},
	{
		address: "0x638155F4BD8F85d401Da32498D8866eE39A150B8",
		chainId: 1,
		decimals: 8,
		name: "Jurasaur",
		symbol: "JREX"
	},
	{
		address: "0x8A9C67fee641579dEbA04928c4BC45F66e26343A",
		chainId: 1,
		decimals: 18,
		name: "Jarvis Reward Token",
		symbol: "JRT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5046E860ff274fb8c66106B0Ffb8155849fB0787",
		chainId: 1,
		decimals: 8,
		name: "JavaScript Token",
		symbol: "JS"
	},
	{
		address: "0x2d184014b5658C453443AA87c8e9C4D57285620b",
		chainId: 1,
		decimals: 18,
		name: "JSE Token",
		symbol: "JSE"
	},
	{
		address: "0x1426cC6D52D1B14e2B3b1Cb04d57ea42B39c4c7c",
		chainId: 1,
		decimals: 9,
		name: "Jomon Shiba",
		symbol: "JSHIBA"
	},
	{
		address: "0xEb7355C2f217b3485a591332Fe13C8c5A76A581D",
		chainId: 1,
		decimals: 18,
		name: "Jubi Token",
		symbol: "JT"
	},
	{
		address: "0x2CaE31D2Ca104a951654456f46168Bc9F88FDc65",
		chainId: 1,
		decimals: 18,
		name: "JUIICE",
		symbol: "JUI"
	},
	{
		address: "0x889eFB523cc39590B8483EB9491890AC71407f64",
		chainId: 1,
		decimals: 18,
		name: "Moon Juice",
		symbol: "JUICE"
	},
	{
		address: "0xe6710e0CdA178f3D921f456902707B0d4C4A332B",
		chainId: 1,
		decimals: 4,
		name: "Julien",
		symbol: "JULIEN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4B1E80cAC91e2216EEb63e29B957eB91Ae9C2Be8",
		chainId: 1,
		decimals: 18,
		name: "Jupiter",
		symbol: "JUP"
	},
	{
		address: "0x14cA41Eecd7D81D5D13098586C0d2314EBa285bE",
		chainId: 1,
		decimals: 18,
		name: "JUST NETWORK",
		symbol: "JUS"
	},
	{
		address: "0x8275eBF521Dc217aa79C88132017A5BCEf001dd9",
		chainId: 1,
		decimals: 18,
		name: "Jewel",
		symbol: "JWL"
	},
	{
		address: "0xB9d99C33eA2d86EC5eC6b8A4dD816EBBA64404AF",
		chainId: 1,
		decimals: 18,
		name: "K21",
		symbol: "K21"
	},
	{
		address: "0xF6Bf74a97d78f2242376769EF1E79885Cf1F0C1c",
		chainId: 1,
		decimals: 18,
		name: "KAASO",
		symbol: "KAASO"
	},
	{
		address: "0xD9Ec3ff1f8be459Bb9369b4E79e9Ebcf7141C093",
		chainId: 1,
		decimals: 18,
		name: "KardiaChain",
		symbol: "KAI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfd30C9BEA1A952FEeEd2eF2C6B2Ff8A8FC4aAD07",
		chainId: 1,
		decimals: 18,
		name: "Polkally",
		symbol: "KALLY"
	},
	{
		address: "0xb2C62E0A1F5837356e399359eCc34fcC49A02093",
		chainId: 1,
		decimals: 18,
		name: "KAMAX Vault  NFTX",
		symbol: "KAMAX"
	},
	{
		address: "0x1410434b0346f5bE678d0FB554E5c7ab620f8f4a",
		chainId: 1,
		decimals: 18,
		name: "BitKan",
		symbol: "KAN"
	},
	{
		address: "0x6E765D26388A17A6e86c49A8E41DF3F58aBcd337",
		chainId: 1,
		decimals: 18,
		name: "Kangal",
		symbol: "KANGAL"
	},
	{
		address: "0xe15254a13D34F9700320330abcb7c7F857aF2Fb7",
		chainId: 1,
		decimals: 2,
		name: "KAPA COIN",
		symbol: "KAPA"
	},
	{
		address: "0xdfe691F37b6264a90Ff507EB359C45d55037951C",
		chainId: 1,
		decimals: 4,
		name: "Karma DAO",
		symbol: "KARMA"
	},
	{
		address: "0x2c50ba1ED5e4574C1b613b044Bd1876f0B0B87a9",
		chainId: 1,
		decimals: 18,
		name: "Kids Cash",
		symbol: "KASH"
	},
	{
		address: "0x14da230d6726C50F759Bc1838717F8CE6373509C",
		chainId: 1,
		decimals: 18,
		name: "Kambria",
		symbol: "KAT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe6410569602124506658Ff992F258616Ea2D4A3D",
		chainId: 1,
		decimals: 18,
		name: "Katana Finance",
		symbol: "KATANA"
	},
	{
		address: "0x17a4Ae8B1ea75d51AB0F2875B80452F7e34c272a",
		chainId: 1,
		decimals: 18,
		name: "Kawakami Inu",
		symbol: "KAWA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE6C3502997f97F9BDe34CB165fBce191065E068f",
		chainId: 1,
		decimals: 18,
		name: "Klondike BTC",
		symbol: "KBTC"
	},
	{
		address: "0x0D6DD9f68d24EC1d5fE2174f3EC8DAB52B52BaF5",
		chainId: 1,
		decimals: 18,
		name: "KMCC",
		symbol: "KC"
	},
	{
		address: "0x14EB60F5f270B059B0c788De0Ddc51Da86f8a06d",
		chainId: 1,
		decimals: 10,
		name: "Phantasma Energy",
		symbol: "KCAL"
	},
	{
		address: "0xdB80734b094a3F964DEdfD10e8946753aE0AC04c",
		chainId: 1,
		decimals: 18,
		name: "Keep Calm and Hodl",
		symbol: "KCH"
	},
	{
		address: "0x039B5649A59967e3e936D7471f9c3700100Ee1ab",
		chainId: 1,
		decimals: 6,
		name: "Kucoin Shares",
		symbol: "KCS"
	},
	{
		address: "0xf34960d9d60be18cC1D5Afc1A6F012A723a28811",
		chainId: 1,
		decimals: 6,
		name: "KuCoin Token",
		symbol: "KCS",
		extensions: {
			color: "#0093dd",
			isVerified: true
		}
	},
	{
		address: "0x95E40E065AFB3059dcabe4aaf404c1F92756603a",
		chainId: 1,
		decimals: 18,
		name: "King DAG",
		symbol: "KDAG"
	},
	{
		address: "0x7e00b63483C92975A3be0a71432277935326a618",
		chainId: 1,
		decimals: 18,
		name: "DroneFly",
		symbol: "KDC"
	},
	{
		address: "0x2aEa4Add166EBf38b63d09a75dE1a7b94Aa24163",
		chainId: 1,
		decimals: 0,
		name: "Kudos",
		symbol: "KDO"
	},
	{
		address: "0x106552C11272420aAd5d7e94f8AcAb9095A6c952",
		chainId: 1,
		decimals: 9,
		name: "Keanu Inu",
		symbol: "KEANU"
	},
	{
		address: "0x72D32ac1c5E66BfC5b08806271f8eEF915545164",
		chainId: 1,
		decimals: 0,
		name: "CryptoKEE",
		symbol: "KEE"
	},
	{
		address: "0x85Eee30c52B0b379b046Fb0F85F4f3Dc3009aFEC",
		chainId: 1,
		decimals: 18,
		name: "KEEP Token",
		symbol: "KEEP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc0114F14638a333A4D5C3b04F09b96372348A842",
		chainId: 1,
		decimals: 9,
		name: "Keisuke Inu",
		symbol: "KEI"
	},
	{
		address: "0x3fa400483487A489EC9b1dB29C4129063EEC4654",
		chainId: 1,
		decimals: 18,
		name: "Cryptokek",
		symbol: "KEK"
	},
	{
		address: "0x4ABB9cC67BD3da9Eb966d1159A71a0e68BD15432",
		chainId: 1,
		decimals: 18,
		name: "KelVPN",
		symbol: "KEL"
	},
	{
		address: "0x672D7b3333d0F069a28b73A268bC6eAeC65F2E1a",
		chainId: 1,
		decimals: 9,
		name: "Kelpie Inu",
		symbol: "KELPIE"
	},
	{
		address: "0x6A7Ef4998eB9d0f706238756949F311a59E05745",
		chainId: 1,
		decimals: 18,
		name: "Kenysians Network",
		symbol: "KEN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7841B2A48D1F6e78ACeC359FEd6D874Eb8a0f63c",
		chainId: 1,
		decimals: 4,
		name: "KERMAN",
		symbol: "KERMAN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x16980b3B4a3f9D89E33311B5aa8f80303E5ca4F8",
		chainId: 1,
		decimals: 6,
		name: "KIRA Network",
		symbol: "KEX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4CC19356f2D37338b9802aa8E8fc58B0373296E7",
		chainId: 1,
		decimals: 18,
		name: "SelfKey",
		symbol: "KEY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4Cd988AfBad37289BAAf53C13e98E2BD46aAEa8c",
		chainId: 1,
		decimals: 18,
		name: "Key",
		symbol: "KEY"
	},
	{
		address: "0xB8647e90C0645152Fccf4d9AbB6B59Eb4AA99052",
		chainId: 1,
		decimals: 18,
		name: "KeyFi",
		symbol: "KEYFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xcE13aBCE0DB5A8224616ef24D3979d466F19CF90",
		chainId: 1,
		decimals: 18,
		name: "Rebit",
		symbol: "KEYT"
	},
	{
		address: "0xE63684BcF2987892CEfB4caA79BD21b34e98A291",
		chainId: 1,
		decimals: 18,
		name: "Chicken",
		symbol: "KFC"
	},
	{
		address: "0x3B0E1508faE33FFba8d3EA64851cF98C02F1c61B",
		chainId: 1,
		decimals: 9,
		name: "KeFi Token",
		symbol: "KFI"
	},
	{
		address: "0xa8262Eb913FccEa4C3f77fc95b8b4043B384cFbB",
		chainId: 1,
		decimals: 18,
		name: "Krypton Galaxy Coin",
		symbol: "KGC"
	},
	{
		address: "0x55Eb5288c9b65037a4cd2289637f38A4F9DB3a6B",
		chainId: 1,
		decimals: 18,
		name: "KAWANGGAWA",
		symbol: "KGW"
	},
	{
		address: "0x27695E09149AdC738A978e9A678F99E4c39e9eb9",
		chainId: 1,
		decimals: 8,
		name: "KICK",
		symbol: "KICK"
	},
	{
		address: "0xC12D1c73eE7DC3615BA4e37E4ABFdbDDFA38907E",
		chainId: 1,
		decimals: 8,
		name: "KickToken",
		symbol: "KICK"
	},
	{
		address: "0x824a50dF33AC1B41Afc52f4194E2e8356C17C3aC",
		chainId: 1,
		decimals: 10,
		name: "Kick",
		symbol: "KICK"
	},
	{
		address: "0xD91a6162F146EF85922d9A15eE6eB14A00344586",
		chainId: 1,
		decimals: 18,
		name: "SESSIA",
		symbol: "KICKS"
	},
	{
		address: "0x177BA0cac51bFC7eA24BAd39d81dcEFd59d74fAa",
		chainId: 1,
		decimals: 18,
		name: "KittenFinance",
		symbol: "KIF"
	},
	{
		address: "0x1E18821E69B9FAA8e6e75DFFe54E7E25754beDa0",
		chainId: 1,
		decimals: 18,
		name: "KIMCHI finance",
		symbol: "KIMCHI"
	},
	{
		address: "0x818Fc6C2Ec5986bc6E2CBf00939d90556aB12ce5",
		chainId: 1,
		decimals: 18,
		name: "Kin Foundation",
		symbol: "KIN"
	},
	{
		address: "0x4618519de4C304F3444ffa7f812dddC2971cc688",
		chainId: 1,
		decimals: 8,
		name: "Kind Ads Token",
		symbol: "KIND"
	},
	{
		address: "0xCbfef8fdd706cde6F208460f2Bf39Aa9c785F05D",
		chainId: 1,
		decimals: 18,
		name: "KINE",
		symbol: "KINE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd2057d71fE3F5b0dc1E3e7722940E1908Fc72078",
		chainId: 1,
		decimals: 18,
		name: "King Swap",
		symbol: "KING"
	},
	{
		address: "0x64E65D352f6A2949463B3a7595911B61BBaFc63E",
		chainId: 1,
		decimals: 18,
		name: "Khipu Token",
		symbol: "KIP"
	},
	{
		address: "0x1FD7E8C718C153FA97A5525c227A098007dcFddA",
		chainId: 1,
		decimals: 9,
		name: "Kirby Inu",
		symbol: "KIRBY"
	},
	{
		address: "0xa6368D7DF5731EAE98cCC7E4e1Bf458BB0855E9d",
		chainId: 1,
		decimals: 18,
		name: "Kirby Reloaded",
		symbol: "KIRBYRELOADED"
	},
	{
		address: "0xB1191F691A355b43542Bea9B8847bc73e7Abb137",
		chainId: 1,
		decimals: 18,
		name: "Kirobo",
		symbol: "KIRO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA2b4C0Af19cC16a6CfAcCe81F192B024d625817D",
		chainId: 1,
		decimals: 9,
		name: "Kishu Inu",
		symbol: "KISHU"
	},
	{
		address: "0x7866E48C74CbFB8183cd1a929cd9b95a7a5CB4F4",
		chainId: 1,
		decimals: 18,
		name: "DexKit",
		symbol: "KIT"
	},
	{
		address: "0x080eB7238031F97Ff011e273D6CaD5ad0c2dE532",
		chainId: 1,
		decimals: 18,
		name: "Kittoken",
		symbol: "KIT"
	},
	{
		address: "0x6D645193001e674e62aAa0eaC5d56E4D21BBCCeF",
		chainId: 1,
		decimals: 18,
		name: "Kitsune Inu",
		symbol: "KITSU"
	},
	{
		address: "0x9b9fB226E98C4e90DB2830C9aefa9cfcBE3b000a",
		chainId: 1,
		decimals: 18,
		name: "KITTY Vault  NFTX",
		symbol: "KITTY"
	},
	{
		address: "0x2BF91c18Cd4AE9C2f2858ef9FE518180F7B5096D",
		chainId: 1,
		decimals: 8,
		name: "KIWI Token",
		symbol: "KIWI"
	},
	{
		address: "0x368C5290b13cAA10284Db58B4ad4F3E9eE8bf4c9",
		chainId: 1,
		decimals: 18,
		name: "Kineko",
		symbol: "KKO"
	},
	{
		address: "0x382f0160c24f5c515A19f155BAc14d479433A407",
		chainId: 1,
		decimals: 9,
		name: "KleeKai",
		symbol: "KLEE"
	},
	{
		address: "0xB97D5cF2864FB0D08b34a484FF48d5492B2324A0",
		chainId: 1,
		decimals: 18,
		name: "Klondike Finance v1",
		symbol: "KLON"
	},
	{
		address: "0xbf15797BB5E47F6fB094A4abDB2cfC43F77179Ef",
		chainId: 1,
		decimals: 18,
		name: "Klondike Finance v2",
		symbol: "KLONX"
	},
	{
		address: "0xc97A5cdF41BAfD51c8dBE82270097e704d748b92",
		chainId: 1,
		decimals: 7,
		name: "Ether Clown",
		symbol: "KLOWN"
	},
	{
		address: "0xe8D17542dfe79Ff4FBd4b850f2d39DC69c4489a2",
		chainId: 1,
		decimals: 9,
		name: "KiloAmple",
		symbol: "KMPL"
	},
	{
		address: "0x2BDD6c9bf1bf396a37501AAE53751B9946B503Da",
		chainId: 1,
		decimals: 18,
		name: "Korea Medical TBA",
		symbol: "KMTBA"
	},
	{
		address: "0x9b8C184439245B7bb24a5B2EC51Ec81c39589E8A",
		chainId: 1,
		decimals: 18,
		name: "KIMEX",
		symbol: "KMX"
	},
	{
		address: "0xdd974D5C2e2928deA5F71b9825b8b646686BD200",
		chainId: 1,
		decimals: 18,
		name: "Kyber",
		symbol: "KNC",
		extensions: {
			color: "#31CB9E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xdeFA4e8a7bcBA345F687a2f1456F5Edd9CE97202",
		chainId: 1,
		decimals: 18,
		name: "Kyber Network Cryst",
		symbol: "KNC"
	},
	{
		address: "0x8E5610ab5E39d26828167640EA29823fe1dD5843",
		chainId: 1,
		decimals: 8,
		name: "KanadeCoin",
		symbol: "KNDC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfF5c25D2F40B47C4a37f989DE933E26562Ef0Ac0",
		chainId: 1,
		decimals: 16,
		name: "Kora Network",
		symbol: "KNT"
	},
	{
		address: "0xCb4e8CafEDa995da5cEdfda5205BD5664a12b848",
		chainId: 1,
		decimals: 18,
		name: "Shabu Shabu",
		symbol: "KOBE"
	},
	{
		address: "0xFBeef911Dc5821886e1dda71586d90eD28174B7d",
		chainId: 1,
		decimals: 0,
		name: "KnownOrigin",
		symbol: "KODA"
	},
	{
		address: "0x66d28cb58487a7609877550E1a34691810A6b9FC",
		chainId: 1,
		decimals: 8,
		name: "Koinos",
		symbol: "KOIN"
	},
	{
		address: "0x1c8266A4369aF6d80Df2659Ba47B3c98f35cB8bE",
		chainId: 1,
		decimals: 18,
		name: "Koji",
		symbol: "KOJI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7BD6a4E7DB3A34c485A8DD02b30B6565e3bbC633",
		chainId: 1,
		decimals: 18,
		name: "KOK Coin",
		symbol: "KOK"
	},
	{
		address: "0x7c3E3eAE4d893d11C61E74d5187C962Ba5744A3B",
		chainId: 1,
		decimals: 18,
		name: "KokoSwap",
		symbol: "KOKO"
	},
	{
		address: "0x878CF148ccBb50426043a9AFFe54Ba408221C7fA",
		chainId: 1,
		decimals: 8,
		name: "Crypto Kombat",
		symbol: "KOMBAT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6CfB6dF56BbdB00226AeFfCdb2CD1FE8Da1ABdA7",
		chainId: 1,
		decimals: 18,
		name: "Komet",
		symbol: "KOMET"
	},
	{
		address: "0x41Bc0913ED789428E107C4eA9ED007815c5A8230",
		chainId: 1,
		decimals: 18,
		name: "Kompass",
		symbol: "KOMP"
	},
	{
		address: "0x7C3CF2D43b50E78E27A81293a43fcAc45796fB54",
		chainId: 1,
		decimals: 9,
		name: "Kong Defi",
		symbol: "KONG"
	},
	{
		address: "0x5A235C0b4cB8d0e80a5c3bF4d2faD5c32E440884",
		chainId: 1,
		decimals: 18,
		name: "KONGZ Vault  NFTX",
		symbol: "KONGZ"
	},
	{
		address: "0x850aAB69f0e0171A9a49dB8BE3E71351c8247Df4",
		chainId: 1,
		decimals: 18,
		name: "Konomi Network",
		symbol: "KONO"
	},
	{
		address: "0x1cEB5cB57C4D4E2b2433641b95Dd330A33185A44",
		chainId: 1,
		decimals: 18,
		name: "Keep3rV1",
		symbol: "KP3R",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA89ac6e529aCf391CfbBD377F3aC9D93eae9664e",
		chainId: 1,
		decimals: 18,
		name: "Keep4r",
		symbol: "KP4R"
	},
	{
		address: "0xc89B4a8a121Dd3E726fE7515e703936cF83e3350",
		chainId: 1,
		decimals: 18,
		name: "Kper Network",
		symbol: "KPER"
	},
	{
		address: "0x7B7983967409Fce461EA8bbDF9ED37631b1d59C9",
		chainId: 1,
		decimals: 18,
		name: "KPOP Coin",
		symbol: "KPOP"
	},
	{
		address: "0xb5C33F965C8899D255c34CDD2A3efA8AbCbB3DeA",
		chainId: 1,
		decimals: 18,
		name: "KPRCoin",
		symbol: "KPR"
	},
	{
		address: "0x00865a6CA2529862Be9344C4f88800741B737Ee9",
		chainId: 1,
		decimals: 18,
		name: "KOPEX",
		symbol: "KPX"
	},
	{
		address: "0x9588Fc24a9796fBd870951A2CD54C6f1f24b2E7c",
		chainId: 1,
		decimals: 8,
		name: "Kronn",
		symbol: "KREX"
	},
	{
		address: "0x32A8cD4D04D5F2e5De30AD73ef0A377eca2Fdd98",
		chainId: 1,
		decimals: 18,
		name: "Karaganda Token",
		symbol: "KRG"
	},
	{
		address: "0xeef8102A0D46D508f171d7323BcEffc592835F13",
		chainId: 1,
		decimals: 18,
		name: "Krios",
		symbol: "KRI"
	},
	{
		address: "0x464eBE77c293E473B48cFe96dDCf88fcF7bFDAC0",
		chainId: 1,
		decimals: 18,
		name: "KRYLL",
		symbol: "KRL"
	},
	{
		address: "0xAefad686f4b894ce4F9c74af755AB4651E420EbA",
		chainId: 1,
		decimals: 18,
		name: "Krisper",
		symbol: "KRP"
	},
	{
		address: "0xcAAfF72A8CbBfc5Cf343BA4e26f65a257065bFF1",
		chainId: 1,
		decimals: 18,
		name: "Wrapped KRT",
		symbol: "KRT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbD4AB8b9C26c4888e2792cAC6d5793Efea9eBb20",
		chainId: 1,
		decimals: 18,
		name: "KARTIY",
		symbol: "KRTY"
	},
	{
		address: "0x4CC8486F2F3dCE2d3B5E27057Cf565e16906D12D",
		chainId: 1,
		decimals: 18,
		name: "KRW Gluwacoin",
		symbol: "KRW-G"
	},
	{
		address: "0xf54B304e2e4b28c7E46619D1A340F9b2B72383D7",
		chainId: 1,
		decimals: 18,
		name: "Kranz Token",
		symbol: "KRZ"
	},
	{
		address: "0x990E081A7B7d3Ccba26a2f49746A68CC4fF73280",
		chainId: 1,
		decimals: 18,
		name: "KStarCoin",
		symbol: "KSC"
	},
	{
		address: "0x3F09400313e83d53366147e3ea0e4e2279D80850",
		chainId: 1,
		decimals: 18,
		name: "Kush Finance",
		symbol: "KSEED",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x049e119413aB1f1b0fd836e657e3e4BA3ad9CaB8",
		chainId: 1,
		decimals: 18,
		name: "Kesef.Finance",
		symbol: "KSF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x44bBb689Aa13315Ea5D56EBdA2d263e53cb4b0B7",
		chainId: 1,
		decimals: 18,
		name: "Kskin",
		symbol: "KSK"
	},
	{
		address: "0x9827F6E8Df0CcC584ff7b37144De8bac7c446385",
		chainId: 1,
		decimals: 18,
		name: "Kitcoin",
		symbol: "KTC"
	},
	{
		address: "0x24E3794605C84E580EEA4972738D633E8a7127c8",
		chainId: 1,
		decimals: 18,
		name: "Katalyo",
		symbol: "KTLYO"
	},
	{
		address: "0x491E136FF7FF03E6aB097E54734697Bb5802FC1C",
		chainId: 1,
		decimals: 18,
		name: "Kattana",
		symbol: "KTN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9F284E1337A815fe77D2Ff4aE46544645B20c5ff",
		chainId: 1,
		decimals: 18,
		name: "Darwinia Commitment Token",
		symbol: "KTON",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x14cC8DfaF2258E1B8B2869300dBa1B734dc0fE43",
		chainId: 1,
		decimals: 18,
		name: "K Tune",
		symbol: "KTT"
	},
	{
		address: "0xc59cb23295e2DEEB66bd090ACB6B02BE8d30A11F",
		chainId: 1,
		decimals: 10,
		name: "Kublaicoin",
		symbol: "KUB"
	},
	{
		address: "0x4f76E85d067e219779A863ff18577846b3152F1F",
		chainId: 1,
		decimals: 8,
		name: "KuboCoin",
		symbol: "KUBO"
	},
	{
		address: "0xdf1338FbAfe7aF1789151627B886781ba556eF9a",
		chainId: 1,
		decimals: 18,
		name: "Kuende",
		symbol: "KUE"
	},
	{
		address: "0xE6b7743e2B9Aa2d0A9B163C4e69186ABb57817D9",
		chainId: 1,
		decimals: 18,
		name: "Kuky Star",
		symbol: "KUKY"
	},
	{
		address: "0x48C276e8d03813224bb1e55F953adB6d02FD3E02",
		chainId: 1,
		decimals: 18,
		name: "Kuma Inu",
		symbol: "KUMA"
	},
	{
		address: "0x65d9bC970aA9B2413027fA339F7f179B3F3f2604",
		chainId: 1,
		decimals: 18,
		name: "QIAN Governance Tok",
		symbol: "KUN"
	},
	{
		address: "0xc6c6224Cf32F5B0850Ddf740B47cD1eD31AbeaD4",
		chainId: 1,
		decimals: 8,
		name: "KUPP",
		symbol: "KUPP"
	},
	{
		address: "0xF70d160102cF7a22c1E432d6928a9d625Db91170",
		chainId: 1,
		decimals: 18,
		name: "Kuverit",
		symbol: "KUV"
	},
	{
		address: "0x8868ff4893113193313465A0Ccc5F1bd370D7751",
		chainId: 1,
		decimals: 18,
		name: "KVI",
		symbol: "KVI"
	},
	{
		address: "0x241bA672574A78a3A604CDd0a94429A73a84a324",
		chainId: 1,
		decimals: 18,
		name: "4New",
		symbol: "KWATT"
	},
	{
		address: "0x286C0936c7Eaf6651099Ab5DAb9ee5A6cB5d229D",
		chainId: 1,
		decimals: 18,
		name: "KwikSwap Protocol",
		symbol: "KWIK"
	},
	{
		address: "0x016396044709EB3edc69C44f4d5Fa6996917E4e8",
		chainId: 1,
		decimals: 18,
		name: "Token KingXChain",
		symbol: "KXC"
	},
	{
		address: "0x43244C686a014C49D3D5B8c4b20b4e3faB0cbDA7",
		chainId: 1,
		decimals: 18,
		name: "kxUSD",
		symbol: "KXUSD"
	},
	{
		address: "0x67B6D479c7bB412C54e03dCA8E1Bc6740ce6b99C",
		chainId: 1,
		decimals: 18,
		name: "Kylin Network",
		symbol: "KYL"
	},
	{
		address: "0x9541FD8B9b5FA97381783783CeBF2F5fA793C262",
		chainId: 1,
		decimals: 8,
		name: "KaizenCoin",
		symbol: "KZN"
	},
	{
		address: "0xBbff34E47E559ef680067a6B1c980639EEb64D24",
		chainId: 1,
		decimals: 18,
		name: "Leverj Gluon",
		symbol: "L2"
	},
	{
		address: "0xeE0f286776639cD363Da810DAF3e0623F82576b0",
		chainId: 1,
		decimals: 18,
		name: "Lung Protocol",
		symbol: "L2P",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdeF1da03061DDd2A5Ef6c59220C135dec623116d",
		chainId: 1,
		decimals: 18,
		name: "Lepricon",
		symbol: "L3P"
	},
	{
		address: "0xE50365f5D679CB98a1dd62D6F6e58e59321BcdDf",
		chainId: 1,
		decimals: 18,
		name: "LATOKEN",
		symbol: "LA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x106d3C66d22D2DD0446df23D7F5960752994d600",
		chainId: 1,
		decimals: 9,
		name: "LabraCoin",
		symbol: "LABRA"
	},
	{
		address: "0x8b0E42F366bA502d787BB134478aDfAE966C8798",
		chainId: 1,
		decimals: 18,
		name: "LABS Group",
		symbol: "LABS"
	},
	{
		address: "0x1287c0509df9a475Ef178471aB2132b9dfD312B3",
		chainId: 1,
		decimals: 4,
		name: "LADZ",
		symbol: "LADZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCB58418Aa51Ba525aEF0FE474109C0354d844b7c",
		chainId: 1,
		decimals: 9,
		name: "Laika Protocol",
		symbol: "LAIKA"
	},
	{
		address: "0xfD107B473AB90e8Fbd89872144a3DC92C40Fa8C9",
		chainId: 1,
		decimals: 18,
		name: "LALA World",
		symbol: "LALA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8971f9fd7196e5cEE2C1032B50F656855af7Dd26",
		chainId: 1,
		decimals: 18,
		name: "Lambda",
		symbol: "LAMB"
	},
	{
		address: "0x50f5474724e0Ee42D9a4e711ccFB275809Fd6d4a",
		chainId: 1,
		decimals: 0,
		name: "Sandbox's LANDs",
		symbol: "LAND"
	},
	{
		address: "0x0e2ef8AeCB3c01Ad5D596f1B67134e178199984D",
		chainId: 1,
		decimals: 18,
		name: "LandBox",
		symbol: "LAND"
	},
	{
		address: "0xF87E31492Faf9A91B02Ee0dEAAd50d51d56D5d4d",
		chainId: 1,
		decimals: 0,
		name: "Decentraland LAND",
		symbol: "LAND",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6226caA1857AFBc6DFB6ca66071Eb241228031A1",
		chainId: 1,
		decimals: 18,
		name: "LinkArt",
		symbol: "LAR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2f85E502a988AF76f7ee6D83b7db8d6c0A823bf9",
		chainId: 1,
		decimals: 8,
		name: "LatiumX",
		symbol: "LATX"
	},
	{
		address: "0x0fF6ffcFDa92c53F615a4A75D982f399C989366b",
		chainId: 1,
		decimals: 18,
		name: "Unilayer",
		symbol: "LAYER",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfe56E974C1C85e9351325fb2D62963A022Ad624F",
		chainId: 1,
		decimals: 18,
		name: "UnilayerX",
		symbol: "LAYERX"
	},
	{
		address: "0xfe5F141Bf94fE84bC28deD0AB966c16B17490657",
		chainId: 1,
		decimals: 18,
		name: "LibraToken",
		symbol: "LBA"
	},
	{
		address: "0xb15AE165000c8D7B69D2a82e425E110668C73ad5",
		chainId: 1,
		decimals: 9,
		name: "LinkBased",
		symbol: "LBD"
	},
	{
		address: "0x932d447274dCFfB4Aea4f0944d3C804e88056416",
		chainId: 1,
		decimals: 18,
		name: "Lemon Bet",
		symbol: "LBET"
	},
	{
		address: "0xd9af2d11d788da0097076f4Eb21bd1C5533743D9",
		chainId: 1,
		decimals: 18,
		name: "Legal Block",
		symbol: "LBK"
	},
	{
		address: "0x9cB1AEaFcc8A9406632C5B084246Ea72f62d37b6",
		chainId: 1,
		decimals: 8,
		name: "LBK",
		symbol: "LBK"
	},
	{
		address: "0x93eCD2ecDFb91aB2fEe28A8779A6adfe2851cda6",
		chainId: 1,
		decimals: 18,
		name: "LoanBurst",
		symbol: "LBURST"
	},
	{
		address: "0xfFE510a92434a0Df346C5E72a3494b043Cf249eB",
		chainId: 1,
		decimals: 18,
		name: "LUX BIO EXCHANGE CO",
		symbol: "LBXC"
	},
	{
		address: "0x2c644C3bBeA053ed95a6bC04A94C9CE928Ff9881",
		chainId: 1,
		decimals: 8,
		name: "Lance Coin",
		symbol: "LCE"
	},
	{
		address: "0x6e1A58e7E9e801f32bb82462636a8a2E7B65e036",
		chainId: 1,
		decimals: 18,
		name: "LCG",
		symbol: "LCG"
	},
	{
		address: "0x86911B82BfA596e9377836838AC1f0d9AD4Ecc19",
		chainId: 1,
		decimals: 18,
		name: "LCMS",
		symbol: "LCMS"
	},
	{
		address: "0xAA19961b6B858D9F18a115f25aa1D98ABc1fdBA8",
		chainId: 1,
		decimals: 18,
		name: "LocalCoinSwap",
		symbol: "LCS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x05C7065d644096a4E4C3FE24AF86e36dE021074b",
		chainId: 1,
		decimals: 18,
		name: "LendConnect",
		symbol: "LCT"
	},
	{
		address: "0x4A37A91eec4C97F9090CE66d21D3B3Aadf1aE5aD",
		chainId: 1,
		decimals: 18,
		name: "LiquorChain Token",
		symbol: "LCT"
	},
	{
		address: "0x037A54AaB062628C9Bbae1FDB1583c195585fe41",
		chainId: 1,
		decimals: 18,
		name: "LCX",
		symbol: "LCX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5102791cA02FC3595398400BFE0e33d7B6C82267",
		chainId: 1,
		decimals: 18,
		name: "LEADCOIN",
		symbol: "LDC"
	},
	{
		address: "0x5479d565E549f3ECdBDe4aB836d02D86e0D6A8C7",
		chainId: 1,
		decimals: 18,
		name: "Lendefi",
		symbol: "LDFI"
	},
	{
		address: "0xb29663Aa4E2e81e425294193616c1B102B70a158",
		chainId: 1,
		decimals: 18,
		name: "Ludena Protocol",
		symbol: "LDN"
	},
	{
		address: "0x5A98FcBEA516Cf06857215779Fd812CA3beF1B32",
		chainId: 1,
		decimals: 18,
		name: "Lido DAO",
		symbol: "LDO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9eFa0e2387E4CBA02a6E4E6594b8f4Dd209a0b93",
		chainId: 1,
		decimals: 0,
		name: "LondonCoin",
		symbol: "LDX"
	},
	{
		address: "0x1dD80016e3d4ae146Ee2EBB484e8edD92dacC4ce",
		chainId: 1,
		decimals: 18,
		name: "Lead Token",
		symbol: "LEAD"
	},
	{
		address: "0x27C70Cd1946795B66be9d954418546998b546634",
		chainId: 1,
		decimals: 18,
		name: "Doge Killer",
		symbol: "LEASH"
	},
	{
		address: "0x72De803b67B6AB05B61EFab2Efdcd414D16eBF6D",
		chainId: 1,
		decimals: 18,
		name: "LedgerScore",
		symbol: "LED"
	},
	{
		address: "0x041A36b015486941Ce8d5f2C7ff2E88f97390640",
		chainId: 1,
		decimals: 4,
		name: "Ledgis",
		symbol: "LED"
	},
	{
		address: "0x5b26C5D0772E5bbaC8b3182AE9a13f9BB2D03765",
		chainId: 1,
		decimals: 8,
		name: "Education Ecosystem",
		symbol: "LEDU"
	},
	{
		address: "0xC741f06082AA47F93729070aD0dD95E223Bda091",
		chainId: 1,
		decimals: 8,
		name: "Education Ecosystem",
		symbol: "LEDU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC166F976ce9926A3205b145Af104eB0E4b38b5C0",
		chainId: 1,
		decimals: 18,
		name: "LINK ETH Growth Alp",
		symbol: "LEGA"
	},
	{
		address: "0x8a63bE90F095F6777be3Ed25D9fC7CD2a63DDb30",
		chainId: 1,
		decimals: 18,
		name: "LINK ETH Long Only",
		symbol: "LELOAP"
	},
	{
		address: "0xf45f6c8bB3d77eA762175b8f7ca4D251941649fA",
		chainId: 1,
		decimals: 18,
		name: "Lemond",
		symbol: "LEMD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x60C24407d01782C2175D32fe7C8921ed732371D1",
		chainId: 1,
		decimals: 18,
		name: "LemoChain",
		symbol: "LEMO"
	},
	{
		address: "0xB5AE848EdB296C21259b7467331467d2647eEcDf",
		chainId: 1,
		decimals: 18,
		name: "Lemo",
		symbol: "LEMO"
	},
	{
		address: "0xd6e354F07319e2474491D8c7c712137bEe6862a2",
		chainId: 1,
		decimals: 0,
		name: "Lemo",
		symbol: "LEMO"
	},
	{
		address: "0x80fB784B7eD66730e8b1DBd9820aFD29931aab03",
		chainId: 1,
		decimals: 18,
		name: "EthLend",
		symbol: "LEND",
		extensions: {
			color: "#109FCA",
			isVerified: true
		}
	},
	{
		address: "0xf97b5d65Da6b0468b90D531ddae2a69843e6797d",
		chainId: 1,
		decimals: 18,
		name: "LEOcoin",
		symbol: "LEO"
	},
	{
		address: "0x2AF5D2aD76741191D15Dfe7bF6aC92d4Bd912Ca3",
		chainId: 1,
		decimals: 18,
		name: "LEO Token",
		symbol: "LEO"
	},
	{
		address: "0x3c955e35b6da1fF623D38D750c85b3Aed89A10c1",
		chainId: 1,
		decimals: 18,
		name: "3X Short LEO Token",
		symbol: "LEOBEAR"
	},
	{
		address: "0xC2685307Ef2B8842fbf3DeF432408C46Bd0420fd",
		chainId: 1,
		decimals: 18,
		name: "3X Long LEO Token",
		symbol: "LEOBULL"
	},
	{
		address: "0x62786Eeacc9246b4018e0146cb7a3efeACD9459D",
		chainId: 1,
		decimals: 18,
		name: "Less Network",
		symbol: "LESS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFA3118B34522580c35Ae27F6cf52da1dBb756288",
		chainId: 1,
		decimals: 6,
		name: "Linkeye",
		symbol: "LET"
	},
	{
		address: "0x0F4CA92660Efad97a9a70CB0fe969c755439772C",
		chainId: 1,
		decimals: 9,
		name: "Leverj",
		symbol: "LEV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbc194e6f748a222754C3E8b9946922c09E7d4e91",
		chainId: 1,
		decimals: 18,
		name: "Lever Network",
		symbol: "LEV"
	},
	{
		address: "0x09970aec766b6f3223aCA9111555E99DC50Ff13a",
		chainId: 1,
		decimals: 18,
		name: "Levolution",
		symbol: "LEVL"
	},
	{
		address: "0x88665A7556E1B3C939D6661248116886845249a8",
		chainId: 1,
		decimals: 18,
		name: "Linkflow",
		symbol: "LF"
	},
	{
		address: "0xafcE9B78D409bF74980CACF610AFB851BF02F257",
		chainId: 1,
		decimals: 18,
		name: "Lift Kitchen BTC",
		symbol: "LFBTC"
	},
	{
		address: "0xe0c8087CE1a17bdd5D6c12eb52F8d7efF7791987",
		chainId: 1,
		decimals: 18,
		name: "Linfinity",
		symbol: "LFC"
	},
	{
		address: "0xE09B10EFA59F6E17052E9A2D947bAd6214E7CC90",
		chainId: 1,
		decimals: 18,
		name: "Lift Kitchen ETH",
		symbol: "LFETH"
	},
	{
		address: "0xc798cd1c49db0E297312E4c682752668CE1dB2AD",
		chainId: 1,
		decimals: 5,
		name: "LifeRun Coin",
		symbol: "LFR"
	},
	{
		address: "0x6Fe536a1d595C12cbb407C5B2C03999f658A5C72",
		chainId: 1,
		decimals: 18,
		name: "LGame",
		symbol: "LG"
	},
	{
		address: "0xc520F3Ac303a107D8F4B08b326B6ea66A4f961cd",
		chainId: 1,
		decimals: 18,
		name: "LG",
		symbol: "LG"
	},
	{
		address: "0x2bc8B955F6a0Ed5a9D4146DED61aEC0bB74EcF67",
		chainId: 1,
		decimals: 18,
		name: "Logistics Coin",
		symbol: "LGC"
	},
	{
		address: "0x3b3A5557F119106270017A7662488C1FF6312A6b",
		chainId: 1,
		decimals: 18,
		name: "LOGISTICS",
		symbol: "LGC"
	},
	{
		address: "0xaE697F994Fc5eBC000F8e22EbFfeE04612f98A0d",
		chainId: 1,
		decimals: 18,
		name: "LGCY Network",
		symbol: "LGCY"
	},
	{
		address: "0x59061b6f26BB4A9cE5828A19d35CFD5A4B80F056",
		chainId: 1,
		decimals: 8,
		name: "Legends",
		symbol: "LGD"
	},
	{
		address: "0x0a50C93c762fDD6E56D86215C24AaAD43aB629aa",
		chainId: 1,
		decimals: 8,
		name: "LGO",
		symbol: "LGO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x27778E14Ce36d3B85e1efFeB43816a17bBB7088A",
		chainId: 1,
		decimals: 18,
		name: "Lyfe Gold",
		symbol: "LGOLD"
	},
	{
		address: "0x2eb86e8fC520E0F6Bb5D9Af08F924fe70558Ab89",
		chainId: 1,
		decimals: 8,
		name: "Logarithm",
		symbol: "LGR"
	},
	{
		address: "0x0778Cc2E8bBAd3d483E82371606D100cc8604522",
		chainId: 1,
		decimals: 8,
		name: "LHCoin",
		symbol: "LHCOIN"
	},
	{
		address: "0x0bf6261297198D91D4FA460242C69232146A5703",
		chainId: 1,
		decimals: 18,
		name: "Libera",
		symbol: "LIB"
	},
	{
		address: "0x3FD2E747CEA0E8A78f1827ea2FfD3334628A600b",
		chainId: 1,
		decimals: 18,
		name: "Banklife",
		symbol: "LIB"
	},
	{
		address: "0xE6DfBF1FAcA95036B8E76e1Fb28933D025B76Cc0",
		chainId: 1,
		decimals: 18,
		name: "Libereum",
		symbol: "LIBER"
	},
	{
		address: "0x49184E6dAe8C8ecD89d8Bdc1B950c597b8167c90",
		chainId: 1,
		decimals: 2,
		name: "Libertas",
		symbol: "LIBERTAS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc0ea83113038987d974FE667831a36E442e661E7",
		chainId: 1,
		decimals: 18,
		name: "Libfx",
		symbol: "LIBFX"
	},
	{
		address: "0x449efE48ad7cD423BAB056276639f8120cd4F9a3",
		chainId: 1,
		decimals: 18,
		name: "LibreFreelencer",
		symbol: "LIBREF"
	},
	{
		address: "0x0417912b3a7AF768051765040A55BB0925D4DDcF",
		chainId: 1,
		decimals: 18,
		name: "Liquidity Dividends Protocol",
		symbol: "LID",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaB37e1358b639Fd877f015027Bb62d3ddAa7557E",
		chainId: 1,
		decimals: 8,
		name: "Lien",
		symbol: "LIEN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEB9951021698B42e4399f9cBb6267Aa35F82D59D",
		chainId: 1,
		decimals: 18,
		name: "Líf",
		symbol: "LIF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfF18DBc487b4c2E3222d115952bABfDa8BA52F5F",
		chainId: 1,
		decimals: 18,
		name: "LIFE",
		symbol: "LIFE"
	},
	{
		address: "0x2Ad128fBEFF2B781D028148DEc82bBe2498Dc08e",
		chainId: 1,
		decimals: 4,
		name: "LIFE",
		symbol: "LIFE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf9209d900f7ad1DC45376a2caA61c78f6dEA53B6",
		chainId: 1,
		decimals: 18,
		name: "Lift Kitchen",
		symbol: "LIFT"
	},
	{
		address: "0x02F61Fd266DA6E8B102D4121f5CE7b992640CF98",
		chainId: 1,
		decimals: 18,
		name: "LikeCoin",
		symbol: "LIKE"
	},
	{
		address: "0x9D0B65a76274645B29e4cc41B8f23081fA09f4A3",
		chainId: 1,
		decimals: 18,
		name: "iMe Lab",
		symbol: "LIME"
	},
	{
		address: "0x400b1d8a7dd8C471026B2c8CBe1062b27d120538",
		chainId: 1,
		decimals: 8,
		name: "Limestone Network",
		symbol: "LIMEX"
	},
	{
		address: "0x1712Aad2C773ee04bdC9114b32163c058321CD85",
		chainId: 1,
		decimals: 18,
		name: "LimitSwap",
		symbol: "LIMIT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC05d14442A510De4D3d71a3d316585aA0CE32b50",
		chainId: 1,
		decimals: 18,
		name: "LINA",
		symbol: "LINA"
	},
	{
		address: "0x3E9BC21C9b189C09dF3eF1B824798658d5011937",
		chainId: 1,
		decimals: 18,
		name: "Linear",
		symbol: "LINA"
	},
	{
		address: "0x514910771AF9Ca656af840dff83E8264EcF986CA",
		chainId: 1,
		decimals: 18,
		name: "Chainlink",
		symbol: "LINK",
		extensions: {
			color: "#1A56F0",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xE2E6D4BE086c6938B53B22144855eef674281639",
		chainId: 1,
		decimals: 18,
		name: "Link Platform",
		symbol: "LINK Platform"
	},
	{
		address: "0x578B49C45961f98d8DF92854b53F1641AF0A5036",
		chainId: 1,
		decimals: 18,
		name: "LINKA",
		symbol: "LINKA"
	},
	{
		address: "0xa209Ba34C01A2713a4453A656630cc9De8A362Bc",
		chainId: 1,
		decimals: 18,
		name: "3X Short Chainlink",
		symbol: "LINKBEAR"
	},
	{
		address: "0x83aD87C988aC0c6277C0c6234Cc8108b20bB5d9B",
		chainId: 1,
		decimals: 18,
		name: "3X Long Chainlink T",
		symbol: "LINKBULL"
	},
	{
		address: "0x542156d51D10Db5acCB99f9Db7e7C91B74E80a2c",
		chainId: 1,
		decimals: 18,
		name: "ETH LINK Price Acti",
		symbol: "LINKETHPA"
	},
	{
		address: "0x8933ea1Ce67B946BdF2436cE860fFBb53Ce814d2",
		chainId: 1,
		decimals: 18,
		name: "LINK ETH RSI Ratio",
		symbol: "LINKETHRSI"
	},
	{
		address: "0x78E29d35573beA6265aEDfCb9F45481B717EBFdE",
		chainId: 1,
		decimals: 18,
		name: "LINK Profit Taker S",
		symbol: "LINKPT"
	},
	{
		address: "0x0329d23fC7B1b1e6Cca57aFA3F0090F1189069e8",
		chainId: 1,
		decimals: 18,
		name: "LINK RSI Crossover",
		symbol: "LINKRSICO"
	},
	{
		address: "0x0E2EC54fC0B509F445631Bf4b91AB8168230C752",
		chainId: 1,
		decimals: 18,
		name: "LINKUSD",
		symbol: "LINKUSD"
	},
	{
		address: "0x2167FB82309CF76513E83B25123f8b0559d6b48f",
		chainId: 1,
		decimals: 18,
		name: "CoinLion",
		symbol: "LION"
	},
	{
		address: "0x72CA0501427BB8f089c1c4F767cb17d017e803a9",
		chainId: 1,
		decimals: 18,
		name: "Liquid DeFi",
		symbol: "LIQ"
	},
	{
		address: "0x59AD6061A0be82155E7aCcE9F0C37Bf59F9c1e3C",
		chainId: 1,
		decimals: 18,
		name: "Liquid Lottery RTC",
		symbol: "LIQLO"
	},
	{
		address: "0xaC2385e183d9301dd5E2BB08DA932CbF9800dC9c",
		chainId: 1,
		decimals: 18,
		name: "Netkoin Liquid",
		symbol: "LIQUID"
	},
	{
		address: "0xb59490aB09A0f526Cc7305822aC65f2Ab12f9723",
		chainId: 1,
		decimals: 18,
		name: "Litentry",
		symbol: "LIT"
	},
	{
		address: "0x763Fa6806e1acf68130D2D0f0df754C93cC546B2",
		chainId: 1,
		decimals: 18,
		name: "Lition",
		symbol: "LIT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x188E817B02e635D482AE4D81e25DdA98A97C4a42",
		chainId: 1,
		decimals: 18,
		name: "Lithium Finance",
		symbol: "LITH"
	},
	{
		address: "0xf8A4A419c2d7140e49eF952a7e7Ae1Bd4A8b6B9C",
		chainId: 1,
		decimals: 18,
		name: "Lith Token",
		symbol: "LITH"
	},
	{
		address: "0x24A77c1F17C547105E14813e517be06b0040aa76",
		chainId: 1,
		decimals: 18,
		name: "LIVE Token",
		symbol: "LIVE"
	},
	{
		address: "0xd0345D30FD918D7682398ACbCdf139C808998709",
		chainId: 1,
		decimals: 18,
		name: "Lixir Finance",
		symbol: "LIX"
	},
	{
		address: "0x9f549ebFD4974cD4eD4A1550D40394B44A7382AA",
		chainId: 1,
		decimals: 18,
		name: "LinkCoin Token",
		symbol: "LKN"
	},
	{
		address: "0x80CE3027a70e0A928d9268994e9B85d03Bd4CDcf",
		chainId: 1,
		decimals: 18,
		name: "Polkalokr",
		symbol: "LKR"
	},
	{
		address: "0xd9b89EEe86B15634c70CaB51BAF85615A4AB91a1",
		chainId: 1,
		decimals: 18,
		name: "Locklet",
		symbol: "LKT"
	},
	{
		address: "0x243c56E8e740025aC6b112D7B9Af59be8eEF6E33",
		chainId: 1,
		decimals: 6,
		name: "Lukutex",
		symbol: "LKT"
	},
	{
		address: "0x49bD2DA75b1F7AF1E4dFd6b1125FEcDe59dBec58",
		chainId: 1,
		decimals: 18,
		name: "Linkey",
		symbol: "LKY"
	},
	{
		address: "0xE5bF6790D138B154f1DF3Db8d245bE46A5D05eE4",
		chainId: 1,
		decimals: 18,
		name: "Lyfe Land",
		symbol: "LLAND"
	},
	{
		address: "0x69Ef45CF64D8360279dAA974AAbAdB42f0683A6c",
		chainId: 1,
		decimals: 18,
		name: "LMAO Finance",
		symbol: "LMAO"
	},
	{
		address: "0x9205C049C231DdA51bAce0ba569f047E3E1e9979",
		chainId: 1,
		decimals: 18,
		name: "Latamcash",
		symbol: "LMCH"
	},
	{
		address: "0x25B6325f5BB1c1E03cfbC3e53F470E1F1ca022E3",
		chainId: 1,
		decimals: 18,
		name: "Lisk Machine Learning",
		symbol: "LML"
	},
	{
		address: "0x66fD97a78d8854fEc445cd1C80a07896B0b4851f",
		chainId: 1,
		decimals: 18,
		name: "Lunch Money",
		symbol: "LMY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x63e634330A20150DbB61B15648bC73855d6CCF07",
		chainId: 1,
		decimals: 18,
		name: "Blocklancer",
		symbol: "LNC"
	},
	{
		address: "0x6BEB418Fc6E1958204aC8baddCf109B8E9694966",
		chainId: 1,
		decimals: 18,
		name: "Linker Coin",
		symbol: "LNC"
	},
	{
		address: "0x0947b0e6D821378805c9598291385CE7c791A6B2",
		chainId: 1,
		decimals: 18,
		name: "Lendingblock",
		symbol: "LND",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x11afE7Fa792589dd1236257f99ba09f510460Ad9",
		chainId: 1,
		decimals: 8,
		name: "LNKO Token",
		symbol: "LNKO"
	},
	{
		address: "0x3a73F6156C4fBC71B8fDF38090A9D99401163644",
		chainId: 1,
		decimals: 18,
		name: "Lottonation",
		symbol: "LNT"
	},
	{
		address: "0x5e3845A1d78DB544613EdbE43Dc1Ea497266d3b8",
		chainId: 1,
		decimals: 18,
		name: "LNX Protocol",
		symbol: "LNX"
	},
	{
		address: "0x7458fd786B2fe8CD801C0381f88b61C5071A006F",
		chainId: 1,
		decimals: 18,
		name: "LOA Protocol",
		symbol: "LOA"
	},
	{
		address: "0xa883E72c12473DeD50A5FbfFA60E4000fa5FE3C8",
		chainId: 1,
		decimals: 8,
		name: "LOAD Network",
		symbol: "LOAD"
	},
	{
		address: "0x5e3346444010135322268a4630d2ED5F8D09446c",
		chainId: 1,
		decimals: 18,
		name: "LockTrip",
		symbol: "LOC"
	},
	{
		address: "0x556938621C19e5eae58C94a806da9d237b969bd8",
		chainId: 1,
		decimals: 18,
		name: "Low Orbit Crypto Ca",
		symbol: "LOCC"
	},
	{
		address: "0x60Eb57d085C59932d5fAa6c6026268A4386927d0",
		chainId: 1,
		decimals: 18,
		name: "LOCGame",
		symbol: "LOCG"
	},
	{
		address: "0x9c23D67AEA7B95D80942e3836BCDF7E708A747C2",
		chainId: 1,
		decimals: 18,
		name: "LOCIcoin",
		symbol: "LOCI"
	},
	{
		address: "0xB9464ef80880c5aeA54C7324c0b8Dd6ca6d05A90",
		chainId: 1,
		decimals: 18,
		name: "LOCK Token",
		symbol: "LOCK"
	},
	{
		address: "0x95172ccBe8344fecD73D0a30F54123652981BD6F",
		chainId: 1,
		decimals: 18,
		name: "Meridian Network",
		symbol: "LOCK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC64500DD7B0f1794807e67802F8Abbf5F8Ffb054",
		chainId: 1,
		decimals: 18,
		name: "Locus Chain",
		symbol: "LOCUS"
	},
	{
		address: "0x21aE23B882A340A22282162086bC98D3E2B73018",
		chainId: 1,
		decimals: 18,
		name: "LOK",
		symbol: "LOK"
	},
	{
		address: "0x0000000000095413afC295d19EDeb1Ad7B71c952",
		chainId: 1,
		decimals: 18,
		name: "Tokenlon",
		symbol: "LON"
	},
	{
		address: "0x253C7dd074f4BaCb305387F922225A4f737C08bd",
		chainId: 1,
		decimals: 18,
		name: "LookRev",
		symbol: "LOOK"
	},
	{
		address: "0x42476F744292107e34519F9c357927074Ea3F75D",
		chainId: 1,
		decimals: 18,
		name: "Loom Network  NEW",
		symbol: "LOOM"
	},
	{
		address: "0xA4e8C3Ec456107eA67d3075bF9e3DF3A75823DB0",
		chainId: 1,
		decimals: 18,
		name: "Loom",
		symbol: "LOOMOLD",
		extensions: {
			color: "#4BC0C8",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x7C5d5100B339Fe7D995a893AF6CB496B9474373c",
		chainId: 1,
		decimals: 18,
		name: "Loon Network",
		symbol: "LOON"
	},
	{
		address: "0x7b3D36Eb606f873A75A6aB68f8c999848B04F935",
		chainId: 1,
		decimals: 18,
		name: "NFTLootBox",
		symbol: "LOOT"
	},
	{
		address: "0x6556D2EC4D96Da39CF75cbE50D58fae90079800a",
		chainId: 1,
		decimals: 18,
		name: "Lukki Operating Tok",
		symbol: "LOT"
	},
	{
		address: "0xf947B0824c3995787EFC899017A36bC9f281265e",
		chainId: 1,
		decimals: 8,
		name: "Lotoblock",
		symbol: "LOTO"
	},
	{
		address: "0xb0dFd28d3CF7A5897C694904Ace292539242f858",
		chainId: 1,
		decimals: 18,
		name: "Lotto",
		symbol: "LOTTO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE3c864307b5592404431649De541c259497e2BD1",
		chainId: 1,
		decimals: 8,
		name: "LoveChain",
		symbol: "LOV"
	},
	{
		address: "0x5a276Aeb77bCfDAc8Ac6f31BBC7416AE1A85eEF2",
		chainId: 1,
		decimals: 0,
		name: "Love",
		symbol: "LOVE"
	},
	{
		address: "0x2cc71c048A804Da930e28E93F3211dC03c702995",
		chainId: 1,
		decimals: 8,
		name: "Kripton",
		symbol: "LPK"
	},
	{
		address: "0x99295f1141d58A99e939F7bE6BBe734916a875B8",
		chainId: 1,
		decimals: 18,
		name: "LinkPool",
		symbol: "LPL"
	},
	{
		address: "0x6149C26Cd2f7b5CCdb32029aF817123F6E37Df5B",
		chainId: 1,
		decimals: 18,
		name: "Launchpool",
		symbol: "LPOOL"
	},
	{
		address: "0x58b6A8A3302369DAEc383334672404Ee733aB239",
		chainId: 1,
		decimals: 18,
		name: "Livepeer",
		symbol: "LPT",
		extensions: {
			color: "#03E082",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xD29F0b5b3F50b07Fe9a9511F7d86F4f4bAc3f8c4",
		chainId: 1,
		decimals: 18,
		name: "Liquidity Network",
		symbol: "LQD"
	},
	{
		address: "0x6DEA81C8171D0bA574754EF6F8b412F2Ed88c54D",
		chainId: 1,
		decimals: 18,
		name: "Liquity",
		symbol: "LQTY"
	},
	{
		address: "0xBBbbCA6A901c926F240b89EacB641d8Aec7AEafD",
		chainId: 1,
		decimals: 18,
		name: "Loopring",
		symbol: "LRC",
		extensions: {
			color: "#005FFF",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xc77D7E0dD7b2A01B990e866FeB21d031f1418c2E",
		chainId: 1,
		decimals: 18,
		name: "Littlesesame",
		symbol: "LSC"
	},
	{
		address: "0x048eb9B9c08E2dF45644cf0DB1fcB3e866c401Ad",
		chainId: 1,
		decimals: 18,
		name: "Live Swap Coin",
		symbol: "LSC"
	},
	{
		address: "0xD64809f5F7d772D9112A6BD379De00A77188199E",
		chainId: 1,
		decimals: 18,
		name: "Lyfe Silver",
		symbol: "LSILVER",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3B9BE07d622aCcAEd78f479BC0EDabFd6397E320",
		chainId: 1,
		decimals: 18,
		name: "Lossless",
		symbol: "LSS"
	},
	{
		address: "0x4de2573e27E648607B50e1Cfff921A33E4A34405",
		chainId: 1,
		decimals: 18,
		name: "Lendroid Support To",
		symbol: "LST"
	},
	{
		address: "0x6b9F1F092E0B10015a4391A80cD3E6B6cefD1728",
		chainId: 1,
		decimals: 18,
		name: "LuckySevenToken",
		symbol: "LST"
	},
	{
		address: "0x681Ecc5a0bFD18c308A1138fF607F818baC5E417",
		chainId: 1,
		decimals: 18,
		name: "Luckstar",
		symbol: "LST"
	},
	{
		address: "0x355376d6471E09A4FfCA8790F50DA625630c5270",
		chainId: 1,
		decimals: 18,
		name: "Libartysharetoken",
		symbol: "LST"
	},
	{
		address: "0xEe059F0ca1507e4E20C689b20CFf71B5E924f7bd",
		chainId: 1,
		decimals: 18,
		name: "Litecoin SV",
		symbol: "LSV"
	},
	{
		address: "0xa105C740BC012A43a342Ab4A0Ef40143452C8E89",
		chainId: 1,
		decimals: 18,
		name: "Litbinex Coin",
		symbol: "LTB"
	},
	{
		address: "0xB422e605fBd765B80D2C4b5d8196C2f94144438B",
		chainId: 1,
		decimals: 18,
		name: "3X Short Litecoin T",
		symbol: "LTCBEAR"
	},
	{
		address: "0xDB61354E9cf2217a29770E9811832B360a8DAad3",
		chainId: 1,
		decimals: 18,
		name: "3X Long Litecoin To",
		symbol: "LTCBULL"
	},
	{
		address: "0xD0C64D6c0E9aA53fFFd8B80313e035f7B83083F3",
		chainId: 1,
		decimals: 18,
		name: "1X Short Litecoin T",
		symbol: "LTCHEDGE"
	},
	{
		address: "0xb4C9abc8a74Bd2E0E0b7AC5ecE30792e65D86c59",
		chainId: 1,
		decimals: 8,
		name: "LiteGold",
		symbol: "LTG"
	},
	{
		address: "0x8A732BC91c33c167F868E0af7e6f31e0776d0f71",
		chainId: 1,
		decimals: 18,
		name: "Litecoin Token",
		symbol: "LTK"
	},
	{
		address: "0x3DB6Ba6ab6F95efed1a6E794caD492fAAabF294D",
		chainId: 1,
		decimals: 8,
		name: "LTO Network",
		symbol: "LTO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa393473d64d2F9F026B60b6Df7859A689715d092",
		chainId: 1,
		decimals: 8,
		name: "Lattice Token",
		symbol: "LTX"
	},
	{
		address: "0xB1f66997A5760428D3a87D68b90BfE0aE64121cC",
		chainId: 1,
		decimals: 18,
		name: "Lua Token",
		symbol: "LUA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5dbe296F97B23C4A6AA6183D73e574D02bA5c719",
		chainId: 1,
		decimals: 18,
		name: "Level Up Coin",
		symbol: "LUC"
	},
	{
		address: "0xFB12e3CcA983B9f59D90912Fd17F8D745A8B2953",
		chainId: 1,
		decimals: 0,
		name: "LUCK",
		symbol: "LUCK"
	},
	{
		address: "0x0955A73D014F0693aC7B53CFe77706dAb02b3ef9",
		chainId: 1,
		decimals: 18,
		name: "Lady Luck",
		symbol: "LUCK"
	},
	{
		address: "0xE478d4F4a87D4D641AF97ca0b5Cc3dB61e266357",
		chainId: 1,
		decimals: 18,
		name: "LUCKY",
		symbol: "LUCKY"
	},
	{
		address: "0xe64b47931f28f89Cc7A0C6965Ecf89EaDB4975f5",
		chainId: 1,
		decimals: 18,
		name: "Ludos Protocol",
		symbol: "LUD"
	},
	{
		address: "0x01cd3D9dF5869ca7954745663bd6201C571E05Cf",
		chainId: 1,
		decimals: 18,
		name: "LULU Token",
		symbol: "LULU"
	},
	{
		address: "0x89A64014d429509CfFdA1AEBc7eB36B9435794BD",
		chainId: 1,
		decimals: 18,
		name: "LULZ",
		symbol: "LULZ"
	},
	{
		address: "0xA89b5934863447f6E4Fc53B315a93e873bdA69a3",
		chainId: 1,
		decimals: 18,
		name: "Lumino Coin",
		symbol: "LUM"
	},
	{
		address: "0xfa05A73FfE78ef8f1a739473e462c54bae6567D9",
		chainId: 1,
		decimals: 18,
		name: "Lunyr",
		symbol: "LUN",
		extensions: {
			color: "#f55749",
			isVerified: true
		}
	},
	{
		address: "0xd2877702675e6cEb975b4A1dFf9fb7BAF4C91ea9",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Terra",
		symbol: "LUNA"
	},
	{
		address: "0x5f98805A4E8be255a32880FDeC7F6728C6568bA0",
		chainId: 1,
		decimals: 18,
		name: "Liquity USD",
		symbol: "LUSD"
	},
	{
		address: "0x88DAfEBb769311D7Fbbeb9a21431FA026D4100d0",
		chainId: 1,
		decimals: 18,
		name: "Lux Expression",
		symbol: "LUX"
	},
	{
		address: "0xa8EdA9D4Aee0eb882F8752C6bA7e16d9233C9Ad2",
		chainId: 1,
		decimals: 8,
		name: "LevelApp",
		symbol: "LVL"
	},
	{
		address: "0xc8Cac7672f4669685817cF332a33Eb249F085475",
		chainId: 1,
		decimals: 18,
		name: "LivenPay",
		symbol: "LVN"
	},
	{
		address: "0x261638EC8ee8100484130EBD2fEBfDAdC0D8742a",
		chainId: 1,
		decimals: 18,
		name: "LVX",
		symbol: "LVX"
	},
	{
		address: "0xBC46D9961A3932f7D6b64abfdeC80C1816C4B835",
		chainId: 1,
		decimals: 18,
		name: "LITEX",
		symbol: "LXT"
	},
	{
		address: "0x57aD67aCf9bF015E4820Fbd66EA1A21BED8852eC",
		chainId: 1,
		decimals: 18,
		name: "Lympo",
		symbol: "LYM"
	},
	{
		address: "0xc690F7C7FcfFA6a82b79faB7508c466FEfdfc8c5",
		chainId: 1,
		decimals: 18,
		name: "Lympo",
		symbol: "LYM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB0B1685f55843D03739c7D9b0A230F1B7DcF03D5",
		chainId: 1,
		decimals: 18,
		name: "Lynchpin Token",
		symbol: "LYN"
	},
	{
		address: "0x8f87Ec6aAd3B2A8C44f1298A1af56169B8e574cf",
		chainId: 1,
		decimals: 18,
		name: "LYNC Network",
		symbol: "LYNC"
	},
	{
		address: "0xdD41fBd1Ae95C5D9B198174A28e04Be6b3d1aa27",
		chainId: 1,
		decimals: 8,
		name: "Lightyears",
		symbol: "LYS"
	},
	{
		address: "0xA8b919680258d369114910511cc87595aec0be6D",
		chainId: 1,
		decimals: 18,
		name: "LUKSO",
		symbol: "LYXe",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3f4B726668da46f5e0E75aA5D478ACEc9f38210F",
		chainId: 1,
		decimals: 18,
		name: "M-ETH",
		symbol: "M-ETH"
	},
	{
		address: "0xd36932143F6eBDEDD872D5Fb0651f4B72Fd15a84",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Apple",
		symbol: "MAAPL"
	},
	{
		address: "0xc3e2de0b661cF58F66BdE8E896905399ded58af5",
		chainId: 1,
		decimals: 0,
		name: "Matrexcoin",
		symbol: "MAC"
	},
	{
		address: "0xB119Ce94D098C18fe380904c24e358bd887F00BE",
		chainId: 1,
		decimals: 18,
		name: "MACH Project",
		symbol: "MACH"
	},
	{
		address: "0x5B09A0371C1DA44A8E24D36Bf5DEb1141a84d875",
		chainId: 1,
		decimals: 18,
		name: "MAD",
		symbol: "MAD"
	},
	{
		address: "0xB4d930279552397bbA2ee473229f89Ec245bc365",
		chainId: 1,
		decimals: 18,
		name: "MahaDAO",
		symbol: "MAHA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x75387e1287Dd85482aB66102DA9f6577E027f609",
		chainId: 1,
		decimals: 18,
		name: "Mindsync",
		symbol: "MAI"
	},
	{
		address: "0x4Af698B479D0098229DC715655c667Ceb6cd8433",
		chainId: 1,
		decimals: 18,
		name: "MaidCoin",
		symbol: "MAID"
	},
	{
		address: "0x0cae9e4d663793c2a2A0b211c1Cf4bBca2B9cAa7",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Amazon",
		symbol: "MAMZN"
	},
	{
		address: "0xe25bCec5D3801cE3a794079BF94adF1B8cCD802D",
		chainId: 1,
		decimals: 18,
		name: "Matrix AI Network",
		symbol: "MAN"
	},
	{
		address: "0x0F5D2fB29fb7d3CFeE444a200298f468908cC942",
		chainId: 1,
		decimals: 18,
		name: "Decentraland",
		symbol: "MANA",
		extensions: {
			color: "#FF2D55",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x5aA485E6b794bcf5F834BF5c7FF43B9B83322764",
		chainId: 1,
		decimals: 8,
		name: "Mandi Token",
		symbol: "MANDI"
	},
	{
		address: "0xc716cf01532999E5dF45E1BD09743128c5932821",
		chainId: 1,
		decimals: 18,
		name: "MANEKI Vault  NFTX",
		symbol: "MANEKI"
	},
	{
		address: "0xAB7aaf9e485a3bc885985184ABE9FC6Aba727bD6",
		chainId: 1,
		decimals: 18,
		name: "MANY",
		symbol: "MANY"
	},
	{
		address: "0x9E976F211daea0D652912AB99b0Dc21a7fD728e4",
		chainId: 1,
		decimals: 18,
		name: "MAP Protocol",
		symbol: "MAP"
	},
	{
		address: "0xA9080Bf7C8e55f2Af5C6603243D5865F4f328715",
		chainId: 1,
		decimals: 18,
		name: "MARKYT",
		symbol: "MAR"
	},
	{
		address: "0x67c597624B17b16fb77959217360B7cD18284253",
		chainId: 1,
		decimals: 9,
		name: "Benchmark Protocol",
		symbol: "MARK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEDD8DA5C20EB014E550008DF3304213ddE5e29F0",
		chainId: 1,
		decimals: 8,
		name: "Mars Network",
		symbol: "MARS"
	},
	{
		address: "0x66C0DDEd8433c9EA86C8cf91237B14e10b4d70B7",
		chainId: 1,
		decimals: 18,
		name: "Mars",
		symbol: "MARS"
	},
	{
		address: "0x5a666c7d92E5fA7Edcb6390E4efD6d0CDd69cF37",
		chainId: 1,
		decimals: 18,
		name: "Unmarshal",
		symbol: "MARSH"
	},
	{
		address: "0xfdcc07Ab60660de533b5Ad26e1457b565a9D59Bd",
		chainId: 1,
		decimals: 18,
		name: "Martcoin",
		symbol: "MART"
	},
	{
		address: "0x2b100Be232F90Dd33d3B6e4b9ad70D1E8AC0E208",
		chainId: 1,
		decimals: 18,
		name: "MarX",
		symbol: "MARX"
	},
	{
		address: "0x23Ccc43365D9dD3882eab88F43d515208f832430",
		chainId: 1,
		decimals: 18,
		name: "Midas Protocol",
		symbol: "MAS"
	},
	{
		address: "0xa0d440C6DA37892Dc06Ee7930B2eedE0634FD681",
		chainId: 1,
		decimals: 8,
		name: "Masternet",
		symbol: "MASH"
	},
	{
		address: "0xC7a8B45E184138114E6085C82936A8Db93DD156a",
		chainId: 1,
		decimals: 18,
		name: "MASK Vault  NFTX",
		symbol: "MASK"
	},
	{
		address: "0x69af81e73A73B40adF4f3d4223Cd9b1ECE623074",
		chainId: 1,
		decimals: 18,
		name: "Mask Network",
		symbol: "MASK"
	},
	{
		address: "0x0fe629d1E84E171f8fF0C1Ded2Cc2221Caa48a3f",
		chainId: 1,
		decimals: 18,
		name: "NFTX Hashmasks Inde",
		symbol: "MASK"
	},
	{
		address: "0x06F3C323f0238c72BF35011071f2b5B7F43A054c",
		chainId: 1,
		decimals: 18,
		name: "MASQ",
		symbol: "MASQ"
	},
	{
		address: "0x08d967bb0134F2d07f7cfb6E246680c53927DD30",
		chainId: 1,
		decimals: 18,
		name: "MATH",
		symbol: "MATH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7D1AfA7B718fb893dB30A3aBc0Cfc608AaCfeBB0",
		chainId: 1,
		decimals: 18,
		name: "Matic",
		symbol: "MATIC",
		extensions: {
			color: "#2891F9",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x7e03521b9dA891Ca3F79A8728E2eaeb24886c5f9",
		chainId: 1,
		decimals: 18,
		name: "3X Long Matic Token",
		symbol: "MATICBULL"
	},
	{
		address: "0x1C9491865a1DE77C5b6e19d2E6a5F1D7a6F2b25F",
		chainId: 1,
		decimals: 18,
		name: "Antimatter",
		symbol: "MATTER"
	},
	{
		address: "0x9B99CcA871Be05119B2012fd4474731dd653FEBe",
		chainId: 1,
		decimals: 18,
		name: "AntiMatter",
		symbol: "MATTER"
	},
	{
		address: "0xe7976c4Efc60d9f4C200Cc1bCEF1A1e3B02c73e7",
		chainId: 1,
		decimals: 18,
		name: "MAX Token",
		symbol: "MAX"
	},
	{
		address: "0x14468FF6b324f1C5A869e62B9C442846e7D0baf1",
		chainId: 1,
		decimals: 18,
		name: "Maya Coin",
		symbol: "MAYA"
	},
	{
		address: "0x7CDA79830Faf07Ed696Fe220566116951CED36A7",
		chainId: 1,
		decimals: 18,
		name: "Maya Preferred",
		symbol: "MAYP"
	},
	{
		address: "0x8D8129963291740dDDd917ab01af18c7aed4BA58",
		chainId: 1,
		decimals: 18,
		name: "MineBee",
		symbol: "MB"
	},
	{
		address: "0x56aA298a19C93c6801FDde870fA63EF75Cc0aF72",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Alibaba",
		symbol: "MBABA"
	},
	{
		address: "0x26cF82e4aE43D31eA51e72B663d26e26a75AF729",
		chainId: 1,
		decimals: 18,
		name: "Moonbase",
		symbol: "MBBASED"
	},
	{
		address: "0x8888889213DD4dA823EbDD1e235b09590633C150",
		chainId: 1,
		decimals: 18,
		name: "Marblecoin",
		symbol: "MBC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB63ffE88c2903080cCf9AB14EfA56A11E3e01273",
		chainId: 1,
		decimals: 18,
		name: "Mobiicoin",
		symbol: "MBC"
	},
	{
		address: "0xEfbB3F1058fd8E0C9d7204f532E17d7572AFfc3e",
		chainId: 1,
		decimals: 18,
		name: "MBCash",
		symbol: "MBCASH"
	},
	{
		address: "0xB879DA8b24c9b8685dE8526cF492E954f165D74b",
		chainId: 1,
		decimals: 18,
		name: "MovieBloc",
		symbol: "MBL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x281F5B914b0D589F8193cd5e711c6920874E00C8",
		chainId: 1,
		decimals: 18,
		name: "MBM Token",
		symbol: "MBM"
	},
	{
		address: "0x4Eeea7B48b9C3ac8F70a9c932A8B1E8a5CB624c7",
		chainId: 1,
		decimals: 18,
		name: "Membrana",
		symbol: "MBN"
	},
	{
		address: "0xaF80951201a0EFF85A0Fd3aDF4c7043dB856d3E6",
		chainId: 1,
		decimals: 18,
		name: "Mobilian Coin",
		symbol: "MBN"
	},
	{
		address: "0xacFe45C352C902ae3A3F9B6bfE6eC994c5D791BF",
		chainId: 1,
		decimals: 18,
		name: "megaBonk",
		symbol: "MBONK"
	},
	{
		address: "0x386467F1f3ddbE832448650418311a479EECFC57",
		chainId: 1,
		decimals: 0,
		name: "Embers",
		symbol: "MBRS"
	},
	{
		address: "0x53893a4A67D4392EBEbDf1A683E98E1C577aB6C1",
		chainId: 1,
		decimals: 18,
		name: "MicroBloodScience",
		symbol: "MBS"
	},
	{
		address: "0x945Facb997494CC2570096c74b5F66A3507330a1",
		chainId: 1,
		decimals: 18,
		name: "mStable BTC",
		symbol: "MBTC"
	},
	{
		address: "0x7e8C149f70437eba6785f9059190A5b08aBf03dE",
		chainId: 1,
		decimals: 8,
		name: "MiniBitcoin",
		symbol: "MBTC"
	},
	{
		address: "0x71ba91dC68C6a206Db0A6A92B4b1De3f9271432d",
		chainId: 1,
		decimals: 18,
		name: "MobieCoin",
		symbol: "MBX"
	},
	{
		address: "0xA38b7EE9dF79955b90cC4E2dE90421f6Baa83A3D",
		chainId: 1,
		decimals: 18,
		name: "Monkey Coin",
		symbol: "MC"
	},
	{
		address: "0x72ba699f0F3c29D0f886C264eC7350533A32b3d5",
		chainId: 1,
		decimals: 8,
		name: "Medican Coin",
		symbol: "MCAN"
	},
	{
		address: "0x93E682107d1E9defB0b5ee701C71707a4B2E46Bc",
		chainId: 1,
		decimals: 8,
		name: "MCAP",
		symbol: "MCAP"
	},
	{
		address: "0xf961A1Fa7C781Ecd23689fE1d0B7f3B6cBB2f972",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Moon Cats",
		symbol: "MCAT20"
	},
	{
		address: "0x4e352cF164E64ADCBad318C3a1e222E9EBa4Ce42",
		chainId: 1,
		decimals: 18,
		name: "MCDEX Token",
		symbol: "MCB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE33AE4E795114279721047484E5ad5cc7DF24fcB",
		chainId: 1,
		decimals: 10,
		name: "MCFinance",
		symbol: "MCF"
	},
	{
		address: "0xA4e7414FCba1AF15203030C6daAC630df8F16AEa",
		chainId: 1,
		decimals: 18,
		name: "Meme Cash",
		symbol: "MCH"
	},
	{
		address: "0xD69F306549e9d96f183B1AecA30B8f4353c2ECC3",
		chainId: 1,
		decimals: 18,
		name: "MCH Coin",
		symbol: "MCHC"
	},
	{
		address: "0x138A8752093F4f9a79AaeDF48d4B9248fab93c9C",
		chainId: 1,
		decimals: 18,
		name: "Musiconomi",
		symbol: "MCI"
	},
	{
		address: "0x3b3801F0Fc76528E42390Df701F513fc62CbF154",
		chainId: 1,
		decimals: 18,
		name: "MONEY CASH MINER",
		symbol: "MCM"
	},
	{
		address: "0xD91E9a0fEf7C0fa4EBdAF4d0aCF55888949A2a9b",
		chainId: 1,
		decimals: 18,
		name: "MCN Ventures",
		symbol: "MCN"
	},
	{
		address: "0xB63B606Ac810a52cCa15e44bB630fd42D8d1d83d",
		chainId: 1,
		decimals: 8,
		name: "Crypto.com",
		symbol: "MCO"
	},
	{
		address: "0xfC98e825A2264D890F9a1e68ed50E1526abCcacD",
		chainId: 1,
		decimals: 18,
		name: "Moss Carbon Credit",
		symbol: "MCO2"
	},
	{
		address: "0x2186Ecb39f1B765bA7d78f1C43c2E9D7Fc0C1eca",
		chainId: 1,
		decimals: 18,
		name: "My Crypto Play",
		symbol: "MCP"
	},
	{
		address: "0x6876EbA317272FE221C67405C5e8EB3B24535547",
		chainId: 1,
		decimals: 18,
		name: "MicroTuber",
		symbol: "MCT"
	},
	{
		address: "0x33B919F54692dDbf702065763EA2b50Ca02e6bfF",
		chainId: 1,
		decimals: 18,
		name: "Mocrow",
		symbol: "MCW",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd15eCDCF5Ea68e3995b2D0527A0aE0a3258302F8",
		chainId: 1,
		decimals: 18,
		name: "Machi X",
		symbol: "MCX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCB696c86917175DfB4F0037DDc4f2e877a9F081A",
		chainId: 1,
		decimals: 18,
		name: "MoonDayPlus",
		symbol: "MD+"
	},
	{
		address: "0x51DB5Ad35C671a87207d88fC11d593AC0C8415bd",
		chainId: 1,
		decimals: 18,
		name: "Moeda Loyalty Points",
		symbol: "MDA",
		extensions: {
			color: "#01a64f",
			isVerified: true
		}
	},
	{
		address: "0xd24DFf6117936B6ff97108CF26c1dD8865743d87",
		chainId: 1,
		decimals: 18,
		name: "MEDIUM",
		symbol: "MDM"
	},
	{
		address: "0x66186008C1050627F979d464eABb258860563dbE",
		chainId: 1,
		decimals: 18,
		name: "MediShares",
		symbol: "MDS",
		extensions: {
			color: "#1e252c",
			isVerified: true
		}
	},
	{
		address: "0x92B7e4409dCf8C439f313eD1f05fdC0550d18DDd",
		chainId: 1,
		decimals: 18,
		name: "MYDAS",
		symbol: "MDS"
	},
	{
		address: "0x814e0908b12A99FeCf5BC101bB5d0b8B5cDf7d26",
		chainId: 1,
		decimals: 18,
		name: "Measurable Data Token",
		symbol: "MDT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x947AEb02304391f8fbE5B25D7D98D649b57b1788",
		chainId: 1,
		decimals: 18,
		name: "Mandala Exchange To",
		symbol: "MDX"
	},
	{
		address: "0x0eCDd783dc7bF820614044B51862ED29714d2BA5",
		chainId: 1,
		decimals: 18,
		name: "Medooza Ecosystem",
		symbol: "MDZA"
	},
	{
		address: "0x47140a767A861F7a1f3B0Dd22A2F463421c28814",
		chainId: 1,
		decimals: 18,
		name: "All me",
		symbol: "ME"
	},
	{
		address: "0xdb726152680eCe3c9291f1016f1d36f3995f6941",
		chainId: 1,
		decimals: 6,
		name: "Media Network",
		symbol: "MEDIA"
	},
	{
		address: "0x737fA0372c8D001904Ae6aCAf0552d4015F9c947",
		chainId: 1,
		decimals: 18,
		name: "MEDIBIT",
		symbol: "MEDIBIT"
	},
	{
		address: "0xfd1e80508F243E64CE234eA88A5Fd2827c71D4b7",
		chainId: 1,
		decimals: 8,
		name: "MediBloc [ERC20]",
		symbol: "MEDX"
	},
	{
		address: "0xe1b583dc66e0A24Fd9Af2dC665f6F5e48978E106",
		chainId: 1,
		decimals: 18,
		name: "Mercurity Finance",
		symbol: "MEE"
	},
	{
		address: "0x641927E970222B10b2E8CDBC96b1B4F427316f16",
		chainId: 1,
		decimals: 18,
		name: "MEEB Vault  NFTX",
		symbol: "MEEB"
	},
	{
		address: "0x3218A02F8F8B5c3894ce30EB255F10Bcba13E654",
		chainId: 1,
		decimals: 18,
		name: "MegaCryptoPolis",
		symbol: "MEGA"
	},
	{
		address: "0xed0889F7E1c7C7267407222Be277e1f1Ef4d4892",
		chainId: 1,
		decimals: 18,
		name: "Melalie",
		symbol: "MEL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x42dbBd5ae373FEA2FC320F62d44C058522Bb3758",
		chainId: 1,
		decimals: 18,
		name: "Memecoin",
		symbol: "MEM"
	},
	{
		address: "0xD5525D397898e5502075Ea5E830d8914f6F0affe",
		chainId: 1,
		decimals: 8,
		name: "MEME",
		symbol: "MEME",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x650F44eD6F1FE0E1417cb4b3115d52494B4D9b6D",
		chainId: 1,
		decimals: 18,
		name: "Meowshi",
		symbol: "MEOW"
	},
	{
		address: "0x8f1135eA4f8946949441716d66e5390C5A990DF0",
		chainId: 1,
		decimals: 8,
		name: "MesChain",
		symbol: "MES"
	},
	{
		address: "0x420167D87d35c3A249b32Ef6225872fBD9aB85D2",
		chainId: 1,
		decimals: 18,
		name: "MESG",
		symbol: "MESG"
	},
	{
		address: "0x01F2AcF2914860331C1Cb1a9AcecDa7475e06Af8",
		chainId: 1,
		decimals: 18,
		name: "Meshbox",
		symbol: "MESH"
	},
	{
		address: "0xcF9fBFfEC9e0e5BbC62E79bf1965f5Db76955661",
		chainId: 1,
		decimals: 18,
		name: "MeshBox",
		symbol: "MESH"
	},
	{
		address: "0x5B8D43FfdE4a2982B9A5387cDF21D54Ead64Ac8d",
		chainId: 1,
		decimals: 18,
		name: "Monaco Estate",
		symbol: "MEST"
	},
	{
		address: "0xa3d58c4E56fedCae3a7c43A725aeE9A71F0ece4e",
		chainId: 1,
		decimals: 18,
		name: "Metronome",
		symbol: "MET",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2F5C3dD519E8a502c48c9FC104Eee64fDFF05F03",
		chainId: 1,
		decimals: 18,
		name: "META Vault  NFTX",
		symbol: "META"
	},
	{
		address: "0x8807e69dC04155AF64172Cd6f0B4738F8068D0D4",
		chainId: 1,
		decimals: 18,
		name: "Meta Network",
		symbol: "META"
	},
	{
		address: "0xDE2F7766C8BF14CA67193128535E5c7454f8387C",
		chainId: 1,
		decimals: 18,
		name: "Metadium",
		symbol: "META"
	},
	{
		address: "0xc0bfebA72805F22dC18DdE31467c5a55C16Ff57b",
		chainId: 1,
		decimals: 18,
		name: "The MetaONEz",
		symbol: "META"
	},
	{
		address: "0x765BAeFCB5418fA9f7dddACb1ccc07BD0e890e4e",
		chainId: 1,
		decimals: 9,
		name: "Meteorite Network",
		symbol: "METEOR"
	},
	{
		address: "0x11003E410ca3FcD220765B3d2f343433A0b2bffd",
		chainId: 1,
		decimals: 18,
		name: "Farming Bad",
		symbol: "METH"
	},
	{
		address: "0xFEF3884b603C33EF8eD4183346E093A173C94da6",
		chainId: 1,
		decimals: 18,
		name: "MetaMorph",
		symbol: "METM"
	},
	{
		address: "0x108D27F9c4b2A98C025c94c76Ca78c6Ce6C7A4eB",
		chainId: 1,
		decimals: 18,
		name: "Metaprediction",
		symbol: "METP"
	},
	{
		address: "0xEfc1C73A3D8728Dc4Cf2A18ac5705FE93E5914AC",
		chainId: 1,
		decimals: 18,
		name: "MetricExchange",
		symbol: "METRIC"
	},
	{
		address: "0x7DE2d123042994737105802D2abD0A10a7BdE276",
		chainId: 1,
		decimals: 18,
		name: "MEXC Token",
		symbol: "MEXC"
	},
	{
		address: "0xDe201dAec04ba73166d9917Fdf08e1728E270F06",
		chainId: 1,
		decimals: 18,
		name: "MOJI Experience Poi",
		symbol: "MEXP"
	},
	{
		address: "0x0e99cC0535BB6251F6679Fa6E65d6d3b430e840B",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Facebook",
		symbol: "MFB"
	},
	{
		address: "0x6710c63432A2De02954fc0f851db07146a6c0312",
		chainId: 1,
		decimals: 18,
		name: "Smart MFG",
		symbol: "MFG"
	},
	{
		address: "0xAa4e3edb11AFa93c41db59842b29de64b72E355B",
		chainId: 1,
		decimals: 18,
		name: "Marginswap",
		symbol: "MFI"
	},
	{
		address: "0xEaDC218Ac4cB7895a5A56e6484646b48f841C45a",
		chainId: 1,
		decimals: 18,
		name: "MetaFinance",
		symbol: "MFI"
	},
	{
		address: "0xDF2C7238198Ad8B389666574f2d8bc411A4b7428",
		chainId: 1,
		decimals: 18,
		name: "Hifi Finance",
		symbol: "MFT",
		extensions: {
			color: "#da1157",
			isVerified: true
		}
	},
	{
		address: "0x05D412CE18F24040bB3Fa45CF2C69e506586D8e8",
		chainId: 1,
		decimals: 18,
		name: "Mainstream For The Underground",
		symbol: "MFTU"
	},
	{
		address: "0xbA745513ACEbcBb977497C569D4F7d340f2A936B",
		chainId: 1,
		decimals: 18,
		name: "Mainstream For The",
		symbol: "MFTU"
	},
	{
		address: "0xddAdDD4F73ABC3a6552dE43aBA325f506232fA8A",
		chainId: 1,
		decimals: 9,
		name: "Memefund",
		symbol: "MFUND"
	},
	{
		address: "0x174BfA6600Bf90C885c7c01C7031389ed1461Ab9",
		chainId: 1,
		decimals: 18,
		name: "MGC Token",
		symbol: "MGC"
	},
	{
		address: "0xa6EB54102F20095679882Db4C84E72E65Ab782A4",
		chainId: 1,
		decimals: 8,
		name: "Magnachain",
		symbol: "MGC"
	},
	{
		address: "0x80f222a749a2e18Eb7f676D371F19ad7EFEEe3b7",
		chainId: 1,
		decimals: 18,
		name: "Magnolia",
		symbol: "MGN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x40395044Ac3c0C57051906dA938B54BD6557F212",
		chainId: 1,
		decimals: 8,
		name: "MobileGo",
		symbol: "MGO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x59A921Db27Dd6d4d974745B7FfC5c33932653442",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Google",
		symbol: "MGOOGL"
	},
	{
		address: "0x8a845Fc339CeB022A695281554890429a34DF120",
		chainId: 1,
		decimals: 18,
		name: "MangoChain",
		symbol: "MGP"
	},
	{
		address: "0x1412f6Aa5ADC77C620715BB2a020AA690B85F68A",
		chainId: 1,
		decimals: 18,
		name: "MargiX",
		symbol: "MGX"
	},
	{
		address: "0xE3D0a162fCc5c02C9448274D7C58E18e1811385f",
		chainId: 1,
		decimals: 2,
		name: "Maharlika Coin",
		symbol: "MHLK"
	},
	{
		address: "0x74303D9D085A0D647EF47f9c0C424c73F3BFa6ca",
		chainId: 1,
		decimals: 18,
		name: "MIAMI",
		symbol: "MIAMI"
	},
	{
		address: "0x1d350417d9787E000cc1b95d70E9536DcD91F373",
		chainId: 1,
		decimals: 18,
		name: "Mirrored iShares Go",
		symbol: "MIAU"
	},
	{
		address: "0x146D8D942048ad517479C9bab1788712Af180Fde",
		chainId: 1,
		decimals: 18,
		name: "MIB Coin",
		symbol: "MIB"
	},
	{
		address: "0x3A1237D38D0Fb94513f85D61679cAd7F38507242",
		chainId: 1,
		decimals: 18,
		name: "Mindexcoin",
		symbol: "MIC"
	},
	{
		address: "0xBe6C8f2810EF39420d2DC2901b8414C8c45FEE6D",
		chainId: 1,
		decimals: 18,
		name: "Micromines",
		symbol: "MICRO"
	},
	{
		address: "0xC82abB524257C8ee4790BFDefB452b2d6a395e21",
		chainId: 1,
		decimals: 18,
		name: "3X Short Midcap Ind",
		symbol: "MIDBEAR"
	},
	{
		address: "0x59db60bD41bbC8cA4c1EfEE6Ea2A97EAe1E30cF5",
		chainId: 1,
		decimals: 18,
		name: "3X Long Midcap Inde",
		symbol: "MIDBULL"
	},
	{
		address: "0x05A78FfEa2b35AA1Af438c21cf06668CF118df0A",
		chainId: 1,
		decimals: 18,
		name: "Migranet",
		symbol: "MIG"
	},
	{
		address: "0xFbaf48e57CAB46F4c2E03eDB90a421D9fC6c7cBF",
		chainId: 1,
		decimals: 18,
		name: "MIKS COIN",
		symbol: "MIKS"
	},
	{
		address: "0xD717B75404022fb1C8582ADf1c66B9A553811754",
		chainId: 1,
		decimals: 18,
		name: "Micro Licensing Coin",
		symbol: "MILC"
	},
	{
		address: "0x80c8C3dCfB854f9542567c8Dac3f44D709eBc1de",
		chainId: 1,
		decimals: 18,
		name: "Spaceswap MILK2",
		symbol: "MILK2"
	},
	{
		address: "0x99D8a9C45b2ecA8864373A26D1459e3Dff1e17F3",
		chainId: 1,
		decimals: 18,
		name: "Magic Internet Mone",
		symbol: "MIM"
	},
	{
		address: "0x90B831fa3Bebf58E9744A14D638E25B4eE06f9Bc",
		chainId: 1,
		decimals: 18,
		name: "MIMO Parallel Gover",
		symbol: "MIMO"
	},
	{
		address: "0x5D64D850c8368008aFB39224E92aD0DcEFf3CF38",
		chainId: 1,
		decimals: 18,
		name: "MINDOL",
		symbol: "MIN"
	},
	{
		address: "0xB26631c6dda06aD89B93C71400D25692de89c068",
		chainId: 1,
		decimals: 18,
		name: "Minds",
		symbol: "MINDS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4D953cf077c0C95Ba090226E59A18FcF97db44EC",
		chainId: 1,
		decimals: 19,
		name: "Mini",
		symbol: "MINI"
	},
	{
		address: "0x0CDF9acd87E940837ff21BB40c9fd55F68bba059",
		chainId: 1,
		decimals: 18,
		name: "Public Mint",
		symbol: "MINT"
	},
	{
		address: "0xb6c6920327B33f8eeC26786c7462c5F4098D47E3",
		chainId: 1,
		decimals: 18,
		name: "Minty Art",
		symbol: "MINTY"
	},
	{
		address: "0xcDa16f62A8d3127EA0aebfacB221C1CC41b8e488",
		chainId: 1,
		decimals: 18,
		name: "MINUTE Vault  NFTX",
		symbol: "MINUTE"
	},
	{
		address: "0xae353DaEed8DCc7a9a12027F7e070c0A50B7b6A4",
		chainId: 1,
		decimals: 6,
		name: "InnovaMinex",
		symbol: "MINX"
	},
	{
		address: "0x09a3EcAFa817268f77BE1283176B946C4ff2E608",
		chainId: 1,
		decimals: 18,
		name: "Wrapped MIR Token",
		symbol: "MIR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0168703872fa06741Ecaa9Dff7803168e83f7aE0",
		chainId: 1,
		decimals: 8,
		name: "Mirocana",
		symbol: "MIRO"
	},
	{
		address: "0xCD1cb16a67937ff8Af5D726e2681010cE1E9891a",
		chainId: 1,
		decimals: 8,
		name: "Themis",
		symbol: "MIS"
	},
	{
		address: "0x024B6e7DC26F4d5579bDD936F8d7BC31f2339999",
		chainId: 1,
		decimals: 18,
		name: "Mithril Share",
		symbol: "MIS"
	},
	{
		address: "0x976091738973b520A514ea206AcDD008A09649De",
		chainId: 1,
		decimals: 9,
		name: "Mishka Token",
		symbol: "MISHKA"
	},
	{
		address: "0xe653967F0beb6E313c6350F20bca9A5f4C636eeD",
		chainId: 1,
		decimals: 18,
		name: "MISS",
		symbol: "MISS"
	},
	{
		address: "0x88ACDd2a6425c3FaAE4Bc9650Fd7E27e0Bebb7aB",
		chainId: 1,
		decimals: 18,
		name: "Alchemist",
		symbol: "MIST"
	},
	{
		address: "0xe23cd160761f63FC3a1cF78Aa034b6cdF97d3E0C",
		chainId: 1,
		decimals: 18,
		name: "MIT",
		symbol: "MIT"
	},
	{
		address: "0xAd8DD4c725dE1D31b9E8F8D146089e9DC6882093",
		chainId: 1,
		decimals: 6,
		name: "Mychatcoin",
		symbol: "MIT (Mychatcoin)"
	},
	{
		address: "0x3893b9422Cd5D70a81eDeFfe3d5A1c6A978310BB",
		chainId: 1,
		decimals: 18,
		name: "Mithril",
		symbol: "MITH",
		extensions: {
			color: "#00316d",
			isVerified: true
		}
	},
	{
		address: "0x4a527d8fc13C5203AB24BA0944F4Cb14658D1Db6",
		chainId: 1,
		decimals: 18,
		name: "Morpheus Labs",
		symbol: "MITX"
	},
	{
		address: "0x5d285F735998F36631F678FF41fb56A10A4d0429",
		chainId: 1,
		decimals: 18,
		name: "MixMarvel",
		symbol: "MIX"
	},
	{
		address: "0xB0BFB1E2F72511cF8b4D004852E2054d7b9a76e1",
		chainId: 1,
		decimals: 18,
		name: "Streamix",
		symbol: "MIXS"
	},
	{
		address: "0xF3281c539716a08c754EC4C8F2B4cEe0faB64BB9",
		chainId: 1,
		decimals: 18,
		name: "Markaccy",
		symbol: "MKCY"
	},
	{
		address: "0xE154D54890c35634ca525d543ed58C741af7CF7a",
		chainId: 1,
		decimals: 18,
		name: "MEDIKEY",
		symbol: "MKEY"
	},
	{
		address: "0x9f8F72aA9304c8B593d555F12eF6589cC3A579A2",
		chainId: 1,
		decimals: 18,
		name: "Maker",
		symbol: "MKR",
		extensions: {
			color: "#1AAB9B",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xCfF20cE22e71EcF2Ea89c86eCbD4a3CF513768c7",
		chainId: 1,
		decimals: 6,
		name: "Makes",
		symbol: "MKS"
	},
	{
		address: "0x7939882b54fcf0bCAe6b53dEc39Ad6e806176442",
		chainId: 1,
		decimals: 8,
		name: "Mikado",
		symbol: "MKT"
	},
	{
		address: "0x16558553E4647ca500c3718C56C356eDB6F9b11C",
		chainId: 1,
		decimals: 6,
		name: "Monkey King Token",
		symbol: "MKT"
	},
	{
		address: "0xC72ED4445B3fe9f0863106E344E241530d338906",
		chainId: 1,
		decimals: 18,
		name: "FLOGmall",
		symbol: "MLC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4534492034a2cd3EAb34C8F357cD139c95b09F52",
		chainId: 1,
		decimals: 0,
		name: "Marshal Lion Group",
		symbol: "MLGC"
	},
	{
		address: "0xec67005c4E498Ec7f55E092bd1d35cbC47C91892",
		chainId: 1,
		decimals: 18,
		name: "Melon",
		symbol: "MLN",
		extensions: {
			color: "#00224D",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x9506d37f70eB4C3d79C398d326C871aBBf10521d",
		chainId: 1,
		decimals: 18,
		name: "Media Licensing Tok",
		symbol: "MLT"
	},
	{
		address: "0x6B4c7A5e3f0B99FCD83e9c089BDDD6c7FCe5c611",
		chainId: 1,
		decimals: 18,
		name: "Million",
		symbol: "MM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa283aA7CfBB27EF0cfBcb2493dD9F4330E0fd304",
		chainId: 1,
		decimals: 18,
		name: "MM Token",
		symbol: "MM"
	},
	{
		address: "0xC3c221fE28c33814c28c822b631fd76047eF1a63",
		chainId: 1,
		decimals: 18,
		name: "Millimeter",
		symbol: "MM"
	},
	{
		address: "0x8315472Bae77F9a2B856A67Eb0796480AafCd51c",
		chainId: 1,
		decimals: 18,
		name: "MMAON",
		symbol: "MMAON"
	},
	{
		address: "0x5b558564B57E4ff88c6b8D8E7EeEe599bF79B368",
		chainId: 1,
		decimals: 18,
		name: "MultiMillion",
		symbol: "MMM"
	},
	{
		address: "0x41BbEDd7286dAab5910a1f15d12CBda839852BD7",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Microsoft",
		symbol: "MMSFT"
	},
	{
		address: "0x9f0f1Be08591AB7d990faf910B38ed5D60e4D5Bf",
		chainId: 1,
		decimals: 18,
		name: "MainCoin",
		symbol: "MNC"
	},
	{
		address: "0xBac7A1798350cdf2Dbfe0c210C2C9861223f4B31",
		chainId: 1,
		decimals: 18,
		name: "Moneynet",
		symbol: "MNC"
	},
	{
		address: "0x1a95B271B0535D15fa49932Daba31BA612b52946",
		chainId: 1,
		decimals: 8,
		name: "Minereum",
		symbol: "MNE"
	},
	{
		address: "0x426CA1eA2406c07d75Db9585F22781c096e3d0E0",
		chainId: 1,
		decimals: 8,
		name: "Minereum",
		symbol: "MNE"
	},
	{
		address: "0xC8d674114bac90148d11D3C1d33C61835a0F9DCD",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Netflix",
		symbol: "MNFLX"
	},
	{
		address: "0xDB7eB3edE973665b1BB9F3016861E3255062E4ED",
		chainId: 1,
		decimals: 4,
		name: "MNFT",
		symbol: "MNFT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0d62dc6Cd8C81dCA8cAADcCF01FfE7C1F31D9402",
		chainId: 1,
		decimals: 18,
		name: "Moonlite",
		symbol: "MNL"
	},
	{
		address: "0xF45091f25d374BbE956c0bb64bB85e02D07Aa741",
		chainId: 1,
		decimals: 8,
		name: "MNMCoin",
		symbol: "MNMC"
	},
	{
		address: "0x53884b61963351C283118a8E1Fc05BA464a11959",
		chainId: 1,
		decimals: 18,
		name: "Monnos",
		symbol: "MNS"
	},
	{
		address: "0xA9877b1e05D035899131DBd1e403825166D09f92",
		chainId: 1,
		decimals: 18,
		name: "Media Network Token",
		symbol: "MNT"
	},
	{
		address: "0x156B36ec68FdBF84a925230BA96cb1Ca4c4bdE45",
		chainId: 1,
		decimals: 18,
		name: "Wrapped MNT",
		symbol: "MNT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x83cee9e086A77e492eE0bB93C2B0437aD6fdECCc",
		chainId: 1,
		decimals: 18,
		name: "Goldmint",
		symbol: "MNTP"
	},
	{
		address: "0x4fD5b9B5dcc9a5D5931d007ba4aE573e760d9B64",
		chainId: 1,
		decimals: 18,
		name: "Morality",
		symbol: "MO"
	},
	{
		address: "0x187Eff9690E1F1A61d578C7c492296eaAB82701a",
		chainId: 1,
		decimals: 18,
		name: "Moar Finance",
		symbol: "MOAR"
	},
	{
		address: "0x865ec58b06bF6305B886793AA20A2da31D034E68",
		chainId: 1,
		decimals: 18,
		name: "Moss Coin",
		symbol: "MOC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9Ac07635DDBDE5db18648c360DEFb00F5f22537e",
		chainId: 1,
		decimals: 18,
		name: "Museum of Crypto Ar",
		symbol: "MOCA"
	},
	{
		address: "0x957c30aB0426e0C93CD8241E2c60392d08c6aC8e",
		chainId: 1,
		decimals: 0,
		name: "Modum",
		symbol: "MOD",
		extensions: {
			color: "#09547d",
			isVerified: true
		}
	},
	{
		address: "0xEA1ea0972fa092dd463f2968F9bB51Cc4c981D71",
		chainId: 1,
		decimals: 18,
		name: "Modefi",
		symbol: "MOD"
	},
	{
		address: "0x4bceA5E4d0F6eD53cf45e7a28FebB2d3621D7438",
		chainId: 1,
		decimals: 18,
		name: "Modex",
		symbol: "MODEX"
	},
	{
		address: "0x3c6Da7763cAA0e4b684BbC733f04a8EC08Af3762",
		chainId: 1,
		decimals: 8,
		name: "MODEL X coin",
		symbol: "MODX"
	},
	{
		address: "0x653430560bE843C4a3D143d0110e896c2Ab8ac0D",
		chainId: 1,
		decimals: 16,
		name: "Molecular Future",
		symbol: "MOF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB2dbF14D0b47ED3Ba02bDb7C954e05A72deB7544",
		chainId: 1,
		decimals: 18,
		name: "MobiFi",
		symbol: "MOFI"
	},
	{
		address: "0xbDEC45952B5E234EdDC2981B43eeD360826D5087",
		chainId: 1,
		decimals: 18,
		name: "Mogu",
		symbol: "MOGX"
	},
	{
		address: "0x1443e7c1CCE72662545D94779120C59251447e91",
		chainId: 1,
		decimals: 18,
		name: "Molten",
		symbol: "MOL"
	},
	{
		address: "0x97Cb5Cc1b2e10cC56DC16ab9179f06dfEDBe41A2",
		chainId: 1,
		decimals: 18,
		name: "MobilinkToken",
		symbol: "MOLK"
	},
	{
		address: "0xbd1848e1491d4308Ad18287A745DD4DB2A4BD55B",
		chainId: 1,
		decimals: 18,
		name: "Mochi Market",
		symbol: "MOMA"
	},
	{
		address: "0x865bB9A28041259b4baDAFD37799A288aAbbfC8c",
		chainId: 1,
		decimals: 18,
		name: "Moma Protocol",
		symbol: "MOMAT"
	},
	{
		address: "0xcaCc19C5Ca77E06D6578dEcaC80408Cc036e0499",
		chainId: 1,
		decimals: 18,
		name: "Monfter",
		symbol: "MON"
	},
	{
		address: "0x275f5Ad03be0Fa221B4C6649B8AeE09a42D9412A",
		chainId: 1,
		decimals: 18,
		name: "Monavale",
		symbol: "MONA"
	},
	{
		address: "0xd3C89cAC4A4283EDbA6927e2910fD1eBC14fe006",
		chainId: 1,
		decimals: 18,
		name: "Moona",
		symbol: "MOOI"
	},
	{
		address: "0x68a3637bA6E75c0f66B61A42639c4e9fCD3D4824",
		chainId: 1,
		decimals: 18,
		name: "MoonSwap",
		symbol: "MOON",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x98968f0747E0A261532cAcC0BE296375F5c08398",
		chainId: 1,
		decimals: 18,
		name: "MOONCAT Vault  NFTX",
		symbol: "MOONCAT"
	},
	{
		address: "0x1ad606ADDe97c0C28bD6ac85554176bC55783c01",
		chainId: 1,
		decimals: 18,
		name: "Moonday Finance",
		symbol: "MOONDAY"
	},
	{
		address: "0x260e63d91fCCC499606BAe3FE945c4ed1CF56A56",
		chainId: 1,
		decimals: 18,
		name: "MoonTools",
		symbol: "MOONS"
	},
	{
		address: "0x24EC2Ca132abf8F6f8a6E24A1B97943e31f256a7",
		chainId: 1,
		decimals: 18,
		name: "dotmoovs",
		symbol: "MOOV"
	},
	{
		address: "0xb64cD4F56043F8d80691433e395d08B1bEBDADF0",
		chainId: 1,
		decimals: 18,
		name: "Meliora",
		symbol: "MORA"
	},
	{
		address: "0x501262281B2Ba043e2fbf14904980689CDDB0C78",
		chainId: 1,
		decimals: 2,
		name: "Mithril Ore",
		symbol: "MORE"
	},
	{
		address: "0x305DE070488C8469dFAC957226c9c900c4BFbA22",
		chainId: 1,
		decimals: 8,
		name: "More Coin",
		symbol: "MORE"
	},
	{
		address: "0xf552b656022c218C26dAd43ad88881Fc04116F76",
		chainId: 1,
		decimals: 4,
		name: "Mork",
		symbol: "MORK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCc3F1441e84f124A65Bc9798A69A5C4cEbC20dFF",
		chainId: 1,
		decimals: 18,
		name: "MORPH Vault  NFTX",
		symbol: "MORPH"
	},
	{
		address: "0x784561B89A160990F46DE6dB19571Ca1B5F14bCE",
		chainId: 1,
		decimals: 9,
		name: "Most Protocol",
		symbol: "MOST"
	},
	{
		address: "0x263c618480DBe35C300D8d5EcDA19bbB986AcaeD",
		chainId: 1,
		decimals: 18,
		name: "Olympus Labs",
		symbol: "MOT"
	},
	{
		address: "0x40284109c3309A7C3439111bFD93BF5E0fBB706c",
		chainId: 1,
		decimals: 18,
		name: "MOTIV Protocol",
		symbol: "MOV"
	},
	{
		address: "0x3FA729B4548beCBAd4EaB6EF18413470e6D5324C",
		chainId: 1,
		decimals: 18,
		name: "Mover",
		symbol: "MOVE"
	},
	{
		address: "0x7BD82B320EbC28D8EB3C4F5Fa2af7B14dA5b90C3",
		chainId: 1,
		decimals: 18,
		name: "Mozik",
		symbol: "MOZ"
	},
	{
		address: "0x44bf22949F9cc84b61B9328a9d885d1b5C806b41",
		chainId: 1,
		decimals: 2,
		name: "Mozo Token",
		symbol: "MOZO"
	},
	{
		address: "0xEA4931BfCf3260da6DBF0550e27f5C214E3c268b",
		chainId: 1,
		decimals: 2,
		name: "MozoX",
		symbol: "MOZOX"
	},
	{
		address: "0x018fb5Af9d015Af25592a014C4266a84143De7a0",
		chainId: 1,
		decimals: 18,
		name: "MP3",
		symbol: "MP3"
	},
	{
		address: "0xE1A0dA60F8802b49cC36313BafADe3F9e12342FD",
		chainId: 1,
		decimals: 18,
		name: "MP4",
		symbol: "MP4"
	},
	{
		address: "0x3810A4Ddf41E586Fa0dbA1463A7951B748cEcFca",
		chainId: 1,
		decimals: 18,
		name: "Menapay",
		symbol: "MPAY"
	},
	{
		address: "0x8888801aF4d980682e47f1A9036e589479e835C5",
		chainId: 1,
		decimals: 18,
		name: "88mph",
		symbol: "MPH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6369c3DadfC00054A42BA8B2c09c48131dd4Aa38",
		chainId: 1,
		decimals: 18,
		name: "Morpher",
		symbol: "MPH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x33349B282065b0284d756F0577FB39c158F935e6",
		chainId: 1,
		decimals: 18,
		name: "Maple",
		symbol: "MPL"
	},
	{
		address: "0x96c645D3D3706f793Ef52C19bBACe441900eD47D",
		chainId: 1,
		decimals: 0,
		name: "Mt Pelerin Shares",
		symbol: "MPS"
	},
	{
		address: "0x47481c1b44F2A1c0135c45AA402CE4F4dDE4D30e",
		chainId: 1,
		decimals: 18,
		name: "Meetple",
		symbol: "MPT"
	},
	{
		address: "0x428dc22668E6F3468273634067e5545ED5417A3E",
		chainId: 1,
		decimals: 18,
		name: "MiraQle",
		symbol: "MQL"
	},
	{
		address: "0x13B02c8dE71680e71F0820c996E4bE43c2F57d15",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Invesco QQ",
		symbol: "MQQQ"
	},
	{
		address: "0xBeD4AB0019ff361d83ddeB74883DAC8a70f5ea1e",
		chainId: 1,
		decimals: 18,
		name: "MerchDAO",
		symbol: "MRCH"
	},
	{
		address: "0xf453B5B9d4E0B5c62ffB256BB2378cc2BC8e8a89",
		chainId: 1,
		decimals: 8,
		name: "MARK.SPACE",
		symbol: "MRK"
	},
	{
		address: "0x82125AFe01819Dff1535D0D6276d57045291B6c0",
		chainId: 1,
		decimals: 18,
		name: "Marcelo",
		symbol: "MRL"
	},
	{
		address: "0x21f0F0fD3141Ee9E11B3d7f13a1028CD515f459c",
		chainId: 1,
		decimals: 18,
		name: "MoneyRebel Token",
		symbol: "MRP"
	},
	{
		address: "0x7B0C06043468469967DBA22d1AF33d77d44056c8",
		chainId: 1,
		decimals: 4,
		name: "Morpheus.Network",
		symbol: "MRPH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9Af5A20AaC8D83230ba68542Ba29d132d50cbe08",
		chainId: 1,
		decimals: 18,
		name: "Marsan Exchange Token",
		symbol: "MRS"
	},
	{
		address: "0x1254E59712e6e727dC71E0E3121Ae952b2c4c3b6",
		chainId: 1,
		decimals: 18,
		name: "Marginless",
		symbol: "MRS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xAB6CF87a50F17d7F5E1FEaf81B6fE9FfBe8EBF84",
		chainId: 1,
		decimals: 18,
		name: "MRV",
		symbol: "MRV"
	},
	{
		address: "0x2bc586FFBfA2D6E9c30d5ad95d546091dB7607cf",
		chainId: 1,
		decimals: 8,
		name: "Magic E stock",
		symbol: "MSB"
	},
	{
		address: "0x84c722e6F1363E8D5C6dB3eA600bEF9a006Da824",
		chainId: 1,
		decimals: 18,
		name: "Misbloc",
		symbol: "MSB"
	},
	{
		address: "0xfdD7399e22918ba7234f5568cc2eF922489F7Ba6",
		chainId: 1,
		decimals: 18,
		name: "Mask Token",
		symbol: "MSK"
	},
	{
		address: "0x9d1555d8cB3C846Bb4f7D5B1B1080872c3166676",
		chainId: 1,
		decimals: 18,
		name: "Mirrored iShares Si",
		symbol: "MSLV"
	},
	{
		address: "0x68AA3F232dA9bdC2343465545794ef3eEa5209BD",
		chainId: 1,
		decimals: 18,
		name: "Mothership",
		symbol: "MSP"
	},
	{
		address: "0xC005204856ee7035a13D8D7CdBbdc13027AFff90",
		chainId: 1,
		decimals: 0,
		name: "MoneySwap",
		symbol: "MSWAP"
	},
	{
		address: "0x9b4e2B4B13d125238Aa0480dD42B4f6fC71b37CC",
		chainId: 1,
		decimals: 18,
		name: "MyToken",
		symbol: "MT"
	},
	{
		address: "0xa3BeD4E1c75D00fa6f4E5E6922DB7261B5E9AcD2",
		chainId: 1,
		decimals: 18,
		name: "Meta",
		symbol: "MTA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x195F43a522814DB23cb55FA5AC2f92f6C1460d9e",
		chainId: 1,
		decimals: 18,
		name: "MTCCOIN MTC",
		symbol: "MTC"
	},
	{
		address: "0x905E337c6c8645263D3521205Aa37bf4d034e745",
		chainId: 1,
		decimals: 18,
		name: "Doc com",
		symbol: "MTC"
	},
	{
		address: "0xdfdc0D82d96F8fd40ca0CFB4A288955bECEc2088",
		chainId: 1,
		decimals: 18,
		name: "MTC Mesh Network",
		symbol: "MTC"
	},
	{
		address: "0xF6117cC92d7247F605F11d4c942F0feda3399CB5",
		chainId: 1,
		decimals: 18,
		name: "Multicoin",
		symbol: "MTCN"
	},
	{
		address: "0xaF4DcE16Da2877f8c9e00544c93B62Ac40631F16",
		chainId: 1,
		decimals: 5,
		name: "Monetha",
		symbol: "MTH",
		extensions: {
			color: "#104fca",
			isVerified: true
		}
	},
	{
		address: "0x84bA4aEcfDe39D69686a841BAb434C32d179a169",
		chainId: 1,
		decimals: 18,
		name: "Method Finance",
		symbol: "MTHD"
	},
	{
		address: "0x86d3F38edaF7e7959E5d8E6Aea5aD3187b78C346",
		chainId: 1,
		decimals: 18,
		name: "MTI Finance",
		symbol: "MTI"
	},
	{
		address: "0xF433089366899D83a9f26A773D59ec7eCF30355e",
		chainId: 1,
		decimals: 8,
		name: "Metal",
		symbol: "MTL"
	},
	{
		address: "0x2e1E15C44Ffe4Df6a0cb7371CD00d5028e571d14",
		chainId: 1,
		decimals: 18,
		name: "Mettalex",
		symbol: "MTLX"
	},
	{
		address: "0x41dBECc1cdC5517C6f76f6a6E836aDbEe2754DE3",
		chainId: 1,
		decimals: 18,
		name: "Medicalchain",
		symbol: "MTN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE66b3AA360bB78468c00Bebe163630269DB3324F",
		chainId: 1,
		decimals: 18,
		name: "Merchant Token",
		symbol: "MTO"
	},
	{
		address: "0x7FC408011165760eE31bE2BF20dAf450356692Af",
		chainId: 1,
		decimals: 8,
		name: "Mitrav",
		symbol: "MTR"
	},
	{
		address: "0x1e49fF77c355A3e38D6651ce8404AF0E48c5395f",
		chainId: 1,
		decimals: 18,
		name: "MTRCToken",
		symbol: "MTRc"
	},
	{
		address: "0xA9598333B99d14D90Bc81CAd8Af82C4C70625e75",
		chainId: 1,
		decimals: 18,
		name: "Metis",
		symbol: "MTS"
	},
	{
		address: "0x21cA39943E91d704678F5D00b6616650F066fD63",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Tesla",
		symbol: "MTSLA"
	},
	{
		address: "0x6226e00bCAc68b0Fe55583B90A1d727C14fAB77f",
		chainId: 1,
		decimals: 18,
		name: "MultiVAC",
		symbol: "MTV"
	},
	{
		address: "0xEdb0414627E6f1e3F082DE65cD4F9C693D78CCA9",
		chainId: 1,
		decimals: 18,
		name: "Mirrored Twitter",
		symbol: "MTWTR"
	},
	{
		address: "0x0AF44e2784637218dD1D32A322D44e603A8f0c6A",
		chainId: 1,
		decimals: 18,
		name: "MATRYX",
		symbol: "MTX"
	},
	{
		address: "0x944eeE930933BE5E23b690c8589021Ec8619a301",
		chainId: 1,
		decimals: 9,
		name: "Munch Token",
		symbol: "MUNCH"
	},
	{
		address: "0xe2f2a5C287993345a840Db3B0845fbC70f5935a5",
		chainId: 1,
		decimals: 18,
		name: "mStable USD",
		symbol: "mUSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA52383B665b91DCe42dD4b6d1E0Fb37d3EFFe489",
		chainId: 1,
		decimals: 18,
		name: "MASTER USD",
		symbol: "MUSD"
	},
	{
		address: "0xB6Ca7399B4F9CA56FC27cBfF44F4d2e4Eef1fc81",
		chainId: 1,
		decimals: 18,
		name: "Muse",
		symbol: "MUSE"
	},
	{
		address: "0xea6412Fb370e8d1605E6aEeAA21aD07C3C7e9F24",
		chainId: 1,
		decimals: 18,
		name: "Mushroom",
		symbol: "MUSH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5003B168b457B663c3c18FFcF5B6a24bEe8f59C7",
		chainId: 1,
		decimals: 18,
		name: "Musk",
		symbol: "MUSK"
	},
	{
		address: "0x31c63146a635EB7465e5853020b39713AC356991",
		chainId: 1,
		decimals: 18,
		name: "Mirrored United Sta",
		symbol: "MUSO"
	},
	{
		address: "0x9C78EE466D6Cb57A4d01Fd887D2b5dFb2D46288f",
		chainId: 1,
		decimals: 18,
		name: "Must",
		symbol: "MUST"
	},
	{
		address: "0x8Ee04E1e9400d4e2091Ff3A46509E246E2F34542",
		chainId: 1,
		decimals: 9,
		name: "Musubi",
		symbol: "MUSUBI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA49d7499271aE71cd8aB9Ac515e6694C755d400c",
		chainId: 1,
		decimals: 18,
		name: "Mute",
		symbol: "MUTE"
	},
	{
		address: "0x515669d308f887Fd83a471C7764F5d084886D34D",
		chainId: 1,
		decimals: 18,
		name: "MUXE",
		symbol: "MUXE"
	},
	{
		address: "0x581911b360B6eB3a14eF295a83a91DC2bCE2D6f7",
		chainId: 1,
		decimals: 18,
		name: "MileVerse",
		symbol: "MVC"
	},
	{
		address: "0xCBe7142F5c16755D8683BA329EFA1ABF7b54482d",
		chainId: 1,
		decimals: 8,
		name: "MedicalVeda",
		symbol: "MVEDA"
	},
	{
		address: "0x71396a6410249725C5609646c4e449C6c4d41E27",
		chainId: 1,
		decimals: 0,
		name: "Max",
		symbol: "MVG"
	},
	{
		address: "0x45C943973e65d069906b0dC33dC31d1D7d9d09DC",
		chainId: 1,
		decimals: 8,
		name: "MovieCash",
		symbol: "MVH"
	},
	{
		address: "0x72e364F2ABdC788b7E918bc238B21f109Cd634D7",
		chainId: 1,
		decimals: 18,
		name: "Metaverse Index",
		symbol: "MVI"
	},
	{
		address: "0xf72FCd9DCF0190923Fadd44811E240Ef4533fc86",
		chainId: 1,
		decimals: 18,
		name: "Mirrored ProShares",
		symbol: "MVIXY"
	},
	{
		address: "0xA849EaaE994fb86Afa73382e9Bd88c2B6b18Dc71",
		chainId: 1,
		decimals: 18,
		name: "MVL",
		symbol: "MVL"
	},
	{
		address: "0x8a77e40936BbC27e80E9a3F526368C967869c86D",
		chainId: 1,
		decimals: 18,
		name: "Merculet",
		symbol: "MVP"
	},
	{
		address: "0x65fC94d99Cb301C5630c485D312e6Ff5EDdE13d0",
		chainId: 1,
		decimals: 18,
		name: "MVP",
		symbol: "MVP"
	},
	{
		address: "0x6425c6BE902d692AE2db752B3c268AFAdb099D3b",
		chainId: 1,
		decimals: 18,
		name: "Restart Energy",
		symbol: "MWAT"
	},
	{
		address: "0x3521c85C3000bff57Eac04489EB05BbD3193A531",
		chainId: 1,
		decimals: 18,
		name: "MetaWhale BTC",
		symbol: "MWBTC"
	},
	{
		address: "0x45128CB743951121Fb70cb570c0784492732778A",
		chainId: 1,
		decimals: 18,
		name: "Metawhale Gold",
		symbol: "MWG"
	},
	{
		address: "0x11eeF04c884E24d9B7B4760e7476D06ddF797f36",
		chainId: 1,
		decimals: 18,
		name: "MX Token",
		symbol: "MX"
	},
	{
		address: "0x5Ca381bBfb58f0092df149bD3D243b08B9a8386e",
		chainId: 1,
		decimals: 18,
		name: "MXC",
		symbol: "MXC"
	},
	{
		address: "0x6251E725CD45Fb1AF99354035a414A2C0890B929",
		chainId: 1,
		decimals: 18,
		name: "MixTrust",
		symbol: "MXT"
	},
	{
		address: "0x8a6f3BF52A26a21531514E23016eEAe8Ba7e7018",
		chainId: 1,
		decimals: 8,
		name: "Multiplier",
		symbol: "MXX"
	},
	{
		address: "0x5d60d8d7eF6d37E16EBABc324de3bE57f135e0BC",
		chainId: 1,
		decimals: 18,
		name: "MyBit",
		symbol: "MYB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb8323CfAFb0E6CC60ce332f1181D56e91BA0D8BA",
		chainId: 1,
		decimals: 18,
		name: "Myteamcoin",
		symbol: "MYC"
	},
	{
		address: "0xf7e983781609012307f2514f63D526D83D24F466",
		chainId: 1,
		decimals: 16,
		name: "MYD",
		symbol: "MYD"
	},
	{
		address: "0x1Efb2286BF89F01488C6B2a22B2556C0f45e972b",
		chainId: 1,
		decimals: 18,
		name: "Moon YFI",
		symbol: "MYFI"
	},
	{
		address: "0x5273063725a43A323300C502478C22FbB4e92C2D",
		chainId: 1,
		decimals: 18,
		name: "My Identity Coin",
		symbol: "MYID"
	},
	{
		address: "0xc8645f0D6a622E2a9a66c1dB9d33b1a46b4462DC",
		chainId: 1,
		decimals: 18,
		name: "Mykonos Coin",
		symbol: "MYK"
	},
	{
		address: "0x50987e6BE405ebac691f8988304562E5efc3B2ea",
		chainId: 1,
		decimals: 18,
		name: "Mycro",
		symbol: "MYO"
	},
	{
		address: "0x75D12E4F91Df721faFCae4c6cD1d5280381370AC",
		chainId: 1,
		decimals: 9,
		name: "My bu",
		symbol: "MYOBU"
	},
	{
		address: "0x4Cf89ca06ad997bC732Dc876ed2A7F26a9E7f361",
		chainId: 1,
		decimals: 18,
		name: "Mysterium",
		symbol: "MYST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa12D7e5319f5b43476eF19D1569E10097caCdFE2",
		chainId: 1,
		decimals: 18,
		name: "Myth Token",
		symbol: "MYTH"
	},
	{
		address: "0x45Af324F53a8D7DA1752DAd74ADc1748126D7978",
		chainId: 1,
		decimals: 18,
		name: "MyTVchain",
		symbol: "MYTV"
	},
	{
		address: "0x2129fF6000b95A973236020BCd2b2006B0D8E019",
		chainId: 1,
		decimals: 18,
		name: "MYX Network",
		symbol: "MYX"
	},
	{
		address: "0x075190c6130EA0a3A7E40802F1D77F4Ea8f38fE2",
		chainId: 1,
		decimals: 18,
		name: "nYFI",
		symbol: "N0031"
	},
	{
		address: "0xaCbd826394189Cf2623C6DF98a18b41fC8fFC16D",
		chainId: 1,
		decimals: 18,
		name: "NFTify",
		symbol: "N1",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x32C868F6318D6334B2250F323D914Bc2239E4EeE",
		chainId: 1,
		decimals: 18,
		name: "N3RD Finance",
		symbol: "N3RDZ"
	},
	{
		address: "0x630bC7dD0aBfc2d196289cE09Db947DD2CAfae7C",
		chainId: 1,
		decimals: 18,
		name: "Nabox",
		symbol: "NABOX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8d80de8A78198396329dfA769aD54d24bF90E7aa",
		chainId: 1,
		decimals: 18,
		name: "Nami ICO",
		symbol: "NAC"
	},
	{
		address: "0xe1A4c5BBb704a92599FEdB191f451E0d3a1ed842",
		chainId: 1,
		decimals: 18,
		name: "PolkaDomain",
		symbol: "NAME"
	},
	{
		address: "0x2f7B618993cc3848d6C7ed9CdD5e835E4Fe22b98",
		chainId: 1,
		decimals: 18,
		name: "Nami Corporation To",
		symbol: "NAMI"
	},
	{
		address: "0xA79e0012bb3379f8509a5ab49caB7e6Abb49701D",
		chainId: 1,
		decimals: 18,
		name: "NAMTANCOIN",
		symbol: "NAMTC"
	},
	{
		address: "0x9025f9A59694dd939739e05beB2502a567e8326f",
		chainId: 1,
		decimals: 18,
		name: "NamTanToken",
		symbol: "NAMTT"
	},
	{
		address: "0xB393cd041aFC1ACA4C380C663793fE2c7b8A0212",
		chainId: 1,
		decimals: 18,
		name: "NanTrade",
		symbol: "NAN"
	},
	{
		address: "0xFFE02ee4C69eDf1b340fCaD64fbd6b37a7b9e265",
		chainId: 1,
		decimals: 8,
		name: "NANJCOIN",
		symbol: "NANJ"
	},
	{
		address: "0x4a615bB7166210CCe20E6642a6f8Fb5d4D044496",
		chainId: 1,
		decimals: 18,
		name: "NAOS Finance",
		symbol: "NAOS"
	},
	{
		address: "0x5d65D971895Edc438f465c17DB6992698a52318D",
		chainId: 1,
		decimals: 18,
		name: "Nebulas",
		symbol: "NAS",
		extensions: {
			color: "#222222",
			isVerified: true
		}
	},
	{
		address: "0x90D46A9636B973f18186541d1B04ed3621a49Cb0",
		chainId: 1,
		decimals: 18,
		name: "Natmin",
		symbol: "NAT"
	},
	{
		address: "0xEcb79A9B7559168174c41B153997BC462B6dFE4e",
		chainId: 1,
		decimals: 18,
		name: "Nature",
		symbol: "NAT"
	},
	{
		address: "0x588047365dF5BA589F923604AAC23d673555c623",
		chainId: 1,
		decimals: 18,
		name: "NaviToken",
		symbol: "NAVI"
	},
	{
		address: "0x7D529a5b3c41126760A0fA3c1a9652d8A7A07793",
		chainId: 1,
		decimals: 18,
		name: "Narwhale",
		symbol: "NAWA"
	},
	{
		address: "0x17f8aFB63DfcDcC90ebE6e84F060Cc306A98257D",
		chainId: 1,
		decimals: 18,
		name: "NebulaAiToken",
		symbol: "NBAI"
	},
	{
		address: "0x9F195617fA8fbAD9540C5D113A99A0a0172aaEDC",
		chainId: 1,
		decimals: 18,
		name: "Niobium Coin",
		symbol: "NBC"
	},
	{
		address: "0x9275e8386A5BDdA160c0e621e9A6067b8fd88ea2",
		chainId: 1,
		decimals: 18,
		name: "Nobunaga",
		symbol: "NBNG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEB58343b36C7528F23CAAe63a150240241310049",
		chainId: 1,
		decimals: 18,
		name: "Nimbus",
		symbol: "NBU"
	},
	{
		address: "0x809826cceAb68c387726af962713b64Cb5Cb3CCA",
		chainId: 1,
		decimals: 18,
		name: "Nucleus Vision",
		symbol: "NCASH"
	},
	{
		address: "0x5d48F293BaED247A2D0189058bA37aa238bD4725",
		chainId: 1,
		decimals: 18,
		name: "NeuroChain",
		symbol: "NCC"
	},
	{
		address: "0x9344b383b1D59b5ce3468B234DAB43C7190ba735",
		chainId: 1,
		decimals: 18,
		name: "NeedsCoin",
		symbol: "NCC"
	},
	{
		address: "0xE0C8b298db4cfFE05d1bEA0bb1BA414522B33C1B",
		chainId: 1,
		decimals: 18,
		name: "Nuco Cloud",
		symbol: "NCDT"
	},
	{
		address: "0xDB5C3C46E28B53a39C255AA39A411dD64e5fed9c",
		chainId: 1,
		decimals: 18,
		name: "Neos Metaverse Credits",
		symbol: "NCR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9E46A38F5DaaBe8683E10793b06749EEF7D733d1",
		chainId: 1,
		decimals: 18,
		name: "PolySwarm",
		symbol: "NCT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8A9c4dfe8b9D8962B31e4e16F8321C44d48e246E",
		chainId: 1,
		decimals: 18,
		name: "Name Change Token",
		symbol: "NCT"
	},
	{
		address: "0xA54ddC7B3CcE7FC8b1E3Fa0256D0DB80D2c10970",
		chainId: 1,
		decimals: 18,
		name: "NEVERDIE Coin",
		symbol: "NDC"
	},
	{
		address: "0x6Ec47a178A9d50d4ec4683003d8324f19Ca35382",
		chainId: 1,
		decimals: 18,
		name: "NDN Link",
		symbol: "NDN"
	},
	{
		address: "0x739763a258640919981F9bA610AE65492455bE53",
		chainId: 1,
		decimals: 18,
		name: "Node Runners",
		symbol: "NDR"
	},
	{
		address: "0x747f564d258612ec5c4E24742C5fd4110bCbe46B",
		chainId: 1,
		decimals: 18,
		name: "Nodeseeds",
		symbol: "NDS"
	},
	{
		address: "0x1966d718A565566e8E202792658D7b5Ff4ECe469",
		chainId: 1,
		decimals: 18,
		name: "nDEX",
		symbol: "NDX"
	},
	{
		address: "0x86772b1409b61c639EaAc9Ba0AcfBb6E238e5F83",
		chainId: 1,
		decimals: 18,
		name: "Indexed Finance",
		symbol: "NDX"
	},
	{
		address: "0xAcCe88F5A63A5e65DB9AA7303720bE16b556E751",
		chainId: 1,
		decimals: 18,
		name: "Coineal Token",
		symbol: "NEAL"
	},
	{
		address: "0x7f0c8B125040f707441cad9e5eD8a8408673b455",
		chainId: 1,
		decimals: 18,
		name: "CSP DAO Network",
		symbol: "NEBO"
	},
	{
		address: "0xCc80C051057B774cD75067Dc48f8987C4Eb97A5e",
		chainId: 1,
		decimals: 18,
		name: "Nectar",
		symbol: "NEC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd8446236FA95b9b5f9fd0f8E7Df1a944823c683d",
		chainId: 1,
		decimals: 18,
		name: "NEEO",
		symbol: "NEEO"
	},
	{
		address: "0x957b28f93B0e01557E21e6c564Ab26ddc2d18EC5",
		chainId: 1,
		decimals: 18,
		name: "NemoCoin",
		symbol: "NEMO"
	},
	{
		address: "0x04abEdA201850aC0124161F037Efd70c74ddC74C",
		chainId: 1,
		decimals: 18,
		name: "Nest Protocol",
		symbol: "NEST"
	},
	{
		address: "0xcfb98637bcae43C13323EAa1731cED2B716962fD",
		chainId: 1,
		decimals: 18,
		name: "NIMIQ",
		symbol: "NET"
	},
	{
		address: "0xA823E6722006afe99E91c30FF5295052fe6b8E32",
		chainId: 1,
		decimals: 18,
		name: "Neumark",
		symbol: "NEU",
		extensions: {
			color: "#b3ba00",
			isVerified: true
		}
	},
	{
		address: "0x814964b1bceAf24e26296D031EaDf134a2Ca4105",
		chainId: 1,
		decimals: 0,
		name: "Newbium",
		symbol: "NEWB"
	},
	{
		address: "0x1997830B5beB723f5089bb8fc38766d419a0444d",
		chainId: 1,
		decimals: 9,
		name: "Newinu",
		symbol: "NEWINU"
	},
	{
		address: "0x94B593002a327f2A3f1B190c50D3bcc8b869B5F5",
		chainId: 1,
		decimals: 18,
		name: "NewsTokens",
		symbol: "NEWS"
	},
	{
		address: "0xAE9CBE6eBf72A51c9Fcea3830485614486318Fd4",
		chainId: 1,
		decimals: 18,
		name: "Newtonium",
		symbol: "NEWTON"
	},
	{
		address: "0xE2dc070524A6e305ddB64d8513DC444B6a1ec845",
		chainId: 1,
		decimals: 8,
		name: "Nash",
		symbol: "NEX"
	},
	{
		address: "0xB62132e35a6c13ee1EE0f84dC5d40bad8d815206",
		chainId: 1,
		decimals: 18,
		name: "Nexo",
		symbol: "NEXO",
		extensions: {
			color: "#2891F9",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x377d552914E7A104bC22B4F3B6268dDC69615Be7",
		chainId: 1,
		decimals: 18,
		name: "NEXT",
		symbol: "NEXT"
	},
	{
		address: "0xb0866289e870D2efc282406cF4123Df6E5BcB652",
		chainId: 1,
		decimals: 18,
		name: "NoFakeCoin",
		symbol: "NFC"
	},
	{
		address: "0xcB8d1260F9c92A3A545d409466280fFdD7AF7042",
		chainId: 1,
		decimals: 18,
		name: "NFT Protocol",
		symbol: "NFT"
	},
	{
		address: "0xEF40B859D21e4d566a3d713e756197c021BffaAa",
		chainId: 1,
		decimals: 6,
		name: "APENFT",
		symbol: "NFT"
	},
	{
		address: "0x1847e59d9C2f30c7fE0347BA3E53DA1ae8A7F0E8",
		chainId: 1,
		decimals: 18,
		name: "NFTA",
		symbol: "NFTA"
	},
	{
		address: "0xBf6Ff49FfD3d104302Ef0AB0F10f5a84324c091c",
		chainId: 1,
		decimals: 18,
		name: "Nftfy",
		symbol: "NFTFY"
	},
	{
		address: "0xe5feeaC09D36B18b3FA757E5Cf3F8dA6B8e27F4C",
		chainId: 1,
		decimals: 18,
		name: "NFT Index",
		symbol: "NFTI"
	},
	{
		address: "0x68bB81B3F67f7AAb5fd1390ECB0B8e1a806F2465",
		chainId: 1,
		decimals: 18,
		name: "NFT Platform Index",
		symbol: "NFTP"
	},
	{
		address: "0x08037036451C768465369431Da5C671ad9B37dBc",
		chainId: 1,
		decimals: 18,
		name: "NFT Stars",
		symbol: "NFTS"
	},
	{
		address: "0x87d73E916D7057945c9BcD8cdd94e42A6F47f776",
		chainId: 1,
		decimals: 18,
		name: "NFTX",
		symbol: "NFTX"
	},
	{
		address: "0x2D39EC4da54329D28d230B4973F5Aa27886C3AeE",
		chainId: 1,
		decimals: 18,
		name: "NFX Coin",
		symbol: "NFXC"
	},
	{
		address: "0x1cBb83EbcD552D5EBf8131eF8c9CD9d9BAB342bC",
		chainId: 1,
		decimals: 18,
		name: "Non-Fungible Yearn",
		symbol: "NFY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x72dD4b6bd852A3AA172Be4d6C5a6dbEc588cf131",
		chainId: 1,
		decimals: 18,
		name: "NAGA",
		symbol: "NGC",
		extensions: {
			color: "#f80000",
			isVerified: true
		}
	},
	{
		address: "0xed0d5747A9AB03a75fBfEC3228cd55848245B75d",
		chainId: 1,
		decimals: 6,
		name: "e Money",
		symbol: "NGM"
	},
	{
		address: "0x62947ff43626eA26427Be5aE4c7dD03b4f1cA872",
		chainId: 1,
		decimals: 8,
		name: "Neo Holistic Coin",
		symbol: "NHC"
	},
	{
		address: "0xdB11F6Fc8E16c02719e9c2Eb3c4C762feE8F5C5b",
		chainId: 1,
		decimals: 18,
		name: "Nydronia",
		symbol: "NIA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x53F64bE99Da00fec224EAf9f8ce2012149D2FC88",
		chainId: 1,
		decimals: 18,
		name: "Nice",
		symbol: "NICE"
	},
	{
		address: "0xC4895F94340f30Fc126D1149d6cBD4a5FeA50890",
		chainId: 1,
		decimals: 18,
		name: "Nickel",
		symbol: "NICKEL"
	},
	{
		address: "0x7e291890B01E5181f7ecC98D79ffBe12Ad23df9e",
		chainId: 1,
		decimals: 18,
		name: "Unifty",
		symbol: "NIF"
	},
	{
		address: "0x7c8155909cd385F120A56eF90728dD50F9CcbE52",
		chainId: 1,
		decimals: 15,
		name: "Nahmii",
		symbol: "NII"
	},
	{
		address: "0x852e5427c86A3b46DD25e5FE027bb15f53c4BCb8",
		chainId: 1,
		decimals: 15,
		name: "NiiFi",
		symbol: "NIIFI"
	},
	{
		address: "0x645035d009182b480fE554D2926664105d62C309",
		chainId: 1,
		decimals: 9,
		name: "Shiba Cloud",
		symbol: "NIMBUS"
	},
	{
		address: "0xe26517A9967299453d3F1B48Aa005E6127e67210",
		chainId: 1,
		decimals: 18,
		name: "Ninfa Money",
		symbol: "NIMFA"
	},
	{
		address: "0x5554e04e76533E1d14c52f05beEF6c9d329E1E30",
		chainId: 1,
		decimals: 0,
		name: "Autonio",
		symbol: "NIO"
	},
	{
		address: "0xCc2AD789f459Bc73e5Fb33364964B658a62C1Ee7",
		chainId: 1,
		decimals: 8,
		name: "NioShares",
		symbol: "NIO"
	},
	{
		address: "0xc813EA5e3b48BEbeedb796ab42A30C5599b01740",
		chainId: 1,
		decimals: 4,
		name: "Autonio",
		symbol: "NIOX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5Cf04716BA20127F1E2297AdDCf4B5035000c9eb",
		chainId: 1,
		decimals: 18,
		name: "NKN",
		symbol: "NKN",
		extensions: {
			color: "#23336f",
			isVerified: true
		}
	},
	{
		address: "0x48E234d2Ddcb32d780971c0Df7fDDe25Bba192DE",
		chainId: 1,
		decimals: 18,
		name: "NEWLAND",
		symbol: "NLD"
	},
	{
		address: "0x1951aB088141e69A3713a351b0d55bA3acDa192C",
		chainId: 1,
		decimals: 8,
		name: "Night Life Crypto",
		symbol: "NLIFE"
	},
	{
		address: "0xCeE4019Fd41ECDc8bae9EFDd20510f4b6FAA6197",
		chainId: 1,
		decimals: 18,
		name: "Nollya Coin",
		symbol: "NLYA"
	},
	{
		address: "0x1776e1F26f98b1A5dF9cD347953a26dd3Cb46671",
		chainId: 1,
		decimals: 18,
		name: "Numeraire",
		symbol: "NMR",
		extensions: {
			color: "#25292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xd9A6803f41A006CBf389f21e55D7A6079Dfe8DF3",
		chainId: 1,
		decimals: 19,
		name: "NovaDeFi",
		symbol: "NMT"
	},
	{
		address: "0xB66A2131A6B840dd020151f80723CAED603eFB51",
		chainId: 1,
		decimals: 18,
		name: "NNB Token",
		symbol: "NNB"
	},
	{
		address: "0x0FD3822072ad001aac1c90A09d9506f097F24458",
		chainId: 1,
		decimals: 9,
		name: "NOA PLAY",
		symbol: "NOA"
	},
	{
		address: "0x58a4884182d9E835597f405e5F258290E46ae7C2",
		chainId: 1,
		decimals: 18,
		name: "Noah Coin",
		symbol: "NOAH"
	},
	{
		address: "0xFcE94Fde7aC091c2F1dB00d62F15EeB82b624389",
		chainId: 1,
		decimals: 18,
		name: "Noah s Ark",
		symbol: "NOAHARK"
	},
	{
		address: "0x41b3F18c6384Dc9A39c33AFEcA60d9b8e61eAa9F",
		chainId: 1,
		decimals: 18,
		name: "Noah Decentralized",
		symbol: "NOAHP"
	},
	{
		address: "0xF4FaEa455575354d2699BC209B0a65CA99F69982",
		chainId: 1,
		decimals: 18,
		name: "No BS Crypto",
		symbol: "NOBS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x435d664F72D6F194ef67d63B5f3936650187b131",
		chainId: 1,
		decimals: 18,
		name: "Pocket Node",
		symbol: "NODE"
	},
	{
		address: "0x0C3eF32f802967DB75B9D49fE1e76620151cCB81",
		chainId: 1,
		decimals: 5,
		name: "Whole Network",
		symbol: "NODE"
	},
	{
		address: "0xDa007777D86AC6d989cC9f79A73261b3fC5e0DA0",
		chainId: 1,
		decimals: 18,
		name: "DAppNode",
		symbol: "NODE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa8c8CfB141A3bB59FEA1E2ea6B79b5ECBCD7b6ca",
		chainId: 1,
		decimals: 18,
		name: "Syntropy",
		symbol: "NOIA"
	},
	{
		address: "0x36151737B45017234E9570Cf9a1cAc97138953C2",
		chainId: 1,
		decimals: 18,
		name: "Noiz Chain",
		symbol: "NOIZ"
	},
	{
		address: "0x1fC52f1ABade452Dd4674477D4711951700b3d27",
		chainId: 1,
		decimals: 18,
		name: "Noku",
		symbol: "NOKU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x643B6870beabee941B9260a0A878bcF4A61Fb0f1",
		chainId: 1,
		decimals: 0,
		name: "None",
		symbol: "NONE"
	},
	{
		address: "0x1FC05d480B1eF1175a31123bFDBd36BfEE256889",
		chainId: 1,
		decimals: 18,
		name: "noob finance",
		symbol: "NOOB"
	},
	{
		address: "0x420Ab548B18911717Ed7C4CCBF46371EA758458C",
		chainId: 1,
		decimals: 18,
		name: "NOODLE Finance",
		symbol: "NOODLE"
	},
	{
		address: "0x6e9730EcFfBed43fD876A264C982e254ef05a0DE",
		chainId: 1,
		decimals: 18,
		name: "Nord Finance",
		symbol: "NORD"
	},
	{
		address: "0x7061ee0896Ab2c1865078B6c91731f67A89eA6A4",
		chainId: 1,
		decimals: 18,
		name: "Nitrous Finance",
		symbol: "NOS"
	},
	{
		address: "0x0027449Bf0887ca3E431D263FFDeFb244D95b555",
		chainId: 1,
		decimals: 18,
		name: "Token Not",
		symbol: "NOT"
	},
	{
		address: "0x40ce0A1D8F4999807b92ec266a025F071814b15d",
		chainId: 1,
		decimals: 18,
		name: "Dai If Trump Loses The 2020 Election",
		symbol: "NOTRUMP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB48B7E5bF6563B3e0A85055821A83Deb8CFc12f6",
		chainId: 1,
		decimals: 3,
		name: "NOVA",
		symbol: "NOVA"
	},
	{
		address: "0xE9A95d175a5f4C9369f3b74222402eB1b837693b",
		chainId: 1,
		decimals: 8,
		name: "ChangeNOW",
		symbol: "NOW"
	},
	{
		address: "0xeC46f8207D766012454c408De210BCBc2243E71c",
		chainId: 1,
		decimals: 18,
		name: "Nitro",
		symbol: "NOX"
	},
	{
		address: "0x4cE6B362Bc77A24966Dda9078f9cEF81b3B886a7",
		chainId: 1,
		decimals: 18,
		name: "NPER",
		symbol: "NPER"
	},
	{
		address: "0x97fB6Fc2AD532033Af97043B563131C5204F8A35",
		chainId: 1,
		decimals: 18,
		name: "Plus Coin",
		symbol: "NPLC"
	},
	{
		address: "0x28b5E12CcE51f15594B0b91d5b5AdaA70F684a02",
		chainId: 1,
		decimals: 2,
		name: "NaPoleonX",
		symbol: "NPX"
	},
	{
		address: "0xA15C7Ebe1f07CaF6bFF097D8a589fb8AC49Ae5B3",
		chainId: 1,
		decimals: 18,
		name: "Pundi X  OLD",
		symbol: "NPXS"
	},
	{
		address: "0x69fa8e7F6bf1ca1fB0de61e1366f7412b827CC51",
		chainId: 1,
		decimals: 9,
		name: "EnreachDAO",
		symbol: "NRCH"
	},
	{
		address: "0x000000085824F23a070c2474442ED014c0e46B58",
		chainId: 1,
		decimals: 18,
		name: "Neuromachine Eternal",
		symbol: "NRM"
	},
	{
		address: "0x4282456d6d24332758fca738f98c3bb0F04da215",
		chainId: 1,
		decimals: 4,
		name: "NORMANCOMICS",
		symbol: "NRMN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3918C42F14F2eB1168365F911f63E540E5A306b5",
		chainId: 1,
		decimals: 8,
		name: "Neural Protocol",
		symbol: "NRP"
	},
	{
		address: "0x4E3Bddd468AbfC6C88bc25dAA5d894380CEd5bc8",
		chainId: 1,
		decimals: 18,
		name: "NSS Coin",
		symbol: "NSS"
	},
	{
		address: "0x20945cA1df56D237fD40036d47E866C7DcCD2114",
		chainId: 1,
		decimals: 18,
		name: "Nsure Network",
		symbol: "NSURE"
	},
	{
		address: "0xbE393AA534F82c0ffAC31BF06A23e283AcB3352B",
		chainId: 1,
		decimals: 18,
		name: "TokenAsset",
		symbol: "NTB"
	},
	{
		address: "0x5D4d57cd06Fa7fe99e26fdc481b468f77f05073C",
		chainId: 1,
		decimals: 18,
		name: "Netkoin",
		symbol: "NTK"
	},
	{
		address: "0x69BEaB403438253f13b6e92Db91F7FB849258263",
		chainId: 1,
		decimals: 18,
		name: "Neurotoken",
		symbol: "NTK"
	},
	{
		address: "0x8A99ED8a1b204903Ee46e733f2c1286F6d20b177",
		chainId: 1,
		decimals: 18,
		name: "Fujinto",
		symbol: "NTO"
	},
	{
		address: "0xcfB152E5b93fc2C9906d4ff41fC8407DFa5e8851",
		chainId: 1,
		decimals: 18,
		name: "NTON",
		symbol: "NTON"
	},
	{
		address: "0xeCcf15A4B5976a1365BAeD5297058B4cA42777C0",
		chainId: 1,
		decimals: 18,
		name: "Nosturis",
		symbol: "NTRS"
	},
	{
		address: "0x44Ea84a85616F8e9cD719Fc843DE31D852ad7240",
		chainId: 1,
		decimals: 15,
		name: "NO Trump Augur Pred",
		symbol: "NTRUMP"
	},
	{
		address: "0xFc0d6Cf33e38bcE7CA7D89c0E292274031b7157A",
		chainId: 1,
		decimals: 18,
		name: "Netvrk",
		symbol: "NTVRK"
	},
	{
		address: "0x2233799Ee2683d75dfefAcbCd2A26c78D34b470d",
		chainId: 1,
		decimals: 18,
		name: "Network",
		symbol: "NTWK"
	},
	{
		address: "0xFDb15e5E6799Be72798b1ccFAEcbF186Bf73A0c4",
		chainId: 1,
		decimals: 8,
		name: "NitroEX",
		symbol: "NTX"
	},
	{
		address: "0x4fE83213D56308330EC302a8BD641f1d0113A4Cc",
		chainId: 1,
		decimals: 18,
		name: "NuCypher",
		symbol: "NU"
	},
	{
		address: "0x245ef47D4d0505ECF3Ac463F4d81f41ADE8f1fd1",
		chainId: 1,
		decimals: 18,
		name: "Nuggets",
		symbol: "NUG"
	},
	{
		address: "0xc58c0Fca06908E66540102356f2E91edCaEB8D81",
		chainId: 1,
		decimals: 18,
		name: "HalfLife",
		symbol: "NUKE"
	},
	{
		address: "0xB91318F35Bdb262E9423Bc7c7c2A3A93DD93C92C",
		chainId: 1,
		decimals: 18,
		name: "NULS",
		symbol: "NULS"
	},
	{
		address: "0x303D396bB1E2A73b1536665964aa9f5AA0f7f9cA",
		chainId: 1,
		decimals: 0,
		name: "Numisma Coin",
		symbol: "NUMA"
	},
	{
		address: "0x0C6144c16af288948C8fdB37fD8fEc94bfF3d1d9",
		chainId: 1,
		decimals: 6,
		name: "Neutral Dollar",
		symbol: "NUSD"
	},
	{
		address: "0x84294FC9710e1252d407d3D80A84bC39001bd4A8",
		chainId: 1,
		decimals: 18,
		name: "Squirrel Finance",
		symbol: "NUTS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE2Db94E8D4E4144c336e45668a792D17D48a482c",
		chainId: 1,
		decimals: 18,
		name: "Nuvo Cash",
		symbol: "NUVO"
	},
	{
		address: "0x89bD2E7e388fAB44AE88BEf4e1AD12b4F1E0911c",
		chainId: 1,
		decimals: 18,
		name: "Peanut",
		symbol: "NUX"
	},
	{
		address: "0x38F7Cd43662D1cfF4CC3c2C4b749F7cfEd1d1DB3",
		chainId: 1,
		decimals: 18,
		name: "Neeva Defi",
		symbol: "NVA"
	},
	{
		address: "0x45e42D659D9f9466cD5DF622506033145a9b89Bc",
		chainId: 1,
		decimals: 3,
		name: "Nexium",
		symbol: "NxC"
	},
	{
		address: "0x41Ab75435668919Bb507F871dd01E9762C2D173a",
		chainId: 1,
		decimals: 18,
		name: "XChain Token",
		symbol: "NXCT"
	},
	{
		address: "0x6839aC5Ea8082688B706C773D5d2aFd7d503FDD4",
		chainId: 1,
		decimals: 0,
		name: "Next Level",
		symbol: "NXL"
	},
	{
		address: "0xd7c49CEE7E9188cCa6AD8FF264C1DA2e69D4Cf3B",
		chainId: 1,
		decimals: 18,
		name: "Nexus Mutual",
		symbol: "NXM"
	},
	{
		address: "0x7627de4B93263a6a7570b8dAfa64bae812e5c394",
		chainId: 1,
		decimals: 8,
		name: "NXX",
		symbol: "NXX"
	},
	{
		address: "0x5c6183d10A00CD747a6Dbb5F658aD514383e9419",
		chainId: 1,
		decimals: 8,
		name: "NXX OLD",
		symbol: "NXX OLD"
	},
	{
		address: "0xbF4a9A37EcFc21825011285222c36aB35De51F14",
		chainId: 1,
		decimals: 18,
		name: "Nyan V2",
		symbol: "NYAN-2"
	},
	{
		address: "0xC1215988f2e555AC324D1E2d2A6164f1010Ff29f",
		chainId: 1,
		decimals: 8,
		name: "Nyantereum Internat",
		symbol: "NYANTE"
	},
	{
		address: "0x798A9055a98913835bBFb45a0BbC209438dcFD97",
		chainId: 1,
		decimals: 18,
		name: "New Year Bull",
		symbol: "NYB"
	},
	{
		address: "0x24D8C2163D6B13A6B8770B794d00c98Cb4E0cBCa",
		chainId: 1,
		decimals: 18,
		name: "O OCEAN MAR22",
		symbol: "O-OCEAN-MAR22"
	},
	{
		address: "0xEe9801669C6138E84bD50dEB500827b776777d28",
		chainId: 1,
		decimals: 18,
		name: "O3 Swap",
		symbol: "O3"
	},
	{
		address: "0xf17E9E4e32d842e4dDFbed5750A26f7Bd77777EE",
		chainId: 1,
		decimals: 18,
		name: "One Army Coin",
		symbol: "OAC"
	},
	{
		address: "0x5e888B83B7287EED4fB7DA7b7d0A0D4c735d94b3",
		chainId: 1,
		decimals: 18,
		name: "OAK",
		symbol: "OAK"
	},
	{
		address: "0x1788430620960F9a70e3DC14202a3A35ddE1A316",
		chainId: 1,
		decimals: 18,
		name: "OpenAlexa Protocol",
		symbol: "OAP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x701C244b988a513c945973dEFA05de933b23Fe1D",
		chainId: 1,
		decimals: 18,
		name: "OAX",
		symbol: "OAX"
	},
	{
		address: "0x43E577338d6C07bc92a06C8CA4B781470515dFA8",
		chainId: 1,
		decimals: 18,
		name: "Oblichain",
		symbol: "OBC"
	},
	{
		address: "0x3678d8CC9Eb08875A3720f34c1C8d1e1B31F5A11",
		chainId: 1,
		decimals: 18,
		name: "Obee Network",
		symbol: "OBEE"
	},
	{
		address: "0xa8b6d0bD067ce5B2e4E9e225b2e0fF5eb74DEd8A",
		chainId: 1,
		decimals: 18,
		name: "OBIC",
		symbol: "OBIC"
	},
	{
		address: "0xeDADeB5fAa413e6c8623461849DFD0B7C3790c32",
		chainId: 1,
		decimals: 18,
		name: "Obortech",
		symbol: "OBOT"
	},
	{
		address: "0x595643D83B35df38E29058976C04000AcFA31570",
		chainId: 1,
		decimals: 18,
		name: "OBR",
		symbol: "OBR"
	},
	{
		address: "0x8064d9Ae6cDf087b1bcd5BDf3531bD5d8C537a68",
		chainId: 1,
		decimals: 18,
		name: "BoringDAO BTC",
		symbol: "OBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x466912bAA9430a4a460b141ee8C580D817441449",
		chainId: 1,
		decimals: 18,
		name: "BLOCKMAX",
		symbol: "OCB"
	},
	{
		address: "0x0235fE624e044A05eeD7A43E16E3083bc8A4287A",
		chainId: 1,
		decimals: 18,
		name: "Original Crypto Coin",
		symbol: "OCC"
	},
	{
		address: "0x2F109021aFe75B949429fe30523Ee7C0D5B27207",
		chainId: 1,
		decimals: 18,
		name: "OccamFi",
		symbol: "OCC"
	},
	{
		address: "0x967da4048cD07aB37855c090aAF366e4ce1b9F48",
		chainId: 1,
		decimals: 18,
		name: "Ocean",
		symbol: "OCEAN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7AFeBBB46fDb47ed17b22ed075Cde2447694fB9e",
		chainId: 1,
		decimals: 18,
		name: "Ocean Token",
		symbol: "OCEAN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4092678e4E78230F46A1534C0fbc8fA39780892B",
		chainId: 1,
		decimals: 18,
		name: "Odyssey",
		symbol: "OCN"
	},
	{
		address: "0xB99a4bB525ece962b549e6873229c5e6921BfF16",
		chainId: 1,
		decimals: 18,
		name: "OctaPay",
		symbol: "OCTA"
	},
	{
		address: "0x7240aC91f01233BaAf8b064248E80feaA5912BA3",
		chainId: 1,
		decimals: 18,
		name: "OctoFi",
		symbol: "OCTO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x49e90537D5eF6778fd000D1F05be20134F9f6dC6",
		chainId: 1,
		decimals: 8,
		name: "ODDO coin",
		symbol: "ODC"
	},
	{
		address: "0xCd2828fc4D8E8a0eDe91bB38CF64B1a81De65Bf6",
		chainId: 1,
		decimals: 18,
		name: "Oddz",
		symbol: "ODDZ"
	},
	{
		address: "0xbf52F2ab39e26E0951d2a02b49B7702aBe30406a",
		chainId: 1,
		decimals: 18,
		name: "ODEM",
		symbol: "ODE"
	},
	{
		address: "0xa960d2bA7000d58773E7fa5754DeC3Bb40A069D5",
		chainId: 1,
		decimals: 18,
		name: "One DEX",
		symbol: "ODEX"
	},
	{
		address: "0xa49DC04D118bDf4a3471F593C1BBA0c99B2187eA",
		chainId: 1,
		decimals: 18,
		name: "Odius",
		symbol: "ODI"
	},
	{
		address: "0x57c8D5d5b87A1580FDAF996cEF674Bb0d7F14C98",
		chainId: 1,
		decimals: 18,
		name: "OdinBrowser",
		symbol: "ODIN"
	},
	{
		address: "0x9c306A78b1a904e83115c05Ac67c1Ef07C653651",
		chainId: 1,
		decimals: 18,
		name: "BoringDAO DOGE",
		symbol: "ODOGE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc0A25a24CcE412E2Fb407c08E3785437FEE9Ad1d",
		chainId: 1,
		decimals: 18,
		name: "Orient",
		symbol: "OFT"
	},
	{
		address: "0x8a4491936a8e5A1662c8a755932b83dBE9634b0d",
		chainId: 1,
		decimals: 18,
		name: "One Genesis",
		symbol: "OG"
	},
	{
		address: "0x5f4506dB5b568e103532F84d32A285cDd5Aa5751",
		chainId: 1,
		decimals: 10,
		name: "Organik",
		symbol: "OGK"
	},
	{
		address: "0x8207c1FfC5B6804F6024322CcF34F29c3541Ae26",
		chainId: 1,
		decimals: 18,
		name: "Origin Protocol",
		symbol: "OGN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFF0E5e014cf97e0615cb50F6f39Da6388E2FaE6E",
		chainId: 1,
		decimals: 18,
		name: "Origo",
		symbol: "OGO"
	},
	{
		address: "0x1051a014E4b3F2bD08E5A7e52522f0F71628162B",
		chainId: 1,
		decimals: 18,
		name: "GOTOGODS",
		symbol: "OGODS"
	},
	{
		address: "0x383518188C0C6d7730D91b2c03a03C837814a899",
		chainId: 1,
		decimals: 9,
		name: "Olympus",
		symbol: "OHM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6f539a9456A5BCb6334A1A41207c3788f5825207",
		chainId: 1,
		decimals: 18,
		name: "Ohni",
		symbol: "OHNI"
	},
	{
		address: "0x7F2176cEB16dcb648dc924eff617c3dC2BEfd30d",
		chainId: 1,
		decimals: 0,
		name: "OHNI",
		symbol: "OHNI"
	},
	{
		address: "0x21E13cB3F3F26f92A62ac7Adab4093e8997D1fb1",
		chainId: 1,
		decimals: 2,
		name: "OIKOS",
		symbol: "OIKOS"
	},
	{
		address: "0xaE6eb6F6c0A1694968b9f78a4316319C27B0964b",
		chainId: 1,
		decimals: 18,
		name: "PETROLEUM",
		symbol: "OIL"
	},
	{
		address: "0x0275E1001e293C46CFe158B3702AADe0B99f88a5",
		chainId: 1,
		decimals: 18,
		name: "Oiler",
		symbol: "OIL"
	},
	{
		address: "0xA29a8e360C0CbA25A3719763fde43A1eE570271d",
		chainId: 1,
		decimals: 8,
		name: "OILage",
		symbol: "OIL"
	},
	{
		address: "0x9aeB50f542050172359A0e1a25a9933Bc8c01259",
		chainId: 1,
		decimals: 8,
		name: "OIN Finance",
		symbol: "OIN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBeef546ac8a4e0a80DC1E2d696968Ef54138f1d4",
		chainId: 1,
		decimals: 18,
		name: "Ojooo Coin",
		symbol: "OJX"
	},
	{
		address: "0x75231F58b43240C9718Dd58B4967c5114342a86c",
		chainId: 1,
		decimals: 18,
		name: "OKB",
		symbol: "OKB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x053E5BA7Cb9669Dcc2fEb2D0E1d3d4a0AD6aaE39",
		chainId: 1,
		decimals: 18,
		name: "3X Short OKB Token",
		symbol: "OKBBEAR"
	},
	{
		address: "0x8aF785687ee8D75114B028997c9ca36b5CC67Bc4",
		chainId: 1,
		decimals: 18,
		name: "3X Long OKB Token",
		symbol: "OKBBULL"
	},
	{
		address: "0x889BC62E94bb6902D022bB82B38f7FCd637Df28C",
		chainId: 1,
		decimals: 18,
		name: "1X Short OKB Token",
		symbol: "OKBHEDGE"
	},
	{
		address: "0xEEaa34aF95b034BaDa4baF565063132C765b1fA5",
		chainId: 1,
		decimals: 18,
		name: "OLCF",
		symbol: "OLCF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC66eA802717bFb9833400264Dd12c2bCeAa34a6d",
		chainId: 1,
		decimals: 18,
		name: "MakerDAO",
		symbol: "OLD_MKR"
	},
	{
		address: "0x9d9223436dDD466FC247e9dbbD20207e640fEf58",
		chainId: 1,
		decimals: 18,
		name: "Olive",
		symbol: "OLE"
	},
	{
		address: "0x64A60493D888728Cf42616e034a0dfEAe38EFCF0",
		chainId: 1,
		decimals: 18,
		name: "OneLedger",
		symbol: "OLT"
	},
	{
		address: "0x07C44B5Ac257C2255AA0933112c3b75A6BFf3Cb1",
		chainId: 1,
		decimals: 18,
		name: "BoringDAO LTC",
		symbol: "OLTC"
	},
	{
		address: "0x6595b8fD9C920C81500dCa94e53Cdc712513Fb1f",
		chainId: 1,
		decimals: 18,
		name: "Olyseum",
		symbol: "OLY"
	},
	{
		address: "0x3593D125a4f7849a1B059E64F4517A86Dd60c95d",
		chainId: 1,
		decimals: 18,
		name: "MANTRA DAO",
		symbol: "OM"
	},
	{
		address: "0x2baEcDf43734F22FD5c152DB08E3C27233F0c7d2",
		chainId: 1,
		decimals: 18,
		name: "OM Token",
		symbol: "OM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd6bD97a26232bA02172Ff86b055d5D7bE789335B",
		chainId: 1,
		decimals: 18,
		name: "Ormeus Cash",
		symbol: "OMC"
	},
	{
		address: "0xd26114cd6EE289AccF82350c8d8487fedB8A0C07",
		chainId: 1,
		decimals: 18,
		name: "OMGToken",
		symbol: "OMG",
		extensions: {
			color: "#101010",
			isVerified: true
		}
	},
	{
		address: "0xD22dcF31ca28Cf4dcE530a0F120e244f4B4539eb",
		chainId: 1,
		decimals: 18,
		name: "Omniunit",
		symbol: "OMNIUNIT"
	},
	{
		address: "0x3d1e3C5f658D74c585267350cac22Fd44e8D951c",
		chainId: 1,
		decimals: 18,
		name: "Open Monetary Syste",
		symbol: "OMS"
	},
	{
		address: "0x047187e53477be70DBe8Ea5B799318f2e165052F",
		chainId: 1,
		decimals: 18,
		name: "OTCMAKER Token",
		symbol: "OMT"
	},
	{
		address: "0x4E30910845f0cb4F66781B35c832Eafc09774022",
		chainId: 1,
		decimals: 18,
		name: "Mars Token",
		symbol: "OMT"
	},
	{
		address: "0xB5DBC6D3cf380079dF3b27135664b6BCF45D1869",
		chainId: 1,
		decimals: 8,
		name: "Project SHIVOM",
		symbol: "OMX"
	},
	{
		address: "0xD90E69f67203EBE02c917B5128629E77B4cd92dc",
		chainId: 1,
		decimals: 18,
		name: "One Cash",
		symbol: "ONC"
	},
	{
		address: "0x4D807509aECe24C0fa5A102b6a3B059Ec6E14392",
		chainId: 1,
		decimals: 18,
		name: "Menlo One",
		symbol: "ONE",
		extensions: {
			color: "#00aee9",
			isVerified: true
		}
	},
	{
		address: "0x946551DD05C5Abd7CC808927480225ce36D8c475",
		chainId: 1,
		decimals: 18,
		name: "One",
		symbol: "ONE"
	},
	{
		address: "0xC88F47067dB2E25851317A2FDaE73a22c0777c37",
		chainId: 1,
		decimals: 9,
		name: "oneBTC",
		symbol: "ONEBTC"
	},
	{
		address: "0xEc0d77a58528a218cBf41Fa6E1585c8D7A085868",
		chainId: 1,
		decimals: 9,
		name: "oneETH",
		symbol: "ONEETH"
	},
	{
		address: "0xB23be73573bC7E03DB6e5dfc62405368716d28a8",
		chainId: 1,
		decimals: 18,
		name: "One K Token",
		symbol: "ONEK"
	},
	{
		address: "0x18Cc17a1EeD37C02A77B0B96b7890C7730E2a2CF",
		chainId: 1,
		decimals: 9,
		name: "oneLINK",
		symbol: "ONELINK"
	},
	{
		address: "0x0B342C51d1592C41068d5D4b4DA4A68C0a04d5A4",
		chainId: 1,
		decimals: 18,
		name: "OneSwap DAO Token",
		symbol: "ONES"
	},
	{
		address: "0x7BD198b9107496fD5cC3d7655AF52f43a8eDBc4C",
		chainId: 1,
		decimals: 9,
		name: "oneVBTC",
		symbol: "ONEVBTC"
	},
	{
		address: "0x8F041A3940a5e6FB580075C3774E15FcFA0E1618",
		chainId: 1,
		decimals: 9,
		name: "oneWING",
		symbol: "ONEWING"
	},
	{
		address: "0x12419EEA0B053FfeA92f9afcD7986a495E2CF0Dd",
		chainId: 1,
		decimals: 18,
		name: "The Nifty ONEz",
		symbol: "ONEZ"
	},
	{
		address: "0xd341d1680Eeee3255b8C4c75bCCE7EB57f144dAe",
		chainId: 1,
		decimals: 18,
		name: "SoMee Social  OLD",
		symbol: "ONG"
	},
	{
		address: "0xcf9c692F7e62Af3c571D4173fd4ABf9A3E5330D0",
		chainId: 1,
		decimals: 18,
		name: "Onigiri",
		symbol: "ONIGIRI"
	},
	{
		address: "0x410e731c2970Dce3AdD351064AcF5cE9E33FDBf0",
		chainId: 1,
		decimals: 18,
		name: "ONBUFF",
		symbol: "ONIT"
	},
	{
		address: "0x6863bE0e7CF7ce860A574760e9020D519a8bDC47",
		chainId: 1,
		decimals: 18,
		name: "On.Live",
		symbol: "ONL"
	},
	{
		address: "0x33384af34b03eaCA63FD153F59589F504772b570",
		chainId: 1,
		decimals: 18,
		name: "onLEXpa Token",
		symbol: "ONLEXPA"
	},
	{
		address: "0xB31C219959E06f9aFBeB36b388a4BaD13E802725",
		chainId: 1,
		decimals: 18,
		name: "ONO",
		symbol: "ONOT"
	},
	{
		address: "0x5BB29c33C4A3C29f56F8ACa40B4dB91d8a5fe2c5",
		chainId: 1,
		decimals: 18,
		name: "One Share",
		symbol: "ONS"
	},
	{
		address: "0xcF78C7dD70d6F30F6E3609e905e78305Da98c863",
		chainId: 1,
		decimals: 18,
		name: "Ownix",
		symbol: "ONX"
	},
	{
		address: "0xE0aD1806Fd3E7edF6FF52Fdb822432e847411033",
		chainId: 1,
		decimals: 18,
		name: "OnX Finance",
		symbol: "ONX"
	},
	{
		address: "0x7778360F035C589fCE2f4eA5786CbD8B36e5396B",
		chainId: 1,
		decimals: 18,
		name: "OpenOcean",
		symbol: "OOE"
	},
	{
		address: "0x69D9905B2e5f6F5433212b7F3c954433F23C1572",
		chainId: 1,
		decimals: 18,
		name: "Onooks",
		symbol: "OOKS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xDb05EA0877A2622883941b939f0bb11d1ac7c400",
		chainId: 1,
		decimals: 18,
		name: "Opacity",
		symbol: "OPCT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x69c4BB240cF05D51eeab6985Bab35527d04a8C64",
		chainId: 1,
		decimals: 8,
		name: "OPEN Platform",
		symbol: "OPEN"
	},
	{
		address: "0xe9dE1C630753A15d7021Cc563429c21d4887506F",
		chainId: 1,
		decimals: 8,
		name: "OPEN",
		symbol: "OPEN"
	},
	{
		address: "0x9D86b1B2554ec410ecCFfBf111A6994910111340",
		chainId: 1,
		decimals: 8,
		name: "Open Platform",
		symbol: "OPEN"
	},
	{
		address: "0x69e8b9528CABDA89fe846C67675B5D73d463a916",
		chainId: 1,
		decimals: 18,
		name: "OPEN Governance Tok",
		symbol: "OPEN"
	},
	{
		address: "0x888888888889C00c67689029D7856AAC1065eC11",
		chainId: 1,
		decimals: 18,
		name: "Opium",
		symbol: "OPIUM"
	},
	{
		address: "0xF4c17Bc4979c1dc7b4CA50115358Dec58C67fD9d",
		chainId: 1,
		decimals: 18,
		name: "Omega Protocol Mone",
		symbol: "OPM"
	},
	{
		address: "0xA829F97373069ee5d23175e4105dF8fD49238Be7",
		chainId: 1,
		decimals: 18,
		name: "Opennity",
		symbol: "OPNN"
	},
	{
		address: "0x77599D2C6DB170224243e255e6669280F11F1473",
		chainId: 1,
		decimals: 18,
		name: "Opacity",
		symbol: "OPQ"
	},
	{
		address: "0x4355fC160f74328f9b383dF2EC589bB3dFd82Ba0",
		chainId: 1,
		decimals: 18,
		name: "OPUS",
		symbol: "OPT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7D25d9f10Cd224EcCe0Bc824A2eC800Db81C01d7",
		chainId: 1,
		decimals: 18,
		name: "ETHOPT",
		symbol: "OPT"
	},
	{
		address: "0x4FE5851C9af07df9e5AD8217aFAE1ea72737Ebda",
		chainId: 1,
		decimals: 18,
		name: "Open Predict Token",
		symbol: "OPT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x832904863978b94802123106e6eB491BDF0Df928",
		chainId: 1,
		decimals: 18,
		name: "OptiToken",
		symbol: "OPTI"
	},
	{
		address: "0x3fF9CeBbeAA7Bcc48a952a011A02a22a1FDd1C62",
		chainId: 1,
		decimals: 18,
		name: "ORDER",
		symbol: "OR"
	},
	{
		address: "0x4c11249814f11b9346808179Cf06e71ac328c1b5",
		chainId: 1,
		decimals: 18,
		name: "Oraichain Token",
		symbol: "ORAI"
	},
	{
		address: "0xEE1CeA7665bA7aa97e982EdeaeCb26B59a04d035",
		chainId: 1,
		decimals: 18,
		name: "ORAO Network",
		symbol: "ORAO"
	},
	{
		address: "0x1b7c4d4F226cCf3211B0F99c4fdfb84A2606bF8e",
		chainId: 1,
		decimals: 18,
		name: "Orb V2",
		symbol: "ORB"
	},
	{
		address: "0x2De27D3432d3188b53B02137E07B47896D347D45",
		chainId: 1,
		decimals: 9,
		name: "Orbicular",
		symbol: "ORBI"
	},
	{
		address: "0xff56Cc6b1E6dEd347aA0B7676C85AB0B3D08B0FA",
		chainId: 1,
		decimals: 18,
		name: "Orbs",
		symbol: "ORBS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x324AF2D5353f2dD138E234b359d30d67C64b1b20",
		chainId: 1,
		decimals: 18,
		name: "Oracle System",
		symbol: "ORC"
	},
	{
		address: "0x662b67d00A13FAf93254714DD601F5Ed49Ef2F51",
		chainId: 1,
		decimals: 18,
		name: "Orbit Chain",
		symbol: "ORC"
	},
	{
		address: "0x6F59e0461Ae5E2799F1fB3847f05a63B16d0DbF8",
		chainId: 1,
		decimals: 18,
		name: "ORCA Token",
		symbol: "ORCA"
	},
	{
		address: "0xD6cb2aDF47655B1bABdDc214d79257348CBC39A7",
		chainId: 1,
		decimals: 18,
		name: "Oracle Top 5 Index",
		symbol: "ORCL5"
	},
	{
		address: "0x69FE11b042789bC6E2FDaad064AfD32bb298aE05",
		chainId: 1,
		decimals: 18,
		name: "The Red Order",
		symbol: "ORDR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd2Fa8f92Ea72AbB35dBD6DECa57173d22db2BA49",
		chainId: 1,
		decimals: 18,
		name: "Origami Network",
		symbol: "ORI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd51e852630DeBC24E9e1041a03d80A0107F8Ef0C",
		chainId: 1,
		decimals: 0,
		name: "ORIUM",
		symbol: "ORM"
	},
	{
		address: "0x516E5436bAfdc11083654DE7Bb9b95382d08d5DE",
		chainId: 1,
		decimals: 8,
		name: "Ormeus Coin",
		symbol: "ORME"
	},
	{
		address: "0xc96DF921009B790dfFcA412375251ed1A2b75c60",
		chainId: 1,
		decimals: 8,
		name: "Ormeus Coin",
		symbol: "ORME"
	},
	{
		address: "0x8fB00FDeBb4E83f2C58b3bcD6732AC1B6A7b7221",
		chainId: 1,
		decimals: 8,
		name: "Orion Protocol",
		symbol: "ORN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0258F474786DdFd37ABCE6df6BBb1Dd5dfC4434a",
		chainId: 1,
		decimals: 8,
		name: "Orion Protocol",
		symbol: "ORN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc3Eb2622190c57429aac3901808994443b64B466",
		chainId: 1,
		decimals: 18,
		name: "ORO",
		symbol: "ORO"
	},
	{
		address: "0x1C5b760F133220855340003B43cC9113EC494823",
		chainId: 1,
		decimals: 18,
		name: "Cointorox",
		symbol: "OROX"
	},
	{
		address: "0xEB9A4B185816C354dB92DB09cC3B50bE60b901b6",
		chainId: 1,
		decimals: 18,
		name: "Origin Sport",
		symbol: "ORS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xac2e58A06E6265F1Cf5084EE58da68e5d75b49CA",
		chainId: 1,
		decimals: 18,
		name: "ORS Group",
		symbol: "ORS"
	},
	{
		address: "0x4e84A65B5664D33B67750771F8bEAeC458bD6729",
		chainId: 1,
		decimals: 18,
		name: "Orionix",
		symbol: "ORX"
	},
	{
		address: "0x5C0Bc243Fb13632c4D247F4f0bC27f2f58982C39",
		chainId: 1,
		decimals: 18,
		name: "ORYX",
		symbol: "ORYX"
	},
	{
		address: "0x24700A297960E8477Ce3CA6C58b70a7Af3410398",
		chainId: 1,
		decimals: 18,
		name: "Oasis City",
		symbol: "OSC"
	},
	{
		address: "0x39Ad22C916F42aF5f67371d6f2Fb0dab42321a89",
		chainId: 1,
		decimals: 4,
		name: "Osinachi",
		symbol: "OSINA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9B75848172677042269C63365B57B0A51c21d031",
		chainId: 1,
		decimals: 18,
		name: "Options Market",
		symbol: "OSM"
	},
	{
		address: "0xFFA52DCE6Eb5695436BE96CA9b7Df63382e4c34d",
		chainId: 1,
		decimals: 18,
		name: "Token Onyx S&P 500 Short",
		symbol: "OSPVS"
	},
	{
		address: "0x2C4e8f2D746113d0696cE89B35F0d8bF88E0AEcA",
		chainId: 1,
		decimals: 18,
		name: "OST",
		symbol: "OST",
		extensions: {
			color: "#34445b",
			isVerified: true
		}
	},
	{
		address: "0x8fcb1783bF4b71A51F702aF0c266729C4592204a",
		chainId: 1,
		decimals: 6,
		name: "OT Aave Interest Be",
		symbol: "OT-AUSDC-29DEC2022"
	},
	{
		address: "0x3D4e7F52efaFb9E0C70179B688FC3965a75BCfEa",
		chainId: 1,
		decimals: 8,
		name: "OT Compound Dai",
		symbol: "OT-CDAI-29DEC2022"
	},
	{
		address: "0xA86a0Da9D05d0771955DF05B44Ca120661aF16DE",
		chainId: 1,
		decimals: 18,
		name: "OTCBTC Token",
		symbol: "OTB"
	},
	{
		address: "0x881Ef48211982D01E2CB7092C915E647Cd40D85C",
		chainId: 1,
		decimals: 18,
		name: "Open Trading Network",
		symbol: "OTN"
	},
	{
		address: "0x028CE5EA3298a50c0D8a27b937b1F48Cf0d68b56",
		chainId: 1,
		decimals: 18,
		name: "OnTime",
		symbol: "OTO"
	},
	{
		address: "0xdff3d69a00759449F091561A0Af99a218982Bd7f",
		chainId: 1,
		decimals: 18,
		name: "Our Pay",
		symbol: "OUR"
	},
	{
		address: "0x2A8e1E676Ec238d8A992307B495b45B3fEAa5e86",
		chainId: 1,
		decimals: 18,
		name: "Origin Dollar",
		symbol: "OUSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x49D09cDa1Deb8a1680F1270C5ed15218fc4B18f0",
		chainId: 1,
		decimals: 18,
		name: "OVCODE",
		symbol: "OVC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6B3760FACDEb7F798Cd13c0aF2e4cd9dDc085122",
		chainId: 1,
		decimals: 18,
		name: "Oviex",
		symbol: "OVI"
	},
	{
		address: "0x21BfBDa47A0B4B5b1248c767Ee49F7caA9B23697",
		chainId: 1,
		decimals: 18,
		name: "Ovr",
		symbol: "OVR"
	},
	{
		address: "0x1A5F9352Af8aF974bFC03399e3767DF6370d82e4",
		chainId: 1,
		decimals: 18,
		name: "Owl",
		symbol: "OWL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2a7f709eE001069771ceB6D42e85035f7D18E736",
		chainId: 1,
		decimals: 18,
		name: "OWL Token",
		symbol: "OWL"
	},
	{
		address: "0x170b275CEd089FffAEBFe927F445a350ED9160DC",
		chainId: 1,
		decimals: 8,
		name: "OWNDATA",
		symbol: "OWN"
	},
	{
		address: "0xcC6F15Be8573cB8243C42d300565566D328213Dd",
		chainId: 1,
		decimals: 18,
		name: "OWN Token",
		symbol: "OWN"
	},
	{
		address: "0xC2494604e9DcEfa2A70dCEbf81e6D7BE064a334e",
		chainId: 1,
		decimals: 18,
		name: "OpenWeb Token",
		symbol: "OWT"
	},
	{
		address: "0x65A15014964F2102Ff58647e16a16a6B9E14bCF6",
		chainId: 1,
		decimals: 3,
		name: "Ox Fina",
		symbol: "Ox Fina"
	},
	{
		address: "0x47daC6BD80f024575a6d367aF5Ba8e89202A09fc",
		chainId: 1,
		decimals: 18,
		name: "OXO.Farm",
		symbol: "OXO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4575f41308EC1483f3d399aa9a2826d74Da13Deb",
		chainId: 1,
		decimals: 18,
		name: "Orchid",
		symbol: "OXT",
		extensions: {
			color: "#5f45ba",
			isVerified: true
		}
	},
	{
		address: "0x33C8517e8b1BEEFd4A5275Ab72AcF39cd18331A3",
		chainId: 1,
		decimals: 18,
		name: "OxyDev",
		symbol: "OYT"
	},
	{
		address: "0xABE9b2e4bbD5A8C718752c41254Ed81aaE7d98BF",
		chainId: 1,
		decimals: 10,
		name: "P2P",
		symbol: "P2P"
	},
	{
		address: "0x4527a3B4A8A150403090a99b87efFC96F2195047",
		chainId: 1,
		decimals: 8,
		name: "P2P solutions found",
		symbol: "P2PS"
	},
	{
		address: "0x3D9Ac8e7a9C9bE11DFac1677dDa901E28d44527f",
		chainId: 1,
		decimals: 8,
		name: "Palace",
		symbol: "PAA"
	},
	{
		address: "0x66e7CE35578A37209d01F99F3d2fF271f981F581",
		chainId: 1,
		decimals: 18,
		name: "PactSwap",
		symbol: "PACT"
	},
	{
		address: "0x992a8a9F4Bde0FB2EE1F5BBB3Cb7B1E64748E13d",
		chainId: 1,
		decimals: 18,
		name: "Padcoin",
		symbol: "PAD"
	},
	{
		address: "0x5067006F830224960Fb419D7f25a3a53e9919BB0",
		chainId: 1,
		decimals: 18,
		name: "SmartPad",
		symbol: "PAD"
	},
	{
		address: "0xB9bb08AB7E9Fa0A1356bd4A39eC0ca267E03b0b3",
		chainId: 1,
		decimals: 18,
		name: "PCHAIN",
		symbol: "PAI"
	},
	{
		address: "0x1614F18Fc94f47967A3Fbe5FfcD46d4e7Da3D787",
		chainId: 1,
		decimals: 18,
		name: "PAID Network",
		symbol: "PAID"
	},
	{
		address: "0x4C6eC08CF3fc987c6C4BEB03184D335A2dFc4042",
		chainId: 1,
		decimals: 18,
		name: "MurAll",
		symbol: "PAINT"
	},
	{
		address: "0xfeDAE5642668f8636A11987Ff386bfd215F942EE",
		chainId: 1,
		decimals: 18,
		name: "PolicyPal Network",
		symbol: "PAL"
	},
	{
		address: "0x7f0f118D083d5175aB9D2d34C4C8Fa4F43c3f47b",
		chainId: 1,
		decimals: 8,
		name: "PAMP CC",
		symbol: "PAMP"
	},
	{
		address: "0xF0FAC7104aAC544e4a7CE1A55ADF2B5a25c65bD1",
		chainId: 1,
		decimals: 18,
		name: "Pamp Network",
		symbol: "PAMP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD56daC73A4d6766464b38ec6D91eB45Ce7457c44",
		chainId: 1,
		decimals: 18,
		name: "Panvala Pan",
		symbol: "PAN"
	},
	{
		address: "0x536381a8628dBcC8C70aC9A30A7258442eAb4c92",
		chainId: 1,
		decimals: 8,
		name: "Pantos",
		symbol: "PAN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5bC52b5367b637bec5f818E69208EB9f03C426eE",
		chainId: 1,
		decimals: 9,
		name: "Panda Finance",
		symbol: "PAND"
	},
	{
		address: "0x7A3C45F34eA5DF6fE5F6aF710eC8A04D388a71D1",
		chainId: 1,
		decimals: 18,
		name: "Pando",
		symbol: "PANDO"
	},
	{
		address: "0xdDce093888C8Dc636677Cd29BC6C68D35cFDAC33",
		chainId: 1,
		decimals: 18,
		name: "Paper",
		symbol: "PAPER"
	},
	{
		address: "0x68037790A0229e9Ce6EaA8A99ea92964106C4703",
		chainId: 1,
		decimals: 18,
		name: "Parallel",
		symbol: "PAR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1BeEF31946fbbb40B877a72E4ae04a8D1A5Cee06",
		chainId: 1,
		decimals: 18,
		name: "Parachute",
		symbol: "PAR"
	},
	{
		address: "0x3a8d5BC8A8948b68DfC0Ce9C14aC4150e083518c",
		chainId: 1,
		decimals: 18,
		name: "Paralink Network",
		symbol: "PARA"
	},
	{
		address: "0xea5f88E54d982Cbb0c441cde4E79bC305e5b43Bc",
		chainId: 1,
		decimals: 18,
		name: "PARETO Rewards",
		symbol: "PARETO"
	},
	{
		address: "0x314bD765cAB4774b2E547eB0aA15013e03FF74d2",
		chainId: 1,
		decimals: 6,
		name: "MONEY PARTY",
		symbol: "PARTY"
	},
	{
		address: "0x77761e63C05aeE6648FDaeaa9B94248351AF9bCd",
		chainId: 1,
		decimals: 18,
		name: "PASS Token",
		symbol: "PASS"
	},
	{
		address: "0xeE4458e052B533b1aABD493B5f8c4d85D7B263Dc",
		chainId: 1,
		decimals: 6,
		name: "Blockpass",
		symbol: "PASS"
	},
	{
		address: "0x6C4522F0035bED2180B40f4c5d9DbAab64B41325",
		chainId: 1,
		decimals: 18,
		name: "Passport Finance",
		symbol: "PASS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEA6C27d11cCB9306154F87d47dc1405c37242081",
		chainId: 1,
		decimals: 18,
		name: "PASTA Vault  NFTX",
		symbol: "PASTA"
	},
	{
		address: "0xE54f9E6Ab80ebc28515aF8b8233c1aeE6506a15E",
		chainId: 1,
		decimals: 18,
		name: "Spaghetti",
		symbol: "PASTA"
	},
	{
		address: "0xF3b3Cad094B89392fcE5faFD40bC03b80F2Bc624",
		chainId: 1,
		decimals: 18,
		name: "Patron",
		symbol: "PAT"
	},
	{
		address: "0x694404595e3075A942397F466AAcD462FF1a7BD0",
		chainId: 1,
		decimals: 18,
		name: "PATENTS",
		symbol: "PATENTS"
	},
	{
		address: "0xF813F3902bBc00A6DCe378634d3B79D84F9803d7",
		chainId: 1,
		decimals: 18,
		name: "PATH",
		symbol: "PATH"
	},
	{
		address: "0x478e677C0bD24c848bD591Cc5273383DD5F30e4a",
		chainId: 1,
		decimals: 18,
		name: "PATH Vault  NFTX",
		symbol: "PATH"
	},
	{
		address: "0x9FbA684D77D2d6A1408C24b60A1f5534e71f5b75",
		chainId: 1,
		decimals: 18,
		name: "PATRIOT",
		symbol: "PATR"
	},
	{
		address: "0x8db6Da2120b346FAa7f206841f2FB005BBE0DFD8",
		chainId: 1,
		decimals: 4,
		name: "Paul",
		symbol: "PAUL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8E870D67F660D95d5be530380D0eC0bd388289E1",
		chainId: 1,
		decimals: 18,
		name: "Paxos Standard",
		symbol: "PAX",
		extensions: {
			color: "#4EAD46",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xc1D204d77861dEf49b6E769347a883B15EC397Ff",
		chainId: 1,
		decimals: 18,
		name: "PayperEx",
		symbol: "PAX"
	},
	{
		address: "0x45804880De22913dAFE09f4980848ECE6EcbAf78",
		chainId: 1,
		decimals: 18,
		name: "Paxos Gold",
		symbol: "PAXG",
		extensions: {
			color: "#CBB10E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x3C4a46F0C075A7F191A7459bb51EB1f81ac36F8A",
		chainId: 1,
		decimals: 18,
		name: "3X Short PAX Gold T",
		symbol: "PAXGBEAR"
	},
	{
		address: "0x81f09eD4b98B1c8e99b1Fa838B72acB842AFE94c",
		chainId: 1,
		decimals: 18,
		name: "3X Long PAX Gold To",
		symbol: "PAXGBULL"
	},
	{
		address: "0xB97048628DB6B661D4C2aA833e95Dbe1A905B280",
		chainId: 1,
		decimals: 18,
		name: "TenX",
		symbol: "PAY",
		extensions: {
			color: "#302c2c",
			isVerified: true
		}
	},
	{
		address: "0xCb2Fa15F4EA7C55bF6Ef9456A662412B137043e9",
		chainId: 1,
		decimals: 18,
		name: "Payou Finance",
		symbol: "PAYOU"
	},
	{
		address: "0x8EF47555856f6Ce2E0cd7C36AeF4FAb317d2e2E2",
		chainId: 1,
		decimals: 18,
		name: "PayAccept",
		symbol: "PAYT"
	},
	{
		address: "0x62a56a4A2Ef4D355D34D10fBF837e747504d38d4",
		chainId: 1,
		decimals: 2,
		name: "Paypex",
		symbol: "PAYX"
	},
	{
		address: "0xbcD8756Ea481608Ea3DD5a555493305Cf0A79640",
		chainId: 1,
		decimals: 18,
		name: "Paparazzi",
		symbol: "PAZZI"
	},
	{
		address: "0x74c287AD5328dAca276C6a1c1f149415B12C148d",
		chainId: 1,
		decimals: 18,
		name: "Pazzy",
		symbol: "PAZZY"
	},
	{
		address: "0x44B537B6f94c73A54f7bF8a9b68f8125da3C330b",
		chainId: 1,
		decimals: 9,
		name: "Polkabase",
		symbol: "PBASE"
	},
	{
		address: "0x55648De19836338549130B1af587F16beA46F66B",
		chainId: 1,
		decimals: 18,
		name: "Pebbles",
		symbol: "PBL"
	},
	{
		address: "0x298d492e8c1d909D3F63Bc4A36C66c64ACB3d695",
		chainId: 1,
		decimals: 18,
		name: "PolkaBridge",
		symbol: "PBR"
	},
	{
		address: "0xF4c07b1865bC326A3c01339492Ca7538FD038Cc0",
		chainId: 1,
		decimals: 4,
		name: "Primalbase Token (PBT)",
		symbol: "PBT"
	},
	{
		address: "0x5228a22e72ccC52d415EcFd199F99D0665E7733b",
		chainId: 1,
		decimals: 18,
		name: "pTokens BTC",
		symbol: "pBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA8b12Cc90AbF65191532a12bb5394A714A46d358",
		chainId: 1,
		decimals: 18,
		name: "pBTC35A",
		symbol: "PBTC35A"
	},
	{
		address: "0xa6714a2e5f0B1bdb97b895b0913b4FcD3a775E4D",
		chainId: 1,
		decimals: 5,
		name: "PromotionChain",
		symbol: "PC"
	},
	{
		address: "0xE3F4b4A5d91e5cB9435B947F090A319737036312",
		chainId: 1,
		decimals: 18,
		name: "POPCHAIN",
		symbol: "PCH"
	},
	{
		address: "0xfcAC7A7515e9A9d7619fA77A1fa738111f66727e",
		chainId: 1,
		decimals: 18,
		name: "PITCH",
		symbol: "PCH"
	},
	{
		address: "0xa4C6984E817c086Ddc3EBAEedBdcc01469586918",
		chainId: 1,
		decimals: 18,
		name: "Peaches Finance",
		symbol: "PCHS"
	},
	{
		address: "0x0F02e27745e3b6e9e1310d19469e2b5D7B5eC99A",
		chainId: 1,
		decimals: 8,
		name: "Peculium",
		symbol: "PCL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x53148Bb4551707edF51a1e8d7A93698d18931225",
		chainId: 1,
		decimals: 8,
		name: "PeculiumOLD",
		symbol: "PCLOLD"
	},
	{
		address: "0x6096d2460CF5177E40B515223428DC005ad35123",
		chainId: 1,
		decimals: 18,
		name: "Precium",
		symbol: "PCM"
	},
	{
		address: "0x657B83A0336561C8f64389a6f5aDE675C04b0C3b",
		chainId: 1,
		decimals: 18,
		name: "Playcent",
		symbol: "PCNT"
	},
	{
		address: "0x2925C2a312A4934Fd695fAb72b1E425Cc41978f2",
		chainId: 1,
		decimals: 18,
		name: "Precharge",
		symbol: "PCPI"
	},
	{
		address: "0xbc16da9df0A22f01A16BC0620a27e7D6d6488550",
		chainId: 1,
		decimals: 18,
		name: "Percent",
		symbol: "PCT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD81b1A8B1AD00Baa2D6609E0BAE28A38713872f7",
		chainId: 1,
		decimals: 6,
		name: "PoolTogether USDC T",
		symbol: "PCUSDC"
	},
	{
		address: "0x9043d4d51C9d2e31e3F169de4551E416970c27Ef",
		chainId: 1,
		decimals: 18,
		name: "Prime DAI",
		symbol: "PDAI"
	},
	{
		address: "0x0db03B6CDe0B2d427C64a04FeAfd825938368f1F",
		chainId: 1,
		decimals: 18,
		name: "PDATA",
		symbol: "PDATA"
	},
	{
		address: "0xF59ae934f6fe444afC309586cC60a84a0F89Aaea",
		chainId: 1,
		decimals: 18,
		name: "Polkadex",
		symbol: "PDEX"
	},
	{
		address: "0xB16e967ff83DE3F1e9FCeAfbc2C28c1c5c56eF91",
		chainId: 1,
		decimals: 18,
		name: "Polkadog",
		symbol: "PDOG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1BE66C15731788BaE659B4bdD40d4AA9B3bbca94",
		chainId: 1,
		decimals: 9,
		name: "PolkaDoge",
		symbol: "PDOGE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x630d98424eFe0Ea27fB1b3Ab7741907DFFEaAd78",
		chainId: 1,
		decimals: 8,
		name: "PEAKDEFI",
		symbol: "PEAK"
	},
	{
		address: "0x432Bf73443909c33b545EfED536a5246c9a722cA",
		chainId: 1,
		decimals: 18,
		name: "Poverty Eradication",
		symbol: "PEC"
	},
	{
		address: "0x31d939dC09A6bB55642fCBF9d56166EbC0BDeC9a",
		chainId: 1,
		decimals: 18,
		name: "Peach Finance",
		symbol: "PEECH"
	},
	{
		address: "0xe1030B48b2033314979143766d7dC1F40ef8CE11",
		chainId: 1,
		decimals: 18,
		name: "The People s Coin",
		symbol: "PEEPS"
	},
	{
		address: "0x5Dd115EB39A0FC5DA9022e4bbB8e8679cA066A74",
		chainId: 1,
		decimals: 18,
		name: "Unilord",
		symbol: "PEER"
	},
	{
		address: "0x8Ae56a6850a7cbeaC3c3Ab2cB311e7620167eAC8",
		chainId: 1,
		decimals: 18,
		name: "PEG Network Token",
		symbol: "PEG"
	},
	{
		address: "0x88bd6eFe33bc82860278c044eFA33364c6285032",
		chainId: 1,
		decimals: 18,
		name: "PegShares",
		symbol: "PEGS"
	},
	{
		address: "0x808507121B80c02388fAd14726482e061B8da827",
		chainId: 1,
		decimals: 18,
		name: "Pendle",
		symbol: "PENDLE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBb0eF9e617FADdf54B8D16e29046F72B4D3ec77F",
		chainId: 1,
		decimals: 18,
		name: "PEP Token",
		symbol: "PEP"
	},
	{
		address: "0x5d30aD9C6374Bf925D0A75454fa327AACf778492",
		chainId: 1,
		decimals: 18,
		name: "PERI Finance",
		symbol: "PERI"
	},
	{
		address: "0xeca82185adCE47f39c684352B0439f030f860318",
		chainId: 1,
		decimals: 18,
		name: "Perlin",
		symbol: "PERL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbC396689893D065F41bc2C6EcbeE5e0085233447",
		chainId: 1,
		decimals: 18,
		name: "Perpetual Protocol",
		symbol: "PERP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3C6ff50c9Ec362efa359317009428d52115fe643",
		chainId: 1,
		decimals: 18,
		name: "PeerEx Network",
		symbol: "PERX"
	},
	{
		address: "0x30FEF258d2728F9d1eDF038059c725FAf785697E",
		chainId: 1,
		decimals: 2,
		name: "PESOTOKEN",
		symbol: "PESO"
	},
	{
		address: "0x5884969Ec0480556E11d119980136a4C17eDDEd1",
		chainId: 1,
		decimals: 18,
		name: "PETHEREUM",
		symbol: "PET"
	},
	{
		address: "0xf53AD2c6851052A81B42133467480961B2321C09",
		chainId: 1,
		decimals: 18,
		name: "Pooled Ether",
		symbol: "PETH"
	},
	{
		address: "0xA15690E9205De386Ce849889831C1668c300C1ad",
		chainId: 1,
		decimals: 18,
		name: "pETH18C",
		symbol: "PETH18C"
	},
	{
		address: "0xeC18f898B4076A3E18f1089D33376CC380BDe61D",
		chainId: 1,
		decimals: 18,
		name: "PETRO",
		symbol: "PETRO"
	},
	{
		address: "0x55c2A0C171D920843560594dE3d6EEcC09eFc098",
		chainId: 1,
		decimals: 4,
		name: "PEX-Token",
		symbol: "PEXT"
	},
	{
		address: "0x6a8C66Cab4F766E5E30b4e9445582094303cc322",
		chainId: 1,
		decimals: 18,
		name: "Farm Defi",
		symbol: "PFARM"
	},
	{
		address: "0x46760d2BF2F4dd5405646D9b2cE7B723EFE74a48",
		chainId: 1,
		decimals: 18,
		name: "Penny For Bit",
		symbol: "PFB"
	},
	{
		address: "0x989ac4c1fC5aB2B8c86924c6253aAF1Ee68E9ce9",
		chainId: 1,
		decimals: 18,
		name: "Prime Finance",
		symbol: "PFI"
	},
	{
		address: "0x7B69D465c0F9FB22AffAE56aa86149973e9B0966",
		chainId: 1,
		decimals: 18,
		name: "Protocol Finance",
		symbol: "PFI"
	},
	{
		address: "0x87C4Bd3038176301e81E6682CE51A6fDAEfabD0C",
		chainId: 1,
		decimals: 18,
		name: "Pofid Dao",
		symbol: "PFID"
	},
	{
		address: "0x2FA32a39fc1c399E0Cc7B2935868f5165De7cE97",
		chainId: 1,
		decimals: 8,
		name: "Payfair",
		symbol: "PFR"
	},
	{
		address: "0x6353EaDF8D1D4421002332BB9074222b14d54881",
		chainId: 1,
		decimals: 18,
		name: "Payfair",
		symbol: "PFR"
	},
	{
		address: "0xC949fC82A15964FB5B97e5cf8f9ffed139086821",
		chainId: 1,
		decimals: 18,
		name: "PGPay",
		symbol: "PGPAY"
	},
	{
		address: "0x931ad0628aa11791C26FF4d41ce23E40C31c5E4e",
		chainId: 1,
		decimals: 8,
		name: "Pegasus",
		symbol: "PGS"
	},
	{
		address: "0xeaccb6E0f24d66cF4Aa6cBDa33971b9231d332a1",
		chainId: 1,
		decimals: 18,
		name: "Polyient Games Gove",
		symbol: "PGT"
	},
	{
		address: "0x98c36c0e953463BD5146C8783ce081CE1d187AcF",
		chainId: 1,
		decimals: 18,
		name: "Polyient Games Unit",
		symbol: "PGU"
	},
	{
		address: "0x6c5bA91642F10282b576d91922Ae6448C9d52f4E",
		chainId: 1,
		decimals: 18,
		name: "Phala Network",
		symbol: "PHA"
	},
	{
		address: "0x13C2fab6354d3790D8ece4f0f1a3280b4A25aD96",
		chainId: 1,
		decimals: 18,
		name: "PHI Token",
		symbol: "PHI"
	},
	{
		address: "0xc4d586ef7Be9EBe80bD5eE4FBd228fe2Db5F2C4e",
		chainId: 1,
		decimals: 9,
		name: "Papa Shiba",
		symbol: "PHIBA"
	},
	{
		address: "0xF73Fc4B74a4CC6F9ea203A9d5BBFf4fFCe3A4c48",
		chainId: 1,
		decimals: 18,
		name: "Phillionex",
		symbol: "PHN"
	},
	{
		address: "0x38A2fDc11f526Ddd5a607C1F251C065f40fBF2f7",
		chainId: 1,
		decimals: 18,
		name: "PhoenixDAO",
		symbol: "PHNX"
	},
	{
		address: "0x79256DB1BDB6259315a1a3D7Dd237F69cADFd8FC",
		chainId: 1,
		decimals: 18,
		name: "Typhoon Cash",
		symbol: "PHOON"
	},
	{
		address: "0x457a57E931cBa4dfF5Ce8500cC0DFF18356Df041",
		chainId: 1,
		decimals: 18,
		name: "Phantom Token",
		symbol: "PHTF"
	},
	{
		address: "0xE1Fc4455f62a6E89476f1072530C20CF1A0622dA",
		chainId: 1,
		decimals: 18,
		name: "Phuture",
		symbol: "PHTR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB39185e33E8c28e0BB3DbBCe24DA5dEA6379Ae91",
		chainId: 1,
		decimals: 18,
		name: "PHUNK Vault  NFTX",
		symbol: "PHUNK"
	},
	{
		address: "0xAeC65404DdC3af3C897AD89571d5772C1A695F22",
		chainId: 1,
		decimals: 18,
		name: "Phoenix Token",
		symbol: "PHX"
	},
	{
		address: "0x1BaFfbc23f2246040cCE12F7a140C38c5DC73e46",
		chainId: 1,
		decimals: 18,
		name: "Passive Income Bot",
		symbol: "PIB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1864cE27E9F7517047933CaAE530674e8C70b8A7",
		chainId: 1,
		decimals: 18,
		name: "Pibble",
		symbol: "PIB"
	},
	{
		address: "0x1eCe1739DAE08253aE582C404511B37355B42C84",
		chainId: 1,
		decimals: 4,
		name: "PICA",
		symbol: "PICA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x287609A15A683640A5bbC4d93D4D5f4Ed6bAD3A0",
		chainId: 1,
		decimals: 18,
		name: "PICK",
		symbol: "PICK"
	},
	{
		address: "0x429881672B9AE42b8EbA0E26cD9C73711b891Ca5",
		chainId: 1,
		decimals: 18,
		name: "Pickle Finance",
		symbol: "PICKLE",
		extensions: {
			color: "#0FB200",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x607C794cDa77efB21F8848B7910ecf27451Ae842",
		chainId: 1,
		decimals: 18,
		name: "DeFiPIE Token",
		symbol: "PIE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x47E820dF943170b0e31F9E18ECD5bDd67b77FF1f",
		chainId: 1,
		decimals: 18,
		name: "PIGX",
		symbol: "PIGX"
	},
	{
		address: "0x60F5672A271C7E39E787427A18353ba59A4A3578",
		chainId: 1,
		decimals: 18,
		name: "Pika",
		symbol: "PIKA"
	},
	{
		address: "0xA682Ee16b497afcEEDF47e4820Fc2af3845FD2D2",
		chainId: 1,
		decimals: 18,
		name: "Pika",
		symbol: "PIKA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x37C997B35C619C21323F3518B9357914E8B99525",
		chainId: 1,
		decimals: 18,
		name: "Unipilot",
		symbol: "PILOT"
	},
	{
		address: "0xc1f976B91217E240885536aF8b63bc8b5269a9BE",
		chainId: 1,
		decimals: 18,
		name: "Public Index Networ",
		symbol: "PIN"
	},
	{
		address: "0x21cD6Af01383651ed10554394C0497f9dB5e5dbC",
		chainId: 1,
		decimals: 8,
		name: "CryptoPing",
		symbol: "PING"
	},
	{
		address: "0xFECBa472B2540C5a2d3700b2C9E06F0aa7dC6462",
		chainId: 1,
		decimals: 18,
		name: "Pub Finance",
		symbol: "PINT"
	},
	{
		address: "0xE64509F0bf07ce2d29A7eF19A8A9bc065477C1B4",
		chainId: 1,
		decimals: 8,
		name: "PiplCoin",
		symbol: "PIPL"
	},
	{
		address: "0x26607aC599266b21d13c7aCF7942c7701a8b699c",
		chainId: 1,
		decimals: 18,
		name: "Power Index Pool Token",
		symbol: "PIPT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x834cE7aD163ab3Be0C5Fd4e0a81E67aC8f51E00C",
		chainId: 1,
		decimals: 18,
		name: "Polkainsure Finance",
		symbol: "PIS"
	},
	{
		address: "0x315dc1b524de57AE8e809A2e97699dbc895B8a21",
		chainId: 1,
		decimals: 9,
		name: "Pist Trust",
		symbol: "PIST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0fF161071e627A0E6de138105C73970F86ca7922",
		chainId: 1,
		decimals: 18,
		name: "Paypite v2",
		symbol: "PIT"
	},
	{
		address: "0x87f56Ee356B434187105b40F96B230F5283c0AB4",
		chainId: 1,
		decimals: 9,
		name: "Pitch",
		symbol: "PITCH"
	},
	{
		address: "0x8eFFd494eB698cc399AF6231fCcd39E08fd20B15",
		chainId: 1,
		decimals: 0,
		name: "Lampix",
		symbol: "PIX"
	},
	{
		address: "0x1e906717De2E4A4600F13b6909736b0346bDde3E",
		chainId: 1,
		decimals: 4,
		name: "Pixel",
		symbol: "PIXEL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9318105460626e7fA58308FA4bcE40e4616F3565",
		chainId: 1,
		decimals: 18,
		name: "Pixie Dust",
		symbol: "PIXIE"
	},
	{
		address: "0x37A15C92e67686aA268df03d4C881A76340907E8",
		chainId: 1,
		decimals: 0,
		name: "Pixiu Finance",
		symbol: "PIXIU"
	},
	{
		address: "0xAd4c6Ad1F02Def1710a2d06C875A31D4868bD70A",
		chainId: 1,
		decimals: 9,
		name: "Pixel Inu",
		symbol: "PIXU"
	},
	{
		address: "0x61bc1F530AC6193D73aF1e1A6A14CB44b9C3f915",
		chainId: 1,
		decimals: 18,
		name: "Pajama Finance",
		symbol: "PJM"
	},
	{
		address: "0x8B39B70E39Aa811b69365398e0aACe9bee238AEb",
		chainId: 1,
		decimals: 18,
		name: "PolkaFoundry",
		symbol: "PKF"
	},
	{
		address: "0x02F2D4a04E6E01aCE88bD2Cd632875543b2eF577",
		chainId: 1,
		decimals: 18,
		name: "PKG Token",
		symbol: "PKG"
	},
	{
		address: "0x6A532b08c654A1A86069b74C560d8Fa0ff842218",
		chainId: 1,
		decimals: 18,
		name: "Pikto Group",
		symbol: "PKP"
	},
	{
		address: "0x001A8Ffcb0f03e99141652eBCdecDb0384E3bd6c",
		chainId: 1,
		decimals: 18,
		name: "Polker",
		symbol: "PKR"
	},
	{
		address: "0x2604FA406Be957E542BEb89E6754fCdE6815e83f",
		chainId: 1,
		decimals: 18,
		name: "Playkey",
		symbol: "PKT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0198f46f520F33cd4329bd4bE380a25a90536CD5",
		chainId: 1,
		decimals: 18,
		name: "PlayChip",
		symbol: "PLA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3a4f40631a4f906c2BaD353Ed06De7A5D3fCb430",
		chainId: 1,
		decimals: 18,
		name: "PlayDapp",
		symbol: "PLA"
	},
	{
		address: "0x307d45Afbb7E84F82ef3D251A6bb0F00Edf632E4",
		chainId: 1,
		decimals: 18,
		name: "PLANET",
		symbol: "PLA"
	},
	{
		address: "0x60571E95E12c78CbA5223042692908f0649435a5",
		chainId: 1,
		decimals: 18,
		name: "PLAAS FARMERS TOKEN",
		symbol: "PLAAS"
	},
	{
		address: "0x59416A25628A76b4730eC51486114c32E0B582A1",
		chainId: 1,
		decimals: 6,
		name: "PLASMA",
		symbol: "PLASMA"
	},
	{
		address: "0x7E43581b19ab509BCF9397a2eFd1ab10233f27dE",
		chainId: 1,
		decimals: 18,
		name: "PLATINUM",
		symbol: "PLAT"
	},
	{
		address: "0xE477292f1B3268687A29376116B0ED27A9c76170",
		chainId: 1,
		decimals: 18,
		name: "HEROcoin",
		symbol: "PLAY"
	},
	{
		address: "0x33e18a092a93ff21aD04746c7Da12e35D34DC7C4",
		chainId: 1,
		decimals: 18,
		name: "Metaverse NFT Index",
		symbol: "PLAY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0AfFa06e7Fbe5bC9a764C979aA66E8256A631f02",
		chainId: 1,
		decimals: 6,
		name: "Polybius",
		symbol: "PLBT"
	},
	{
		address: "0xe9541c7EA236332f4d07BE73101670F39B27dA02",
		chainId: 1,
		decimals: 18,
		name: "Pureland Project",
		symbol: "PLD"
	},
	{
		address: "0x49d716DFe60b37379010A75329ae09428f17118d",
		chainId: 1,
		decimals: 18,
		name: "PoolTogether Dai",
		symbol: "plDai",
		extensions: {
			color: "#6E3AF3",
			isVerified: true
		}
	},
	{
		address: "0x3873965e73d9A21F88e645ce40B7db187FDE4931",
		chainId: 1,
		decimals: 18,
		name: "Plethori",
		symbol: "PLE"
	},
	{
		address: "0xaDA62f7CCd6af6cAcff04ACCBC4f56f3D4FFd4Ef",
		chainId: 1,
		decimals: 18,
		name: "PlayFuel",
		symbol: "PLF"
	},
	{
		address: "0x85ca6710D0F1D511d130f6935eDDA88ACBD921bD",
		chainId: 1,
		decimals: 18,
		name: "Pledgecamp",
		symbol: "PLG"
	},
	{
		address: "0xBa069Ee53b8B531F3AB117c92ca09A204C9E6285",
		chainId: 1,
		decimals: 18,
		name: "Plug",
		symbol: "PLG"
	},
	{
		address: "0x72F020f8f3E8fd9382705723Cd26380f8D0c66Bb",
		chainId: 1,
		decimals: 18,
		name: "PlotX",
		symbol: "PLOT"
	},
	{
		address: "0xe3818504c1B32bF1557b16C238B2E01Fd3149C17",
		chainId: 1,
		decimals: 18,
		name: "Pillar",
		symbol: "PLR",
		extensions: {
			color: "#00BFFF",
			isVerified: true
		}
	},
	{
		address: "0xe43ac1714F7394173b15E7CfF31A63d523Ce4fB9",
		chainId: 1,
		decimals: 18,
		name: "DACPLAY Token",
		symbol: "PLS"
	},
	{
		address: "0xfE6892654CBB05eB73d28DCc1Ff938f59666Fe9f",
		chainId: 1,
		decimals: 18,
		name: "PoolTogether Sai",
		symbol: "PLSAI"
	},
	{
		address: "0x9fBFed658919A896B5Dc7b00456Ce22D780f9B65",
		chainId: 1,
		decimals: 18,
		name: "PlutusDeFi",
		symbol: "PLT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5979F50f1D4c08f9A53863C2f39A7B0492C38d0f",
		chainId: 1,
		decimals: 18,
		name: "pTokens LTC",
		symbol: "pLTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x429D83Bb0DCB8cdd5311e34680ADC8B12070a07f",
		chainId: 1,
		decimals: 18,
		name: "PlatonCoin",
		symbol: "PLTC"
	},
	{
		address: "0xD8912C10681D8B21Fd3742244f44658dBA12264E",
		chainId: 1,
		decimals: 18,
		name: "Pluton",
		symbol: "PLU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x47DA5456bC2e1ce391b645Ce80F2E97192e4976a",
		chainId: 1,
		decimals: 18,
		name: "PL Gnet",
		symbol: "PLUG"
	},
	{
		address: "0xBD87447F48ad729C5c4b8bcb503e1395F62e8B98",
		chainId: 1,
		decimals: 6,
		name: "PoolTogether USDC",
		symbol: "PLUSDC"
	},
	{
		address: "0xF38011F9153aCFfACa3fBFC42Ddfa766C980d967",
		chainId: 1,
		decimals: 18,
		name: "Pluto",
		symbol: "PLUT"
	},
	{
		address: "0x846C66cf71C43f80403B51fE3906B3599D63336f",
		chainId: 1,
		decimals: 18,
		name: "PumaPay",
		symbol: "PMA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xAFFCDd96531bCd66faED95FC61e443D08F79eFEf",
		chainId: 1,
		decimals: 5,
		name: "Perth Mint Gold Tok",
		symbol: "PMGT"
	},
	{
		address: "0x81b4D08645DA11374a03749AB170836E4e539767",
		chainId: 1,
		decimals: 9,
		name: "Paymon",
		symbol: "PMNT"
	},
	{
		address: "0x1796ae0b0fa4862485106a0de9b654eFE301D0b2",
		chainId: 1,
		decimals: 18,
		name: "Polychain Monsters",
		symbol: "PMON"
	},
	{
		address: "0xC1322D8aE3B0e2E437e0AE36388D0CFD2C02f1c9",
		chainId: 1,
		decimals: 4,
		name: "DAO PlayMarket 2 0",
		symbol: "PMT"
	},
	{
		address: "0x469a8ea7683C27d31CD9b0de769151d8A8B66C5A",
		chainId: 1,
		decimals: 9,
		name: "SpacePenguin",
		symbol: "PNGN"
	},
	{
		address: "0x93ED3FBe21207Ec2E8f2d3c3de6e058Cb73Bc04d",
		chainId: 1,
		decimals: 18,
		name: "Kleros",
		symbol: "PNK",
		extensions: {
			color: "#838285",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x9FC8f0ca1668E87294941b7f627e9C15eA06B459",
		chainId: 1,
		decimals: 18,
		name: "True PNL",
		symbol: "PNL"
	},
	{
		address: "0xAF691508BA57d416f895e32a1616dA1024e882D2",
		chainId: 1,
		decimals: 18,
		name: "Pinknode",
		symbol: "PNODE"
	},
	{
		address: "0x53066cdDBc0099eb6c96785d9b3DF2AAeEDE5DA3",
		chainId: 1,
		decimals: 18,
		name: "Penta Network Token",
		symbol: "PNT"
	},
	{
		address: "0x89Ab32156e46F46D02ade3FEcbe5Fc4243B9AAeD",
		chainId: 1,
		decimals: 18,
		name: "pNetwork",
		symbol: "PNT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6758B7d441a9739b98552B373703d8d3d14f9e62",
		chainId: 1,
		decimals: 18,
		name: "POA",
		symbol: "POA20",
		extensions: {
			color: "#5332A0",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x926Be13B4d93F29eA254E4e518f33099e45d7f06",
		chainId: 1,
		decimals: 18,
		name: "POC Chain",
		symbol: "POCC"
	},
	{
		address: "0xC697648021870Cc250Fbcd6EA8E77524f57b45C0",
		chainId: 1,
		decimals: 18,
		name: "Podo Point",
		symbol: "POD"
	},
	{
		address: "0x0e0989b1f9B8A38983c2BA8053269Ca62Ec9B195",
		chainId: 1,
		decimals: 8,
		name: "Po.et",
		symbol: "POE",
		extensions: {
			color: "#dcd6cc",
			isVerified: true
		}
	},
	{
		address: "0x43F6a1BE992deE408721748490772B15143CE0a7",
		chainId: 1,
		decimals: 0,
		name: "Potatoin",
		symbol: "POIN"
	},
	{
		address: "0xBc8dEee89F1cf4B661514185AA1aB780336c4c4A",
		chainId: 1,
		decimals: 18,
		name: "Poker io",
		symbol: "POK"
	},
	{
		address: "0xc17fbe1d709dDf6C0B6665Dd0591046815AC7554",
		chainId: 1,
		decimals: 18,
		name: "Polars Governance T",
		symbol: "POL"
	},
	{
		address: "0xc691bc298a304d591Ad9b352c7A8D216dE9f2CED",
		chainId: 1,
		decimals: 18,
		name: "Polaris Share",
		symbol: "POLA"
	},
	{
		address: "0xbBE5C81412Bad19877300d63CC8D8264A154091E",
		chainId: 1,
		decimals: 18,
		name: "Polar Chain",
		symbol: "POLA"
	},
	{
		address: "0xaA8330FB2B4D5D07ABFE7A72262752a8505C6B37",
		chainId: 1,
		decimals: 18,
		name: "Polkacity",
		symbol: "POLC"
	},
	{
		address: "0x622f2962AE78e8686EcC1E30cF2f9a6e5aC35626",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Polis",
		symbol: "POLIS"
	},
	{
		address: "0xD478161C952357F05f0292B56012Cd8457F1cfbF",
		chainId: 1,
		decimals: 18,
		name: "Polkamarkets",
		symbol: "POLK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x705EE96c1c160842C92c1aeCfCFfccc9C412e3D9",
		chainId: 1,
		decimals: 18,
		name: "ClearPoll",
		symbol: "POLL"
	},
	{
		address: "0x83e6f1E41cdd28eAcEB20Cb649155049Fac3D5Aa",
		chainId: 1,
		decimals: 18,
		name: "Polkastarter",
		symbol: "POLS"
	},
	{
		address: "0x4a6AB9792e9f046C3AB22D8602450DE5186Be9A7",
		chainId: 1,
		decimals: 18,
		name: "Polka Ventures",
		symbol: "POLVEN"
	},
	{
		address: "0x9992eC3cF6A55b00978cdDF2b27BC6882d88D1eC",
		chainId: 1,
		decimals: 18,
		name: "Polymath",
		symbol: "POLY",
		extensions: {
			color: "#4c5a95",
			isVerified: true
		}
	},
	{
		address: "0x57B946008913B82E4dF85f501cbAeD910e58D26C",
		chainId: 1,
		decimals: 18,
		name: "Marlin",
		symbol: "POND",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xDa4c27a9fbdDe1f5F3aF0398396be4644dCEC715",
		chainId: 1,
		decimals: 18,
		name: "Ponzu Inu",
		symbol: "PONZU"
	},
	{
		address: "0x779B7b713C86e3E6774f5040D9cCC2D43ad375F8",
		chainId: 1,
		decimals: 8,
		name: "Stake Pool",
		symbol: "POOL"
	},
	{
		address: "0x0cEC1A9154Ff802e7934Fc916Ed7Ca50bDE6844e",
		chainId: 1,
		decimals: 18,
		name: "PoolTogether",
		symbol: "POOL",
		extensions: {
			color: "#6E3AF3",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x69A95185ee2a045CDC4bCd1b1Df10710395e4e23",
		chainId: 1,
		decimals: 18,
		name: "Poolz Finance",
		symbol: "POOLZ"
	},
	{
		address: "0x5D858bcd53E085920620549214a8b27CE2f04670",
		chainId: 1,
		decimals: 18,
		name: "POP Network",
		symbol: "POP"
	},
	{
		address: "0x7fC3eC3574d408F3b59CD88709baCb42575EBF2b",
		chainId: 1,
		decimals: 18,
		name: "POP",
		symbol: "POP"
	},
	{
		address: "0x8DB90E3e7D04C875a51997092f9178FCac9DefdB",
		chainId: 1,
		decimals: 18,
		name: "Portal",
		symbol: "PORTAL"
	},
	{
		address: "0xEe609fE292128Cad03b786DBb9Bc2634Ccdbe7fC",
		chainId: 1,
		decimals: 18,
		name: "PoSToken",
		symbol: "POS"
	},
	{
		address: "0x685aea4F02E39E5a5BB7f7117E88DB1151F38364",
		chainId: 1,
		decimals: 18,
		name: "Shill",
		symbol: "POSH"
	},
	{
		address: "0x042aFd3869A47E2d5d42CC787D5c9E19DF32185F",
		chainId: 1,
		decimals: 18,
		name: "Hotpot Base Token",
		symbol: "POT"
	},
	{
		address: "0xF2f9A7e93f845b3ce154EfbeB64fB9346FCCE509",
		chainId: 1,
		decimals: 18,
		name: "UniPower",
		symbol: "POWER"
	},
	{
		address: "0x595832F8FC6BF59c85C527fEC3740A1b7a361269",
		chainId: 1,
		decimals: 6,
		name: "Power Ledger",
		symbol: "POWR",
		extensions: {
			color: "#05bca9",
			isVerified: true
		}
	},
	{
		address: "0x054D64b73d3D8A21Af3D764eFd76bCaA774f3Bb2",
		chainId: 1,
		decimals: 18,
		name: "Plasma Finance",
		symbol: "PPAY"
	},
	{
		address: "0x4D2eE5DAe46C86DA2FF521F7657dad98834f97b8",
		chainId: 1,
		decimals: 18,
		name: "Pepemon Pepeballs",
		symbol: "PPBLZ"
	},
	{
		address: "0x84F710Bae3316A74Fb0fCb01904d2578A4cc6A26",
		chainId: 1,
		decimals: 1,
		name: "PHILLIPS PAY COIN",
		symbol: "PPC"
	},
	{
		address: "0xf1F508c7C9f0d1b15a76fbA564eEf2d956220cf7",
		chainId: 1,
		decimals: 18,
		name: "Pepedex",
		symbol: "PPDEX"
	},
	{
		address: "0x95f49ae439537e50CED0374c1B52C42AA899741C",
		chainId: 1,
		decimals: 9,
		name: "Puppies Network",
		symbol: "PPN"
	},
	{
		address: "0xc42209aCcC14029c1012fB5680D95fBd6036E2a0",
		chainId: 1,
		decimals: 18,
		name: "PayPie",
		symbol: "PPP"
	},
	{
		address: "0xd4fa1460F537bb9085d22C7bcCB5DD450Ef28e3a",
		chainId: 1,
		decimals: 8,
		name: "Populous",
		symbol: "PPT"
	},
	{
		address: "0xF8c17C840549974eC17C6573B3963f1E3046c0eb",
		chainId: 1,
		decimals: 18,
		name: "Prediqt",
		symbol: "PQT"
	},
	{
		address: "0x9041Fe5B3FDEA0f5e4afDC17e75180738D877A01",
		chainId: 1,
		decimals: 18,
		name: "ProChain",
		symbol: "PRA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2C2f7e7C5604D162d75641256b80F1Bf6f4dC796",
		chainId: 1,
		decimals: 18,
		name: "Polkarare",
		symbol: "PRARE"
	},
	{
		address: "0xdFC3829b127761a3218bFceE7fc92e1232c9D116",
		chainId: 1,
		decimals: 8,
		name: "PRCY Coin",
		symbol: "PRCY"
	},
	{
		address: "0x556148562d5DdeB72545D7EC4B3eC8edc8F55Ba7",
		chainId: 1,
		decimals: 18,
		name: "Predix Network",
		symbol: "PRDX"
	},
	{
		address: "0x4e085036A1b732cBe4FfB1C12ddfDd87E7C3664d",
		chainId: 1,
		decimals: 18,
		name: "Predictz",
		symbol: "PRDZ"
	},
	{
		address: "0x88A3E4F35D64aAD41A6d4030ac9AFE4356cB84fA",
		chainId: 1,
		decimals: 18,
		name: "Presearch",
		symbol: "PRE"
	},
	{
		address: "0xEC213F83defB583af3A000B1c0ada660b1902A0F",
		chainId: 1,
		decimals: 18,
		name: "Presearch",
		symbol: "PRE"
	},
	{
		address: "0x6399C842dD2bE3dE30BF99Bc7D1bBF6Fa3650E70",
		chainId: 1,
		decimals: 18,
		name: "Premia",
		symbol: "PREMIA"
	},
	{
		address: "0x7728dFEF5aBd468669EB7f9b48A7f70a501eD29D",
		chainId: 1,
		decimals: 6,
		name: "Paragon",
		symbol: "PRG"
	},
	{
		address: "0xb9871cB10738eADA636432E86FC0Cb920Dc3De24",
		chainId: 1,
		decimals: 18,
		name: "PRIA",
		symbol: "PRIA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE59064a8185Ed1Fca1D17999621eFedfab4425c9",
		chainId: 1,
		decimals: 18,
		name: "PrimeDAO",
		symbol: "PRIME"
	},
	{
		address: "0x54b8c98268dA0055971652A95F2bfD3a9349A38c",
		chainId: 1,
		decimals: 18,
		name: "Printer Finance",
		symbol: "PRINT"
	},
	{
		address: "0xd46df541148932690B81092f600f35208AFd4325",
		chainId: 1,
		decimals: 18,
		name: "Prism Network",
		symbol: "PRISM"
	},
	{
		address: "0x3ADfc4999F77D04c8341BAC5F3A76f58DfF5B37A",
		chainId: 1,
		decimals: 8,
		name: "Privatix",
		symbol: "PRIX"
	},
	{
		address: "0x1844b21593262668B7248d0f57a220CaaBA46ab9",
		chainId: 1,
		decimals: 18,
		name: "Oyster Pearl",
		symbol: "PRL"
	},
	{
		address: "0x226bb599a12C826476e3A771454697EA52E9E220",
		chainId: 1,
		decimals: 8,
		name: "Propy",
		symbol: "PRO"
	},
	{
		address: "0xfB559CE67Ff522ec0b9Ba7f5dC9dc7EF6c139803",
		chainId: 1,
		decimals: 18,
		name: "Probit Token",
		symbol: "PROB"
	},
	{
		address: "0x282D0AD1FA03DFBDB88243B958e77349c73737D1",
		chainId: 1,
		decimals: 9,
		name: "Protector Roge",
		symbol: "PROGE"
	},
	{
		address: "0xfc82bb4ba86045Af6F327323a46E80412b91b27d",
		chainId: 1,
		decimals: 18,
		name: "Prometeus",
		symbol: "PROM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA3149E0fA0061A9007fAf307074cdCd290f0e2Fd",
		chainId: 1,
		decimals: 8,
		name: "PronCoin",
		symbol: "PRON"
	},
	{
		address: "0x8D5DB0c1f0681071Cb38A382AE6704588D9DA587",
		chainId: 1,
		decimals: 9,
		name: "Prophet",
		symbol: "PROPHET"
	},
	{
		address: "0x6fe56C0bcdD471359019FcBC48863d6c3e9d4F41",
		chainId: 1,
		decimals: 18,
		name: "Props Token",
		symbol: "PROPS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x094F00Cb5e31Ab6164E3CAcb654e8D6c2b3b471C",
		chainId: 1,
		decimals: 6,
		name: "ProSwap",
		symbol: "PROS"
	},
	{
		address: "0x8642A849D0dcb7a15a974794668ADcfbe4794B56",
		chainId: 1,
		decimals: 18,
		name: "Prosper",
		symbol: "PROS"
	},
	{
		address: "0x2341Dd0A96a0Dab62Aa1efB93D59FF7F3bDB8932",
		chainId: 1,
		decimals: 18,
		name: "ProStarter",
		symbol: "PROT"
	},
	{
		address: "0xa3D29c52Bf09EF16F23317029a01c40363131827",
		chainId: 1,
		decimals: 18,
		name: "Pharma Pay Coin",
		symbol: "PRP"
	},
	{
		address: "0x7641b2Ca9DDD58adDf6e3381c1F994Aac5f1A32f",
		chainId: 1,
		decimals: 18,
		name: "Purpose",
		symbol: "PRPS"
	},
	{
		address: "0xE40C374d8805b1dD58CDcEFf998A2F6920Cb52FD",
		chainId: 1,
		decimals: 18,
		name: "Purpose",
		symbol: "PRPS"
	},
	{
		address: "0xd94F2778e2B3913C53637Ae60647598bE588c570",
		chainId: 1,
		decimals: 18,
		name: "Purpose",
		symbol: "PRPS"
	},
	{
		address: "0x362bc847A3a9637d3af6624EeC853618a43ed7D2",
		chainId: 1,
		decimals: 18,
		name: "PARSIQ",
		symbol: "PRQ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa211F450Ce88deb31D3F12Ae3C1EBf6b0e55A5d9",
		chainId: 1,
		decimals: 18,
		name: "Parsiq Boost",
		symbol: "PRQBOOST"
	},
	{
		address: "0x163733bcc28dbf26B41a8CfA83e369b5B3af741b",
		chainId: 1,
		decimals: 18,
		name: "Persians",
		symbol: "PRS"
	},
	{
		address: "0xe0D95530820aAfc51b1d98023AA1Ff000b78d8b2",
		chainId: 1,
		decimals: 18,
		name: "PressOne",
		symbol: "PRS"
	},
	{
		address: "0x0C04d4f331DA8dF75f9E2e271E3f3F1494C66C36",
		chainId: 1,
		decimals: 9,
		name: "PRSP",
		symbol: "PRSP"
	},
	{
		address: "0x00ad22AB1006FC282674887aFF1114e5aD14077d",
		chainId: 1,
		decimals: 18,
		name: "PRESTO",
		symbol: "PRSTX"
	},
	{
		address: "0x6D0F5149c502faf215C89ab306ec3E50b15e2892",
		chainId: 1,
		decimals: 18,
		name: "Portion",
		symbol: "PRT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6D10E0194400A04600881057787Eb9E9c063dcA0",
		chainId: 1,
		decimals: 18,
		name: "Proton Project",
		symbol: "PRTN"
	},
	{
		address: "0xA36e59c08c9F251a6b7A9EB6bE6e32fd6157AcD0",
		chainId: 1,
		decimals: 18,
		name: "Previse",
		symbol: "PRVS"
	},
	{
		address: "0x22ACaEe85dDB83a3A33B7f0928a0e2c3bFDb6a4F",
		chainId: 1,
		decimals: 18,
		name: "Proxy",
		symbol: "PRXY"
	},
	{
		address: "0x3C81D482172cC273c3b91dD9D8eb212023D00521",
		chainId: 1,
		decimals: 18,
		name: "Prophecy",
		symbol: "PRY"
	},
	{
		address: "0x5F85c60187aB233Ca6e750731D15e7eFd061fBdE",
		chainId: 1,
		decimals: 18,
		name: "Poseidon",
		symbol: "PSDN"
	},
	{
		address: "0x88D59Ba796fDf639dEd3b5E720988D59fDb71Eb8",
		chainId: 1,
		decimals: 18,
		name: "Payship",
		symbol: "PSHP"
	},
	{
		address: "0xD4Cb461eACe80708078450e465881599d2235f1A",
		chainId: 1,
		decimals: 9,
		name: "Passive Income",
		symbol: "PSI"
	},
	{
		address: "0x1c5F43710a1776b0Ea7191b7Ead75D4B98D69858",
		chainId: 1,
		decimals: 18,
		name: "Pool of Stake",
		symbol: "PSK"
	},
	{
		address: "0x3F84c4184b35c488F7fe4A12469610C9B1CB03C9",
		chainId: 1,
		decimals: 18,
		name: "PoolStake",
		symbol: "PSK"
	},
	{
		address: "0x5d4ABC77B8405aD177d8ac6682D584ecbFd46CEc",
		chainId: 1,
		decimals: 18,
		name: "Primas",
		symbol: "PST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE3feDAeCD47aa8EAb6b23227b0eE56F092C967a9",
		chainId: 1,
		decimals: 18,
		name: "Primas",
		symbol: "PST"
	},
	{
		address: "0x519C1001D550C0a1DaE7d1fC220f7d14c2A521BB",
		chainId: 1,
		decimals: 18,
		name: "Polkaswap",
		symbol: "PSWAP"
	},
	{
		address: "0x66497A283E0a007bA3974e837784C6AE323447de",
		chainId: 1,
		decimals: 18,
		name: "PornToken",
		symbol: "PT"
	},
	{
		address: "0x2a8E98e256f32259b5E5Cb55Dd63C8e891950666",
		chainId: 1,
		decimals: 18,
		name: "ParrotCoin",
		symbol: "PTC"
	},
	{
		address: "0x02Eca910CB3A7D43eBC7e8028652ed5C6b70259B",
		chainId: 1,
		decimals: 18,
		name: "Pteria",
		symbol: "PTERIA"
	},
	{
		address: "0xC57d533c50bC22247d49a368880fb49a1caA39F7",
		chainId: 1,
		decimals: 18,
		name: "PowerTrade Fuel",
		symbol: "PTF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7c32DB0645A259FaE61353c1f891151A2e7f8c1e",
		chainId: 1,
		decimals: 18,
		name: "Potentiam",
		symbol: "PTM"
	},
	{
		address: "0xFE76BE9cEC465ed3219a9972c21655D57d21aec6",
		chainId: 1,
		decimals: 18,
		name: "PalletOneToken",
		symbol: "PTN"
	},
	{
		address: "0x4946583c5b86E01cCD30c71a05617D06E3E73060",
		chainId: 1,
		decimals: 18,
		name: "Foresting",
		symbol: "PTON",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8Ae4BF2C33a8e667de34B54938B0ccD03Eb8CC06",
		chainId: 1,
		decimals: 8,
		name: "Patientory",
		symbol: "PTOY"
	},
	{
		address: "0x4689a4e169eB39cC9078C0940e21ff1Aa8A39B9C",
		chainId: 1,
		decimals: 18,
		name: "Proton Token",
		symbol: "PTT"
	},
	{
		address: "0x5512e1D6A7BE424b4323126B4f9E86D023F95764",
		chainId: 1,
		decimals: 18,
		name: "PornTokenV2",
		symbol: "PTWO"
	},
	{
		address: "0xEf6B4cE8C9Bc83744fbcdE2657b32eC18790458A",
		chainId: 1,
		decimals: 0,
		name: "Pour Coin",
		symbol: "PUC"
	},
	{
		address: "0xdb69c3f8977f78952303987E87153c1988CF65a9",
		chainId: 1,
		decimals: 18,
		name: "PugLife",
		symbol: "PUGL"
	},
	{
		address: "0x0FD10b9899882a6f2fcb5c371E17e70FdEe00C38",
		chainId: 1,
		decimals: 18,
		name: "Pundi X",
		symbol: "PUNDIX"
	},
	{
		address: "0x269616D549D7e8Eaa82DFb17028d0B212D11232A",
		chainId: 1,
		decimals: 18,
		name: "PUNK Vault",
		symbol: "PUNK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9cea2eD9e47059260C97d697f82b8A14EfA61EA5",
		chainId: 1,
		decimals: 18,
		name: "Punk",
		symbol: "PUNK"
	},
	{
		address: "0x49706a576bb823cdE3180C930F9947d59e2deD4D",
		chainId: 1,
		decimals: 18,
		name: "Punk Attr 4",
		symbol: "PUNK-ATTR-4"
	},
	{
		address: "0xAB9c92A9337A1494C6D545E48187Fa37144403c8",
		chainId: 1,
		decimals: 18,
		name: "Punk Attr 5",
		symbol: "PUNK-ATTR-5"
	},
	{
		address: "0x69BbE2FA02b4D90A944fF328663667DC32786385",
		chainId: 1,
		decimals: 18,
		name: "Punk Basic",
		symbol: "PUNK-BASIC"
	},
	{
		address: "0x27Ffed7E5926Fb2795fC85aAab558243F280A8a2",
		chainId: 1,
		decimals: 18,
		name: "Punk Female",
		symbol: "PUNK-FEMALE"
	},
	{
		address: "0xF18ade29a225fAa555e475eE01F9Eb66eb4a3a74",
		chainId: 1,
		decimals: 18,
		name: "Punk Zombie",
		symbol: "PUNK-ZOMBIE"
	},
	{
		address: "0x81dBc1c8e40C3095071949Eda9800C2209a7279A",
		chainId: 1,
		decimals: 18,
		name: "Pupper",
		symbol: "PUP"
	},
	{
		address: "0xd53998C536fc8B59b38aa0b49DBd8170d5Ebf4c2",
		chainId: 1,
		decimals: 18,
		name: "PUPS Vault  NFTX",
		symbol: "PUPS"
	},
	{
		address: "0xe25ff6Eb959BCE67975778e46A47750C243B6B99",
		chainId: 1,
		decimals: 18,
		name: "PureCarbon",
		symbol: "PURC"
	},
	{
		address: "0x2904b9b16652d7d0408EcCfA23A19D4A3358230f",
		chainId: 1,
		decimals: 18,
		name: "Puriever",
		symbol: "PURE"
	},
	{
		address: "0x93d3296cac208422BF587c3597D116e809870f2b",
		chainId: 1,
		decimals: 8,
		name: "PegNet pUSD",
		symbol: "pUSD"
	},
	{
		address: "0x412e5a36BDE71AA2c38e1c0E26BAAf7F2f0Bc24a",
		chainId: 1,
		decimals: 18,
		name: "PegsUSD",
		symbol: "PUSD"
	},
	{
		address: "0xf418588522d5dd018b425E472991E52EBBeEEEEE",
		chainId: 1,
		decimals: 18,
		name: "Ethereum Push Notif",
		symbol: "PUSH"
	},
	{
		address: "0x9196E18Bc349B1F64Bc08784eaE259525329a1ad",
		chainId: 1,
		decimals: 18,
		name: "Pussy Financial",
		symbol: "PUSSY"
	},
	{
		address: "0xE277aC35F9D327A670c1A3F3eeC80a83022431e4",
		chainId: 1,
		decimals: 8,
		name: "PolypuX",
		symbol: "PUX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7869c4A1a3f6F8684FBCC422a21aD7Abe3167834",
		chainId: 1,
		decimals: 18,
		name: "Pivot Token",
		symbol: "PVT"
	},
	{
		address: "0x5a14fe6923e767A8238f29d3E1FB1a913975F0d7",
		chainId: 1,
		decimals: 18,
		name: "PWay",
		symbol: "PWAY"
	},
	{
		address: "0xA3D93c0616dbC31FEf1e112C7665A4bA4dDBf0be",
		chainId: 1,
		decimals: 18,
		name: "Prime Whiterock Com",
		symbol: "PWC"
	},
	{
		address: "0x47e67BA66b0699500f18A53F94E2b9dB3D47437e",
		chainId: 1,
		decimals: 18,
		name: "PlayGame",
		symbol: "PXG"
	},
	{
		address: "0x5247C0DB4044FB6F97f32C7E1B48758019A5A912",
		chainId: 1,
		decimals: 18,
		name: "pxGOLD Synthetic Go",
		symbol: "PXGOLD-MAR2022"
	},
	{
		address: "0x59fec83eC709c893aedD1A144Cf1828Eb04127Cd",
		chainId: 1,
		decimals: 18,
		name: "pxGOLD Synthetic GO",
		symbol: "PXGOLD-MAY2021"
	},
	{
		address: "0xF88951D7B676798705fd3a362ba5B1DBca2B233b",
		chainId: 1,
		decimals: 18,
		name: "Piction Network",
		symbol: "PXL"
	},
	{
		address: "0xc14830E53aA344E8c14603A91229A0b925b0B262",
		chainId: 1,
		decimals: 8,
		name: "Populous XBRL Token",
		symbol: "PXT"
	},
	{
		address: "0x4B606e9Eb2228c70f44453AFe5a73e1FeA258Ce1",
		chainId: 1,
		decimals: 18,
		name: "pxUSD Synthetic USD",
		symbol: "PXUSD-MAR2022"
	},
	{
		address: "0xbB98Fc1fD1080D2B8bdaD75c51D30B50c6F59b62",
		chainId: 1,
		decimals: 4,
		name: "PYGOZ",
		symbol: "PYGOZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7703C35CfFdC5CDa8D27aa3df2F9ba6964544b6e",
		chainId: 1,
		decimals: 18,
		name: "Pylon Network",
		symbol: "PYLNT"
	},
	{
		address: "0xD8924385CD46e6AF6F377871C732BDe2F8e9dD18",
		chainId: 1,
		decimals: 18,
		name: "Pylon Network",
		symbol: "PYLNT"
	},
	{
		address: "0xD7B7d3C0bdA57723Fb54ab95Fd8F9EA033AF37f2",
		chainId: 1,
		decimals: 18,
		name: "Pylon Finance",
		symbol: "PYLON"
	},
	{
		address: "0x0142C3B2fC51819B5aF5dFc4AA52Df9722790851",
		chainId: 1,
		decimals: 18,
		name: "Paycent",
		symbol: "PYN"
	},
	{
		address: "0x9534ad65fb398E27Ac8F4251dAe1780B989D136e",
		chainId: 1,
		decimals: 18,
		name: "Vulcan Forged",
		symbol: "PYR"
	},
	{
		address: "0x14409B0Fc5C7f87b5DAd20754fE22d29A3dE8217",
		chainId: 1,
		decimals: 18,
		name: "PYRO Network",
		symbol: "PYRO"
	},
	{
		address: "0xa31f7a32Db329F270A0E6b59558823e64D8eF0A6",
		chainId: 1,
		decimals: 8,
		name: "Q8E20 Token",
		symbol: "Q8E20"
	},
	{
		address: "0xAAA7A10a8ee237ea61E8AC46C50A8Db8bCC1baaa",
		chainId: 1,
		decimals: 18,
		name: "QANplatform",
		symbol: "QANX"
	},
	{
		address: "0x618E75Ac90b12c6049Ba3b27f5d5F8651b0037F6",
		chainId: 1,
		decimals: 6,
		name: "QASH",
		symbol: "QASH"
	},
	{
		address: "0x671AbBe5CE652491985342e85428EB1b07bC6c64",
		chainId: 1,
		decimals: 8,
		name: "QAU",
		symbol: "QAU"
	},
	{
		address: "0x1602af2C782cC03F9241992E243290Fccf73Bb13",
		chainId: 1,
		decimals: 18,
		name: "Qubitica",
		symbol: "QBIT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCb5ea3c190d8f82DEADF7ce5Af855dDbf33e3962",
		chainId: 1,
		decimals: 6,
		name: "Qubitica (Old)",
		symbol: "QBIT (Old)"
	},
	{
		address: "0x2467AA6B5A2351416fD4C3DeF8462d841feeecEC",
		chainId: 1,
		decimals: 18,
		name: "qiibee",
		symbol: "QBX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9bBc9286cdF6eeFEBF21DF19Bac71c6Bdd7759D4",
		chainId: 1,
		decimals: 18,
		name: "QUEENBEE",
		symbol: "QBZ"
	},
	{
		address: "0x687BfC3E73f6af55F0CccA8450114D107E781a0e",
		chainId: 1,
		decimals: 18,
		name: "QChi",
		symbol: "QCH"
	},
	{
		address: "0x82866b4A71BA9d930Fe338C386B6A45a7133eb36",
		chainId: 1,
		decimals: 9,
		name: "Qcore Finance",
		symbol: "QCORE"
	},
	{
		address: "0x3166C570935a7D8554c8f4eA792ff965D2EFe1f2",
		chainId: 1,
		decimals: 18,
		name: "Q DAO Governance to",
		symbol: "QDAO"
	},
	{
		address: "0xfee4DBe2751bF8d1B1B861aAF9664961F19Ce91A",
		chainId: 1,
		decimals: 18,
		name: "Q DeFi Rating   Gov",
		symbol: "QDEFI"
	},
	{
		address: "0x5df94780f00140FE72d239D0D261f7797E3Fbd1B",
		chainId: 1,
		decimals: 18,
		name: "QChi Chain",
		symbol: "QHC"
	},
	{
		address: "0xEA26c4aC16D4a5A106820BC8AEE85fd0b7b2b664",
		chainId: 1,
		decimals: 18,
		name: "QuarkChain",
		symbol: "QKC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb73404280697080dA0116cFAc0e577fAFdf44b37",
		chainId: 1,
		decimals: 8,
		name: "Quick Mining",
		symbol: "QM"
	},
	{
		address: "0x4a220E6096B25EADb88358cb44068A3248254675",
		chainId: 1,
		decimals: 18,
		name: "Quant",
		symbol: "QNT"
	},
	{
		address: "0xBd1E7f594600DCAF7f483af55deaCEc0159A064E",
		chainId: 1,
		decimals: 8,
		name: "Qobit",
		symbol: "QOB"
	},
	{
		address: "0x2822f6D1B2f41F93f33d937bc7d84A8Dfa4f4C21",
		chainId: 1,
		decimals: 18,
		name: "Poseidon Network",
		symbol: "QQQ"
	},
	{
		address: "0xFFAA5ffc455d9131f8A2713A741fD1960330508B",
		chainId: 1,
		decimals: 18,
		name: "QRG",
		symbol: "QRG"
	},
	{
		address: "0x697beac28B09E122C4332D163985e8a73121b97F",
		chainId: 1,
		decimals: 8,
		name: "QRL",
		symbol: "QRL"
	},
	{
		address: "0x6e0daDE58D2d89eBBe7aFc384e3E4f15b70b14D8",
		chainId: 1,
		decimals: 18,
		name: "QuiverX",
		symbol: "QRX"
	},
	{
		address: "0x99ea4dB9EE77ACD40B119BD1dC4E33e1C070b80d",
		chainId: 1,
		decimals: 18,
		name: "Quantstamp",
		symbol: "QSP",
		extensions: {
			color: "#454545",
			isVerified: true
		}
	},
	{
		address: "0x19131a8aE42E32c747c1EAd318Fadb98B0be45B7",
		chainId: 1,
		decimals: 18,
		name: "Quality Tracing Cha",
		symbol: "QTC"
	},
	{
		address: "0x1bF7Fd22709733cCD7c45AB27Dd02C7EC8E50078",
		chainId: 1,
		decimals: 18,
		name: "Quiztok",
		symbol: "QTCON"
	},
	{
		address: "0x0FCbC31c503b4A9eD90E87f8Ff46C318a4a14260",
		chainId: 1,
		decimals: 8,
		name: "Quantfury",
		symbol: "QTF"
	},
	{
		address: "0x2C3C1F05187dBa7A5f2Dd47Dca57281C4d4F183F",
		chainId: 1,
		decimals: 18,
		name: "TiiQu's Q Token",
		symbol: "QTQ"
	},
	{
		address: "0x9a642d6b3368ddc662CA244bAdf32cDA716005BC",
		chainId: 1,
		decimals: 18,
		name: "Qtum",
		symbol: "QTUM"
	},
	{
		address: "0x40821CD074dfeCb1524286923bC69315075b5c89",
		chainId: 1,
		decimals: 18,
		name: "Quai Dao",
		symbol: "QUAI"
	},
	{
		address: "0x6c28AeF8977c9B773996d0e8376d2EE379446F2f",
		chainId: 1,
		decimals: 18,
		name: "Quickswap",
		symbol: "QUICK"
	},
	{
		address: "0x86E44543164D9b97B14ef7f6f3aB7bA670CAB346",
		chainId: 1,
		decimals: 18,
		name: "QUINADS",
		symbol: "QUIN"
	},
	{
		address: "0x264Dc2DedCdcbb897561A57CBa5085CA416fb7b4",
		chainId: 1,
		decimals: 18,
		name: "QunQun",
		symbol: "QUN"
	},
	{
		address: "0xefd720C94659F2cCb767809347245F917A145ed8",
		chainId: 1,
		decimals: 18,
		name: "Quoxent",
		symbol: "QUO"
	},
	{
		address: "0x59d4CCC94A9C4C3d3b4bA2Aa343a9bDF95145DD1",
		chainId: 1,
		decimals: 18,
		name: "QUSD Stablecoin",
		symbol: "QUSD"
	},
	{
		address: "0x1183F92A5624D68e85FFB9170F16BF0443B4c242",
		chainId: 1,
		decimals: 18,
		name: "QVT",
		symbol: "QVT"
	},
	{
		address: "0x1D96Fd43EE07Aa79f8Fd003cbdF404fb5ce41AD2",
		chainId: 1,
		decimals: 18,
		name: "Qawalla Token",
		symbol: "QWLA"
	},
	{
		address: "0x48f775EFBE4F5EcE6e0DF2f7b5932dF56823B990",
		chainId: 1,
		decimals: 0,
		name: "Revain",
		symbol: "R"
	},
	{
		address: "0x688fF43c3c19e4714f0BeB76df8Ee394207Ab411",
		chainId: 1,
		decimals: 18,
		name: "CitiOS",
		symbol: "R2R"
	},
	{
		address: "0xCAEaf8381D4B20b43AFA42061D6f80319A8881F6",
		chainId: 1,
		decimals: 8,
		name: "R34P",
		symbol: "R34P"
	},
	{
		address: "0x13572851103bEd49FF743AF4C4BB5ace88B22E2F",
		chainId: 1,
		decimals: 18,
		name: "Recharge Finance",
		symbol: "R3FI"
	},
	{
		address: "0x8C7424c3000942e5A93De4a01Ce2eC86c06333Cb",
		chainId: 1,
		decimals: 18,
		name: "ROCK3T",
		symbol: "R3T"
	},
	{
		address: "0xf3110b27f481F9aC3c1Ba3C54dE542AcCB2D913C",
		chainId: 1,
		decimals: 18,
		name: "R64X",
		symbol: "R64X"
	},
	{
		address: "0xc22B30E4cce6b78aaaADae91E44E73593929a3e9",
		chainId: 1,
		decimals: 18,
		name: "RAC",
		symbol: "RAC"
	},
	{
		address: "0x31c8EAcBFFdD875c74b94b077895Bd78CF1E64A3",
		chainId: 1,
		decimals: 18,
		name: "Radicle",
		symbol: "RAD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE5a3229CCb22b6484594973A03a3851dCd948756",
		chainId: 1,
		decimals: 18,
		name: "Receive Access Ecosystem",
		symbol: "RAE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x94804dc4948184fFd7355f62Ccbb221c9765886F",
		chainId: 1,
		decimals: 18,
		name: "Rage Fan",
		symbol: "RAGE"
	},
	{
		address: "0x03ab458634910AaD20eF5f1C8ee96F1D6ac54919",
		chainId: 1,
		decimals: 18,
		name: "Rai Reflex Index",
		symbol: "RAI",
		extensions: {
			color: "#1FC9A8",
			isRainbowCurated: true,
			isVerified: true,
			shadowColor: "#559889"
		}
	},
	{
		address: "0xf30547ff2Df1F1CBE5C8DD758B3dd098C856e38f",
		chainId: 1,
		decimals: 18,
		name: "RAI Finance",
		symbol: "RAI"
	},
	{
		address: "0x4c9BBFc1FbD93dFB509E718400978fbEedf590E9",
		chainId: 1,
		decimals: 18,
		name: "Rai",
		symbol: "RAI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe76C6c83af64e4C60245D8C7dE953DF673a7A33D",
		chainId: 1,
		decimals: 18,
		name: "Railgun",
		symbol: "RAIL"
	},
	{
		address: "0x61cDb66e56FAD942a7b5cE3F419FfE9375E31075",
		chainId: 1,
		decimals: 18,
		name: "RAIN Network",
		symbol: "RAIN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xeB953eDA0DC65e3246f43DC8fa13f35623bDd5eD",
		chainId: 1,
		decimals: 18,
		name: "Rainicorn",
		symbol: "RAINI"
	},
	{
		address: "0x10bA8C420e912bF07BEdaC03Aa6908720db04e0c",
		chainId: 1,
		decimals: 18,
		name: "Raise",
		symbol: "RAISE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa8B0F154A688c22142E361707df64277e0A0bE66",
		chainId: 1,
		decimals: 18,
		name: "Rake Finance",
		symbol: "RAK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x51BC0DeaF7bBE82bC9006b0c3531668a4206D27F",
		chainId: 1,
		decimals: 18,
		name: "RAKUN",
		symbol: "RAKU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x714599f7604144a3fE1737c440a70fc0fD6503ea",
		chainId: 1,
		decimals: 18,
		name: "Raku Coin",
		symbol: "RAKUC"
	},
	{
		address: "0x33D0568941C0C64ff7e0FB4fbA0B11BD37deEd9f",
		chainId: 1,
		decimals: 18,
		name: "RAMP",
		symbol: "RAMP"
	},
	{
		address: "0x45eDb535942a8C84D9f4b5D37e1b25F91Ea4804c",
		chainId: 1,
		decimals: 18,
		name: "RadioYo",
		symbol: "RAO"
	},
	{
		address: "0xD8dae35B487E3453CFFD998c6754713c81B0f200",
		chainId: 1,
		decimals: 18,
		name: "RapDoge",
		symbol: "RAPDOGE"
	},
	{
		address: "0x81B1bFD6CB9Ad42DB395c2a27F73D4DCf5777e2D",
		chainId: 1,
		decimals: 4,
		name: "Rare",
		symbol: "RARE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x93dfaf57D986B9cA77Df9376c50878E013D9c7C8",
		chainId: 1,
		decimals: 18,
		name: "Unique One",
		symbol: "RARE"
	},
	{
		address: "0xFca59Cd816aB1eaD66534D82bc21E7515cE441CF",
		chainId: 1,
		decimals: 18,
		name: "Rarible",
		symbol: "RARI",
		extensions: {
			color: "#F876F2",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x393fAC0773C765c80dc887451377d553C46F83b1",
		chainId: 1,
		decimals: 18,
		name: "RAKSUR",
		symbol: "RAS"
	},
	{
		address: "0xE8663A64A96169ff4d95b4299E7ae9a76b905B31",
		chainId: 1,
		decimals: 8,
		name: "DPRating",
		symbol: "RATING"
	},
	{
		address: "0x68496eE825DAFE1cF66D4083f776B9eAAb31e447",
		chainId: 1,
		decimals: 18,
		name: "ErcauX",
		symbol: "RAUX"
	},
	{
		address: "0x5Eaa69B29f99C84Fe5dE8200340b4e9b4Ab38EaC",
		chainId: 1,
		decimals: 18,
		name: "Raze Network",
		symbol: "RAZE"
	},
	{
		address: "0x50DE6856358Cc35f3A9a57eAAA34BD4cB707d2cd",
		chainId: 1,
		decimals: 18,
		name: "Razor Network",
		symbol: "RAZOR"
	},
	{
		address: "0xE8b251822d003a2b2466ee0E38391C2db2048739",
		chainId: 1,
		decimals: 9,
		name: "rbase finance",
		symbol: "RBASE"
	},
	{
		address: "0xA4EED63db85311E22dF4473f87CcfC3DaDCFA3E3",
		chainId: 1,
		decimals: 18,
		name: "Rubic",
		symbol: "RBC"
	},
	{
		address: "0x5590e22f78441da30463B55c3db0b5eA80cAbccA",
		chainId: 1,
		decimals: 18,
		name: "Ruby Currency",
		symbol: "RBC"
	},
	{
		address: "0xFc2C4D8f95002C14eD0a7aA65102Cac9e5953b5E",
		chainId: 1,
		decimals: 18,
		name: "Rublix",
		symbol: "RBLX"
	},
	{
		address: "0x165B6749812900538402CD540c55be68411F8Ea0",
		chainId: 1,
		decimals: 18,
		name: "realtybits",
		symbol: "RBT"
	},
	{
		address: "0x61B2d3eA9f1c6b387C985C73d40e8fBfb284E5C7",
		chainId: 1,
		decimals: 18,
		name: "RoboCalls",
		symbol: "RC20"
	},
	{
		address: "0x33bFD20660eeAF952E8D5Bc3236E1918701F17D0",
		chainId: 1,
		decimals: 18,
		name: "RCCC",
		symbol: "RCCC"
	},
	{
		address: "0x78571acCAf24052795F98B11F093b488a2d9EAA4",
		chainId: 1,
		decimals: 18,
		name: "Rocket Token",
		symbol: "RCKT"
	},
	{
		address: "0x5A844590c5b8f40ae56190771d06c60b9ab1Da1C",
		chainId: 1,
		decimals: 18,
		name: "Ross Campbell Legal Engineering",
		symbol: "RCLE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF970b8E36e23F7fC3FD752EeA86f8Be8D83375A6",
		chainId: 1,
		decimals: 18,
		name: "Ripio Credit Network",
		symbol: "RCN",
		extensions: {
			color: "#3555f9",
			isVerified: true
		}
	},
	{
		address: "0x13f25cd52b21650caa8225C9942337d914C9B030",
		chainId: 1,
		decimals: 18,
		name: "RealChain",
		symbol: "RCT"
	},
	{
		address: "0x2a3Aa9ECA41E720Ed46B5A70D6C37EfA47f768Ac",
		chainId: 1,
		decimals: 18,
		name: "RCT",
		symbol: "RCT"
	},
	{
		address: "0x261b45D85cCFeAbb11F022eBa346ee8D1cd488c0",
		chainId: 1,
		decimals: 18,
		name: "rDAI",
		symbol: "rDAI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x255Aa6DF07540Cb5d3d297f0D0D4D84cb52bc8e6",
		chainId: 1,
		decimals: 18,
		name: "Raiden",
		symbol: "RDN",
		extensions: {
			color: "#25292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x0ff5A8451A839f5F0BB3562689D9A44089738D11",
		chainId: 1,
		decimals: 18,
		name: "Dopex Rebate Token",
		symbol: "RDPX"
	},
	{
		address: "0x3C9Ca73d5309d38c6F2C21b78b9aE1f4b2441188",
		chainId: 1,
		decimals: 4,
		name: "RADAR",
		symbol: "RDR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd967d9F941CD316Ab238d3EE761F80b7cAec7819",
		chainId: 1,
		decimals: 18,
		name: "Rendezvous",
		symbol: "RDV"
	},
	{
		address: "0x767bA2915EC344015a7938E3eEDfeC2785195D05",
		chainId: 1,
		decimals: 18,
		name: "Realisto",
		symbol: "REA"
	},
	{
		address: "0x9214eC02CB71CbA0ADA6896b8dA260736a67ab10",
		chainId: 1,
		decimals: 18,
		name: "Real Estate Asset L",
		symbol: "REAL"
	},
	{
		address: "0x6b4389Afb3e243A65668B7311fA9Ef092A8a3B64",
		chainId: 1,
		decimals: 18,
		name: "Real Coin",
		symbol: "REAL"
	},
	{
		address: "0x1Eb16EC378f0Ce8f81449120629F52ba28961d47",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   1000",
		symbol: "REALTOKEN-S-1000-FL"
	},
	{
		address: "0xB5D30c28F87acf675Ed5B9f343E5ffF39eC9942C",
		chainId: 1,
		decimals: 18,
		name: "RealT Token  10024",
		symbol: "REALTOKEN-S-10024-1"
	},
	{
		address: "0x92161385C9dE8798ad5fB01c0bE99fFcbC84dFD8",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10084",
		symbol: "REALTOKEN-S-10084-G"
	},
	{
		address: "0x8626B38267e4FC0D8C92E0bB86F97Acab3f6AA05",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10604",
		symbol: "REALTOKEN-S-10604-S"
	},
	{
		address: "0xD1c15CEbfDcd16F00D91666bf64C8b66CbF5e9b5",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10612",
		symbol: "REALTOKEN-S-10612-S"
	},
	{
		address: "0xE5Ce63AC9a08c1EB160889151cD84855F16C94d2",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10616",
		symbol: "REALTOKEN-S-10616-M"
	},
	{
		address: "0x06D0e5Aee443093aC5635B709C8a01342E59Df19",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10617",
		symbol: "REALTOKEN-S-10617-H"
	},
	{
		address: "0xD5d1adf54Fbf73a00b197DdCfDAD7cc27D93002f",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10629",
		symbol: "REALTOKEN-S-10629-M"
	},
	{
		address: "0x4a99cc509f7FaCF58D7B67E99236dB5e0921ef81",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10639",
		symbol: "REALTOKEN-S-10639-S"
	},
	{
		address: "0xe82CBb7C29d00a4296EE505d12a473C26cd9c423",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10700",
		symbol: "REALTOKEN-S-10700-W"
	},
	{
		address: "0x42B387CDf0951A0e08336D35651544c47cD05C95",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   10974",
		symbol: "REALTOKEN-S-10974-W"
	},
	{
		address: "0xD5Fc0C4C4C5ff316e1E91494d963Ff1D52Ba25fF",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   11078",
		symbol: "REALTOKEN-S-11078-L"
	},
	{
		address: "0xb8403b7730368942a5BFe5aaC04a31B44015b1cc",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   11078",
		symbol: "REALTOKEN-S-11078-W"
	},
	{
		address: "0x5E2a09064B2DCa8c44aaD8A5b69a69Bb1854fE72",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   11201",
		symbol: "REALTOKEN-S-11201-C"
	},
	{
		address: "0x9b5B4886033B4ABc5Eb0552ffF7c15A67C3c47C7",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   11300",
		symbol: "REALTOKEN-S-11300-R"
	},
	{
		address: "0x31820af2d43c08BD82Bd94B08974062482bD98D3",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   11653",
		symbol: "REALTOKEN-S-11653-N"
	},
	{
		address: "0xDd833D0eEF6d5d7Cec781b03c19f3B425F3039Df",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   11957",
		symbol: "REALTOKEN-S-11957-O"
	},
	{
		address: "0xEe2f2212a64Ec3f6BC0F7580e10c53CB38B57508",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   12334",
		symbol: "REALTOKEN-S-12334-L"
	},
	{
		address: "0x9D918eE39a356bE8eF99734599c7e70160dB4Db6",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   12405",
		symbol: "REALTOKEN-S-12405-S"
	},
	{
		address: "0x969d42ad7008e6651E1Fd52742153F8743225D98",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   12409",
		symbol: "REALTOKEN-S-12409-W"
	},
	{
		address: "0x94Fa7F8cb8453AD57cd133363b3012044647078C",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   1244",
		symbol: "REALTOKEN-S-1244-SA"
	},
	{
		address: "0xb5DD2b6E0A0422e069E1D2CC3Ed16533488a05e3",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   12866",
		symbol: "REALTOKEN-S-12866-L"
	},
	{
		address: "0x5600e25b4f24c63Afa655C3bd96E3C178B654Fa1",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   13045",
		symbol: "REALTOKEN-S-13045-W"
	},
	{
		address: "0x9F923653A19537b5a1b003854A1920fe67a8ffEB",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   13114",
		symbol: "REALTOKEN-S-13114-G"
	},
	{
		address: "0x08Ad1F3a48Be1D23C723a6cC8486b247F5dE935a",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   13116",
		symbol: "REALTOKEN-S-13116-K"
	},
	{
		address: "0x804f6bAa10615C85E4B4a5Bc4eFe516d9f7a4365",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   13606",
		symbol: "REALTOKEN-S-13606-W"
	},
	{
		address: "0x6F442Da588232DC57Bf0096E8dE48D6961D5CC83",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   13895",
		symbol: "REALTOKEN-S-13895-S"
	},
	{
		address: "0x4E98493920b16Dd6642e9D48497c8d0A49150f6F",
		chainId: 1,
		decimals: 18,
		name: "RealT Token  13991",
		symbol: "REALTOKEN-S-13991-W"
	},
	{
		address: "0xe887DC4fcb5240c0c080AEAb8870421d3ebd0B28",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14066",
		symbol: "REALTOKEN-S-14066-S"
	},
	{
		address: "0x315699f1BA88383CFF2F2f30FcaD187aDb2E4D72",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14078",
		symbol: "REALTOKEN-S-14078-C"
	},
	{
		address: "0xb09850e2B93aa3AAa1476bF0c007cfc960E2de79",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14229",
		symbol: "REALTOKEN-S-14229-W"
	},
	{
		address: "0x9528a7402C0Fe85B817aa6E106EAFa03A02924c4",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14231",
		symbol: "REALTOKEN-S-14231-S"
	},
	{
		address: "0x41599149f1B52035392402F9e311b1edb0C9f699",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14319",
		symbol: "REALTOKEN-S-14319-R"
	},
	{
		address: "0x2adc1cfA726A45264A328D9d2e2C692ceac97458",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14494",
		symbol: "REALTOKEN-S-14494-C"
	},
	{
		address: "0x43fED9F9BF7DeedCb314b432a8e38219dd62CE9e",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14825",
		symbol: "REALTOKEN-S-14825-W"
	},
	{
		address: "0x31AA5fA895Fd186fDE12347A6fCaf540875b6434",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14882",
		symbol: "REALTOKEN-S-14882-T"
	},
	{
		address: "0x63A1849b47eF5913ccc5adb0E2708b11A4Ba6972",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   14918",
		symbol: "REALTOKEN-S-14918-J"
	},
	{
		address: "0x7E95b310724334FF74537dc08bfD3377d25E65Ce",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15039",
		symbol: "REALTOKEN-S-15039-W"
	},
	{
		address: "0x9FEF44FC4C571010BCCD5b63e1Cdc807D3b347bF",
		chainId: 1,
		decimals: 18,
		name: "RealT Token  15095",
		symbol: "REALTOKEN-S-15095-H"
	},
	{
		address: "0xdA47bD33e8f5d17Bb81b8752784bfb46C1c44B2A",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15350",
		symbol: "REALTOKEN-S-15350-G"
	},
	{
		address: "0x4d0dA4E75d40Bd7D9C4f7A292BF883BcDf38c45D",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15373",
		symbol: "REALTOKEN-S-15373-P"
	},
	{
		address: "0x69D1B42b20f3DED07bEC322253D0140b04Cbb6F5",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   1542",
		symbol: "REALTOKEN-S-1542-SR"
	},
	{
		address: "0xa81F77E8988b28fB74243B907acE3c83353Dc80a",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15634",
		symbol: "REALTOKEN-S-15634-L"
	},
	{
		address: "0x8D1090dF790FFAFdACCda03015c05dF3b4cC9c21",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15753",
		symbol: "REALTOKEN-S-15753-H"
	},
	{
		address: "0x175cbD54d38F58B530785e01471a2Ec0D4596EB5",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15770",
		symbol: "REALTOKEN-S-15770-P"
	},
	{
		address: "0xFe17C3C0B6F38cF3bD8bA872bEE7a18Ab16b43fB",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15777",
		symbol: "REALTOKEN-S-15777-A"
	},
	{
		address: "0xF23B80216a10E6f0c0D3b5AD5C9349e9425cAd40",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15778",
		symbol: "REALTOKEN-S-15778-M"
	},
	{
		address: "0x7f940B5509a22e81D29167581bdEea3Fa5a0abEE",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15784",
		symbol: "REALTOKEN-S-15784-M"
	},
	{
		address: "0xB3D3C1bBcEf737204AADb4fA6D90e974bc262197",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15796",
		symbol: "REALTOKEN-S-15796-H"
	},
	{
		address: "0xA9F30C907321718e655B74463CA665B690B78894",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   15860",
		symbol: "REALTOKEN-S-15860-H"
	},
	{
		address: "0xF4657AB08681214Bcb1893aa8E9C7613459250ec",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   1617",
		symbol: "REALTOKEN-S-1617-SA"
	},
	{
		address: "0x021Bb23a45e9FC824260435e670fC383b7b8cbbB",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   16200",
		symbol: "REALTOKEN-S-16200-F"
	},
	{
		address: "0x1FdB4015fD5E031C5641752C1e03B973ad5eA168",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   17500",
		symbol: "REALTOKEN-S-17500-E"
	},
	{
		address: "0xBA07997F594A52DF179620284B52B50A4E66227D",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   17809",
		symbol: "REALTOKEN-S-17809-C"
	},
	{
		address: "0x499A6c19F5537dd6005E2B5c6E1263103f558Ba4",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   17813",
		symbol: "REALTOKEN-S-17813-B"
	},
	{
		address: "0x8fcB39A25e639C8fbD28E8a018227D6570E02352",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   1815",
		symbol: "REALTOKEN-S-1815-SA"
	},
	{
		address: "0x9856C5CA15A4Ac9C65AAC090c38a9f39EB3b5eeC",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   18273",
		symbol: "REALTOKEN-S-18273-M"
	},
	{
		address: "0x21f1aF3e751317a2F7De7Df31D5d092E6A907Bde",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   18276",
		symbol: "REALTOKEN-S-18276-A"
	},
	{
		address: "0x46F8A600337dec5CaB03aa9b8F67f1D5B788ce28",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   18433",
		symbol: "REALTOKEN-S-18433-F"
	},
	{
		address: "0x9A99f283e1F6c3b7F24901995624Ef7b78E94471",
		chainId: 1,
		decimals: 18,
		name: "RealT Token  18466",
		symbol: "REALTOKEN-S-18466-F"
	},
	{
		address: "0x75f06B482adbFb04b877D8ee683E2FCDf18AD153",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   18481",
		symbol: "REALTOKEN-S-18481-W"
	},
	{
		address: "0x2C6f00A020B613C9419bb6C1Ac220036dbE9e622",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   18776",
		symbol: "REALTOKEN-S-18776-S"
	},
	{
		address: "0x9Eb90Ec3FAafC22092C9b91559FdDde538042093",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   18900",
		symbol: "REALTOKEN-S-18900-M"
	},
	{
		address: "0xaD91999F534F4075B00bA4231C018e57bdeBb342",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   18983",
		symbol: "REALTOKEN-S-18983-A"
	},
	{
		address: "0x280e9ed3B20c580a2f4219657bB9332D80Bc01f1",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19020",
		symbol: "REALTOKEN-S-19020-R"
	},
	{
		address: "0x33722EA778dF197f1b7B1Cf0b124d7A962181d65",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19136",
		symbol: "REALTOKEN-S-19136-T"
	},
	{
		address: "0x4Cc53Ee5ef306a95d407321d4B4acc30814C04ee",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19163",
		symbol: "REALTOKEN-S-19163-M"
	},
	{
		address: "0x211618Fa0934910666f2C2731101F5A3aC013fD8",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19200",
		symbol: "REALTOKEN-S-19200-S"
	},
	{
		address: "0x830B0e9a5ecf36D0A886D21e1C20043cD2d16515",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19201",
		symbol: "REALTOKEN-S-19201-W"
	},
	{
		address: "0xC731EcA970979Cd2Da2a1094A808F49894070D35",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19218",
		symbol: "REALTOKEN-S-19218-H"
	},
	{
		address: "0x8a9F904B4EaD6a97F3aB304d0D2196f5c602c807",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19311",
		symbol: "REALTOKEN-S-19311-K"
	},
	{
		address: "0x34eD9e71449529E034d0326cfBB3b5ccDCa00CBC",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19317",
		symbol: "REALTOKEN-S-19317-G"
	},
	{
		address: "0x24293ab20159cfc0f3D7C8727CD827fbA63d4F64",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19333",
		symbol: "REALTOKEN-S-19333-M"
	},
	{
		address: "0x3150f0EbC0eFEe280b5348b9C8C271AD44Eb8B13",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19596",
		symbol: "REALTOKEN-S-19596-G"
	},
	{
		address: "0x311FC485f1FeA0c8Cc9b5c783E79f4313DDFa720",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   19996",
		symbol: "REALTOKEN-S-19996-J"
	},
	{
		address: "0xEeDc2F5F4D1226759B1AcF9EfA23a99661De6663",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   20200",
		symbol: "REALTOKEN-S-20200-L"
	},
	{
		address: "0xF18CfFB528eca0ea31D1d6b28BC80d2eca34D14D",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   25097",
		symbol: "REALTOKEN-S-25097-A"
	},
	{
		address: "0xce111a198eB04F388AceB78c40ceD6daF1b0514a",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   272 N",
		symbol: "REALTOKEN-S-272-NE-"
	},
	{
		address: "0x400B5716B0c23B6f1f0f2A5fDb038949962B803E",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   3432",
		symbol: "REALTOKEN-S-3432-HA"
	},
	{
		address: "0xE255cAF8893382465368b8e1cd4Ef8436ACf0ADE",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   402 S",
		symbol: "REALTOKEN-S-402-SKO"
	},
	{
		address: "0xd9e89bFebAe447B42C1Fa85C590716eC8820f737",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   4061",
		symbol: "REALTOKEN-S-4061-GR"
	},
	{
		address: "0xA68b7779504b0AE372ddCC109f8786DB9B91e93e",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   4340",
		symbol: "REALTOKEN-S-4340-EA"
	},
	{
		address: "0x96700Ffae33c651bC329c3f3fbFE56e1f291f117",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   4380",
		symbol: "REALTOKEN-S-4380-BE"
	},
	{
		address: "0xeFe82D6baF0dB71f92889eB9d00721bD49121316",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   4680",
		symbol: "REALTOKEN-S-4680-BU"
	},
	{
		address: "0xE7B6dE709fFC3BD237c2f2c800E1002F97A760F3",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   4852",
		symbol: "REALTOKEN-S-4852-48"
	},
	{
		address: "0xa137D82197Ea4cdfd5f008A91Ba816b8324F59E1",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   5601",
		symbol: "REALTOKEN-S-5601-SW"
	},
	{
		address: "0xA29ae272bC89e5f315B2793925f700045F845d82",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   581 5",
		symbol: "REALTOKEN-S-581-587"
	},
	{
		address: "0x6Db6d540F5614e6BaB7475Af3F430F46a0B083e2",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   5942",
		symbol: "REALTOKEN-S-5942-AU"
	},
	{
		address: "0xD08d2b199E9E5df407427d4085877d1fDFf3b1d6",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   6923",
		symbol: "REALTOKEN-S-6923-GR"
	},
	{
		address: "0x92d31E19F88597F368825ba16410f263a844527A",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   8181",
		symbol: "REALTOKEN-S-8181-BL"
	},
	{
		address: "0x741857c07b100c9C0C1272D95845dDdc4f1b67cB",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   8342",
		symbol: "REALTOKEN-S-8342-SC"
	},
	{
		address: "0x76dbEb740ecd1F3b052a9AFA302ABc7EB4Fb5390",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9133",
		symbol: "REALTOKEN-S-9133-DE"
	},
	{
		address: "0x3C56D5E887D8fA7AE1Ba65BF7eCCC25eC09EAF18",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9165",
		symbol: "REALTOKEN-S-9165-KE"
	},
	{
		address: "0xa69D7d4DdF397f3D1E7EbAf108555d1107b3B117",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9166",
		symbol: "REALTOKEN-S-9166-DE"
	},
	{
		address: "0x806690B7a093d2Cf6419a515ABEdb7f28595bc5E",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9169",
		symbol: "REALTOKEN-S-9169-BO"
	},
	{
		address: "0x67a83B28F6dd8C07301495eE2C6f83b73FD21092",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9309",
		symbol: "REALTOKEN-S-9309-CO"
	},
	{
		address: "0x23684569c0636C9aEa246551879d457D0a0E6F58",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9336",
		symbol: "REALTOKEN-S-9336-PA"
	},
	{
		address: "0x750FA12Ae51d1515c893C1aaABE2C135937a2c8B",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9465",
		symbol: "REALTOKEN-S-9465-BE"
	},
	{
		address: "0x1E001730A23c7EBaFF35BC8bc90DA5a9b20804A4",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9481",
		symbol: "REALTOKEN-S-9481-WA"
	},
	{
		address: "0x73BdE888664DF8DDfD156B52e6999EEaBAB57C94",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9717",
		symbol: "REALTOKEN-S-9717-EV"
	},
	{
		address: "0xa2b2ae397492C7ed8A4c1e751aC72D2b59947E6b",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9920",
		symbol: "REALTOKEN-S-9920-BI"
	},
	{
		address: "0x57eaDD2A542cFE9F00A37F55dF4D5062f857C0E8",
		chainId: 1,
		decimals: 18,
		name: "RealT Token   9943",
		symbol: "REALTOKEN-S-9943-MA"
	},
	{
		address: "0x1fc5EF0337AEA85C5f9198853a6E3A579a7A6987",
		chainId: 1,
		decimals: 18,
		name: "ReapChain",
		symbol: "REAP"
	},
	{
		address: "0xa20b44c001578e2C52665098BA62B00EBf8963cb",
		chainId: 1,
		decimals: 18,
		name: "REAPit",
		symbol: "REAP"
	},
	{
		address: "0x87F5F9eBE40786D49D35E1B5997b07cCAA8ADbFF",
		chainId: 1,
		decimals: 9,
		name: "Rebased",
		symbol: "REB2"
	},
	{
		address: "0x4208D8d500B1643DcA98dD27bA6C0060BcA311c5",
		chainId: 1,
		decimals: 9,
		name: "REBASE",
		symbol: "REBASE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7feA8ddA7462ac9f2ce62Cf52cE9840E0E6A8C3b",
		chainId: 1,
		decimals: 18,
		name: "Reborn Dollar",
		symbol: "REBD"
	},
	{
		address: "0x5F53f7A8075614b699Baad0bC2c899f4bAd8FBBF",
		chainId: 1,
		decimals: 18,
		name: "Rebellious",
		symbol: "REBL"
	},
	{
		address: "0x76960Dccd5a1fe799F7c29bE9F19ceB4627aEb2f",
		chainId: 1,
		decimals: 18,
		name: "Red",
		symbol: "RED"
	},
	{
		address: "0xB563300A3BAc79FC09B93b6F84CE0d4465A2AC27",
		chainId: 1,
		decimals: 18,
		name: "RedCab",
		symbol: "REDC"
	},
	{
		address: "0xeBdF9a7AE0009b958C6d09501EB9AC1dAfeb31aB",
		chainId: 1,
		decimals: 18,
		name: "REDi",
		symbol: "REDI"
	},
	{
		address: "0x514cdb9cd8A2fb2BdCf7A3b8DDd098CaF466E548",
		chainId: 1,
		decimals: 9,
		name: "RedPanda Earth",
		symbol: "REDPANDA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFE3E6a25e6b192A42a44ecDDCd13796471735ACf",
		chainId: 1,
		decimals: 18,
		name: "Reef Finance",
		symbol: "REEF"
	},
	{
		address: "0xe804964c296E9FB666fBE67767838c1FF9Ab3209",
		chainId: 1,
		decimals: 18,
		name: "Reeth",
		symbol: "REETH"
	},
	{
		address: "0x89303500a7Abfb178B274FD89F2469C264951e1f",
		chainId: 1,
		decimals: 8,
		name: "RefToken",
		symbol: "REF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x21A870C7fce1BCe5d88bDF845Ac332C76204a9A0",
		chainId: 1,
		decimals: 18,
		name: "Refraction",
		symbol: "REFRACTION"
	},
	{
		address: "0x6C93c838D362656430d81E150cdbe9b69Ba8eFC4",
		chainId: 1,
		decimals: 18,
		name: "NFT Rehab",
		symbol: "REHAB"
	},
	{
		address: "0x011864D37035439E078d64630777Ec518138aF05",
		chainId: 1,
		decimals: 18,
		name: "Zerogoki",
		symbol: "REI"
	},
	{
		address: "0x61bFC979EA8160Ede9b862798B7833a97baFa02a",
		chainId: 1,
		decimals: 18,
		name: "RELEASE",
		symbol: "REL"
	},
	{
		address: "0xb6c4267C4877BB0D6b1685Cfd85b0FBe82F105ec",
		chainId: 1,
		decimals: 18,
		name: "Relevant",
		symbol: "REL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0E58ED58E150dba5fd8e5D4A49F54C7e1E880124",
		chainId: 1,
		decimals: 18,
		name: "Relite Finance",
		symbol: "RELI"
	},
	{
		address: "0xF68df6dF642E8387AfC9D03214B78f3087ef8a99",
		chainId: 1,
		decimals: 9,
		name: "Doge Reloaded",
		symbol: "RELOADED",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x83984d6142934bb535793A82ADB0a46EF0F66B6d",
		chainId: 1,
		decimals: 4,
		name: "Remme",
		symbol: "REM"
	},
	{
		address: "0x13cb85823f78Cff38f0B0E90D3e975b8CB3AAd64",
		chainId: 1,
		decimals: 18,
		name: "REMIIT REMI Token",
		symbol: "REMI"
	},
	{
		address: "0x408e41876cCCDC0F92210600ef50372656052a38",
		chainId: 1,
		decimals: 18,
		name: "Ren",
		symbol: "REN",
		extensions: {
			color: "#00224D",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x56de8BC61346321D4F2211e3aC3c0A7F00dB9b76",
		chainId: 1,
		decimals: 18,
		name: "Renascent Finance",
		symbol: "RENA"
	},
	{
		address: "0x459086F2376525BdCebA5bDDA135e4E9d3FeF5bf",
		chainId: 1,
		decimals: 8,
		name: "renBCH",
		symbol: "renBCH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEB4C2781e4ebA804CE9a9803C67d0893436bB27D",
		chainId: 1,
		decimals: 8,
		name: "renBTC",
		symbol: "renBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x49849C98ae39Fff122806C06791Fa73784FB3675",
		chainId: 1,
		decimals: 18,
		name: "LP renBTC Curve",
		symbol: "RENBTCCURVE"
	},
	{
		address: "0xe3Cb486f3f5C639e98cCBaF57d95369375687F80",
		chainId: 1,
		decimals: 8,
		name: "renDGB",
		symbol: "renDGB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3832d2F059E55934220881F831bE501D180671A7",
		chainId: 1,
		decimals: 8,
		name: "renDOGE",
		symbol: "renDOGE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD5147bc8e386d91Cc5DBE72099DAC6C9b99276F5",
		chainId: 1,
		decimals: 18,
		name: "renFIL",
		symbol: "renFIL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x52d87F22192131636F93c5AB18d0127Ea52CB641",
		chainId: 1,
		decimals: 6,
		name: "renLUNA",
		symbol: "renLUNA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1C5db575E2Ff833E46a2E9864C22F4B22E0B37C2",
		chainId: 1,
		decimals: 8,
		name: "renZEC",
		symbol: "renZEC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1985365e9f78359a9B6AD760e32412f4a445E862",
		chainId: 1,
		decimals: 18,
		name: "Reputation",
		symbol: "REP",
		extensions: {
			color: "#602a52",
			isVerified: true
		}
	},
	{
		address: "0x221657776846890989a759BA2973e427DfF5C9bB",
		chainId: 1,
		decimals: 18,
		name: "Augur",
		symbol: "REPv2",
		extensions: {
			color: "#25292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x8f8221aFbB33998d8584A2B05749bA73c37a938a",
		chainId: 1,
		decimals: 18,
		name: "Request",
		symbol: "REQ",
		extensions: {
			color: "#00e6a0",
			isVerified: true
		}
	},
	{
		address: "0x0a9f693FcE6F00A51A8e0db4351B5a8078B4242e",
		chainId: 1,
		decimals: 5,
		name: "Resfinex Token",
		symbol: "RES"
	},
	{
		address: "0x6753795d67eD0b2b65B57FC45C7Ac0F53b55f4FE",
		chainId: 1,
		decimals: 18,
		name: "Restore",
		symbol: "REST"
	},
	{
		address: "0x01aF924198e893fC57A1b2D2BE5a6CC420B8764A",
		chainId: 1,
		decimals: 18,
		name: "RaiseEntertainmentToken",
		symbol: "RET"
	},
	{
		address: "0xD7394087E1DBBE477FE4F1CF373B9Ac9459565fF",
		chainId: 1,
		decimals: 8,
		name: "RealTract",
		symbol: "RET"
	},
	{
		address: "0x9559Aaa82d9649C7A7b220E7c461d2E74c9a3593",
		chainId: 1,
		decimals: 18,
		name: "rETH",
		symbol: "RETH"
	},
	{
		address: "0x20BC832ca081b91433ff6c17f85701B6e92486c5",
		chainId: 1,
		decimals: 18,
		name: "rETH2",
		symbol: "RETH2"
	},
	{
		address: "0x2ef52Ed7De8c5ce03a4eF0efbe9B7450F2D7Edc9",
		chainId: 1,
		decimals: 6,
		name: "Revain",
		symbol: "REV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe6Be436DF1Ff96956dfe0b2b77FAB84EDe30236F",
		chainId: 1,
		decimals: 18,
		name: "Revelation coin",
		symbol: "REV"
	},
	{
		address: "0x155040625D7ae3e9caDA9a73E3E44f76D3Ed1409",
		chainId: 1,
		decimals: 18,
		name: "Revomon",
		symbol: "REVO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x557B933a7C2c45672B610F8954A3deB39a51A8Ca",
		chainId: 1,
		decimals: 18,
		name: "REVV",
		symbol: "REVV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3FFfFA8F3cc943e43f9f17a83Cbb18f4Bbb9f4AC",
		chainId: 1,
		decimals: 18,
		name: "Rewardiqa",
		symbol: "REW"
	},
	{
		address: "0xf05a9382A4C3F29E2784502754293D88b835109C",
		chainId: 1,
		decimals: 18,
		name: "imbrex",
		symbol: "REX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x16B1eb8b8E9058800bF0bA3684F805A6711a1D2c",
		chainId: 1,
		decimals: 9,
		name: "Reflector Finance",
		symbol: "RFCTR"
	},
	{
		address: "0xA1AFFfE3F4D611d252010E3EAf6f4D77088b0cd7",
		chainId: 1,
		decimals: 9,
		name: "reflect finance",
		symbol: "RFI"
	},
	{
		address: "0xC82eb6dEa0c93EDb8B697B89ad1b13d19469D635",
		chainId: 1,
		decimals: 18,
		name: "rFIS",
		symbol: "RFIS"
	},
	{
		address: "0xa1d6Df714F91DeBF4e0802A542E13067f31b8262",
		chainId: 1,
		decimals: 18,
		name: "RedFOX Labs",
		symbol: "RFOX"
	},
	{
		address: "0xd0929d411954c47438dc1d871dd6081F5C5e149c",
		chainId: 1,
		decimals: 4,
		name: "Refereum",
		symbol: "RFR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe0bDaafD0aAb238c55d68ad54E616305D4a21772",
		chainId: 1,
		decimals: 18,
		name: "Refract",
		symbol: "RFR"
	},
	{
		address: "0xaf9f549774ecEDbD0966C52f250aCc548D3F36E5",
		chainId: 1,
		decimals: 18,
		name: "Rio DeFi",
		symbol: "RFuel",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf4c571fb6DD704E58561Cdd275fa4B80cFe82f76",
		chainId: 1,
		decimals: 8,
		name: "ROTH",
		symbol: "RFX"
	},
	{
		address: "0x159A1dFAe19057de57dFfFcbB3DA1aE784678965",
		chainId: 1,
		decimals: 8,
		name: "Reflex",
		symbol: "RFX"
	},
	{
		address: "0x3f5Be50e4651eE184109A0b1B71D344d12e8B603",
		chainId: 1,
		decimals: 9,
		name: "RFYield Finance",
		symbol: "RFY"
	},
	{
		address: "0x4AF5ff1A60a6eF6C7c8f9C4E304cD9051fCa3Ec0",
		chainId: 1,
		decimals: 18,
		name: "Rigel Protocol",
		symbol: "RGP"
	},
	{
		address: "0x4c383bDCae52a6e1cb810C76C70d6f31A249eC9B",
		chainId: 1,
		decimals: 8,
		name: "Rusgas",
		symbol: "RGS"
	},
	{
		address: "0xD291E7a03283640FDc51b121aC401383A46cC623",
		chainId: 1,
		decimals: 18,
		name: "Rari Governance Tok",
		symbol: "RGT"
	},
	{
		address: "0xf7A219FFFeaDe6Cd98789da5642b687F743270Eb",
		chainId: 1,
		decimals: 18,
		name: "Rhea Protocol",
		symbol: "RHEA"
	},
	{
		address: "0xAd7Ca17e23f13982796D27d1E6406366Def6eE5f",
		chainId: 1,
		decimals: 18,
		name: "rHEGIC2",
		symbol: "RHEGIC2"
	},
	{
		address: "0x168296bb09e24A88805CB9c33356536B980D3fC5",
		chainId: 1,
		decimals: 8,
		name: "Rhoc",
		symbol: "RHOC"
	},
	{
		address: "0x37E808F084101F75783612407e7C3f5F92d8ee3F",
		chainId: 1,
		decimals: 18,
		name: "RI Token",
		symbol: "RI"
	},
	{
		address: "0xBCD515D6C5de70D3A31D999A7FA6a299657De294",
		chainId: 1,
		decimals: 18,
		name: "Rice Wallet",
		symbol: "RICE"
	},
	{
		address: "0x4cA0654f4fc1025cF1a17B7459c20aC0479522aD",
		chainId: 1,
		decimals: 18,
		name: "Rigel Finance",
		symbol: "RIGEL"
	},
	{
		address: "0x86E56f3c89a14528858e58B3De48c074538BAf2c",
		chainId: 1,
		decimals: 18,
		name: "Evolution Land Global Token",
		symbol: "RING"
	},
	{
		address: "0x9469D013805bFfB7D3DEBe5E7839237e535ec483",
		chainId: 1,
		decimals: 18,
		name: "Darwinia Network Native Token",
		symbol: "RING",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x13edcC775f8895961B81Db5C0205889B3Afb3A16",
		chainId: 1,
		decimals: 18,
		name: "RINGER Vault  NFTX",
		symbol: "RINGER"
	},
	{
		address: "0x7F86C782EC802ac402e0369d2E6d500256F7abC5",
		chainId: 1,
		decimals: 18,
		name: "RING X PLATFORM",
		symbol: "RINGX"
	},
	{
		address: "0xf21661D0D1d76d3ECb8e1B9F1c923DBfffAe4097",
		chainId: 1,
		decimals: 18,
		name: "Realio Network",
		symbol: "RIO"
	},
	{
		address: "0xdd007278B667F6bef52fD0a4c23604aA1f96039a",
		chainId: 1,
		decimals: 8,
		name: "RiptideCoin",
		symbol: "RIPT"
	},
	{
		address: "0x3fa807B6F8d4c407e6E605368F4372d14658b38C",
		chainId: 1,
		decimals: 9,
		name: "Rise Protocol",
		symbol: "RISE"
	},
	{
		address: "0x0b1724cc9FDA0186911EF6a75949e9c0d3F0f2F3",
		chainId: 1,
		decimals: 8,
		name: "Etheriya",
		symbol: "RIYA"
	},
	{
		address: "0x6E5a43DB10b04701385A34afb670E404bC7Ea597",
		chainId: 1,
		decimals: 12,
		name: "RAKON",
		symbol: "RKN"
	},
	{
		address: "0x106Aa49295B525fcf959aA75eC3f7dCbF5352f1C",
		chainId: 1,
		decimals: 18,
		name: "Rock",
		symbol: "RKT"
	},
	{
		address: "0x607F4C5BB672230e8672085532f7e901544a7375",
		chainId: 1,
		decimals: 9,
		name: "iExec",
		symbol: "RLC",
		extensions: {
			color: "#EBBC2F",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xd1632eFa392925089785B43410C529F8959A8D9A",
		chainId: 1,
		decimals: 8,
		name: "Real Land",
		symbol: "RLD"
	},
	{
		address: "0x5b3F693EfD5710106eb2Eac839368364aCB5a70f",
		chainId: 1,
		decimals: 18,
		name: "Relayer Network  OL",
		symbol: "RLR"
	},
	{
		address: "0xcCeD5B8288086BE8c38E23567e684C3740be4D48",
		chainId: 1,
		decimals: 10,
		name: "RouletteToken",
		symbol: "RLT"
	},
	{
		address: "0xbe99B09709fc753b09BCf557A992F6605D5997B0",
		chainId: 1,
		decimals: 8,
		name: "SMARTRealty",
		symbol: "RLTY"
	},
	{
		address: "0x4A42d2c580f83dcE404aCad18dab26Db11a1750E",
		chainId: 1,
		decimals: 18,
		name: "Relex",
		symbol: "RLX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf1f955016EcbCd7321c7266BccFB96c68ea5E49b",
		chainId: 1,
		decimals: 18,
		name: "Rally",
		symbol: "RLY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7Dc4f41294697a7903C4027f6Ac528C5d14cd7eB",
		chainId: 1,
		decimals: 8,
		name: "RemiCoin",
		symbol: "RMC"
	},
	{
		address: "0x8D5682941cE456900b12d47ac06a88b47C764CE1",
		chainId: 1,
		decimals: 18,
		name: "RightMesh Token",
		symbol: "RMESH"
	},
	{
		address: "0xE17f017475a709De58E976081eB916081ff4c9d5",
		chainId: 1,
		decimals: 9,
		name: "RMPL",
		symbol: "RMPL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2A039B1D9bBDccBb91be28691b730ca893e5e743",
		chainId: 1,
		decimals: 18,
		name: "Rentible",
		symbol: "RNB"
	},
	{
		address: "0xE94B97b6b43639E238c851A7e693F50033EfD75C",
		chainId: 1,
		decimals: 18,
		name: "HaloDAO",
		symbol: "RNBW"
	},
	{
		address: "0x0996bFb5D057faa237640E2506BE7B4f9C46de0B",
		chainId: 1,
		decimals: 18,
		name: "Render Token",
		symbol: "RNDR"
	},
	{
		address: "0x6De037ef9aD2725EB40118Bb1702EBb27e4Aeb24",
		chainId: 1,
		decimals: 18,
		name: "Render Token",
		symbol: "RNDR"
	},
	{
		address: "0xFF603F43946A3A28DF5E6A73172555D8C8b02386",
		chainId: 1,
		decimals: 18,
		name: "OneRoot Network",
		symbol: "RNT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1FE70bE734e473e5721ea57C8B5B01e6Caa52686",
		chainId: 1,
		decimals: 18,
		name: "BitRent",
		symbol: "RNTB"
	},
	{
		address: "0x72a6344185B383035d6665C3f44a9DfCC73873c8",
		chainId: 1,
		decimals: 18,
		name: "ROONEX",
		symbol: "RNX"
	},
	{
		address: "0x2344871f523cBb28A4f60045531184cF1F03Ad24",
		chainId: 1,
		decimals: 18,
		name: "RoBet Coin",
		symbol: "ROBET"
	},
	{
		address: "0x6FC2f1044A3b9bB3e43A43EC8F840843Ed753061",
		chainId: 1,
		decimals: 18,
		name: "Robo Token",
		symbol: "ROBO"
	},
	{
		address: "0xfb5453340C03db5aDe474b27E68B6a9c6b2823Eb",
		chainId: 1,
		decimals: 18,
		name: "Robot",
		symbol: "ROBOT"
	},
	{
		address: "0x1BcBc54166F6bA149934870b60506199b6C9dB6D",
		chainId: 1,
		decimals: 10,
		name: "ROC",
		symbol: "ROC"
	},
	{
		address: "0xA40106134c5bF4c41411554e6db99B95A15ed9d8",
		chainId: 1,
		decimals: 18,
		name: "Rocket Token",
		symbol: "ROCK"
	},
	{
		address: "0xC16b542ff490e01fcc0DC58a60e1EFdc3e357cA6",
		chainId: 1,
		decimals: 0,
		name: "ICE ROCK MINING",
		symbol: "ROCK2"
	},
	{
		address: "0x0E3de3B0E3D617FD8D1D8088639bA877feb4d742",
		chainId: 1,
		decimals: 18,
		name: "ICE ROCK MINING",
		symbol: "ROCK2PAY"
	},
	{
		address: "0xFf44b937788215ecA197BAaf9AF69dbdC214aa04",
		chainId: 1,
		decimals: 18,
		name: "Rocki",
		symbol: "ROCKI"
	},
	{
		address: "0x0829d2d5cC09d3d341E813c821B0cfAE272D9fb2",
		chainId: 1,
		decimals: 18,
		name: "Social Rocket",
		symbol: "ROCKS"
	},
	{
		address: "0x45734927Fa2f616FbE19E65f42A0ef3d37d1c80A",
		chainId: 1,
		decimals: 9,
		name: "Roge",
		symbol: "ROGE"
	},
	{
		address: "0xc9De4B7F0C3d991e967158E4D4bFA4b51Ec0b114",
		chainId: 1,
		decimals: 18,
		name: "Rocketchain",
		symbol: "ROK"
	},
	{
		address: "0xA31B1767e09f842ECFd4bc471Fe44F830E3891AA",
		chainId: 1,
		decimals: 18,
		name: "Roobee",
		symbol: "ROOBEE"
	},
	{
		address: "0xfA5047c9c78B8877af97BDcb85Db743fD7313d4a",
		chainId: 1,
		decimals: 18,
		name: "KeeperDAO",
		symbol: "ROOK",
		extensions: {
			color: "#25292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xCb5f72d37685C3D5aD0bB5F982443BC8FcdF570E",
		chainId: 1,
		decimals: 18,
		name: "Rootkit",
		symbol: "ROOT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9D47894f8BECB68B9cF3428d256311Affe8B068B",
		chainId: 1,
		decimals: 18,
		name: "Rope",
		symbol: "ROPE"
	},
	{
		address: "0x17d1823bD5E96e76e822ab42B61d348302E072d5",
		chainId: 1,
		decimals: 18,
		name: "ROSA",
		symbol: "ROSA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD04785C4d8195e4A54d9dEc3a9043872875ae9E2",
		chainId: 1,
		decimals: 18,
		name: "Rotten",
		symbol: "ROT"
	},
	{
		address: "0x4993CB95c7443bdC06155c5f5688Be9D8f6999a5",
		chainId: 1,
		decimals: 18,
		name: "ROUND",
		symbol: "ROUND"
	},
	{
		address: "0x16ECCfDbb4eE1A85A33f3A9B21175Cd7Ae753dB4",
		chainId: 1,
		decimals: 18,
		name: "Router Protocol",
		symbol: "ROUTE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x574F84108a98c575794F75483d801d1d5DC861a5",
		chainId: 1,
		decimals: 18,
		name: "Robotina",
		symbol: "ROX"
	},
	{
		address: "0x7eaF9C89037e4814DC0d9952Ac7F888C784548DB",
		chainId: 1,
		decimals: 18,
		name: "Royale",
		symbol: "ROYA"
	},
	{
		address: "0xf18aF466F8885f9Ea93D2b85c47a427cB01bAD52",
		chainId: 1,
		decimals: 18,
		name: "Racing Pigeon Chain",
		symbol: "RPC"
	},
	{
		address: "0xCcc85AA8999505d6f886A32da4a107BBe0D1dE9E",
		chainId: 1,
		decimals: 18,
		name: "REPE",
		symbol: "RPE"
	},
	{
		address: "0x0e9b56D2233ea2b5883861754435f9C51Dbca141",
		chainId: 1,
		decimals: 18,
		name: "Rare Pepe",
		symbol: "RPEPE"
	},
	{
		address: "0xB4EFd85c19999D84251304bDA99E90B92300Bd93",
		chainId: 1,
		decimals: 18,
		name: "Rocket Pool",
		symbol: "RPL",
		extensions: {
			color: "#FF626D",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xa0Bb0027C28ade4Ac628b7f81e7b93Ec71b4E020",
		chainId: 1,
		decimals: 18,
		name: "Rug Proof",
		symbol: "RPT"
	},
	{
		address: "0x68350d30D9F58C81aaaA41929f1bfC52FFf4Ea49",
		chainId: 1,
		decimals: 18,
		name: "Rapidz",
		symbol: "RPZX"
	},
	{
		address: "0x20D7089110c29498D17137F5D9656055105041D1",
		chainId: 1,
		decimals: 9,
		name: "Rug Relief",
		symbol: "RR"
	},
	{
		address: "0x1306C7d95E59CfCDFF7AE3C13Db7F56AcC543815",
		chainId: 1,
		decimals: 9,
		name: "Rapidly Reusable Ro",
		symbol: "RRR"
	},
	{
		address: "0xea8b224eDD3e342DEb514C4176c2E72Bcce6fFF9",
		chainId: 1,
		decimals: 18,
		name: "rSAI",
		symbol: "rSAI"
	},
	{
		address: "0xC275865a6Cce78398e94CB2Af29fa0d787b7F7Eb",
		chainId: 1,
		decimals: 18,
		name: "RiseCoin Token",
		symbol: "RSCT"
	},
	{
		address: "0xcf42De80d80edC4a8D56E4e840b5FF0Dc84AaA17",
		chainId: 1,
		decimals: 18,
		name: "Real estate Sales P",
		symbol: "RSP"
	},
	{
		address: "0x8762db106B2c2A0bccB3A80d1Ed41273552616E8",
		chainId: 1,
		decimals: 18,
		name: "Reserve Rights",
		symbol: "RSR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x196f4727526eA7FB1e17b2071B3d8eAA38486988",
		chainId: 1,
		decimals: 18,
		name: "Reserve",
		symbol: "RSV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEC491c1088Eae992B7A214efB0a266AD0927A72A",
		chainId: 1,
		decimals: 18,
		name: "AB-Chain RTB",
		symbol: "RTB"
	},
	{
		address: "0x7A5599B97E8c4abB5dd06EBA0E9d1F75AF818DB9",
		chainId: 1,
		decimals: 18,
		name: "OSMOTIC TOKEN",
		symbol: "RTC"
	},
	{
		address: "0x7f9A00E03c2E53A3aF6031C17A150DBeDaAab3dC",
		chainId: 1,
		decimals: 18,
		name: "Read This Contract",
		symbol: "RTC"
	},
	{
		address: "0x436F0F3a982074c4a05084485D421466a994FE53",
		chainId: 1,
		decimals: 18,
		name: "Rate3",
		symbol: "RTE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3FD8f39A962eFDA04956981C31AB89FAB5FB8bC8",
		chainId: 1,
		decimals: 18,
		name: "Rotharium",
		symbol: "RTH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1F6DEADcb526c4710Cf941872b86dcdfBbBD9211",
		chainId: 1,
		decimals: 18,
		name: "Ruletka",
		symbol: "RTK"
	},
	{
		address: "0x54b293226000ccBFC04DF902eEC567CB4C35a903",
		chainId: 1,
		decimals: 18,
		name: "RiderToken",
		symbol: "RTN"
	},
	{
		address: "0x395768AeB16484E5785612a98E9408e4Cc1269Ec",
		chainId: 1,
		decimals: 18,
		name: "Rush",
		symbol: "RUC"
	},
	{
		address: "0xf278c1CA969095ffddDED020290cf8B5C424AcE2",
		chainId: 1,
		decimals: 18,
		name: "Ruff",
		symbol: "RUFF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd0Df3b1Cf729A29B7404c40D61C750008E631bA7",
		chainId: 1,
		decimals: 18,
		name: "Rug",
		symbol: "RUG"
	},
	{
		address: "0xEdFBd6c48c3dDfF5612Ade14B45bb19F916809ba",
		chainId: 1,
		decimals: 18,
		name: "pulltherug finance",
		symbol: "RUGZ"
	},
	{
		address: "0x2aECCB42482cc64E087b6D2e5Da39f5A7A7001f8",
		chainId: 1,
		decimals: 18,
		name: "Ruler Protocol",
		symbol: "RULER"
	},
	{
		address: "0xdEE02D94be4929d26f67B64Ada7aCf1914007F10",
		chainId: 1,
		decimals: 18,
		name: "Rune",
		symbol: "RUNE"
	},
	{
		address: "0x3155BA85D5F96b2d030a4966AF206230e46849cb",
		chainId: 1,
		decimals: 18,
		name: "THORChain  ERC20",
		symbol: "RUNE"
	},
	{
		address: "0xdc8aF07A7861bedD104B8093Ae3e9376fc8596D2",
		chainId: 1,
		decimals: 18,
		name: "Rocket Vault",
		symbol: "RVF"
	},
	{
		address: "0x41f615E24fAbd2b097a320E9E6c1f448cb40521c",
		chainId: 1,
		decimals: 18,
		name: "RVL",
		symbol: "RVL"
	},
	{
		address: "0x43Ae53b8C920C6C69f4ABf393Fcb68A6dD4CbAB4",
		chainId: 1,
		decimals: 18,
		name: "RiveMont",
		symbol: "RVMT"
	},
	{
		address: "0x17EF75AA22dD5f6C2763b8304Ab24f40eE54D48a",
		chainId: 1,
		decimals: 18,
		name: "Revolution Populi",
		symbol: "RVP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3d1BA9be9f66B8ee101911bC36D3fB562eaC2244",
		chainId: 1,
		decimals: 18,
		name: "Rivetz",
		symbol: "RVT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x91d6f6e9026E43240ce6F06Af6a4b33129EBdE94",
		chainId: 1,
		decimals: 18,
		name: "Rivex",
		symbol: "RVX"
	},
	{
		address: "0xD80F72a6558ec337E0d4CF76b8752B17FA770860",
		chainId: 1,
		decimals: 18,
		name: "Rewards",
		symbol: "RWD"
	},
	{
		address: "0x08AD83D779BDf2BBE1ad9cc0f78aa0D24AB97802",
		chainId: 1,
		decimals: 18,
		name: "Robonomics Web Services",
		symbol: "RWS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd78e5B24AaE1BD03A488aF642770E2aBb986F9D5",
		chainId: 1,
		decimals: 18,
		name: "RYI Platinum",
		symbol: "RYIP"
	},
	{
		address: "0xd30a2e9347Ad48Ea208ee563a9CdfD80E962a727",
		chainId: 1,
		decimals: 18,
		name: "RoyaltyCOIN",
		symbol: "RYLT"
	},
	{
		address: "0x777E2ae845272a2F540ebf6a3D03734A5a8f618e",
		chainId: 1,
		decimals: 18,
		name: "Ryoshis Vision",
		symbol: "RYOSHI"
	},
	{
		address: "0x429Ac77F069BFF489e2d78F9479e1E933305c528",
		chainId: 1,
		decimals: 8,
		name: "Rizubot",
		symbol: "RZB"
	},
	{
		address: "0xd8c82FbC4D8Ed0644a7eC04cF973e84c6153c1d7",
		chainId: 1,
		decimals: 18,
		name: "Rizen Coin  Old",
		symbol: "RZN"
	},
	{
		address: "0x23b8b512175590a76FFf32C6F06a7Ef1ce4724C7",
		chainId: 1,
		decimals: 9,
		name: "Rezerve",
		symbol: "RZRV"
	},
	{
		address: "0x96B0bF939D9460095C15251F71Fda11e41DcBddB",
		chainId: 1,
		decimals: 18,
		name: "Sharpay",
		symbol: "S",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1EC8fE51a9B6A3a6C427D17d9ECC3060fbc4a45c",
		chainId: 1,
		decimals: 18,
		name: "S-A-PAT",
		symbol: "S-A-PAT"
	},
	{
		address: "0x3eb91D237e491E0DEE8582c402D85CB440fb6b54",
		chainId: 1,
		decimals: 18,
		name: "S-ETH",
		symbol: "S-ETH"
	},
	{
		address: "0xcD39b5434a0A92cf47D1F567a7dF84bE356814F0",
		chainId: 1,
		decimals: 18,
		name: "Synth 1inch",
		symbol: "s1INCH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xAec7d1069e3a914a3EB50f0BFB1796751f2ce48a",
		chainId: 1,
		decimals: 18,
		name: "S4FE",
		symbol: "S4F",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7537AAe01f3B218DAE75e10d952473823F961B87",
		chainId: 1,
		decimals: 18,
		name: "Synth Apple",
		symbol: "sAAPL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd2dF355C19471c8bd7D8A3aa27Ff4e26A21b4076",
		chainId: 1,
		decimals: 18,
		name: "Synth Aave",
		symbol: "sAAVE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xabC1280A0187a2020cC675437aed400185F86Db6",
		chainId: 1,
		decimals: 18,
		name: "Smart Application C",
		symbol: "SAC"
	},
	{
		address: "0xaCd8F2523a4613Eee78904354187c81Bb05ae2b8",
		chainId: 1,
		decimals: 18,
		name: "Stand Cash",
		symbol: "SAC"
	},
	{
		address: "0xa6610Ed604047e7B76C1DA288172D15BcdA57596",
		chainId: 1,
		decimals: 18,
		name: "Sacks",
		symbol: "SACKS"
	},
	{
		address: "0xe36E2D3c7c34281FA3bC737950a68571736880A1",
		chainId: 1,
		decimals: 18,
		name: "Synth Cardano",
		symbol: "sADA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x250a3500f48666561386832f1F1f1019b89a2699",
		chainId: 1,
		decimals: 18,
		name: "SAFE2",
		symbol: "SAFE2"
	},
	{
		address: "0xE6F1966d04CfcB9cd1B1dC4E8256D8b501b11CbA",
		chainId: 1,
		decimals: 9,
		name: "SafeEarth",
		symbol: "SAFEEARTH"
	},
	{
		address: "0x2B1Fe2cea92436E8C34B7C215Af66Aaa2932a8b2",
		chainId: 1,
		decimals: 9,
		name: "Sakhalin Husky",
		symbol: "SAHU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x89d24A6b4CcB1B6fAA2625fE562bDD9a23260359",
		chainId: 1,
		decimals: 18,
		name: "Sai",
		symbol: "SAI",
		extensions: {
			color: "#F0B340",
			isVerified: true
		}
	},
	{
		address: "0x8B3192f5eEBD8579568A2Ed41E6FEB402f93f73F",
		chainId: 1,
		decimals: 9,
		name: "SAITAMA INU",
		symbol: "SAITAMA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFa14Fa6958401314851A17d6C5360cA29f74B57B",
		chainId: 1,
		decimals: 18,
		name: "Saito",
		symbol: "SAITO"
	},
	{
		address: "0xe9F84dE264E91529aF07Fa2C746e934397810334",
		chainId: 1,
		decimals: 18,
		name: "SAKE",
		symbol: "SAK3"
	},
	{
		address: "0x066798d9ef0833ccc719076Dab77199eCbd178b0",
		chainId: 1,
		decimals: 18,
		name: "SakeToken",
		symbol: "SAKE"
	},
	{
		address: "0xF063fE1aB7a291c5d06a86e14730b00BF24cB589",
		chainId: 1,
		decimals: 18,
		name: "DxSale Network",
		symbol: "SALE"
	},
	{
		address: "0x4156D3342D5c385a87D264F90653733592000581",
		chainId: 1,
		decimals: 8,
		name: "SALT",
		symbol: "SALT",
		extensions: {
			color: "#03DBA9",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x53378825D95281737914a8A2ac0E5A9304aE5Ed7",
		chainId: 1,
		decimals: 18,
		name: "Samurai",
		symbol: "SAM"
	},
	{
		address: "0x9CF7E61853ea30A41b02169391b393B901eac457",
		chainId: 1,
		decimals: 18,
		name: "Synth Amazon",
		symbol: "sAMZN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7C5A0CE9267ED19B22F8cae653F198e3E8daf098",
		chainId: 1,
		decimals: 18,
		name: "Santiment Network T",
		symbol: "SAN"
	},
	{
		address: "0x87CDc02f0812f08Cd50F946793706fAD9c265e2d",
		chainId: 1,
		decimals: 16,
		name: "Storage Area Networ",
		symbol: "SANA"
	},
	{
		address: "0x3845badAde8e6dFF049820680d1F14bD3903a5d0",
		chainId: 1,
		decimals: 18,
		name: "SAND",
		symbol: "SAND",
		extensions: {
			color: "#04adef",
			isVerified: true
		}
	},
	{
		address: "0xc73C167E7a4Ba109e4052f70D5466D0C312A344D",
		chainId: 1,
		decimals: 9,
		name: "Sanshu Inu",
		symbol: "SANSHU"
	},
	{
		address: "0x91F529E972D6Cf43d36ABFa91C1118122FF7F16C",
		chainId: 1,
		decimals: 18,
		name: "Sapchain",
		symbol: "SAP"
	},
	{
		address: "0xF6Ed276a69270A895d6E419D99dcB5AAA2f3Cb4A",
		chainId: 1,
		decimals: 18,
		name: "SwapAll",
		symbol: "SAP"
	},
	{
		address: "0xBD4a858139B155219E2c8D10135003fdEf720b6B",
		chainId: 1,
		decimals: 18,
		name: "Saren",
		symbol: "SAR"
	},
	{
		address: "0x7697B462A7c4Ff5F8b55BDBC2F4076c2aF9cF51A",
		chainId: 1,
		decimals: 18,
		name: "Sarcophagus",
		symbol: "SARCO"
	},
	{
		address: "0x4C38D0e726B6C86F64c1B281348E725973542043",
		chainId: 1,
		decimals: 18,
		name: "Stand Share",
		symbol: "SAS"
	},
	{
		address: "0xC28E27870558cF22ADD83540d2126da2e4b464c2",
		chainId: 1,
		decimals: 18,
		name: "Sashimi",
		symbol: "SASHIMI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc56b13ebbCFfa67cFb7979b900b736b3fb480D78",
		chainId: 1,
		decimals: 8,
		name: "Social Activity Tok",
		symbol: "SAT"
	},
	{
		address: "0xc9F1016d336ef77AeE75Fc11Ad64C5Ecf9121332",
		chainId: 1,
		decimals: 18,
		name: "SoMee Advertising T",
		symbol: "SAT"
	},
	{
		address: "0x1F0F468Ee03A6D99CD8A09dd071494a83Dc1c0e5",
		chainId: 1,
		decimals: 4,
		name: "SmartX",
		symbol: "SAT"
	},
	{
		address: "0x3ebb4A4e91Ad83BE51F8d596533818b246F4bEe1",
		chainId: 1,
		decimals: 18,
		name: "Signata",
		symbol: "SATA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xDf49C9f599A0A9049D97CFF34D0C30E468987389",
		chainId: 1,
		decimals: 18,
		name: "SaTT",
		symbol: "SATT"
	},
	{
		address: "0xe96F2c381E267a96C29bbB8ab05AB7d3527b45Ab",
		chainId: 1,
		decimals: 8,
		name: "SatoExchange Token",
		symbol: "SATX"
	},
	{
		address: "0xa6FE80c4c4AADb4B33dB7f22dc9AE2C4697cC406",
		chainId: 1,
		decimals: 18,
		name: "Synth AUD",
		symbol: "sAUD"
	},
	{
		address: "0xF48e200EAF9906362BB1442fca31e0835773b8B4",
		chainId: 1,
		decimals: 18,
		name: "Synth Australian Dollars",
		symbol: "sAUD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6E10AAcb89A28d6FA0FE68790777fec7E7f01890",
		chainId: 1,
		decimals: 18,
		name: "SAV3",
		symbol: "SAV3"
	},
	{
		address: "0xc1eEcf1f4AF8EB9a2a19f6C26B434aA96ce859e1",
		chainId: 1,
		decimals: 8,
		name: "SaveToken",
		symbol: "SAVE"
	},
	{
		address: "0x43acEDd39Ba4B0bfcCd92897fCe617Fb90a971d8",
		chainId: 1,
		decimals: 9,
		name: "SafeBank ETH",
		symbol: "SBANK"
	},
	{
		address: "0x36a2422a863D5B950882190Ff5433E513413343a",
		chainId: 1,
		decimals: 18,
		name: "Synthetic Bitcoin Cash",
		symbol: "sBCH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x63Aa9d05C025279F8E963ba784f1254814c1e12b",
		chainId: 1,
		decimals: 18,
		name: "SBLAND Vault  NFTX",
		symbol: "SBLAND"
	},
	{
		address: "0xE5787927410b659cc4eA2441cDaa361f9D7b250C",
		chainId: 1,
		decimals: 18,
		name: "Synth BNB",
		symbol: "sBNB"
	},
	{
		address: "0x617aeCB6137B5108D1E7D4918e3725C8cEbdB848",
		chainId: 1,
		decimals: 18,
		name: "Synth Binance Coin",
		symbol: "sBNB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x25377ddb16c79C93B0CBf46809C8dE8765f03FCd",
		chainId: 1,
		decimals: 18,
		name: "CBDAO",
		symbol: "SBREE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x606Ce698Aea1DCa5A2627A4583da13a340667f09",
		chainId: 1,
		decimals: 18,
		name: "SaveBritney",
		symbol: "SBRT"
	},
	{
		address: "0x6bCd1caE4A3c099c696B51f889bE2120DF62b7c0",
		chainId: 1,
		decimals: 18,
		name: "Synth sBTC",
		symbol: "sBTC"
	},
	{
		address: "0xfE18be6b3Bd88A2D2A7f928d00292E7a9963CfC6",
		chainId: 1,
		decimals: 18,
		name: "Synth Bitcoin",
		symbol: "sBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb8e103b60A33597136EA9511F46b6dBeB643a3a5",
		chainId: 1,
		decimals: 18,
		name: "SiamBitcoin",
		symbol: "SBTC"
	},
	{
		address: "0x309013d55fB0E8C17363bcC79F25d92f711A5802",
		chainId: 1,
		decimals: 9,
		name: "Soft Bitcoin",
		symbol: "SBTC"
	},
	{
		address: "0x2579BB08387f0DE7Ab135edd6C2A985a3f577b6B",
		chainId: 1,
		decimals: 18,
		name: "Sports Betting Mark",
		symbol: "SBX"
	},
	{
		address: "0x1FbD3dF007eB8A7477A1Eab2c63483dCc24EfFD6",
		chainId: 1,
		decimals: 18,
		name: "Scaleswap Token",
		symbol: "SCA"
	},
	{
		address: "0x78fE18e41f436e1981a3a60D1557c8a7a9370461",
		chainId: 1,
		decimals: 2,
		name: "Scandiweb Coin",
		symbol: "SCANDI"
	},
	{
		address: "0x8424C5aC326834B404742de0067bCb654E86BE30",
		chainId: 1,
		decimals: 18,
		name: "Sad Cat Token",
		symbol: "SCAT"
	},
	{
		address: "0x86696431D6ACA9bae5CE6536ECF5D437F2e6Dba2",
		chainId: 1,
		decimals: 18,
		name: "SoftChain",
		symbol: "SCC"
	},
	{
		address: "0x74FD51a98a4A1ECBeF8Cc43be801cce630E260Bd",
		chainId: 1,
		decimals: 18,
		name: "SiaCashCoin",
		symbol: "SCC"
	},
	{
		address: "0x4a9f00dE5d8A244944313faEe23849FF725E680D",
		chainId: 1,
		decimals: 18,
		name: "Science Chain",
		symbol: "SCC"
	},
	{
		address: "0x355a458d555151D3B27F94227960Ade1504E526a",
		chainId: 1,
		decimals: 18,
		name: "StockChain",
		symbol: "SCC"
	},
	{
		address: "0xe6b75a1960f91Bfa7010DEC8543685eaD67F8cFf",
		chainId: 1,
		decimals: 18,
		name: "Sea Cucumber Chain",
		symbol: "SCC"
	},
	{
		address: "0xb72c794effb775197287d767cA80C22ae9094cB5",
		chainId: 1,
		decimals: 18,
		name: "Shrine Cloud Storag",
		symbol: "SCDS"
	},
	{
		address: "0x8a3ca1d2d9a05683EB4DB447d0e3122Fec09d9ee",
		chainId: 1,
		decimals: 18,
		name: "Synth CEX",
		symbol: "sCEX"
	},
	{
		address: "0xeABACD844A196D7Faf3CE596edeBF9900341B420",
		chainId: 1,
		decimals: 18,
		name: "Synth Centralised Exchange Index",
		symbol: "sCEX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2cAd4991f62fc6Fcd8EC219f37E7DE52B688B75A",
		chainId: 1,
		decimals: 0,
		name: "Schain Wallet",
		symbol: "SCHA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfF0b8894CC44F300e124bcd39F95555816b8B1d5",
		chainId: 1,
		decimals: 18,
		name: "Synth CHF",
		symbol: "sCHF"
	},
	{
		address: "0x0F83287FF768D1c1e17a42F44d644D7F22e8ee1d",
		chainId: 1,
		decimals: 18,
		name: "Synth Swiss Franc",
		symbol: "sCHF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfDC4a3FC36df16a78edCAf1B837d3ACAaeDB2CB4",
		chainId: 1,
		decimals: 18,
		name: "SCIFI Index",
		symbol: "SCIFI"
	},
	{
		address: "0xd7631787B4dCc87b1254cfd1e5cE48e96823dEe8",
		chainId: 1,
		decimals: 8,
		name: "Sociall",
		symbol: "SCL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9EeF4CA7aB9fa8bc0650127341C2d3F707a40f8A",
		chainId: 1,
		decimals: 18,
		name: "Synth Coinbase",
		symbol: "sCOIN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3f5DF2F90DF67E10974fBcB1729c00D3f87c0EB4",
		chainId: 1,
		decimals: 6,
		name: "ShinCoin",
		symbol: "SCOIN"
	},
	{
		address: "0xEb029507d3e043DD6C87F2917C4E82B902c35618",
		chainId: 1,
		decimals: 18,
		name: "Synth Compound",
		symbol: "sCOMP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x06a87F6aFEc4a739c367bEF69eEfE383D27106bd",
		chainId: 1,
		decimals: 18,
		name: "Scoobi Doge",
		symbol: "SCOOBI"
	},
	{
		address: "0x27fD686Db10E0aE047fe8FE1DE9830C0e0dC3CFA",
		chainId: 1,
		decimals: 4,
		name: "Scott",
		symbol: "SCOTT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD38aEb759891882e78E957c80656572503D8c1B1",
		chainId: 1,
		decimals: 18,
		name: "Synth Curve DAO Token",
		symbol: "sCRV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x81995ff7AEe5c780192b47e0B42a7a86692d1415",
		chainId: 1,
		decimals: 18,
		name: "Speedcash",
		symbol: "SCS"
	},
	{
		address: "0x6Fa0952355607dFB2d399138B7fE10EB90F245e4",
		chainId: 1,
		decimals: 18,
		name: "Clash Token",
		symbol: "SCT"
	},
	{
		address: "0x8B8d971C8bc37f65a93c4609644FeF0590Af2Fc7",
		chainId: 1,
		decimals: 18,
		name: "Securypto",
		symbol: "SCU"
	},
	{
		address: "0xC25a3A3b969415c80451098fa907EC722572917F",
		chainId: 1,
		decimals: 18,
		name: "LP sCurve",
		symbol: "SCURVE"
	},
	{
		address: "0x646Cec6ee42d258336165cBbD5deB4AF14F0f476",
		chainId: 1,
		decimals: 4,
		name: "Solar DAO",
		symbol: "SDAO"
	},
	{
		address: "0x993864E43Caa7F7F12953AD6fEb1d1Ca635B875F",
		chainId: 1,
		decimals: 18,
		name: "SingularityDAO",
		symbol: "SDAO"
	},
	{
		address: "0xfE33ae95A9f0DA8A845aF33516EDc240DCD711d6",
		chainId: 1,
		decimals: 18,
		name: "Synth Dash",
		symbol: "sDASH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF778Ec504245EfE1eA010C5C3E50b6F5f5E117da",
		chainId: 1,
		decimals: 18,
		name: "Synth sDEFI",
		symbol: "sDEFI"
	},
	{
		address: "0xe1aFe1Fd76Fd88f78cBf599ea1846231B8bA3B6B",
		chainId: 1,
		decimals: 18,
		name: "Synth DeFi Index",
		symbol: "sDEFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x537edD52ebcb9F48ff2f8a28c51FCdB9D6a6E0D4",
		chainId: 1,
		decimals: 18,
		name: "Small Doge",
		symbol: "SDOG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1715AC0743102BF5Cd58EfBB6Cf2dC2685d967b6",
		chainId: 1,
		decimals: 18,
		name: "Synth Polkadot",
		symbol: "sDOT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x676Ad1b33ae6423c6618C1AEcf53BAa29cf39EE5",
		chainId: 1,
		decimals: 18,
		name: "Wrapped SDT",
		symbol: "SDT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x73968b9a57c6E53d41345FD57a6E6ae27d6CDB2F",
		chainId: 1,
		decimals: 18,
		name: "Stake DAO",
		symbol: "SDT"
	},
	{
		address: "0x041fdd6637eCfD96af8804278AC12660ac2D12c0",
		chainId: 1,
		decimals: 7,
		name: "SwapDEX",
		symbol: "SDX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x33c2DA7Fd5B125E629B3950f3c38d7f721D7B30D",
		chainId: 1,
		decimals: 18,
		name: "Seal Finance",
		symbol: "SEAL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x75D669c53142302C8826d16b5689bffad50A7E18",
		chainId: 1,
		decimals: 18,
		name: "Smilecoin",
		symbol: "SEC"
	},
	{
		address: "0x30cF203b48edaA42c3B4918E955fED26Cd012A3F",
		chainId: 1,
		decimals: 18,
		name: "MetaGame",
		symbol: "SEED"
	},
	{
		address: "0xC969e16e63fF31ad4BCAc3095C616644e6912d79",
		chainId: 1,
		decimals: 18,
		name: "Seed Venture",
		symbol: "SEED"
	},
	{
		address: "0xB1eeF147028E9f480DbC5ccaA3277D417D1b85F0",
		chainId: 1,
		decimals: 18,
		name: "Seele",
		symbol: "SEELE"
	},
	{
		address: "0xB1e93236ab6073fdAC58adA5564897177D4bcC43",
		chainId: 1,
		decimals: 18,
		name: "Seele",
		symbol: "SEELE"
	},
	{
		address: "0xCa3FE04C7Ee111F0bbb02C328c699226aCf9Fd33",
		chainId: 1,
		decimals: 18,
		name: "SEEN",
		symbol: "SEEN"
	},
	{
		address: "0x0f1Ed66c251BcB52ecF7E67ac64Bb72482048aDB",
		chainId: 1,
		decimals: 18,
		name: "Seer",
		symbol: "SEER"
	},
	{
		address: "0x27201232579491Ce9b116Ac6F37D354Cc723A2f3",
		chainId: 1,
		decimals: 8,
		name: "MESEFA",
		symbol: "SEFA"
	},
	{
		address: "0x773258b03c730F84aF10dFcB1BfAa7487558B8Ac",
		chainId: 1,
		decimals: 6,
		name: "SEFI",
		symbol: "SEFI"
	},
	{
		address: "0x67ab11058eF23D0a19178f61A050D3c38F81Ae21",
		chainId: 1,
		decimals: 18,
		name: "SELF TOKEN",
		symbol: "SELF"
	},
	{
		address: "0x6D7917864003a9bb13CBbEC8F1CdD4E36dDf6fc8",
		chainId: 1,
		decimals: 18,
		name: "Semitoken",
		symbol: "SEMI"
	},
	{
		address: "0xA13f0743951B4f6E3e3AA039f682E17279f52bc3",
		chainId: 1,
		decimals: 18,
		name: "Sentinel Chain",
		symbol: "SENC"
	},
	{
		address: "0x5a705745373a780814c379Ef17810630D529EFE0",
		chainId: 1,
		decimals: 18,
		name: "Project Senpai",
		symbol: "SENPAI"
	},
	{
		address: "0x4cA74185532DC1789527194e5B9c866dD33F4E82",
		chainId: 1,
		decimals: 18,
		name: "SenSatorI Token",
		symbol: "SenSatorI"
	},
	{
		address: "0x6745fAB6801e376cD24F03572B9C9B0D4EdDDCcf",
		chainId: 1,
		decimals: 8,
		name: "Sensay",
		symbol: "SENSE"
	},
	{
		address: "0xC19B6A4Ac7C7Cc24459F08984Bbd09664af17bD1",
		chainId: 1,
		decimals: 0,
		name: "SENSO",
		symbol: "SENSO"
	},
	{
		address: "0xa44E5137293E855B1b7bC7E2C6f8cD796fFCB037",
		chainId: 1,
		decimals: 8,
		name: "Sentinel",
		symbol: "SENT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x97AbEe33Cd075c58BFdd174e0885e08E8f03556F",
		chainId: 1,
		decimals: 18,
		name: "Sentiment Token",
		symbol: "SENT"
	},
	{
		address: "0x88C8Cf3A212c0369698D13FE98Fcb76620389841",
		chainId: 1,
		decimals: 18,
		name: "Synth EOS",
		symbol: "sEOS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x10994AA2FB8E6bA5D9FB2BC127FF228c4fe6167F",
		chainId: 1,
		decimals: 18,
		name: "Secure Pad",
		symbol: "SEPA"
	},
	{
		address: "0x79BA92DDA26FcE15e1e9af47D5cFdFD2A093E000",
		chainId: 1,
		decimals: 18,
		name: "SERGS",
		symbol: "SERGS"
	},
	{
		address: "0xe06eda7435bA749b047380CEd49121ddE93334Ae",
		chainId: 1,
		decimals: 0,
		name: "SET",
		symbol: "SET"
	},
	{
		address: "0x22602469d704BfFb0936c7A7cfcD18f7aA269375",
		chainId: 1,
		decimals: 18,
		name: "Synth Ethereum Classic",
		symbol: "sETC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5e74C9036fb86BD7eCdcb084a0673EFc32eA31cb",
		chainId: 1,
		decimals: 18,
		name: "Synthetix ETH",
		symbol: "sETH",
		extensions: {
			color: "#53B267",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xD81AdA188331e627567BBEF80F91217cd3109592",
		chainId: 1,
		decimals: 18,
		name: "Synth sETH",
		symbol: "sETH"
	},
	{
		address: "0x78B039921E84E726EB72E7b1212bb35504c645cA",
		chainId: 1,
		decimals: 18,
		name: "Sether",
		symbol: "SETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xFe2e637202056d30016725477c5da089Ab0A043A",
		chainId: 1,
		decimals: 18,
		name: "sETH2",
		symbol: "SETH2"
	},
	{
		address: "0x04E0Af0af1b7f0023c6B12af5a94Df59B0e8cF59",
		chainId: 1,
		decimals: 18,
		name: "Sensitrust",
		symbol: "SETS"
	},
	{
		address: "0x68473dc4B7A4b0867fd7C5b9A982Fea407DAD320",
		chainId: 1,
		decimals: 18,
		name: "Synth sEUR",
		symbol: "sEUR"
	},
	{
		address: "0xD71eCFF9342A5Ced620049e616c5035F1dB98620",
		chainId: 1,
		decimals: 18,
		name: "Synth Euros",
		symbol: "sEUR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x98F5e9b7F0e33956C0443E81bF7deB8B5b1ed545",
		chainId: 1,
		decimals: 18,
		name: "Sexy Token",
		symbol: "SEXY"
	},
	{
		address: "0xf50B5e535F62a56A9BD2d8e2434204E726c027Fa",
		chainId: 1,
		decimals: 18,
		name: "Synth Facebook",
		symbol: "sFB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8b6CdA5CC518c904e8844f445E1A7C7d2DB0fF16",
		chainId: 1,
		decimals: 18,
		name: "SF Capital",
		symbol: "SFCP"
	},
	{
		address: "0x8a6ACA71A218301c7081d4e96D64292D3B275ce0",
		chainId: 1,
		decimals: 18,
		name: "S.Finance",
		symbol: "SFG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa6312567E419e73951c451FEaBA07b6d74a0E8ce",
		chainId: 1,
		decimals: 18,
		name: "SocketFinance",
		symbol: "SFI"
	},
	{
		address: "0xb753428af26E81097e7fD17f40c88aaA3E04902c",
		chainId: 1,
		decimals: 18,
		name: "saffron.finance",
		symbol: "SFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x648d19d775a8D4BafbA09e189090BdcbF8Ef31c1",
		chainId: 1,
		decimals: 8,
		name: "Safari",
		symbol: "SFR"
	},
	{
		address: "0x11A605D7e12B64D713E93C487277d819A1d14B99",
		chainId: 1,
		decimals: 9,
		name: "Safe Shield",
		symbol: "SFSHLD"
	},
	{
		address: "0x23348160D7f5aca21195dF2b70f28Fce2B0be9fC",
		chainId: 1,
		decimals: 18,
		name: "Synth FTSE 100 Index",
		symbol: "sFTSE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdDF7Fd345D54ff4B40079579d4C4670415DbfD0A",
		chainId: 1,
		decimals: 18,
		name: "SocialGood",
		symbol: "SG"
	},
	{
		address: "0x91a7769aFCf796A3c8fFF879ed80b10dd76d3CCD",
		chainId: 1,
		decimals: 18,
		name: "SG20",
		symbol: "SG20"
	},
	{
		address: "0xed0849BF46CfB9845a2d900A0A4E593F2dD3673c",
		chainId: 1,
		decimals: 18,
		name: "SGA Token",
		symbol: "SGA"
	},
	{
		address: "0x4B4Eb5C44D50Bfd44124688c6754633f7e258b01",
		chainId: 1,
		decimals: 8,
		name: "SubGame",
		symbol: "SGB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x486e27D56c0744970687927728598F8B96451Cc4",
		chainId: 1,
		decimals: 18,
		name: "Synth sGBP",
		symbol: "sGBP"
	},
	{
		address: "0x97fe22E7341a0Cd8Db6F6C021A24Dc8f4DAD855F",
		chainId: 1,
		decimals: 18,
		name: "Synth Pound Sterling",
		symbol: "sGBP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaB456bDb0A373BBaC6C4A76176E9f159cAcD5752",
		chainId: 1,
		decimals: 9,
		name: "Society of Galactic Exploration",
		symbol: "SGE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa1ccc166faf0E998b3E33225A1A0301B1C86119D",
		chainId: 1,
		decimals: 18,
		name: "SGELDER",
		symbol: "SGEL"
	},
	{
		address: "0xB2135AB9695a7678Dd590B1A996CB0f37BCB0718",
		chainId: 1,
		decimals: 9,
		name: "Signals Network",
		symbol: "SGN"
	},
	{
		address: "0xC63B8ECCE56aB9C46184eC6aB85e4771fEa4c8AD",
		chainId: 1,
		decimals: 18,
		name: "Synth Alphabet",
		symbol: "sGOOG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x33C623a2BAAfEb8D15DfaF3cE44095efec83D72C",
		chainId: 1,
		decimals: 18,
		name: "SGPay",
		symbol: "SGP"
	},
	{
		address: "0xCB5A05beF3257613E984C17DbcF039952B6d883F",
		chainId: 1,
		decimals: 8,
		name: "Sugar Exchange",
		symbol: "SGR"
	},
	{
		address: "0x37427576324fE1f3625c9102674772d7CF71377d",
		chainId: 1,
		decimals: 18,
		name: "SelfieYo Gold Token",
		symbol: "SGT"
	},
	{
		address: "0x616C281CD8effF8c0354723BE399c809e97A7bf4",
		chainId: 1,
		decimals: 18,
		name: "SelfieYo Gold Token",
		symbol: "SGT"
	},
	{
		address: "0xd248B0D48E44aaF9c49aea0312be7E13a6dc1468",
		chainId: 1,
		decimals: 1,
		name: "SGT",
		symbol: "SGT"
	},
	{
		address: "0x84810bcF08744d5862B8181f12d17bfd57d3b078",
		chainId: 1,
		decimals: 18,
		name: "SharedStake Governa",
		symbol: "SGT"
	},
	{
		address: "0xc4199fB6FFDb30A829614becA030f9042f1c3992",
		chainId: 1,
		decimals: 18,
		name: "snglsDAO Governance",
		symbol: "SGT"
	},
	{
		address: "0x6006FC2a849fEdABa8330ce36F5133DE01F96189",
		chainId: 1,
		decimals: 18,
		name: "SHAKE",
		symbol: "SHAKE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBeBdab6DA046Bc49ffBb61fbD7b33157Eb270D05",
		chainId: 1,
		decimals: 18,
		name: "Shard Coin",
		symbol: "SHARD"
	},
	{
		address: "0x39795344CBCc76cC3Fb94B9D1b15C23c2070C66D",
		chainId: 1,
		decimals: 9,
		name: "Seigniorage Shares",
		symbol: "SHARE"
	},
	{
		address: "0x7c3E3bdCec89a3f706C9a02797EC427ffa596787",
		chainId: 1,
		decimals: 18,
		name: "StakeHouse Batch",
		symbol: "SHB"
	},
	{
		address: "0xd0f57B427971EA60909a28648987141A81f8DC03",
		chainId: 1,
		decimals: 18,
		name: "Super Heavy Booster",
		symbol: "SHB4"
	},
	{
		address: "0x5845Cd0205b5d43AF695412a79Cf7C1Aeddb060F",
		chainId: 1,
		decimals: 18,
		name: "ShardingDAO",
		symbol: "SHD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8A8221628361FA25294A83A172dd4f0133207B37",
		chainId: 1,
		decimals: 18,
		name: "Shadetech",
		symbol: "SHD"
	},
	{
		address: "0x22Ef3753e3658e81D5A0d0889ce078178Fe66595",
		chainId: 1,
		decimals: 18,
		name: "SHENG",
		symbol: "SHENG"
	},
	{
		address: "0x8c9d0e9d27fB15a96Cd8Ad714929502F4f1995Bf",
		chainId: 1,
		decimals: 18,
		name: "SHUFFLE",
		symbol: "SHFL"
	},
	{
		address: "0xb17C88bDA07D28B3838E0c1dE6a30eAfBCF52D85",
		chainId: 1,
		decimals: 18,
		name: "Shyft Network",
		symbol: "SHFT"
	},
	{
		address: "0x95aD61b0a150d79219dCF64E1E6Cc01f0B64C4cE",
		chainId: 1,
		decimals: 18,
		name: "Shiba Inu",
		symbol: "SHIB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa4Cf2aFD3B165975afFFBf7e487CDd40C894Ab6B",
		chainId: 1,
		decimals: 0,
		name: "Shibaken Finance",
		symbol: "SHIBAKEN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x77f39C61DDaC121ca1B24fDeA984faB734FDcE8F",
		chainId: 1,
		decimals: 9,
		name: "Shiba Launch",
		symbol: "SHIBAL"
	},
	{
		address: "0xb2E20502c7593674509b8384ED9240a03869Faf3",
		chainId: 1,
		decimals: 9,
		name: "Shiba Ramen",
		symbol: "SHIBARAMEN"
	},
	{
		address: "0xc5C43aD81e6C76EAA1f2Dd92CB6a11Ff6B6D09eA",
		chainId: 1,
		decimals: 9,
		name: "Shiba Cosmos",
		symbol: "SHIBCO"
	},
	{
		address: "0x2dFAc6327Dce9F88E31fF46de13049eca5a7DfcB",
		chainId: 1,
		decimals: 9,
		name: "Shiberus Inu",
		symbol: "SHIBERUS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x440238CC07186aDEA6653a2E8cb9a24737615609",
		chainId: 1,
		decimals: 9,
		name: "Shibmerican",
		symbol: "SHIBMERICAN"
	},
	{
		address: "0x841FB148863454A3b3570f515414759BE9091465",
		chainId: 1,
		decimals: 18,
		name: "Shih Tzu",
		symbol: "SHIH"
	},
	{
		address: "0x71BEFF5533dd4c0a47B739dA50C56A2dd28633fa",
		chainId: 1,
		decimals: 18,
		name: "Sheltie Inu",
		symbol: "SHINU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa1ab427451F19dF7445a22dEa7073800Ea3b687f",
		chainId: 1,
		decimals: 9,
		name: "Shinigami Inu",
		symbol: "SHINU"
	},
	{
		address: "0xe25b0BBA01Dc5630312B6A21927E578061A13f55",
		chainId: 1,
		decimals: 18,
		name: "ShipChain",
		symbol: "SHIP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEF2E9966eb61BB494E5375d5Df8d67B7dB8A780D",
		chainId: 1,
		decimals: 0,
		name: "SHIT",
		symbol: "SHIT"
	},
	{
		address: "0xaa7FB1c8cE6F18d4fD4Aabb61A2193d4D441c54F",
		chainId: 1,
		decimals: 6,
		name: "ShitCoin",
		symbol: "SHIT"
	},
	{
		address: "0x8542325B72C6D9fC0aD2Ca965A78435413a915A0",
		chainId: 1,
		decimals: 18,
		name: "Oyster Shell",
		symbol: "SHL"
	},
	{
		address: "0xd49EFA7BC0D339D74f487959C573d518BA3F8437",
		chainId: 1,
		decimals: 18,
		name: "Shield Finance",
		symbol: "SHLD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCc0014cCb39F6e86b1BE0f17859A783B6722722F",
		chainId: 1,
		decimals: 18,
		name: "Showcase Token",
		symbol: "SHO"
	},
	{
		address: "0x322080Dae6752ee02F2fb8850bD4A75B9F3C1371",
		chainId: 1,
		decimals: 9,
		name: "Shiba Chocolate",
		symbol: "SHOCO"
	},
	{
		address: "0xec0bF0e934D092D31E769e8C9722FFbaA582Db3B",
		chainId: 1,
		decimals: 9,
		name: "Shikokuaido",
		symbol: "SHOKK"
	},
	{
		address: "0xacE837f596029039E7eDd4789f9978259e1C3035",
		chainId: 1,
		decimals: 10,
		name: "CoinShop",
		symbol: "SHOP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7BEF710a5759d197EC0Bf621c3Df802C2D60D848",
		chainId: 1,
		decimals: 18,
		name: "Splyt",
		symbol: "SHOPX"
	},
	{
		address: "0xEF2463099360a085f1f10b076Ed72Ef625497a06",
		chainId: 1,
		decimals: 18,
		name: "Sharpe Platform Token",
		symbol: "SHP"
	},
	{
		address: "0x13b1E6B036aC0a1495F876313f92A0706CC10871",
		chainId: 1,
		decimals: 18,
		name: "ShipItPro",
		symbol: "SHPP"
	},
	{
		address: "0xd98F75b1A3261dab9eEd4956c93F33749027a964",
		chainId: 1,
		decimals: 2,
		name: "ShareToken",
		symbol: "SHR"
	},
	{
		address: "0x38c4102D11893351cED7eF187fCF43D33eb1aBE6",
		chainId: 1,
		decimals: 18,
		name: "Shrimp Finance",
		symbol: "SHRIMP"
	},
	{
		address: "0xEd0439EACf4c4965AE4613D77a5C2Efe10e5f183",
		chainId: 1,
		decimals: 18,
		name: "Niftyx Protocol",
		symbol: "SHROOM"
	},
	{
		address: "0x3A9FfF453d50D4Ac52A6890647b823379ba36B9E",
		chainId: 1,
		decimals: 18,
		name: "Shuffle Monster",
		symbol: "SHUF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x236d53148F83706C3d670064809577385f923a75",
		chainId: 1,
		decimals: 9,
		name: "Siberian Husky",
		symbol: "SHUSKY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD23Ac27148aF6A2f339BD82D0e3CFF380b5093de",
		chainId: 1,
		decimals: 18,
		name: "Siren",
		symbol: "SI"
	},
	{
		address: "0x8b98dF4Dff429E64E9A56fc6Eebe2380c6c3409c",
		chainId: 1,
		decimals: 8,
		name: "Si14Bet",
		symbol: "SI14"
	},
	{
		address: "0x980E45AB37c6bcAF93Fe911b3e207e08a3a60B5E",
		chainId: 1,
		decimals: 2,
		name: "SIBU",
		symbol: "SIBU"
	},
	{
		address: "0x4afb0AaC9b862946837b2444566B8a914D6d0d97",
		chainId: 1,
		decimals: 9,
		name: "Simian Finance",
		symbol: "SIFI"
	},
	{
		address: "0x8a187D5285d316bcBC9ADafc08b51d70a0d8e000",
		chainId: 1,
		decimals: 0,
		name: "SIFT",
		symbol: "SIFT"
	},
	{
		address: "0x6888a16eA9792c15A4DCF2f6C623D055c8eDe792",
		chainId: 1,
		decimals: 18,
		name: "Signal Token",
		symbol: "SIG"
	},
	{
		address: "0x7777777777697cFEECF846A76326dA79CC606517",
		chainId: 1,
		decimals: 18,
		name: "xSigma",
		symbol: "SIG"
	},
	{
		address: "0x6D728fF862Bfe74be2aba30537E992A24F259a22",
		chainId: 1,
		decimals: 18,
		name: "Salient Investment",
		symbol: "SIH"
	},
	{
		address: "0x4C1e085d8c2D2a8377834d0D7b38f12cc5b86898",
		chainId: 1,
		decimals: 18,
		name: "SilkChain",
		symbol: "SILK"
	},
	{
		address: "0x254417f7B56328a48f554b173dCa7Bdda7A2a0d2",
		chainId: 1,
		decimals: 18,
		name: "Simba Token",
		symbol: "SIMBA"
	},
	{
		address: "0xeb2C0E11aF20FB1c41C6e7ABe5ad214E48738514",
		chainId: 1,
		decimals: 18,
		name: "Sinelock",
		symbol: "SINE"
	},
	{
		address: "0xcbA8162778E6A3eBA60E1cF7C012B327340BD05d",
		chainId: 1,
		decimals: 18,
		name: "SINOC",
		symbol: "SINOC"
	},
	{
		address: "0xE8d1eFD0c95011298E9A30143A0182c06b45ff5D",
		chainId: 1,
		decimals: 9,
		name: "SION",
		symbol: "SION"
	},
	{
		address: "0x4B1cE9C42A381CB2d74ffeF20103e502e2fc619C",
		chainId: 1,
		decimals: 18,
		name: "Synth JPY",
		symbol: "sJPY"
	},
	{
		address: "0xF6b1C627e95BFc3c1b4c9B825a032Ff0fBf3e07d",
		chainId: 1,
		decimals: 18,
		name: "Synth Japanese Yen",
		symbol: "sJPY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4aF328C52921706dCB739F25786210499169AFe6",
		chainId: 1,
		decimals: 8,
		name: "Sakura Bloom",
		symbol: "SKB"
	},
	{
		address: "0x0fE156436F203B114C6c562Cb1a2A81aa2801090",
		chainId: 1,
		decimals: 18,
		name: "SKINCHAIN",
		symbol: "SKC"
	},
	{
		address: "0x70c621f949b6556c4545707a2d5d73A776b98359",
		chainId: 1,
		decimals: 6,
		name: "Skychain",
		symbol: "SKCH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x13DB74B3cf512F65C4b91683940B4f3955E05085",
		chainId: 1,
		decimals: 8,
		name: "Super Keep Token",
		symbol: "SKE"
	},
	{
		address: "0x06A01a4d579479Dd5D884EBf61A31727A3d8D442",
		chainId: 1,
		decimals: 8,
		name: "SmartKey",
		symbol: "SKEY"
	},
	{
		address: "0x996Dc5dfc819408Dd98Cd92c9a76f64b0738Dc3D",
		chainId: 1,
		decimals: 18,
		name: "Skillchain",
		symbol: "SKI"
	},
	{
		address: "0x2bDC0D42996017fCe214b21607a515DA41A9E0C5",
		chainId: 1,
		decimals: 6,
		name: "SkinCoin",
		symbol: "SKIN"
	},
	{
		address: "0x00c83aeCC790e8a4453e5dD3B0B4b3680501a7A7",
		chainId: 1,
		decimals: 18,
		name: "SKALE",
		symbol: "SKL"
	},
	{
		address: "0x048Fe49BE32adfC9ED68C37D32B5ec9Df17b3603",
		chainId: 1,
		decimals: 18,
		name: "Skrumble Network",
		symbol: "SKM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd99b8A7fA48E25Cce83B81812220A3E03Bf64e5f",
		chainId: 1,
		decimals: 18,
		name: "Skrumble Network",
		symbol: "SKM"
	},
	{
		address: "0x4994e81897a920c0FEA235eb8CEdEEd3c6fFF697",
		chainId: 1,
		decimals: 18,
		name: "Sikoba",
		symbol: "SKO1"
	},
	{
		address: "0x4c382F8E09615AC86E08CE58266CC227e7d4D913",
		chainId: 1,
		decimals: 6,
		name: "SKR Token",
		symbol: "SKR"
	},
	{
		address: "0x324A48eBCbB46e61993931eF9D35F6697CD2901b",
		chainId: 1,
		decimals: 18,
		name: "Skraps",
		symbol: "SKRP"
	},
	{
		address: "0x6E34d8d84764D40f6D7b39cd569Fd017bF53177D",
		chainId: 1,
		decimals: 18,
		name: "Skraps",
		symbol: "SKRP"
	},
	{
		address: "0xfdFE8b7aB6CF1bD1E3d14538Ef40686296C42052",
		chainId: 1,
		decimals: 18,
		name: "Skraps",
		symbol: "SKRP"
	},
	{
		address: "0x887168120cb89Fb06F3E74Dc4AF20D67dF0977f6",
		chainId: 1,
		decimals: 18,
		name: "Sekuritance",
		symbol: "SKRT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x269895a3dF4D73b077Fc823dD6dA1B95f72Aaf9B",
		chainId: 1,
		decimals: 18,
		name: "Synth South Korean Won",
		symbol: "sKRW",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x82bdfb4C6F488fC47700ceF12C448a2F13F8fF4F",
		chainId: 1,
		decimals: 18,
		name: "SealBlock Token",
		symbol: "SKT"
	},
	{
		address: "0x012E0e6342308b247F36Ee500ECb14dc77a7a8C1",
		chainId: 1,
		decimals: 8,
		name: "Sukhavati Network",
		symbol: "SKT"
	},
	{
		address: "0xBcc66ed2aB491e9aE7Bf8386541Fb17421Fa9d35",
		chainId: 1,
		decimals: 4,
		name: "Skull",
		symbol: "SKULL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7297862B9670fF015192799cc849726c88bf1d77",
		chainId: 1,
		decimals: 18,
		name: "Skymap Token",
		symbol: "SKYM"
	},
	{
		address: "0x755e83f560335E6bb8E45e44460EC4aF598E24C9",
		chainId: 1,
		decimals: 18,
		name: "Slash Protocol",
		symbol: "SLASH"
	},
	{
		address: "0x2ac22EbC138fF127566F68db600Addad7dF38d38",
		chainId: 1,
		decimals: 18,
		name: "Selenium",
		symbol: "SLC"
	},
	{
		address: "0x1ef6A7e2c966fb7C5403EFEFdE38338b1a95a084",
		chainId: 1,
		decimals: 18,
		name: "ShieldEX",
		symbol: "SLD"
	},
	{
		address: "0x0AeE8703D34DD9aE107386d3eFF22AE75Dd616D1",
		chainId: 1,
		decimals: 18,
		name: "Tranche Finance",
		symbol: "SLICE"
	},
	{
		address: "0x46824bFAaFd049fB0Af9a45159A88e595Bbbb9f7",
		chainId: 1,
		decimals: 18,
		name: "Synth sLINK",
		symbol: "sLINK"
	},
	{
		address: "0xbBC455cb4F1B9e4bFC4B73970d360c8f032EfEE6",
		chainId: 1,
		decimals: 18,
		name: "Synth Chainlink",
		symbol: "sLINK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x10Bae51262490B4f4AF41e12eD52A0E744c1137A",
		chainId: 1,
		decimals: 9,
		name: "Soft Link",
		symbol: "SLINK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3DE7148c41e3B3233f3310E794F68d8E70Ca69AF",
		chainId: 1,
		decimals: 9,
		name: "ShibaLink",
		symbol: "SLINK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCC8Fa225D80b9c7D42F96e9570156c65D6cAAa25",
		chainId: 1,
		decimals: 0,
		name: "Smooth Love Potion",
		symbol: "SLP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x37236CD05b34Cc79d3715AF2383E96dd7443dCF1",
		chainId: 1,
		decimals: 0,
		name: "Small Love Potion [Old]",
		symbol: "SLP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x56eE8C9BD1d445a3324ad83E86D8be309Db8f85d",
		chainId: 1,
		decimals: 18,
		name: "Solareum",
		symbol: "SLRM"
	},
	{
		address: "0x7A5fF295Dc8239d5C2374E4D894202aAF029Cab6",
		chainId: 1,
		decimals: 3,
		name: "Smartlands",
		symbol: "SLT"
	},
	{
		address: "0xE9f3cB0229eb8D0aAF03Ec84883950134eD20DDC",
		chainId: 1,
		decimals: 8,
		name: "SLT",
		symbol: "SLT"
	},
	{
		address: "0x088256945480c884C067a8Bc98A72A1C984f826B",
		chainId: 1,
		decimals: 18,
		name: "Synth sLTC",
		symbol: "sLTC"
	},
	{
		address: "0xC14103C2141E842e228FBaC594579e798616ce7A",
		chainId: 1,
		decimals: 18,
		name: "Synth Litecoin",
		symbol: "sLTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4c1C4957D22D8F373aeD54d0853b090666F6F9De",
		chainId: 1,
		decimals: 18,
		name: "Silverway",
		symbol: "SLV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7928c8aBF1F74eF9F96D4D0a44e3b4209d360785",
		chainId: 1,
		decimals: 18,
		name: "Selfllery",
		symbol: "SLY"
	},
	{
		address: "0x6F6DEb5db0C4994A8283A01D6CFeEB27Fc3bBe9C",
		chainId: 1,
		decimals: 0,
		name: "Smart Billions",
		symbol: "SMART"
	},
	{
		address: "0x72e9D9038cE484EE986FEa183f8d8Df93f9aDA13",
		chainId: 1,
		decimals: 18,
		name: "SmartCredit Token",
		symbol: "SMARTCREDIT"
	},
	{
		address: "0x8fa025E8342EaD1037d2954b95333FF2Bf57162b",
		chainId: 1,
		decimals: 9,
		name: "ShibaMax",
		symbol: "SMAX"
	},
	{
		address: "0x53Bd789F2cDb846b227d8ffc7B46eD4263231FDf",
		chainId: 1,
		decimals: 18,
		name: "SimbCoin Swap",
		symbol: "SMBSWAP"
	},
	{
		address: "0xB6eDA82597808c96969C21a88bf6c749B441c44A",
		chainId: 1,
		decimals: 18,
		name: "Smart Medical Coin",
		symbol: "SMC"
	},
	{
		address: "0x7e8539D1E5cB91d63E46B8e188403b3f262a949B",
		chainId: 1,
		decimals: 18,
		name: "SOMIDAX",
		symbol: "SMDX"
	},
	{
		address: "0xCd7492db29E2ab436e819b249452EE1bbDf52214",
		chainId: 1,
		decimals: 8,
		name: "SafeMoon Inu",
		symbol: "SMI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x84965DCa28c4Eb9dE61d80f80e811eA12BE1c819",
		chainId: 1,
		decimals: 18,
		name: "Synth MKR",
		symbol: "sMKR"
	},
	{
		address: "0x2216e873ea4282EbEf7A02aC5aeA220bE6391A7C",
		chainId: 1,
		decimals: 18,
		name: "smol",
		symbol: "SMOL"
	},
	{
		address: "0x8bF92cad232f72A7C61Eb42e9185e8d0Ea470f6B",
		chainId: 1,
		decimals: 18,
		name: "SMPL Foundation",
		symbol: "SMPL"
	},
	{
		address: "0x39013F961c378f02C2b82A6E1d31E9812786FD9D",
		chainId: 1,
		decimals: 3,
		name: "Speed Mining Service",
		symbol: "SMS"
	},
	{
		address: "0xe5867608b51A2c9C78B9587355cC093140A49B0A",
		chainId: 1,
		decimals: 3,
		name: "Speed Mining Servic",
		symbol: "SMS"
	},
	{
		address: "0x668f7dfb8c8D716839fa5dBEa317D8723Ebe6110",
		chainId: 1,
		decimals: 0,
		name: "SMSCodes",
		symbol: "SMSCT"
	},
	{
		address: "0x745a824D6aBBD236AA794b5530062778A6Ad7523",
		chainId: 1,
		decimals: 18,
		name: "Synth Microsoft",
		symbol: "sMSFT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2dCFAAc11c9EebD8C6C42103Fe9e2a6AD237aF27",
		chainId: 1,
		decimals: 18,
		name: "Smart Node",
		symbol: "SMT"
	},
	{
		address: "0x55F93985431Fc9304077687a35A1BA103dC1e081",
		chainId: 1,
		decimals: 18,
		name: "SmartMesh",
		symbol: "SMT"
	},
	{
		address: "0x78Eb8DC641077F049f910659b6d580E80dC4d237",
		chainId: 1,
		decimals: 8,
		name: "Social Media Market",
		symbol: "SMT"
	},
	{
		address: "0x21f15966E07a10554C364b988e91DaB01D32794A",
		chainId: 1,
		decimals: 18,
		name: "SmartMesh",
		symbol: "SMT"
	},
	{
		address: "0xB17548c7B510427baAc4e267BEa62e800b247173",
		chainId: 1,
		decimals: 18,
		name: "Swarm Markets",
		symbol: "SMT"
	},
	{
		address: "0xbF776e4FCa664D791C4Ee3A71e2722990E003283",
		chainId: 1,
		decimals: 18,
		name: "Smoothy",
		symbol: "SMTY"
	},
	{
		address: "0x179E31FB25E433441a2839389A7b8EC9c4654b7B",
		chainId: 1,
		decimals: 18,
		name: "SynchroBitcoin",
		symbol: "SNB"
	},
	{
		address: "0x198A87b3114143913d4229Fb0f6D4BCb44aa8AFF",
		chainId: 1,
		decimals: 8,
		name: "Snowball",
		symbol: "SNBL"
	},
	{
		address: "0xF4134146AF2d511Dd5EA8cDB1C4AC88C57D60404",
		chainId: 1,
		decimals: 18,
		name: "SunContract",
		symbol: "SNC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf333b2Ace992ac2bBD8798bF57Bc65a06184afBa",
		chainId: 1,
		decimals: 0,
		name: "Sandcoin",
		symbol: "SND"
	},
	{
		address: "0xFf19138b039D938db46bDDA0067DC4BA132ec71C",
		chainId: 1,
		decimals: 8,
		name: "Snetwork",
		symbol: "SNET"
	},
	{
		address: "0x5A7E3c07604EB515C16b36cd51906a65f021F609",
		chainId: 1,
		decimals: 18,
		name: "Synth Netflix",
		symbol: "sNFLX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA3c4Dc4A9cE2a6B40B57F25F8b50DeCc2c64deC2",
		chainId: 1,
		decimals: 18,
		name: "SeedSwap",
		symbol: "SNFT"
	},
	{
		address: "0xcFD6Ae8BF13f42DE14867351eAff7A8A3b9FbBe7",
		chainId: 1,
		decimals: 8,
		name: "Sinergia",
		symbol: "SNG"
	},
	{
		address: "0xaeC2E87E0A235266D9C5ADc9DEb4b2E29b54D009",
		chainId: 1,
		decimals: 0,
		name: "SingularDTV",
		symbol: "SNGLS"
	},
	{
		address: "0x757de3ac6B830a931eF178C6634c5C551773155c",
		chainId: 1,
		decimals: 18,
		name: "Synth Nikkei 225 Index",
		symbol: "sNIKKEI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x44F588aEeB8C44471439D1270B3603c66a9262F1",
		chainId: 1,
		decimals: 18,
		name: "SNIP",
		symbol: "SNIP"
	},
	{
		address: "0xA806B3FEd6891136940cF81c4085661500aa2709",
		chainId: 1,
		decimals: 6,
		name: "Sport and Leisure",
		symbol: "SNL"
	},
	{
		address: "0x983F6d60db79ea8cA4eB9968C6aFf8cfA04B3c63",
		chainId: 1,
		decimals: 18,
		name: "SONM",
		symbol: "SNM"
	},
	{
		address: "0xF5717f5DF41eA67Ef67DFD3c1d02F9940bcF5d08",
		chainId: 1,
		decimals: 3,
		name: "SeChain",
		symbol: "SNN"
	},
	{
		address: "0x072c46F392E729C1f0D92a307c2C6DBA06B5D078",
		chainId: 1,
		decimals: 9,
		name: "Snoop Doge",
		symbol: "SNOGE"
	},
	{
		address: "0xD45740aB9ec920bEdBD9BAb2E863519E59731941",
		chainId: 1,
		decimals: 18,
		name: "Schnoodle",
		symbol: "SNOOD"
	},
	{
		address: "0xBDC5bAC39Dbe132B1E030e898aE3830017D7d969",
		chainId: 1,
		decimals: 18,
		name: "Snovian Space",
		symbol: "SNOV"
	},
	{
		address: "0xfe9A29aB92522D14Fc65880d817214261D8479AE",
		chainId: 1,
		decimals: 18,
		name: "SnowSwap",
		symbol: "SNOW",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x795dBF627484F8248D3d6c09c309825c1563E873",
		chainId: 1,
		decimals: 18,
		name: "SNP Token",
		symbol: "SNP"
	},
	{
		address: "0x744d70FDBE2Ba4CF95131626614a1763DF805B9E",
		chainId: 1,
		decimals: 18,
		name: "Status",
		symbol: "SNT",
		extensions: {
			color: "#4360DF",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x2859021eE7F2Cb10162E67F33Af2D22764B31aFf",
		chainId: 1,
		decimals: 4,
		name: "Silent Notary",
		symbol: "SNTR"
	},
	{
		address: "0x7865af71cf0b288b4E7F654f4F7851EB46a2B7F8",
		chainId: 1,
		decimals: 18,
		name: "Sentivate",
		symbol: "SNTVT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC011A72400E58ecD99Ee497CF89E3775d4bd732F",
		chainId: 1,
		decimals: 18,
		name: "Synthetix Network Token",
		symbol: "SNX"
	},
	{
		address: "0xC011a73ee8576Fb46F5E1c5751cA3B9Fe0af2a6F",
		chainId: 1,
		decimals: 18,
		name: "Synthetix",
		symbol: "SNX",
		extensions: {
			color: "#211580",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xD65960FAcb8E4a2dFcb2C2212cb2e44a02e2a57E",
		chainId: 1,
		decimals: 6,
		name: "Soarcoin",
		symbol: "SOAR"
	},
	{
		address: "0xBae5F2D8a1299E5c4963eaff3312399253f27Ccb",
		chainId: 1,
		decimals: 9,
		name: "Soar",
		symbol: "SOAR"
	},
	{
		address: "0x65032604Dab202aFf9ADf89300CdB4bD0d059F55",
		chainId: 1,
		decimals: 18,
		name: "SOBA Token",
		symbol: "SOBA"
	},
	{
		address: "0x2d0E95bd4795D7aCe0da3C0Ff7b706a5970eb9D3",
		chainId: 1,
		decimals: 18,
		name: "All Sports",
		symbol: "SOC"
	},
	{
		address: "0x23B608675a2B2fB1890d3ABBd85c5775c51691d5",
		chainId: 1,
		decimals: 18,
		name: "Unisocks",
		symbol: "SOCKS",
		extensions: {
			color: "#E15EE5",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x7AfB39837Fd244A651e4F0C5660B4037214D4aDF",
		chainId: 1,
		decimals: 18,
		name: "Soda Token",
		symbol: "SODA"
	},
	{
		address: "0xc443930Ecd59e55e42Efe976B8a4bA0658f5c50a",
		chainId: 1,
		decimals: 18,
		name: "SODIUM Vault  NFTX",
		symbol: "SODIUM"
	},
	{
		address: "0xAEA5E11E22E447fA9837738A0cd2848857748ADF",
		chainId: 1,
		decimals: 18,
		name: "Social Finance",
		symbol: "SOFI"
	},
	{
		address: "0x41933422DC4a1cb8C822e06f12f7b52fA5E7E094",
		chainId: 1,
		decimals: 18,
		name: "SOGE",
		symbol: "SOGE"
	},
	{
		address: "0x6d16cF3EC5F763d4d99cB0B0b110eefD93B11B56",
		chainId: 1,
		decimals: 18,
		name: "Synth Perpetual Oil Futures",
		symbol: "sOIL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1F54638b7737193FFd86c19Ec51907A7c41755D8",
		chainId: 1,
		decimals: 6,
		name: "Sola Token",
		symbol: "SOL"
	},
	{
		address: "0x930eD81ad809603baf727117385D01f04354612E",
		chainId: 1,
		decimals: 18,
		name: "Solarite",
		symbol: "SOLARITE"
	},
	{
		address: "0x5011D48D4265b6fB8228600a111b2fAa1fDA3139",
		chainId: 1,
		decimals: 18,
		name: "SolidDefi",
		symbol: "SOLID"
	},
	{
		address: "0x446C9033E7516D820cc9a2ce2d0B7328b579406F",
		chainId: 1,
		decimals: 8,
		name: "SOLVE",
		symbol: "SOLVE"
	},
	{
		address: "0x3E8FFc8c3Cb0DB3081Df85DeC91B63abBbe99F71",
		chainId: 1,
		decimals: 18,
		name: "Mixsome",
		symbol: "SOME"
	},
	{
		address: "0x65F9A292f1AEED5D755Aa2fD2Fb17AB2E9431447",
		chainId: 1,
		decimals: 18,
		name: "SoMee Social",
		symbol: "SOMEE"
	},
	{
		address: "0xA18A0bE599366C8e2fFfFD83A2418a3cCb825d7f",
		chainId: 1,
		decimals: 18,
		name: "Beatify",
		symbol: "SONG"
	},
	{
		address: "0x1C62aCa2b7605Db3606eAcdA7Bc67A1857DDb8FF",
		chainId: 1,
		decimals: 18,
		name: "Soniq",
		symbol: "SONIQ"
	},
	{
		address: "0x076641aF1B8f06B7f8C92587156143C109002cbe",
		chainId: 1,
		decimals: 18,
		name: "SoPay",
		symbol: "SOP"
	},
	{
		address: "0x0DDe6F6e345bfd23f3F419F0DFe04E93143b44FB",
		chainId: 1,
		decimals: 18,
		name: "SOTA Finance",
		symbol: "SOTA"
	},
	{
		address: "0xBb1f24C0c1554b9990222f036b0AaD6Ee4CAec29",
		chainId: 1,
		decimals: 18,
		name: "CryptoSoul",
		symbol: "SOUL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x79C75E2e8720B39e258F41c37cC4f309E0b0fF80",
		chainId: 1,
		decimals: 8,
		name: "Phantasma",
		symbol: "SOUL"
	},
	{
		address: "0x300a902513815028e97FC79E92082Ce6a98d3b74",
		chainId: 1,
		decimals: 18,
		name: "Ethersocks",
		symbol: "SOX"
	},
	{
		address: "0x9631483f28B7f5CBf7D435Ab249Be8f709215bC3",
		chainId: 1,
		decimals: 18,
		name: "Sperax",
		symbol: "SPA"
	},
	{
		address: "0xcc7ab8d78dBA187dC95bF3bB86e65E0C26d0041f",
		chainId: 1,
		decimals: 18,
		name: "Spacelens",
		symbol: "SPACE"
	},
	{
		address: "0xAA2409594Dc0Aef63c0f367e30f6B51149cbE613",
		chainId: 1,
		decimals: 9,
		name: "Space Doge",
		symbol: "SPACEDOGE"
	},
	{
		address: "0x42d6622deCe394b54999Fbd73D108123806f6a18",
		chainId: 1,
		decimals: 18,
		name: "SpankChain",
		symbol: "SPANK",
		extensions: {
			color: "#FF3B81",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x58bf7df57d9DA7113c4cCb49d8463D4908C735cb",
		chainId: 1,
		decimals: 18,
		name: "SPARC",
		symbol: "SPARC"
	},
	{
		address: "0x24AEF3BF1A47561500f9430D74Ed4097C47F51F2",
		chainId: 1,
		decimals: 4,
		name: "Sparta",
		symbol: "SPARTA"
	},
	{
		address: "0x8F9bfe5b6A5C3fEa8c64ad41a5Cf6f60Ec4aa47c",
		chainId: 1,
		decimals: 8,
		name: "SWAPCOINZ",
		symbol: "SPAZ"
	},
	{
		address: "0x810908B285f85Af668F6348cD8B26D76B3EC12e1",
		chainId: 1,
		decimals: 8,
		name: "SwapCoinz",
		symbol: "SPAZ"
	},
	{
		address: "0x8069080a922834460C3A092FB2c1510224dc066b",
		chainId: 1,
		decimals: 18,
		name: "SpaceChain",
		symbol: "SPC"
	},
	{
		address: "0x86ed939B500E121C0C5f493F399084Db596dAd20",
		chainId: 1,
		decimals: 18,
		name: "SpaceChain  ERC 20",
		symbol: "SPC"
	},
	{
		address: "0x1dEa979ae76f26071870F824088dA78979eb91C8",
		chainId: 1,
		decimals: 18,
		name: "SPINDLE",
		symbol: "SPD"
	},
	{
		address: "0xbcD4b7dE6fde81025f74426D43165a5b0D790Fdd",
		chainId: 1,
		decimals: 18,
		name: "SpiderDAO",
		symbol: "SPDR"
	},
	{
		address: "0x2C756e74B7309d785b5e2960ef262c4f14a87930",
		chainId: 1,
		decimals: 0,
		name: "SPENDER X",
		symbol: "SPDX"
	},
	{
		address: "0x090185f2135308BaD17527004364eBcC2D37e5F6",
		chainId: 1,
		decimals: 18,
		name: "Spell Token",
		symbol: "SPELL"
	},
	{
		address: "0x85089389C14Bd9c77FC2b8F0c3d1dC3363Bf06Ef",
		chainId: 1,
		decimals: 18,
		name: "Sportify",
		symbol: "SPF"
	},
	{
		address: "0xA0CF46eb152656C7090e769916eb44a138aaa406",
		chainId: 1,
		decimals: 18,
		name: "Spheroid Universe",
		symbol: "SPH"
	},
	{
		address: "0x3833ddA0AEB6947b98cE454d89366cBA8Cc55528",
		chainId: 1,
		decimals: 18,
		name: "SophiaTX",
		symbol: "SPHTX"
	},
	{
		address: "0x9B02dD390a603Add5c07f9fd9175b7DABE8D63B7",
		chainId: 1,
		decimals: 18,
		name: "Shopping io",
		symbol: "SPI"
	},
	{
		address: "0x0324dd195D0Cd53F9F07bEe6a48eE7a20bad738f",
		chainId: 1,
		decimals: 8,
		name: "SPiCE VC Token",
		symbol: "SPICE"
	},
	{
		address: "0x1fDaB294EDA5112B7d066ED8F2E4E562D5bCc664",
		chainId: 1,
		decimals: 18,
		name: "SPICE",
		symbol: "SPICE"
	},
	{
		address: "0xA7fC5D2453E3F68aF0cc1B78bcFEe94A1B293650",
		chainId: 1,
		decimals: 10,
		name: "Spiking",
		symbol: "SPIKE"
	},
	{
		address: "0x92d7A89405Ea3cC605A467E834236e09DF60bf16",
		chainId: 1,
		decimals: 18,
		name: "Spirit",
		symbol: "SPIRIT"
	},
	{
		address: "0xa7A5c1058194Af8F00c187adB7FcC0c95f1C6c2d",
		chainId: 1,
		decimals: 18,
		name: "SPACE iZ",
		symbol: "SPIZ"
	},
	{
		address: "0x51d3e4C0b2c83E62f5d517D250b3e856897d2052",
		chainId: 1,
		decimals: 9,
		name: "Space Monkey",
		symbol: "SPMK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x20F7A3DdF244dc9299975b4Da1C39F8D5D75f05A",
		chainId: 1,
		decimals: 6,
		name: "Sapien",
		symbol: "SPN"
	},
	{
		address: "0xDDD460bBD9F79847ea08681563e8A9696867210C",
		chainId: 1,
		decimals: 18,
		name: "Spendcoin",
		symbol: "SPND"
	},
	{
		address: "0xcbE771323587EA16dACB6016e269D7F08A7ACC4E",
		chainId: 1,
		decimals: 18,
		name: "Spores Network",
		symbol: "SPO"
	},
	{
		address: "0x4b7aD3a56810032782Afce12d7d27122bDb96efF",
		chainId: 1,
		decimals: 8,
		name: "Sparkle Loyalty",
		symbol: "SPRKL"
	},
	{
		address: "0xC560984D8c4CED2a0ebA5790b33b6f43AFeEf759",
		chainId: 1,
		decimals: 18,
		name: "SpritzCoin",
		symbol: "SPRTZ"
	},
	{
		address: "0x01cC4151fe5f00EfB8dF2F90ff833725d3a482a3",
		chainId: 1,
		decimals: 8,
		name: "SPECTRUM",
		symbol: "SPT"
	},
	{
		address: "0x97Aa8e14db0bc073cC7e2d42AC715427717d6042",
		chainId: 1,
		decimals: 18,
		name: "SPUNK Vault",
		symbol: "SPUNK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEf7bCE1BE2Ba032131326910a6c11e716daeDBFf",
		chainId: 1,
		decimals: 18,
		name: "Spurt Plus",
		symbol: "SPUP"
	},
	{
		address: "0xe516D78d784C77D479977BE58905B3f2b1111126",
		chainId: 1,
		decimals: 18,
		name: "Bitspawn",
		symbol: "SPWN"
	},
	{
		address: "0x05aAaA829Afa407D83315cDED1d45EB16025910c",
		chainId: 1,
		decimals: 18,
		name: "Sp8de",
		symbol: "SPX"
	},
	{
		address: "0xe4883Bcb919386Bb5f48EF59B7C31C1D93A51A57",
		chainId: 1,
		decimals: 18,
		name: "Satopay Yield Token",
		symbol: "SPY"
	},
	{
		address: "0x0051d363A60bD98d8A10927D10708e5eF853b306",
		chainId: 1,
		decimals: 6,
		name: "SWAPCOINZ",
		symbol: "SPZ"
	},
	{
		address: "0x8d137e3337eb1B58A222Fef2B2Cc7C423903d9cf",
		chainId: 1,
		decimals: 18,
		name: "SQGL Vault  NFTX",
		symbol: "SQGL"
	},
	{
		address: "0x16587cF43F044aBa0165ffA00AcF412631194e4b",
		chainId: 1,
		decimals: 18,
		name: "Simracer Coin",
		symbol: "SRC"
	},
	{
		address: "0xD31533E8d0f3DF62060e94B3F1318137bB6E3525",
		chainId: 1,
		decimals: 18,
		name: "Synth Ren",
		symbol: "sREN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc350e846e2C57F9EecE90FEBc253d14C8080871B",
		chainId: 1,
		decimals: 18,
		name: "SRH",
		symbol: "SRH"
	},
	{
		address: "0x0488401c3F535193Fa8Df029d9fFe615A06E74E6",
		chainId: 1,
		decimals: 18,
		name: "SparkPoint",
		symbol: "SRK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x476c5E26a75bd202a9683ffD34359C0CC15be0fF",
		chainId: 1,
		decimals: 6,
		name: "Serum",
		symbol: "SRM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x68d57c9a1C35f63E2c83eE8e49A64e9d70528D25",
		chainId: 1,
		decimals: 18,
		name: "Sirin Labs Token",
		symbol: "SRN"
	},
	{
		address: "0x0352557B007A4Aae1511C114409b932F06F9E2f4",
		chainId: 1,
		decimals: 18,
		name: "Synth THORChain",
		symbol: "sRUNE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x32F3b8A00B6912D0314be212fe9538B7B9430c12",
		chainId: 1,
		decimals: 8,
		name: "SiriusX",
		symbol: "SRX"
	},
	{
		address: "0xB15fE5a123e647ba594CEa7A1E648646f95EB4AA",
		chainId: 1,
		decimals: 18,
		name: "Sharder",
		symbol: "SS"
	},
	{
		address: "0xbbFF862d906E348E9946Bfb2132ecB157Da3D4b4",
		chainId: 1,
		decimals: 18,
		name: "Sharder",
		symbol: "SS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2ECc48ba346A73d7d55aa5a46b5E314d9DAA6161",
		chainId: 1,
		decimals: 18,
		name: "Safeswap",
		symbol: "SSGT"
	},
	{
		address: "0x6e2050CBFB3eD8A4d39b64cC9f47E711a03a5a89",
		chainId: 1,
		decimals: 18,
		name: "StreamShares",
		symbol: "SSH"
	},
	{
		address: "0xB4ae194a0DCF1B4080b164C1d775ee06E0817305",
		chainId: 1,
		decimals: 18,
		name: "Super Saiya jin",
		symbol: "SSJ"
	},
	{
		address: "0x0d9227f9c4ab3972f994FCcC6EeBa3213C0305c4",
		chainId: 1,
		decimals: 18,
		name: "SERGS Governance",
		symbol: "SSL"
	},
	{
		address: "0xA5b46FF9a887180C8FB2d97146398Ddfc5FEF1Cd",
		chainId: 1,
		decimals: 18,
		name: "SuperSkyNet",
		symbol: "SSN"
	},
	{
		address: "0x624d520BAB2E4aD83935Fa503fB130614374E850",
		chainId: 1,
		decimals: 4,
		name: "Smartshare",
		symbol: "SSP"
	},
	{
		address: "0x2863916C6ebDBBf0c6f02F87b7eB478509299868",
		chainId: 1,
		decimals: 18,
		name: "SIMBA Storage Token",
		symbol: "SST"
	},
	{
		address: "0x6936F1dcd8c2e3A69469311A130858174F9f0A15",
		chainId: 1,
		decimals: 9,
		name: "Shiba Swim",
		symbol: "SSWIM"
	},
	{
		address: "0x06874F973Dc3c96dc22A10eF0D0609F877f335EA",
		chainId: 1,
		decimals: 18,
		name: "Defi STOA",
		symbol: "STA"
	},
	{
		address: "0xD7d05bDa4bf5876bA1254b3Eaaf8b47D2F5676eb",
		chainId: 1,
		decimals: 18,
		name: "STABLE ASSET",
		symbol: "STA"
	},
	{
		address: "0xa7DE087329BFcda5639247F96140f9DAbe3DeED1",
		chainId: 1,
		decimals: 18,
		name: "Statera",
		symbol: "STA"
	},
	{
		address: "0x4da27a545c0c5B758a6BA100e3a049001de870f5",
		chainId: 1,
		decimals: 18,
		name: "Staked Aave",
		symbol: "stAAVE"
	},
	{
		address: "0x4A89cD486fA996ad50c0a63C35c78702f5422a50",
		chainId: 1,
		decimals: 3,
		name: "StabitCoin",
		symbol: "STABIT"
	},
	{
		address: "0xe0955F26515d22E347B17669993FCeFcc73c3a0a",
		chainId: 1,
		decimals: 18,
		name: "Stacker Ventures",
		symbol: "STACK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x56A86d648c435DC707c8405B78e2Ae8eB4E60Ba4",
		chainId: 1,
		decimals: 18,
		name: "StackOS",
		symbol: "STACK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x286708f069225905194673755F12359e6afF6FE1",
		chainId: 1,
		decimals: 18,
		name: "STACS",
		symbol: "STACS"
	},
	{
		address: "0xf12EC0D3Dab64DdEfBdC96474bDe25af3FE1B327",
		chainId: 1,
		decimals: 18,
		name: "Stacy",
		symbol: "STACY"
	},
	{
		address: "0x1F8A626883d7724DBd59eF51CBD4BF1Cf2016D13",
		chainId: 1,
		decimals: 18,
		name: "Jigstack",
		symbol: "STAK",
		extensions: {
			color: "#f2941b",
			isVerified: true
		}
	},
	{
		address: "0x0Ae055097C6d159879521C384F1D2123D1f195e6",
		chainId: 1,
		decimals: 18,
		name: "STAKE",
		symbol: "STAKE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x43afc9058a3DeBF37eaDf99138e449cE8a480A8a",
		chainId: 1,
		decimals: 18,
		name: "STAMP",
		symbol: "STAMP"
	},
	{
		address: "0xF70a642bD387F94380fFb90451C2c81d4Eb82CBc",
		chainId: 1,
		decimals: 18,
		name: "Starbase",
		symbol: "STAR"
	},
	{
		address: "0x8E6cd950Ad6ba651F6DD608Dc70e5886B1AA6B24",
		chainId: 1,
		decimals: 18,
		name: "StarLink",
		symbol: "STARL"
	},
	{
		address: "0xc55c2175E90A46602fD42e931f62B3Acc1A013Ca",
		chainId: 1,
		decimals: 18,
		name: "Mogul Productions",
		symbol: "STARS"
	},
	{
		address: "0x7CCFeEF4F0Ff48B0E0abD19bBBebae90939f180D",
		chainId: 1,
		decimals: 18,
		name: "StarShip Token",
		symbol: "STARS"
	},
	{
		address: "0x5F435CD858F71E42A3DB4282231d1ed25BA07Aed",
		chainId: 1,
		decimals: 18,
		name: "Star Shib",
		symbol: "STARSB"
	},
	{
		address: "0x1d7Ca62F6Af49ec66f6680b8606E634E55Ef22C1",
		chainId: 1,
		decimals: 18,
		name: "Starter xyz",
		symbol: "START"
	},
	{
		address: "0xE4F356EcCe6FbDA81eCDea2E38527e59422861C2",
		chainId: 1,
		decimals: 8,
		name: "BitStash",
		symbol: "STASH"
	},
	{
		address: "0x09BcA6eBAb05Ee2ae945BE4edA51393d94Bf7b99",
		chainId: 1,
		decimals: 4,
		name: "STABLE Token",
		symbol: "STB"
	},
	{
		address: "0x3154da898943Fc7151bc77F16E43C0C47b5E452d",
		chainId: 1,
		decimals: 18,
		name: "STB Chain",
		symbol: "STB"
	},
	{
		address: "0xc48B1aC1417dB27C4e2C2ed3DAE5a3D2fBB07DC5",
		chainId: 1,
		decimals: 8,
		name: "StarBlock",
		symbol: "STB"
	},
	{
		address: "0x212DD60D4Bf0DA8372fe8116474602d429E5735F",
		chainId: 1,
		decimals: 18,
		name: "Stobox Token",
		symbol: "STBU"
	},
	{
		address: "0xB987D48Ed8f2C468D52D6405624EADBa5e76d723",
		chainId: 1,
		decimals: 18,
		name: "Stabilize",
		symbol: "STBZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x629aEe55ed49581C33ab27f9403F7992A289ffd5",
		chainId: 1,
		decimals: 18,
		name: "StrikeCoin Token",
		symbol: "STC"
	},
	{
		address: "0x9a005c9a89BD72a4Bd27721E7a09A3c11D2b03C4",
		chainId: 1,
		decimals: 18,
		name: "CoinStarter",
		symbol: "STC"
	},
	{
		address: "0xf8d325872acbAed090056B4E0bf104B1C735F439",
		chainId: 1,
		decimals: 0,
		name: "STC",
		symbol: "STC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xeED9e4F2450035D6426276a8aA2084966EE3b1bb",
		chainId: 1,
		decimals: 18,
		name: "Steaks Finance",
		symbol: "STEAK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xae7ab96520DE3A18E5e111B5EaAb095312D7fE84",
		chainId: 1,
		decimals: 18,
		name: "Staked Ether",
		symbol: "stETH",
		extensions: {
			color: "#56A0DD",
			isRainbowCurated: true,
			isVerified: true,
			shadowColor: "#FF884D"
		}
	},
	{
		address: "0xDFe66B14D37C77F4E9b180cEb433d1b164f0281D",
		chainId: 1,
		decimals: 18,
		name: "StakeHound Staked E",
		symbol: "STETH"
	},
	{
		address: "0x160B1E5aaBFD70B2FC40Af815014925D71CEEd7E",
		chainId: 1,
		decimals: 8,
		name: "StakedFIRO",
		symbol: "STFIRO"
	},
	{
		address: "0xA9A8377287ea9C6B8b4249DD502E75D34148fC5B",
		chainId: 1,
		decimals: 9,
		name: "Stargaze Protocol",
		symbol: "STGZ"
	},
	{
		address: "0xB52BBD3D5BfA3836bF2b55fE3B7467219280bc2e",
		chainId: 1,
		decimals: 8,
		name: "StiB",
		symbol: "STI"
	},
	{
		address: "0xaE73B38d1c9A8b274127ec30160a4927C4d71824",
		chainId: 1,
		decimals: 18,
		name: "STK",
		symbol: "STK"
	},
	{
		address: "0xa1116930326D21fB917d5A27F1E9943A9595fb47",
		chainId: 1,
		decimals: 18,
		name: "Staked Aave Balance",
		symbol: "STKABPT"
	},
	{
		address: "0x89DcFF5Fd892f2bfc8B75dBA12804B651f769579",
		chainId: 1,
		decimals: 18,
		name: "Staker DAO",
		symbol: "STKR"
	},
	{
		address: "0xC1Ad68c43508dD5AdDb8d0ac0927dbE752d149D6",
		chainId: 1,
		decimals: 18,
		name: "Stablecoinswap",
		symbol: "STL"
	},
	{
		address: "0x302ce6674A16b54bA1B8A49FED64C471EdE6C174",
		chainId: 1,
		decimals: 0,
		name: "StmToken",
		symbol: "STM"
	},
	{
		address: "0x0E22734e078d6e399BCeE40a549DB591C4EA46cB",
		chainId: 1,
		decimals: 18,
		name: "Streamity",
		symbol: "STM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbE9375C6a420D2eEB258962efB95551A5b722803",
		chainId: 1,
		decimals: 18,
		name: "StormX",
		symbol: "STMX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x599346779e90fc3F5F997b5ea715349820F91571",
		chainId: 1,
		decimals: 4,
		name: "Saturn Network",
		symbol: "STN"
	},
	{
		address: "0x592481A5F6b4F078cc303C2cDE4337dFA2d76fA0",
		chainId: 1,
		decimals: 18,
		name: "Sting",
		symbol: "STN"
	},
	{
		address: "0xe63d6B308BCe0F6193AeC6b7E6eBa005f41e36AB",
		chainId: 1,
		decimals: 18,
		name: "Stone Token",
		symbol: "STN"
	},
	{
		address: "0x55150E8378B81F930f310d4B62AB7e1252c30B9B",
		chainId: 1,
		decimals: 18,
		name: "Smart Trade Network",
		symbol: "STN5"
	},
	{
		address: "0x9040e237C3bF18347bb00957Dc22167D0f2b999d",
		chainId: 1,
		decimals: 18,
		name: "Standard Protocol",
		symbol: "STND"
	},
	{
		address: "0xCb39C3502415152b2ec90ff07ee18cc94f681a72",
		chainId: 1,
		decimals: 18,
		name: "Storeum",
		symbol: "STO"
	},
	{
		address: "0x1296A923Cd4f39116e0297D921fE25Fe228552c6",
		chainId: 1,
		decimals: 18,
		name: "Stoner Doge Finance",
		symbol: "STOGE"
	},
	{
		address: "0x4ff5253E2304e3f5Ed6547Ac5D9952A62B91E3E8",
		chainId: 1,
		decimals: 18,
		name: "Stabinol",
		symbol: "STOL"
	},
	{
		address: "0xdC47f2Ba852669B178699449E50682D6CEAF8C07",
		chainId: 1,
		decimals: 18,
		name: "Ston",
		symbol: "STON"
	},
	{
		address: "0x35b55c25731E9b05B1d8480ba39463d52C9D0211",
		chainId: 1,
		decimals: 18,
		name: "Stonk Swap",
		symbol: "STONK"
	},
	{
		address: "0x60CA261e14F26e8daaE8B1a7F8e783D64859126c",
		chainId: 1,
		decimals: 18,
		name: "STONKS",
		symbol: "STONK"
	},
	{
		address: "0xb4058411967D5046f3510943103805be61f0600E",
		chainId: 1,
		decimals: 18,
		name: "STONK",
		symbol: "STONK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8c3eE4F778E282B59D42d693A97b80b1ed80f4Ee",
		chainId: 1,
		decimals: 18,
		name: "SatoPay",
		symbol: "STOP"
	},
	{
		address: "0xA3CEaC0AAc5c5d868973e546cE4731Ba90e873c2",
		chainId: 1,
		decimals: 8,
		name: "Self Storage Coin",
		symbol: "STOR"
	},
	{
		address: "0xB64ef51C888972c908CFacf59B47C1AfBC0Ab8aC",
		chainId: 1,
		decimals: 8,
		name: "Storj",
		symbol: "STORJ",
		extensions: {
			color: "#2683FF",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xD0a4b8946Cb52f0661273bfbC6fD0E0C75Fc6433",
		chainId: 1,
		decimals: 18,
		name: "Storm Token",
		symbol: "STORM"
	},
	{
		address: "0x08c32b0726C5684024ea6e141C50aDe9690bBdcc",
		chainId: 1,
		decimals: 18,
		name: "Stratos",
		symbol: "STOS"
	},
	{
		address: "0xecd570bBf74761b960Fa04Cc10fe2c4e86FfDA36",
		chainId: 1,
		decimals: 8,
		name: "StashPay",
		symbol: "STP"
	},
	{
		address: "0x3Fb8D8A28AFf053CcF446BC075eEcb7a0Ef65D0c",
		chainId: 1,
		decimals: 18,
		name: "StarPlay",
		symbol: "STPC"
	},
	{
		address: "0x9b5C2BE869a19e84BDBcb1386dAD83a2ec8DAe82",
		chainId: 1,
		decimals: 18,
		name: "Stream Protocol",
		symbol: "STPL"
	},
	{
		address: "0xDe7D85157d9714EADf595045CC12Ca4A5f3E2aDb",
		chainId: 1,
		decimals: 18,
		name: "STP Network",
		symbol: "STPT"
	},
	{
		address: "0x5c3a228510D246b78a3765C20221Cbf3082b44a4",
		chainId: 1,
		decimals: 18,
		name: "Storiqa",
		symbol: "STQ"
	},
	{
		address: "0xBAE235823D7255D9D48635cEd4735227244Cd583",
		chainId: 1,
		decimals: 18,
		name: "Staker",
		symbol: "STR"
	},
	{
		address: "0x426567F78e74577f8a6233B635970eb729631e05",
		chainId: 1,
		decimals: 18,
		name: "Staker Token",
		symbol: "STR"
	},
	{
		address: "0x84Bb947fcEdba6B9C7DCEad42dF07e113bb03007",
		chainId: 1,
		decimals: 18,
		name: "Stater",
		symbol: "STR"
	},
	{
		address: "0x46492473755e8dF960F8034877F61732D718CE96",
		chainId: 1,
		decimals: 8,
		name: "STRC",
		symbol: "STRC"
	},
	{
		address: "0x74232704659ef37c08995e386A2E26cc27a8d7B1",
		chainId: 1,
		decimals: 18,
		name: "Strike",
		symbol: "STRK"
	},
	{
		address: "0x90b426067bE0b0FF5De257BC4dd6a4815Ea03b5f",
		chainId: 1,
		decimals: 18,
		name: "Strain",
		symbol: "STRN"
	},
	{
		address: "0x350a6A30C79Df3600C4e0E67DeAb0a64B645e2C2",
		chainId: 1,
		decimals: 18,
		name: "StrongHold",
		symbol: "STRNG"
	},
	{
		address: "0xc2e343118f937F88Ee1FC3150cDc0d6f3D11bBa7",
		chainId: 1,
		decimals: 18,
		name: "Supertron",
		symbol: "STRO"
	},
	{
		address: "0x990f341946A3fdB507aE7e52d17851B87168017c",
		chainId: 1,
		decimals: 18,
		name: "Strong",
		symbol: "STRONG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1A60E2E2A8BE0BC2B6381dd31Fd3fD5F9A28dE4c",
		chainId: 1,
		decimals: 18,
		name: "Synth TRX",
		symbol: "sTRX"
	},
	{
		address: "0xf2E08356588EC5cd9E437552Da87C0076b4970B0",
		chainId: 1,
		decimals: 18,
		name: "Synth TRON",
		symbol: "sTRX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4c14114C107D6374EC31981F5F6Cc27A13e22F9a",
		chainId: 1,
		decimals: 18,
		name: "SBank",
		symbol: "STS"
	},
	{
		address: "0x918dA91Ccbc32B7a6A0cc4eCd5987bbab6E31e6D",
		chainId: 1,
		decimals: 18,
		name: "Synth Tesla",
		symbol: "sTSLA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaC9Bb427953aC7FDDC562ADcA86CF42D988047Fd",
		chainId: 1,
		decimals: 18,
		name: "Scatter cx",
		symbol: "STT"
	},
	{
		address: "0x0371A82e4A9d0A4312f3ee2Ac9c6958512891372",
		chainId: 1,
		decimals: 18,
		name: "bitJob",
		symbol: "STU"
	},
	{
		address: "0x226e390751A2e22449D611bAC83bD267F2A2CAfF",
		chainId: 1,
		decimals: 18,
		name: "STVKE",
		symbol: "STV"
	},
	{
		address: "0x006BeA43Baa3f7A6f765F14f10A1a1b08334EF45",
		chainId: 1,
		decimals: 18,
		name: "Stox",
		symbol: "STX"
	},
	{
		address: "0x0C63cAE5fcC2Ca3dDE60a35e50362220651eBEc8",
		chainId: 1,
		decimals: 8,
		name: "stakedXEM",
		symbol: "STXEM"
	},
	{
		address: "0x8F5E78888f8933Ed676a62bB6B58a4b279aBE408",
		chainId: 1,
		decimals: 6,
		name: "stakedXYM",
		symbol: "STXYM"
	},
	{
		address: "0x31B595e7cfDB624D10A3E7A562eD98c3567e3865",
		chainId: 1,
		decimals: 8,
		name: "StakedZEN",
		symbol: "STZEN"
	},
	{
		address: "0xE9e3F9cfc1A64DFca53614a0182CFAD56c10624F",
		chainId: 1,
		decimals: 0,
		name: "Su Squares",
		symbol: "SU"
	},
	{
		address: "0x8D75959f1E61EC2571aa72798237101F084DE63a",
		chainId: 1,
		decimals: 18,
		name: "Substratum",
		symbol: "SUB",
		extensions: {
			color: "#e53431",
			isVerified: true
		}
	},
	{
		address: "0x0763fdCCF1aE541A5961815C0872A8c5Bc6DE4d7",
		chainId: 1,
		decimals: 18,
		name: "SUKU",
		symbol: "SUKU"
	},
	{
		address: "0x043C308BB8a5aE96D0093444be7f56459F1340b1",
		chainId: 1,
		decimals: 18,
		name: "SumSwap",
		symbol: "SUM"
	},
	{
		address: "0x7CC61e3aE6360e923e9296C802382ec7c9dD3652",
		chainId: 1,
		decimals: 8,
		name: "SUN",
		symbol: "SUN"
	},
	{
		address: "0x692aCCdD8b86692427E0aa4752AE917Df01CC56F",
		chainId: 1,
		decimals: 18,
		name: "Sunrise",
		symbol: "SUNC"
	},
	{
		address: "0xbDbf245c690d54b67C6e610A28486A2C6dE08bE6",
		chainId: 1,
		decimals: 18,
		name: "Sunder Goverance To",
		symbol: "SUNDER"
	},
	{
		address: "0x30635297E450b930f8693297eBa160D9e6c8eBcf",
		chainId: 1,
		decimals: 18,
		name: "Synth Uniswap",
		symbol: "sUNI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4a22A69E45AB29F9F7276B0267797474DAf1F27c",
		chainId: 1,
		decimals: 18,
		name: "SUNI",
		symbol: "SUNI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x47935Edfb3CDd358C50F6c0Add1Cc24662e30F5f",
		chainId: 1,
		decimals: 6,
		name: "SUP8EME",
		symbol: "SUP8EME"
	},
	{
		address: "0xe53EC727dbDEB9E2d5456c3be40cFF031AB40A55",
		chainId: 1,
		decimals: 18,
		name: "SuperFarm",
		symbol: "SUPER",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0563DCe613D559a47877fFD1593549fb9d3510D6",
		chainId: 1,
		decimals: 18,
		name: "SuperBid",
		symbol: "SUPERBID"
	},
	{
		address: "0x868ab6C9E560Ff70584b9770d1Bd1b961AD09d82",
		chainId: 1,
		decimals: 8,
		name: "Super Trip Chain",
		symbol: "SUPT"
	},
	{
		address: "0xe120c1ECBfdFeA7F0A8f0Ee30063491E8c26fedf",
		chainId: 1,
		decimals: 8,
		name: "Suretly",
		symbol: "SUR"
	},
	{
		address: "0xcb86c6A22CB56B6cf40CaFEDb06BA0DF188a416E",
		chainId: 1,
		decimals: 18,
		name: "inSure DeFi",
		symbol: "SURE"
	},
	{
		address: "0xEa319e87Cf06203DAe107Dd8E5672175e3Ee976c",
		chainId: 1,
		decimals: 18,
		name: "Surf Finance",
		symbol: "SURF"
	},
	{
		address: "0x46d473a0B3eEEc9F55FADE641bC576d5bc0b2246",
		chainId: 1,
		decimals: 8,
		name: "SurfExUtilityToken",
		symbol: "SURF"
	},
	{
		address: "0x289e9a4674663decEE54f781AaDE5327304A32f8",
		chainId: 1,
		decimals: 18,
		name: "Synth USD",
		symbol: "sUSD"
	},
	{
		address: "0x57Ab1E02fEE23774580C119740129eAC7081e9D3",
		chainId: 1,
		decimals: 18,
		name: "USD Synth (sUSD)",
		symbol: "sUSD"
	},
	{
		address: "0x57Ab1ec28D129707052df4dF418D58a2D46d5f51",
		chainId: 1,
		decimals: 18,
		name: "Synthetix USD",
		symbol: "sUSD",
		extensions: {
			color: "#25292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x6B3595068778DD592e39A122f4f5a5cF09C90fE2",
		chainId: 1,
		decimals: 18,
		name: "Sushi",
		symbol: "SUSHI",
		extensions: {
			color: "#d65892",
			isVerified: true
		}
	},
	{
		address: "0xAA2ce7Ae64066175E0B90497CE7d9c190c315DB4",
		chainId: 1,
		decimals: 18,
		name: "Suterusu",
		symbol: "SUTER"
	},
	{
		address: "0x676a32B50e58924eFfad343F1d4d3C8dD0128889",
		chainId: 1,
		decimals: 18,
		name: "7Plus Coin",
		symbol: "SV7"
	},
	{
		address: "0x64EA2c6104F1CF3035E28Be0f781B6286d50934D",
		chainId: 1,
		decimals: 18,
		name: "Satoshivision Coin",
		symbol: "SVC"
	},
	{
		address: "0x9CEc686ba6f07D6135B2091140c795166Ef5b761",
		chainId: 1,
		decimals: 18,
		name: "GivingToServices",
		symbol: "SVCS"
	},
	{
		address: "0xbdEB4b83251Fb146687fa19D1C660F99411eefe3",
		chainId: 1,
		decimals: 18,
		name: "savedroid",
		symbol: "SVD"
	},
	{
		address: "0xFFC97142863e9B2583588e3705e2322eF0369635",
		chainId: 1,
		decimals: 18,
		name: "Surge Token",
		symbol: "SVG"
	},
	{
		address: "0x7ca62545a380e7d71F8F5CFa14B9211002075930",
		chainId: 1,
		decimals: 18,
		name: "GivingToServices SV",
		symbol: "SVS"
	},
	{
		address: "0xc434b27736A6882D33094d34792999702860a13C",
		chainId: 1,
		decimals: 9,
		name: "Savix",
		symbol: "SVX"
	},
	{
		address: "0x03B155AF3F4459193A276395dD76e357BB472DA1",
		chainId: 1,
		decimals: 18,
		name: "Swace",
		symbol: "SWACE"
	},
	{
		address: "0x87eDfFDe3E14c7a66c9b9724747a1C5696b742e6",
		chainId: 1,
		decimals: 18,
		name: "SWAG Finance",
		symbol: "SWAG"
	},
	{
		address: "0xa19A40FbD7375431fAB013a4B08F00871B9a2791",
		chainId: 1,
		decimals: 4,
		name: "SWAGG",
		symbol: "SWAGG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC958e9FB59724f8b0927426a8836F1158F0d03cf",
		chainId: 1,
		decimals: 18,
		name: "SWAPS.NETWORK",
		symbol: "SWAP"
	},
	{
		address: "0xCC4304A31d09258b0029eA7FE63d032f52e44EFe",
		chainId: 1,
		decimals: 18,
		name: "TrustSwap Token",
		symbol: "SWAP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8CB924583681cbFE487A62140a994A49F833c244",
		chainId: 1,
		decimals: 18,
		name: "Swapp",
		symbol: "SWAPP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc0F1728d9513EFC316D0E93A0758c992f88b0809",
		chainId: 1,
		decimals: 8,
		name: "SWTCoin",
		symbol: "SWAT"
	},
	{
		address: "0xADF8B8050639b6236915f7516d69dE714672F0bF",
		chainId: 1,
		decimals: 18,
		name: "Scanetchain",
		symbol: "SWC"
	},
	{
		address: "0xBa21Ef4c9f433Ede00badEFcC2754B8E74bd538A",
		chainId: 1,
		decimals: 18,
		name: "Swapfolio",
		symbol: "SWFL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0bb217E40F8a5Cb79Adf04E1aAb60E5abd0dfC1e",
		chainId: 1,
		decimals: 8,
		name: "SWFTCOIN",
		symbol: "SWFTC"
	},
	{
		address: "0x92eF4FFBfe0Df030837b65d7FcCFE1ABd6549579",
		chainId: 1,
		decimals: 18,
		name: "Swirge",
		symbol: "SWG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8287C7b963b405b7B8D467DB9d79eEC40625b13A",
		chainId: 1,
		decimals: 18,
		name: "Swingby",
		symbol: "SWINGBY"
	},
	{
		address: "0x13D71cfC90A83CD1cC0E59675c3F4b90d4162a8B",
		chainId: 1,
		decimals: 8,
		name: "SWIPE Network",
		symbol: "SWIPE"
	},
	{
		address: "0x48C3399719B582dD63eB5AADf12A40B4C3f52FA2",
		chainId: 1,
		decimals: 18,
		name: "StakeWise",
		symbol: "SWISE"
	},
	{
		address: "0x692eb773E0b5B7A79EFac5A015C8b36A2577F65c",
		chainId: 1,
		decimals: 18,
		name: "swiss finance",
		symbol: "SWISS"
	},
	{
		address: "0x9e88613418cF03dCa54D6a2cf6Ad934A78C7A17A",
		chainId: 1,
		decimals: 18,
		name: "Swarm Fund Token",
		symbol: "SWM"
	},
	{
		address: "0x3505F494c3f0fed0B594E01Fa41Dd3967645ca39",
		chainId: 1,
		decimals: 18,
		name: "Swarm Network",
		symbol: "SWM"
	},
	{
		address: "0xB8BAa0e4287890a5F79863aB62b7F175ceCbD433",
		chainId: 1,
		decimals: 18,
		name: "Swerve",
		symbol: "SWRV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3ac2AB91dDF57e2385089202Ca221C360CED0062",
		chainId: 1,
		decimals: 18,
		name: "SwapShip",
		symbol: "SWSH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB9e7F8568e08d5659f5D29C4997173d84CdF2607",
		chainId: 1,
		decimals: 18,
		name: "Swarm City",
		symbol: "SWT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB4371dA53140417CBb3362055374B10D97e420bB",
		chainId: 1,
		decimals: 8,
		name: "Switcheo",
		symbol: "SWTH"
	},
	{
		address: "0x77C6E4a580c0dCE4E5c7a17d0bc077188a83A059",
		chainId: 1,
		decimals: 18,
		name: "Swerve fi USD",
		symbol: "SWUSD"
	},
	{
		address: "0xA1248c718d52752b2cC257eeb0eBa900408dAeB8",
		chainId: 1,
		decimals: 18,
		name: "SWYFT",
		symbol: "SWYFTT"
	},
	{
		address: "0x99fE3B1391503A1bC1788051347A1324bff41452",
		chainId: 1,
		decimals: 18,
		name: "SX Network",
		symbol: "SX"
	},
	{
		address: "0x3A412043939d9F7e53373b64f858ecB870a92E50",
		chainId: 1,
		decimals: 18,
		name: "Synth XAG",
		symbol: "sXAG"
	},
	{
		address: "0x6A22e5e94388464181578Aa7A6B869e00fE27846",
		chainId: 1,
		decimals: 18,
		name: "Synth Silver Ounce",
		symbol: "sXAG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4d96b67f5BDe58A622D9bF2B8a1906C8B084fAf4",
		chainId: 1,
		decimals: 18,
		name: "Synth XAU",
		symbol: "sXAU"
	},
	{
		address: "0x261EfCdD24CeA98652B9700800a13DfBca4103fF",
		chainId: 1,
		decimals: 18,
		name: "Synth Gold Ounce",
		symbol: "sXAU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6A48BA795e3289b9151036E189e352e3eE2c7798",
		chainId: 1,
		decimals: 18,
		name: "SXC Token",
		symbol: "SXC"
	},
	{
		address: "0x12B306fA98F4CbB8d4457FdFf3a0A0a56f07cCdf",
		chainId: 1,
		decimals: 18,
		name: "Spectre ai Dividend",
		symbol: "SXDT"
	},
	{
		address: "0x5299d6F7472DCc137D7f3C4BcfBBB514BaBF341A",
		chainId: 1,
		decimals: 18,
		name: "Synth Monero",
		symbol: "sXMR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8CE9137d39326AD0cD6491fb5CC0CbA0e089b6A9",
		chainId: 1,
		decimals: 18,
		name: "Swipe",
		symbol: "SXP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xfCdaE8771F8d28E3B9027AB58F4A20749767a097",
		chainId: 1,
		decimals: 8,
		name: "SecureXR",
		symbol: "SXR"
	},
	{
		address: "0xC64CdA66Bc1d026b984D6BEE6aDBf71eAc8A099d",
		chainId: 1,
		decimals: 18,
		name: "Synth XRP",
		symbol: "sXRP"
	},
	{
		address: "0xa2B0fDe6D710e201d0d608e924A484d1A5fEd57c",
		chainId: 1,
		decimals: 18,
		name: "Synth Ripple",
		symbol: "sXRP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe109da5361299eD96D91146B8Cc12F682D21964e",
		chainId: 1,
		decimals: 18,
		name: "Synth XTZ",
		symbol: "sXTZ"
	},
	{
		address: "0x2e59005c5c0f0a4D77CcA82653d48b46322EE5Cd",
		chainId: 1,
		decimals: 18,
		name: "Synth Tezos",
		symbol: "sXTZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF45B14ddaBF0F0e275E215b94dD24Ae013a27F12",
		chainId: 1,
		decimals: 18,
		name: "sXTZ",
		symbol: "SXTZ"
	},
	{
		address: "0x2C82c73d5B34AA015989462b2948cd616a37641F",
		chainId: 1,
		decimals: 18,
		name: "Spectre ai Utility",
		symbol: "SXUT"
	},
	{
		address: "0xeF31Cb88048416E301Fee1eA13e7664b887BA7e8",
		chainId: 1,
		decimals: 18,
		name: "Staked yAxis",
		symbol: "sYAX"
	},
	{
		address: "0x69428BB4272e3181dE9E3caB461e19b0131855c8",
		chainId: 1,
		decimals: 8,
		name: "SYBC Coin",
		symbol: "SYBC"
	},
	{
		address: "0xE49214e4c92dc9bcb3B56C1309aFE0D626dD730E",
		chainId: 1,
		decimals: 18,
		name: "SynchroLife",
		symbol: "SYC"
	},
	{
		address: "0x992058B7DB08F9734d84485bfbC243C4ee6954A7",
		chainId: 1,
		decimals: 18,
		name: "Synth yearn.finance",
		symbol: "sYFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x322124122DF407b0d0D902cB713B3714FB2e2E1F",
		chainId: 1,
		decimals: 9,
		name: "Soft Yearn",
		symbol: "SYFI"
	},
	{
		address: "0x8282df223AC402d04B2097d16f758Af4F70e7Db0",
		chainId: 1,
		decimals: 18,
		name: "YFLink Synthetic",
		symbol: "SYFL"
	},
	{
		address: "0xf293d23BF2CDc05411Ca0edDD588eb1977e8dcd4",
		chainId: 1,
		decimals: 18,
		name: "Sylo",
		symbol: "SYLO"
	},
	{
		address: "0x2fd61567c29E7ADB4Ca17e60E1f4a3Fcfe68aCb8",
		chainId: 1,
		decimals: 18,
		name: "SymVerse",
		symbol: "SYM"
	},
	{
		address: "0x10B123FdDde003243199aaD03522065dC05827A0",
		chainId: 1,
		decimals: 18,
		name: "Synapse",
		symbol: "SYN"
	},
	{
		address: "0x1695936d6a953df699C38CA21c2140d497C08BD9",
		chainId: 1,
		decimals: 18,
		name: "SynLev",
		symbol: "SYN"
	},
	{
		address: "0xB6ff96B8A8d214544Ca0dBc9B33f7AD6503eFD32",
		chainId: 1,
		decimals: 18,
		name: "Sync Network",
		symbol: "SYNC"
	},
	{
		address: "0x3A0D746B3EA1d8ccDf19aD915913BD68391133Ca",
		chainId: 1,
		decimals: 8,
		name: "SyscoinToken",
		symbol: "SYSX"
	},
	{
		address: "0x6086b52Cab4522b4B0E8aF9C3b2c5b8994C36ba6",
		chainId: 1,
		decimals: 18,
		name: "ShuttleOne",
		symbol: "SZO"
	},
	{
		address: "0xBe5D345d05dD62828ed61519eF9F7aF76F092248",
		chainId: 1,
		decimals: 18,
		name: "Ticket2Lambo",
		symbol: "T2L"
	},
	{
		address: "0xE7775A6e9Bcf904eb39DA2b68c5efb4F9360e08C",
		chainId: 1,
		decimals: 6,
		name: "Token-as-a-Service",
		symbol: "TAAS"
	},
	{
		address: "0xca694eb79eF355eA0999485d211E68F39aE98493",
		chainId: 1,
		decimals: 8,
		name: "Traceability Chain",
		symbol: "TAC"
	},
	{
		address: "0xDeeB6091A5ADc78fA0332BEE5A38a8908b6b566e",
		chainId: 1,
		decimals: 18,
		name: "Taekwondo Access Cr",
		symbol: "TAC"
	},
	{
		address: "0x00D1793D7C3aAE506257Ba985b34C76AaF642557",
		chainId: 1,
		decimals: 18,
		name: "Tacos",
		symbol: "TACO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x41C028a4C1F461eBFC3af91619b240004ebAD216",
		chainId: 1,
		decimals: 18,
		name: "TacoToken",
		symbol: "TACO"
	},
	{
		address: "0x9f7229aF0c4b9740e207Ea283b9094983f78ba04",
		chainId: 1,
		decimals: 18,
		name: "Tadpole",
		symbol: "TAD"
	},
	{
		address: "0xcC4aE94372da236E9b113132E0C46C68704246b9",
		chainId: 1,
		decimals: 18,
		name: "Tagcoin ERC 20",
		symbol: "TAG"
	},
	{
		address: "0x13dB9034C9CA6cb739887288fcE790544a476f8c",
		chainId: 1,
		decimals: 9,
		name: "Taiyo",
		symbol: "TAIYO"
	},
	{
		address: "0x1D4cCC31dAB6EA20f461d329a0562C1c58412515",
		chainId: 1,
		decimals: 18,
		name: "Talao",
		symbol: "TALAO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2C36204a0712A2a50E54A62F7c4F01867e78cB53",
		chainId: 1,
		decimals: 18,
		name: "Taklimakan Network",
		symbol: "TAN"
	},
	{
		address: "0x182F4c4C97cd1c24E1Df8FC4c053E5C47bf53Bef",
		chainId: 1,
		decimals: 18,
		name: "keyTango",
		symbol: "TANGO"
	},
	{
		address: "0x7f1F2D3dFa99678675ECE1C243d3f7bC3746db5D",
		chainId: 1,
		decimals: 18,
		name: "Tapmydata",
		symbol: "TAP"
	},
	{
		address: "0xC567bca531992352166252ea5121e535432E81eD",
		chainId: 1,
		decimals: 8,
		name: "Tartarus",
		symbol: "TAR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF001937650bb4f62b57521824B2c20f5b91bEa05",
		chainId: 1,
		decimals: 18,
		name: "Taraxa",
		symbol: "TARA"
	},
	{
		address: "0x37Ee79E0B44866876de2fB7F416d0443DD5ae481",
		chainId: 1,
		decimals: 18,
		name: "Tatcoin",
		symbol: "TAT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc27A2F05fa577a83BA0fDb4c38443c0718356501",
		chainId: 1,
		decimals: 18,
		name: "Lamden",
		symbol: "TAU",
		extensions: {
			color: "#7b346e",
			isVerified: true
		}
	},
	{
		address: "0x00006100F7090010005F1bd7aE6122c3C2CF0090",
		chainId: 1,
		decimals: 18,
		name: "TrueAUD",
		symbol: "TAUD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x64786063A352b399d44de2875909D1229F120eBE",
		chainId: 1,
		decimals: 18,
		name: "TAUR",
		symbol: "TAUR"
	},
	{
		address: "0xdd690D8824c00C84d64606FFb12640e932C1AF56",
		chainId: 1,
		decimals: 8,
		name: "Tavittcoin",
		symbol: "TAVITT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4A7AdCB083fE5E3d6b58EDc3d260e2E61668e7a2",
		chainId: 1,
		decimals: 18,
		name: "Trade Butler Bot",
		symbol: "TBB"
	},
	{
		address: "0x627974847450C45b60B3Fe3598f4e6E4cf945B9a",
		chainId: 1,
		decimals: 18,
		name: "ThunderBoltCoin",
		symbol: "TBC"
	},
	{
		address: "0xa1eD0364D53394209D61aE8bfdb8Ff50484D8c91",
		chainId: 1,
		decimals: 18,
		name: "TeraBlock",
		symbol: "TBC"
	},
	{
		address: "0xFACCD5Fc83c3E4C3c1AC1EF35D15adf06bCF209C",
		chainId: 1,
		decimals: 8,
		name: "TBC2",
		symbol: "TBC2"
	},
	{
		address: "0x391612E67b0252E0d1e1460501b41545931fAEF9",
		chainId: 1,
		decimals: 18,
		name: "TheBridge",
		symbol: "TBG"
	},
	{
		address: "0xAFe60511341a37488de25Bef351952562E31fCc1",
		chainId: 1,
		decimals: 8,
		name: "TBitBot",
		symbol: "TBT"
	},
	{
		address: "0x8dAEBADE922dF735c38C80C7eBD708Af50815fAa",
		chainId: 1,
		decimals: 18,
		name: "tBTC",
		symbol: "TBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3A92bD396aEf82af98EbC0Aa9030D25a23B11C6b",
		chainId: 1,
		decimals: 18,
		name: "Tokenbox",
		symbol: "TBX"
	},
	{
		address: "0xfA0eF5E034CaE1AE752d59bdb8aDcDe37Ed7aB97",
		chainId: 1,
		decimals: 18,
		name: "TangguoTao Token",
		symbol: "TCA"
	},
	{
		address: "0x00000100F2A2bd000715001920eB70D229700085",
		chainId: 1,
		decimals: 18,
		name: "TrueCAD",
		symbol: "TCAD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x16c52CeeCE2ed57dAd87319D91B5e3637d50aFa4",
		chainId: 1,
		decimals: 18,
		name: "Total Crypto Market",
		symbol: "TCAP"
	},
	{
		address: "0x7510D6fac98A6eCa2DB7c9357619715a7f5049d4",
		chainId: 1,
		decimals: 18,
		name: "Holistic BTC Set",
		symbol: "TCAPBTCUSDC"
	},
	{
		address: "0x8e4dBF540Bf814c044785218B58C930B20a56BE1",
		chainId: 1,
		decimals: 18,
		name: "Holistic ETH Set",
		symbol: "TCAPETHDAI"
	},
	{
		address: "0x7051620d11042c4335069AaA4f10Cd3B4290C681",
		chainId: 1,
		decimals: 8,
		name: "TCASH",
		symbol: "TCASH"
	},
	{
		address: "0xaff84e86d72EDb971341a6A66eb2dA209446FA14",
		chainId: 1,
		decimals: 18,
		name: "The Currency Analytics",
		symbol: "TCAT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x36dCffe069a3F2878Fab2A46D81e83D462d0cBF7",
		chainId: 1,
		decimals: 18,
		name: "Tcbcoin",
		symbol: "TCFX"
	},
	{
		address: "0x9972A0F24194447E73a7e8b6CD26a52e02DDfAD5",
		chainId: 1,
		decimals: 0,
		name: "Thorecash  ERC 20",
		symbol: "TCH"
	},
	{
		address: "0xCd475371E39c0d94e82FCCc9dD0ea710D0dc0C0B",
		chainId: 1,
		decimals: 18,
		name: "THECASH",
		symbol: "TCH"
	},
	{
		address: "0x9B39A0B97319a9bd5fed217c1dB7b030453bac91",
		chainId: 1,
		decimals: 18,
		name: "TigerCash",
		symbol: "TCH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x28d7F432d24ba6020d1cbD4f28BEDc5a82F24320",
		chainId: 1,
		decimals: 18,
		name: "Tercet Network",
		symbol: "TCNX"
	},
	{
		address: "0x00ff902d4B2bfDBD0DB38887412447C30B565aa0",
		chainId: 1,
		decimals: 18,
		name: "Tcoin fun",
		symbol: "TCO"
	},
	{
		address: "0x7A3D5d49D64E57DBd6FBB21dF7202bD3EE7A2253",
		chainId: 1,
		decimals: 18,
		name: "Tornado Core",
		symbol: "TCORE"
	},
	{
		address: "0x06576eB3B212d605B797dC15523d9Dc9F4F66DB4",
		chainId: 1,
		decimals: 18,
		name: "The Crypto Propheci",
		symbol: "TCP"
	},
	{
		address: "0x331A4589516EAE384eA5F557853AF6aF73B9534e",
		chainId: 1,
		decimals: 18,
		name: "Token CashPay",
		symbol: "TCP"
	},
	{
		address: "0xE38B72d6595FD3885d1D2F770aa23E94757F91a1",
		chainId: 1,
		decimals: 8,
		name: "TecraCoin",
		symbol: "TCR"
	},
	{
		address: "0x9910f4AeD4A7550A4120ad7da8dF8b56E91197Fa",
		chainId: 1,
		decimals: 0,
		name: "TradeCloud Security Token",
		symbol: "TCST"
	},
	{
		address: "0xED82730312babb41367E060911F798002FFA445F",
		chainId: 1,
		decimals: 18,
		name: "The Crypto Tech",
		symbol: "TCT"
	},
	{
		address: "0x4824A7b64E3966B0133f4f4FFB1b9D6bEb75FFF7",
		chainId: 1,
		decimals: 18,
		name: "TokenClub",
		symbol: "TCT"
	},
	{
		address: "0x2a1dbabe65c595B0022e75208C34014139d5d357",
		chainId: 1,
		decimals: 18,
		name: "TrustedHealth",
		symbol: "TDH"
	},
	{
		address: "0x5b11aAcB6Bddb9ffab908FDCE739Bf4aed554327",
		chainId: 1,
		decimals: 18,
		name: "TrueDeck",
		symbol: "TDP"
	},
	{
		address: "0x6295Ab2BE04A617747481B292c390BfcA592Cf28",
		chainId: 1,
		decimals: 18,
		name: "TokenDesk",
		symbol: "TDS"
	},
	{
		address: "0x5dCEd3c2fab61E21B25177c6050D3f166f696110",
		chainId: 1,
		decimals: 18,
		name: "Tea Token",
		symbol: "TEA"
	},
	{
		address: "0x1c79ab32C66aCAa1e9E81952B8AAa581B43e54E7",
		chainId: 1,
		decimals: 4,
		name: "TEAM",
		symbol: "TEAM"
	},
	{
		address: "0xb05AF453011d7ad68a92b0065FFD9d1277eD2741",
		chainId: 1,
		decimals: 18,
		name: "Team Finance",
		symbol: "TEAM"
	},
	{
		address: "0x38d58B82cB24A3e0410a7991f255174c9FD8093b",
		chainId: 1,
		decimals: 0,
		name: "TEAL",
		symbol: "TEAT"
	},
	{
		address: "0xA1BA7186eeC1Be5114b0Cf49b95B23aDC4131B51",
		chainId: 1,
		decimals: 10,
		name: "FTI NEWS Token",
		symbol: "TECH"
	},
	{
		address: "0x85e076361cc813A908Ff672F9BAd1541474402b2",
		chainId: 1,
		decimals: 2,
		name: "Telcoin",
		symbol: "TEL"
	},
	{
		address: "0xEc32A9725C59855d841ba7d8D9c99c84ff754688",
		chainId: 1,
		decimals: 18,
		name: "Meditel",
		symbol: "TEL"
	},
	{
		address: "0x467Bccd9d29f223BcE8043b84E8C8B282827790F",
		chainId: 1,
		decimals: 2,
		name: "Telcoin",
		symbol: "TEL",
		extensions: {
			color: "#14c8ff",
			isVerified: true
		}
	},
	{
		address: "0xDD16eC0F66E54d453e6756713E533355989040E4",
		chainId: 1,
		decimals: 18,
		name: "Tokenomy",
		symbol: "TEN",
		extensions: {
			color: "#0899cd",
			isVerified: true
		}
	},
	{
		address: "0x74159651A992952e2bF340D7628459aA4593fc05",
		chainId: 1,
		decimals: 18,
		name: "Tenet",
		symbol: "TEN"
	},
	{
		address: "0x1453Dbb8A29551ADe11D89825CA812e05317EAEB",
		chainId: 1,
		decimals: 18,
		name: "Tendies Token",
		symbol: "TEND",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x52662717e448be36Cb54588499D5A8328BD95292",
		chainId: 1,
		decimals: 18,
		name: "Tenshi v2",
		symbol: "TENSHI"
	},
	{
		address: "0x9358e3a79D428c7708da22a5bd085159F6818D12",
		chainId: 1,
		decimals: 9,
		name: "Tenshi",
		symbol: "TENSHI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x515bA0a2E286AF10115284F151cF398688A69170",
		chainId: 1,
		decimals: 18,
		name: "TENX",
		symbol: "TENX"
	},
	{
		address: "0x2E65E12b5f0fD1D58738c6F38dA7D57F5F183d1c",
		chainId: 1,
		decimals: 8,
		name: "Tepleton",
		symbol: "TEP"
	},
	{
		address: "0xfF69e48af1174Da7F15D0c771861c33d3f19eD8a",
		chainId: 1,
		decimals: 9,
		name: "TESLA INU",
		symbol: "TESINU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2d5Bed63B0fE325Ed3B865Ae2cdAa3649eB25461",
		chainId: 1,
		decimals: 18,
		name: "Teslafan",
		symbol: "TESLF"
	},
	{
		address: "0x4057Db5bD9f67A566aA10E5587b1a964afFc6a16",
		chainId: 1,
		decimals: 18,
		name: "Truefeedback Token",
		symbol: "TFBX"
	},
	{
		address: "0x8694EE05B45c9fE1058CE532de8dbCf1d84A4154",
		chainId: 1,
		decimals: 5,
		name: "Treasure Financial",
		symbol: "TFC"
	},
	{
		address: "0xE5F166c0D8872B68790061317BB6CcA04582C912",
		chainId: 1,
		decimals: 18,
		name: "TE-FOOD",
		symbol: "TFD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x666a64F5567c3145fbA7CA9EF73648Cd4fA2008F",
		chainId: 1,
		decimals: 8,
		name: "Energoncoin",
		symbol: "TFG1"
	},
	{
		address: "0xa7f976C360ebBeD4465c2855684D1AAE5271eFa9",
		chainId: 1,
		decimals: 8,
		name: "TrueFlip",
		symbol: "TFL"
	},
	{
		address: "0xaeF4F02E31CdbF007f8D98da4aE365188A0E9eCC",
		chainId: 1,
		decimals: 8,
		name: "The Famous Token",
		symbol: "TFT"
	},
	{
		address: "0xF8e06E4e4A80287FDCa5b02dcCecAa9D0954840F",
		chainId: 1,
		decimals: 18,
		name: "Truegame",
		symbol: "TGAME"
	},
	{
		address: "0x00000000441378008EA67F4284A57932B1c000a5",
		chainId: 1,
		decimals: 18,
		name: "TrueGBP",
		symbol: "TGBP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x375A08cE3a460F20BbaFd282Be1E3579a2c31F41",
		chainId: 1,
		decimals: 18,
		name: "Thaler Group Compan",
		symbol: "TGCO"
	},
	{
		address: "0xAc3Da587eac229C9896D919aBC235CA4Fd7f72c1",
		chainId: 1,
		decimals: 1,
		name: "Target Coin",
		symbol: "TGT"
	},
	{
		address: "0xf96AA656eC0E0Ac163590DB372B430Cf3C0d61cA",
		chainId: 1,
		decimals: 18,
		name: "Twogap Token",
		symbol: "TGT"
	},
	{
		address: "0x96c30D5499EF6eA96A9c221Bc18BC39D29c97F27",
		chainId: 1,
		decimals: 18,
		name: "Thar token",
		symbol: "Thar"
	},
	{
		address: "0xB4a677B0E363c3815d46326954a4E4d2B1ACe357",
		chainId: 1,
		decimals: 18,
		name: "THENODE",
		symbol: "THE"
	},
	{
		address: "0x3883f5e181fccaF8410FA61e12b59BAd963fb645",
		chainId: 1,
		decimals: 18,
		name: "Theta Token",
		symbol: "THETA"
	},
	{
		address: "0x3204DcdE0C50b7b2E606587663a0Fe2EE8DFb6Bf",
		chainId: 1,
		decimals: 0,
		name: "Thore Exchange Toke",
		symbol: "THEX"
	},
	{
		address: "0xb526FD41360c98929006f3bDcBd16d55dE4b0069",
		chainId: 1,
		decimals: 18,
		name: "Thirm Protocol",
		symbol: "THIRM"
	},
	{
		address: "0x0000852600CEB001E08e00bC008be620d60031F2",
		chainId: 1,
		decimals: 18,
		name: "TrueHKD",
		symbol: "THKD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2E95Cea14dd384429EB3c4331B776c4CFBB6FCD9",
		chainId: 1,
		decimals: 18,
		name: "Throne",
		symbol: "THN"
	},
	{
		address: "0x9F58702Ef19ebEB76363884362439a8691E3f033",
		chainId: 1,
		decimals: 4,
		name: "HELIO POWER TOKEN",
		symbol: "THPT"
	},
	{
		address: "0x1Cb3209D45B2a60B7fBCA1cCDBF87f674237A4aa",
		chainId: 1,
		decimals: 4,
		name: "ThoreCoin",
		symbol: "THR"
	},
	{
		address: "0x35A735B7D1d811887966656855F870c05fD0A86D",
		chainId: 1,
		decimals: 18,
		name: "Thorncoin",
		symbol: "THRN"
	},
	{
		address: "0x4f27053F32edA8Af84956437Bc00e5fFa7003287",
		chainId: 1,
		decimals: 18,
		name: "Thrive",
		symbol: "THRT"
	},
	{
		address: "0xfe7B915A0bAA0E79f85c5553266513F7C1c03Ed0",
		chainId: 1,
		decimals: 18,
		name: "THUG",
		symbol: "THUG"
	},
	{
		address: "0x43a89815F33747eDBeCC588d6BB7E1c10dDa5599",
		chainId: 1,
		decimals: 18,
		name: "Thunder",
		symbol: "THUN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf08c68bD5f4194d994FD70726746Bf529eE5a617",
		chainId: 1,
		decimals: 0,
		name: "Thorenext",
		symbol: "THX"
	},
	{
		address: "0xA98ED1fD277EaD2c00D143Cbe1465F59E65A0066",
		chainId: 1,
		decimals: 18,
		name: "Thx",
		symbol: "THX"
	},
	{
		address: "0x614b9802D45Aa1bC2282651dC1408632F9027A6e",
		chainId: 1,
		decimals: 18,
		name: "Trust Invest",
		symbol: "TIC"
	},
	{
		address: "0x72430A612Adc007c50e3b6946dBb1Bb0fd3101D1",
		chainId: 1,
		decimals: 8,
		name: "Thingschain",
		symbol: "TIC"
	},
	{
		address: "0x7F4B2A690605A7cbb66F7AA6885EbD906a5e2E9E",
		chainId: 1,
		decimals: 8,
		name: "Topinvestmentcoin",
		symbol: "TICO"
	},
	{
		address: "0xa5dB1d6F7A0D5Bccc17d0bFD39D7AF32d5E5EDc6",
		chainId: 1,
		decimals: 5,
		name: "Topinvestmentcoin",
		symbol: "TICO"
	},
	{
		address: "0x36B60a425b82483004487aBc7aDcb0002918FC56",
		chainId: 1,
		decimals: 8,
		name: "TICOEX Token  Forme",
		symbol: "TICO"
	},
	{
		address: "0x29CbD0510EEc0327992CD6006e63F9Fa8E7f33B7",
		chainId: 1,
		decimals: 18,
		name: "Tidal Finance",
		symbol: "TIDAL"
	},
	{
		address: "0x999967E2Ec8A74B7c8E9dB19E039d920B31d39D0",
		chainId: 1,
		decimals: 18,
		name: "Ties DB",
		symbol: "TIE"
	},
	{
		address: "0xEee2d00Eb7DEB8Dd6924187f5AA3496B7d06E62A",
		chainId: 1,
		decimals: 18,
		name: "Tigereum",
		symbol: "TIG"
	},
	{
		address: "0x749826F1041CAF0Ea856a4b3578Ba327B18335F8",
		chainId: 1,
		decimals: 18,
		name: "TIG Token",
		symbol: "TIG"
	},
	{
		address: "0x6531f133e6DeeBe7F2dcE5A0441aA7ef330B4e53",
		chainId: 1,
		decimals: 8,
		name: "Chronobank TIME",
		symbol: "TIME"
	},
	{
		address: "0xA54C67bd320Da4F9725a6f585b7635a0c09B122e",
		chainId: 1,
		decimals: 6,
		name: "TimeMiner",
		symbol: "TIME",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x485d17A6f1B8780392d53D64751824253011A260",
		chainId: 1,
		decimals: 8,
		name: "chrono tech",
		symbol: "TIME"
	},
	{
		address: "0xd1B183f425F7E6A0C83aB1cd84cFDE2d84Ba049d",
		chainId: 1,
		decimals: 4,
		name: "Tingles",
		symbol: "TING",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x47FA4B26c1c52Bc35654F98D10Cd61b9f3E10267",
		chainId: 1,
		decimals: 9,
		name: "TinkuCoin",
		symbol: "TINKU"
	},
	{
		address: "0x2d0E64B6bF13660a4c0De42a0B88144a7C10991F",
		chainId: 1,
		decimals: 9,
		name: "Tom Inu",
		symbol: "TINU"
	},
	{
		address: "0x80BC5512561c7f85A3A9508c7df7901b370Fa1DF",
		chainId: 1,
		decimals: 18,
		name: "TIO",
		symbol: "TIO"
	},
	{
		address: "0xd947b0ceab2A8885866B9A04A06AE99DE852a3d4",
		chainId: 1,
		decimals: 18,
		name: "Trade Token X",
		symbol: "TIOX"
	},
	{
		address: "0x07dE533cBC72395C32eB8981DDccD2CC6a6E1c4E",
		chainId: 1,
		decimals: 18,
		name: "Technology Innovati",
		symbol: "TIP"
	},
	{
		address: "0x3A8cCCB969a61532d1E6005e2CE12C200caeCe87",
		chainId: 1,
		decimals: 18,
		name: "TitanSwap",
		symbol: "TITAN"
	},
	{
		address: "0xEa1f346faF023F974Eb5adaf088BbCdf02d761F4",
		chainId: 1,
		decimals: 18,
		name: "Blocktix",
		symbol: "TIX"
	},
	{
		address: "0xdaE1Baf249964bc4b6aC98c3122f0e3E785fd279",
		chainId: 1,
		decimals: 18,
		name: "Tokia",
		symbol: "TKA"
	},
	{
		address: "0x24E89bDf2f65326b94E36978A7EDeAc63623DAFA",
		chainId: 1,
		decimals: 18,
		name: "Tiger King",
		symbol: "TKING"
	},
	{
		address: "0xda23d301761E4e2bF474951f978f6DFB6F3C9F14",
		chainId: 1,
		decimals: 9,
		name: "Tsuki Inu",
		symbol: "TKINU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0675DAa94725A528b05A3A88635C03EA964BFA7E",
		chainId: 1,
		decimals: 18,
		name: "Taklimakan Network",
		symbol: "TKLN"
	},
	{
		address: "0x2b5016CeA1C425f915E13727f7657025de3208Fe",
		chainId: 1,
		decimals: 18,
		name: "Tokemon",
		symbol: "TKMN"
	},
	{
		address: "0xaAAf91D9b90dF800Df4F55c205fd6989c977E73a",
		chainId: 1,
		decimals: 8,
		name: "Monolith",
		symbol: "TKN",
		extensions: {
			color: "#25292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xbcE7BD79558dda90B261506768f265c5543A9f90",
		chainId: 1,
		decimals: 18,
		name: "TKN Token",
		symbol: "TKNT"
	},
	{
		address: "0xd31695a1d35E489252CE57b129FD4b1B05E6AcaC",
		chainId: 1,
		decimals: 18,
		name: "TOKPIE",
		symbol: "TKP"
	},
	{
		address: "0xB45a50545bEEAB73F38F31E5973768C421805E5E",
		chainId: 1,
		decimals: 18,
		name: "TKRToken",
		symbol: "TKR"
	},
	{
		address: "0x667102BD3413bFEaa3Dffb48fa8288819E480a88",
		chainId: 1,
		decimals: 8,
		name: "Tokenize Xchange",
		symbol: "TKX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x058Ef0Ba85E053e55d357C8A95BC6Ea7458Def8a",
		chainId: 1,
		decimals: 18,
		name: "TradeKax",
		symbol: "TKX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x888888848B652B3E3a0f34c96E00EEC0F3a23F72",
		chainId: 1,
		decimals: 4,
		name: "Alien Worlds",
		symbol: "TLM"
	},
	{
		address: "0x679131F591B4f369acB8cd8c51E68596806c3916",
		chainId: 1,
		decimals: 18,
		name: "Trustlines Network",
		symbol: "TLN"
	},
	{
		address: "0x9f300B4aC0Bf94cAD77e7E2d3F850352b8Bb264c",
		chainId: 1,
		decimals: 8,
		name: "Talent Coin",
		symbol: "TLNT"
	},
	{
		address: "0x7825e833D495F3d1c28872415a4aee339D26AC88",
		chainId: 1,
		decimals: 18,
		name: "Telos",
		symbol: "TLOS"
	},
	{
		address: "0x4AFAdB32b8fdB334cF9f20AFb476A06c1F5b111A",
		chainId: 1,
		decimals: 8,
		name: "TLS Token",
		symbol: "TLS"
	},
	{
		address: "0x06f3CDabae564B0546529b4DD8FeF1bcD4235753",
		chainId: 1,
		decimals: 8,
		name: "TilWiki",
		symbol: "TLW"
	},
	{
		address: "0xb3616550aBc8AF79c7A5902DEF9Efa3bC9A95200",
		chainId: 1,
		decimals: 8,
		name: "Telex",
		symbol: "TLX"
	},
	{
		address: "0xe13559cf6eDf84bD04bf679e251f285000B9305E",
		chainId: 1,
		decimals: 18,
		name: "TMC NiftyGotchi",
		symbol: "TMC"
	},
	{
		address: "0x1c153BADb7e54AbcdCB65f0A09fCd6f10dE36aA3",
		chainId: 1,
		decimals: 18,
		name: "TMC",
		symbol: "TMC"
	},
	{
		address: "0x5D45AA01b73c971c65f3DF409c9b3627b8FE2726",
		chainId: 1,
		decimals: 18,
		name: "Timecoin Protocol",
		symbol: "TMCN"
	},
	{
		address: "0x6E742E29395Cf5736c358538f0f1372AB3dFE731",
		chainId: 1,
		decimals: 18,
		name: "TAMA EGG NiftyGotch",
		symbol: "TME"
	},
	{
		address: "0xd32641191578Ea9b208125dDD4EC5E7B84FcaB4C",
		chainId: 1,
		decimals: 18,
		name: "MDsquare",
		symbol: "TMED"
	},
	{
		address: "0x901fe080Ee18383BF5494049538F1bca155F4d0b",
		chainId: 1,
		decimals: 18,
		name: "TrusMarketHub Token",
		symbol: "TMH"
	},
	{
		address: "0x3209f98BeBF0149B769ce26D71F7aEA8E435EfEa",
		chainId: 1,
		decimals: 18,
		name: "Traxia",
		symbol: "TMT"
	},
	{
		address: "0x6F02055E3541DD74A1aBD8692116c22fFAFaDc5D",
		chainId: 1,
		decimals: 18,
		name: "The Mart Token",
		symbol: "TMT"
	},
	{
		address: "0xB9cB7905981198ADd8059114B3b7dc7042B52f7b",
		chainId: 1,
		decimals: 18,
		name: "Tamy Token",
		symbol: "TMT"
	},
	{
		address: "0x10086399DD8c1e3De736724AF52587a2044c9fA2",
		chainId: 1,
		decimals: 18,
		name: "TMTG",
		symbol: "TMTG"
	},
	{
		address: "0x5abFd418AdB35e89c68313574eB16BdfFc15e607",
		chainId: 1,
		decimals: 18,
		name: "Timvi",
		symbol: "TMV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF7920B0768Ecb20A123fAc32311d07D193381d6f",
		chainId: 1,
		decimals: 18,
		name: "Time New Bank",
		symbol: "TNB"
	},
	{
		address: "0x39e743fEE400a5D9b36f1167B70C10e8F06440E5",
		chainId: 1,
		decimals: 18,
		name: "TNC Coin",
		symbol: "TNC"
	},
	{
		address: "0xa5a2Af22EAc6f050227d844B108c2B2A011FD329",
		chainId: 1,
		decimals: 9,
		name: "Tunnel Protocol",
		symbol: "TNI"
	},
	{
		address: "0xAD6683b7f3618c44F5CA6040902812Dd890DdE4d",
		chainId: 1,
		decimals: 18,
		name: "Tnos Coin",
		symbol: "TNO"
	},
	{
		address: "0xb0280743b44bF7db4B6bE482b2Ba7b75E5dA096C",
		chainId: 1,
		decimals: 18,
		name: "Transcodium",
		symbol: "TNS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x08f5a9235B08173b7569F83645d2c7fB55e8cCD8",
		chainId: 1,
		decimals: 8,
		name: "Tierion",
		symbol: "TNT",
		extensions: {
			color: "#ff4081",
			isVerified: true
		}
	},
	{
		address: "0x7777770f8A6632ff043c8833310e245EBa9209E6",
		chainId: 1,
		decimals: 18,
		name: "Tokens of Babel",
		symbol: "TOB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x549905519F9E06D55D7dfCD4D54817780F6b93e8",
		chainId: 1,
		decimals: 18,
		name: "TouchCon",
		symbol: "TOC"
	},
	{
		address: "0x9a49f02e128a8E989b443a8f94843C0918BF45E7",
		chainId: 1,
		decimals: 8,
		name: "Tokok",
		symbol: "TOK"
	},
	{
		address: "0x4Fb721eF3Bf99e0f2c193847afA296b9257d3C30",
		chainId: 1,
		decimals: 8,
		name: "Tokenplace",
		symbol: "TOK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2e9d63788249371f1DFC918a52f8d799F4a38C94",
		chainId: 1,
		decimals: 18,
		name: "Tokemak",
		symbol: "TOKE"
	},
	{
		address: "0x3B73c1B2ea59835cbfcADade5462b6aB630D9890",
		chainId: 1,
		decimals: 18,
		name: "ChainSwap.com Governance Token",
		symbol: "TOKEN"
	},
	{
		address: "0xa0F0546Eb5E3eE7e8cfC5DA12e5949F3AE622675",
		chainId: 1,
		decimals: 18,
		name: "Tokoin",
		symbol: "TOKO"
	},
	{
		address: "0xd07D9Fe2d2cc067015E2b4917D24933804f42cFA",
		chainId: 1,
		decimals: 18,
		name: "Tolar",
		symbol: "TOL"
	},
	{
		address: "0xF7970499814654CD13Cb7B6E7634A12a7A8A9ABc",
		chainId: 1,
		decimals: 18,
		name: "TOM Finance",
		symbol: "TOM"
	},
	{
		address: "0x82bd290afa5cC1b75F46822fEC415E2be51D7D46",
		chainId: 1,
		decimals: 18,
		name: "TomatoToken",
		symbol: "TOMATO"
	},
	{
		address: "0x8b353021189375591723E7384262F45709A3C3dC",
		chainId: 1,
		decimals: 18,
		name: "Tomocoin",
		symbol: "TOMO"
	},
	{
		address: "0xa38920C00D1a5303dB538A3Ea08da7a779e1F751",
		chainId: 1,
		decimals: 18,
		name: "3X Long TomoChain T",
		symbol: "TOMOBULL"
	},
	{
		address: "0x05D3606d5c81EB9b7B18530995eC9B29da05FaBa",
		chainId: 1,
		decimals: 18,
		name: "TomoChain ERC-20",
		symbol: "TOMOE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6a6c2adA3Ce053561C2FbC3eE211F23d9b8C520a",
		chainId: 1,
		decimals: 18,
		name: "TONToken",
		symbol: "TON"
	},
	{
		address: "0x2be5e8c109e2197D077D13A82dAead6a9b3433C5",
		chainId: 1,
		decimals: 18,
		name: "Tokamak Network",
		symbol: "TON"
	},
	{
		address: "0x2Ab6Bb8408ca3199B8Fa6C92d5b455F820Af03c4",
		chainId: 1,
		decimals: 18,
		name: "TE FOOD",
		symbol: "TONE"
	},
	{
		address: "0x8eb965ee9cCFBCE76c0a06264492c0afEfc2826d",
		chainId: 1,
		decimals: 18,
		name: "ToorCoin",
		symbol: "TOOR"
	},
	{
		address: "0xdcD85914b8aE28c1E62f1C488E1D968D5aaFfE2b",
		chainId: 1,
		decimals: 18,
		name: "TOP Network",
		symbol: "TOP"
	},
	{
		address: "0x0EBD5eC91680d3B0CEDbb1d5BB61851154D3eDb6",
		chainId: 1,
		decimals: 18,
		name: "Token of Power",
		symbol: "TOP"
	},
	{
		address: "0xF6317DD9B04097a9E7B016cd23DCAa7CfE19D9c6",
		chainId: 1,
		decimals: 18,
		name: "TOPBTC Token",
		symbol: "TOPB"
	},
	{
		address: "0x1b6C5864375b34aF3Ff5Bd2E5f40Bc425B4a8D79",
		chainId: 1,
		decimals: 6,
		name: "TopChain",
		symbol: "TOPC"
	},
	{
		address: "0xc57bAa24F72037C21f9c0d345BB6F19f47407447",
		chainId: 1,
		decimals: 18,
		name: "TOPDOG Vault  NFTX",
		symbol: "TOPDOG"
	},
	{
		address: "0x4f5f2EEA4ED3485E5e23a39704d5fD9d0A423886",
		chainId: 1,
		decimals: 18,
		name: "Torchain",
		symbol: "TOR"
	},
	{
		address: "0x9ea20fBFAA44efBc60C6728fCdBA17f01b7E04FE",
		chainId: 1,
		decimals: 8,
		name: "Torex",
		symbol: "TOR"
	},
	{
		address: "0xCfa0885131F602D11D4DA248D2c65A62063567A9",
		chainId: 1,
		decimals: 18,
		name: "TORG",
		symbol: "TORG"
	},
	{
		address: "0xc71E20E54ADfC415f79bF0A8F11122917920050E",
		chainId: 1,
		decimals: 18,
		name: "Storichain Token",
		symbol: "TORI"
	},
	{
		address: "0x77777FeDdddFfC19Ff86DB637967013e6C6A116C",
		chainId: 1,
		decimals: 18,
		name: "Tornado Cash",
		symbol: "TORN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x406ae253Fb0aa898F9912fB192c1e6dEb9623A07",
		chainId: 1,
		decimals: 18,
		name: "TOROCUS Token",
		symbol: "TOROCUS"
	},
	{
		address: "0xFb5a551374B656C6e39787B1D3A03fEAb7f3a98E",
		chainId: 1,
		decimals: 18,
		name: "ThingsOperatingSyst",
		symbol: "TOS"
	},
	{
		address: "0xF136D7b0B7AE5b86D21E7B78DFA95375a7360f19",
		chainId: 1,
		decimals: 18,
		name: "Toshimon",
		symbol: "TOSHI"
	},
	{
		address: "0x1b9Aa0b63e0F025CD544E4d350ed81429b43b724",
		chainId: 1,
		decimals: 18,
		name: "TOSHIMON Vault  NFT",
		symbol: "TOSHIMON"
	},
	{
		address: "0x6FF1BFa14A57594a5874B37ff6AC5efbD9F9599A",
		chainId: 1,
		decimals: 18,
		name: "TotemFi",
		symbol: "TOTM"
	},
	{
		address: "0xe3278DF3eB2085bA9B6899812A99a10f9CA5E0Df",
		chainId: 1,
		decimals: 8,
		name: "Tourist Token",
		symbol: "TOTO"
	},
	{
		address: "0x1C9922314ED1415c95b9FD453c3818fd41867d0B",
		chainId: 1,
		decimals: 18,
		name: "Tower",
		symbol: "TOWER"
	},
	{
		address: "0x29239242A83479a4074Cb1c9e2A3e6705A4A4455",
		chainId: 1,
		decimals: 18,
		name: "Tozex",
		symbol: "TOZ"
	},
	{
		address: "0x4161725D019690a3E0de50f6bE67b07a86A9fAe1",
		chainId: 1,
		decimals: 4,
		name: "Token Pocket",
		symbol: "TPT"
	},
	{
		address: "0xaA7a9CA87d3694B5755f213B5D04094b8d0F0A6F",
		chainId: 1,
		decimals: 18,
		name: "OriginTrail",
		symbol: "TRAC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb09aD98524780228D2df4f34AA665D9Dbb9999E4",
		chainId: 1,
		decimals: 18,
		name: "Tradcoin",
		symbol: "TRAD"
	},
	{
		address: "0x40E45890dff79e7D533797d964E64a2C0121F49a",
		chainId: 1,
		decimals: 7,
		name: "Smart Trade Coin",
		symbol: "TRADE"
	},
	{
		address: "0x6F87D756DAf0503d08Eb8993686c7Fc01Dc44fB1",
		chainId: 1,
		decimals: 18,
		name: "UniTrade",
		symbol: "TRADE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6e5970DBd6fc7eb1f29C6D2eDF2bC4c36124C0C1",
		chainId: 1,
		decimals: 18,
		name: "Polytrade",
		symbol: "TRADE"
	},
	{
		address: "0x12759512D326303B45f1ceC8F7B6fd96F387778E",
		chainId: 1,
		decimals: 18,
		name: "TrakInvest",
		symbol: "TRAK"
	},
	{
		address: "0xE225AcA29524bB65fd82C79a9602f3b4F9c6Fe3f",
		chainId: 1,
		decimals: 5,
		name: "Tratok",
		symbol: "TRAT"
	},
	{
		address: "0x901F8679a6EF435d533732f5eA49bb82d568BE99",
		chainId: 1,
		decimals: 18,
		name: "Trebit Network",
		symbol: "TRB"
	},
	{
		address: "0x88dF592F8eb5D7Bd38bFeF7dEb0fBc02cf3778a0",
		chainId: 1,
		decimals: 18,
		name: "Tellor",
		symbol: "TRB"
	},
	{
		address: "0x0Ba45A8b5d5575935B8158a88C631E9F9C95a2e5",
		chainId: 1,
		decimals: 18,
		name: "Tellor Tributes",
		symbol: "TRB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7031AB87DCC46818806EC07aF46fa8c2aD2A2BFC",
		chainId: 1,
		decimals: 18,
		name: "Tribute",
		symbol: "TRBT"
	},
	{
		address: "0xcB3F902bf97626391bF8bA87264bbC3DC13469be",
		chainId: 1,
		decimals: 18,
		name: "The Real Coin",
		symbol: "TRC"
	},
	{
		address: "0xdB52a87cda28EdA00f8aDd1C79c9DB4a50a70457",
		chainId: 1,
		decimals: 18,
		name: "Trader Cash",
		symbol: "TRC"
	},
	{
		address: "0x0a9d68886a0D7Db83a30ec00d62512483e5Ad437",
		chainId: 1,
		decimals: 0,
		name: "Treecle",
		symbol: "TRCL"
	},
	{
		address: "0x566Fd7999B1Fc3988022bD38507A48F0bCf22c77",
		chainId: 1,
		decimals: 18,
		name: "The Real Coin",
		symbol: "TRCN"
	},
	{
		address: "0x30ceCB5461A449A90081F5a5F55db4e048397BAB",
		chainId: 1,
		decimals: 8,
		name: "Tracto",
		symbol: "TRCT"
	},
	{
		address: "0x92a42Db88Ed0F02c71D439e55962Ca7CAB0168b5",
		chainId: 1,
		decimals: 9,
		name: "Tardigrades Finance",
		symbol: "TRDG"
	},
	{
		address: "0x33f90Dee07c6E8B9682dD20F73E6C358B2ED0f03",
		chainId: 1,
		decimals: 0,
		name: "Trident Group",
		symbol: "TRDT"
	},
	{
		address: "0xc299004a310303D1C0005Cb14c70ccC02863924d",
		chainId: 1,
		decimals: 9,
		name: "Trinity Protocol",
		symbol: "TRI"
	},
	{
		address: "0x3A856d4effa670C54585a5D523e96513e148e95d",
		chainId: 1,
		decimals: 18,
		name: "Trias Token",
		symbol: "TRIAS"
	},
	{
		address: "0xe09216F1d343Dd39D6Aa732a08036fee48555Af0",
		chainId: 1,
		decimals: 18,
		name: "Contribute",
		symbol: "TRIB"
	},
	{
		address: "0xc7283b66Eb1EB5FB86327f08e1B5816b0720212B",
		chainId: 1,
		decimals: 18,
		name: "Tribe",
		symbol: "TRIBE",
		extensions: {
			color: "#178DD0",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x8B40761142B9aa6dc8964e61D0585995425C3D94",
		chainId: 1,
		decimals: 18,
		name: "Tripio",
		symbol: "TRIO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaE2FaB175D20B7aFA56f3bb32500b26Dc62BF572",
		chainId: 1,
		decimals: 18,
		name: "Tripedia",
		symbol: "TRIP"
	},
	{
		address: "0x1350Fbe8Ce27762ec19134bf8FC405a427fe9Bf1",
		chainId: 1,
		decimals: 18,
		name: "TRIPS",
		symbol: "TRIPS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x56b4F8C39E07D4d5D91692acf9d0F6d4d3493763",
		chainId: 1,
		decimals: 18,
		name: "Trism",
		symbol: "TRISM"
	},
	{
		address: "0x056354F3Ff20743aa4c0DA365603871c7000b081",
		chainId: 1,
		decimals: 18,
		name: "TriumphX",
		symbol: "TRIX"
	},
	{
		address: "0x70968FEAF13299d0dBf78f66860bAb9DbE3856bc",
		chainId: 1,
		decimals: 18,
		name: "Treelion",
		symbol: "TRN"
	},
	{
		address: "0xc3dD23A0a854b4f9aE80670f528094E9Eb607CCb",
		chainId: 1,
		decimals: 18,
		name: "Trendering",
		symbol: "TRND",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2eC75589856562646afE393455986CaD26c4Cc5f",
		chainId: 1,
		decimals: 18,
		name: "Interop",
		symbol: "TROP"
	},
	{
		address: "0x9B1E1FC958B83e801d1342F9f9BA7dA3A55bA1eF",
		chainId: 1,
		decimals: 8,
		name: "Tronipay",
		symbol: "TRP"
	},
	{
		address: "0x490e3f4af13e1616EC97A8C6600c1061a8D0253e",
		chainId: 1,
		decimals: 18,
		name: "Terran Coin",
		symbol: "TRR"
	},
	{
		address: "0xCb94be6f13A1182E4A4B6140cb7bf2025d28e41B",
		chainId: 1,
		decimals: 6,
		name: "WeTrust",
		symbol: "TRST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x32054526df40FBB08b733Abe256A8d21De58432D",
		chainId: 1,
		decimals: 18,
		name: "Taurus Chain",
		symbol: "TRT"
	},
	{
		address: "0x4C19596f5aAfF459fA38B0f7eD92F11AE6543784",
		chainId: 1,
		decimals: 8,
		name: "TrustToken",
		symbol: "TRU"
	},
	{
		address: "0xf65B5C5104c4faFD4b709d9D60a185eAE063276c",
		chainId: 1,
		decimals: 18,
		name: "Truebit Protocol",
		symbol: "TRU"
	},
	{
		address: "0xDD436a0Dce9244B36599AE7b22f0373b4e33992d",
		chainId: 1,
		decimals: 18,
		name: "TrustUSD",
		symbol: "TRUSD"
	},
	{
		address: "0x57700244B20f84799a31c6C96DadFF373ca9D6c5",
		chainId: 1,
		decimals: 18,
		name: "TrustDAO",
		symbol: "TRUST"
	},
	{
		address: "0x72955eCFf76E48F2C8AbCCe11d54e5734D6f3657",
		chainId: 1,
		decimals: 18,
		name: "TrustVerse",
		symbol: "TRV"
	},
	{
		address: "0xf230b790E05390FC8295F4d3F60332c93BEd42e2",
		chainId: 1,
		decimals: 6,
		name: "Tron Lab Token",
		symbol: "TRX"
	},
	{
		address: "0x86807Da5B92d31F67E128771CAcb85F3579646eA",
		chainId: 1,
		decimals: 18,
		name: "3X Short TRX Token",
		symbol: "TRXBEAR"
	},
	{
		address: "0xc175E77b04F2341517334Ea3Ed0b198A01A97383",
		chainId: 1,
		decimals: 18,
		name: "3X Long TRX Token",
		symbol: "TRXBULL"
	},
	{
		address: "0xaD5Fe5B0B8eC8fF4565204990E4405B2Da117d8e",
		chainId: 1,
		decimals: 0,
		name: "TronClassic",
		symbol: "TRXC"
	},
	{
		address: "0xe58C8dF0088Cf27b26C7D546A9835deAcC29496c",
		chainId: 1,
		decimals: 18,
		name: "1X Short TRX Token",
		symbol: "TRXHEDGE"
	},
	{
		address: "0xc12eCeE46ed65D970EE5C899FCC7AE133AfF9b03",
		chainId: 1,
		decimals: 18,
		name: "Try Finance",
		symbol: "TRY"
	},
	{
		address: "0x2C537E5624e4af88A7ae4060C022609376C8D0EB",
		chainId: 1,
		decimals: 6,
		name: "BiLira",
		symbol: "TRYB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA5dDFCA8B837cCD0cf80fe6C24E2A9018FB50dbA",
		chainId: 1,
		decimals: 18,
		name: "3X Short BiLira Tok",
		symbol: "TRYBBEAR"
	},
	{
		address: "0xc7038cCf60E48C5b7119E55566A6aD9f2D66C7c2",
		chainId: 1,
		decimals: 18,
		name: "3X Long BiLira Toke",
		symbol: "TRYBBULL"
	},
	{
		address: "0x4846239FDF4D4C1AEB26729fa064B0205acA90e1",
		chainId: 1,
		decimals: 18,
		name: "True Seigniorage Do",
		symbol: "TSD"
	},
	{
		address: "0x525794473F7ab5715C81d06d10f52d11cC052804",
		chainId: 1,
		decimals: 18,
		name: "12Ships",
		symbol: "TSHP"
	},
	{
		address: "0x03806Ce5ef69Bd9780EDFb04c29da1F23Db96294",
		chainId: 1,
		decimals: 18,
		name: "Tesla Token",
		symbol: "TSL"
	},
	{
		address: "0x110FE5f21C1EDd4F03a6e0DE0D96D0c2eED0B9CC",
		chainId: 1,
		decimals: 18,
		name: "Tessla Coin",
		symbol: "TSLA"
	},
	{
		address: "0x58959E0C71080434f237bD42d07Cd84B74CeF438",
		chainId: 1,
		decimals: 5,
		name: "Tesra",
		symbol: "TSR"
	},
	{
		address: "0xD9baE39c725A1864b1133Ad0eF1640d02f79B78c",
		chainId: 1,
		decimals: 18,
		name: "Touch Social",
		symbol: "TST"
	},
	{
		address: "0x6B87999bE87358065bBdE41e8a0fe0B7b1cd2514",
		chainId: 1,
		decimals: 18,
		name: "TeslaWatt",
		symbol: "TSW"
	},
	{
		address: "0x734C90044a0bA31B3F2e640c10dC5d3540499Bfd",
		chainId: 1,
		decimals: 18,
		name: "TradeStars",
		symbol: "TSX"
	},
	{
		address: "0xEcacaB6725aC1711d97E55DF35d525b863B8B9f7",
		chainId: 1,
		decimals: 17,
		name: "Trillion",
		symbol: "TT"
	},
	{
		address: "0xaaB606817809841E8b1168be8779Eeaf6744Ef64",
		chainId: 1,
		decimals: 18,
		name: "Tend Token",
		symbol: "TTA"
	},
	{
		address: "0x9389434852b94bbaD4c8AfEd5B7BDBc5Ff0c2275",
		chainId: 1,
		decimals: 18,
		name: "TTC Protocol",
		symbol: "TTC"
	},
	{
		address: "0xaFf4ABDc75f07387401ba9bC0f75EBe4c734B4c9",
		chainId: 1,
		decimals: 18,
		name: "TheTimesChainCoin",
		symbol: "TTC"
	},
	{
		address: "0x714B1fDed61090a6C49Eb0B4D088B8e5EBd64e61",
		chainId: 1,
		decimals: 18,
		name: "To The Moon",
		symbol: "TTM"
	},
	{
		address: "0x2494a68C1484376fEf880b4c24D91f049d29B02A",
		chainId: 1,
		decimals: 18,
		name: "The Transfer Token",
		symbol: "TTT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9F599410D207f3D2828a8712e5e543AC2E040382",
		chainId: 1,
		decimals: 18,
		name: "Tapcoin",
		symbol: "TTT"
	},
	{
		address: "0x9CDa8A60dd5AfA156c95Bd974428d91a0812e054",
		chainId: 1,
		decimals: 18,
		name: "TaTaTu",
		symbol: "TTU"
	},
	{
		address: "0xa838be6E4b760E6061D4732D6B9F11Bf578f9A76",
		chainId: 1,
		decimals: 18,
		name: "TV-TWO: Token for Television",
		symbol: "TTV"
	},
	{
		address: "0xeF2e239b21A81719abAabC6239e2e90859B44D9B",
		chainId: 1,
		decimals: 18,
		name: "Talent Token",
		symbol: "TTX"
	},
	{
		address: "0xd1766A85B0d6F81185782dC07F15326d63C3cBaa",
		chainId: 1,
		decimals: 18,
		name: "TokenTuber",
		symbol: "TUBER"
	},
	{
		address: "0x5E3002dff591C5e75Bb9DEdae268049742E6b13a",
		chainId: 1,
		decimals: 8,
		name: "Tutor s Diary",
		symbol: "TUDA"
	},
	{
		address: "0xB5943c96B28570D63512DDa2069045B304994dAF",
		chainId: 1,
		decimals: 18,
		name: "Tugz",
		symbol: "TUGZ"
	},
	{
		address: "0x1600c2E08ACB830f2a4eE4d34b48594DAde48651",
		chainId: 1,
		decimals: 18,
		name: "Turex",
		symbol: "TUR"
	},
	{
		address: "0xf3AFDC2525568Ffe743801C8C54bdeA1704c9adb",
		chainId: 1,
		decimals: 18,
		name: "Turtle",
		symbol: "TURTLE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0000000000085d4780B73119b644AE5ecd22b376",
		chainId: 1,
		decimals: 18,
		name: "TrueUSD",
		symbol: "TUSD",
		extensions: {
			color: "#002868",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xd084B83C305daFD76AE3E1b4E1F1fe2eCcCb3988",
		chainId: 1,
		decimals: 18,
		name: "Terra Virtua Kolect",
		symbol: "TVK"
	},
	{
		address: "0x5635ddEaBf9cdDA686995Fe90BEB5411831563FC",
		chainId: 1,
		decimals: 8,
		name: "TravelNote",
		symbol: "TVNT"
	},
	{
		address: "0x98E0438d3eE1404FEA48E38e92853BB08Cfa68bD",
		chainId: 1,
		decimals: 8,
		name: "TVT",
		symbol: "TVT"
	},
	{
		address: "0xa2EF2757D2eD560c9e3758D1946d7bcccBD5A7fe",
		chainId: 1,
		decimals: 18,
		name: "Adventure Token",
		symbol: "TWA"
	},
	{
		address: "0x2b6fF53Fc2493CcD5202D80a6C439741414C5Ff2",
		chainId: 1,
		decimals: 18,
		name: "Tweebaa",
		symbol: "TWEE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xDaD26BCE7dCF59cd03a2455558E4Dd73e1c07B66",
		chainId: 1,
		decimals: 18,
		name: "Trade win",
		symbol: "TWI"
	},
	{
		address: "0x2eF1aB8a26187C58BB8aAeB11B2fC6D25C5c0716",
		chainId: 1,
		decimals: 18,
		name: "The World News",
		symbol: "TWN"
	},
	{
		address: "0xfbd0d1c77B501796A35D86cF91d65D9778EeE695",
		chainId: 1,
		decimals: 3,
		name: "Twinkle",
		symbol: "TWNKL"
	},
	{
		address: "0xc11551BB497875050b69A2FDCCC20A53a9a70263",
		chainId: 1,
		decimals: 18,
		name: "TenXCoin",
		symbol: "TXC"
	},
	{
		address: "0x8eEF5a82E6Aa222a60F009ac18c24EE12dBf4b41",
		chainId: 1,
		decimals: 18,
		name: "Tixl",
		symbol: "TXL"
	},
	{
		address: "0x3A82D3111aB5faF39d847D46023d9090261A658F",
		chainId: 1,
		decimals: 18,
		name: "Tycoon",
		symbol: "TYC"
	},
	{
		address: "0xeaf61FC150CD5c3BeA75744e830D916E60EA5A9F",
		chainId: 1,
		decimals: 4,
		name: "Typerium",
		symbol: "TYPE"
	},
	{
		address: "0x614FD8F06cE4D93AA2361B342C86554eB5CB39f1",
		chainId: 1,
		decimals: 6,
		name: "Tianya Token",
		symbol: "TYT"
	},
	{
		address: "0x888888877A18532b78d259577d00057054C50Dd8",
		chainId: 1,
		decimals: 18,
		name: "Universal Dollar",
		symbol: "U8D"
	},
	{
		address: "0x822808104E173cB4B21549d8E921Cae9E4F655E9",
		chainId: 1,
		decimals: 9,
		name: "Uni Ape",
		symbol: "UAPE"
	},
	{
		address: "0x17e347aad89B30b96557BCBfBff8a14e75CC88a1",
		chainId: 1,
		decimals: 18,
		name: "Unicly Bored Ape Ya",
		symbol: "UAPE"
	},
	{
		address: "0x44440bD68b5E4B1E0cb810669097e9573175601b",
		chainId: 1,
		decimals: 18,
		name: "Unicly The Day by A",
		symbol: "UARC"
	},
	{
		address: "0xF824402747e5142d04892FDc27C73E6460E80080",
		chainId: 1,
		decimals: 18,
		name: "Unicly ArtBlocks Co",
		symbol: "UARTB"
	},
	{
		address: "0x01C0987E88F778DF6640787226bc96354E1a9766",
		chainId: 1,
		decimals: 18,
		name: "UltrAlpha",
		symbol: "UAT"
	},
	{
		address: "0x68B1CaDb8D5Ab0C97Fe9D9fbE0Eb60acB329Fe3f",
		chainId: 1,
		decimals: 18,
		name: "Unicly Mystic Axies",
		symbol: "UAXIE"
	},
	{
		address: "0x817e2aDdceAA4907623666A7800b1553Ca21192d",
		chainId: 1,
		decimals: 18,
		name: "Unbox Art",
		symbol: "UBA"
	},
	{
		address: "0xcB4b17b9Fa78Bf1faC6D239e5BCe291035750b6c",
		chainId: 1,
		decimals: 18,
		name: "Unicly Beeple Colle",
		symbol: "UBEEPLE"
	},
	{
		address: "0x6704B673c70dE9bF74C8fBa4b4bd748F0e2190E1",
		chainId: 1,
		decimals: 18,
		name: "Ubex",
		symbol: "UBEX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xDd1Ad9A21Ce722C151A836373baBe42c868cE9a4",
		chainId: 1,
		decimals: 18,
		name: "Universal Basic Income",
		symbol: "UBI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb9EcEb9F717852Ad0D936B46155cB0c0f43cBE8E",
		chainId: 1,
		decimals: 18,
		name: "Ubiner",
		symbol: "UBIN"
	},
	{
		address: "0xDB13025b219dB5e4529f48b65Ff009a26B6Ae733",
		chainId: 1,
		decimals: 18,
		name: "Ubricoin",
		symbol: "UBN"
	},
	{
		address: "0x265Ba42daF2D20F3F358a7361D9f69Cb4E28F0E6",
		chainId: 1,
		decimals: 18,
		name: "Unibomb",
		symbol: "UBOMB"
	},
	{
		address: "0x8400D94A5cb0fa0D041a3788e395285d61c9ee5e",
		chainId: 1,
		decimals: 8,
		name: "UniBright",
		symbol: "UBT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6b74Dd5d01f8320081247F5CF1F7a48324700Db6",
		chainId: 1,
		decimals: 8,
		name: "UBU",
		symbol: "UBU"
	},
	{
		address: "0xF5B5eFc906513b4344EbAbCF47A04901f99F09f3",
		chainId: 1,
		decimals: 0,
		name: "UBIX Network",
		symbol: "UBX"
	},
	{
		address: "0x8564653879a18C560E7C0Ea0E084c516C62F5653",
		chainId: 1,
		decimals: 18,
		name: "UpBots",
		symbol: "UBXT"
	},
	{
		address: "0xbaA70614C7AAfB568a93E62a98D55696bcc85DFE",
		chainId: 1,
		decimals: 18,
		name: "Unicap.finance",
		symbol: "UCAP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x92e52a1A235d9A103D970901066CE910AAceFD37",
		chainId: 1,
		decimals: 8,
		name: "U CASH",
		symbol: "UCASH"
	},
	{
		address: "0x2adba23Cf1252dE095aCEd801e758b369EC10426",
		chainId: 1,
		decimals: 8,
		name: "UCBI Banking",
		symbol: "UCBI"
	},
	{
		address: "0x722f97A435278B7383a1e3c47F41773bebF3232C",
		chainId: 1,
		decimals: 18,
		name: "UCROWDME",
		symbol: "UCM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5fb99A3593d7088e44377a1bEb27739Bd928F269",
		chainId: 1,
		decimals: 18,
		name: "Unicly Chris McCann",
		symbol: "UCM"
	},
	{
		address: "0xAAf37055188Feee4869dE63464937e683d61b2a1",
		chainId: 1,
		decimals: 18,
		name: "UChain",
		symbol: "UCN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8a3d77e9d6968b780564936d15B09805827C21fa",
		chainId: 1,
		decimals: 18,
		name: "Uniris",
		symbol: "UCO"
	},
	{
		address: "0xa918897bd10d6DeE614470C24a061b78b021B3a9",
		chainId: 1,
		decimals: 18,
		name: "Universal Coin",
		symbol: "UCOIN"
	},
	{
		address: "0xd8D887B5611a5B3E90bf764085d9858031D2bE67",
		chainId: 1,
		decimals: 18,
		name: "UCOS Token",
		symbol: "UCOS"
	},
	{
		address: "0x6d1DC3928604b00180Bb570BdAe94b9698d33b79",
		chainId: 1,
		decimals: 18,
		name: "UnitedCrowd",
		symbol: "UCT"
	},
	{
		address: "0x3c4bEa627039F0B7e7d21E34bB9C9FE962977518",
		chainId: 1,
		decimals: 18,
		name: "Ubique Chain of Thi",
		symbol: "UCT"
	},
	{
		address: "0x3D3af44cf092a49280e316f09c8f20ecf97BC933",
		chainId: 1,
		decimals: 18,
		name: "UCX",
		symbol: "UCX"
	},
	{
		address: "0xE7cD2C56D3F01f9F8Ae542BA5B2F00cf2cF994b1",
		chainId: 1,
		decimals: 18,
		name: "UCX FOUNDATION",
		symbol: "UCX"
	},
	{
		address: "0x4aD0b81f92B16624BBcF46FC0030cFBBf8d02376",
		chainId: 1,
		decimals: 18,
		name: "Unagii Dai",
		symbol: "UDAI"
	},
	{
		address: "0xea3983Fc6D0fbbC41fb6F6091f68F3e08894dC06",
		chainId: 1,
		decimals: 18,
		name: "Unido",
		symbol: "UDO"
	},
	{
		address: "0x7E6C38D007740931E4B419bF15A68c79a0fb0c66",
		chainId: 1,
		decimals: 18,
		name: "Unicly Doki Doki Co",
		symbol: "UDOKI"
	},
	{
		address: "0x12f649A9E821F90BB143089a6e56846945892ffB",
		chainId: 1,
		decimals: 18,
		name: "Hyprr  Howdoo",
		symbol: "UDOO"
	},
	{
		address: "0x90DE74265a416e1393A450752175AED98fe11517",
		chainId: 1,
		decimals: 18,
		name: "Unlock Protocol",
		symbol: "UDT"
	},
	{
		address: "0xB3dD5dCe850dCa7519E74A943568B69f958df52c",
		chainId: 1,
		decimals: 18,
		name: "UniversalEnergyChai",
		symbol: "UENC"
	},
	{
		address: "0x77607588222e01bf892a29Abab45796A2047fc7b",
		chainId: 1,
		decimals: 18,
		name: "Unagii ETH",
		symbol: "UETH"
	},
	{
		address: "0x40986a85B4cFCDb054A6CBFB1210194fee51af88",
		chainId: 1,
		decimals: 18,
		name: "UniFarm",
		symbol: "UFARM"
	},
	{
		address: "0x995dE3D961b40Ec6CDee0009059D48768ccbdD48",
		chainId: 1,
		decimals: 8,
		name: "Union Fair Coin",
		symbol: "UFC"
	},
	{
		address: "0xcccF837f40D334F8602f031e64B52AD4CD2b6601",
		chainId: 1,
		decimals: 18,
		name: "Unicly Fewocious Co",
		symbol: "UFEWO"
	},
	{
		address: "0x021576770CB3729716CCfb687afdB4c6bF720CB6",
		chainId: 1,
		decimals: 18,
		name: "Unlimited FiscusFYI",
		symbol: "UFFYI"
	},
	{
		address: "0xcDa4e840411C00a614aD9205CAEC807c7458a0E3",
		chainId: 1,
		decimals: 18,
		name: "PureFi",
		symbol: "UFI"
	},
	{
		address: "0x249e38Ea4102D0cf8264d3701f1a0E39C4f2DC3B",
		chainId: 1,
		decimals: 18,
		name: "The Truth",
		symbol: "UFO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEA097A2b1dB00627B2Fa17460Ad260c016016977",
		chainId: 1,
		decimals: 18,
		name: "Upfiring",
		symbol: "UFR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0202Be363B8a4820f3F4DE7FaF5224fF05943AB1",
		chainId: 1,
		decimals: 18,
		name: "UniLend Finance",
		symbol: "UFT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8716Fc5Da009D3A208f0178b637a50F4ef42400F",
		chainId: 1,
		decimals: 18,
		name: "Ultrain",
		symbol: "UGAS"
	},
	{
		address: "0xa6B9d7E3d76cF23549293Fb22c488E0Ea591A44e",
		chainId: 1,
		decimals: 18,
		name: "uGAS JUN21 Token Ex",
		symbol: "UGAS-JUN21"
	},
	{
		address: "0xf485C5E679238f9304D986bb2fC28fE3379200e5",
		chainId: 1,
		decimals: 18,
		name: "ugChain",
		symbol: "UGC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF503BF7a7b0962205668ed041140f4af360304Be",
		chainId: 1,
		decimals: 18,
		name: "Unicly Autoglyphs C",
		symbol: "UGLYPH"
	},
	{
		address: "0xD4f2249dd6c26446F1413f6d97F14fcaa7792545",
		chainId: 1,
		decimals: 18,
		name: "Unicly Genesis Moon",
		symbol: "UGMC"
	},
	{
		address: "0xC9Df0eD2E9eF4357b51DB171FF08297d10875280",
		chainId: 1,
		decimals: 17,
		name: "Unicly Gone Studio",
		symbol: "UGONE"
	},
	{
		address: "0x30C2a84AeD6Db30E31cf4d7059b1836c12c68068",
		chainId: 1,
		decimals: 18,
		name: "Unicly Aavegotchi A",
		symbol: "UGOTCHI"
	},
	{
		address: "0x9135D92e3A34e2A94e4474B74b9DC2d51118eeD5",
		chainId: 1,
		decimals: 18,
		name: "Ulgen Hash Power",
		symbol: "UHP"
	},
	{
		address: "0x4290563C2D7c255B5EEC87f2D3bD10389f991d68",
		chainId: 1,
		decimals: 18,
		name: "UnlimitedIP",
		symbol: "UIP"
	},
	{
		address: "0xa499648fD0e80FD911972BbEb069e4c20e68bF22",
		chainId: 1,
		decimals: 18,
		name: "Jenny Metaverse DAO",
		symbol: "UJENNY"
	},
	{
		address: "0xAFFdb768e5f909b9a6Ed110ad724B5E454670c08",
		chainId: 1,
		decimals: 18,
		name: "Unicly Air Jordan 1",
		symbol: "UJORD"
	},
	{
		address: "0x24692791Bc444c5Cd0b81e3CBCaba4b04Acd1F3B",
		chainId: 1,
		decimals: 18,
		name: "Unikoin Gold",
		symbol: "UKG"
	},
	{
		address: "0xD199A3F8a65fD0C80A47718cB5E2D1C9f3729bC6",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long BAT 2x",
		symbol: "uLBAT2x"
	},
	{
		address: "0xB56f2cE679E1FfBa509EE52e9447A3dD7ABE0ba1",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long BAT 3x",
		symbol: "uLBAT3x"
	},
	{
		address: "0xAA2029789404A29899EC9751614eC4CcB27Ff332",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long BAT 4x",
		symbol: "uLBAT4x"
	},
	{
		address: "0x6368b095a4F4702BF1373A0a2aD029696A2e7695",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long ETH 2x",
		symbol: "uLETH2x"
	},
	{
		address: "0x23187365195E7059FA413B33ab46a465173EB787",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long ETH 3x",
		symbol: "uLETH3x"
	},
	{
		address: "0x1287969821F9160C1aF516Af0ff18db2903386aD",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long ETH 4x",
		symbol: "uLETH4x"
	},
	{
		address: "0xC30FA8484B1c35696c4A8cF7391ee0671592203B",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long KNC 2x",
		symbol: "uLKNC2x"
	},
	{
		address: "0xA679aA830619768e2d8A2365526cedff7ABaC2A3",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long KNC 3x",
		symbol: "uLKNC3x"
	},
	{
		address: "0x19197796a9D890319D86b3f8f0226400b41679fD",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long KNC 4x",
		symbol: "uLKNC4x"
	},
	{
		address: "0x187234E7a0C64dCEF6176a534ef1E9e627D9aDC8",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long REP 2x",
		symbol: "uLREP2x"
	},
	{
		address: "0xF4bFF845C2DD28060CDeacBD21a91cb6D2E7dd4B",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long REP 3x",
		symbol: "uLREP3x"
	},
	{
		address: "0x092eD67828357afC65e8aEc93d434b0217d1850A",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long REP 4x",
		symbol: "uLREP4x"
	},
	{
		address: "0x09617F6fD6cF8A71278ec86e23bBab29C04353a7",
		chainId: 1,
		decimals: 18,
		name: "Shardus",
		symbol: "ULT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE884cc2795b9c45bEeac0607DA9539Fd571cCF85",
		chainId: 1,
		decimals: 18,
		name: "Ultiledger",
		symbol: "ULT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x035bfe6057E15Ea692c0DfdcaB3BB41a64Dd2aD4",
		chainId: 1,
		decimals: 18,
		name: "Universal Liquidity Union",
		symbol: "ULU",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbd408612BACccbF14FF26Ca0dEF859FacC3673bD",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long WBTC 2x",
		symbol: "uLWBTC2x"
	},
	{
		address: "0x431E5f6f3368230b10B732Cef68ACFF62A9727f0",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long WBTC 3x",
		symbol: "uLWBTC3x"
	},
	{
		address: "0x619732bE53BdFB270eE889Cf3DFe6fceE4171261",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long WBTC 4x",
		symbol: "uLWBTC4x"
	},
	{
		address: "0x04B272A21d9a0f0aE0caE2015E9C909596b82a4d",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long ZRX 2x",
		symbol: "uLZRX2x"
	},
	{
		address: "0xb0AE52A539E681B9d0d489FE34abA7A88f981d2e",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long ZRX 3x",
		symbol: "uLZRX3x"
	},
	{
		address: "0x392B9FAE896594586b4e6b080916c6872e74D44F",
		chainId: 1,
		decimals: 6,
		name: "bZx Perpetual Long ZRX 4x",
		symbol: "uLZRX4x"
	},
	{
		address: "0x04Fa0d235C4abf4BcF4787aF4CF447DE572eF828",
		chainId: 1,
		decimals: 18,
		name: "UMA",
		symbol: "UMA",
		extensions: {
			color: "#FF4A4A",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x5872E64C3f93363822D2B1e4717Be3398FDCEA51",
		chainId: 1,
		decimals: 18,
		name: "Unicly Hashmasks Co",
		symbol: "UMASK"
	},
	{
		address: "0x6fC13EACE26590B80cCCAB1ba5d51890577D83B2",
		chainId: 1,
		decimals: 18,
		name: "Umbrella Network",
		symbol: "UMB"
	},
	{
		address: "0xa4bBE66f151B22B167127c770016b15fF97Dd35C",
		chainId: 1,
		decimals: 18,
		name: "Umbria Network",
		symbol: "UMBR"
	},
	{
		address: "0x190fB342aa6a15eB82903323ae78066fF8616746",
		chainId: 1,
		decimals: 6,
		name: "Umbrella Coin",
		symbol: "UMC"
	},
	{
		address: "0x105d97ef2E723f1cfb24519Bc6fF15a6D091a3F1",
		chainId: 1,
		decimals: 4,
		name: "UMKA",
		symbol: "UMKA"
	},
	{
		address: "0x8e5afc69f6227A3ad75eD346c8723Bc62ce97123",
		chainId: 1,
		decimals: 4,
		name: "UMKA",
		symbol: "UMKA"
	},
	{
		address: "0x683239A4caB49642c6E025cF81D283f9c87bC07D",
		chainId: 1,
		decimals: 18,
		name: "Unicly MoonCats Col",
		symbol: "UMOON"
	},
	{
		address: "0x10Be9a8dAe441d276a5027936c3aADEd2d82bC15",
		chainId: 1,
		decimals: 18,
		name: "UniMex Network",
		symbol: "UMX"
	},
	{
		address: "0xD837eCa6C91c67D98461A411BA2f00bdA9960a9D",
		chainId: 1,
		decimals: 8,
		name: "unFederal AAVE",
		symbol: "unAAVE"
	},
	{
		address: "0xf29e46887FFAE92f1ff87DfE39713875Da541373",
		chainId: 1,
		decimals: 18,
		name: "UniCrypt",
		symbol: "UNC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2f4eb47A1b1F4488C71fc10e39a4aa56AF33Dd49",
		chainId: 1,
		decimals: 18,
		name: "UNCL",
		symbol: "UNCL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2d94408F45b2E6Fa9EFfe1068b75116187c4E388",
		chainId: 1,
		decimals: 18,
		name: "Uncle",
		symbol: "UNCLE"
	},
	{
		address: "0xaDB2437e6F65682B85F814fBc12FeC0508A7B1D0",
		chainId: 1,
		decimals: 18,
		name: "UniCrypt",
		symbol: "UNCX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2dbA05B51eF5A7DE3E7c3327201CA2F8a25C2414",
		chainId: 1,
		decimals: 8,
		name: "unFederal DAI",
		symbol: "unDAI"
	},
	{
		address: "0xd03B6ae96CaE26b743A6207DceE7Cbe60a425c70",
		chainId: 1,
		decimals: 18,
		name: "UniDexBot",
		symbol: "UNDB"
	},
	{
		address: "0xA5959E9412d27041194c3c3bcBE855faCE2864F7",
		chainId: 1,
		decimals: 18,
		name: "UniDexGas",
		symbol: "UNDG"
	},
	{
		address: "0xE4cC5A22B39fFB0A56d67F94f9300db20D786a5F",
		chainId: 1,
		decimals: 8,
		name: "unFederal eRSDL",
		symbol: "uneRSDL"
	},
	{
		address: "0xFaCecE87e14B50eafc85C44C01702F5f485CA460",
		chainId: 1,
		decimals: 8,
		name: "unFederal ETH",
		symbol: "unETH"
	},
	{
		address: "0x441761326490cACF7aF299725B6292597EE822c2",
		chainId: 1,
		decimals: 18,
		name: "Unifi Protocol DAO",
		symbol: "UNFI"
	},
	{
		address: "0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984",
		chainId: 1,
		decimals: 18,
		name: "Uniswap",
		symbol: "UNI",
		extensions: {
			color: "#FD017A",
			isRainbowCurated: true,
			isVerified: true,
			shadowColor: "#FDB8DA"
		}
	},
	{
		address: "0x2730d6FdC86C95a74253BefFaA8306B40feDecbb",
		chainId: 1,
		decimals: 8,
		name: "UNICORN Token",
		symbol: "UNI"
	},
	{
		address: "0x701564Aa6E26816147D4fa211a0779F1B774Bb9B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: 0xBitcoin Token",
		symbol: "uni0xBTC"
	},
	{
		address: "0x7cfab87AaC0899c093235b342AC0e5B1ACF159EB",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Aave Interest bearing DAI",
		symbol: "uniaDAI"
	},
	{
		address: "0xE6C198d27a5B71144B40cFa2362ae3166728e0C8",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Amon",
		symbol: "uniAMN"
	},
	{
		address: "0x042dBBDc27F75d277C3D99efE327DB21Bc4fde75",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Ampleforth",
		symbol: "uniAMPL"
	},
	{
		address: "0x077d52B047735976dfdA76feF74d4d988AC25196",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Aragon Network Token",
		symbol: "uniANT"
	},
	{
		address: "0x2E642b8D59B45a1D8c5aEf716A84FF44ea665914",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Basic Attention Token",
		symbol: "uniBAT"
	},
	{
		address: "0x0E6A53B13688018A3df8C69f99aFB19A3068D04f",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Bloom Token",
		symbol: "uniBLT"
	},
	{
		address: "0x87d80DBD37E551F58680B4217b23aF6a752DA83F",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Bancor Network Token",
		symbol: "uniBNT"
	},
	{
		address: "0x94E0BAb2F6Ab1F19F4750E42d7349f2740513aD5",
		chainId: 1,
		decimals: 18,
		name: "Unicly",
		symbol: "UNIC"
	},
	{
		address: "0xF7B5A4b934658025390ff69dB302BC7F2AC4a542",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Crypto20",
		symbol: "uniC20"
	},
	{
		address: "0x34E89740adF97C3A9D3f63Cc2cE4a914382c230b",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Compound Dai",
		symbol: "unicDAI"
	},
	{
		address: "0x1e3740A030AF8c755c888a0ee83aC9E79e09f4F1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: CelerToken",
		symbol: "uniCELR"
	},
	{
		address: "0x6C3942B383bc3d0efd3F36eFa1CBE7C8E12C8A2B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Chai",
		symbol: "uniCHAI"
	},
	{
		address: "0x89205A3A3b2A69De6Dbf7f01ED13B2108B2c43e7",
		chainId: 1,
		decimals: 0,
		name: "Unicorn",
		symbol: "Unicorn"
	},
	{
		address: "0x64c5572E7a100AF9901c148D75d72c619A7f1e9d",
		chainId: 1,
		decimals: 18,
		name: "UniCrapToken xyz",
		symbol: "UNICRAP"
	},
	{
		address: "0x45A2FDfED7F7a2c791fb1bdF6075b83faD821ddE",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Compound Dai",
		symbol: "unicSAI"
	},
	{
		address: "0x1C6c712b1F4a7c263B1DBd8F97fb447c945d3b9a",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Civic",
		symbol: "uniCVC"
	},
	{
		address: "0x2a1530C4C41db0B0b2bB646CB5Eb1A67b7158667",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Dai Stablecoin",
		symbol: "uniDAI"
	},
	{
		address: "0x4F0d6E2179938828CfF93dA40a8BA1Df7519Ca8C",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Streamr DATAcoin",
		symbol: "uniDATA"
	},
	{
		address: "0xD55C1cA9F5992A2e5E379DCe49Abf24294ABe055",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: DigixDAO",
		symbol: "uniDGD"
	},
	{
		address: "0xb92dE8B30584392Af27726D5ce04Ef3c4e5c9924",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Digix Gold Token",
		symbol: "uniDGX"
	},
	{
		address: "0x61792F290e5100FBBcBb2309F03A1Bab869fb850",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Decentralized Insurance Protocol",
		symbol: "uniDIP"
	},
	{
		address: "0xD552119eD44EC8Fa8f87c568769C67Bd02B5b3FB",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Donut",
		symbol: "uniDONUT"
	},
	{
		address: "0x95b3497bBcCcc46a8F45F5Cf54b0878b39f8D96C",
		chainId: 1,
		decimals: 18,
		name: "UniDex",
		symbol: "UNIDX"
	},
	{
		address: "0xb99A23b1a4585fc56d0EC3B76528C27cAd427473",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Enjin Coin",
		symbol: "uniENJ"
	},
	{
		address: "0x5e7907aC70b9a781365c72F2acEE96710bdA042e",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: SAINT FAME: Genesis Shirt",
		symbol: "uniFAME"
	},
	{
		address: "0x0eF3b2024ae079e6dBC2b37435cE30d2731F0101",
		chainId: 1,
		decimals: 18,
		name: "UNIFI DeFi",
		symbol: "UNIFI"
	},
	{
		address: "0x9E78b8274e1D6a76a0dBbf90418894DF27cBCEb5",
		chainId: 1,
		decimals: 18,
		name: "Covenants",
		symbol: "UNIFI"
	},
	{
		address: "0xf79cb3BEA83BD502737586A6E8B133c378FD1fF2",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: FOAM Token",
		symbol: "uniFOAM"
	},
	{
		address: "0x60a87cC7Fca7E53867facB79DA73181B1bB4238B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: FunFair",
		symbol: "uniFUN"
	},
	{
		address: "0x26Cc0EAb6Cb650B0Db4D0d0dA8cB5BF69F4ad692",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: DAOstack",
		symbol: "uniGEN"
	},
	{
		address: "0xe8e45431b93215566BA923a7E611B7342Ea954DF",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Gnosis Token",
		symbol: "uniGNO"
	},
	{
		address: "0x4B17685b330307C751B47f33890c8398dF4Fe407",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: GRID Token",
		symbol: "uniGRID"
	},
	{
		address: "0x929507CD3D90Ab11eC4822E9eB5A48eb3a178F19",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Gastoken.io",
		symbol: "uniGST2"
	},
	{
		address: "0xd4777E164c6C683E10593E08760B803D58529a8E",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: HoloToken",
		symbol: "uniHOT"
	},
	{
		address: "0x825130Aa1bEeF07BdF4f389705321816D05b0d0f",
		chainId: 1,
		decimals: 18,
		name: "UNII Finance",
		symbol: "UNII"
	},
	{
		address: "0x3E0349F5D38414008B9Bb1907ea422739BE7CD4C",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Fulcrum DAI iToken",
		symbol: "uniiDAI"
	},
	{
		address: "0xFFcf45b540e6C9F094Ae656D2e34aD11cdfdb187",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: The Tokenized Bitcoin",
		symbol: "uniimBTC"
	},
	{
		address: "0x084f002671a5f03D5498B1e5fb15fc0cfee9a470",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: IoTeX Network",
		symbol: "uniIOTX"
	},
	{
		address: "0x81eeD7F1EcbD7FA9978fcc7584296Fb0C215Dc5C",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Fulcrum SAI iToken",
		symbol: "uniiSAI"
	},
	{
		address: "0xb7520a5F8c832c573d6BD0Df955fC5c9b72400F7",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Kin",
		symbol: "uniKIN"
	},
	{
		address: "0x49c4f9bc14884f6210F28342ceD592A633801a8b",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Kyber Network Crystal",
		symbol: "uniKNC"
	},
	{
		address: "0xcaA7e4656f6A2B59f5f99c745F91AB26D1210DCe",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: EthLend Token",
		symbol: "uniLEND"
	},
	{
		address: "0xF173214C720f58E03e194085B1DB28B50aCDeeaD",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: ChainLink Token",
		symbol: "uniLINK"
	},
	{
		address: "0x417CB32bc991fBbDCaE230C7c4771CC0D69daA6b",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: LoomToken",
		symbol: "uniLOOM"
	},
	{
		address: "0xc4a1C45D5546029Fd57128483aE65b56124BFA6A",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Livepeer Token",
		symbol: "uniLPT"
	},
	{
		address: "0xe3406e7D0155E0a83236eC25D34Cd3D903036669",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Liquidity.Network Token",
		symbol: "uniLQD"
	},
	{
		address: "0xA539BAaa3aCA455c986bB1E25301CEF936CE1B65",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: LoopringCoin V2",
		symbol: "uniLRC"
	},
	{
		address: "0xC6581Ce3A005e2801c1e0903281BBd318eC5B5C2",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Decentraland MANA",
		symbol: "uniMANA"
	},
	{
		address: "0x9a7A75E66B325a3BD46973B2b57c9b8d9D26a621",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Matic Token",
		symbol: "uniMATIC"
	},
	{
		address: "0xE1b7AeC3639068b474bFbcB916580fc28A20717B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Marblecoin",
		symbol: "uniMBC"
	},
	{
		address: "0xdd80Ca8062c7Ef90FcA2547E6a2A126C596e611F",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Magnolia Token",
		symbol: "uniMGN"
	},
	{
		address: "0x2C4Bd064b998838076fa341A83d007FC2FA50957",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Maker",
		symbol: "uniMKR"
	},
	{
		address: "0xA931F4eB165AC307fD7431b5EC6eADde53E14b0C",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Melon Token",
		symbol: "uniMLN"
	},
	{
		address: "0xCCB98654CD486216fFF273dd025246588E77cFC1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Modum Token",
		symbol: "uniMOD"
	},
	{
		address: "0x069C97DBA948175D10af4b2414969e0B88d44669",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Nexo",
		symbol: "uniNEXO"
	},
	{
		address: "0x2Bf5A5bA29E60682fC56B2Fcf9cE07Bef4F6196f",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Numeraire",
		symbol: "uniNMR"
	},
	{
		address: "0xe9a5bbe41dc63D555E06746b047d624E3343EA52",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Orchid",
		symbol: "uniOXT"
	},
	{
		address: "0xF53bBFBff01c50F2D42D542b09637DcA97935fF7",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Panvala pan",
		symbol: "uniPAN"
	},
	{
		address: "0xC040d51b07Aea5d94a89Bc21E8078B77366Fc6C7",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: PAX",
		symbol: "uniPAX"
	},
	{
		address: "0x0d2E1a84638bD1B6c0C260c758c39451D4587be1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Paxos Gold",
		symbol: "uniPAXG"
	},
	{
		address: "0xF506828B166de88cA2EDb2A98D960aBba0D2402A",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Pinakion",
		symbol: "uniPNK"
	},
	{
		address: "0xA2E6B3EF205FeAEe475937c4883b24E6eB717eeF",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: POA ERC20 on Foundation",
		symbol: "uniPOA20"
	},
	{
		address: "0x3758e00b100876C854636eF8Db61988931BB8025",
		chainId: 1,
		decimals: 18,
		name: "Uniqly",
		symbol: "UNIQ"
	},
	{
		address: "0x755899F0540c3548b99E68C59AdB0f15d2695188",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: QChi",
		symbol: "uniQCH"
	},
	{
		address: "0x82Db9FC4956Fa40efe1e35d881004612B5CB2cc2",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Quantstamp Token",
		symbol: "uniQSP"
	},
	{
		address: "0xD91FF16Ef92568fC27F466C3c5613e43313Ab1dc",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Ripio Credit Network Token",
		symbol: "uniRCN"
	},
	{
		address: "0x7D03CeCb36820b4666F45E1b4cA2538724Db271C",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Raiden Token",
		symbol: "uniRDN"
	},
	{
		address: "0x43892992B0b102459E895B88601Bb2C76736942c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Republic Token",
		symbol: "uniREN"
	},
	{
		address: "0x48B04d2A05B6B604d8d5223Fd1984f191DED51af",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Reputation",
		symbol: "uniREP"
	},
	{
		address: "0xeBD8AA50b26bFa63007d61eBa777A9DdE7e43c64",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Darwinia Network Native Token",
		symbol: "uniRING"
	},
	{
		address: "0xA825CAE02B310E9901b4776806CE25db520c8642",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: iEx.ec Network Token",
		symbol: "uniRLC"
	},
	{
		address: "0x3Fb2F18065926DdB33E7571475c509541d15dA0e",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Rocket Pool",
		symbol: "uniRPL"
	},
	{
		address: "0x09cabEC1eAd1c0Ba254B09efb3EE13841712bE14",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Dai Stablecoin v1.0 (SAI)",
		symbol: "uniSAI"
	},
	{
		address: "0xC0C59cDe851bfcbdddD3377EC10ea54A18Efb937",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Salt",
		symbol: "uniSALT"
	},
	{
		address: "0x8a8D7aD4b89D91983cd069C58C4AA9F2f4166298",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: SANtiment network token",
		symbol: "uniSAN"
	},
	{
		address: "0xe9Cf7887b93150D4F2Da7dFc6D502B216438F244",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Synth sETH",
		symbol: "unisETH"
	},
	{
		address: "0x536956Fab86774fb55CfaAcF496BC25E4d2B435C",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Shuffle.Monster V3",
		symbol: "uniSHUF"
	},
	{
		address: "0x1aEC8F11A7E78dC22477e91Ed924Fab46e3A88Fd",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Status Network Token",
		symbol: "uniSNT"
	},
	{
		address: "0x3958B4eC427F8fa24eB60F42821760e88d485f7F",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Synthetix Network Token",
		symbol: "uniSNX"
	},
	{
		address: "0x22d8432cc7aA4f8712a655fC4cdfB1baEC29FCA9",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Unisocks Edition 0",
		symbol: "uniSOCKS"
	},
	{
		address: "0x4e395304655F0796bc3bc63709DB72173b9DdF98",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: SPANK",
		symbol: "uniSPANK"
	},
	{
		address: "0x9Ed8e7C9604790F7Ec589F99b94361d8AAB64E5E",
		chainId: 1,
		decimals: 18,
		name: "Unistake",
		symbol: "UNISTAKE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA7298541E52f96d42382eCBe4f242cBcBC534d02",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: StorjToken",
		symbol: "uniSTORJ"
	},
	{
		address: "0xB944d13b2f4047fc7bd3F7013bcf01b115fb260d",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Synth sUSD",
		symbol: "unisUSD"
	},
	{
		address: "0x88dF13889E20EFa93Ff9a0C08f101F431bD9DDD7",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: TrueAUD",
		symbol: "uniTAUD"
	},
	{
		address: "0xF996D7d9BaCb9217ca64BBce1b1cD72E0E886Be6",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: TrueCAD",
		symbol: "uniTCAD"
	},
	{
		address: "0x6bFa119a191576Ba26Bc5e711432aCA0cFda04DE",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: TrueGBP",
		symbol: "uniTGBP"
	},
	{
		address: "0x505C02B4aa1286375FBDF0c390AC0fe9209DCB05",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: TrueHKD",
		symbol: "uniTHKD"
	},
	{
		address: "0xb6cFBf322db47D39331E306005DC7E5e6549942B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Monolith TKN",
		symbol: "uniTKN"
	},
	{
		address: "0x95E4649F5209dD292cAF1F087b8F1Db3bE24927f",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Trustcoin",
		symbol: "uniTRST"
	},
	{
		address: "0x122327Fd43B2C66DD9e4B6c91c8f071E217558eF",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: BiLira",
		symbol: "uniTRYB"
	},
	{
		address: "0x5048b9d01097498Fd72F3F14bC9Bc74A5aAc8fA7",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: TrueUSD",
		symbol: "uniTUSD"
	},
	{
		address: "0x601c32E0580D3aef9437dB52D09f5a5D7E60eC22",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Uniswap V1",
		symbol: "uniUNI-V1:SAI"
	},
	{
		address: "0x256845e721C0c46d54E6afBD4FA3B52CB72353EA",
		chainId: 1,
		decimals: 18,
		name: "UniDollar",
		symbol: "UNIUSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x97deC872013f6B5fB443861090ad931542878126",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: USD//C",
		symbol: "uniUSDC"
	},
	{
		address: "0x7Ef7191AB91dDB4D7cC347fbFA170355acbaf02D",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: StableUSD",
		symbol: "uniUSDS"
	},
	{
		address: "0xc12c4c3E0008B838F75189BFb39283467cf6e5b3",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 0xBTC-ETH",
		symbol: "univ20xBTCETH"
	},
	{
		address: "0xF49144E61C05120f1b167E4B4F59cf0a5d77903F",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 1UP-ETH",
		symbol: "univ21UPETH"
	},
	{
		address: "0x8Cb77eA869DeF8f7fdEab9E4dA6cF02897bbF076",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 AKRO-ETH",
		symbol: "univ2AKROETH"
	},
	{
		address: "0x583CaDD830374bb5C1eC8E1b648e0294CC1E01f1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ALEPH-ETH",
		symbol: "univ2ALEPHETH"
	},
	{
		address: "0x490B5B2489eeFC4106C69743F657e3c4A2870aC5",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ATIS-ETH",
		symbol: "univ2ATISETH"
	},
	{
		address: "0xf421c3f2e695C2D4C0765379cCace8adE4a480D9",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 BAND-ETH",
		symbol: "univ2BANDETH"
	},
	{
		address: "0xB6909B960DbbE7392D405429eB2b3649752b4838",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 BAT-ETH",
		symbol: "univ2BATETH"
	},
	{
		address: "0xFAD8B07055A0371442A3106A2244a82B24e31cEc",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 BIZ-ETH",
		symbol: "univ2BIZETH"
	},
	{
		address: "0x3fd4Cf9303c4BC9E13772618828712C8EaC7Dd2F",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 BNT-ETH",
		symbol: "univ2BNTETH"
	},
	{
		address: "0x6B4A0Bd2EEe3Ca06652f758844937dAF91eA8422",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 BOOST-ETH",
		symbol: "univ2BOOSTETH"
	},
	{
		address: "0x13E638b4f89740a1c2FF45D71F71ee28101CC1Dc",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 BPT-ETH",
		symbol: "univ2BPTETH"
	},
	{
		address: "0x48F4A6C65ABb4b209823771b0D2c0F156eE6268b",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 CAMO-ETH",
		symbol: "univ2CAMOETH"
	},
	{
		address: "0xa5E79baEe540f000ef6F23D067cd3AC22c7d9Fe6",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 CEL-ETH",
		symbol: "univ2CELETH"
	},
	{
		address: "0xa6f3ef841d371a82ca757FaD08efc0DeE2F1f5e2",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 CHI-ETH",
		symbol: "univ2CHIETH"
	},
	{
		address: "0xCFfDdeD873554F362Ac02f8Fb1f02E5ada10516f",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 COMP-ETH",
		symbol: "univ2COMPETH"
	},
	{
		address: "0xddF9b7a31b32EBAF5c064C80900046C9e5b7C65F",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 CREAM-ETH",
		symbol: "univ2CREAMETH"
	},
	{
		address: "0xda9A09ed40015346f6B0704c5Bf1A2ccbF94dE43",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DAI-2KEY",
		symbol: "univ2DAI2KEY"
	},
	{
		address: "0x18e33723feF43A33f9560a8B973D3331E5269FAC",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DAI-ALEPH",
		symbol: "univ2DAIALEPH"
	},
	{
		address: "0xA478c2975Ab1Ea89e8196811F51A7B7Ade33eB11",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DAI-ETH",
		symbol: "univ2DAIETH"
	},
	{
		address: "0xE4a356Afd925F73F3DD22ACbEb2c0C87A05E895D",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DAI-JRT",
		symbol: "univ2DAIJRT"
	},
	{
		address: "0xb603c2b5AB4ee7932103b42f8dd899C8721DD25E",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DAI-LEND",
		symbol: "univ2DAILEND"
	},
	{
		address: "0xe8056B83ba7dAF027414b58048a48911acf1b2A9",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DAI-MFT",
		symbol: "univ2DAIMFT"
	},
	{
		address: "0xAE461cA67B15dc8dc81CE7615e0320dA1A9aB8D5",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DAI-USDC",
		symbol: "univ2DAIUSDC"
	},
	{
		address: "0xD6054455Ca2e1AEf02178E0462D9ab953bEA4e23",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DATA-ETH",
		symbol: "univ2DATAETH"
	},
	{
		address: "0x3AEEE5bA053eF8406420DbC5801fC95eC57b0E0A",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DEC-ETH",
		symbol: "univ2DECETH"
	},
	{
		address: "0x4168CEF0fCa0774176632d86bA26553E3B9cF59d",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DEV-ETH",
		symbol: "univ2DEVETH"
	},
	{
		address: "0x37a0464f8F4c207B54821f3C799Afd3D262Aa944",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DEXT-ETH",
		symbol: "univ2DEXTETH"
	},
	{
		address: "0x1c9052e823b5f4611EF7D5fB4153995b040ccbf5",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DXD-ETH",
		symbol: "univ2DXDETH"
	},
	{
		address: "0xC5A788F63e5D9cF2C324621EEd51A98F85AE373b",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 DZAR-ETH",
		symbol: "univ2DZARETH"
	},
	{
		address: "0x3b0F0fe3Be830826D833a67cD1d7C80edF3Fb49b",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 EBASE-ETH",
		symbol: "univ2EBASEETH"
	},
	{
		address: "0x8C0e876F1da58140695673D07FF42D4786207D1B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ESWA-ETH",
		symbol: "univ2ESWAETH"
	},
	{
		address: "0x63E7Aa05B78144013Cfa4b23C9b61599D0a29023",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-2KEY",
		symbol: "univ2ETH2KEY"
	},
	{
		address: "0xA0d06BdC3274564ddda65BFAb6AE61e5f000E49B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-ACID",
		symbol: "univ2ETHACID"
	},
	{
		address: "0xc5be99A02C6857f9Eac67BbCE58DF5572498F40c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-AMPL",
		symbol: "univ2ETHAMPL"
	},
	{
		address: "0x0FFC70bE6e2d841e109653ddb3034961591679d6",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-ANJ",
		symbol: "univ2ETHANJ"
	},
	{
		address: "0x63804D757B5B7c43509FDED8f7CE10Cc0Bac2AE0",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-ASKO",
		symbol: "univ2ETHASKO"
	},
	{
		address: "0xC04744ab87A4C37afD91680ef280B96Ee21A026E",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-AUC",
		symbol: "univ2ETHAUC"
	},
	{
		address: "0x8A38aD17d1adCDBE3775338D1470FD6f00f77802",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-BUIDL",
		symbol: "univ2ETHBUIDL"
	},
	{
		address: "0x938d1459ee0aaf8fE73778c590A639821E444D45",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-CKN",
		symbol: "univ2ETHCKN"
	},
	{
		address: "0x447f8D287120B66F39856AE5ceb01512A7A47444",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-DAM",
		symbol: "univ2ETHDAM"
	},
	{
		address: "0x0782Fb026d1c264e59A2b274833240c53367Ed1A",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-DAOX",
		symbol: "univ2ETHDAOX"
	},
	{
		address: "0x8175362afBeeE32AfB22d05adc0bbD08dE32F5Ae",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-DMG",
		symbol: "univ2ETHDMG"
	},
	{
		address: "0xE56c60B5f9f7B5FC70DE0eb79c6EE7d00eFa2625",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-ENJ",
		symbol: "univ2ETHENJ"
	},
	{
		address: "0x121B382b5F003C41fb49E7B88D079c8f513fEaaC",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-ESH",
		symbol: "univ2ETHESH"
	},
	{
		address: "0x92330D8818e8A3B50f027C819FA46031FfBa2C8C",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-FRM",
		symbol: "univ2ETHFRM"
	},
	{
		address: "0xE275eB6154cB4A73F0BA573E43b2b06E9E78b7f0",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-FSW",
		symbol: "univ2ETHFSW"
	},
	{
		address: "0xedAeDD22e653c504ff6806bf61664292848eB26e",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-HEX2T",
		symbol: "univ2ETHHEX2T"
	},
	{
		address: "0xf49C43Ae0fAf37217bDcB00DF478cF793eDd6687",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-KNC",
		symbol: "univ2ETHKNC"
	},
	{
		address: "0x2dda09fB929c576A6AB6c1D1EE62E8AF72b2F6a7",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-NEC",
		symbol: "univ2ETHNEC"
	},
	{
		address: "0x1C608235E6A946403F2a048a38550BefE41e1B85",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-PAMP",
		symbol: "univ2ETHPAMP"
	},
	{
		address: "0x1b21609D42fa32F371F58DF294eD25b2D2e5C8ba",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-PAN",
		symbol: "univ2ETHPAN"
	},
	{
		address: "0x2EcF245B60e351A711e56A3ae25866d1c8BEb324",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-PDS",
		symbol: "univ2ETHPDS"
	},
	{
		address: "0x49F9316EB22de90d9343C573fbD7Cc0B5ec6e19f",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-POWER",
		symbol: "univ2ETHPOWER"
	},
	{
		address: "0xfb7A3112c96Bbcfe4bbf3e8627b0dE6f49E5142A",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-SHIP",
		symbol: "univ2ETHSHIP"
	},
	{
		address: "0xD90a1ba0cbaaaabfdC6C814cDF1611306A26E1f8",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-SWAP",
		symbol: "univ2ETHSWAP"
	},
	{
		address: "0xEd9C854Cb02dE75Ce4C9BBA992828d6CB7fd5C71",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-UBOMB",
		symbol: "univ2ETHUBOMB"
	},
	{
		address: "0x5E64CD6f84D0eE2Ad2a84CadC464184e36274E0c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-UNC",
		symbol: "univ2ETHUNC"
	},
	{
		address: "0x0d4a11d5EEaaC28EC3F61d100daF4d40471f1852",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-USDT",
		symbol: "univ2ETHUSDT"
	},
	{
		address: "0x6c35c40447E8011a63aB05f088fa7cD914d66904",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-XAMP",
		symbol: "univ2ETHXAMP"
	},
	{
		address: "0xc6F348dd3B91a56D117ec0071C1e9b83C0996De4",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-ZRX",
		symbol: "univ2ETHZRX"
	},
	{
		address: "0xdc7d8cC3a22FE0eC69770E02931f43451b7B975e",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 EWTB-ETH",
		symbol: "univ2EWTBETH"
	},
	{
		address: "0x0d0d65E7A7dB277d3E0F5E1676325E75f3340455",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 ETH-MTA",
		symbol: "univ2FARMUSDC"
	},
	{
		address: "0x514906FC121c7878424a5C928cad1852CC545892",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 FARM-USDC",
		symbol: "univ2FARMUSDC"
	},
	{
		address: "0x9926285361ACf7461105B464Ae9EA683DFB06b83",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 FMA-ETH",
		symbol: "univ2FMAETH"
	},
	{
		address: "0xd9d39540d61F8D6Eb2EE7eEdFae93CC09cC24f0E",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 FOAM-ETH",
		symbol: "univ2FOAMETH"
	},
	{
		address: "0x05B0c1D8839eF3a989B33B6b63D3aA96cB7Ec142",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 FUN-ETH",
		symbol: "univ2FUNETH"
	},
	{
		address: "0x302Ac87B1b5ef18485971ED0115a17403Ea30911",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 FXC-ETH",
		symbol: "univ2FXCETH"
	},
	{
		address: "0xf37Ed742819Ec006b0802df5c2B0e9132F22C625",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 GEN-ETH",
		symbol: "univ2GENETH"
	},
	{
		address: "0x395A1350db9627360D09c8b3E7C31FB84261B8F2",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 GHOST-ETH",
		symbol: "univ2GHOSTETH"
	},
	{
		address: "0xaB659deE3030602c1aF8C29D146fAcD4aeD6EC85",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 GHST-ETH",
		symbol: "univ2GHSTETH"
	},
	{
		address: "0x308E019143B560215775A0c6EFbD2673413D76E6",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 H3X-ETH",
		symbol: "univ2H3XETH"
	},
	{
		address: "0x55D5c232D921B9eAA6b37b5845E439aCD04b4DBa",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 HEX-ETH",
		symbol: "univ2HEXETH"
	},
	{
		address: "0xF52f433B79d21023af94251958BEd3b64a2b7930",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 HKMT-USDT",
		symbol: "univ2HKMTUSDT"
	},
	{
		address: "0xaDEA645907Dbe2b9BCB7B102695Ad0C321f6b40c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 HXB-ETH",
		symbol: "univ2HXBETH"
	},
	{
		address: "0xFdC3f68Af20d56e05AD0C7Eb51DA4A3F7D753a04",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 IDXT-ETH",
		symbol: "univ2IDXTETH"
	},
	{
		address: "0x2b6A25f7C54F43C71C743e627F5663232586C39F",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 JRT-ETH",
		symbol: "univ2JRTETH"
	},
	{
		address: "0x6507ba0f3eb82cba185c088A3fBD0435f1A73B28",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 KAI-ETH",
		symbol: "univ2KAIETH"
	},
	{
		address: "0xaB3F9bF1D81ddb224a2014e98B238638824bCf20",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 LEND-ETH",
		symbol: "univ2LENDETH"
	},
	{
		address: "0x308d87865397672a74Ec62B3dC8E7323a18c0f1e",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 LEND-USDC",
		symbol: "univ2LENDUSDC"
	},
	{
		address: "0xa2107FA5B38d9bbd2C461D6EDf11B11A50F6b974",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 LINK-ETH",
		symbol: "univ2LINKETH"
	},
	{
		address: "0xdDb5049FDb73Ea84429Cd91f31d90779032e5eDE",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 LPT-DAI",
		symbol: "univ2LPTDAI"
	},
	{
		address: "0x755C1a8F71f4210CD7B60b9439451EfCbeBa33D1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 LPT-ETH",
		symbol: "univ2LPTETH"
	},
	{
		address: "0x8878Df9E1A7c87dcBf6d3999D997f262C05D8C70",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 LRC-ETH",
		symbol: "univ2LRCETH"
	},
	{
		address: "0x11b1f53204d03E5529F09EB3091939e4Fd8c9CF3",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MANA-ETH",
		symbol: "univ2MANAETH"
	},
	{
		address: "0x3006c0D2A6e54d3590a44384c6F066c9cF9a4ceA",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MATH-ETH",
		symbol: "univ2MATHETH"
	},
	{
		address: "0x10cfa744c77F1cB9A77fa418ac4a1B6ec62BcCE4",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MCB-ETH",
		symbol: "univ2MCBETH"
	},
	{
		address: "0x5DFbe95925FFeb68f7d17920Be7b313289a1a583",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MEME-ETH",
		symbol: "univ2MEMEETH"
	},
	{
		address: "0xC2aDdA861F89bBB333c90c492cB837741916A225",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MKR-ETH",
		symbol: "univ2MKRETH"
	},
	{
		address: "0xadea7c5febF93a6239E73e14e37aB429039Eb9B1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MKR-MLN",
		symbol: "univ2MKRMLN"
	},
	{
		address: "0x340A5a2F73eBaa181eC2826802Fdf8ED21Fc759a",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MKR-USDC",
		symbol: "univ2MKRUSDC"
	},
	{
		address: "0xf89403ad67d659d5d1FAe7c6Ec163110506b858a",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MOON-ETH",
		symbol: "univ2MOONETH"
	},
	{
		address: "0xAacd36c877408824EE59540B0C093804D7e9a7d9",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 MRDN-ETH",
		symbol: "univ2MRDNETH"
	},
	{
		address: "0xB784CED6994c928170B417BBd052A096c6fB17E2",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 NMR-ETH",
		symbol: "univ2NMRETH"
	},
	{
		address: "0xf063806D07fE742B031a543145fB46d1bC670fE8",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 OCEAN-ETH",
		symbol: "univ2OCEANETH"
	},
	{
		address: "0x9b7DaD79FC16106b47a3DAb791F389C167e15Eb0",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 OCEAN-ETH",
		symbol: "univ2OCEANETH"
	},
	{
		address: "0xce2Cc0513634CEf3a7C9C257E294EF5E3092f185",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 OGN-ETH",
		symbol: "univ2OGNETH"
	},
	{
		address: "0x9C4Fe5FFD9A9fC5678cFBd93Aa2D4FD684b67C4C",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 PAXG-ETH",
		symbol: "univ2PAXGETH"
	},
	{
		address: "0xdc98556Ce24f007A5eF6dC1CE96322d65832A819",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 PICKLE-ETH",
		symbol: "univ2PICKLEETH"
	},
	{
		address: "0xaE2D4004241254aEd3f93873604d39883c8259F0",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 PLR-ETH",
		symbol: "univ2PLRETH"
	},
	{
		address: "0x343FD171caf4F0287aE6b87D75A8964Dc44516Ab",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 PNK-ETH",
		symbol: "univ2PNKETH"
	},
	{
		address: "0xe7cca784b1D838D99Ff4ffF574D31870d1619C1d",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 POD-ETH",
		symbol: "univ2PODETH"
	},
	{
		address: "0xcB7f78A079B5fC387C80b93BE79d40309C27A237",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 RAIN-ETH",
		symbol: "univ2RAINETH"
	},
	{
		address: "0x33be7eD806479061A7E62A33D3C9B500fc9B47BF",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 REL-ETH",
		symbol: "univ2RELETH"
	},
	{
		address: "0x8Bd1661Da98EBDd3BD080F0bE4e6d9bE8cE9858c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 REN-ETH",
		symbol: "univ2RENETH"
	},
	{
		address: "0xec2D2240D02A8cf63C3fA0B7d2C5a3169a319496",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 REP-ETH",
		symbol: "univ2REPETH"
	},
	{
		address: "0xa32523371390b0Cc4e11F6Bb236ecf4C2cDEA101",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 RING-ETH",
		symbol: "univ2RINGETH"
	},
	{
		address: "0x6d57a53A45343187905aaD6AD8eD532D105697c1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 RLC-ETH",
		symbol: "univ2RLCETH"
	},
	{
		address: "0x70EA56e46266f0137BAc6B75710e3546f47C855D",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 RPL-ETH",
		symbol: "univ2RPLETH"
	},
	{
		address: "0xba65016890709dBC9491Ca7bF5DE395B8441DC8B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 RSR-ETH",
		symbol: "univ2RSRETH"
	},
	{
		address: "0xd2E0C4928789e5DB620e53af29F5fC7bcA262635",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 SAKE-ETH",
		symbol: "univ2SAKEETH"
	},
	{
		address: "0x598E740cda7C525080d3FCb9Fa7C4E1bd0044B34",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 sETH-ETH",
		symbol: "univ2sETHETH"
	},
	{
		address: "0x260E069deAd76baAC587B5141bB606Ef8b9Bab6c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 SHUF-ETH",
		symbol: "univ2SHUFETH"
	},
	{
		address: "0x43AE24960e5534731Fc831386c07755A2dc33D47",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 SNX-ETH",
		symbol: "univ2SNXETH"
	},
	{
		address: "0xEAf1Cc33b8D1C4C3E67CF647E1173f06Aa7B6d0c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 SoETH-ETH",
		symbol: "univ2SoETHETH"
	},
	{
		address: "0x59F96b8571E3B11f859A09Eaf5a790A138FC64D0",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 STA-ETH",
		symbol: "univ2STAETH"
	},
	{
		address: "0x3B3d4EeFDc603b232907a7f3d0Ed1Eea5C62b5f7",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 STAKE-ETH",
		symbol: "univ2STAKEETH"
	},
	{
		address: "0xe0A08fD1366b5B4CF256dB1a85B6eb0E01AAcbCE",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 STONK-ETH",
		symbol: "univ2STONKETH"
	},
	{
		address: "0xAEF16913b6C50EBCf627a394921F306985FC8604",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 STORJ-ETH",
		symbol: "univ2STORJETH"
	},
	{
		address: "0xf80758aB42C3B07dA84053Fd88804bCB6BAA4b5c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 sUSD-ETH",
		symbol: "univ2sUSDETH"
	},
	{
		address: "0x34a0216C5057bC18e5d34D4405284564eFd759b2",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 sXAU-USDC",
		symbol: "univ2sXAUUSDC"
	},
	{
		address: "0x1A58Aa618DF8F1eC282748feF6185C1a1cC2FAa6",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 TRAC-ETH",
		symbol: "univ2TRACETH"
	},
	{
		address: "0xB8172076ceb35B6701F96eB9088818EFc010BD44",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 TRADE-ETH",
		symbol: "univ2TRADEETH"
	},
	{
		address: "0x27eF0CB021446f6d43aDF0Bcc74b64fd9c0AB180",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 TRB-DAI",
		symbol: "univ2TRBDAI"
	},
	{
		address: "0x70258Aa9830C2C84d855Df1D61E12C256F6448b4",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 TRB-ETH",
		symbol: "univ2TRBETH"
	},
	{
		address: "0xB27dE0bA2abFbFdf15667a939f041b52118aF5Ba",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 UBT-ETH",
		symbol: "univ2UBTETH"
	},
	{
		address: "0x88D97d199b9ED37C29D846d00D443De980832a22",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 UMA-ETH",
		symbol: "univ2UMAETH"
	},
	{
		address: "0xd3d2E2692501A5c9Ca623199D38826e513033a17",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 UNI-ETH",
		symbol: "univ2UNIETH"
	},
	{
		address: "0xBD39b1F24B8960d3d7Cd2c5471d0493496888185",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 UNIUSD-ETH",
		symbol: "univ2UNIUSDETH"
	},
	{
		address: "0xfd226C17A57f5eEF0b848D9b65bc53Cbbf7eD965",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 USDC-BUIDL",
		symbol: "univ2USDCBUIDL"
	},
	{
		address: "0xB4e16d0168e52d35CaCD2c6185b44281Ec28C9Dc",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 USDC-ETH",
		symbol: "univ2USDCETH"
	},
	{
		address: "0x3041CbD36888bECc7bbCBc0045E3B1f144466f5f",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 USDC-USDT",
		symbol: "univ2USDCUSDT"
	},
	{
		address: "0x1a5314C1b3E17a781AaEF180BBa446d10E506E6B",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 uTOPIA-ETH",
		symbol: "univ2uTOPIAETH"
	},
	{
		address: "0xb06d43B9f8eb4e64e8C40f81e5574b8AEa6E1cb7",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 VLINK-ETH",
		symbol: "univ2VLINKETH"
	},
	{
		address: "0x966053Ca4fca049173eb1F27E4cb168CCb794534",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 VLT-ETH",
		symbol: "univ2VLTETH"
	},
	{
		address: "0x0c9C5DAF1D7CD8B10e9fC5e7a10762f0a8d1C335",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 VXV-ETH",
		symbol: "univ2VXVETH"
	},
	{
		address: "0xEE89ea23c18410F2b57e7abc6eb24cfcdE4f49B0",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 WBOMB-ETH",
		symbol: "univ2WBOMBETH"
	},
	{
		address: "0xBb2b8038a1640196FbE3e38816F3e67Cba72D940",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 WBTC-ETH",
		symbol: "univ2WBTCETH"
	},
	{
		address: "0x06d5b7380C65c889abd82D3Df8aC118AF31156a1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 WINGS-ETH",
		symbol: "univ2WINGSETH"
	},
	{
		address: "0x23bFf8ca20AAc06EFDf23cEe3B8ae296A30Dfd27",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 wNXM-ETH",
		symbol: "univ2wNXMETH"
	},
	{
		address: "0x231F3381D10478BfC2cA552195b9d8B15968B60c",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 XBASE-ETH",
		symbol: "univ2XBASEETH"
	},
	{
		address: "0xE0cc5aFc0FF2c76183416Fb8d1a29f6799FB2cdF",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 XIO-ETH",
		symbol: "univ2XIOETH"
	},
	{
		address: "0xB5bdb51fDC635359181111439Efe2799Bc2336c6",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 XNS-ETH",
		symbol: "univ2XNSETH"
	},
	{
		address: "0x01962144D41415cCA072900Fe87Bbe2992A99F10",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 XOR-ETH",
		symbol: "univ2XORETH"
	},
	{
		address: "0x3185626c14aCB9531d19560dECb9d3E5E80681b1",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 XRT-ETH",
		symbol: "univ2XRTETH"
	},
	{
		address: "0x2fDbAdf3C4D5A8666Bc06645B8358ab803996E28",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 YFI-ETH",
		symbol: "univ2YFIETH"
	},
	{
		address: "0x8973Be4402bf0a39448f419c2D64bD3591Dd2299",
		chainId: 1,
		decimals: 18,
		name: "Uniswap V2 YFII-ETH",
		symbol: "univ2YFIIETH"
	},
	{
		address: "0x17e5BF07D696eaf0d14caA4B44ff8A1E17B34de3",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Veritaseum",
		symbol: "uniVERI"
	},
	{
		address: "0x4d2f5cFbA55AE412221182D8475bC85799A5644b",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Wrapped BTC",
		symbol: "uniWBTC"
	},
	{
		address: "0x4FF7Fa493559c40aBd6D157a0bfC35Df68d8D0aC",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Wrapped CryptoKitties",
		symbol: "uniWCK"
	},
	{
		address: "0xA2881A90Bf33F03E7a3f803765Cd2ED5c8928dFb",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: Wrapped Ether",
		symbol: "uniWETH"
	},
	{
		address: "0x8dE0d002DC83478f479dC31F76cB0a8aa7CcEa17",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: CryptoFranc",
		symbol: "uniXCHF"
	},
	{
		address: "0x7B6E5278a14d5318571d65aceD036d09c998C707",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: XIO Network",
		symbol: "uniXIO"
	},
	{
		address: "0xaE76c84C9262Cdb9abc0C2c8888e62Db8E22A0bF",
		chainId: 1,
		decimals: 18,
		name: "Uniswap: 0x Protocol Token",
		symbol: "uniZRX"
	},
	{
		address: "0x354E514c135c8603f840ffADb4c33cDE6D2A37e0",
		chainId: 1,
		decimals: 18,
		name: "Unilock Network",
		symbol: "UNL"
	},
	{
		address: "0x031002d15B0D0Cd7c9129d6F644446368deaE391",
		chainId: 1,
		decimals: 8,
		name: "unFederal LINK",
		symbol: "unLINK"
	},
	{
		address: "0x226f7b842E0F0120b7E194D05432b3fd14773a9D",
		chainId: 1,
		decimals: 18,
		name: "UNION Protocol Governance Token",
		symbol: "UNN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x474021845C4643113458ea4414bdb7fB74A01A77",
		chainId: 1,
		decimals: 18,
		name: "Uno Re",
		symbol: "UNO"
	},
	{
		address: "0xd18A8abED9274eDBEace4B12D86A8633283435Da",
		chainId: 1,
		decimals: 18,
		name: "UnoSwap",
		symbol: "UNOS"
	},
	{
		address: "0x8d610E20481F4C4f3aCB87bBa9c46BeF7795fdFe",
		chainId: 1,
		decimals: 18,
		name: "Unity Network",
		symbol: "UNT"
	},
	{
		address: "0x6b576972de33BebDe3A703BfF52a091e79f8c87A",
		chainId: 1,
		decimals: 8,
		name: "unFederal USDC",
		symbol: "unUSDC"
	},
	{
		address: "0x6e2aA5bB90ac37D9006685AFc651ef067E1c7b44",
		chainId: 1,
		decimals: 8,
		name: "unFederal USDT",
		symbol: "unUSDT"
	},
	{
		address: "0x5D446FC8DBd10EBAcfE9A427aB5402586af98cD4",
		chainId: 1,
		decimals: 8,
		name: "unFederal WBTC",
		symbol: "unWBTC"
	},
	{
		address: "0x9e29Ce9cD25F4141dF6BB85b27Ef6933a16A5824",
		chainId: 1,
		decimals: 8,
		name: "unFederal YFI",
		symbol: "unYFI"
	},
	{
		address: "0xE4AE84448DB5CFE1DaF1e6fb172b469c161CB85F",
		chainId: 1,
		decimals: 18,
		name: "Utopia Genesis Foun",
		symbol: "UOP"
	},
	{
		address: "0xD13c7342e1ef687C5ad21b27c2b65D772cAb5C8c",
		chainId: 1,
		decimals: 4,
		name: "Ultra",
		symbol: "UOS"
	},
	{
		address: "0x6Ba460AB75Cd2c56343b3517ffeBA60748654D26",
		chainId: 1,
		decimals: 8,
		name: "UpToken",
		symbol: "UP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa46F33694F5B31a6ed27eDA16Ccd466e94c80f1A",
		chainId: 1,
		decimals: 18,
		name: "Unicly Pak Collecti",
		symbol: "UPAK"
	},
	{
		address: "0x114a86D31b8Cb3867040B48e7c17d5d04D886ce0",
		chainId: 1,
		decimals: 8,
		name: "UPBTC Token",
		symbol: "UPB"
	},
	{
		address: "0x6C103D85C15107Dce19F5a75fC746227e610AaBd",
		chainId: 1,
		decimals: 2,
		name: "Universal Euro",
		symbol: "UPEUR"
	},
	{
		address: "0x70D2b7C19352bB76e4409858FF5746e500f2B67c",
		chainId: 1,
		decimals: 18,
		name: "Pawtocol",
		symbol: "UPI"
	},
	{
		address: "0x6aca6De211eE17d38D05C7aF583E43F9B1EC4c07",
		chainId: 1,
		decimals: 18,
		name: "Uploadea",
		symbol: "UPL"
	},
	{
		address: "0xC86D054809623432210c107af2e3F619DcFbf652",
		chainId: 1,
		decimals: 18,
		name: "Sentinel Protocol",
		symbol: "UPP"
	},
	{
		address: "0x6CA88Cc8D9288f5cAD825053B6A1B179B05c76fC",
		chainId: 1,
		decimals: 18,
		name: "Universal Protocol",
		symbol: "UPT"
	},
	{
		address: "0x8d2BFfCbB19Ff14A698C424FbcDcFd17aab9b905",
		chainId: 1,
		decimals: 18,
		name: "Unicly CryptoPunks",
		symbol: "UPUNK"
	},
	{
		address: "0x86367c0e517622DAcdab379f2de389c3C9524345",
		chainId: 1,
		decimals: 2,
		name: "Universal US Dollar",
		symbol: "UPUSD"
	},
	{
		address: "0x5f778ec4B31a506c1Dfd8b06F131E9B451a61D39",
		chainId: 1,
		decimals: 18,
		name: "UDAP",
		symbol: "UPX"
	},
	{
		address: "0x0557Df767419296474C3f551Bb0A0ED4c2DD3380",
		chainId: 1,
		decimals: 5,
		name: "Universal Gold",
		symbol: "UPXAU"
	},
	{
		address: "0xD01DB73E047855Efb414e6202098C4Be4Cd2423B",
		chainId: 1,
		decimals: 18,
		name: "Uquid Coin",
		symbol: "UQC"
	},
	{
		address: "0x8806926Ab68EB5a7b909DcAf6FdBe5d93271D6e2",
		chainId: 1,
		decimals: 18,
		name: "Uquid Coin",
		symbol: "UQC"
	},
	{
		address: "0xff8Be4B22CeDC440591dcB1E641EB2a0dd9d25A5",
		chainId: 1,
		decimals: 18,
		name: "Uranus",
		symbol: "URAC"
	},
	{
		address: "0x931684139f756C24eC0731E9F74FE50e5548dDeF",
		chainId: 1,
		decimals: 18,
		name: "Urbit Data",
		symbol: "URB"
	},
	{
		address: "0x72B19558b05706708B612FBBe86B71446eafC002",
		chainId: 1,
		decimals: 14,
		name: "Unicly Formula REVV",
		symbol: "UREVV"
	},
	{
		address: "0x1735Db6AB5BAa19eA55d0AdcEeD7bcDc008B3136",
		chainId: 1,
		decimals: 18,
		name: "UREEQA",
		symbol: "URQA"
	},
	{
		address: "0x6c5fbc90E4D78F70Cc5025dB005B39B03914fC0c",
		chainId: 1,
		decimals: 18,
		name: "Urus Token",
		symbol: "URUS"
	},
	{
		address: "0x285f585106d15a313e7E6155Be4C5557d2deAAB1",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT",
		symbol: "usBAT"
	},
	{
		address: "0x077539371bFa52a4194De833174D85ce218DBe3e",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT 2x",
		symbol: "usBAT2x"
	},
	{
		address: "0x071Bad913FC41eD10f617C8bbB4D12a4b4E544C5",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT 3x",
		symbol: "usBAT3x"
	},
	{
		address: "0x20222979117A9B39030048423557A61eB5aBD681",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short BAT 4x",
		symbol: "usBAT4x"
	},
	{
		address: "0x01522e6c543FF04E74842abD0F2AFEcC5EF5C281",
		chainId: 1,
		decimals: 18,
		name: "upscaleeth",
		symbol: "USC"
	},
	{
		address: "0x44086035439E676c02D411880FcCb9837CE37c57",
		chainId: 1,
		decimals: 18,
		name: "unified Stable Doll",
		symbol: "USD"
	},
	{
		address: "0xfB0aaA0432112779d9AC483D9d5E3961ecE18eec",
		chainId: 1,
		decimals: 18,
		name: "USD Gluwacoin",
		symbol: "USD-G"
	},
	{
		address: "0x9A48BD0EC040ea4f1D3147C025cd4076A2e71e3e",
		chainId: 1,
		decimals: 18,
		name: "PieDAO USD++",
		symbol: "USD++",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf6c0aA7eBFE9992200C67E5388E4F42da49E1783",
		chainId: 1,
		decimals: 2,
		name: "Psyche",
		symbol: "USD1",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3C7b464376DB7C9927930cf50EEfDEA2EFF3A66A",
		chainId: 1,
		decimals: 8,
		name: "USDA",
		symbol: "USDA"
	},
	{
		address: "0x9a1997C130f4b2997166975D9AFf92797d5134c2",
		chainId: 1,
		decimals: 18,
		name: "Bond Appetite USD",
		symbol: "USDAP"
	},
	{
		address: "0x309627af60F0926daa6041B8279484312f2bf060",
		chainId: 1,
		decimals: 18,
		name: "USD Bancor",
		symbol: "USDB"
	},
	{
		address: "0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
		chainId: 1,
		decimals: 6,
		name: "USD Coin",
		symbol: "USDC",
		extensions: {
			color: "#2775CA",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xBc5142e0CC5eB16b47c63B0f033d4c2480853a52",
		chainId: 1,
		decimals: 18,
		name: "Monerium USD",
		symbol: "USDe"
	},
	{
		address: "0x05462671C05aDc39A6521fA60D5e9443e9E9d2B9",
		chainId: 1,
		decimals: 9,
		name: "OLD USDf",
		symbol: "USDF"
	},
	{
		address: "0x3d61e677944204Cd1002202912a2B7a43A8E2823",
		chainId: 1,
		decimals: 9,
		name: "New USDf",
		symbol: "USDF"
	},
	{
		address: "0x2B4200A8D373d484993C37d63eE14AeE0096cd12",
		chainId: 1,
		decimals: 18,
		name: "USDFreeLiquidity",
		symbol: "USDFL"
	},
	{
		address: "0x1c48f86ae57291F7686349F12601910BD8D470bb",
		chainId: 1,
		decimals: 18,
		name: "USDK",
		symbol: "USDK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3e991dBEc296E00626E58C33b62E53beC9D54636",
		chainId: 1,
		decimals: 18,
		name: "USDL",
		symbol: "USDL"
	},
	{
		address: "0xD760ADdFb24D9C01Fe4Bfea7475C5e3636684058",
		chainId: 1,
		decimals: 2,
		name: "Mether (USDM)",
		symbol: "USDM"
	},
	{
		address: "0x674C6Ad92Fd080e4004b2312b45f796a192D27a0",
		chainId: 1,
		decimals: 18,
		name: "Neutrino USD",
		symbol: "USDN"
	},
	{
		address: "0x1456688345527bE1f37E9e627DA0837D6f08C925",
		chainId: 1,
		decimals: 18,
		name: "USDP Stablecoin",
		symbol: "USDP"
	},
	{
		address: "0x4954Db6391F4feB5468b6B943D4935353596aEC9",
		chainId: 1,
		decimals: 18,
		name: "USDQ",
		symbol: "USDQ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA4Bdb11dc0a2bEC88d24A3aa1E6Bb17201112eBe",
		chainId: 1,
		decimals: 6,
		name: "Stably USD",
		symbol: "USDS",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdAC17F958D2ee523a2206206994597C13D831ec7",
		chainId: 1,
		decimals: 6,
		name: "Tether",
		symbol: "USDT",
		extensions: {
			color: "#22A079",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x0cd6c8161f1638485A1A2F5Bf1A0127E45913C2F",
		chainId: 1,
		decimals: 18,
		name: "3X Short Tether Tok",
		symbol: "USDTBEAR"
	},
	{
		address: "0x8Cce19943A01E78B7C277794fb081816F6151Bab",
		chainId: 1,
		decimals: 18,
		name: "3X Long Tether Toke",
		symbol: "USDTBULL"
	},
	{
		address: "0x41a03E41eF555392c9f0AD60f4F61E263078BF10",
		chainId: 1,
		decimals: 18,
		name: "Upper Dollar",
		symbol: "USDU"
	},
	{
		address: "0xeb269732ab75A6fD61Ea60b06fE994cD32a83549",
		chainId: 1,
		decimals: 18,
		name: "dForce USDx",
		symbol: "USDx",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2F6081E3552b1c86cE4479B80062A1ddA8EF23E3",
		chainId: 1,
		decimals: 9,
		name: "Dollars",
		symbol: "USDX"
	},
	{
		address: "0xd9485499499d66B175Cf5ED54c0a19f1a6Bcb61A",
		chainId: 1,
		decimals: 18,
		name: "Usechain",
		symbol: "USE"
	},
	{
		address: "0x147E3d644d53ADadD18a28201b91e2B98aEB7f94",
		chainId: 1,
		decimals: 18,
		name: "ElenaUSD",
		symbol: "USE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x29B9723A3D88fe4a0B78134FD209433443A36b23",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH",
		symbol: "usETH"
	},
	{
		address: "0x3263B85A9E52CDae86E9B1560e2e04fB357c42AC",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH 2x",
		symbol: "usETH2x"
	},
	{
		address: "0x18Fab5aFF3B3bb8AfB0840861d831C228C1cb68f",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH 3x",
		symbol: "usETH3x"
	},
	{
		address: "0x0eBf28c5252124B898EcaA41A15Ca40db9Bf2bFc",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ETH 4x",
		symbol: "usETH4x"
	},
	{
		address: "0xE0e05c43c097B0982Db6c9d626c4eb9e95C3b9ce",
		chainId: 1,
		decimals: 18,
		name: "Unslashed Finance",
		symbol: "USF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB893A8049f250b57eFA8C62D51527a22404D7c9A",
		chainId: 1,
		decimals: 9,
		name: "American Shiba",
		symbol: "USHIBA"
	},
	{
		address: "0xC18e7a03f8986798323658dD8645f93aa79Ac5C9",
		chainId: 1,
		decimals: 9,
		name: "American Akita",
		symbol: "USKITA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa148AC0aF78B83b7c2CbD0caE93fBfb5DDE3EA1a",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC",
		symbol: "usKNC"
	},
	{
		address: "0x41750Acb926BDE7bc1DF6d21690d64EDFF9f20E7",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC 2x",
		symbol: "usKNC2x"
	},
	{
		address: "0x4052Ea0a92Be6a3fBEC83DCb0c96264377127805",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC 3x",
		symbol: "usKNC3x"
	},
	{
		address: "0xc8CC7e53e35cDa71af098360E800e9bB2Ee88F9e",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short KNC 4x",
		symbol: "usKNC4x"
	},
	{
		address: "0x2F766a83146F7eaEe2c635c9f9A291E4B86f4108",
		chainId: 1,
		decimals: 18,
		name: "Ubiquitous Social N",
		symbol: "USNS"
	},
	{
		address: "0xdBb0965046e142b4306ac453c7700BF768D6aC33",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short REP",
		symbol: "usREP"
	},
	{
		address: "0x9d94CAFb3cc67C5EfE660Fc988c51ABB711Cb7cA",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short REP 2x",
		symbol: "usREP2x"
	},
	{
		address: "0x5AD7BBb48b852c1C798BDB99911CBd59a5bFacfE",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short REP 3x",
		symbol: "usREP3x"
	},
	{
		address: "0x7eE12ffF0A8f975fCA5193825c215612A0eb07b7",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short REP 4x",
		symbol: "usREP4x"
	},
	{
		address: "0xa47c8bf37f92aBed4A126BDA807A7b7498661acD",
		chainId: 1,
		decimals: 18,
		name: "Wrapped UST",
		symbol: "UST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEC58d3aefc9AAa2E0036FA65F70d569f49D9d1ED",
		chainId: 1,
		decimals: 6,
		name: "uSTONKS Index Token",
		symbol: "USTONKS-APR21"
	},
	{
		address: "0x9DFC724c04f3ef1B9D539DCD0f8e4391A8b86FA1",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short WBTC",
		symbol: "usWBTC"
	},
	{
		address: "0x734317817bCf7254E6728B5A448A981D57d0a4fa",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short WBTC 2x",
		symbol: "usWBTC2x"
	},
	{
		address: "0xf7F59e42eea2F2F4DB6d54Ca87d5a17111ae1a7f",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short WBTC 3x",
		symbol: "usWBTC3x"
	},
	{
		address: "0x319ACBdB595867C1DC6aB9C5278Ea937aCDBeC58",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short WBTC 4x",
		symbol: "usWBTC4x"
	},
	{
		address: "0x43baf2ec0C4236B661a84FD40EC076546E3Bb9Fd",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ZRX",
		symbol: "usZRX"
	},
	{
		address: "0xcedf540D158eB62dfdcde8398c3037b54705BcEB",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ZRX 2x",
		symbol: "usZRX2x"
	},
	{
		address: "0x903214d3d3616d8Dc5cCB3d40A435DcA08F08010",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ZRX 3x",
		symbol: "usZRX3x"
	},
	{
		address: "0xde37db4269C6dfD4c81B9A11400d1BcBEeC06515",
		chainId: 1,
		decimals: 18,
		name: "bZx Perpetual Short ZRX 4x",
		symbol: "usZRX4x"
	},
	{
		address: "0xdc9Ac3C20D1ed0B540dF9b1feDC10039Df13F99c",
		chainId: 1,
		decimals: 18,
		name: "UTRUST",
		symbol: "UTK"
	},
	{
		address: "0x9e3319636e2126e3c0bc9e3134AEC5e1508A46c7",
		chainId: 1,
		decimals: 18,
		name: "Universa",
		symbol: "UTNP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1F8f123bf24849443a56eD9fC42b9265b7F3A39a",
		chainId: 1,
		decimals: 18,
		name: "UniTopia Token",
		symbol: "UTO"
	},
	{
		address: "0x99f2B69ee2468C834A634FF50d930aE64e3e500f",
		chainId: 1,
		decimals: 18,
		name: "Utrin",
		symbol: "UTRIN"
	},
	{
		address: "0x16f812Be7FfF02cAF662B85d5d58a5da6572D4Df",
		chainId: 1,
		decimals: 8,
		name: "United Traders Toke",
		symbol: "UTT"
	},
	{
		address: "0xa58a4f5c4Bb043d2CC1E170613B74e767c94189B",
		chainId: 1,
		decimals: 18,
		name: "UTU Coin",
		symbol: "UTU"
	},
	{
		address: "0xc6BF2A2A43cA360bb0ec6770F57f77CddE64Bb3F",
		chainId: 1,
		decimals: 8,
		name: "UnityDAO",
		symbol: "UTY"
	},
	{
		address: "0x3d9233F15BB93C78a4f07B5C5F7A018630217cB3",
		chainId: 1,
		decimals: 18,
		name: "Unicly Genesis Coll",
		symbol: "UUNICLY"
	},
	{
		address: "0xBc5991cCd8cAcEba01edC44C2BB9832712c29cAB",
		chainId: 1,
		decimals: 6,
		name: "Unagii USD Coin",
		symbol: "UUSDC"
	},
	{
		address: "0x178Bf8fD04b47D2De3eF3f6b3D112106375ad584",
		chainId: 1,
		decimals: 6,
		name: "Unagii Tether USD",
		symbol: "UUSDT"
	},
	{
		address: "0xD16c79c8A39D44B2F3eB45D2019cd6A42B03E2A9",
		chainId: 1,
		decimals: 18,
		name: "uUSDwETH Synthetic",
		symbol: "UUSDWETH-DEC"
	},
	{
		address: "0x3543638eD4a9006E4840B105944271Bcea15605D",
		chainId: 1,
		decimals: 18,
		name: "U Network",
		symbol: "UUU"
	},
	{
		address: "0x3ac7A71B97183E3Db7722c75EAa8dF2C1a0badFC",
		chainId: 1,
		decimals: 24,
		name: "Unicly Waifu Collec",
		symbol: "UWAIFU"
	},
	{
		address: "0x3aF5Ba94C29a8407785f5f6d90eF5d69a8EB2436",
		chainId: 1,
		decimals: 8,
		name: "Unagii Wrapped Bitc",
		symbol: "UWBTC"
	},
	{
		address: "0xdbDD6F355A37b94e6C7D32fef548e98A280B8Df5",
		chainId: 1,
		decimals: 18,
		name: "UniWhales",
		symbol: "UWL"
	},
	{
		address: "0xBdCd5faFe4336a844233EBb0aFF845D6B2100899",
		chainId: 1,
		decimals: 18,
		name: "Uze Tokens",
		symbol: "UZE"
	},
	{
		address: "0x66e5D4063219a54A8244078AFFB49E23982D9640",
		chainId: 1,
		decimals: 8,
		name: "UZURAS",
		symbol: "UZZ"
	},
	{
		address: "0xe7aE6D0C56CACaf007b7e4d312f9af686a9E9a04",
		chainId: 1,
		decimals: 18,
		name: "Vabble",
		symbol: "VAB"
	},
	{
		address: "0x9F801c1F02AF03cC240546DadEf8e56Cd46EA2E9",
		chainId: 1,
		decimals: 18,
		name: "Vaiot",
		symbol: "VAI"
	},
	{
		address: "0xe88f8313e61A97cEc1871EE37fBbe2a8bf3ed1E4",
		chainId: 1,
		decimals: 18,
		name: "Sora Validator Toke",
		symbol: "VAL"
	},
	{
		address: "0x297E4e5e59Ad72B1B0A2fd446929e76117be0E0a",
		chainId: 1,
		decimals: 18,
		name: "SMART VALOR",
		symbol: "VALOR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x49E833337ECe7aFE375e44F4E3e8481029218E5c",
		chainId: 1,
		decimals: 18,
		name: "Value DeFi",
		symbol: "VALUE"
	},
	{
		address: "0xb2C822a1b923E06Dbd193d2cFc7ad15388EA09DD",
		chainId: 1,
		decimals: 18,
		name: "Vampire Protocol",
		symbol: "VAMP"
	},
	{
		address: "0x790BaF0C914898C62163A61F150637D4bd180697",
		chainId: 1,
		decimals: 18,
		name: "Nirvana",
		symbol: "VANA"
	},
	{
		address: "0x4EDD66235349E353eb8CB8e40596599644bfE91c",
		chainId: 1,
		decimals: 18,
		name: "Vanywhere",
		symbol: "VANY"
	},
	{
		address: "0x861b2456ac1A6Ab5fb5c72aa456091F23DdEC1cc",
		chainId: 1,
		decimals: 18,
		name: "Vaultz",
		symbol: "VAULTZ"
	},
	{
		address: "0xB8366948B4A3F07BcBf14EB1739daA42A26b07c4",
		chainId: 1,
		decimals: 18,
		name: "VALOBIT",
		symbol: "VBIT"
	},
	{
		address: "0x48Fb253446873234F2fEBbF9BdeAA72d9d387f94",
		chainId: 1,
		decimals: 18,
		name: "Bancor Governance T",
		symbol: "VBNT"
	},
	{
		address: "0x1Ffe24629f1B3dF74fc0f6E5D086F2fd09258Ff2",
		chainId: 1,
		decimals: 18,
		name: "VBT",
		symbol: "VBT"
	},
	{
		address: "0xe1406825186D63980fd6e2eC61888f7B91C4bAe4",
		chainId: 1,
		decimals: 18,
		name: "vBTC",
		symbol: "vBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6DCcF9C0aB71dAc26b7F7886E43a2B433806c590",
		chainId: 1,
		decimals: 18,
		name: "vibrant",
		symbol: "VBX"
	},
	{
		address: "0xB72B31907C1C95F3650b64b2469e08EdACeE5e8F",
		chainId: 1,
		decimals: 18,
		name: "bZx Vesting Token",
		symbol: "vBZRX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9746953F5b1324a78132895cfD263F417B0faAE3",
		chainId: 1,
		decimals: 18,
		name: "ValueCyberToken",
		symbol: "VCT"
	},
	{
		address: "0x9a9bB9b4b11BF8eccff84B58a6CCCCD4058A7f0D",
		chainId: 1,
		decimals: 8,
		name: "Bitcoin Card",
		symbol: "VD"
	},
	{
		address: "0x57C75ECCc8557136D32619a191fBCDc88560d711",
		chainId: 1,
		decimals: 0,
		name: "VeriDocGlobal",
		symbol: "VDG"
	},
	{
		address: "0x82BD526bDB718C6d4DD2291Ed013A5186cAE2DCa",
		chainId: 1,
		decimals: 18,
		name: "dutyof.care Token",
		symbol: "VDOC"
	},
	{
		address: "0x91e64F39C1FE14492e8FDf5A8B0f305BD218C8A1",
		chainId: 1,
		decimals: 18,
		name: "Vodi X",
		symbol: "VDX"
	},
	{
		address: "0x340D2bdE5Eb28c1eed91B2f790723E3B160613B7",
		chainId: 1,
		decimals: 18,
		name: "BLOCKv",
		symbol: "VEE"
	},
	{
		address: "0xFADe17a07ba3B480aA1714c3724a52D4C57d410E",
		chainId: 1,
		decimals: 8,
		name: "Vegan",
		symbol: "VEGAN"
	},
	{
		address: "0xD850942eF8811f2A866692A623011bDE52a462C1",
		chainId: 1,
		decimals: 18,
		name: "VeChain",
		symbol: "VEN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEbeD4fF9fe34413db8fC8294556BBD1528a4DAca",
		chainId: 1,
		decimals: 3,
		name: "VENUS",
		symbol: "VENUS"
	},
	{
		address: "0x166F1a7eCAe00bd43876A25B10a63C575e05c0e7",
		chainId: 1,
		decimals: 18,
		name: "VERA",
		symbol: "VERA"
	},
	{
		address: "0x8f3470A7388c05eE4e7AF3d01D8C722b0FF52374",
		chainId: 1,
		decimals: 18,
		name: "Veritaseum",
		symbol: "VERI",
		extensions: {
			color: "#ff9933",
			isVerified: true
		}
	},
	{
		address: "0x1B879d3812F2Ade1214264655B473910e0caF1e6",
		chainId: 1,
		decimals: 18,
		name: "VersiCoin",
		symbol: "VERSI"
	},
	{
		address: "0x37F04d2C3AE075Fad5483bB918491F656B12BDB6",
		chainId: 1,
		decimals: 8,
		name: "VestChain",
		symbol: "VEST",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x3AeF8e803BD9be47e69b9f36487748d30D940b96",
		chainId: 1,
		decimals: 18,
		name: "Vesta",
		symbol: "VESTA"
	},
	{
		address: "0xc3D088842DcF02C13699F936BB83DFBBc6f721Ab",
		chainId: 1,
		decimals: 18,
		name: "Voucher ETH",
		symbol: "VETH"
	},
	{
		address: "0x4Ba6dDd7b89ed838FEd25d208D4f644106E34279",
		chainId: 1,
		decimals: 18,
		name: "Vether",
		symbol: "VETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x898BAD2774EB97cF6b94605677F43b41871410B1",
		chainId: 1,
		decimals: 18,
		name: "vEth2",
		symbol: "VETH2"
	},
	{
		address: "0x8e87F1811De0025D2335174dbc7338a43dF6d7cc",
		chainId: 1,
		decimals: 18,
		name: "Virtual Goods Token",
		symbol: "VGO"
	},
	{
		address: "0x16987C021C14ca1045cd0afEbB33c124a58Bf16C",
		chainId: 1,
		decimals: 2,
		name: "Voyager",
		symbol: "VGR"
	},
	{
		address: "0xCc394f10545AeEf24483d2347B32A34a44F20E6F",
		chainId: 1,
		decimals: 18,
		name: "Vault Guardian Toke",
		symbol: "VGT"
	},
	{
		address: "0xe61eECfDBa2aD1669cee138f1919D08cEd070B83",
		chainId: 1,
		decimals: 18,
		name: "VGTGToken",
		symbol: "VGTG"
	},
	{
		address: "0x94236591125E935F5ac128Bb3d5062944C24958c",
		chainId: 1,
		decimals: 5,
		name: "VegaWallet Token",
		symbol: "VGW"
	},
	{
		address: "0x5Af2Be193a6ABCa9c8817001F45744777Db30756",
		chainId: 1,
		decimals: 8,
		name: "Voyager Token",
		symbol: "VGX"
	},
	{
		address: "0x8b6c3b7C01D9dB4393f9aa734750F36df1543E9A",
		chainId: 1,
		decimals: 18,
		name: "Vid",
		symbol: "VI"
	},
	{
		address: "0x2C974B2d0BA1716E644c1FC59982a89DDD2fF724",
		chainId: 1,
		decimals: 18,
		name: "Viberate",
		symbol: "VIB",
		extensions: {
			color: "#ff1f43",
			isVerified: true
		}
	},
	{
		address: "0xe8Ff5C9c75dEb346acAc493C463C8950Be03Dfba",
		chainId: 1,
		decimals: 18,
		name: "VIBE",
		symbol: "VIBE"
	},
	{
		address: "0x882448f83d90B2bf477Af2eA79327fDEA1335D93",
		chainId: 1,
		decimals: 18,
		name: "VIBEX Exchange Token",
		symbol: "VIBEX"
	},
	{
		address: "0xDfD5bb6cE8716822B2c9B255560194Ca3509BebC",
		chainId: 1,
		decimals: 9,
		name: "ViceToken",
		symbol: "VICEX"
	},
	{
		address: "0x2C9023bBc572ff8dc1228c7858A280046Ea8C9E5",
		chainId: 1,
		decimals: 18,
		name: "VideoCoin",
		symbol: "VID"
	},
	{
		address: "0xE35f19E4457A114A951781aaF421EC5266eF25Fe",
		chainId: 1,
		decimals: 18,
		name: "Vidiachange",
		symbol: "VIDA"
	},
	{
		address: "0x445f51299Ef3307dBD75036dd896565F5B4BF7A5",
		chainId: 1,
		decimals: 18,
		name: "V-ID Token",
		symbol: "VIDT"
	},
	{
		address: "0xfeF4185594457050cC9c23980d301908FE057Bb1",
		chainId: 1,
		decimals: 18,
		name: "VIDT Datalink",
		symbol: "VIDT"
	},
	{
		address: "0xC77b230F31b517F1ef362e59c173C2BE6540B5E8",
		chainId: 1,
		decimals: 18,
		name: "VIDY",
		symbol: "VIDY"
	},
	{
		address: "0x3D3D35bb9bEC23b06Ca00fe472b50E7A4c692C30",
		chainId: 1,
		decimals: 18,
		name: "Vidya",
		symbol: "VIDYA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF03f8D65BaFA598611C3495124093c56e8F638f0",
		chainId: 1,
		decimals: 18,
		name: "Viewly",
		symbol: "VIEW"
	},
	{
		address: "0xd2946be786F35c3Cc402C29b323647aBda799071",
		chainId: 1,
		decimals: 8,
		name: "VikkyToken",
		symbol: "VIKKY"
	},
	{
		address: "0xF3e014fE81267870624132ef3A646B8E83853a96",
		chainId: 1,
		decimals: 18,
		name: "VIN",
		symbol: "VIN"
	},
	{
		address: "0x3DB99ab08006aeFcC9600972eCA8C202396B4300",
		chainId: 1,
		decimals: 18,
		name: "Vinci",
		symbol: "VINCI"
	},
	{
		address: "0x010c282118aA76174CE5952572BA715CF60A0c9B",
		chainId: 1,
		decimals: 18,
		name: "VINX COIN STO",
		symbol: "VINX"
	},
	{
		address: "0xF406F7A9046793267bc276908778B29563323996",
		chainId: 1,
		decimals: 18,
		name: "APY vision",
		symbol: "VISION"
	},
	{
		address: "0xF938424F7210f31dF2Aee3011291b658f872e91e",
		chainId: 1,
		decimals: 18,
		name: "Visor",
		symbol: "VISR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x23b75Bc7AaF28e2d6628C3f424B3882F8f072a3c",
		chainId: 1,
		decimals: 18,
		name: "Vice Industry Token",
		symbol: "VIT"
	},
	{
		address: "0x81f8f0bb1cB2A06649E51913A151F0E7Ef6FA321",
		chainId: 1,
		decimals: 18,
		name: "VitaDAO",
		symbol: "VITA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1b793E49237758dBD8b752AFC9Eb4b329d5Da016",
		chainId: 1,
		decimals: 18,
		name: "Vite",
		symbol: "VITE"
	},
	{
		address: "0x519475b31653E46D20cD09F9FdcF3B12BDAcB4f5",
		chainId: 1,
		decimals: 18,
		name: "Viuly",
		symbol: "VIU"
	},
	{
		address: "0x49Bf0220C9Ce17E52dCcA3d217231746D676085B",
		chainId: 1,
		decimals: 18,
		name: "Vixco",
		symbol: "VIX"
	},
	{
		address: "0xFf2cF2A74445a115468e84FB42eDfe1D9d73CF2b",
		chainId: 1,
		decimals: 8,
		name: "Token Vizcoin",
		symbol: "Viz"
	},
	{
		address: "0x5c62Da804298D5972a323C80B539B8E7517a0dDe",
		chainId: 1,
		decimals: 18,
		name: "VENJOCOIN",
		symbol: "VJC"
	},
	{
		address: "0x922aC473A3cC241fD3a0049Ed14536452D58D73c",
		chainId: 1,
		decimals: 18,
		name: "Vetri",
		symbol: "VLD"
	},
	{
		address: "0x3989F36540052668c340a53aaeAcB46D6cF0Dd6C",
		chainId: 1,
		decimals: 18,
		name: "Valireum",
		symbol: "VLM"
	},
	{
		address: "0x98ad9B32dD10f8D8486927D846D4Df8BAf39Abe2",
		chainId: 1,
		decimals: 18,
		name: "VELO Token",
		symbol: "VLO"
	},
	{
		address: "0x6b785a0322126826d8226d77e173d75DAfb84d11",
		chainId: 1,
		decimals: 18,
		name: "Bankroll Vault",
		symbol: "VLT"
	},
	{
		address: "0xAF5DB2cc35Ef9BbA3cfa5f8FAeEDcf9b4e2F286F",
		chainId: 1,
		decimals: 8,
		name: "Voltium",
		symbol: "VLTM"
	},
	{
		address: "0xd811250b7fE83150cBB3d70a892fCE6189fB3e08",
		chainId: 1,
		decimals: 18,
		name: "Virtual Mind Chain",
		symbol: "VMC"
	},
	{
		address: "0xC343f099d3E41aA5C1b59470450e21E92E2d840b",
		chainId: 1,
		decimals: 18,
		name: "VeriME",
		symbol: "VME",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x00eA6f91B00E080e816f1bB2faD71b0fe1528983",
		chainId: 1,
		decimals: 18,
		name: "VCOIN",
		symbol: "VN"
	},
	{
		address: "0x1F3F677Ecc58F6A1F9e2CF410dF4776a8546b5DE",
		chainId: 1,
		decimals: 0,
		name: "VNDC",
		symbol: "VNDC"
	},
	{
		address: "0xbf900809f4C73e5a3476eb183d8b06a27e61F8E5",
		chainId: 1,
		decimals: 12,
		name: "Vanilla",
		symbol: "VNL"
	},
	{
		address: "0x1017B147b05942EAd495E2ad6d606EF3C94B8FD0",
		chainId: 1,
		decimals: 12,
		name: "Vanilla",
		symbol: "VNL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB97FaF860045483E0C7F08c56acb31333084a988",
		chainId: 1,
		decimals: 18,
		name: "Vanilla Network",
		symbol: "VNLA"
	},
	{
		address: "0x97941Ff1962026955852E9609E202D1058BC0f48",
		chainId: 1,
		decimals: 8,
		name: "Va Na Su",
		symbol: "VNS"
	},
	{
		address: "0xe912b8bA2513D7e29b7b2E5B14398dbf77503Fb4",
		chainId: 1,
		decimals: 18,
		name: "InventoryClub",
		symbol: "VNT"
	},
	{
		address: "0x69d2779533a4D2c780639713558B2cC98c46A9b7",
		chainId: 1,
		decimals: 8,
		name: "VNT Chain",
		symbol: "VNT"
	},
	{
		address: "0xd0f05D3D4e4d1243Ac826d8c6171180c58eaa9BC",
		chainId: 1,
		decimals: 18,
		name: "Value Network Token",
		symbol: "VNTW"
	},
	{
		address: "0xC650f5514AE1A3a27930922145ce49E8A91b91AB",
		chainId: 1,
		decimals: 18,
		name: "VENOTY",
		symbol: "VNTY"
	},
	{
		address: "0x1563D521ba309e2Ad9f4aFfD6f4dE9759E8d4F21",
		chainId: 1,
		decimals: 18,
		name: "VisionX",
		symbol: "VNX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x00fC270C9cc13e878Ab5363D00354bebF6f05C15",
		chainId: 1,
		decimals: 18,
		name: "VNX Exchange",
		symbol: "VNXLU"
	},
	{
		address: "0xc3bC9Eb71f75Ec439A6b6C8E8b746fCF5b62F703",
		chainId: 1,
		decimals: 18,
		name: "VORMACOIN",
		symbol: "VOC"
	},
	{
		address: "0xB5Ca46cF1da09248126682a7bd72401fd7A6b151",
		chainId: 1,
		decimals: 18,
		name: "Provoco",
		symbol: "VOCO"
	},
	{
		address: "0x2e2364966267B5D7D2cE6CD9A9B5bD19d9C7C6A9",
		chainId: 1,
		decimals: 18,
		name: "Voice Token",
		symbol: "VOICE"
	},
	{
		address: "0x83eEA00D838f92dEC4D1475697B9f4D3537b56E3",
		chainId: 1,
		decimals: 8,
		name: "VOISE",
		symbol: "VOISE"
	},
	{
		address: "0x5166E09628b696285E3A151e84FB977736a83575",
		chainId: 1,
		decimals: 18,
		name: "Volatility Protocol",
		symbol: "VOL"
	},
	{
		address: "0x14D1C83DF4dECEE9dEB14eE851f109f0101A6631",
		chainId: 1,
		decimals: 18,
		name: "Volts Finance",
		symbol: "VOLTS"
	},
	{
		address: "0x60715E436c37444E29772c0D26a98Ae1E8E1A989",
		chainId: 1,
		decimals: 18,
		name: "Voltz",
		symbol: "VOLTZ"
	},
	{
		address: "0x1BBf25e71EC48B84d773809B4bA55B6F4bE946Fb",
		chainId: 1,
		decimals: 18,
		name: "Vow",
		symbol: "VOW",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x12D102F06da35cC0111EB58017fd2Cd28537d0e1",
		chainId: 1,
		decimals: 18,
		name: "Vox Finance",
		symbol: "VOX"
	},
	{
		address: "0x5EeAA2DCb23056F4E8654a349E57eBE5e76b5e6e",
		chainId: 1,
		decimals: 18,
		name: "Virtue Poker Points",
		symbol: "VPP"
	},
	{
		address: "0xF411903cbC70a74d22900a5DE66A2dda66507255",
		chainId: 1,
		decimals: 18,
		name: "Verasity",
		symbol: "VRA"
	},
	{
		address: "0xF722B01910F93B84EDa9CA128b9F05821A41EAe1",
		chainId: 1,
		decimals: 18,
		name: "Vrenelium",
		symbol: "VRE"
	},
	{
		address: "0x3E6a17E1913b2f49Ceb6803E46094066ff5f9c78",
		chainId: 1,
		decimals: 9,
		name: "VaporRISE",
		symbol: "VRISE"
	},
	{
		address: "0x72377f31e30a405282b522d588AEbbea202b4f23",
		chainId: 1,
		decimals: 18,
		name: "Varen",
		symbol: "VRN"
	},
	{
		address: "0x10BC518c32fbAE5e38Ecb50A612160571bD81e44",
		chainId: 1,
		decimals: 8,
		name: "VeraOne",
		symbol: "VRO"
	},
	{
		address: "0x92E78dAe1315067a8819EFD6dCA432de9DCdE2e9",
		chainId: 1,
		decimals: 6,
		name: "Veros",
		symbol: "VRS"
	},
	{
		address: "0xeDBaF3c5100302dCddA53269322f3730b1F0416d",
		chainId: 1,
		decimals: 5,
		name: "Veros",
		symbol: "VRS"
	},
	{
		address: "0xAbC430136A4dE71c9998242de8c1b4B97D2b9045",
		chainId: 1,
		decimals: 6,
		name: "Veros",
		symbol: "VRS"
	},
	{
		address: "0x87DE305311D5788e8da38D19bb427645b09CB4e5",
		chainId: 1,
		decimals: 18,
		name: "Verox",
		symbol: "VRX"
	},
	{
		address: "0x35de3EccACcB02E627062b5D63aA941b137288fe",
		chainId: 1,
		decimals: 18,
		name: "Value Set Dollar",
		symbol: "VSD"
	},
	{
		address: "0xBA3a79D758f19eFe588247388754b8e4d6EddA81",
		chainId: 1,
		decimals: 18,
		name: "VeriSafe",
		symbol: "VSF"
	},
	{
		address: "0xAC9ce326e95f51B5005e9fE1DD8085a01F18450c",
		chainId: 1,
		decimals: 18,
		name: "VeriSafe",
		symbol: "VSF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5c543e7AE0A1104f78406C340E9C64FD9fCE5170",
		chainId: 1,
		decimals: 18,
		name: "vSlice",
		symbol: "VSL"
	},
	{
		address: "0xDb144CD0F15eE40AaC5602364B470d703d7e16b6",
		chainId: 1,
		decimals: 18,
		name: "vSlice",
		symbol: "VSL"
	},
	{
		address: "0x456AE45c0CE901E2e7c99c0718031cEc0A7A59Ff",
		chainId: 1,
		decimals: 18,
		name: "Vision Network",
		symbol: "VSN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1b40183EFB4Dd766f11bDa7A7c3AD8982e998421",
		chainId: 1,
		decimals: 18,
		name: "Vesper Finance",
		symbol: "VSP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x44e28f2aCC84C36373BAdcd681749D38E01e2cC4",
		chainId: 1,
		decimals: 18,
		name: "vSpaceX",
		symbol: "VSPACEX"
	},
	{
		address: "0x3e1e15AFD5d50b090aDcC88160dD84a48EA1B80E",
		chainId: 1,
		decimals: 18,
		name: "vSPY",
		symbol: "VSPY"
	},
	{
		address: "0xf0E3543744AFcEd8042131582f2A19b6AEb82794",
		chainId: 1,
		decimals: 18,
		name: "Variable Time Dolla",
		symbol: "VTD"
	},
	{
		address: "0xd957E08ac5421E2C28510586B57d095E5094836a",
		chainId: 1,
		decimals: 18,
		name: "VorteX Network",
		symbol: "VTX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xceb286C9604c542d3cc08b41AA6C9675B078A832",
		chainId: 1,
		decimals: 18,
		name: "Vortex DeFi",
		symbol: "VTX"
	},
	{
		address: "0x677ddbd918637E5F2c79e164D402454dE7dA8619",
		chainId: 1,
		decimals: 18,
		name: "Vesper V Dollar",
		symbol: "VUSD"
	},
	{
		address: "0x3479B0ACF875405D7853f44142FE06470a40f6CC",
		chainId: 1,
		decimals: 18,
		name: "Value USD",
		symbol: "VUSD"
	},
	{
		address: "0x4b96bf1feF93A216914fc843D81207A027ce52b3",
		chainId: 1,
		decimals: 18,
		name: "Vuulr Token",
		symbol: "VUU"
	},
	{
		address: "0xbA4cFE5741b357FA371b506e5db0774aBFeCf8Fc",
		chainId: 1,
		decimals: 18,
		name: "vVSP",
		symbol: "VVSP"
	},
	{
		address: "0x755be920943eA95e39eE2DC437b268917B580D6e",
		chainId: 1,
		decimals: 18,
		name: "VersoView",
		symbol: "VVT"
	},
	{
		address: "0x14F0a12A43c36C49D4b403dD6e1A9B8222BE456C",
		chainId: 1,
		decimals: 18,
		name: "VINX COIN",
		symbol: "VXC"
	},
	{
		address: "0x8Ba009Cad493C7646e31D69428AB9A54F47B3779",
		chainId: 1,
		decimals: 18,
		name: "VirgoX Token",
		symbol: "VXT"
	},
	{
		address: "0x7D29A64504629172a429e64183D6673b9dAcbFCe",
		chainId: 1,
		decimals: 18,
		name: "Vectorspace AI",
		symbol: "VXV"
	},
	{
		address: "0x3A1c1d1c06bE03cDDC4d3332F7C20e1B37c97CE9",
		chainId: 1,
		decimals: 18,
		name: "Vybe",
		symbol: "VYBE"
	},
	{
		address: "0x9720b467a710382A232a32F540bDCed7d662a10B",
		chainId: 1,
		decimals: 18,
		name: "Vezt",
		symbol: "VZT"
	},
	{
		address: "0x777ba4d2393Ea77893322743c7D817eFEF872204",
		chainId: 1,
		decimals: 18,
		name: "W3bPUSH",
		symbol: "W3B"
	},
	{
		address: "0x4BBbC57aF270138Ef2FF2C50DbfAD684e9E0e604",
		chainId: 1,
		decimals: 18,
		name: "WABnetwork",
		symbol: "WAB"
	},
	{
		address: "0x286BDA1413a2Df81731D4930ce2F862a35A609fE",
		chainId: 1,
		decimals: 18,
		name: "Tael",
		symbol: "WABI",
		extensions: {
			color: "#399b32",
			isVerified: true
		}
	},
	{
		address: "0x2f7b88458f4E6D9AbB19396b5a08b8bA7f3d4b20",
		chainId: 1,
		decimals: 6,
		name: "Wave Platform",
		symbol: "WAE"
	},
	{
		address: "0x0A8b16b27D5219c8C6b57D5442CE31D81573EeE4",
		chainId: 1,
		decimals: 8,
		name: "Wrapped ATROMG8",
		symbol: "WAG8"
	},
	{
		address: "0xB2279B6769CFBa691416F00609b16244c0cF4b20",
		chainId: 1,
		decimals: 18,
		name: "Waifu Token",
		symbol: "WAIF",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE7F4c89032A2488D327323548AB0459676269331",
		chainId: 1,
		decimals: 18,
		name: "WAIFU Vault  NFTX",
		symbol: "WAIFU"
	},
	{
		address: "0x9f6513ED2b0DE89218E97DB4A5115ba04Be449f1",
		chainId: 1,
		decimals: 18,
		name: "Wak Coin",
		symbol: "WAK"
	},
	{
		address: "0x15bCDFAd12498DE8a922E62442Ae4CC4bd33bd25",
		chainId: 1,
		decimals: 18,
		name: "Walletreum",
		symbol: "WALT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5Fc6DE61258e63706543bb57619b99cC0E5a5A1F",
		chainId: 1,
		decimals: 18,
		name: "Wanchain",
		symbol: "WAN",
		extensions: {
			color: "#136aad",
			isVerified: true
		}
	},
	{
		address: "0x3383c5a8969Dc413bfdDc9656Eb80A1408E4bA20",
		chainId: 1,
		decimals: 18,
		name: "Wrapped ANATHA",
		symbol: "WANATHA"
	},
	{
		address: "0x27f610BF36ecA0939093343ac28b1534a721DBB4",
		chainId: 1,
		decimals: 18,
		name: "WandX",
		symbol: "WAND"
	},
	{
		address: "0xf4A81C18816C9B0AB98FAC51B36Dcb63b0E58Fde",
		chainId: 1,
		decimals: 18,
		name: "YieldWars",
		symbol: "WAR"
	},
	{
		address: "0x4FaDC7A98f2Dc96510e42dD1A74141eEae0C1543",
		chainId: 1,
		decimals: 12,
		name: "Wrapped AR",
		symbol: "WAR"
	},
	{
		address: "0x4d75D9e37667a2d4677Ec3d74bDD9049326Ad8d6",
		chainId: 1,
		decimals: 18,
		name: "NFT Wars",
		symbol: "WAR"
	},
	{
		address: "0xEd40834A13129509A89be39a9bE9C0E96A0DDd71",
		chainId: 1,
		decimals: 18,
		name: "Warp Finance",
		symbol: "WARP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0c572544a4Ee47904d54aaA6A970AF96B6f00E1b",
		chainId: 1,
		decimals: 18,
		name: "Wasder",
		symbol: "WAS"
	},
	{
		address: "0x896e145568624a498c5a909187363AE947631503",
		chainId: 1,
		decimals: 18,
		name: "WasabiX",
		symbol: "WASABI"
	},
	{
		address: "0x829A4cA1303383F1082B6B1fB937116e4b3b5605",
		chainId: 1,
		decimals: 18,
		name: "WorkChain App Token",
		symbol: "WATT"
	},
	{
		address: "0x1cF4592ebfFd730c7dc92c1bdFFDfc3B9EfCf29a",
		chainId: 1,
		decimals: 18,
		name: "Waves",
		symbol: "WAVES"
	},
	{
		address: "0x39Bb259F66E1C59d5ABEF88375979b4D20D98022",
		chainId: 1,
		decimals: 8,
		name: "WAX",
		symbol: "WAX",
		extensions: {
			color: "#f89022",
			isVerified: true
		}
	},
	{
		address: "0x7a2Bc711E19ba6aff6cE8246C546E8c4B4944DFD",
		chainId: 1,
		decimals: 8,
		name: "WAXE",
		symbol: "WAXE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x217f96737b39f9b9211767cb6aeF5DbAe2Fe9402",
		chainId: 1,
		decimals: 8,
		name: "Bazaar Gift Token",
		symbol: "WAY"
	},
	{
		address: "0x74951B677de32D596EE851A233336926e6A2cd09",
		chainId: 1,
		decimals: 7,
		name: "WeBetCrypto",
		symbol: "WBA"
	},
	{
		address: "0x15334DCb171e8b65D6650321581dcA83bE870115",
		chainId: 1,
		decimals: 8,
		name: "Wrapped BIND",
		symbol: "wBIND",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbaA2C10EA6409B58870B5C773C0Ff429AF7C6F20",
		chainId: 1,
		decimals: 18,
		name: "BuyPay",
		symbol: "WBPC"
	},
	{
		address: "0xe2Ee1ac57B2E5564522b2dE064A47b3f98B0e9c9",
		chainId: 1,
		decimals: 18,
		name: "Whalesburg",
		symbol: "WBT"
	},
	{
		address: "0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
		chainId: 1,
		decimals: 8,
		name: "Wrapped Bitcoin",
		symbol: "WBTC",
		extensions: {
			color: "#FF9900",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0xbB97e381F1d1e94ffa2A5844F6875e6146981009",
		chainId: 1,
		decimals: 18,
		name: "WiBX",
		symbol: "WBX"
	},
	{
		address: "0x21686F8ce003a95c99aCd297E302FAACf742F7d4",
		chainId: 1,
		decimals: 6,
		name: "Wrapped Conceal",
		symbol: "WCCX"
	},
	{
		address: "0xAb51e836BdCbc7Cc06D926C50D88328f1BB17148",
		chainId: 1,
		decimals: 18,
		name: "World Credit Diamon",
		symbol: "WCDC"
	},
	{
		address: "0xE452E6Ea2dDeB012e20dB73bf5d3863A3Ac8d77a",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Celo",
		symbol: "WCELO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc221b7E65FfC80DE234bbB6667aBDd46593D34F0",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Centrifuge",
		symbol: "WCFG"
	},
	{
		address: "0x09fE5f0236F0Ea5D930197DCE254d77B04128075",
		chainId: 1,
		decimals: 18,
		name: "Wrapped CryptoKitties",
		symbol: "WCK",
		extensions: {
			color: "#FF8FE5",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x8F936fE0faF0604c9C0Ef2406bde0A65365515d6",
		chainId: 1,
		decimals: 18,
		name: "WorldCoinNetwork",
		symbol: "WCN"
	},
	{
		address: "0xd44bb6663936CAb1310584A277f7DAa6943d4904",
		chainId: 1,
		decimals: 8,
		name: "Winco",
		symbol: "WCO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4185cf99745B2a20727B37EE798193DD4a56cDfa",
		chainId: 1,
		decimals: 18,
		name: "DEUS Synthetic Coin",
		symbol: "WCOINBASE-IOU"
	},
	{
		address: "0xa0afAA285Ce85974c3C881256cB7F225e3A1178a",
		chainId: 1,
		decimals: 18,
		name: "Wrapped CRES",
		symbol: "wCRES",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6a0A97E47d15aAd1D132a1Ac79a480E3F2079063",
		chainId: 1,
		decimals: 18,
		name: "WePower",
		symbol: "WCT"
	},
	{
		address: "0xad3E3Fc59dff318BecEaAb7D00EB4F68b1EcF195",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Celo USD",
		symbol: "WCUSD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xC014186Cf1Ba36032aaEc7f96088f09eb3934347",
		chainId: 1,
		decimals: 18,
		name: "WeCoOwn",
		symbol: "WCX"
	},
	{
		address: "0x29c8c00ec4d2Aac7232D4B974707b850c1c28285",
		chainId: 1,
		decimals: 18,
		name: "Wrapped DASH",
		symbol: "wDASH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x123151402076fc819B7564510989e475c9cD93CA",
		chainId: 1,
		decimals: 8,
		name: "Wrapped DGLD",
		symbol: "wDGLD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD61B60Ccbdaf09c2e036c72734Adb3270ed27192",
		chainId: 1,
		decimals: 18,
		name: "WaterDrop",
		symbol: "WDP"
	},
	{
		address: "0xD110bB8a24B100c37aF7310416E685af807C1F10",
		chainId: 1,
		decimals: 18,
		name: "VODA TOKEN",
		symbol: "WDT"
	},
	{
		address: "0x840fe75ABfaDc0F2d54037829571B2782e919ce4",
		chainId: 1,
		decimals: 18,
		name: "Webcoin",
		symbol: "WEB"
	},
	{
		address: "0xf344490ABd414DaFa97f34c8Ca501B0aa5Bf8873",
		chainId: 1,
		decimals: 1,
		name: "Webcoin",
		symbol: "WEB"
	},
	{
		address: "0x15A664416E42766A6cC0a1221d9C088548a6E731",
		chainId: 1,
		decimals: 8,
		name: "WEBN token",
		symbol: "WEBN"
	},
	{
		address: "0xcC1a8BD438BebC4b2a885a34475BB974f2124317",
		chainId: 1,
		decimals: 18,
		name: "Whole Earth Coin",
		symbol: "WEC"
	},
	{
		address: "0x1b06B43f3b0bBAd73784d858c782e029F3F5Af14",
		chainId: 1,
		decimals: 18,
		name: "Bitwell Token",
		symbol: "WELL"
	},
	{
		address: "0x46f4E420C75401494a39B70653F4bbb88aD2d728",
		chainId: 1,
		decimals: 6,
		name: "WenBurn",
		symbol: "WENB"
	},
	{
		address: "0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Ether",
		symbol: "WETH",
		extensions: {
			color: "#25292E",
			isVerified: true
		}
	},
	{
		address: "0x6e1A19F235bE7ED8E3369eF73b196C07257494DE",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Filecoin",
		symbol: "WFIL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBa1ED22C69ad00739EE2b4aBD70e270BE9e87eE2",
		chainId: 1,
		decimals: 18,
		name: "WebFlix",
		symbol: "WFX"
	},
	{
		address: "0xa10740ff9FF6852eac84cdcfF9184e1D6d27C057",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Gen 0 CryptoKitties",
		symbol: "WG0",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x219803d17f3067eb53d521ba8948d2734f402f7d",
		chainId: 1,
		decimals: 4,
		name: "WGM",
		symbol: "WGM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdD94842C15abfe4c9bAFE4222adE02896Beb064c",
		chainId: 1,
		decimals: 18,
		name: "W Green Pay",
		symbol: "WGP"
	},
	{
		address: "0xC237868a9c5729bdF3173dDDacaa336a0a5BB6e0",
		chainId: 1,
		decimals: 8,
		name: "Wagerr",
		symbol: "WGR"
	},
	{
		address: "0x804E26C4EFf0BB196b805bDFb5B29AB828cF0B1f",
		chainId: 1,
		decimals: 18,
		name: "Whale Coin",
		symbol: "WHALE"
	},
	{
		address: "0x9355372396e3F6daF13359B7b607a3374cc638e0",
		chainId: 1,
		decimals: 4,
		name: "WHALE",
		symbol: "WHALE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF4FE95603881D0e07954fD7605E0e9a916e42C44",
		chainId: 1,
		decimals: 18,
		name: "WHEN Token",
		symbol: "WHEN"
	},
	{
		address: "0xCa5d29B3e74D59EBcDF09111495d86F319886A40",
		chainId: 1,
		decimals: 18,
		name: "WHEY",
		symbol: "WHEY"
	},
	{
		address: "0x5F0E628B693018f639D10e4A4F59BD4d8B2B6B44",
		chainId: 1,
		decimals: 18,
		name: "Whiteheart",
		symbol: "WHITE"
	},
	{
		address: "0x2aF72850c504dDD3c1876C66a914cAee7Ff8a46A",
		chainId: 1,
		decimals: 18,
		name: "WhaleRoom",
		symbol: "WHL"
	},
	{
		address: "0xe200641890772FCe8eE6EDc5354cCEa30ac92F49",
		chainId: 1,
		decimals: 18,
		name: "WhoHas",
		symbol: "WHO"
	},
	{
		address: "0xe933c0Cd9784414d5F278C114904F5A84b396919",
		chainId: 1,
		decimals: 18,
		name: "WhoHas",
		symbol: "WHO"
	},
	{
		address: "0x3F17Dd476faF0a4855572F0B6ed5115D9bBA22AD",
		chainId: 1,
		decimals: 9,
		name: "Wibson",
		symbol: "WIB"
	},
	{
		address: "0x5e4ABE6419650CA839Ce5BB7Db422b881a6064bB",
		chainId: 1,
		decimals: 18,
		name: "Wi Coin",
		symbol: "WiC"
	},
	{
		address: "0x62CD07D414Ec50B68C7EcAa863a23d344f2d062f",
		chainId: 1,
		decimals: 0,
		name: "WickNote",
		symbol: "WIC"
	},
	{
		address: "0xBbE460dC4ac73f7C13A2A2feEcF9aCF6D5083F9b",
		chainId: 1,
		decimals: 18,
		name: "Wick Finance",
		symbol: "WICK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xe202873079913858f9Ba8795BA957A4Ad561ca24",
		chainId: 1,
		decimals: 18,
		name: "Wifi Coin",
		symbol: "WIFI"
	},
	{
		address: "0x66BaD545596fb17a0B4ebDC003a85dEF10E8F6Ae",
		chainId: 1,
		decimals: 18,
		name: "Wiki Token",
		symbol: "WIKI"
	},
	{
		address: "0xC98a910eDE52E7d5308525845F19e17470DbCCF7",
		chainId: 1,
		decimals: 8,
		name: "Wrapped ILCOIN",
		symbol: "WILC"
	},
	{
		address: "0xD3C00772B24D997A812249ca637a921e81357701",
		chainId: 1,
		decimals: 18,
		name: "Wild Crypto",
		symbol: "WILD"
	},
	{
		address: "0x08A75dbC7167714CeaC1a8e43a8d643A4EDd625a",
		chainId: 1,
		decimals: 18,
		name: "Wild Credit",
		symbol: "WILD"
	},
	{
		address: "0x2a3bFF78B79A009976EeA096a51A948a3dC00e34",
		chainId: 1,
		decimals: 18,
		name: "Wilder World",
		symbol: "WILD"
	},
	{
		address: "0x899338b84D25aC505a332aDCE7402d697D947494",
		chainId: 1,
		decimals: 8,
		name: "WCOIN",
		symbol: "WIN"
	},
	{
		address: "0xcB3df3108635932D912632ef7132d03EcFC39080",
		chainId: 1,
		decimals: 18,
		name: "Wing Shop",
		symbol: "WING"
	},
	{
		address: "0x667088b212ce3d06a1b553a7221E1fD19000d9aF",
		chainId: 1,
		decimals: 18,
		name: "Wings",
		symbol: "WINGS"
	},
	{
		address: "0x27460Aac4B005dE72E2326bd8391c27FB41780F8",
		chainId: 1,
		decimals: 18,
		name: "JustBet",
		symbol: "WINR"
	},
	{
		address: "0xDecade1c6Bf2cD9fb89aFad73e4a519C867adcF5",
		chainId: 1,
		decimals: 18,
		name: "Experty Wisdom Toke",
		symbol: "WIS"
	},
	{
		address: "0x66a0f676479Cee1d7373f3DC2e2952778BfF5bd6",
		chainId: 1,
		decimals: 18,
		name: "Wise",
		symbol: "WISE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1b22C32cD936cB97C28C5690a0695a82Abf688e6",
		chainId: 1,
		decimals: 18,
		name: "MyWish",
		symbol: "WISH"
	},
	{
		address: "0xd123575D94A7aD9Bff3ad037aE9d4d52f41a7518",
		chainId: 1,
		decimals: 8,
		name: "MyWish",
		symbol: "WISH"
	},
	{
		address: "0xdc524e3c6910257744C1F93Cf15E9F472b5bD236",
		chainId: 1,
		decimals: 18,
		name: "Witch Token",
		symbol: "WITCH"
	},
	{
		address: "0x7bA19B7F7d106A9a1e0985397B94F38EEe0b555e",
		chainId: 1,
		decimals: 2,
		name: "Wixlar",
		symbol: "WIX"
	},
	{
		address: "0x7a82C573B378CEEa29772aFB93891f0d0afA93b7",
		chainId: 1,
		decimals: 18,
		name: "Wizard",
		symbol: "WIZ"
	},
	{
		address: "0x33d20575f20C6A1881F8ab08E69F6fbAFfAEedF2",
		chainId: 1,
		decimals: 12,
		name: "BlueWizard",
		symbol: "WIZ"
	},
	{
		address: "0x018a6106Cb540AF1ae6DA985361Afd5E176D1c00",
		chainId: 1,
		decimals: 18,
		name: "Wiz Coin",
		symbol: "WIZ1"
	},
	{
		address: "0x87931E7AD81914e7898d07c68F145fC0A553D8Fb",
		chainId: 1,
		decimals: 18,
		name: "WIZARD Vault  NFTX",
		symbol: "WIZARD"
	},
	{
		address: "0x73A9fb46e228628f8f9BB9004eCa4f4F529D3998",
		chainId: 1,
		decimals: 3,
		name: "Wrapped LEO",
		symbol: "WLEO"
	},
	{
		address: "0x0b63128C40737B13647552e0C926bCFEccC35f93",
		chainId: 1,
		decimals: 18,
		name: "wLITI",
		symbol: "WLITI"
	},
	{
		address: "0x53c4871322Bb47e7A24136fce291a6dcC832a294",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Litecoin",
		symbol: "WLTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x685ED390B16Ac9Df9Ab9707294a42a107cFB62Af",
		chainId: 1,
		decimals: 18,
		name: "weeMarketplaceAccessToken",
		symbol: "WMA"
	},
	{
		address: "0xBFbe5332f172d77811bC6c272844f3e54A7B23bB",
		chainId: 1,
		decimals: 18,
		name: "WemarkToken",
		symbol: "WMK"
	},
	{
		address: "0xd73A66B8FB26Be8B0AcD7c52Bd325054Ac7d468b",
		chainId: 1,
		decimals: 18,
		name: "Woonk",
		symbol: "WNK"
	},
	{
		address: "0xcFbf70e33d5163E25B0dad73955c1BD9E8cd8BA2",
		chainId: 1,
		decimals: 18,
		name: "WinStars Live",
		symbol: "WNL"
	},
	{
		address: "0x0d438F3b5175Bebc262bF23753C1E53d03432bDE",
		chainId: 1,
		decimals: 18,
		name: "Wrapped NXM",
		symbol: "wNXM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEC0A0915A7c3443862B678B0d4721C7aB133FDCf",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Origin Axie",
		symbol: "WOA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xF9D9702D031407F425a4412682fDc56b07d05262",
		chainId: 1,
		decimals: 0,
		name: "WallOfChain",
		symbol: "WOC"
	},
	{
		address: "0x7DbbCaE15d4DB168e01673400D7844870cc1e36f",
		chainId: 1,
		decimals: 9,
		name: "WOLFY",
		symbol: "WOLFY"
	},
	{
		address: "0x728781E75735dc0962Df3a51d7Ef47E798A7107E",
		chainId: 1,
		decimals: 18,
		name: "WOLK",
		symbol: "WOLK"
	},
	{
		address: "0xF6B55acBBC49f4524Aa48D19281A9A77c54DE10f",
		chainId: 1,
		decimals: 18,
		name: "Wolk Token",
		symbol: "WOLK"
	},
	{
		address: "0xBd356a39BFf2cAda8E9248532DD879147221Cf76",
		chainId: 1,
		decimals: 18,
		name: "WOM Protocol",
		symbol: "WOM"
	},
	{
		address: "0x04969cD041C0cafB6AC462Bd65B536A5bDB3A670",
		chainId: 1,
		decimals: 18,
		name: "Wrapped ECOMI",
		symbol: "WOMI"
	},
	{
		address: "0x1EddEe3Fa21591a9637f88DaB9615C33Ee636b9D",
		chainId: 1,
		decimals: 18,
		name: "WeBlock",
		symbol: "WON"
	},
	{
		address: "0x4691937a7508860F876c9c0a2a617E7d9E945D4B",
		chainId: 1,
		decimals: 18,
		name: "Wootrade Network",
		symbol: "WOO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xD0660cD418a64a1d44E9214ad8e459324D8157f1",
		chainId: 1,
		decimals: 12,
		name: "Woofy",
		symbol: "WOOFY",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA686514FAF7d54289266F483D1e4852C99E13EC7",
		chainId: 1,
		decimals: 8,
		name: "Aworker",
		symbol: "WORK"
	},
	{
		address: "0xD18e454D844eb0009D32E07A0Cde89E18d64CFb4",
		chainId: 1,
		decimals: 18,
		name: "workTOKEN",
		symbol: "WORK"
	},
	{
		address: "0xBF494F02EE3FdE1F20BEE6242bCe2d1ED0c15e47",
		chainId: 1,
		decimals: 18,
		name: "World Token",
		symbol: "WORLD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x672EF7E4Fe230B5cA1466C5fDD40588d30FdF90a",
		chainId: 1,
		decimals: 18,
		name: "Wolves of Wall Stre",
		symbol: "WOWS"
	},
	{
		address: "0x34950Ff2b487d9E5282c5aB342d08A2f712eb79F",
		chainId: 1,
		decimals: 18,
		name: "Efforce",
		symbol: "WOZX"
	},
	{
		address: "0x62087245087125d3DB5B9A3D713d78E7BBc31e54",
		chainId: 1,
		decimals: 18,
		name: "WorldPeaceCoin",
		symbol: "WPC"
	},
	{
		address: "0xd075e95423C5c4BA1E122CaE0f4CdFA19b82881b",
		chainId: 1,
		decimals: 18,
		name: "OPES  Wrapped PE",
		symbol: "WPE"
	},
	{
		address: "0x1955d744F9435522Be508D1Ba60E3c12D0690B6A",
		chainId: 1,
		decimals: 18,
		name: "WPP Token",
		symbol: "WPP"
	},
	{
		address: "0x4CF488387F035FF08c371515562CBa712f9015d4",
		chainId: 1,
		decimals: 18,
		name: "WePower",
		symbol: "WPR"
	},
	{
		address: "0xe04491D64Eaa464Ec8Fdf53c7a4C92BF5B2278Cd",
		chainId: 1,
		decimals: 18,
		name: "WORLDPET",
		symbol: "WPT"
	},
	{
		address: "0xb3BACe433288645114FE8e8aA91F87659CBF665b",
		chainId: 1,
		decimals: 18,
		name: "Wallet Plus X",
		symbol: "WPX"
	},
	{
		address: "0x06677Dc4fE12d3ba3C7CCfD0dF8Cd45e4D4095bF",
		chainId: 1,
		decimals: 18,
		name: "Work Quest",
		symbol: "WQT"
	},
	{
		address: "0x72aDadb447784dd7AB1F472467750fC485e4cb2d",
		chainId: 1,
		decimals: 6,
		name: "Worldcore",
		symbol: "WRC"
	},
	{
		address: "0x7c9D8Fb3bDe3D9Ea6e89170618C2dC3d16695D36",
		chainId: 1,
		decimals: 18,
		name: "WhiteRockCasino",
		symbol: "WRC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x71e8d74fF1C923E369D0e70DFb09866629C4DD35",
		chainId: 1,
		decimals: 18,
		name: "WorkCoin",
		symbol: "WRK"
	},
	{
		address: "0x0407B4c4eAEd35CE3C5B852bDFA1640B09EeEDF4",
		chainId: 1,
		decimals: 4,
		name: "BlockWRK",
		symbol: "WRK"
	},
	{
		address: "0x62F8DbdEA37A4eD40Ff3d2631001e4490c13218f",
		chainId: 1,
		decimals: 18,
		name: "Wall Street Baby",
		symbol: "WSB"
	},
	{
		address: "0x2dcD9B1A7Ed408Ff48bD4918a1f9c0535dc54EAD",
		chainId: 1,
		decimals: 6,
		name: "WeSing Coin",
		symbol: "WSC"
	},
	{
		address: "0x2B89bF8ba858cd2FCee1faDa378D5cd6936968Be",
		chainId: 1,
		decimals: 6,
		name: "Secret  ERC20",
		symbol: "WSCRT"
	},
	{
		address: "0xCBDf1deb934E945a70b7289bB98e97013777F820",
		chainId: 1,
		decimals: 9,
		name: "Doge of Woof Street",
		symbol: "WSDOGE"
	},
	{
		address: "0x4b4571925e94ccd8C546b39462A270cC9b3ed1e4",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Shift",
		symbol: "WSHIFT"
	},
	{
		address: "0x9b00e6E8D787b13756eb919786c9745054DB64f9",
		chainId: 1,
		decimals: 18,
		name: "Sienna  ERC 20",
		symbol: "WSIENNA"
	},
	{
		address: "0x1d9a3CeF66B01D44003b9db0e00ec3fd44746988",
		chainId: 1,
		decimals: 18,
		name: "ETHWSS Coin",
		symbol: "WSS"
	},
	{
		address: "0xeDEec5691f23E4914cF0183A4196bBEb30d027a0",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Statera",
		symbol: "WSTA"
	},
	{
		address: "0x7f39C581F595B53c5cb19bD0b3f8dA6c935E2Ca0",
		chainId: 1,
		decimals: 18,
		name: "Wrapped liquid staked Ether 2.0",
		symbol: "wstETH"
	},
	{
		address: "0x5538Ac3ce36e73bB851921f2a804b4657b5307bf",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Shuttleone",
		symbol: "WSZO"
	},
	{
		address: "0xb7cB1C96dB6B22b0D3d9536E0108d062BD488F74",
		chainId: 1,
		decimals: 18,
		name: "Waltonchain",
		symbol: "WTC"
	},
	{
		address: "0x0501E7a02C285B9B520FdBF1BADC74Ae931aD75d",
		chainId: 1,
		decimals: 18,
		name: "Walnut finance",
		symbol: "WTF"
	},
	{
		address: "0xDF9d4674a430BDCC096A3a403128357AB36844BA",
		chainId: 1,
		decimals: 2,
		name: "WadzPay Token",
		symbol: "WTK"
	},
	{
		address: "0x9a0587EaE7eF64b2B38A10442a44CfA43EDd7D2A",
		chainId: 1,
		decimals: 18,
		name: "Welltrado",
		symbol: "WTL"
	},
	{
		address: "0x0ea984e789302B7B612147E4e4144e64f21425Eb",
		chainId: 1,
		decimals: 8,
		name: "Waletoken",
		symbol: "WTN"
	},
	{
		address: "0x1680CfdAD75dA2bb56Ded4f36BB9423C86ffa7B7",
		chainId: 1,
		decimals: 18,
		name: "Web Token Pay",
		symbol: "WTP"
	},
	{
		address: "0x84119cb33E8F590D75c2D6Ea4e6B0741a7494EDA",
		chainId: 1,
		decimals: 0,
		name: "Giga Watt Token",
		symbol: "WTT"
	},
	{
		address: "0x7C974104DF9dd7fb91205ab3D66d15AFf1049DE8",
		chainId: 1,
		decimals: 18,
		name: "Wrapped USD",
		symbol: "WUSD"
	},
	{
		address: "0xd4e7A6E7f9aA5909036338a3C4cD57319d613190",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Universa",
		symbol: "WUTN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x25C7b64A93Eb1261E130eC21a3e9918CaA38b611",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Virgin Gen",
		symbol: "WVG0"
	},
	{
		address: "0x38118BDB3B480F570837A4c2e88faC6E83BE6689",
		chainId: 1,
		decimals: 18,
		name: "Werewolf Coin",
		symbol: "WWC"
	},
	{
		address: "0x54a3017754BFba73F71F37d893A368814CbFf457",
		chainId: 1,
		decimals: 8,
		name: "Wrapped Widecoin",
		symbol: "WWCN"
	},
	{
		address: "0x8A91eEcd3F6b6B7833fD6961E7f654C3d016a068",
		chainId: 1,
		decimals: 18,
		name: "Wowoo Exchange Token",
		symbol: "WWX"
	},
	{
		address: "0x5592C5Aa89492Ea918d55B804E177B5Ca7dCcd5a",
		chainId: 1,
		decimals: 18,
		name: "Wrapped xBTC",
		symbol: "WXBTC"
	},
	{
		address: "0x86225481747c774b24c7c3Bac4C1B7382f787C7F",
		chainId: 1,
		decimals: 18,
		name: "WIIX Coin",
		symbol: "WXC"
	},
	{
		address: "0x4a5B3D0004454988C50e8dE1bCFC921EE995ADe3",
		chainId: 1,
		decimals: 18,
		name: "wXEQ v2",
		symbol: "wXEQ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x219F4a1D142DFC564bD6e80c022cD29f3394A999",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Stellar",
		symbol: "WXLM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x465e07d6028830124BE2E4aA551fBe12805dB0f5",
		chainId: 1,
		decimals: 18,
		name: "Wrapped XMR by BTSE",
		symbol: "WXMR"
	},
	{
		address: "0xa02120696c7B8fE16C09C749E4598819b2B0E915",
		chainId: 1,
		decimals: 18,
		name: "Wirex",
		symbol: "WXT"
	},
	{
		address: "0xA3865E64121537b5b59B5e239Db4aCBe6F36aa74",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Tezos",
		symbol: "WXTZ",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2A69655C22eDa32ff48d315bB26ED45f150700b4",
		chainId: 1,
		decimals: 6,
		name: "Wrapped Tezos",
		symbol: "WXTZ"
	},
	{
		address: "0x5eb191d30665EAB255b25Ce797052878dDD3BB6F",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Zcoin",
		symbol: "wXZC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xd8950fDeaa10304B7A7Fd03a2FC66BC39f3c711a",
		chainId: 1,
		decimals: 18,
		name: "wystoken",
		symbol: "WYS"
	},
	{
		address: "0x056017c55aE7AE32d12AeF7C679dF83A85ca75Ff",
		chainId: 1,
		decimals: 18,
		name: "Project Wyvern Token",
		symbol: "WYV"
	},
	{
		address: "0x05EDFfBda103d90d5040829A105f687443e0CA3e",
		chainId: 1,
		decimals: 18,
		name: "Woyager",
		symbol: "WYX"
	},
	{
		address: "0x4A64515E5E1d1073e83f30cB97BEd20400b66E10",
		chainId: 1,
		decimals: 18,
		name: "Wrapped ZEC",
		symbol: "WZEC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x41045282901E90BDa7578D628e479E5421D1cDD5",
		chainId: 1,
		decimals: 18,
		name: "X22",
		symbol: "X22"
	},
	{
		address: "0x910Dfc18D6EA3D6a7124A6F8B5458F281060fa4c",
		chainId: 1,
		decimals: 18,
		name: "X8X Token",
		symbol: "X8X",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x80DC468671316E50D4E9023D3db38D3105c1C146",
		chainId: 1,
		decimals: 18,
		name: "xAAVEa",
		symbol: "XAAVEA"
	},
	{
		address: "0x704De5696dF237c5B9ba0De9ba7e0C63dA8eA0Df",
		chainId: 1,
		decimals: 18,
		name: "xAAVEb",
		symbol: "XAAVEB"
	},
	{
		address: "0xDe4C5a791913838027a2185709E98c5C6027EA63",
		chainId: 1,
		decimals: 8,
		name: "General Attention C",
		symbol: "XAC"
	},
	{
		address: "0x35e78b3982E87ecfD5b3f3265B601c046cDBe232",
		chainId: 1,
		decimals: 18,
		name: "SideShift Token",
		symbol: "XAI"
	},
	{
		address: "0xf911a7ec46a2c6fa49193212fe4a2a9B95851c27",
		chainId: 1,
		decimals: 9,
		name: "Antiample",
		symbol: "XAMP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0E7f79E89BA8C4a13431129fB2db0d4f444B5B9A",
		chainId: 1,
		decimals: 16,
		name: "Xank",
		symbol: "XANK"
	},
	{
		address: "0x01c8857057326B8f64DCb5cba6d802DcD132946e",
		chainId: 1,
		decimals: 18,
		name: "ShareAt",
		symbol: "XAT"
	},
	{
		address: "0x4DF812F6064def1e5e029f1ca858777CC98D2D81",
		chainId: 1,
		decimals: 8,
		name: "Xaurum",
		symbol: "XAUR"
	},
	{
		address: "0x4922a015c4407F87432B179bb209e125432E4a2A",
		chainId: 1,
		decimals: 6,
		name: "Tether Gold",
		symbol: "XAUT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x31CbF205e26Ba63296FdBD254a6b1bE3ED28CE47",
		chainId: 1,
		decimals: 18,
		name: "3X Short Tether Gol",
		symbol: "XAUTBEAR"
	},
	{
		address: "0xc9287623832668432099CEF2FfDEF3CeD14f4315",
		chainId: 1,
		decimals: 18,
		name: "3X Long Tether Gold",
		symbol: "XAUTBULL"
	},
	{
		address: "0x5bdC00B6676579b301B276198Db1ea9AffB94329",
		chainId: 1,
		decimals: 18,
		name: "Eterbase Utility To",
		symbol: "XBASE"
	},
	{
		address: "0x5DE7Cc4BcBCa31c473F6D2F27825Cfb09cc0Bb16",
		chainId: 1,
		decimals: 18,
		name: "XBE Token",
		symbol: "XBE"
	},
	{
		address: "0x49AeC0752E68D0282Db544C677f6BA407BA17ED7",
		chainId: 1,
		decimals: 18,
		name: "Billionaire Token",
		symbol: "XBL"
	},
	{
		address: "0x28dee01D53FED0Edf5f6E310BF8Ef9311513Ae40",
		chainId: 1,
		decimals: 18,
		name: "BlitzPredict",
		symbol: "XBP"
	},
	{
		address: "0xB35e9AD7E9EBF731E04c73845f1bF75E55828700",
		chainId: 1,
		decimals: 18,
		name: "BitRewards",
		symbol: "XBRT"
	},
	{
		address: "0x64fB96d0395f6bf105F35233911e3dF2C5bf4Ce8",
		chainId: 1,
		decimals: 8,
		name: "Elastic Bitcoin",
		symbol: "XBT"
	},
	{
		address: "0xECbF566944250ddE88322581024E611419715f7A",
		chainId: 1,
		decimals: 9,
		name: "xBTC",
		symbol: "XBTC"
	},
	{
		address: "0x57C09A8de0b0F471F8567609777aDdFfb5c46a08",
		chainId: 1,
		decimals: 18,
		name: "Bitex Global XBX Co",
		symbol: "XBX"
	},
	{
		address: "0x7659CE147D0e714454073a5dd7003544234b6Aa0",
		chainId: 1,
		decimals: 18,
		name: "XCAD Network",
		symbol: "XCAD"
	},
	{
		address: "0x4d829f8C92a6691c56300D020c9e0dB984Cfe2BA",
		chainId: 1,
		decimals: 18,
		name: "CoinCrowd",
		symbol: "XCC"
	},
	{
		address: "0x010D14d36C3eA6570D240ae3ac9d660398f7C48e",
		chainId: 1,
		decimals: 18,
		name: "Cenfura Token",
		symbol: "XCF"
	},
	{
		address: "0xB4272071eCAdd69d933AdcD19cA99fe80664fc08",
		chainId: 1,
		decimals: 18,
		name: "CryptoFranc",
		symbol: "XCHF",
		extensions: {
			color: "#CE0E2D",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x0843971B4ac6e842a518AA184e0271d88B5cB74F",
		chainId: 1,
		decimals: 8,
		name: "CLASSIE",
		symbol: "XCL"
	},
	{
		address: "0x1E26b3D07E57F453caE30F7DDd2f945f5bF3EF33",
		chainId: 1,
		decimals: 8,
		name: "ClearCoin",
		symbol: "XCLR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x36ac219f90f5A6A3C77f2a7B660E3cC701f68e25",
		chainId: 1,
		decimals: 18,
		name: "CoinMetro",
		symbol: "XCM"
	},
	{
		address: "0x015df42d36Bc851c7F15f80bd1D4e8dBF02aed0c",
		chainId: 1,
		decimals: 18,
		name: "Connect Coin",
		symbol: "XCON"
	},
	{
		address: "0xE1c7E30C42C24582888C758984f6e382096786bd",
		chainId: 1,
		decimals: 8,
		name: "Curate",
		symbol: "XCUR"
	},
	{
		address: "0x24DCc881E7Dd730546834452F21872D5cb4b5293",
		chainId: 1,
		decimals: 18,
		name: "Data Transaction Token",
		symbol: "XD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xB9EefC4b0d472A44be93970254Df4f4016569d27",
		chainId: 1,
		decimals: 7,
		name: "DigitalBits",
		symbol: "XDB"
	},
	{
		address: "0x41AB1b6fcbB2fA9DCEd81aCbdeC13Ea6315F2Bf2",
		chainId: 1,
		decimals: 18,
		name: "XinFin Network",
		symbol: "XDCE"
	},
	{
		address: "0x5166d4ce79b9bf7Df477da110C560cE3045Aa889",
		chainId: 1,
		decimals: 9,
		name: "Xdef Finance",
		symbol: "XDEF2"
	},
	{
		address: "0x000000000000d0151E748d25b766e77efe2A6c83",
		chainId: 1,
		decimals: 18,
		name: "XDEFI Governance To",
		symbol: "XDEX"
	},
	{
		address: "0x8e57c27761EBBd381b0f9d09Bb92CeB51a358AbB",
		chainId: 1,
		decimals: 18,
		name: "extraDNA",
		symbol: "XDNA"
	},
	{
		address: "0x7C5Cf2f624182D6b019470c7cffF8Ad27AAB51A8",
		chainId: 1,
		decimals: 18,
		name: "Polkadot DOT Futures",
		symbol: "xDOT"
	},
	{
		address: "0xee573a945B01B788B9287CE062A0CFC15bE9fd86",
		chainId: 1,
		decimals: 18,
		name: "Exeedme",
		symbol: "XED"
	},
	{
		address: "0xf75AAcB3c9ab1b14c01C8840370aC2F2B34779D3",
		chainId: 1,
		decimals: 18,
		name: "Edgeware EDG Futures",
		symbol: "xEDG"
	},
	{
		address: "0xE748269494e76c1ceC3F627bb1e561E607dA9161",
		chainId: 1,
		decimals: 8,
		name: "XELS",
		symbol: "XELS"
	},
	{
		address: "0x59321ace77C8087FF8Cb9F94C8384807E4Fd8a3c",
		chainId: 1,
		decimals: 18,
		name: "Xeniumx",
		symbol: "XEMX"
	},
	{
		address: "0x5fbDB42Bb048C685C990a37F2c87FE087C586655",
		chainId: 1,
		decimals: 8,
		name: "Xenon",
		symbol: "XEN"
	},
	{
		address: "0xE4CFE9eAa8Cdb0942A80B7bC68fD8Ab0F6D44903",
		chainId: 1,
		decimals: 18,
		name: "Xend Finance",
		symbol: "XEND"
	},
	{
		address: "0xA017ac5faC5941f95010b12570B812C974469c2C",
		chainId: 1,
		decimals: 18,
		name: "Proxeus",
		symbol: "XES",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x054C64741dBafDC19784505494029823D89c3b13",
		chainId: 1,
		decimals: 8,
		name: "ETERNAL TOKEN",
		symbol: "XET"
	},
	{
		address: "0xe577e0B200d00eBdecbFc1cd3F7E8E04C70476BE",
		chainId: 1,
		decimals: 0,
		name: "XEuro",
		symbol: "XEURO"
	},
	{
		address: "0xE4E822C0d5b329E8BB637972467d2E313824eFA0",
		chainId: 1,
		decimals: 18,
		name: "Dfinance",
		symbol: "XFI"
	},
	{
		address: "0x5BEfBB272290dD5b8521D4a938f6c4757742c430",
		chainId: 1,
		decimals: 18,
		name: "Xfinance",
		symbol: "XFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1fa21b20222076D7465fb901E5f459289c95F66a",
		chainId: 1,
		decimals: 18,
		name: "XFII",
		symbol: "XFII"
	},
	{
		address: "0x4aa41bC1649C9C3177eD16CaaA11482295fC7441",
		chainId: 1,
		decimals: 18,
		name: "Xfit",
		symbol: "XFIT"
	},
	{
		address: "0x16aF5bfb4Ae7E475b9aDC3Bf5Cb2f1E6a50d7940",
		chainId: 1,
		decimals: 8,
		name: "Fanship",
		symbol: "XFS"
	},
	{
		address: "0xABe580E7ee158dA464b51ee1a83Ac0289622e6be",
		chainId: 1,
		decimals: 18,
		name: "Offshift",
		symbol: "XFT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x892A6f9dF0147e5f079b0993F486F9acA3c87881",
		chainId: 1,
		decimals: 9,
		name: "xFund",
		symbol: "XFUND"
	},
	{
		address: "0x6bE7e93e45740C314C89A3bE52473A0dDF2450fe",
		chainId: 1,
		decimals: 18,
		name: "XCredit",
		symbol: "XFYI"
	},
	{
		address: "0x89d3c0249307Ae570A316030764D12f53BB191FD",
		chainId: 1,
		decimals: 14,
		name: "Xiglute Coin",
		symbol: "XGC"
	},
	{
		address: "0xf6b6AA0Ef0f5Edc2C1c5d925477F97eAF66303e7",
		chainId: 1,
		decimals: 8,
		name: "Going Gems",
		symbol: "XGG"
	},
	{
		address: "0x06B179e292f080871825beD5D722162fD96B4c95",
		chainId: 1,
		decimals: 18,
		name: "10x gg",
		symbol: "XGG"
	},
	{
		address: "0x533ef0984b2FAA227AcC620C67cce12aA39CD8CD",
		chainId: 1,
		decimals: 8,
		name: "XGM",
		symbol: "XGM"
	},
	{
		address: "0xD85DAf0C8B54D8BCEc96cfB90731B8851f98572E",
		chainId: 1,
		decimals: 18,
		name: "Telegram TON GRAM Futures",
		symbol: "xGRAM"
	},
	{
		address: "0x30f4A3e0aB7a76733D8b60b89DD93c3D0b4c9E2f",
		chainId: 1,
		decimals: 18,
		name: "XGT",
		symbol: "XGT"
	},
	{
		address: "0x6FCb6408499a7c0f242E32D77EB51fFa1dD28a7E",
		chainId: 1,
		decimals: 12,
		name: "HydraDX",
		symbol: "XHDX"
	},
	{
		address: "0x147c9130C5809367c5f2da7be0D6355D2795B081",
		chainId: 1,
		decimals: 18,
		name: "Handshake HNS Futures",
		symbol: "xHNS"
	},
	{
		address: "0xD3c625F54dec647DB8780dBBe0E880eF21BA4329",
		chainId: 1,
		decimals: 18,
		name: "HollaEx Token",
		symbol: "XHT"
	},
	{
		address: "0xB110eC7B1dcb8FAB8dEDbf28f53Bc63eA5BEdd84",
		chainId: 1,
		decimals: 8,
		name: "Sphere Identity",
		symbol: "XID"
	},
	{
		address: "0xF6650117017FFD48B725B4EC5A00B414097108A7",
		chainId: 1,
		decimals: 18,
		name: "Xido Finance",
		symbol: "XIDO"
	},
	{
		address: "0xA974c709cFb4566686553a20790685A47acEAA33",
		chainId: 1,
		decimals: 18,
		name: "Mixin",
		symbol: "XIN",
		extensions: {
			color: "#1eb5fa",
			isVerified: true
		}
	},
	{
		address: "0x8F6A193C8B3c949E1046f1547C3A3f0836944E4b",
		chainId: 1,
		decimals: 18,
		name: "xINCHa",
		symbol: "XINCHA"
	},
	{
		address: "0x6B33f15360cedBFB8F60539ec828ef52910acA9b",
		chainId: 1,
		decimals: 18,
		name: "xINCHb",
		symbol: "XINCHB"
	},
	{
		address: "0x0f7F961648aE6Db43C75663aC7E5414Eb79b5704",
		chainId: 1,
		decimals: 18,
		name: "XIO Network",
		symbol: "XIO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x31024A4C3e9aEeb256B825790F5cb7ac645e7cD5",
		chainId: 1,
		decimals: 3,
		name: "Xiotri",
		symbol: "XIOT"
	},
	{
		address: "0x44f262622248027f8E2a8Fb1090c4Cf85072392C",
		chainId: 1,
		decimals: 18,
		name: "Project Inverse",
		symbol: "XIV"
	},
	{
		address: "0x604026696fDB3C6720AE3049C46d59AC604dEA0A",
		chainId: 1,
		decimals: 18,
		name: "eXciting Japan Coin",
		symbol: "XJP"
	},
	{
		address: "0xfb96a8d7F1D7e1D7bce03903E49f45b123501e26",
		chainId: 1,
		decimals: 18,
		name: "Kadena KDA Futures",
		symbol: "xKDA"
	},
	{
		address: "0x4f6103BAd230295baCF30f914FDa7D4273B7F585",
		chainId: 1,
		decimals: 6,
		name: "KI",
		symbol: "XKI"
	},
	{
		address: "0x2DdF7E8f8e406acC999c8827092d154B67CD41fA",
		chainId: 1,
		decimals: 18,
		name: "Klaytn KLAY Futures",
		symbol: "xKLAY"
	},
	{
		address: "0x0bfEc35a1A3550Deed3F6fC76Dde7FC412729a91",
		chainId: 1,
		decimals: 18,
		name: "xKNCa",
		symbol: "XKNCA"
	},
	{
		address: "0x06890D4c65A4cB75be73D7CCb4a8ee7962819E81",
		chainId: 1,
		decimals: 18,
		name: "xKNCb",
		symbol: "XKNCB"
	},
	{
		address: "0x8c4E7f814d40f8929F9112C5D09016F923d34472",
		chainId: 1,
		decimals: 18,
		name: "XCELTOKEN PLUS",
		symbol: "XLAB"
	},
	{
		address: "0x960Efd63aE895F165d874E6cc62501fd0e7Dc50a",
		chainId: 1,
		decimals: 18,
		name: "3X Short Stellar To",
		symbol: "XLMBEAR"
	},
	{
		address: "0x3a43a04D80F9881d88080bf9fA8bB720AFb6c966",
		chainId: 1,
		decimals: 18,
		name: "3X Long Stellar Tok",
		symbol: "XLMBULL"
	},
	{
		address: "0xf88506B0F1d30056B9e5580668D5875b9cd30F23",
		chainId: 1,
		decimals: 18,
		name: "Wrapped Tokenlon",
		symbol: "xLON",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x6c862f803fF42A97D4A483AB761256ad8c90f4F8",
		chainId: 1,
		decimals: 18,
		name: "Elis",
		symbol: "XLS"
	},
	{
		address: "0x1d086b868d78040635CB8600bA733f12DB48cB42",
		chainId: 1,
		decimals: 18,
		name: "XLXPay",
		symbol: "XLX"
	},
	{
		address: "0x36b679bd64Ed73DBfd88909cDCB892cB66Bd4CBb",
		chainId: 1,
		decimals: 9,
		name: "xMARK",
		symbol: "XMARK"
	},
	{
		address: "0x44449Fa4d607F807d1eD4a69ad942971728391C8",
		chainId: 1,
		decimals: 18,
		name: "XMED Chain",
		symbol: "XMCT"
	},
	{
		address: "0x9a7a4C141a3BCCE4A31e42C1192Ac6Add35069b4",
		chainId: 1,
		decimals: 10,
		name: "Momentum",
		symbol: "XMM",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xbd7D6a2183335eA25af2AF22c1F169FB0f6395f7",
		chainId: 1,
		decimals: 18,
		name: "MobileCoin MOBILECOIN Futures",
		symbol: "xMOBILECOIN"
	},
	{
		address: "0x3aaDA3e213aBf8529606924d8D1c55CbDc70Bf74",
		chainId: 1,
		decimals: 18,
		name: "XMON",
		symbol: "XMON"
	},
	{
		address: "0x0f8c45B896784A1E408526B9300519ef8660209c",
		chainId: 1,
		decimals: 8,
		name: "XMAX",
		symbol: "XMX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x8317b216D7c3F9a5B8401E4b6814D13A7BE390ec",
		chainId: 1,
		decimals: 8,
		name: "EXNCE",
		symbol: "XNC"
	},
	{
		address: "0xBC86727E770de68B1060C91f6BB6945c73e10388",
		chainId: 1,
		decimals: 18,
		name: "Ink Protocol",
		symbol: "XNK",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xab95E915c123fdEd5BDfB6325e35ef5515F1EA69",
		chainId: 1,
		decimals: 18,
		name: "XENON",
		symbol: "XNN"
	},
	{
		address: "0x05bBe7240De66F6480C9aeda77C1376B13393F83",
		chainId: 1,
		decimals: 18,
		name: "Xeno Token",
		symbol: "XNO"
	},
	{
		address: "0x79c71D3436F39Ce382D0f58F1B011D88100B9D91",
		chainId: 1,
		decimals: 18,
		name: "Xeonbit Token",
		symbol: "XNS"
	},
	{
		address: "0x572E6f318056ba0C5d47A422653113843D250691",
		chainId: 1,
		decimals: 0,
		name: "XNT",
		symbol: "XNT"
	},
	{
		address: "0x46F6Df27e472Ec0c949b8D3359A2814e89E290A6",
		chainId: 1,
		decimals: 18,
		name: "NuCypher NU Futures",
		symbol: "xNU"
	},
	{
		address: "0x40FD72257597aA14C7231A7B1aaa29Fce868F677",
		chainId: 1,
		decimals: 18,
		name: "Sora Token",
		symbol: "XOR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x153eD9CC1b792979d2Bde0BBF45CC2A7e436a5F9",
		chainId: 1,
		decimals: 18,
		name: "XOVBank",
		symbol: "XOV"
	},
	{
		address: "0x744eC1d45545DcEBb45fAa142Fa9E1B9D86d4527",
		chainId: 1,
		decimals: 18,
		name: "Orchid OXT Futures",
		symbol: "xOXT"
	},
	{
		address: "0x90528aeb3a2B736B780fD1B6C478bB7E1d643170",
		chainId: 1,
		decimals: 18,
		name: "XPA",
		symbol: "XPA"
	},
	{
		address: "0xBB1fA4FdEB3459733bF67EbC6f893003fA976a82",
		chainId: 1,
		decimals: 18,
		name: "Pangea Arbitration",
		symbol: "XPAT"
	},
	{
		address: "0xbC7Ed0c8cf986ae62337fc8DF3B02C6EC87310Ed",
		chainId: 1,
		decimals: 18,
		name: "Xpayment",
		symbol: "XPAY"
	},
	{
		address: "0xbC81BF5B3173BCCDBE62dba5f5b695522aD63559",
		chainId: 1,
		decimals: 18,
		name: "Transmute",
		symbol: "XPB"
	},
	{
		address: "0x3b9e094D56103611f0ACEfDAb43182347BA60dF4",
		chainId: 1,
		decimals: 18,
		name: "PANTHEON X",
		symbol: "XPN"
	},
	{
		address: "0x1a3564852D8EdE7c8249805E71718bd7AA93Dd6d",
		chainId: 1,
		decimals: 2,
		name: "X power Chain",
		symbol: "XPO"
	},
	{
		address: "0xD7EFB00d12C2c13131FD319336Fdf952525dA2af",
		chainId: 1,
		decimals: 4,
		name: "Proton",
		symbol: "XPR"
	},
	{
		address: "0x08Aa0ed0040736dd28d4c8B16Ab453b368248d19",
		chainId: 1,
		decimals: 18,
		name: "Cryptobuyer Token",
		symbol: "XPT"
	},
	{
		address: "0xf0814d0E47F2390a8082C4a1BD819FDDe50f9bFc",
		chainId: 1,
		decimals: 8,
		name: "XPToken io",
		symbol: "XPT"
	},
	{
		address: "0x70da48f4B7e83c386ef983D4CEF4e58c2c09D8Ac",
		chainId: 1,
		decimals: 8,
		name: "Quras Token",
		symbol: "XQC"
	},
	{
		address: "0x7025baB2EC90410de37F488d1298204cd4D6b29d",
		chainId: 1,
		decimals: 18,
		name: "Xriba",
		symbol: "XRA",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xA1c7D450130bb77c6a23DdFAeCbC4a060215384b",
		chainId: 1,
		decimals: 18,
		name: "RougeCoin",
		symbol: "XRGE"
	},
	{
		address: "0xB24754bE79281553dc1adC160ddF5Cd9b74361a4",
		chainId: 1,
		decimals: 9,
		name: "XRL",
		symbol: "XRL"
	},
	{
		address: "0xE1329eBf8b719881549909d689987F746A8931D1",
		chainId: 1,
		decimals: 18,
		name: "Refine Medium",
		symbol: "XRM"
	},
	{
		address: "0x94FC5934cF5970E944a67de806eEB5a4b493c6E6",
		chainId: 1,
		decimals: 18,
		name: "3X Short XRP Token",
		symbol: "XRPBEAR"
	},
	{
		address: "0x27c1bA4F85b8dC1c150157816623A6Ce80b7F187",
		chainId: 1,
		decimals: 18,
		name: "3X Long XRP Token",
		symbol: "XRPBULL"
	},
	{
		address: "0xd4cA5c2AFf1eeFb0BeA9e9Eab16f88DB2990C183",
		chainId: 1,
		decimals: 8,
		name: "XRP Classic",
		symbol: "XRPC"
	},
	{
		address: "0x55b54D8fB1640d1321D5164590e7B020BA43def2",
		chainId: 1,
		decimals: 18,
		name: "1X Short XRP Token",
		symbol: "XRPHEDGE"
	},
	{
		address: "0x7dE91B204C1C737bcEe6F000AAA6569Cf7061cb7",
		chainId: 1,
		decimals: 9,
		name: "Robonomics",
		symbol: "XRT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x69fa0feE221AD11012BAb0FdB45d444D3D2Ce71c",
		chainId: 1,
		decimals: 18,
		name: "Thorstarter",
		symbol: "XRUNE"
	},
	{
		address: "0x0F513fFb4926ff82D7F60A05069047AcA295C413",
		chainId: 1,
		decimals: 18,
		name: "CrowdstartCoin",
		symbol: "XSC"
	},
	{
		address: "0x70e8dE73cE538DA2bEEd35d14187F6959a8ecA96",
		chainId: 1,
		decimals: 6,
		name: "XSGD",
		symbol: "XSGD"
	},
	{
		address: "0x22c421BA4717EDaF6b6BDA424207A7335e8f0e52",
		chainId: 1,
		decimals: 18,
		name: "Solana SOL Futures",
		symbol: "xSOL"
	},
	{
		address: "0x9b06D48E0529ecF05905fF52DD426ebEc0EA3011",
		chainId: 1,
		decimals: 18,
		name: "XSwap",
		symbol: "XSP"
	},
	{
		address: "0x6bC1F3A1ae56231DbB64d3E82E070857EAe86045",
		chainId: 1,
		decimals: 18,
		name: "Xensor",
		symbol: "XSR"
	},
	{
		address: "0x91383A15C391c142b80045D8b4730C1c37ac0378",
		chainId: 1,
		decimals: 9,
		name: "XStable",
		symbol: "XST"
	},
	{
		address: "0xC0E47007e084EEF3EE58eb33D777b3B4Ca98622f",
		chainId: 1,
		decimals: 18,
		name: "StarDEX",
		symbol: "XSTAR"
	},
	{
		address: "0x8798249c2E607446EfB7Ad49eC89dD1865Ff4272",
		chainId: 1,
		decimals: 18,
		name: "xSUSHI",
		symbol: "XSUSHI"
	},
	{
		address: "0x4BE10dA47A07716af28Ad199FbE020501BddD7aF",
		chainId: 1,
		decimals: 18,
		name: "XT com Token",
		symbol: "XT"
	},
	{
		address: "0xBFf0E42EEC4223fBd12260F47f3348D29876db42",
		chainId: 1,
		decimals: 6,
		name: "Xtake",
		symbol: "XTK"
	},
	{
		address: "0x7F3EDcdD180Dbe4819Bd98FeE8929b5cEdB3AdEB",
		chainId: 1,
		decimals: 18,
		name: "xToken",
		symbol: "XTK"
	},
	{
		address: "0x6368e1E18c4C419DDFC608A0BEd1ccb87b9250fc",
		chainId: 1,
		decimals: 18,
		name: "Tap",
		symbol: "XTP"
	},
	{
		address: "0xbc41d05287498DEc58129560De6bd1b8d4E3aC1d",
		chainId: 1,
		decimals: 18,
		name: "3X Short Tezos Toke",
		symbol: "XTZBEAR"
	},
	{
		address: "0x8AF17a6396c8f315f6b6DBC6AA686C85f9b3E554",
		chainId: 1,
		decimals: 18,
		name: "3X Long Tezos Token",
		symbol: "XTZBULL"
	},
	{
		address: "0x4bAE380B5D762D543d426331b8437926443ae9ec",
		chainId: 1,
		decimals: 18,
		name: "XVIX",
		symbol: "XVIX"
	},
	{
		address: "0x55296f69f40Ea6d20E478533C15A6B08B654E758",
		chainId: 1,
		decimals: 18,
		name: "XY Oracle",
		symbol: "XYO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x618679dF9EfCd19694BB1daa8D00718Eacfa2883",
		chainId: 1,
		decimals: 18,
		name: "Universe XYZ",
		symbol: "XYZ"
	},
	{
		address: "0x48f07301E9E29c3C38a80ae8d9ae771F224f1054",
		chainId: 1,
		decimals: 18,
		name: "South African Tethe",
		symbol: "XZAR"
	},
	{
		address: "0x4eE438be38F8682ABB089F2BFeA48851C5E71EAF",
		chainId: 1,
		decimals: 18,
		name: "Cryptonovae",
		symbol: "YAE"
	},
	{
		address: "0x0AaCfbeC6a24756c20D41914F2caba817C0d8521",
		chainId: 1,
		decimals: 18,
		name: "YAM",
		symbol: "YAM",
		extensions: {
			color: "#B2364F",
			isRainbowCurated: true,
			isVerified: true,
			shadowColor: "#D09AAC"
		}
	},
	{
		address: "0x0e2298E3B3390e3b945a5456fBf59eCc3f55DA16",
		chainId: 1,
		decimals: 18,
		name: "YAMv1",
		symbol: "YAMv1",
		extensions: {
			color: "#B2364F",
			isVerified: true,
			shadowColor: "#D09AAC"
		}
	},
	{
		address: "0xAba8cAc6866B83Ae4eec97DD07ED254282f6aD8A",
		chainId: 1,
		decimals: 24,
		name: "YAMv2",
		symbol: "YAMv2",
		extensions: {
			color: "#B2364F",
			shadowColor: "#D09AAC"
		}
	},
	{
		address: "0x245392ee7Ce736eC6A0908B67dC5d0a218230005",
		chainId: 1,
		decimals: 18,
		name: "Yap Stone",
		symbol: "YAP"
	},
	{
		address: "0xb1dC9124c395c1e97773ab855d66E879f053A289",
		chainId: 1,
		decimals: 18,
		name: "yAxis",
		symbol: "YAX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x0adA190c81b814548ddC2F6AdC4a689ce7C1FE73",
		chainId: 1,
		decimals: 18,
		name: "yAxis",
		symbol: "YAXIS"
	},
	{
		address: "0x04bC0Ab673d88aE9dbC9DA2380cB6B79C4BCa9aE",
		chainId: 1,
		decimals: 18,
		name: "yBUSD",
		symbol: "YBUSD"
	},
	{
		address: "0x37E1160184F7dD29f00b78C050Bf13224780b0B0",
		chainId: 1,
		decimals: 8,
		name: "Yuan Chain Coin",
		symbol: "YCC"
	},
	{
		address: "0x3D0293f06daF4311B482564330D57C8Db6C10893",
		chainId: 1,
		decimals: 8,
		name: "Y Coin",
		symbol: "YCO"
	},
	{
		address: "0xdF5e0e81Dff6FAF3A7e52BA697820c5e32D806A8",
		chainId: 1,
		decimals: 18,
		name: "Curve.fi yDAI/yUSDC/yUSDT/yTUSD",
		symbol: "yCRV",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4b7Fb448dF91C8Ed973494F8C8c4f12DAF3A8521",
		chainId: 1,
		decimals: 8,
		name: "YD BTC JUN21",
		symbol: "YD-BTC-JUN21"
	},
	{
		address: "0x002f0B1A71C5730CF2F4dA1970A889207BdB6D0D",
		chainId: 1,
		decimals: 18,
		name: "YD BTC MAR21",
		symbol: "YD-BTC-MAR21"
	},
	{
		address: "0xcBE430927370e95B4B10cFc702c6017EC7abEfC3",
		chainId: 1,
		decimals: 18,
		name: "YD ETH JUN21",
		symbol: "YD-ETH-JUN21"
	},
	{
		address: "0x90f802C7E8fb5D40B0De583e34C065A3bd2020D8",
		chainId: 1,
		decimals: 18,
		name: "YD ETH MAR21",
		symbol: "YD-ETH-MAR21"
	},
	{
		address: "0x40b92fCE37CEfA03baf7603e7913C1d34dD1a4EC",
		chainId: 1,
		decimals: 8,
		name: "YeaFinance",
		symbol: "YEA"
	},
	{
		address: "0x922105fAd8153F516bCfB829f56DC097a0E1D705",
		chainId: 1,
		decimals: 18,
		name: "Yee",
		symbol: "YEE"
	},
	{
		address: "0x6F7A4bac3315B5082F793161a22e26666d22717f",
		chainId: 1,
		decimals: 18,
		name: "YEED",
		symbol: "YEED"
	},
	{
		address: "0xcA2796F9F61dc7b238Aab043971e49c6164DF375",
		chainId: 1,
		decimals: 18,
		name: "YGGDRASH",
		symbol: "YEED",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xCF282Ba0bC91d2AA6E775bCfd90dA6B7912F1b1a",
		chainId: 1,
		decimals: 18,
		name: "Yearn Ethereum Fina",
		symbol: "YEFI"
	},
	{
		address: "0x4B34c0CBeEF271F895d339c5F76322d71A60782B",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Manag",
		symbol: "YEFIM"
	},
	{
		address: "0x7815bDa662050D84718B988735218CFfd32f75ea",
		chainId: 1,
		decimals: 18,
		name: "Yel Finance",
		symbol: "YEL"
	},
	{
		address: "0x468ab3b1f63A1C14b361bC367c3cC92277588Da1",
		chainId: 1,
		decimals: 18,
		name: "Yeld Finance",
		symbol: "YELD",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5963FD7cA9b17b85768476019F81CB43d9d1818E",
		chainId: 1,
		decimals: 18,
		name: "Dai If Trump Wins The 2020 Election",
		symbol: "YESTRUMP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb4bebD34f6DaaFd808f73De0d10235a92Fbb6c3D",
		chainId: 1,
		decimals: 18,
		name: "Yearn Ecosystem Token Index",
		symbol: "YETI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xf4CD3d3Fda8d7Fd6C5a500203e38640A70Bf9577",
		chainId: 1,
		decimals: 18,
		name: "YfDAI finance",
		symbol: "YF-DAI"
	},
	{
		address: "0x38ACeFAd338b870373fB8c810fE705569E1C7225",
		chainId: 1,
		decimals: 18,
		name: "Yearn4 Finance",
		symbol: "YF4"
	},
	{
		address: "0xF5D0FefAaB749d8B14C27F0De60cC6e9e7f848d1",
		chainId: 1,
		decimals: 18,
		name: "YFARM Token",
		symbol: "YFARM"
	},
	{
		address: "0x7B0F66fA5cf5cc28280c1e7051af881E06579362",
		chainId: 1,
		decimals: 18,
		name: "YFarmLand Token",
		symbol: "YFARMER"
	},
	{
		address: "0x59e7B5DB9Be0BDD26Fa048d39E01FEe456AB674E",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Bit2",
		symbol: "YFB2"
	},
	{
		address: "0x89eE58Af4871b474c30001982c3D7439C933c838",
		chainId: 1,
		decimals: 18,
		name: "yfBeta",
		symbol: "YFBETA"
	},
	{
		address: "0xff034D12353867fC4228f4Ae3E689CD6dCAad120",
		chainId: 1,
		decimals: 18,
		name: "YFBitcoin",
		symbol: "YFBTC"
	},
	{
		address: "0xE8ed08a581777f112654e28DE507e11613DA0379",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Cente",
		symbol: "YFC"
	},
	{
		address: "0xc6Ff7EaC464C99FF0e1AD8BcFd0aB0ceBe08c9A3",
		chainId: 1,
		decimals: 18,
		name: "YFC",
		symbol: "YFC"
	},
	{
		address: "0x4F4F0Ef7978737ce928BFF395529161b44e27ad9",
		chainId: 1,
		decimals: 18,
		name: "Your Finance Decent",
		symbol: "YFD"
	},
	{
		address: "0x2e6539edc3b76f1E21B71d214527FAbA875F70F3",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance DOT",
		symbol: "YFDOT"
	},
	{
		address: "0x1378eC93Ab2B07ba5A0eAEf19Cf354A33f64B9FD",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Diamo",
		symbol: "YFDT"
	},
	{
		address: "0x33811D4EdBCaED10A685254eB5D3C4e4398520D2",
		chainId: 1,
		decimals: 18,
		name: "YFE Money",
		symbol: "YFE"
	},
	{
		address: "0x2DBd330bC9B7f3A822a9173aB52172BdDDcAcE2A",
		chainId: 1,
		decimals: 8,
		name: "YFED Finance",
		symbol: "YFED"
	},
	{
		address: "0xc151ca64D66eA44EE4BE9D47c3ce7E031b2fccb7",
		chainId: 1,
		decimals: 18,
		name: "YFET",
		symbol: "YFET"
	},
	{
		address: "0x8Be6a6158f6B8a19fe60569C757d16e546C2296D",
		chainId: 1,
		decimals: 18,
		name: "YFF Finance",
		symbol: "YFF"
	},
	{
		address: "0xea004e8FA3701B8E58E41b78D50996e0f7176CbD",
		chainId: 1,
		decimals: 18,
		name: "yffc finance",
		symbol: "YFFC"
	},
	{
		address: "0xCee1d3c3A02267e37E6B373060F79d5d7b9e1669",
		chainId: 1,
		decimals: 18,
		name: "yffi finance",
		symbol: "YFFI"
	},
	{
		address: "0x6c4B85CaB20c13aF72766025F0e17E0fe558A553",
		chainId: 1,
		decimals: 18,
		name: "YFFII Finance",
		symbol: "YFFII"
	},
	{
		address: "0x90D702f071d2af33032943137AD0aB4280705817",
		chainId: 1,
		decimals: 18,
		name: "YFFS Finance",
		symbol: "YFFS"
	},
	{
		address: "0x0bc529c00C6401aEF6D220BE8C6Ea1667F6Ad93e",
		chainId: 1,
		decimals: 18,
		name: "yearn.finance",
		symbol: "YFI",
		extensions: {
			color: "#0072F6",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x09843B9137fc5935B7F3832152F9074Db5D2d1Ee",
		chainId: 1,
		decimals: 18,
		name: "YFI3 money",
		symbol: "YFI3"
	},
	{
		address: "0xd778e4F5450eDE47289fEf874a37B79Db77c4CF1",
		chainId: 1,
		decimals: 18,
		name: "YFIA",
		symbol: "YFIA"
	},
	{
		address: "0x03829f5675F3b51D0F8C2A74417a757625aCF22f",
		chainId: 1,
		decimals: 18,
		name: "YFIBALANCER FINANCE",
		symbol: "YFIB"
	},
	{
		address: "0x47632dA9227E322EDa59F9e7691eAcC6430Ac87C",
		chainId: 1,
		decimals: 18,
		name: "YFI Business",
		symbol: "YFIB"
	},
	{
		address: "0x9080e92296a176883aAB1d7d1B7e50BC055B0cAa",
		chainId: 1,
		decimals: 18,
		name: "YFI Credits Group",
		symbol: "YFICG"
	},
	{
		address: "0x61266424B904d65cEb2945a1413Ac322185187D5",
		chainId: 1,
		decimals: 18,
		name: "YFIDapp",
		symbol: "YFID"
	},
	{
		address: "0x2E6E152d29053B6337E434bc9bE17504170f8a5B",
		chainId: 1,
		decimals: 8,
		name: "Yearn Finance Ecosy",
		symbol: "YFIEC"
	},
	{
		address: "0xa1d0E215a23d7030842FC67cE582a6aFa3CCaB83",
		chainId: 1,
		decimals: 18,
		name: "YFII.finance",
		symbol: "YFII",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xeF8bA8cBa86f81B3108f60186FCe9c81B5096D5c",
		chainId: 1,
		decimals: 18,
		name: "YFII Gold",
		symbol: "YFIIG",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4be40bc9681D0A7C24A99b4c92F85B9053Fc2A45",
		chainId: 1,
		decimals: 18,
		name: "Dify Finance",
		symbol: "YFIII"
	},
	{
		address: "0x5F7fA1a0Ae94b5DD6bb6bD1708b5f3AF01b57908",
		chainId: 1,
		decimals: 18,
		name: "YFIKing Finance",
		symbol: "YFIKING"
	},
	{
		address: "0xCec2387e04F9815BF12670dBf6cf03bba26DF25F",
		chainId: 1,
		decimals: 18,
		name: "YFILEND FINANCE",
		symbol: "YFILD"
	},
	{
		address: "0x2e2f3246b6c65CCc4239c9Ee556EC143a7E5DE2c",
		chainId: 1,
		decimals: 18,
		name: "Yfi mobi",
		symbol: "YFIM"
	},
	{
		address: "0xB9782532FA7062A6F73df1CE71d75c0E16046ebC",
		chainId: 1,
		decimals: 8,
		name: "YFI Paprika",
		symbol: "YFIP"
	},
	{
		address: "0x86965A86539e2446F9e72634CEfCA7983CC21a81",
		chainId: 1,
		decimals: 18,
		name: "YFISCURITY",
		symbol: "YFIS"
	},
	{
		address: "0x519083fc539F23131C3b7046992584592772D12A",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Value",
		symbol: "YFIV"
	},
	{
		address: "0xd3E8695d2Bef061EAb38B5EF526c0f714108119C",
		chainId: 1,
		decimals: 18,
		name: "YFIVE FINANCE",
		symbol: "YFIVE"
	},
	{
		address: "0xa4f779074850D320B5553C9Db5Fc6A8ab15Bd34a",
		chainId: 1,
		decimals: 18,
		name: "YFIX finance",
		symbol: "YFIX"
	},
	{
		address: "0x4086692D53262b2Be0b13909D804F0491FF6Ec3e",
		chainId: 1,
		decimals: 18,
		name: "Yield Farming Known",
		symbol: "YFKA"
	},
	{
		address: "0x28cb7e841ee97947a86B06fA4090C8451f64c0be",
		chainId: 1,
		decimals: 18,
		name: "YFLink",
		symbol: "YFL",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7b760D06E401f85545F3B50c44bf5B05308b7b62",
		chainId: 1,
		decimals: 18,
		name: "YFLink USD",
		symbol: "YFLUSD"
	},
	{
		address: "0x7aFaC1D878C66A47263DCe57976C371Ae2e74882",
		chainId: 1,
		decimals: 18,
		name: "YFMoonBeam",
		symbol: "YFMB"
	},
	{
		address: "0xfef3bEf71A5EB97E097039038776fD967ae5B106",
		chainId: 1,
		decimals: 18,
		name: "YFMoonshot",
		symbol: "YFMS"
	},
	{
		address: "0x3DD66732113Af9981A861Cf489431533aebA33B8",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Netwo",
		symbol: "YFN"
	},
	{
		address: "0xAc0C8dA4A4748d8d821A0973d00b157aA78C473D",
		chainId: 1,
		decimals: 18,
		name: "YFIONE",
		symbol: "YFO"
	},
	{
		address: "0xCd254568EBF88f088E40f456db9E17731243cb25",
		chainId: 1,
		decimals: 18,
		name: "YFOS finance",
		symbol: "YFOS"
	},
	{
		address: "0x706CB9E741CBFee00Ad5b3f5ACc8bd44D1644a74",
		chainId: 1,
		decimals: 6,
		name: "YFOX Finance",
		symbol: "YFOX"
	},
	{
		address: "0x96d62cdCD1cc49cb6eE99c867CB8812bea86B9FA",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Proto",
		symbol: "YFP"
	},
	{
		address: "0x05D27CdD23E22ca63e7f9c7C6D1B79ede9C4fCF5",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Passi",
		symbol: "YFPI"
	},
	{
		address: "0x0fdC5313333533cC0c00C22792BfF7383d3055F2",
		chainId: 1,
		decimals: 18,
		name: "YFPRO Finance",
		symbol: "YFPRO"
	},
	{
		address: "0xD6940A1FfD9F3B025D1F1055AbCfd9F7CdA81eF9",
		chainId: 1,
		decimals: 18,
		name: "YouForia",
		symbol: "YFR"
	},
	{
		address: "0x5D1b1019d0Afa5E6cc047B9e78081D44cc579FC4",
		chainId: 1,
		decimals: 18,
		name: "yfrb Finance",
		symbol: "YFRB"
	},
	{
		address: "0xbE685C5E06866cfB94A4242E3DF8f2fa3E7c2b73",
		chainId: 1,
		decimals: 18,
		name: "Yearn Finance Red M",
		symbol: "YFRM"
	},
	{
		address: "0x1DF6f1Bb7454E5E4BA3BcA882d3148FBf9b5697A",
		chainId: 1,
		decimals: 18,
		name: "Yfscience",
		symbol: "YFSI"
	},
	{
		address: "0x26B3038a7Fc10b36c426846a9086Ef87328dA702",
		chainId: 1,
		decimals: 18,
		name: "Yield Farming Token",
		symbol: "YFT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9cD39dA8f25ec50cF2Ee260e464aC23EA23F6bb0",
		chainId: 1,
		decimals: 18,
		name: "Toshify finance",
		symbol: "YFT"
	},
	{
		address: "0x94F31aC896c9823D81cf9C2C93feCEeD4923218f",
		chainId: 1,
		decimals: 18,
		name: "YFTether",
		symbol: "YFTE"
	},
	{
		address: "0xbD301BE09eB78Df47019aa833D29eDc5D815D838",
		chainId: 1,
		decimals: 18,
		name: "YFUEL",
		symbol: "YFUEL"
	},
	{
		address: "0x45f24BaEef268BB6d63AEe5129015d69702BCDfa",
		chainId: 1,
		decimals: 18,
		name: "YFValue",
		symbol: "YFV"
	},
	{
		address: "0xF55a93b613D172b86c2Ba3981a849DaE2aeCDE2f",
		chainId: 1,
		decimals: 18,
		name: "Your Futures Exchan",
		symbol: "YFX"
	},
	{
		address: "0xD811e485cB4ab1FAd56233dE4464Fb5d1C9f3E99",
		chainId: 1,
		decimals: 18,
		name: "Yearn Global",
		symbol: "YG"
	},
	{
		address: "0x25f8087EAD173b73D6e8B84329989A8eEA16CF73",
		chainId: 1,
		decimals: 18,
		name: "Yield Guild Games",
		symbol: "YGG"
	},
	{
		address: "0x11b0a8C0FA626627601eD518c3538a39d92D609E",
		chainId: 1,
		decimals: 6,
		name: "Generation of Yield",
		symbol: "YGY"
	},
	{
		address: "0x5a143F78Bb66294ff37c47b5164584475B932bAb",
		chainId: 1,
		decimals: 18,
		name: "Yearn Hold Finance",
		symbol: "YHFI"
	},
	{
		address: "0x03E4bdce611104289333F35C8177558b04CC99fF",
		chainId: 1,
		decimals: 18,
		name: "Yield Stake Finance",
		symbol: "YI12"
	},
	{
		address: "0xa8B61CfF52564758A204F841E636265bEBC8db9B",
		chainId: 1,
		decimals: 18,
		name: "Yield Protocol",
		symbol: "YIELD"
	},
	{
		address: "0xE52d53c8C9aa7255F8c2FA9f7093FEa7192D2933",
		chainId: 1,
		decimals: 18,
		name: "YieldX",
		symbol: "YIELDX"
	},
	{
		address: "0x87047986E8e4961c11d2EdcD94285E3A1331d97B",
		chainId: 1,
		decimals: 18,
		name: "Yakuza DFO",
		symbol: "YKZ"
	},
	{
		address: "0x9ba60bA98413A60dB4C651D4afE5C937bbD8044B",
		chainId: 1,
		decimals: 18,
		name: "Yearn Lazy Ape",
		symbol: "YLA"
	},
	{
		address: "0x454CB9D0845bB4a28462F98C21a4fAFD16ceb25f",
		chainId: 1,
		decimals: 18,
		name: "Yearn finance Infra",
		symbol: "YLAB"
	},
	{
		address: "0xd0658324074D6249a51876438916f7C423075451",
		chainId: 1,
		decimals: 18,
		name: "Yearn Land",
		symbol: "YLAND"
	},
	{
		address: "0x21d5678A62DFe63a47062469Ebb2fAc2817D8832",
		chainId: 1,
		decimals: 8,
		name: "YOLOCash",
		symbol: "YLC"
	},
	{
		address: "0xDcB01cc464238396E213a6fDd933E36796eAfF9f",
		chainId: 1,
		decimals: 18,
		name: "Yield",
		symbol: "YLD"
	},
	{
		address: "0xF94b5C5651c888d928439aB6514B93944eEE6F48",
		chainId: 1,
		decimals: 18,
		name: "YIELD App",
		symbol: "YLD"
	},
	{
		address: "0x88cb253d4C8caB8CDF7948A9251Db85a13669E23",
		chainId: 1,
		decimals: 18,
		name: "Yieldly",
		symbol: "YLDY"
	},
	{
		address: "0x062f90480551379791FBe2ED74C1fe69821b30d3",
		chainId: 1,
		decimals: 18,
		name: "YMAX",
		symbol: "YMAX"
	},
	{
		address: "0xd0c59798F986d333554688cD667033d469C2398e",
		chainId: 1,
		decimals: 18,
		name: "Ymen Finance",
		symbol: "YMEN"
	},
	{
		address: "0x16bE21C08EB27953273608629e4397556c561D26",
		chainId: 1,
		decimals: 8,
		name: "Yearn20Moon Finance",
		symbol: "YMF20"
	},
	{
		address: "0xb7ba8461664dE526A3ae44189727DFC768625902",
		chainId: 1,
		decimals: 9,
		name: "YMPL",
		symbol: "YMPL"
	},
	{
		address: "0x87C00817ABe35eD4C093e59043fae488238d2F74",
		chainId: 1,
		decimals: 18,
		name: "Yoink",
		symbol: "YNK"
	},
	{
		address: "0x1BC7C1dE0AC6eF4fDeC35c053030D90cf54c7e9A",
		chainId: 1,
		decimals: 18,
		name: "YANG",
		symbol: "YNN"
	},
	{
		address: "0xeBF4CA5319F406602EEFf68da16261f1216011B5",
		chainId: 1,
		decimals: 18,
		name: "Yobit Token",
		symbol: "YO"
	},
	{
		address: "0x05Fcc72CFb4150AbAE415c885f7a433Ff523296F",
		chainId: 1,
		decimals: 18,
		name: "YOKcoin",
		symbol: "YOK"
	},
	{
		address: "0xC7596f3FC97AE603e1D7FfA61e6eFb7B6a59Bed2",
		chainId: 1,
		decimals: 18,
		name: "Yoo Ecology",
		symbol: "YOO"
	},
	{
		address: "0xAE1eaAE3F627AAca434127644371b67B18444051",
		chainId: 1,
		decimals: 8,
		name: "Yield Optimization",
		symbol: "YOP"
	},
	{
		address: "0x9f978Aa425148CdD9223eb175446a877B86727Ff",
		chainId: 1,
		decimals: 6,
		name: "PayYoda",
		symbol: "YOT"
	},
	{
		address: "0x34364BEe11607b1963d66BCA665FDE93fCA666a8",
		chainId: 1,
		decimals: 18,
		name: "YOU Chain",
		symbol: "YOU"
	},
	{
		address: "0x3D371413dd5489F3A04C07c0C2CE369c20986ceb",
		chainId: 1,
		decimals: 10,
		name: "YOUcash",
		symbol: "YOUC"
	},
	{
		address: "0xcbeAEc699431857FDB4d37aDDBBdc20E132D4903",
		chainId: 1,
		decimals: 18,
		name: "YOYOW",
		symbol: "YOYOW"
	},
	{
		address: "0x17525E4f4Af59fbc29551bC4eCe6AB60Ed49CE31",
		chainId: 1,
		decimals: 18,
		name: "PieDAO Yearn Ecosystem Pie",
		symbol: "YPIE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x40E7705254494a7E61D5b7c86da50225DDc3DaAE",
		chainId: 1,
		decimals: 18,
		name: "yplutus",
		symbol: "YPLT"
	},
	{
		address: "0x6051C1354Ccc51b4d561e43b02735DEaE64768B8",
		chainId: 1,
		decimals: 18,
		name: "yRise Finance",
		symbol: "YRISE"
	},
	{
		address: "0xeea9aE787f3A620072d13b2cdC8cabFFb9c0aB96",
		chainId: 1,
		decimals: 18,
		name: "Yearn Secure",
		symbol: "YSEC"
	},
	{
		address: "0x9C664F20C0a00a4949DFfcA76748c02754C875aa",
		chainId: 1,
		decimals: 18,
		name: "Yearn Shark Finance",
		symbol: "YSKF"
	},
	{
		address: "0xD9A947789974bAD9BE77E45C2b327174A9c59D71",
		chainId: 1,
		decimals: 18,
		name: "Ystar",
		symbol: "YSR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x5c89736e9454200141B80C37Eb28eaCECA2cE8Cb",
		chainId: 1,
		decimals: 8,
		name: "Cherry Token",
		symbol: "YT"
	},
	{
		address: "0x5EdC1a266E8b2c5E8086d373725dF0690af7e3Ea",
		chainId: 1,
		decimals: 18,
		name: "YottaChain",
		symbol: "YTA"
	},
	{
		address: "0x48cf0E2eCA22EAe0AD33feE16A5CB6E62207A8Ab",
		chainId: 1,
		decimals: 18,
		name: "YTHO Online",
		symbol: "YTHO"
	},
	{
		address: "0x534546C490A4Ed2a9D0c3555447Bb9b4b01bcb9E",
		chainId: 1,
		decimals: 17,
		name: "Yotro",
		symbol: "YTRO"
	},
	{
		address: "0x5322A3556F979cE2180B30e689a9436fDDCB1021",
		chainId: 1,
		decimals: 18,
		name: "yTSLA Finance",
		symbol: "YTSLA"
	},
	{
		address: "0x73a052500105205d34Daf004eAb301916DA8190f",
		chainId: 1,
		decimals: 18,
		name: "yTUSD",
		symbol: "YTUSD"
	},
	{
		address: "0x8aE005C97Aa6853478C7f373b1D0F72AA92880A7",
		chainId: 1,
		decimals: 18,
		name: "Yuang Coin",
		symbol: "YUANG"
	},
	{
		address: "0x4c10BD19688B906665fBd53415f279F34b44ECE7",
		chainId: 1,
		decimals: 18,
		name: "YUI Finance",
		symbol: "YUI"
	},
	{
		address: "0x5AB793E36070F0fac928EA15826b0c1Bc5365119",
		chainId: 1,
		decimals: 8,
		name: "YUKI COIN",
		symbol: "YUKI"
	},
	{
		address: "0x25859743ED0861665611B81E47682e889b48313B",
		chainId: 1,
		decimals: 4,
		name: "Yumi",
		symbol: "YUMI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4B4F5286e0f93E965292B922B9Cd1677512F1222",
		chainId: 1,
		decimals: 18,
		name: "YUNo Finance",
		symbol: "YUNO"
	},
	{
		address: "0x0F33bb20a282A7649C7B3AFf644F084a9348e933",
		chainId: 1,
		decimals: 18,
		name: "YUPIE",
		symbol: "YUP"
	},
	{
		address: "0xD9A12Cde03a86E800496469858De8581D3A5353d",
		chainId: 1,
		decimals: 18,
		name: "Crowdholding",
		symbol: "YUP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x69bBC3F8787d573F1BBDd0a5f40C7bA0Aee9BCC9",
		chainId: 1,
		decimals: 18,
		name: "Yup",
		symbol: "YUP",
		extensions: {
			color: "#393939",
			isVerified: true,
			shadowColor: "#BFBEBE"
		}
	},
	{
		address: "0x5dbcF33D8c2E976c6b560249878e6F1491Bca25c",
		chainId: 1,
		decimals: 18,
		name: "Y Curve Vault",
		symbol: "yUSD",
		extensions: {
			color: "#0072F6",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x26EA744E5B887E5205727f55dFBE8685e3b21951",
		chainId: 1,
		decimals: 6,
		name: "yUSDC  BUSD pool",
		symbol: "YUSDC"
	},
	{
		address: "0xB8C3B7A2A618C552C23B1E4701109a9E756Bab67",
		chainId: 1,
		decimals: 18,
		name: "1INCH yVault",
		symbol: "yv1INCH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x9d409a0A012CFbA9B15F6D4B36Ac57A46966Ab9a",
		chainId: 1,
		decimals: 18,
		name: "Yearn Compounding v",
		symbol: "YVBOOST"
	},
	{
		address: "0x27b7b1ad7288079A66d12350c828D3C00A6F07d7",
		chainId: 1,
		decimals: 18,
		name: "Curve Iron Bank Pool yVault",
		symbol: "yvCurve-IronBank",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x986b4AFF588a109c09B50A03f42E4110E29D353F",
		chainId: 1,
		decimals: 18,
		name: "Curve sETH Pool yVault",
		symbol: "yvCurve-sETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xdCD90C7f6324cfa40d7169ef80b12031770B4325",
		chainId: 1,
		decimals: 18,
		name: "Curve stETH Pool yVault",
		symbol: "yvCurve-stETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x19D3364A399d251E894aC732651be8B0E4e85001",
		chainId: 1,
		decimals: 18,
		name: "DAI yVault",
		symbol: "yvDAI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xc5bDdf9843308380375a611c18B50Fb9341f502A",
		chainId: 1,
		decimals: 18,
		name: "veCRV DAO yVault",
		symbol: "YVE-CRVDAO"
	},
	{
		address: "0xEC681F28f4561c2a9534799AA38E0d36A83Cf478",
		chainId: 1,
		decimals: 18,
		name: "YVS Finance",
		symbol: "YVS"
	},
	{
		address: "0x5f18C75AbDAe578b483E5F43f12a39cF75b973a9",
		chainId: 1,
		decimals: 6,
		name: "USDC yVault",
		symbol: "yvUSDC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7Da96a3891Add058AdA2E826306D812C638D87a7",
		chainId: 1,
		decimals: 6,
		name: "USDT yVault",
		symbol: "yvUSDT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xcB550A6D4C8e3517A939BC79d0c7093eb7cF56B5",
		chainId: 1,
		decimals: 8,
		name: "WBTC yVault",
		symbol: "yvWBTC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xa9fE4601811213c340e850ea305481afF02f5b28",
		chainId: 1,
		decimals: 18,
		name: "WETH yVault",
		symbol: "yvWETH",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE14d13d8B3b85aF791b2AADD661cDBd5E6097Db1",
		chainId: 1,
		decimals: 18,
		name: "YFI yVault",
		symbol: "yvYFI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaF20b44C1C651D1d29cFB916eE2A0630B828Eb7A",
		chainId: 1,
		decimals: 18,
		name: "YYFI Protocol",
		symbol: "YYFI"
	},
	{
		address: "0x75D1aA733920b14fC74c9F6e6faB7ac1EcE8482E",
		chainId: 1,
		decimals: 18,
		name: "YFLink Staking Share",
		symbol: "yYFL"
	},
	{
		address: "0x2cd9324bA13b77554592d453e6364086FbBa446a",
		chainId: 1,
		decimals: 0,
		name: "502 Bad Gateway Tok",
		symbol: "Z502"
	},
	{
		address: "0x9d1233cc46795E94029fDA81aAaDc1455D510f15",
		chainId: 1,
		decimals: 18,
		name: "Zero Collateral Dai",
		symbol: "ZAI",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xEfFeA57067E02999fDCd0Bb45c0f1071a29472D9",
		chainId: 1,
		decimals: 18,
		name: "Zantepay",
		symbol: "ZANTEPAY"
	},
	{
		address: "0x6781a0F84c7E9e846DCb84A9a5bd49333067b104",
		chainId: 1,
		decimals: 18,
		name: "Zap",
		symbol: "ZAP",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x7d7470Bc321A60cb11c7989356ad66a161C56628",
		chainId: 1,
		decimals: 18,
		name: "Zap DeFi",
		symbol: "ZAP"
	},
	{
		address: "0xBd0793332e9fB844A52a205A233EF27a5b34B927",
		chainId: 1,
		decimals: 18,
		name: "ZB Token",
		symbol: "ZB",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x29257908879c5792F1bb25449A7209205434DC3f",
		chainId: 1,
		decimals: 18,
		name: "Zbank Token",
		symbol: "ZBK"
	},
	{
		address: "0x7090a6e22c838469c9E67851D6489ba9c933a43F",
		chainId: 1,
		decimals: 0,
		name: "Zuck Bucks",
		symbol: "ZBUX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xb9EF770B6A5e12E45983C5D80545258aA38F3B78",
		chainId: 1,
		decimals: 10,
		name: "0chain",
		symbol: "ZCN"
	},
	{
		address: "0x8b83116E05F722554e1089b9850e731ee20dD692",
		chainId: 1,
		decimals: 18,
		name: "ZCNOX Coin",
		symbol: "ZCNOX"
	},
	{
		address: "0x2008e3057BD734e10AD13c9EAe45Ff132aBc1722",
		chainId: 1,
		decimals: 8,
		name: "Zebi",
		symbol: "ZCO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x4992D8AC40E55350330102aBf2dEBed8864E7Ba0",
		chainId: 1,
		decimals: 18,
		name: "Zcon Protocol",
		symbol: "ZCON"
	},
	{
		address: "0x83FF572a1757b9E4508CB08f13a79Ed162c756c4",
		chainId: 1,
		decimals: 0,
		name: "Zrocor",
		symbol: "ZCOR"
	},
	{
		address: "0xC7e43A1c8E118aA2965F5EAbe0e718D83DB7A63C",
		chainId: 1,
		decimals: 18,
		name: "ZCore Token",
		symbol: "ZCRT"
	},
	{
		address: "0xC52C326331E9Ce41F04484d3B5E5648158028804",
		chainId: 1,
		decimals: 18,
		name: "Unizen",
		symbol: "ZCX"
	},
	{
		address: "0x7A2810d3d859Ed03ede523eB801a3B43B5e8979C",
		chainId: 1,
		decimals: 18,
		name: "Zodcoin",
		symbol: "ZDC"
	},
	{
		address: "0x1cF402135d7Bd27Dc9d21C03Ae2D8375BC43E9eC",
		chainId: 1,
		decimals: 18,
		name: "Zodiac",
		symbol: "ZDC"
	},
	{
		address: "0x5150956E082C748Ca837a5dFa0a7C10CA4697f9c",
		chainId: 1,
		decimals: 18,
		name: "Zeedex",
		symbol: "ZDEX",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xBDFA65533074B0b23EbC18c7190BE79Fa74b30c2",
		chainId: 1,
		decimals: 8,
		name: "Zloadr",
		symbol: "ZDR"
	},
	{
		address: "0x78a8c84b4c23563bE4518e7045016D3170130823",
		chainId: 1,
		decimals: 18,
		name: "3X Short Zcash Toke",
		symbol: "ZECBEAR"
	},
	{
		address: "0xD437d88153daEF4784CAcd2084b1d8Cc2D3312B8",
		chainId: 1,
		decimals: 18,
		name: "3X Long Zcash Token",
		symbol: "ZECBULL"
	},
	{
		address: "0xFbC4f3f645C4003a2E4F4e9b51077d2DaA9a9341",
		chainId: 1,
		decimals: 18,
		name: "ZEDXION",
		symbol: "ZEDXION",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x2eDf094dB69d6Dcd487f1B3dB9febE2eeC0dd4c5",
		chainId: 1,
		decimals: 18,
		name: "ZeroSwap",
		symbol: "ZEE"
	},
	{
		address: "0xB1e9157c2Fdcc5a856C8DA8b2d89b6C32b3c1229",
		chainId: 1,
		decimals: 18,
		name: "Zenfuse",
		symbol: "ZEFU"
	},
	{
		address: "0xE5B826Ca2Ca02F09c1725e9bd98d9a8874C30532",
		chainId: 1,
		decimals: 18,
		name: "ZEON Network",
		symbol: "ZEON"
	},
	{
		address: "0x8188e51Bc678F0070531f0e782718Df0027452De",
		chainId: 1,
		decimals: 8,
		name: "ZERACOIN",
		symbol: "ZERA"
	},
	{
		address: "0xF0939011a9bb95c3B791f0cb546377Ed2693a574",
		chainId: 1,
		decimals: 18,
		name: "Zero Exchange",
		symbol: "ZERO",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x757703bD5B2c4BBCfde0BE2C0b0E7C2f31FCf4E9",
		chainId: 1,
		decimals: 18,
		name: "Zest Token",
		symbol: "ZEST"
	},
	{
		address: "0xe7E4279b80D319EDe2889855135A22021baf0907",
		chainId: 1,
		decimals: 18,
		name: "ZeusNetwork",
		symbol: "ZEUS"
	},
	{
		address: "0x19fFfd124CD9089E21026d10dA97f8cD6B442Bff",
		chainId: 1,
		decimals: 8,
		name: "Zuflo Coin",
		symbol: "ZFL"
	},
	{
		address: "0xa72b32F11C49F3F9aA14125C4C89A9c60c390eb4",
		chainId: 1,
		decimals: 18,
		name: "ZG Blockchain Token",
		symbol: "ZGT"
	},
	{
		address: "0x837010619aeb2AE24141605aFC8f66577f6fb2e7",
		chainId: 1,
		decimals: 18,
		name: "zHEGIC",
		symbol: "ZHEGIC"
	},
	{
		address: "0x7BeBd226154E865954A87650FAefA8F485d36081",
		chainId: 1,
		decimals: 18,
		name: "Zignaly",
		symbol: "ZIG"
	},
	{
		address: "0x05f4a42e251f2d52b8ed15E9FEdAacFcEF1FAD27",
		chainId: 1,
		decimals: 12,
		name: "Zilliqa",
		symbol: "ZIL",
		extensions: {
			color: "#49c1bf",
			isVerified: true
		}
	},
	{
		address: "0x006699d34AA3013605d468d2755A2Fe59A16B12B",
		chainId: 1,
		decimals: 18,
		name: "Zild Finance",
		symbol: "ZILD"
	},
	{
		address: "0x033e223870f766644f7f7a4B7dc2E91573707d06",
		chainId: 1,
		decimals: 18,
		name: "Zin",
		symbol: "ZIN"
	},
	{
		address: "0x4AaC461C86aBfA71e9d00d9a2cde8d74E4E1aeEa",
		chainId: 1,
		decimals: 18,
		name: "ZINC",
		symbol: "ZINC"
	},
	{
		address: "0xfB22cED41B1267dA411F68c879f4Defd0bD4796a",
		chainId: 1,
		decimals: 18,
		name: "Ziot",
		symbol: "ZIOT"
	},
	{
		address: "0xA9d2927d3a04309E008B6af6E2e282AE2952e7fD",
		chainId: 1,
		decimals: 18,
		name: "Zipper Network",
		symbol: "ZIP"
	},
	{
		address: "0xEDD7c94FD7B4971b916d15067Bc454b9E1bAD980",
		chainId: 1,
		decimals: 18,
		name: "Zippie",
		symbol: "ZIPT"
	},
	{
		address: "0x8DD4228605e467671941Ffb4caE15cf7959C8D9D",
		chainId: 1,
		decimals: 8,
		name: "Ziticoin",
		symbol: "ZITI"
	},
	{
		address: "0xf3C092cA8CD6D3d4ca004Dc1d0f1fe8CcAB53599",
		chainId: 1,
		decimals: 18,
		name: "ZIX",
		symbol: "ZIX"
	},
	{
		address: "0xBC34985b4d345AeA933d5cAc19F3a86bd1Fb398F",
		chainId: 1,
		decimals: 18,
		name: "ZJLT Distributed Fa",
		symbol: "ZJLT"
	},
	{
		address: "0xe4815AE53B124e7263F08dcDBBB757d41Ed658c6",
		chainId: 1,
		decimals: 18,
		name: "ZKSwap",
		symbol: "ZKS"
	},
	{
		address: "0xfd8971d5E8E1740cE2d0A84095fCA4De729d0c16",
		chainId: 1,
		decimals: 18,
		name: "Zilla",
		symbol: "ZLA"
	},
	{
		address: "0xA8e7AD77C60eE6f30BaC54E2E7c0617Bd7B5A03E",
		chainId: 1,
		decimals: 18,
		name: "zLOT",
		symbol: "ZLOT"
	},
	{
		address: "0x94D8Db14831c2c08943798542C450df2844913e5",
		chainId: 1,
		decimals: 18,
		name: "Zuplo",
		symbol: "ZLP"
	},
	{
		address: "0x5319e86F0e41a06E49eb37046b8c11D78bcAd68C",
		chainId: 1,
		decimals: 18,
		name: "Zelwin",
		symbol: "ZLW"
	},
	{
		address: "0xE25FAAb5821ce70BA4179A70c1d481BA45b9D0c9",
		chainId: 1,
		decimals: 8,
		name: "ZMAN Coin",
		symbol: "ZMAN"
	},
	{
		address: "0x554FFc77F4251a9fB3c0E3590a6a205f8d4e067D",
		chainId: 1,
		decimals: 18,
		name: "ZMINE",
		symbol: "ZMN",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xaa602dE53347579f86b996D2Add74bb6F79462b2",
		chainId: 1,
		decimals: 18,
		name: "Zipmex Token",
		symbol: "ZMT"
	},
	{
		address: "0xE95990825AAB1a7f0Af4cc648f76a3Bcc99F25B2",
		chainId: 1,
		decimals: 18,
		name: "Zenswap Network Tok",
		symbol: "ZNT"
	},
	{
		address: "0x4fa000dF40C06FC8c7D9179661535846B7Cd4f87",
		chainId: 1,
		decimals: 18,
		name: "Zenswap Network",
		symbol: "ZNT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x1a231e75538a931c395785EF5D1A5581ec622B0e",
		chainId: 1,
		decimals: 18,
		name: "Zoom Protocol",
		symbol: "ZOM"
	},
	{
		address: "0x5091aEd52Ad421969254E48d29aa1d1807E1870b",
		chainId: 1,
		decimals: 18,
		name: "ZOM",
		symbol: "ZOM"
	},
	{
		address: "0x78175901e9B04090Bf3B3D3cB7f91CA986fb1aF6",
		chainId: 1,
		decimals: 18,
		name: "Antique Zombie Shar",
		symbol: "ZOMB"
	},
	{
		address: "0xd55BD2C12B30075b325Bc35aEf0B46363B3818f8",
		chainId: 1,
		decimals: 18,
		name: "Zombie.Finance",
		symbol: "ZOMBIE",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x69cf3091C91EB72DB05E45C76e58225177dEA742",
		chainId: 1,
		decimals: 18,
		name: "CoinZoom Token",
		symbol: "ZOOM"
	},
	{
		address: "0x1341A2257fa7b770420Ef70616f888056f90926c",
		chainId: 1,
		decimals: 9,
		name: "Zoo Token",
		symbol: "ZOOT"
	},
	{
		address: "0xD8E3FB3b08eBA982F2754988d70D57eDc0055ae6",
		chainId: 1,
		decimals: 9,
		name: "Zoracles",
		symbol: "ZORA"
	},
	{
		address: "0x825cd4201f8A2bBB1A69668EAc4E5Fa71283273D",
		chainId: 1,
		decimals: 18,
		name: "Zort",
		symbol: "ZORT"
	},
	{
		address: "0xb5b8F5616Fe42d5ceCA3e87F3FddbDd8F496d760",
		chainId: 1,
		decimals: 18,
		name: "ZPER",
		symbol: "ZPR",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE41d2489571d322189246DaFA5ebDe1F4699F498",
		chainId: 1,
		decimals: 18,
		name: "0x",
		symbol: "ZRX",
		extensions: {
			color: "#29292E",
			isRainbowCurated: true,
			isVerified: true
		}
	},
	{
		address: "0x7A41e0517a5ecA4FdbC7FbebA4D4c47B9fF6DC63",
		chainId: 1,
		decimals: 18,
		name: "Zeusshield",
		symbol: "ZSC"
	},
	{
		address: "0xe386B139Ed3715Ca4B18Fd52671bDcea1cdFE4b1",
		chainId: 1,
		decimals: 8,
		name: "Zeus Exchange",
		symbol: "ZST"
	},
	{
		address: "0xFE39e6a32AcD2aF7955Cb3D406Ba2B55C901f247",
		chainId: 1,
		decimals: 18,
		name: "ZBG Token",
		symbol: "ZT"
	},
	{
		address: "0xE8F9fa977ea585591d9F394681318C16552577fB",
		chainId: 1,
		decimals: 18,
		name: "ZTX",
		symbol: "ZTX"
	},
	{
		address: "0x6b4689E4514957699eDeB2Ee91C947F18E439806",
		chainId: 1,
		decimals: 18,
		name: "ZeuxCoin",
		symbol: "ZUC"
	},
	{
		address: "0xe0b9BcD54bF8A730EA5d3f1fFCe0885E911a502c",
		chainId: 1,
		decimals: 8,
		name: "ZUM TOKEN",
		symbol: "ZUM"
	},
	{
		address: "0x76417E660DF3E5c90C0361674C192da152A806E4",
		chainId: 1,
		decimals: 18,
		name: "Zerogoki USD",
		symbol: "ZUSD"
	},
	{
		address: "0xbf0f3cCB8fA385A287106FbA22e6BB722F94d686",
		chainId: 1,
		decimals: 6,
		name: "Zytara Dollar",
		symbol: "ZUSD"
	},
	{
		address: "0xc56c2b7e71B54d38Aab6d52E94a04Cbfa8F604fA",
		chainId: 1,
		decimals: 6,
		name: "ZUSD",
		symbol: "ZUSD"
	},
	{
		address: "0x83F873388Cd14b83A9f47FabDe3C9850b5C74548",
		chainId: 1,
		decimals: 18,
		name: "Zero Utility Token",
		symbol: "ZUT",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0x202f1877e1DB1120Ca3e9A98C5D505e7f035C249",
		chainId: 1,
		decimals: 18,
		name: "ZUZ Protocol",
		symbol: "ZUZ"
	},
	{
		address: "0x83e2BE8d114F9661221384B3a50d24B96a5653F5",
		chainId: 1,
		decimals: 18,
		name: "0xcert",
		symbol: "ZXC",
		extensions: {
			isVerified: true
		}
	},
	{
		address: "0xE65ee7c03Bbb3C950Cfd4895c24989afA233EF01",
		chainId: 1,
		decimals: 18,
		name: "Zynecoin",
		symbol: "ZYN"
	},
	{
		address: "0xf974b5f9Ac9c6632FeE8b76C61B0242ce69C839D",
		chainId: 1,
		decimals: 18,
		name: "ZYX",
		symbol: "ZYX"
	},
	{
		address: "0xc75F15AdA581219c95485c578E124df3985e4CE0",
		chainId: 1,
		decimals: 18,
		name: "zzz finance",
		symbol: "ZZZ"
	},
	{
		address: "0x93ED140172Ff226daD1F7F3650489b8Daa07aE7F",
		chainId: 1,
		decimals: 18,
		name: "zzz finance v2",
		symbol: "ZZZV2"
	}
];
var OFFLINE_TOKEN_METADATA = {
	name: name,
	timestamp: timestamp,
	logoURI: logoURI,
	version: version,
	keywords: keywords,
	tokens: tokens
};

process.env.NODE_ENV === 'production';
//
// Related to Token List and Token Overrides.
//
const REMOTE_TOKEN_LIST_ENDPOINT = 'https://raw.githubusercontent.com/ctjlewis/rainbow-token-list/service-compatibility/src/data/rainbow-token-list.json';
const REMOTE_TOKEN_OVERRIDES_ENDPOINT = 'https://raw.githubusercontent.com/ctjlewis/rainbow-overrides/master/src/data/rainbow-overrides.json';
const TokenListItemSchema = zod.z.string().url().nonempty();
zod.z.record(TokenListItemSchema);
zod.z.enum([
    'aave',
    'coingecko',
    'dharma',
    'kleros',
    'roll',
    'synthetix',
    'wrapped',
]);
const SocialSchema = zod.z.object({
    blog: zod.z.string().optional(),
    chat: zod.z.string().optional(),
    discord: zod.z.string().optional(),
    facebook: zod.z.string().optional(),
    forum: zod.z.string().optional(),
    github: zod.z.string().optional(),
    gitter: zod.z.string().optional(),
    instagram: zod.z.string().optional(),
    linkedin: zod.z.string().optional(),
    medium: zod.z.string().optional(),
    reddit: zod.z.string().optional(),
    slack: zod.z.string().optional(),
    telegram: zod.z.string().optional(),
    twitter: zod.z.string().optional(),
    youtube: zod.z.string().optional(),
});
const TokenDeprecationSchema = zod.z.object({
    new_address: zod.z.string().optional(),
});
const TokenExtensionsSchema = zod.z.object({
    color: zod.z.string().optional(),
    isRainbowCurated: zod.z.boolean().optional(),
    isVerified: zod.z.boolean().optional(),
    shadowColor: zod.z.string().optional(),
});
zod.z.object({
    address: zod.z.string().regex(/^0x[a-fA-F0-9]{40}$/),
    chainId: zod.z.number().optional(),
    decimals: zod.z.number().min(0),
    deprecation: TokenDeprecationSchema.optional(),
    extensions: TokenExtensionsSchema.optional(),
    name: zod.z.string(),
    social: SocialSchema.optional(),
    symbol: zod.z.string(),
    website: zod.z.string().optional(),
});
/**
 * Raw token data that is loaded from the JSON files.
 */
zod.z.object({
    address: zod.z.string(),
    decimals: zod.z.union([zod.z.string(), zod.z.number()]),
    name: zod.z.string(),
    symbol: zod.z.string(),
});
/**
 * Raw token data that is loaded from the JSON files.
 */
zod.z.object({
    address: zod.z.string().optional(),
    decimals: zod.z.union([zod.z.string(), zod.z.number()]).optional(),
    deprecation: TokenDeprecationSchema.optional(),
    name: zod.z.string().optional(),
    social: SocialSchema.optional(),
    symbol: zod.z.string().optional(),
    website: zod.z.string().optional(),
});

/**
 * Get the raw Token List data.
 *
 * @param endpoint The endpoint from which to load the Token List.
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The Token List dataset.
 */
const loadFromEndpoint = async (endpoint, offlineData) => {
    console.log('Making request to', endpoint);
    try {
        const result = await fetch__default['default'](endpoint);
        console.log('REQUEST SUCCEEDED.');
        return await result.json();
    }
    catch (e) {
        console.log('REQUEST FAILED.', e);
        return offlineData;
    }
};
/**
 * Load the raw Token List endpoint, including timestamp and other metadata.
 *
 * @returns The raw data from the JSON endpoint.
 */
const loadTokenMetadata = async () => {
    return await loadFromEndpoint(REMOTE_TOKEN_LIST_ENDPOINT, OFFLINE_TOKEN_METADATA);
};
/**
 * Load the full Token List, including any manual tokens.
 *
 * @param offlineData The data to fallback to in case of network failure.
 * @returns The full Token List.
 */
const loadTokenList = async () => {
    const tokenData = await loadTokenMetadata();
    return await tokenListFromData(tokenData);
};
/**
 * Load the Token Overrides List.
 * @returns All token overrides.
 */
const loadTokenOverrides = async () => {
    const overrides = loadFromEndpoint(REMOTE_TOKEN_OVERRIDES_ENDPOINT, rainbowOverrides.OFFLINE_TOKEN_OVERRIDES);
    return overrides;
};
/**
 * Get the Token List from raw metadata.
 *
 * @param tokenData The raw Token List data to process.
 * @returns The Token List.
 */
const tokenListFromData = async (tokenData) => {
    const loadedTokens = lodash.map(tokenData.tokens, (token) => {
        const { address: rawAddress, decimals, name, symbol, extensions } = token;
        const address = lodash.toLower(rawAddress);
        return {
            address,
            decimals,
            name,
            symbol,
            uniqueId: address,
            ...extensions,
        };
    });
    return loadedTokens;
};

/**
 * Disable certificate validation.
 *
 * @see https://nodejs.org/api/cli.html#cli_node_tls_reject_unauthorized_value
 */
/**
 * Library imports and exports.
 */
process.env.NODE_TLS_REJECT_UNAUTHORIZED = '0';

exports.loadFromEndpoint = loadFromEndpoint;
exports.loadTokenList = loadTokenList;
exports.loadTokenMetadata = loadTokenMetadata;
exports.loadTokenOverrides = loadTokenOverrides;
exports.tokenListFromData = tokenListFromData;
//# sourceMappingURL=rainbow-token-list-test.development.cjs.map
