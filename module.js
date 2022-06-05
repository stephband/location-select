
/** Installation

Download the latest release:

[github.com/stephband/location-select/releases](https://github.com/stephband/location-select/releases)

Include the JS and CSS files:

```html
<link rel="stylesheet" href="./location-select.css" />
<script type="module" src="./location-select.js"></script>
```
**/

/** API

A `location-select` is a customised built-in select element that interprets its
option values as hrefs, turning it into a location selector. The example above
looks something like this:

```html
<select is="location-select">
   <option value="/">Home</option>
   <option value="../location-select/">The location select element</option>
   <option value="?param=1">Parameter</option>
   <option value="#1">Hash</option>
</select>
```

Where the `location-select` contains an href that matches the current URL, that
option is selected.

#### Browser support

Safari does not support customised built-in elements. Support is roughly
polyfilled in Safari, and `<select is="location-select">` elements are
instantiated by selecting them at the time `location-select.js` is run.
**/

import element   from '../dom/modules/element.js';
import lifecycle from './modules/lifecycle.js';

const stylesheet = import.meta.url.replace(/\/[^\/]*\.js/, '/location-select-shadow.css');

export default element('<select is="location-select">', lifecycle);

// Log registration to console
window.console && window.console.log('%c<select is="location-select">%c registered (docs at %chttps://stephen.band/location-select/%c)', 'color: #3a8ab0; font-weight: 600;', 'color: #888888; font-weight: 400;', 'color: inherit; font-weight: 400;', 'color: #888888; font-weight: 400;');
