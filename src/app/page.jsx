// "use client";
// import { useState, useEffect, useRef, useCallback } from "react";
// import { Heading, Flex, Center, Image, Button } from "@chakra-ui/react";
// import Typed from "typed.js";
// import SocialIcons from "../components/SocialIcons";
// import Particles from "react-tsparticles";
// import { loadFull } from "tsparticles";
// import particleConfig from "../particlesjs.json";
// import { RevealWrapper } from "next-reveal";

// export default function Home() {
//   const [showResume, setShowResume] = useState(false); // State to toggle resume visibility
//   const typedTextRef = useRef(null);
//   const particlesInit = useCallback(async (engine) => {
//     await loadFull(engine);
//   }, []);

//   useEffect(() => {
//     const options = {
//       strings: ["Developer", "Coder", "Tech Enthusiast", "AI/ML Enthusiast"],
//       typeSpeed: 50,
//       backSpeed: 35,
//       loop: true,
//     };

//     const typed = new Typed(typedTextRef.current, options);
//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <>
//       <Center>
//         <Particles
//           id="tsparticles"
//           init={particlesInit}
//           options={particleConfig}
//           position="absolute"
//           zIndex={0}
//         />
//         <Flex
//           flexDirection="column"
//           alignItems="center"
//           justifyContent="center"
//           height="100%"
//           width="100%"
//           position="absolute"
//           top="45vh"
//           zIndex={1}
//         >
//           <RevealWrapper className="load-hidden" delay={300}>
//             <Image
//               objectFit="shrink"
//               src="/images/ar-profile-transformed.png"
//               alt="profile-image"
//               width={["13rem", "13rem", "15rem"]}
//               height={["13rem", "13rem", "15rem"]}
//               marginTop={["5rem", "5rem", null]}
//               marginBottom={["1rem", "1rem", null]}
//               backgroundColor="blueTheme.navBg"
//               borderRadius="30rem"
//             />
//           </RevealWrapper>
//           <RevealWrapper className="load-hidden" delay={400}>
//             <Heading
//               size="lg"
//               color="blueTheme.navLinkActive"
//               fontFamily="Righteous"
//             >
//               Hi, my name is
//             </Heading>
//           </RevealWrapper>
//           <RevealWrapper className="load-hidden" delay={500}>
//             <Flex
//               alignItems="center"
//               my="1rem"
//               flexDirection={["column", "column", "row"]}
//             >
//               <Heading fontFamily="Black Ops One" fontSize={["2.5rem", "3.7rem"]}>
//                 Atharv Uddhav
//               </Heading>

//               <Heading
//                 fontFamily="Black Ops One"
//                 fontSize={["2.5rem", "3.7rem"]}
//                 ml={[null, "1rem"]}
//               >
//                 Kharmate
//               </Heading>
//             </Flex>
//           </RevealWrapper>
//           <RevealWrapper className="load-hidden" delay={600}>
//             <Heading my={3} size="lg" fontFamily="Righteous">
//               I&apos;m <span className="typed-text" ref={typedTextRef}></span>
//             </Heading>
//           </RevealWrapper>
//           <RevealWrapper className="load-hidden" delay={700}>
//             <SocialIcons />
//           </RevealWrapper>
//           <RevealWrapper className="load-hidden" delay={800}>
//             <Button className="button1"
//               mt={5}
//               colorScheme="blue"
//               size="lg"
//               onClick={() => setShowResume(true)} // Show resume on button click
//             >
//               View My Resume
//             </Button>
//           </RevealWrapper>
//         </Flex>
//       </Center>

//       {showResume && (
//         <Center mt={10}>
//           <div style={{ width: "80%", height: "600px", border: "1px solid #ccc" }}>
//             <embed
//               src="/files/resume.pdf"
//               type="application/pdf"
//               width="100%"
//               height="100%"
//             />
//           </div>
//         </Center>
//       )}
//     </>
//   );
// }

"use client";
import { useState, useEffect, useRef, useCallback } from "react";
import { Heading, Flex, Center, Image, Button } from "@chakra-ui/react";
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

  const handleCloseResume = () => setShowResume(false); // Close the resume modal

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
            <Button className="button1"
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
        <div className="modal-overlay" onClick={handleCloseResume}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="close-btn" onClick={handleCloseResume}>X</button>
            <div className="pdf-container">
              <embed
                src="/files/resume.pdf"
                type="application/pdf"
                width="100%"
                height="100%"
              />
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        .modal-overlay {
          position: fixed;
          top: 0;
          left: 0;
          right: 0;
          bottom: 0;
          background: rgba(0, 0, 0, 0.7); /* Dark background */
          z-index: 1000;
          display: flex;
          justify-content: center;
          align-items: center;
          overflow: hidden; /* Prevent scrolling */
          animation: fadeIn 0.3s ease-in-out; /* Smooth fade-in animation */
        }

        .modal-content {
          position: relative;
          background: #ffffff;
          width: 80%; /* Default width for larger screens */
          height: 80%; /* Default height for larger screens */
          border-radius: 15px;
          padding: 20px;
          overflow: auto; /* Allow scrolling inside the modal */
          box-shadow: 0 2px 15px rgba(0, 0, 0, 0.3);
          border: 3px solid #f7b7b7; /* Blush-colored border */
          animation: zoomIn 0.4s ease-out; /* Smooth zoom-in animation */
        }

        .close-btn {
          position: absolute;
          top: 10px;
          right: 10px;
          background: #ff4d4d;
          color: white;
          border: none;
          font-size: 20px;
          cursor: pointer;
          padding: 5px 10px;
          border-radius: 50%;
          transition: background 0.3s ease;
        }

        .close-btn:hover {
          background: #ff1a1a; /* Darker shade on hover */
        }

        .pdf-container {
          width: 100%;
          height: 100%;
          border: none;
          background: #f7f7f7;
          border-radius: 10px;
        }

        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }

        @keyframes zoomIn {
          from {
            transform: scale(0.7);
            opacity: 0;
          }
          to {
            transform: scale(1);
            opacity: 1;
          }
        }

        /* Mobile responsiveness */
        @media (max-width: 768px) {
          .modal-content {
            width: 90%; /* More responsive width on smaller screens */
            height: 90%; /* Adjust height on smaller screens */
          }

          .close-btn {
            font-size: 16px; /* Smaller close button on mobile */
            padding: 4px 8px;
          }

          .pdf-container {
            border-radius: 5px; /* Rounded corners for mobile */
          }
        }

        /* Very small screen */
        @media (max-width: 480px) {
          .modal-content {
            width: 95%; /* Adjust width for very small screens */
            height: 90%; /* Adjust height for very small screens */
          }

          .close-btn {
            font-size: 14px; /* Even smaller close button */
            padding: 3px 6px;
          }

          .pdf-container {
            border-radius: 5px; /* Slight rounding for mobile */
          }
        }
      `}</style>
    </>
  );
}

