
import { registerPaymentMethod } from '@woocommerce/blocks-registry';
import { decodeEntities } from '@wordpress/html-entities';
import { getSetting } from '@woocommerce/settings';

const settings = getSetting( 'conekta_data', {} );
const labelConekta = decodeEntities( settings.title );
/**
 * Content component
 */

const ContentConekta = () => {
	return decodeEntities( settings.description) ;
};


const LabelConekta = ( props ) => {
	const { PaymentMethodLabel } = props.components;

	const Icons = () => (
		<div style={{ display: 'flex',  alignItems: 'center' }}>
			<>
				<img src={`https://assets.conekta.com/checkout/img/logos/visa.svg`} alt="Visa" style={{ marginLeft: '8px', width: '32px', height: 'auto' }} />
				<img src={`https://assets.conekta.com/checkout/img/logos/amex.svg`} alt="amex" style={{ marginLeft: '8px', width: '32px', height: 'auto' }} />
				<img src={`https://assets.conekta.com/checkout/img/logos/master-card.svg`} alt="master" style={{ marginLeft: '8px', width: '32px', height: 'auto' }} />
			</>
		</div>
	);

	return (
			<div style={{ display: 'flex', width: '99%', justifyContent: 'space-between',alignItems: 'center' }}>
					<PaymentMethodLabel text={ labelConekta } />
					<Icons />
			</div>
	);
};


/**
 * conekta payment method config object.
 */
const conekta = {
	name:  settings.name,
	label: <LabelConekta />,
	content: <ContentConekta />,
	edit: <ContentConekta />,
	canMakePayment: () => {
		return  settings.is_enabled || false;
	},
	ariaLabel: labelConekta,
	supports: {},
	icons: [],
};


registerPaymentMethod( conekta );

