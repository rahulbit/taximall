const mongoose = require('mongoose');
const shortid = require('shortid');

const response = require('./../libs/responseLib')
const logger = require('./../libs/loggerLib');

const check = require('../libs/checkLib')

/* Models */
const UserModel = mongoose.model('User')


// start  postData function 

let postData = (req, res) => {

  if(check.isEmpty(req.body.empName)|| check.isEmpty(req.body.deptName))
  {
      let apiresponse = response.generate(true, 'required parameters are missing', 404, null)
      res.send(apiresponse)
  }

  else {
        let newData = new UserModel({
              empId :shortid.generate(),
              empName : req.body.empName,
              deptName: req.body.deptName
        })

        newData.save((err, result)=>{
            if(err)
            {
                 logger.error(`error occured ${err}`, database, 10)
                let apiresponse = response.generate(true, 'error occured', 500, null)
                res.send(apiresponse)
            }
            else{
               
                let apiresponse = response.generate(false, 'data added ', 200, result)
                res.send(apiresponse)
            }
        })
  }

  

}// end  postData function 

// start of getDataByempId function 

let getDataByempId = (req, res) => {
    
if(check.isEmpty(req.params.empId))
{
    let apiresponse =  response.generate(true, 'empId is missing',403, null)
}

else {
    UserModel.findOne({'empId':req.params.empId}, (err, result)=>{
        if(err)
        {
             logger.error(`error occured ${err}`, database, 10)
            let apiresponse = response.generate(true, 'error occured', 500, null)
            res.send(apiresponse)
        }

       

        else {

            let apiresponse = response.generate(false , 'data found succesfully', 200, result)
            res.send(apiresponse)
        }
    })
}

    
}//end of getDataByempId  function

// start  of getDataBydeptName function

let getDataBydeptName = (req, res)=>{

    if(check.isEmpty(req.params.deptName))
    {
        let apiresponse = response.generate(true, 'required paramerer  is missing', 403, null)
        res.send(apiresponse)
    }

    else {
        UserModel.find({'deptName':req.params.deptName},(err, result)=>{

            if(err)
            {
                logger.error(`error occured ${err}`, database , 10)
                let apiresponse = response.generate(true, 'some  error occured', 500, null)
                res.send(apiresponse)
            }
            

            else {
                let apiresponse = response.generate(false , 'data found succesfully', 200, result)
                res.send(apiresponse)
            }

        })
    }

}


// end of the getDataBydeptName function 




module.exports = {

   postData:postData,
   getDataBydeptName:getDataBydeptName,
   getDataByempId:getDataByempId

}// end exports