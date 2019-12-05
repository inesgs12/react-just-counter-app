// jest-dom adds custom jest matchers for asserting on DOM nodes.
// allows you to do things like:
// expect(element).toHaveTextContent(/react/i)
// learn more: https://github.com/testing-library/jest-dom
import "@testing-library/jest-dom/extend-expect";

// You also need to create a setupTests.js file within your src folder that tells Jest and Enzyme what Adapters you will be making use of. create-react-app has been configured to run this file automatically before any of our tests, so that Enzyme is set up correctly.

import { configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";

configure({ adapter: new Adapter() });
