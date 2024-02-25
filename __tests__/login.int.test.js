const { setAuthCookie } = require("../service/DefaultService")
const jwt = require('jsonwebtoken');


describe("check auth service", () => {
    it("should give the cookieToken", () => {
        const response = setAuthCookie("Almog")
        const decoded = jwt.verify(response, "mySecret");
        expect(decoded.username).toBe("Almog")
        expect(decoded.exp-decoded.iat).toBe(300)
    })
})