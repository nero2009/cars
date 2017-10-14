import React, { Component } from 'react';
import {Link} from 'react-router-dom';

if (!Object.keys) {
  Object.keys = (function() {
    'use strict';
    var hasOwnProperty = Object.prototype.hasOwnProperty,
        hasDontEnumBug = !({ toString: null }).propertyIsEnumerable('toString'),
        dontEnums = [
          'toString',
          'toLocaleString',
          'valueOf',
          'hasOwnProperty',
          'isPrototypeOf',
          'propertyIsEnumerable',
          'constructor'
        ],
        dontEnumsLength = dontEnums.length;

    return function(obj) {
      if (typeof obj !== 'function' && (typeof obj !== 'object' || obj === null)) {
        throw new TypeError('Object.keys called on non-object');
      }

      var result = [], prop, i;

      for (prop in obj) {
        if (hasOwnProperty.call(obj, prop)) {
          result.push(prop);
        }
      }

      if (hasDontEnumBug) {
        for (i = 0; i < dontEnumsLength; i++) {
          if (hasOwnProperty.call(obj, dontEnums[i])) {
            result.push(dontEnums[i]);
          }
        }
      }
      return result;
    };
  }());
}


export const Table = (props)=>{
	let keyss;
	return (
		<div className="table-responsive">
					<table className='table'>
						<thead>
							<tr>
							{
								props.headers.map((item,index)=><th key={++index}>{item}</th>)
							}
							</tr>
						</thead>
						<tbody>
						{
							props.rows.map((item,index)=>{
								keyss=Object.keys(item);

							return (<tr key={++index}>
										{keyss.map((key,index)=> <th key={++index}>{item[key]}</th>)}
									</tr>)

								})
							}
							
						</tbody>
					</table>
				</div>
		)
}

