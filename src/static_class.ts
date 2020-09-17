
class foo {
    static thing1 () { return 'hi' }
    static thing2 = 'hi'
}

class bar extends foo {
    static thing1 () { return 'bye' }
    static thing2 = 'bye'
}

console.log(foo.thing1())
console.log(foo.thing2)

console.log(bar.thing1())
console.log(bar.thing2)