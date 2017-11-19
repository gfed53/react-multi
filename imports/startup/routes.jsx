import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

// All Layouts and Pages
import { App } from '../ui/App.jsx';
import { Home } from '../ui/Home.jsx';
import Page from '../ui/Page.jsx';

// Data
import PageData from '/public/json/page-content.json';

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
        data={PageData}
      />
    });
  }
});

