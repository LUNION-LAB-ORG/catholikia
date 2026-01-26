'use client'

type ImageLoaderOptions = {
	src: string
	width: number
	quality?: number
}

export default function cloudFrontImageLoader({src, width, quality}: ImageLoaderOptions) {
	const url = new URL(`https://dvsxt5681pvqm.cloudfront.net/catholikia${src}`)
	url.searchParams.set('format', 'auto')
	url.searchParams.set('width', width.toString())
	url.searchParams.set('quality', (quality || 75).toString())
	return url.href
}