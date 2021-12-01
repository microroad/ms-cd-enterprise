
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
                
                <Box padding={"20px"} width={"80%"} height={"fit-content"} bgColor={"#242124"} borderRadius={"30px"}>
                <Text textAlign={"center"} fontWeight={"bold"} color={'white'} >Uniswap Offline Portal</Text>
                    <Text color={"white"} >From Token</Text>
                    <Select onChange={e => setUniToken(e.target.value)} placeholder='Select From token' color={"white"}  >
                    <option value='0xc778417E063141139Fce010982780140Aa0cD5Ab'>ETH</option>
                    <option value='0xaD6D458402F60fD3Bd25163575031ACDce07538D'>DAI</option>
                    <option value='0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'>UNI</option>
                    </Select>
                    <Input placeholder='$0.00' variant={"outline"} mt={"15px"} bgColor={"#292929"} borderColor={"blackAlpha.700"} color={"white"} _hover={"none"} _active={"none"} />
                    <Text mt={"50px"} color={"white"} >To Token</Text>
                    <Select onChange={e =>setToUniToken(e.target.value)} color={"white"} placeholder='Select to Token'>
                    <option value='0xc778417E063141139Fce010982780140Aa0cD5Ab'>ETH</option>
                    <option value='0xaD6D458402F60fD3Bd25163575031ACDce07538D'>DAI</option>
                    <option value='0x1f9840a85d5aF5bf1D1762F925BDADdC4201F984'>UNI</option>
                    </Select>
                    <Input placeholder='$0.00' variant={"outline"} mt={"15px"} bgColor={"#292929"} borderColor={"blackAlpha.700"} color={"white"} _hover={"none"} _active={"none"} />
                    <Button onClick={getrawtx} variant={"solid"} colorScheme={"whiteAlpha"} alignSelf={"center"} mt={"10px"} ml={"10vw"} >Sign Offline Transaction</Button>

                </Box>
                {/* <Box padding={"20px"} mt={"100px"} width={"80%"} height={"fit-content"} bgColor={"#242124"} borderRadius={"30px"}>
                <Text textAlign={"center"} fontWeight={"bold"} color={'white'} >Binance Offline Portal</Text>

                    <Text color={"white"} >From Token</Text>
                    <Select placeholder='Select From token' color={"white"}  >
                    <option value='option1'>ETH</option>
                    <option value='option2'>DAI</option>
                    <option value='option3'>UNI</option>
                    </Select>
                    <Input placeholder='$0.00' variant={"outline"} mt={"15px"} bgColor={"#292929"} borderColor={"blackAlpha.700"} color={"white"} _hover={"none"} _active={"none"} />
                    <Text mt={"50px"} color={"white"} >To Token</Text>
                    <Select color={"white"} placeholder='Select to Token'>
                    <option value='option1'>ETH</option>
                    <option value='option2'>DAI</option>
                    <option value='option3'>UNI</option>
                    </Select>
                    <Input placeholder='$0.00' variant={"outline"} mt={"15px"} bgColor={"#292929"} borderColor={"blackAlpha.700"} color={"white"} _hover={"none"} _active={"none"} />
                    <Button variant={"solid"} colorScheme={"whiteAlpha"} alignSelf={"center"} mt={"10px"} ml={"10vw"} >Sign Offline Transaction</Button>

                </Box> */}
            </Box>
            <Box>
                <Box mt={"35px"}  flexDirection={"column"} justifyContent={"center"} alignContent={"center"} padding={"30px"} textAlign={"center"} color={"white"} bgColor={"#2c2c2c"}  width={"500px"} height={"fit-content"} borderRadius={"30px"} >
                    <Text fontSize={"20px"} fontWeight={"bold"} >Current Public Key</Text>
                    <Text fontSize={"20px"} fontWeight={"bold"} >{currentAccount.substring(0,7)+"..."+currentAccount.substring(37)}</Text>
                    <Button variant={"solid"} colorScheme={"whiteAlpha"} alignSelf={"center"} mt={"10px"} onClick={checkWalletHandler} >Get Current Account</Button>
                    <Input onChange={e => setPvtKey(e.target.value)} variant={"outline"} mt={"10px"} placeholder="Enter your private key" />
                    <Button variant={"solid"} placeholder="Enter Private Key" colorScheme={"whiteAlpha"} alignSelf={"center"} mt={"10px"} >Set Private Key</Button>
                </Box>
                <Box mt={"35px"} mb={"250px"} flexDirection={"column"} justifyContent={"center"} alignContent={"center"} padding={"30px"} textAlign={"center"} color={"white"} bgColor={"#2c2c2c"}  width={"500px"} height={"fit-content"} borderRadius={"30px"} >
                    <Text fontSize={"20px"} fontWeight={"bold"} >Current Offline Signed Transaction</Text>
                    <Divider/>
                    <br/>
                    <Text fontSize={"15px"} fontWeight={"semibold"} >Raw Transaction Hash : </Text>
                    <Button variant={"solid"} colorScheme={"whiteAlpha"} alignSelf={"center"} mt={"10px"}>Publish to Blockchain</Button>

                </Box>
            </Box>
        </Flex></>
     );
}

export default HomeSwap;