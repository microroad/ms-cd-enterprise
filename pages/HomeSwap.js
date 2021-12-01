
import React from 'react';
import { Box, Flex, Text, Input, Select, Button} from '@chakra-ui/react';
import { Divider } from '@chakra-ui/react';
import Web3 from 'web3';
import { useEffect, useState } from 'react';
import Unioff from './callers/Uniswapoffline';

function HomeSwap() {

    const[currentAccount,setCurrentAccount]=useState('');
    const[pvtKey,setPvtKey]=useState('');
    const[UniToken,setUniToken]=useState('');
    const[toUniToken,setToUniToken]=useState('');
    const[BnbToken,setBnbToken]=useState('');
    const[toBnbToken,setToBnbToken]=useState('');
    const[rawtx,setRawtx]=useState(null);

    const checkWalletHandler= async() =>{
        const {ethereum} = window;
        if(!ethereum){
            console.log("metamask detected");
            return;
        }
        try{
            const accounts = await ethereum.request({method : 'eth_requestAccounts'});
            setCurrentAccount(accounts[0]);
            console.log("Install Metamask")
        }catch(err){
            console.log(err);
        }
    }

    const getrawtx = async() =>{
        await setRawtx(Unioff)
    }


    return ( 
        <>
        <Box width={"100%"} textAlign={"center"} height={"fit-content"} bgColor={"#2c2c2c"}  >
            <Text fontSize={"4xl"} padding={"20px"} color={"white"} >OFF/SWAP</Text>
        </Box>
        <Flex bgColor={"#050100"} height={"fit-content"} flexDirection={"row"} >
            
            <Box margin={"40px"} width={'50%'}  >