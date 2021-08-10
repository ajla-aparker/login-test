import { Alert, Button, Fieldset, Form, Label, TextInput, ValidationChecklist, ValidationItem } from '@trussworks/react-uswds';
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
    <Form onSubmit={handleSubmit(onSubmit)} large>
      <Fieldset legend="Sign In" legendStyle="large">
        <span>
          or <a href="#">create an account</a>
        </span>
        {errors.email || errors.password ? <Alert type="info" validation heading="Form Requirements">
          { errors.email ? <ValidationItem id="uppercase" isValid={!errors.email}>
            {errors.email?.message}
          </ValidationItem> : undefined }
          { errors.password ? <ValidationItem id="numerical" isValid={!errors.password}>
            {errors.password?.message}
          </ValidationItem> : undefined }
        </Alert> : undefined}
        <Label htmlFor="email">Email address</Label>
        <TextInput
          id="email"
          name="email"
          type="text"
          autoCapitalize="off"
          autoCorrect="off"
          {...register('email')}
        />
        <Label htmlFor="password-sign-in">Password</Label>
        <TextInput
          id="password-sign-in"
          name="password-sign-in"
          type="password"
          {...register('password')}
        />
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

        <Button type="submit">Sign in</Button>
        <p>
          <a href="#" title="Forgot username">
            Forgot username?
          </a>
        </p>
        <p>
          <a href="#" title="Forgot password">
            Forgot password?
          </a>
        </p>
      </Fieldset>
    </Form>
  )
}

export default LoginForm;
