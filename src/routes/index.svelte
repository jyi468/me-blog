<script context="module">
    // This module runs before the page loads
    export const load = async ({fetch}) => {
        const response = await fetch('/posts.json');
        if (response.ok) {
            const posts = await response.json();
            return {
                props: {posts}
            };
        }
    };
</script>

<script>
    export let posts;
</script>

<pre>{JSON.stringify(posts, null, 2)}</pre>

<h1>Welcome to SvelteKit</h1>
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
