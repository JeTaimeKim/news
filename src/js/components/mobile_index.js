import React from 'react';
import MobileHeader from './mobile_header';
import MobileFooter from './mobile_footer';
import MobileList from './mobile_list';
import {Tabs,Carousel} from 'antd';
const TabPane=Tabs.TabPane;
export default class MobileIndex extends React.Component{
  render(){

    const settings={
        dots:true,
        infinite:true,
        speed:500,
        slideToShow:true,
        autoplay:true
    };

    return(
      <div>
      <MobileHeader/>
      <Tabs>
        <TabPane tab='头条' key='1'>
        <div class='carousel'>
          <Carousel {...settings}>
            <div><img src='images/1.jpg'/></div>
            <div><img src='images/2.jpg'/></div>
            <div><img src='images/3.jpg'/></div>
          </Carousel>
        </div>
          <MobileList count={20} type='top'/>
        </TabPane>
        <TabPane tab='社会' key='2'>
          <MobileList count={20} type='society'/>
        </TabPane>
        <TabPane tab='国内' key='3'>
          <MobileList count={20} type='internal'/>
        </TabPane>
        <TabPane tab='国际' key='4'>
          <MobileList count={20} type='global'/>
        </TabPane>
        <TabPane tab='娱乐' key='5'>
          <MobileList count={20} type='funs'/>
        </TabPane>
      </Tabs>
      <MobileFooter/>
      </div>
    );
  };
}
