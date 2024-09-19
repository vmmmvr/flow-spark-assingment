import React, { useState } from "react";
import {
  Button,
  Dialog,
  DialogHeader,
  DialogBody,
  DialogFooter,
  IconButton,
  Typography,
  Checkbox,
  Input,
  Menu,
  MenuHandler,
  MenuList,
  Textarea,
  MenuItem,
  Chip
} from "@material-tailwind/react";
import { useCountries } from "use-react-countries";

import { missingProperties } from "@/lib/utils";
import CustomDatePicker from "./datePicker";
import { useFormik } from "formik";
import { UsersBookingsSchema } from "@/lib/validators/user.schema";

export function ScheduleAcallDialog({ open, onClose }: { open: boolean, onClose: () => void }) {
  const [selectedTime, setselectedTime] = useState(0);
  const { countries } = useCountries();
  const [country, setCountry] = React.useState(12);
  const { name, flags, countryCallingCode } = countries[country];

  const timeList = [
    "9:00 AM",
    "10:00 AM",
    "11:00 AM",
    "12:00 AM",
    "1:00 PM",
    "2:00 PM",
    "3:00 PM",
    "4:00 PM",
    "5:00 PM",
    "6:00 PM",
  ]

  const formik = useFormik({
    initialValues: {
      full_name: '',
      email: '',
      phone_number: '',
      date: '',
      time: timeList[0],
      note: '',
      consent: false
    },
    validationSchema: UsersBookingsSchema,
    onSubmit: async (values) => {
      try {
        const res = await fetch('/api/bookings/add', {
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
  
        const newUser = await res.json();
          
        // Optionally, reset the form
        if(newUser) {
          formik.resetForm();
        }
  
        // Optionally, update the UI or notify the user
        alert(`User ${newUser.name} created successfully!`);
      } catch (error) {
        console.error('Error creating user:', error);
      }
      
    },
  });

  return (
    <>
      <Dialog size="lg" className="" {...missingProperties} open={open} handler={onClose}>
        <DialogHeader className="flex justify-between" {...missingProperties} >
           <span className="font-semibold text-sm md:text-lg">Schedule a call at a time that suits you</span> 
           <IconButton onClick={onClose} style={{ background: "#E1A474" }} {...missingProperties}><i className="fa-solid fa-x"></i></IconButton> </DialogHeader>
        <DialogBody className="h-[42rem] sm:h-full overflow-scroll sm:overflow-auto"   {...missingProperties} >
          <div className="flex flex-col">
            <div className="flex flex-col sm:flex-row justify-center gap-5">
              <CustomDatePicker dateSetter={(value: any) => formik.setFieldValue('date', value) } />
              <div>
                <span>Select a time</span>

                <div className="flex items-end gap-2 overflow-wrap flex-wrap max-w-sm w-full  ">
                  {
                    timeList.map((item, index) => (
                      <Chip size="lg" onClick={() => (setselectedTime(index),   formik.setFieldValue('time', timeList[index]))} key={item} value={item} className={`hover:cursor-pointer bg-white text-center px-6 py-5 rounded-full ${selectedTime === index ? "bg-primary-main text-white" : "border border-primary-main text-primary-dark"}`} />

                    ))
                  }
                </div>
              </div>

            </div>
            <form onSubmit={formik.handleSubmit} className="mt-8 mb-2 w-full bg-primary-light py-5 rounded-lg p-8">
              <div className="mb-1  w-full flex flex-col sm:flex-row gap-6">
                <div className="flex w-full flex-col  justify-between gap-3">
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
                  <div>
                    <Typography variant="h6" className=" text-gray-main font-normal">
                      Phone Number
                    </Typography>
                    <div className="relative flex w-full overflow-hidden sm:overflow-visible sm:max-w-[24rem]">
                      <Menu placement="bottom-start">
                        <MenuHandler>
                          <Button
                            ripple={false}
                            variant="text"
                            color="blue-gray"
                            className="flex h-10 items-center gap-2 rounded-r-none border border-r-0 border-blue-gray-200 bg-blue-gray-500/10 pl-3"
                          >
                            <img
                              src={flags.svg}
                              alt={name}
                              className="h-4 w-4 rounded-full object-cover"
                            />
                            {countryCallingCode}
                          </Button>
                        </MenuHandler>
                        <MenuList className="max-h-[20rem] max-w-[18rem] z-[10000]">
                          {countries.map(({ name, flags, countryCallingCode }, index) => {
                            return (
                              <MenuItem
                                key={name}
                                value={name}
                                className="flex items-center gap-2"
                                onClick={() => setCountry(index)}
                              >
                                <img
                                  src={flags.svg}
                                  alt={name}
                                  className="h-5 w-5 rounded-full object-cover"
                                />
                                {name} <span className="ml-auto">{countryCallingCode}</span>
                              </MenuItem>
                            );
                          })}
                        </MenuList>
                      </Menu>
                      <div className="flex flex-col w-full">
                      <Input
                        type="number"
                        placeholder="Mobile Number"
                        className="rounded-l-none w-full !border-t-blue-gray-200 focus:!border-t-gray-900"
                        labelProps={{
                          className: "before:content-none after:content-none",
                        }}
                        containerProps={{
                          className: "min-w-0",
                        }}
                        name="phone_number"
                        value={formik.values.phone_number}
                        onChange={formik.handleChange}
                        onBlur={formik.handleBlur}
                        error={formik.touched.phone_number && formik.errors.phone_number ? true : undefined}
                      />
                        <small className='text-red-400'>{formik.errors.phone_number}</small>
                      </div>
                    </div>
                  </div>
                </div>


                <div className='flex w-full flex-col gap-2'>
                  <div>
                    <Typography variant="h6" className=" text-gray-main font-normal">
                      Call notes
                    </Typography>
                    <Textarea

                      name="note"
                      value={formik.values.note}
                      onChange={formik.handleChange}
                      onBlur={formik.handleBlur}
                      error={formik.touched.note && formik.errors.note ? true : undefined} />
                    <small className='text-red-400'>{formik.errors.note}</small>
                  </div>
                  <div className='flex items-center'>
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
                  {formik.touched.consent && formik.errors.consent ? (
                  <div className="text-red-500">{formik.errors.consent}</div>
                ) : null}
                  <div className='flex items-center  gap-5'>
                    <Button type="submit" size='lg' {...missingProperties} className={"bg-primary-main rounded-full text-white buttonClasses capitalize"}>
                      Scheduel my call
                    </Button>
                  </div>
                </div>
                <div>

                </div>
              </div>
            </form>
          </div>
        </DialogBody>

      </Dialog>
    </>
  );
}