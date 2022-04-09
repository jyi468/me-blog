<script context="module">
	// This module runs before the page loads
	export const load = async ({ fetch }) => {
		const response = await fetch('/pages.json');
		if (response.ok) {
			const pages = await response.json();
			return {
				props: { pages }
			};
		}
	};
</script>

<script>
	import Nav from '$lib/nav.svelte';
	import '../app.css';
	export let pages;
</script>

<Nav {pages}/>

<main class="container max-w-xl mx-auto px-4">
	<!--Slot is the app. You can wrap with global styles here-->
	<slot />
</main>
