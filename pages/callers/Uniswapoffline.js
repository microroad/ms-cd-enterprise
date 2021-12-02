
import Home from '..';
import Web3 from 'web3';
const ethers = require('ethers');
const fetch = require('node-fetch');
import jsonInterface  from './jsonInterface.json'



async function Unioff() {

  let web3 = new Web3(Web3.currentProvider);
  // defining the wallet private key