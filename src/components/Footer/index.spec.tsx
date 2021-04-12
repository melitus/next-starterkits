import * as React from "react";

import { render } from "@Test/utils";
import { Footer } from "@Components";

describe("Footer", () => {
    it("should match snapshot", () => {
        const { container } = render(<Footer>Test</Footer>);

        expect(container).toMatchSnapshot();
    });
});
