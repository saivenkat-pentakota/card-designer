import ExplorerData from "../data/explorerData";
import FireBase from "../service/firebaseService";
import GeneratorService from "../service/generatorService";

export default class ExplorerService {
    explorerData;
    explorerMenu;
    activeExplorerItems;
    generatorService;
    constructor(){
        this.explorerData = new ExplorerData();
        this.generatorService = new GeneratorService();
        this.explorerMenu = [];
        this.activeExplorerItems = [];
        this.clearTabs();
    }

    async refreshExplorer(){
      this.explorerMenu = await this.getExplorerMenu("/");
      this.activeExplorerItems = this.getItems();
    }

    async getExplorerMenu(pid){
      let explorerMenu = [];
      if(!pid){
        return explorerMenu;
      }
      const db = FireBase.firestore();
      await db.collection("userExplorerDetails/lkzujvHDpUUQsrPHcUMJ/explorerDetails/").get()
        .then((docRef) => {
          let docs = [];
          docRef.forEach((doc)=>{
            docs.push(doc.data())
          });
          explorerMenu = this.getExplorerItemsFromFirestoreData(docs, pid);
        })
        .catch((error) => {
            console.error("Error adding document: ", pid);
        });
      return explorerMenu;
    }

    getExplorerItemsFromFirestoreData(data, pid){
      let explorerItems = []
        let docData = data.filter(doc=>{return doc.pid === pid});
        if(docData){
          docData.forEach((doc)=>{
            doc['children'] = this.getExplorerItemsFromFirestoreData(data, doc['id']);
            explorerItems.push(doc);
          });
        }
      return explorerItems;
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

    async closeTab(tabIndex){

      if(this.explorerData.tabs.length === 1) return;
      if(this.explorerData.activeTabId === tabIndex){
        if(tabIndex>0){
          await this.openTab(tabIndex-1);
        }else{
          await this.openTab(tabIndex);
        }
      }else if(this.explorerData.activeTabId<tabIndex){
        // no need to change active tabId
        await this.openTab(this.explorerData.activeTabId);
      }else{
        await this.openTab(this.explorerData.activeTabId-1);
      }
      this.explorerData.tabs.splice(tabIndex,1);
    }

    async openTab(tabIndex){
      this.explorerData.activeTabId = tabIndex;
      await this.refreshExplorer();
    }

    async openInSameTab(itemDetails){
      if (await this.checkTabs(itemDetails.id)) {
        return;
      }else{
        this.addNewTab(itemDetails.path, itemDetails.name, itemDetails.desc, itemDetails.type,itemDetails.id);
        await this.openTab(this.explorerData.tabs.length-1);
      }
    }

    async checkTabs(id){
      for(let i = 0;i<this.explorerData.tabs.length;i++){
        if(this.explorerData.tabs[i].id === id){
          await this.openTab(i);
          return true;
        }
      }
      return false;
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

    getItems(){
      let itemId  = this.explorerData.tabs[this.explorerData.activeTabId].id;
      let details = this.getFileChildrens(this.explorerMenu,itemId);
      return details == null? []:details;
    }
  
    getFileChildrens(itemDetails, itemId) {
      for (let i = 0; i < itemDetails.length; i++) {
        if (itemDetails[i]) {
          if (itemDetails[i].id === itemId) {
            return itemDetails[i].children;
          }
          let details = this.getFileChildrens(itemDetails[i].children, itemId);
          if (details != null) {
            return details;
          }
        }
      }
      return null;
    }
  
    addNewFolder(){
      let name = "NewFolder"+this.getNewFolderCount("NewFolder");
      let fileDetails = {
        id:this.generatorService.getId(),
        name : name,
        type :"1",
        pid:this.explorerData.tabs[this.explorerData.activeTabId].id,
      }
      this.createNewFolder(fileDetails);
    }

    getNewFolderCount(value){

      let items = this.getItems();
      let counter = 0;
      for(let i = 0;i<items.length;i++){
        if(items[i].name.split(".")[0].indexOf(value)>-1)
          counter++;
      }
  
      return counter === 0?"":"("+counter+")";
    }

    createNewFolder(fileDetails){
      const db = FireBase.firestore();
      db.collection("userExplorerDetails/lkzujvHDpUUQsrPHcUMJ/explorerDetails/").doc(fileDetails.id).set(fileDetails)
        .then((docRef) => {
            console.log("Document written with ID: ", docRef.id);
        })
        .catch((error) => {
            console.error("Error adding document: ", error);
        });
    }

}