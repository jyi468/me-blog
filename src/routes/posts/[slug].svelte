<script context="module">
	// This module runs before the page loads
	export const load = async ({ fetch, params }) => {
		const { slug } = params;
		const response = await fetch(`/posts/${slug}.json`);
		if (response.ok) {
			const post = await response.json();
			return {
				props: { post }
			};
		}
	};
</script>

<script>
	export let post;
	const {
		title,
		date,
		tags,
		author: { name, authorTitle, picture },
		content: { html },
		coverImage
	} = post;
</script>

<svelte:head>
	<title>Me Blog | Welcome</title>
</svelte:head>

<div class="sm:-mx-5 md:-mx-10 lg:-mx-20 xl: -mx-38 mb-5">
	<img
     src={post.coverImage.url} 
     alt={`Cover image for ${title}`}
      class=""
       />
</div>

<h1 class="text-4xl font-semibold mb-5">{title}</h1>

<a href="/" class="inline-flex items-center mb-3">
    <img
    src={picture.url}
    alt={name}
    class="w-12 h-12 rounded full flex-shrink-0 object-cover object-center"
    />
    <span class="flex-grow flex flex-col pl-4">
        <span class="title-font font-medium">{name}</span>
        <span class="text-secondary text-sx tracking-widest mt-0.5">
            {authorTitle}
        </span>
    </span>
</a>

<p class="text-secondary text-xs tracking-widest font-semibold">
    {new Date(date).toDateString()}
</p>

<div class="mb-5 flex justify-between">
    <div>
        {#if tags}
            <div class="mt-5 space-x-2">
                {#each tags as tag}
                    <span class="badge badge-primary">{tag}</span>
                {/each}
            </div>
        {/if}
    </div>
</div>

<article class="prose">
    {@html html}
</article>