const testContext = require.context('../app', true, /\.spec\.js/);
testContext.keys().forEach(testContext);
