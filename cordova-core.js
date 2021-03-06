/*globals Polymer */
Polymer(
  {
    is: 'cordova-core',

    hostAttributes: {
      hidden: true
    },

    properties: {
      /**
       * Return if cordova deviceready event has been fired.
       */
      ready: {
        notify: true,
        readOnly: true,
        type: Boolean,
        value: false
      },

      /**
       * Return if cordova application is paused.
       */
      paused: {
        notify: true,
        readOnly: true,
        type: Boolean,
        value: false
      }
    },

    attached() {
      const cordovaEl = document.querySelector('[src="cordova.js"]');

      document.addEventListener(
        'deviceready',
        this._setReady.bind(this, true),
        false
      );
      document.addEventListener(
        'pause',
        this._setPaused.bind(this, true),
        false
      );
      document.addEventListener(
        'resume',
        this._setPaused.bind(this, false),
        false
      );

      if (!cordovaEl) {
        let script = document.createElement('script');

        script.src = 'cordova.js';

        document.body.appendChild(script);
      }
    },

    detached() {
      document.removeEventListener('deviceready', this._setReady);
      document.removeEventListener('pause', this._setPaused);
      document.removeEventListener('resume', this._setPaused);
    }
  }
);
