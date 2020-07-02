import React from "react";
import {isValidLogin} from "../api/login";

describe("validating the isValidLogin function with username and password",()=>{
    
    it("validating both username and passwords with empty values",()=>{
        const loginInfo={ login: "", password: "" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Username should be at least 5 characters"}); 
    })

    it("validating  with  username  of 4 characters and  password  with empty values",()=>{
        const loginInfo={ login: "demo", password: "" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Username should be at least 5 characters"});
       
    })
    
    it("validating  with  username  of 5 characters  with empty password",()=>{
        const loginInfo={ login: "demou", password: "" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Password should be at least 8 characters"});
        
    })

    it("validating  with  username  of above 5 characters  with empty password",()=>{
        const loginInfo={ login: "demouser", password: "" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Password should be at least 8 characters"});
        
    })

    it("validating  with  username  of above 5 characters and password should be 8 characters with smallcase missing",()=>{
        const loginInfo={ login: "demouser", password: "DEMO@123" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Password should contain one capital letter, one small letter, one number"});
        
    })
    it("validating  with  username  of above 5 characters and password should be 8 characters with uppercase missing",()=>{
        const loginInfo={ login: "demouser", password: "demo@123" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Password should contain one capital letter, one small letter, one number"});
        
    })
    it("validating  with  username  of above 5 characters and password should be 8 characters with number missing",()=>{
        const loginInfo={ login: "demouser", password: "demoDemo" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Password should contain one capital letter, one small letter, one number"});
        
    })
   
    it("validating username with valid length and  password of length lessthan 8 characters but should contain uppercase and lowercase and number ",()=>{
        const loginInfo={ login: "demouser", password: "Admin1" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Password should be at least 8 characters"});
        
    })

    it("validating username with valid length and password of 8 char long with uppercase, lowercase, number as chars but wrong credentails",()=>{
        const loginInfo={ login: "demouser", password: "DemoUser123" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:false,message:"Invalid Username and Password"});
        
    })

    it("validating username with valid length and password of 8 char long with uppercase, lowercase, number as chars (valid credentails)",()=>{
        const loginInfo={ login: "demouser", password: "Demo@123" };
        expect(isValidLogin(loginInfo)).toMatchObject({isValid:true,message:"Login Success"});
        
    })
})