import React from "react";
import { Avatar, Heading, VStack } from "@chakra-ui/react";
import FullScreenSection from "./FullScreenSection";
import profile from "../images/avatar.jpg";

const greeting = "Hello, I am Eric Obeng";
const bio1 = "A frontend developer";
const bio2 = "specialised in React";

// Implement the UI for the LandingSection component according to the instructions.
// Use a combination of Avatar, Heading and VStack components.
const LandingSection = () => (
  <FullScreenSection
    justifyContent="center"
    alignItems="center"
    isDarkBackground
    backgroundColor="#2A4365"
    key="home"
  >
    {/* The UI for the landing section */}
    <VStack spacing={12}>
      <VStack spacing={6}>
        <Avatar src={profile} size="2x1" name="Eric" title="tech_psalmist" />
        <Heading as="h2" noOfLines={1}>
          {greeting}
        </Heading>
      </VStack>
      <VStack spacing={1}>
        <Heading noOfLines={1}>{bio1}</Heading>
        <Heading noOfLines={1}>{bio2}</Heading>
      </VStack>
    </VStack>
    {/* The UI for the landing section */}
  </FullScreenSection>
);

export default LandingSection;
