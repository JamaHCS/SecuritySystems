<template>
    <Box p-title="Login" p-small="Security systems">
        <div class="row">
            <div class="col-sm-6 b-r"><h3 class="m-t-none m-b">Sign in</h3>
                <p>Sign in today for more expirience.</p>
                <form role="form" id="formLogin">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" placeholder="Enter email" name="email" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" placeholder="Password" name="password" class="form-control" required>
                    </div>
                    <div>
                        <button class="btn btn-sm btn-primary float-right m-t-n-xs" type="submit">
                            <strong>Log in</strong>
                        </button>
                        <label class="ilabel">
                            Remember me
                            <input type="checkbox"> 
                            <span class="checkmark"></span>
                        </label>
                    </div>
                </form>
            </div>
            <div class="col-sm-6">
                <h4>Not a member?</h4>
                <p>You can create an account:</p>
                <p class="text-center">
                    <router-link :to="{ name: 'form' }" class="btn btn-icon">
                        <font-awesome-icon icon="sign-in-alt" size="10x"/>
                    </router-link>
                </p>
            </div>
        </div>
    </Box>
</template>

<script>
import Box from '../box/Box';

import jQuery from 'jquery';
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;

import jqv from 'jquery-validation';

export default {
    name: 'FormLogin',
    components: {
        Box
    },
    mounted() {
        $('#formLogin').validate({
            rules: {
                email: {
                    required: true
                },
                password: {
                    required: true
                }
            }
        });
    }
};
</script>

<style scoped>

</style>