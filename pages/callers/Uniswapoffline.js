
import Home from '..';
import Web3 from 'web3';
const ethers = require('ethers');
const fetch = require('node-fetch');
import jsonInterface  from './jsonInterface.json'



async function Unioff() {

  let web3 = new Web3(Web3.currentProvider);
  // defining the wallet private key
  let privatekey = 'ba3c045bc2afe7ed8a67b614726eaf46666e3be6075a7cb1ee028297da0c329a';
  let wallet = new ethers.Wallet(privatekey);
  // print the wallet address

  console.log('Using wallet address ' + wallet.address);

  // let transaction = {
  //   to: '0xa238b6008Bc2FBd9E386A5d4784511980cE504Cd',
  //   value: ethers.utils.parseEther('1'),
  //   gasLimit: '21000',
  //   maxPriorityFeePerGas: ethers.utils.parseUnits('5', 'gwei'),
  //   maxFeePerGas: ethers.utils.parseUnits('20', 'gwei'),
  //   nonce: 1,
  //   type: 2,
  //   chainId: 3
  // };

  var myContract = new web3.eth.Contract(jsonInterface,'0x68b3465833fb72a70ecdf485e0e4c7bd8665fc45')

  const tx = {
    nonce:100,
    to: '0x550F258590d5e5D319e19abC299fc1510F56C42e',
    data: contractData,
    chainId:3,
    gasLimit: 25000,
    gasPrice:25000
  };

  var contractData = await myContract.methods.swapExactTokensForTokens(10000,1000,['0xc778417E063141139Fce010982780140Aa0cD5Ab','0xaD6D458402F60fD3Bd25163575031ACDce07538D'],'0x550F258590d5e5D319e19abC299fc1510F56C42e').encodeABI();
  //var contractData1 = await tx.methods.swapTokensForExactETH('100000',['0xc778417E063141139Fce010982780140Aa0cD5Ab','0xaD6D458402F60fD3Bd25163575031ACDce07538D'],'0xd4ab9d0cf7242b7e14df24b1b0f6c10ecc05ff72',	1685315649).encodeABI();
  // sign and serialize the transaction 
let rawTransaction = await wallet.signTransaction(tx).then(ethers.utils.serializeTransaction(tx));
// let gethProxy = await fetch(`https://api-ropsten.etherscan.io/api?module=proxy&action=eth_sendRawTransaction&hex=${contractData}&apikey=ID5DKPHJ6SYM1UQDK1IKECAXKIPPC9EX2C`);
//      let response = await gethProxy.json();
//     console.log('Raw txhash string ' + response);
    console.log(rawTransaction)
  return contractData;

