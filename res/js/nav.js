/** tipiX - TIme PIcture eXplorer
 *
 * Copyright (c) 2013 TIPIX <adalca@mit.edu>
 *
 * tipiX is licensed under the MIT License:
 * http://www.opensource.org/licenses/mit-license.php
 *
 * See LICENSE file for more information
 *
 * Author: Adrian V. Dalca, http://www.mit.edu/~adalca/
 */


$(document).ready(function(){

  // navigation
  $('#sets-container').hide();
  $('#userSet-container').hide();
  $('#todos-container').hide();

  // hide preview matrix link
  document.getElementById('previewMatrixLink').style.display = 'none';

  if (tipix.consts.html.gui.centerPanel.display) {
    // show selected tab
    tabName = currentTab + '-tab';
    document.getElementById(tabName).style.display = 'inline-block';

    // highlight selected tab title
    tabTitle = currentTab + '-tab-title';
    document.getElementById(tabTitle).style.lineHeight = '20px';
    document.getElementById(tabTitle).style.paddingBottom = '2px';
    document.getElementById(tabTitle).style.borderBottom = '3px solid #0370ea';
  } else {
    document.getElementById('tab-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'none';
  }

  // form hide yBins by default
  $('#yBins').hide();
  $('#userSet').change(function() {
    if ($('#nDims2').prop('checked')) {
      $('#yBins').show();
    } else {
      $('#yBins').hide();
    }
  });
});





function nav(newTabName) {
  // if different tab:

  if (currentTab != newTabName) {
    // hide current tab
    var tabName = currentTab + '-tab';
    document.getElementById(tabName).style.display = 'none';

    // un-highlight current tab title
    var tabTitle = currentTab + '-tab-title';
    document.getElementById(tabTitle).style.lineHeight = '20px';
    document.getElementById(tabTitle).style.paddingBottom = '2px';
    document.getElementById(tabTitle).style.borderBottom = '3px solid #008dfd';

    // show selected tab
    tabName = newTabName + '-tab';
    document.getElementById('menu-container').style.display = 'inline';
    document.getElementById('tab-container').style.display = 'inline';
    document.getElementById(tabName).style.display = 'inline-block';

    // highlight selected tab title
    tabTitle = newTabName + '-tab-title';
    document.getElementById(tabTitle).style.lineHeight = '20px';
    document.getElementById(tabTitle).style.paddingBottom = '2px';
    document.getElementById(tabTitle).style.borderBottom = '3px solid #0370ea';

    // updated currentTab
    currentTab = newTabName;
    state.gui.centerPanel.display = true;

  } else if (state.gui.centerPanel.display == true) {
    // hide current tab
    var tabName = currentTab + '-tab';
    document.getElementById(tabName).style.display = 'none';
    document.getElementById('tab-container').style.display = 'none';
    document.getElementById('menu-container').style.display = 'none';

    // un-highlight current tab title
    var tabTitle = currentTab + '-tab-title';
    document.getElementById(tabTitle).style.lineHeight = '20px';
    document.getElementById(tabTitle).style.paddingBottom = '2px';
    document.getElementById(tabTitle).style.borderBottom = '3px solid #008dfd';

    state.gui.centerPanel.display = false;

  } else if (state.gui.centerPanel.display == false) {
    // show selected tab
    tabName = currentTab + '-tab';
    document.getElementById('menu-container').style.display = 'inline';
    document.getElementById('tab-container').style.display = 'inline';
    document.getElementById(tabName).style.display = 'inline-block';

    // highlight selected tab title
    tabTitle = currentTab + '-tab-title';
    document.getElementById(tabTitle).style.lineHeight = '20px';
    document.getElementById(tabTitle).style.paddingBottom = '2px';
    document.getElementById(tabTitle).style.borderBottom = '3px solid #0370ea';

    state.gui.centerPanel.display = true;

  }
}



function navLoad(newTabName) {
  // if different tab:

  if (currentLoadTab != newTabName) {

    if (currentLoadTab != '') {
      // hide current tab
      var tabName = 'load-' + currentLoadTab;
      document.getElementById(tabName).style.display = 'none';

      // un-highlight current tab title
      var tabTitle = 'load-' + currentLoadTab + '-title';
      document.getElementById(tabTitle).style.borderBottom = '0px solid #008dfd';
    }

    // show selected tab
    tabName = 'load-' + newTabName;
    document.getElementById('menu-container').style.display = 'inline';
    document.getElementById('tab-container').style.display = 'inline';
    document.getElementById(tabName).style.display = 'inline-block';

    // highlight selected tab title
    var tabTitle = 'load-' + newTabName + '-title';
    document.getElementById(tabTitle).style.borderBottom = '3px solid #0370ea';

    // updated currentTab
    currentLoadTab = newTabName;
  }
}