using Application from '../db/schema';

service ApplicationService
{
    annotate Company_code
    {
        description
            @mandatory;
    }

    annotate Cost_center
    {
        description
            @mandatory;
    }

    annotate Currency
    {
        description
            @mandatory;
    }

    annotate Department
    {
        department_id
            @mandatory;
        department_name
            @mandatory;
    }

    annotate Dept_budget
    {
        budget
            @mandatory;
        department_name
            @mandatory;
        limit_per
            @mandatory;
        valid_from
            @mandatory;
        valid_to
            @mandatory;
    }

    annotate G_L_Account
    {
        description
            @mandatory;
    }

    annotate Internal_order
    {
        description
            @mandatory;
    }

    annotate Item_category
    {
        description
            @mandatory;
    }

    annotate Jurisdiction_code
    {
        description
            @mandatory;
    }

    annotate Material_master
    {
        hsn_code
            @assert.format : '[0-9]*';
        material_name
            @mandatory;
        unit_price
            @mandatory;
        uom_description
            @mandatory;
    }

    annotate Plant
    {
        description
            @mandatory;
    }

    annotate Tax_code
    {
        description
            @mandatory;
    }

    annotate Unit_Measures
    {
        description
            @mandatory;
    }

    annotate Vendor_master
    {
        currency
            @mandatory;
        gst_treatment
            @mandatory;
        email1
            @assert.format : '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
        email2
            @assert.format : '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
        email3
            @assert.format : '^[a-zA-Z0-9+_.-]+@[a-zA-Z0-9.-]+$';
        vendor_name
            @mandatory;
        vendor_no
            @assert.format : '[0-9]*';
    }

    @cds.persistence.skip
    @odata.singleton
    entity UploadXl
    {
        excel : LargeBinary
            @Core.MediaType : 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet';
    }

    action save_Comp_code
    (
    );

    action save_Currency
    (
    );

    action save_plant
    (
    );

    action save_C_center
    (
    );

    action save_GL_Account
    (
    );

    action save_Int_order
    (
    );

    action save_Tax_code
    (
    );

    action save_UOM
    (
    );

    action save_jcode
    (
    );

    action save_D_master
    (
    );

    action save_dept
    (
    );

    action save_Dept_budget
    (
    );

    action save_M_master
    (
    );

    action save_Item_category
    (
    );

    action save_v_master
    (
    );

    @odata.draft.enabled
    entity Members as
        projection on Application.Members;

    @odata.draft.enabled
    entity Company_code as
        projection on Application.Company_code;

    @odata.draft.enabled
    entity Cost_center as
        projection on Application.Cost_center;

    @odata.draft.enabled
    entity Jurisdiction_code as
        projection on Application.Jurisdiction_code;

    @readonly
    entity list as
        projection on Application.list;

    @odata.draft.enabled
    entity Department as
        projection on Application.Department
        actions
        {
            action Set_Default
            (
            );
        };

    @readonly
    entity Master as
        projection on Application.Master;

    @odata.draft.enabled
    entity Unit_Measures as
        projection on Application.Unit_Measures;

    @odata.draft.enabled
    entity G_L_Account as
        projection on Application.G_L_Account;

    @odata.draft.enabled
    entity Dept_budget as
        projection on Application.Dept_budget;

    @readonly
    entity Percent as
        projection on Application.Percent;

    @odata.draft.enabled
    entity Default_master as
        projection on Application.Default_master;

    @readonly
    entity Roles as
        projection on Application.Roles;

    @odata.draft.enabled
    entity Internal_order as
        projection on Application.Internal_order;

    @odata.draft.enabled
    entity Item_category as
        projection on Application.Item_category;

    @odata.draft.enabled
    entity Material_master as
        projection on Application.Material_master;

    @odata.draft.enabled
    entity Plant as
        projection on Application.Plant;

    @odata.draft.enabled
    entity Tax_code as
        projection on Application.Tax_code;

    @odata.draft.enabled
    entity Vendor_master as
        projection on Application.Vendor_master;

    @odata.draft.enabled
    entity Currency as
        projection on Application.Currency;

    @odata.draft.enabled
    entity Document_type as
        projection on Application.Document_type;

    @readonly
    entity Country as
        projection on Application.Country;

    @readonly
    entity Payment_method as
        projection on Application.Payment_method;

    @odata.draft.enabled
    entity Vendor_gst as
        projection on Application.Vendor_gst;

    @odata.draft.enabled
    entity Vendor_gst_treatment as
        projection on Application.Vendor_gst_treatment;

    @odata.draft.enabled
    entity Vendor_payment_terms as
        projection on Application.Vendor_payment_terms;

    @odata.draft.enabled
    entity Vendor_tds as
        projection on Application.Vendor_tds;
}
