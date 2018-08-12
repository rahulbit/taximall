const express = require('express');
const router = express.Router();
const userController = require("./../../app/controllers/userController");
const appConfig = require("./../../config/appConfig")

module.exports.setRouter = (app) => {

    let baseUrl = `${appConfig.apiVersion}/users`;

     // route for  saving data into database
    app.post(`${baseUrl}/create`, userController.postData);

     /**
	 * @api {post} /api/v1/users/create Create employee data 
	 * @apiVersion 0.0.1
	 * @apiGroup create
	 *
	
	 * @apiParam {String} empName  of the employee passed as a body parameter
	 * @apiParam {String} deptname  of the employee passed as a body parameter
	 
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "Blog Created successfully",
	    "status": 200,
	    "data": [
					{
						empId: "string",
						empName: "string",
						deptName: "string",
						
					}
	    		]
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.,
	    "status": 500,
	    "data": null
	   }
	 */



   // route for  getting data by empId
    app.get(`${baseUrl}/Id/:empId`, userController.getDataByempId);

    /**
	 * @api {get} /api/v1/users/Id/:empId Get a employee  using empId
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 
	 * @apiParam {String} empId  should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "data Found Successfully.",
	    "status": 200,
	    "data": {
	    			
					empId: "string",
					empName: "string",
					deptName: "string",
					
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */



   
    //route for   getting data by deptname
    app.get(`${baseUrl}/Name/:deptName`, userController.getDataBydeptName)


    /**
	 * @api {get} /api/v1/users/Name/:deptName Get list of  employee of a particular department
	 * @apiVersion 0.0.1
	 * @apiGroup read
	 *
	 
	 * @apiParam {String} deptName  should be passed as the URL parameter
	 *
	 *  @apiSuccessExample {json} Success-Response:
	 *  {
	    "error": false,
	    "message": "data Found Successfully.",
	    "status": 200,
	    "data": {
	    			
					empId: "string",
					empName: "string",
					deptName: "string",
					
				}
	    	}
		}
	}
	  @apiErrorExample {json} Error-Response:
	 *
	 * {
	    "error": true,
	    "message": "Error Occured.",
	    "status": 500,
	    "data": null
	   }
	 */


  

}
