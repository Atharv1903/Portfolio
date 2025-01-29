import React, { useState } from "react";
import {
  Input,
  Textarea,
  NumberInput,
  NumberInputField,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Button,
  Card,
  CardBody,
  useRadioGroup,
  Flex,
  Heading,
  Icon,
  Stack
} from "@chakra-ui/react";
import { BsFillSendFill } from "react-icons/bs";
import RadioCard from "../../components/RadioCards";
import { useForm } from "react-hook-form";
import { useToast } from "@chakra-ui/react";
import { RevealWrapper } from 'next-reveal';
import emailjs from '@emailjs/browser';

const ContactForm = () => {
  const toast = useToast();
  const options = ["Web Development", "Hiring", "Freelance", "Other"];
  const [interestedIn, setInterestedIn] = useState("Web Development");
  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "interested",
    defaultValue: interestedIn,
    onChange: (value) => setInterestedIn(value),
  });
  const group = getRootProps();
  const {
    handleSubmit,
    register,
    formState: { errors },
    reset
  } = useForm();
  const [isLoading, setIsLoading] = useState(false);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    formData["interested-in"] = interestedIn;

    try {
      // Use EmailJS to send the email
      await emailjs.send(
        process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID, // Service ID
        process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID, // Template ID
        {
          name: formData.name,
          email: formData.email,
          number: formData.number,
          message: formData.message,
          interested_in: formData["interested-in"],
        },
        process.env.NEXT_PUBLIC_EMAILJS_PUBLIC_KEY // Public Key
      );

      reset({
        name: "",
        email: "",
        number: "",
        message: "",
      });

      setIsLoading(false);

      toast({
        title: "Message sent successfully",
        status: "success",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.error("Error sending message:", error);
      toast({
        title: "Failed to send message",
        status: "error",
        position: "top",
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(false);
    }
  };

  return (
    <>
    <RevealWrapper className="load-hidden" delay={600}>
      <Card className="contact-form-card" borderRadius="2rem" backgroundColor="white" padding="10px 15px">
        <CardBody>
          <Heading size="md" color="black" my={3}>
            I&apos;m interested in...
          </Heading>
          <Flex {...group} wrap="wrap" px={1}>
            {options.map((value) => {
              const radio = getRadioProps({ value });
              return (
                <RadioCard key={value} {...radio}>
                  {value}
                </RadioCard>
              );
            })}
          </Flex>
          <Stack as="form" onSubmit={handleSubmit(onSubmit)}>
            <FormControl isRequired isInvalid={errors.name} my={4}>
              <FormLabel htmlFor="name">Enter Name</FormLabel>
              <Input
                id="name"
                className="contact-input"
                type="text"
                placeholder="Your Name"
                {...register("name", { required: true })}
              />
              {errors.name && (
                <FormErrorMessage>Enter your name</FormErrorMessage>
              )}
            </FormControl>
            <FormControl isRequired isInvalid={errors.email}>
              <FormLabel htmlFor="email">Enter Email</FormLabel>
              <Input
                id="email"
                className="contact-input"
                type="email"
                placeholder="Your Email"
                {...register("email", { required: true })}
              />
              {errors.email && (
                <FormErrorMessage>Enter your email</FormErrorMessage>
              )}
            </FormControl>
            <FormControl my={4}>
              <FormLabel htmlFor="number">Enter Phone No.</FormLabel>
              <NumberInput id="number" {...register("number")}>
                <NumberInputField
                  className="contact-input"
                  placeholder="Your Phone No."
                />
              </NumberInput>
            </FormControl>
            <FormControl isRequired isInvalid={errors.message}>
              <FormLabel htmlFor="message">Enter Message</FormLabel>
              <Textarea
                id="message"
                className="contact-input"
                placeholder="Your Message"
                {...register("message", { required: true })}
              />
              {errors.message && (
                <FormErrorMessage>Enter your message</FormErrorMessage>
              )}
            </FormControl>
            <FormControl>
              <Button
                isLoading={isLoading}
                loadingText='Submitting'
                backgroundColor="social.instagram"
                my={3}
                _hover={{ backgroundColor: "social.instagramHover" }}
                type="submit"
              >
                <Icon mr={1} as={BsFillSendFill} />
                Send Message
              </Button>
            </FormControl>
          </Stack>
        </CardBody>
      </Card>
    </RevealWrapper>
    </>
  );
};

export default ContactForm;