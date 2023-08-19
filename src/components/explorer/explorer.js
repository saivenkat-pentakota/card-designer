import React from "react";
import "./explorer.css";
import menuSvg from "../../assets/images/explorer/menu.svg";
import lineItemSvg from "../../assets/images/explorer/line item.svg";
import unlockSvg from "../../assets/images/tabs/unlock.svg";
import ExplorerService from "../../shared/service/explorerService";


const Explorer = () => {
  const explorerService = new ExplorerService();

  const tabContentMargin ={
    "--tab-content-margi":"9px",
  }
  const tabWidth=258;

  return (
    <>
        <div className="surface"> 
          <div className="mock-browser">
            <div className="chrome-tabs" style={tabContentMargin}>
              <div className="chrome-tabs-content">
              {(() => {
                let tabData =[];
                for(let tabIndex=0;tabIndex<explorerService.explorerData.tabs.length;tabIndex++){
                  tabData.push(
                  <div className="chrome-tab" active={(explorerService.explorerData.activeTabId === tabIndex)+""}                  
                  style={{'width':(tabWidth)+'px','transform':'translate3d('+tabIndex*(tabWidth-20)+'px, 0, 0)'}}>
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
                    <div className="chrome-tab-favicon-active"></div>
                    <div className="chrome-tab-title">{explorerService.explorerData.tabs[tabIndex].desc}</div>
                    <div className="chrome-tab-drag-handle"></div>
                    {explorerService.explorerData.tabs[tabIndex].id != "FE_0000001" &&
                     <div className="chrome-tab-close"></div> 
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
                <div className="special">Folder</div>
                <div id="address">
                  <input id="homesearch" autocomplete="off" type="text" />
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
                  <ul class="directory-list">
                  </ul>
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
                </div>
              </div>
            </div>
          </div>
        </div>

    </>
  );
};

export default Explorer;