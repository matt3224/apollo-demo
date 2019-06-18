<script>
    import { graph } from '../library/api.js';
    import { query1 } from '../library/query.gql';
    import { onMount } from 'svelte';

    onMount(async () => {
        const res = await graph.get(query1, {option: 'my option'});
        console.log(res);
    });
</script>