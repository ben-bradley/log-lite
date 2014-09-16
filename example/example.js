var LogLite = require('../');
var ll = new LogLite();

ll.log('Starting...');

ll.debug('the script is about to do stuff!!!');
// do some stuff
ll.debug('the script is still doing stuff!!!');
// do some more stuff and wrap it up
ll.debug('the script did some stuff!!!');

ll.log('Done.');
