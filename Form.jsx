import react, { useState } from "react";

export default function Form() {
  return (
    <form>
      <h1>Second Task:Form Data</h1>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputEmail4">Email</label>
          <input
            type="email"
            class="form-control"
            placeholder="Email"
          ></input>
        </div>
        <div class="form-group col-md-6">
          <label for="inputPassword4">Password</label>
          <input
            type="password"
            class="form-control"
            placeholder="Password"
          ></input>
        </div>
      </div>
      <div class="form-group col-md-6">
        <label for="inputAddress">Address</label>
        
         <textarea class="form-control" type="text" rows="3"></textarea>
      </div>
      <div class="form-row">
        <div class="form-group col-md-6">
          <label for="inputCity">City</label>
          <input type="text" class="form-control" id="inputCity"></input>
        </div>
        <div class="form-group col-md-4">
          <label for="inputState">State</label>
          <select id="inputState" class="form-control">
            <option selected>Choose...</option>
            <option></option>
          </select>
        </div>
        <div class="form-group col-md-2">
          <label for="inputZip">Zip</label>
          <input type="text" class="form-control" id="inputZip"></input>
        </div>
      </div>
      <div class="form-group">
        <div class="form-check">
          <input
            class="form-check-input"
            type="checkbox"
            id="gridCheck"
          ></input>
          <label class="form-check-label" for="gridCheck">
            Check me out
          </label>
        </div>
      </div>
      <button type="submit" class="btn btn-primary">
        Sign in
      </button>
    </form>
  );
}
