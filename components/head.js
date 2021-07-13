import NextHead from "next/head";
import { string } from "prop-types";

// import Colors from "../constants/colors";

const defaultDescription = "";
const defaultKeywords = "";
const defaultOGURL = "";
const defaultOGImage = "/assets/logo-square.png";
const defaultTitle = "Hospisource";

const Head = (props) => (
	<NextHead>
		<meta charSet="UTF-8" />
		<title>
			{props.title !== undefined
				? `${props.title} | Hospisource`
				: defaultTitle}
		</title>
		<meta
			name="viewport"
			content="width=device-width, initial-scale=1 user-scalable=no maximum-scale=1.0"
		/>
		<meta
			name="description"
			content={props.description || defaultDescription}
		/>
		<meta name="keywords" content={props.keywords || defaultKeywords} />
		<link
			rel="icon"
			type="image/png"
			sizes="16x16"
			href="/assets/favicon.jpg"
		/>
		<link
			rel="icon"
			type="image"
			sizes="32x32"
			href="/assets/favicon.jpg"
		/>
		<link rel="shortcut icon" href="/assets/favicon.jpg" />
		<link
			rel="apple-touch-icon"
			sizes="180x180"
			href="/assets/favicon.jpg"
		/>
		<link rel="icon" href="/assets/favicon.jpg" color="#000000" />
		<meta property="og:url" content={props.url || defaultOGURL} />
		<meta
			property="og:title"
			content={
				props.title !== undefined
					? `${props.title} | Hospisource`
					: defaultTitle
			}
		/>
		<meta
			property="og:description"
			content={props.description || defaultDescription}
		/>
		<meta name="twitter:site" content={props.url || defaultOGURL} />
		<meta name="twitter:card" content="summary_large_image" />
		<meta name="twitter:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image" content={props.ogImage || defaultOGImage} />
		<meta property="og:image:width" content="256" />
		<meta property="og:image:height" content="256" />

		{/* <meta name="theme-color" content={Colors.primaryColor} /> */}

		<link rel="preconnect" href="https://fonts.googleapis.com" />
		<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
		<link
			href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
			rel="stylesheet"
		/>
	</NextHead>
);

Head.propTypes = {
	title: string,
	description: string,
	keywords: string,
	url: string,
	ogImage: string,
};

export default Head;
