import { defineMessages } from "react-intl";

const messages = defineMessages({
  required: {
    defaultMessage: "This field is required.",
    description:
      "Error message that this field must filled for the form to be valid.",
  },
  telephone: {
    defaultMessage: "This field must follow the pattern +123243234.",
    description:
      "Error message that the field must contain a phone number validated by the specified pattern.",
  },
  futureDate: {
    defaultMessage: "This field must use future dates only.",
    description: "Error message that the provided date must be in the future.",
  },
  mustBeGreater: {
    defaultMessage: "Value must be greater than {value}",
    description:
      "Error message that the provided value must be greater than some referenced minimum value.",
  },
});

export default messages;
