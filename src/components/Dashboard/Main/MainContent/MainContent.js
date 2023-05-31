import { TopBar } from "./TopBar/TopBar";
import { ContentRowTop } from "./ContentRowTop/ContentRowTop";

export const MainContent = () => {
	return (
		<div id="content">
			{/*<!-- Topbar -->*/}
			<TopBar />
			{/*<!-- End of Topbar -->*/}

			{/*<!-- Content Row Top -->*/}
			<ContentRowTop />
			{/*<!--End Content Row Top-->*/}
		</div>
	);
};
