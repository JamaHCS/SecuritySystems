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
import Box from '../box/Box';
import Navbar from './Navbar';

export default {
    name: 'NavBarDoc',
    components: {
        Navbar,
        Box
    },
    data() {
        return {
            navbarHtml: `
                <nav :class="fixed ? 'navbar navbar-light secondary-bg fixed-top' : 'navbar navbar-expand-lg navbar-light secondary-bg'">
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
                            <li :class="($route.name === 'home') ? 'nav-item active' : 'nav-item'">
                                <router-link class="nav-link" :to="{ name: 'home' }">Home</router-link>
                            </li>
                            <li :class="($route.name === 'layout') ? 'nav-item active' : 'nav-item'">
                                <router-link class="nav-link" :to="{ name: 'layout' }">Layout</router-link>
                            </li>
                            
                            ...
                            
                            <li class="nav-item dropdown">
                                <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                    Dropdown
                                </a>
                                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                </div>
                            </li>
                            <li class="nav-item">
                                <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
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