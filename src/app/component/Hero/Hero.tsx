import { missingProperties } from '@/lib/utils'
import { UsersLeadsSchema } from '@/lib/validators/user.schema';
import { Button, Checkbox, Input, Typography } from '@material-tailwind/react'
import { useFormik } from 'formik';
import Image from 'next/image'
import React from 'react'

export default function Hero() {
  const formik = useFormik({
    initialValues: {
      full_name: '',
      email: '',
      consent: false
    },
    validationSchema: UsersLeadsSchema,
    onSubmit: async (values) => {
      try {
        const res = await fetch('/api/leads/add', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({ ...values }),
        });

        if (!res.ok) {
          // Handle error
          throw new Error('Failed to create user');
        }

        const leads = await res.json();

        // Optionally, reset the form
        if (leads) {
          formik.resetForm();
        }

        // Optionally, update the UI or notify the user
        alert(`User ${leads.name} created successfully!`);
      } catch (error) {
        console.error('Error creating user:', error);
      }

    },
  });
  return (
    <div className='flex flex-col sm:flex-row justify-center items-start   mt-24'>
      <div className='flex flex-col gap-5 max-w-sm px-5 sm:px-10 items-center text-center'>
        <div className='flex flex-col gap-3'>
          <span className='text-6xl text-gray-text'>FlowSpark</span>
          <span className='text-gray-main'>DIGITAL MARKETING SOLUTIONS</span>
        </div>
        <p className='text-gray-text'>We believe that marketing shouldn’t be a headache, so we’ve crafted a  platform that’s super easy to use but doesn’t skimp on the powerful  stuff.</p>
        <Image width={300} height={300} src={"/assets/img/Illustration.png"} alt="Illustration.png" />
      </div>
      <div className='px-5 sm:px-10 w-full'> 
        <form onSubmit={formik.handleSubmit} className="mt-8 mb-2  max-w-screen-lg w-full sm:w-96">
          <div className="mb-1 flex flex-col gap-6">

            <div>
              <Typography variant="h6" className=" text-gray-main font-normal">
                Full Name
              </Typography>
              <Input
                size="lg"
                placeholder="full name"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="full_name"
                value={formik.values.full_name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.full_name && formik.errors.full_name ? true : undefined}

              />
              <small className='text-red-400'>{formik.errors.full_name}</small>
            </div>
            <div>
              <Typography variant="h6" className=" text-gray-main font-normal">
                Your Email
              </Typography>
              <Input
                size="lg"
                placeholder="name@mail.com"
                className=" !border-t-blue-gray-200 focus:!border-t-gray-900"
                labelProps={{
                  className: "before:content-none after:content-none",
                }}
                name="email"
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                error={formik.touched.email && formik.errors.email ? true : undefined}
              />
              <small className='text-red-400'>{formik.errors.email}</small>
            </div>

            <div className='flex'>
              <Checkbox
                name="consent"
                checked={formik.values.consent}
                onChange={(event) =>
                  formik.setFieldValue('consent', event.target.checked)
                }
                className='border-primary-main border-2 checked:bg-primary-main checked:border-primary-main'
                containerProps={{ className: "-ml-2.5" }}
              />
              <Typography
                variant="small"
                className="text-neutral-600"
              >
                I consent to my details being processed in line with the .
                <a
                  href="#"
                  className="underline"
                >
                  &nbsp;privacy policy
                </a>
              </Typography>
            </div>
            <div className='flex flex-col gap-2'>
              <div className='flex items-center  gap-5'>
                <Button type="submit" size='lg' {...missingProperties} className={"bg-primary-main rounded-full text-white buttonClasses capitalize"}>
                  Book your demo
                </Button>
                <Button size='lg' {...missingProperties} className={"bg-primary-light border border-primary-main text-primary-text rounded-full  buttonClasses capitalize"}>
                  Start a free trial
                </Button>
              </div>
              <span className='text-blue-gray-400 text-sm'>Free 14-day trial. Cancel anytime.</span>
            </div>
            <div>

            </div>
          </div>
        </form>
      </div>
    </div>
  )
}
