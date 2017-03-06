import head from './head';
import hair from './hair';
import eyes from './eyes';
import nose from './nose';
import mouth from './mouth';

import shirt from './shirt';


const headGenerator = function (ctx) {
    shirt(ctx);
    hair(ctx);
    head(ctx);
    eyes(ctx);
    nose(ctx);
    mouth(ctx);

     /*nose(ctx);*/

};


export default headGenerator;