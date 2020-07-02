<template>
    <div class="action">
        aaaa
    </div>
</template>

<script>
import { getlbt } from '@/api/data';
export default {
    name: 'action',
    async mounted() {
        let res = await getlbt()
        console.log(res.msg)
    },
}
</script>