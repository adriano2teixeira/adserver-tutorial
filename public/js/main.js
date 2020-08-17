/**
 * 1. Get Zone Tags
 */

// 1. Get Zone Tags
var zoneTagButton = document.getElementById("zone-tag-button");
var zoneTagArea = document.getElementById("zone-tag-area");
var zoneTagTypeSelect = document.getElementById("zone-tag-type-select");

if (zoneTagButton) {
  // Updates zone tag from textarea
  function updateClipboard() {
    var type = zoneTagTypeSelect.options[zoneTagTypeSelect.selectedIndex].value;
    var zoneID = new URLSearchParams(window.location.search).get("zone_id");
    var host = "http://" + window.location.hostname + ((window.location.port) ? (":" + window.location.port) : "");
    
    switch(type) {
      case "js": {
        zoneTagArea.innerHTML
        = '<script type="text/javascript">\n'
        + 'var absrc = "'+host+'/adserve?zone_id='+zoneID+'&type=js";\n'
        + 'document.write("<scr"+"ipt src="+absrc+" type=\'text/javascript\'></scr"+"ipt>");\n'
        + '</script>';
      }
      break;
      case "iframe": {

      }
      break;
      case "json": {
        zoneTagArea.innerHTML = host + '/adserve?zone_id='+zoneID+'&type=json';
      }
      break;
    }
  }
  
  zoneTagTypeSelect.addEventListener("change", function() {
    return updateClipboard();
  });

  updateClipboard();
}