// DO WHATEVER YOU WANT HERE



const createEnumerableProperty = (propertyName) => {

    return propertyName;

};

const createNotEnumerableProperty = (propertyName) => {

    return Symbol(propertyName);

};

const createProtoMagicObject = () => {

    let obj = function () {};

    let Person = function(){};

    obj.prototype = Person;

    obj.__proto__ = Person;

    return obj;

};
let count1 = 0;
const incrementor = () => {
    count1++;
    incrementor.valueOf = ()=>{ return count1 };
    return incrementor
};

const asyncIncrementor = () => {};

const createIncrementer = () => {

    function* idMaker(){

        let index = 1;

        while(index<=100)

            yield index++;

    }

    return idMaker();

};



// return same argument not earlier than in one second, and not later, than in two

const returnBackInSecond = (param) => {

    return new Promise(resolve => {

        setTimeout(() => {

            resolve(param);

        }, 1100);

    });

};

const getDeepPropertiesCount = (obj) => {

    let count=1;

    function getCount(obj){

        for(let key in obj){

            if(typeof obj[key]==='object' && Object.keys(obj[key]).length){

                count+= Object.keys(obj[key]).length;

                return getCount(obj[key]);

            }

        }

    }



    getCount(obj);

    return count;

};

const createSerializedObject = () => {
return null;
};

const toBuffer = () => {};

const sortByProto = (arr) => {

    function getCount(obj){

        let count = 0;

        while(obj.__proto__!==Object.prototype){

            ++count;

            obj = obj.__proto__;

        }

        return count;

    }

    arr.sort((a,b)=>getCount(a)<getCount(b));

    return arr;

};

exports.createEnumerableProperty = createEnumerableProperty;
exports.createNotEnumerableProperty = createNotEnumerableProperty;
exports.createProtoMagicObject = createProtoMagicObject;
exports.incrementor = incrementor;
exports.asyncIncrementor = asyncIncrementor;
exports.createIncrementer = createIncrementer;
exports.returnBackInSecond = returnBackInSecond;
exports.getDeepPropertiesCount = getDeepPropertiesCount;
exports.createSerializedObject = createSerializedObject;
exports.sortByProto = sortByProto;