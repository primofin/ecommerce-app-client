import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { Formik, Field, Form, FormikHelpers, FieldArray } from 'formik'

import { AppState } from '../../types'
import { updateUserProfile } from '../../redux/actions/user'
import './addProductForm.scss'

type Values = {
  productName: string
  price: number
  images: string[]
  description: string
  category: string
  variants: string[]
  size: string | number
}
type Params = {
  userId: string
}
const AddProductForm = () => {
  const { userId } = useParams<Params>()
  const dispatch = useDispatch()
  const user = useSelector((state: AppState) => state.auth.user)
  const isLoggedIn = useSelector((state: AppState) => state.auth.isLoggedIn)

  return (
    <div className="">
      <div className="form__title add-product__form__title">
        add new product
      </div>
      {isLoggedIn && (
        <Formik
          initialValues={{
            productName: '',
            price: 0,
            images: [''],
            description: '',
            category: '',
            variants: [''],
            size: '',
          }}
          //   onSubmit={async (
          //     values,
          //     { setSubmitting }: FormikHelpers<Values>
          //   ) => {
          //     const {
          //       productName,
          //       price,
          //       images,
          //       description,
          //       category,
          //       variants,
          //       size,
          //     } = values
          //     // dispatch(updateUserProfile(userId, email, firstName, lastName))
          //     // alert('Your profile is updated')
          //     // setSubmitting(false)
          //   }}
          onSubmit={(values, { setSubmitting }: FormikHelpers<Values>) => {
            setTimeout(() => {
              alert(JSON.stringify(values, null, 2))
              setSubmitting(false)
            }, 500)
          }}
        >
          {({ isSubmitting, values }) => (
            <Form className="form__content add-product__form__content">
              <label htmlFor="productName" className="form__content__label">
                *Name:
              </label>
              <Field
                required
                id="productName"
                placeholder="V-neck shirt"
                name="productName"
                className="form__content__input"
              />
              <label htmlFor="price" className="form__content__label">
                *Price <span>(e)</span>:
              </label>
              <Field
                required
                type="number"
                id="price"
                name="price"
                className="form__content__input"
              />
              <label className="form__content__label">*Images (links):</label>
              <FieldArray name="images">
                {({ insert, remove, push }) => (
                  <div>
                    {values.images.length > 0 &&
                      values.images.map((image, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            {/* <label htmlFor={`friends.${index}`}>Name</label> */}
                            <Field
                              required
                              name={`images.${index}`}
                              placeholder="https://imgur.com/O4osup3"
                              type="text"
                            />
                          </div>
                          <div className="col">
                            <button type="button" onClick={() => remove(index)}>
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button type="button" onClick={() => push('')}>
                      Add link
                    </button>
                  </div>
                )}
              </FieldArray>
              <label htmlFor="description" className="form__content__label">
                Description:
              </label>
              <Field
                id="description"
                name="description"
                className="form__content__input"
              />
              <label htmlFor="category" className="form__content__label">
                *Category:
              </label>
              <Field
                required
                id="category"
                name="category"
                className="form__content__input"
              />
              <label htmlFor="variants" className="form__content__label">
                Variants:
              </label>
              <FieldArray name="variants">
                {({ insert, remove, push }) => (
                  <div>
                    {values.variants.length > 0 &&
                      values.variants.map((variant, index) => (
                        <div className="row" key={index}>
                          <div className="col">
                            {/* <label htmlFor={`friends.${index}`}>Name</label> */}
                            <Field
                              name={`variants.${index}`}
                              placeholder="cotton"
                              type="text"
                            />
                          </div>
                          <div className="col">
                            <button type="button" onClick={() => remove(index)}>
                              X
                            </button>
                          </div>
                        </div>
                      ))}
                    <button type="button" onClick={() => push('')}>
                      Add variant
                    </button>
                  </div>
                )}
              </FieldArray>
              <label htmlFor="size" className="form__content__label">
                *Size:
              </label>
              <Field
                required
                id="size"
                name="size"
                className="form__content__input"
              />
              <button
                type="submit"
                className="form__content__submit-btn"
                disabled={isSubmitting}
              >
                Add
              </button>
            </Form>
          )}
        </Formik>
      )}
    </div>
  )
}

export default AddProductForm
