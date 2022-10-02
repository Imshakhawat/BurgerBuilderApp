import {React,useState, useContext} from "react";
import { useForm } from "react-hook-form";
import "../css/customer.css";
import { useHistory,useLocation } from "react-router-dom";


const Customer = (props) => {
  //const {data} = useParams(props);
  const data = useLocation().state.data;
  console.log(data);

  const history = useHistory();
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();


  const onSubmit = (data) => {
    console.log(data);

  
    
    history.push({pathname:"/BurgerPage", state:{data:data}});
    


  }


  return (
    <div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="heading">
            <h1>Delivery Details</h1>
          </div>

          <div className="inputs text-start">
            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Name</label>
              </div>

              <input
                type={"text"}
                {...register("name")}
                placeholder="Enter customer name please"
                maxLength={32}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Phone</label>
              </div>

              <input
                type={"text"}
                defaultValue={"+88"}
                {...register("number")}
                placeholder="Type your Phone no here"
                maxLength={11}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Email</label>
              </div>

              <input
                type={"email"}
                {...register("email", { required: true })}
                placeholder="Enter a valid mail address"
              />
              {errors.exampleRequired && <span>This field is required</span>}
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Delivery Address</label>
              </div>

              <input
                className="address"
                type={"text"}
                {...register("address")}
                placeholder="Enter delivery address here"
              />
            </div>
          </div>

          <input className="button" type="submit" />
        </form>
      </div>
    </div>
  );
};

export default Customer;
