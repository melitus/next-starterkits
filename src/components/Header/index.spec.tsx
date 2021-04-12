import * as React from "react";

import { render } from "@Test/utils";
import { Heading } from "@Components";

describe("Components", () => {
    describe("Heading", () => {
        it("should render given text", () => {
            const { getAllByText } = render(<Heading text="Render Me!" />);

            expect(getAllByText("Render Me!").length).toEqual(2);
        });

        it("should match snapshot", () => {
            const { container } = render(<Heading text="Test" />);

            expect(container).toMatchSnapshot();
        });
    });
});
