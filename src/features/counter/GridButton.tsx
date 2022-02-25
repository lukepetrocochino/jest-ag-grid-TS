import * as React from "react";
import { Button } from "react-bootstrap";

interface Props {
    data: { id: string; make: string; modelName: string; price: number };
    onClicked: (
        id: string,
        make: string,
        modelName: string,
        price: number
    ) => void;
}

interface State {}

class GridButton extends React.Component<Props, State> {
    constructor(props: Props) {
        super(props);
        this.gridBtnClicked = this.gridBtnClicked.bind(this);
    }

    gridBtnClicked() {
        this.props.onClicked(
            this.props.data.id,
            this.props.data.make,
            this.props.data.modelName,
            this.props.data.price
        );
    }

    render() {
        return <Button onClick={this.gridBtnClicked}>Grid Button</Button>;
    }
}

export default GridButton;
