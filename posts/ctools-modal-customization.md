# How to use and modify ctools modal

### Problem Statement: How to modify html of ctools modal box ?

### Solution:

_Note: I'm assuming that you already know how to use default ctools modals. If not then, I have [created a module](https://github.com/crazyrohila/ctools_custom_modal "created a module") to show how to use ctools modal and how to modify html of modalbox._

We have to follow simple 4 steps.

* Define a new class instance in module, which will trigger our new modalbox.

```php
drupal_add_js(array(
  'custom-popup-class' => array(
    'modalSize' => array(
      'type' => 'fixed',
      'width' => 500,
      'height' => 300,
    ),
    'modalOptions' => array(
      'opacity' => .9,
      'background-color' => '#000',
    ),
  ),
), 'setting');
```

* Assign new `modalTheme` function.

```php
drupal_add_js(array(
  'custom-popup-class' => array(
    'modalSize' => array(
      'type' => 'fixed',
      'width' => 800,
      'height' => 400,
    ),
    'modalOptions' => array(
      'opacity' => .9,
      'background-color' => '#333',
    ),
    'modalTheme' => 'ctools_custom_modal_html',
    'closeText' => 'X',
    'closeImage' => '',
  ),
), 'setting');
```

* Now create same function (from step-2 eg. `ctools_custom_modal_html`) in `Drupal.theme` in js file and render your modalbox.

```js
Drupal.theme.prototype.ctools_custom_modal_html = function () {
  var html = '';
  html += '<div id="ctools-modal" class="ctools-modal-custom">';
  html += '  <div class="ctools-modal-content ctools-modal-custom-help-content">';
  html += '    <div class="modal-header">';
  html += '      <span class="popups-close"><a class="close" href="#">' + Drupal.CTools.Modal.currentSettings.closeImage + '</a></span>';
  html += '      <div class="modal-title">Help</div>';
  html += '    </div>';
  html += '    <div class="modal-scroll"><div id="modal-content" class="modal-content modal-content-custom"></div></div>';
  html += '  </div>';
  html += '</div>';
  return html;
}
```

* Clear Cache.

Now create a link with class name `ctools-modal-custom-popup-class` and your new modal will be used.

You can go through the [code/module on github](https://github.com/crazyrohila/ctools_custom_modal "code/module on github") to see how this code is working together. [Download the module](https://github.com/crazyrohila/ctools_custom_modal "Download the module"), enable it on drupal-7 and enable `ctools custom modals` block (admin/structure/block) in any region. There will be two links in this block, one for default modal and other for new modal. Use the links and see modal working.
