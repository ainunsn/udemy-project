import React from 'react';
import CollectionsItem from '../collections-item/collections-item.component';
import './collections-preview.styles.scss';

const CollectionsPreview = ({title, items}) => {
	return(
		<div className='collection-preview'>
			<h1 className='title'>{title.toUpperCase()}</h1>
			<div className='preview'>
				{
					items.filter((item, idx) => idx < 4)
					.map(({id, ...otherItemProps}) => (
						<CollectionsItem key={id} {...otherItemProps}/>
					))
				}
			</div>
		</div>
	)
}

export default CollectionsPreview;