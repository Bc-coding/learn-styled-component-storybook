import "../src/index.css";

// Registers the msw addon
import { initialize, mswDecorator } from "msw-storybook-addon";

// Initialize MSW
initialize();

// Provide the MSW addon decorator globally
export const decorators = [mswDecorator];

/*
parameters are typically used to control the behavior of Storybook's features and addons. In our case, we're going to use them to configure how the actions (mocked callbacks) are handled.
actions allows us to create callbacks that appear in the actions panel of the Storybook UI when clicked. So when we build a pin button, we’ll be able to determine if a button click is successful in the UI.
Once we’ve done this, restarting the Storybook server should yield test cases for the three Task states:
*/

//👇 Configures Storybook to log the actions( onArchiveTask and onPinTask ) in the UI.
export const parameters = {
  actions: { argTypesRegex: "^on[A-Z].*" },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
};
