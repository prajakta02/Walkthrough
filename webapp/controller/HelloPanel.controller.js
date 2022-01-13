sap.ui.define([
	"sap/ui/core/mvc/Controller",
	"sap/m/MessageToast",
	"sap/ui/core/Fragment"
],
	/**
	 * @param {typeof sap.ui.core.mvc.Controller} Controller
	 */
	function (Controller,MessageToast, Fragment) {
		"use strict";

		return Controller.extend("com.learn.walkthrough.controller.HelloPanel", {
            onPress: function(){
				var oBundle = this.getView().getModel("i18n").getResourceBundle();
				var sRecipient = this.getView().getModel().getProperty("/recipient/name");
				var sMsg = oBundle.getText("helloMsg", [sRecipient]);
				
				MessageToast.show(sMsg);
			},
			onOpenDialog : function () {
				this.getOwnerComponent().openHelloDialog();
			},
			
        });
});