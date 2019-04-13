import React, { Component } from "react";
import "../App.css";

class SQL extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <code>
          <div className="codeLine">select * from product pro</div>
          <div className="codeLine">
            inner join price pri on pri.product_code = pro.code
          </div>
          <div className="codeLine">
            inner join supplier sup on sup.product_code = pro.code
          </div>
          <label>
            where pri.price > 100 and pri.price_table_id = 1 /* price_id ??? */
            and sup.[state] = 'SP'
          </label>
        </code>
      </div>
    );
  }
}

export default SQL;
