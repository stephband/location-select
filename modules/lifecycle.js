
import get    from '../../fn/modules/get.js';
import events from '../../dom/modules/events.js';

function isHashRef(ref) {
    return /^#\S+$/.test(ref);
}

export default {
    construct: function() {
        events('change', this)
        .map((e) => e.target.value)
        // Ignore links for empty spaces
        .filter((href) => !!href)
        .each((href) => {
            if (isHashRef(href)) {
                const id = href.slice(1);
                window.location.hash = id;
            }
            else {
                window.location = href;
            }
        });
    },

    connect: function() {
        console.log('CONNECT');
        const children = this.children;
        let n = -1;
        while (children[++n]) {
            const option = children[n];
            const url    = new URL(option.value, window.location);
            console.log(url.href, window.location.href);
            if (url.href === window.location.href) {
                console.log('OPTION', option.value);
                // Select option as <select> value (is this the best way to do it?)
                this.value = option.value;
                break;
            }
        }
    }
};
