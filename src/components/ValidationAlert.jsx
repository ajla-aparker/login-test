import { forwardRef } from 'react';
import { Alert, ValidationItem } from '@trussworks/react-uswds';
import './LoginForm.css'

const ValidationAlert = (props, ref) => {
  return(
    <div>
      { props.errors.email || props.errors.password ?
        (
          <Alert type="info" validation heading="Form Requirements">
            { props.errors.email ? <ValidationItem id="uppercase" isValid={!props.errors.email}>
              <a className='outline' href="#email" ref={ref}>{props.errors.email?.message}</a>
            </ValidationItem> : undefined }
            { props.errors.password ? <ValidationItem id="numerical" isValid={!props.errors.password}>
              <a className='outline' href="#password-sign-in" ref={props.errors.email ? undefined : ref}>{props.errors.password?.message}</a>
            </ValidationItem> : undefined }
          </Alert>
        ) : undefined}
    </div>
  )
};

export default forwardRef(ValidationAlert);
