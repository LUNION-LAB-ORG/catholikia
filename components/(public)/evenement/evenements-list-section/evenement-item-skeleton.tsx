import React from 'react';

function EvenementItemSkeleton() {
	return (
		<div className="bg-white flex flex-col justify-between space-y-2 h-full">
			<a className="group block h-full" href="#">
				<article className="grid gap-4 items-stretch h-full transition transform duration-200 grid-cols-1">
					<div className="relative overflow-hidden rounded-xl aspect-video w-full bg-gray-300 animate-pulse"></div>
					<div className="mt-2">
						<h4 className="bg-gray-300 animate-pulse h-6 rounded mb-2.5"></h4>
						<p className="bg-gray-300 animate-pulse h-12 rounded"></p>
					</div>
				</article>
			</a>
			<div>
				<a
					role="button"
					className="z-0 group relative inline-flex items-center justify-center box-border appearance-none select-none whitespace-nowrap subpixel-antialiased overflow-hidden tap-highlight-transparent transform-gpu cursor-pointer outline-solid outline-transparent px-4 min-w-20 h-10 text-small gap-2 bg-gray-300 animate-pulse rounded-full"
				>
				</a>
			</div>
		</div>
	);
}

export default EvenementItemSkeleton;