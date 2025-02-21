import { Card, Flex, Text } from "@radix-ui/themes";
import { CircleCheck } from "lucide-react";

const Notification = () => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-20">
      <Flex direction="column" gap="3" maxWidth="350px">
        <Card variant="surface">
          <Text as="div" size="2" weight="bold">
            <CircleCheck color="green" /> Game collected
          </Text>
          <Text as="div" color="gray" size="2">
            Grand Theft Auto V has been added to your collection
          </Text>
        </Card>
      </Flex>
    </div>
  );
};

export default Notification;
