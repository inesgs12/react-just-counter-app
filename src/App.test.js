import React from "react";
import App from "./App";
import { shallow } from "enzyme";

// A describe() function groups related tests together inside one test suite. It takes a name parameter, which should describe the component you’re testing, and a callback function where individual tests are defined with it.

//You might see individual tests with test in some projects. To be sure, it and test are one and the same thing. it is only an alias for test.

// ------- SHALLOW RENDERING TESTING --------------------------------
//-------------------------------------------------------------------
// We’re taking advantage of Enzyme’s shallow rendering to test our app’s initial state. A shallow render is a simulated render of a component tree that does not require a DOM. It renders only one level of components deep, and enables the inspection of the component’s contents as well as the simulation of user interaction.

describe("App component", () => {
  //// In the snippet below, the shallow render of our App component is stored in the wrapper variable. We then grab the text inside the p tag within the component’s output and check if the text is the same was what we passed into the toEqual matcher function.
  it("starts with a count of 0", () => {
    const wrapper = shallow(<App />);
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 0");
  });

  //The simulate() function on the button variable can simulate a number of DOM events on an element. Here we are simulating the click event on the button. We’ve also set up an expectation that the count should be equal to now.

  it("increments count by 1 when the increment button is clicked", () => {
    const wrapper = shallow(<App />);
    const incrementBtn = wrapper.find("button.increment");
    incrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: 1");
  });

  it("decrements count by 1 when the decrement button is clicked", () => {
    const wrapper = shallow(<App />);
    const decrementBtn = wrapper.find("button.decrement");
    decrementBtn.simulate("click");
    const text = wrapper.find("p").text();
    expect(text).toEqual("Count: -1");
  });
});
