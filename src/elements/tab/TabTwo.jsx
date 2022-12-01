import React, { Component } from "react";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

class TabsTwo extends Component{
    render(){
        let 
        tab1 = "Overview",
        tab2 = "Skills",
        tab3 = "Experience",
        tab4 = "Education";
        const { tabStyle } = this.props
        return(
            <div>
                {/* Start Tabs Area */}
                <div className="tabs-area">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-12">
                                <Tabs>
                                    <TabList  className={`${tabStyle}`}>
                                        <Tab>{tab1}</Tab>
                                        <Tab>{tab2}</Tab>
                                        <Tab>{tab4}</Tab>
                                    </TabList>
                                    {/* Overview */}
                                    <TabPanel>
                                        <div className="single-tab-content">
                                            <ul>
                                                <li>
                                                    <a href="/service">Back End <span> - Database/API</span></a>
                                                    Implementation and optimization of system designs.
                                                </li>
                                                <li>
                                                    <a href="/service">Web and user interface design<span> - Development</span></a>
                                                    Front End design and implementation
                                                </li>
                                                <li>
                                                    <a href="/service">Project Management <span> - Collaboration</span></a>
                                                    Industry standard task allocation and team coordination in Agile.
                                                </li>
                                            </ul>
                                        </div>
                                    </TabPanel>
                                    {/* Skills */}
                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">Programming Languages <span></span></a>Java, Javascript, Python, C, SQL
                                               </li>
                                               <li>
                                                   <a href="/service">Frameworks and Tools<span></span></a>ReactJS, NodeJS, Sequelize
                                               </li>
                                               <li>
                                                   <a href="/service">Security <span></span></a>Encryption/Decryption, Virtual Machines, Crpytography
                                               </li>
                                               <li>
                                                   <a href="/service">OS <span></span></a>Windows, MacOS, Ubuntu, Kali
                                               </li>
                                               <li>
                                                   <a href="/service">Security <span></span></a>Command line, Powershell, Security, Version Control (Git)
                                               </li>
                                           </ul>
                                       </div>
                                    </TabPanel>



                                    <TabPanel>
                                       <div className="single-tab-content">
                                           <ul>
                                               <li>
                                                   <a href="/service">University of Central Florida<span> - B.S.</span></a> Computer Science
                                               </li>
                                               
                                           </ul>
                                       </div>
                                    </TabPanel>
                                </Tabs>
                            </div>
                        </div>
                    </div>
                </div>
                {/* End Tabs Area */}
            </div>
        )
    }
}



export default TabsTwo;