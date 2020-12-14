import React from "react";
import ReactDOM from "react-dom";
import Table from "./Table";
import TableBody from "./TableBody";
import TableCell from "./TableCell";
import TableHead from "./TableHead";
import TableHeadCell from "./TableHeadCell";
import TableRow from "./TableRow";

describe("Table", () => {
	it("renders without crashing", () => {
		const div = document.createElement("div");
		ReactDOM.render(
			<Table>
				<TableHead>
					<TableRow>
						<TableHeadCell />
					</TableRow>
				</TableHead>
				<TableBody>
					<TableRow>
						<TableCell />
					</TableRow>
				</TableBody>
			</Table>,
			div
		);
		ReactDOM.unmountComponentAtNode(div);
	});
});
