import "./App.css";
import DummyGrid from "./features/counter/DummyGrid";

function App() {
    // let a: any; // with "@typescript-eslint/no-explicit-any": ["error"]" in .eslintrc this will fail as any should throw an error
    // --- This is explicit any as it is explicitly declared as any

    // let a // this is implciit, should throw error because of "noImplicitAny": true" in tsconfig.json
    // a = 323_
    // a = "banana" _

    return (
        <div className="App">
            <h1>AG-Grid Typescript</h1>
            <DummyGrid onClick={() => null} />
        </div>
    );
}

export default App;

// read https://www.codementor.io/@rajjeet/add-jest-to-your-typescript-project-with-4-easy-steps-1do5lhfjb1
