const { calculateService } = require("../service/DefaultService");

describe("should calculate properly due to the caculation header" , () => {
  it("shouold calculate 5*2 to be 10", () => {
    const result = calculateService({first_num:5,second_num:2}, '*')
    expect(result).toBe(10)
  })
  it("shouold calculate 5+2 to be 7", () => {
    const result = calculateService({first_num:5,second_num:2}, '+')
    expect(result).toBe(7)
  })
  it("shouold calculate 5-2 to be 3", () => {
    const result = calculateService({first_num:5,second_num:2}, '-')
    expect(result).toBe(3)
  })
  it("shouold calculate 5/2 to be 2.5", () => {
    const result = calculateService({first_num:5,second_num:2}, '/')
    expect(result).toBe(2.5)
  })
})

