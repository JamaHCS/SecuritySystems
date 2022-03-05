<template>
    <nav class="navbar-default navbar-static-side" role="navigation">
        <div class="sidebar-collapse">
            <ul class="nav metismenu" id="side-menu">
                <li class="nav-header">
                    <div class="dropdown profile-element">
                        <img alt="image" class="" :src="profilePhoto"/>
                        <a data-toggle="dropdown" class="dropdown-toggle" href="#" id="dropdownProfile"
                           aria-haspopup="true" aria-expanded="false">
                            <span class="block m-t-xs font-bold">SecuritySystems</span>
                            <span class="text-muted text-xs block">Software development<b class="caret"></b></span>
                        </a>
                        <div class="dropdown-menu dropdown-profile" aria-labelledby="dropdownProfile">
                            <a href="#" class="dropdown-item">Action</a>
                            <a href="#" class="dropdown-item">Another action</a>
                            <a href="#" class="dropdown-item">Something else here</a>
                        </div>
                    </div>
                </li>

                <li :class="($route.name === 'home') ? 'active' : ''">
                    <router-link :to="{name: 'home'}">
                        <font-awesome-icon icon="home" class="mr-2"/>
                        <span class="nav-label">Home</span>
                    </router-link>
                </li>
                
                <li :class="($route.name === 'form' || $route.name === 'formSimulation') ? 'active' : ''">
                    <router-link :to="{name: 'form'}">
                        <font-awesome-icon icon="user" class="mr-2"/>
                        <span class="nav-label">Login</span>
                    </router-link>
                    <ul class="nav nav-second-level collapse" id="formCollapse">
                        <li><router-link :to=" { name: 'formSimulation' }">Form simulated</router-link></li>
                    </ul>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
import pp from './../../assets/logo1000.png';

export default {
    name: 'c-aside',
    data() {
        return {
            profilePhoto: pp
        };
    }
};
</script>

<style scoped>

</style>