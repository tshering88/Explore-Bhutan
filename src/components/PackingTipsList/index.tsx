import React from 'react';
import { Box, CardRoot, Heading, List, ListItem } from '@chakra-ui/react';

interface PackingTipsListProps {
  tips: string[];
}

const PackingTipsList: React.FC<PackingTipsListProps> = ({ tips }) => (
  <CardRoot m="auto" >
    <Box p={4} w="100%">
      <Heading size="lg" mb={2}>
        Packing Tips
      </Heading>
      <List.Root spaceX={2} w="100%">
        {tips.map((tip, index) => (
          <ListItem key={index}>{tip}</ListItem>
        ))}
      </List.Root>
    </Box>
  </CardRoot>
);

export default PackingTipsList;
