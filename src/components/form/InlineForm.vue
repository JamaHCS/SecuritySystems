<template>
    <Box title="Inline form">
        <form role="form" class="form-inline">

            <label for="exampleInputEmail2" class="sr-only">Email address</label>
            <input type="email" placeholder="Enter email" id="exampleInputEmail2"
                   class="form-control single-line">

            <label for="exampleInputPassword2" class="sr-only">Password</label>
            <input type="password" placeholder="Password" id="exampleInputPassword2"
                   class="form-control single-line">

            <div class="form-check abc-checkbox form-check-inline m-l-md ml-4">
                <label class="ilabel d-inline"> Remember me
                    <input class="form-check-input" type="checkbox"  value="option1">
                    <span class="checkmark"></span>
                </label>
            </div>
            <button class="btn btn-theme-1" type="submit">Sign in</button>
        </form>
    </Box>
</template>

<script>
import Box from '../box/Box';
export default {
    name: 'InlineForm',
    components: { Box }
};
</script>

<style scoped>

</style>