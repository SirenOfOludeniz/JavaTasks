// Телефонная книга
var phoneBook = {};

/**
 * @param {String} command
 * @returns {*} - результат зависит от команды
 */
module.exports = function actions(command) {
    var result = '';
    var globalResult;
    var objectList = [];//массив объектов. в каждом об-те поля name и num
    var words = command.split(' '); //сохраняем слова из команды
    if(command.indexOf('ADD') != -1) {
        add();
    } else if (command.indexOf('REMOVE_PHONE') != -1) {
        var stringNums = words[1];
        remove_phone(stringNums);

    } else if(command.indexOf('SHOW') != -1) {
       show();
    }
    function remove_phone(phoneNumber) {
        var resultRemove = false;
        for(var i = 0; i < objectList.length; i++) {
            if (objectList[i].num.indexOf(phoneNumber) != -1) {
                var splitArray = objectList.num.split(' ');
                for(var a = 0; a < splitArray.length; a++) {
                    var ar = [];
                    if(splitArray[i] != phoneNumber) {
                        ar.push(splitArray[i]);
                    }
                }
                var newnumber = ar.join(' ');
                objectList[i].num = newnumber;
                resultRemove = true;
            }
        }
        globalResult = resultRemove;
        return resultRemove;
    }
    function show() {
        var tmp = [];
        var size = objectList.length;
        var contacts = [];
        if(size > 0) {
            tmp = objectList.sort(userCompare);

            for(var i = 0; i < tmp.length; i++) {
               contacts.push(tmp[i].name + ': ' + tmp[i].num)
            }

           /*for(var i = 0; i < size; i++) {
                contacts.push(objectList[i].name + objectList[i].num);
            }*/
            result = contacts;
            globalResult = result;
            return result;
        }

        function userCompare(a, b) {
            var r = 0;
            if (a.name > b.name) {r = 1;}
            if (a.name < b. name) {r = -1;}
            return r;
        }

    }
    function add() {
        var numbers = words[2];
        var isName = false;

            for(var i = 0; i < objectList.length; i++) {
                //если уже есть чувак с таким именем, закидываем ему номер в num
                if(objectList[i].name == words[1]) {
                    var addNumber = objectList[i].num + ',' + numbers;
                    objectList[i].num = addNumber;
                    isName = true;
                }
            }
            if(!isName) { //а если нет создаем новый объект контакта
                objectList.push({ //new точно прокатывает в JavaScript?
                    name: words[1],
                    num: numbers
                });
            }
    }
return globalResult;
};
