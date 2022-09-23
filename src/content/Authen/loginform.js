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

// ----------------------------------------------------------------------

export default function LoginForm() {
  const theme = useTheme();
  const isDesktop = useMediaQuery(theme.breakpoints.up('md'));
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'));

  const [showPassword, setShowPassword] = useState(false);
  const [hasError, setHasError] = useState(false)


  const LoginSchema = Yup.object().shape({
    email: Yup.string().required('Please insert Username'),
    password: Yup.string().required('Please insert password')
  });

  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
      remember: true
    },
    validationSchema: LoginSchema,
    onSubmit: async (values, { setErrors, setSubmitting, resetForm }) => {
      setHasError(false)
      if(values.email === "demo" && values.password === "demo1234")
      {
        setHasError(false)
        Router.push('/dashboards/')

      } else {
        setHasError(true)

      }
    }
  });

  const { errors, touched, values, isSubmitting, handleSubmit, getFieldProps } = formik;

  const handleShowPassword = () => {
    setShowPassword((show) => !show);
  };

  return (

    <FormikProvider value={formik}>
      <Form autoComplete="off" noValidate onSubmit={handleSubmit}>
        <Stack spacing={3} sx={{ minWidth: 400}}>
          {errors.afterSubmit && <Alert severity="error">{errors.afterSubmit}</Alert>}
          {hasError ? <Alert severity="error">
            Username or Password is invalid!
          </Alert> : null}
          <TextField
            fullWidth
            autoComplete="username"
            type="text"
            label="username"
            {...getFieldProps('email')}
            error={Boolean(touched.email && errors.email)}
            helperText={touched.email && errors.email}
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
            <Typography  variant="body14pxW700" color="text.disabled" sx={{ paddingBottom: 3}}>
                 Usename : demo / password : demo1234
              </Typography>
        </Stack>

       

        <LoadingButton fullWidth size="large" type="submit" variant="contained" loading={isSubmitting}>
          Login
        </LoadingButton>

      </Form>
    </FormikProvider>
  );
}