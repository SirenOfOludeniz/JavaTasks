// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function (command) {
    var com = command.split(' ')[0];
    if(com == 'ADD') {
        var name = command.split(' ')[1];
        var phones = command.split(' ')[2];
        return add(name, phones);
    } else if(com == 'SHOW') {
       return show();
    } else if(com == 'REMOVE_PHONE') {
        return remove(command.split(' ')[1]);
    }
    function add(name, phones) {
        var phoneArray = phones.split(',');
        var phoneNumbers;
        if(phoneBook.hasOwnProperty(name)) {
            phoneNumbers = phoneBook[name].concat(phoneArray);
            phoneBook[name] = phoneNumbers;
        } else {
            phoneBook[name] = phoneArray;
        }
    }
    function remove(phone) {
        var result = false;
        for(var key in phoneBook) {
            if (phoneBook[key].indexOf(phone) !== -1) {
                phoneBook[key].splice((phoneBook[key].indexOf(phone)), 1);
                result = true;
            }
        }
        return result;
    }
    function show() {
        var stringArray = [];
        var resultString;
        var keys = Object.keys(phoneBook);
        keys.sort();

        for(var i = 0; i < keys.length; i++) {
            if (phoneBook[keys[i]].length > 0) {
                resultString = keys[i] + ': ' + phoneBook[keys[i]].join(', ');
                stringArray.push(resultString);
            }

        }

            return stringArray;
    }
};
