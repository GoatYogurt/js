const message = 'Hi!';

const object = {
    message,
    
    method() {
        console.log('method');
    }
};

console.log(object.message);
object.method();