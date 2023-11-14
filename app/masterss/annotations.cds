using ApplicationService as service from '../../srv/service';

annotate service.Company_code with @(
    UI.LineItem : [
        {
            $Type : 'UI.DataField',
            Label : 'CODE',
            Value : code,
        },
        {
            $Type : 'UI.DataField',
            Label : 'DESCRIPTION',
            Value : description,
        },
        {
            $Type : 'UI.DataField',
            Value : tax_treatment,
            Label : 'TAX TREATMENT',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_Comp_code',
            Label : 'Save',  
        },
    ]
);
annotate service.Company_code with @(
    UI.FieldGroup #GeneratedGroup1 : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Label : 'CODE',
                Value : code,
            },
            {
                $Type : 'UI.DataField',
                Label : 'DESCRIPTION',
                Value : description,
            },
            {
                $Type : 'UI.DataField',
                Value : tax_treatment,
                Label : 'TAX TREATEMENT',
            },
        ],
    },
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            ID : 'GeneratedFacet1',
            Label : 'Company Code',
            Target : '@UI.FieldGroup#GeneratedGroup1',
        },
    ]
);
annotate service.Company_code with @(
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Company Code',
    }
);
annotate service.Jurisdiction_code with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'Code',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'Description',
        },
    ],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Jurisdiction Code',
    }
);
annotate service.list with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'List',
    }
);
annotate service.Cost_center with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_C_center',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Cost Center',
    }
);

annotate service.Currency with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_Currency',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Currency',
    }
);

