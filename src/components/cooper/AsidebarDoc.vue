<template>
    <Box>
        <h2>Asidebar</h2>
        <div class="row">
            <div class="col-4">
                <font-awesome-icon icon="hand-point-left" size="7x" class="float-right"/>
            </div>
            <div class="col-8 documentation-text-container">
                On the left side is the example of this component.
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="asidebarHtml"/>
        </div>
    </Box>
</template>

<script>
import Box from './../box/Box';

export default {
    name: 'NavbarDoc',
    components: {
        Box
    },
    data() {
        return {
            asidebarHtml: `
                <nav class="navbar-default navbar-static-side" role="navigation">
                    <div class="sidebar-collapse">
                        <ul class="nav metismenu" id="side-menu">
                            <li class="nav-header">
                                <div class="dropdown profile-element">
                                    <img alt="image" class="" :src="profilePhoto"/>
                                    <a data-toggle="dropdown" class="dropdown-toggle" href="#" id="dropdownProfile"
                                       aria-haspopup="true" aria-expanded="false">
                                        <span class="block m-t-xs font-bold">Tritonix</span>
                                        <span class="text-muted text-xs block">Software develpoment<b class="caret"></b></span>
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
                            <li :class="($route.name === 'layout') ? 'active' : ''">
                                <router-link :to="{name: 'layout'}">
                                    <font-awesome-icon icon="border-all" class="mr-2"/>
                                    <span class="nav-label">Layout</span>
                                </router-link>
                            </li>
                            <li :class="($route.name === 'cooper') ? 'active' : ''">
                                <router-link :to="{name: 'cooper'}">
                                    <font-awesome-icon icon="puzzle-piece" class="mr-2"/>
                                    <span class="nav-label">Cooper</span>
                                    <button class="float-right" data-toggle="collapse" data-target="#cooperCollapse"
                                            aria-expanded="false" aria-controls="cooperCollapse">
                                        <font-awesome-icon icon="arrow-down"/>
                                    </button>
                                </router-link>
                                <ul class="nav nav-second-level collapse" id="cooperCollapse">
                                    <li><a href="#breadcrumb-doc">Breadcrumb</a></li>
                                    <li><a href="#button-doc">Buttons</a></li>
                                    <li><a href="#button-group-doc">Button group</a></li>
                                    <li><a href="#dropdown-doc">Dropdowns</a></li>
                                    <li><a href="#navbar-doc">Navbar</a></li>
                                    <li><a href="#toast-doc">Toast</a></li>
                                </ul>
                            </li>
                            <li :class="($route.name === 'bootstrap') ? 'active' : ''">
                                <router-link :to="{name: 'bootstrap'}">
                                    <font-awesome-icon icon="puzzle-piece" class="mr-2"/>
                                    <span class="nav-label">Bootstrap</span>
                                    <button class="float-right" data-toggle="collapse" data-target="#bootstrapCollapse"
                                            aria-expanded="false" aria-controls="bootstrapCollapse">
                                        <font-awesome-icon icon="arrow-down"/>
                                    </button>
                                </router-link>
                                <ul class="nav nav-second-level collapse" id="bootstrapCollapse">
                                    <li><a href="#breadcrumb-doc">Breadcrumb</a></li>
                                    <li><a href="#button-doc">Buttons</a></li>
                                    <li><a href="#button-group-doc">Button group</a></li>
                                    <li><a href="#dropdown-doc">Dropdowns</a></li>
                                    <li><a href="#navbar-doc">Navbar</a></li>
                                    <li><a href="#toast-doc">Toast</a></li>
                                </ul>
                            </li>
                            <li :class="($route.name === 'form') ? 'active' : ''">
                                <router-link :to="{name: 'form'}">
                                    <font-awesome-icon icon="align-center" class="mr-2" />
                                    <span class="nav-label">Forms</span>
                                </router-link>
                            </li>
                            <li :class="($route.name === 'test') ? 'active' : ''">
                                <router-link :to="{name: 'test'}" >
                                    <font-awesome-icon icon="vials" class="mr-2" />
                                    <span class="nav-label">Test</span>
                                </router-link>
                            </li>
                            
                            <li :class="($route.path === '/example/mailbox') ? 'active' : ''">
                                <router-link to="/example/mailbox">
                                    <font-awesome-icon icon="envelope" class="mr-2"></font-awesome-icon>
                                    <span class="nav-label">Mailbox </span>
                                    <span class="badge badge-warning float-right">16/24</span>
                                </router-link>
                            </li>
                            <li :class="($route.path === '/example/app') ? 'active' : ''">
                                <router-link to="/example/app" href="#">
                                    <font-awesome-icon icon="desktop" class="mr-2" />
                                    <span class="nav-label">App Views</span>
                                    <span class="float-right badge badge-primary">SPECIAL</span></router-link>
                            </li>
                            <li :class="($route.path === '/example/other-1') ? 'active' : ''">
                                <router-link to="/example/other-1">
                                    <font-awesome-icon icon="file" class="mr-2" />
                                    <span class="nav-label">Other Pages</span>
                                </router-link>
                            </li>
                            <li :class="($route.name === '/example/miscellaneous') ? 'active' : ''">
                                <router-link to="/example/miscellaneous">
                                    <font-awesome-icon icon="globe" class="mr-2" />
                                    <span class="nav-label">Miscellaneous</span>
                                    <span class="badge badge-secondary float-right">NEW</span>
                                </router-link>
                            </li>
                            
                            <li class="landing_link">
                                <router-link to="/landing">
                                    <font-awesome-icon icon="star" class="mr-2" />
                                    <span class="nav-label">Landing Page</span>
                                    <span class="badge badge-light float-right">NEW</span>
                                </router-link>
                            </li>
                            <li class="special_link">
                                <router-link to="/package">
                                    <font-awesome-icon icon="database" class="mr-2"/>
                                    <span class="nav-label">Package</span>
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