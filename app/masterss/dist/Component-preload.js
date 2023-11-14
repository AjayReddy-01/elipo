//@ui5-bundle masterss/Component-preload.js
jQuery.sap.registerPreloadedModules({
"version":"2.0",
"modules":{
	"masterss/Component.js":function(){sap.ui.define(["sap/fe/core/AppComponent"],function(e){"use strict";return e.extend("masterss.Component",{metadata:{manifest:"json"}})});
},
	"masterss/controller/ExtensionController.js":function(){sap.ui.define(["sap/m/MessageBox","sap/m/MessageToast","sap/ui/core/UIComponent"],function(e,t,n){"use strict";function o(n,o){var a;function r(e){a&&a.getBeginButton().setEnabled(e)}function l(e){a.setBusy(e)}function i(){a&&a.close()}function s(t,n,o){e.error("Upload failed",{title:"Error"})}function c(e){return sap.ui.core.Fragment.byId("excelUploadDialog",e)}return{onBeforeOpen:function(e){a=e.getSource();n.addDependent(a)},onAfterClose:function(e){n.removeDependent(a);a.destroy();a=undefined},onOk:function(e){l(true);var t=c("uploader");var a=new sap.ui.unified.FileUploaderParameter;a.setName("slug");a.setValue(o);t.removeHeaderParameter("slug");t.addHeaderParameter(a);var r=n._controller.extensionAPI._controller._oAppComponent.getManifestObject().resolveUri("/odata/v4/application/UploadXl/excel");t.setUploadUrl(r);t.checkFileReadable().then(function(){t.upload()}).catch(function(e){s("The file cannot be read.");l(false)})},onCancel:function(e){i()},onTypeMismatch:function(e){var t=e.getSource().getFileType().map(function(e){return"*."+e}).join(", ");s("The file type *."+e.getParameter("fileType")+" is not supported. Choose one of the following types: "+t)},onFileAllowed:function(e){r(true)},onFileEmpty:function(e){r(false)},onUploadComplete:function(e){var o=e.getParameter("status");var a=e.getSource();a.clear();r(false);l(false);if(o>=400){var c;try{c=JSON.parse(e.getParameter("responseRaw"))}catch(t){c=e.getParameter("responseRaw")}if(c&&c.error&&c.error.message){s(c.error.code,c.error.target,c&&c.error&&c.error.message)}}else{t.show("File read successfully");n.refresh();i();var d=sap.ui.xmlfragment("masterss.fragments.warning",this);d.open();setTimeout(function(){d.close()},3e3)}}}}return{Upload:function(e,t){debugger;this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Company_code")}).then(function(e){e.open()})},cost_Center:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Cost_center")}).then(function(e){e.open()})},currency:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Currency")}).then(function(e){e.open()})},default_Master:function(){debugger;this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Default_master")}).then(function(e){e.open()})},dept_Budget:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Dept_budget")}).then(function(e){e.open()})},department:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Department")}).then(function(e){e.open()})},gl_Account:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"G_L_Account")}).then(function(e){e.open()})},internal_Order:function(){this.loadFragment({id:"excelUploadDialog",name:"master.fragments.ExcelUploadDialog",controller:o(this,"Internal_order")}).then(function(e){e.open()})},item_Category:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Item_category")}).then(function(e){e.open()})},jurisdiction_Code:function(){this.loadFragment({id:"excelUploadDialog",name:"master.fragments.ExcelUploadDialog",controller:o(this,"Jurisdiction_code")}).then(function(e){e.open()})},material_Master:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Material_master")}).then(function(e){e.open()})},plant:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Plant")}).then(function(e){e.open()})},tax_Code:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Tax_code")}).then(function(e){e.open()})},unit_Measures:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Unit_Measures")}).then(function(e){e.open()})},vendor_Master:function(){this.loadFragment({id:"excelUploadDialog",name:"masterss.fragments.ExcelUploadDialog",controller:o(this,"Vendor_master")}).then(function(e){e.open()})},temp:function(){t.show("Custom handler invoked.")}}});
},
	"masterss/fragments/ExcelUploadDialog.fragment.xml":'  <core:FragmentDefinition xmlns:core="sap.ui.core"\n    xmlns:u="sap.ui.unified"\n    xmlns="sap.m"><Dialog id="_IDDialog"\n        title="Excel Upload"\n        class="sapUiResponsiveContentPadding"\n        beforeOpen=".onBeforeOpen"\n        afterClose=".onAfterClose"><content><Label id="textLabel" text="Table records will be Overridden" /></content><content><u:FileUploader id="uploader"\n                fileType="xlsx"\n                multiple="false"\n                uploadUrl="ApplicationService/UploadXl/excel"\n                fileAllowed=".onFileAllowed"\n                fileEmpty=".onFileEmpty"\n                uploadComplete=".onUploadComplete"\n                typeMissmatch=".onTypeMismatch"\n                sendXHR="true"\n                useMultipart="false"\n                placeholder="Choose a xlsx file..."\n                httpRequestMethod="Put" /></content><beginButton><Button id="ok"\n                text="OK"\n                press=".onOk"\n                type="Emphasized"\n                enabled="false" /></beginButton><endButton><Button id="cancel"\n                text="Cancel"\n                press=".onCancel" /></endButton></Dialog></core:FragmentDefinition>',
	"masterss/fragments/warning.fragment.xml":'<core:FragmentDefinition xmlns="sap.m" xmlns:core="sap.ui.core"><Dialog id="myDialog" title="Click On Save" draggable="true"><content><Text id="text" text=" Click on Save Button to save Records." /></content></Dialog></core:FragmentDefinition>',
	"masterss/i18n/i18n.properties":'# This is the resource bundle for masterss\n\n#Texts for manifest.json\n\n#XTIT: Application name\nappTitle=Masters\n\n#YDES: Application description\nappDescription=A Fiori application.',
	"masterss/manifest.json":'{"_version":"1.58.0","sap.app":{"id":"masterss","type":"application","i18n":"i18n/i18n.properties","applicationVersion":{"version":"0.0.1"},"title":"Masters","description":"{{appDescription}}","resources":"resources.json","sourceTemplate":{"id":"@sap/generator-fiori:lrop","version":"1.10.6","toolsId":"af5fadea-5982-4526-9703-803b7c8ace44"},"dataSources":{"mainService":{"uri":"odata/v4/application/","type":"OData","settings":{"annotations":[],"localUri":"localService/metadata.xml","odataVersion":"4.0"}}},"crossNavigation":{"inbounds":{"mastereliposo-display":{"semanticObject":"mastereliposo","action":"display","title":"Masters","subTitle":"","signature":{"parameters":{},"additionalParameters":"allowed"}}}}},"sap.ui":{"technology":"UI5","icons":{"icon":"","favIcon":"","phone":"","phone@2":"","tablet":"","tablet@2":""},"deviceTypes":{"desktop":true,"tablet":true,"phone":true}},"sap.ui5":{"flexEnabled":true,"dependencies":{"minUI5Version":"1.117.1","libs":{"sap.m":{},"sap.ui.core":{},"sap.ushell":{},"sap.fe.templates":{}}},"contentDensities":{"compact":true,"cozy":true},"models":{"i18n":{"type":"sap.ui.model.resource.ResourceModel","settings":{"bundleName":"masterss.i18n.i18n"}},"":{"dataSource":"mainService","preload":true,"settings":{"synchronizationMode":"None","operationMode":"Server","autoExpandSelect":true,"earlyRequests":true}},"@i18n":{"type":"sap.ui.model.resource.ResourceModel","uri":"i18n/i18n.properties"}},"resources":{"css":[]},"routing":{"routes":[{"pattern":":?query:","name":"Company_codeList","target":"Company_codeList"},{"pattern":"Company_code({key}):?query:","name":"Company_codeObjectPage","target":"Company_codeObjectPage"},{"pattern":"Cost_center({key}):?query:","name":"Cost_centerObjectPage","target":"Cost_centerObjectPage"},{"pattern":"Currency({key}):?query:","name":"CurrencyObjectPage","target":"CurrencyObjectPage"},{"pattern":"Jurisdiction_code({key}):?query:","name":"Jurisdiction_codeObjectPage","target":"Jurisdiction_codeObjectPage"},{"pattern":"G_L_Account({key}):?query:","name":"G_L_AccountObjectPage","target":"G_L_AccountObjectPage"},{"pattern":"Internal_order({key}):?query:","name":"Internal_orderObjectPage","target":"Internal_orderObjectPage"},{"pattern":"Item_category({key}):?query:","name":"Item_categoryObjectPage","target":"Item_categoryObjectPage"},{"pattern":"Plant({key}):?query:","name":"PlantObjectPage","target":"PlantObjectPage"},{"pattern":"Unit_Measures({key}):?query:","name":"Unit_MeasuresObjectPage","target":"Unit_MeasuresObjectPage"},{"pattern":"Tax_code({key}):?query:","name":"Tax_codeObjectPage","target":"Tax_codeObjectPage"},{"pattern":"Dept_budget({key}):?query:","name":"Dept_budgetObjectPage","target":"Dept_budgetObjectPage"},{"pattern":"Department({key}):?query:","name":"DepartmentObjectPage","target":"DepartmentObjectPage"},{"pattern":"Material_master({key}):?query:","name":"Material_masterObjectPage","target":"Material_masterObjectPage"},{"pattern":"Vendor_master({key}):?query:","name":"Vendor_masterObjectPage","target":"Vendor_masterObjectPage"},{"pattern":"Default_master({key}):?query:","name":"Default_masterObjectPage","target":"Default_masterObjectPage"}],"targets":{"Company_codeList":{"type":"Component","id":"Company_codeList","name":"sap.fe.templates.ListReport","options":{"settings":{"entitySet":"Company_code","variantManagement":"Page","navigation":{"Company_code":{"detail":{"route":"Company_codeObjectPage"}},"Cost_center":{"detail":{"route":"Cost_centerObjectPage"}},"Currency":{"detail":{"route":"CurrencyObjectPage"}},"Jurisdiction_code":{"detail":{"route":"Jurisdiction_codeObjectPage"}},"G_L_Account":{"detail":{"route":"G_L_AccountObjectPage"}},"Internal_order":{"detail":{"route":"Internal_orderObjectPage"}},"Item_category":{"detail":{"route":"Item_categoryObjectPage"}},"Plant":{"detail":{"route":"PlantObjectPage"}},"Unit_Measures":{"detail":{"route":"Unit_MeasuresObjectPage"}},"Tax_code":{"detail":{"route":"Tax_codeObjectPage"}},"Dept_budget":{"detail":{"route":"Dept_budgetObjectPage"}},"Department":{"detail":{"route":"DepartmentObjectPage"}},"Material_master":{"detail":{"route":"Material_masterObjectPage"}},"Vendor_master":{"detail":{"route":"Vendor_masterObjectPage"}},"Default_master":{"detail":{"route":"Default_masterObjectPage"}}},"initialLoad":"Enabled","views":{"paths":[{"key":"tableView","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView"},{"key":"tableView123","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Cost_center"},{"key":"tableView1","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Currency"},{"key":"tableView1234","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Default_master"},{"key":"tableView123456","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Dept_budget"},{"key":"tableView12345","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Department"},{"key":"tableView12","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"G_L_Account"},{"key":"tableView1234567","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Internal_order"},{"key":"tableView12345678","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Item_category"},{"key":"tableView11","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView1","entitySet":"Jurisdiction_code"},{"key":"tableView123456789","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Material_master"},{"key":"tableView12345678910","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Plant"},{"key":"tableView1234567891011","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Tax_code"},{"key":"tableView123456789101112","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Unit_Measures"},{"key":"tableView12345678910111213","annotationPath":"com.sap.vocabularies.UI.v1.SelectionPresentationVariant#tableView","entitySet":"Vendor_master"}],"showCounts":false},"controlConfiguration":{"@com.sap.vocabularies.UI.v1.LineItem":{"columns":{"DataField::code":{"width":"33%"},"DataField::description":{"width":"33%"},"DataField::tax_treatement":{"width":"33%"},"DataField::tax_treatment":{"width":"33%"}},"tableSettings":{"selectAll":false,"type":"ResponsiveTable","personalization":{"column":false,"filter":false},"enableExport":true},"actions":{"UploadButton":{"press":"masterss.controller.ExtensionController.Upload","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"},"DataFieldForAction::ApplicationService.EntityContainer::save":{"enableOnSelect":"single"}}},"/Cost_center/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"columns":{"DataField::description":{"width":"50%"},"DataField::code":{"width":"50%"}},"tableSettings":{"selectAll":false,"type":"ResponsiveTable","personalization":{"column":false},"quickVariantSelection":{"showCounts":false},"enableExport":true},"actions":{"CCUpload":{"press":"masterss.controller.ExtensionController.cost_Center","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Default_master/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"type":"GridTable","personalization":{"column":false},"enableExport":false}},"/Department/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"type":"ResponsiveTable","personalization":{"column":false},"enableExport":true},"columns":{"DataField::member_name":{"width":"18%"},"DataField::department_name":{"width":"18%"},"DataField::cost_center":{"width":"18%"},"DataField::gl_account":{"width":"18%"},"DataField::internal_order":{"width":"18%"},"DataField::default_master_check":{"width":"18%"}},"actions":{"dept":{"press":"masterss.controller.ExtensionController.department","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Dept_budget/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"type":"ResponsiveTable","personalization":{"column":false},"enableExport":true},"columns":{"DataField::department_name":{"width":"17%"},"DataField::budge":{"width":"18%"},"DataField::warning_per":{"width":"17%"},"DataField::limit_per":{"width":"17%"},"DataField::valid_to":{"width":"17%"},"DataField::valid_from":{"width":"17%"},"DataField::budget":{"width":"17%"}},"actions":{"Dbudget":{"press":"masterss.controller.ExtensionController.dept_Budget","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/G_L_Account/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"personalization":{"column":false},"type":"ResponsiveTable","enableExport":true},"columns":{"DataField::code":{"width":"50%"},"DataField::description":{"width":"50%"}},"actions":{"gl_Account":{"press":"masterss.controller.ExtensionController.gl_Account","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Internal_order/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"personalization":{"column":false},"type":"ResponsiveTable","enableExport":true},"columns":{"DataField::code":{"width":"50%"},"DataField::description":{"width":"50%"}},"actions":{"I_order":{"press":"masterss.controller.ExtensionController.internal_Order","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Item_category/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"personalization":{"column":false},"type":"ResponsiveTable","enableExport":true},"columns":{"DataField::code":{"width":"50%"},"DataField::description":{"width":"50%"}},"actions":{"item_category":{"press":"masterss.controller.ExtensionController.item_Category","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Jurisdiction_code/@com.sap.vocabularies.UI.v1.LineItem#tableView1":{"tableSettings":{"selectAll":false,"type":"ResponsiveTable","personalization":{"column":false},"enableExport":true},"columns":{"DataField::code":{"width":"50%"},"DataField::description":{"width":"50%"}},"actions":{"jurisdiction_code":{"press":"masterss.controller.ExtensionController.jurisdiction_Code","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Material_master/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"personalization":{"column":false},"type":"ResponsiveTable","enableExport":true},"columns":{"DataField::material_no":{"width":"14%"},"DataField::material_name":{"width":"20%"},"DataField::hsn_code":{"width":"13%"},"DataField::gst_per":{"width":"13%"},"DataField::unit_price":{"width":"13%"},"DataField::gl_account":{"width":"13%"},"DataField::uom":{"width":"13%"}},"actions":{"material_master":{"press":"masterss.controller.ExtensionController.material_Master","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Tax_code/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"type":"ResponsiveTable","personalization":{"filter":false},"enableExport":true},"columns":{"DataField::company_code":{"width":"25%"},"DataField::country":{"width":"20%"},"DataField::description":{"width":"25%"},"DataField::tax_per":{"width":"25%"},"DataField::tax_code":{"width":"25%"}},"actions":{"tax_code":{"press":"masterss.controller.ExtensionController.tax_Code","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Vendor_master/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"selectAll":false,"type":"GridTable","personalization":{"column":false},"enableExport":true},"actions":{"vendor_master":{"press":"masterss.controller.ExtensionController.vendor_Master","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Currency/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"columns":{"DataField::code":{"width":"50%"},"DataField::description":{"width":"50%"}},"tableSettings":{"type":"ResponsiveTable","personalization":{"column":false},"selectAll":false,"enableExport":true},"actions":{"Currency":{"press":"masterss.controller.ExtensionController.currency","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Plant/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"type":"ResponsiveTable","personalization":{"column":false},"selectAll":false,"enableExport":true},"columns":{"DataField::code":{"width":"50%"},"DataField::description":{"width":"50%"}},"actions":{"plant":{"press":"masterss.controller.ExtensionController.plant","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}},"/Unit_Measures/@com.sap.vocabularies.UI.v1.LineItem#tableView":{"tableSettings":{"type":"ResponsiveTable","personalization":{"column":false},"selectAll":false,"enableExport":true},"columns":{"DataField::code":{"width":"50%"},"DataField::description":{"width":"50%"}},"actions":{"unit_measures":{"press":"masterss.controller.ExtensionController.unit_Measures","visible":true,"enabled":true,"requiresSelection":false,"text":"Import Entries"}}}},"hideFilterBar":true}}},"Company_codeObjectPage":{"type":"Component","id":"Company_codeObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"editableHeaderContent":false,"entitySet":"Company_code","content":{"header":{"anchorBarVisible":true,"visible":true},"body":{"sections":{}}}}}},"Cost_centerObjectPage":{"type":"Component","id":"Cost_centerObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Cost_center","navigation":{},"content":{"header":{"visible":true,"anchorBarVisible":true}},"editableHeaderContent":false}}},"CurrencyObjectPage":{"type":"Component","id":"CurrencyObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Currency","navigation":{},"editableHeaderContent":false}}},"Jurisdiction_codeObjectPage":{"type":"Component","id":"Jurisdiction_codeObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Jurisdiction_code","navigation":{},"editableHeaderContent":false}}},"G_L_AccountObjectPage":{"type":"Component","id":"G_L_AccountObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/G_L_Account","navigation":{},"editableHeaderContent":false}}},"Internal_orderObjectPage":{"type":"Component","id":"Internal_orderObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Internal_order","navigation":{},"content":{"header":{"anchorBarVisible":true,"visible":true}},"editableHeaderContent":false}}},"Item_categoryObjectPage":{"type":"Component","id":"Item_categoryObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Item_category","navigation":{},"content":{"header":{"visible":true}},"editableHeaderContent":false}}},"PlantObjectPage":{"type":"Component","id":"PlantObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Plant","navigation":{},"editableHeaderContent":false}}},"Unit_MeasuresObjectPage":{"type":"Component","id":"Unit_MeasuresObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Unit_Measures","navigation":{},"editableHeaderContent":false}}},"Tax_codeObjectPage":{"type":"Component","id":"Tax_codeObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Tax_code","navigation":{},"editableHeaderContent":false,"content":{"header":{"visible":true}}}}},"Dept_budgetObjectPage":{"type":"Component","id":"Dept_budgetObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Dept_budget","navigation":{},"content":{"header":{"anchorBarVisible":true,"visible":true}},"editableHeaderContent":false}}},"DepartmentObjectPage":{"type":"Component","id":"DepartmentObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Department","navigation":{},"content":{"header":{"visible":true}},"editableHeaderContent":false}}},"Material_masterObjectPage":{"type":"Component","id":"Material_masterObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Material_master","navigation":{},"editableHeaderContent":false}}},"Vendor_masterObjectPage":{"type":"Component","id":"Vendor_masterObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Vendor_master","navigation":{},"editableHeaderContent":false}}},"Default_masterObjectPage":{"type":"Component","id":"Default_masterObjectPage","name":"sap.fe.templates.ObjectPage","options":{"settings":{"contextPath":"/Default_master","navigation":{},"editableHeaderContent":false}}}}},"extends":{"extensions":{"sap.ui.controllerExtensions":{}}}},"sap.fiori":{"registrationIds":[],"archeType":"transactional"},"sap.cloud":{"public":true,"service":"masterss"}}'
}});
