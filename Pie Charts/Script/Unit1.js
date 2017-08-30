function Test2()
{
  //Clicks the 'buttonCreateATest' button.
  Aliases.browser.TestExplorer.panelFadeContainer.buttonCreateATest.ClickButton();
  //Sets the text 'Automation3' in the 'textbox' text editor.
  Aliases.browser.pageEsgi4.panelFadeContainer.textbox.SetText("Automation4");
  //Sets the Checked property of the 'checkboxShareWithDistrict' check box to False.
  Aliases.browser.TestExplorer.panelModalInnerControl.panelTestDetailEdit.checkboxShareWithDistrict.ClickChecked(false);
  //Clicks the %p1 button of the 'buttonClose' modal dialog.
  Aliases.browser.pageEsgi4.panelFadeContainer.panelSpreadsheet.buttonClose.ClickButton();
  //Moves the mouse pointer over the 'buttonClose' control.
  Aliases.browser.pageEsgi4.panelFadeContainer.panelSpreadsheet.buttonClose.HoverMouse(40, 20);
  //Clicks at point (380, 49) of the 'panelModalHeader' object.
  Aliases.browser.pageEsgi4.modalPleaseConfirmYourTimeZone.table.cell.panelModalDialog.panelModalContent.panelModalHeader.Click(380, 49);
  //Clicks the %p1 button of the 'buttonCloseWithoutSaving' modal dialog.
  Aliases.browser.pageEsgi4.modalPleaseConfirmYourTimeZone.table.cell.panelModalDialog.panelModalContent.panelModalHeader.panelAreYouSureYouWantToDeleteTh.buttonCloseWithoutSaving.ClickButton();
}