<template>
    <Box :p-title="pTitle" :p-small="pSmall">
        <form method="get">
            <div class="form-group  row"><label class="col-sm-2 col-form-label">Normal</label>
                <div class="col-sm-10"><input type="text" class="form-control"></div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Help text</label>
                <div class="col-sm-10"><input type="text" class="form-control"> <span class="form-text m-b-none">A block of help text that breaks onto a new line and may extend beyond one line.</span>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Password</label>

                <div class="col-sm-10"><input type="password" class="form-control" name="password"></div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Placeholder</label>

                <div class="col-sm-10"><input type="text" placeholder="placeholder" class="form-control"></div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-lg-2 col-form-label">Disabled</label>

                <div class="col-lg-10"><input type="text" disabled="" placeholder="Disabled input here..."
                                              class="form-control"></div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-lg-2 col-form-label">Static control</label>

                <div class="col-lg-10"><p class="form-control-static">email@example.com</p></div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Checkboxes and radios <br/>
                <small class="text-navy">Normal Bootstrap elements</small></label>

                <div class="col-sm-10">
                    <div><label> <input type="checkbox"> Option one is this and that&mdash;be sure to include why it's
                        great </label></div>
                    <div><label> <input type="radio" checked="" value="option1" id="optionsRadios1"
                                        name="optionsRadios"> Option one is this and that&mdash;be sure to
                        include why it's great </label></div>
                    <div><label> <input type="radio" value="option2" id="optionsRadios2" name="optionsRadios"> Option
                        two can be something else and selecting it will
                        deselect option one </label></div>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">checkboxes</label>

                <div class="col-sm-10">
                    <label class="checkbox-inline"><input type="checkbox" class="mr-0" value="option1" id="inlineCheckbox1"> Option A </label>
                    <label class="checkbox-inline"><input type="checkbox" class="mr-0" value="option2" id="inlineCheckbox2"> Option B </label>
                    <label class="checkbox-inline"><input type="checkbox" class="mr-0" value="option3" id="inlineCheckbox3"> Option C </label>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Checkboxes &amp; radios <br/><small
                class="text-navy">Custom elements</small></label>
                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-6">
                            <ul class="ul">
                                <li>
                                    <label class="ilabel">
                                        <span>Option one</span>
                                        <input type="checkbox">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="ilabel">
                                        <span>Option two checked</span>
                                        <input type="checkbox" checked="">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="ilabel">
                                        <span>Option three checked and disabled</span>
                                        <input type="checkbox" disabled checked="">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="ilabel">Option four disabled
                                        <input type="checkbox" disabled>
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                        <div class="col-6">
                            <ul class="ul">
                                <li>
                                    <label class="ilabel">Option one
                                        <input type="radio" value="option1" name="a">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="ilabel">Option two checked
                                        <input type="radio" checked value="option2" name="a">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="ilabel">Option three checked and disabled
                                        <input type="radio" value="option3" checked disabled name="b">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                                <li>
                                    <label class="ilabel">Option four disabled
                                        <input type="radio" disabled="" name="a">
                                        <span class="checkmark"></span>
                                    </label>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Inline checkboxes</label>
                <div class="col-sm-10">
                    <label class="ilabel d-inline mr-3">Option 1
                        <input type="checkbox" value="option1">
                        <span class="checkmark"></span>
                    </label>
                    <label class="ilabel d-inline mr-3">Option 2
                        <input type="checkbox" value="option2"/>
                        <span class="checkmark"></span>
                    </label>
                    <label class="ilabel d-inline mr-3">Option 3
                        <input type="checkbox" value="option3">
                        <span class="checkmark"></span>
                    </label>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Select</label>

                <div class="col-sm-10"><select class="form-control m-b" name="account">
                    <option>option 1</option>
                    <option>option 2</option>
                    <option>option 3</option>
                    <option>option 4</option>
                </select>

                    <div class="col-lg-4 m-l-n"><select class="form-control" multiple="">
                        <option>option 1</option>
                        <option>option 2</option>
                        <option>option 3</option>
                        <option>option 4</option>
                    </select></div>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row has-success"><label class="col-sm-2 col-form-label">Input with success</label>

                <div class="col-sm-10"><input type="text" class="form-control"></div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row has-warning"><label class="col-sm-2 col-form-label">Input with warning</label>

                <div class="col-sm-10"><input type="text" class="form-control"></div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group  row has-error"><label class="col-sm-2 col-form-label">Input with error</label>

                <div class="col-sm-10"><input type="text" class="form-control"></div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Control sizing</label>

                <div class="col-sm-10"><input type="text" placeholder=".form-control-lg"
                                              class="form-control form-control-lg m-b">
                    <input type="text" placeholder="Default input" class="form-control m-b"> <input type="text"
                                                                                                    placeholder=".form-control-sm"
                                                                                                    class="form-control form-control-sm">
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Column sizing</label>

                <div class="col-sm-10">
                    <div class="row">
                        <div class="col-md-2"><input type="text" placeholder=".col-md-2" class="form-control"></div>
                        <div class="col-md-3"><input type="text" placeholder=".col-md-3" class="form-control"></div>
                        <div class="col-md-4"><input type="text" placeholder=".col-md-4" class="form-control"></div>
                    </div>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Input groups</label>

                <div class="col-sm-10">
                    <div class="input-group m-b">
                        <div class="input-group-prepend">
                            <span class="input-group-addon">
                                <font-awesome-icon icon="user" />
                            </span>
                        </div>
                        <input type="text" placeholder="Username" class="form-control">
                    </div>
                    <div class="input-group m-b">
                        <input type="text" class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-addon">.00</span>
                        </div>
                    </div>
                    <div class="input-group m-b">
                        <div class="input-group-prepend">
                            <span class="input-group-addon">$</span>
                        </div>
                        <input type="text" class="form-control">
                        <div class="input-group-append">
                            <span class="input-group-addon">.00</span>
                        </div>
                    </div>
                    <div class="input-group m-b">
                        <div class="input-group-prepend">
                            <span class="input-group-addon">
                                <label class="ilabel">
                                    <input type="checkbox" value="option3">
                                    <span class="checkmark"></span>
                                </label>
                            </span>
                        </div>
                        <input type="text" class="form-control">
                    </div>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Button addons</label>

                <div class="col-sm-10">

                    <div class="input-group m-b"><span class="input-group-prepend">
                                            <button type="button" class="btn btn-primary">Go!</button> </span> <input
                        type="text" class="form-control">
                    </div>
                    <div class="input-group"><input type="text" class="form-control"> <span class="input-group-append"> <button
                        type="button" class="btn btn-primary">Go!
                                        </button> </span></div>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">With dropdowns</label>

                <div class="col-sm-10">
                    <div class="input-group m-b">
                        <div class="input-group-prepend">
                            <div class="dropdown">
                                <button data-toggle="dropdown" class="btn btn-theme-1 dropdown-toggle" type="button" aria-haspopup="true" aria-expanded="false">Action</button>
                                <div class="dropdown-menu">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                        <input type="text" class="form-control"></div>
                    <div class="input-group"><input type="text" class="form-control">

                        <div class="input-group-append">
                            <div class="dropdown">
                                <button data-toggle="dropdown" class="btn btn-theme-1 dropdown-toggle" type="button" id="dropdown-3" aria-haspopup="true" aria-expanded="false">Action</button>
                                <div class="dropdown-menu">
                                    <a href="#" class="dropdown-item">Action</a>
                                    <a href="#" class="dropdown-item">Another action</a>
                                    <a href="#" class="dropdown-item">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a href="#" class="dropdown-item">Separated link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row"><label class="col-sm-2 col-form-label">Segmented</label>

                <div class="col-sm-10">
                    <div class="input-group m-b">
                        <div class="input-group-prepend">
                            <button tabindex="-1" class="btn btn-theme-1" type="button">Action</button>
                            <div class="dropdown">
                                <button class="btn btn-theme-1 dropdown-toggle" type="button" data-toggle="dropdown" id="dropdown-4" aria-haspopup="true" aria-expanded="false"/>
                                <div class="dropdown-menu" aria-labelledby="dropdown-4">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                        <input type="text" class="form-control"></div>
                    <div class="input-group">
                        <input type="text" class="form-control">
                        <div class="input-group-append">
                            <button tabindex="-1" class="btn btn-theme-1" type="button">Action</button>
                            <div class="dropdown">
                                <button class="btn btn-theme-1 dropdown-toggle" type="button" data-toggle="dropdown" id="dropdown-last" aria-haspopup="true" aria-expanded="false"/>
                                <div class="dropdown-menu" aria-labelledby="dropdown-last">
                                    <a class="dropdown-item" href="#">Action</a>
                                    <a class="dropdown-item" href="#">Another action</a>
                                    <a class="dropdown-item" href="#">Something else here</a>
                                    <div class="dropdown-divider"></div>
                                    <a class="dropdown-item" href="#">Separated link</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div class="hr-line-dashed"></div>
            <div class="form-group row">
                <div class="col-sm-4 col-sm-offset-2">
                    <button class="btn btn-theme-1 btn-sm mr-2" type="submit">Cancel</button>
                    <button class="btn btn-primary btn-sm" type="submit">Save changes</button>
                </div>
            </div>
        </form>
    </Box>
</template>

<script>
import Box from '../box/Box';

export default {
    name: 'Form',
    components: {
        Box
    },
    data() {
        return {
            pTitle: 'All form elements',
            pSmall: 'With custom checbox and radion elements.'
        };
    }
};
</script>

<style scoped>
.ul{
    list-style-type: none;
}
.ul li{
    margin-bottom: 8px;
}
</style>