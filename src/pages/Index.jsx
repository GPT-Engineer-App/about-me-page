import { Box, Flex, Text, VStack, Link, Container, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" w="full" p={4} borderBottom="1px" borderColor="gray.200">
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold">John Doe</Text>
          <Flex gap={4}>
            <Link href="#about" p={2}>About</Link>
            <Link href="#portfolio" p={2}>Portfolio</Link>
            <Link href="#contact" p={2}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <Flex direction="column" align="center" justify="center" minH="100vh">
        <VStack spacing={8} mt={10}>
          <Heading as="h1" size="2xl" fontWeight="bold">Hello, I'm John Doe</Heading>
          <Text fontSize="xl" textAlign="center">Frontend Developer | UI/UX Enthusiast</Text>
        </VStack>
      </Flex>
      <Box as="section" id="about" p={10}>
        <Heading as="h2" size="xl">About Me</Heading>
        <Text mt={4}>I am a passionate frontend developer with a love for crafting beautiful and functional user interfaces. With a background in graphic design and a keen eye for detail, I strive to create seamless user experiences.</Text>
      </Box>
      <Box as="section" id="portfolio" p={10}>
        <Heading as="h2" size="xl">Portfolio</Heading>
        <Text mt={4}>Check out some of my recent projects.</Text>
        {/* Portfolio items would be listed here */}
      </Box>
      <Box as="section" id="contact" p={10}>
        <Heading as="h2" size="xl">Contact Me</Heading>
        <VStack spacing={3}>
          <Link href="https://github.com" isExternal><FaGithub /> Github</Link>
          <Link href="https://linkedin.com" isExternal><FaLinkedin /> LinkedIn</Link>
          <Link href="mailto:john.doe@example.com"><FaEnvelope /> john.doe@example.com</Link>
        </VStack>
      </Box>
    </Container>
  );
};

export default Index;