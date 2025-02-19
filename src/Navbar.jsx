import React from 'react';
import { Box, Flex, Image, Link, Spacer } from '@chakra-ui/react';
import Facebook from './assets/social-media-icons/facebook_32x32.png';
import Twitter from './assets/social-media-icons/twitter_32x32.png';
import Email from './assets/social-media-icons/email_32x32.png';
import { ConnectWallet } from '@thirdweb-dev/react';
import { Button } from '@chakra-ui/react';
import './Navbar.css';

const Navbar = () => {
  return (
    <Flex
      className='navbar flex-row'
      justify='space-between'
      align='center'
      direction='row'
    >
      {/* Left Side - Social Media Icons */}

      <Flex justify='space-around' direction='row'>
        <Link href='https://www.facebook.com' className='items'>
          <Image src={Facebook} boxSize='42px' margin='0 15px' />
        </Link>
        <Link href='https://www.twitter.com' className='items'>
          <Image src={Twitter} boxSize='42px' margin='0 15px' />
        </Link>
        <Link href='https://www.gamil.com' className='items'>
          <Image src={Email} boxSize='42px' margin='0 15px' />
        </Link>
      </Flex>

      {/* Right Side - Section and Connect */}
      <Flex
        justify='space-around'
        align='center'
        className='flex-row'
        padding='30px'
      >
        <Box margin='0 15px' className='items'>
          About
        </Box>
        <Spacer />
        <Box margin='0 15px' className='items'>
          Mint
        </Box>
        <Spacer />
        <Box margin='0 15px' className='items'>
          Team
        </Box>
        <Spacer />

        {/* TODO: 連接錢包 Connect */}
        <Box
          margin='0 15px'
          backgroundColor='#D6517D'
          borderRadius='15px'
          boxShadow='0px 2px 2px 1px #0F0F0F'
          color='white'
          cursor='pointer'
          fontFamily='inherit'
          padding='0px'
        >
          <ConnectWallet className='btn_wallet' btnTitle='連接錢包' />
        </Box>
      </Flex>
    </Flex>
  );
};

export default Navbar;
