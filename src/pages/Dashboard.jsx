import { Sidebar } from "../components/Dashboard/Aside/Sidebar";
import { ContentWrapper } from "../components/Dashboard/Main/ContentWrapper";
import "../css/Dashboard.css";

export const Dashboard = () => {
	return (
		<div id="wrapper">
			<Sidebar />
			<ContentWrapper />
		</div>
	);
};
