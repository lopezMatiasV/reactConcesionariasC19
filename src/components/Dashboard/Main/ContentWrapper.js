import { MainContent } from "./MainContent/MainContent";
import { Footer } from "./Footer";

export const ContentWrapper = () => {
	return (
		<div id="content-wrapper" className="d-flex flex-column">
			{/*<!-- Main Content -->*/}
			<MainContent />
			{/*<!-- End of MainContent -->*/}
			{/*<!-- Footer -->*/}
			<Footer />
			{/*<!-- End of Footer -->*/}
		</div>
	);
};
