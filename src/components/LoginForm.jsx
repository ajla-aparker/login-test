// TODO: Remove rule below once appropriate hrefs are added.
/* eslint-disable jsx-a11y/anchor-is-valid */
import { useEffect, useRef } from 'react';
import { Button, Fieldset, Form, Label } from '@trussworks/react-uswds';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import classnames from 'classnames';
import ValidationAlert from './ValidationAlert';
import './LoginForm.css';

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
});

const onSubmit = (data) => {
  console.log(data);
};

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });

  const alertRef = useRef(null);

  const classNames = classnames(
    'outline',
    'usa-input',
    {
      'usa-input--error': errors.email || errors.password,
    }
  )

  useEffect(() => {
    alertRef.current?.focus();
  }, [errors])
  
  return (
    <div style={{"marginLeft": "2em"}}>
      <Form onSubmit={handleSubmit(onSubmit)} large>
        <Fieldset legend="Sign In" legendStyle="large">
          <legend>
            Access your account
          </legend>
          <ValidationAlert errors={errors} ref={alertRef} />
          <Label htmlFor="email">Email address</Label>
          <input
            id="email"
            name="email"
            type="text"
            autoCapitalize="off"
            autoCorrect="off"
            className={classNames}
            style={{"outline": "0"}}
            {...register('email')}
          />
          <div>
            <small style={{ "color": "red" }}>{errors.email?.message}</small>
          </div>
          <Label htmlFor="password-sign-in">Password</Label>
          <div>
            <input
              id="password-sign-in"
              name="password-sign-in"
              type="password"
              className={classNames}
              {...register('password')}
            />
            <div>
              <small style={{ "color": "red" }}>{errors.password?.message}</small>
            </div>
            <p className="usa-form__note">
              <a
                title="Show password"
                href="#"
                className="usa-show-password"
                aria-controls="password-sign-in"
                onClick={() => {}}
              >
              </a>
            </p>
          </div>

          <Button type="submit">Sign in</Button>
          <p>
            <a href="#" title="Forgot password">
              Forgot password?
            </a>
          </p>
        </Fieldset>
      </Form>
    </div>
  )
}

export default LoginForm;
