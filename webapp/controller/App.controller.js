sap.ui.define([
  "sap/ui/core/mvc/Controller"
], (BaseController) => {
  "use strict";

  return BaseController.extend("com.acn.training.project1.controller.App", {

    onInit() {
     
    },

    onClearPress() {
      const oView = this.getView();

      oView.byId("input0")?.setValue("");
      oView.byId("input2")?.setValue("");
      oView.byId("input3")?.setValue("");
      oView.byId("input4")?.setValue("");
      oView.byId("input5")?.setValue("");
      oView.byId("select0")?.setSelectedKey(null);

    }

  });
});
