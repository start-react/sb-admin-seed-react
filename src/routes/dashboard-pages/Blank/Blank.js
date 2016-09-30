/**
 * React Starter Kit (https://www.reactstarterkit.com/)
 *
 * Copyright © 2014-2016 Kriasoft, LLC. All rights reserved.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.txt file in the root directory of this source tree.
 */

import React, { PropTypes } from 'react';
import { PageHeader } from 'react-bootstrap';
// import withStyles from 'isomorphic-style-loader/lib/withStyles';

const title = 'Blank Page';

// function handleLogin() {
//   console.log('login function');
// }


function Blank(props, context) {
  context.setTitle(title);
  return (
    <div>
      <div className="container-fluid">
        <div className="row">
          <div className="col-lg-12">
            <PageHeader>Blank</PageHeader>
          </div>
        </div>
      </div>
    </div>
  );
}


Blank.contextTypes = { setTitle: PropTypes.func.isRequired };

export default Blank;
