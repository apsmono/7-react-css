import React from "react";
import Header from "./Header";
import Footer from "./Footer";

const styles = {
	body: {
		minHeight: window.innerHeight-400,
	}
}

function PageHeader(props) {
	const { children } = props;

	return (
		<>
			<Header />
				<div style={styles.body}>
					{children}
				</div>
			<Footer />
		</>
	);
}

export default PageHeader;
