/* ================================================================
 * uitest-sample by xdf(xudafeng[at]126.com)
 *
 * first created at : Sun Aug 21 2016 21:38:46 GMT+0800 (CST)
 *
 * ================================================================
 * Copyright  xdf
 *
 * Licensed under the MIT License
 * You may not use this file except in compliance with the License.
 *
 * ================================================================ */

'use strict';

const path = require('path');
const uitest = require('uitest');

const testFile = `file://${path.join(__dirname, 'test.html')}`;

uitest({
  url: testFile,
  width: 600,
  height: 480,
  hidpi: false,
  useContentSize: true
}).then(() => {
  console.log('uitest success')
}).catch(() => {
  console.log('uitest error')
});
