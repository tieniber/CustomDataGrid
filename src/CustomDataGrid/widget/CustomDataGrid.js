import {
    defineWidget,
    log,
    runCallback,
} from 'widget-base-helpers';

import construct from 'dojo/dom-construct';

export default defineWidget('CustomDataGrid', false, {

    _obj: null,

    constructor() {
        this.log = log.bind(this);
        this.runCallback = runCallback.bind(this);
    },

    postCreate() {
        log.call(this, 'postCreate', this._WIDGET_VERSION);
    },

    update(obj, callback) {

        if (obj) {
            const dgString = `<div data-mendix-id='1_11' 
        data-mendix-type='mxui.widget.DataGrid' 
        data-mendix-props='a whole bunch of JSON'
        class='mx-datagrid mx-name-grid2' tabindex='0'>
        </div>`;

            const dgNode = construct.toDom(dgString);
            dgNode.setAttribute('data-mendix-props', obj.get(this.jsonAttr));
            this.domNode.appendChild(dgNode);

            const renderedWidgets = mxui.html.parser.instantiate([dgNode]);
            const myDatagrid = renderedWidgets[ 0 ];

            myDatagrid.mxform = this.mxform;
            myDatagrid.applyContext(this.mxcontext, function () { });

            if (callback) { callback(); }

        }
    },
});
