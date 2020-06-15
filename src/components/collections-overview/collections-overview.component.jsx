import React from 'react';
import {connect} from 'react-redux';
import {createStructuredSelector} from 'reselect';
import {selectShopCollections} from '../../redux/shop/shop.selector';
import CollectionsPreview from '../preview-collections/collections-preview.component'
import './collections-overview.styles.scss';

const CollectionsOverview = ({collections}) => (
    <div className='collections-overview'>
        {
			collections.map(({id, ...otherCollectionProps}) => (
				<CollectionsPreview key={id} {...otherCollectionProps}/>
			))
		}
    </div>
)
const mapStateToProps = createStructuredSelector({
	collections: selectShopCollections
})

export default connect(mapStateToProps)(CollectionsOverview);