//
// For guidance on how to add JavaScript see:
// https://prototype-kit.service.gov.uk/docs/adding-css-javascript-and-images
//

window.GOVUKPrototypeKit.documentReady(() => {
  // Add JavaScript here

    var $header = document.querySelector('[data-module="govuk-header"]');
    new GOVUK.Modules.Header($header).init();
})

function CopyCodeButton($module) {
  this.$module = $module;
}

CopyCodeButton.prototype.init = function () {
  if (!this.$module) {
    return;
  }

  this.$module.addEventListener('click', (event) => {
    event.preventDefault();
    let code;
    this.$module.textContent = 'Paragraph copied';
    setTimeout(() => {
      this.$module.textContent = 'Copy paragraph';
    }, 2000);
    navigator.clipboard.writeText(this.$module.dataset.copyText);
  });
};

document.querySelectorAll('.app-example__copy-code-button').forEach((button) => {
  new CopyCodeButton(button).init();
});
