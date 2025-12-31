sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageBox",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/BindingMode"



], (Controller, MessageBox, JSONModel, BindingMode) => {
    "use strict";

    return Controller.extend("sample.project1.controller.View1", {
        onInit() {

            // MessageBox.error("OnInit")
            // console.log("test")



            let oData = {
                "name": "Gunalan"
            }


            let oModel = new JSONModel(oData);
            // oModel.setDefaultBindingMode(BindingMode.OneWay);
            this.getView().setModel(oModel, "model1");









            // let oData = {
            //     "recipient": {
            //         "name": "guna"
            //     }
            // }

            // let oModel = new JSONModel(oData);
            // oModel.setDefaultBindingMode(BindingMode.OneWay);

            // this.getView().setModel(oModel);

            // alert("init")

        },
        // onBeforeRendering() {
        //    alert("before")
        // },
        // onAfterRendering() {
        //         console.log("ghdc")
        // },
        // onExit() {
        //         console.log("ghdc")
        // },

        // onPress: function () {
        //     const oBundle = this.getView().getModel("i18n").getResourceBundle();
        //     const sRecipient = this.getView().getModel().getProperty("/recipient/name");
        //     // const sMsg = oBundle.getText("helloMsg", [sRecipient]);
        //     const sMsg = oBundle.getText("helloMsg");

        //     // show message
        //     MessageToast.show(`${sMsg} ${sRecipient}`);
        //     //  MessageToast.show(sMsg);


        // }

        // onPress: function () {
        //     const oModel = this.getView().getModel("manifestModel");
        //     const aData = this.getView().getModel("manifestModel").getData().AddressCollection;

        //     const oData = {
        //         "Name": oModel.getProperty("/SupplierName"),
        //         "StreetNo": oModel.getProperty("/HouseNumber"),
        //         "Code": oModel.getProperty("/City")
        //     }
        //     // aData.push({

        //     //     "Name": "aed",
        //     //     "StreetNo": "1/123",
        //     //     "Code": "MM01"

        //     // });
        //     aData.push(oData);
        //     oModel.refresh(true);


        // },

        // onCheckBoxSelect: function (oEvent) {
        //     let bFixedLayout = oEvent.getParameter("selected");
        //     let oTable = oEvent.getSource().getParent().getParent();
        //     let oTable1 = this.getView().byId("addresstable");
        //     oTable1.setFixedLayout(bFixedLayout);
        // },


        // onBeforeRendering(){
        //       alert("Before")
        // },

        // onAfterRendering(){
        //      alert("after")
        // }
        onPress: function (oEvent) {
            const oModel  = this.getView().getModel("manifestModel");
            const aData = oModel.getProperty("/AddressInfo");
            const sData = "hi";
            // aData.push({

            //     "Name": "Ted",
            //     "Street": "Brookfield",
            //     "ZIPCode": "630306"

            // });

                aData.push({

                "Name": oModel.getProperty("/SupplierName"),
                "Street": oModel.getProperty("/Street"),
                "ZIPCode":oModel.getProperty("/ZIPCode"),

            });



            oModel.refresh(true);
        },
		onCheckBoxSelect: function (oEvent) {
			var bFixedLayout = oEvent.getParameter("selected");
			var oTable = oEvent.getSource().getParent().getParent();
            let oTable1 = this.getView().byId("tableAddress");
			oTable.setFixedLayout(bFixedLayout);
		},
    });
});