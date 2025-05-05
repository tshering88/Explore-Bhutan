import { AccordionItem, 
    AccordionItemBody, 
    AccordionItemContent, 
    AccordionItemIndicator, 
    AccordionItemTrigger, 
    AccordionRoot,     
    Box,  
    Span, 
    Stack, } from "@chakra-ui/react";
import { useState } from "react";

const items = [
    {
        value: 'culture',
        title: 'Culture',
        text: 'Bhutanese culture is deeply rooted in its rich traditions, spirituality, and the preservation of its natural environment, particularly its unique blend of Buddhism and its diverse ethnic groups. The culture is known for its strong emphasis on religious practice, hospitality, and a strong sense of community.'
    },
    {
        value: 'etiquette',
        title: 'Etiquette',
        text: 'Bhutanese etiquette, known as Driglam Namzha, emphasizes respect, modesty, and serenity in all aspects of life. It is crucial to remember that personal space and avoiding direct confrontation are valued. When interacting with Bhutanese individuals, a slight bow and the greeting "Kuzuzangpo la" (hello) is preferred.'
    },
    {
        value: 'religion',
        title: 'Religion',
        text: 'Bhutan is a predominantly Buddhist nation, with the official state religion being the Drukpa Kargyupa sect of Mahayana Buddhism. While Buddhism dominates, the constitution guarantees religious freedom for all residents, and Hinduism is practiced by a significant minority, particularly in the southern regions.'
    }
]
const AccordionSection = () => {
    const [value, setValue]= useState([''])
    
  return (
    <Box  m={'auto'}>
        
    <Stack p={4}>
      

      <AccordionRoot 
      multiple defaultValue= {['b']}
      value={value} 
      onValueChange={(e)=> setValue(e.value)}>
        {items.map((item, index)=> (
            <AccordionItem key= {index} value={item.value}>
                <AccordionItemTrigger>                   
                    <Span flex ='1'>{item.title}</Span>
                    <AccordionItemIndicator/>
                </AccordionItemTrigger>
                <AccordionItemContent>
                    <AccordionItemBody>{item.text}</AccordionItemBody>
                </AccordionItemContent>
            </AccordionItem>
        ))}
        </AccordionRoot>
        </Stack>
       
        </Box>
  );
};

export default AccordionSection;