annotate service.Default_master with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : company_code,
            Label : 'COMPANY CODE',
        },{
            $Type : 'UI.DataField',
            Value : country,
            Label : 'COUNTRY',
        },{
            $Type : 'UI.DataField',
            Value : currency,
            Label : 'CURRENCY',
        },{
            $Type : 'UI.DataField',
            Value : document_type,
            Label : 'DOCUMENT TYPE',
        },{
            $Type : 'UI.DataField',
            Value : gl_account_header,
            Label : 'GL ACCOUNT HEADER',
        },{
            $Type : 'UI.DataField',
            Value : payment_method,
            Label : 'PAYMENT METHOD',
        },{
            $Type : 'UI.DataField',
            Value : plant,
            Label : 'PLANT',
        },{
            $Type : 'UI.DataField',
            Value : supplier_id,
            Label : 'SUPPLIER ID',
        },
        {
            $Type : 'UI.DataField',
            Value : tds_per,
            Label : 'TDS%',
        },{
            $Type : 'UI.DataField',
            Value : tax_per,
            Label : 'TAX%',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Default Master',
    }
);
annotate service.Department with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : member_name,
            Label : 'USER ID',
        },
        {
            $Type : 'UI.DataField',
            Value : email,
            Label : 'EMAIL',
        },{
            $Type : 'UI.DataField',
            Value : department_name,
            Label : 'DEPARTMENT NAME',
        },{
            $Type : 'UI.DataField',
            Value : cost_center,
            Label : 'COST CENTER',
        },{
            $Type : 'UI.DataField',
            Value : gl_account,
            Label : 'G/L ACCOUNT',
        },{
            $Type : 'UI.DataField',
            Value : internal_order,
            Label : 'INTERNAL ORDER',
        },{
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_dept',
            Label : 'Save',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.Set_Default',
            Label : 'Set Default',
            Inline : true,
             ![@UI.Hidden] : {$edmJson : {$Eq : [{$Path : 'default_master_check'}, 'y']}},
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Department',
    }
);
annotate service.Dept_budget with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : department_name,
            Label : 'NAME',
        },
        {
            $Type : 'UI.DataField',
            Value : budget,
            Label : 'BUDGET',
        },{
            $Type : 'UI.DataField',
            Value : warning_per,
            Label : 'WARNING',
        },
        {
            $Type : 'UI.DataField',
            Value : limit_per,
            Label : 'LIMIT',
        },
        {
            $Type : 'UI.DataField',
            Value : valid_from,
            Label : 'VALIED FROM',
        },
        {
            $Type : 'UI.DataField',
            Value : valid_to,
            Label : 'VALIED TO',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_Dept_budget',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Department Budget',
    }
);
annotate service.G_L_Account with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_GL_Account',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'G/L Account',
    }
);
annotate service.Internal_order with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_Int_order',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Internal Order',
    }
);
annotate service.Item_category with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_Item_category',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : ' Item Category',
    }
);
annotate service.Jurisdiction_code with @(
    UI.LineItem #tableView1 : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_jcode',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView1 : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView1',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Jurisdiction Code',
    }
);
annotate service.Material_master with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : material_no,
            Label : 'MATERIAL NO',
        },{
            $Type : 'UI.DataField',
            Value : material_name,
            Label : 'MATERIAL NAME',
        },{
            $Type : 'UI.DataField',
            Value : hsn_code,
            Label : 'HSN CODE',
        },{
            $Type : 'UI.DataField',
            Value : gst_per,
            Label : 'GST%',
        },{
            $Type : 'UI.DataField',
            Value : unit_price,
            Label : 'UNIT PRICE',
        },{
            $Type : 'UI.DataField',
            Value : uom_description,
            Label : 'UNIT OF MEASURE',
        },{
            $Type : 'UI.DataField',
            Value : gl_account,
            Label : 'G/L ACCOUNT',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_M_master',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Material Master',
    }
);
annotate service.Plant with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIOPTION',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_plant',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Plant',
    }
);
annotate service.Tax_code with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : company_code,
            Label : 'COMPANY CODE',
        },
        {
            $Type : 'UI.DataField',
            Value : tax_code,
            Label : 'TAX CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },{
            $Type : 'UI.DataField',
            Value : tax_per,
            Label : 'TAX%',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_Tax_code',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Tax Code',
    }
);
annotate service.Unit_Measures with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : code,
            Label : 'CODE',
        },{
            $Type : 'UI.DataField',
            Value : description,
            Label : 'DESCRIPTION',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_UOM',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Unit Measures',
    }
);
annotate service.Vendor_master with @(
    UI.LineItem #tableView : [
        {
            $Type : 'UI.DataField',
            Value : vendor_no,
            Label : 'VENDOR NO',
        },{
            $Type : 'UI.DataField',
            Value : vendor_name,
            Label : 'VENDOR NAME',
        },
        {
            $Type : 'UI.DataField',
            Value : member_name,
            Label : 'USER ID',
        },
        {
            $Type : 'UI.DataField',
            Value : member_id,
            Label : 'member_id',
            ![@UI.Hidden],
        },{
            $Type : 'UI.DataField',
            Value : gst_treatment,
            Label : 'GST TREATMENT',
        },{
            $Type : 'UI.DataField',
            Value : gstin_uin,
            Label : 'GST IN',
        },{
            $Type : 'UI.DataField',
            Value : international_code,
            Label : 'INT TAX CODE',
        },{
            $Type : 'UI.DataField',
            Value : source_of_supply,
            Label : 'SOURCE OF SUPPLY',
        },{
            $Type : 'UI.DataField',
            Value : jurisdiction_code,
            Label : 'JURISDICTION CODE',
        },{
            $Type : 'UI.DataField',
            Value : currency,
            Label : 'CURRENCY',
        },{
            $Type : 'UI.DataField',
            Value : payment_terms,
            Label : 'PAYMENTS TERMS',
        },
        {
            $Type : 'UI.DataField',
            Value : tds,
            Label : 'TDS',
        },
        {
            $Type : 'UI.DataField',
            Value : gst_per,
            Label : 'GST',
        },{
            $Type : 'UI.DataField',
            Value : pan,
            Label : 'PAN',
        },
        {
            $Type : 'UI.DataField',
            Value : email1,
            Label : 'EMAIL ID 1',
        },
        {
            $Type : 'UI.DataField',
            Value : email2,
            Label : 'EMAIL ID 2',
        },
        {
            $Type : 'UI.DataField',
            Value : email3,
            Label : 'EMAIL ID 3',
        },
        {
            $Type : 'UI.DataFieldForAction',
            Action : 'ApplicationService.EntityContainer/save_v_master',
            Label : 'Save',
        },],
    UI.SelectionPresentationVariant #tableView : {
        $Type : 'UI.SelectionPresentationVariantType',
        PresentationVariant : {
            $Type : 'UI.PresentationVariantType',
            Visualizations : [
                '@UI.LineItem#tableView',
            ],
        },
        SelectionVariant : {
            $Type : 'UI.SelectionVariantType',
            SelectOptions : [
            ],
        },
        Text : 'Vendor Master',
    }
);
annotate service.Cost_center with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Cost Center',
            ID : 'CostCenter',
            Target : '@UI.FieldGroup#CostCenter',
        },
    ],
    UI.FieldGroup #CostCenter : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : code,
                Label : 'CODE',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'DESCRIPTION',
            },],
    }
);

