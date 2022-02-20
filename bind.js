// Native method that binds the context

const person = {
    name: 'Mikhail'
}

function info(phone, email) {
    console.log(`Name: ${this.name}, Phone: ${phone}, Email: ${email}`)
}

// Demo
//info.bind(person)('12345', 'm@gmail.com')
//info.bind(person, '12345')('m@gmail.com')
//info.bind(person, '12345', 'm@gmail.com')()

// Easy way to create
//function bind(fn, context, ...rest) {
//    return fn.bind(context, ...rest)
//}

// Without built-in methods
//function bind(fn, context, ...rest) {
//    return function(...args) {
//        const uniqId = Date.now().toString()

//        context[uniqId] = fn

//        const result = context[uniqId](...rest.concat(args))

//        delete context[uniqId]

//        return result
//    }
//}

// ES 5 syntax
//function bind(fn, context) {
//    const rest = Array.prototype.slice.call(arguments, 2)
//    return function() {
//        const args = Array.prototype.slice.call(arguments)
//        return fn.apply(context, rest.concat(args))
//    }
//}

// ES 6 and above syntax
//function bind(fn, context, ...rest) {
//    return function(...args) {
        //return fn.apply(context, rest.concat(args))
//        return fn.call(context, ...rest.concat(args))
//    }
//}

//bind(info, person)('12345', 'm@gmail.com')
//bind(info, person, '12345')('m@gmail.com')
//bind(info, person, '12345', 'm@gmail.com')()

// Method Call
function call(fn, context, ...args) {
    const uniqId = Date.now().toString()

    context[uniqId] = fn
    
    const result = context[uniqId](...args)
    
    delete context[uniqId]
    
    return result
}

//call(info, person, '12345', 'm@gmail.com')

// Method Apply
function apply(fn, context, args) {
    const uniqId = Date.now().toString()

    context[uniqId] = fn
    
    const result = context[uniqId](...args)
    
    delete context[uniqId]
    
    return result
}

apply(info, person, ['12345', 'm@gmail.com'])