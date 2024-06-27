import { useEffect, useState } from 'react';
import { FormProvider, useForm } from 'react-hook-form';
import styled from 'styled-components';
import toast from 'react-hot-toast';

import Button from '../../components/Button';
import FormRow from '../../components/FormRow';
import Heading from '../../components/Heading';
import Input from '../../components/Input';
import RadioInput from '../../components/RadioInput';
import Row from '../../components/Row';
import RadioRow from '../../components/RadioRow';
import SpinnerMini from '../../components/SpinnerMini';
import FileUploader from '../../components/FileUploader';
import { Form } from '../../components/Form';

import { fetchToken, fetchPositions, registerUser } from '../../api/apiService';

const SuccessImage = styled.img`
  max-width: 328px;
  align-self: center;
`;

function SignUp({ updateUserList }) {
  const methods = useForm({ mode: 'onChange' });
  const [positions, setPositions] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [selectedPositionId, setSelectedPositionId] = useState(null);
  const [avatar, setAvatar] = useState(null);
  const [token, setToken] = useState(null);
  const [isRegistered, setIsRegistered] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
    reset,
    trigger,
  } = methods;

  const getTokenAndPositions = async () => {
    setIsLoading(true);
    try {
      const token = await fetchToken();
      setToken(token);

      const positionsData = await fetchPositions();
      setPositions(positionsData.positions);
    } catch (error) {
      console.error('Error fetching data:', error);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getTokenAndPositions();
  }, []);

  const onSubmit = async (formData) => {
    setIsLoading(true);
    try {
      const newUser = {
        ...formData,
        photo: avatar,
        position_id: selectedPositionId,
      };
      const response = await registerUser(newUser, token);
      console.log('User registered successfully:', response);
      reset();
      setIsRegistered(true);
      updateUserList();
    } catch (error) {
      toast.error(error.message);
    } finally {
      setIsLoading(false);
    }
  };

  const handlePositionChange = (id) => {
    setSelectedPositionId(id);
    trigger('position_id');
  };

  return (
    <Row id='signup-form' className='media'>
      {isRegistered ? (
        <Row>
          <Heading as='h1'>User successfully registered</Heading>
          <SuccessImage src={'./success-image.svg'} alt='success-img' />
        </Row>
      ) : (
        <>
          <Heading as='h1'>Working with POST request</Heading>
          <FormProvider {...methods}>
            <Form onSubmit={handleSubmit(onSubmit)}>
              <FormRow
                name='name'
                error={errors?.name}
                label='Name'
                helperText='A username must consist of 2 to 60 characters.'
              >
                <Input
                  $error={errors?.name}
                  type='text'
                  placeholder='Your name'
                  {...register('name', {
                    required: 'Name is required',
                    minLength: {
                      value: 2,
                      message: 'Name must be at least 2 characters',
                    },
                    maxLength: {
                      value: 60,
                      message: 'Name must not exceed 60 characters',
                    },
                  })}
                  disabled={isLoading}
                />
              </FormRow>
              <FormRow
                name='email'
                error={errors?.email}
                label='Email'
                helperText='Email must be valid and between 6 - 100 chars.'
              >
                <Input
                  $error={errors?.email}
                  type='text'
                  placeholder='Email'
                  {...register('email', {
                    required: 'Email is required',
                    minLength: {
                      value: 6,
                      message: 'Email must be at least 6 characters',
                    },
                    maxLength: {
                      value: 100,
                      message: 'Email must not exceed 100 characters',
                    },
                    pattern: {
                      value:
                        /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
                      message: 'Invalid email address',
                    },
                  })}
                  disabled={isLoading}
                />
              </FormRow>
              <FormRow
                name='phone'
                error={errors?.phone}
                label='Phone'
                helperText='Phone must start with +380 and be 12 digits.'
              >
                <Input
                  $error={errors?.phone}
                  type='text'
                  placeholder='Phone'
                  {...register('phone', {
                    required: 'Phone is required',
                    pattern: {
                      value: /^\+380\d{9}$/,
                      message: 'Phone must start with +380 and be 12 digits',
                    },
                  })}
                  disabled={isLoading}
                />
              </FormRow>

              <FormRow>
                <p>Select your position</p>
                {positions?.map((pos) => (
                  <RadioRow key={pos.id} label={pos.name}>
                    <RadioInput
                      name='position_id'
                      type='radio'
                      id={`position-${pos.id}`}
                      value={pos.id}
                      {...register('position_id', {
                        required: 'Position is required',
                      })}
                      onChange={() => handlePositionChange(pos.id)}
                      checked={selectedPositionId === pos.id}
                      disabled={isLoading}
                    />
                  </RadioRow>
                ))}
              </FormRow>

              <FormRow error={errors?.photo}>
                <FileUploader avatar={avatar} error={errors?.photo}>
                  <input
                    type='file'
                    id='file-input'
                    accept='.jpeg, .jpg'
                    {...register('photo', {
                      required: 'Your photo is required',
                      validate: (value) => {
                        const acceptedFormats = ['jpg', 'jpeg'];
                        const maxSizeInMb = 5;
                        const maxSizeInBytes = maxSizeInMb * 1024 * 1024;
                        const fileExtension = value[0]?.name
                          .split('.')
                          .pop()
                          .toLowerCase();
                        if (!acceptedFormats.includes(fileExtension)) {
                          return 'Invalid file format. Only JPG & JPEG files are allowed.';
                        }
                        if (value[0].size > maxSizeInBytes) {
                          return `The photo size must not be greater than ${maxSizeInMb} Mb.`;
                        }
                        setAvatar(value[0]);
                        return true;
                      },
                    })}
                    disabled={isLoading}
                  />
                </FileUploader>
              </FormRow>
              <FormRow>
                <Button
                  $variation={isValid ? 'primary' : 'secondary'}
                  type='submit'
                  disabled={!isValid || isLoading}
                >
                  {isLoading ? <SpinnerMini /> : 'Sign up'}
                </Button>
              </FormRow>
            </Form>
          </FormProvider>
        </>
      )}
    </Row>
  );
}

export default SignUp;
