const expect=require("chai").expect;
const request=require("supertest");

const test=require("../../nodejs/views/ass3");

describe("testing database connection assignment",()=>
{
    it("ok, testing new connection",(done)=>{
        request(test).post("/inventory")
        .send({name:"apple",quantity:50})
        .then((res)=>{
            const body=res.body;
            expect(body).to.contain.property("_id");
            done();
        })
        .catch((err)=>{
            console.log(err);
            throw err;
        })
    })
})