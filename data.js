/**
 * Student performance data
 *
 * Data for Stephen Few's Student Performance Dashboard
 *
 * Used with permission from Stephen Few
 */

var tserLength = 8
var range = Array.apply(Array, Array(tserLength))

var tsers

function randomize() {
    tsers = ['Insulin-like growth factor', 'Von Willebrand Factor', 'Voltage-gated 6T & 1P', 'Mechanosensitive ion ch.'].map(function (d) {
        return {
            key: d,
            value: range.map(function () {
                return (Math.random() + Math.random() + Math.random() + Math.random() + Math.random() + Math.random()) / 6 - 0.5
            })
        }
    })
}

randomize()
