import { Button, HStack } from '@chakra-ui/react'
import React from 'react';
import {Link} from "react-router-dom";

const Header = () => {
  return(
     <HStack p={"4"} shadow={"base"} bgColor={"black"} >
     <Button varient={"unstyled"} color={"white"} bgColor={"black"}>
      <Link to ="/">Home</Link> 
    </Button>
    <Button varient={"unstyled"} color={"white"} bgColor={"black"}>
      <Link to ="/exchanges">Exchanges</Link> 
    </Button>
    <Button varient={"unstyled"} color={"white"} bgColor={"black"}>
      <Link to ="/conias">Conias</Link> 
    </Button>


  </HStack>
  );
};

export default Header