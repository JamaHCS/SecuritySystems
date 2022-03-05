<template>
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
                    <span class="m-r-sm">Welcome SecuritySystems</span>
                </li>
                <li class="nav-item ml-2">
                    <router-link :to="{ name: 'home' }">
                        <font-awesome-icon icon="sign-out-alt" class="mr-2"/>
                        <span class="lg">Log out</span>
                    </router-link>
                </li>
                <li class="nav-item">
                    <router-link :to="{ name: 'home' }" class="right-sidebar-toggle">
                        <font-awesome-icon icon="tasks" />
                    </router-link>
                </li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'c-navbar'
};
</script>