# Log Lite

A very simple, tiered console logging module.  When you specify a level, LogLite will include all levels/tiers that are below that level.

## Levels

- `log` - (_default_) This is the basic log level for things like "Server is listening..."
- `info` - For more detailed log messages.
- `warn` - These should be cautionary messages.
- `error` - Uhoh, something broke.
- `debug` - The most detailed and obnoxious message you can think of.

## Example

```javascript
/* myscript.js
 */

var LogLite = require('log-lite');
var ll = new LogLite();

ll.log('Starting...');

ll.debug('the script is about to do stuff!!!');
// do some stuff
ll.debug('the script is still doing stuff!!!');
// do some more stuff and wrap it up
ll.debug('the script did some stuff!!!');

ll.log('Done.');
```

```shell
$ node ./myscript.js /* stdout =>
[09:20:00] Starting...
[09:20:00] Done.
*/

$ LOG_LEVEL=info node ./myscript.js /* stdout =>
[09:21:00] Starting...
[09:21:00] Done.
*/

$ LOG_LEVEL=debug node ./myscript.js /* stdout =>
[09:21:00] Starting...
[09:21:00] the script is about to do stuff!!!
[09:21:00] the script is still doing stuff!!!
[09:21:00] the script did some stuff!!!
[09:21:00] Done.
*/
```

## Installing

`npm install ben-bradley/log-lite`
