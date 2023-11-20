sap.ui.define(["sap/m/MessageBox", "sap/m/MessageToast", "sap/ui/core/UIComponent"],
    function (MessageBox, MessageToast, UIComponent) {
        "use strict";
        function _createUploadController(oExtensionAPI, Entity) {
            var oUploadDialog;

            function setOkButtonEnabled(bOk) {
                oUploadDialog && oUploadDialog.getBeginButton().setEnabled(bOk);
            }

            function setDialogBusy(bBusy) {
                oUploadDialog.setBusy(bBusy)
            }

            function closeDialog() {
                oUploadDialog && oUploadDialog.close()
            }

            function showError(code, target, sMessage) {
                MessageBox.error("Upload failed", { title: "Error" })
            }

            function byId(sId) {
                return sap.ui.core.Fragment.byId("excelUploadDialog", sId);
            }

            return {
                onBeforeOpen: function (oEvent) {
                    oUploadDialog = oEvent.getSource();
                    oExtensionAPI.addDependent(oUploadDialog);
                },

                onAfterClose: function (oEvent) {
                    oExtensionAPI.removeDependent(oUploadDialog);
                    oUploadDialog.destroy();
                    oUploadDialog = undefined;
                },





                onOk: function (oEvent) {

                    setDialogBusy(true)
                    var oFileUploader = byId("uploader");
                    var headPar = new sap.ui.unified.FileUploaderParameter();
                    headPar.setName('slug');
                    headPar.setValue(Entity);
                    oFileUploader.removeHeaderParameter('slug');
                    oFileUploader.addHeaderParameter(headPar);
                    var sUploadUri = oExtensionAPI._controller.extensionAPI._controller._oAppComponent.getManifestObject().resolveUri("/odata/v4/application/UploadXl/excel")
                    oFileUploader.setUploadUrl(sUploadUri);
                    oFileUploader
                        .checkFileReadable()
                        .then(function () {
                            oFileUploader.upload();
                        })
                        .catch(function (error) {
                            showError("The file cannot be read.");
                            setDialogBusy(false)
                        })
                },

                onCancel: function (oEvent) {
                    closeDialog();
                },

                onTypeMismatch: function (oEvent) {
                    var sSupportedFileTypes = oEvent
                        .getSource()
                        .getFileType()
                        .map(function (sFileType) {
                            return "*." + sFileType;
                        })
                        .join(", ");

                    showError(
                        "The file type *." +
                        oEvent.getParameter("fileType") +
                        " is not supported. Choose one of the following types: " +
                        sSupportedFileTypes
                    );
                },

                onFileAllowed: function (oEvent) {
                    setOkButtonEnabled(true)
                },

                onFileEmpty: function (oEvent) {
                    setOkButtonEnabled(false)
                },

                onUploadComplete: function (oEvent) {
                    var iStatus = oEvent.getParameter("status");
                    var oFileUploader = oEvent.getSource()

                    oFileUploader.clear();
                    setOkButtonEnabled(false)
                    setDialogBusy(false)

                    if (iStatus >= 400) {
                        var oRawResponse;
                        try {
                            oRawResponse = JSON.parse(oEvent.getParameter("responseRaw"));
                        } catch (e) {
                            oRawResponse = oEvent.getParameter("responseRaw");
                        }
                        if (oRawResponse && oRawResponse.error && oRawResponse.error.message) {
                            showError(oRawResponse.error.code, oRawResponse.error.target, oRawResponse && oRawResponse.error && oRawResponse.error.message);
                        }
                    } else {


                        MessageToast.show("File read successfully");
                        oExtensionAPI.refresh()
                        closeDialog();

                        
                        var oFragment = sap.ui.xmlfragment("masterss.fragments.warning", this);

                        // Open the dialog
                        oFragment.open();

                        setTimeout(function () {
                            oFragment.close();
                          }, 4000);
                          setTimeout(function () {
                            location.reload();
                          }, 5000); 
                          
                          

                    }
                }
            };
        };

        return {

            Upload: function (oBindingContext, aSelectedContexts) {
                debugger
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Company_code')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            cost_Center: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Cost_center')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            currency: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Currency')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            default_Master: function() {
                debugger
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Default_master')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            dept_Budget: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Dept_budget')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            department: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Department')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            gl_Account: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'G_L_Account')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            internal_Order: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "master.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Internal_order')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            item_Category: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Item_category')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            jurisdiction_Code: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "master.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Jurisdiction_code')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            material_Master: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Material_master')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            plant: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Plant')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            tax_Code: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Tax_code')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            unit_Measures: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Unit_Measures')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
            vendor_Master: function() {
                this.loadFragment({
                    id: "excelUploadDialog",
                    name: "masterss.fragments.ExcelUploadDialog",
                    controller: _createUploadController(this,'Vendor_master')
                }).then(function (oDialog) {
                    oDialog.open();
                });
            },
        };
    });