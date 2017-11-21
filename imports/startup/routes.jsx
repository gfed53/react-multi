import { FlowRouter } from 'meteor/kadira:flow-router';
import React from 'react';
import { mount } from 'react-mounter';

// All Layouts and Pages
import { App } from '../ui/App.jsx';
import { Home } from '../ui/Home.jsx';
import Page from '../ui/Page.jsx';
import Sub from '../ui/Sub.jsx';
import { SubLayout } from '../ui/SubLayout.jsx';


// Helpers
import FlowHelpers from './router-helpers.js';

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
        data={PageData[params.id]}
        platform={PageData[params.id].content.sections[params.sub]}
      />
    });
  }
});

// FlowRouter.route('/page/:id/:sub', {
//   action(params) {
//     mount(SubLayout, {
//       content: <Sub
//         data={PageData[params.id].data.content.sections[params.sub]}
//       />
//     });
//   }
// });

// FlowRouter.notFound = {
// 	action()
// }

