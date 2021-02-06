import * as React from 'react';
import conceal from '@/utils/conceal'

export default ({children, ...props}) => {
	if (typeof children === 'string') {
		return (
			<div
				{...props}
				dangerouslySetInnerHTML={{__html: conceal(children)}}
			/>
		);
	}

	return (
		<div
			{...props}
		>{children}</div>
	);
};
