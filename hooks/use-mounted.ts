import * as React from "react"

export function useMounted() {
	const [mounted, setMounted] = React.useState(false)

	React.useEffect(() => {
		setTimeout(() => setMounted(true), 3000)
	}, [])

	return mounted
}
