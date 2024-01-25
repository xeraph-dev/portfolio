if (
	localStorage.getItem('theme') === 'dark' ||
	(!('theme' in localStorage) && matchMedia(`(prefers-color-scheme: ${'dark'})`).matches)
) {
	document.documentElement.classList.add('dark')
	localStorage.setItem('theme', 'dark')
} else {
	document.documentElement.classList.remove('dark')
	localStorage.setItem('theme', 'light')
}

window.addEventListener('storage', ev => {
	if (ev.key !== 'theme') return
	if (ev.newValue === 'dark') document.documentElement.classList.add('dark')
	else document.documentElement.classList.remove('dark')
})
