import { render, screen, fireEvent, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { Children } from "react";
import DummyGrid from "../features/counter/DummyGrid";

const columnNamed = (cellName) => {
    return `.ag-cell[col-id="${cellName}"]`;
};

const rowWithId = (rowId) => {
    return `.ag-row[row-id="${rowId}"]`;
};

describe("DummyGrid tests", () => {
    test("renders all the headers", async () => {
        const onClick = jest.fn();
        render(<DummyGrid onClick={onClick} />);
        expect(screen.getByText("Make")).toBeInTheDocument();
        expect(screen.getByText("Model")).toBeInTheDocument();
        expect(screen.getByText("Price")).toBeInTheDocument();
    });

    test("calls the button's onClick event", async () => {
        const onClick = jest.fn();
        render(<DummyGrid onClick={onClick} />);
        const button = screen.getByTestId("myButton");
        fireEvent.click(button);

        expect(onClick).toHaveBeenCalledTimes(1);
        expect(screen.getByText("Land Rover")).toBeInTheDocument();
    });

    test("tests the inline cell editing", async () => {
        const onClick = jest.fn();
        render(<DummyGrid onClick={onClick} />);

        const row = screen
            .getAllByRole("row")
            .filter((item) => item.getAttribute("row-id") === "1");
        const cell = row.filter(
            (item) => item.getAttribute("col-id") === "make"
        );
        // const cell = screen.getByText("Mondeo");
        // fireEvent.keyDown(cell, { key: "F2", code: "F2", charCode: 113 })
        fireEvent.doubleClick(cell);

        // userEvent.type(cell, "GT{enter}");
        // fireEvent.keyDown(cell, { key: "enter", code: "enter", charCode: 13 });
        // await waitFor(() => {
        //     expect(screen.getByText("GT")).toBeInTheDocument();
        // });
    });
});