annotate service.Currency with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'COMPANY',
            ID : 'C',
            Target : '@UI.FieldGroup#C',
        },
    ],
    UI.FieldGroup #C : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : code,
                Label : 'CODE',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'DESCRIPTION',
            },],
    }
);
annotate service.Jurisdiction_code with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Jurisdiction Code',
            ID : 'JurisdictionCode',
            Target : '@UI.FieldGroup#JurisdictionCode',
        },
    ],
    UI.FieldGroup #JurisdictionCode : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : code,
                Label : 'Code',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'Description',
            },],
    }
);
annotate service.G_L_Account with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'G/L Account',
            ID : 'GLAccount',
            Target : '@UI.FieldGroup#GLAccount',
        },
    ],
    UI.FieldGroup #GLAccount : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : code,
                Label : 'Code',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'Description',
            },],
    }
);
annotate service.Internal_order with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Internal Orders',
            ID : 'InternalOrders',
            Target : '@UI.FieldGroup#InternalOrders',
        },
    ],
    UI.FieldGroup #InternalOrders : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : code,
                Label : 'Code',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'Description',
            },],
    }
);
annotate service.Item_category with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Item Category',
            ID : 'ItemCategory',
            Target : '@UI.FieldGroup#ItemCategory',
        },
    ],
    UI.FieldGroup #ItemCategory : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : code,
                Label : 'Code',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'Description',
            },],
    }
);
annotate service.Plant with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Plant',
            ID : 'Plant',
            Target : '@UI.FieldGroup#Plant',
        },
    ],
    UI.FieldGroup #Plant : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : code,
                Label : 'Code',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'Description',
            },],
    }
);
annotate service.Unit_Measures with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Unit Of Measures',
            ID : 'UnitOfMeasures',
            Target : '@UI.FieldGroup#UnitOfMeasures',
        },
    ],
    UI.FieldGroup #UnitOfMeasures : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : code,
                Label : 'Code',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'Description',
            },],
    }
);
annotate service.Tax_code with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Tax Code',
            ID : 'TaxCode',
            Target : '@UI.FieldGroup#TaxCode',
        },
    ],
    UI.FieldGroup #TaxCode : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : company_code,
                Label : 'Company Code',
            },{
                $Type : 'UI.DataField',
                Value : tax_code,
                Label : 'Tax Code',
            },{
                $Type : 'UI.DataField',
                Value : description,
                Label : 'Description',
            },{
                $Type : 'UI.DataField',
                Value : tax_per,
                Label : 'Tax%',
            },],
    }
);
annotate service.Tax_code with {
    company_code @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Company_code',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : company_code,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            Label : 'Company Code',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Cost_center with @(
    UI.HeaderInfo : {
        TypeName : 'Cost Center',
        TypeNamePlural : 'Cost Center',
    }
);
annotate service.Company_code with @(
    UI.HeaderInfo : {
        TypeName : 'Company Code',
        TypeNamePlural : 'Company Code',
    }
);
annotate service.Internal_order with @(
    UI.HeaderInfo : {
        TypeName : 'Internal Order',
        TypeNamePlural : 'Internal Order',
    }
);
annotate service.Item_category with @(
    UI.HeaderInfo : {
        TypeName : 'Item Category',
        TypeNamePlural : 'Item Category',
    }
);
annotate service.Tax_code with @(
    UI.HeaderInfo : {
        TypeName : 'Tax Code',
        TypeNamePlural : 'Tax Code',
    }
);
annotate service.Department with @(
    UI.HeaderInfo : {
        TypeName : 'Department',
        TypeNamePlural : 'Department',
    }
);
annotate service.Dept_budget with @(
    UI.HeaderInfo : {
        TypeName : 'Department Budget',
        TypeNamePlural : 'Department Budget',
    }
);
annotate service.Jurisdiction_code with @(
    UI.HeaderInfo : {
        TypeName : 'Jurisdiction Code',
        TypeNamePlural : 'Jurisdiction Code',
       
    }
);
annotate service.G_L_Account with @(
    UI.HeaderInfo : {
        TypeName : 'G/L Account',
        TypeNamePlural : 'G/L Account',
    }
);
annotate service.Material_master with @(
    UI.HeaderInfo : {
        TypeNamePlural : 'Material Master',
        TypeName : 'Material Master',
    }
);
annotate service.Vendor_master with @(
    UI.HeaderInfo : {
        TypeName : 'Vendor Master',
        TypeNamePlural : 'Vendor Master',
    }
);
annotate service.Unit_Measures with @(
    UI.HeaderInfo : {
        TypeName : 'Unit Measures',
        TypeNamePlural : 'Unit Measures',
    }
);
annotate service.Default_master with @(
    UI.HeaderInfo : {
        TypeName : 'Default Master',
        TypeNamePlural : 'Default Master',
    }
);
annotate service.Plant with @(
    UI.HeaderInfo : {
        TypeName : 'Plant',
        TypeNamePlural : 'Plant',
    }
);
annotate service.Currency with @(
    UI.HeaderInfo : {
        TypeName : 'Currency',
        TypeNamePlural : 'Currency',
    }
);
annotate service.Dept_budget with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Dept Budget',
            ID : 'DeptBudget',
            Target : '@UI.FieldGroup#DeptBudget',
        },
    ],
    UI.FieldGroup #DeptBudget : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : department_name,
                Label : 'Department Name',
            },{
                $Type : 'UI.DataField',
                Value : budget,
                Label : 'Budget',
            },{
                $Type : 'UI.DataField',
                Value : limit_per,
                Label : 'Limit%',
            },{
                $Type : 'UI.DataField',
                Value : warning_per,
                Label : 'Warning%',
            },{
                $Type : 'UI.DataField',
                Value : valid_from,
                Label : 'Falid From',
            },{
                $Type : 'UI.DataField',
                Value : valid_to,
                Label : 'Valid To',
            },],
    }
);
annotate service.Department with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Department',
            ID : 'Department',
            Target : '@UI.FieldGroup#Department',
        },
    ],
    UI.FieldGroup #Department : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : member_name,
                Label : 'User Id',
            },
            {
                $Type : 'UI.DataField',
                Value : member_id,
                Label : 'User Id',
                ![@UI.Hidden],
            },
            {
                $Type : 'UI.DataField',
                Value : department_name,
                Label : 'Department Name',
            },
            {
                $Type : 'UI.DataField',
                Value : department_id,
                Label : 'Department Id',
            },
            {
                $Type : 'UI.DataField',
                Value : cost_center,
                Label : 'Cost Center',
            },
            {
                $Type : 'UI.DataField',
                Value : gl_account,
                Label : 'G/L Account',
            },
            {
                $Type : 'UI.DataField',
                Value : internal_order,
                Label : 'Internal Order',
            },],
    }
);
annotate service.Department with {
    department_name @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Dept_budget',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : department_name,
                    ValueListProperty : 'department_name',
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'department_id',
                    LocalDataProperty : department_id,
                },
            ],
            Label : 'department',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Department with {
    member_name @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Members',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : member_name,
                    ValueListProperty : 'member_name',
                },
                {
                    $Type : 'Common.ValueListParameterOut',
                    ValueListProperty : 'member_id',
                    LocalDataProperty : member_id,
                },
            ],
            Label : 'member',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Department with {
    cost_center @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Cost_center',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : cost_center,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            Label : 'cost center',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Department with {
    internal_order @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Internal_order',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : internal_order,
                    ValueListProperty : 'description',
                },
            ],
            Label : 'Internal order',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Material_master with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Material Master',
            ID : 'MaterialMaster',
            Target : '@UI.FieldGroup#MaterialMaster',
        },
    ],
    UI.FieldGroup #MaterialMaster : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : material_no,
                Label : 'Material No',
            },{
                $Type : 'UI.DataField',
                Value : material_name,
                Label : 'Material Name',
            },{
                $Type : 'UI.DataField',
                Value : hsn_code,
                Label : 'HSN Code',
            },{
                $Type : 'UI.DataField',
                Value : gst_per,
                Label : 'GST%',
            },{
                $Type : 'UI.DataField',
                Value : unit_price,
                Label : 'Unit Price',
            },{
                $Type : 'UI.DataField',
                Value : uom_description,
                Label : 'Unit Of Measure',
            },{
                $Type : 'UI.DataField',
                Value : uom,
                Label : 'Unit',
            },
            {
                $Type : 'UI.DataField',
                Value : gl_account,
                Label : 'G/L Account',
            },],
    }
);
annotate service.Material_master with {
    uom @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Unit_Measures',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : uom,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterInOut',
                    ValueListProperty : 'description',
                    LocalDataProperty : uom_description,
                },
            ],
            Label : 'unit of measure',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Material_master with {
    gst_per @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Tax_code',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : gst_per,
                    ValueListProperty : 'tax_code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'company_code',
                },
            ],
            Label : 'gst',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Material_master with {
    gl_account @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'G_L_Account',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : gl_account,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            Label : 'GL Account',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Department with {
    gl_account @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'G_L_Account',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : gl_account,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};

annotate service.Vendor_master with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Vendor Master',
            ID : 'VendorMaster',
            Target : '@UI.FieldGroup#VendorMaster',
        },
    ],
    UI.FieldGroup #VendorMaster : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : vendor_no,
                Label : 'Vendor No',
            },{
                $Type : 'UI.DataField',
                Value : vendor_name,
                Label : 'Vendor Name',
            },{
                $Type : 'UI.DataField',
                Value : member_id,
                Label : 'Member Id',
                ![@UI.Hidden],
            },
            {
                $Type : 'UI.DataField',
                Value : member_name,
                Label : 'User Id',
            },{
                $Type : 'UI.DataField',
                Value : gst_treatment,
                Label : 'Gst Treatment',
            },
            {
                $Type : 'UI.DataField',
                Value : gstin_uin,
                Label : 'GSTIN',
            },
            {
                $Type : 'UI.DataField',
                Value : international_code,
                Label : 'Int Tax code',
            },
            {
                $Type : 'UI.DataField',
                Value : source_of_supply,
                Label : 'Source of Supply',
            },
            {
                $Type : 'UI.DataField',
                Value : jurisdiction_code,
                Label : 'Jurisdiction Code',
            },
            {
                $Type : 'UI.DataField',
                Value : currency,
                Label : 'Currency',
            },
            {
                $Type : 'UI.DataField',
                Value : payment_terms,
                Label : 'Payment Terms',
            },
            {
                $Type : 'UI.DataField',
                Value : tds,
                Label : 'TDS',
            },
            {
                $Type : 'UI.DataField',
                Value : gst_per,
                Label : 'GST',
            },
            {
                $Type : 'UI.DataField',
                Value : pan,
                Label : 'PAN',
            },
            {
                $Type : 'UI.DataField',
                Value : email1,
                Label : 'Email 1',
            },
            {
                $Type : 'UI.DataField',
                Value : email2,
                Label : 'Email 2',
            },
            {
                $Type : 'UI.DataField',
                Value : email3,
                Label : 'Email 3',
            },
            {
                $Type : 'UI.DataField',
                Value : email,
                Label : 'email',
                ![@UI.Hidden],
            },],
    }
);
annotate service.Vendor_master with {
    gst_treatment @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Vendor_gst_treatment',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : gst_treatment,
                    ValueListProperty : 'table_key',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'value2',
                },
            ],
            Label : 'gst treat',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Vendor_master with {
    jurisdiction_code @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Jurisdiction_code',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : jurisdiction_code,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            Label : 'jurisdiction code',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Vendor_master with {
    currency @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Currency',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : currency,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            Label : 'currency',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Vendor_master with {
    payment_terms @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Vendor_payment_terms',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : payment_terms,
                    ValueListProperty : 'table_key',
                },
            ],
            Label : 'payment',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Vendor_master with {
    tds @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Vendor_tds',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : tds,
                    ValueListProperty : 'value3',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'value2',
                },
            ],
            Label : 'TDS',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Dept_budget with {
    limit_per @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Percent',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : limit_per,
                    ValueListProperty : 'per',
                },
            ],
            Label : 'warning',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Dept_budget with {
    warning_per @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Percent',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : warning_per,
                    ValueListProperty : 'per',
                },
            ],
            Label : 'warning',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Vendor_master with {
    gst_per @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Vendor_gst',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : gst_per,
                    ValueListProperty : 'table_key',
                },
            ],
            Label : 'gst',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with @(
    UI.Facets : [
        {
            $Type : 'UI.ReferenceFacet',
            Label : 'Default Master',
            ID : 'DefaultMaster',
            Target : '@UI.FieldGroup#DefaultMaster',
        },
    ],
    UI.FieldGroup #DefaultMaster : {
        $Type : 'UI.FieldGroupType',
        Data : [
            {
                $Type : 'UI.DataField',
                Value : company_code,
                Label : 'Company Code',
            },{
                $Type : 'UI.DataField',
                Value : country,
                Label : 'Country',
            },{
                $Type : 'UI.DataField',
                Value : payment_method,
                Label : 'Payment Method',
            },{
                $Type : 'UI.DataField',
                Value : currency,
                Label : 'Currency',
            },{
                $Type : 'UI.DataField',
                Value : gl_account_header,
                Label : 'G/L Account',
            },{
                $Type : 'UI.DataField',
                Value : supplier_id,
                Label : 'Vendor Code',
            },{
                $Type : 'UI.DataField',
                Value : tax_per,
                Label : 'TAX%',
            },{
                $Type : 'UI.DataField',
                Value : tds_per,
                Label : 'TDS%',
            },{
                $Type : 'UI.DataField',
                Value : plant,
                Label : 'Plant',
            },{
                $Type : 'UI.DataField',
                Value : document_type,
                Label : 'Document Type',
            },],
    }
);
annotate service.Default_master with {
    document_type @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Document_type',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : document_type,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
            Label : 'd type',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with {
    plant @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Plant',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : plant,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with {
    tds_per @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Vendor_tds',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : tds_per,
                    ValueListProperty : 'value2',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with {
    supplier_id @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Vendor_master',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : supplier_id,
                    ValueListProperty : 'vendor_no',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'vendor_name',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with {
    gl_account_header @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'G_L_Account',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : gl_account_header,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with {
    currency @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Currency',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : currency,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with {
    company_code @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Company_code',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : company_code,
                    ValueListProperty : 'code',
                },
                {
                    $Type : 'Common.ValueListParameterDisplayOnly',
                    ValueListProperty : 'description',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};

annotate service.Company_code with {
    tax_treatment @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Country',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : tax_treatment,
                    ValueListProperty : 'table_key',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with {
    country @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Country',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : country,
                    ValueListProperty : 'table_key',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Default_master with {
    payment_method @UI.MultiLineText : false
};
annotate service.Default_master with {
    payment_method @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Payment_method',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : payment_method,
                    ValueListProperty : 'table_key',
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Vendor_master with {
    email @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Members',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : email,
                    ValueListProperty : 'member_name',
                },
            ],
            Label : 'user id',
        },
        Common.ValueListWithFixedValues : true
)};
annotate service.Vendor_master with {
    member_name @(Common.ValueList : {
            $Type : 'Common.ValueListType',
            CollectionPath : 'Members',
            Parameters : [
                {
                    $Type : 'Common.ValueListParameterInOut',
                    LocalDataProperty : member_name,
                    ValueListProperty : 'member_name',
                },
                {
                    $Type : 'Common.ValueListParameterOut',
                    ValueListProperty : 'member_id',
                    LocalDataProperty : member_id,
                },
            ],
        },
        Common.ValueListWithFixedValues : true
)};


