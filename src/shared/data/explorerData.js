export default class ExplorerData {
    activeProjectId;
    activeProject;
    activeTabId = 0;
    alert = false;
    alertmsg = '';
    alerttype = 1;
    selectedItemDetails = {
      path: '',
    };
    spinner = false;
    load = false;
    tabType = {
      "0": "Apps",
      "1": "Folder",
      "2": "Template",
      "3": "ftl",
      "4": "Swagger Spec",
      "5": "apidoc",
      "6": "Admin Portal"
    }
    tabs = [
      {
        "desc": "Home",
        "type": "1",
        "path": "/Home",
        "tabPrev": false,
        "tabNext": false,
        "prev": false,
        "next": false,
        "save": false,
        "bookmark": true,
        "locked": true,
        "error": false,
        "tabDesc": "Folder",
        "explorer": true,
        "list": false,
        "id":"FE_0000001"
      }
    ];
  
    explorerMenu = [
      {
        name: "Home",
        id: "1234567890",
        path: "/Home",
        children: [
        ],
      }
    ];
}