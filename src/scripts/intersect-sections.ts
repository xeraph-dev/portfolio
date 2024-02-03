const observer = new IntersectionObserver(
	entries => {
		const entry = entries.find(entry => entry.isIntersecting)
		if (!entry) return
		const id = entry.target.id
		const url = new URL(location.href)
		url.hash = id
		history.replaceState({}, '', url)
		document.querySelectorAll(`header-link:has(> a[href^="#"])`).forEach(link => {
			// @ts-ignore
			link.update?.(`#${id}`)
		})
	},
	{
		threshold: 0.5,
	},
)
document.querySelectorAll('section').forEach(section => {
	observer.observe(section)
})
