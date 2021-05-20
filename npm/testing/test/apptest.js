const { expect } = require("chai");
const assert=require("chai").assert;
const app=require("../app");
//var sayhello=require("../app").sayhello;
var addresult=app.add(5,5);

describe("testing app",()=>{
    describe("check",()=>{
        it("app should return hello",()=>{
            assert.equal(app.check(),"hello");
        });
    });
    
    describe("sayhello",()=>{
        it("it should return hello world",()=>{
            assert.equal(app.sayhello(),"hello world")
        })
        it("it should return string",()=>{
            assert.typeOf(app.sayhello(),'String')
        })
    })
    
    describe("add",()=>{
        it("it should return added number",()=>{
            assert.isAbove(addresult,5);
        })
        it("it should return number",()=>{
            assert.typeOf(addresult,"number")
        })
        it("it should return number",()=>{
            expect(addresult).to.be.eq(10)
        })
    })
    
})