describe("Account Feature",()=>{

    before("Run before all test case",()=>{
        console.log("BEFORE RUN FIRST")
    })

    it('should print out HelloWorld ',() => {
        console.log("Demo here")
    });

    it('should print out HelloWorld ',() => {
        console.log("Second Test")
    });

    after(function () {
        console.log("AFTER RUN FIRST")
    });
})