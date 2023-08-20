import ExplorerData from "../data/explorerData";

export default class ExplorerService {
    explorerData;
    constructor(){
        this.explorerData = new ExplorerData();
        this.clearTabs();
    }

    addNewTab(path,name,desc,type,id){
      let tabjson = {
        "desc":name,
        "type":type,
        "id":id,
        "path":path,
        "tabPrev":false,
        "tabNext":false,
        "prev":false,
        "next":false,
        "save":false,
        "bookmark":false,
        "locked":false,
        "error":false,
        "tabDesc":desc,
        "explorer":true,
        "list":false,
      }
      this.explorerData.tabs.push(tabjson);
    }

    closeTab(tabIndex){

      if(this.explorerData.tabs.length === 1) return;
      if(this.explorerData.activeTabId === tabIndex){
        if(tabIndex>0){
          this.openTab(tabIndex-1);
        }else{
          this.openTab(tabIndex);
        }
      }else if(this.explorerData.activeTabId<tabIndex){
        // no need to change active tabId
        this.openTab(this.explorerData.activeTabId);
      }else{
        this.openTab(this.explorerData.activeTabId-1);
      }
      this.explorerData.tabs.splice(tabIndex,1);
    }

    openTab(tabIndex){
      this.explorerData.activeTabId = tabIndex;
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