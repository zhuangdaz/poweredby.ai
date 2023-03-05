import { Button, ButtonProps, Flex, useColorModeValue } from '@chakra-ui/react';

export default function SubmitButton(props: ButtonProps) {
  return (
    <Flex
      justifyContent="right">
      <Button
        {...props}
        size="sm"
        p={4}
        bg={useColorModeValue('#151f21', 'gray.900')}
        color={'white'}
        rounded={'md'}
        _hover={{
          transform: 'translateY(-2px)',
          boxShadow: 'lg',
        }}
      >
        Submit a product
      </Button>
    </Flex>
  );
}