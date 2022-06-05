
import get    from '../../fn/modules/get.js';
import events from '../../dom/modules/events.js';

function isHashRef(ref) {
    return /^#\S+$/.test(ref);
}

function updateSelected(select) {
    const children = select.children;
    let n = -1;
    while (children[++n]) {
        const option = children[n];
        // Ignore empty option values
        if (!option.value) { continue; }

        const url    = new URL(option.value, window.location);
        if (url.href === window.location.href) {
            // Select option as <select> value (is this the best way to do it?)
            select.value = option.value;
            break;
        }
    }
}

export default {
    construct: function() {
        // Listen to changes to select
        events('change', this)
        // Get select value
        .map((e) => e.target.value)
        // Ignore empty hrefs
        .filter((href) => !!href)
        // Update location
        .each((href) => {
            if (isHashRef(href)) {
                const id = href.slice(1);
                window.location.hash = id;
            }
            else {
                window.location = href;
            }
        });

        // Track changes to location and update selected
        events('popstate', window).each(() => updateSelected(this));
    },

    connect: function() {
        // Update selected option
        updateSelected(this);
    }
};
