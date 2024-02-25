"use strict";
const jwt = require("jsonwebtoken");
const { cookieSecret } = require("../config/config");

const users = [
  {
    username: "Almog",
    password: "Almog123!@#",
  },
  {
    username: "Omer",
    password: "Omer2456!@#",
  },
];


/**
 * Receives two numbers and performs a mathematical calculation on them
 *
 * body Calculate_body
 * xCalculationMethod String Specifies the method of calculation to be used
 * returns inline_response_200
 **/
const calculatePOST = function (body, xCalculationMethod) {
  return new Promise(function (resolve, reject) {
      const result = calculateService(body, xCalculationMethod)
      resolve({result});
  });
};



const calculateService = ({ first_num, second_num }, calculationMethod) => {
  let result;
  switch (calculationMethod) {
    case "+":
      result = first_num + second_num;
      break;
    case "-":
      result = first_num - second_num;
      break;
    case "*":
      result = first_num * second_num;
      break;
    case "/":
      result = first_num / second_num;
      break;
    default:
      return;
  }
  return result;
};

/**
 * enter username and password to gain the auth token
 *
 * body Login_body
 * no response value expected for this operation
 **/
const setAuthCookie = (username) => {
  try {
    const created = Date.now();
    // creating the token
    const cookieToken = jwt.sign(
      {
        username,
        created,
      },
      cookieSecret,
      { expiresIn: "5m" }
    );
    return cookieToken;
  } catch (e) {
    console.error(e);
    throw e;
  }
};


const loginPOST = function (body) {
  return new Promise(function (resolve, reject) {
    try{
      const user = users.find(
        (u) => u.username === body.username && u.password === body.password
      );
      const cookieToken = setAuthCookie(user.username);
      resolve(cookieToken);
    } catch(e){
      console.error(e)
      throw e
    }
  });
};




module.exports = {calculateService, setAuthCookie, loginPOST, calculatePOST}