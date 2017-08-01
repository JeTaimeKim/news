import React from 'react';
import {Row,Col,Tabs,Carousel} from 'antd';
import PCNewsBlock from './pc_news_block';
import PCNewsImageBlock from './pc_news_image_block';
import PCProduct from './pc_product';
const TabPane= Tabs.TabPane;

export default class PCNewsContainer extends React.Component{
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
        <Row>
          <Col span={2}></Col>
          <Col span={20} class='container'>
            <div class='leftContainer'>
              <div class='carousel'>
                <Carousel {...settings}>
                  <div><img src='./src/images/1.jpg'/></div>
                  <div><img src='./src/images/2.jpg'/></div>
                  <div><img src='./src/images/3.jpg'/></div>
                </Carousel>
              </div>
              <PCNewsImageBlock count={6} type='yule' width='400px' cartTitle='娱乐' imageWidth='112px'/>
              <PCNewsImageBlock count={6} type='guoji' width='400px' cartTitle='国际' imageWidth='112px'/>
            </div>
            <Tabs class='tabs_news'>
              <TabPane tab='头条' key='1'>
                <PCNewsBlock count={34} type='top' width='100%' bordered='false' />
              </TabPane>
              <TabPane tab='社会' key='2'>
                <PCNewsBlock count={34} type='shehui' width='100%' bordered='false' />
              </TabPane>
              <TabPane tab='国内' key='3'>
                <PCNewsBlock count={34} type='guonei' width='100%' bordered='false' />
              </TabPane>
              <TabPane tab='国际' key='4'>
                <PCNewsBlock count={34} type='guoji' width='100%' bordered='false' />
              </TabPane>
            </Tabs>
            <Tabs class = "tabs_product">
              <TabPane tab='ReactNews 产品' key='1'>
                <PCProduct></PCProduct>
              </TabPane>
            </Tabs>
          </Col>
          <Col span={2}></Col>
        </Row>
      </div>
    );
  };
}
