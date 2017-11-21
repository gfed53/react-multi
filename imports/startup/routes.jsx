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


// TODO: Change this to a redirect. Also add a catch-all route
FlowRouter.route('/', {
  action() {
    mount(App, {
      content: <Home />
    });
  }
});

FlowRouter.route('/page/:id', {
  action(params) {
    mount(App, {
      content: <Page
        projectId={params.id}
        data={PageData[params.id]}
      />
    });
  }
});

FlowRouter.route('/page/:id/:sub', {
  action(params) {
    mount(App, {
      content: <Page
        projectId={params.id}
        pageData={PageData[params.id]}
        platform={PageData[params.id].content.sections[params.sub]}
      />,
      props: NavData
    });
  }
});

