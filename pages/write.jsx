import React from 'react';
import { useForm } from "react-hook-form";
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import Link from 'next/link';
import styled from "@emotion/styled";

const Back = styled.span`
background-color:#ff3300;
color:#fff;
padding:10px;
border-radius:3px;
text-decoration-line: none;
`;
const Register = styled.span`
background-color:#ff3300;
color:#fff;
padding:10px;
border-radius:3px;
text-decoration-line: none;
`;
const Reset = styled.span`
background-color:#ff3300;
color:#fff;
padding:10px;
border-radius:3px;
text-decoration: none;
`;

function Write() {
    // form validation rules 
    const validationSchema = Yup.object().shape({
        country: Yup.string()
        .required('country is required'),
        street: Yup.string()
        .required('street is required'),
        companyName: Yup.string()
            .required(' Company Name is required'),
        start_date: Yup.string()
            .required('Start date is required')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'start date must be a valid date in the format YYYY-MM-DD'),
        end_date: Yup.string()
            .required('End date is required')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'start date must be a valid date in the format YYYY-MM-DD'),
        covid_date: Yup.string()
        .required('Covid test date is required')
        .matches(/^\d{4}-(0[1-9]|1[012])-(0[1-9]|[12][0-9]|3[01])$/, 'start date must be a valid date in the format YYYY-MM-DD'),
        
    });
    const formOptions = { resolver: yupResolver(validationSchema) };

    // get functions to build form with useForm() hook
    const { register, handleSubmit, reset, formState } = useForm(formOptions);
    const { errors } = formState;

    function onSubmit(data) {
        // display form data on success
        alert('SUCCESS!! :-)\n\n' + JSON.stringify(data, null, 4));
        return false;
    }

    return (
        <div className="card m-3">
            <h5 className="card-header">Book your Ticket</h5>
            <div className="card-body">
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Country</label>
                            <select name="country" {...register('country')} className={`form-control ${errors.country ? 'is-invalid' : ''}`}>
                                <option value="">select country</option>
                                <option value="Mr">India</option>
                                <option value="Mrs">Australia</option>
                                <option value="Miss">USA</option>
                                <option value="Ms">UK</option>
                            </select>
                            <div className="invalid-feedback">{errors.country?.message}</div>
                            </div>
              
                            <div className="form-group col">
                            <label>Street</label>
                            <select name="street" {...register('street')} className={`form-control ${errors.street ? 'is-invalid' : ''}`}>
                                <option value=""></option>
                                <option value="Mr">India</option>
                                <option value="Mrs">Australia</option>
                                <option value="Miss">USA</option>
                                <option value="Ms">UK</option>
                            </select>
                            <div className="invalid-feedback">{errors.street?.message}</div>
                        </div>
                        <div className="form-group col-5">
                            <label>Company Name</label>
                            <input name="companyName" type="text" {...register('companyName')} className={`form-control ${errors.companyName ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.companyName?.message}</div>
                        </div>
                    <div className="form-row">
                        <div className="form-group col">
                            <label>Journey Start Date</label>
                            <input name="start_date" type="date" {...register('start_date')} className={`form-control ${errors.start_date ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.start_date?.message}</div>
                        </div>
                        <div className="form-group col">
                            <label>Journey End Date</label>
                            <input name="end_date" type="date" {...register('end_date')} className={`form-control ${errors.end_date ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.end_date?.message}</div>
                       </div>
                       <div className="form-group col">
                            <label>Covid Test Date</label>
                            <input name="covid_date" type="date" {...register('covid_date')} className={`form-control ${errors.covid_date ? 'is-invalid' : ''}`} />
                            <div className="invalid-feedback">{errors.covid_date?.message}</div>
                        </div>
                    </div>
                    </div>
                    <div className="form-group form-check">
                        <input name="acceptTerms" type="checkbox" {...register('acceptTerms')} id="acceptTerms" className={`form-check-input ${errors.acceptTerms ? 'is-invalid' : ''}`} />
                        <label htmlFor="acceptTerms" className="form-check-label">Accept Terms & Conditions</label>
                        <div className="invalid-feedback">{errors.acceptTerms?.message}</div>
                    </div>
                    <div className="form-group">
                        <button type="submit" className="btn btn-primary mr-1">Register</button>
                        <button type="button" onClick={() => reset()} className="btn btn-secondary">Reset</button>
                    </div>
                </form>
                
                <div className="back-to-home">
                <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                <Link href="/">
                <a className="back-home"><Back>Back To HomePage</Back></a>
                </Link></li></ul></div>
                </div>
        </div>
    )
}

export default Write;