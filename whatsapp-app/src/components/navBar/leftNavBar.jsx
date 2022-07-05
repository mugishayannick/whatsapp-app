import React from "react";
import './leftNavBar.css';
import logo512 from '../../assets/images/logo512.png';
import Image from '../../assets/images/image.jpeg';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";


function leftNav() {
    return (
        <>

        <div className="msg-section">

        <div className="container">
            <div className="left">
               <img className="img" src={logo512} alt="logo" width="25" height="25"/>
            </div>
            <div className="right">
                
                <span data-testid="status-v3" data-icon="status-v3" ><svg version="1.1" id="ee51d023-7db6-4950-baf7-c34874b80976" x="0" y="0" viewBox="0 0 24 24" width="24" height="24" ><path fill="currentColor" d="M12 20.664a9.163 9.163 0 0 1-6.521-2.702.977.977 0 0 1 1.381-1.381 7.269 7.269 0 0 0 10.024.244.977.977 0 0 1 1.313 1.445A9.192 9.192 0 0 1 12 20.664zm7.965-6.112a.977.977 0 0 1-.944-1.229 7.26 7.26 0 0 0-4.8-8.804.977.977 0 0 1 .594-1.86 9.212 9.212 0 0 1 6.092 11.169.976.976 0 0 1-.942.724zm-16.025-.39a.977.977 0 0 1-.953-.769 9.21 9.21 0 0 1 6.626-10.86.975.975 0 1 1 .52 1.882l-.015.004a7.259 7.259 0 0 0-5.223 8.558.978.978 0 0 1-.955 1.185z"></path></svg></span>
                <span data-testid="chat" data-icon="chat" ><svg viewBox="0 0 24 24" width="24" height="24" ><path fill="currentColor" d="M19.005 3.175H4.674C3.642 3.175 3 3.789 3 4.821V21.02l3.544-3.514h12.461c1.033 0 2.064-1.06 2.064-2.093V4.821c-.001-1.032-1.032-1.646-2.064-1.646zm-4.989 9.869H7.041V11.1h6.975v1.944zm3-4H7.041V7.1h9.975v1.944z"></path></svg></span>
                <span data-testid="menu" data-icon="menu" ><svg viewBox="0 0 24 24" width="24" height="24" ><path fill="currentColor" d="M12 7a2 2 0 1 0-.001-4.001A2 2 0 0 0 12 7zm0 2a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 9zm0 6a2 2 0 1 0-.001 3.999A2 2 0 0 0 12 15z"></path></svg></span>
            </div>
        </div>
  
      <span className='notification'>
             <div className='notify'>
                <div className="nott">
                <div className='noti'>
                    <div className='not-icon'>
                        <span>
                        <svg viewBox="0 0 48 48" width="48" height="48" class=""><path fill="currentColor" d="M24.154 2C11.919 2 2 11.924 2 24.165S11.919 46.33 24.154 46.33s22.154-9.924 22.154-22.165S36.389 2 24.154 2zm-.744 15.428v-.618c0-.706.618-1.324 1.324-1.324s1.323.618 1.323 1.324v.618c2.559.618 4.412 2.823 4.412 5.559v3.176l-8.294-8.294a5.056 5.056 0 0 1 1.235-.441zm1.323 15.706a1.77 1.77 0 0 1-1.765-1.765h3.529a1.768 1.768 0 0 1-1.764 1.765zm7.236-.883-1.765-1.765H17.233v-.882l1.765-1.765v-4.853a5.56 5.56 0 0 1 .794-2.912l-2.559-2.559 1.147-1.147 14.735 14.736-1.146 1.147z"></path></svg>
                        </span>
                    </div>
                </div>
                <div className='text'>
                    <div className='note'>Get notified of new messages</div>
                    <div className='note-s'>
                        <span className='not'>
                        <span class="note0"> Turn on desktop notifications</span>
                        <span className='no'>
                            <svg viewBox="0 0 8 12" width="8" height="12" class=""><path fill="currentColor" d="m2.173 1 4.584 4.725-4.615 4.615-1.103-1.103 3.512-3.512L1 2.173 2.173 1z"></path></svg>
                        </span>
                        </span>
                    </div>
                </div>
                </div>
                
             </div>
        </span>
    
        <div className="container__down">
           <form>
           <label htmlFor="text" className="search-bar">
             <FontAwesomeIcon icon={faSearch}/>
             <input type="text"      placeholder="Search or start new chat"/>

           </label>
           </form>

        </div>
      

        <div className='chat-list'>
            <div>
                <div>
                    <div className='list0' >
                        
                            <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                              <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                               </div>
                               <div className='chat-hov'>
                                <div className='list2'>
                                    <div className='list3'>
                                        <div className='list4'>
                                            <div className='list6'>
                                                <div className='list7'>
                                                    <img src={Image} alt="" />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='li1'>
                                        <div className="li2">
                                            <div className="li4">
                                                <span className='li6'>Yannick</span>
                                            </div>
                                            <div className="li5">11:32 AM</div>
                                        </div>
                                        <div className="li3">
                                            <div className="li7">
                                                <span className='li9'>
                                                <span data-testid="status-dblcheck" data-icon="status-dblcheck" className="ticks"><svg viewBox="0 0 18 18" width="18" height="18" color="#8696a0"><path fill="currentColor" d="m17.394 5.035-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-.427-.388a.381.381 0 0 0-.578.038l-.451.576a.497.497 0 0 0 .043.645l1.575 1.51a.38.38 0 0 0 .577-.039l7.483-9.602a.436.436 0 0 0-.076-.609zm-4.892 0-.57-.444a.434.434 0 0 0-.609.076l-6.39 8.198a.38.38 0 0 1-.577.039l-2.614-2.556a.435.435 0 0 0-.614.007l-.505.516a.435.435 0 0 0 .007.614l3.887 3.8a.38.38 0 0 0 .577-.039l7.483-9.602a.435.435 0 0 0-.075-.609z"></path></svg></span>
                                                    <span className='li10'>Typing</span>
                                                </span>
                                                {/* (<span dir="ltr" class="ggj6brxn gfz4du6o r7fjleex g0rxnol2 lhj4utae le5p0ye3 l7jjieqr i0jNr">poa</span>) */}
                                            </div>
                                            <div className="li8">
                                                <span className='li11'>
                                                    <div className="li12">
                                                        <span className='li13'>1</span>
                                                    </div>
                                                </span>
                                                <span></span>
                                                <span></span>
                                            </div>
                                        </div>
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
}

export default leftNav;