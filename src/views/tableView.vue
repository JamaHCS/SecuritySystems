<template>
    <div>
        <box title="DataTable">
            <table id="table" class="display" style="width:100%">
                <thead>
                <tr class="filters">
                    <th>
                        <input class="form-control" placeholder="Name">
                    </th>
                    <th>
                        <input class="form-control" placeholder="Position">
                    </th>
                    <th>
                        <input class="form-control" placeholder="Office">
                    </th>
                    <th>
                        <input class="form-control" placeholder="Age">
                    </th>
                    <th>
                        <input class="form-control" placeholder="Start date">
                    </th>
                    <th>
                        <input class="form-control" placeholder="Salary">
                    </th>
                </tr>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td>Tiger Nixon</td>
                    <td>System Architect</td>
                    <td>Edinburgh</td>
                    <td>61</td>
                    <td>2011/04/25</td>
                    <td>$320,800</td>
                </tr>
                <tr>
                    <td>Garrett Winters</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>63</td>
                    <td>2011/07/25</td>
                    <td>$170,750</td>
                </tr>
                <tr>
                    <td>Ashton Cox</td>
                    <td>Junior Technical Author</td>
                    <td>San Francisco</td>
                    <td>66</td>
                    <td>2009/01/12</td>
                    <td>$86,000</td>
                </tr>
                <tr>
                    <td>Cedric Kelly</td>
                    <td>Senior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>2012/03/29</td>
                    <td>$433,060</td>
                </tr>
                <tr>
                    <td>Airi Satou</td>
                    <td>Accountant</td>
                    <td>Tokyo</td>
                    <td>33</td>
                    <td>2008/11/28</td>
                    <td>$162,700</td>
                </tr>
                <tr>
                    <td>Brielle Williamson</td>
                    <td>Integration Specialist</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>2012/12/02</td>
                    <td>$372,000</td>
                </tr>
                <tr>
                    <td>Herrod Chandler</td>
                    <td>Sales Assistant</td>
                    <td>San Francisco</td>
                    <td>59</td>
                    <td>2012/08/06</td>
                    <td>$137,500</td>
                </tr>
                <tr>
                    <td>Rhona Davidson</td>
                    <td>Integration Specialist</td>
                    <td>Tokyo</td>
                    <td>55</td>
                    <td>2010/10/14</td>
                    <td>$327,900</td>
                </tr>
                <tr>
                    <td>Colleen Hurst</td>
                    <td>Javascript Developer</td>
                    <td>San Francisco</td>
                    <td>39</td>
                    <td>2009/09/15</td>
                    <td>$205,500</td>
                </tr>
                <tr>
                    <td>Sonya Frost</td>
                    <td>Software Engineer</td>
                    <td>Edinburgh</td>
                    <td>23</td>
                    <td>2008/12/13</td>
                    <td>$103,600</td>
                </tr>
                <tr>
                    <td>Jena Gaines</td>
                    <td>Office Manager</td>
                    <td>London</td>
                    <td>30</td>
                    <td>2008/12/19</td>
                    <td>$90,560</td>
                </tr>
                <tr>
                    <td>Quinn Flynn</td>
                    <td>Support Lead</td>
                    <td>Edinburgh</td>
                    <td>22</td>
                    <td>2013/03/03</td>
                    <td>$342,000</td>
                </tr>
                <tr>
                    <td>Charde Marshall</td>
                    <td>Regional Director</td>
                    <td>San Francisco</td>
                    <td>36</td>
                    <td>2008/10/16</td>
                    <td>$470,600</td>
                </tr>
                <tr>
                    <td>Haley Kennedy</td>
                    <td>Senior Marketing Designer</td>
                    <td>London</td>
                    <td>43</td>
                    <td>2012/12/18</td>
                    <td>$313,500</td>
                </tr>
                <tr>
                    <td>Tatyana Fitzpatrick</td>
                    <td>Regional Director</td>
                    <td>London</td>
                    <td>19</td>
                    <td>2010/03/17</td>
                    <td>$385,750</td>
                </tr>
                <tr>
                    <td>Michael Silva</td>
                    <td>Marketing Designer</td>
                    <td>London</td>
                    <td>66</td>
                    <td>2012/11/27</td>
                    <td>$198,500</td>
                </tr>
                <tr>
                    <td>Paul Byrd</td>
                    <td>Chief Financial Officer (CFO)</td>
                    <td>New York</td>
                    <td>64</td>
                    <td>2010/06/09</td>
                    <td>$725,000</td>
                </tr>
                <tr>
                    <td>Gloria Little</td>
                    <td>Systems Administrator</td>
                    <td>New York</td>
                    <td>59</td>
                    <td>2009/04/10</td>
                    <td>$237,500</td>
                </tr>
                <tr>
                    <td>Bradley Greer</td>
                    <td>Software Engineer</td>
                    <td>London</td>
                    <td>41</td>
                    <td>2012/10/13</td>
                    <td>$132,000</td>
                </tr>
                <tr>
                    <td>Dai Rios</td>
                    <td>Personnel Lead</td>
                    <td>Edinburgh</td>
                    <td>35</td>
                    <td>2012/09/26</td>
                    <td>$217,500</td>
                </tr>
                <tr>
                    <td>Jenette Caldwell</td>
                    <td>Development Lead</td>
                    <td>New York</td>
                    <td>30</td>
                    <td>2011/09/03</td>
                    <td>$345,000</td>
                </tr>
                <tr>
                    <td>Yuri Berry</td>
                    <td>Chief Marketing Officer (CMO)</td>
                    <td>New York</td>
                    <td>40</td>
                    <td>2009/06/25</td>
                    <td>$675,000</td>
                </tr>
                <tr>
                    <td>Caesar Vance</td>
                    <td>Pre-Sales Support</td>
                    <td>New York</td>
                    <td>21</td>
                    <td>2011/12/12</td>
                    <td>$106,450</td>
                </tr>
                <tr>
                    <td>Doris Wilder</td>
                    <td>Sales Assistant</td>
                    <td>Sydney</td>
                    <td>23</td>
                    <td>2010/09/20</td>
                    <td>$85,600</td>
                </tr>
                <tr>
                    <td>Angelica Ramos</td>
                    <td>Chief Executive Officer (CEO)</td>
                    <td>London</td>
                    <td>47</td>
                    <td>2009/10/09</td>
                    <td>$1,200,000</td>
                </tr>
                <tr>
                    <td>Gavin Joyce</td>
                    <td>Developer</td>
                    <td>Edinburgh</td>
                    <td>42</td>
                    <td>2010/12/22</td>
                    <td>$92,575</td>
                </tr>
                <tr>
                    <td>Jennifer Chang</td>
                    <td>Regional Director</td>
                    <td>Singapore</td>
                    <td>28</td>
                    <td>2010/11/14</td>
                    <td>$357,650</td>
                </tr>
                <tr>
                    <td>Brenden Wagner</td>
                    <td>Software Engineer</td>
                    <td>San Francisco</td>
                    <td>28</td>
                    <td>2011/06/07</td>
                    <td>$206,850</td>
                </tr>
                <tr>
                    <td>Fiona Green</td>
                    <td>Chief Operating Officer (COO)</td>
                    <td>San Francisco</td>
                    <td>48</td>
                    <td>2010/03/11</td>
                    <td>$850,000</td>
                </tr>
                <tr>
                    <td>Shou Itou</td>
                    <td>Regional Marketing</td>
                    <td>Tokyo</td>
                    <td>20</td>
                    <td>2011/08/14</td>
                    <td>$163,000</td>
                </tr>
                <tr>
                    <td>Michelle House</td>
                    <td>Integration Specialist</td>
                    <td>Sydney</td>
                    <td>37</td>
                    <td>2011/06/02</td>
                    <td>$95,400</td>
                </tr>
                <tr>
                    <td>Suki Burks</td>
                    <td>Developer</td>
                    <td>London</td>
                    <td>53</td>
                    <td>2009/10/22</td>
                    <td>$114,500</td>
                </tr>
                <tr>
                    <td>Prescott Bartlett</td>
                    <td>Technical Author</td>
                    <td>London</td>
                    <td>27</td>
                    <td>2011/05/07</td>
                    <td>$145,000</td>
                </tr>
                <tr>
                    <td>Gavin Cortez</td>
                    <td>Team Leader</td>
                    <td>San Francisco</td>
                    <td>22</td>
                    <td>2008/10/26</td>
                    <td>$235,500</td>
                </tr>
                <tr>
                    <td>Martena Mccray</td>
                    <td>Post-Sales support</td>
                    <td>Edinburgh</td>
                    <td>46</td>
                    <td>2011/03/09</td>
                    <td>$324,050</td>
                </tr>
                <tr>
                    <td>Unity Butler</td>
                    <td>Marketing Designer</td>
                    <td>San Francisco</td>
                    <td>47</td>
                    <td>2009/12/09</td>
                    <td>$85,675</td>
                </tr>
                <tr>
                    <td>Howard Hatfield</td>
                    <td>Office Manager</td>
                    <td>San Francisco</td>
                    <td>51</td>
                    <td>2008/12/16</td>
                    <td>$164,500</td>
                </tr>
                <tr>
                    <td>Hope Fuentes</td>
                    <td>Secretary</td>
                    <td>San Francisco</td>
                    <td>41</td>
                    <td>2010/02/12</td>
                    <td>$109,850</td>
                </tr>
                <tr>
                    <td>Vivian Harrell</td>
                    <td>Financial Controller</td>
                    <td>San Francisco</td>
                    <td>62</td>
                    <td>2009/02/14</td>
                    <td>$452,500</td>
                </tr>
                <tr>
                    <td>Timothy Mooney</td>
                    <td>Office Manager</td>
                    <td>London</td>
                    <td>37</td>
                    <td>2008/12/11</td>
                    <td>$136,200</td>
                </tr>
                <tr>
                    <td>Jackson Bradshaw</td>
                    <td>Director</td>
                    <td>New York</td>
                    <td>65</td>
                    <td>2008/09/26</td>
                    <td>$645,750</td>
                </tr>
                <tr>
                    <td>Olivia Liang</td>
                    <td>Support Engineer</td>
                    <td>Singapore</td>
                    <td>64</td>
                    <td>2011/02/03</td>
                    <td>$234,500</td>
                </tr>
                <tr>
                    <td>Bruno Nash</td>
                    <td>Software Engineer</td>
                    <td>London</td>
                    <td>38</td>
                    <td>2011/05/03</td>
                    <td>$163,500</td>
                </tr>
                <tr>
                    <td>Sakura Yamamoto</td>
                    <td>Support Engineer</td>
                    <td>Tokyo</td>
                    <td>37</td>
                    <td>2009/08/19</td>
                    <td>$139,575</td>
                </tr>
                <tr>
                    <td>Thor Walton</td>
                    <td>Developer</td>
                    <td>New York</td>
                    <td>61</td>
                    <td>2013/08/11</td>
                    <td>$98,540</td>
                </tr>
                <tr>
                    <td>Finn Camacho</td>
                    <td>Support Engineer</td>
                    <td>San Francisco</td>
                    <td>47</td>
                    <td>2009/07/07</td>
                    <td>$87,500</td>
                </tr>
                <tr>
                    <td>Serge Baldwin</td>
                    <td>Data Coordinator</td>
                    <td>Singapore</td>
                    <td>64</td>
                    <td>2012/04/09</td>
                    <td>$138,575</td>
                </tr>
                <tr>
                    <td>Zenaida Frank</td>
                    <td>Software Engineer</td>
                    <td>New York</td>
                    <td>63</td>
                    <td>2010/01/04</td>
                    <td>$125,250</td>
                </tr>
                <tr>
                    <td>Zorita Serrano</td>
                    <td>Software Engineer</td>
                    <td>San Francisco</td>
                    <td>56</td>
                    <td>2012/06/01</td>
                    <td>$115,000</td>
                </tr>
                <tr>
                    <td>Jennifer Acosta</td>
                    <td>Junior Javascript Developer</td>
                    <td>Edinburgh</td>
                    <td>43</td>
                    <td>2013/02/01</td>
                    <td>$75,650</td>
                </tr>
                <tr>
                    <td>Cara Stevens</td>
                    <td>Sales Assistant</td>
                    <td>New York</td>
                    <td>46</td>
                    <td>2011/12/06</td>
                    <td>$145,600</td>
                </tr>
                <tr>
                    <td>Hermione Butler</td>
                    <td>Regional Director</td>
                    <td>London</td>
                    <td>47</td>
                    <td>2011/03/21</td>
                    <td>$356,250</td>
                </tr>
                <tr>
                    <td>Lael Greer</td>
                    <td>Systems Administrator</td>
                    <td>London</td>
                    <td>21</td>
                    <td>2009/02/27</td>
                    <td>$103,500</td>
                </tr>
                <tr>
                    <td>Jonas Alexander</td>
                    <td>Developer</td>
                    <td>San Francisco</td>
                    <td>30</td>
                    <td>2010/07/14</td>
                    <td>$86,500</td>
                </tr>
                <tr>
                    <td>Shad Decker</td>
                    <td>Regional Director</td>
                    <td>Edinburgh</td>
                    <td>51</td>
                    <td>2008/11/13</td>
                    <td>$183,000</td>
                </tr>
                <tr>
                    <td>Michael Bruce</td>
                    <td>Javascript Developer</td>
                    <td>Singapore</td>
                    <td>29</td>
                    <td>2011/06/27</td>
                    <td>$183,000</td>
                </tr>
                <tr>
                    <td>Donna Snider</td>
                    <td>Customer Support</td>
                    <td>New York</td>
                    <td>27</td>
                    <td>2011/01/25</td>
                    <td>$112,000</td>
                </tr>
                </tbody>
                <tfoot>
                <tr>
                    <th>Name</th>
                    <th>Position</th>
                    <th>Office</th>
                    <th>Age</th>
                    <th>Start date</th>
                    <th>Salary</th>
                </tr>
                </tfoot>
            </table>
        </box>
        <box title="Bootstrap table">
            <table role="table" aria-busy="false" aria-colcount="7"
                   class="table b-table table-striped table-hover table-bordered table-sm" id="__BVID__102">
                <caption>
                    <div data-v-45bc8f18="" class="row no-gutters">
                        <div data-v-45bc8f18="" class="col-sm-5 col-md-6"> Mostrando 1 a 13 de 13 registros</div>
                        <div data-v-45bc8f18="" class="my-1 col-sm-7 col-md-6">
                            <ul data-v-45bc8f18="" role="menubar" aria-disabled="false" aria-label="Pagination"
                                class="pagination my-0 b-pagination pagination-sm text-center">
                                <li role="presentation" aria-hidden="true" class="page-item disabled flex-fill"><span
                                    role="menuitem" aria-label="Go to first page" aria-disabled="true"
                                    class="page-link">«</span></li>
                                <li role="presentation" aria-hidden="true" class="page-item disabled flex-fill"><span
                                    role="menuitem" aria-label="Go to previous page" aria-disabled="true"
                                    class="page-link">‹</span></li><!----><!---->
                                <li role="presentation" class="page-item active flex-fill d-flex">
                                    <button role="menuitemradio" type="button" aria-label="Go to page 1"
                                            aria-checked="true" aria-posinset="1" aria-setsize="1" tabindex="0"
                                            class="page-link flex-grow-1">1
                                    </button>
                                </li><!----><!---->
                                <li role="presentation" aria-hidden="true" class="page-item disabled flex-fill"><span
                                    role="menuitem" aria-label="Go to next page" aria-disabled="true" class="page-link">›</span>
                                </li>
                                <li role="presentation" aria-hidden="true" class="page-item disabled flex-fill"><span
                                    role="menuitem" aria-label="Go to last page" aria-disabled="true" class="page-link">»</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </caption><!---->
                <thead role="rowgroup" class="">
                <tr data-v-45bc8f18="" role="row" class="">
                    <th data-v-45bc8f18="" role="columnheader" scope="col" class="">
                        <div data-v-45bc8f18="" class="row">
                            <div data-v-45bc8f18="" class="col"><input data-v-45bc8f18="" type="text"
                                                                       placeholder="Atributo 1"
                                                                       class="ph-left form-control" id="__BVID__107">
                            </div>
                        </div>
                    </th>
                    <th data-v-45bc8f18="" role="columnheader" scope="col" class="">
                        <div data-v-45bc8f18="" class="row">
                            <div data-v-45bc8f18="" class="col"><input data-v-45bc8f18="" type="text"
                                                                       placeholder="Atributo 2"
                                                                       class="ph-right form-control" id="__BVID__109">
                            </div>
                        </div>
                    </th>
                    <th data-v-45bc8f18="" role="columnheader" scope="col" class="">
                        <div data-v-45bc8f18="" class="row">
                            <div data-v-45bc8f18="" class="col"><input data-v-45bc8f18="" type="text"
                                                                       placeholder="Atributo 3"
                                                                       class="ph-left form-control" id="__BVID__111">
                            </div>
                        </div>
                    </th>
                    <th data-v-45bc8f18="" role="columnheader" scope="col" class="">
                        <div data-v-45bc8f18="" class="row">
                            <div data-v-45bc8f18="" class="col"><input data-v-45bc8f18="" type="text"
                                                                       placeholder="Atributo 4"
                                                                       class="ph-left form-control" id="__BVID__113">
                            </div>
                        </div>
                    </th>
                    <th data-v-45bc8f18="" role="columnheader" scope="col" class="">
                        <div data-v-45bc8f18="" class="row">
                            <div data-v-45bc8f18="" class="col"><input data-v-45bc8f18="" type="text"
                                                                       placeholder="Atributo 5"
                                                                       class="ph-left form-control" id="__BVID__115">
                            </div>
                        </div>
                    </th>
                    <th data-v-45bc8f18="" role="columnheader" scope="col" class="">
                        <div data-v-45bc8f18="" class="row">
                            <div data-v-45bc8f18="" class="col"><select data-v-45bc8f18=""
                                                                        class="ph-center custom-select"
                                                                        id="__BVID__117">
                                <option data-v-45bc8f18="" value="">Todos</option>
                                <option data-v-45bc8f18="" value="TRUE">Activo</option>
                                <option data-v-45bc8f18="" value="FALSE">Inactivo</option>
                            </select></div>
                        </div>
                    </th>
                    <th data-v-45bc8f18="" role="columnheader" scope="col" class=""></th>
                </tr>
                <tr role="row" class="">
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="1" aria-sort="none"
                        class="text-left">
                        <div>Atributo 1</div>
                        <span class="sr-only"> (Click to sort Ascending)</span></th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="2" aria-sort="none"
                        class="text-right">
                        <div>Atributo 2</div>
                        <span class="sr-only"> (Click to sort Ascending)</span></th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="3" aria-sort="none"
                        class="text-left">
                        <div>Atributo 3</div>
                        <span class="sr-only"> (Click to sort Ascending)</span></th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="4" aria-sort="none"
                        class="text-left">
                        <div>Atributo 4</div>
                        <span class="sr-only"> (Click to sort Ascending)</span></th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="5" aria-sort="none"
                        class="text-left">
                        <div>Atributo 5</div>
                        <span class="sr-only"> (Click to sort Ascending)</span></th>
                    <th role="columnheader" scope="col" tabindex="0" aria-colindex="6" aria-sort="none"
                        class="text-center">
                        <div>Estatus</div>
                        <span class="sr-only"> (Click to sort Ascending)</span></th>
                    <th role="columnheader" scope="col" aria-colindex="7" class="">
                        <div>Acciones</div>
                        <span class="sr-only"> (Click to clear sorting)</span></th>
                </tr>
                </thead>
                <tbody role="rowgroup"><!---->
                <tr role="row" aria-rowindex="1" class="">
                    <td aria-colindex="1" role="cell" class="text-left">Impresora multifunción HP LaserJet Pro M426dw
                    </td>
                    <td aria-colindex="2" role="cell" class="text-right"> $7,499.50</td>
                    <td aria-colindex="3" role="cell" class="text-left">Impresoras</td>
                    <td aria-colindex="4" role="cell" class="text-left">LaserJet Pro M426dw</td>
                    <td aria-colindex="5" role="cell" class="text-left">Color blanco</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-primary">Activo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/1/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/1/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Desactivar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-off" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-off fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="2" class="">
                    <td aria-colindex="1" role="cell" class="text-left">HP OfficeJet Pro 9020, Color, Inyección,
                        Inálambrico, Print/Scan/Copy/Fax
                    </td>
                    <td aria-colindex="2" role="cell" class="text-right"> $4,499.00</td>
                    <td aria-colindex="3" role="cell" class="text-left">Impresoras</td>
                    <td aria-colindex="4" role="cell" class="text-left">OfficeJet Pro 9020</td>
                    <td aria-colindex="5" role="cell" class="text-left">Color blanco</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-primary">Activo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/2/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/2/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Desactivar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-off" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-off fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="3" class="">
                    <td aria-colindex="1" role="cell" class="text-left">Cartucho HP 964XL Alto Rendimiento Negro, 2000
                        Páginas
                    </td>
                    <td aria-colindex="2" role="cell" class="text-right"> $919.00</td>
                    <td aria-colindex="3" role="cell" class="text-left">Cartuchos</td>
                    <td aria-colindex="4" role="cell" class="text-left">HP 964XL</td>
                    <td aria-colindex="5" role="cell" class="text-left">Negro</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-primary">Activo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/3/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/3/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Desactivar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-off" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-off fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="4" class="">
                    <td aria-colindex="1" role="cell" class="text-left">Multifuncional Epson EcoTank L6171, Color,
                        Inyección, Tanque de Tinta, Inalámbrico, Print/Scan/Copy
                    </td>
                    <td aria-colindex="2" role="cell" class="text-right"> $6,969.00</td>
                    <td aria-colindex="3" role="cell" class="text-left">Multifuncionales</td>
                    <td aria-colindex="4" role="cell" class="text-left">EcoTank L6171</td>
                    <td aria-colindex="5" role="cell" class="text-left">Color negro</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-warning">Inactivo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/4/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/4/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Activar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-on" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-on fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="5" class="">
                    <td aria-colindex="1" role="cell" class="text-left">Tanque de Tinta Epson T504 Cyan, 70ml</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $181.00</td>
                    <td aria-colindex="3" role="cell" class="text-left">Tanques de tinta</td>
                    <td aria-colindex="4" role="cell" class="text-left">Epson T504</td>
                    <td aria-colindex="5" role="cell" class="text-left">Cyan 504</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-warning">Inactivo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/5/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/5/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Activar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-on" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-on fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="6" class="">
                    <td aria-colindex="1" role="cell" class="text-left">hola</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $1,234,123.00</td>
                    <td aria-colindex="3" role="cell" class="text-left">hola</td>
                    <td aria-colindex="4" role="cell" class="text-left">hola</td>
                    <td aria-colindex="5" role="cell" class="text-left">hola</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-primary">Activo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/6/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/6/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Desactivar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-off" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-off fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="7" class="">
                    <td aria-colindex="1" role="cell" class="text-left">hola 2</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $1.33</td>
                    <td aria-colindex="3" role="cell" class="text-left"></td>
                    <td aria-colindex="4" role="cell" class="text-left"></td>
                    <td aria-colindex="5" role="cell" class="text-left"></td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-warning">Inactivo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/7/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/7/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Activar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-on" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-on fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="8" class="">
                    <td aria-colindex="1" role="cell" class="text-left">Hello</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $1,234,123.00</td>
                    <td aria-colindex="3" role="cell" class="text-left">hello</td>
                    <td aria-colindex="4" role="cell" class="text-left">hello</td>
                    <td aria-colindex="5" role="cell" class="text-left">hello</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-primary">Activo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/8/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/8/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Desactivar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-off" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-off fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="9" class="">
                    <td aria-colindex="1" role="cell" class="text-left">asdfasd</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $123.12</td>
                    <td aria-colindex="3" role="cell" class="text-left"></td>
                    <td aria-colindex="4" role="cell" class="text-left"></td>
                    <td aria-colindex="5" role="cell" class="text-left"></td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-warning">Inactivo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/9/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/9/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Activar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-on" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-on fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="10" class="">
                    <td aria-colindex="1" role="cell" class="text-left">234</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $12,341,234.00</td>
                    <td aria-colindex="3" role="cell" class="text-left"></td>
                    <td aria-colindex="4" role="cell" class="text-left"></td>
                    <td aria-colindex="5" role="cell" class="text-left"></td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-warning">Inactivo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/10/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/10/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Activar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-on" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-on fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="11" class="">
                    <td aria-colindex="1" role="cell" class="text-left">nuevo dato</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $111.00</td>
                    <td aria-colindex="3" role="cell" class="text-left">sadf</td>
                    <td aria-colindex="4" role="cell" class="text-left">asdfa</td>
                    <td aria-colindex="5" role="cell" class="text-left">asdfasdf</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-primary">Activo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/11/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/11/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Desactivar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-off" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-off fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="12" class="">
                    <td aria-colindex="1" role="cell" class="text-left">nuevo</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $69.00</td>
                    <td aria-colindex="3" role="cell" class="text-left"></td>
                    <td aria-colindex="4" role="cell" class="text-left"></td>
                    <td aria-colindex="5" role="cell" class="text-left"></td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-warning">Inactivo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/12/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/12/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Activar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-on" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-on fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C86 64 0 150 0 256s86 192 192 192h192c106 0 192-86 192-192S490 64 384 64zm0 320c-70.8 0-128-57.3-128-128 0-70.8 57.3-128 128-128 70.8 0 128 57.3 128 128 0 70.8-57.3 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr>
                <tr role="row" aria-rowindex="13" class="">
                    <td aria-colindex="1" role="cell" class="text-left">prueba</td>
                    <td aria-colindex="2" role="cell" class="text-right"> $123.33</td>
                    <td aria-colindex="3" role="cell" class="text-left">pruebas</td>
                    <td aria-colindex="4" role="cell" class="text-left">pruebas</td>
                    <td aria-colindex="5" role="cell" class="text-left">pruebas</td>
                    <td aria-colindex="6" role="cell" class="text-center"><span data-v-45bc8f18=""
                                                                                class="badge p-1 badge-primary">Activo</span>
                    </td>
                    <td aria-colindex="7" role="cell" class="">
                        <div data-v-45bc8f18="" role="group" class="btn-group btn-group-sm"><a data-v-45bc8f18=""
                                                                                               href="/jama/admin/item/13/show"
                                                                                               class="btn btn-outline-primary"
                                                                                               title="Detalle"
                                                                                               target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="search" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512"
                                 class="svg-inline--fa fa-search fa-w-16">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M505 442.7L405.3 343c-4.5-4.5-10.6-7-17-7H372c27.6-35.3 44-79.7 44-128C416 93.1 322.9 0 208 0S0 93.1 0 208s93.1 208 208 208c48.3 0 92.7-16.4 128-44v16.3c0 6.4 2.5 12.5 7 17l99.7 99.7c9.4 9.4 24.6 9.4 33.9 0l28.3-28.3c9.4-9.4 9.4-24.6.1-34zM208 336c-70.7 0-128-57.2-128-128 0-70.7 57.2-128 128-128 70.7 0 128 57.2 128 128 0 70.7-57.2 128-128 128z"
                                      class=""></path>
                            </svg>
                        </a><a data-v-45bc8f18="" href="/jama/admin/item/13/edit" class="btn btn-outline-primary"
                               title="Modificar" target="_self">
                            <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                 data-icon="edit" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 576 512"
                                 class="svg-inline--fa fa-edit fa-w-18">
                                <path data-v-45bc8f18="" fill="currentColor"
                                      d="M402.6 83.2l90.2 90.2c3.8 3.8 3.8 10 0 13.8L274.4 405.6l-92.8 10.3c-12.4 1.4-22.9-9.1-21.5-21.5l10.3-92.8L388.8 83.2c3.8-3.8 10-3.8 13.8 0zm162-22.9l-48.8-48.8c-15.2-15.2-39.9-15.2-55.2 0l-35.4 35.4c-3.8 3.8-3.8 10 0 13.8l90.2 90.2c3.8 3.8 10 3.8 13.8 0l35.4-35.4c15.2-15.3 15.2-40 0-55.2zM384 346.2V448H64V128h229.8c3.2 0 6.2-1.3 8.5-3.5l40-40c7.6-7.6 2.2-20.5-8.5-20.5H48C21.5 64 0 85.5 0 112v352c0 26.5 21.5 48 48 48h352c26.5 0 48-21.5 48-48V306.2c0-10.7-12.9-16-20.5-8.5l-40 40c-2.2 2.3-3.5 5.3-3.5 8.5z"
                                      class=""></path>
                            </svg>
                        </a>
                            <button data-v-45bc8f18="" title="Desactivar" type="button" class="btn btn-outline-primary">
                                <svg data-v-45bc8f18="" aria-hidden="true" focusable="false" data-prefix="fas"
                                     data-icon="toggle-off" role="img" xmlns="http://www.w3.org/2000/svg"
                                     viewBox="0 0 576 512" class="svg-inline--fa fa-toggle-off fa-w-18">
                                    <path data-v-45bc8f18="" fill="currentColor"
                                          d="M384 64H192C85.961 64 0 149.961 0 256s85.961 192 192 192h192c106.039 0 192-85.961 192-192S490.039 64 384 64zM64 256c0-70.741 57.249-128 128-128 70.741 0 128 57.249 128 128 0 70.741-57.249 128-128 128-70.741 0-128-57.249-128-128zm320 128h-48.905c65.217-72.858 65.236-183.12 0-256H384c70.741 0 128 57.249 128 128 0 70.74-57.249 128-128 128z"
                                          class=""></path>
                                </svg>
                            </button>
                        </div>
                    </td>
                </tr><!----><!----></tbody><!----></table>
        </box>
    </div>
</template>

<script>
import Box from '../components/box/Box';
import $ from 'jquery';
import jQuery from 'jquery';
import dt from 'datatables.net';
import jquery from 'jquery';
window.jQuery = jquery;
window.$ = jquery;

export default {
    name: 'test',
    components: {
        Box
    },
    data() {
        return {
            data: {
                title: 'Tables',
                path: [
                    {
                        name: 'home',
                        text: 'Home'
                    },
                    {
                        name: 'table',
                        text: 'Tables'
                    }
                ]
            }
        };
    },
    mounted() {
        this.$emit('changeView', this.data);

        const sht = require('sticky-table-headers');

        $('#table').DataTable();
        $('#table').stickyTableHeaders();
    }
};
</script>

<style scoped>

</style>