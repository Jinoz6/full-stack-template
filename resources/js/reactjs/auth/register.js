import React from 'react'
import { createRoot } from 'react-dom/client'


const Register = () => { 
    

  return (
    <>
          <main className='main-content mt-0 ps'>
            <div className='page-header align-items-start min-vh-100'>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-12 mx-auto">
                        <div class="card card-plain">
                            <div class="card-header">
                              <h4 class="font-weight-bolder text-center">Sign Up</h4>
                              <p class="mb-0 text-center">Enter your email and password to register</p>
                            </div>
                            <div class="card-body">
                              <form role="form">
                                <div class="input-group input-group-outline mb-3">
                                  <label class="form-label">Name</label>
                                  <input type="text" class="form-control" onfocus="focused(this)" onfocusout="defocused(this)"/>
                                </div>
                                <div class="input-group input-group-outline mb-3">
                                  <label class="form-label">Email</label>
                                  <input type="email" class="form-control" onfocus="focused(this)" onfocusout="defocused(this)"/>
                                </div>
                                <div class="input-group input-group-outline mb-3">
                                  <label class="form-label">Password</label>
                                  <input type="password" class="form-control" onfocus="focused(this)" onfocusout="defocused(this)"/>
                                </div>
                                {/* <div class="form-check form-check-info text-start ps-0">
                                  <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" checked=""/>
                                  <label class="form-check-label" for="flexCheckDefault">
                                    I agree the <a href="javascript:;" class="text-dark font-weight-bolder">Terms and Conditions</a>
                                  </label>
                                </div> */}
                                <div class="text-center">
                                  <button type="button" class="btn bg-gradient-primary shadow w-100 mt-4 mb-0">Sign Up</button>
                                </div>
                              </form>
                            </div>
                            <div class="card-footer text-center pt-0 px-lg-2 px-1">
                              <p class="mb-2 text-sm mx-auto">
                                Already have an account?
                                <a href="login" class="text-primary text-gradient font-weight-bold"> Sign in</a>
                              </p>
                            </div>
                          </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
  
    </>
  )
  }

const root = createRoot(document.getElementById('register'));
root.render(<Register />);