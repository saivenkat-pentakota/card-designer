import React from "react";
import "./explorer.css";
import menuSvg from "../../assets/images/explorer/menu.svg";
import lineItemSvg from "../../assets/images/explorer/line item.svg";
import unlockSvg from "../../assets/images/tabs/unlock.svg";
import ExplorerService from "../../shared/service/explorerService";
import ExplorerData from "../../shared/data/explorerData";
import folderClose from "../../assets/images/menu/folderclose.svg";
import folderOpen from "../../assets/images/menu/folderopen.svg";
import designer from "../../assets/images/explorer/designer.svg";


const tabContentMargin ={
  "--tab-content-margi":"9px",
}

class Explorer extends React.Component{
  explorerService;
  constructor(){
    super();
    this.explorerService = new ExplorerService();
    this.state = {
      explorerMenu : [],   
      activeExplorerItems:[], 
      explorerData:new ExplorerData(),  
      tabWidth:258,
    }  
    this.refreshExplorer();  
  }  

  async refreshExplorer(){
    await this.explorerService.refreshExplorer();
    this.setState({
      explorerMenu : this.explorerService.explorerMenu,   
      activeExplorerItems:this.explorerService.activeExplorerItems, 
      explorerData:this.explorerService.explorerData,  
    });
    this.realignTabs();
  }

  async addNewFolder(event){
    event.preventDefault(); 
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    await this.explorerService.addNewFolder();
    await this.refreshExplorer();
  }


  async openinSameTab(event,itemDetails){
    event.preventDefault(); 
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    await this.explorerService.openInSameTab(itemDetails)
    await this.setState({
      explorerMenu : this.explorerService.explorerMenu,   
      activeExplorerItems:this.explorerService.activeExplorerItems, 
      explorerData:this.explorerService.explorerData,  
    });
  }


  realignTabs(){
    let width = (window.innerWidth/this.state.explorerData.tabs.length+15);
    this.setState({tabWidth:width<258?width:258});
  }

  async updateActiveTabId(tabIndex){
    this.explorerService.openTab(tabIndex);
    await this.refreshExplorer();
  }

  async closeTab(e,tabIndex){
    e.preventDefault();
    e.stopPropagation();
    e.nativeEvent.stopImmediatePropagation();
    await this.explorerService.closeTab(tabIndex); 
    this.setState({
      explorerMenu : this.explorerService.explorerMenu,   
      activeExplorerItems:this.explorerService.activeExplorerItems, 
      explorerData:this.explorerService.explorerData,  
    });
    this.realignTabs();    
  }

  getExplorerItems(){
    let explorerItems = [];
    this.getFileChildrens(this.explorerMenu,explorerItems);
    return explorerItems;
  }

  getFileChildrens(itemDetails,output) {
    for (let i = 0; i < itemDetails.length; i++) {
      if (itemDetails[i]) {
        let details = this.getFileChildrens(itemDetails[i].children,output);
        if (details != null) {
          return details;
        }
      }
    }
    return null;
  }

  getExplorerItemImg(item){
    if(item.type === "1" && item.openChild && item.openChild === true){
      return <img src={folderOpen} alt="folderOpen"></img>  
    } else if(item.type === "1" && item.openChild && item.openChild === true){
      return <img src={folderClose} alt="folder"></img>  
    }
    return <img src={folderClose} alt="folder"></img>  
  }

  getPath(){
    if(this.state.explorerData.tabs[this.state.explorerData.activeTabId])
      return this.state.explorerData.tabs[this.state.explorerData.activeTabId].path
    else
      return "";
  }

