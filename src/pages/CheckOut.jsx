import { React } from "react";
import { useForm } from "react-hook-form";
import "../css/customer.css";
import {  useLocation } from "react-router-dom";



const CheckOut = () => {
    
    const data = useLocation().state.data;
    const price = useLocation().state.price;
    console.log(data);

  const {
    handleSubmit,
  } = useForm();
  

  const onSubmit = (data) => {
   //send data
  };


  return (
    <div>
      <div className="container">
        <form className="form" onSubmit={handleSubmit(onSubmit)}>
          <div className="heading">
            <h1>CHECK OUT</h1>
          </div>

          <div className="inputs text-start">
            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Name</label>
              </div>
              <input type={"text"} disabled defaultValue={data.name} />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Phone</label>
              </div>
              <input type={"text"} disabled value={data.number} />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Email</label>
              </div>
              <input type={"email"} disabled value={data.email} />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Delivery Address</label>
              </div>
              <input
                className="address"
                type={"text"}
                disabled
                value={data.address}
              />
            </div>

            <div className="label">
              <div className="heading">
                <label className="fieldlabels">Total Price</label>
              </div>
              <input type={"text"} disabled value={price + " TK Only"} />
            </div>
          </div>

          <input className="button" type="submit" value={"CHECK OUT"} />
        </form>
      </div>
    </div>
  );
};

export default CheckOut;
