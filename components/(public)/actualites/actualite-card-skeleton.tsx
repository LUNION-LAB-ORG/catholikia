import React from 'react';

function ActualiteCardSkeleton() {
	return (
		<div className="bg-white flex flex-col justify-between space-y-2 h-full">
			<a className="group block h-full">
				<article className="grid gap-4 items-stretch h-full transition transform duration-200 grid-cols-1">
					<div className="relative overflow-hidden rounded-xl min-h-[210px] bg-gray-300 animate-pulse"></div>
					<div className="flex flex-col space-y-2">
						<div className="flex items-center justify-between">
							<span
								className="inline-flex items-center justify-center rounded-md border px-2 py-0.5 text-xs font-medium w-fit whitespace-nowrap shrink-0 bg-gray-300 animate-pulse"> </span>
							<time className="text-gray-400 text-sm font-medium flex items-center">
								<span className="animate-pulse bg-gray-300 rounded-full h-4 w-4 mr-1"></span>
								<span className="animate-pulse bg-gray-300 rounded h-4 w-24"></span>
							</time>
						</div>
						<h4
							className="group-hover:underline text-sm text-gray-400 font-semibold animate-pulse bg-gray-300 rounded h-6 w-3/4"></h4>
					</div>
				</article>
			</a>
			<div className="flex justify-end">
				<a role="button"
				   className="z-0 group relative inline-flex items-center justify-center px-4 min-w-20 h-10 text-small gap-2 rounded-md bg-gray-300 animate-pulse"></a>
			</div>
		</div>
	);
}

export default ActualiteCardSkeleton;