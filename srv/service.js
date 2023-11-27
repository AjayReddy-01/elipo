const cds = require('@sap/cds');

module.exports = cds.service.impl(async function () {
    /* SERVICE ENTITIES */
    let {
        Members,
        Company_code,
        Country,
        Jurisdiction_code,
        Department,
        list,
        Master,
        Unit_Measures,
        Dept_budget,
        G_L_Account,
        Cost_center,
        Default_master,
        Roles,
        Internal_order,
        Item_category,
        Material_master,
        Plant,
        Payment_method,
        Tax_code,
        Vendor_master,
        Currency,
        Document_type,
        Vendor_payment_terms,
        Vendor_tds,
        Vendor_gst_treatment,
        Vendor_gst,
        Percent,
        ExcelUpload,

    } = this.entities;



    const c4re = await cds.connect.to('iflow');


    // handler for set default functionality in department
    this.on('Set_Default', async req => {
        try {
        const results = await SELECT.from(Department).where({ sr_no: req.params[0].sr_no });
        var d_id = results[0].sr_no;
        var m_id = results[0].member_id;
            const resp = await c4re.patch(`/default-department?sr_no=${d_id}&member_id=${m_id}`, body);
            c_read = true;
            return resp;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    /* SERVICE HANDLERS */

    var b_company_code = false;
    this.on('save_Comp_code', async req => {
        if (b_company_code) {
            try {
            const c_code = await SELECT.from(Company_code);
            var body = {
                codes: c_code,
                master_id: "1"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                c_read = true;
                b_company_code = false;
                return c_code;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });


    var b_currency = false;
    this.on('save_Currency', async req => {
        if (b_currency) {
            try {
            const c_code = await SELECT.from(Currency);
            var body = {
                codes: c_code,
                master_id: "12"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                c_read = true;
                b_currency = false;
                return c_code;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_plant = false;
    this.on('save_plant', async req => {
        if (b_plant) {
            try {
            const c_code = await SELECT.from(Plant);
            var body = {
                codes: c_code,
                master_id: "7"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                c_read = true;
                b_plant = false;
                return c_code;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_cost_center = false;
    this.on('save_C_center', async req => {
        if (b_cost_center) {
            try {
            const c_code = await SELECT.from(Cost_center);
            var body = {
                codes: c_code,
                master_id: "3"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                c_read = true;
                b_cost_center = false;
                return c_code;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_gl_account = false;
    this.on('save_GL_Account', async req => {
        if (b_gl_account) {
            try {
            const c_code = await SELECT.from(G_L_Account);
            var body = {
                codes: c_code,
                master_id: "2"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                c_read = true;
                b_gl_account = false;
                return c_code;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_int_order = false;
    this.on('save_Int_order', async req => {
        if (b_int_order) {
            try {
            const c_code = await SELECT.from(Internal_order);
            var body = {
                codes: c_code,
                master_id: "10"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                c_read = true;
                b_int_order = false;
                return code;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_tax_code = false;
    this.on('save_Tax_code', async req => {
        if (b_tax_code) {
            try {
            const c_code = await SELECT.from(Tax_code);
            var body = c_code;
                const resp = await c4re.post('/tax-code?import_entries=yes', body);
                tc_read = true;
                b_tax_code = false;
                return c_code;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_uom = false;
    this.on('save_UOM', async req => {
        if (b_uom) {
            try {
            const c_code = await SELECT.from(Unit_Measures);
            var body = {
                codes: c_code,
                master_id: "6"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                um_read = true;
                b_uom = false;
                return;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_jcode = false;
    this.on('save_jcode', async req => {
        if (b_jcode) {
            try {
            const c_code = await SELECT.from(Jurisdiction_code);
            var body = {
                codes: c_code,
                master_id: "0"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                c_read = true;
                b_jcode = false;
                return resp;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    // this.on('save_D_master', async req => {
    //     const c_code = await SELECT.from(Default_master);
    //     const dm = c_code;
    //     const dm_entries = [];
    //     dm.forEach(space => {
    //         dm_entries.push({
    //             company_code: space.company_code,
    //             country: space.country,
    //             currency: space.currency,
    //             document_type: space.document_type,
    //             gl_account_header: space.gl_account_header,
    //             payment_method: space.payment_method,
    //             plant: space.plant,
    //             supplier_id: space.supplier_id,
    //             tax_per: space.table_key,
    //             tds_per: space.tds_per
    //         })
    //         try {

    //         } catch {

    //         }
    //     });
    // });

    var d_department = false;
    this.on('save_dept', async req => {
        if (d_department) {
            try {
            const c_code = await SELECT.from(Department);
            var body = [];
            c_code.forEach(space => {
                if (space.cost_center == null) { space.cost_center = '' };
                if (space.gl_account == null) { space.gl_account = '' };
                if (space.internal_order == null) { space.internal_order = '' };
                body.push({
                    cost_center: space.cost_center,
                    department_name: space.department_name,
                    email: space.email,
                    gl_account: space.gl_account,
                    internal_order: space.internal_order,
                    member_name: space.member_name
                })
            })
                const resp = await c4re.post('/department-master?import_entries=yes', body);
                d_read = true;
                d_department = false;
                return body;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var d_dept_budget = false;
    this.on('save_Dept_budget', async req => {
        if (d_dept_budget) {
            try {
            const c_code = await SELECT.from(Dept_budget);
            const arr = [];
            c_code.forEach(space => {
                arr.push({
                    budget: space.budget,
                    department_name: space.department_name,
                    limit_per: space.limit_per,
                    valid_from: space.valid_from,
                    valid_to: space.valid_to,
                    warning_per: space.warning_per,
                })
            });
            const body = arr;
                const resp = await c4re.post('/departmental-budget-master?import_entries=yes', body);
                db_read = true;
                d_dept_budget = false;
                return body;
            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_m_master = false;
    this.on('save_M_master', async req => {
        if (b_m_master) {
            try {
            const c_code = await SELECT.from(Material_master);
            c_code.forEach(space => {
                if (space.gl_account == null) { space.gl_account = ""; }
                if (space.gst_per == null) { space.gst_per = ""; }
                if (space.hsn_code == null) { space.hsn_code = ""; }
                if (space.material_name == null) { space.material_name = ""; }
                if (space.material_no == null) { space.material_no = ""; }
                if (space.unit_price == null) { space.unit_price = ""; }
                if (space.uom == null) { space.uom = ""; }
                if (space.uom_description == null) { space.uom_description = ""; }
            })

            var body = c_code;
                const resp = await c4re.post('/material-master?import_entries=yes', body);
                c_read = true;
                b_m_master = false;
                return body;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_item_category = false;
    this.on('save_Item_category', async req => {
        if (b_item_category) {
            try {
            const c_code = await SELECT.from(Item_category);
            var body = {
                codes: c_code,
                master_id: "11"
            };
                const resp = await c4re.post('/master?import_entries=yes', body);
                c_read = true;
                b_item_category = false;
                return resp;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });

    var b_vendor_master = false;
    this.on('save_v_master', async req => {
        if (b_vendor_master) {
            try {
            const c_code = await SELECT.from(Vendor_master);
            var body = [];
            c_code.forEach(space => {
                if (space.email == null) { space.country = ""; }
                if (space.gst_per == null) { space.gst_per = ""; }
                if (space.pan == null) { space.pan = ""; }
                if (space.payment_terms == null) { space.payment_terms = ""; }
                if (space.source_of_supply == null) { space.source_of_supply = ""; }
                if (space.member_id == null) { space.member_id = ""; }
                if (space.member_name == null) { space.member_name = ""; }
                if (space.tds == null) { space.tds = ""; }
                if (space.gstin_uin == null) { space.gstin_uin = ""; }
                if (space.gst_treatment == null) { space.gst_treatment = ""; }
                if (space.international_code == null) { space.international_code = ""; }
                if (space.jurisdiction_code == null) { space.jurisdiction_code = ""; }
                if (space.email1 == null) { space.email1 = ""; }
                if (space.email2 == null) { space.email2 = ""; }
                if (space.email3 == null) { space.email3 = ""; }
                const arr = [];
                arr.push(space.email1);
                arr.push(space.email2);
                arr.push(space.email3);
                body.push({
                    currency: space.currency,
                    email: space.email,
                    gst_per: space.gst_per,
                    gst_treatment: space.gst_treatment,
                    gstin_uin: space.gstin_uin,
                    international_code: space.international_code,
                    jurisdiction_code: space.jurisdiction_code,
                    member_name: space.member_name,
                    pan: space.pan,
                    payment_terms: space.payment_terms,
                    source_of_supply: space.source_of_supply,
                    member_id: space.member_id,
                    sup_emails: arr,
                    tds: space.tds,
                    vendor_name: space.vendor_name,
                    vendor_no: space.vendor_no
                });

            })
                const resp = await c4re.post('/vendor-master?import_entries=yes', body);
                vt_read = true;
                b_vendor_master = false;
                return body;

            } catch (err) {
                req.error(500, err.message);
            }
        }
    });


    // handler to read the excel file
    this.on('PUT', ExcelUpload, async (req, next) => {
        if (req.data.excel) {
            var entity = req.headers.slug;

            PassThroughStream = require('stream').PassThrough,
                stream = new PassThroughStream();
            const XLSX = require('xlsx');

            //const stream = new PassThrough();
            var buffers = [];
            req.data.excel.pipe(stream);
            await new Promise((resolve, reject) => {
                stream.on('data', dataChunk => {
                    buffers.push(dataChunk);
                });
                stream.on('end', async () => {
                    var buffer = Buffer.concat(buffers);
                    var workbook = XLSX.read(buffer, { type: "buffer", cellText: true, cellDates: true, dateNF: 'dd"."mm"."yyyy', cellNF: true, rawNumbers: false });
                    let data = []
                    const sheets = workbook.SheetNames
                    for (let i = 0; i < sheets.length; i++) {
                        const temp = XLSX.utils.sheet_to_json(
                            workbook.Sheets[workbook.SheetNames[i]], { cellText: true, cellDates: true, dateNF: 'dd"."mm"."yyyy', rawNumbers: false })
                        temp.forEach((res, index) => {
                            if (index === 0) return;
                            data.push(JSON.parse(JSON.stringify(res)))
                        })
                    }

                    if (data) {
                        const responseCall = await CallEntity(entity, data);
                        if (responseCall == -1)
                            reject(req.error(400, JSON.stringify(data)));
                        else {
                            resolve(req.notify({
                                message: 'Upload Successful',
                                status: 200
                            }));
                        }
                    }
                });
            });
        } else {
            return next();
        }
    });

    async function CallEntity(entity, data) {


        if (entity === 'Company_code') {
            const arr = [];
            data.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                    tax_treatment: space['TAX TREATMENT'],
                })
            });
            data = arr;
        }


        if (entity === 'Currency') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                })
            });
            data = arr;

        }


        if (entity === 'Cost_center') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                })
            });
            data = arr;
        }


        if (entity === 'Department') {
            const dep = data;
            const dep_entries = [];
            var dmid = 0;
            dep.forEach(space => {
                dep_entries.push({
                    cost_center: space['COST CENTER'],
                    default_master_check: '',
                    department_id: 0,
                    department_name: space['DEPARTMENT NAME'],
                    email: space['EMAIL'],
                    gl_account: space['G/L ACCOUNT'],
                    internal_order: space['INTERNAL ORDER'],
                    member_id: 0,
                    member_name: space['USER ID'],
                    sr_no: dmid
                })
                dmid = dmid + 1;
            });
            data = dep_entries;
        }


        if (entity === 'Dept_budget') {
            const ccode = data;
            const arr = [];
            var did = 0;
            ccode.forEach(space => {
                arr.push({
                    budget: space.BUDGET,
                    department_id: did,
                    department_name: space.NAME,
                    limit_per: space.LIMIT,
                    valid_from: space['VALIED FROM'],
                    valid_to: space['VALIED TO'],
                    warning_per: space.WARNING,
                })
                did = did + 1;
            });
            data = arr;
        }


        if (entity === 'Default_master') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    company_code: space.company_code,
                    country: space.country,
                    currency: space.currency,
                    document_type: space.document_type,
                    gl_account_header: space.gl_account_header,
                    payment_method: space.payment_method,
                    plant: space.plant,
                    supplier_id: space.supplier_id,
                    tax_per: space.tax_per,
                    tds_per: space.tds_per
                })
            });
        }



        if (entity === 'G_L_Account') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                })
            });
            data = arr;
        }



        if (entity === 'Internal_order') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                })
            });
            data = arr;
        }


        if (entity === 'Item_category') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                })
            });
            data = arr;
        }




        if (entity === 'Jurisdiction_code') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                })
            });
            data = arr;
        }



        if (entity === 'Material_master') {

            const uam = await c4re.get('/search-help?master_id=6');
            const unit_measures = uam.body.search_help;
            const mm = data;
            const mm_entries = [];
            mm.forEach(space => {
                var u_code = '';
                for (var i = 0; i < 2; i++) {
                    if (unit_measures[i].description === space['UNIT OF MEASURE']) {
                        u_code = unit_measures[i].code;
                        break;
                    }
                }

                mm_entries.push({
                    gl_account: space['G/L ACCOUNT'],
                    gst_per: space['GST%'],
                    hsn_code: space['HSN CODE'],
                    material_name: space['MATERIAL NAME'],
                    material_no: space['MATERIAL NO'],
                    unit_price: space['UNIT PRICE'],
                    uom: u_code,
                    uom_description: space['UNIT OF MEASURE']
                })
            });

            data = mm_entries;
        }



        if (entity === 'Plant') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                })
            });
            data = arr;
        }


        if (entity === 'Tax_code') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    company_code: space['COMPANY CODE'],
                    description: space['DESCRIPTION'],
                    tax_code: space['TAX CODE'],
                    tax_per: space['TAX%']
                })
            });
            data = arr;
        }


        if (entity === 'Unit_Measures') {
            const ccode = data;
            const arr = [];
            ccode.forEach(space => {
                arr.push({
                    code: space.CODE,
                    description: space.DESCRIPTION,
                })
            });
            data = arr;
        }


        if (entity === 'Vendor_master') {
            const resp1 = await c4re.get('/member');
            const member = resp1.body.Member;
            var mem_arr = [];
            member.forEach(space => {
                mem_arr.push({
                    member_id: space.member_id,
                    member_name: space.name

                })
            })
            const vm = data;
            const vm_entries = [];
            vm.forEach(async space => {
                var mid = '';
                for (let i = 0; i < mem_arr.length; i++) {
                    if (mem_arr[i].member_name === space['USER ID']) {
                        mid = mem_arr[i].member_id;
                    }
                }
                vm_entries.push({
                    currency: space['CURRENCY'],
                    email: '',
                    gst_per: space['GST'],
                    gst_treatment: space['GST TREATMENT'],
                    gstin_uin: space['GST IN'],
                    international_code: space['INT TAX CODE'],
                    jurisdiction_code: space['JURISDICTION CODE'],
                    member_id: mid,
                    member_name: space['USER ID'],
                    pan: space['PAN'],
                    payment_terms: space['PAYMENTS TERMS'],
                    source_of_supply: space['SOURCE OF SUPPLY'],
                    email1: space['EMAIL ID 1'],
                    email2: space['EMAIL ID 2'],
                    email3: space['EMAIL ID 3'],
                    tds: space['TDS'],
                    vendor_name: space['VENDOR NAME'],
                    vendor_no: space['VENDOR NO']
                })
            });
            data = vm_entries;
        }




        const insertQuery = INSERT.into(entity).entries(data);

        // This calls the service handler of respective entity. It can be used if any custom 
        // validations need to be performed. or else custom handlers can be skipped. 


        let srv = await cds.connect.to('ApplicationService');
        const insertResult = await srv.run(insertQuery);
        let query = SELECT.from(entity);
        await srv.run(query);
        return insertResult; //returns response to excel upload entity

    };



    //-------------------------------------------------------------------------------------------
    // Get data into Company Code tab
    var c_read = true;
    this.before('READ', Company_code, async (req) => {
        try {
            if (c_read) {
                const resp = await c4re.get('/master?master_id=1');
                cds.tx(req).run(DELETE(Company_code));
                const cc = resp.body;
                const c_code = [];
                cc.forEach(space => {
                    c_code.push({
                        code: space.code,
                        description: space.description,
                        tax_treatment: space.tax_treatement,
                    })
                });
                await cds.tx(req).run(INSERT.into(Company_code).entries(c_code));
                c_read = false;

                const resp1 = await c4re.get('/dropdown?drop_key=country');
                cds.tx(req).run(DELETE(Country));
                const ctry = resp1.body;
                const ctry_entries = [];
                ctry.forEach(space => {
                    ctry_entries.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        value2: space.value2
                    })
                });
                await cds.tx(req).run(INSERT.into(Country).entries(ctry_entries));

            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });
    //--------------------------------------------------------
    // new company code
    this.on('POST', Company_code, async (req) => {

        // storing excel data into schema
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Company_code));
            cds.tx(req).run(INSERT.into(Company_code).entries(req.data));
            b_company_code = true;
            return req.data;
        }
        const c_code = [];
        c_code.push({
            code: req.data.code,
            description: req.data.description,
            tax_treatement: req.data.tax_treatment
        });
        var body = {
            codes: c_code,
            master_id: "1"
        };
        try {
            debugger
            const resp = await c4re.post('/master', body);
            
            if(resp.statuscode === 200){
            const createdEntity = await INSERT.into(Company_code).entries(req.data);
            return req.data;
            }else{
                req.error('Internal Server Error');
            }
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // update company code
    this.on('UPDATE', Company_code, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description,
            tax_treatement: req.data.tax_treatment
        }
        const c_code = req.params[0].code;


        try {
            resp = await c4re.patch('/master?master_id=1&code=' + c_code, body);
            const updatedEntity = await UPDATE(Company_code).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // delete company code
    this.on('DELETE', Company_code, async (req) => {
        var code = req.params[0].code;
        try {
            resp = await c4re.delete(`/master?master_id=1&codes=${code}`);
            const result = await DELETE.from(Company_code).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });



    //-------------------------------------------------------------------------------------------
    // Get data into cost center tab
    var cost_read = true;
    this.before('READ', Cost_center, async (req) => {
        try {
            if (cost_read) {
                const resp = await c4re.get('/master?master_id=3');
                cds.tx(req).run(DELETE(Cost_center));
                const cc = resp.body;
                const c_code = [];
                cc.forEach(space => {
                    c_code.push({
                        code: space.code,
                        description: space.description,
                        master_name: space.master_name,
                    })
                });
                await cds.tx(req).run(INSERT.into(Cost_center).entries(c_code));
                cost_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // new cost center
    this.on('POST', Cost_center, async (req) => {
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Cost_center));
            cds.tx(req).run(INSERT.into(Cost_center).entries(req.data));
            b_cost_center = true;
            return req.data;
        }
        const cost_c = [];
        cost_c.push({
            code: req.data.code,
            description: req.data.description,

        });
        var body = {
            codes: cost_c,
            master_id: "3"
        };
        const createdEntity = await INSERT.into(Cost_center).entries(req.data);


        try {
            const resp = await c4re.post('/master', body);
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });



    //--------------------------------------------------------
    // delete Cost_center
    this.on('DELETE', Cost_center, async (req) => {
        var code = req.params[0].code;
        try {
            resp = await c4re.delete('/master?master_id=3&codes=' + code);
            const result = await DELETE.from(Cost_center).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // update Cost_center
    this.on('UPDATE', Cost_center, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description
        }
        const c_code = req.params[0].code;
        try {
            resp = await c4re.patch('/master?master_id=3&code=' + c_code, body);
            const updatedEntity = await UPDATE(Cost_center).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //-------------------------------------------------------------------------------------------
    // Get data into currency tab
    var cu_read = true;
    this.before('READ', Currency, async (req) => {
        try {
            if (cu_read) {
                const resp = await c4re.get('/search-help?master_id=12');
                cds.tx(req).run(DELETE(Currency));
                const cu = resp.body.search_help;
                const cu_entries = [];
                cu.forEach(space => {
                    cu_entries.push({
                        code: space.code,
                        description: space.description,
                        master_name: space.master_name,
                    })
                });
                await cds.tx(req).run(INSERT.into(Currency).entries(cu_entries));
                cu_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // new Currency
    this.on('POST', Currency, async (req) => {
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Currency));
            cds.tx(req).run(INSERT.into(Currency).entries(req.data));
            b_currency = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({
            code: req.data.code,
            description: req.data.description
        });
        var body = {
            codes: c_code,
            master_id: "12"
        };
        try {
            const createdEntity = await INSERT.into(Currency).entries(req.data);
            const resp = await c4re.post('/master', body);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // delete currency
    this.on('DELETE', Currency, async (req) => {
        var code = req.params[0].code;
        try {
            resp = await c4re.delete('/master?master_id=12&codes=' + code);
            const result = await DELETE.from(Currency).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // update Currency
    this.on('UPDATE', Currency, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description
        }
        const c_code = req.params[0].code;
        try {
            resp = await c4re.patch('/master?master_id=12&code=' + c_code, body);
            const updatedEntity = await UPDATE(Currency).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //-------------------------------------------------------------------------------------------
    // Get data into Default_master
    var dm_read = true;
    this.before('READ', Default_master, async (req) => {
        try {
            if (dm_read) {
                const resp = await c4re.get('/default_master1');
                cds.tx(req).run(DELETE(Default_master));
                const dm = resp.body;
                const dm_entries = [];
                dm.forEach(space => {
                    dm_entries.push({
                        company_code: space.company_code,
                        country: space.country,
                        currency: space.currency,
                        document_type: space.document_type,
                        gl_account_header: space.gl_account_header,
                        payment_method: space.payment_method,
                        plant: space.plant,
                        supplier_id: space.supplier_id,
                        tax_per: space.table_key,
                        tds_per: space.tds_per
                    })
                });
                await cds.tx(req).run(INSERT.into(Default_master).entries(dm_entries));
                dm_read = false;

                // get data into document type
                const resp2 = await c4re.get('/report?document_type=invoice');
                cds.tx(req).run(DELETE(Document_type));
                const dt = resp2.body.search_help;
                const dt_entries = [];
                dt.forEach(space => {
                    dt_entries.push({
                        code: space.code,
                        description: space.description,
                        master_name: space.master_name,
                    })
                });
                await cds.tx(req).run(INSERT.into(Document_type).entries(dt_entries));

                // get data into country

                const resp1 = await c4re.get('/dropdown?drop_key=country');
                cds.tx(req).run(DELETE(Country));
                const ctry = resp1.body;
                const ctry_entries = [];
                ctry.forEach(space => {
                    ctry_entries.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        value2: space.value2
                    })
                });
                await cds.tx(req).run(INSERT.into(Country).entries(ctry_entries));


                // get into Payment_method

                const resp3 = await c4re.get('/dropdown?drop_key=payment_method');
                cds.tx(req).run(DELETE(Payment_method));
                const pm = resp3.body;
                const pm_entries = [];
                pm.forEach(space => {
                    pm_entries.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        value2: space.value2
                    })
                });
                await cds.tx(req).run(INSERT.into(Payment_method).entries(pm_entries));
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // new Default_master
    this.on('POST', Default_master, async (req) => {

        //-------
        // if (Array.isArray(req.data)) {
        //     cds.tx(req).run(DELETE(Default_master));
        //     cds.tx(req).run(INSERT.into(Default_master).entries(req.data));
        //     return req.data;
        // }

        if (req.data.country == null) { req.data.country = ""; };
        if (req.data.currency == null) { req.data.currency = ""; };
        if (req.data.document_type == null) { req.data.document_type = ""; };
        if (req.data.gl_account_header == null) { req.data.gl_account_header = ""; };
        if (req.data.payment_method == null) { req.data.payment_method = ""; };
        if (req.data.plant == null) { req.data.plant = ""; };
        if (req.data.supplier_id == null) { req.data.supplier_id = ""; };
        if (req.data.tax_per == null) { req.data.tax_per = ""; };
        if (req.data.tds_per == null) { req.data.tds_per = ""; };

        var body = {
            company_code: req.data.company_code,
            country: req.data.country,
            currency: req.data.currency,
            document_type: req.data.document_type,
            gl_account_header: req.data.gl_account_header,
            payment_method: req.data.payment_method,
            plant: req.data.plant,
            supplier_id: req.data.supplier_id,
            tax_per: req.data.tax_per,
            tds_per: req.data.tds_per
        };
        try {
            const createdEntity = await INSERT.into(Default_master).entries(req.data);
            const resp = await c4re.post('/default_master1', body);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // delete Default_master
    this.on('DELETE', Default_master, async (req) => {
        var code = req.params[0].company_code;
        try {
            resp = await c4re.delete('/default_master1?company_code=' + code);
            const result = await DELETE.from(Default_master).where({ company_code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // update Default_master
    this.on('UPDATE', Default_master, async (req) => {
        if (req.data.country == null) { req.data.country = ""; };
        if (req.data.currency == null) { req.data.currency = ""; };
        if (req.data.document_type == null) { req.data.document_type = ""; };
        if (req.data.gl_account_header == null) { req.data.gl_account_header = ""; };
        if (req.data.payment_method == null) { req.data.payment_method = ""; };
        if (req.data.plant == null) { req.data.plant = ""; };
        if (req.data.supplier_id == null) { req.data.supplier_id = ""; };
        if (req.data.tax_per == null) { req.data.tax_per = ""; };
        if (req.data.tds_per == null) { req.data.tds_per = ""; };
        const body = {
            company_code: req.data.company_code,
            country: req.data.country,
            currency: req.data.currency,
            document_type: req.data.document_type,
            gl_account_header: req.data.gl_account_header,
            payment_method: req.data.payment_method,
            plant: req.data.plant,
            supplier_id: req.data.supplier_id,
            tax_per: req.data.table_key,
            tds_per: req.data.tds_per
        }
        const code = req.params[0].code;
        try {
            resp = await c4re.patch('/default_master1?company_code=' + code, body);
            const updatedEntity = await UPDATE(Unit_Measures).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //get data Vendor_payment_terms,

    var vpt_read = true;
    this.before('READ', Vendor_payment_terms, async (req) => {
        try {
            if (vpt_read) {
                const resp = await c4re.get('/dropdown?drop_key=vendor_payment_terms');
                cds.tx(req).run(DELETE(Vendor_payment_terms));
                const jc = resp.body;
                const j_code = [];
                jc.forEach(space => {
                    j_code.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        value2: space.value2
                    })
                });
                await cds.tx(req).run(INSERT.into(Vendor_payment_terms).entries(j_code));
                vpt_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    // get data Vendor_tds,

    var vt_read = true;
    this.before('READ', Vendor_tds, async (req) => {
        try {
            if (vt_read) {
                const resp = await c4re.get('/dropdown?drop_key=vendor_tds');
                cds.tx(req).run(DELETE(Vendor_tds));
                const jc = resp.body;
                const j_code = [];
                jc.forEach(space => {
                    j_code.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        value2: space.value2,
                        value3: space.value3
                    })
                });
                await cds.tx(req).run(INSERT.into(Vendor_tds).entries(j_code));
                vt_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // get data Vendor_gst_treatment,
    var vgt_read = true;
    this.before('READ', Vendor_gst_treatment, async (req) => {
        try {
            if (vgt_read) {
                const resp = await c4re.get('/dropdown?drop_key=vendor_gst_treatment');
                cds.tx(req).run(DELETE(Vendor_tds));
                const jc = resp.body;
                const j_code = [];
                jc.forEach(space => {
                    j_code.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        value2: space.value2
                    })
                });
                await cds.tx(req).run(INSERT.into(Vendor_gst_treatment).entries(j_code));
                vgt_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // get data Vendor_gst
    var vg_read = true;
    this.before('READ', Vendor_gst, async (req) => {
        try {
            if (vg_read) {
                const resp = await c4re.get('/dropdown?drop_key=vendor_gst');
                cds.tx(req).run(DELETE(Vendor_gst));
                const jc = resp.body;
                const j_code = [];
                jc.forEach(space => {
                    j_code.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        value2: space.value2
                    })
                });
                await cds.tx(req).run(INSERT.into(Vendor_gst).entries(j_code));
                vg_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });



    // get data into Jurisdiction_code
    var jc_read = true;
    this.before('READ', Jurisdiction_code, async (req) => {
        try {
            if (jc_read) {
                const resp = await c4re.get('/master?master_id=0');
                cds.tx(req).run(DELETE(Jurisdiction_code));
                // const spaces = resp.content;
                const jc = resp.body;
                const j_code = [];
                jc.forEach(space => {
                    j_code.push({
                        code: space.code,
                        description: space.description,
                        master_id: space.master_id,
                    })
                });
                await cds.tx(req).run(INSERT.into(Jurisdiction_code).entries(j_code));
                jc_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // new Jurisdiction_code
    this.on('POST', Jurisdiction_code, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Jurisdiction_code));
            cds.tx(req).run(INSERT.into(Jurisdiction_code).entries(req.data));
            b_jcode = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({
            code: req.data.code,
            description: req.data.description
        });
        var body = {
            codes: c_code,
            master_id: "0"
        };
        const createdEntity = await INSERT.into(Jurisdiction_code).entries(req.data);
        try {
            const resp = await c4re.post('/master', body);
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // delete Jurisdiction_code
    this.on('DELETE', Jurisdiction_code, async (req) => {
        var code = req.params[0].code;
        try {
            resp = await c4re.delete('/master?master_id=0&codes=' + code);
            const result = await DELETE.from(Jurisdiction_code).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // update Jurisdiction_code
    this.on('UPDATE', Jurisdiction_code, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description
        }
        const c_code = req.params[0].code;
        try {
            resp = await c4re.patch('/master?master_id=0&code=' + c_code, body);
            const updatedEntity = await UPDATE(Jurisdiction_code).set(req.data).where({ code: req.data.code });
            return req.data;
            return resp;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // get data into list
    var l_read = true;
    this.before('READ', list, async (req) => {
        try {
            if (l_read) {
                const resp = await c4re.get('/list');
                cds.tx(req).run(DELETE(list));
                const ls = resp.body;
                const ls_entries = [];
                ls.forEach(space => {
                    ls_entries.push({
                        code: space.code,
                        description: space.description,
                    })
                });
                await cds.tx(req).run(INSERT.into(list).entries(ls_entries));
                l_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // get data into Department
    var d_read = true;
    this.before('READ', Department, async (req) => {
        try {
            if (d_read) {
                const resp = await c4re.get('/department-master');
                cds.tx(req).run(DELETE(Department));
                const dep = resp.body;
                const dep_entries = [];
                dep.forEach(space => {
                    dep_entries.push({
                        cost_center: `${space.cost_center}`,
                        default_master_check: `${space.default_master_check}`,
                        department_id: `${space.department_id}`,
                        department_name: `${space.department_name}`,
                        email: `${space.email}`,
                        gl_account: `${space.gl_account}`,
                        internal_order: `${space.internal_order}`,
                        member_id: `${space.member_id}`,
                        member_name: `${space.member_name}`,
                        sr_no: `${space.sr_no}`,
                    })
                });
                await cds.tx(req).run(INSERT.into(Department).entries(dep_entries));
                const resp1 = await c4re.get('/member');
                const memb = resp1.body.Member;
                const mems = [];
                memb.forEach(mb => {
                    mems.push({
                        member_id: `${mb.member_id}`,
                        member_name: `${mb.name}`,
                    })
                });
                await cds.tx(req).run(DELETE(Members));
                await cds.tx(req).run(INSERT.into(Members).entries(mems));
                d_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    // new Department
    this.on('POST', Department, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Department));
            cds.tx(req).run(INSERT.into(Department).entries(req.data));
            d_department = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({

            cost_center: req.data.cost_center,
            department_id: req.data.department_id,
            department_name: req.data.department_name,
            gl_account: req.data.gl_account,
            internal_order: req.data.internal_order,
            member_id: req.data.member_id
        });
        const createdEntity = await INSERT.into(Department).entries(req.data);
        try {
            const resp = await c4re.post('/department-master', c_code);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // delete Department
    this.on('DELETE', Department, async (req) => {
        var code = req.params[0].sr_no;
        try {
            resp = await c4re.delete('/master?master_id=6&codes=' + code);
            const result = await DELETE.from(Department).where({ sr_no: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // update Department
    this.on('UPDATE', Department, async (req) => {
        const body = {
            cost_center: req.data.cost_center,
            department_id: req.data.department_id,
            department_name: req.data.department_name,
            gl_account: req.data.gl_account,
            internal_order: req.data.internal_order,
            member_id: req.data.member_id
        }
        const c_code = req.params[0].sr_no;
        try {
            resp = await c4re.patch('/department-master?sr_no=' + c_code, body);
            const updatedEntity = await UPDATE(Department).set(req.data).where({ sr_no: req.data.sr_no });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    // get data into Master
    var M_read = true;
    this.before('READ', Master, async (req) => {
        try {
            if (M_read) {
                const resp = await c4re.get('/dropdown?drop_key=master');
                cds.tx(req).run(DELETE(Master));
                const mast = resp.body;
                const mast_entries = [];
                mast.forEach(space => {
                    mast_entries.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        table_name: space.value2,
                    })
                });
                await cds.tx(req).run(INSERT.into(Master).entries(mast_entries));
                M_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // get data into unit measures
    var um_read = true;
    this.before('READ', Unit_Measures, async (req) => {
        try {
            if (um_read) {
                const resp = await c4re.get('/search-help?master_id=6');
                cds.tx(req).run(DELETE(Unit_Measures));
                const um = resp.body.search_help;
                const um_entries = [];
                um.forEach(space => {
                    um_entries.push({
                        code: space.code,
                        description: space.description,
                        master_name: space.master_name,
                    })
                });
                await cds.tx(req).run(INSERT.into(Unit_Measures).entries(um_entries));
            }
            um_read = false;
            return req;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // new Unit_Measures
    this.on('POST', Unit_Measures, async (req) => {
        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Unit_Measures));
            cds.tx(req).run(INSERT.into(Unit_Measures).entries(req.data));
            b_uom = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({
            code: req.data.code,
            description: req.data.description
        });
        var body = {
            codes: c_code,
            master_id: "6"
        };

        try {
            const resp = await c4re.post('/master', body);
            const createdEntity = await INSERT.into(Unit_Measures).entries(req.data);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // delete Unit_Measures
    this.on('DELETE', Unit_Measures, async (req) => {
        var code = req.params[0].code;
        try {
            resp = await c4re.delete('/master?master_id=6&codes=' + code);
            const result = await DELETE.from(Unit_Measures).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // update Unit_Measures
    this.on('UPDATE', Unit_Measures, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description
        }
        const c_code = req.params[0].code;
        try {
            resp = await c4re.patch('/master?master_id=6&code=' + c_code, body);
            const updatedEntity = await UPDATE(Unit_Measures).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });



    // // get data into dept budget
    var db_read = true;
    this.before('READ', Dept_budget, async (req) => {
        try {
            if (db_read) {
                const resp = await c4re.get('/departmental-budget-master');
                cds.tx(req).run(DELETE(Dept_budget));
                const db = resp.body;
                const db_entries = [];
                db.forEach(space => {
                    db_entries.push({
                        budget: space.budget,
                        department_id: '' + space.department_id,
                        department_name: space.department_name,
                        limit_per: space.limit_per,
                        valid_from: space.valid_from,
                        valid_to: space.valid_to,
                        warning_per: space.warning_per
                    })
                });
                await cds.tx(req).run(INSERT.into(Dept_budget).entries(db_entries));

                var perc = [];
                perc.push({ per: 20 });
                perc.push({ per: 40 });
                perc.push({ per: 50 });
                perc.push({ per: 60 });
                perc.push({ per: 80 });
                perc.push({ per: 100 });
                cds.tx(req).run(DELETE(Percent));
                await cds.tx(req).run(INSERT.into(Percent).entries(perc));
                db_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // new Dept_budget

    this.before('POST', Dept_budget, async (req) => {
        //-------
        if (Array.isArray(req.data)) {
            req.data.forEach(entry => {
                if (entry.valid_from > entry.valid_to) {
                    return req.error(400, 'Invalid Dates');
                }
            })

        }

        else if (req.data.valid_from > req.data.valid_to) {
            return req.error(400, 'Invalid Dates');
        }
        return req.data;

    });

    this.on('POST', Dept_budget, async (req) => {
        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Dept_budget));
            cds.tx(req).run(INSERT.into(Dept_budget).entries(req.data));
            return req.data;
        }

        const c_code = [];
        c_code.push({
            budget: req.data.budget,
            department_name: req.data.department_name,
            limit_per: req.data.limit_per,
            valid_from: req.data.valid_from,
            valid_to: req.data.valid_to,
            warning_per: req.data.warning_per
        });

        try {
            const resp = await c4re.post('/departmental-budget-master', c_code);
            const createdEntity = await INSERT.into(Dept_budget).entries(req.data);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // delete Dept_budget
    this.on('DELETE', Dept_budget, async (req) => {
        var department_id = req.params[0].department_id;
        try {
            resp = await c4re.delete('/departmental-budget-master?department_id=' + department_id);
            const result = await DELETE.from(Dept_budget).where({ department_id: department_id });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // update Dept_budget
    this.on('UPDATE', Dept_budget, async (req) => {
        const body = {
            budget: req.data.budget,
            department_name: req.data.department_name,
            limit_per: req.data.limit_per,
            valid_from: req.data.valid_from,
            valid_to: req.data.valid_to,
            warning_per: req.data.warning_per
        }
        const c_code = req.params[0].department_id;
        try {
            resp = await c4re.patch('/departmental-budget-master?department_id=' + c_code, body);
            const updatedEntity = await UPDATE(Dept_budget).set(req.data).where({ department_id: req.data.department_id });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });




    // get data into G_L_Account
    var gl_read = true;
    this.before('READ', G_L_Account, async (req) => {
        try {
            if (gl_read) {
                const resp = await c4re.get('/master?master_id=2');
                cds.tx(req).run(DELETE(G_L_Account));
                const gl = resp.body;
                const gl_entries = [];
                gl.forEach(space => {
                    gl_entries.push({
                        code: space.code,
                        description: space.description,
                        master_name: space.master_name
                    })
                });
                await cds.tx(req).run(INSERT.into(G_L_Account).entries(gl_entries));
                gl_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // new G_L_Account
    this.on('POST', G_L_Account, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(G_L_Account));
            cds.tx(req).run(INSERT.into(G_L_Account).entries(req.data));
            b_gl_account = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({
            code: req.data.code,
            description: req.data.description
        });
        var body = {
            codes: c_code,
            master_id: "2"
        };
        try {
            const resp = await c4re.post('/master', body);
            const createdEntity = await INSERT.into(G_L_Account).entries(req.data);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });




    //--------------------------------------------------------
    // delete G_L_Account
    this.on('DELETE', G_L_Account, async (req) => {
        var code = req.params[0].code;
        try {
            cost_read = true;
            resp = await c4re.delete('/master?master_id=2&codes=' + code);
            const result = await DELETE.from(G_L_Account).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // update G_L_Account
    this.on('UPDATE', G_L_Account, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description
        }
        const c_code = req.params[0].code;
        try {
            resp = await c4re.patch('/master?master_id=2&code=' + c_code, body);
            const updatedEntity = await UPDATE(G_L_Account).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });




    // get data into roles
    var role_read = true;
    this.before('READ', Roles, async (req) => {
        try {
            if (role_read) {
                const resp = await c4re.get('/dropdown?drop_key=user_type');
                cds.tx(req).run(DELETE(Roles));
                const role = resp.body;
                const role_entries = [];
                role.forEach(space => {
                    role_entries.push({
                        drop_key: space.drop_key,
                        table_key: space.table_key,
                        value2: space.value2
                    })
                });
                await cds.tx(req).run(INSERT.into(Roles).entries(role_entries));
                role_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // get data into internal order
    var io_read = true;
    this.before('READ', Internal_order, async (req) => {
        try {
            if (io_read) {
                const resp = await c4re.get('/master?master_id=10');
                cds.tx(req).run(DELETE(Internal_order));
                const io = resp.body;
                const io_entries = [];
                io.forEach(space => {
                    io_entries.push({
                        code: space.code,
                        description: space.description,
                        master_id: space.master_id,
                        master_name: space.master_name
                    })
                });
                await cds.tx(req).run(INSERT.into(Internal_order).entries(io_entries));
                io_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // new Internal_order
    this.on('POST', Internal_order, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Internal_order));
            cds.tx(req).run(INSERT.into(Internal_order).entries(req.data));
            b_int_order = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({
            code: req.data.code,
            description: req.data.description
        });
        var body = {
            codes: c_code,
            master_id: "10"
        };
        try {
            const resp = await c4re.post('/master', body);
            const createdEntity = await INSERT.into(Internal_order).entries(req.data);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // delete Internal_order
    this.on('DELETE', Internal_order, async (req) => {
        var code = req.params[0].code;
        try {
            resp = await c4re.delete('/master?master_id=10&codes=' + code);
            const result = await DELETE.from(Internal_order).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // update Internal_order
    this.on('UPDATE', Internal_order, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description
        }
        const c_code = req.params[0].code;
        try {
            resp = await c4re.patch('/master?master_id=10&code=' + c_code, body);
            const updatedEntity = await UPDATE(Internal_order).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // get data into item category
    var ic_read = true;
    this.before('READ', Item_category, async (req) => {
        try {
            if (ic_read) {
                const resp = await c4re.get('/master?master_id=11');
                cds.tx(req).run(DELETE(Item_category));
                const ic = resp.body;
                const ic_entries = [];
                ic.forEach(space => {
                    ic_entries.push({
                        code: space.code,
                        description: space.description,
                        master_id: space.master_id,
                        master_name: space.master_name
                    })
                });
                await cds.tx(req).run(INSERT.into(Item_category).entries(ic_entries));
                ic_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // new Item_category
    this.on('POST', Item_category, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Item_category));
            cds.tx(req).run(INSERT.into(Item_category).entries(req.data));
            b_item_category = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({
            code: req.data.code,
            description: req.data.description
        });
        var body = {
            codes: c_code,
            master_id: "11"
        };
        try {
            const resp = await c4re.post('/master', body);
            const createdEntity = await INSERT.into(Item_category).entries(req.data);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // delete Item_category
    this.on('DELETE', Item_category, async (req) => {
        var code = req.params[0].code;
        try {
            resp = await c4re.delete('/master?master_id=11&codes=' + code);
            const result = await DELETE.from(Item_category).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // update Item_category
    this.on('UPDATE', Item_category, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description
        }
        const c_code = req.params[0].code;
        try {
            resp = await c4re.patch('/master?master_id=11&code=' + c_code, body);
            const updatedEntity = await UPDATE(Item_category).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    // get data into Material master
    var mm_read = true;
    this.before('READ', Material_master, async (req) => {
        try {
            if (mm_read) {
                const resp = await c4re.get('/material-master');
                cds.tx(req).run(DELETE(Material_master));
                const mm = resp.body;
                const mm_entries = [];
                mm.forEach(space => {
                    mm_entries.push({
                        gl_account: `${space.hsn_code || ' '}`,
                        gst_per: space.gst_per,
                        hsn_code: `${space.hsn_code || ' '}`,
                        material_name: space.material_name,
                        material_no: space.material_no,
                        unit_price: space.unit_price,
                        uom: space.uom,
                        uom_description: space.uom_description
                    })
                });
                await cds.tx(req).run(INSERT.into(Material_master).entries(mm_entries));
                mm_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // NEW Material_master
    this.on('POST', Material_master, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Material_master));
            cds.tx(req).run(INSERT.into(Material_master).entries(req.data));
            b_m_master = true;
            return req.data;
        }
        const c_code = [];
        c_code.push({
            gl_account: req.data.gl_account,
            gst_per: req.data.gst_per,
            material_name: req.data.material_name,
            hsn_code: req.data.hsn_code,
            material_no: req.data.material_no,
            unit_price: req.data.unit_price,
            uom: req.data.uom,
            uom_description: req.data.uom_description
        });
        try {
            const resp = await c4re.post('/material-master', c_code);
            const createdEntity = await INSERT.into(Material_master).entries(req.data);
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });



    //--------------------------------------------------------
    // delete Material_master
    this.on('DELETE', Material_master, async (req) => {
        var material_no = req.params[0].material_no;
        try {
            resp = await c4re.delete('/material-master?material_no=' + material_no);
            const result = await DELETE.from(Material_master).where({ material_no: material_no });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //-------------------------------------------------------------------------------------------
    // Get data into plant tab
    var p_read = true;
    this.before('READ', Plant, async (req) => {
        try {
            if (p_read) {
                const resp = await c4re.get('/master?master_id=7');
                cds.tx(req).run(DELETE(Plant));
                // const spaces = resp.content;
                const plant = resp.body;
                const p_code = [];
                plant.forEach(space => {
                    p_code.push({
                        code: space.code,
                        description: space.description,
                        master_id: space.master_id,
                    })
                });
                await cds.tx(req).run(INSERT.into(Plant).entries(p_code));
                p_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // new Plant
    this.on('POST', Plant, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Plant));
            cds.tx(req).run(INSERT.into(Plant).entries(req.data));
            b_plant = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({
            code: req.data.code,
            description: req.data.description
        });
        var body = {
            codes: c_code,
            master_id: "7"
        };
        try {
            const resp = await c4re.post('/master', body);
            const createdEntity = await INSERT.into(Plant).entries(req.data);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // delete Plant
    this.on('DELETE', Plant, async (req) => {
        var code = req.params[0].code;
        try {
            cost_read = true;
            resp = await c4re.delete('/master?master_id=7&codes=' + code);
            const result = await DELETE.from(Plant).where({ code: code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // update Plant
    this.on('UPDATE', Plant, async (req) => {
        const body = {
            code: req.data.code,
            description: req.data.description
        }
        const c_code = req.params[0].code;
        try {
            resp = await c4re.patch('/master?master_id=7&code=' + c_code, body);
            const updatedEntity = await UPDATE(Plant).set(req.data).where({ code: req.data.code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //-------------------------------------------------------------------------------------------
    // Get data into Tax code tab
    var tc_read = true;
    this.before('READ', Tax_code, async (req) => {
        try {
            if (tc_read) {
                const resp = await c4re.get('/tax-code');
                cds.tx(req).run(DELETE(Tax_code));
                const tc = resp.body;
                const t_code = [];
                tc.forEach(space => {
                    t_code.push({
                        company_code: space.company_code,
                        country: '' + space.country,
                        description: space.description,
                        tax_code: '' + space.tax_code,
                        tax_per: '' + space.tax_per
                    })
                });
                await cds.tx(req).run(INSERT.into(Tax_code).entries(t_code));
                tc_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    
    //--------------------------------------------------------
    //new Tax code
    this.on('POST', Tax_code, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Tax_code));
            cds.tx(req).run(INSERT.into(Tax_code).entries(req.data));
            b_tax_code = true;
            return req.data;
        }

        const c_code = [];
        c_code.push({
            company_code: req.data.company_code,
            description: req.data.description,
            tax_code: req.data.tax_code,
            tax_per: req.data.tax_per
        });
        try {
            const resp = await c4re.post('/tax-code', c_code);
            const createdEntity = await INSERT.into(Tax_code).entries(req.data);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });


    //--------------------------------------------------------
    // delete Tax_code
    this.on('DELETE', Tax_code, async (req) => {
        const code = req.params[0].company_code;
        const t_code = req.params[0].tax_code;
        try {
            resp = await c4re.delete('/tax-code?company_code=' + code + '&tax_code=' + t_code);
            const result = await DELETE.from(Tax_code).where({ company_codecode: code, tax_code: t_code });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // update Tax_code
    this.on('UPDATE', Tax_code, async (req) => {
        const body = {
            company_code: req.data.company_code,
            description: req.data.description,
            tax_code: req.data.tax_code,
            tax_per: req.data.tax_per
        }
        const code = req.params[0].company_code;
        const t_code = req.params[0].tax_code;
        try {
            resp = await c4re.patch('/tax-code?company_code=' + code + '&tax_code=' + t_code);
            const updatedEntity = await UPDATE(Tax_code).set(req.data).where({ code: req.data.tax_code, company_code: req.data.company_code });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });




    //-------------------------------------------------------------------------------------------
    // Get data into Vendor master tab
    var vm_read = true;
    this.before('READ', Vendor_master, async (req) => {
        try {
            if (vm_read) {
                const resp = await c4re.get('/vendor-master');
                cds.tx(req).run(DELETE(Vendor_master));
                const vm = resp.body;
                const vm_entries = [];
                vm.forEach(space => {
                    vm_entries.push({
                        currency: `${space.currency}`,
                        email: `${space.emails}`,
                        gst_per: `${space.gst_per}`,
                        gst_treatment: `${space.gst_treatment}`,
                        gstin_uin: `${space.gstin_uin}`,
                        international_code: `${space.international_code}`,
                        jurisdiction_code: `${space.jurisdiction_code}`,
                        member_id: `${space.member_id}`,
                        member_name: `${space.member_name}`,
                        pan: `${space.pan}`,
                        payment_terms: `${space.payment_terms}`,
                        source_of_supply: `${space.source_of_supply}`,
                        email1: `${space.sup_emails[0] || ' '}`,
                        email2: `${space.sup_emails[1] || ' '}`,
                        email3: `${space.sup_emails[2] || ' '}`,
                        tds: `${space.tds}`,
                        vendor_name: `${space.vendor_name}`,
                        vendor_no: `${space.vendor_no}`,
                    })
                });
                await cds.tx(req).run(INSERT.into(Vendor_master).entries(vm_entries));

                const resp1 = await c4re.get('/member');
                cds.tx(req).run(DELETE(Members));
                const member = resp1.body.Member;
                var mem_arr = [];
                member.forEach(space => {
                    mem_arr.push({
                        member_id: `${space.member_id}`,
                        member_name: `${space.name}`

                    })
                })
                await cds.tx(req).run(INSERT.into(Members).entries(mem_arr));
                vm_read = false;
            }
            return req;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    // validating vendor master
    this.before('POST', Vendor_master, async (req) => {

        if (Array.isArray(req.data)) {
            const entries = req.data;
            entries.forEach(entry => {
                if (entry.gst_treatment === 'registered_business') {
                    // if (req.data.gstin_uin === null) req.error ` GST NO is mandatory`;
                    if (req.data.gstin_uin === null) {
                        req.error({
                            message: 'GST NO is mandatory for "REGISTERED BUSINESS".',
                            code: 'MANDATORY_GSTNO'
                        });
                    }
                    else if (entry.gstin_uin.length != 15) {
                        req.error({
                            message: 'Enter a valied "GST NO".',
                            code: 'MANDATORY_GSTNO'
                        });
                    }
                }
                else if (entry.gst_treatment === 'overseas') {
                    if (req.data.gstin_uin === null) {
                        req.error({
                            message: 'Int Tax Code is mandatory for "Overseas".',
                            code: 'MANDATORY_INT_CODE'
                        });
                    }
                }
            })
        }
        if (req.data.gst_treatment === 'registered_business') {
            // if (req.data.gstin_uin === null) req.error(400, `GST NO is mandatory for "REGISTERED BUSINESS".`)
            if (req.data.gstin_uin === null) {
                debugger
                req.error({
                    message: 'GSTIN is mandatory for "REGISTERED BUSINESS".',
                    code: 'MANDATORY_GSTNO',
                    target: '/gstin_uin',
                    additionalTargets: ["vendor_no"],
                    ContentID:"0.0"
                });
            }
            else if (req.data.gstin_uin.length != 15) req.error(400, `Enter a valied "GSTIN".`)
        }
        else if (req.data.gst_treatment === 'overseas') {
            if (req.data.gstin_uin === null) req.error(400, `Int Tax Code is mandatory for "Overseas".`)
        }

        return req.data;
    });

    //--------------------------------------------------------
    // new Vendor_master
    this.on('POST', Vendor_master, async (req) => {

        //-------
        if (Array.isArray(req.data)) {
            cds.tx(req).run(DELETE(Vendor_master));
            cds.tx(req).run(INSERT.into(Vendor_master).entries(req.data));
            b_vendor_master = true;
            return req.data;
        }

        if (req.data.email == null) { req.data.country = ""; };
        if (req.data.gst_per == null) { req.data.gst_per = ""; };
        if (req.data.pan == null) { req.data.pan = ""; };
        if (req.data.payment_terms == null) { req.data.payment_terms = ""; };
        if (req.data.source_of_supply == null) { req.data.source_of_supply = ""; };
        if (req.data.member_id == null) { req.data.member_id = ""; };
        if (req.data.member_name == null) { req.data.member_name = ""; };
        if (req.data.tds == null) { req.data.tds = ""; };
        if (req.data.gstin_uin == null) { req.data.gstin_uin = ""; };
        if (req.data.gst_treatment == null) { req.data.gst_treatment = ""; };
        if (req.data.international_code == null) { req.data.international_code = ""; };
        if (req.data.jurisdiction_code == null) { req.data.jurisdiction_code = ""; };

        const c_code = [];
        const arr = [];
        arr.push(req.data.email1);
        arr.push(req.data.email2);
        arr.push(req.data.email3);
        c_code.push({
            currency: req.data.currency,
            email: req.data.email,
            gst_per: req.data.gst_per,
            gst_treatment: req.data.gst_treatment,
            gstin_uin: req.data.gstin_uin,
            international_code: req.data.international_code,
            jurisdiction_code: req.data.jurisdiction_code,
            member_name: req.data.member_name,
            pan: req.data.pan,
            payment_terms: req.data.payment_terms,
            source_of_supply: req.data.source_of_supply,
            member_id: req.data.member_id,
            sup_emails: arr,
            tds: req.data.tds,
            vendor_name: req.data.vendor_name,
            vendor_no: req.data.vendor_no

        });
        try {
            const resp = await c4re.post('/vendor-master', c_code);
            const createdEntity = await INSERT.into(Vendor_master).entries(req.data);
            return req.data;

        } catch (err) {
            req.error(500, err.message);
        }
    });

    //--------------------------------------------------------
    // delete Vendor_master
    this.on('DELETE', Vendor_master, async (req) => {
        const vno = req.params[0].vendor_no;
        try {
            resp = await c4re.delete('/vendor-master?vendor_no=' + vno);
            const result = await DELETE.from(Vendor_master).where({ vendor_no: vendor_no });
            return result;
        } catch (err) {
            req.error(500, err.message);
        }
    });


    // validation for vendor master update 
    this.before('UPDATE', Vendor_master, async (req) => {

        if (Array.isArray(req.data)) {
            const entries = req.data;
            entries.forEach(entry => {
                if (entry.gst_treatment === 'registered_business') {
                    if (req.data.gstin_uin === null) {
                        req.error({
                            message: 'GST NO is mandatory for "REGISTERED BUSINESS".',
                            code: 'MANDATORY_GSTNO'
                        });
                    }
                    else if (entry.gstin_uin.length != 15) {
                        req.error({
                            message: 'Enter a valied "GST NO".',
                            code: 'MANDATORY_GSTNO'
                        });
                    }
                }
                else if (entry.gst_treatment === 'overseas') {
                    if (req.data.gstin_uin === null) {
                        req.error({
                            message: 'Int Tax Code is mandatory for "Overseas".',
                            code: 'MANDATORY_INT_CODE'
                        });
                    }
                }
            })
        }
        if (req.data.gst_treatment === 'registered_business') {
            if (req.data.gstin_uin === null) req.error(400, `GST NO is mandatory for "REGISTERED BUSINESS".`)

            else if (req.data.gstin_uin.length != 15) req.error(400, `Enter a valied "GST NO".`)
        }
        else if (req.data.gst_treatment === 'overseas') {
            if (req.data.gstin_uin === null) req.error(400, `Int Tax Code is mandatory for "Overseas".`)
        }

        return req.data;
    });

    // update Vendor_master
    this.on('UPDATE', Vendor_master, async (req) => {

        if (req.data.email == null) { req.data.country = ""; };
        if (req.data.gst_per == null) { req.data.gst_per = ""; };
        if (req.data.pan == null) { req.data.pan = ""; };
        if (req.data.payment_terms == null) { req.data.payment_terms = ""; };
        if (req.data.source_of_supply == null) { req.data.source_of_supply = ""; };
        if (req.data.member_id == null) { req.data.member_id = ""; };
        if (req.data.member_name == null) { req.data.member_name = ""; };
        if (req.data.tds == null) { req.data.tds = ""; };
        if (req.data.gstin_uin == null) { req.data.gstin_uin = ""; };
        if (req.data.gst_treatment == null) { req.data.gst_treatment = ""; };
        if (req.data.international_code == null) { req.data.international_code = ""; };
        if (req.data.jurisdiction_code == null) { req.data.jurisdiction_code = ""; };

        const body = {
            currency: req.data.currency,
            email: req.data.email,
            gst_per: req.data.gst_per,
            gst_treatment: req.data.gst_treatment,
            gstin_uin: req.data.gstin_uin,
            international_code: req.data.international_code,
            jurisdiction_code: req.data.jurisdiction_code,
            member_name: req.data.member_name,
            pan: req.data.pan,
            payment_terms: req.data.payment_terms,
            source_of_supply: req.data.source_of_supply,
            sup_emails: arr,
            tds: req.data.tds,
            vendor_name: req.data.vendor_name,
            vendor_no: req.data.vendor_no
        }
        
        try {
            const vno = req.params[0].vendor_no;
            resp = await c4re.patch('/vendor-master?vendor_no=' + vno, body);
            const updatedEntity = await UPDATE(Vendor_master).set(req.data).where({ vendor_no: req.data.vendor_no });
            return req.data;
        } catch (err) {
            req.error(500, err.message);
        }
    });

});
