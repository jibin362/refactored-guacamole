import React from 'react';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';
import { useModalStore } from '../stores/modalStore';
import { useUserStore } from '../stores/userStore';

const RegisterSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Name is required'),
  email: Yup.string().email('Invalid email').required('Email is required'),
  gender: Yup.mixed()
    .oneOf(['male', 'female', 'other'])
    .required('Gender is required'),
  status: Yup.mixed()
    .oneOf(['active', 'inactive'])
    .required('Status is required')
});

function AddUserForm() {
  const { toggleShow } = useModalStore((state) => state);
  const { addUserFetch } = useUserStore((state) => state);

  return (
    <Formik
      initialValues={{
        name: '',
        email: '',
        gender: 'male',
        status: 'active'
      }}
      validationSchema={RegisterSchema}
      onSubmit={async (values, { setSubmitting }) => {
        setSubmitting(true);
        await addUserFetch(values);
        toggleShow();
      }}
    >
      {({ errors, touched, isSubmitting }) => (
        <Form>
          <div className="overflow-hidden">
            <div className="bg-white px-4 py-5 sm:p-6">
              <div className="grid grid-cols-12 gap-6">
                <div className="col-span-12">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Name
                  </label>
                  <Field
                    type="text"
                    name="name"
                    id="name"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black text-lg px-1"
                  />
                  {errors.name && touched.name ? (
                    <div className="text-red-500">{errors.name}</div>
                  ) : null}
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Email
                  </label>
                  <Field
                    type="email"
                    name="email"
                    id="email"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black text-lg px-1"
                  />
                  {errors.email && touched.email ? (
                    <div className="text-red-500">{errors.email}</div>
                  ) : null}
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Gender
                  </label>
                  <Field
                    as="select"
                    name="gender"
                    id="gender"
                    className="mt-1 block w-full rounded-md border-gray-300 shadow-sm focus:border-black focus:ring-black text-lg px-1"
                  >
                    <option value="male">Male</option>
                    <option value="female">Female</option>
                  </Field>
                </div>
                <div className="col-span-12">
                  <label
                    htmlFor="name"
                    className="block text-lg font-medium text-gray-700"
                  >
                    Status
                  </label>
                  <div className="flex mt-4">
                    <div className="flex items-center">
                      <Field
                        id="push-everything"
                        name="status"
                        type="radio"
                        value="active"
                        className="h-4 w-4 bg-white border-gray-300 text-black checked:bg-black  focus:ring-black"
                      />
                      <label
                        htmlFor="push-everything"
                        className="mx-3 block text-sm font-medium text-gray-700"
                      >
                        Active
                      </label>
                    </div>
                    <div className="flex items-center">
                      <Field
                        id="push-email"
                        name="status"
                        type="radio"
                        value="inactive"
                        className="h-4 w-4 bg-white border-gray-300 text-black checked:bg-black  focus:ring-black"
                      />
                      <label
                        htmlFor="push-email"
                        className="mx-3 block text-sm font-medium text-gray-700"
                      >
                        Inactive
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
              <button
                type="submit"
                className="w-full inline-flex justify-center rounded-3xl border border-transparent bg-yellow-custom py-2 px-4 text-lg font-bold shadow-sm hover:bg-amber-400 focus:outline-none focus:ring-2 focus:ring-amber-400 focus:ring-offset-2 disabled:cursor-not-allowed"
                disabled={isSubmitting}
              >
                {isSubmitting ? 'Submitting...' : 'Save'}
              </button>
            </div>
          </div>
        </Form>
      )}
    </Formik>
  );
}

export default AddUserForm;
