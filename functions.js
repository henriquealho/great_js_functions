/*
* Returns the number of decimal places of a given float number
*/
function decimalPlaces(num) {
var match = ('' + num).match(/(?:\.(\d+))?(?:[eE]([+-]?\d+))?$/);
if (!match) { return 0; }
  return Math.max(0,
           // Number of digits right of decimal point.
           (match[1] ? match[1].length : 0)
            // Adjust for scientific notation.
            - (match[2] ? +match[2] : 0));
}

/**
 * onElementHeightChange event
 * Credits: https://stackoverflow.com/a/14901150/2282107 / vsync
 */
function onElementHeightChange(elm, callback) {
    var lastHeight = elm.clientHeight, newHeight;
    (function run() {
        newHeight = elm.clientHeight;
        if (lastHeight != newHeight)
            callback();
        lastHeight = newHeight;

        if (elm.onElementHeightChangeTimer)
            clearTimeout(elm.onElementHeightChangeTimer);

        elm.onElementHeightChangeTimer = setTimeout(run, 200);
    })();
}
// Usage: 
onElementHeightChange(document.body, function () {
    console.log('I changed height!');
});

/**
 * Returns a file extension
 */
function getFileExtension(filename) {
    filename = filename.toLowerCase();
    return filename.split('.').pop();
}

/**
 * Working datatables with server-side processing
 * @Datatables version: 1.10.5
 */
/*$(document).ready(function () {    
    //#region Create datatble
    $('#table').DataTable({
        "bInfo": false,
        "searching": false,
        "bLengthChange": false,
        "paging": true,
        'iDisplayLength': 5,
        columns: [
            { 'data': 'CustomerNumber' },
            { 'data': 'CustomerName' },
            { 'data': 'CustomerType' },
        ],
        "bServerSide": true,
        "bProcessing": true,
        "ordering": false,
        sAjaxSource: 'CustomerHandler.ashx?messageId=10', // Change the handler URL 
        sServerMethod: 'POST',
        oLanguage: { // Translate strings
            sProcessing: '<img src="loading.gif">', // Change processing img / text
            oPaginate: { sPrevious: 'Previous page', sNext: 'Next page' },
            sEmptyTable : 'No results found',
            sInfoEmpty: 'Empty table',
            sZeroRecords: 'No records'
        },
        fnInitComplete : function() {
            // Hide pagination when no results
            if ($(this).find('tbody tr').length == 0) {
                   $('.dataTables_paginate').hide();
            }
        }
    });
});*/