  getleftSideMenu(itemDetails){
    let sideMenu = [];
      if(!itemDetails || itemDetails.length === 0) return sideMenu;
      sideMenu.push(<ul class="directory-list">
        {(() => {
          let subMenuChild = [];
          for(let itemIndex=0;itemIndex<itemDetails.length;itemIndex++){
            subMenuChild.push(
            <li onDoubleClick={(e)=>{this.openinSameTab(e,itemDetails[itemIndex])}}>
              {this.getExplorerItemImg(itemDetails[itemIndex])}
              <span>{itemDetails[itemIndex].name}</span>
              {this.getleftSideMenu(itemDetails[itemIndex].children)}
            </li>
            );            
          }
          return subMenuChild;
        })()}   
      </ul>);
    return sideMenu;
  }

  async updateItemName(event, itemIndex){
    event.preventDefault();
    event.stopPropagation();
    event.nativeEvent.stopImmediatePropagation();
    await this.explorerService.updateItemName(this.state.activeExplorerItems[itemIndex]);
    await this.refreshExplorer();
  }

  handleChange(e, itemIndex){
    this.state.activeExplorerItems[itemIndex].name = e.target.value;
    this.setState({[this.state.activeExplorerItems[itemIndex].name]:[e.target.value]});
  }

  render() {
    return(
      <div className="surface"> 
          <div className="mock-browser">
            <div className="chrome-tabs" style={tabContentMargin}>
              <div className="chrome-tabs-content">
              {(() => {
                let tabData =[];
                for(let tabIndex=0;tabIndex<this.state.explorerData.tabs.length;tabIndex++){
                  tabData.push(
                  <div className="chrome-tab" active={(this.state.explorerData.activeTabId === tabIndex)+""} 
                  onClick={()=>this.updateActiveTabId(tabIndex)}               
                  style={{'width':(this.state.tabWidth)+'px','transform':'translate3d('+tabIndex*(this.state.tabWidth-20)+'px, 0, 0)'}}>
                  <div className="chrome-tab-dividers"></div>
                  <div className="chrome-tab-background">
                    <svg version="1.1" xmlns="http://www.w3.org/2000/svg">
                      <defs>
                        <symbol id="chrome-tab-geometry-left" viewBox="0 0 214 36">
                          <path d="M17 0h197v36H0v-2c4.5 0 9-3.5 9-8V8c0-4.5 3.5-8 8-8z" />
                        </symbol>
                        <symbol id="chrome-tab-geometry-right" viewBox="0 0 214 36">
                          <use xlinkHref="#chrome-tab-geometry-left" />
                        </symbol>
                        <clipPath id="crop">
                          <rect className="mask" width="100%" height="100%" x="0" />
                        </clipPath>
                      </defs><svg width="52%" height="100%">
                        <use xlinkHref="#chrome-tab-geometry-left" width="214" height="36" className="chrome-tab-geometry" />
                      </svg>
                      <g transform="scale(-1, 1)"><svg width="52%" height="100%" x="-100%" y="0">
                          <use xlinkHref="#chrome-tab-geometry-right" width="214" height="36" className="chrome-tab-geometry" />
                        </svg></g>
                    </svg>
                  </div>
                  <div className="chrome-tab-content">
                    <div className={(this.state.explorerData.activeTabId === tabIndex)?"chrome-tab-favicon-active":"chrome-tab-favicon"}></div>
                    <div className="chrome-tab-title">{this.state.explorerData.tabs[tabIndex].desc}</div>
                    <div className="chrome-tab-drag-handle"></div>
                    {this.state.explorerData.tabs[tabIndex].id !== "FE_0000001" &&
                     <div className="chrome-tab-close" 
                     onClick={(e)=>{this.closeTab(e,tabIndex)}}></div> 
                   
                    }                    
                  </div>
                </div>
                  )
                }
                return tabData;
              })()}           
              </div>
              <div className="chrome-tabs-bottom-bar"></div>
            </div>

            <div id="main-bar">
              <div className="button" id="back-button" title="Click to go back, don't hold for history" data-ripple>
                <svg viewBox="0 0 16 16">
                  <path d="M16,7H3.8l5.6-5.6L8,0L0,8l8,8l1.4-1.4L3.8,9H16V7z" />
                </svg>
              </div>
              <div className="button" id="forward-button" title="Click to go forward, don't hold for history" data-ripple>
                <svg viewBox="0 0 16 16">
                  <path d="M8,0L6.6,1.4L12.2,7H0v2h12.2l-5.6,5.6L8,16l8-8L8,0z" />
                </svg>
              </div>
              <div className="button" id="refresh" title="Reload page" data-ripple>
                <svg viewBox="0 0 16 16">
                  <path d="M13.6,2.3C12.2,0.9,10.2,0,8,0C3.6,0,0,3.6,0,8s3.6,8,8,8c3.7,0,6.8-2.5,7.7-6h-2.1c-0.8,2.3-3,4-5.6,4c-3.3,0-6-2.7-6-6
                s2.7-6,6-6c1.7,0,3.1,0.7,4.2,1.8L9,7h7V0L13.6,2.3z" />
                </svg>
              </div>
              <div id="address-bar" className="-selected">
                <div id="info" className="address-bar-button -show-special" data-ripple>
                  <img src={unlockSvg} alt="unlock" className="https"></img>                
                </div>                
                <div id="address">
                  <input id="homesearch" autoComplete="off" type="text"
                  value={this.getPath()} />
                  <div className="searchresults" >

                  </div>

                </div>
                <div id="bookmark" className="address-bar-button" data-ripple>
                  <svg viewBox="0 0 16 16" className="favourite">
                      <path d="M16,5.8l-5.8-0.5L8,0L5.8,5.3L0,5.8l4.4,3.8l-1.3,5.6l4.9-3l4.9,3l-1.3-5.6L16,5.8z M8,10.7l-3,1.8l0.8-3.4L3.1,6.8l3.5-0.3
                  L8,3.3l1.4,3.2l3.5,0.3l-2.7,2.3l0.8,3.4L8,10.7z" />
                  </svg>
                </div>
              </div>
              <div className="button extension user" extension-id="3" title="user" data-ripple>
              V
              </div>
            </div>
            <div className="tabBody">
              <div className="explorer">
                <div className="leftMenu">
                  {this.getleftSideMenu(this.state.explorerMenu)}
                </div>
                <div className="rightMenu">
                  <div className="menubar">
                    <div className="left">
                      <div className="menuactive">
                        Explorer
                      </div>
                      <div className="menu">
                        Favourites
                      </div>
                      <div className="menu filesCount">
                        Files : {this.state.activeExplorerItems.length}
                      </div>
                    </div>
                    <div className="right">
                      <div className="menu menuitemactive">
                        <img src={menuSvg} alt="menu"/>
                      </div>
                      <div className="menu menuitem">
                        <img src={lineItemSvg} alt="lineItem"/>
                      </div>
                    </div>
                  </div>
                  <div className="rightMenuBody">
                    <div className="parent">
                      {(()=>{
                        let data = [];                  
                        for(let itemIndex=0;itemIndex<this.state.activeExplorerItems.length;itemIndex++){
                          data.push(
                          <div className="child inline-block-child" onDoubleClick={(e)=>this.openinSameTab(e,this.state.activeExplorerItems[itemIndex])}>
                            {this.getExplorerItemImg(this.state.activeExplorerItems[itemIndex])}
                            <div className="title">
                              <input type="text" name={this.state.activeExplorerItems[itemIndex].name} 
                              onBlur={(e)=>{this.updateItemName(e, itemIndex)}}
                              defaultValue={this.state.activeExplorerItems[itemIndex].name} onChange={(e)=>this.handleChange(e, itemIndex)}></input>
                            </div>
                          </div>
                          )
                        }
                        return data;
                      })()}
                    </div>
                    <div className="footerMenu">
                      <div onClick={(e)=>this.addNewFolder(e)}><img src={folderOpen} alt="add new folder"></img></div>
                      <div><img src={designer} alt="add new design"></img></div>
                    </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
  }
};

export default Explorer;