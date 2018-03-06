import PropTypes from "prop-types";
import React from "react";
import { injectIntl, intlShape, FormattedMessage } from "react-intl";
import YoastSelect, { SelectArea } from "../../general/YoastSelect";
import CollapsibleHeader from "../../CollapsibleHeader";
import { Paper, WhitePage } from "../../PaperStyles";
import { LargeButton, makeButtonFullWidth } from "../../Button";
import { COMPOSER_TOKEN_FEATURE, hasAccessToFeature } from "../../../functions/features";

const WideLargeButton = makeButtonFullWidth( LargeButton );

const SITE_TYPE_OPTIONS = {
	wordpress: {
		value: "wordpress",
		label: "WordPress",
	},
	typo3: {
		value: "typo3",
		label: "TYPO3",
	},
};

class PlatformSelect extends React.Component {
	/**
	 * Initializes the class with the specified props.
	 *
	 * @param {Object} props The props to be passed to the class that was extended from.
	 *
	 * @returns {void}
	 */
	constructor( props ) {
		super( props );

		let value = props.siteType;
		let label = SITE_TYPE_OPTIONS[ value ].label;

		this.state = {
			selectedOption: {
				value,
				label,
			},
		};
	}

	handleChange( selectedOption ) {
		this.setState( {
			selectedOption,
		} );
	}

	render() {
		if( ! hasAccessToFeature( COMPOSER_TOKEN_FEATURE ) ) {
			return null;
		}
		return(
			<Paper>
				<CollapsibleHeader title={ this.props.title }>
					<WhitePage>
						<label htmlFor="selectPlatform">
							<FormattedMessage
								id="sites.details.changePlatformType"
								defaultMessage="Please select the platform that your website is running on:"
							/>
						</label>
						<SelectArea>
							<YoastSelect
								value={ this.state.selectedOption.value }
								onChange={ this.handleChange.bind( this ) }
								searchable={ false }
								clearable={ false }
								inputProps={
									{ id: "selectPlatform" }
								}
								options={ Object.values( SITE_TYPE_OPTIONS ) }
							/>
							<WideLargeButton
								onClick={ () => {
									this.props.onConfirm( this.props.siteId, this.state.selectedOption.value );
								} }
							>
								<FormattedMessage
									id="sites.details.platformConfirm"
									defaultMessage="confirm"
								/>
							</WideLargeButton>
						</SelectArea>
					</WhitePage>
				</CollapsibleHeader>
			</Paper>
		);
	}
}

PlatformSelect.propTypes = {
	siteId: PropTypes.string.isRequired,
	siteType: PropTypes.string.isRequired,
	title: PropTypes.string.isRequired,
	onConfirm: PropTypes.func,
	intl: intlShape.isRequired,
};

export default injectIntl( PlatformSelect );
