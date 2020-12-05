import React from "react";
import {
	PageContainer,
	PageContent,
	PageItems,
	PageH1,
	PageP,
	PageBtn,
} from "./NotFoundElements";
import { Link } from "react-router-dom";

const PageNotFound = () => {
	return (
		<PageContainer>
			<PageContent>
				<PageItems>
					<PageH1>Oops...404 not found</PageH1>
					<PageP>Sorry, an error has occured. Request page not found!</PageP>
					<PageBtn>
						<Link to="/">Take me home</Link>
					</PageBtn>
				</PageItems>
			</PageContent>
		</PageContainer>
	);
};

export default PageNotFound;
