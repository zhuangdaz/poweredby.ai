import { Product } from "@/lib/airtable";
import {
  Box,
  Container,
  Divider,
  Heading,
  HStack,
  Image,
  Icon,
  Link,
  SpaceProps,
  Tag,
  Text,
  useColorModeValue,
  Wrap,
  WrapItem,
} from "@chakra-ui/react";
import React from "react";
import { BsStars } from "react-icons/bs";

interface IProductTags {
  tags: Array<string>;
  marginTop?: SpaceProps["marginTop"];
}

const ProductTags: React.FC<IProductTags> = (props) => {
  return (
    <HStack spacing={2} marginTop={props.marginTop}>
      {props.tags.map((tag) => {
        return (
          <Tag size={"md"} variant="solid" colorScheme="facebook" key={tag}>
            {tag}
          </Tag>
        );
      })}
    </HStack>
  );
};

interface ProductCreatorProps {
  date: Date;
  name: string;
}

export const ProductCreator: React.FC<ProductCreatorProps> = (props) => {
  return (
    <HStack
      marginTop="2"
      spacing="2"
      display="flex"
      alignItems="center"
      fontSize="sm"
    >
      <Text fontSize="xs">By </Text>
      <Text fontWeight="medium">{props.name}</Text>
      <Text> {props.date.toLocaleDateString()}</Text>
    </HStack>
  );
};

interface ProductListProps {
  products: Product[];
}

const ProductList = ({ products }: ProductListProps) => {
  const featuredProduct = products.at(0)!;

  const previousProducts: Product[] = products.slice(1);
  return (
    <Container maxW={"7xl"} p="12">
      <Box
        display="flex"
        flexDirection={{ base: "column", sm: "row" }}
        justifyContent="space-between"
      >
        <Box
          display="flex"
          flex="1"
          marginRight="3"
          position="relative"
          alignItems="center"
        >
          <Box
            width={{ base: "100%", sm: "85%" }}
            zIndex="2"
            marginLeft={{ base: "0", sm: "5%" }}
            marginTop="5%"
          >
            <Image
              borderRadius="lg"
              src={featuredProduct.images[0]}
              alt="alt"
              objectFit="contain"
            />
          </Box>
          <Box zIndex="1" width="100%" position="absolute" height="100%">
            <Box
              bgGradient={useColorModeValue(
                "radial(orange.600 1px, transparent 1px)",
                "radial(orange.300 1px, transparent 1px)"
              )}
              backgroundSize="20px 20px"
              opacity="0.4"
              height="100%"
            />
          </Box>
        </Box>
        <Box
          marginTop={{ base: "1", sm: "5" }}
          display="flex"
          flexDirection="column"
          justifyContent="space-between"
        >
          <Box
            display="flex"
            flexDirection="row"
            bg="purple.600"
            width="fit-content"
            py="8px"
            px="16px"
            justifyContent="space-between"
          >
            <Icon
              mr="2"
              fontSize="16"
              _groupHover={{
                color: "white",
              }}
              as={BsStars}
            />
            <Heading fontSize="sm">Product of the Day</Heading>
          </Box>
          <Box
            display="flex"
            flex="1"
            flexDirection="column"
            justifyContent="center"
            marginTop={{ base: "3", sm: "0" }}
          >
            <ProductTags tags={featuredProduct.tags} />
            <Heading marginTop="1">
              <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                {featuredProduct?.name}
              </Link>
            </Heading>
            <ProductCreator
              name={featuredProduct?.creator || ""}
              date={new Date(featuredProduct?.postedAt!)}
            />
            <Text
              as="p"
              marginTop="2"
              color={useColorModeValue("gray.700", "gray.200")}
              fontSize="lg"
            >
              {featuredProduct?.summary}
            </Text>
          </Box>
        </Box>
      </Box>

      <Box></Box>
      <Heading as="h2" marginTop="5">
        Latest products
      </Heading>
      <Divider marginTop="5" />
      <Wrap spacing="1rem" marginTop="5">
        {previousProducts.map((product) => (
          <WrapItem
            key={product.name}
            width={{ base: "100%", sm: "45%", md: "45%", lg: "30%" }}
          >
            <Box w="100%">
              <Box borderRadius="lg" overflow="hidden">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  <Image
                    transform="scale(1.0)"
                    src={product.images[0]}
                    alt="some text"
                    objectFit="contain"
                    width="100%"
                    transition="0.3s ease-in-out"
                    _hover={{
                      transform: "scale(1.05)",
                    }}
                  />
                </Link>
              </Box>
              <ProductTags tags={product.tags} marginTop="3" />
              <Heading fontSize="l" marginTop="2">
                <Link textDecoration="none" _hover={{ textDecoration: "none" }}>
                  {product.name}
                </Link>
              </Heading>
              <Text as="p" fontSize="sm" marginTop="2" lineHeight="1.25">
                {product.summary}
              </Text>
              <ProductCreator
                name={product.creator}
                date={new Date(product?.postedAt!)}
              />
            </Box>
          </WrapItem>
        ))}
      </Wrap>
    </Container>
  );
};

export default ProductList;
