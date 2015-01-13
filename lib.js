var debug = require('debug')('lib')
var lib = {}

lib.generateHeading1 = function(text) {
    return "<h1>" + text + "</h1>"
}

lib.generateHeading = function(level, text) {
    return "<h" + level + ">" + text + "</h" + level + ">"
 }

lib.generateOrderedList = function(arrayOfText) {
    var n = "<ol>";
    for (var i = 0; i < arrayOfText.length; i++) {  
        n += "<li>" + arrayOfText[i] + "</li>";
    }
    n += "</ol>";
    return n;
}

lib.generateUnorderedList = function(arrayOfText) {
    var n = "<ul>";
    for (var i = 0; i < arrayOfText.length; i++) {  
        n += "<li>" + arrayOfText[i] + "</li>";
    }
    n += "</ul>"
    return n;
}

lib.generateTableRow = function (arrayOfText) {
    var n = "<table><tr>"
    for (var i = 0; i < arrayOfText.length; i++) {  
        n += "<td>" + arrayOfText[i] + "</td>"
    }
    n += "</tr><table>";
    return n;
}

lib.generateTable = function(twoDimensionalArrayOfText) {
    var n = "<table>"

    for (var i = 0; i < twoDimensionalArrayOfText.length; i++) {  
        n += "<tr>";

        for (var j = 0; j < twoDimensionalArrayOfText[0].length; j++) {
            n += "<td>" + twoDimensionalArrayOfText[i][j] + "</td>";
        } 

        n += "</tr>";      
    }

    n += "</table>";
    return n;
}

lib.generateHyperLink = function(url, text) {
    return "<a href=\"" + url + "\">" + text + "</a>";
}

lib.generateFormTextField = function(name) {
    return "<input type =\"text\" name =\"" + name + "\">";
}

lib.generateFormTextFieldWithLabel = function(name, label) {
    return "<label>" + label + "</label> " + lib.generateFormTextField(name);
}

lib.generateDropdownList = function(arrayOfValues, arrayOfText) {
    var n = "<select>\n";
    for (var i = 0; i < arrayOfValues.length; i++) {
        n += "<option value=\"" + arrayOfValues[i] + "\">" + arrayOfText[i] + "</option>\n";
    }
    n += "</select>";
    return n;
}

lib.generateYoutubeVideoEmbeddableFrame = function(width, height, videoId, allowfullscreen) {
    return "<iframe width=\"" + width + "\" height=\"" + height + "\" src=\"//www.youtube.com/embed/" + videoId + "\" " + allowfullscreen + "></iframe>"
}

module.exports = lib