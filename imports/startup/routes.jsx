import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

// All Layouts and Pages
import { App } from '../ui/App.jsx';
import { Home } from '../ui/Home.jsx';
import Page from '../ui/Page.jsx';
import Sub from '../ui/Sub.jsx';


// Helpers
import FlowHelpers from './router-helpers.js';

// Data
import PageData from '/public/json/page-content.json';
import NavData from '/public/json/nav.json';

FlowRouter.route('/page/:id/:sub', {
  action(params) {
    mount(App, {
      content: <Page
        key='page'
        projectId={params.id}
        pageData={PageData[params.id]}
        platform={PageData[params.id].content.sections[params.sub]}
      />,
      props: NavData
    });
  }
});

FlowRouter.notFound = {
	action: function(){
		FlowRouter.go('/page/1/facebook');
	}
}

