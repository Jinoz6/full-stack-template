import React from 'react'
import { createRoot } from 'react-dom/client'


const Login = () => {    

    
  return (
    <>
    <div className='container-justify'>    
        <main className='main-content mt-0 ps'>
            <div className='page-header align-items-start min-vh-100'>
                <div className="container my-auto">
                    <div className="row">
                        <div className="col-lg-4 col-md-8 col-12 mx-auto">
                            <div className="card z-index-0 fadeIn3 fadeInBottom">
                                <div className="card-header p-0 position-relative mt-n4 mx-3 z-index-2">
                                    <div className="bg-gradient-primary shadow border-radius-lg py-3 pe-1">
                                        <h4 className="text-white font-weight-bolder text-center mt-2 mb-0">Lao - Asean Hospital</h4>
                                        <div className="row mt-3">
                                            <div className="col-2 text-center ms-auto">
                                            <a className="btn btn-link px-3">
                                                <i className="fa fa-facebook text-white text-lg" aria-hidden="true"></i>
                                            </a>
                                            </div>
                                            <div className="col-2 text-center px-1">
                                            <a className="btn btn-link px-3" >
                                                <i className="fa fa-github text-white text-lg" aria-hidden="true"></i>
                                            </a>
                                            </div>
                                            <div className="col-2 text-center me-auto">
                                            <a className="btn btn-link px-3" >
                                                <i className="fa fa-google text-white text-lg" aria-hidden="true"></i>
                                            </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="card-body">
                                    <form role="form" className="text-start">
                                    <div className="input-group input-group-outline my-3">                                        
                                        <input type="email" className="form-control" placeholder='Email'/>
                                    </div>
                                    <div className="input-group input-group-outline mb-3">                                        
                                        <input type="password" className="form-control" placeholder='Password'/>
                                    </div>                                    
                                    <div className="text-center">
                                        <button type="button" className="btn bg-gradient-primary shadow w-100 my-4 mb-2">Sign in</button>
                                    </div>
                                    <p className="mt-4 text-sm text-center">
                                        Don't have an account?
                                        <a href="register" className="text-primary text-gradient font-weight-bold"> Sign up</a>
                                    </p>
                                    </form>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>        
    </div>
    </>
  )
  }

const root = createRoot(document.getElementById('login'));
root.render(<Login />);