import ExplorerData from "../data/explorerData";

export default class ExplorerService {
    explorerData;
    constructor(){
        this.explorerData = new ExplorerData();
        this.clearTabs();
    }

    clearTabs(){
        this.explorerData.tabs = [
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
    }
}