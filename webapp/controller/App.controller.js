sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("com.acn.training.project1.controller.App", {

    onInit() {
     
    },

    onClearPress() {
      const oView = this.getView();

      oView.byId("InputName")?.setValue("");
      oView.byId("InputStreetNo1")?.setValue("");
      oView.byId("InputStreetNo2")?.setValue("");
      oView.byId("InputZip1")?.setValue("");
      oView.byId("InputZip2")?.setValue("");
      
      oView.byId("ComboBoxCountry")?.setSelectedKey("");
    }

  });
});
