<script context="module">
	// This module runs before the page loads
	export const load = async ({ fetch }) => {
		const response = await fetch('/posts.json');
		if (response.ok) {
			const posts = await response.json();
			return {
				props: { posts }
			};
		}
	};
</script>

<script>
	export let posts;
</script>

<svelte:head>
	<title>Me Blog | Welcome</title>
</svelte:head>

<!-- <pre>{JSON.stringify(posts, null, 2)}</pre> -->
<h1 class="text-4xl mb-10 font-extrabold">Me Blog</h1>

{#each posts as { title, slug, excerpt, coverImage, tags }}
	<div class="card text-center shadow-2xl mb-20">
		<figure class="px-10 pt-10">
			<img class="rounded" src={coverImage.url} alt={`Cover image for ${title}`} />
		</figure>
        <div class='card-body'>
            <h2 class='title'>{title}</h2>
            <p>{excerpt}</p>
            <div class='flex justify-center mt-5 space-x-2'>
                {#each tags as tag}
                    <span class='badge badge-primary'>{tag}</span>
                {/each}
            </div>
            <div class='justify-center card-actions'>
                <a href={`/posts/${slug}`} class='btn btn-outline btn-primary'>Read &rArr;</a>
            </div>
        </div>
	</div>
{/each}
