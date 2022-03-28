<template>
    <Box p-title="Login" p-small="Security systems">
        <div class="row">
            <div class="col-sm-6 b-r"><h3 class="m-t-none m-b">Sign in</h3>
                <p>Sign in today for more expirience.</p>
                <form action @submit.prevent="login">
                    <div class="form-group">
                        <label>Email</label>
                        <input type="email" v-model="email" placeholder="Enter email" name="email" class="form-control" required>
                    </div>
                    <div class="form-group">
                        <label>Password</label>
                        <input type="password" v-model="password" placeholder="Password" name="password" class="form-control" required>
                    </div>
                    <div>
                        <p v-show="error" class="text-danger">
                            Credenciales incorrectas
                        </p>
                        <button class="btn btn-sm btn-primary float-right mt-2" type="submit">
                            <strong>Log in</strong>
                        </button>
                    </div>
                </form>
            </div>
            <div class="col-sm-6">
                <p class="text-center">
                    <font-awesome-icon icon="sign-in-alt" size="10x"/>
                </p>
            </div>
        </div>
    </Box>
</template>

<script>
import Box from '../components/box/Box';
import auth from '../complex/auth';

export default {
    name: 'login',
    components: { Box },
    data() {
        return {
            data: {
                title: 'Login',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'login',
                        text: 'Login'
                    }
                ],
                password:'',
                email:'',
                error: false
            }
        };
    },
    mounted() {
        this.$emit('changeView', this.data);
    },
    methods: {
        async login() {
            try {
                let res = await auth.login(this.email, this.password);

                let tokenRaw = res.data.data.token;
                let index = tokenRaw.indexOf('|');

                const user = {
                    email: this.email,
                    password: this.password,
                    name: res.data.data.name,
                    token: tokenRaw.substring(index + 1)
                };

                auth.setUserLogged(user);

                if (res.status >= 400) {
                    this.error = true;
                    this.$forceUpdate();
                } else {
                    this.$router.push('/');
                }                
            } catch (e) {
                this.error = true;
                this.$forceUpdate();
            }
        }
    }
};
</script>

<style scoped>
.buttons {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
    width: 100%;
}
.buttons .btn{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>