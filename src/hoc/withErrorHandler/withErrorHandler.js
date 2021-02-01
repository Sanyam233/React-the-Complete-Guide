import React, { Component, Fragment } from 'react'
import Modal from '../../components/Modal/Modal'


const withErrorHandler = (WrappedComponent, axios) => {

    return class WithErrorHandler extends Component{

        constructor(props) {
            super(props);

            this.state = {
                error : null
            }

            this.reqInterceptor = axios.interceptors.request.use(req => {
                this.setState({
                    error : null
                })

                return req;
            })

            this.resInterceptor = axios.interceptors.response.use(res => res, err =>{
                this.setState({
                    error : err,
                })

            })

        }


        componentWillUnmount(){
            console.log("Will Unmount", this.reqInterceptor, this.resInterceptor)
            axios.interceptors.request.eject(this.reqInterceptor)
            axios.interceptors.request.eject(this.resInterceptor)

        }


        errorDisplayHandler = () => {
            this.setState({ 
                error : null
            })

        }

        render(){
            return(<Fragment>
                {this.state.error ? <Modal clicked = {this.errorDisplayHandler}>
                    {this.state.error.message}
                </Modal> : null}
                <WrappedComponent {...this.props}/>
            </Fragment>);
        }
    }
}

export default withErrorHandler;