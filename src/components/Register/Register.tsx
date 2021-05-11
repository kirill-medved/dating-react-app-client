import React from 'react';
import { useFormik } from 'formik';
import * as yup from 'yup';
import { useHistory } from 'react-router';
import Button from '@material-ui/core/Button';
import TextField from '@material-ui/core/TextField';
import IconButton from '@material-ui/core/IconButton';
import LockOpenIcon from '@material-ui/icons/LockOpen';
import RadioGroup from '@material-ui/core/RadioGroup';
import Radio from '@material-ui/core/Radio';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import FormLabel from '@material-ui/core/FormLabel';
import register from './Register.module.css';

const validationSchema = yup.object({
  email: yup
    .string()
    .email('Enter a valid email')
    .required('Email is required'),
  password: yup
    .string()
    .min(8, 'Password should be of minimum 8 characters length')
    .required('Password is required'),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref('password'), null], 'Passwords must match'),
  sex: yup.string().required('A radio option is required'),
  search: yup.string().required('A radio option is required'),
});

interface Values {
  email: string;
  password: string;
  confirmPassword: string;
  sex: string;
  search: string;
}

const Register = () => {
  const history = useHistory();

  const routeChange = () => {
    const path = `login`;
    history.push(path);
  };

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      confirmPassword: '',
      sex: '',
      search: '',
    },
    validationSchema: validationSchema,
    onSubmit: (values: Values) => {
      alert(JSON.stringify(values, null, 2));
    },
  });

  return (
    <div className={register.wrapper}>
      <div className={register.form_wrapper}>
        <form onSubmit={formik.handleSubmit}>
          <TextField
            fullWidth
            id='email'
            name='email'
            label='Email'
            margin='dense'
            value={formik.values.email}
            onChange={formik.handleChange}
            error={formik.touched.email && Boolean(formik.errors.email)}
            helperText={formik.touched.email && formik.errors.email}
          />
          <TextField
            fullWidth
            id='password'
            name='password'
            label='Password'
            type='password'
            margin='dense'
            value={formik.values.password}
            onChange={formik.handleChange}
            error={formik.touched.password && Boolean(formik.errors.password)}
            helperText={formik.touched.password && formik.errors.password}
          />
          <TextField
            fullWidth
            id='confirmPassword'
            name='confirmPassword'
            label='Confirm Password'
            type='password'
            margin='dense'
            value={formik.values.confirmPassword}
            onChange={formik.handleChange}
            error={
              formik.touched.confirmPassword &&
              Boolean(formik.errors.confirmPassword)
            }
            helperText={
              formik.touched.confirmPassword && formik.errors.confirmPassword
            }
          />
          <FormLabel component='legend'>Gender</FormLabel>
          <RadioGroup
            aria-label='gender'
            name='sex'
            value={formik.values.sex}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
          </RadioGroup>
          <FormLabel component='legend'>Search</FormLabel>
          <RadioGroup
            aria-label='search'
            name='search'
            value={formik.values.search}
            onChange={formik.handleChange}
          >
            <FormControlLabel
              value='female'
              control={<Radio />}
              label='Female'
            />
            <FormControlLabel value='male' control={<Radio />} label='Male' />
            <FormControlLabel value='all' control={<Radio />} label='All' />
          </RadioGroup>
          <Button color='primary' variant='contained' fullWidth type='submit'>
            Submit
          </Button>
        </form>
        <div className={register.signIn}>
          <IconButton onClick={routeChange}>
            <h3>Already registered?! Sign In</h3>
            <LockOpenIcon fontSize='large' />
          </IconButton>
        </div>
      </div>
    </div>
  );
};

export default Register;
