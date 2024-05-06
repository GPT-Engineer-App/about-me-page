import { Box, Flex, Text, VStack, Link, Container, Heading } from "@chakra-ui/react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Index = () => {
  return (
    <Container maxW="container.xl" p={0}>
      <Box as="header" w="full" p={4} borderBottom="1px" borderColor="gray.200">
        <Flex justify="space-between" align="center">
          <Text fontSize="xl" fontWeight="bold">John Doe</Text>
          <Flex gap="4">
            <Link href="#about" p={2}>About</Link>
            <Link href="#portfolio" p={2}>Portfolio</Link>
            <Link href="#contact" p={2}>Contact</Link>
          </Flex>
        </Flex>
      </Box>
      <VStack spacing={10} align="stretch" mt={10}>
        <Box id="about" p={5}>
          <Heading as="h2" size="lg">About Me</Heading>
          <Text mt={3}>
            Passionate software developer with a knack for building elegant and efficient applications.
            With a background in computer science, I specialize in full-stack development and have a keen interest in the latest web technologies.
          </Text>
        </Box>
        <Box id="portfolio" p={5}>
          <Heading as="h2" size="lg">Portfolio</Heading>
          <Text mt={3}>
            Here are some of my recent projects that showcase my skills and creativity in solving real-world problems.
          </Text>
          {/* Portfolio items would be listed here */}
        </Box>
        <Box id="contact" p={5}>
          <Heading as="h2" size="lg">Contact</Heading>
          <VStack spacing={3}>
            <Link href="https://github.com" isExternal><FaGithub /> GitHub</Link>
            <Link href="https://linkedin.com" isExternal><FaLinkedin /> LinkedIn</Link>
            <Link href="mailto:john.doe@example.com"><FaEnvelope /> Email Me</Link>
          </VStack>
        </Box>
      </VStack>
    </Container>
  );
};

export default Index;