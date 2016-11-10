sap.ui.define(["sap/ui/core/mvc/Controller"], function(Controller) {
	"use strict";
	return Controller.extend("com.sap.training.controller.Main", {
		onInit: function() {},
		ratingChange: function(oControlEvent) {
			var nValue = oControlEvent.getParameter("value");
			jQuery.sap.log.info("Value: " + nValue);
			var oText = this.getView().byId("idText");
			var oI18nModel = this.getView().getModel("i18n");
			var oBundle = oI18nModel.getResourceBundle();
			var aArgs = [];
			aArgs.push(nValue);
			aArgs.push("10");
			var sText = oBundle.getText("flightRatingMessage", aArgs);
			oText.setText(sText);
		},
		/**
		 *@memberOf com.sap.training.controller.Main
		 */
		languageChange: function(oControlEvent) {
			//This code was generated by the layout editor.
			var sLang = oControlEvent.getParameter("selectedItem").getKey();
			var oConfig = sap.ui.getCore().getConfiguration();
			oConfig.setLanguage(sLang);
			
		}
	});
});