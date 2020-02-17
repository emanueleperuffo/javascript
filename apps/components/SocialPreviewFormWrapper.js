import React from "react";
import { SocialMetadataPreviewForm } from "@yoast/social-metadata-previews";
import ExamplesContainer from "./ExamplesContainer";

const replacementVariables = [
	{
		name: "title",
		label: "title",
		value: "Title",
		description: "This is the title of your post",
	},
	{
		name: "post_type",
		label: "post type",
		value: "Gallery",
		description: "This is the post type of your post",
	},
	{
		name: "sep",
		label: "sep",
		value: " - ",
		description: "A separator that clarifies your search result snippet",
	},
	{
		name: "term404",
		label: "Error 404 slug",
		value: "Error 404 slug",
		description: "The slug which caused the error 404",
	},
];

const recommendedReplacementVariables = [
	"title",
	"post_type",
];

/**
 * @returns {Void} renders a react Component.
 */
const selectFileClick = () => {
	// eslint-disable-next-line no-alert
	alert( "YOU CLICKED MY BUTTON!" );
};

/**
 * @returns {React.Component} renders a react Component.
 */
const SocialPreviewFormWrapper = () =>
	<ExamplesContainer>
		<h1>Regular Facebook</h1>
		<SocialMetadataPreviewForm
			socialMediumName="Facebook"
			replacementVariables={ replacementVariables }
			recommendedReplacementVariables={ recommendedReplacementVariables }
			description=""
			title="%%title%%%%page%%%%sep%%%%sitename%%"
			selectFileClick={ selectFileClick }
			onDescriptionChange={ () => {} }
			onTitleChange={ () => {} }
			imageWarnings={ [] }
		/>
		<h1>Regular Twitter</h1>
		<SocialMetadataPreviewForm
			socialMediumName="Twitter"
			replacementVariables={ replacementVariables }
			recommendedReplacementVariables={ recommendedReplacementVariables }
			description=""
			title="%%title%%%%page%%%%sep%%%%sitename%%"
			selectFileClick={ selectFileClick }
			onDescriptionChange={ () => {} }
			onTitleChange={ () => {} }
			imageWarnings={ [] }
		/>
		<h1>Twitter with warnings</h1>
		<SocialMetadataPreviewForm
			socialMediumName="Twitter"
			replacementVariables={ replacementVariables }
			recommendedReplacementVariables={ recommendedReplacementVariables }
			description=""
			title="%%title%%%%page%%%%sep%%%%sitename%%"
			selectFileClick={ selectFileClick }
			onDescriptionChange={ () => {} }
			onTitleChange={ () => {} }
			imageWarnings={ [
				"You destroyed the world!",
				"Also, that is not a great image.",
				"Something else is wrong too...",
			] }
		/>
	</ExamplesContainer>
;

export default SocialPreviewFormWrapper;