<template>
    <Box title="Horizontal form">
        <form>
            <p>Sign in today for more expirience.</p>
            <div class="form-group row">
                <label class="col-lg-2 col-form-label">Email</label>
                <div class="col-lg-10">
                    <input type="email" placeholder="Email" class="form-control">
                    <span class="form-text m-b-none">Example block-level help text here.</span>
                </div>
            </div>
            <div class="form-group row">
                <label class="col-lg-2 col-form-label">Password</label>
                <div class="col-lg-10">
                    <input type="password" placeholder="Password" class="form-control" />
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-offset-2 col-lg-10">
                    <label class="ilabel">Remember me
                        <input type="checkbox">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="form-group row">
                <div class="col-lg-offset-2 col-lg-10">
                    <button class="btn btn-sm btn-theme-1" type="submit">Sign in</button>
                </div>
            </div>
        </form>
    </Box>
</template>

<script>
import Box from '../box/Box';

export default {
    name: 'HorizontalForm',
    components: {
        Box
    }
};
</script>

<style scoped>

</style>