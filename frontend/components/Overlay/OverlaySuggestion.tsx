import {
  Button,
  FormControl,
  Input,
  Link,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Text,
  Textarea,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useState } from "react";
import { FiCheckCircle } from "react-icons/fi";

enum FormSteps {
  "Initial" = "Initial",
  "Success" = "Success",
  "Error" = "Error",
}

interface OverlaySuggestionProps {
  onClose: () => void;
  isOpen: boolean;
}

export default function OverlaySuggestion({
  onClose,
  isOpen,
}: OverlaySuggestionProps) {
  const [formStep, setFormStep] = useState(FormSteps.Initial);
  const [name, setName] = useState("");
  const [link, setLink] = useState("");
  const [description, setDescription] = useState("");
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);

  const handleProductNameChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setName(event.currentTarget.value),
    [setName]
  );
  const handleLinkChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setLink(event.currentTarget.value),
    [setLink]
  );
  const handleDescriptionChange = useCallback(
    (event: React.FormEvent<HTMLTextAreaElement>) =>
      setDescription(event.currentTarget.value),
    [setDescription]
  );
  const handleEmailChange = useCallback(
    (event: React.FormEvent<HTMLInputElement>) =>
      setEmail(event.currentTarget.value),
    [setEmail]
  );

  const handleSubmit = useCallback(
    async (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();
      setLoading(true);
      try {
        const response = await fetch("/api/submission", {
          method: "post",
          body: JSON.stringify({ name, link, description, email }),
        });

        const res = await response.json();
        if (res.error) {
          throw Error;
        }
        setLoading(false);
        setFormStep(FormSteps.Success);
      } catch (error) {
        setLoading(false);
        setFormStep(FormSteps.Error);
      }
    },
    [name, link, description, email]
  );

  if (formStep === FormSteps.Success) {
    return (
      <Modal
        isOpen={isOpen}
        onClose={onClose}
        onCloseComplete={() => setFormStep(FormSteps.Initial)}
      >
        <ModalOverlay />
        <ModalContent bg="dark_grey" maxW="sm" p="1rem">
          <ModalCloseButton />
          <ModalBody>
            <VStack>
              <FiCheckCircle size="40" />
              <Text>Thank you for your submission.</Text>
              <Text>We will carefully review every entry.</Text>
            </VStack>
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  }

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent bg="dark_grey" maxW="sm" p="1rem">
        <ModalHeader>Recommend a product</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          <form id="new-form" onSubmit={handleSubmit}>
            <FormControl>
              <Text size="xs" fontSize="xs" opacity="0.6">
                You can also tag{" "}
                <Link
                  href="https://twitter.com/poweredby_ai"
                  target="_blank"
                  rel="noopener"
                  color="teal.500"
                >
                  @poweredby_ai
                </Link>{" "}
                on Twitter to recommend a product.
              </Text>
              <Input
                mt="1rem"
                placeholder="Product name"
                _placeholder={{ fontSize: "xs" }}
                onChange={handleProductNameChange}
              />
              <Input
                mt="1rem"
                placeholder="Website"
                _placeholder={{ fontSize: "xs" }}
                onChange={handleLinkChange}
              />
              <Textarea
                mt="1rem"
                placeholder="Description"
                resize="none"
                _placeholder={{ fontSize: "xs" }}
                onChange={handleDescriptionChange}
                size="lg"
              />
              <Input
                mt="1rem"
                placeholder="Email(optional) so we can thank you!"
                _placeholder={{ fontSize: "xs" }}
                onChange={handleEmailChange}
              />
            </FormControl>
          </form>
        </ModalBody>
        <ModalFooter>
          <Button
            bg="white"
            color={"black"}
            px="3rem"
            w="full"
            type="submit"
            form="new-form"
            disabled={loading}
            _hover={{
              transform: "translateY(-2px)",
              boxShadow: "lg",
            }}
          >
            Submit
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  );
}
