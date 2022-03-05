<template>
    <Box>
        <h2>Navbar</h2>
        <Navbar />
        <div class="row code">
            <highlight-code lang="xml" :code="navbarHtml" />
        </div>
    </Box>
</template>

<script>
import Box from './../box/Box';
import Navbar from './cNavbar';

export default {
    name: 'NavbarDoc',
    components: { 
        Box,
        Navbar
    },
    data() {
        return {
            navbarHtml: `
                <nav class="navbar navbar-top navbar-expand-lg navbar-light secondary-bg" >
                    <router-link class="btn btn-primary btn-aside" :to="{ name:'home' }">
                        <font-awesome-icon icon="home" />
                    </router-link>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarSupportedContent">
                        <form class="form-inline my-2 my-lg-0 c-searcher">
                            <input class="form-control mr-sm-2 nav-search" type="Search" placeholder="Search for something..." aria-label="Search">
                        </form>
                        <ul class="navbar-nav ml-auto">
                            <li class="nav-item pr-4">
                                <span class="m-r-sm">Welcome to Cooper.css by Tritonix</span>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-toggle count-info" data-toggle="dropdown" href="#">
                                    <font-awesome-icon icon="envelope" />  <span class="badge badge-warning">16</span>
                                </a>
                            </li>
                            <li class="nav-item dropdown">
                                <a class="dropdown-toggle count-info" href="#" id="dropdownNotifications" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    <font-awesome-icon icon="bell" /> <span class="badge badge-primary">8</span>
                                </a>
                                <ul class="dropdown-menu dropdown-alerts">
                                    <li>
                                        <router-link :to="{name: 'home'}" class="dropdown-item">
                                            <div>
                                                <font-awesome-icon icon="bell" class="mr-2" /> You have 16 messages
                                                <span class="float-right text-muted small">4 minutes ago</span>
                                            </div>
                                        </router-link>
                                    </li>
                                    <li class="dropdown-divider"></li>
                                    <li>
                                        <router-link :to="{ name: 'home' }" class="dropdown-item">
                                            <div>
                                                <font-awesome-icon :icon="['fab', 'twitter']" class="mr-2" /> 3 New Followers
                                                <span class="float-right text-muted small">12 minutes ago</span>
                                            </div>
                                        </router-link>
                                    </li>
                                    <li class="dropdown-divider"></li>
                                    <li>
                                        <router-link :to="{ name: 'home' }" class="dropdown-item">
                                            <div>
                                                <font-awesome-icon icon="upload" class="mr-2" /> Server Rebooted
                                                <span class="float-right text-muted small">4 minutes ago</span>
                                            </div>
                                        </router-link>
                                    </li>
                                    <li class="dropdown-divider"></li>
                                    <li>
                                        <div class="text-center link-block">
                                            <router-link :to="{ name: 'home' }" class="dropdown-item">
                                                <strong>See All Alerts</strong>
                                                <font-awesome-icon icon="angle-right" class="ml-2" />
                                            </router-link>
                                        </div>
                                    </li>
                                </ul>
                            </li>
                            <li class="nav-item ml-2">
                                <router-link :to="{ name: 'name' }">
                                    <font-awesome-icon icon="sign-out-alt" class="mr-2"/>Log out
                                </router-link>
                            </li>
                            <li class="nav-item">
                                <router-link :to="{ name: 'home' }" class="right-sidebar-toggle">
                                    <font-awesome-icon icon="tasks" />
                                </router-link>
                            </li>
                        </ul>
                    </div>
                </nav>`
        };
    }
};
</script>

<style scoped>

</style>