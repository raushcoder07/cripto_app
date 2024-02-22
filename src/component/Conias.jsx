import React, { useEffect, useState } from 'react'
import axios from 'axios';
import{server} from "../index";
import { Container, HStack, Heading, Img, Text, VStack } from '@chakra-ui/react';
import Loader from "./Loader";
import ErrorComponent from './ErrorComponent';


const Conias = () => {
  const[coinas ,setCoinas]=useState([]);
  const[loading ,setLoading]=useState(true);
  const[error ,setError]= useState(false);
  const[page ,setPage]= useState(1);
  const[currency ,setCurrency]= useState("inr");

  useEffect(()=>{
    const fetchConias= async()=>{
      try{
        const {data} =await axios.get(
          `${server}/coins/markets?vs_currency=${currency}&page=${page}`)
      // console.log(data);
      setCoinas(data);
      setLoading(false);
      console.log(data);
      } catch(error){
         setError(true);
          setLoading(false);
      }
    };
    fetchConias();

  },[currency,page]);
         
   if(error) return <ErrorComponent message= {"error While Fetching coin"} />;
  return (
    <Container maxW= {"container.xl"}>

      {loading ? (<Loader/> 
    ):( 
      <>
      <HStack wrap={"wrap"}>
        {
          coinas.map((i)=>(
            <Exchangecard
               key={i.id}
               name={i.name} 
               img={i.image} 
               rank={i.trust_score_rank} 
               url={i.url}
               />
          ))
        }
      </HStack>
      
      </>
    )}
    </Container>
  )
}

const Exchangecard=({name ,img,rank,url})=> (
     <a href={url} target={"blank"}>
      <VStack  w={"52"} shadow={"lg"} p={"8"} borderRadius={"lg"} transition={"all 0.5s"}
        m={"4"}
          css={
            {
              "&:hover":{
                transform: "scale(1.1)",
              }
            }
          }
      >
        <Img 
        src={img}
         w={'10'}
          h={"10"} 
          objectFit={"contain"}
          alt={"Exchange"}
           />

           <Heading size={"mid"} noOfLines={1}>
            {rank}
           </Heading>
           <Text noOfline={1}>{name}</Text>

      </VStack>

 </a>

  
)


export default Conias