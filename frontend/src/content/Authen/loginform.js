import * as Yup from 'yup';
import { useState, useEffect } from 'react';
import NextLink from 'next/link'
import { useFormik, Form, FormikProvider } from 'formik';
import { useTheme } from '@mui/material/styles';
import { Icon } from '@iconify/react';
import eyeFill from '@iconify/icons-eva/eye-fill';
import eyeOffFill from '@iconify/icons-eva/eye-off-fill';
// material
import { Link, Stack, Alert, Checkbox, TextField, IconButton, InputAdornment, FormControlLabel, Typography, Box, useMediaQuery } from '@mui/material';
import { LoadingButton } from '@mui/lab';

//Router
import Router from 'next/router';

//Axios
import axios from 'Axios';

//nookies
import { parseCookies, setCookie, destroyCookie } from 'nookies'

// ----------------------------------------------------------------------

export default function LoginForm() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false)


  const LoginSchema = Yup.object().shape({
    username: Yup.string().trim().required('Please insert Username'),
    password: Yup.string().trim().required('Please insert password')
  });

  const formik = useFormik({
    initialValues: {
      username: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      setHasError(false)

      await axios.post(process.env.NEXT_PUBLIC_API_URL + '/users/login',
        {
          users_username: values.username,
          users_password: values.password
        },
        {
          headers: {
            'Content-Type': 'application/json'
          }
        })
        .then(function (response) {

          setCookie(null, 'token', response.data.result.token, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, 'user', response.data.result.username, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setCookie(null, '_id', response.data.result.uuid, {
            maxAge: 30 * 24 * 60 * 60,
            path: '/',
          })
          setHasError(false)
          Router.push('/dashboards/')
        })
        .catch(function (error) {
          console.log(error)
          setHasError(true)
        });
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (

    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ minWidth: 400 }}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
          {hasError ? <Alert severity="error">
            Username or Password is invalid!
          </Alert> : null}
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="username"
            {...getFieldProps('username')}
            error={Boolean(touched.username && errors.username)}
            helperText={touched.username && errors.username}
          />

          <TextField
            fullWidth
            autoComplete="current-password"
            type={showPassword ? 'text' : 'password'}
            label="password"
            {...getFieldProps('password')}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={handleShowPassword} edge="end">
                    <Icon icon={showPassword ? eyeFill : eyeOffFill} />
                  </IconButton>
                </InputAdornment>
              )
            }}
            error={Boolean(touched.password && errors.password)}
            helperText={touched.password && errors.password}
          />
          <Typography variant="body14pxW700" color="text.disabled" sx={{ paddingBottom: 3 }}>
            Usename : admin / password : admin123
          </Typography>
        </Stack>



        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>

      </Form>
    </FormikProvider>
  );
}