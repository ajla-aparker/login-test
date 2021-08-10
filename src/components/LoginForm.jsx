import { Alert, Button, Fieldset, Form, Label, TextInput, ValidationItem } from '@trussworks/react-uswds';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import '@trussworks/react-uswds/lib/index.css'

const validationSchema = Yup.object().shape({
  email: Yup.string()
    .required('Email is required')
    .email('Email is invalid'),
  password: Yup.string()
    .required('Password is required')
});

const onSubmit = data => console.log(data);

const LoginForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm({
    resolver: yupResolver(validationSchema)
  });
  
  return (
    <div style={{"margin-left": "2em"}}>
      <Form onSubmit={handleSubmit(onSubmit)} large>
        <Fieldset legend="Sign In" legendStyle="large">
          <legend>
            Access your account
          </legend>
          {errors.email || errors.password ? <Alert type="info" validation heading="Form Requirements">
            { errors.email ? <ValidationItem id="uppercase" isValid={!errors.email}>
              <a href="#email">{errors.email?.message}</a>
            </ValidationItem> : undefined }
            { errors.password ? <ValidationItem id="numerical" isValid={!errors.password}>
              <a href="#password-sign-in">{errors.password?.message}</a>
            </ValidationItem> : undefined }
          </Alert> : undefined}
          <Label htmlFor="email">Email address</Label>
          <TextInput
            id="email"
            name="email"
            type="text"
            autoCapitalize="off"
            autoCorrect="off"
            error={errors.email}
            {...register('email')}
          />
          <small style={{ "color": "red" }}>{errors.email?.message}</small>
          <Label htmlFor="password-sign-in">Password</Label>
          <div>
            <TextInput
              id="password-sign-in"
              name="password-sign-in"
              type="password"
              error={errors.password}
              {...register('password')}
            />
            <small style={{ "color": "red" }}>{errors.password?.message}</small>
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
