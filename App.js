/**
 * <div id="parent">
 *     <div id="child">
 *            <h1> I'm h1 tag</h1>
 *            <h1> I'm h2 tag</h1>
 *     </div>
 *
 *
 * </div>
 *
 *ReactElement(Object)==>HTML(bowser Understands)
 *
 */
const parent = React.createElement("div", { id: "parent" }, [
  React.createElement("div", { id: "child1" }, [
    React.createElement("h1", {}, "I'm an h1 tag."),
    React.createElement("h2", {}, "I'm an h2 tag."),
  ]),
  React.createElement("div", { id: "child2" }, [
    React.createElement("h1", {}, "I'm an h1 tag."),
    React.createElement("h2", {}, "I'm an h2 tag."),
  ]),
]);


//JSX

// const heading = React.createElement(
//   "h1",
//   { id: "heading", xyz: "abc" },
//   "Hello World from React"
// );

// console.log(heading); // This will return an object to you.
console.log(parent);

const root = ReactDOM.createRoot(document.getElementById("root"));

// root.render(heading);
root.render(parent);
