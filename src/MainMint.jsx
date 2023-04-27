import React from 'react';
import { Flex, Box, Text, Button, Input, Spacer } from '@chakra-ui/react';
import { useState } from 'react';
import {
  ConnectWallet,
  useContract,
  useContractRead,
  Web3Button,
  useAddress,
} from '@thirdweb-dev/react';
import { NFT_ADDRESS } from './const/contractAddress';
import { ethers } from 'ethers';
import './MainMint.css';

const MainMint = () => {
  const [mintAmount, setMintAmount] = useState(1);
  const address = useAddress();
  const handleDecrement = () => {
    if (mintAmount <= 1) return;

    setMintAmount(mintAmount - 1);
  };

  const handleIncrement = () => {
    if (mintAmount >= 3) return;
    setMintAmount(mintAmount + 1);
  };

  // get contract
  const { contract } = useContract(NFT_ADDRESS);
  const { data: totalSupply, isLoading: loadingTotalSupply } = useContractRead(
    contract,
    'totalSupply',
  );

  return (
    <Flex justify='center' align='center' height='100vh' paddingBottom='150px'>
      <Box width='520px'>
        <div className='mint-container'>
          <Text fontSize='48px' textShadow='0 5px #000'>
            KryptoCamp
          </Text>
          <Text
            fontSize='30px'
            letterSpacing='0.5%'
            fontFamily='VT323'
            textShadow='0 2px 2px #000'
            lineHeight={'26px'}
          >
            It's 2043. Can the KryptoCamp save humans from destructive rampant
            NFT speculation? Mint KryptoCamp to find out!
          </Text>
          <Spacer />
        </div>

        {address ? (
          <div>
            <Flex align='center' justify='center'>
              <Button
                backgroundColor='#D6517D'
                borderRadius='5px'
                boxShadow='0px 2px 2px 1px #0f0f0f'
                color='white'
                cursor='pointer'
                fontFamily='inherit'
                padding='15px'
                marginTop='10px'
                onClick={handleDecrement}
              >
                -
              </Button>
              <Input
                readOnly
                fontFamily='inherit'
                width='100px'
                height='40px'
                textAlign='center'
                paddingLeft='19px'
                marginTop='10px'
                type='number'
                value={mintAmount}
              />
              <Button
                backgroundColor='#D6517D'
                borderRadius='5px'
                boxShadow='0px 2px 2px 1px #0f0f0f'
                color='white'
                cursor='pointer'
                fontFamily='inherit'
                padding='15px'
                marginTop='10px'
                onClick={handleIncrement}
              >
                +
              </Button>
            </Flex>

            {/* TODO: Mint */}
            <Web3Button
              contractAddress={NFT_ADDRESS}
              action={async () => {
                await contract.call('mint', [mintAmount], {
                  value: ethers.utils.parseEther(
                    (mintAmount * 0.001).toString(),
                  ),
                });
              }}
              className='mint_button'
            >
              Mint Now
            </Web3Button>

            {/* 目前已賣出 */}
            <Box
              fontSize='30px'
              letterSpacing='0.5%'
              fontFamily='VT323'
              textShadow='0 2px 2px #000'
              lineHeight={'26px'}
              marginTop='20px'
            >
              NFT TotalSupply:
              {/* TODO: 取得合約目前販售數量 TotalSupply */}
              {totalSupply > 0
                ? totalSupply.toString()
                : '恭喜你得到NO.1的殊榮'}
            </Box>
          </div>
        ) : (
          <Text
            marginTop='70px'
            fontSize='30px'
            letterSpacing='-5.5%'
            fontFamily='VT323'
            textShadow='0 3px #000'
            color='#D6517D'
          >
            You must be connected to Mint
          </Text>
        )}
      </Box>
    </Flex>
  );
};

export default MainMint;
