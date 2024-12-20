/* eslint-disable max-len */
// --------------------------------------------
//
// Card
// -> Stories
//
// --------------------------------------------

// --------------------------------------------
// Imports
// --------------------------------------------

import { Meta } from "@storybook/react";
import { Button } from "../Button";
import { Card } from "../Card";
import { Text } from "../Text";

// --------------------------------------------
// Stories
// --------------------------------------------

// ----- Setup ----- //

const meta: Meta = { title: "Components/Card" };

export default meta;

// ----- Individual Stories ----- //

export function Default() {
  return (
    <div style={{ maxWidth: "350px" }}>
      <Card image="https://placehold.co/1280x720/0077cc/white?text=IMAGE&font=oswald">
        <Card.Body>
          <Text tag="h3" appearance="heading-7">
            Title
          </Text>
          <Text appearance="body-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card.Body>
        <Card.Footer>
          <Button tier="tertiary" onClick={() => null}>
            Read More
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export function Clickable() {
  return (
    <div style={{ maxWidth: "350px" }}>
      <Card>
        <Card.Body>
          <Text tag="h3" appearance="heading-7">
            Title
          </Text>
          <Text appearance="body-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card.Body>
        <Card.Footer>
          <Button tier="tertiary" stretch onClick={() => null}>
            Read More
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export function ColoredHeader() {
  return (
    <div style={{ maxWidth: "350px" }}>
      <Card>
        <Card.Header headerBackgroundColor="blue">
          <Text tag="h3" appearance="heading-7">
            Title
          </Text>
        </Card.Header>
        <Card.Body>
          <Text appearance="body-2">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </Text>
        </Card.Body>
        <Card.Footer>
          <Button tier="tertiary" onClick={() => null}>
            Read More
          </Button>
        </Card.Footer>
      </Card>
    </div>
  );
}
