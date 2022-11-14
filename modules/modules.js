const sayHi =  require("./singleexport")
const { john, peter } =  require("./multiexport")

sayHi(john)
sayHi(peter)