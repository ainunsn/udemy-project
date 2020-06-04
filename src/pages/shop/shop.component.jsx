import React from 'react';
import SHOP_DATA from './shop.data.js'
import CollectionsPreview from '../../components/preview-collections/collections-preview.component';

class ShopPage extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			collections: SHOP_DATA
		}
	}
	render() {
		const {collections} = this.state;
		return (
			<div className='shop-page'>
				{
					collections.map(({id, ...otherCollectionProps}) => (
						<CollectionsPreview key={id} {...otherCollectionProps}/>
					))
				}
			</div>
		);
	}
}

export default ShopPage;