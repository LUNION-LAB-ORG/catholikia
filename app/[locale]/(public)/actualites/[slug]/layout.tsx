import React, {Suspense} from 'react';

function ActualiteDetailsLayout(props: { children: React.ReactNode }) {
	return (
		<>
			<Suspense>
				{props.children}
			</Suspense>
		</>
	);
}

export default ActualiteDetailsLayout;