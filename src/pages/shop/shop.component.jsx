import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selector';
import CollectionsPreview from '../../components/preview-collections/collections-preview.component';

const ShopPage = ({collections}) =>  (
	<div className='shop-page'>
		{
			collections.map(({id, ...otherCollectionProps}) => (
				<CollectionsPreview key={id} {...otherCollectionProps}/>
			))
		}
	</div>
);

const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
})

export default connect(mapStateToProps)(ShopPage);