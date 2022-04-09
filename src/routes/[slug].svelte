<script context="module">
	// This module runs before the page loads
	export const load = async ({ fetch, params }) => {
		const { slug } = params;
		const response = await fetch(`/pages/${slug}.json`);
		if (response.ok) {
			const page = await response.json();
			return {
				props: { page }
			};
		}
	};
</script>

<script>
    export let page
</script>

<svelte:head>
	<title>Me Blog | Welcome</title>
</svelte:head>

<h1 class="text-4xl font-semibold mb-5">{page.title}</h1>

<article class="prose">
	{@html page.content.html}
</article>