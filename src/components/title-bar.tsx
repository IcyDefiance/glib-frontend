import * as React from "react";
import { fromEvent, Subject } from "rxjs";
import { switchMap, takeUntil } from "rxjs/operators";
import { Button } from "./material/button";
import styled from "styled-components";

const TitleWrap = styled.div`
	-webkit-app-region: drag;

	* {
		-webkit-app-region: no-drag;
	}
`;

export const TitleBar: React.FC = () => {
	return (
		<TitleWrap className="d-flex justify-content-end">
			<Button type="button" dense tabIndex={0} onClick={() => window.close()}>
				X
			</Button>
		</TitleWrap>
	);
};
