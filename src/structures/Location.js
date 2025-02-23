/*
 * MywaJS 2023
 * re-developed wwebjs
 * using with playwright & wajs
 * contact:
 * wa: 085157489446
 * ig: amirul.dev
 */

'use strict';

/**
 * Location information
 */
class Location {
    /**
     * @param {number} latitude
     * @param {number} longitude
     * @param {?string} description
     */
    constructor(latitude, longitude, description) {
        /**
         * Location latitude
         * @type {number}
         */
        this.latitude = latitude;

        /**
         * Location longitude
         * @type {number}
         */
        this.longitude = longitude;

        /**
         * Name for the location
         * @type {?string}
         */
        this.description = description;
    }
}

export default Location;