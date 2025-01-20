"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Heading, Flex, Center, Image, Button, Box } from "@chakra-ui/react";
import Typed from "typed.js";
import SocialIcons from "../components/SocialIcons";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";
import particleConfig from "../particlesjs.json";
import { RevealWrapper } from "next-reveal";

export default function Home() {
  const [showResume, setShowResume] = useState(false); // State to toggle resume visibility
  const typedTextRef = useRef(null);
  const particlesInit = useCallback(async (engine) => {
    await loadFull(engine);
  }, []);

  useEffect(() => {
    const options = {
      strings: ["Developer", "Coder", "Tech Enthusiast", "AI/ML Enthusiast"],
      typeSpeed: 50,
      backSpeed: 35,
      loop: true,
    };

    const typed = new Typed(typedTextRef.current, options);
    return () => {
      typed.destroy();
    };
  }, []);

  const handleCloseResume = () => setShowResume(false);

  return (
    <>
      <Center>
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={particleConfig}
          position="absolute"
          zIndex={0}
        />
        <Flex
          flexDirection="column"
          alignItems="center"
          justifyContent="center"
          height="100%"
          width="100%"
          position="absolute"
          top="45vh"
          zIndex={1}
        >
          <RevealWrapper className="load-hidden" delay={300}>
            <Image
              objectFit="shrink"
              src="/images/ar-profile-transformed.png"
              alt="profile-image"
              width={["13rem", "13rem", "15rem"]}
              height={["13rem", "13rem", "15rem"]}
              marginTop={["5rem", "5rem", null]}
              marginBottom={["1rem", "1rem", null]}
              backgroundColor="blueTheme.navBg"
              borderRadius="30rem"
            />
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={400}>
            <Heading
              size="lg"
              color="blueTheme.navLinkActive"
              fontFamily="Righteous"
            >
              Hi, my name is
            </Heading>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={500}>
            <Flex
              alignItems="center"
              my="1rem"
              flexDirection={["column", "column", "row"]}
            >
              <Heading fontFamily="Black Ops One" fontSize={["2.5rem", "3.7rem"]}>
                Atharv Uddhav
              </Heading>

              <Heading
                fontFamily="Black Ops One"
                fontSize={["2.5rem", "3.7rem"]}
                ml={[null, "1rem"]}
              >
                Kharmate
              </Heading>
            </Flex>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={600}>
            <Heading my={3} size="lg" fontFamily="Righteous">
              I&apos;m <span className="typed-text" ref={typedTextRef}></span>
            </Heading>
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={700}>
            <SocialIcons />
          </RevealWrapper>
          <RevealWrapper className="load-hidden" delay={800}>
            <Button
              className="button1"
              mt={5}
              colorScheme="blue"
              size="lg"
              onClick={() => setShowResume(true)} // Show resume on button click
            >
              View My Resume
            </Button>
          </RevealWrapper>
        </Flex>
      </Center>

      {showResume && (
        <Box
          position="fixed"
          top="0"
          left="0"
          width="100vw"
          height="100vh"
          bg="rgba(0, 0, 0, 0.8)"
          zIndex="9999"
          display="flex"
          justifyContent="center"
          alignItems="center"
        >
          <Box
            bg="white"
            width={["90%", "80%", "70%"]}
            height={["80%", "85%", "90%"]}
            borderRadius="10px"
            boxShadow="0px 4px 15px rgba(0, 0, 0, 0.3)"
            position="relative"
            overflow="hidden"
          >
            <Button
              position="absolute"
              top="10px"
              right="10px"
              colorScheme="red"
              onClick={handleCloseResume}
            >
              Close
            </Button>
            <iframe
              src="/files/Atharv_Kharmate_Resume.pdf"
              type="application/pdf"
              width="100%"
              height="100%"
              title="Resume"
              style={{ border: "none", borderRadius: "10px" }}
            />
          </Box>
        </Box>
      )}
    </>
  );
}

