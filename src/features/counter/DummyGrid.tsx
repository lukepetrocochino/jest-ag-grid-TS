import React, { useState } from "react";
import { AgGridReact } from "ag-grid-react/lib/agGridReact";
import { ColDef, ValueSetterParams } from "ag-grid-community";

import GridButton from "./GridButton";
import Car from "./car";
import { Button } from "react-bootstrap";

import "ag-grid-community/dist/styles/ag-grid.css";
import "ag-grid-community/dist/styles/ag-theme-alpine-dark.css";

const initialState: Array<Car> = [
    { id: "0", make: "Toyota", modelName: "Celica", price: 35000 },
    { id: "1", make: "Ford", modelName: "Mondeo", price: 32000 },
    { id: "2", make: "Porsche", modelName: "Boxter", price: 70000 },
];

const fieldName = (name: keyof Car) => name;

function getRowNodeId(data: Car) {
    return data.id;
}

function onGridReady(params: object) {
    // console.log(params);
}

function onRowDataChanged(data: object) {
    // console.log(data);
}

const columnDefs: ColDef[] = [
    {
        headerName: "Make",
        field: fieldName("make"),
        editable: true,
    },
    {
        headerName: "Model",
        field: fieldName("modelName"),
        editable: true,
        // valueSetter: (params: ValueSetterParams) => {
        //     onRowDataChanged(params);
        // },
    },
    {
        headerName: "Price",
        field: fieldName("price"),
        editable: true,
    },
    {
        field: "Button",
        cellRenderer: "gridButton",
        cellRendererParams: {
            onClicked: function (
                id: string,
                make: string,
                modelName: string,
                price: number
            ) {
                // console.log(id, make, modelName, price);
            },
        },
    },
];

const gridOptions = {
    immutableData: true,
    suppressScrollOnNewData: true,
    columnDefs: columnDefs,
    frameworkComponents: {
        gridButton: GridButton,
    },
};

interface Props {
    onClick: () => void;
}
const DummyGrid: React.FC<Props> = ({ onClick }) => {
    const [rowData, setRowData] = useState(initialState);

    function addData() {
        console.log("test");
        const newRow: Car = {
            id: "3",
            make: "Land Rover",
            modelName: "Defender",
            price: 40000,
        };
        // console.log(rowData);
        setRowData((oldData) => [...oldData, newRow]);
        onClick();
    }

    return (
        <div>
            <Button data-testid="myButton" onClick={addData}>
                Add New Value
            </Button>
            <div
                className="ag-theme-alpine-dark"
                style={{ height: "300px", width: "802px" }}
            >
                <AgGridReact
                    columnDefs={columnDefs}
                    defaultColDef={{
                        sortable: true,
                    }}
                    rowData={rowData}
                    gridOptions={gridOptions}
                    onGridReady={onGridReady}
                    onRowDataChanged={onRowDataChanged}
                    getRowNodeId={getRowNodeId}
                    suppressColumnVirtualisation={true}
                ></AgGridReact>
            </div>
        </div>
    );
};

export default DummyGrid;
