import React from "react";
import styled from "styled-components";

const SiteSubscriptionIcons = styled.img`
	opacity: ${ props => props.isActive ? 1.0 : 0.2 };
	width: 40px;
	height: 40px;
	float: left;
	margin: 0 5px;
`;

SiteSubscriptionIcons.propTypes = {
	isActive: React.PropTypes.bool.isRequired,
};

/**
 * Renders a subscriptions component.
 *
 * @param {Object} props The props to use.
 * @returns {ReactElement} The rendered Subscriptions component.
 */
export default function SiteSubscriptions( props ) {
	return (
		<span>
			{
				props.plugins.map( function( plugin ) {
					let isActive = props.activeSubscriptions.map( ( subscription ) => {
						return subscription.productId;
					} ).includes( plugin.id );

					return (
						<SiteSubscriptionIcons
							key={ plugin.name }
							src={ plugin.icon }
							isActive={ isActive }
							alt={ isActive ? plugin.name + " is active" : plugin.name + " is inactive" }
						/>
					);
				} )
			}
		</span>
	);
}

SiteSubscriptions.propTypes = {
	activeSubscriptions: React.PropTypes.arrayOf( React.PropTypes.object ),
	plugins: React.PropTypes.arrayOf( React.PropTypes.object ),
};

SiteSubscriptions.defaultProps = {
	activeSubscriptions: [],
	plugins: [],
};
