<template>
    <Box>
        <h2>Dropdowns</h2>
        <div class="row">
            <div class="dropdowns">
                <div class="dropdown">
                    <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownPrimary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown primary <font-awesome-icon icon="user" class="mx-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownPrimary">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-secondary dropdown-toggle" type="button" id="dropdownSecondary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown secondary <font-awesome-icon icon="eye" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownSecondary">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-success dropdown-toggle" type="button" id="dropdownSuccess" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown success <font-awesome-icon icon="lock" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownSuccess">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-danger dropdown-toggle" type="button" id="dropdownDanger" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown danger <font-awesome-icon icon="phone" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownDanger">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-warning dropdown-toggle" type="button" id="dropdownWarning" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown warning <font-awesome-icon icon="database" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownWarning">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-info dropdown-toggle" type="button" id="dropdownInfo" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown info <font-awesome-icon icon="home" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownInfo">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-light dropdown-toggle" type="button" id="dropdownLight" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown light <font-awesome-icon icon="search" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownLight">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-dark dropdown-toggle" type="button" id="dropdownDark" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown dark <font-awesome-icon icon="th-large" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownDark">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-theme-1 dropdown-toggle" type="button" id="dropdownTheme1" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown theme 1 <font-awesome-icon icon="star" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownTheme1">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
                <div class="dropdown">
                    <button class="btn btn-theme-2 dropdown-toggle" type="button" id="dropdownTheme2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        Dropdown theme 2 <font-awesome-icon icon="trash-alt" class="ml-1"/>
                    </button>
                    <div class="dropdown-menu" aria-labelledby="dropdownTheme2">
                        <a class="dropdown-item" href="#">Action</a>
                        <a class="dropdown-item" href="#">Another action</a>
                        <a class="dropdown-item" href="#">Something else here</a>
                    </div>
                </div>
            </div>
        </div>
        <div class="row code">
            <highlight-code lang="xml" :code="dropDownsHtml" /> 
        </div>
    </Box>
</template>

<script>
import Box from '../box/Box';

export default {
    name: 'Dropdown',
    components: {
        Box
    },
    data() {
        return {
            dropDownsHtml: `
            <div class="dropdown">
                <button class="btn btn-primary dropdown-toggle" type="button" id="dropdownPrimary" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                    Dropdown primary
                </button>
                <div class="dropdown-menu" aria-labelledby="dropdownPrimary">
                    <a class="dropdown-item" href="#">Action</a>
                    <a class="dropdown-item" href="#">Another action</a>
                    <a class="dropdown-item" href="#">Something else here</a>
                </div>
            </div>`
        };
    }
};
</script>

<style scoped>
.dropdowns{
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-content: space-around;
    flex-wrap: wrap;
    width: 100%;
}

.dropdowns .dropdown{
    margin-top: 0.5rem;
    margin-bottom: 0.5rem;
}
</style>