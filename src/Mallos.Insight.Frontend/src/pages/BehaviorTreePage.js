import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Link } from "react-router-dom";

import Button, { ButtonGroup } from '@atlaskit/button';
import { withNavigationViewController } from '@atlaskit/navigation-next';

import ContentWrapper from '../components/page/ContentWrapper';
import PageTitle from '../components/page/PageTitle';

import 'litegraph.js/css/litegraph.css';
import { LiteGraph, LGraph, LGraphCanvas } from 'litegraph.js';

import BehaviorTreeView from '../views/BehaviorTreeView';
//node constructor class
function MyAddNode()
{
  this.addInput("A","number");
  this.addInput("B","number");
  this.addOutput("A+B","number");
  this.properties = { precision: 1 };
}
MyAddNode.title = "Sum";
LiteGraph.registerNodeType("basic/sum", MyAddNode );

class BehaviorTreePageBase extends Component<{
  navigationViewController: ViewController,
}> {
  componentDidMount() {
    const { navigationViewController } = this.props;
    navigationViewController.setView(BehaviorTreeView.id);


    var graph = new LGraph();
 
    var canvas = new LGraphCanvas("#mycanvas", graph);
    
    const g = LiteGraph;
    var node_const = LiteGraph.createNode("TASK/const");
    node_const.pos = [200,200];
    graph.add(node_const);
    node_const.setValue(4.5);
    
    var node_watch = LiteGraph.createNode("basic/watch");
    node_watch.pos = [700,200];
    graph.add(node_watch);
    
    node_const.connect(0, node_watch, 0 );
  }

  render() {
    return (
      <div
        style={{
          marginTop: '16px',
          marginLeft: '32px'
        }}>
        <PageTitle>Behavior Tree</PageTitle>
        <canvas id='mycanvas' width='1024' height='720' style={{ border: '1px solid' }}></canvas>
      </div>
    );
  }
}

const BehaviorTreePage = withNavigationViewController(BehaviorTreePageBase);
export default BehaviorTreePage; 
