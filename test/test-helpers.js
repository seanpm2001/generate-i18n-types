const translation = {
  appName: 'My App',
  supportEmail: 'hello@my-app.com',
  shared: {
    contactSupport: '<mailto:$t(supportEmail)|contact My App support>',
  },
  authFirst: {
    text:
      'Before we can create your account, please <{{url}}|authenticate with My App>.',
  },
  errors: {
    invalidDate: 'Error 110, please $t(shared.contactSupport).',
    missingIds: 'Error 101, please $t(shared.contactSupport).',
    invalidUsers: 'The following people could not be invited: {{invalidUsers}}',
  },
};

export default translation;
